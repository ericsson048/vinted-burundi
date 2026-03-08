from __future__ import annotations

from fastapi import Depends, FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from .database import Base, SessionLocal, engine, get_db
from .entities import AuthUserEntity
from .models import (
    AuthLoginRequest,
    AuthRegisterRequest,
    AuthTokenResponse,
    AuthUserPublic,
    AdminSettingsResponse,
    DashboardResponse,
    ModerationDecisionPatch,
    ModerationListResponse,
    ModerationStatus,
    Product,
    ProductListResponse,
    TransactionsResponse,
    User,
    UserListResponse,
    UsersSummary,
    UserStatus,
    UserStatusPatch,
)
from .repository import PostgresRepository
from .security import create_access_token, get_current_user, require_admin, verify_password, hash_password
from .seed import seed_database_if_empty
from .settings import get_settings

app = FastAPI(
    title="Vinted Burundi API",
    version="1.0.0",
    description="FastAPI backend for the Vinted Burundi frontend.",
)

settings = get_settings()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup() -> None:
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        seed_database_if_empty(db)
    finally:
        db.close()


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/auth/register", response_model=AuthTokenResponse)
def auth_register(payload: AuthRegisterRequest, db: Session = Depends(get_db)) -> AuthTokenResponse:
    email = payload.email.lower().strip()
    existing = db.query(AuthUserEntity).filter(AuthUserEntity.email == email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    entity = AuthUserEntity(
        full_name=payload.full_name.strip(),
        email=email,
        password_hash=hash_password(payload.password),
        is_admin=False,
    )
    db.add(entity)
    db.commit()
    db.refresh(entity)
    token = create_access_token(entity.id)
    return AuthTokenResponse(access_token=token, user=AuthUserPublic.model_validate(entity, from_attributes=True))


@app.post("/api/auth/login", response_model=AuthTokenResponse)
def auth_login(payload: AuthLoginRequest, db: Session = Depends(get_db)) -> AuthTokenResponse:
    email = payload.email.lower().strip()
    entity = db.query(AuthUserEntity).filter(AuthUserEntity.email == email).first()
    if not entity or not verify_password(payload.password, entity.password_hash):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token(entity.id)
    return AuthTokenResponse(access_token=token, user=AuthUserPublic.model_validate(entity, from_attributes=True))


@app.get("/api/auth/me", response_model=AuthUserPublic)
def auth_me(current_user: AuthUserPublic = Depends(get_current_user)) -> AuthUserPublic:
    return current_user


@app.get("/api/catalog/products", response_model=ProductListResponse)
def list_products(
    search: str | None = None,
    category: str | None = None,
    size: str | None = None,
    brand: str | None = None,
    condition: str | None = None,
    min_price: float | None = Query(default=None, ge=0),
    max_price: float | None = Query(default=None, ge=0),
    sort: str = Query(default="newest", pattern="^(newest|price_asc|price_desc)$"),
    page: int = Query(default=1, ge=1),
    page_size: int = Query(default=12, ge=1, le=100),
    db: Session = Depends(get_db),
) -> ProductListResponse:
    repo = PostgresRepository(db)
    return repo.list_products(
        search=search,
        category=category,
        size=size,
        brand=brand,
        condition=condition,
        min_price=min_price,
        max_price=max_price,
        sort=sort,
        page=page,
        page_size=page_size,
    )


@app.get("/api/home/new-arrivals", response_model=list[Product])
def home_new_arrivals(
    limit: int = Query(default=12, ge=1, le=48),
    db: Session = Depends(get_db),
) -> list[Product]:
    repo = PostgresRepository(db)
    return repo.list_home_new_arrivals(limit=limit)


@app.get("/api/catalog/products/{product_id}", response_model=Product)
def get_product(product_id: int, db: Session = Depends(get_db)) -> Product:
    repo = PostgresRepository(db)
    product = repo.get_product(product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


@app.get("/api/catalog/products/{product_id}/related", response_model=list[Product])
def related_products(
    product_id: int,
    limit: int = Query(default=4, ge=1, le=20),
    db: Session = Depends(get_db),
) -> list[Product]:
    repo = PostgresRepository(db)
    product = repo.get_product(product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return repo.list_related_products(product_id, limit=limit)


@app.get("/api/catalog/filters")
def catalog_filters(db: Session = Depends(get_db)) -> dict[str, list[str]]:
    repo = PostgresRepository(db)
    return repo.catalog_filters()


@app.get("/api/admin/dashboard", response_model=DashboardResponse)
def admin_dashboard(
    db: Session = Depends(get_db),
    _: AuthUserPublic = Depends(require_admin),
) -> DashboardResponse:
    repo = PostgresRepository(db)
    return repo.get_dashboard()


@app.get("/api/admin/listings", response_model=ProductListResponse)
def admin_listings(
    search: str | None = None,
    page: int = Query(default=1, ge=1),
    page_size: int = Query(default=20, ge=1, le=100),
    db: Session = Depends(get_db),
    _: AuthUserPublic = Depends(require_admin),
) -> ProductListResponse:
    repo = PostgresRepository(db)
    return repo.list_admin_listings(search=search, page=page, page_size=page_size)


@app.get("/api/admin/transactions", response_model=TransactionsResponse)
def admin_transactions(
    page: int = Query(default=1, ge=1),
    page_size: int = Query(default=20, ge=1, le=100),
    db: Session = Depends(get_db),
    _: AuthUserPublic = Depends(require_admin),
) -> TransactionsResponse:
    repo = PostgresRepository(db)
    return repo.list_transactions(page=page, page_size=page_size)


@app.get("/api/admin/settings", response_model=AdminSettingsResponse)
def admin_settings(
    db: Session = Depends(get_db),
    _: AuthUserPublic = Depends(require_admin),
) -> AdminSettingsResponse:
    repo = PostgresRepository(db)
    return repo.admin_settings(
        email_host=settings.EMAIL_HOST,
        email_port=settings.EMAIL_PORT,
        email_use_tls=settings.EMAIL_USE_TLS,
        default_from_email=settings.DEFAULT_FROM_EMAIL,
        stripe_configured=bool(settings.STRIPE_PUBLISHABLE_KEY and settings.STRIPE_SECRET_KEY),
        email_configured=bool(settings.EMAIL_HOST_USER and settings.EMAIL_HOST_PASSWORD and settings.EMAIL_HOST),
    )


@app.get("/api/admin/users", response_model=UserListResponse)
def admin_users(
    search: str | None = None,
    status: UserStatus | None = None,
    page: int = Query(default=1, ge=1),
    page_size: int = Query(default=20, ge=1, le=100),
    db: Session = Depends(get_db),
    _: AuthUserPublic = Depends(require_admin),
) -> UserListResponse:
    repo = PostgresRepository(db)
    return repo.list_users(search=search, status=status, page=page, page_size=page_size)


@app.get("/api/admin/users/summary", response_model=UsersSummary)
def admin_users_summary(
    db: Session = Depends(get_db),
    _: AuthUserPublic = Depends(require_admin),
) -> UsersSummary:
    repo = PostgresRepository(db)
    return repo.users_summary()


@app.patch("/api/admin/users/{user_id}/status", response_model=User)
def admin_user_status(
    user_id: int,
    payload: UserStatusPatch,
    db: Session = Depends(get_db),
    _: AuthUserPublic = Depends(require_admin),
) -> User:
    repo = PostgresRepository(db)
    updated = repo.update_user_status(user_id, payload.status)
    if not updated:
        raise HTTPException(status_code=404, detail="User not found")
    return updated


@app.get("/api/admin/moderation/listings", response_model=ModerationListResponse)
def moderation_listings(
    status: ModerationStatus | None = None,
    page: int = Query(default=1, ge=1),
    page_size: int = Query(default=12, ge=1, le=100),
    db: Session = Depends(get_db),
    _: AuthUserPublic = Depends(require_admin),
) -> ModerationListResponse:
    repo = PostgresRepository(db)
    return repo.list_moderation_items(status=status, page=page, page_size=page_size)


@app.get("/api/admin/moderation/stats")
def moderation_stats(
    db: Session = Depends(get_db),
    _: AuthUserPublic = Depends(require_admin),
) -> dict[str, int]:
    repo = PostgresRepository(db)
    return repo.moderation_stats()


@app.patch("/api/admin/moderation/listings/{moderation_id}")
def moderate_listing(
    moderation_id: int,
    payload: ModerationDecisionPatch,
    db: Session = Depends(get_db),
    _: AuthUserPublic = Depends(require_admin),
) -> dict[str, object]:
    repo = PostgresRepository(db)
    item = repo.moderate_listing(moderation_id, payload.decision)
    if not item:
        raise HTTPException(status_code=404, detail="Moderation item not found")
    return {"item": item, "stats": repo.moderation_stats()}

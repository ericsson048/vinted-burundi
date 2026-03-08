from __future__ import annotations

from math import ceil
from datetime import datetime, timedelta, timezone
from typing import TypeVar

from sqlalchemy import String, asc, desc, func, or_, select
from sqlalchemy.orm import Session

from .entities import (
    DashboardOrderEntity,
    ModerationItemEntity,
    ProductEntity,
    UserEntity,
)
from .models import (
    AdminSettingsResponse,
    DashboardGrowthPoint,
    DashboardOrder,
    DashboardResponse,
    DashboardStats,
    ModerationItem,
    ModerationListResponse,
    ModerationStatus,
    Pagination,
    Product,
    ProductListResponse,
    TransactionsResponse,
    User,
    UserListResponse,
    UsersSummary,
    UserStatus,
)

T = TypeVar("T")


def _paginate(items: list[T], page: int, page_size: int) -> tuple[list[T], Pagination]:
    total = len(items)
    total_pages = max(1, ceil(total / page_size)) if total else 1
    current_page = min(max(page, 1), total_pages)
    start = (current_page - 1) * page_size
    end = start + page_size
    sliced = items[start:end]
    return (
        sliced,
        Pagination(page=current_page, page_size=page_size, total=total, total_pages=total_pages),
    )


class PostgresRepository:
    def __init__(self, db: Session) -> None:
        self.db = db

    @staticmethod
    def _to_product(entity: ProductEntity) -> Product:
        return Product.model_validate(entity, from_attributes=True)

    @staticmethod
    def _to_user(entity: UserEntity) -> User:
        return User.model_validate(entity, from_attributes=True)

    @staticmethod
    def _to_moderation(entity: ModerationItemEntity) -> ModerationItem:
        return ModerationItem.model_validate(entity, from_attributes=True)

    def list_home_new_arrivals(self, limit: int = 12) -> list[Product]:
        entities = (
            self.db.execute(select(ProductEntity).order_by(desc(ProductEntity.created_at)).limit(limit))
            .scalars()
            .all()
        )
        return [self._to_product(e) for e in entities]

    def list_products(
        self,
        *,
        search: str | None,
        category: str | None,
        size: str | None,
        brand: str | None,
        condition: str | None,
        min_price: float | None,
        max_price: float | None,
        sort: str,
        page: int,
        page_size: int,
    ) -> ProductListResponse:
        q = select(ProductEntity)
        if search:
            like = f"%{search.strip()}%"
            q = q.where(
                or_(
                    ProductEntity.title.ilike(like),
                    ProductEntity.brand.ilike(like),
                    ProductEntity.seller_username.ilike(like),
                )
            )
        if category:
            q = q.where(ProductEntity.category == category)
        if size:
            q = q.where(func.lower(ProductEntity.size) == size.lower())
        if brand:
            q = q.where(func.lower(ProductEntity.brand) == brand.lower())
        if condition:
            q = q.where(ProductEntity.condition == condition)
        if min_price is not None:
            q = q.where(ProductEntity.price >= min_price)
        if max_price is not None:
            q = q.where(ProductEntity.price <= max_price)

        if sort == "price_asc":
            q = q.order_by(asc(ProductEntity.price))
        elif sort == "price_desc":
            q = q.order_by(desc(ProductEntity.price))
        else:
            q = q.order_by(desc(ProductEntity.created_at))

        entities = self.db.execute(q).scalars().all()
        items, pagination = _paginate([self._to_product(e) for e in entities], page, page_size)
        return ProductListResponse(items=items, pagination=pagination)

    def list_admin_listings(
        self,
        *,
        search: str | None,
        page: int,
        page_size: int,
    ) -> ProductListResponse:
        q = select(ProductEntity).order_by(desc(ProductEntity.created_at))
        if search:
            like = f"%{search.strip()}%"
            q = q.where(
                or_(
                    ProductEntity.title.ilike(like),
                    ProductEntity.brand.ilike(like),
                    ProductEntity.seller_username.ilike(like),
                )
            )
        entities = self.db.execute(q).scalars().all()
        items, pagination = _paginate([self._to_product(e) for e in entities], page, page_size)
        return ProductListResponse(items=items, pagination=pagination)

    def get_product(self, product_id: int) -> Product | None:
        entity = self.db.get(ProductEntity, product_id)
        if not entity:
            return None
        return self._to_product(entity)

    def list_related_products(self, product_id: int, limit: int = 4) -> list[Product]:
        product = self.db.get(ProductEntity, product_id)
        if not product:
            return []

        same_category = (
            self.db.execute(
                select(ProductEntity)
                .where(ProductEntity.id != product_id, ProductEntity.category == product.category)
                .order_by(desc(ProductEntity.created_at))
                .limit(limit)
            )
            .scalars()
            .all()
        )
        if len(same_category) >= limit:
            return [self._to_product(e) for e in same_category]

        remainder = limit - len(same_category)
        fallback = (
            self.db.execute(
                select(ProductEntity)
                .where(ProductEntity.id != product_id, ProductEntity.category != product.category)
                .order_by(desc(ProductEntity.created_at))
                .limit(remainder)
            )
            .scalars()
            .all()
        )
        return [self._to_product(e) for e in [*same_category, *fallback]]

    def catalog_filters(self) -> dict[str, list[str]]:
        categories = [x[0] for x in self.db.execute(select(ProductEntity.category).distinct().order_by(ProductEntity.category)).all()]
        sizes = [x[0] for x in self.db.execute(select(ProductEntity.size).distinct().order_by(ProductEntity.size)).all()]
        brands = [x[0] for x in self.db.execute(select(ProductEntity.brand).distinct().order_by(ProductEntity.brand)).all()]
        conditions = [x[0] for x in self.db.execute(select(ProductEntity.condition).distinct().order_by(ProductEntity.condition)).all()]
        return {"categories": categories, "sizes": sizes, "brands": brands, "conditions": conditions}

    def get_dashboard(self) -> DashboardResponse:
        now = datetime.now(timezone.utc)
        month_start = datetime(now.year, now.month, 1, tzinfo=timezone.utc)
        prev_month_end = month_start - timedelta(seconds=1)
        prev_month_start = datetime(prev_month_end.year, prev_month_end.month, 1, tzinfo=timezone.utc)

        total_sales = self.db.scalar(select(func.coalesce(func.sum(DashboardOrderEntity.amount), 0.0))) or 0.0
        current_month_sales = (
            self.db.scalar(select(func.coalesce(func.sum(DashboardOrderEntity.amount), 0.0)).where(DashboardOrderEntity.created_at >= month_start))
            or 0.0
        )
        prev_month_sales = (
            self.db.scalar(
                select(func.coalesce(func.sum(DashboardOrderEntity.amount), 0.0)).where(
                    DashboardOrderEntity.created_at >= prev_month_start,
                    DashboardOrderEntity.created_at <= prev_month_end,
                )
            )
            or 0.0
        )

        new_users = self.db.scalar(select(func.count(UserEntity.id)).where(UserEntity.join_date >= month_start)) or 0
        prev_month_users = (
            self.db.scalar(
                select(func.count(UserEntity.id)).where(
                    UserEntity.join_date >= prev_month_start,
                    UserEntity.join_date <= prev_month_end,
                )
            )
            or 0
        )

        active_listings = self.db.scalar(select(func.count(ProductEntity.id))) or 0
        created_this_month = self.db.scalar(select(func.count(ProductEntity.id)).where(ProductEntity.created_at >= month_start)) or 0
        created_prev_month = (
            self.db.scalar(
                select(func.count(ProductEntity.id)).where(
                    ProductEntity.created_at >= prev_month_start,
                    ProductEntity.created_at <= prev_month_end,
                )
            )
            or 0
        )

        def growth_pct(current: float, previous: float) -> float:
            if previous <= 0:
                return 0.0 if current <= 0 else 100.0
            return round(((current - previous) / previous) * 100, 2)

        recent_orders_entities = (
            self.db.execute(select(DashboardOrderEntity).order_by(desc(DashboardOrderEntity.created_at)).limit(10))
            .scalars()
            .all()
        )

        growth_points: list[DashboardGrowthPoint] = []
        for i in range(6, -1, -1):
            day = (now - timedelta(days=i)).date()
            day_start = datetime(day.year, day.month, day.day, tzinfo=timezone.utc)
            day_end = day_start + timedelta(days=1)
            revenue = (
                self.db.scalar(
                    select(func.coalesce(func.sum(DashboardOrderEntity.amount), 0.0)).where(
                        DashboardOrderEntity.created_at >= day_start,
                        DashboardOrderEntity.created_at < day_end,
                    )
                )
                or 0.0
            )
            growth_points.append(DashboardGrowthPoint(label=day.strftime("%a"), revenue=float(revenue)))

        return DashboardResponse(
            stats=DashboardStats(
                total_sales=float(total_sales),
                total_sales_growth_pct=growth_pct(float(current_month_sales), float(prev_month_sales)),
                new_users=int(new_users),
                new_users_growth_pct=growth_pct(float(new_users), float(prev_month_users)),
                active_listings=int(active_listings),
                active_listings_growth_pct=growth_pct(float(created_this_month), float(created_prev_month)),
            ),
            growth=growth_points,
            recent_orders=[DashboardOrder.model_validate(o, from_attributes=True) for o in recent_orders_entities],
        )

    def list_transactions(self, page: int, page_size: int) -> TransactionsResponse:
        entities = self.db.execute(select(DashboardOrderEntity).order_by(desc(DashboardOrderEntity.created_at))).scalars().all()
        items, pagination = _paginate(
            [DashboardOrder.model_validate(o, from_attributes=True) for o in entities],
            page,
            page_size,
        )
        return TransactionsResponse(items=items, pagination=pagination)

    def admin_settings(
        self,
        *,
        email_host: str | None,
        email_port: int,
        email_use_tls: bool,
        default_from_email: str | None,
        stripe_configured: bool,
        email_configured: bool,
    ) -> AdminSettingsResponse:
        return AdminSettingsResponse(
            stripe_configured=stripe_configured,
            email_configured=email_configured,
            default_from_email=default_from_email,
            email_host=email_host,
            email_port=email_port,
            email_use_tls=email_use_tls,
        )

    def list_users(
        self,
        *,
        search: str | None,
        status: UserStatus | None,
        page: int,
        page_size: int,
    ) -> UserListResponse:
        q = select(UserEntity)
        if search:
            like = f"%{search.strip()}%"
            q = q.where(or_(UserEntity.name.ilike(like), UserEntity.email.ilike(like), func.cast(UserEntity.id, String).ilike(like)))
        if status:
            q = q.where(UserEntity.status == status)
        q = q.order_by(desc(UserEntity.join_date))
        entities = self.db.execute(q).scalars().all()
        items, pagination = _paginate([self._to_user(e) for e in entities], page, page_size)
        return UserListResponse(items=items, pagination=pagination)

    def update_user_status(self, user_id: int, new_status: UserStatus) -> User | None:
        entity = self.db.get(UserEntity, user_id)
        if not entity:
            return None
        entity.status = new_status
        self.db.commit()
        self.db.refresh(entity)
        return self._to_user(entity)

    def users_summary(self) -> UsersSummary:
        now = datetime.now(timezone.utc)
        month_start = datetime(now.year, now.month, 1, tzinfo=timezone.utc)

        total = self.db.scalar(select(func.count(UserEntity.id))) or 0
        active = self.db.scalar(select(func.count(UserEntity.id)).where(UserEntity.status == UserStatus.active)) or 0
        banned = self.db.scalar(select(func.count(UserEntity.id)).where(UserEntity.status == UserStatus.banned)) or 0
        new_this_month = self.db.scalar(select(func.count(UserEntity.id)).where(UserEntity.join_date >= month_start)) or 0
        return UsersSummary(total=total, active=active, banned=banned, new_this_month=new_this_month)

    def list_moderation_items(
        self,
        *,
        status: ModerationStatus | None,
        page: int,
        page_size: int,
    ) -> ModerationListResponse:
        q = select(ModerationItemEntity)
        if status:
            q = q.where(ModerationItemEntity.status == status)
        q = q.order_by(desc(ModerationItemEntity.submitted_at))
        entities = self.db.execute(q).scalars().all()
        items, pagination = _paginate([self._to_moderation(e) for e in entities], page, page_size)
        return ModerationListResponse(items=items, pagination=pagination)

    def moderation_stats(self) -> dict[str, int]:
        counts = dict(
            self.db.execute(
                select(ModerationItemEntity.status, func.count(ModerationItemEntity.id)).group_by(ModerationItemEntity.status)
            ).all()
        )
        return {
            "pending": counts.get(ModerationStatus.pending, 0),
            "flagged": counts.get(ModerationStatus.flagged, 0),
            "approved": counts.get(ModerationStatus.approved, 0),
            "rejected": counts.get(ModerationStatus.rejected, 0),
        }

    def moderate_listing(self, moderation_id: int, decision: str) -> ModerationItem | None:
        entity = self.db.get(ModerationItemEntity, moderation_id)
        if not entity:
            return None
        entity.status = ModerationStatus.approved if decision == "approve" else ModerationStatus.rejected
        self.db.commit()
        self.db.refresh(entity)
        return self._to_moderation(entity)

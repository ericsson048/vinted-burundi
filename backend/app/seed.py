from __future__ import annotations

from sqlalchemy.orm import Session

from .data import seed_moderation_items, seed_products, seed_users
from .entities import (
    AuthUserEntity,
    ModerationItemEntity,
    ProductEntity,
    UserEntity,
)
from .security import hash_password
from .settings import get_settings


def seed_database_if_empty(db: Session) -> None:
    settings = get_settings()

    if db.query(AuthUserEntity).count() == 0:
        db.add(
            AuthUserEntity(
                full_name=settings.ADMIN_FULL_NAME,
                email=settings.ADMIN_EMAIL.lower().strip(),
                password_hash=hash_password(settings.ADMIN_PASSWORD),
                is_admin=True,
            )
        )
        db.commit()

    if db.query(ProductEntity).count() > 0:
        return

    products = seed_products()
    users = seed_users()
    moderation_items = seed_moderation_items()

    # 1) Seed parent tables first, then flush so FK targets exist.
    db.add_all(
        [
            ProductEntity(
                id=p.id,
                title=p.title,
                brand=p.brand,
                category=p.category,
                size=p.size,
                condition=p.condition,
                color=p.color,
                price=p.price,
                buyer_protection_fee=p.buyer_protection_fee,
                seller_username=p.seller_username,
                seller_rating=p.seller_rating,
                seller_reviews=p.seller_reviews,
                seller_location=p.seller_location,
                description=p.description,
                images=p.images,
                created_at=p.created_at,
                is_featured=p.is_featured,
            )
            for p in products
        ]
    )
    db.flush()

    db.add_all(
        [
            UserEntity(id=u.id, name=u.name, email=u.email, status=u.status, join_date=u.join_date)
            for u in users
        ]
    )
    db.flush()

    # 2) Seed child tables that depend on products.
    db.add_all(
        [
            ModerationItemEntity(
                id=m.id,
                product_id=m.product_id,
                title=m.title,
                seller_username=m.seller_username,
                price=m.price,
                status=m.status,
                risk_level=m.risk_level,
                submitted_at=m.submitted_at,
                image_url=m.image_url,
            )
            for m in moderation_items
        ]
    )
    db.flush()

    db.commit()

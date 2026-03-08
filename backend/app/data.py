from __future__ import annotations

from datetime import datetime, timedelta, timezone

from .models import (
    DashboardGrowthPoint,
    DashboardOrder,
    DashboardResponse,
    DashboardStats,
    ModerationItem,
    ModerationStatus,
    Product,
    User,
    UserStatus,
)


def _utc_now() -> datetime:
    return datetime.now(timezone.utc)


def seed_products() -> list[Product]:
    now = _utc_now()
    return [
        Product(
            id=1,
            title="Floral Dress",
            brand="Zara",
            category="women-clothes",
            size="S",
            condition="excellent",
            color="Floral",
            price=12.0,
            buyer_protection_fee=2.5,
            seller_username="claire_store",
            seller_rating=4.9,
            seller_reviews=152,
            seller_location="Bujumbura, Burundi",
            description="Light floral dress in excellent condition.",
            images=[
                "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
            ],
            created_at=now - timedelta(hours=12),
            is_featured=True,
        ),
        Product(
            id=2,
            title="Vintage Leather Jacket",
            brand="Vintage",
            category="men-clothes",
            size="M",
            condition="good",
            color="Brown",
            price=45.0,
            buyer_protection_fee=3.2,
            seller_username="vintage_vibes",
            seller_rating=4.7,
            seller_reviews=94,
            seller_location="Gitega, Burundi",
            description="Oversized leather jacket with classic 90s style.",
            images=[
                "https://images.unsplash.com/photo-1551028719-00167b16eac5",
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
            ],
            created_at=now - timedelta(days=1, hours=2),
            is_featured=True,
        ),
        Product(
            id=3,
            title="Levi's 501 Jeans",
            brand="Levi's",
            category="women-clothes",
            size="M",
            condition="very_good",
            color="Blue",
            price=25.0,
            buyer_protection_fee=2.6,
            seller_username="julia_wardrobe",
            seller_rating=4.8,
            seller_reviews=211,
            seller_location="Ngozi, Burundi",
            description="Classic Levi's 501 jeans, clean and ready to wear.",
            images=[
                "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
                "https://images.unsplash.com/photo-1475180098004-ca77a66827be",
            ],
            created_at=now - timedelta(days=2, hours=1),
        ),
        Product(
            id=4,
            title="Silk Slip Dress",
            brand="Mango",
            category="women-clothes",
            size="XS",
            condition="new_with_tags",
            color="Emerald",
            price=18.5,
            buyer_protection_fee=2.65,
            seller_username="sophie_chic",
            seller_rating=4.6,
            seller_reviews=88,
            seller_location="Bujumbura, Burundi",
            description="Elegant silk dress, never worn with tags.",
            images=[
                "https://images.unsplash.com/photo-1495385794356-15371f348c31",
                "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc",
            ],
            created_at=now - timedelta(days=3, hours=4),
        ),
        Product(
            id=5,
            title="Retro Adidas Gazelle",
            brand="Adidas",
            category="shoes",
            size="42",
            condition="excellent",
            color="Black",
            price=85.0,
            buyer_protection_fee=5.4,
            seller_username="kickz_collector",
            seller_rating=4.5,
            seller_reviews=67,
            seller_location="Rumonge, Burundi",
            description="Retro sneakers in excellent shape.",
            images=[
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
                "https://images.unsplash.com/photo-1549298916-b41d501d3772",
            ],
            created_at=now - timedelta(days=4, hours=3),
        ),
        Product(
            id=6,
            title="Handmade Silver Ring",
            brand="Artisan",
            category="accessories",
            size="One Size",
            condition="new_with_tags",
            color="Silver",
            price=30.0,
            buyer_protection_fee=2.1,
            seller_username="jewelry_box",
            seller_rating=4.9,
            seller_reviews=45,
            seller_location="Bubanza, Burundi",
            description="Handmade ring with minimalist finish.",
            images=[
                "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
                "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
            ],
            created_at=now - timedelta(days=5, hours=6),
        ),
    ]


def seed_users() -> list[User]:
    now = _utc_now()
    return [
        User(id=44921, name="Sarah Miller", email="sarah.miller@example.com", status=UserStatus.active, join_date=now - timedelta(days=510)),
        User(id=44892, name="James Wilson", email="j.wilson92@company.net", status=UserStatus.banned, join_date=now - timedelta(days=524)),
        User(id=44877, name="Amelie Roche", email="roche.amelie@service.fr", status=UserStatus.active, join_date=now - timedelta(days=526)),
        User(id=44812, name="Marcus Thorne", email="m.thorne@vinted.co.uk", status=UserStatus.active, join_date=now - timedelta(days=567)),
        User(id=44799, name="David Park", email="park.dvd@provider.com", status=UserStatus.active, join_date=now - timedelta(days=580)),
    ]


def seed_moderation_items() -> list[ModerationItem]:
    now = _utc_now()
    return [
        ModerationItem(
            id=901,
            product_id=2,
            title="Vintage Nike Sweatshirt",
            seller_username="alex_92",
            price=45.0,
            status=ModerationStatus.pending,
            risk_level="low",
            submitted_at=now - timedelta(minutes=2),
            image_url="https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
        ),
        ModerationItem(
            id=902,
            product_id=3,
            title="Levi's 501 Jeans",
            seller_username="denim_lover",
            price=60.0,
            status=ModerationStatus.pending,
            risk_level="low",
            submitted_at=now - timedelta(minutes=5),
            image_url="https://images.unsplash.com/photo-1475180098004-ca77a66827be",
        ),
        ModerationItem(
            id=903,
            product_id=4,
            title="Zara Floral Dress",
            seller_username="sarah_style",
            price=25.0,
            status=ModerationStatus.flagged,
            risk_level="high",
            submitted_at=now - timedelta(minutes=8),
            image_url="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc",
        ),
        ModerationItem(
            id=904,
            product_id=5,
            title="Retro Adidas Gazelle",
            seller_username="kickz_collector",
            price=85.0,
            status=ModerationStatus.pending,
            risk_level="medium",
            submitted_at=now - timedelta(minutes=12),
            image_url="https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        ),
    ]


def seed_dashboard() -> DashboardResponse:
    return DashboardResponse(
        stats=DashboardStats(
            total_sales=124_592.0,
            total_sales_growth_pct=12.5,
            new_users=1_240,
            new_users_growth_pct=-2.4,
            active_listings=45_281,
            active_listings_growth_pct=5.7,
        ),
        growth=[
            DashboardGrowthPoint(label="Mon", revenue=10000),
            DashboardGrowthPoint(label="Tue", revenue=11500),
            DashboardGrowthPoint(label="Wed", revenue=13200),
            DashboardGrowthPoint(label="Thu", revenue=12750),
            DashboardGrowthPoint(label="Fri", revenue=15220),
            DashboardGrowthPoint(label="Sat", revenue=16440),
            DashboardGrowthPoint(label="Sun", revenue=18900),
        ],
        recent_orders=[
            DashboardOrder(
                id=7001,
                item_name="Vintage Leather Jacket",
                buyer_name="Emma S.",
                amount=85.0,
                created_at=_utc_now() - timedelta(minutes=2),
            ),
            DashboardOrder(
                id=7002,
                item_name="Polaroid 600 Camera",
                buyer_name="Jack R.",
                amount=120.0,
                created_at=_utc_now() - timedelta(minutes=15),
            ),
            DashboardOrder(
                id=7003,
                item_name="Handmade Ceramic Pot",
                buyer_name="Maria L.",
                amount=45.0,
                created_at=_utc_now() - timedelta(minutes=45),
            ),
        ],
    )


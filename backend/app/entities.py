from __future__ import annotations

from datetime import datetime, timezone

from sqlalchemy import JSON, Boolean, DateTime, Enum, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from .database import Base
from .models import ModerationStatus, UserStatus


def _utc_now() -> datetime:
    return datetime.now(timezone.utc)


class ProductEntity(Base):
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    brand: Mapped[str] = mapped_column(String(120), nullable=False)
    category: Mapped[str] = mapped_column(String(120), nullable=False, index=True)
    size: Mapped[str] = mapped_column(String(40), nullable=False, index=True)
    condition: Mapped[str] = mapped_column(String(50), nullable=False, index=True)
    color: Mapped[str] = mapped_column(String(80), nullable=False)
    price: Mapped[float] = mapped_column(Float, nullable=False, index=True)
    buyer_protection_fee: Mapped[float] = mapped_column(Float, nullable=False)
    seller_username: Mapped[str] = mapped_column(String(120), nullable=False, index=True)
    seller_rating: Mapped[float] = mapped_column(Float, nullable=False)
    seller_reviews: Mapped[int] = mapped_column(Integer, nullable=False)
    seller_location: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    images: Mapped[list[str]] = mapped_column(JSON, nullable=False, default=list)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, default=_utc_now, index=True)
    is_featured: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False, index=True)


class UserEntity(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=False)
    name: Mapped[str] = mapped_column(String(150), nullable=False)
    email: Mapped[str] = mapped_column(String(200), nullable=False, unique=True, index=True)
    status: Mapped[UserStatus] = mapped_column(Enum(UserStatus, name="user_status"), nullable=False, index=True)
    join_date: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, default=_utc_now, index=True)


class ModerationItemEntity(Base):
    __tablename__ = "moderation_items"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=False)
    product_id: Mapped[int] = mapped_column(ForeignKey("products.id"), nullable=False, index=True)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    seller_username: Mapped[str] = mapped_column(String(120), nullable=False)
    price: Mapped[float] = mapped_column(Float, nullable=False)
    status: Mapped[ModerationStatus] = mapped_column(Enum(ModerationStatus, name="moderation_status"), nullable=False, index=True)
    risk_level: Mapped[str] = mapped_column(String(10), nullable=False, default="low")
    submitted_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, default=_utc_now, index=True)
    image_url: Mapped[str] = mapped_column(Text, nullable=False)


class DashboardStatsEntity(Base):
    __tablename__ = "dashboard_stats"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=False)
    total_sales: Mapped[float] = mapped_column(Float, nullable=False)
    total_sales_growth_pct: Mapped[float] = mapped_column(Float, nullable=False)
    new_users: Mapped[int] = mapped_column(Integer, nullable=False)
    new_users_growth_pct: Mapped[float] = mapped_column(Float, nullable=False)
    active_listings: Mapped[int] = mapped_column(Integer, nullable=False)
    active_listings_growth_pct: Mapped[float] = mapped_column(Float, nullable=False)


class DashboardGrowthEntity(Base):
    __tablename__ = "dashboard_growth"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    label: Mapped[str] = mapped_column(String(10), nullable=False)
    revenue: Mapped[float] = mapped_column(Float, nullable=False)
    sort_order: Mapped[int] = mapped_column(Integer, nullable=False, index=True)


class DashboardOrderEntity(Base):
    __tablename__ = "dashboard_orders"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=False)
    item_name: Mapped[str] = mapped_column(String(200), nullable=False)
    buyer_name: Mapped[str] = mapped_column(String(120), nullable=False)
    amount: Mapped[float] = mapped_column(Float, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, index=True)


class AuthUserEntity(Base):
    __tablename__ = "auth_users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    full_name: Mapped[str] = mapped_column(String(150), nullable=False)
    email: Mapped[str] = mapped_column(String(200), nullable=False, unique=True, index=True)
    password_hash: Mapped[str] = mapped_column(Text, nullable=False)
    is_admin: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False, index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, default=_utc_now, index=True)

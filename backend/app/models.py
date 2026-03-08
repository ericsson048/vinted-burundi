from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Literal

from pydantic import BaseModel, Field


class UserStatus(str, Enum):
    active = "active"
    banned = "banned"


class ModerationStatus(str, Enum):
    pending = "pending"
    flagged = "flagged"
    approved = "approved"
    rejected = "rejected"


class Product(BaseModel):
    id: int
    title: str
    brand: str
    category: str
    size: str
    condition: str
    color: str
    price: float
    buyer_protection_fee: float
    seller_username: str
    seller_rating: float = Field(ge=0, le=5)
    seller_reviews: int = Field(ge=0)
    seller_location: str
    description: str
    images: list[str]
    created_at: datetime
    is_featured: bool = False


class User(BaseModel):
    id: int
    name: str
    email: str
    status: UserStatus
    join_date: datetime


class ModerationItem(BaseModel):
    id: int
    product_id: int
    title: str
    seller_username: str
    price: float
    status: ModerationStatus
    risk_level: Literal["low", "medium", "high"] = "low"
    submitted_at: datetime
    image_url: str


class DashboardStats(BaseModel):
    total_sales: float
    total_sales_growth_pct: float
    new_users: int
    new_users_growth_pct: float
    active_listings: int
    active_listings_growth_pct: float


class DashboardOrder(BaseModel):
    id: int
    item_name: str
    buyer_name: str
    amount: float
    created_at: datetime


class DashboardGrowthPoint(BaseModel):
    label: str
    revenue: float


class Pagination(BaseModel):
    page: int
    page_size: int
    total: int
    total_pages: int


class ProductListResponse(BaseModel):
    items: list[Product]
    pagination: Pagination


class UserListResponse(BaseModel):
    items: list[User]
    pagination: Pagination


class ModerationListResponse(BaseModel):
    items: list[ModerationItem]
    pagination: Pagination


class DashboardResponse(BaseModel):
    stats: DashboardStats
    growth: list[DashboardGrowthPoint]
    recent_orders: list[DashboardOrder]


class UsersSummary(BaseModel):
    total: int
    active: int
    banned: int
    new_this_month: int


class TransactionsResponse(BaseModel):
    items: list[DashboardOrder]
    pagination: Pagination


class AdminSettingsResponse(BaseModel):
    stripe_configured: bool
    email_configured: bool
    default_from_email: str | None = None
    email_host: str | None = None
    email_port: int
    email_use_tls: bool


class UserStatusPatch(BaseModel):
    status: UserStatus


class ModerationDecisionPatch(BaseModel):
    decision: Literal["approve", "reject"]
    reason: str | None = None


class AuthRegisterRequest(BaseModel):
    full_name: str
    email: str
    password: str = Field(min_length=8, max_length=128)


class AuthLoginRequest(BaseModel):
    email: str
    password: str = Field(min_length=8, max_length=128)


class AuthUserPublic(BaseModel):
    id: int
    full_name: str
    email: str
    is_admin: bool
    created_at: datetime


class AuthTokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: AuthUserPublic

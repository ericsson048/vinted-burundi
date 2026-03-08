from __future__ import annotations

from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
    )

    DATABASE_URL: str = "postgresql+psycopg://postgres:ericsson@localhost:5432/vinted_burundi"
    SECRET_KEY: str = "change-me-in-production"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24
    ADMIN_EMAIL: str = "admin@vinted.bi"
    ADMIN_PASSWORD: str = "Admin1234!"
    ADMIN_FULL_NAME: str = "Admin"
    STRIPE_PUBLISHABLE_KEY: str | None = None
    STRIPE_SECRET_KEY: str | None = None
    EMAIL_HOST: str | None = None
    EMAIL_PORT: int = 587
    EMAIL_HOST_USER: str | None = None
    EMAIL_HOST_PASSWORD: str | None = None
    EMAIL_USE_TLS: bool = True
    DEFAULT_FROM_EMAIL: str | None = None


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()

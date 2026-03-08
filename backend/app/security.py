from __future__ import annotations

import hashlib
import hmac
import os
from datetime import datetime, timedelta, timezone

import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session

from .database import get_db
from .entities import AuthUserEntity
from .models import AuthUserPublic
from .settings import get_settings

ALGORITHM = "HS256"
TOKEN_SCHEME = HTTPBearer(auto_error=False)


def hash_password(password: str) -> str:
    salt = os.urandom(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, 390000)
    return f"{salt.hex()}:{digest.hex()}"


def verify_password(password: str, encoded_hash: str) -> bool:
    try:
        salt_hex, digest_hex = encoded_hash.split(":", 1)
        salt = bytes.fromhex(salt_hex)
        expected = bytes.fromhex(digest_hex)
    except Exception:
        return False
    candidate = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, 390000)
    return hmac.compare_digest(candidate, expected)


def create_access_token(user_id: int) -> str:
    settings = get_settings()
    now = datetime.now(timezone.utc)
    payload = {
        "sub": str(user_id),
        "iat": int(now.timestamp()),
        "exp": int((now + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)).timestamp()),
    }
    return jwt.encode(payload, settings.SECRET_KEY, algorithm=ALGORITHM)


def decode_access_token(token: str) -> int | None:
    settings = get_settings()
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[ALGORITHM])
        sub = payload.get("sub")
        return int(sub) if sub else None
    except Exception:
        return None


def _to_public_user(entity: AuthUserEntity) -> AuthUserPublic:
    return AuthUserPublic.model_validate(entity, from_attributes=True)


def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(TOKEN_SCHEME),
    db: Session = Depends(get_db),
) -> AuthUserPublic:
    if not credentials:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")
    user_id = decode_access_token(credentials.credentials)
    if not user_id:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    entity = db.get(AuthUserEntity, user_id)
    if not entity:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found")
    return _to_public_user(entity)


def require_admin(current_user: AuthUserPublic = Depends(get_current_user)) -> AuthUserPublic:
    if not current_user.is_admin:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Admin required")
    return current_user


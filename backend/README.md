# FastAPI backend

## What is covered

This API matches the current frontend screens:

- Public catalog and product details
- Admin dashboard metrics
- Admin users listing + status update
- Admin moderation listing + decision update

## Run

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
# create backend/.env from backend/.env.example and set your values
uvicorn main:app --reload --port 8000
```

Swagger UI: `http://localhost:8000/docs`

## Main endpoints

- `GET /api/health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/home/new-arrivals`
- `GET /api/catalog/products`
- `GET /api/catalog/products/{product_id}`
- `GET /api/catalog/products/{product_id}/related`
- `GET /api/catalog/filters`
- `GET /api/admin/dashboard`
- `GET /api/admin/listings`
- `GET /api/admin/transactions`
- `GET /api/admin/settings`
- `GET /api/admin/users`
- `GET /api/admin/users/summary`
- `PATCH /api/admin/users/{user_id}/status`
- `GET /api/admin/moderation/listings`
- `GET /api/admin/moderation/stats`
- `PATCH /api/admin/moderation/listings/{moderation_id}`

## Notes

- Database: PostgreSQL (SQLAlchemy + psycopg3).
- Configuration is loaded from environment variables via `app/settings.py` (Pydantic Settings).
- Tables are auto-created on startup.
- Seed data is inserted once if the `products` table is empty.
- JWT authentication is enabled.
- Default admin user is seeded from env vars: `ADMIN_EMAIL` / `ADMIN_PASSWORD`.

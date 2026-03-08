# Front to API mapping

## Front analysis summary

Current frontend pages are static and do not call an API yet:

- `src/pages/Home.tsx`
- `src/pages/Catalog.tsx`
- `src/pages/ProductDetail.tsx`
- `src/pages/admin/Dashboard.tsx`
- `src/pages/admin/Users.tsx`
- `src/pages/admin/Moderation.tsx`

## Suggested integration

- Home feed:
  - `GET /api/catalog/products?sort=newest&page=1&page_size=12`
- Catalog:
  - `GET /api/catalog/products` with filters (`category`, `size`, `brand`, `condition`, `min_price`, `max_price`, `search`, `sort`)
  - `GET /api/catalog/filters`
- Product detail:
  - `GET /api/catalog/products/{product_id}`
  - `GET /api/catalog/products/{product_id}/related`
- Admin dashboard:
  - `GET /api/admin/dashboard`
- Admin users:
  - `GET /api/admin/users?search=&status=&page=&page_size=`
  - `PATCH /api/admin/users/{user_id}/status`
- Admin moderation:
  - `GET /api/admin/moderation/listings?status=&page=&page_size=`
  - `GET /api/admin/moderation/stats`
  - `PATCH /api/admin/moderation/listings/{moderation_id}`


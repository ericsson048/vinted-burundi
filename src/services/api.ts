const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://127.0.0.1:8000';
const AUTH_TOKEN_KEY = 'vb_auth_token';

type Pagination = {
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
};

export type Product = {
  id: number;
  title: string;
  brand: string;
  category: string;
  size: string;
  condition: string;
  color: string;
  price: number;
  buyer_protection_fee: number;
  seller_username: string;
  seller_rating: number;
  seller_reviews: number;
  seller_location: string;
  description: string;
  images: string[];
  created_at: string;
  is_featured: boolean;
};

export type ProductListResponse = {
  items: Product[];
  pagination: Pagination;
};

export type DashboardResponse = {
  stats: {
    total_sales: number;
    total_sales_growth_pct: number;
    new_users: number;
    new_users_growth_pct: number;
    active_listings: number;
    active_listings_growth_pct: number;
  };
  growth: { label: string; revenue: number }[];
  recent_orders: {
    id: number;
    item_name: string;
    buyer_name: string;
    amount: number;
    created_at: string;
  }[];
};

export type TransactionsResponse = {
  items: {
    id: number;
    item_name: string;
    buyer_name: string;
    amount: number;
    created_at: string;
  }[];
  pagination: Pagination;
};

export type AdminSettingsResponse = {
  stripe_configured: boolean;
  email_configured: boolean;
  default_from_email: string | null;
  email_host: string | null;
  email_port: number;
  email_use_tls: boolean;
};

export type AuthUser = {
  id: number;
  full_name: string;
  email: string;
  is_admin: boolean;
  created_at: string;
};

export type AuthResponse = {
  access_token: string;
  token_type: 'bearer';
  user: AuthUser;
};

export type User = {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'banned';
  join_date: string;
};

export type UsersSummary = {
  total: number;
  active: number;
  banned: number;
  new_this_month: number;
};

export type UserListResponse = {
  items: User[];
  pagination: Pagination;
};

export type ModerationItem = {
  id: number;
  product_id: number;
  title: string;
  seller_username: string;
  price: number;
  status: 'pending' | 'flagged' | 'approved' | 'rejected';
  risk_level: 'low' | 'medium' | 'high';
  submitted_at: string;
  image_url: string;
};

export type ModerationListResponse = {
  items: ModerationItem[];
  pagination: Pagination;
};

function buildUrl(path: string, params?: Record<string, string | number | undefined | null>) {
  const url = new URL(`${API_BASE_URL}${path}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.set(key, String(value));
      }
    });
  }
  return url.toString();
}

async function request<T>(path: string, init?: RequestInit, params?: Record<string, string | number | undefined | null>): Promise<T> {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(buildUrl(path, params), {
    headers: { ...headers, ...(init?.headers as Record<string, string> | undefined) },
    ...init,
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `HTTP ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export const api = {
  setAuthToken(token: string | null) {
    if (!token) {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      return;
    }
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  },
  getAuthToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  },
  register(payload: { full_name: string; email: string; password: string }) {
    return request<AuthResponse>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
  login(payload: { email: string; password: string }) {
    return request<AuthResponse>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
  me() {
    return request<AuthUser>('/api/auth/me');
  },
  getNewArrivals(limit = 12) {
    return request<Product[]>('/api/home/new-arrivals', undefined, { limit });
  },
  getCatalogProducts(params?: Record<string, string | number | undefined | null>) {
    return request<ProductListResponse>('/api/catalog/products', undefined, params);
  },
  getCatalogFilters() {
    return request<{ categories: string[]; sizes: string[]; brands: string[]; conditions: string[] }>('/api/catalog/filters');
  },
  getProductById(id: string | number) {
    return request<Product>(`/api/catalog/products/${id}`);
  },
  getRelatedProducts(id: string | number, limit = 5) {
    return request<Product[]>(`/api/catalog/products/${id}/related`, undefined, { limit });
  },
  getAdminDashboard() {
    return request<DashboardResponse>('/api/admin/dashboard');
  },
  getAdminListings(params?: Record<string, string | number | undefined | null>) {
    return request<ProductListResponse>('/api/admin/listings', undefined, params);
  },
  getAdminTransactions(params?: Record<string, string | number | undefined | null>) {
    return request<TransactionsResponse>('/api/admin/transactions', undefined, params);
  },
  getAdminSettings() {
    return request<AdminSettingsResponse>('/api/admin/settings');
  },
  getAdminUsers(params?: Record<string, string | number | undefined | null>) {
    return request<UserListResponse>('/api/admin/users', undefined, params);
  },
  getAdminUsersSummary() {
    return request<UsersSummary>('/api/admin/users/summary');
  },
  patchUserStatus(userId: number, status: 'active' | 'banned') {
    return request<User>(`/api/admin/users/${userId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  },
  getModerationListings(params?: Record<string, string | number | undefined | null>) {
    return request<ModerationListResponse>('/api/admin/moderation/listings', undefined, params);
  },
  getModerationStats() {
    return request<Record<string, number>>('/api/admin/moderation/stats');
  },
  patchModerationDecision(moderationId: number, decision: 'approve' | 'reject') {
    return request<{ item: ModerationItem; stats: Record<string, number> }>(`/api/admin/moderation/listings/${moderationId}`, {
      method: 'PATCH',
      body: JSON.stringify({ decision }),
    });
  },
};

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('fr-BI', { style: 'currency', currency: 'EUR' }).format(value);
}

export function formatDate(value: string) {
  return new Date(value).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
}

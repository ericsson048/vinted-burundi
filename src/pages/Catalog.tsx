import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { api, formatCurrency, type Product, type ProductListResponse } from '../services/api';

type SortValue = 'newest' | 'price_asc' | 'price_desc';

export default function Catalog() {
  const [items, setItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [filters, setFilters] = useState<{ categories: string[]; sizes: string[]; brands: string[]; conditions: string[] }>({
    categories: [],
    sizes: [],
    brands: [],
    conditions: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [sort, setSort] = useState<SortValue>('newest');

  const query = useMemo(
    () => ({ search, category, size, brand, condition, sort, page: 1, page_size: 24 }),
    [search, category, size, brand, condition, sort],
  );

  useEffect(() => {
    api.getCatalogFilters().then(setFilters).catch(() => undefined);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    api
      .getCatalogProducts(query)
      .then((res: ProductListResponse) => {
        setItems(res.items);
        setTotal(res.pagination.total);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <main className="max-w-[1440px] mx-auto px-4 md:px-10 py-6 w-full">
      <div className="mb-6">
        <nav className="flex text-xs text-slate-500 mb-2 gap-2">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-100 font-medium">Catalog</span>
        </nav>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Catalogue</h2>
        <p className="text-sm text-slate-500 mt-1">{total} items trouvés</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Recherche titre, marque, vendeur..."
          className="lg:col-span-2 px-3 py-2 rounded-lg border border-slate-200 bg-white dark:bg-slate-800"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-3 py-2 rounded-lg border border-slate-200 bg-white dark:bg-slate-800">
          <option value="">Toutes catégories</option>
          {filters.categories.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        <select value={size} onChange={(e) => setSize(e.target.value)} className="px-3 py-2 rounded-lg border border-slate-200 bg-white dark:bg-slate-800">
          <option value="">Toutes tailles</option>
          {filters.sizes.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        <select value={brand} onChange={(e) => setBrand(e.target.value)} className="px-3 py-2 rounded-lg border border-slate-200 bg-white dark:bg-slate-800">
          <option value="">Toutes marques</option>
          {filters.brands.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        <select value={condition} onChange={(e) => setCondition(e.target.value)} className="px-3 py-2 rounded-lg border border-slate-200 bg-white dark:bg-slate-800">
          <option value="">Tout état</option>
          {filters.conditions.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6 flex items-center gap-2">
        <label className="text-sm text-slate-500">Tri:</label>
        <select value={sort} onChange={(e) => setSort(e.target.value as SortValue)} className="px-3 py-2 rounded-lg border border-slate-200 bg-white dark:bg-slate-800">
          <option value="newest">Plus récent</option>
          <option value="price_asc">Prix croissant</option>
          <option value="price_desc">Prix décroissant</option>
        </select>
      </div>

      {loading && <p className="text-slate-500">Chargement...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
          {items.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden mb-3">
                <img alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={item.images[0]} referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-0.5">
                <p className="text-lg font-bold">{formatCurrency(item.price)}</p>
                <p className="text-[11px] text-slate-500">{formatCurrency(item.price + item.buyer_protection_fee)} incl. Buyer Protection</p>
                <p className="text-xs text-slate-400">
                  {item.size} / {item.brand} / {item.condition}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}


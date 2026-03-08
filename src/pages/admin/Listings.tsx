import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { api, formatCurrency, type Product } from '../../services/api';

export default function Listings() {
  const [items, setItems] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      api
        .getAdminListings({ search, page: 1, page_size: 30 })
        .then((res) => setItems(res.items))
        .catch((err: Error) => setError(err.message))
        .finally(() => setLoading(false));
    }, 250);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100">Listings</h1>
        <p className="text-slate-500 mt-1">Gestion des annonces en base PostgreSQL</p>
      </div>

      <input
        className="w-full md:w-[420px] px-3 py-2 rounded-lg border border-slate-200 bg-white dark:bg-slate-800"
        placeholder="Rechercher une annonce (titre, marque, vendeur)..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p className="text-slate-500">Chargement...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="rounded-xl border border-primary/5 bg-white dark:bg-slate-900 p-4 shadow-sm">
              <div className="aspect-[4/5] rounded-lg overflow-hidden mb-3 bg-slate-100">
                <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <p className="font-bold text-lg">{item.title}</p>
              <p className="text-sm text-slate-500">
                {item.brand} • {item.seller_username}
              </p>
              <p className="font-bold text-primary mt-2">{formatCurrency(item.price)}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}


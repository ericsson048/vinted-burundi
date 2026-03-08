import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { api, formatCurrency, type Product } from '../services/api';

export default function Home() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    api
      .getNewArrivals(12)
      .then((data) => {
        if (!mounted) return;
        setItems(data);
      })
      .catch((err: Error) => {
        if (!mounted) return;
        setError(err.message);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 md:px-10 lg:px-20 py-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100">Nouveaux articles</h1>
          <p className="text-slate-500 text-sm mt-1">Flux connecté au backend FastAPI</p>
        </div>
        <Link to="/catalog" className="text-primary font-bold text-sm hover:underline">
          Voir le catalogue
        </Link>
      </div>

      {loading && <p className="text-slate-500">Chargement...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {items.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-3 bg-slate-100 dark:bg-slate-800">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={item.title}
                  src={item.images[0]}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col px-1">
                <p className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-0.5">{formatCurrency(item.price)}</p>
                <p className="text-primary/70 dark:text-primary/60 text-xs font-semibold mb-1">
                  Incl. {formatCurrency(item.buyer_protection_fee)} fee
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm truncate font-medium">
                  {item.brand} • {item.title} • {item.size}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}


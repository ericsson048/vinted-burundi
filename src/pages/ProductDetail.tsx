import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { api, formatCurrency, type Product } from '../services/api';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    Promise.all([api.getProductById(id), api.getRelatedProducts(id, 5)])
      .then(([p, r]) => {
        setProduct(p);
        setRelated(r);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <main className="max-w-[1280px] mx-auto px-6 py-8 w-full text-slate-500">Chargement...</main>;
  if (error || !product) return <main className="max-w-[1280px] mx-auto px-6 py-8 w-full text-red-500">{error ?? 'Produit introuvable'}</main>;

  return (
    <main className="max-w-[1280px] mx-auto px-6 py-8 w-full">
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link className="hover:underline" to="/">
          Home
        </Link>
        <span>/</span>
        <Link className="hover:underline" to="/catalog">
          Catalog
        </Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-slate-100 font-medium">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {product.images.slice(0, 4).map((img) => (
              <div key={img} className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover" alt={product.title} src={img} referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-primary/10 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Description</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{product.description}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/10 shadow-sm">
            <p className="text-3xl font-black text-slate-900 dark:text-slate-100">{formatCurrency(product.price)}</p>
            <p className="text-sm text-slate-500">+ {formatCurrency(product.buyer_protection_fee)} Buyer Protection fee</p>
            <div className="mt-6 pt-6 border-t border-primary/10 space-y-2 text-sm">
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>
              <p>
                <strong>Size:</strong> {product.size}
              </p>
              <p>
                <strong>Condition:</strong> {product.condition}
              </p>
              <p>
                <strong>Seller:</strong> {product.seller_username} ({product.seller_reviews} reviews)
              </p>
              <p>
                <strong>Location:</strong> {product.seller_location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-black">Related items</h3>
          <Link className="text-primary font-bold hover:underline" to="/catalog">
            See more
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {related.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="group cursor-pointer">
              <div className="aspect-square rounded-xl overflow-hidden mb-3">
                <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" src={item.images[0]} alt={item.title} referrerPolicy="no-referrer" />
              </div>
              <p className="font-bold text-slate-900 dark:text-slate-100">{formatCurrency(item.price)}</p>
              <p className="text-sm text-slate-500">
                {item.brand} • {item.size}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}


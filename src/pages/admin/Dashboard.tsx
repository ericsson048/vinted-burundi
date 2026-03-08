import { useEffect, useMemo, useState } from 'react';

import { api, formatCurrency, type DashboardResponse } from '../../services/api';

export default function Dashboard() {
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.getAdminDashboard().then(setData).catch((err: Error) => setError(err.message));
  }, []);

  const growthMax = useMemo(() => {
    if (!data?.growth.length) return 1;
    return Math.max(...data.growth.map((point) => point.revenue), 1);
  }, [data]);

  if (error) return <div className="p-8 text-red-500">{error}</div>;
  if (!data) return <div className="p-8 text-slate-500">Chargement...</div>;

  return (
    <div className="p-6 md:p-8 space-y-6">
      <section className="rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/10 to-white dark:to-slate-900 p-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">Control Center</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-black text-slate-900 dark:text-white">Marketplace Dashboard</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Vue consolidée des ventes, utilisateurs et annonces actives.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article className="rounded-2xl border border-primary/10 bg-white dark:bg-slate-900 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-primary/70">Total Sales</p>
          <p className="mt-2 text-3xl font-black">{formatCurrency(data.stats.total_sales)}</p>
          <p className="mt-2 text-xs font-bold text-primary">{data.stats.total_sales_growth_pct}% vs période précédente</p>
        </article>
        <article className="rounded-2xl border border-primary/10 bg-white dark:bg-slate-900 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-primary/70">New Users</p>
          <p className="mt-2 text-3xl font-black">{data.stats.new_users}</p>
          <p className="mt-2 text-xs font-bold text-slate-600 dark:text-slate-300">{data.stats.new_users_growth_pct}% vs période précédente</p>
        </article>
        <article className="rounded-2xl border border-primary/10 bg-white dark:bg-slate-900 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-primary/70">Active Listings</p>
          <p className="mt-2 text-3xl font-black">{data.stats.active_listings}</p>
          <p className="mt-2 text-xs font-bold text-primary">{data.stats.active_listings_growth_pct}% vs période précédente</p>
        </article>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        <article className="xl:col-span-3 rounded-2xl border border-primary/10 bg-white dark:bg-slate-900 p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-black">Revenue Trend</h2>
            <span className="text-xs font-semibold text-slate-500">7 derniers points</span>
          </div>
          <div className="grid grid-cols-7 gap-2 items-end h-44">
            {data.growth.map((point) => {
              const h = Math.max((point.revenue / growthMax) * 100, 8);
              return (
                <div key={point.label} className="flex flex-col items-center gap-2">
                  <div
                    className="w-full rounded-md bg-primary/80 hover:bg-primary transition-colors cursor-pointer"
                    style={{ height: `${h}%` }}
                    title={`${point.label}: ${Math.round(point.revenue)}`}
                  />
                  <span className="text-[11px] font-semibold text-slate-500">{point.label}</span>
                </div>
              );
            })}
          </div>
        </article>

        <article className="xl:col-span-2 rounded-2xl border border-primary/10 bg-white dark:bg-slate-900 p-5 shadow-sm">
          <h2 className="text-lg font-black mb-4">Health Snapshot</h2>
          <div className="space-y-3">
            <div className="rounded-xl border border-primary/10 bg-primary/5 p-3">
              <p className="text-xs font-bold uppercase tracking-wider text-primary/70">Conversion Proxy</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">
                {((data.stats.total_sales / Math.max(data.stats.active_listings, 1)) * 100).toFixed(2)}%
              </p>
            </div>
            <div className="rounded-xl border border-primary/10 bg-slate-50 dark:bg-slate-800 p-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Orders Tracked</p>
              <p className="text-2xl font-black">{data.recent_orders.length}</p>
            </div>
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-primary/10 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-primary/10">
          <h2 className="text-lg font-black">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-primary/5 text-primary text-xs uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3">Item</th>
                <th className="px-5 py-3">Buyer</th>
                <th className="px-5 py-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.recent_orders.map((order) => (
                <tr key={order.id} className="border-t border-primary/10 hover:bg-primary/5 transition-colors">
                  <td className="px-5 py-3 font-semibold">{order.item_name}</td>
                  <td className="px-5 py-3 text-slate-600 dark:text-slate-300">{order.buyer_name}</td>
                  <td className="px-5 py-3 text-right font-black text-primary">{formatCurrency(order.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}


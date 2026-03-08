import { useEffect, useState } from 'react';

import { api, formatCurrency, formatDate, type TransactionsResponse } from '../../services/api';

export default function Transactions() {
  const [data, setData] = useState<TransactionsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getAdminTransactions({ page: 1, page_size: 50 })
      .then(setData)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100">Transactions</h1>
        <p className="text-slate-500 mt-1">Historique des commandes</p>
      </div>

      {loading && <p className="text-slate-500">Chargement...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && data && (
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/5 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-primary/5 text-primary text-xs uppercase">
              <tr>
                <th className="px-4 py-3">Order</th>
                <th className="px-4 py-3">Buyer</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((tx) => (
                <tr key={tx.id} className="border-t border-primary/5">
                  <td className="px-4 py-3">{tx.item_name}</td>
                  <td className="px-4 py-3">{tx.buyer_name}</td>
                  <td className="px-4 py-3">{formatDate(tx.created_at)}</td>
                  <td className="px-4 py-3 text-right font-bold">{formatCurrency(tx.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}


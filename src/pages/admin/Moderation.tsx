import { useEffect, useState } from 'react';

import { api, formatCurrency, type ModerationItem } from '../../services/api';

type ModerationTab = '' | 'pending' | 'flagged' | 'approved' | 'rejected';

export default function Moderation() {
  const [items, setItems] = useState<ModerationItem[]>([]);
  const [stats, setStats] = useState<Record<string, number>>({});
  const [status, setStatus] = useState<ModerationTab>('pending');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = () => {
    setLoading(true);
    Promise.all([
      api.getModerationListings({ status, page: 1, page_size: 12 }),
      api.getModerationStats(),
    ])
      .then(([list, s]) => {
        setItems(list.items);
        setStats(s);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, [status]);

  const decide = async (id: number, decision: 'approve' | 'reject') => {
    await api.patchModerationDecision(id, decision);
    loadData();
  };

  const tabs: Array<{ value: ModerationTab; label: string }> = [
    { value: 'pending', label: `Pending (${stats.pending ?? 0})` },
    { value: 'flagged', label: `Flagged (${stats.flagged ?? 0})` },
    { value: 'approved', label: `Approved (${stats.approved ?? 0})` },
    { value: 'rejected', label: `Rejected (${stats.rejected ?? 0})` },
  ];

  return (
    <div className="p-6 md:p-10 max-w-[1200px] mx-auto">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-[-0.033em]">Listings Moderation</h2>
          <p className="text-primary/70 text-base font-medium">Pending: {stats.pending ?? 0}</p>
        </div>
      </div>

      <div className="mb-6 border-b border-primary/10">
        <div className="flex gap-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setStatus(tab.value)}
              className={`pb-3 text-sm font-bold border-b-2 ${
                status === tab.value ? 'border-primary text-primary' : 'border-transparent text-primary/50 hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {loading && <p className="text-slate-500">Chargement...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-primary/5 shadow-sm">
              <div className="relative w-full aspect-square bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('${item.image_url}')` }}>
                <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-white text-[10px] font-bold uppercase rounded tracking-wider">{item.risk_level} risk</div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold truncate">{item.title}</h3>
                    <span className="text-primary font-black">{formatCurrency(item.price)}</span>
                  </div>
                  <div className="text-primary/60 text-sm">
                    {item.seller_username} • {item.status}
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 rounded-lg h-10 bg-emerald-500/10 text-emerald-600 text-sm font-bold hover:bg-emerald-500 hover:text-white transition-all" onClick={() => decide(item.id, 'approve')}>
                    Approve
                  </button>
                  <button className="flex-1 rounded-lg h-10 bg-rose-500/10 text-rose-600 text-sm font-bold hover:bg-rose-500 hover:text-white transition-all" onClick={() => decide(item.id, 'reject')}>
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


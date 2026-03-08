import { useEffect, useState } from 'react';

import { api, type AdminSettingsResponse } from '../../services/api';

export default function Settings() {
  const [data, setData] = useState<AdminSettingsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getAdminSettings()
      .then(setData)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100">Settings</h1>
        <p className="text-slate-500 mt-1">Etat des configurations backend</p>
      </div>

      {loading && <p className="text-slate-500">Chargement...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-primary/10 bg-white dark:bg-slate-900">
            <p className="text-sm text-slate-500">Stripe</p>
            <p className={`text-xl font-black ${data.stripe_configured ? 'text-green-600' : 'text-red-500'}`}>{data.stripe_configured ? 'Configured' : 'Missing keys'}</p>
          </div>
          <div className="p-4 rounded-xl border border-primary/10 bg-white dark:bg-slate-900">
            <p className="text-sm text-slate-500">Email</p>
            <p className={`text-xl font-black ${data.email_configured ? 'text-green-600' : 'text-red-500'}`}>{data.email_configured ? 'Configured' : 'Missing config'}</p>
          </div>
          <div className="p-4 rounded-xl border border-primary/10 bg-white dark:bg-slate-900">
            <p className="text-sm text-slate-500">Email host</p>
            <p className="text-lg font-bold">{data.email_host ?? '-'}</p>
          </div>
          <div className="p-4 rounded-xl border border-primary/10 bg-white dark:bg-slate-900">
            <p className="text-sm text-slate-500">Default from</p>
            <p className="text-lg font-bold">{data.default_from_email ?? '-'}</p>
          </div>
        </div>
      )}
    </div>
  );
}


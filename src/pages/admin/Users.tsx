import { useEffect, useState } from 'react';

import { api, formatDate, type User, type UsersSummary } from '../../services/api';

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [summary, setSummary] = useState<UsersSummary | null>(null);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<'active' | 'banned' | ''>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = () => {
    setLoading(true);
    Promise.all([
      api.getAdminUsers({ search, status, page: 1, page_size: 20 }),
      api.getAdminUsersSummary(),
    ])
      .then(([list, stats]) => {
        setUsers(list.items);
        setSummary(stats);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const id = setTimeout(loadUsers, 300);
    return () => clearTimeout(id);
  }, [search, status]);

  const toggleStatus = async (user: User) => {
    const nextStatus = user.status === 'active' ? 'banned' : 'active';
    await api.patchUserStatus(user.id, nextStatus);
    loadUsers();
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">User Directory</h1>
          <p className="text-slate-500 mt-1">Gestion connectée à l’API admin</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-primary/5 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <input
          className="w-full pl-4 pr-4 py-2.5 bg-primary/5 border-none rounded-lg text-base focus:ring-2 focus:ring-primary/40"
          placeholder="Search by name, email, or user ID..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value as 'active' | 'banned' | '')} className="w-full md:w-auto px-3 py-2 rounded-lg border border-slate-200 bg-white dark:bg-slate-700">
          <option value="">All users</option>
          <option value="active">Active</option>
          <option value="banned">Banned</option>
        </select>
      </div>

      {loading && <p className="text-slate-500">Chargement...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-primary/5 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4 text-center">Status</th>
                  <th className="px-6 py-4">Join Date</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {users.map((user) => (
                  <tr className="hover:bg-primary/5 transition-colors group" key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="font-bold text-slate-900 dark:text-slate-100">{user.name}</p>
                      <p className="text-xs text-slate-500">ID: #{user.id}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{user.email}</td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          user.status === 'active'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 italic">{formatDate(user.join_date)}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="px-2 py-1 rounded text-xs font-bold bg-primary/10 text-primary" onClick={() => toggleStatus(user)}>
                        {user.status === 'active' ? 'Ban' : 'Unban'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8">
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-primary/5 shadow-sm">
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Total Users</p>
            <p className="text-2xl font-black">{summary.total}</p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-primary/5 shadow-sm">
            <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Active</p>
            <p className="text-2xl font-black">{summary.active}</p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-primary/5 shadow-sm">
            <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Banned</p>
            <p className="text-2xl font-black">{summary.banned}</p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-primary/5 shadow-sm">
            <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">New This Month</p>
            <p className="text-2xl font-black">{summary.new_this_month}</p>
          </div>
        </div>
      )}
    </div>
  );
}


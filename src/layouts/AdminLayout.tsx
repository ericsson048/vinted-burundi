import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function AdminLayout() {
  const location = useLocation();
  const path = location.pathname;
  const isActive = (route: string) => path === route || path.startsWith(`${route}/`);
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col fixed h-full z-20">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="bg-primary rounded-lg p-1.5 text-white">
              <span className="material-symbols-outlined block">storefront</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-primary">V-Market</span>
          </Link>
          <nav className="flex flex-col gap-1">
            <Link
              to="/admin"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                path === '/admin' ? 'bg-primary text-white font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </Link>
            <Link
              to="/admin/users"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive('/admin/users') ? 'bg-primary text-white font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined">group</span>
              Users
            </Link>
            <Link
              to="/admin/moderation"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive('/admin/moderation') ? 'bg-primary text-white font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined">gavel</span>
              Moderation
            </Link>
            <Link
              to="/admin/listings"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive('/admin/listings') ? 'bg-primary text-white font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              Listings
            </Link>
            <Link
              to="/admin/transactions"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive('/admin/transactions') ? 'bg-primary text-white font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined">payments</span>
              Transactions
            </Link>
            <Link
              to="/admin/settings"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive('/admin/settings') ? 'bg-primary text-white font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined">settings</span>
              Settings
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
            <div
              className="w-10 h-10 rounded-full bg-primary/20 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-miT_cOWgrJ3TdsMTTpNeNISmQx0OdZbSmwKzwzroKjDjRiLKawQfVmApBvn47m4Z6pc_a66SIBh2LBh39iNZRtXoaMzjxgDwqXZlTGhE24wBlwVc2GcvUmOsoSRK2PD1HhcRxwocvArIognxJiq8YnNMJrE0jx5_eUd7dXFQHSeTR0BZ6sG9zTn9Dt5pF3uL2KWcKcwEw5mliZl6rJVjbjVCw5tz5L86Ra8csSdknutbpr7xckjqrAYNNUMRvHxbNpbMQCnUGZye')",
              }}
            ></div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-bold truncate">{user?.full_name ?? 'Admin'}</span>
              <span className="text-xs text-slate-500 truncate">{user?.is_admin ? 'Super Admin' : 'Member'}</span>
            </div>
          </div>
          <button onClick={logout} className="mt-3 w-full py-2 rounded-lg border border-primary/20 text-primary text-sm font-bold hover:bg-primary/5">
            Log out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 flex flex-col">
        {/* Header */}
        <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
          <div className="flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
              <input
                className="w-full pl-10 pr-4 py-2.5 bg-background-light dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/40"
                placeholder="Search orders, users, or items..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-sm">add</span>
              Export Report
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

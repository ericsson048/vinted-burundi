import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Good morning, Alex</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Here's what's happening across your marketplace today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <span className="flex items-center gap-1 text-emerald-600 text-sm font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-lg">
              <span className="material-symbols-outlined text-xs">trending_up</span> 12.5%
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Sales</p>
          <p className="text-3xl font-extrabold mt-1">$124,592.00</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
              <span className="material-symbols-outlined">person_add</span>
            </div>
            <span className="flex items-center gap-1 text-red-600 text-sm font-bold bg-red-50 dark:bg-red-500/10 px-2 py-1 rounded-lg">
              <span className="material-symbols-outlined text-xs">trending_down</span> 2.4%
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">New Users</p>
          <p className="text-3xl font-extrabold mt-1">1,240</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl">
              <span className="material-symbols-outlined">inventory_2</span>
            </div>
            <span className="flex items-center gap-1 text-emerald-600 text-sm font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-lg">
              <span className="material-symbols-outlined text-xs">trending_up</span> 5.7%
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Listings</p>
          <p className="text-3xl font-extrabold mt-1">45,281</p>
        </div>
      </div>

      {/* Charts & Lists Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Growth Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold">Growth Overview</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Monthly revenue trends</p>
            </div>
            <select className="bg-background-light dark:bg-slate-800 border-none rounded-lg text-sm font-medium focus:ring-primary">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This year</option>
            </select>
          </div>
          <div className="h-[250px] w-full relative">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
              <defs>
                <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'rgba(0, 117, 128, 0.2)', stopOpacity: 1 }}></stop>
                  <stop offset="100%" style={{ stopColor: 'rgba(0, 117, 128, 0)', stopOpacity: 1 }}></stop>
                </linearGradient>
              </defs>
              <path d="M0 35 Q 10 32, 20 25 T 40 28 T 60 15 T 80 18 T 100 5 L 100 40 L 0 40 Z" fill="url(#gradient)"></path>
              <path d="M0 35 Q 10 32, 20 25 T 40 28 T 60 15 T 80 18 T 100 5" fill="none" stroke="#007580" strokeWidth="1.5"></path>
            </svg>
            <div className="flex justify-between mt-4 px-2">
              <span className="text-xs text-slate-400 font-bold uppercase">Mon</span>
              <span className="text-xs text-slate-400 font-bold uppercase">Tue</span>
              <span className="text-xs text-slate-400 font-bold uppercase">Wed</span>
              <span className="text-xs text-slate-400 font-bold uppercase">Thu</span>
              <span className="text-xs text-slate-400 font-bold uppercase">Fri</span>
              <span className="text-xs text-slate-400 font-bold uppercase">Sat</span>
              <span className="text-xs text-slate-400 font-bold uppercase">Sun</span>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="lg:col-span-1 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Recent Orders</h3>
            <Link className="text-xs font-bold text-primary hover:underline" to="/admin">View All</Link>
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center shrink-0"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHpouZ3SbaQDeo8NX9r38KOg0ABL9L9_gh5jLbGPHT34BE0AquKN8NeWV-bEzcS-pj5yyhpCWJgeNiY0R8--o1HQRdXvE1TvfrvglO8LKwJSeES3gm4e6R_OgGpek0OZGikvb7jF1EFaIXVR3rlu_4jfZX1CoWwBbYCll5-laIqKlPrGWqox0fJ9HX8iSQmP4ha0cMjU1CRNN3KwhgtrMGD_AXW-G-pLVbAjZ7v71qIrhcTvZq1IPh2_41YBI-UZcBQW5MzDk_DfGs')" }}
              ></div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-bold truncate">Vintage Leather Jacket</p>
                <p className="text-xs text-slate-500">by Emma S. • 2m ago</p>
              </div>
              <p className="text-sm font-bold text-primary">$85.00</p>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center shrink-0"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQNMrocjCNYLni637V0kHll2ytujRmugQMK_8aA4nAKvVT8IP9v16E9rkhLJu7uMVDby8q3yONB7ww19_iCECtR1UgMlrNsFw2j5_tZ0yC5HwKcIZt80X5sZe3trq-pBIzZk5pLKioC9ithpi3pfSDNpBD_MLYbIB_oigRoYOjW3YMSJDk-KbbGvtZXsIfc7KHYleO6WXN4rL5wNe9YyUxi2Z0qpGJcP4sivbgeH5U96xphbWaEooag7_rwD3Cu2NWTr4r5WZhjtAZ')" }}
              ></div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-bold truncate">Polaroid 600 Camera</p>
                <p className="text-xs text-slate-500">by Jack R. • 15m ago</p>
              </div>
              <p className="text-sm font-bold text-primary">$120.00</p>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center shrink-0"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGuJUR7mmHEmM1kFnmoZ-w7VuhAwrPHC-9AT86iIHa0hDvHDLRUnjF1JBVHsNUNIuR5V6qkYE0-br2iglVTzxLNxYiuOwgfqWzG0DmdCwNsIQa4wozar3SuWW2BT69XarnYZ-3f3-u-_b33-_mo29mrBmvJ4cgdryQybqaR9wt-VZ49Ku3isOvfdKvD4fpNFrjTc5C8NlnSYdIGNr68dj5C73zeT3qlCyrW7EQacnyNx847JV5IVt0KnMi9YDB38awqhl76eq4IRpp')" }}
              ></div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-bold truncate">Handmade Ceramic Pot</p>
                <p className="text-xs text-slate-500">by Maria L. • 45m ago</p>
              </div>
              <p className="text-sm font-bold text-primary">$45.00</p>
            </div>
          </div>
          <button className="w-full mt-6 py-3 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            Manage All Orders
          </button>
        </div>
      </div>

      {/* Footer-style Action */}
      <div className="flex items-center justify-between p-6 bg-primary rounded-2xl text-white shadow-xl shadow-primary/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl">
            <span className="material-symbols-outlined">auto_graph</span>
          </div>
          <div>
            <h4 className="font-bold text-lg leading-tight">Ready for Q3 analysis?</h4>
            <p className="text-primary-100/80 text-sm">Our AI tools can help you predict sales trends for the next quarter.</p>
          </div>
        </div>
        <button className="bg-white text-primary px-6 py-2.5 rounded-xl font-bold hover:bg-slate-50 transition-colors">
          Run Prediction
        </button>
      </div>
    </div>
  );
}

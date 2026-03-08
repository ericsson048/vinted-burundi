import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function MainLayout() {
  const { user, logout } = useAuth();
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-primary/10 px-4 md:px-10 lg:px-20 py-3">
          <div className="flex items-center justify-between max-w-[1440px] mx-auto gap-4 md:gap-8">
            <div className="flex items-center gap-6 flex-1 lg:flex-none">
              <Link to="/" className="flex items-center gap-2 text-primary shrink-0">
                <span className="material-symbols-outlined text-3xl font-bold">checkroom</span>
                <h2 className="text-primary text-xl font-extrabold leading-tight tracking-tight hidden sm:block">Vinted Burundi</h2>
              </Link>
              {/* Search Bar */}
              <div className="hidden md:flex flex-1 min-w-[300px] lg:w-[400px]">
                <div className="relative w-full group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-primary/60">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-2 bg-primary/5 border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-800 transition-all text-sm"
                    placeholder="Search for items or brands"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:gap-8">
              <nav className="hidden lg:flex items-center gap-6">
                <Link className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" to="/catalog">Women</Link>
                <Link className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" to="/catalog">Men</Link>
                <Link className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" to="/catalog">Kids</Link>
                <Link className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" to="/catalog">Home</Link>
              </nav>
              <div className="flex items-center gap-2 sm:gap-3">
                <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-sm">
                  <span>Sell now</span>
                </button>
                {user ? (
                  <button onClick={logout} className="hidden sm:flex items-center justify-center rounded-lg h-10 px-4 border border-primary/20 text-primary text-sm font-bold hover:bg-primary/5 transition-all">
                    <span>Log out</span>
                  </button>
                ) : (
                  <Link to="/login" className="hidden sm:flex items-center justify-center rounded-lg h-10 px-4 border border-primary/20 text-primary text-sm font-bold hover:bg-primary/5 transition-all">
                    <span>Log in</span>
                  </Link>
                )}
                <Link to="/admin" className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/5 text-primary hover:bg-primary/10 transition-all" title="Admin Dashboard">
                  <span className="material-symbols-outlined">admin_panel_settings</span>
                </Link>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-primary/20">
                  <img
                    className="w-full h-full object-cover"
                    alt="User profile avatar placeholder"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO6BX5TKsym30xp2iybqJZxaIZ3v85aDvOUVW4y7NhqshmlFLH4AvKFrE27BO4NbGlkYF2nwwuI8VrhhVKCuDfic0Jv35TRgWaRG-00MCtQrw1-r-SQtWny2_cs4l7gwaRqW2LajZ5C9GqeN5jh7rnqdwkUOkJAJXUMT1zELuhSEkcOFQtE3Q_f0abIhmUYyXLRMSJspz_sdRv8xMK_nwWHR2R7yqDr2bD1f5aB3FUaLAU-exdiiaAvhKNqnubbcsf_1mCCqH12jKS"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        <Outlet />

        {/* Footer */}
        <footer className="bg-white dark:bg-background-dark border-t border-primary/10 py-12 px-4 md:px-10 lg:px-20 mt-auto">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">About Vinted Burundi</h4>
              <a className="text-sm text-slate-500 hover:text-primary" href="#">How it works</a>
              <a className="text-sm text-slate-500 hover:text-primary" href="#">Mobile apps</a>
              <a className="text-sm text-slate-500 hover:text-primary" href="#">Sustainability</a>
              <a className="text-sm text-slate-500 hover:text-primary" href="#">Press</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">Support</h4>
              <a className="text-sm text-slate-500 hover:text-primary" href="#">Help Center</a>
              <a className="text-sm text-slate-500 hover:text-primary" href="#">Selling guide</a>
              <a className="text-sm text-slate-500 hover:text-primary" href="#">Buying guide</a>
              <a className="text-sm text-slate-500 hover:text-primary" href="#">Safety</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">Legal</h4>
              <a className="text-sm text-slate-500 hover:text-primary" href="#">Privacy Policy</a>
              <a className="text-sm text-slate-500 hover:text-primary" href="#">Terms & Conditions</a>
              <a className="text-sm text-slate-500 hover:text-primary" href="#">Cookie Policy</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">Join our community</h4>
              <div className="flex gap-4">
                <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">social_leaderboard</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">camera</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">play_circle</span>
              </div>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary/10 gap-4">
            <div className="flex items-center gap-2 text-primary opacity-50">
              <span className="material-symbols-outlined text-xl">checkroom</span>
              <span className="text-xs font-bold uppercase tracking-widest">Vinted Burundi 2025</span>
            </div>
            <p className="text-xs text-slate-400">© 2025 Vinted Burundi. All rights reserved. Made for sustainable fashion.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

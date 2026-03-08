import type { FormEvent } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../auth/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login(email, password);
      navigate('/admin');
    } catch (err) {
      setError((err as Error).message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-[calc(100vh-120px)] overflow-hidden px-4 py-10 md:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      </div>

      <section className="relative mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-2xl backdrop-blur-md lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between bg-background-dark p-10 text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-amber-300/80">Vinted Burundi</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight">Welcome Back</h1>
            <p className="mt-5 max-w-sm text-slate-300">Reconnecte-toi et continue à gérer ton marketplace avec une interface claire et rapide.</p>
          </div>
          <div className="space-y-2 text-sm text-slate-300">
            <p>Secure access</p>
            <p>Fast admin workflow</p>
            <p>Protected API routes</p>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Account Access</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Connexion</h2>
          <p className="mt-2 text-sm text-slate-500">Utilise tes identifiants pour accéder à ton espace.</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="login-email" className="mb-1 block text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                id="login-email"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="login-password" className="mb-1 block text-sm font-semibold text-slate-700">
                Mot de passe
              </label>
              <input
                id="login-password"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}
            <button disabled={loading} className="w-full cursor-pointer rounded-xl bg-primary py-3 text-sm font-bold text-white transition hover:bg-primary/90 disabled:opacity-70">
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-500">
            Pas de compte?{' '}
            <Link to="/register" className="cursor-pointer font-bold text-primary hover:underline">
              Créer un compte
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

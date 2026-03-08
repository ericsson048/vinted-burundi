import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="max-w-[960px] mx-auto px-6 py-16">
      <h1 className="text-4xl font-black mb-3">404</h1>
      <p className="text-slate-500 mb-6">Page introuvable.</p>
      <Link to="/" className="text-primary font-bold hover:underline">
        Retour à l’accueil
      </Link>
    </main>
  );
}


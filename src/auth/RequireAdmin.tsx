import type { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from './AuthContext';

export default function RequireAdmin({ children }: { children: ReactElement }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="p-8 text-slate-500">Chargement de la session...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (!user.is_admin) return <Navigate to="/" replace />;
  return children;
}

import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { api, type AuthUser } from '../services/api';

type AuthContextType = {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (fullName: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = api.getAuthToken();
    if (!token) {
      setLoading(false);
      return;
    }
    api
      .me()
      .then((u) => setUser(u))
      .catch(() => {
        api.setAuthToken(null);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      loading,
      async login(email: string, password: string) {
        const res = await api.login({ email, password });
        api.setAuthToken(res.access_token);
        setUser(res.user);
      },
      async register(fullName: string, email: string, password: string) {
        const res = await api.register({ full_name: fullName, email, password });
        api.setAuthToken(res.access_token);
        setUser(res.user);
      },
      logout() {
        api.setAuthToken(null);
        setUser(null);
      },
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

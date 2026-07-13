import type { AuthSession, AuthUser } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react';

import { supabase } from '@/lib/supabase';

interface AuthContextValue {
  session: AuthSession | null;
  user: AuthUser | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * Tracks the Supabase auth session app-wide so any screen can tell whether
 * cloud household sync is usable right now without each doing its own
 * getSession() call. Signing in/out happens directly through supabase.auth
 * (see lib/auth.ts) - this provider only listens and re-renders; it never
 * initiates a sign-in itself. A no-op (permanently loading=false,
 * session=null) when Supabase isn't configured, same graceful-degrade
 * pattern as isDatabaseAvailable for SQLite.
 */
export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<AuthSession | null>(null);
  // No session to check when Supabase isn't configured at all - start
  // "not loading" instead of flipping it inside the effect below, which
  // would be a synchronous setState-in-effect for that branch.
  const [loading, setLoading] = useState(() => !!supabase);

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const value = useMemo(() => ({ session, user: session?.user ?? null, loading }), [session, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
}

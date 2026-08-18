import React, { createContext, useState, useContext, useCallback, useEffect, useRef } from 'react';
import { supabase, isSupabaseConfigured } from '@/api/supabaseClient';

const AuthContext = createContext();

// The only thing behind real auth on this site is /composer/ - posting to the
// public feed. Everything else (likes, comments, favorites) stays anonymous.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [authError, setAuthError] = useState(null);
  // checkUserAuth can be called by more than one mounted ProtectedRoute at
  // once (the double-mount pattern noted in PostEngagement.jsx); this just
  // dedupes those into the one in-flight getSession() call.
  const checkPromiseRef = useRef(null);

  const applySession = useCallback((session) => {
    setUser(session?.user ?? null);
    setIsAuthenticated(Boolean(session?.user));
    setAuthError(null);
  }, []);

  useEffect(() => {
    if (!isSupabaseConfigured) return;
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      applySession(session);
    });
    return () => subscription.subscription.unsubscribe();
  }, [applySession]);

  const checkUserAuth = useCallback(() => {
    if (checkPromiseRef.current) return checkPromiseRef.current;
    if (!isSupabaseConfigured) {
      setAuthError({ type: 'auth_required', message: 'Sign-in is not configured.' });
      setAuthChecked(true);
      return Promise.resolve();
    }
    setIsLoadingAuth(true);
    const promise = supabase.auth.getSession()
      .then(({ data, error }) => {
        if (error) throw error;
        applySession(data.session);
      })
      .catch((err) => {
        setUser(null);
        setIsAuthenticated(false);
        setAuthError({ type: 'auth_required', message: err?.message || 'Could not verify sign-in.' });
      })
      .finally(() => {
        setIsLoadingAuth(false);
        setAuthChecked(true);
        checkPromiseRef.current = null;
      });
    checkPromiseRef.current = promise;
    return promise;
  }, [applySession]);

  const login = useCallback(async (email, password) => {
    if (!isSupabaseConfigured) {
      throw new Error('Sign-in is not configured.');
    }
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    applySession(data.session);
    return data;
  }, [applySession]);

  const logout = useCallback(async () => {
    if (isSupabaseConfigured) await supabase.auth.signOut();
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const navigateToLogin = () => {
    window.location.href = '/composer/login/';
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoadingAuth,
      authChecked,
      authError,
      checkUserAuth,
      login,
      logout,
      navigateToLogin,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

const DefaultFallback = () => (
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
  </div>
);

function ProtectedRouteInner({ fallback, unauthenticatedElement }) {
  const { isAuthenticated, isLoadingAuth, authChecked, authError, checkUserAuth } = useAuth();

  useEffect(() => {
    if (!authChecked && !isLoadingAuth) {
      checkUserAuth();
    }
  }, [authChecked, isLoadingAuth, checkUserAuth]);

  if (isLoadingAuth || !authChecked) {
    return fallback;
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    }
    return unauthenticatedElement;
  }

  if (!isAuthenticated) {
    return unauthenticatedElement;
  }

  return <Outlet />;
}

// AuthProvider mounts here rather than at the app root, so AuthContext (and
// the @supabase/supabase-js it imports) only ever loads for the one route
// that needs it. ProtectedRoute is itself lazy-loaded from App.jsx, so this
// whole module - and this import - only fetches on a /composer visit.
export default function ProtectedRoute({ fallback = <DefaultFallback />, unauthenticatedElement }) {
  return (
    <AuthProvider>
      <ProtectedRouteInner fallback={fallback} unauthenticatedElement={unauthenticatedElement} />
    </AuthProvider>
  );
}

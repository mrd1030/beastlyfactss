import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Starts false, not true: there's no real async check below yet (just a
  // synchronous stub), so starting this true forced every client hydration to
  // render a spinner-only tree first, then discard and rebuild the entire app
  // a moment later - a full-tree remount on every single page load, and the
  // root cause of an 8.5s mobile LCP and 0.908 desktop CLS. If real async
  // login is added later, flip this back to true then.
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [authError, setAuthError] = useState(null);

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    // You can add more logout logic later
  };

  const navigateToLogin = () => {
    // Redirect to login page when you create one
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoadingAuth,
      authError,
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

import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const item = localStorage.getItem('beastly-favorites');
      return item ? JSON.parse(item) : [];
    } catch { return []; }
  });

  // === ADDED: Quiz Results Storage ===
  const [savedQuizResults, setSavedQuizResults] = useState(() => {
    try {
      const item = localStorage.getItem('beastly-quiz-results');
      return item ? JSON.parse(item) : [];
    } catch { return []; }
  });

  useEffect(() => {
    try { localStorage.setItem('beastly-favorites', JSON.stringify(favorites)); } catch {}
  }, [favorites]);

  // === ADDED: Persist quiz results ===
  useEffect(() => {
    try { localStorage.setItem('beastly-quiz-results', JSON.stringify(savedQuizResults)); } catch {}
  }, [savedQuizResults]);

  const toggleFavorite = (factId) => {
    setFavorites(prev =>
      prev.includes(factId) ? prev.filter(id => id !== factId) : [...prev, factId]
    );
  };

  const isFavorite = (factId) => favorites.includes(factId);

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('beastly-favorites');
  };

  // === ADDED: Functions to save/remove quiz results ===
  const saveQuizResult = (quizResult) => {
    const newResult = {
      ...quizResult,
      savedAt: new Date().toISOString(),
      id: `quiz-${Date.now()}`
    };
    setSavedQuizResults(prev => [newResult, ...prev].slice(0, 20));
  };

  const removeQuizResult = (id) => {
    setSavedQuizResults(prev => prev.filter(r => r.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      toggleFavorite,
      isFavorite,
      clearFavorites,
      // === ADDED ===
      savedQuizResults,
      saveQuizResult,
      removeQuizResult
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesCtx() {
  return useContext(FavoritesContext);
}
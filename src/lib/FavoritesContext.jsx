import React, { createContext, useContext, useState, useEffect } from 'react';
import { useDailyStreak } from '@/lib/hooks/useLocalStorage';

const FavoritesContext = createContext(null);

export const ACHIEVEMENTS = [
  { id: 'first-fact', emoji: '❤️', title: 'First Fact', description: 'Saved your first fact', check: (s) => s.favoritesCount >= 1 },
  { id: 'fact-collector', emoji: '📚', title: 'Fact Collector', description: 'Saved 10 facts', check: (s) => s.favoritesCount >= 10 },
  { id: 'fact-fanatic', emoji: '🏆', title: 'Fact Fanatic', description: 'Saved 25 facts', check: (s) => s.favoritesCount >= 25 },
  { id: 'quiz-taker', emoji: '🧩', title: 'Quiz Taker', description: 'Completed your first quiz', check: (s) => s.quizzesCompleted >= 1 },
  { id: 'quiz-explorer', emoji: '🔎', title: 'Quiz Explorer', description: 'Completed 5 quizzes', check: (s) => s.quizzesCompleted >= 5 },
  { id: 'quiz-master', emoji: '🎓', title: 'Quiz Master', description: 'Completed 10 quizzes', check: (s) => s.quizzesCompleted >= 10 },
  { id: 'streak-3', emoji: '🔥', title: 'On a Roll', description: '3-day visit streak', check: (s) => s.streakCount >= 3 },
  { id: 'streak-7', emoji: '⚡', title: 'Week-Long Wildling', description: '7-day visit streak', check: (s) => s.streakCount >= 7 },
];

export function FavoritesProvider({ children }) {
  // Single source of truth for the visit streak — Navbar reads it from this
  // context instead of calling useDailyStreak() a second time, since two
  // independent hook instances would race writing the same localStorage key.
  const { streak, recordVisit } = useDailyStreak();
  useEffect(() => { recordVisit(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [favorites, setFavorites] = useState(() => {
    try {
      const item = localStorage.getItem('beastly-favorites');
      return item ? JSON.parse(item) : [];
    } catch { return []; }
  });

  const [savedQuizResults, setSavedQuizResults] = useState(() => {
    try {
      const item = localStorage.getItem('beastly-quiz-results');
      return item ? JSON.parse(item) : [];
    } catch { return []; }
  });

  const [quizzesCompleted, setQuizzesCompleted] = useState(() => {
    try { return parseInt(localStorage.getItem('beastly-quizzes-completed') || '0', 10) || 0; } catch { return 0; }
  });

  useEffect(() => {
    try { localStorage.setItem('beastly-favorites', JSON.stringify(favorites)); } catch {}
  }, [favorites]);

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

  // Call once per quiz completion (personality result shown, trivia/knowledge
  // finished, per-animal quiz finished) — independent of whether the user
  // also chooses to save the result to their Pack.
  const recordQuizCompletion = () => {
    setQuizzesCompleted(prev => {
      const next = prev + 1;
      try { localStorage.setItem('beastly-quizzes-completed', String(next)); } catch {}
      return next;
    });
  };

  const achievementState = { favoritesCount: favorites.length, quizzesCompleted, streakCount: streak };
  const unlockedAchievements = ACHIEVEMENTS.filter(a => a.check(achievementState));

  // Seeded once, on first-ever load, with whatever's already unlocked at that
  // moment — so returning users aren't hit with a pile of toasts for things
  // they achieved before this feature existed. Deliberately NOT effect-driven:
  // an effect here raced with React 18 StrictMode's dev-only double-invoke
  // (the localStorage write leaked into a second "fresh" mount that then read
  // it back and thought everything was already seen). Pending toasts are just
  // unlockedAchievements minus seenAchievements, computed straight in render;
  // seenAchievements is only ever mutated by the explicit dismiss below.
  const [seenAchievements, setSeenAchievements] = useState(() => {
    try {
      const raw = localStorage.getItem('beastly-seen-achievements');
      if (raw !== null) return JSON.parse(raw);
    } catch {}
    const seed = ACHIEVEMENTS.filter(a => a.check(achievementState)).map(a => a.id);
    try { localStorage.setItem('beastly-seen-achievements', JSON.stringify(seed)); } catch {}
    return seed;
  });

  const currentAchievementToast = unlockedAchievements.find(a => !seenAchievements.includes(a.id)) || null;

  const dismissCurrentToast = () => {
    if (!currentAchievementToast) return;
    setSeenAchievements(prev => {
      if (prev.includes(currentAchievementToast.id)) return prev;
      const next = [...prev, currentAchievementToast.id];
      try { localStorage.setItem('beastly-seen-achievements', JSON.stringify(next)); } catch {}
      return next;
    });
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      toggleFavorite,
      isFavorite,
      clearFavorites,
      savedQuizResults,
      saveQuizResult,
      removeQuizResult,
      quizzesCompleted,
      recordQuizCompletion,
      streak,
      unlockedAchievements,
      currentAchievementToast,
      dismissCurrentToast,
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesCtx() {
  return useContext(FavoritesContext);
}

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useDailyStreak } from '@/lib/hooks/useLocalStorage';

const FavoritesContext = createContext(null);

// `description` is what you did, past tense, shown once the badge is earned.
// `hint` is what to do, shown while it is still locked - restating the goal in
// past tense reads as though you have already done it. `target`/`current` drive
// a real progress readout, so a locked badge can say how far along you are
// rather than just what the goal is.
export const ACHIEVEMENTS = [
  { id: 'first-fact', emoji: '❤️', title: 'First Fact', description: 'Saved your first fact', hint: 'Tap the heart on any fact to save it to your Pack.', target: 1, current: (s) => s.favoritesCount, unit: 'fact saved', check: (s) => s.favoritesCount >= 1 },
  { id: 'fact-collector', emoji: '📚', title: 'Fact Collector', description: 'Saved 10 facts', hint: 'Save 10 facts to your Pack.', target: 10, current: (s) => s.favoritesCount, unit: 'facts saved', check: (s) => s.favoritesCount >= 10 },
  { id: 'fact-fanatic', emoji: '🏆', title: 'Fact Fanatic', description: 'Saved 25 facts', hint: 'Save 25 facts to your Pack.', target: 25, current: (s) => s.favoritesCount, unit: 'facts saved', check: (s) => s.favoritesCount >= 25 },
  { id: 'quiz-taker', emoji: '🧩', title: 'Quiz Taker', description: 'Completed your first quiz', hint: 'Finish any quiz, including the Test Yourself quiz on an encyclopedia animal.', target: 1, current: (s) => s.quizzesCompleted, unit: 'quiz completed', check: (s) => s.quizzesCompleted >= 1 },
  { id: 'quiz-explorer', emoji: '🔎', title: 'Quiz Explorer', description: 'Completed 5 quizzes', hint: 'Finish 5 quizzes.', target: 5, current: (s) => s.quizzesCompleted, unit: 'quizzes completed', check: (s) => s.quizzesCompleted >= 5 },
  { id: 'quiz-master', emoji: '🎓', title: 'Quiz Master', description: 'Completed 10 quizzes', hint: 'Finish 10 quizzes.', target: 10, current: (s) => s.quizzesCompleted, unit: 'quizzes completed', check: (s) => s.quizzesCompleted >= 10 },
  { id: 'streak-3', emoji: '🔥', title: 'On a Roll', description: '3-day visit streak', hint: 'Visit Beastly Facts on 3 days in a row.', target: 3, current: (s) => s.streakCount, unit: 'day streak', check: (s) => s.streakCount >= 3 },
  { id: 'streak-7', emoji: '⚡', title: 'Week-Long Wildling', description: '7-day visit streak', hint: 'Visit Beastly Facts on 7 days in a row.', target: 7, current: (s) => s.streakCount, unit: 'day streak', check: (s) => s.streakCount >= 7 },
];

export function FavoritesProvider({ children }) {
  // Single source of truth for the visit streak - Navbar reads it from this
  // context instead of calling useDailyStreak() a second time, since two
  // independent hook instances would race writing the same localStorage key.
  const { streak, recordVisit, loaded: streakLoaded } = useDailyStreak();
  // Waits for the real stored streak to load first (see recordVisit's own
  // guard) - firing this on every mount regardless would see the default
  // {count:0, lastDate:null} and reset every returning visitor's streak to 1.
  // Also skipped entirely during prerendering (prerender.mjs sets this flag) -
  // recordVisit() always WRITES a new value even starting from "no prior
  // visit", and its timing relative to prerender.mjs's own capture-readiness
  // wait is an unrelated race; skipping it keeps captured HTML pinned to the
  // same default state every real client's first hydration pass also starts
  // from, rather than racing to sometimes bake the post-write value in.
  useEffect(() => {
    if (streakLoaded && !window.__IS_PRERENDER__) recordVisit();
  }, [streakLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

  // These three all start at their empty/zero default on every render (server
  // or client) and pick up the real stored value in an effect after mount -
  // see useLocalStorage.js's comment for why: prerender.mjs's puppeteer
  // profile always has empty localStorage, so a returning visitor's real
  // favorites/quiz history would otherwise differ from the server's default
  // on the very first client render, a structural hydration mismatch (these
  // feed unlockedAchievements/currentAchievementToast, which AchievementToast
  // renders above AppLayout's Suspense boundary) severe enough to make React
  // discard and re-render the whole page client-side instead of hydrating it.
  const [favorites, setFavorites] = useState([]);
  const [savedQuizResults, setSavedQuizResults] = useState([]);
  const [quizzesCompleted, setQuizzesCompleted] = useState(0);
  const isFirstFavoritesWrite = React.useRef(true);
  const isFirstQuizResultsWrite = React.useRef(true);

  useEffect(() => {
    try {
      const item = localStorage.getItem('beastly-favorites');
      if (item !== null) setFavorites(JSON.parse(item));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    try {
      const item = localStorage.getItem('beastly-quiz-results');
      if (item !== null) setSavedQuizResults(JSON.parse(item));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    try {
      const stored = parseInt(localStorage.getItem('beastly-quizzes-completed') || '0', 10) || 0;
      if (stored > 0) setQuizzesCompleted(stored);
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    if (isFirstFavoritesWrite.current) {
      isFirstFavoritesWrite.current = false;
      return;
    }
    try { localStorage.setItem('beastly-favorites', JSON.stringify(favorites)); } catch {}
  }, [favorites]);

  useEffect(() => {
    if (isFirstQuizResultsWrite.current) {
      isFirstQuizResultsWrite.current = false;
      return;
    }
    try {
      localStorage.setItem('beastly-quiz-results', JSON.stringify(savedQuizResults));
    } catch {
      // The list is no longer capped, so it can in principle outgrow the
      // storage quota. A bare catch here would mean every save from that point
      // on silently did nothing, which is worse than losing the oldest few:
      // the user would keep pressing Save to Pack and keep seeing it confirm.
      // Drop the oldest results until it fits, then reflect that back into
      // state so what is on screen matches what actually persisted.
      let trimmed = savedQuizResults;
      while (trimmed.length > 1) {
        trimmed = trimmed.slice(0, Math.floor(trimmed.length / 2));
        try {
          localStorage.setItem('beastly-quiz-results', JSON.stringify(trimmed));
          setSavedQuizResults(trimmed);
          return;
        } catch {
          // still too big - halve again
        }
      }
    }
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
    // Deliberately uncapped. Animal-quiz cards are naturally bounded by the
    // number of encyclopedia animals (retaking one replaces its card rather
    // than adding a second), and losing a card someone earned to make room for
    // a newer one is the wrong trade. The persistence effect above handles the
    // storage quota if a collection ever does get large enough to hit it.
    setSavedQuizResults(prev => [newResult, ...prev]);
  };

  const removeQuizResult = (id) => {
    setSavedQuizResults(prev => prev.filter(r => r.id !== id));
  };

  // Call once per quiz completion (personality result shown, trivia/knowledge
  // finished, per-animal quiz finished) - independent of whether the user
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
  // moment - so returning users aren't hit with a pile of toasts for things
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
      // Exposed so the Pack can show how far along a locked badge is, rather
      // than only whether it is earned.
      achievementState,
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

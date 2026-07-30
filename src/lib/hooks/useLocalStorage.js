import { useState, useEffect, useRef } from 'react';

export function useLocalStorage(key, initialValue) {
  // Starts at initialValue on every render, server or client - NOT read from
  // localStorage in a lazy useState initializer like before. prerender.mjs's
  // puppeteer profile always has empty localStorage, so a real returning
  // visitor's own stored value (a saved streak, a light-mode preference,
  // unlocked achievements) would differ from the server's default on the
  // very first client render - a real, structural hydration mismatch (an
  // entire element appearing/disappearing, not just changed text), severe
  // enough that React gave up and re-rendered the whole page client-side.
  // Reading the real value in an effect applies it a moment after hydration
  // completes instead, which is a normal state update, not a mismatch.
  const [value, setValue] = useState(initialValue);
  // Callers that need to read-then-write based on the CURRENT stored value
  // (useDailyStreak's recordVisit, notably) must wait for this to flip true
  // before doing so - otherwise they'd act on the stale initialValue, since
  // the read effect below hasn't necessarily committed its setValue yet.
  const [loaded, setLoaded] = useState(false);
  const isFirstWrite = useRef(true);

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) setValue(JSON.parse(item));
    } catch { /* ignore */ }
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    // Skip the write on mount - at that point `value` is still initialValue
    // (the effect above hasn't necessarily committed its setValue yet), so
    // writing here would clobber whatever was just read with the default.
    if (isFirstWrite.current) {
      isFirstWrite.current = false;
      return;
    }
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch { /* ignore */ }
  }, [key, value]);

  return [value, setValue, loaded];
}

export function useDarkMode() {
  const [dark, setDark] = useLocalStorage('beastly-dark-mode', true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return [dark, setDark];
}

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage('beastly-favorites', []);

  const toggleFavorite = (factId) => {
    setFavorites(prev =>
      prev.includes(factId) ? prev.filter(id => id !== factId) : [...prev, factId]
    );
  };

  const isFavorite = (factId) => favorites.includes(factId);

  return { favorites, toggleFavorite, isFavorite };
}

export function useDailyStreak() {
  const [streak, setStreak, loaded] = useLocalStorage('beastly-streak', { count: 0, lastDate: null });

  const recordVisit = () => {
    // Guard against acting on the default {count:0, lastDate:null} before
    // the real stored streak has been read - otherwise every returning
    // visitor's actual streak gets reset to 1 on every single load, since
    // a null lastDate never matches "today" or "yesterday" below.
    if (!loaded) return;

    const today = new Date().toDateString();
    if (streak.lastDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (streak.lastDate === yesterday.toDateString()) {
      setStreak({ count: streak.count + 1, lastDate: today });
    } else {
      setStreak({ count: 1, lastDate: today });
    }
  };

  return { streak: streak.count, recordVisit, loaded };
}
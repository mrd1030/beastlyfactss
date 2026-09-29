import { useCallback, useEffect, useState } from 'react';

// One dragon, shared by the Critter Keeper page and the floating bubble on
// every other page. A change from either is broadcast, so every copy of the
// hook follows it; the storage event keeps other tabs in step too.
//
// Like useLocalStorage, it starts empty on every render and reads storage
// after mount, so prerendered HTML and the first client render match.
export const GAME_KEY = 'critter-keeper-v1';
const EVENT = 'critter-keeper-change';

export function readGame() {
  try {
    const raw = localStorage.getItem(GAME_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// Cheap check for whether a dragon exists, without parsing the whole save.
export function hasGame() {
  try {
    const raw = localStorage.getItem(GAME_KEY);
    return !!raw && raw !== 'null';
  } catch {
    return false;
  }
}

export function useCritterGame() {
  const [game, setState] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setState(readGame());
    setLoaded(true);
    const onLocal = (e) => setState(e.detail);
    const onStorage = (e) => {
      if (e.key === GAME_KEY) setState(readGame());
    };
    window.addEventListener(EVENT, onLocal);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener(EVENT, onLocal);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const setGame = useCallback((value) => {
    try {
      if (value == null) localStorage.removeItem(GAME_KEY);
      else localStorage.setItem(GAME_KEY, JSON.stringify(value));
    } catch { /* storage full or blocked: the in-memory game still works */ }
    setState(value);
    window.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
  }, []);

  return [game, setGame, loaded];
}

export const CRITTER_EVENT = EVENT;

// The "Show Dex on every page" switch. On unless the player turns it off.
const WIDGET_KEY = 'critter-keeper-widget';
export function widgetOn() {
  try {
    return localStorage.getItem(WIDGET_KEY) !== 'off';
  } catch {
    return true;
  }
}
export function setWidgetOn(on) {
  try {
    localStorage.setItem(WIDGET_KEY, on ? 'on' : 'off');
  } catch { /* ignore */ }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: readGame() }));
}

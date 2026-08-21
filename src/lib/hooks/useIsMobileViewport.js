import { useState, useEffect } from 'react';

// Gates touch-only behavior (swipe gestures, anything that must never fire
// for a desktop/mouse visitor) to narrow viewports. Starts at false on every
// render, server or client, and only updates after mount - same reasoning as
// useDarkMode/useFavorites: prerender.mjs's puppeteer profile has its own
// viewport, so a real client's first render must start from the same
// default this hook's own effect hasn't run against yet, not the visitor's
// actual screen width.
export function useIsMobileViewport() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isMobile;
}

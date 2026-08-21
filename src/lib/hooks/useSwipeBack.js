import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const EDGE_ZONE = 24; // px from the left edge a swipe must start within
const THRESHOLD = 80; // px of horizontal travel to count as a back-swipe

// Mirrors iOS's native edge-swipe-back gesture, which a site (not a real
// native app) doesn't get for free. Pass `enabled` from useIsMobileViewport
// so this never attaches listeners for a desktop/mouse visitor.
export function useSwipeBack(enabled) {
  const navigate = useNavigate();
  const start = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const onTouchStart = (e) => {
      const t = e.touches[0];
      start.current = t.clientX <= EDGE_ZONE ? { x: t.clientX, y: t.clientY } : null;
    };

    const onTouchEnd = (e) => {
      if (!start.current) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - start.current.x;
      const dy = t.clientY - start.current.y;
      start.current = null;
      // Mostly-horizontal, past the threshold, and somewhere to actually go
      // back to - a fresh tab/PWA launch has no history, and navigate(-1)
      // there would strand the gesture with nothing happening.
      if (dx > THRESHOLD && Math.abs(dy) < dx * 0.5 && window.history.length > 1) {
        navigate(-1);
      }
    };

    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [enabled, navigate]);
}

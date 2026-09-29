import React, { Suspense, lazy, useEffect, useState } from 'react';
import { CRITTER_EVENT, hasGame } from '@/lib/critterKeeper/useCritterGame';

// Mounted on every page by AppLayout. It carries almost nothing: it only
// checks, after the page has settled, whether a dragon exists, and only then
// loads the bubble and the game code behind it. Nothing renders during
// prerender or the hydration render, so the baked HTML is untouched.
const CritterBubble = lazy(() => import('@/components/critterKeeper/CritterBubble'));

export default function CritterBubbleSlot() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.__IS_PRERENDER__) return undefined;
    const check = () => {
      if (hasGame()) setShow(true);
    };
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(check, { timeout: 4000 })
      : window.setTimeout(check, 1500);
    window.addEventListener(CRITTER_EVENT, check);
    window.addEventListener('storage', check);
    return () => {
      if (window.cancelIdleCallback && window.requestIdleCallback) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      window.removeEventListener(CRITTER_EVENT, check);
      window.removeEventListener('storage', check);
    };
  }, []);

  if (!show) return null;
  return (
    <Suspense fallback={null}>
      <CritterBubble />
    </Suspense>
  );
}

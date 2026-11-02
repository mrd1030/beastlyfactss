import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Mounted on every page by AppLayout. Nothing renders during prerender or the
// hydration render, so the baked HTML is untouched; the chat's code loads
// only once the page has settled.
const AskBeastlyChat = lazy(() => import('@/components/ask/AskBeastlyChat'));

const HIDDEN_ON = ['/composer'];

export default function AskBeastlyChatSlot() {
  const [ready, setReady] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.__IS_PRERENDER__) return undefined;
    const go = () => setReady(true);
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(go, { timeout: 4000 })
      : window.setTimeout(go, 1500);
    return () => {
      if (window.cancelIdleCallback && window.requestIdleCallback) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
    };
  }, []);

  if (!ready) return null;
  if (HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return null;
  // The installed Beastle app has its own bar and no room for a chat.
  if (document.documentElement.classList.contains('beastle-app')) return null;

  return (
    <Suspense fallback={null}>
      <AskBeastlyChat />
    </Suspense>
  );
}

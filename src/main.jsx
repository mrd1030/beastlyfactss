import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from '@/App.jsx'
import { preloadForCurrentRoute } from '@/lib/routePreload'
import '@/index.css'

// A successful boot means this load matches the current deploy - clear any
// leftover guard from a prior reload attempt.
sessionStorage.removeItem('vite-reload-on-preload-error')

// Every route is React.lazy()-loaded by content-hashed chunk URLs. If a new
// deploy lands while a tab is already open, navigating to a route whose chunk
// hash changed 404s and crashes the whole app with an uncaught error. Vite
// emits this event specifically for that case - reload once to fetch the
// current build instead of leaving the user stuck. Guarded against reload
// loops if the failure somehow persists after reloading.
window.addEventListener('vite:preloadError', () => {
  if (!sessionStorage.getItem('vite-reload-on-preload-error')) {
    sessionStorage.setItem('vite-reload-on-preload-error', '1');
    window.location.reload();
  }
});

const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// hydrateRoot, not createRoot: createRoot always discards the prerendered
// static HTML and rebuilds the entire page from scratch on every load
// (confirmed directly via a MutationObserver - the whole app root gets
// removed then re-added as one operation), which is what was causing large,
// real layout shifts (the footer or hero content briefly vanishing, then
// reappearing). hydrateRoot reuses the existing DOM instead - but it requires
// the client's first render to structurally match the prerendered HTML, and
// this app's route-level (and Home's internal) React.lazy() components would
// normally suspend on that first render since their chunks haven't loaded
// yet, which mismatches the server's fully-resolved output. That mismatch is
// exactly why hydrateRoot was tried and reverted before (commit 30c123b,
// React errors #418/#423) - preloadForCurrentRoute() awaits just the chunks
// the current URL actually needs first, so by the time hydrateRoot runs,
// nothing has to suspend.
preloadForCurrentRoute().finally(() => {
  ReactDOM.hydrateRoot(document.getElementById('root'), app);
});

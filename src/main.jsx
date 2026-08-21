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
// reappearing). hydrateRoot reuses the existing DOM instead, but getting it
// to actually succeed (rather than silently falling back to a full client
// rebuild) took several independent fixes, since this app's "server" HTML
// comes from a real headless browser (prerender.mjs) rather than true
// react-dom/server SSR:
//   - Any React.lazy() component whose chunk isn't loaded yet suspends on
//     the hydration-critical first render, which the prerendered HTML never
//     shows - preloadForCurrentRoute() awaits every chunk the current URL
//     needs before hydrateRoot runs so nothing suspends. Home's 8 internal
//     sections go through a synchronous cache (homePreload.js) instead of
//     React.lazy()+Suspense entirely, since even a fully-preloaded lazy()
//     factory still throws a fresh promise on its first render.
//   - Any <Suspense> boundary at all fails to hydrate against this app's
//     prerendered HTML, regardless of whether its content ever actually
//     suspends - confirmed directly (a node-identity test) that puppeteer's
//     page.content() never contains the internal marker comments
//     react-dom/server emits around resolved Suspense boundaries, and
//     hydrateRoot needs them. AppLayout skips wrapping its routed content in
//     <Suspense> on the hydration-critical first render and adds it back
//     right after, for client-side navigations only.
//   - Inline style attributes get reformatted by prerender.mjs to match
//     React's own serialization exactly (see that file's comment) - the
//     browser's native cssText format otherwise never matches what React
//     expects to find, on ANY element with a style prop, motion-driven or not.
//   - Framer Motion animations that mount unconditionally (not gated by
//     whileInView) get their animate/initial/style props suppressed until
//     just after mount (see motion-safe.js) - otherwise either the captured
//     mid-animation value is non-deterministic, or the style string itself
//     mismatches for the same formatting reason as above.
//   - Any JSX with an expression directly adjacent to static text or another
//     expression (e.g. `Page {page} of {totalPages}`, no element tag between
//     them) mismatches too: React's client render creates one DOM text node
//     per adjacent child, but the browser's own HTML serialization of
//     however many of those already got rendered just produces one
//     continuous text run - a real client re-parsing that merges them back
//     into a single node, the wrong count for React to reconcile. Fixed by
//     consolidating each such run into one template-literal expression
//     throughout the app.
//   - Effects that imperatively mutate the DOM or populate state gating what
//     renders (GlossaryHighlighter, TableOfContents, PostSidebar's related-
//     posts shuffle, PostEngagement's like/comment fetch) are skipped during
//     prerendering the same way as useLocalStorage.js's deferred reads -
//     otherwise they can settle before prerender.mjs captures the page,
//     baking state a fresh client's first render can't match yet.
preloadForCurrentRoute().finally(() => {
  ReactDOM.hydrateRoot(document.getElementById('root'), app);

  const splash = document.getElementById('app-splash');
  if (splash) {
    splash.classList.add('is-hiding');
    setTimeout(() => splash.remove(), 300);
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

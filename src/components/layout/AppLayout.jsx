import React, { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer';
import BottomTabs from './BottomTabs';
import AchievementToast from '../shared/AchievementToast';

// Shown for every client-side navigation whose route chunk hasn't loaded
// yet this session (first visit to that page). A generic card-grid shape
// rather than a bespoke skeleton per route: this fallback covers every
// lazy page (Facts, Guides, Encyclopedia, Beastlypedia, Blog, Pack...), and
// approximating "a title, a subtitle, a row of cards" reads as content
// incoming for all of them, versus a bare spinner that promises nothing.
const PageLoadingFallback = () => (
  <div role="status" className="w-full min-h-[60vh] px-4 sm:px-6 pt-8 max-w-7xl mx-auto animate-pulse" aria-live="polite">
    <span className="sr-only">Loading…</span>
    <div className="h-8 w-56 max-w-[60%] bg-muted rounded-lg mb-3" />
    <div className="h-4 w-80 max-w-full bg-muted rounded-lg mb-8" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-2xl border border-border bg-card p-5">
          <div className="h-6 w-6 bg-muted rounded-full mb-3" />
          <div className="h-4 w-3/4 bg-muted rounded mb-2.5" />
          <div className="h-3 w-full bg-muted rounded mb-1.5" />
          <div className="h-3 w-5/6 bg-muted rounded" />
        </div>
      ))}
    </div>
  </div>
);

// pt-14 for navbar + on mobile pb-16 for bottom tabs
const RoutedContent = () => (
  <>
    <main className="flex-1 pt-14 pb-0 md:pb-0">
      <div className="pb-16 md:pb-0">
        <Outlet />
      </div>
    </main>
    <Footer />
  </>
);

export default function AppLayout() {
  // Whether to wrap the routed content in <Suspense> at all. This app's
  // prerendered HTML comes from a real headless browser (puppeteer's
  // page.content()), not react-dom/server - confirmed directly (via a
  // node-identity test) that react-dom/server's internal comment markers
  // around resolved Suspense boundaries are simply never present in that
  // captured HTML, and hydrateRoot cannot correctly hydrate ANY <Suspense>
  // boundary without them - it fails and discards the whole root even when
  // the boundary's content is 100% static and identical on both sides.
  // Skipping Suspense entirely on the hydration-critical first render (both
  // prerender's own capture and the real client, gated the same way as
  // motion-safe.js's mounted flag) sidesteps this: nothing needs to actually
  // suspend on that first render anyway, since every lazy route chunk is
  // already preloaded before hydrateRoot runs (see routePreload.js). Once
  // hydration succeeds, `ready` flips true and Suspense wraps normally for
  // client-side navigations to a route whose chunk hasn't loaded yet.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!window.__IS_PRERENDER__) setReady(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body">

      <Navbar />
      <AchievementToast />
      {/* Suspense scoped to just the routed page + Footer, not the whole
          layout - a lazy route's chunk loading (e.g. first visit to a page
          this session) must only show a spinner here, not unmount/remount
          Navbar/AchievementToast. When Suspense wrapped the whole Routes
          tree (including this layout) in App.jsx, that shared boundary
          suspending on the Outlet's chunk load orphaned AchievementToast
          mid-exit-animation, leaving it stuck forever even though its
          underlying state was already correctly cleared.
          Footer is INSIDE this boundary, not a sibling after it: every page
          component is lazy()-loaded, so every non-hydration render does a
          full client-side render from scratch. With Footer outside this
          boundary, it rendered immediately next to the loading spinner, then
          visually jumped from "just below a small spinner" to "below the
          full routed page" the moment the chunk resolved - a real, measured
          layout-shift culprit (PageSpeed attributed ~90% of this site's CLS
          to the footer element). Keeping Footer suspended alongside Outlet
          means it never renders until the real content is ready, so it has
          no wrong position to jump from. */}
      {ready ? (
        <Suspense fallback={
          <main className="flex-1 pt-14 pb-0 md:pb-0">
            <PageLoadingFallback />
          </main>
        }>
          <RoutedContent />
        </Suspense>
      ) : (
        <RoutedContent />
      )}
      {/* Mobile-only bottom navigation */}
      <BottomTabs />
    </div>
  );
}
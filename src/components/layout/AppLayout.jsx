import React, { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer';
import BeastlyBuddy from '../shared/BeastlyBuddy';
import BottomTabs from './BottomTabs';
import AchievementToast from '../shared/AchievementToast';

const PageLoadingFallback = () => (
  <div className="w-full min-h-[60vh] flex flex-col items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
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
      <BeastlyBuddy />
      {/* Mobile-only bottom navigation */}
      <BottomTabs />
    </div>
  );
}
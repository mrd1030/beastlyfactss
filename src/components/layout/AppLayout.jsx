import React, { Suspense } from 'react';
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

export default function AppLayout() {
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
          component is lazy()-loaded and main.jsx uses createRoot() (not
          hydrateRoot - that was tried and reverted, see commit 30c123b, for
          causing React hydration errors #418/#423 given this same lazy/
          Suspense architecture), so every load does a full client-side
          render from scratch. With Footer outside this boundary, it rendered
          immediately next to the loading spinner, then visually jumped from
          "just below a small spinner" to "below the full routed page" the
          moment the chunk resolved - a real, measured layout-shift culprit
          (PageSpeed attributed ~90% of this site's CLS to the footer
          element). Keeping Footer suspended alongside Outlet means it never
          renders until the real content is ready, so it has no wrong
          position to jump from. */}
      <Suspense fallback={
        <main className="flex-1 pt-14 pb-0 md:pb-0">
          <PageLoadingFallback />
        </main>
      }>
        {/* pt-14 for navbar + on mobile pb-16 for bottom tabs */}
        <main className="flex-1 pt-14 pb-0 md:pb-0">
          <div className="pb-16 md:pb-0">
            <Outlet />
          </div>
        </main>
        <Footer />
      </Suspense>
      <BeastlyBuddy />
      {/* Mobile-only bottom navigation */}
      <BottomTabs />
    </div>
  );
}
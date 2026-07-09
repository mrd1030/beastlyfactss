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
      {/* pt-14 for navbar + on mobile pb-16 for bottom tabs */}
      <main className="flex-1 pt-14 pb-0 md:pb-0">
        <div className="pb-16 md:pb-0">
          {/* Suspense scoped to just the routed page, not the whole layout - a
              lazy route's chunk loading (e.g. first visit to a page this
              session) must only show a spinner here, not unmount/remount
              Navbar/AchievementToast/Footer. When Suspense wrapped the whole
              Routes tree (including this layout) in App.jsx, that shared
              boundary suspending on the Outlet's chunk load orphaned
              AchievementToast mid-exit-animation, leaving it stuck forever
              even though its underlying state was already correctly cleared. */}
          <Suspense fallback={<PageLoadingFallback />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
      <BeastlyBuddy />
      {/* Mobile-only bottom navigation */}
      <BottomTabs />
    </div>
  );
}
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layers, BookOpen, Compass, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const tabs = [
  { to: '/',             label: 'Home',    icon: Home },
  { to: '/facts/',       label: 'Facts',   icon: Compass },
  { to: '/encyclopedia/',label: 'Browse',  icon: Layers },
  { to: '/blog/',        label: 'Critter Digest',  icon: BookOpen },
  { to: '/pack/',        label: 'My Pack', icon: Heart },
];

export default function BottomTabs() {
  const { pathname } = useLocation();
  const rowRef = useRef(null);
  const [tabWidth, setTabWidth] = useState(0);

  // Measured in pixels (not left:"X%") because animating a percentage-based
  // `left` via Framer Motion's `animate` prop silently never updated here -
  // it applied the initial value once and then stopped tracking changes on
  // every subsequent route change. `x` (a transform) is Framer Motion's most
  // reliably-animated value, so the indicator's position is computed in
  // pixels from the actual rendered row width instead.
  useEffect(() => {
    // Skipped during prerendering: this effect measures real layout and can
    // settle (tabWidth > 0) before prerender.mjs captures the page, baking
    // the sliding indicator <motion.div> into the static HTML. A real
    // client's hydration-time first render always starts at tabWidth=0 (the
    // useState default), which hides that div entirely (tabWidth > 0 gates
    // it) - a structural mismatch, not just a style difference. Same class
    // of issue as BeastlyBuddy's footerVisible/useLocalStorage's deferred
    // reads, just driven by ResizeObserver instead.
    if (window.__IS_PRERENDER__) return;
    const el = rowRef.current;
    if (!el) return;
    const update = () => setTabWidth(el.offsetWidth / tabs.length);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Mark active: exact for home; for others match the section with or without
  // the trailing slash so /facts and /facts/ both light up.
  const activeIndex = tabs.findIndex(({ to }) => {
    const base = to.replace(/\/$/, '');
    return to === '/' ? pathname === '/' : (pathname === base || pathname.startsWith(`${base}/`));
  });

  return (
    /* md:hidden = only visible on mobile */
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border no-select"
      style={{ paddingBottom: 'var(--safe-area-inset-bottom)' }}
      aria-label="Mobile navigation"
    >
      <div ref={rowRef} className="flex items-stretch h-14 relative">
        {/* Single persistent indicator, animated by position instead of a
            per-tab layoutId - the previous version mounted a separate
            motion.div per active tab and relied on Framer Motion's
            cross-component layoutId FLIP animation to slide it between them,
            which could get stuck mid-transition (froze at its initial
            compensating transform and never animated back to identity)
            since the two divs are genuinely different DOM nodes swapping via
            conditional rendering, not a single element being reordered. */}
        {activeIndex >= 0 && tabWidth > 0 && (
          <motion.div
            className="absolute top-0 left-0 h-0.5 flex justify-center pointer-events-none"
            style={{ width: tabWidth }}
            animate={{ x: activeIndex * tabWidth }}
            transition={{ type: 'spring', stiffness: 500, damping: 45 }}
          >
            <div className="w-8 h-0.5 bg-secondary rounded-full" />
          </motion.div>
        )}
        {tabs.map(({ to, label, icon: Icon }, i) => {
          const active = i === activeIndex;
          return (
            <Link
              key={to}
              to={to}
              aria-label={label}
              aria-current={active ? 'page' : undefined}
              className="flex-1 flex flex-col items-center justify-center gap-0.5"
            >
              <Icon
                className={`w-5 h-5 transition-colors ${active ? 'text-secondary' : 'text-muted-foreground'}`}
                strokeWidth={active ? 2.2 : 1.8}
              />
              <span
                className={`text-[10px] font-display font-semibold transition-colors ${
                  active ? 'text-secondary' : 'text-muted-foreground'
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

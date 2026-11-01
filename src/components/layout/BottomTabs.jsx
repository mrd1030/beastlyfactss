import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Compass, Newspaper, Heart } from 'lucide-react';
import { motion } from '@/lib/motion-safe';

const tabs = [
  { to: '/guides/', label: 'Guides',   icon: BookOpen },
  { to: '/facts/',  label: 'Facts',    icon: Compass },
  { to: '/blog/',   label: 'Articles', icon: Newspaper },
  { to: '/pack/',   label: 'My Pack',  icon: Heart },
];

// Article pages only: /blog/<slug>/, not the /blog/ index or its category
// views, which are lists the tabs help navigate.
const isArticle = (pathname) => /^\/blog\/(?!category\/)[^/]+\/?$/.test(pathname);

export default function BottomTabs() {
  const { pathname } = useLocation();
  const rowRef = useRef(null);
  const [tabWidth, setTabWidth] = useState(0);
  // On an article the bar slides down out of the way while the reader scrolls
  // down, and slides back on a tap anywhere on the page, on scrolling back near
  // the top, or on reaching the end. Owner request 2026-11-01: more room to
  // read on a phone. Starts shown, so prerendered HTML and the first client
  // render agree.
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(false);
    if (window.__IS_PRERENDER__ || !isArticle(pathname)) return;
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const nearTop = y < 80;
        const nearEnd = window.innerHeight + y >= document.documentElement.scrollHeight - 40;
        if (nearTop || nearEnd) setHidden(false);
        else if (y - lastY > 8) setHidden(true);
        lastY = y;
        ticking = false;
      });
    };
    // A tap fires click; a scroll gesture does not.
    const onTap = () => setHidden(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onTap);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onTap);
    };
  }, [pathname]);

  // Lets fixed elements that sit above the bar (the critter bubble) follow it.
  useEffect(() => {
    const root = document.documentElement;
    if (hidden) root.setAttribute('data-tabs-hidden', '');
    else root.removeAttribute('data-tabs-hidden');
    return () => root.removeAttribute('data-tabs-hidden');
  }, [hidden]);

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
    // Deferred to rAF rather than called synchronously here: Navbar mounts
    // before this component (see AppLayout.jsx) and its useDarkMode effect
    // writes document.documentElement.classList on mount. React fires every
    // component's useEffect for one commit in a single synchronous flush, so
    // an immediate offsetWidth read here forced the browser to synchronously
    // recompute the style/layout that write had just invalidated - a forced
    // reflow on every page load. rAF lets that flush settle naturally first.
    const rafId = requestAnimationFrame(update);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
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
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border no-select transition-transform duration-300 ease-out ${hidden ? 'translate-y-full' : 'translate-y-0'}`}
      style={{ paddingBottom: 'var(--safe-area-inset-bottom)' }}
      onFocus={() => setHidden(false)}
      aria-label="Mobile navigation"
      data-site-chrome
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
                className={`text-[10px] font-body font-semibold transition-colors ${
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

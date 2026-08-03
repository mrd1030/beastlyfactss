// Home's internal sections used to be React.lazy()-loaded, preloaded via
// routePreload.js's import() calls before hydrateRoot() runs. That still
// caused a hydration mismatch: React.lazy()'s own factory function returns a
// BRAND NEW promise the first time IT calls it (during Home's first render),
// even when the underlying module is already fetched and cached by the
// browser - and React throws that promise to suspend regardless of how fast
// it will resolve. Confirmed directly via a MutationObserver snapshot of the
// true hydration-critical DOM: Home's own <Suspense fallback={null}> showed
// nothing at all (every section missing) while the prerendered HTML had
// them fully rendered - a structural mismatch, not a timing coincidence.
//
// The fix: don't use React.lazy() for these at all. Preload into this plain
// module-level cache (populated by preloadForCurrentRoute() before
// hydrateRoot() is ever called), and have Home.jsx read from the cache
// synchronously - by the time Home first renders during hydration, every
// entry is already resolved, so nothing ever throws or suspends. Code
// splitting is preserved (each section is still its own chunk, fetched only
// when a route needs it) - this only changes HOW the already-fetched module
// gets handed to React, not whether it's fetched separately.
const modules = {
  FeaturedEvent: () => import('@/components/home/FeaturedEvent'),
  TrendingFacts: () => import('@/components/home/TrendingFacts'),
  FactPhotoStrip: () => import('@/components/home/FactPhotoStrip'),
  FactsToGuidesBanner: () => import('@/components/home/FactsToGuidesBanner'),
  CategoryBrowse: () => import('@/components/home/CategoryBrowse'),
  BeastlypediaTeaser: () => import('@/components/home/BeastlypediaTeaser'),
  EncyclopediaTeaser: () => import('@/components/home/EncyclopediaTeaser'),
  GuideSpotlight: () => import('@/components/home/GuideSpotlight'),
  CritterDigestPreview: () => import('@/components/home/CritterDigestPreview'),
  DexTeaser: () => import('@/components/home/DexTeaser'),
  Newsletter: () => import('@/components/shared/Newsletter'),
};

const cache = {};
let preloadPromise = null;

// Memoized - safe to call again from Home.jsx's own effect (client-side nav
// to "/" without going through routePreload.js's boot-time call) without
// kicking off a second round of imports.
export function preloadHomeChildren() {
  if (!preloadPromise) {
    preloadPromise = Promise.allSettled(
      Object.entries(modules).map(([name, load]) =>
        load().then((mod) => { cache[name] = mod.default; })
      )
    );
  }
  return preloadPromise;
}

export function getHomeChild(name) {
  return cache[name] || null;
}

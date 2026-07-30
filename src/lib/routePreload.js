// Mirrors App.jsx's lazy() route imports and Home.jsx's internal lazy child
// imports, so main.jsx can preload whichever chunks the CURRENT URL actually
// needs BEFORE calling hydrateRoot(). hydrateRoot requires the client's first
// render pass to structurally match the prerendered HTML (which always shows
// fully-resolved content - prerender.mjs waits for everything to settle); if
// a lazy() component's module isn't loaded yet, React must suspend instead,
// which shows a fallback that doesn't match the server output. That mismatch
// is exactly what caused the React errors (#418/#423) that led to hydrateRoot
// being reverted before (see commit 30c123b) - preloading here is what makes
// hydration actually work this time instead of just trying it blind again.
//
// This intentionally duplicates the import() specifiers in App.jsx/Home.jsx
// rather than sharing a single route-config object, to avoid restructuring
// either file's JSX Routes - Vite/Rollup dedupes a module by its specifier
// regardless of how many places call import() on it, so this doesn't create
// a second copy of any chunk.
//
// mdxPosts.js is imported dynamically inside preloadForCurrentRoute() below,
// NOT statically here - this module is imported eagerly by main.jsx on every
// single page, and mdxPosts.js statically pulls in mdx-meta.json (~925KB of
// site-wide article metadata). A static import here would put that file in
// the main bundle for every page load, the exact anti-pattern already fixed
// once today for DexTeaser/chronicles.js (see that commit's message).

function pathIs(pathname, exact) {
  return pathname === exact || pathname === `${exact}/`;
}

// Order matters: more specific prefixes must be checked before their more
// general parents (e.g. /encyclopedia/animal/ before /encyclopedia).
const ROUTE_PRELOADS = [
  [p => p.startsWith('/encyclopedia/animal/'), () => import('@/pages/EncyclopediaAnimal')],
  [p => p.startsWith('/encyclopedia'), () => import('@/pages/Encyclopedia')],
  [p => p.startsWith('/guides/category/'), () => import('@/pages/Guides')],
  [p => pathIs(p, '/guides'), () => import('@/pages/Guides')],
  [p => p.startsWith('/guides/'), () => import('@/pages/GuideDetail')],
  [p => p.startsWith('/facts'), () => import('@/pages/Facts')],
  [p => p.startsWith('/gear'), () => import('@/pages/Gear')],
  [p => p.startsWith('/blog'), () => import('@/pages/Blog')],
  [p => p.startsWith('/chronicles'), () => import('@/pages/Chronicles')],
  [p => p.startsWith('/quiz') || pathIs(p, '/trivia'), () => import('@/pages/Quiz')],
  [p => pathIs(p, '/pack'), () => import('@/pages/Pack')],
  [p => pathIs(p, '/about'), () => import('@/pages/About')],
  [p => pathIs(p, '/contact'), () => import('@/pages/Contact')],
  [p => p.startsWith('/animal-facts'), () => import('@/pages/AnimalFacts')],
  [p => p.startsWith('/fact-files'), () => import('@/pages/FactFiles')],
  [p => p.startsWith('/gallery'), () => import('@/pages/Gallery')],
  [p => p.startsWith('/donate/success'), () => import('@/pages/DonateSuccess')],
  [p => p.startsWith('/donate/cancel'), () => import('@/pages/DonateCancel')],
  [p => p.startsWith('/donate'), () => import('@/pages/Donate')],
  [p => pathIs(p, '/terms'), () => import('@/pages/Terms')],
  [p => pathIs(p, '/privacy'), () => import('@/pages/Privacy')],
  [p => pathIs(p, '/categories'), () => import('@/pages/Categories')],
  [p => pathIs(p, '/search'), () => import('@/pages/Search')],
  [p => pathIs(p, '/glossary'), () => import('@/pages/Glossary')],
];

// Home itself is a static (non-lazy) import in App.jsx, but it still renders
// these 8 lazy children behind its own internal <Suspense fallback={null}>.
const HOME_CHILD_PRELOADS = [
  () => import('@/components/home/TrendingFacts'),
  () => import('@/components/home/FactsToGuidesBanner'),
  () => import('@/components/home/CategoryBrowse'),
  () => import('@/components/home/EncyclopediaTeaser'),
  () => import('@/components/home/GuideSpotlight'),
  () => import('@/components/home/CritterDigestPreview'),
  () => import('@/components/home/DexTeaser'),
  () => import('@/components/shared/Newsletter'),
];

// Preloads whatever the current URL needs. Never throws - a failed/slow
// preload just means hydration falls back to React's normal (safe, if
// imperfect) mismatch recovery for that one page, same as before this existed.
export async function preloadForCurrentRoute() {
  const pathname = window.location.pathname;
  const jobs = [];

  if (pathname === '/') {
    jobs.push(...HOME_CHILD_PRELOADS.map(load => load()));
  } else {
    const match = ROUTE_PRELOADS.find(([test]) => test(pathname));
    if (match) jobs.push(match[1]());

    // Blog post detail (not the /blog or /blog/category/:x listing views)
    // renders its MDX body through a SEPARATE lazy()-per-article loader
    // (see mdxPosts.js) - preload that specific article's chunk too.
    if (pathname.startsWith('/blog/') && !pathname.startsWith('/blog/category/')) {
      const slug = pathname.replace(/^\/blog\//, '').replace(/\/$/, '');
      if (slug) {
        jobs.push(
          import('@/lib/mdxPosts').then(({ findMdxLoaderBySlug }) => {
            const loader = findMdxLoaderBySlug(slug);
            return loader ? loader() : null;
          })
        );
      }
    }
  }

  if (!jobs.length) return;
  await Promise.allSettled(jobs);
}

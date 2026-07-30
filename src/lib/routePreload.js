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

// Preloads whatever the current URL needs. Never throws - a failed/slow
// preload just means hydration falls back to React's normal (safe, if
// imperfect) mismatch recovery for that one page, same as before this existed.
export async function preloadForCurrentRoute() {
  const pathname = window.location.pathname;
  const jobs = [];

  if (pathname === '/') {
    // Home's 8 internal sections - see homePreload.js for why these go
    // through a plain cache instead of React.lazy().
    const { preloadHomeChildren } = await import('@/lib/homePreload');
    jobs.push(preloadHomeChildren());
  } else {
    const match = ROUTE_PRELOADS.find(([test]) => test(pathname));
    if (match) jobs.push(match[1]());

    // Blog post detail (not the /blog or /blog/category/:x listing views)
    // renders its MDX body via MdxArticleBody (see mdxPosts.js) - preload
    // that specific article's chunk too, by its exact slug from the URL.
    if (pathname.startsWith('/blog/') && !pathname.startsWith('/blog/category/')) {
      const slug = pathname.replace(/^\/blog\//, '').replace(/\/$/, '');
      if (slug) {
        jobs.push(
          import('@/lib/mdxPosts').then(({ preloadMdxBySlug }) => preloadMdxBySlug(slug))
        );
      }
    }

    // Chronicles reader (/chronicles/:seriesId/:part) doesn't carry a slug
    // directly in the URL - the specific story is found by sorted position
    // among that series' MDX + Sanity-fetched parts, and Sanity's aren't
    // available synchronously here. Rather than guess the position (wrong
    // guess = hydration mismatch, same class of bug this preloading exists
    // to prevent), preload EVERY MDX part of the matching series - bounded
    // and small (a handful of episodes per character), so whichever one the
    // URL actually resolves to is always already cached.
    const chroniclesMatch = pathname.match(/^\/chronicles\/([^/]+)\/(\d+)\/?$/);
    if (chroniclesMatch) {
      const seriesId = chroniclesMatch[1];
      jobs.push(
        Promise.all([
          import('@/lib/chroniclesPosts'),
          import('@/lib/chronicles'),
          import('@/lib/mdxPosts'),
        ]).then(([{ mdxChroniclesPosts }, { seriesForSlug }, { preloadMdxBySlug }]) =>
          Promise.allSettled(
            mdxChroniclesPosts
              .filter(post => seriesForSlug(post.slug.current)?.id === seriesId)
              .map(post => preloadMdxBySlug(post.slug.current))
          )
        )
      );
    }
  }

  if (!jobs.length) return;
  await Promise.allSettled(jobs);
}

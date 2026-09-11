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
// The page loaders themselves live in routeRegistry.jsx, shared with App.jsx,
// so the preloaded component can also be rendered synchronously on the
// hydration render (see the comment there for why lazy() cannot be).
//
// mdxPosts.js is imported dynamically inside preloadForCurrentRoute() below,
// NOT statically here - this module is imported eagerly by main.jsx on every
// single page, and mdxPosts.js statically pulls in mdx-meta.json (~925KB of
// site-wide article metadata). A static import here would put that file in
// the main bundle for every page load, the exact anti-pattern already fixed
// once today for DexTeaser/chronicles.js (see that commit's message).

import { preloadRoute } from '@/lib/routeRegistry';

function pathIs(pathname, exact) {
  return pathname === exact || pathname === `${exact}/`;
}

// Order matters: more specific prefixes must be checked before their more
// general parents (e.g. /encyclopedia/animal/ before /encyclopedia).
//
// Every route in App.jsx must have an entry here. A route that is missing
// renders through lazy() on the hydration render and suspends at the root,
// where AppLayout deliberately has no Suspense boundary; React's retry then
// hydrated against the wrong nodes, logged #418 and never committed, leaving
// the page as static HTML with no interactivity. It passed on a fast
// connection and failed on a slow one, so it looked intermittent. Reproduced
// by delaying only the route chunk; see routeRegistry.jsx.
const ROUTE_PRELOADS = [
  [p => p.startsWith('/encyclopedia/animal/'), 'EncyclopediaAnimal'],
  [p => p.startsWith('/encyclopedia'), 'Encyclopedia'],
  [p => p.startsWith('/guides/category/'), 'Guides'],
  [p => pathIs(p, '/guides'), 'Guides'],
  [p => p.startsWith('/guides/'), 'GuideDetail'],
  [p => p.startsWith('/facts'), 'Facts'],
  [p => p.startsWith('/gear'), 'Gear'],
  [p => p.startsWith('/blog'), 'Blog'],
  [p => p.startsWith('/chronicles'), 'Chronicles'],
  [p => pathIs(p, '/quiz'), 'QuizHub'],
  [p => p.startsWith('/quiz/') || pathIs(p, '/trivia'), 'Quiz'],
  [p => pathIs(p, '/pack'), 'Pack'],
  [p => pathIs(p, '/about'), 'About'],
  [p => pathIs(p, '/contact'), 'Contact'],
  [p => p.startsWith('/animal-facts'), 'AnimalFacts'],
  [p => p.startsWith('/fact-files'), 'FactFiles'],
  [p => p.startsWith('/gallery'), 'Gallery'],
  [p => p.startsWith('/donate/success'), 'DonateSuccess'],
  [p => p.startsWith('/donate/cancel'), 'DonateCancel'],
  [p => p.startsWith('/donate'), 'Donate'],
  [p => pathIs(p, '/terms'), 'Terms'],
  [p => pathIs(p, '/privacy'), 'Privacy'],
  [p => pathIs(p, '/categories'), 'Categories'],
  [p => p.startsWith('/search'), 'Search'],
  [p => pathIs(p, '/glossary'), 'Glossary'],
  [p => pathIs(p, '/exotic-pet-laws'), 'ExoticPetLawsHub'],
  [p => p.startsWith('/exotic-pet-laws'), 'ExoticPetLaws'],
  [p => p.startsWith('/beastlypedia/group/'), 'Beastlypedia'],
  [p => pathIs(p, '/beastlypedia'), 'Beastlypedia'],
  [p => p.startsWith('/beastlypedia/'), 'BeastfileDetail'],
  [p => p.startsWith('/care-packages/store'), 'CarePackagesStore'],
  [p => p.startsWith('/care-packages/why-we-exist'), 'CarePackagesWhyWeExist'],
  [p => p.startsWith('/care-packages/faq'), 'CarePackagesFaq'],
  [p => pathIs(p, '/care-packages'), 'CarePackages'],
  [p => p.startsWith('/feed'), 'Feed'],
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
    if (match) jobs.push(preloadRoute(match[1]));

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

    // The exotic pet law hub renders its prose through MdxArticleBody (see
    // ExoticPetLawsHub.jsx), so its MDX chunk needs preloading by slug for the
    // same reason a blog post's does.
    if (pathIs(pathname, '/exotic-pet-laws')) {
      jobs.push(
        import('@/lib/mdxPosts').then(({ preloadMdxBySlug }) =>
          preloadMdxBySlug('exotic-pet-legal-hub')
        )
      );
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

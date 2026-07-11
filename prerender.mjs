/**
 * prerender.mjs
 *
 * Runs after `vite build`. Starts a local Vite preview server, visits every
 * route with a headless browser, and writes the fully-rendered HTML to
 * dist/<route>/index.html so Netlify serves real content to crawlers without
 * needing JavaScript.
 *
 * Dynamic /blog/:slug routes are discovered by querying Sanity at build time.
 */

import puppeteer from 'puppeteer';
import { preview } from 'vite';
import { mkdir, writeFile, readdir, readFile } from 'fs/promises';
import path from 'path';

const DIST = './dist';
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

const SANITY_PROJECT = '7nqbs1gk';
const SANITY_DATASET = 'production';

// Encyclopedia category slugs (mirrors encyclopediaCategories in encyclopedia.js)
const ENCYCLOPEDIA_CATEGORIES = [
  'geckos', 'lizards', 'snakes', 'turtles-tortoises',
  'small-mammals', 'birds', 'dogs', 'cats', 'invertebrates', 'amphibians', 'fish',
];

// Fun-facts category slugs (mirrors `categories` in src/lib/data/facts.js, slugified)
const FACT_CATEGORIES = [
  'birds', 'dogs-and-cats', 'mammals', 'ocean', 'reptiles', 'weird-and-wonderful',
];

// Chronicles series slug prefixes (mirrors CHRONICLES_SERIES in src/lib/chronicles.js).
// Their stories render on /chronicles/<id>/<part>, not /blog/<slug> - the old
// blog URLs 301 in public/_redirects.
const CHRONICLES_PREFIXES = { dex: 'chronicles-of-dex', otis: 'chronicles-of-otis' };
const isChroniclesSlug = (slug) =>
  Object.values(CHRONICLES_PREFIXES).some(prefix => slug.startsWith(prefix));

// Mirrors slugify in src/lib/utils/slugify.js (incl. the "&"/"and" rule that
// makes "Small & Exotic Pets" produce "small-and-exotic-pets").
const slugifyCategory = (text) => text.toString().toLowerCase()
  .replace(/\s*&\s*|\s+and\s+/g, '-and-')
  .replace(/\s+/g, '-')
  .replace(/[^a-z0-9-]/g, '')
  .replace(/-+/g, '-')
  .replace(/^-|-$/g, '');

// Blog category pages for categories that exist only in MDX frontmatter
// (e.g. "Comparisons") - Blog.jsx renders pills for these alongside the
// Sanity-backed ones, so they need prerendered pages too or the pill links
// 404 on a hard load. Sanity-backed category routes come from
// getSanityRoutes(); pass them in so overlapping slugs aren't doubled.
async function getMdxCategoryRoutes(existingRoutes) {
  const existing = new Set(existingRoutes);
  const routes = new Set();
  // Not content/short-story: those posts render on /chronicles/, and their
  // "Short Stories" category pill is filtered out of the blog UI anyway.
  for (const dir of ['content/blog', 'content/guides', 'content/fun-facts']) {
    try {
      const files = await readdir(dir);
      for (const file of files.filter(f => f.endsWith('.mdx'))) {
        const raw = await readFile(path.join(dir, file), 'utf-8');
        const match = raw.match(/^category:\s*["']?([^"'\r\n]+)["']?/m);
        if (!match) continue;
        const slug = slugifyCategory(match[1].trim());
        // site-news 301s to the welcome post; short-stories 301s to /chronicles/
        if (!slug || slug === 'site-news' || slug === 'short-stories') continue;
        const route = `/blog/category/${slug}`;
        if (!existing.has(route)) routes.add(route);
      }
    } catch {}
  }
  return [...routes];
}

// Reads slug from MDX frontmatter; falls back to filename if not set
async function getMdxRoutes() {
  const contentDirs = ['content/blog', 'content/guides', 'content/fun-facts', 'content/short-story'];
  const routes = [];
  for (const dir of contentDirs) {
    try {
      const files = await readdir(dir);
      for (const file of files.filter(f => f.endsWith('.mdx'))) {
        const raw = await readFile(path.join(dir, file), 'utf-8');
        const match = raw.match(/^slug:\s*["']?([^"'\r\n]+)["']?/m);
        const slug = match ? match[1].trim() : file.replace('.mdx', '');
        if (isChroniclesSlug(slug)) continue; // rendered via getChroniclesRoutes()
        routes.push(`/blog/${slug}`);
      }
    } catch {}
  }
  return routes;
}

// Chronicles part routes: /chronicles/<series> (part 1) plus /chronicles/<series>/<n>.
// Parts = MDX short-story files + Sanity short-story posts, ordered by date - must stay consistent with groupChronicles() in src/lib/chronicles.js.
async function getChroniclesRoutes() {
  const stories = [];
  try {
    const files = await readdir('content/short-story');
    for (const file of files.filter(f => f.endsWith('.mdx'))) {
      const raw = await readFile(path.join('content/short-story', file), 'utf-8');
      const slugM = raw.match(/^slug:\s*["']?([^"'\r\n]+)["']?/m);
      const dateM = raw.match(/^date:\s*["']?([^"'\r\n]+)["']?/m);
      stories.push({
        slug: slugM ? slugM[1].trim() : file.replace('.mdx', ''),
        date: dateM ? dateM[1].trim() : '',
      });
    }
  } catch {}
  try {
    // Matched by slug prefix, not category tag - see getSanityRoutes() for why.
    const q = encodeURIComponent(
      '*[_type == "post" && defined(slug.current) && slug.current match "chronicles-of-*"]{ "slug": slug.current, publishedAt }'
    );
    const res = await fetch(`https://${SANITY_PROJECT}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${q}`);
    const data = await res.json();
    for (const p of data.result || []) stories.push({ slug: p.slug, date: p.publishedAt || '' });
  } catch (err) {
    console.warn('⚠️  Could not fetch Sanity chronicles posts:', err.message);
  }

  // A story can briefly exist in both MDX and Sanity mid-migration - count it once.
  const dedupedSlugs = [...new Set(stories.map(s => s.slug))];

  const routes = [];
  for (const [id, prefix] of Object.entries(CHRONICLES_PREFIXES)) {
    const partCount = dedupedSlugs.filter(s => s.startsWith(prefix)).length;
    routes.push(`/chronicles/${id}`); // landing list
    for (let n = 1; n <= partCount; n++) routes.push(`/chronicles/${id}/${n}`);
  }
  return routes;
}

// All encyclopedia animal IDs (mirrors encyclopediaAnimals in encyclopedia.js)
const ENCYCLOPEDIA_ANIMAL_IDS = [
  'crested-gecko','leopard-gecko','gargoyle-gecko','mourning-gecko','tokay-gecko',
  'african-fat-tail','leaf-tailed-gecko',
  'bearded-dragon','blue-tongue-skink','ackie-monitor','tegu','chameleon-jackson','veiled-chameleon',
  'green-anole','savannah-monitor','uromastyx',
  'ball-python','corn-snake','hognose-snake','boa-constrictor','kingsnake','milk-snake',
  'red-eared-slider','russian-tortoise','sulcata-tortoise','box-turtle',
  'hamster','hedgehog','rabbit','guinea-pig','chinchilla','ferret','sugar-glider',
  'budgie','cockatiel','conure','african-grey','lovebird','canary','cockatoo',
  'labrador','golden-retriever','german-shepherd','french-bulldog','border-collie','siberian-husky',
  'domestic-shorthair','maine-coon','siamese','ragdoll','bengal','persian',
  'tarantula','praying-mantis','millipede','hissing-cockroach','stick-insect','emperor-scorpion',
  'jumping-spider','hermit-crab',
  'pacman-frog','axolotl','whites-tree-frog','fire-belly-toad','tiger-salamander',
  'betta-fish','goldfish','koi','guppy','angelfish','corydoras-catfish','neon-tetra','oscar',
];

// All care guide IDs (mirrors guidesExtended.js + dogCatGuides.js)
const GUIDE_IDS = [
  'crested-gecko','leopard-gecko','gargoyle-gecko','mourning-gecko','hognose-snake',
  'chameleon','veiled-chameleon','ball-python','bearded-dragon','blue-tongue-skink','corn-snake',
  'ackie-monitor','boa-constrictor','tegu','leaf-tailed-gecko','red-eared-slider',
  'hamster','rabbit','hedgehog','guinea-pig','chinchilla','sugar-glider','african-grey',
  'budgie','lovebird','tokay-gecko','african-fat-tail','uromastyx','savannah-monitor',
  'green-anole','california-kingsnake','milk-snake','russian-tortoise','sulcata-tortoise',
  'box-turtle','ferret','tarantula','praying-mantis','millipede','emperor-scorpion',
  'hissing-cockroach','stick-insect','jumping-spider','hermit-crab','whites-tree-frog','pacman-frog','fire-belly-toad',
  'axolotl','tiger-salamander','cockatiel','conure','canary','cockatoo',
  'dog-universal','dog-small-breed','dog-medium-breed','dog-large-breed','dog-labrador',
  'dog-golden-retriever','dog-german-shepherd','dog-french-bulldog','dog-border-collie',
  'dog-siberian-husky','cat-universal','cat-domestic-shorthair','cat-maine-coon',
  'cat-siamese','cat-ragdoll','cat-bengal','cat-persian',
  'betta-fish','goldfish','koi','guppy','angelfish','corydoras-catfish','neon-tetra','oscar',
];

// Static routes - must match App.jsx routes (excluding noindex/user-specific pages)
const STATIC_ROUTES = [
  '/',
  '/facts',
  '/blog',
  '/encyclopedia',
  '/guides',
  '/gear',
  '/quiz/personality',
  '/quiz/trivia',
  '/quiz/knowledge',
  '/about',
  '/contact',
  '/glossary',
  '/animal-facts',
  '/fact-files',
  '/categories',
  '/search',
  '/donate',
  '/terms',
  '/privacy',
  ...ENCYCLOPEDIA_CATEGORIES.map(s => `/encyclopedia/category/${s}`),
  ...ENCYCLOPEDIA_CATEGORIES.map(s => `/guides/category/${s}`),
  ...FACT_CATEGORIES.map(s => `/facts/category/${s}`),
  ...ENCYCLOPEDIA_ANIMAL_IDS.map(id => `/encyclopedia/animal/${id}`),
  ...GUIDE_IDS.map(id => `/guides/${id}`),
];

async function getSanityRoutes() {
  try {
    // Short-story posts render on /chronicles/, not /blog/ - see getChroniclesRoutes().
    // Excluded by slug prefix (not by category tag) so this can't silently break if the
    // "Short Stories" category gets renamed/re-slugged in Sanity - the slug prefix is the
    // one thing guaranteed stable (see CHRONICLES_PREFIXES / isChroniclesSlug above).
    const postQuery = encodeURIComponent(
      '*[_type == "post" && defined(slug.current)]{ "slug": slug.current }'
    );
    const catQuery = encodeURIComponent(
      '*[_type == "category" && defined(slug.current) && count(*[_type == "post" && !(_id in path("drafts.**")) && references(^._id)]) > 0]{ "slug": slug.current }'
    );

    const [postRes, catRes] = await Promise.all([
      fetch(`https://${SANITY_PROJECT}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${postQuery}`),
      fetch(`https://${SANITY_PROJECT}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${catQuery}`),
    ]);

    const [postData, catData] = await Promise.all([postRes.json(), catRes.json()]);

    const blogRoutes = (postData.result || [])
      .filter(p => !isChroniclesSlug(p.slug))
      .map(p => `/blog/${p.slug}`);
    // /category/X 301s to /blog/category/X in _redirects (retired duplicate route) - don't prerender it.
    // /blog/category/short-stories 301s to /chronicles/ in _redirects - don't prerender it either.
    const blogCategoryRoutes = (catData.result || [])
      .filter(c => c.slug !== 'short-stories')
      .map(c => `/blog/category/${c.slug}`);

    return [...blogRoutes, ...blogCategoryRoutes];
  } catch (err) {
    console.warn('⚠️  Could not fetch Sanity dynamic routes:', err.message);
    return [];
  }
}

async function renderRoute(page, route) {
  const url = `${BASE_URL}${route}`;
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

  // networkidle0 fires when the JS chunk downloads, but react-helmet-async
  // may not have applied this route's <head> yet. Don't capture until the
  // canonical equals this route's production URL and a meta description is
  // present (noindex pages are exempt - they opt out of SEO tags). Every
  // route including '/' must pass. A timeout is a hard failure: capturing
  // early ships a generic <head> to production, which is worse than a
  // failed build. Timeouts are retried by renderWorker.
  const expectedCanonical = `https://beastlyfacts.com${route === '/' ? '/' : `${route}/`}`;
  await page.waitForFunction(
    (expected) => {
      const robots = document.querySelector('meta[name="robots"]');
      if (robots && /noindex/i.test(robots.getAttribute('content') || '')) return true;
      // MDX article bodies are lazy-loaded (see mdxPosts.js); the Suspense
      // fallback carries [data-mdx-loading] - don't capture until it's gone,
      // or the prerendered HTML ships without the article text.
      if (document.querySelector('[data-mdx-loading]')) return false;
      const canonical = document.querySelector('link[rel="canonical"]');
      const description = document.querySelector('meta[name="description"]');
      return Boolean(
        canonical && canonical.getAttribute('href') === expected &&
        description && description.getAttribute('content')
      );
    },
    { timeout: 30000 },
    expectedCanonical
  );

  return page.content();
}

// A path guaranteed not to match any real route, so it always renders the
// wildcard PageNotFound component - reusing the real app's styling/links
// instead of hand-maintaining a separate static 404 page.
const NOT_FOUND_PROBE_ROUTE = '/__prerender_404_probe__';

async function saveHtml(route, html) {
  const filePath =
    route === '/'
      ? path.join(DIST, 'index.html')
      : path.join(DIST, route.replace(/^\//, ''), 'index.html');

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, html, 'utf-8');
}

// 4 tabs, not 8: each tab parses the full JS bundle, and heavy pages
// (/facts, /encyclopedia, /blog) get CPU-starved at higher concurrency - their <head> never applies within the wait window and the build fails.
const CONCURRENCY = 4;
const MAX_ATTEMPTS = 4; // retries per route before failing the build

async function renderWorker(browser, routes, results) {
  for (const route of routes) {
    let lastErr = null;
    let done = false;
    for (let attempt = 1; attempt <= MAX_ATTEMPTS && !done; attempt++) {
      const page = await browser.newPage();
      await page.setRequestInterception(true);
      page.on('request', req => {
        const u = req.url();
        if (u.includes('googletagmanager') || u.includes('google-analytics') ||
            u.includes('pagead') || u.includes('fundingchoices') ||
            u.includes('fonts.googleapis.com') || u.includes('fonts.gstatic.com')) {
          req.abort();
        } else {
          req.continue();
        }
      });
      try {
        const html = await renderRoute(page, route);
        await saveHtml(route, html);
        console.log(`  ✓ ${route}${attempt > 1 ? ` (attempt ${attempt})` : ''}`);
        results.passed++;
        done = true;
      } catch (err) {
        lastErr = err;
      } finally {
        await page.close();
      }
    }
    if (!done) {
      console.warn(`  ✗ ${route} - ${lastErr.message}`);
      results.failed++;
    }
  }
}

async function main() {
  // On Cloudflare Pages, skip prerender for non-production branches (preview deploys).
  // Set CF_PAGES_BRANCH in the Cloudflare Pages env vars, or SKIP_PRERENDER=true to always skip.
  const branch = process.env.CF_PAGES_BRANCH;
  if (process.env.SKIP_PRERENDER === 'true' || (branch && branch !== 'main')) {
    console.log(`Skipping prerender (branch: ${branch || 'unknown'}, SKIP_PRERENDER=${process.env.SKIP_PRERENDER})`);
    process.exit(0);
  }

  console.log('🔍 Discovering dynamic routes from Sanity and MDX...');
  const [dynamicRoutes, mdxRoutes, chroniclesRoutes] = await Promise.all([
    getSanityRoutes(),
    getMdxRoutes(),
    getChroniclesRoutes(),
  ]);
  const mdxCategoryRoutes = await getMdxCategoryRoutes(dynamicRoutes);
  const allRoutes = [...new Set([...STATIC_ROUTES, ...dynamicRoutes, ...mdxCategoryRoutes, ...mdxRoutes, ...chroniclesRoutes])];
  console.log(`📄 Prerendering ${allRoutes.length} routes with concurrency ${CONCURRENCY}...`);

  const server = await preview({ preview: { port: PORT, open: false } });
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  // Split routes into CONCURRENCY buckets and run in parallel
  const results = { passed: 0, failed: 0 };
  const buckets = Array.from({ length: CONCURRENCY }, (_, i) =>
    allRoutes.filter((_, j) => j % CONCURRENCY === i)
  );
  await Promise.all(buckets.map(bucket => renderWorker(browser, bucket, results)));

  // Cloudflare Pages serves a literal 404.html (with a real 404 status) for
  // any request that doesn't match a static asset or an explicit _redirects
  // rule. Generate it from the actual app instead of hand-writing a separate
  // page, so it always matches the live PageNotFound component/styling.
  try {
    const page = await browser.newPage();
    const html = await renderRoute(page, NOT_FOUND_PROBE_ROUTE);
    await writeFile(path.join(DIST, '404.html'), html, 'utf-8');
    await page.close();
    console.log('  ✓ 404.html');
  } catch (err) {
    console.warn(`  ✗ 404.html - ${err.message}`);
    results.failed++;
  }

  await browser.close();
  server.httpServer.close();

  console.log(`\n🎉 Prerender complete: ${results.passed} succeeded, ${results.failed} failed.`);
  if (results.failed > 0) process.exit(1);
}

main().catch(err => {
  console.error('❌ Prerender script crashed:', err);
  process.exit(1);
});

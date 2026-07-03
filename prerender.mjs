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

// Reads slug from MDX frontmatter; falls back to filename if not set
async function getMdxRoutes() {
  const contentDirs = ['content/blog', 'content/guides', 'content/fun-facts', 'content/short-story'];
  const routes = [];
  for (const dir of contentDirs) {
    try {
      const files = await readdir(dir);
      for (const file of files.filter(f => f.endsWith('.mdx'))) {
        const raw = await readFile(path.join(dir, file), 'utf-8');
        const match = raw.match(/^slug:\s*["']?([^"'\n]+)["']?/m);
        const slug = match ? match[1].trim() : file.replace('.mdx', '');
        routes.push(`/blog/${slug}`);
      }
    } catch {}
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
  'hedgehog','rabbit','guinea-pig','chinchilla','ferret','sugar-glider',
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
  'rabbit','hedgehog','guinea-pig','chinchilla','sugar-glider','african-grey',
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

// Static routes — must match App.jsx routes (excluding noindex/user-specific pages)
const STATIC_ROUTES = [
  '/',
  '/facts',
  '/blog',
  '/encyclopedia',
  '/guides',
  '/quiz/personality',
  '/quiz/trivia',
  '/quiz/knowledge',
  '/about',
  '/contact',
  '/glossary',
  '/animal-facts',
  '/categories',
  '/search',
  '/donate',
  '/terms',
  '/privacy',
  ...ENCYCLOPEDIA_CATEGORIES.map(s => `/encyclopedia/category/${s}`),
  ...ENCYCLOPEDIA_CATEGORIES.map(s => `/guides/category/${s}`),
  ...ENCYCLOPEDIA_ANIMAL_IDS.map(id => `/encyclopedia/animal/${id}`),
  ...GUIDE_IDS.map(id => `/guides/${id}`),
];

async function getSanityRoutes() {
  try {
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

    const blogRoutes = (postData.result || []).map(p => `/blog/${p.slug}`);
    const categoryRoutes = (catData.result || []).map(c => `/category/${c.slug}`);
    const blogCategoryRoutes = (catData.result || []).map(c => `/blog/category/${c.slug}`);

    return [...blogRoutes, ...categoryRoutes, ...blogCategoryRoutes];
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
  // present (noindex pages are exempt — they opt out of SEO tags). Every
  // route including '/' must pass. A timeout is a hard failure: capturing
  // early ships a generic <head> to production, which is worse than a
  // failed build. Timeouts are retried by renderWorker.
  const expectedCanonical = `https://beastlyfacts.com${route === '/' ? '/' : `${route}/`}`;
  await page.waitForFunction(
    (expected) => {
      const robots = document.querySelector('meta[name="robots"]');
      if (robots && /noindex/i.test(robots.getAttribute('content') || '')) return true;
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

async function saveHtml(route, html) {
  const filePath =
    route === '/'
      ? path.join(DIST, 'index.html')
      : path.join(DIST, route.replace(/^\//, ''), 'index.html');

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, html, 'utf-8');
}

// 4 tabs, not 8: each tab parses the full JS bundle, and heavy pages
// (/facts, /encyclopedia, /blog) get CPU-starved at higher concurrency —
// their <head> never applies within the wait window and the build fails.
const CONCURRENCY = 4;
const MAX_ATTEMPTS = 3; // retries per route before failing the build

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
      console.warn(`  ✗ ${route} — ${lastErr.message}`);
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
  const [dynamicRoutes, mdxRoutes] = await Promise.all([getSanityRoutes(), getMdxRoutes()]);
  const allRoutes = [...new Set([...STATIC_ROUTES, ...dynamicRoutes, ...mdxRoutes])];
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

  await browser.close();
  server.httpServer.close();

  console.log(`\n🎉 Prerender complete: ${results.passed} succeeded, ${results.failed} failed.`);
  if (results.failed > 0) process.exit(1);
}

main().catch(err => {
  console.error('❌ Prerender script crashed:', err);
  process.exit(1);
});

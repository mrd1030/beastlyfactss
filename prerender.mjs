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
  'small-mammals', 'birds', 'dogs', 'cats', 'invertebrates', 'amphibians',
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

// Static routes — must match App.jsx routes (excluding noindex/user-specific pages)
const STATIC_ROUTES = [
  '/',
  '/facts',
  '/blog',
  '/encyclopedia',
  '/encyclopedia/guides',
  '/quiz',
  '/about',
  '/contact',
  '/animal-facts',
  '/categories',
  '/search',
  ...ENCYCLOPEDIA_CATEGORIES.map(s => `/encyclopedia/category/${s}`),
  ...ENCYCLOPEDIA_CATEGORIES.map(s => `/encyclopedia/guides/${s}`),
];

async function getSanityRoutes() {
  try {
    const postQuery = encodeURIComponent(
      '*[_type == "post" && defined(slug.current)]{ "slug": slug.current }'
    );
    const catQuery = encodeURIComponent(
      '*[_type == "category" && defined(slug.current) && count(*[_type == "post" && references(^._id)]) > 0]{ "slug": slug.current }'
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

  // For individual blog posts, networkidle0 fires after the Sanity fetch
  // completes but before React re-runs the useEffect that sets selectedPost
  // and updates the Helmet meta tags. Wait for the canonical URL to reflect
  // the post slug — that proves PostView has fully rendered.
  if (/^\/blog\/[^/]+$/.test(route)) {
    const slug = route.split('/').pop();
    try {
      await page.waitForFunction(
        (s) => {
          const canonical = document.querySelector('link[rel="canonical"]');
          return canonical && canonical.getAttribute('href').includes(s);
        },
        { timeout: 8000 },
        slug
      );
    } catch {
      // Post may not have loaded (e.g. local-only post); fall through
    }
  }

  await new Promise(r => setTimeout(r, 300));
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

async function main() {
  console.log('🔍 Discovering dynamic routes from Sanity and MDX...');
  const [dynamicRoutes, mdxRoutes] = await Promise.all([getSanityRoutes(), getMdxRoutes()]);
  // Deduplicate in case MDX slugs overlap with Sanity slugs
  const allRoutes = [...new Set([...STATIC_ROUTES, ...dynamicRoutes, ...mdxRoutes])];
  console.log(`📄 Prerendering ${allRoutes.length} routes (${dynamicRoutes.length} dynamic)...`);

  // Start Vite preview server
  const server = await preview({ preview: { port: PORT, open: false } });

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  let passed = 0;
  let failed = 0;

  for (const route of allRoutes) {
    const page = await browser.newPage();
    // Block ads/analytics to speed up rendering
    await page.setRequestInterception(true);
    page.on('request', req => {
      const url = req.url();
      if (
        url.includes('googletagmanager') ||
        url.includes('google-analytics') ||
        url.includes('pagead') ||
        url.includes('fundingchoices')
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });

    try {
      const html = await renderRoute(page, route);
      await saveHtml(route, html);
      console.log(`  ✓ ${route}`);
      passed++;
    } catch (err) {
      console.warn(`  ✗ ${route} — ${err.message}`);
      failed++;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.httpServer.close();

  console.log(`\n🎉 Prerender complete: ${passed} succeeded, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

main().catch(err => {
  console.error('❌ Prerender script crashed:', err);
  process.exit(1);
});

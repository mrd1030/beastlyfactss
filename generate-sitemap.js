import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseFrontmatter(content) {
  // \r? - MDX files in this repo are a mix of LF and CRLF line endings;
  // an LF-only match silently drops frontmatter and the slug falls back
  // to the filename, putting wrong URLs in the sitemap.
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const result = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
    result[key] = val;
  }
  return result;
}

// Chronicles series slug prefixes (mirrors CHRONICLES_SERIES in src/lib/chronicles.js).
// Their stories live at /chronicles/<id>/<part>/, not /blog/<slug>/.
const chroniclesPrefixes = { dex: 'chronicles-of-dex', otis: 'chronicles-of-otis' };
const isChroniclesSlug = (slug) =>
  Object.values(chroniclesPrefixes).some(prefix => slug.startsWith(prefix));

function getMdxPosts() {
  const contentDirs = ['guides', 'blog', 'fun-facts', 'short-story'];
  const posts = [];
  for (const dir of contentDirs) {
    const dirPath = path.join(__dirname, 'content', dir);
    if (!fs.existsSync(dirPath)) continue;
    for (const file of fs.readdirSync(dirPath).filter(f => f.endsWith('.mdx'))) {
      const content = fs.readFileSync(path.join(dirPath, file), 'utf8');
      const fm = parseFrontmatter(content);
      const slug = fm.slug || file.replace('.mdx', '');
      if (isChroniclesSlug(slug)) continue; // listed via getChroniclesPages()
      // Only emit lastmod when the frontmatter carries a real date - a fabricated build-date lastmod is worse than none at all.
      const lastmod = fm.lastUpdated || fm.date || null;
      posts.push({ path: `/blog/${slug}/`, lastmod, changefreq: 'weekly', priority: '0.7' });
    }
  }
  return posts;
}

// /chronicles/<series>/ (landing list) + /chronicles/<series>/<n>/ per part.
// Part counts = MDX short-story files + Sanity short-story posts per series.
function getChroniclesPages(sanityStorySlugs) {
  const slugs = [...sanityStorySlugs];
  const dirPath = path.join(__dirname, 'content', 'short-story');
  if (fs.existsSync(dirPath)) {
    for (const file of fs.readdirSync(dirPath).filter(f => f.endsWith('.mdx'))) {
      const fm = parseFrontmatter(fs.readFileSync(path.join(dirPath, file), 'utf8'));
      slugs.push(fm.slug || file.replace('.mdx', ''));
    }
  }
  const pages = [];
  for (const [id, prefix] of Object.entries(chroniclesPrefixes)) {
    const partCount = slugs.filter(s => s.startsWith(prefix)).length;
    pages.push({ path: `/chronicles/${id}/`, changefreq: 'weekly', priority: '0.7' });
    for (let n = 1; n <= partCount; n++) {
      pages.push({ path: `/chronicles/${id}/${n}/`, changefreq: 'weekly', priority: '0.7' });
    }
  }
  return pages;
}

const BASE_URL = 'https://beastlyfacts.com';
const PROJECT_ID = '7nqbs1gk';
const DATASET = 'production';

// Encyclopedia category slugs (mirrors encyclopediaCategories in encyclopedia.js)
const encyclopediaCategories = [
  'geckos', 'lizards', 'snakes', 'turtles-tortoises',
  'small-mammals', 'birds', 'dogs', 'cats', 'invertebrates', 'amphibians', 'fish',
];

// Guide filter slugs (mirrors guideFilters in Encyclopedia.jsx, excluding 'all')
const guideFilters = [
  'geckos', 'lizards', 'snakes', 'turtles-tortoises',
  'small-mammals', 'birds', 'dogs', 'cats', 'invertebrates', 'amphibians', 'fish',
];

const staticPages = [
  '/',
  '/about/',
  '/contact/',
  '/categories/',
  '/facts/',
  '/animal-facts/',
  '/fact-files/',
  '/blog/',
  '/encyclopedia/',
  '/guides/',
  '/gear/',
  '/quiz/personality/',
  '/quiz/trivia/',
  '/quiz/knowledge/',
  '/glossary/',

  // Encyclopedia categories
  ...encyclopediaCategories.map(s => `/encyclopedia/category/${s}/`),

  // Guide category filter pages
  ...guideFilters.map(s => `/guides/category/${s}/`),

  // Individual encyclopedia animal pages
  '/encyclopedia/animal/crested-gecko/',
  '/encyclopedia/animal/leopard-gecko/',
  '/encyclopedia/animal/gargoyle-gecko/',
  '/encyclopedia/animal/mourning-gecko/',
  '/encyclopedia/animal/tokay-gecko/',
  '/encyclopedia/animal/african-fat-tail/',
  '/encyclopedia/animal/leaf-tailed-gecko/',
  '/encyclopedia/animal/bearded-dragon/',
  '/encyclopedia/animal/blue-tongue-skink/',
  '/encyclopedia/animal/ackie-monitor/',
  '/encyclopedia/animal/tegu/',
  '/encyclopedia/animal/chameleon-jackson/',
  '/encyclopedia/animal/veiled-chameleon/',
  '/encyclopedia/animal/green-anole/',
  '/encyclopedia/animal/savannah-monitor/',
  '/encyclopedia/animal/uromastyx/',
  '/encyclopedia/animal/ball-python/',
  '/encyclopedia/animal/corn-snake/',
  '/encyclopedia/animal/hognose-snake/',
  '/encyclopedia/animal/boa-constrictor/',
  '/encyclopedia/animal/kingsnake/',
  '/encyclopedia/animal/milk-snake/',
  '/encyclopedia/animal/red-eared-slider/',
  '/encyclopedia/animal/russian-tortoise/',
  '/encyclopedia/animal/sulcata-tortoise/',
  '/encyclopedia/animal/box-turtle/',
  '/encyclopedia/animal/hamster/',
  '/encyclopedia/animal/hedgehog/',
  '/encyclopedia/animal/rabbit/',
  '/encyclopedia/animal/guinea-pig/',
  '/encyclopedia/animal/chinchilla/',
  '/encyclopedia/animal/ferret/',
  '/encyclopedia/animal/sugar-glider/',
  '/encyclopedia/animal/budgie/',
  '/encyclopedia/animal/cockatiel/',
  '/encyclopedia/animal/conure/',
  '/encyclopedia/animal/african-grey/',
  '/encyclopedia/animal/lovebird/',
  '/encyclopedia/animal/canary/',
  '/encyclopedia/animal/cockatoo/',
  '/encyclopedia/animal/labrador/',
  '/encyclopedia/animal/golden-retriever/',
  '/encyclopedia/animal/german-shepherd/',
  '/encyclopedia/animal/french-bulldog/',
  '/encyclopedia/animal/border-collie/',
  '/encyclopedia/animal/siberian-husky/',
  '/encyclopedia/animal/domestic-shorthair/',
  '/encyclopedia/animal/maine-coon/',
  '/encyclopedia/animal/siamese/',
  '/encyclopedia/animal/ragdoll/',
  '/encyclopedia/animal/bengal/',
  '/encyclopedia/animal/persian/',
  '/encyclopedia/animal/tarantula/',
  '/encyclopedia/animal/praying-mantis/',
  '/encyclopedia/animal/millipede/',
  '/encyclopedia/animal/hissing-cockroach/',
  '/encyclopedia/animal/stick-insect/',
  '/encyclopedia/animal/emperor-scorpion/',
  '/encyclopedia/animal/jumping-spider/',
  '/encyclopedia/animal/hermit-crab/',
  '/encyclopedia/animal/pacman-frog/',
  '/encyclopedia/animal/axolotl/',
  '/encyclopedia/animal/whites-tree-frog/',
  '/encyclopedia/animal/fire-belly-toad/',
  '/encyclopedia/animal/tiger-salamander/',
  '/encyclopedia/animal/betta-fish/',
  '/encyclopedia/animal/goldfish/',
  '/encyclopedia/animal/koi/',
  '/encyclopedia/animal/guppy/',
  '/encyclopedia/animal/angelfish/',
  '/encyclopedia/animal/corydoras-catfish/',
  '/encyclopedia/animal/neon-tetra/',
  '/encyclopedia/animal/oscar/',

  // Individual guide detail pages
  '/guides/crested-gecko/',
  '/guides/leopard-gecko/',
  '/guides/gargoyle-gecko/',
  '/guides/mourning-gecko/',
  '/guides/tokay-gecko/',
  '/guides/african-fat-tail/',
  '/guides/leaf-tailed-gecko/',
  '/guides/bearded-dragon/',
  '/guides/blue-tongue-skink/',
  '/guides/chameleon/',
  '/guides/veiled-chameleon/',
  '/guides/green-anole/',
  '/guides/ackie-monitor/',
  '/guides/savannah-monitor/',
  '/guides/uromastyx/',
  '/guides/tegu/',
  '/guides/ball-python/',
  '/guides/corn-snake/',
  '/guides/hognose-snake/',
  '/guides/boa-constrictor/',
  '/guides/california-kingsnake/',
  '/guides/milk-snake/',
  '/guides/red-eared-slider/',
  '/guides/russian-tortoise/',
  '/guides/sulcata-tortoise/',
  '/guides/box-turtle/',
  '/guides/rabbit/',
  '/guides/hamster/',
  '/guides/hedgehog/',
  '/guides/guinea-pig/',
  '/guides/chinchilla/',
  '/guides/ferret/',
  '/guides/sugar-glider/',
  '/guides/budgie/',
  '/guides/cockatiel/',
  '/guides/conure/',
  '/guides/lovebird/',
  '/guides/african-grey/',
  '/guides/canary/',
  '/guides/cockatoo/',
  '/guides/dog-universal/',
  '/guides/dog-small-breed/',
  '/guides/dog-medium-breed/',
  '/guides/dog-large-breed/',
  '/guides/dog-labrador/',
  '/guides/dog-golden-retriever/',
  '/guides/dog-german-shepherd/',
  '/guides/dog-french-bulldog/',
  '/guides/dog-border-collie/',
  '/guides/dog-siberian-husky/',
  '/guides/cat-universal/',
  '/guides/cat-domestic-shorthair/',
  '/guides/cat-maine-coon/',
  '/guides/cat-siamese/',
  '/guides/cat-ragdoll/',
  '/guides/cat-bengal/',
  '/guides/cat-persian/',
  '/guides/tarantula/',
  '/guides/praying-mantis/',
  '/guides/millipede/',
  '/guides/emperor-scorpion/',
  '/guides/hissing-cockroach/',
  '/guides/stick-insect/',
  '/guides/jumping-spider/',
  '/guides/hermit-crab/',
  '/guides/whites-tree-frog/',
  '/guides/pacman-frog/',
  '/guides/fire-belly-toad/',
  '/guides/axolotl/',
  '/guides/tiger-salamander/',
  '/guides/betta-fish/',
  '/guides/goldfish/',
  '/guides/koi/',
  '/guides/guppy/',
  '/guides/angelfish/',
  '/guides/corydoras-catfish/',
  '/guides/neon-tetra/',
  '/guides/oscar/',
];

async function sanityFetch(groqQuery) {
  const url = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${encodeURIComponent(groqQuery)}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.result;
}

async function generateSitemap() {
  console.log('Fetching posts and categories from Sanity...');
  const [posts, categories] = await Promise.all([
    sanityFetch('*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt }'),
    sanityFetch('*[_type == "category" && defined(slug.current)]{ "slug": slug.current }'),
  ]);

  // Short stories live on /chronicles/, not /blog/ (old URLs 301 in _redirects)
  const blogPostPages = posts.filter(p => !isChroniclesSlug(p.slug)).map(p => ({
    path: `/blog/${p.slug}/`,
    lastmod: p._updatedAt.split('T')[0],
    changefreq: 'weekly',
    priority: '0.7',
  }));

  const chroniclesPages = getChroniclesPages(
    posts.map(p => p.slug).filter(isChroniclesSlug)
  );

  // Category and static pages carry no lastmod: stamping them with the build
  // date on every deploy makes the signal meaningless, and omitting lastmod
  // is valid per the sitemap spec.
  // short-story is excluded: /blog/category/short-story/ 301s to /chronicles/
  const blogCategoryPages = categories.filter(c => c.slug !== 'short-story').map(c => ({
    path: `/blog/category/${c.slug}/`,
    changefreq: 'weekly',
    priority: '0.7',
  }));

  const categoryPages = categories.map(c => ({
    path: `/category/${c.slug}/`,
    changefreq: 'weekly',
    priority: '0.7',
  }));

  const mdxPostPages = getMdxPosts();

  // Dedup static pages
  const uniqueStatic = [...new Set(staticPages)];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  uniqueStatic.forEach(path => {
    const isHome = path === '/';
    const isHighFreq = ['/', '/facts/', '/blog/', '/encyclopedia/', '/guides/', '/animal-facts/', '/fact-files/', '/quiz/'].includes(path);
    const isGuideCat = path.startsWith('/guides/category/');
    const isGuideDetail = path.startsWith('/guides/') && !isGuideCat;
    const isEncAnimal = path.startsWith('/encyclopedia/animal/');
    const isEncCat = path.startsWith('/encyclopedia/category/');
    const changefreq = isHighFreq ? 'weekly' : (isGuideDetail || isEncAnimal) ? 'monthly' : 'weekly';
    const priority = isHome ? '1.0' : isHighFreq ? '0.9' : (isEncCat || isGuideCat) ? '0.7' : (isGuideDetail || isEncAnimal) ? '0.6' : '0.7';
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${path}</loc>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  [...blogCategoryPages, ...categoryPages, ...blogPostPages, ...mdxPostPages, ...chroniclesPages].forEach(page => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${page.path}</loc>\n`;
    if (page.lastmod) xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  fs.writeFileSync('./dist/sitemap.xml', xml);
  console.log(`Sitemap written: ${uniqueStatic.length} static + ${blogCategoryPages.length} blog categories + ${categoryPages.length} category pages + ${blogPostPages.length} Sanity posts + ${mdxPostPages.length} MDX posts + ${chroniclesPages.length} chronicles`);
}

generateSitemap().catch(err => {
  console.error('Failed to generate sitemap:', err);
  process.exit(1);
});

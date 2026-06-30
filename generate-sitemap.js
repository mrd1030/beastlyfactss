import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const result = {};
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
    result[key] = val;
  }
  return result;
}

function getMdxPosts(today) {
  const contentDirs = ['guides', 'blog', 'fun-facts', 'short-story'];
  const posts = [];
  for (const dir of contentDirs) {
    const dirPath = path.join(__dirname, 'content', dir);
    if (!fs.existsSync(dirPath)) continue;
    for (const file of fs.readdirSync(dirPath).filter(f => f.endsWith('.mdx'))) {
      const content = fs.readFileSync(path.join(dirPath, file), 'utf8');
      const fm = parseFrontmatter(content);
      const slug = fm.slug || file.replace('.mdx', '');
      const lastmod = fm.lastUpdated || fm.date || today;
      posts.push({ path: `/blog/${slug}/`, lastmod, changefreq: 'weekly', priority: '0.7' });
    }
  }
  return posts;
}

const BASE_URL = 'https://beastlyfacts.com';
const PROJECT_ID = '7nqbs1gk';
const DATASET = 'production';

// Encyclopedia category slugs (mirrors encyclopediaCategories in encyclopedia.js)
const encyclopediaCategories = [
  'geckos', 'lizards', 'snakes', 'turtles-tortoises',
  'small-mammals', 'birds', 'dogs', 'cats', 'invertebrates', 'amphibians',
];

// Guide filter slugs (mirrors guideFilters in Encyclopedia.jsx, excluding 'all')
const guideFilters = [
  'geckos', 'lizards', 'snakes', 'turtles-tortoises',
  'small-mammals', 'birds', 'dogs', 'cats', 'invertebrates', 'amphibians',
];

const staticPages = [
  '/',
  '/about/',
  '/contact/',
  '/categories/',
  '/facts/',
  '/animal-facts/',
  '/blog/',
  '/encyclopedia/',
  '/encyclopedia/guides/',
  '/quiz/personality/',
  '/quiz/trivia/',
  '/quiz/knowledge/',
  '/glossary/',

  // Encyclopedia categories
  ...encyclopediaCategories.map(s => `/encyclopedia/category/${s}/`),

  // Encyclopedia guide filters
  ...guideFilters.map(s => `/encyclopedia/guides/${s}/`),

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
  '/guides/whites-tree-frog/',
  '/guides/pacman-frog/',
  '/guides/fire-belly-toad/',
  '/guides/axolotl/',
  '/guides/tiger-salamander/',
];

async function sanityFetch(groqQuery) {
  const url = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${encodeURIComponent(groqQuery)}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.result;
}

async function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  console.log('Fetching posts and categories from Sanity...');
  const [posts, categories] = await Promise.all([
    sanityFetch('*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt }'),
    sanityFetch('*[_type == "category" && defined(slug.current)]{ "slug": slug.current }'),
  ]);

  const blogPostPages = posts.map(p => ({
    path: `/blog/${p.slug}/`,
    lastmod: p._updatedAt.split('T')[0],
    changefreq: 'weekly',
    priority: '0.7',
  }));

  const blogCategoryPages = categories.map(c => ({
    path: `/blog/category/${c.slug}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.7',
  }));

  const mdxPostPages = getMdxPosts(today);

  // Dedup static pages
  const uniqueStatic = [...new Set(staticPages)];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  uniqueStatic.forEach(path => {
    const isHome = path === '/';
    const isHighFreq = ['/', '/facts/', '/blog/', '/encyclopedia/', '/encyclopedia/guides/', '/animal-facts/', '/quiz/'].includes(path);
    const isGuideDetail = path.startsWith('/guides/');
    const isEncCat = path.startsWith('/encyclopedia/category/') || path.startsWith('/encyclopedia/guides/');
    const changefreq = isHighFreq ? 'weekly' : isGuideDetail ? 'monthly' : 'weekly';
    const priority = isHome ? '1.0' : isHighFreq ? '0.9' : isEncCat ? '0.7' : isGuideDetail ? '0.6' : '0.7';
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  [...blogCategoryPages, ...blogPostPages, ...mdxPostPages].forEach(page => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${page.path}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  fs.writeFileSync('./dist/sitemap.xml', xml);
  console.log(`Sitemap written: ${uniqueStatic.length} static + ${blogCategoryPages.length} blog categories + ${blogPostPages.length} Sanity posts + ${mdxPostPages.length} MDX posts`);
}

generateSitemap().catch(err => {
  console.error('Failed to generate sitemap:', err);
  process.exit(1);
});

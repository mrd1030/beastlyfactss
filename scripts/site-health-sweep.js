import fs from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';

// Deterministic site-health check: finds orphan pages, dead internal links,
// species missing from relatedArticles.js, and missing hero images. Read-only,
// no edits - this is a reporting tool, not a fixer.

const CONTENT_DIRS = ['blog', 'guides', 'fun-facts'];

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { fm: {}, body: raw };
  let fm = {};
  try { fm = parseYaml(match[1]) || {}; } catch { /* leave fm empty on parse error */ }
  return { fm, body: raw.slice(match[0].length) };
}

function readAllArticles() {
  const articles = [];
  for (const dir of CONTENT_DIRS) {
    const dirPath = path.join('content', dir);
    if (!fs.existsSync(dirPath)) continue;
    for (const file of fs.readdirSync(dirPath).filter(f => f.endsWith('.mdx'))) {
      const raw = fs.readFileSync(path.join(dirPath, file), 'utf8');
      const { fm, body } = parseFrontmatter(raw);
      const slug = fm.slug || file.replace('.mdx', '');
      articles.push({ dir, file, slug, fm, body, path: path.join(dirPath, file) });
    }
  }
  return articles;
}

function readStructuredGuideIds() {
  const dirPath = 'src/lib/data/guides';
  const ids = new Set();
  if (!fs.existsSync(dirPath)) return ids;
  for (const file of fs.readdirSync(dirPath).filter(f => f.endsWith('.js') && f !== 'index.js')) {
    const raw = fs.readFileSync(path.join(dirPath, file), 'utf8');
    for (const m of raw.matchAll(/id:\s*["']([a-z0-9-]+)["']/g)) ids.add(m[1]);
  }
  return ids;
}

function readRelatedArticlesKeys() {
  const filePath = 'src/lib/data/relatedArticles.js';
  const raw = fs.readFileSync(filePath, 'utf8');
  const map = {};
  for (const m of raw.matchAll(/'([a-z0-9-]+)':\s*\[([^\]]*)\]/g)) {
    const key = m[1];
    const slugs = [...m[2].matchAll(/'([a-z0-9-]+)'/g)].map(s => s[1]);
    map[key] = slugs;
  }
  return map;
}

// Beastfiles link out to blog articles via their own `relatedFiles: [...]`
// arrays (rendered by RelatedFiles.jsx), a separate mechanism from
// relatedArticles.js. Without reading these too, every article a Beastfile
// links to reads as an orphan.
function readBeastlypediaRelatedFiles() {
  const dirPath = 'src/lib/data/beastlypedia';
  const slugs = [];
  if (!fs.existsSync(dirPath)) return slugs;
  for (const file of fs.readdirSync(dirPath).filter(f => f.endsWith('.js') && f !== 'index.js')) {
    const raw = fs.readFileSync(path.join(dirPath, file), 'utf8');
    for (const m of raw.matchAll(/relatedFiles:\s*\[([^\]]*)\]/g)) {
      for (const s of m[1].matchAll(/'([a-z0-9-]+)'/g)) slugs.push(s[1]);
    }
  }
  return slugs;
}

// The 11 category slugs that actually exist as pages. ENCYCLOPEDIA_CATEGORIES in
// prerender.mjs is the authority: it is what generates /guides/category/<slug>
// and /encyclopedia/category/<slug>, so a link to anything outside it is a 404.
// Read from that file rather than duplicated here, so adding a category in one
// place does not quietly make this check wrong.
function readCategorySlugs() {
  const raw = fs.readFileSync('prerender.mjs', 'utf8');
  const m = raw.match(/const ENCYCLOPEDIA_CATEGORIES = \[([\s\S]*?)\]/);
  const slugs = m ? [...m[1].matchAll(/'([a-z0-9-]+)'/g)].map(x => x[1]) : [];
  // Loudly, not silently. A check that quietly stops checking is how the bad
  // link it exists to catch survived three weeks in the first place.
  if (slugs.length === 0) {
    console.error('site-health-sweep: could not read ENCYCLOPEDIA_CATEGORIES from prerender.mjs.');
    console.error('The category-link check cannot run. Fix the parser above before trusting this report.');
    process.exit(2);
  }
  return new Set(slugs);
}

const articles = readAllArticles();
const slugSet = new Set(articles.map(a => a.slug));
const structuredGuideIds = readStructuredGuideIds();
const relatedArticles = readRelatedArticlesKeys();
const beastlypediaRelatedFiles = readBeastlypediaRelatedFiles();
const categorySlugs = readCategorySlugs();

// Both lists mirror STANDARD_SUFFIXES in src/lib/data/relatedArticles.js. Add a
// suffix there and it belongs in AUTO_SUFFIXES here too, or the next series to
// ship reads as 30-odd orphans it isn't. They are deliberately two lists: the
// quad below is only the four pieces that define a complete care set, and it
// carries the leading dash because it is used to strip a slug down to a species.
const AUTO_SUFFIXES = ['cost-guide', 'handling-guide', 'health-issues-guide',
  'tank-setup-guide', 'feeding-guide', 'enrichment-guide', 'legal-guide'];
const SUFFIXES = ['-cost-guide', '-handling-guide', '-health-issues-guide', '-tank-setup-guide'];

// Inbound link tally: count /blog/<slug>/ and /guides/<slug>/ references
// across every article body, plus credit from relatedArticles.js entries.
const inbound = new Map(articles.map(a => [a.slug, 0]));
const deadBlogLinks = [];
const deadGuidesLinks = [];
const deadCategoryLinks = [];

for (const a of articles) {
  const blogLinks = [...a.body.matchAll(/\]\(\/blog\/([a-z0-9-]+)\/?\)/g)].map(m => m[1]);
  const guidesLinks = [...a.body.matchAll(/\]\(\/guides\/(?!category\/)([a-z0-9-]+)\/?\)/g)].map(m => m[1]);
  // Category links were previously excluded and checked by nothing. A generated
  // slug like /guides/category/reptiles/ (never a category: reptiles are split
  // across geckos/lizards/snakes/turtles-tortoises) shipped in Sep 2026 and was
  // only found when Google crawled it.
  const categoryLinks = [...a.body.matchAll(/\]\(\/(?:guides|encyclopedia)\/category\/([a-z0-9-]+)\/?\)/g)].map(m => m[1]);

  for (const target of blogLinks) {
    if (slugSet.has(target)) {
      inbound.set(target, (inbound.get(target) || 0) + 1);
    } else {
      deadBlogLinks.push({ from: a.path, target });
    }
  }
  for (const target of categoryLinks) {
    if (!categorySlugs.has(target)) deadCategoryLinks.push({ from: a.path, target });
  }
  for (const target of guidesLinks) {
    if (!structuredGuideIds.has(target)) {
      deadGuidesLinks.push({ from: a.path, target });
    }
  }
}
for (const slugs of Object.values(relatedArticles)) {
  for (const s of slugs) inbound.set(s, (inbound.get(s) || 0) + 1);
}
for (const s of beastlypediaRelatedFiles) {
  inbound.set(s, (inbound.get(s) || 0) + 1);
}
// getRelatedArticleSlugs() in relatedArticles.js auto-detects a guide's standard
// articles by matching `${guideId}-${suffix}` against real slugs, so the Deep Dive
// block on GuideDetail.jsx and EncyclopediaAnimal.jsx links them with no
// RELATED_ARTICLES entry required. Credit those the same way. Without this the
// check contradicted itself: missingFromRelatedArticles already knows about
// auto-detection, while the orphan tally counted only literal entries, so a
// species whose manual entry predated its feeding guide reported an orphan that
// is linked on the live site.
for (const a of articles) {
  for (const suffix of AUTO_SUFFIXES) {
    if (a.slug.endsWith(`-${suffix}`)
        && structuredGuideIds.has(a.slug.slice(0, -(suffix.length + 1)))) {
      inbound.set(a.slug, (inbound.get(a.slug) || 0) + 1);
      break;
    }
  }
}

// Orphan pages: zero inbound references from any article body, relatedArticles.js,
// or a Beastfile's relatedFiles list. Skip fun-facts (those are meant to stand
// alone, linked from elsewhere in the UI, not from other article bodies) and the
// single legacy content/blog file.
const orphans = articles
  .filter(a => a.dir === 'guides')
  .filter(a => (inbound.get(a.slug) || 0) === 0)
  .map(a => a.path);

// relatedArticles.js completeness: group guide files into cost/handling/health/tank-setup
// quads by stripping the known suffix, flag any quad-species missing a relatedArticles.js key.
const bySpecies = new Map();
for (const a of articles.filter(x => x.dir === 'guides')) {
  for (const suffix of SUFFIXES) {
    if (a.slug.endsWith(suffix)) {
      const species = a.slug.slice(0, -suffix.length);
      if (!bySpecies.has(species)) bySpecies.set(species, new Set());
      bySpecies.get(species).add(suffix);
      break;
    }
  }
}
// A species is covered if it's a real structured-guide id: getRelatedArticleSlugs
// in relatedArticles.js auto-detects any guide's standard quintet by matching
// `${id}-${suffix}` against real article slugs, exactly like bySpecies above, so
// nothing needs a RELATED_ARTICLES entry just to have its own name as a guide id.
// The remaining case is a relatedArticles.js entry whose key differs from the
// article slug prefix ('oscar' vs 'oscar-fish', 'tegu' vs 'argentine-tegu',
// 'dog-german-shepherd' vs 'german-shepherd') - auto-detection can't find those
// by name, so they still need (and already have) a manual entry.
const coveredSlugs = new Set(Object.values(relatedArticles).flat());
const missingFromRelatedArticles = [...bySpecies.entries()]
  .filter(([, suffixes]) => suffixes.size === 4)
  .map(([species]) => species)
  .filter(species => !structuredGuideIds.has(species) && !SUFFIXES.some(suffix => coveredSlugs.has(species + suffix)));

// Stale relatedArticles.js entries: listed slug has no corresponding file.
const staleRelatedArticles = [];
for (const [key, slugs] of Object.entries(relatedArticles)) {
  for (const s of slugs) {
    if (!slugSet.has(s)) staleRelatedArticles.push({ key, slug: s });
  }
}

// Missing hero images: frontmatter `image:` path with no file on disk.
const missingImages = [];
for (const a of articles) {
  if (!a.fm.image) continue;
  const imgPath = path.join('public', a.fm.image.replace(/^\//, ''));
  if (!fs.existsSync(imgPath)) missingImages.push({ file: a.path, image: a.fm.image });
}

const report = {
  totalArticles: articles.length,
  orphanPages: orphans,
  deadBlogLinks,
  deadGuidesLinks,
  deadCategoryLinks,
  missingFromRelatedArticles,
  staleRelatedArticles,
  missingImages,
};

console.log(JSON.stringify(report, null, 2));

const totalIssues = orphans.length + deadBlogLinks.length + deadGuidesLinks.length
  + deadCategoryLinks.length
  + missingFromRelatedArticles.length + staleRelatedArticles.length + missingImages.length;
console.error(`\nSite health sweep: ${totalIssues} issue(s) found across ${articles.length} articles.`);

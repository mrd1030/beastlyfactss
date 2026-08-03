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

const articles = readAllArticles();
const slugSet = new Set(articles.map(a => a.slug));
const structuredGuideIds = readStructuredGuideIds();
const relatedArticles = readRelatedArticlesKeys();

// Inbound link tally: count /blog/<slug>/ and /guides/<slug>/ references
// across every article body, plus credit from relatedArticles.js entries.
const inbound = new Map(articles.map(a => [a.slug, 0]));
const deadBlogLinks = [];
const deadGuidesLinks = [];

for (const a of articles) {
  const blogLinks = [...a.body.matchAll(/\]\(\/blog\/([a-z0-9-]+)\/?\)/g)].map(m => m[1]);
  const guidesLinks = [...a.body.matchAll(/\]\(\/guides\/(?!category\/)([a-z0-9-]+)\/?\)/g)].map(m => m[1]);

  for (const target of blogLinks) {
    if (slugSet.has(target)) {
      inbound.set(target, (inbound.get(target) || 0) + 1);
    } else {
      deadBlogLinks.push({ from: a.path, target });
    }
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

// Orphan pages: zero inbound references from any article body or relatedArticles.js.
// Skip fun-facts (those are meant to stand alone, linked from elsewhere in the UI,
// not from other article bodies) and the single legacy content/blog file.
const orphans = articles
  .filter(a => a.dir === 'guides')
  .filter(a => (inbound.get(a.slug) || 0) === 0)
  .map(a => a.path);

// relatedArticles.js completeness: group guide files into cost/handling/health/tank-setup
// quads by stripping the known suffix, flag any quad-species missing a relatedArticles.js key.
const SUFFIXES = ['-cost-guide', '-handling-guide', '-health-issues-guide', '-tank-setup-guide'];
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
// A species is covered if ANY relatedArticles entry already lists its guides - the
// key is the structured guide `id` (see GuideDetail.jsx), which often differs from
// the article slug prefix ('oscar' vs 'oscar-fish', 'tegu' vs 'argentine-tegu').
// Matching on key alone reports those as missing when they are already wired up.
const coveredSlugs = new Set(Object.values(relatedArticles).flat());
const missingFromRelatedArticles = [...bySpecies.entries()]
  .filter(([, suffixes]) => suffixes.size === 4)
  .map(([species]) => species)
  .filter(species => !SUFFIXES.some(suffix => coveredSlugs.has(species + suffix)));

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
  missingFromRelatedArticles,
  staleRelatedArticles,
  missingImages,
};

console.log(JSON.stringify(report, null, 2));

const totalIssues = orphans.length + deadBlogLinks.length + deadGuidesLinks.length
  + missingFromRelatedArticles.length + staleRelatedArticles.length + missingImages.length;
console.error(`\nSite health sweep: ${totalIssues} issue(s) found across ${articles.length} articles.`);

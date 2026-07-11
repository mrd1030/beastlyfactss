import fs from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';

// Real YAML parse (unlike the scalar-only line parser in generate-sitemap.js)
// because the app metadata below needs arrays and nested objects intact -
// tags: [...] and faqs: [{q, a}, ...] in particular.
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  try {
    return parseYaml(match[1]) || {};
  } catch {
    return {};
  }
}

// YAML parses noIndex/status into real types (noIndex: true is a boolean,
// not the string 'true' the old line parser produced) - accept both.
const isTruthyFlag = (v) => v === true || v === 'true';
const isUnpublished = (fm) => Boolean(fm.status && fm.status !== 'published');

function readDir(dir) {
  const dirPath = path.join('content', dir);
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath)
    .filter(f => f.endsWith('.mdx'))
    .map(file => {
      const raw = fs.readFileSync(path.join(dirPath, file), 'utf8');
      return { dir, file, fm: parseFrontmatter(raw) };
    });
}

// Same three MDX folders that render at /blog/<slug>/ (see getMdxRoutes() in
// prerender.mjs). content/short-story is handled separately below - those
// render at /chronicles/<id>/<part>/, not /blog/<slug>/.
const CONTENT_DIRS = ['blog', 'guides', 'fun-facts'];

const articles = [];
for (const dir of CONTENT_DIRS) {
  for (const { file, fm } of readDir(dir)) {
    if (isUnpublished(fm) || isTruthyFlag(fm.noIndex)) continue;

    const slug = fm.slug || file.replace('.mdx', '');
    articles.push({
      slug,
      // Matches Blog.jsx's postTitle precedence (post.seoTitle || post.title) -
      // otherwise the RSS title can disagree with what the live page's own
      // <title>/og:title actually say, and different platforms end up
      // showing two different titles for the same article.
      title: fm.seoTitle || fm.title || 'Untitled',
      excerpt: fm.excerpt || fm.description || '',
      date: fm.date || fm.lastUpdated || null,
      image: fm.image || null,
      category: fm.category || null,
    });
  }
}

// Chronicles (content/short-story) get their own array instead of joining
// `articles` - they route to /chronicles/<id>/<part>/, not /blog/<slug>/, and
// public/_worker.js computes that part number itself (mirrors groupChronicles()
// in src/lib/chronicles.js: 1-based position within the series, sorted by date,
// across MDX + Sanity combined) so it needs the raw slug/date, not a link.
const chronicles = [];
for (const { file, fm } of readDir('short-story')) {
  if (isUnpublished(fm) || isTruthyFlag(fm.noIndex)) continue;

  chronicles.push({
    slug: fm.slug || file.replace('.mdx', ''),
    title: fm.seoTitle || fm.title || 'Untitled',
    excerpt: fm.excerpt || fm.description || '',
    date: fm.date || fm.lastUpdated || null,
    image: fm.image || null,
  });
}

fs.writeFileSync('./public/articles.json', JSON.stringify({ articles, chronicles }, null, 2));
console.log(`Synced ${articles.length} MDX articles + ${chronicles.length} MDX chronicles to public/articles.json`);

// --- App metadata module -----------------------------------------------
// src/lib/mdxPosts.js builds its post list from this file instead of an
// eager import.meta.glob, so list/preview views ship only metadata and the
// compiled article bodies stay in their own lazy-loaded chunks. `path` must
// match the keys of the dynamic import.meta.glob in mdxPosts.js exactly.
// noIndex posts are NOT excluded here (they should still render as pages,
// they just stay out of the RSS metadata above); unpublished ones are.
const mdxMeta = [];
for (const dir of [...CONTENT_DIRS, 'short-story']) {
  for (const { file, fm } of readDir(dir)) {
    if (isUnpublished(fm)) continue;

    mdxMeta.push({
      path: `/content/${dir}/${file}`,
      slug: fm.slug || file.replace('.mdx', ''),
      title: fm.title || 'Untitled',
      seoTitle: fm.seoTitle || null,
      excerpt: fm.excerpt || fm.description || '',
      date: fm.date || fm.lastUpdated || null,
      category: fm.category || 'General',
      tags: Array.isArray(fm.tags) ? fm.tags : [],
      readTime: fm.readingTime || fm.readTime || null,
      difficulty: fm.difficulty || null,
      image: fm.image || null,
      imageAlt: fm.imageAlt || fm.title || '',
      emoji: fm.emoji || null,
      lastReviewed: fm.lastReviewed || null,
      canonicalUrl: fm.canonicalUrl || null,
      faqs: Array.isArray(fm.faqs) ? fm.faqs : [],
    });
  }
}

fs.mkdirSync('./src/lib/generated', { recursive: true });
fs.writeFileSync('./src/lib/generated/mdx-meta.json', JSON.stringify(mdxMeta, null, 2));
console.log(`Synced ${mdxMeta.length} MDX post metadata entries to src/lib/generated/mdx-meta.json`);

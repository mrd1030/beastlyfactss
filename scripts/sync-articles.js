import fs from 'node:fs';
import path from 'node:path';

// Mirrors the frontmatter parsing in generate-sitemap.js. \r? handles the
// mix of LF/CRLF line endings across MDX files in this repo.
function parseFrontmatter(content) {
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

// Same three MDX folders that render at /blog/<slug>/ (see getMdxRoutes() in
// prerender.mjs). content/short-story is handled separately below - those
// render at /chronicles/<id>/<part>/, not /blog/<slug>/.
const CONTENT_DIRS = ['blog', 'guides', 'fun-facts'];

const articles = [];
for (const dir of CONTENT_DIRS) {
  const dirPath = path.join('content', dir);
  if (!fs.existsSync(dirPath)) continue;
  for (const file of fs.readdirSync(dirPath).filter(f => f.endsWith('.mdx'))) {
    const raw = fs.readFileSync(path.join(dirPath, file), 'utf8');
    const fm = parseFrontmatter(raw);
    if (fm.status && fm.status !== 'published') continue;
    if (fm.noIndex === 'true') continue;

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
const storyDir = path.join('content', 'short-story');
if (fs.existsSync(storyDir)) {
  for (const file of fs.readdirSync(storyDir).filter(f => f.endsWith('.mdx'))) {
    const raw = fs.readFileSync(path.join(storyDir, file), 'utf8');
    const fm = parseFrontmatter(raw);
    if (fm.status && fm.status !== 'published') continue;
    if (fm.noIndex === 'true') continue;

    chronicles.push({
      slug: fm.slug || file.replace('.mdx', ''),
      title: fm.seoTitle || fm.title || 'Untitled',
      excerpt: fm.excerpt || fm.description || '',
      date: fm.date || fm.lastUpdated || null,
      image: fm.image || null,
    });
  }
}

fs.writeFileSync('./public/articles.json', JSON.stringify({ articles, chronicles }, null, 2));
console.log(`Synced ${articles.length} MDX articles + ${chronicles.length} MDX chronicles to public/articles.json`);

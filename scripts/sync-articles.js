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
// prerender.mjs). content/short-story is intentionally excluded - those
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
    });
  }
}

fs.writeFileSync('./public/articles.json', JSON.stringify({ articles }, null, 2));
console.log(`Synced ${articles.length} MDX articles to public/articles.json`);

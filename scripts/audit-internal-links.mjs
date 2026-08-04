// Reports pages whose body content carries fewer than N internal links.
//
// Runs against dist/, so it sees what a crawler sees rather than what the
// source suggests. Run `node prerender.mjs` first.
//
// The hard part is separating real content links from site chrome. The navbar,
// footer, bottom tabs and breadcrumb appear on every page, and a page whose
// only internal links are the same 40 the footer gives everything is not
// internally linked in any sense that matters. Rather than guess at DOM
// structure, which changes, this derives the chrome empirically: any link
// present on more than BOILERPLATE_RATIO of pages is treated as chrome and
// excluded. What remains is what that page uniquely points at.
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const THRESHOLD = Number(process.argv[2]) || 3;
const BOILERPLATE_RATIO = 0.9;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

const routeOf = (file) => {
  const rel = path.relative(DIST, path.dirname(file)).split(path.sep).join('/');
  return rel === '' ? '/' : `/${rel}/`;
};

// Strip anything a crawler would not treat as page content, plus the JSON-LD
// and preload tags that would otherwise contribute phantom hrefs.
function contentOf(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<head[\s\S]*?<\/head>/i, '');
}

const files = walk(DIST);
if (files.length < 50) {
  console.error(`Only ${files.length} pages in ${DIST}. Run: node prerender.mjs`);
  process.exit(1);
}

const linksByRoute = new Map();
for (const f of files) {
  const route = routeOf(f);
  const html = contentOf(fs.readFileSync(f, 'utf8'));
  const hrefs = new Set();
  for (const m of html.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)) {
    let href = m[1].trim();
    if (!href.startsWith('/')) continue;          // external, anchor, mailto, tel
    if (href.startsWith('//')) continue;          // protocol-relative external
    href = href.split('#')[0].split('?')[0];
    if (!href || href === route) continue;        // self-link
    hrefs.add(href.endsWith('/') ? href : `${href}/`);
  }
  linksByRoute.set(route, hrefs);
}

// Chrome = links that show up nearly everywhere.
const freq = new Map();
for (const set of linksByRoute.values()) {
  for (const h of set) freq.set(h, (freq.get(h) || 0) + 1);
}
const cutoff = linksByRoute.size * BOILERPLATE_RATIO;
const chrome = new Set([...freq.entries()].filter(([, n]) => n >= cutoff).map(([h]) => h));

const rows = [];
for (const [route, set] of linksByRoute) {
  const content = [...set].filter((h) => !chrome.has(h));
  rows.push({ route, total: set.size, content: content.length, links: content });
}

const section = (route) => {
  const seg = route.split('/').filter(Boolean)[0] || '(home)';
  return seg;
};

const thin = rows.filter((r) => r.content < THRESHOLD).sort((a, b) => a.content - b.content || a.route.localeCompare(b.route));

console.log(`Pages scanned      : ${rows.length}`);
console.log(`Chrome links found : ${chrome.size} (on >=${Math.round(BOILERPLATE_RATIO * 100)}% of pages, excluded)`);
console.log(`Below ${THRESHOLD} content links: ${thin.length}\n`);

const bySection = new Map();
for (const r of thin) {
  const s = section(r.route);
  if (!bySection.has(s)) bySection.set(s, []);
  bySection.get(s).push(r);
}

for (const [s, list] of [...bySection.entries()].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`${s}  (${list.length} pages)`);
  for (const r of list.slice(0, 12)) {
    console.log(`   ${String(r.content).padStart(2)}  ${r.route}${r.links.length ? '   -> ' + r.links.slice(0, 3).join(' ') : ''}`);
  }
  if (list.length > 12) console.log(`   ... and ${list.length - 12} more`);
  console.log('');
}

fs.writeFileSync(
  'internal-link-audit.json',
  `${JSON.stringify({ threshold: THRESHOLD, chrome: [...chrome].sort(), pages: rows.sort((a, b) => a.content - b.content) }, null, 2)}\n`
);
console.log('Full data: internal-link-audit.json');

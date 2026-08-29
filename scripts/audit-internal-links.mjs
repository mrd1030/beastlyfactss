// Reports pages whose body content carries fewer than N internal links.
//
// Runs against dist/, so it sees what a crawler sees rather than what the
// source suggests. Run `node prerender.mjs` first - the build does, this runs
// straight after it.
//
// Reporting only unless MAX_THIN_PAGES is set. It is deliberately a ratchet
// rather than a fixed floor: nobody knows what the real number is until a build
// has run, and a threshold picked blind either fails every build on day one or
// is set so loose it never fires. Run it once, read "Below N content links",
// then set MAX_THIN_PAGES to that figure. From then on the count can fall but
// never rise, and each time it falls the number can be lowered again.
//
// This complements check-internal-links.mjs rather than repeating it. That one
// reads .mdx source and enforces a floor of 1 in-body markdown link per
// article. This one reads rendered HTML, so it also covers routes with no .mdx
// behind them at all - /guides/<id>/, /encyclopedia/animal/<id>/, the
// beastlypedia profiles - which is most of what the sitemap holds.
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
// Unset = report only. See the ratchet note above.
const MAX_THIN_PAGES =
  process.env.MAX_THIN_PAGES === undefined ? null : Number(process.env.MAX_THIN_PAGES);

function walk(dir, out = []) {
  // Missing dist/ falls through to the page-count guard below, which explains
  // what to run, rather than surfacing a bare ENOENT stack.
  if (!fs.existsSync(dir)) return out;
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

if (MAX_THIN_PAGES === null) {
  console.log(
    `\nReporting only. To gate the build on this, set MAX_THIN_PAGES=${thin.length} ` +
      '(the current count),\nthen lower it as pages get linked.',
  );
  process.exit(0);
}

if (Number.isNaN(MAX_THIN_PAGES)) {
  console.error(`\nMAX_THIN_PAGES is not a number: "${process.env.MAX_THIN_PAGES}"`);
  process.exit(1);
}

if (thin.length > MAX_THIN_PAGES) {
  console.error(
    `\nFAIL - ${thin.length} pages carry fewer than ${THRESHOLD} content links, ` +
      `budget is ${MAX_THIN_PAGES}.\nLink the new pages from somewhere, or raise ` +
      'MAX_THIN_PAGES deliberately if the growth is intended.',
  );
  process.exit(1);
}

console.log(`\nWithin budget: ${thin.length}/${MAX_THIN_PAGES} thin pages.`);
if (thin.length < MAX_THIN_PAGES) {
  console.log(`Ratchet it down: set MAX_THIN_PAGES=${thin.length}.`);
}

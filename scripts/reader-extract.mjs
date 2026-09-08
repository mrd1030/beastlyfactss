// Renders one species' set of pages as plain text for a reader test: the care
// guide hub, the encyclopedia entry, and every series guide (cost, handling,
// health issues, tank setup, feeding, enrichment, legal, plus any other
// <species>-*-guide.mdx). A reader agent gets these files and nothing else.
//
//   node scripts/reader-extract.mjs <species-id> [<out-dir>]
//
// What a reader sees that raw MDX would hide: ComparisonTable rows as a real
// table, FunFact and KeyTakeaway as labeled paragraphs, the Sources list, the
// Deep Dive list the page renders (from relatedArticles.js), and a list of
// every link the body carries. Affiliate and internal links become plain text
// in the prose. Nothing here is written back to content.
//
// Written 2026-09-08 after two set tests read hand-stripped text and reported
// "tables render as raw code" and "the hub links to nothing", both artifacts
// of the stripping, not the pages.
import fs from 'node:fs';
import path from 'node:path';
import { getDeepDiveSiblings, getRelatedArticleSlugs } from '../src/lib/data/relatedArticles.js';

const species = process.argv[2];
if (!species) { console.error('usage: node scripts/reader-extract.mjs <species-id> [out-dir]'); process.exit(1); }
const outDir = process.argv[3] || path.join('.reader', species);
fs.mkdirSync(outDir, { recursive: true });

const meta = JSON.parse(fs.readFileSync('src/lib/generated/mdx-meta.json', 'utf8')).filter((p) => p.slug);
const posts = meta.map((p) => ({ ...p, _id: p.slug, id: p.slug }));
const titleOf = (slug) => posts.find((p) => p.slug === slug)?.title || slug;

// ---------- MDX body to reader text ----------
const stripTags = (s) => s.replace(/<[^>]+>/g, '');

function renderTable(block) {
  const headers = /headers=\{\[(.*?)\]\}/s.exec(block)?.[1] || '';
  const rowsSrc = /rows=\{\[(.*)\]\}/s.exec(block)?.[1] || '';
  const clean = (s) => s
    .replace(/<>(.*?)<\/>/gs, (_, inner) => JSON.stringify(stripTags(inner)))
    .replace(/<[^>]+>/g, '');
  let headerCells = [];
  let rows = [];
  try {
    headerCells = new Function(`return [${clean(headers)}]`)();
    rows = new Function(`return [${clean(rowsSrc)}]`)();
  } catch {
    return '[table could not be parsed]';
  }
  const line = (cells) => '| ' + cells.map((c) => String(c ?? '').trim()).join(' | ') + ' |';
  return [line(headerCells), '|' + headerCells.map(() => '---').join('|') + '|', ...rows.map(line)].join('\n');
}

function renderBody(body, slug) {
  const links = [];
  let text = body;
  text = text.replace(/<ComparisonTable[\s\S]*?\]\}\s*\/>/g, (m) => '\n' + renderTable(m) + '\n');
  text = text.replace(/<Sources>([\s\S]*?)<\/Sources>/g, (_, inner) =>
    '\nSources listed on this page:\n' + inner.replace(/\]\([^)]*\)/g, ']').replace(/\[([^\]]*)\]/g, '$1'));
  text = text.replace(/<FunFact>([\s\S]*?)<\/FunFact>/g, (_, inner) => '\nFun fact box: ' + inner.trim() + '\n');
  text = text.replace(/<KeyTakeaway>([\s\S]*?)<\/KeyTakeaway>/g, (_, inner) => '\nKey takeaway box: ' + inner.trim() + '\n');
  text = text.replace(/<Figure[^>]*caption="([^"]*)"[^>]*\/>/g, '\n[photo: $1]\n');
  text = text.replace(/<AffiliateLink[^>]*>([\s\S]*?)<\/AffiliateLink>/g, '$1');
  text = text.replace(/<(VetDisclaimer|LegalDisclaimer|AffiliateDisclosure)[^>]*\/>/g, (m) =>
    m.includes('Vet') ? '[Not veterinary advice notice]' : m.includes('Legal') ? '[Legal disclaimer notice]' : '[Affiliate disclosure notice]');
  text = text.replace(/\[([^\]]*)\]\((\/[^)\s]+)\)/g, (_, t, u) => { links.push(`${t} -> ${u}`); return t; });
  text = text.replace(/^# .*$/m, '');
  text = text.replace(/^---$/gm, '');
  text = text.replace(/<[^>]+>/g, '');
  text = text.replace(/\n{3,}/g, '\n\n').trim();
  const dd = getDeepDiveSiblings(slug, posts, { limit: 24 }).map(titleOf);
  return text
    + '\n\n---\nInternal links in the body (anchor -> page):\n' + (links.length ? links.map((l) => '- ' + l).join('\n') : '- none')
    + '\n\nDeep Dive list shown on this page (sidebar on desktop, after the FAQ on phones):\n' + (dd.length ? dd.map((t) => '- ' + t).join('\n') : '- none');
}

function frontmatterFaqs(fm) {
  const out = [];
  const re = /- q: "(.*)"\s*\n\s*a: "(.*)"/g;
  let m;
  while ((m = re.exec(fm))) out.push(`Q: ${m[1]}\nA: ${m[2]}`);
  return out.length ? '\n\nFAQ shown under the article:\n' + out.join('\n\n') : '';
}

// ---------- structured pages (hub, encyclopedia) ----------
async function loadAll(dir) {
  const items = [];
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.js') || f === 'index.js' || f === 'meta.js') continue;
    const mod = await import(path.resolve(dir, f));
    for (const v of Object.values(mod)) if (Array.isArray(v)) items.push(...v);
  }
  return items;
}
const SKIP = new Set(['id', 'image', 'imageAlt', 'emoji', 'color', 'icon', 'href', 'url', 'asin', 'sameAs', 'images', 'gallery', 'guideId', 'available']);
const label = (k) => k.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());
function renderValue(v, depth = 0) {
  const pad = '  '.repeat(depth);
  if (v == null) return '';
  if (typeof v !== 'object') return pad + stripTags(String(v));
  if (Array.isArray(v)) {
    if (v.length && typeof v[0] === 'object' && v[0] && 'item' in v[0] && 'low' in v[0]) {
      return [pad + '| Item | Low | High |', pad + '|---|---|---|', ...v.map((r) => `${pad}| ${stripTags(r.item)} | $${r.low} | $${r.high} |`)].join('\n');
    }
    if (v.length && typeof v[0] === 'object' && v[0] && ('q' in v[0] || 'question' in v[0])) {
      return v.map((r) => `${pad}Q: ${stripTags(r.q || r.question)}\n${pad}A: ${stripTags(r.a || r.answer)}`).join('\n\n');
    }
    return v.map((x) => (typeof x === 'object' ? renderValue(x, depth) : pad + '- ' + stripTags(String(x)))).join('\n');
  }
  return Object.entries(v).filter(([k]) => !SKIP.has(k)).map(([k, val]) =>
    typeof val === 'object' ? `${pad}${label(k)}:\n${renderValue(val, depth + 1)}` : `${pad}${label(k)}: ${stripTags(String(val))}`
  ).join('\n\n');
}

const guides = await loadAll('src/lib/data/guides');
const animals = await loadAll('src/lib/data/encyclopedia');
const hub = guides.find((g) => g.id === species);
const enc = animals.find((a) => a.id === species || a.guideId === species);
const written = [];

function renderRouterHub(h) {
  const out = [];
  const base = Object.fromEntries(Object.entries(h).filter(([k]) => !['layout', 'firstWeek', 'emergencyCard', 'routes', 'buyList', 'faqs'].includes(k)));
  out.push(renderValue(base));
  out.push('\nThe first week:\n' + (h.firstWeek.intro || '') + '\n' + h.firstWeek.rows.map((r) => `- ${r.label}: ${r.value}${r.source ? ` (link: ${titleOf(r.source)})` : ''}`).join('\n'));
  if (h.emergencyCard) out.push('\nEmergency card (call the vet now if you see any of these):\n' + h.emergencyCard.callNow.map((x) => '- ' + x).join('\n') + (h.emergencyCard.vetLine ? '\n' + h.emergencyCard.vetLine : '') + (h.emergencyCard.source ? `\n(link: ${titleOf(h.emergencyCard.source)}; a Print button prints this card and the setup checklist)` : ''));
  out.push('\nWhere to go next (each title is a link):\n' + h.routes.map((r) => `- ${titleOf(r.slug)}: ${r.line}`).join('\n'));
  if (h.buyList) out.push('\nWhat to buy (no prices; the cost guide is linked under the list):\n' + h.buyList.map((x) => '- ' + x).join('\n'));
  if (h.faqs) out.push('\nFAQ:\n' + h.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n'));
  return out.join('\n');
}

if (hub) {
  const dd = getRelatedArticleSlugs(species, posts).map(titleOf);
  const text = `CARE GUIDE HUB PAGE: ${hub.name}\n(the page the site's Guides navigation lands on; cards, tables, and short sections rendered from structured data${hub.layout === 'router' ? '; a router hub: first-week numbers, emergency card, one line per deep dive, buy list' : ''})\n\n`
    + (hub.layout === 'router' ? renderRouterHub(hub) : renderValue(hub))
    + '\n\n---\nDeep Dive list shown on this page (sidebar on desktop):\n' + (dd.length ? dd.map((t) => '- ' + t).join('\n') : '- none')
    + (enc ? `\n\nLinks on this page: the ${hub.name} encyclopedia page, every Deep Dive title above.` : '');
  fs.writeFileSync(path.join(outDir, '00-care-guide-hub.txt'), text + '\n');
  written.push('00-care-guide-hub.txt');
}
if (enc) {
  const dd = getRelatedArticleSlugs(enc.guideId || species, posts).map(titleOf);
  const text = `ENCYCLOPEDIA PAGE: ${enc.name || species}\n(natural history and quick facts, rendered from structured data)\n\n`
    + renderValue(enc)
    + '\n\n---\nDeep Dive list shown on this page (sidebar on desktop):\n' + (dd.length ? dd.map((t) => '- ' + t).join('\n') : '- none')
    + (hub ? `\n\nLinks on this page: the ${hub.name} care guide hub, every Deep Dive title above.` : '');
  fs.writeFileSync(path.join(outDir, '01-encyclopedia.txt'), text + '\n');
  written.push('01-encyclopedia.txt');
}

const order = ['cost', 'handling', 'health-issues', 'tank-setup', 'feeding', 'enrichment', 'legal'];
const files = fs.readdirSync('content/guides').filter((f) => f.startsWith(species + '-') && f.endsWith('-guide.mdx'));
files.sort((a, b) => {
  const ia = order.findIndex((o) => a.endsWith(`-${o}-guide.mdx`)); const ib = order.findIndex((o) => b.endsWith(`-${o}-guide.mdx`));
  return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib) || a.localeCompare(b);
});
files.forEach((f, i) => {
  const raw = fs.readFileSync(path.join('content/guides', f), 'utf8');
  const [fm, body] = raw.split('\n---\n', 2).length === 2 ? raw.split(/\n---\n/, 2) : ['', raw];
  const slug = f.replace(/\.mdx$/, '');
  const title = /^title: "(.*)"$/m.exec(fm)?.[1] || slug;
  const text = `ARTICLE: ${title}\n\n` + renderBody(body, slug) + frontmatterFaqs(fm);
  const name = `${String(i + 2).padStart(2, '0')}-${slug.replace(species + '-', '')}.txt`;
  fs.writeFileSync(path.join(outDir, name), text + '\n');
  written.push(name);
});

console.log(`${outDir}: ${written.length} files`);
for (const w of written) console.log('  ' + w + ' (' + fs.readFileSync(path.join(outDir, w), 'utf8').split(/\s+/).length + ' words)');

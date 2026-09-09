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
import { getDeepDiveSiblings, getRelatedArticleSlugs, isSharedDeepDiveArticle } from '../src/lib/data/relatedArticles.js';

const species = process.argv[2];
if (!species) { console.error('usage: node scripts/reader-extract.mjs <species-id> [out-dir]'); process.exit(1); }
const outDir = process.argv[3] || path.join('.reader', species);
fs.mkdirSync(outDir, { recursive: true });

const meta = JSON.parse(fs.readFileSync('src/lib/generated/mdx-meta.json', 'utf8')).filter((p) => p.slug);
const posts = meta.map((p) => ({ ...p, _id: p.slug, id: p.slug }));
const titleOf = (slug) => posts.find((p) => p.slug === slug)?.title || slug;
// The sidebar is two lists: Deep Dive (this species' own articles) and
// Health and More (guides shared across the class: quarantine, shedding,
// heat stress, vet trips). Two set tests reported gaps that the shared list
// covered, because it was rendered as bare titles inside one list and the
// reader never opened them. Each shared title now carries its excerpt.
function renderLists(slugs) {
  const own = slugs.filter((s) => !isSharedDeepDiveArticle(s));
  const shared = slugs.filter((s) => isSharedDeepDiveArticle(s));
  const excerptOf = (slug) => posts.find((p) => p.slug === slug)?.excerpt || '';
  return '\n\nDeep Dive list shown on this page (sidebar on desktop, after the FAQ on phones), this species\' own articles:\n'
    + (own.length ? own.map((sl) => '- ' + titleOf(sl)).join('\n') : '- none')
    + '\n\nHealth and More list shown on this page (sidebar, under the Deep Dive), guides shared across the class, each with the one-line summary the site shows:\n'
    + (shared.length ? shared.map((sl) => `- ${titleOf(sl)}${excerptOf(sl) ? ': ' + excerptOf(sl) : ''}`).join('\n') : '- none');
}

// ---------- MDX body to reader text ----------
const stripTags = (s) => s.replace(/<[^>]+>/g, '');

function renderTable(block) {
  const headers = /headers=\{\[(.*?)\]\}/s.exec(block)?.[1] || '';
  const rowsSrc = /rows=\{\[(.*)\]\}/s.exec(block)?.[1] || '';
  // A cell can be a bare JSX element used directly as a row value, not just
  // text wrapped in a <>fragment</> - e.g. <AffiliateLink href="...">Perches</AffiliateLink>
  // as its own array entry. Budgie's cost guide table hit this: any row with
  // one of those failed the whole table's JS-eval parse, and every other row
  // silently vanished behind "[table could not be parsed]" with it. Resolve
  // innermost-first (a component nested inside a fragment) by looping until
  // no more tag pairs remain, turning each into a quoted JS string of its
  // stripped inner text before the final bare-tag strip.
  const clean = (s) => {
    let prev;
    do {
      prev = s;
      s = s
        .replace(/<>(.*?)<\/>/gs, (_, inner) => JSON.stringify(stripTags(inner)))
        .replace(/<([A-Za-z][\w.]*)(?:\s[^>]*)?>(.*?)<\/\1>/gs, (_m, _tag, inner) => JSON.stringify(stripTags(inner)));
    } while (s !== prev);
    return s.replace(/<[^>]+>/g, '');
  };
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
  text = text.replace(/<CarePackageBlock[^>]*\/>/g, '\n[card: the printable care package for this species, with its price and a link to the store]\n');
  text = text.replace(/<AffiliateLink[^>]*>([\s\S]*?)<\/AffiliateLink>/g, '$1');
  text = text.replace(/<(VetDisclaimer|LegalDisclaimer|AffiliateDisclosure)[^>]*\/>/g, (m) =>
    m.includes('Vet') ? '[Not veterinary advice notice]' : m.includes('Legal') ? '[Legal disclaimer notice]' : '[Affiliate disclosure notice]');
  text = text.replace(/\[([^\]]*)\]\((\/[^)\s]+)\)/g, (_, t, u) => { links.push(`${t} -> ${u}`); return t; });
  text = text.replace(/^# .*$/m, '');
  text = text.replace(/^---$/gm, '');
  text = text.replace(/<[^>]+>/g, '');
  text = text.replace(/\n{3,}/g, '\n\n').trim();
  const dd = getDeepDiveSiblings(slug, posts, { fromGuideId: species, limit: 40 });
  return text
    + '\n\n---\nInternal links in the body (anchor -> page):\n' + (links.length ? links.map((l) => '- ' + l).join('\n') : '- none')
    + renderLists(dd);
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
  const dd = getRelatedArticleSlugs(species, posts);
  const text = `CARE GUIDE HUB PAGE: ${hub.name}\n(the page the site's Guides navigation lands on; cards, tables, and short sections rendered from structured data${hub.layout === 'router' ? '; a router hub: first-week numbers, emergency card, one line per deep dive, buy list' : ''})\n\n`
    + (hub.layout === 'router' ? renderRouterHub(hub) : renderValue(hub))
    + '\n\n---' + renderLists(dd)
    + (enc ? `\n\nLinks on this page: the ${hub.name} encyclopedia page, every title in both lists above.` : '');
  fs.writeFileSync(path.join(outDir, '00-care-guide-hub.txt'), text + '\n');
  written.push('00-care-guide-hub.txt');
}
if (enc) {
  const dd = getRelatedArticleSlugs(enc.guideId || species, posts);
  const text = `ENCYCLOPEDIA PAGE: ${enc.name || species}\n(natural history and quick facts, rendered from structured data)\n\n`
    + renderValue(enc)
    + '\n\n---' + renderLists(dd)
    + (hub ? `\n\nLinks on this page: the ${hub.name} care guide hub, every title in both lists above.` : '');
  fs.writeFileSync(path.join(outDir, '01-encyclopedia.txt'), text + '\n');
  written.push('01-encyclopedia.txt');
}

const order = ['cost', 'handling', 'health-issues', 'tank-setup', 'feeding', 'enrichment', 'legal'];
const bySuffix = fs.readdirSync('content/guides').filter((f) => f.startsWith(species + '-') && f.endsWith('-guide.mdx'));
// Some of a species' own deep-dive articles don't end in -guide.mdx (a
// myth-busting piece, for example) but are still wired into RELATED_ARTICLES
// as this species' own, non-shared content, and the live Deep Dive sidebar
// shows them same as the rest. The suffix glob alone missed
// goldfish-tank-size-bowl-myth.mdx, so a reader never saw it even though it
// was the page the size numbers actually came from.
const wired = getRelatedArticleSlugs(species, posts)
  .filter((slug) => slug.startsWith(species + '-') && !isSharedDeepDiveArticle(slug))
  .map((slug) => slug + '.mdx')
  .filter((f) => fs.existsSync(path.join('content/guides', f)));
const files = Array.from(new Set([...bySuffix, ...wired]));
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

// Lists every number a species' pages state about the same topic, side by
// side, so a reviewer can see where the hub, the encyclopedia entry, and the
// deep dives disagree. The rabbit set test (docs/READER_REVIEWS.md) found the
// hub saying 12 hours where the health guide said 8, greens at three
// different rates on three pages, and two lifespans; a reader notices, a
// grep does not.
//
//   node scripts/check-species-numbers.mjs <species-id> [--all] [--strict]
//
// Pages read: the care guide hub (structured data), the encyclopedia entry,
// and every content/guides and content/blog file whose slug starts with the
// species id (vs and overview pieces skipped: their numbers belong to other
// animals too). Each sentence with a number gets a topic from its wording
// (basking, hay, greens, vet, emergency, lifespan, ...) and each number a
// unit class (temperature, hours, cups, money, ...). Same topic and unit with
// more than one distinct value is a conflict and prints with every page and
// sentence that carries it. --all prints every topic, agreed or not. --strict
// exits 1 when conflicts exist. Advisory by default: some "conflicts" are two
// real figures (a minimum and an exercise space), and the reviewer decides.
//
// Nothing here is written back. Written 2026-09-08 for the hub reconciliation
// job (READMEFIRST, next jobs).
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const species = args.find((a) => !a.startsWith('--'));
const showAll = args.includes('--all');
const strict = args.includes('--strict');
if (!species) { console.error('usage: node scripts/check-species-numbers.mjs <species-id> [--all] [--strict]'); process.exit(1); }

// ---------- sources ----------
async function loadAll(dir) {
  const items = [];
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.js') || f === 'index.js' || f === 'meta.js') continue;
    const mod = await import(path.resolve(dir, f));
    for (const v of Object.values(mod)) if (Array.isArray(v)) items.push(...v);
  }
  return items;
}
const SKIP_KEYS = new Set(['id', 'image', 'imageAlt', 'emoji', 'color', 'icon', 'href', 'url', 'asin', 'sameAs', 'images', 'gallery', 'guideId', 'slug', 'thumbnail', 'cover', 'gumroadUrl', 'version']);
function walkStrings(v, out, where = '') {
  if (v == null) return out;
  if (typeof v === 'string') { out.push({ where, text: v }); return out; }
  if (typeof v !== 'object') return out;
  if (Array.isArray(v)) {
    if (v.length && v[0] && typeof v[0] === 'object' && 'item' in v[0] && 'low' in v[0]) {
      for (const r of v) out.push({ where, text: `${r.item}: $${r.low} to $${r.high}` });
      return out;
    }
    v.forEach((x, i) => walkStrings(x, out, where));
    return out;
  }
  for (const [k, val] of Object.entries(v)) if (!SKIP_KEYS.has(k)) walkStrings(val, out, where ? `${where}.${k}` : k);
  return out;
}

const guides = await loadAll('src/lib/data/guides');
const animals = await loadAll('src/lib/data/encyclopedia');
const hub = guides.find((g) => g.id === species);
const enc = animals.find((a) => a.id === species || a.guideId === species);

const pages = [];
if (hub) pages.push({ page: 'hub', text: walkStrings(hub, []).map((s) => s.text).join('\n\n') });
if (enc) pages.push({ page: 'encyclopedia', text: walkStrings(enc, []).map((s) => s.text).join('\n\n') });

const stripTags = (s) => s.replace(/<[^>]*>/g, '');
function mdxToText(raw) {
  const parts = raw.split(/\n---\n/);
  const fm = parts.length > 1 ? parts[0] : '';
  let body = parts.length > 1 ? parts.slice(1).join('\n---\n') : raw;
  body = body.replace(/<Sources>[\s\S]*?<\/Sources>/g, '');
  body = body.replace(/^## Sources[\s\S]*$/m, '');
  body = body.replace(/^import .*$/gm, '');
  // table cells become one sentence per row so a row's numbers keep their label
  body = body.replace(/<ComparisonTable[\s\S]*?\]\}\s*\/>/g, (m) => {
    const rows = [...m.matchAll(/\[((?:[^\[\]]|<[^>]*>)*)\]/g)].map((r) => stripTags(r[1]).replace(/["']/g, '').replace(/\s*,\s*/g, ' | '));
    return '\n' + rows.map((r) => 'Table row: ' + r + '.').join('\n') + '\n';
  });
  body = body.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  body = body.replace(/<[^>]+>/g, '');
  body = body.replace(/^#+\s*/gm, '');
  body = body.replace(/[*_`]/g, '');
  const faqs = [...fm.matchAll(/- q: "(.*)"\s*\n\s*a: "(.*)"/g)].map((m) => `${m[1]} ${m[2]}`).join('\n');
  return body + '\n' + faqs;
}
// A guide id doesn't always prefix its own articles: the tegu hub is `tegu`
// and its deep dives are all `argentine-tegu-*`. Matching on the prefix alone
// compared that hub against nothing but its encyclopedia entry and reported
// no conflicts, on a species whose hub disagreed with five deep dives.
// A file also counts when its slug ends in one of the standard suffixes and
// its base name and the guide id contain one another, which catches the
// longer-name case without pulling in another species' pages.
const SUFFIXES = ['cost', 'handling', 'health-issues', 'tank-setup', 'feeding', 'enrichment', 'legal'];
const suffixRe = new RegExp(`-(${SUFFIXES.join('|')})-guide$`);
function isOwnPage(slug) {
  if (slug.startsWith(species + '-')) return true;
  const base = slug.replace(suffixRe, '');
  return base !== slug && (base.includes(species) || species.includes(base));
}
for (const dir of ['content/guides', 'content/blog']) {
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).sort()) {
    if (!f.endsWith('.mdx')) continue;
    const slug = f.replace(/\.mdx$/, '');
    if (!isOwnPage(slug)) continue;
    if (/-vs-|-overview\.mdx$/.test(f)) continue;
    pages.push({ page: slug.startsWith(species + '-') ? slug.slice(species.length + 1) : (suffixRe.exec(slug) || [''])[0].slice(1) || slug, text: mdxToText(fs.readFileSync(path.join(dir, f), 'utf8')) });
  }
}
if (!pages.length) { console.error(`no pages found for "${species}"`); process.exit(1); }

// ---------- topics and units ----------
// First match wins, so the specific ones come first.
const TOPICS = [
  ['basking', /\bbask/i],
  ['cool side', /\bcool (?:side|end|zone)|\bcooler end/i],
  ['night temperature', /\b(?:night|overnight|nighttime)\b.*\b(?:temp|degrees|°|drop)/i],
  ['humidity', /\bhumid|hygromet/i],
  ['UVB', /\buv[bi]\b|\buv\b|\bbulb/i],
  ['brumation', /\bbrumat/i],
  ['emergency clock', /\bnot eat|\bno (?:droppings|poop)|\bhasn'?t eaten|\bstops? eating|\brefus|\bwithout (?:food|eating)|\bemergency\b.*\bhours?\b|\bhours?\b.*\bemergency\b/i],
  ['vet', /\bvet\b|\bveterinar|\bwellness|\bfecal|\bexam\b|\bcheck-?up/i],
  ['spay or neuter', /\bspay|\bneuter|\buterine|\bdesex|\baltered\b/i],
  ['lifespan', /\blifespan|\blife expectancy|\blive[sd]? (?:for|to|up to|about|around)?\s*\d|\byears? (?:old|of age)|\breach(?:es|ing)? \d+\s*(?:years|or more)/i],
  ['adult size', /\badult (?:size|weight|length)|\bweighs?\b|\bweighing\b|\bgrams?\b|\binches (?:long|in length)|\btotal length|\bsnout|\bfull[- ]grown/i],
  ['hay', /\bhay\b/i],
  ['pellets', /\bpellet/i],
  ['greens', /\bgreens?\b|\bvegetable|\bveg\b|\bsalad|\bleafy/i],
  ['insects', /\binsect|\bcricket|\bdubia|\broach|\bfeeder|\bbsfl|\bworm|\blarvae/i],
  ['calcium and vitamins', /\bcalcium|\bd3\b|\bmultivitamin|\bsupplement|\bdust/i],
  ['treats and fruit', /\btreat|\bfruit/i],
  ['water and bathing', /\bbath|\bsoak|\bhydrat|\bwater\b/i],
  ['exercise time', /\bfree[- ]roam|\bexercise|\bout of (?:the )?(?:cage|pen|enclosure)|\brun ?time|\bplaytime|\bplay time/i],
  ['enclosure size', /\benclosure|\btank\b|\bpen\b|\bx-?pen|\bcage|\bcondo|\bhutch|\bsquare f|\bsq\.? ?ft|\bfloor space|\bterrarium|\bvivarium|\bliving space|\bfootprint/i],
  ['temperature', /\btemperature|\bdegrees|°|\bheat ?stroke|\bwarm side|\bambient|\bthermostat|\btoo hot|\btoo cold/i],
  ['shedding', /\bshed/i],
  ['handling', /\bhandl|\bhold\b|\bholding|\bsession/i],
  ['quarantine', /\bquarantine/i],
  ['litter', /\blitter/i],
  ['budget', /\bbudget|\bcost|\bprice|\bspend|\bemergency fund|\bupfront|\bper month|\ba month|\bmonthly|\bper year|\ba year|\bannual|\byearly|\bfirst year|\bsetup\b|\bstart-?up|\$/i],
  ['feeding schedule', /\bfeed|\bmeal|\boffer|\bportion|\bration|\bdiet/i],
];
const topicOf = (s) => (TOPICS.find(([, re]) => re.test(s)) || ['other'])[0];

const NUM = String.raw`\d+(?:[.,]\d+)*(?:\s*\/\s*\d+)?`;
const JOIN = String.raw`\s*(?:to|-|–|—|and|or|through)\s*`;
const UNITS = [
  ['°F', String.raw`(?:°\s*F\b|degrees?\s*(?:F\b|Fahrenheit)|º\s*F\b|F\b(?=[^a-z]|$))`],
  ['%', String.raw`(?:%|percent)`],
  ['sq ft', String.raw`(?:square\s*f(?:ee|oo)t|sq\.?\s*ft|sq\.?\s*feet)`],
  ['ft', String.raw`(?:feet|foot|ft\b)`],
  ['in', String.raw`(?:inch(?:es)?|in\b(?=\s|[.,;:)]|$))`],
  ['cups', String.raw`(?:cups?\b)`],
  ['tbsp', String.raw`(?:tablespoons?|tbsp)`],
  ['lb', String.raw`(?:pounds?|lbs?\b)`],
  ['g', String.raw`(?:grams?\b|g\b)`],
  ['kg', String.raw`(?:kilograms?|kg\b)`],
  ['oz', String.raw`(?:ounces?|oz\b)`],
  ['gal', String.raw`(?:gallons?|gal\b)`],
  ['hours', String.raw`(?:hours?|hrs?\b)`],
  ['minutes', String.raw`(?:minutes?|mins?\b)`],
  ['days', String.raw`(?:days?\b)`],
  ['weeks', String.raw`(?:weeks?\b)`],
  ['months', String.raw`(?:months?\b)`],
  ['years', String.raw`(?:years?\b|yrs?\b)`],
  ['per week', String.raw`(?:times?|x)\s*(?:a|per|each)\s*week`],
  ['per day', String.raw`(?:times?|x)\s*(?:a|per|each)\s*day`],
  ['per month', String.raw`(?:times?|x)\s*(?:a|per|each)\s*month`],
  ['UVI', String.raw`(?:uvi\b)`],
  ['watts', String.raw`(?:watts?\b|W\b)`],
  ['mph', String.raw`(?:mph\b)`],
];
const unitRe = new RegExp(String.raw`(${NUM})(?:${JOIN}(${NUM}))?\s*(${UNITS.map(([, u]) => u).join('|')})`, 'gi');
const moneyRe = new RegExp(String.raw`\$\s*(${NUM})(?:${JOIN}\$?\s*(${NUM}))?\s*(\+|or more|plus)?\s*((?:per|a|each)\s*(?:month|year|visit|week)|monthly|annually|yearly|upfront)?`, 'gi');
const dimRe = /\b(\d+(?:\.\d+)?)\s*[x×]\s*(\d+(?:\.\d+)?)(?:\s*[x×]\s*(\d+(?:\.\d+)?))?\s*(?:ft|feet|foot|in|inches)?\b/gi;
const ratioRe = /\b(\d{2})\s*\/\s*(\d{2})\b/g;

const unitClassOf = (u) => {
  const low = u.toLowerCase().replace(/\s+/g, ' ');
  for (const [name, pat] of UNITS) if (new RegExp('^' + pat + '$', 'i').test(u)) return name;
  return low;
};
const numVal = (s) => {
  s = s.replace(/,/g, '');
  const frac = /^(\d+)\s*\/\s*(\d+)$/.exec(s);
  if (frac) return String(+(frac[1] / frac[2]).toFixed(3)).replace(/\.?0+$/, '') || '0';
  return String(+s);
};
const norm = (a, b) => (b ? `${numVal(a)}-${numVal(b)}` : numVal(a));

const sentencesOf = (text) => text.split(/(?<=[.!?])\s+(?=[A-Z"'(\[]|\d)|\n+/).map((s) => s.replace(/\s+/g, ' ').trim()).filter(Boolean);

// ---------- collect ----------
const found = new Map(); // key -> Map(value -> [{page, sentence}])
function record(topic, unit, value, page, sentence) {
  const key = `${topic} | ${unit}`;
  if (!found.has(key)) found.set(key, new Map());
  const m = found.get(key);
  if (!m.has(value)) m.set(value, []);
  const list = m.get(value);
  if (!list.some((x) => x.page === page && x.sentence === sentence)) list.push({ page, sentence });
}
let sentencesWithNumbers = 0;
for (const { page, text } of pages) {
  for (const s of sentencesOf(text)) {
    if (!/\d/.test(s)) continue;
    // years like 2024 in a citation are dates, not care numbers
    const sClean = s.replace(/\b(19|20)\d{2}\b/g, ' ');
    let hit = false;
    const topic = topicOf(sClean);
    for (const m of sClean.matchAll(unitRe)) { record(topic, unitClassOf(m[3]), norm(m[1], m[2]), page, s); hit = true; }
    for (const m of sClean.matchAll(moneyRe)) {
      const period = (m[4] || '').toLowerCase().replace(/^(per|a|each)\s*/, '');
      const unit = '$' + (period ? ` per ${period.replace(/ly$/, '').replace('annual', 'year').replace('month', 'month')}` : '');
      record(topic, unit, norm(m[1], m[2]) + (m[3] ? '+' : ''), page, s); hit = true;
    }
    for (const m of sClean.matchAll(dimRe)) { record(topic, 'dimensions', [m[1], m[2], m[3]].filter(Boolean).join('x'), page, s); hit = true; }
    for (const m of sClean.matchAll(ratioRe)) { record(topic, 'ratio', `${m[1]}/${m[2]}`, page, s); hit = true; }
    if (hit) sentencesWithNumbers += 1;
  }
}

// ---------- report ----------
const clip = (s, n = 150) => (s.length > n ? s.slice(0, n - 1) + '…' : s);
const keys = [...found.keys()].sort();
let conflicts = 0;
console.log(`${species}: ${pages.length} pages (${pages.map((p) => p.page).join(', ')}), ${sentencesWithNumbers} sentences with numbers, ${keys.length} topic/unit groups\n`);
for (const key of keys) {
  const values = found.get(key);
  const pagesIn = new Set([...values.values()].flat().map((x) => x.page));
  const isConflict = values.size > 1;
  if (!isConflict && !showAll) continue;
  if (isConflict) conflicts += 1;
  console.log(`${isConflict ? 'CONFLICT' : 'ok      '}  ${key}  (${values.size} value${values.size === 1 ? '' : 's'} across ${pagesIn.size} page${pagesIn.size === 1 ? '' : 's'})`);
  for (const [value, where] of [...values.entries()].sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]))) {
    for (const { page, sentence } of where) console.log(`    ${value.padEnd(12)} ${page.padEnd(22)} ${clip(sentence)}`);
  }
  console.log('');
}
console.log(`${conflicts} topic/unit group${conflicts === 1 ? '' : 's'} with more than one value.${showAll ? '' : ' Run with --all to see the agreed ones too.'}`);
if (strict && conflicts) process.exit(1);

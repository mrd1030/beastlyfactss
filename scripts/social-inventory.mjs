// Social posting inventory: the full library, not a recency window.
//
// The X/IG/Threads feed commands (.claude/commands/*-feed.md) run daily on two
// tracks at a configurable cadence, drawing on pools far larger than fit in a
// conversation. What has already gone out lives in social-ledger.json and this
// script is how a feed run knows what is still unused. Run `stats` for current
// pool sizes rather than quoting a number from here, since both pools grow.
//
// Read-only apart from `mark`. It never touches content/ or src/.
//
// Every platform (x, ig, threads) keeps its own bucket, so the same fact can
// run on all three. --platform defaults to x everywhere except `mark`, where it
// is required.
//
//   node scripts/social-inventory.mjs facts [--platform p] [--unused] [--limit N]
//   node scripts/social-inventory.mjs articles [--platform p] [--unused] [--limit N] [--kind guide|fact-article|chronicle]
//   node scripts/social-inventory.mjs plan [days] [--platform p] [--facts-per-day N] [--articles-per-day M] [--mirror p] [--recent]
//   node scripts/social-inventory.mjs stats
//   node scripts/social-inventory.mjs mark --platform x --fact 12 --article content/guides/x.mdx --date 2026-08-22

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const LEDGER = path.join(ROOT, 'social-ledger.json');

const BASE = 'https://beastlyfacts.com';

// Mirrors src/lib/utils/slugify.js, including the "&"/" and " rule. Fact URLs
// are built from the fact TITLE, so this has to match exactly or the first
// reply 404s.
const slugify = (text) => {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/\s*&\s*|\s+and\s+/g, '-and-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

// ---------------------------------------------------------------- ledger

// One bucket per platform, NOT one shared list. Running a fact on X should not
// consume it for Instagram: the same source is meant to go out on all three in
// different registers. Each platform therefore gets its own full runway, and
// `plan --mirror <platform>` is how a deliberate cross-post is proposed.
const PLATFORMS = ['x', 'ig', 'threads'];
const emptyLedger = () => Object.fromEntries(PLATFORMS.map(p => [p, { facts: [], articles: [] }]));

function readLedger() {
  if (!fs.existsSync(LEDGER)) return emptyLedger();
  let raw;
  try {
    raw = JSON.parse(fs.readFileSync(LEDGER, 'utf8'));
  } catch {
    console.error(`Could not parse ${path.relative(ROOT, LEDGER)}. Fix or delete it.`);
    process.exit(1);
  }
  const out = emptyLedger();
  // Pre-platform ledgers were a flat {facts,articles}. Treat those as X's,
  // which is the only platform that was running when that shape existed.
  if (Array.isArray(raw.facts) || Array.isArray(raw.articles)) {
    out.x.facts = raw.facts || [];
    out.x.articles = raw.articles || [];
    return out;
  }
  for (const p of PLATFORMS) {
    out[p].facts = raw[p]?.facts || [];
    out[p].articles = raw[p]?.articles || [];
  }
  return out;
}

function platformArg(required = false) {
  const p = (arg('--platform') || '').toLowerCase();
  if (!p) {
    if (required) {
      console.error(`--platform is required: one of ${PLATFORMS.join(', ')}`);
      process.exit(1);
    }
    return 'x';
  }
  if (!PLATFORMS.includes(p)) {
    console.error(`unknown platform "${p}". Use one of ${PLATFORMS.join(', ')}`);
    process.exit(1);
  }
  return p;
}

const usedFactIds = (l, p) => new Set((l[p]?.facts || []).map(f => f.id));
const usedArticlePaths = (l, p) => new Set((l[p]?.articles || []).map(a => a.file));

// ---------------------------------------------------------------- facts

// facts.js is a flat exported array of single-line object literals. Parsing it
// with regex rather than importing keeps this script free of the Vite alias
// resolution (@/lib/...) that the real module graph depends on.
function loadFacts() {
  const src = fs.readFileSync(path.join(ROOT, 'src/lib/data/facts.js'), 'utf8');
  const facts = [];
  const re = /\{\s*id:\s*(\d+),\s*title:\s*"((?:[^"\\]|\\.)*)",\s*emoji:\s*"([^"]*)",\s*animal:\s*"((?:[^"\\]|\\.)*)",\s*category:\s*"([^"]+)",\s*fact:\s*"((?:[^"\\]|\\.)*)"/g;
  for (const m of src.matchAll(re)) {
    facts.push({
      id: Number(m[1]),
      title: m[2].replace(/\\"/g, '"'),
      emoji: m[3],
      animal: m[4].replace(/\\"/g, '"'),
      category: m[5],
      text: m[6].replace(/\\"/g, '"'),
    });
  }
  return facts;
}

// Mirrors imagePathFor() in src/lib/data/factImages.js: a per-id photo wins,
// otherwise the per-animal one. Both point at distinct files, so name
// resolution is not a fallback to a lesser image.
function loadFactImages() {
  const src = fs.readFileSync(path.join(ROOT, 'src/lib/data/factImages.js'), 'utf8');
  const aStart = src.indexOf('ANIMAL_IMAGES');
  const fStart = src.indexOf('const FACT_IMAGES');
  const aBlock = src.slice(aStart, fStart > 0 ? fStart : src.length);
  const fBlock = fStart > 0 ? src.slice(fStart) : '';
  const byAnimal = {}, byId = {};
  // Keys are quoted with either quote char and may contain the other one
  // ("Wallace's Flying Frog"), so match each quoting style separately. A naive
  // [^'"]+ class silently drops those keys and makes the fact look photoless.
  const KEYED = /(?:"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)')\s*:\s*(?:"([^"]*)"|'([^']*)')/g;
  for (const m of aBlock.matchAll(KEYED)) {
    const key = m[1] !== undefined ? m[1] : m[2];
    const val = m[3] !== undefined ? m[3] : m[4];
    if (key && val) byAnimal[key.replace(/\\(.)/g, '$1')] = val;
  }
  for (const m of fBlock.matchAll(/(\d+):\s*['"]([^'"]+)['"]/g)) byId[Number(m[1])] = m[2];
  return { byAnimal, byId };
}

function decorateFacts(facts) {
  const { byAnimal, byId } = loadFactImages();
  const decorated = facts.map(f => ({
    ...f,
    url: `${BASE}/facts/${slugify(f.title)}/`,
    image: byId[f.id] || byAnimal[f.animal] || null,
  }));

  // Sharing means two facts genuinely resolving to the SAME FILE, which is what
  // the house rule forbids. Resolving via ANIMAL_IMAGES rather than FACT_IMAGES
  // is not by itself sharing: every animal key points at its own photo, and an
  // animal with several facts carries per-id entries for them. Today no file is
  // used twice, but this is computed rather than assumed so that adding facts
  // faster than photos surfaces the collision instead of hiding it.
  const count = {};
  for (const f of decorated) if (f.image) count[f.image] = (count[f.image] || 0) + 1;
  for (const f of decorated) f.imageShared = Boolean(f.image) && count[f.image] > 1;
  return decorated;
}

// ---------------------------------------------------------------- articles

function parseFrontmatter(content) {
  // \r? - content/ mixes LF and CRLF, and an LF-only match silently drops the
  // whole block (same reason generate-sitemap.js does this).
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    if (key.startsWith('#')) continue;
    out[key] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
  }
  return out;
}

const CHRONICLES = { dex: 'chronicles-of-dex', otis: 'chronicles-of-otis' };

// A guide-directory file with no per-species split suffix is a standalone fact
// article (how-a-glass-frog-hides-its-own-blood), not a care guide. Those fill
// the fact-article slots when a listicle would be too long.
const SPLIT_TYPES = ['cost', 'handling', 'health-issues', 'tank-setup', 'feeding', 'legal', 'enrichment'];
function splitTypeOf(slug) {
  for (const t of SPLIT_TYPES) if (slug.endsWith(`-${t}-guide`)) return t;
  return null;
}

function loadArticles() {
  const dirs = ['content/guides', 'content/fun-facts', 'content/short-story', 'content/blog'];
  const rows = [];
  for (const dir of dirs) {
    const abs = path.join(ROOT, dir);
    if (!fs.existsSync(abs)) continue;
    for (const file of fs.readdirSync(abs).filter(f => f.endsWith('.mdx'))) {
      const fm = parseFrontmatter(fs.readFileSync(path.join(abs, file), 'utf8'));
      const slug = fm.slug || file.replace(/\.mdx$/, '');
      rows.push({
        file: `${dir}/${file}`,
        dir,
        slug,
        date: (fm.date || '').slice(0, 10),
        title: fm.title || '',
        category: fm.category || '',
        image: fm.image || '',
        status: fm.status || '',
        split: splitTypeOf(slug),
      });
    }
  }

  // Chronicles URLs are positional: /chronicles/<series>/<n>/ where n is the
  // 1-based index into that series sorted by date ASCENDING (Chronicles.jsx
  // resolves parts[n-1]). NOT the number in the filename - that only happens to
  // agree today, and a backdated part would break it.
  for (const [id, prefix] of Object.entries(CHRONICLES)) {
    const series = rows.filter(r => r.slug.startsWith(prefix))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    series.forEach((r, i) => {
      r.kind = 'chronicle';
      r.series = id;
      r.part = i + 1;
      r.url = `${BASE}/chronicles/${id}/${i + 1}/`;
    });
  }

  for (const r of rows) {
    if (r.kind === 'chronicle') continue;
    // Every non-chronicle MDX post renders at /blog/<slug>/, guides included
    // (getMdxPosts() in generate-sitemap.js). There is no /guides/<article-slug>/.
    r.url = `${BASE}/blog/${r.slug}/`;
    r.kind = r.dir === 'content/fun-facts' ? 'fun-fact-listicle'
      : r.split ? 'guide'
      : 'fact-article';
  }

  return rows.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

// ---------------------------------------------------------------- output

const arg = (name, fallback = null) => {
  const i = process.argv.indexOf(name);
  return i > -1 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')
    ? process.argv[i + 1] : fallback;
};
const flag = (name) => process.argv.includes(name);

function printFacts() {
  const ledger = readLedger();
  const plat = platformArg();
  const used = usedFactIds(ledger, plat);
  let list = decorateFacts(loadFacts());
  if (flag('--unused')) list = list.filter(f => !used.has(f.id));
  const limit = Number(arg('--limit', 0));
  if (limit > 0) list = list.slice(0, limit);
  console.log(`# ${list.length} facts${flag('--unused') ? ` unused on ${plat}` : ''}`);
  console.log('# id\tcategory\tanimal\ttitle\timage\tshared?\turl');
  for (const f of list) {
    console.log([f.id, f.category, f.animal, f.title, f.image || 'NONE',
      f.imageShared ? 'SHARED' : 'own', f.url].join('\t'));
  }
}

function printArticles() {
  const ledger = readLedger();
  const plat = platformArg();
  const used = usedArticlePaths(ledger, plat);
  let list = loadArticles();
  if (flag('--unused')) list = list.filter(a => !used.has(a.file));
  const kind = arg('--kind');
  if (kind) list = list.filter(a => a.kind === kind);
  const limit = Number(arg('--limit', 0));
  if (limit > 0) list = list.slice(0, limit);
  console.log(`# ${list.length} articles${flag('--unused') ? ` unused on ${plat}` : ''}${kind ? ` kind=${kind}` : ''}`);
  console.log('# date\tkind\tsplit\tfile\timage\turl');
  for (const a of list) {
    console.log([a.date || 'nodate', a.kind, a.split || '-', a.file,
      a.image || 'NONE', a.url].join('\t'));
  }
}

function printStats() {
  const ledger = readLedger();
  const facts = decorateFacts(loadFacts());
  const articles = loadArticles();

  const byKind = {};
  for (const a of articles) byKind[a.kind] = (byKind[a.kind] || 0) + 1;
  const byCat = {};
  for (const f of facts) byCat[f.category] = (byCat[f.category] || 0) + 1;

  console.log(`facts        ${facts.length} total`);
  for (const [k, v] of Object.entries(byCat)) console.log(`  ${k.padEnd(20)} ${v}`);
  const noPhoto = facts.filter(f => !f.image);
  const shared = facts.filter(f => f.imageShared);
  console.log(`  unique photo       ${facts.length - noPhoto.length - shared.length}`);
  console.log(`  shares a photo     ${shared.length}${shared.length ? '  <- breaks the one-photo-per-fact rule' : ''}`);
  console.log(`  no photo           ${noPhoto.length}${noPhoto.length ? `  ids ${noPhoto.map(f => f.id).join(',')}` : ''}`);
  console.log(`articles     ${articles.length} total`);
  for (const [k, v] of Object.entries(byKind)) console.log(`  ${k.padEnd(20)} ${v}`);

  // Each platform draws on the full pool independently, so consumption and
  // runway are reported per platform rather than as one shared number.
  console.log('\nper platform');
  for (const p of PLATFORMS) {
    const fU = usedFactIds(ledger, p), aU = usedArticlePaths(ledger, p);
    const rf = facts.length - fU.size, ra = articles.length - aU.size;
    const at = (pf, pa) => Math.min(Math.floor(rf / pf), Math.floor(ra / pa));
    console.log(`  ${p.padEnd(8)} posted ${String(fU.size).padStart(4)} facts / ${String(aU.size).padStart(4)} articles` +
      `   left ${String(rf).padStart(4)} / ${String(ra).padStart(4)}` +
      `   runway ${String(at(1, 1)).padStart(4)}d @1+1, ${String(at(2, 2)).padStart(4)}d @2+2, ${String(at(3, 3)).padStart(4)}d @3+3`);
  }

  // Overlap is the cross-post picture: what X has run that IG has not is
  // exactly the queue for `plan --platform ig --mirror x`.
  console.log('\ncross-post backlog (posted on row, not yet on column)');
  const cell = (from, to) => {
    const f = [...usedFactIds(ledger, from)].filter(id => !usedFactIds(ledger, to).has(id)).length;
    const a = [...usedArticlePaths(ledger, from)].filter(p => !usedArticlePaths(ledger, to).has(p)).length;
    return `${f}f/${a}a`;
  };
  console.log(`  ${''.padEnd(10)}${PLATFORMS.map(p => p.padEnd(12)).join('')}`);
  for (const from of PLATFORMS) {
    console.log(`  ${from.padEnd(10)}${PLATFORMS.map(to => (to === from ? '-' : cell(from, to)).padEnd(12)).join('')}`);
  }
}

// Deterministic string hash. Ordering the library by this instead of by date
// spreads picks across all 480 articles rather than walking the newest ones
// first, which is the whole point of dropping the recency window. Stable, so
// the same ledger state proposes the same week twice.
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

// Loose animal match between a fact and an article, so a cat fact and a cat
// article do not land in the same week. Fact animals are free text ("Bearded
// Dragon"), article species come from the slug, so compare on tokens.
function animalTokens(s) {
  return new Set(String(s).toLowerCase().split(/[^a-z]+/).filter(w => w.length > 3));
}
function animalsCollide(a, b) {
  const A = animalTokens(a), B = animalTokens(b);
  for (const t of A) if (B.has(t)) return true;
  return false;
}

// Proposes N days without writing anything. Rotates fact category and article
// species so a week does not stack one animal, refuses to reuse a photo inside
// the run, and keeps the fact track from colliding with the article track.
const speciesOf = (a) => a.slug.replace(/-(cost|handling|health-issues|tank-setup|feeding|legal|enrichment)-guide$/, '');

function printPlan() {
  const days = Number(process.argv[3]) || 7;
  const perDayFacts = Number(arg('--facts-per-day', 1));
  const perDayArticles = Number(arg('--articles-per-day', 1));
  const wantFacts = days * perDayFacts;
  const wantArticles = days * perDayArticles;

  const ledger = readLedger();
  const plat = platformArg();
  const fUsed = usedFactIds(ledger, plat), aUsed = usedArticlePaths(ledger, plat);

  // --mirror <other>: propose only what that platform has ALREADY posted and
  // this one has not. That is the cross-post lane - same source, rewritten for
  // a different register - rather than opening a fresh seam of the library.
  const mirror = (arg('--mirror') || '').toLowerCase();
  if (mirror && !PLATFORMS.includes(mirror)) {
    console.error(`unknown --mirror platform "${mirror}". Use one of ${PLATFORMS.join(', ')}`);
    process.exit(1);
  }
  if (mirror === plat) {
    console.error(`--mirror ${mirror} is the same as --platform ${plat}`);
    process.exit(1);
  }
  const mFacts = mirror ? usedFactIds(ledger, mirror) : null;
  const mArticles = mirror ? usedArticlePaths(ledger, mirror) : null;

  const order = flag('--recent')
    ? (a, b) => (b.date || '').localeCompare(a.date || '')
    : (a, b) => hash(a.slug || String(a.id)) - hash(b.slug || String(b.id));

  const facts = decorateFacts(loadFacts())
    .filter(f => !fUsed.has(f.id) && f.image && (!mFacts || mFacts.has(f.id)))
    .sort((a, b) => hash(String(a.id)) - hash(String(b.id)));
  const articles = loadArticles()
    .filter(a => !aUsed.has(a.file) && a.status === 'published' && (!mArticles || mArticles.has(a.file)))
    .sort(order);

  const pickedFacts = [], pickedArticles = [];
  const seenImg = new Set(), seenSpecies = new Set();
  // Category and split-type spread are soft: at higher volume a 7 day run wants
  // more facts than there are categories, so these caps scale with the ask
  // instead of blocking outright.
  const catCap = Math.ceil(wantFacts / 6) + 1;
  const splitCap = Math.ceil(wantArticles / 7) + 1;
  const catCount = {}, splitCount = {};

  for (const f of facts) {
    if (pickedFacts.length >= wantFacts) break;
    if ((catCount[f.category] || 0) >= catCap) continue;
    if (seenImg.has(f.image)) continue;          // never the same photo twice
    pickedFacts.push(f);
    catCount[f.category] = (catCount[f.category] || 0) + 1;
    seenImg.add(f.image);
  }

  for (const a of articles) {
    if (pickedArticles.length >= wantArticles) break;
    const sp = speciesOf(a);
    if (seenSpecies.has(sp)) continue;
    if (a.split && (splitCount[a.split] || 0) >= splitCap) continue;
    if (seenImg.has(a.image)) continue;
    // Cross-track: do not run a cat fact and a cat article in the same batch.
    if (pickedFacts.some(f => animalsCollide(f.animal, sp))) continue;
    pickedArticles.push(a);
    seenSpecies.add(sp); seenImg.add(a.image);
    if (a.split) splitCount[a.split] = (splitCount[a.split] || 0) + 1;
  }

  const shortF = wantFacts - pickedFacts.length;
  const shortA = wantArticles - pickedArticles.length;

  console.log(`# platform=${plat}${mirror ? `  mirroring ${mirror}` : ''}`);
  console.log(`# ${days} days at ${perDayFacts} fact + ${perDayArticles} article per day`);
  console.log(`# ${pickedFacts.length}/${wantFacts} facts, ${pickedArticles.length}/${wantArticles} articles (nothing written - run 'mark' after posting)`);
  if (shortF > 0) console.log(`# SHORT ${shortF} facts: ${mirror ? `${mirror} has not posted enough yet` : 'pool exhausted or blocked by the photo rule'}`);
  if (shortA > 0) console.log(`# SHORT ${shortA} articles: ${mirror ? `${mirror} has not posted enough yet` : 'pool exhausted or blocked by species/photo rules'}`);

  // Stripe rather than block: day d takes picks d, d+days, d+2*days... Taking a
  // contiguous slice per day clumps the run (two tank-setup guides on the same
  // day), because the pools are ordered and neighbours resemble each other.
  for (let d = 0; d < days; d++) {
    console.log(`\n--- Day ${d + 1}`);
    for (let k = 0; k < perDayFacts; k++) {
      const f = pickedFacts[k * days + d];
      if (!f) { console.log(`FACT    EXHAUSTED`); continue; }
      console.log(`FACT    id=${f.id}\t${f.category}\t${f.animal}\t${f.title}`);
      console.log(`        ${f.image}${f.imageShared ? ' (SHARED)' : ''}\t${f.url}`);
    }
    for (let k = 0; k < perDayArticles; k++) {
      const a = pickedArticles[k * days + d];
      if (!a) { console.log(`ARTICLE EXHAUSTED`); continue; }
      console.log(`ARTICLE ${a.file}`);
      console.log(`        ${a.kind}\t${a.split || '-'}\t${a.image}\t${a.url}`);
    }
  }
}

function mark() {
  const ledger = readLedger();
  // Required, not defaulted: marking against the wrong platform silently burns
  // a slot on a feed that never ran it, and nothing downstream would catch it.
  const plat = platformArg(true);
  const bucket = ledger[plat];
  const date = arg('--date') || new Date().toISOString().slice(0, 10);
  const factId = arg('--fact');
  const articleFile = arg('--article');
  if (!factId && !articleFile) {
    console.error('mark needs --fact <id> and/or --article <content/path.mdx>');
    process.exit(1);
  }
  if (factId) {
    const id = Number(factId);
    if (bucket.facts.some(f => f.id === id)) console.error(`fact ${id} already marked on ${plat}, skipping`);
    else bucket.facts.push({ id, date });
  }
  if (articleFile) {
    if (!fs.existsSync(path.join(ROOT, articleFile))) {
      console.error(`no such file: ${articleFile}`);
      process.exit(1);
    }
    if (bucket.articles.some(a => a.file === articleFile)) console.error(`${articleFile} already marked on ${plat}, skipping`);
    else bucket.articles.push({ file: articleFile, date });
  }
  fs.writeFileSync(LEDGER, JSON.stringify(ledger, null, 2) + '\n');
  console.log(`${plat}: ${bucket.facts.length} facts, ${bucket.articles.length} articles`);
}

const cmd = process.argv[2];
if (cmd === 'facts') printFacts();
else if (cmd === 'articles') printArticles();
else if (cmd === 'plan') printPlan();
else if (cmd === 'stats') printStats();
else if (cmd === 'mark') mark();
else {
  console.log('usage: node scripts/social-inventory.mjs <facts|articles|plan|stats|mark> [options]');
  console.log(`platforms: ${PLATFORMS.join(', ')}  (--platform, required for mark)`);
  console.log('plan --mirror <platform>  propose what that platform already posted, for cross-posting');
  process.exit(1);
}

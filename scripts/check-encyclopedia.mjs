// Audits the encyclopedia entries, which nothing else reads.
//
//   node scripts/check-encyclopedia.mjs [--all] [--strict]
//
// src/lib/data/encyclopedia/*.js renders 103 animal pages, and no gate has
// ever looked at it. check-voice reads content/blog, content/guides and
// content/fun-facts only, so a dash, a dropped field, or a difficulty that
// disagrees with the same animal's care guide ships without anything
// noticing. The ball python set test found the "Wild Lifespan" field holding
// a captivity figure (docs/READER_REVIEWS.md, ball python first pass); that
// is the kind of thing this catches.
//
// Errors (exit 1 under --strict):
//   missing-field   a bio field absent or empty
//   dash            a real em or en dash, the same rule check-voice enforces
//   difficulty      the entry and its care guide state different difficulties.
//                   RULES (Hubs) makes the encyclopedia the authority, so a
//                   mismatch means one of the two pages is lying to a reader.
//   no-guide        an entry whose guideId matches no care guide
//   duplicate-id    two entries sharing an id
//
// Warnings (advisory, a reviewer decides):
//   captive-lifespan  wildLifespan gives a captivity figure without naming a
//                     wild one, under a label the page prints as "Wild
//                     Lifespan". The fixed form is axolotl's or leopard
//                     gecko's: lead with the wild figure, or say the wild
//                     figure is not documented, then give the captive range.
//   intensifier       "genuinely", "actually", "really" and friends, rationed
//                     the same way RULES rations them in articles.
//   no-history        no bio.history yet. Optional by design: the page drops
//                     the card rather than printing a placeholder, so this
//                     warning is the coverage counter while the field fills
//                     in one group at a time.
//   history-length    a history that is one sentence or runs past six, where
//                     the shape is 3 to 5 like the Beastfile overviews.
//   history-voice     first or second person in a history. The encyclopedia is
//                     documentary throughout: no I, we, our, you, your.
//   self-reference    the site talking about itself ("on this site", "this
//                     site's"). RULES bans it in prose and the linking pass
//                     stripped it from all 532 series guides; the encyclopedia
//                     was never swept, and four entries still carried it.
//
// Nothing is written back. Written 2026-09-08 alongside the ball python hub
// reconciliation (READMEFIRST, next jobs).
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const showAll = args.includes('--all');
const strict = args.includes('--strict');

async function loadAll(dir) {
  const items = [];
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.js') || f === 'index.js' || f === 'meta.js') continue;
    const mod = await import(path.resolve(dir, f));
    for (const v of Object.values(mod)) if (Array.isArray(v)) items.push(...v.map((x) => ({ ...x, _file: f })));
  }
  return items;
}

const animals = await loadAll('src/lib/data/encyclopedia');
const guides = await loadAll('src/lib/data/guides');

const BIO_FIELDS = ['overview', 'origin', 'habitat', 'adultSize', 'wildDiet', 'wildLifespan', 'conservation'];
const DASH = /[–—]/g;
const INTENSIFIER = /\b(genuinely|actually|really|truly|incredibly|extremely|remarkably|absolutely|literally)\b/gi;
const SELF_REF = /on this site|this site's|this site |covered elsewhere|already covered|our [a-z]+ guide/i;

// A wildLifespan is honest when it names a wild figure, or says plainly that
// the wild figure is not known. "12-15 years (up to 20+ in captivity)" does
// neither: the reader has to assume the bare number is the wild one.
const NAMES_WILD = /\(wild\)|in the wild|wild lifespan|wild longevity|wild figure|not documented|not well documented|undocumented|not been studied|domesticated/i;
const NAMES_CAPTIVE = /captiv|pet fancy|as a pet/i;

const errors = [];
const warnings = [];
const err = (id, rule, detail) => errors.push({ id, rule, detail });
const warn = (id, rule, detail) => warnings.push({ id, rule, detail });

const seen = new Map();
for (const a of animals) {
  if (seen.has(a.id)) err(a.id, 'duplicate-id', `also in ${seen.get(a.id)}`);
  else seen.set(a.id, a._file);

  const bio = a.bio || {};
  for (const f of BIO_FIELDS) {
    if (!bio[f] || !String(bio[f]).trim()) err(a.id, 'missing-field', f);
  }

  const text = [a.name, a.scientific, a.difficulty, bio.history || '', ...BIO_FIELDS.map((f) => bio[f] || '')].join(' ');
  const dashes = (text.match(DASH) || []).length;
  if (dashes) err(a.id, 'dash', `${dashes} em/en dash(es)`);

  const guide = guides.find((g) => g.id === (a.guideId || a.id));
  if (!guide) err(a.id, 'no-guide', `guideId "${a.guideId || a.id}" matches no care guide`);
  else if (guide.difficulty !== a.difficulty) {
    err(a.id, 'difficulty', `entry "${a.difficulty}" vs guide "${guide.difficulty}"`);
  }

  const life = bio.wildLifespan || '';
  if (NAMES_CAPTIVE.test(life) && !NAMES_WILD.test(life)) {
    warn(a.id, 'captive-lifespan', JSON.stringify(life));
  }

  const ints = (bio.overview || '').match(INTENSIFIER);
  if (ints && ints.length > 1) warn(a.id, 'intensifier', `${ints.length} in the overview (${ints.join(', ')})`);

  const selfRef = Object.entries(bio).find(([, v]) => typeof v === 'string' && SELF_REF.test(v));
  if (selfRef) warn(a.id, 'self-reference', `${selfRef[0]}: ${SELF_REF.exec(selfRef[1])[0]}`);

  const history = (bio.history || '').trim();
  if (!history) warn(a.id, 'no-history', 'no bio.history yet');
  else {
    const sentences = history.split(/[.!?]+\s/).filter((x) => x.trim().length > 20).length;
    if (sentences < 2 || sentences > 6) warn(a.id, 'history-length', `${sentences} sentence(s), the shape is 3 to 5`);
    // A bare capital I is usually a CITES Appendix or a Type/Phase number, so
    // first person is matched only where a verb follows it.
    const person = history.match(/\bI\s+(?:am|was|have|had|think|found|would|will|can|do|did)\b/)
      || history.match(/\b(we|our|you|your)\b/i)
      || history.match(/\bus\b/);
    if (person) warn(a.id, 'history-voice', `first or second person: "${person[0]}"`);
  }
}

const byId = (list) => {
  const m = new Map();
  for (const x of list) {
    if (!m.has(x.id)) m.set(x.id, []);
    m.get(x.id).push(x);
  }
  return m;
};

const printGroup = (label, list) => {
  if (!list.length) return;
  console.log(`\n${label}`);
  for (const [id, items] of byId(list)) {
    console.log(`  ${id}`);
    for (const i of items) console.log(`    ${i.rule}: ${i.detail}`);
  }
};

printGroup('ERRORS', errors);
if (showAll || warnings.length) printGroup('WARNINGS', warnings);

const ruleCount = (list) => {
  const c = {};
  for (const x of list) c[x.rule] = (c[x.rule] || 0) + 1;
  return Object.entries(c).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}=${v}`).join(', ');
};

console.log(
  `\nEncyclopedia: ${animals.length} entries, ${new Set(errors.map((e) => e.id)).size} with errors, ` +
  `${new Set(warnings.map((w) => w.id)).size} with warnings only.`
);
if (errors.length) console.log(`Errors by rule: ${ruleCount(errors)}`);
if (warnings.length) console.log(`Warnings by rule: ${ruleCount(warnings)}`);

if (strict && errors.length) process.exit(1);

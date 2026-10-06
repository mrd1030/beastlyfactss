// Guards the shared price list (src/lib/data/costItems.js, costSheets.js).
// Every cost figure on a converted animal comes from that list through
// <CostTable> and the %%placeholders%% filled in by src/lib/costs.js, so
// this fails the build when the list or a page could print something wrong:
//
//   - a sheet row naming an item that does not exist, or an item linking a
//     product that is not in affiliateProducts.js
//   - a price off the $5 grid, zero, or with low above high (owner rule:
//     ranges round outward to $5)
//   - a placeholder anywhere in content/ or the hub files that does not
//     resolve
//   - a converted animal whose cost guide does not draw its setup table from
//     its sheet
//   - a hand-typed copy of a converted animal's setup total anywhere: that is
//     exactly the drift the list exists to stop, so the figure must come in
//     through %%setup:<id>%%
//
// It also lists, without failing, any row that overrides its item's price
// and any item no sheet or placeholder uses.
// Run: node scripts/check-cost-tables.mjs
import fs from 'node:fs';
import path from 'node:path';
import { COST_ITEMS } from '../src/lib/data/costItems.js';
import { COST_SHEETS } from '../src/lib/data/costSheets.js';
import { AFFILIATE_PRODUCTS } from '../src/lib/data/affiliateProducts.js';
import { resolveCostTokens, sectionTotal, formatRange, COST_TOKEN } from '../src/lib/costs.js';

const errors = [];
const notes = [];
const products = new Set(AFFILIATE_PRODUCTS.map((p) => p.slug));

for (const [id, item] of Object.entries(COST_ITEMS)) {
  if (item.product && !products.has(item.product)) errors.push(`item ${id}: product "${item.product}" is not in affiliateProducts.js`);
  for (const k of ['low', 'high']) {
    if (!Number.isInteger(item[k]) || item[k] <= 0 || item[k] % 5) errors.push(`item ${id}: ${k} ${item[k]} is not a positive multiple of $5`);
  }
  if (item.low > item.high) errors.push(`item ${id}: low ${item.low} is above high ${item.high}`);
}

const used = new Set();
for (const [guide, sheet] of Object.entries(COST_SHEETS)) {
  for (const section of Object.keys(sheet).filter((k) => Array.isArray(sheet[k]) && k !== 'animal' && k !== 'monthly' && k !== 'vetExam' && k !== 'annual')) {
    for (const row of sheet[section] || []) {
      if (!row.item) {
        // One-off row: the animal itself, a first exam. Needs its own text and figures.
        if (!row.text || row.low == null || row.high == null || row.low > row.high || row.low % 5 || row.high % 5) {
          errors.push(`sheet ${guide}: one-off row needs text and a $5-step low and high (${JSON.stringify(row)})`);
        }
        continue;
      }
      if (!COST_ITEMS[row.item]) { errors.push(`sheet ${guide}: unknown item "${row.item}"`); continue; }
      used.add(row.item);
      for (const p of row.products || []) if (!products.has(p)) errors.push(`sheet ${guide}: row product "${p}" is not in affiliateProducts.js`);
      if (row.low != null) notes.push(`sheet ${guide}: "${row.item}" overrides its price (${row.why || 'no reason given'})`);
    }
  }
  for (const k of ['animal', 'monthly', 'vetExam', 'annual']) {
    const v = sheet[k];
    if (v && (v.length !== 2 || v[0] > v[1])) errors.push(`sheet ${guide}: ${k} must be [low, high]`);
  }
  const file = path.join('content/guides', `${guide}-cost-guide.mdx`);
  if (!fs.existsSync(file)) { errors.push(`sheet ${guide}: no ${file}`); continue; }
  if (!fs.readFileSync(file, 'utf8').includes(`<CostTable guide="${guide}" section="necessities"`)) {
    errors.push(`${file}: setup table is not drawn from its sheet (<CostTable guide="${guide}" section="necessities" />)`);
  }
}

// Files whose placeholders get filled: every .mdx under content/ (Vite and
// sync-articles fill them) and the hub files (fillCostTokens).
const walk = (dir, ext, out = []) => {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, ext, out);
    else if (p.endsWith(ext)) out.push(p);
  }
  return out;
};
const files = [
  ...walk('content', '.mdx'),
  ...fs.readdirSync('src/lib/data/guides').filter((f) => f.endsWith('.js')).map((f) => path.join('src/lib/data/guides', f)),
];

// Any other data file is printed as written, so a placeholder there would
// reach readers as "%%setup:...%%".
const DATA_OK = new Set(['costItems.js', 'costSheets.js']);
for (const f of walk('src/lib/data', '.js')) {
  if (f.split(path.sep).includes('guides') || DATA_OK.has(path.basename(f))) continue;
  if (COST_TOKEN.test(fs.readFileSync(f, 'utf8'))) errors.push(`${f}: cost placeholder in a file that is never filled; only content/ articles and the hub files are`);
  COST_TOKEN.lastIndex = 0;
}

const totals = Object.keys(COST_SHEETS).map((guide) => {
  const t = sectionTotal(guide, 'necessities');
  const [lo, hi] = t.map((n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  return { guide, written: [formatRange(t), `$${lo}-${hi}`, `$${lo}-$${hi}`, `$${lo} - $${hi}`] };
});

for (const f of files) {
  const raw = fs.readFileSync(f, 'utf8');
  // "a %%setup:x%%" reads "a $800" today and "a $1,100" wrong tomorrow: the
  // article depends on the number, so it never sits right before one.
  for (const m of raw.matchAll(/\b(a|an) %%[a-z]+:[a-z0-9-]+%%/gi)) {
    errors.push(`${f}: "${m[0]}": reword so no "a" or "an" sits right before a placeholder`);
  }
  for (const m of raw.matchAll(COST_TOKEN)) {
    if (m[1] === 'price') used.add(m[2]);
    try { resolveCostTokens(m[0]); } catch (e) { errors.push(`${f}: ${e.message}`); }
  }
  // A typed copy of a converted animal's setup total counts only where that
  // animal is the subject: its own articles, or within a few hundred
  // characters of its name or id. Another animal's guide that happens to
  // price its own gear at the same range is not drift.
  for (const { guide, written } of totals) {
    const own = path.basename(f).startsWith(guide);
    const names = [guide, guide.replace(/-/g, ' ')];
    for (const w of written) {
      let i = raw.indexOf(w);
      while (i >= 0) {
        const win = raw.slice(Math.max(0, i - 400), i + w.length + 400).toLowerCase();
        if (own || names.some((n) => win.includes(n))) {
          errors.push(`${f}: hand-typed setup total "${w}" for ${guide}; use %%setup:${guide}%%`);
          break;
        }
        i = raw.indexOf(w, i + 1);
      }
    }
  }
}

for (const id of Object.keys(COST_ITEMS)) if (!used.has(id)) notes.push(`item ${id} is not used by any sheet or placeholder`);

for (const n of notes) console.log(`  note: ${n}`);
if (errors.length) {
  for (const e of errors) console.error(`  ${e}`);
  console.error(`\nCost table check FAILED: ${errors.length} problem(s). Fix the price list or the page, not the checker.`);
  process.exit(1);
}
console.log(`Cost tables: ${Object.keys(COST_SHEETS).length} animal(s) on the shared price list, ${Object.keys(COST_ITEMS).length} item(s), all placeholders resolve.`);

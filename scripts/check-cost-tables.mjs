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
  for (const section of ['necessities', 'extras']) {
    for (const row of sheet[section] || []) {
      if (!COST_ITEMS[row.item]) { errors.push(`sheet ${guide}: unknown item "${row.item}"`); continue; }
      used.add(row.item);
      if (row.low != null) notes.push(`sheet ${guide}: "${row.item}" overrides its price (${row.why || 'no reason given'})`);
    }
  }
  for (const k of ['animal', 'monthly', 'vetExam']) {
    const v = sheet[k];
    if (v && (v.length !== 2 || v[0] > v[1])) errors.push(`sheet ${guide}: ${k} must be [low, high]`);
  }
  const file = path.join('content/guides', `${guide}-cost-guide.mdx`);
  if (!fs.existsSync(file)) { errors.push(`sheet ${guide}: no ${file}`); continue; }
  if (!fs.readFileSync(file, 'utf8').includes(`<CostTable guide="${guide}" section="necessities"`)) {
    errors.push(`${file}: setup table is not drawn from its sheet (<CostTable guide="${guide}" section="necessities" />)`);
  }
}

// Every file a placeholder may live in, read raw.
const files = [];
for (const dir of ['content/guides', 'content/fun-facts', 'content/blog']) {
  if (fs.existsSync(dir)) for (const f of fs.readdirSync(dir)) if (f.endsWith('.mdx')) files.push(path.join(dir, f));
}
for (const f of fs.readdirSync('src/lib/data/guides')) if (f.endsWith('.js')) files.push(path.join('src/lib/data/guides', f));

const totals = Object.keys(COST_SHEETS).map((guide) => {
  const t = sectionTotal(guide, 'necessities');
  const [lo, hi] = t.map((n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  return { guide, written: [formatRange(t), `$${lo}-${hi}`, `$${lo}-$${hi}`, `$${lo} - $${hi}`] };
});

for (const f of files) {
  const raw = fs.readFileSync(f, 'utf8');
  for (const m of raw.matchAll(COST_TOKEN)) {
    if (m[1] === 'price') used.add(m[2]);
    try { resolveCostTokens(m[0]); } catch (e) { errors.push(`${f}: ${e.message}`); }
  }
  for (const { guide, written } of totals) {
    for (const w of written) {
      if (raw.includes(w)) errors.push(`${f}: hand-typed setup total "${w}" for ${guide}; use %%setup:${guide}%%`);
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

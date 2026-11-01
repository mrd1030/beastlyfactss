// Moves the monthly review dates for what the checker actually vouched for.
//
// Reads the per-cell records scripts/check-legal-sources.mjs writes to
// docs/legal-checks/<yyyy-mm>-fetch.json (any run) and <yyyy-mm>-browser.json
// (a desktop --browser run), and the matrix. A cell counts as checked this
// month when:
//
//   - a record says its quote was on the live page ("found"), or, for a cell
//     with no quote, that its page was readable and unchanged ("unchanged");
//   - and that record was made for the cell as it stands now: same sourceId,
//     same quote (by hash). Edit a cell after the run and it needs another;
//   - and, when the page itself changed, the work order has been worked
//     (--worked). A quote can survive on a page whose law moved around it,
//     which is why a changed page is in the work order at all. Once it has
//     been worked, a no-quote cell on that page counts too;
//   - or the cell's verifiedOn is already this month, because a session read
//     it by hand.
//
// With --apply: each cell checked by a record gets verifiedOn set to the day of
// that record, and each legal guide whose cells were ALL checked this month
// gets lastReviewed set to today. Without --apply it changes nothing and says
// what it would do and what blocks the rest. lastUpdated is never touched:
// that moves only when the text does.
//
// Usage:
//   node scripts/legal-stamp-reviewed.mjs                 dry run, this month
//   node scripts/legal-stamp-reviewed.mjs --apply         write the dates
//   node scripts/legal-stamp-reviewed.mjs --worked        the work order is done
//   node scripts/legal-stamp-reviewed.mjs --list          every blocking cell, per guide
//   node scripts/legal-stamp-reviewed.mjs --month 2026-11
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..');
const DATA = path.join(ROOT, 'src/lib/data/legalStatus.json');
const CHECKS = path.join(ROOT, 'docs/legal-checks');
const GUIDES = path.join(ROOT, 'content/guides');

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const WORKED = args.includes('--worked');
const LIST = args.includes('--list');
// My date, US Eastern, not the container's.
const TODAY = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' }).format(new Date());
const MONTH = args.includes('--month') ? args[args.indexOf('--month') + 1] : TODAY.slice(0, 7);

// Same hash the checker records: sha256 of the quote as written, 32 hex chars.
const hash = (s) => createHash('sha256').update(s).digest('hex').slice(0, 32);

const files = fs.existsSync(CHECKS)
  ? fs.readdirSync(CHECKS).filter((f) => f.startsWith(`${MONTH}-`) && f.endsWith('.json'))
  : [];
if (!files.length) {
  console.log(`No checker record for ${MONTH} in docs/legal-checks/. Run node scripts/check-legal-sources.mjs first.`);
  process.exit(1);
}
const records = files.map((f) => ({ via: f.slice(8, -5), cells: JSON.parse(fs.readFileSync(path.join(CHECKS, f), 'utf8')).cells }));

const raw = fs.readFileSync(DATA, 'utf8');
const data = JSON.parse(raw);

// Why a cell is not checked, in the words the summary prints.
const REASON = {
  unreachable: 'source would not load',
  opaque: 'page loaded without the statute text',
  unreadable: 'page needs a browser run',
  missing: 'quote not on the page',
  'page-changed': 'no quote, and the page changed',
  'page-new': 'no quote, and the source has no baseline yet',
  'page-unstable': 'no quote, and the page was unstable',
  changed: 'page changed: work the work order, then --worked',
  stale: 'cell edited since the run',
  none: 'no record for this cell',
};

function judge(id, cell) {
  if (cell.verifiedOn && cell.verifiedOn >= `${MONTH}-01`) return { ok: true, by: 'hand' };
  let why = 'none';
  for (const rec of records) {
    const r = rec.cells[id];
    if (!r) continue;
    if (r.sourceId !== cell.sourceId || r.quoteHash !== hash(cell.quote || '')) { why = 'stale'; continue; }
    // A changed page with no quote to find is vouched for by whoever worked the
    // work order: reading a changed page means judging every cell on it.
    const good = r.result === 'found' || r.result === 'unchanged' || (r.result === 'page-changed' && WORKED);
    if (!good) { if (why === 'none' || why === 'stale') why = r.result; continue; }
    if (r.state === 'changed' && !WORKED) { why = 'changed'; continue; }
    return { ok: true, by: 'record', on: r.on };
  }
  return { ok: false, why };
}

const guides = new Map();
let stampedCells = 0;
let checkedCells = 0;
let totalCells = 0;
const reasons = {};
for (const [animal, rec] of Object.entries(data.animals)) {
  const slug = rec.article?.match(/\/blog\/([^/]+)\/?$/)?.[1];
  if (slug && !guides.has(slug)) guides.set(slug, { slug, cells: 0, blocked: [] });
  for (const [jur, cell] of Object.entries(rec.jurisdictions || {})) {
    totalCells++;
    const id = `${animal}/${jur}`;
    const v = judge(id, cell);
    if (slug) guides.get(slug).cells++;
    if (!v.ok) {
      reasons[v.why] = (reasons[v.why] || 0) + 1;
      if (slug) guides.get(slug).blocked.push({ id, why: v.why, sourceId: cell.sourceId });
      continue;
    }
    checkedCells++;
    if (v.by === 'record' && (!cell.verifiedOn || cell.verifiedOn < v.on)) {
      stampedCells++;
      if (APPLY) cell.verifiedOn = v.on;
    }
  }
}

const ready = [...guides.values()].filter((g) => !g.blocked.length);
const stampedGuides = [];
for (const g of ready) {
  const file = path.join(GUIDES, `${g.slug}.mdx`);
  if (!fs.existsSync(file)) { console.log(`  no file for ${g.slug}, skipped`); continue; }
  const text = fs.readFileSync(file, 'utf8');
  const m = text.match(/^lastReviewed: "(\d{4}-\d{2}-\d{2})"$/m);
  if (m && m[1] >= TODAY) continue;
  stampedGuides.push(g.slug);
  if (!APPLY) continue;
  const next = m
    ? text.replace(m[0], `lastReviewed: "${TODAY}"`)
    : text.replace(/^(lastUpdated: ".*")$/m, `$1\nlastReviewed: "${TODAY}"`);
  fs.writeFileSync(file, next);
}
if (APPLY && stampedCells) fs.writeFileSync(DATA, `${JSON.stringify(data, null, 2)}${raw.endsWith('\n') ? '\n' : ''}`);

console.log(`Legal review for ${MONTH}, from ${records.map((r) => r.via).join(' + ')} record(s)${WORKED ? ', work order marked done' : ''}.`);
console.log(`Cells: ${checkedCells} of ${totalCells} checked this month. ${stampedCells} verifiedOn ${APPLY ? 'moved' : 'would move'}.`);
console.log(`Guides: ${ready.length} of ${guides.size} fully checked. ${stampedGuides.length} lastReviewed ${APPLY ? 'set' : 'would be set'} to ${TODAY}.`);
if (Object.keys(reasons).length) {
  console.log('\nWhat blocks the rest:');
  for (const [why, n] of Object.entries(reasons).sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(5)}  ${REASON[why] || why}`);
}
const blockedGuides = [...guides.values()].filter((g) => g.blocked.length).sort((a, b) => a.blocked.length - b.blocked.length);
if (blockedGuides.length) {
  console.log(`\nGuides still waiting (${blockedGuides.length}), fewest blocking cells first:`);
  for (const g of blockedGuides) {
    console.log(`  ${g.slug}: ${g.blocked.length} of ${g.cells}`);
    if (LIST) for (const b of g.blocked) console.log(`      ${b.id}  ${b.sourceId || 'no source'}  ${REASON[b.why] || b.why}`);
  }
}
if (!APPLY && (stampedCells || stampedGuides.length)) console.log('\nDry run. Add --apply to write these dates.');

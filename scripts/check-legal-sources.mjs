// Watches the 208 primary sources behind legalStatus.json for change.
//
// The point is NOT to read the law. It is to notice when a page the matrix
// rests on has been edited, so a human re-reads that one source instead of
// re-reading all 208 on a schedule. Exotic pet law moves, and the matrix is
// the site's strongest section: legal pages are 13.6% of the pages and take
// 37% of the clicks.
//
// Costs nothing to run. It is 208 HTTP GETs and a hash each, no model calls
// and no API keys. A month of this is a few minutes of CI.
//
// The hard part is not fetching, it is NOT crying wolf. A statute page carries
// a lot of furniture that changes on every request: session ids, view counters,
// "printed on" timestamps, CSRF tokens, rotating ad slots. Hashing the raw
// response marks every source changed every month and the report becomes noise
// nobody reads, which is worse than no report. So the text is normalized hard
// before hashing, and the volatile patterns below are stripped by name.
//
// Usage:
//   node scripts/check-legal-sources.mjs              compare against the baseline
//   node scripts/check-legal-sources.mjs --write      write/refresh the baseline
//   node scripts/check-legal-sources.mjs --only NV    limit to one jurisdiction
//
// Exit codes: 0 nothing changed, 1 at least one source changed. Unreachable
// sources never fail the run on their own, because half the state legislature
// sites time out or block a datacentre IP on any given day and a checker that
// fails for that reason gets muted within two months.

import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..');
const DATA = path.join(ROOT, 'src/lib/data/legalStatus.json');
const BASELINE = path.join(ROOT, 'docs/legal-source-hashes.json');

const WRITE = process.argv.includes('--write');
const ONLY = (() => {
  const i = process.argv.indexOf('--only');
  return i === -1 ? null : (process.argv[i + 1] || '').toUpperCase();
})();

const CONCURRENCY = 6;
const TIMEOUT_MS = 45_000;
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

// Everything here changes without the law changing. Order matters: tags first,
// so an attribute value cannot survive as text.
const VOLATILE = [
  [/<script\b[\s\S]*?<\/script>/gi, ' '],
  [/<style\b[\s\S]*?<\/style>/gi, ' '],
  [/<!--[\s\S]*?-->/g, ' '],
  [/<[^>]+>/g, ' '],
  [/&[a-z]+;|&#\d+;/gi, ' '],
  // dates and times in every format these sites use
  [/\b\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2}(:\d{2})?)?\b/g, ' '],
  [/\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g, ' '],
  [/\b\d{1,2}:\d{2}(:\d{2})?\s*(am|pm)?\b/gi, ' '],
  [/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+\d{1,2},?\s+\d{4}\b/gi, ' '],
  // session, tracking and cache-busting tokens
  [/\b[0-9a-f]{16,}\b/gi, ' '],
  [/\b(jsessionid|sessionid|viewstate|csrf|nonce|requestid|correlationid)\S*/gi, ' '],
  [/\bv=\d+\b|\bcb=\d+\b|\bts=\d+\b/gi, ' '],
];

function normalize(body) {
  let t = body;
  for (const [re, rep] of VOLATILE) t = t.replace(re, rep);
  return t.replace(/\s+/g, ' ').trim().toLowerCase();
}

const hash = (s) => createHash('sha256').update(s).digest('hex').slice(0, 32);

async function fetchOne(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: 'follow',
      headers: { 'user-agent': UA, accept: '*/*' },
    });
    if (!res.ok) return { error: `HTTP ${res.status}` };
    const buf = Buffer.from(await res.arrayBuffer());
    // A PDF is bytes, not markup. Hash it whole: these are statute PDFs that
    // are republished rather than edited, so a byte change is a real signal
    // and normalizing extracted text would need a PDF parser in CI for no gain.
    const isPdf = (res.headers.get('content-type') || '').includes('pdf')
      || buf.subarray(0, 5).toString('latin1') === '%PDF-';
    const text = isPdf ? buf.toString('latin1') : normalize(buf.toString('utf8'));
    return { hash: hash(text), length: text.length, kind: isPdf ? 'pdf' : 'html' };
  } catch (err) {
    return { error: err.name === 'AbortError' ? 'timeout' : String(err.message || err).slice(0, 60) };
  } finally {
    clearTimeout(timer);
  }
}

async function pool(items, worker, limit) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const i = next++;
      out[i] = await worker(items[i]);
    }
  }));
  return out;
}

const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));

// Which cells cite each source, so a change report names the animals a human
// has to go and re-read rather than just a source id nobody remembers.
const citedBy = new Map();
for (const [animal, rec] of Object.entries(data.animals)) {
  for (const [jur, cell] of Object.entries(rec.jurisdictions || {})) {
    if (!cell?.sourceId) continue;
    if (!citedBy.has(cell.sourceId)) citedBy.set(cell.sourceId, []);
    citedBy.get(cell.sourceId).push(`${animal}/${jur}`);
  }
}

let sources = Object.entries(data.sources)
  .filter(([, s]) => s?.url)
  .map(([id, s]) => ({ id, url: s.url, title: s.title || '' }));
if (ONLY) sources = sources.filter((s) => s.id.toUpperCase().startsWith(`${ONLY}-`));

const baseline = fs.existsSync(BASELINE) ? JSON.parse(fs.readFileSync(BASELINE, 'utf8')) : { sources: {} };

console.log(`Checking ${sources.length} legal sources${ONLY ? ` for ${ONLY}` : ''}...\n`);

const results = await pool(sources, async (s) => ({ ...s, ...(await fetchOne(s.url)) }), CONCURRENCY);

const changed = [];
const unstable = [];
const unreachable = [];
const unchanged = [];
const fresh = [];

// Anything that differs from the baseline gets fetched a second time before it
// is reported. This is the whole difference between a checker people read and
// one they mute. Measured on this corpus: a first pass flagged 6 of 177
// sources as changed ten minutes after the baseline was written, when no law
// had moved. Two consecutive fetches of those pages were byte-identical, so
// the difference was a transient the server served once, not an edit.
//
// A real edit reproduces. A flake does not. So: differs once and again, with
// both fetches agreeing, is a change. Differs once and the two fetches
// disagree with each other is an unstable source, reported separately and
// never failing the run.
const suspects = results.filter((r) => !r.error && baseline.sources[r.id] && baseline.sources[r.id].hash !== r.hash);
if (suspects.length) {
  console.log(`Confirming ${suspects.length} apparent change(s) with a second fetch...\n`);
  await new Promise((r) => setTimeout(r, 2000));
  const second = await pool(suspects, async (s) => ({ id: s.id, ...(await fetchOne(s.url)) }), CONCURRENCY);
  for (let i = 0; i < suspects.length; i++) suspects[i].confirm = second[i];
}

for (const r of results) {
  if (r.error) { unreachable.push(r); continue; }
  const prev = baseline.sources[r.id];
  if (!prev) { fresh.push(r); continue; }
  if (prev.hash === r.hash) { unchanged.push(r); continue; }

  const again = r.confirm;
  const drift = prev.length ? Math.abs(r.length - prev.length) / prev.length : 1;
  if (!again || again.error || again.hash !== r.hash) {
    unstable.push({ ...r, prevLength: prev.length, drift });
    continue;
  }
  changed.push({ ...r, prevLength: prev.length, drift });
}

if (WRITE) {
  const out = { generatedAt: new Date().toISOString().slice(0, 10), sources: { ...baseline.sources } };
  for (const r of results) {
    if (r.error) continue;
    out.sources[r.id] = { hash: r.hash, length: r.length, kind: r.kind, url: r.url };
  }
  fs.writeFileSync(BASELINE, `${JSON.stringify(out, null, 2)}\n`);
  console.log(`Baseline written: ${Object.keys(out.sources).length} sources recorded, ${unreachable.length} unreachable and left as they were.`);
  process.exit(0);
}

if (changed.length) {
  console.log(`CHANGED (${changed.length}) - re-read these, then update the cells and bump verifiedOn:\n`);
  changed.sort((a, b) => b.drift - a.drift);
  for (const c of changed) {
    const pct = (c.drift * 100).toFixed(1);
    console.log(`  ${c.id}  ${pct}% size change (${c.prevLength} -> ${c.length})`);
    console.log(`    ${c.title.slice(0, 96)}`);
    console.log(`    ${c.url}`);
    const cells = citedBy.get(c.id) || [];
    console.log(`    cited by ${cells.length} cell(s): ${cells.slice(0, 8).join(', ')}${cells.length > 8 ? ', ...' : ''}\n`);
  }
}

if (unstable.length) {
  console.log(`UNSTABLE (${unstable.length}) - differed from the baseline but did not reproduce, so treated as server noise:`);
  for (const u of unstable) console.log(`  ${u.id}  ${(u.drift * 100).toFixed(1)}% apparent drift`);
  console.log('');
}

if (fresh.length) {
  console.log(`NEW (${fresh.length}) - no baseline yet, run with --write to record them:`);
  for (const f of fresh) console.log(`  ${f.id}`);
  console.log('');
}

if (unreachable.length) {
  console.log(`UNREACHABLE (${unreachable.length}) - not a failure, but a source that stays unreachable for months has moved:`);
  for (const u of unreachable) console.log(`  ${u.id}  ${u.error}  ${u.url.slice(0, 80)}`);
  console.log('');
}

console.log(`Summary: ${unchanged.length} unchanged, ${changed.length} changed, ${unstable.length} unstable, ${fresh.length} new, ${unreachable.length} unreachable.`);

if (changed.length) {
  console.log('\nA size change under about 1% is usually furniture that slipped the filter.');
  console.log('A larger one, or any change on a source only one or two cells cite, is worth opening.');
  process.exit(1);
}

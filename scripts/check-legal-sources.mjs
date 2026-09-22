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
// PDFs and .docx files are read as words, not bytes. 52 sources are PDFs and
// 828 cells rest on them, 31% of the matrix, so leaving them unreadable left
// the strongest signal switched off across a third of the work. PDFs go
// through pypdf (scripts/pdf-text.py); a .docx is a zip and node can inflate
// it unaided. Either failing falls back to hashing the bytes, which is how
// both behaved before.
//
// The hard part is not fetching, it is NOT crying wolf. A statute page carries
// a lot of furniture that changes on every request: session ids, view counters,
// "printed on" timestamps, CSRF tokens, rotating ad slots. Hashing the raw
// response marks every source changed every month and the report becomes noise
// nobody reads, which is worse than no report. So the text is normalized hard
// before hashing, and the volatile patterns below are stripped by name.
//
// It decides nothing about the law and never edits a cell. What it produces is
// docs/legal-source-report.md: each flagged source paired with the cells resting
// on it and what each of those cells currently claims, so whoever reads it next,
// a person or a session pointed at the file, can judge a page against our own
// words without first looking up twelve cells.
//
// Usage:
//   node scripts/check-legal-sources.mjs              compare against the baseline
//   node scripts/check-legal-sources.mjs --write      write/refresh the baseline
//   node scripts/check-legal-sources.mjs --only NV    limit to one jurisdiction
//
// Two signals, not one:
//
//   1. The page changed. A hash differs from the baseline. Weak on its own: a
//      statute page can gain a banner without the law moving.
//   2. A quote we cite is gone. Every cell in the matrix carries the sentence
//      it rests on. If that sentence is no longer on the page, the cell is
//      either stale or was wrong. This is the signal worth waking up for, and
//      it costs nothing but a string search.
//
// Signal 2 needs care: some of these sites render their text in JavaScript, so
// a fetch returns a shell with no statute in it and every quote "disappears" at
// once. A source whose quotes ALL miss is opaque, not changed, and is reported
// separately. Measured on this corpus: 7 of 26 fetchable HTML sources are
// opaque that way, and the 4 with partial misses are the ones worth reading.
//
// Exit codes: 0 nothing to do, 1 something to read. Unreachable sources never
// fail the run on their own, because half the state legislature sites time out
// or block a datacentre IP on any given day and a checker that fails for that
// reason gets muted within two months.

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const ROOT = path.join(import.meta.dirname, '..');
const DATA = path.join(ROOT, 'src/lib/data/legalStatus.json');
const BASELINE = path.join(ROOT, 'docs/legal-source-hashes.json');
const REPORT = path.join(ROOT, 'docs/legal-source-report.md');
const PDF_TEXT = path.join(ROOT, 'scripts/pdf-text.py');

const WRITE = process.argv.includes('--write');
const ONLY = (() => {
  const i = process.argv.indexOf('--only');
  return i === -1 ? null : (process.argv[i + 1] || '').toUpperCase();
})();

// Above this share of a source's quotes missing, assume the page is opaque
// (JS-rendered, paywalled, redirected to a search form) rather than edited.
const OPAQUE_RATIO = 0.6;
// Below this many characters of normalized text, the response carried no
// statute. Several of these sites serve their text only to a browser and hand a
// bot a shell, and some do it from a datacentre IP while serving a home
// connection fine. That is not an edit, and reporting it as one cost a false
// alarm on the very first CI run: le.utah.gov returned 2213 characters from a
// laptop and 118 from a GitHub runner, which read as a 94.7% edit to a page no
// one had touched. A shell has no usable hash and no findable quote, so it is
// treated as a failed fetch rather than a change.
const SHELL_CHARS = 500;

// A page whose every cited quote still verifies, and which moved less than
// this, changed its furniture. Reporting it costs a human a page read to learn
// nothing, which is the failure mode this whole script is built around.
const MIN_DRIFT = 0.005;
// A work order longer than this is triage, not a task. Hand back the list and
// let a human pick, rather than pointing a session at forty statutes.
const MAX_WORK_ORDER = 8;

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

// Quote text is normalized harder than page text: punctuation and section
// marks vary between how a cell was transcribed and how the site renders it,
// and none of that variation means the sentence moved.
function flatten(t) {
  return t
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    // Text pulled out of a PDF table arrives with its columns glued together,
    // so "Black Skirt Tetra" next to "Gymnocorymbus ternetzi" comes back as
    // "TetraGymnocorymbus". Splitting on the case boundary puts the word break
    // back where the layout had one.
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[^a-z0-9]+/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

// A cited quote is often stitched from separate clauses with an ellipsis, and
// often long enough that one reformatted comma would break a whole-string
// match. So match on windows instead: take the longest unbroken fragments and
// probe the head, middle and tail of each. Eight words of statute text is
// distinctive enough not to hit by accident and short enough to survive the
// site relaying out its paragraphs.
const PROBE_WORDS = 8;
function probesFor(quote) {
  const frags = quote
    .split(/\s*(?:\.\.\.|\u2026|\[[^\]]*\])\s*/)
    .map(flatten)
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);
  const out = [];
  for (const frag of frags.slice(0, 3)) {
    const w = frag.split(' ');
    if (w.length < 4) continue;
    if (w.length <= PROBE_WORDS) { out.push(w.join(' ')); continue; }
    const mid = Math.floor((w.length - PROBE_WORDS) / 2);
    out.push(w.slice(0, PROBE_WORDS).join(' '));
    out.push(w.slice(mid, mid + PROBE_WORDS).join(' '));
    out.push(w.slice(-PROBE_WORDS).join(' '));
  }
  return out;
}

// Returns the cells whose quote no longer appears, or null when the quote
// check could not be run at all (a PDF, or a page with no probeable quotes).
function checkQuotes(text, cells) {
  const flat = flatten(text);
  const checked = [];
  const missing = [];
  for (const c of cells) {
    if (!c.quote) continue;
    const probes = probesFor(c.quote);
    if (!probes.length) continue;
    checked.push(c);
    if (!probes.some((p) => flat.includes(p))) missing.push(c);
  }
  if (!checked.length) return null;
  return { checked: checked.length, missing };
}

// A .docx is a zip holding word/document.xml. Node has no zip reader but it
// has inflateRaw, and a zip's local file headers can be walked without one, so
// this needs no dependency. Four sources are .docx and 51 cells rest on them.
function docxText(buf) {
  let i = 0;
  while (i + 30 < buf.length && buf.readUInt32LE(i) === 0x04034b50) {
    const method = buf.readUInt16LE(i + 8);
    const csize = buf.readUInt32LE(i + 18);
    const nameLen = buf.readUInt16LE(i + 26);
    const extraLen = buf.readUInt16LE(i + 28);
    const name = buf.subarray(i + 30, i + 30 + nameLen).toString('latin1');
    const at = i + 30 + nameLen + extraLen;
    // A zero compressed size means the sizes live in a trailing data
    // descriptor, which needs the central directory to resolve. Give up rather
    // than guess: the source falls back to hashing its bytes.
    if (!csize) return '';
    if (name === 'word/document.xml') {
      try {
        const xml = method === 0 ? buf.subarray(at, at + csize) : zlib.inflateRawSync(buf.subarray(at, at + csize));
        return xml.toString('utf8').replace(/<[^>]+>/g, ' ');
      } catch { return ''; }
    }
    i = at + csize;
  }
  return '';
}

// Turning a PDF into words is the one job here worth a dependency, and pypdf is
// the dependency. When it is missing the exit code says so and the source falls
// back to hashing its bytes, which is how every PDF behaved before this.
let pdfWorks = true;
function pdfText(buf) {
  if (!pdfWorks) return '';
  try {
    return execFileSync('python3', [PDF_TEXT], {
      input: buf,
      maxBuffer: 512 * 1024 * 1024,
      stdio: ['pipe', 'pipe', 'ignore'],
    }).toString('utf8');
  } catch (err) {
    // Exit 2 is "pypdf is not installed", which will be true for every
    // remaining PDF too, so stop paying for the subprocess.
    if (err.status === 2) {
      pdfWorks = false;
      console.log('pypdf not installed: PDF sources will be hashed as bytes and their quotes left unchecked.\n');
    }
    return '';
  }
}

async function fetchOne(url, cells) {
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
    const isPdf = buf.subarray(0, 5).toString('latin1') === '%PDF-';
    const isDocx = !isPdf && buf.subarray(0, 2).toString('latin1') === 'PK'
      && /\.docx?(\?|$)/i.test(url);

    // Words where they can be had, bytes where they cannot. Hashing the
    // extracted text rather than the file also stops a PDF that is republished
    // byte-for-different but word-for-word identical from reporting as changed.
    let body = null;
    if (isPdf) body = pdfText(buf) || null;
    else if (isDocx) body = docxText(buf) || null;
    else body = buf.toString('utf8');

    const kind = isPdf ? 'pdf' : isDocx ? 'docx' : 'html';
    // An extraction that yields almost nothing is a scan, or a parser that gave
    // up. For a document, fall back to hashing the bytes rather than calling it
    // unreachable: the weak signal is still better than none. For a web page
    // there is nothing to fall back to, because a near-empty response IS the
    // finding: the server served a shell, not the statute.
    if (body !== null && normalize(body).length < SHELL_CHARS) {
      if (isPdf || isDocx) body = null;
      else return { error: `shell response, ${normalize(body).length} chars` };
    }
    const readable = body !== null;
    const text = readable ? normalize(body) : buf.toString('latin1');
    const out = { hash: hash(text), length: text.length, kind };
    if (readable && cells?.length) out.quotes = checkQuotes(body, cells);
    return out;
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

// Which cells cite each source, carried whole rather than as a label, because
// the report has to show what the cell currently claims next to the quote it
// claims it from. That pairing is the entire job: without it a reader has to
// go and look up 12 cells before they can judge one page.
const citedBy = new Map();
for (const [animal, rec] of Object.entries(data.animals)) {
  for (const [jur, cell] of Object.entries(rec.jurisdictions || {})) {
    if (!cell?.sourceId) continue;
    if (!citedBy.has(cell.sourceId)) citedBy.set(cell.sourceId, []);
    citedBy.get(cell.sourceId).push({ ...cell, id: `${animal}/${jur}`, animal, jur });
  }
}
const cellNames = (id) => (citedBy.get(id) || []).map((c) => c.id);

let sources = Object.entries(data.sources)
  .filter(([, s]) => s?.url)
  .map(([id, s]) => ({ id, url: s.url, title: s.title || '' }));
if (ONLY) sources = sources.filter((s) => s.id.toUpperCase().startsWith(`${ONLY}-`));

const baseline = fs.existsSync(BASELINE) ? JSON.parse(fs.readFileSync(BASELINE, 'utf8')) : { sources: {} };

console.log(`Checking ${sources.length} legal sources${ONLY ? ` for ${ONLY}` : ''}...\n`);

const results = await pool(sources, async (s) => ({ ...s, ...(await fetchOne(s.url, citedBy.get(s.id))) }), CONCURRENCY);

const changed = [];
const unstable = [];
const unreachable = [];
const unchanged = [];
const fresh = [];
const quoteGone = [];
const opaque = [];
let knownMissing = 0;

// Anything that looks wrong gets fetched a second time before it is reported.
// This is the whole difference between a checker people read and one they mute.
// Measured on this corpus: a first pass flagged 6 of 177 sources as changed ten
// minutes after the baseline was written, when no law had moved. Two
// consecutive fetches of those pages were byte-identical, so the difference was
// a transient the server served once, not an edit.
//
// A real edit reproduces. A flake does not. So: differs once and again, with
// both fetches agreeing, is a change. Differs once and the two fetches disagree
// with each other is an unstable source, reported separately and never failing
// the run. A missing quote gets the same treatment, because a half-rendered
// page drops text exactly once.
const suspects = results.filter((r) => {
  if (r.error) return false;
  const prev = baseline.sources[r.id];
  if (prev && prev.hash !== r.hash) return true;
  if (!r.quotes || !r.quotes.missing.length) return false;
  // An opaque page is not a suspect. Its quotes are all missing because the
  // statute never arrived in the response, and re-fetching proves nothing.
  return r.quotes.missing.length / r.quotes.checked < OPAQUE_RATIO;
});
if (suspects.length) {
  console.log(`Confirming ${suspects.length} apparent change(s) with a second fetch...\n`);
  await new Promise((r) => setTimeout(r, 2000));
  const second = await pool(
    suspects,
    async (s) => ({ id: s.id, ...(await fetchOne(s.url, citedBy.get(s.id))) }),
    CONCURRENCY,
  );
  for (let i = 0; i < suspects.length; i++) suspects[i].confirm = second[i];
}

for (const r of results) {
  if (r.error) { unreachable.push(r); continue; }

  // Quote survival is judged independently of the hash. A page can keep its
  // size and lose the sentence, and it can gain a cookie banner and keep it.
  //
  // What is reported is the transition, not the state. A quote that was already
  // unfindable when the baseline was written stays unfindable every month, and
  // a checker that re-reports it every month is a checker nobody opens. Those
  // are a backlog, counted at the end and listed nowhere else. The alarm is for
  // a quote that WAS on the page and now is not.
  if (r.quotes && r.quotes.missing.length) {
    const ratio = r.quotes.missing.length / r.quotes.checked;
    if (ratio >= OPAQUE_RATIO) {
      opaque.push({ ...r, ratio });
    } else {
      const known = new Set(baseline.sources[r.id]?.quotesMissing || []);
      const novel = r.quotes.missing.filter((c) => !known.has(c.id));
      knownMissing += r.quotes.missing.length - novel.length;
      const again = r.confirm;
      const stillGone = again && !again.error && again.quotes
        ? novel.filter((c) => again.quotes.missing.some((m) => m.id === c.id))
        : [];
      if (stillGone.length) quoteGone.push({ ...r, missing: stillGone });
    }
  }

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
    // Record which quotes are currently unfindable, so next month reports the
    // ones that go missing rather than the ones that already were. An opaque
    // page records nothing: its quotes are not missing, they never arrived.
    if (r.quotes && r.quotes.missing.length / r.quotes.checked < OPAQUE_RATIO) {
      const gone = r.quotes.missing.map((c) => c.id);
      if (gone.length) out.sources[r.id].quotesMissing = gone;
    }
  }
  fs.writeFileSync(BASELINE, `${JSON.stringify(out, null, 2)}\n`);
  console.log(`Baseline written: ${Object.keys(out.sources).length} sources recorded, ${unreachable.length} unreachable and left as they were.`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Output. Two audiences: a person skimming the CI log, and a person (or a
// session they point at the report) doing the re-reads. The console gets the
// skim, docs/legal-source-report.md gets the work order.
// ---------------------------------------------------------------------------

const fmtPct = (d) => `${(d * 100).toFixed(1)}%`;

// What actually reaches the work order. A changed page earns a read when it
// moved enough to be text rather than furniture, or when its quotes could not
// be checked at all (a PDF), because there the hash is the only signal it gives.
// A source no cell cites cannot make the matrix wrong whatever it does.
const worthReading = (r) => cellNames(r.id).length > 0
  && (r.drift >= MIN_DRIFT || !r.quotes);
const furniture = changed.filter((r) => !worthReading(r));


if (quoteGone.length) {
  console.log(`QUOTE GONE (${quoteGone.length}) - a sentence a cell rests on was on this page at the last check and is not now:\n`);
  for (const q of quoteGone) {
    console.log(`  ${q.id}  ${q.missing.length} of ${q.quotes.checked} quote(s) missing`);
    console.log(`    ${q.url}`);
    console.log(`    ${q.missing.map((c) => c.id).join(', ')}\n`);
  }
}

const readable = changed.filter(worthReading);
if (readable.length) {
  console.log(`CHANGED (${readable.length}) - the page was edited, quotes still present:\n`);
  readable.sort((a, b) => b.drift - a.drift);
  for (const c of readable) {
    console.log(`  ${c.id}  ${fmtPct(c.drift)} size change (${c.prevLength} -> ${c.length})`);
    console.log(`    ${c.title.slice(0, 96)}`);
    console.log(`    ${c.url}`);
    const cells = cellNames(c.id);
    console.log(`    cited by ${cells.length} cell(s): ${cells.slice(0, 8).join(', ')}${cells.length > 8 ? ', ...' : ''}\n`);
  }
}

if (furniture.length) {
  console.log(`FURNITURE (${furniture.length}) - changed, but every cited quote still verifies and the page barely moved, so not worth a read:`);
  for (const f of furniture) console.log(`  ${f.id}  ${fmtPct(f.drift)}  ${cellNames(f.id).length} cell(s)`);
  console.log('');
}

if (unstable.length) {
  console.log(`UNSTABLE (${unstable.length}) - differed from the baseline but did not reproduce, so treated as server noise:`);
  for (const u of unstable) console.log(`  ${u.id}  ${fmtPct(u.drift)} apparent drift`);
  console.log('');
}

if (opaque.length) {
  console.log(`OPAQUE (${opaque.length}) - fetched fine but the statute text is not in the response, so quotes cannot be checked here:`);
  for (const o of opaque) console.log(`  ${o.id}  ${o.quotes.missing.length}/${o.quotes.checked} quotes unfindable  ${o.url.slice(0, 70)}`);
  console.log('');
}

if (fresh.length) {
  console.log(`NEW (${fresh.length}) - no baseline yet, run with --write to record them:`);
  for (const f of fresh) console.log(`  ${f.id}`);
  console.log('');
}

if (knownMissing) {
  console.log(`Backlog: ${knownMissing} quote(s) were already unfindable when the baseline was written. Not reported here, tracked in docs/TODO.md.\n`);
}

if (unreachable.length) {
  console.log(`UNREACHABLE (${unreachable.length}) - not a failure, but a source that stays unreachable for months has moved:`);
  for (const u of unreachable) console.log(`  ${u.id}  ${u.error}  ${u.url.slice(0, 80)}`);
  console.log('');
}

console.log(
  `Summary: ${unchanged.length} unchanged, ${quoteGone.length} quote newly gone, ${readable.length} changed, ${furniture.length} furniture, `
  + `${unstable.length} unstable, ${opaque.length} opaque, ${fresh.length} new, ${unreachable.length} unreachable.`,
);

// How much of the matrix this run actually stood behind. Without it the summary
// above reads the same whether the check verified two thousand quotes or two
// hundred, and a source that quietly stops being readable looks like good news.
const quotable = [...citedBy.values()].flat().filter((c) => c.quote && probesFor(c.quote).length).length;
const verified = results.reduce((n, r) => n + (r.quotes ? r.quotes.checked - r.quotes.missing.length : 0), 0);
console.log(`Coverage: ${verified} of ${quotable} quotable cells had their quote found on the live page (${(verified / quotable * 100).toFixed(0)}%).`);

// ---------------------------------------------------------------------------
// The work order.
//
// The checker decides nothing about the law, and this file is where it stops.
// It pairs each flagged source with the cells resting on it and what each of
// those cells currently claims, so whoever picks it up can judge a page against
// our own words without first going and looking up twelve cells. Quote-gone
// sources come first because they are the only ones where something is already
// known to be wrong.
// ---------------------------------------------------------------------------

const work = [
  ...quoteGone.map((r) => ({ ...r, why: 'a cited quote is no longer on the page', missing: r.missing })),
  ...changed.filter(worthReading).map((r) => ({ ...r, why: `page edited since the last check, ${fmtPct(r.drift)} size change`, missing: [] })),
];

function cellBlock(c, flagged) {
  const mark = flagged ? ' **quote not found on the page**' : '';
  return [
    `- **${c.id}** is \`${c.status}\`${c.localOverride ? ' (local override)' : ''}, cites ${c.cite || 'no section'}, verified ${c.verifiedOn || 'never'}.${mark}`,
    c.quote ? `  > ${c.quote.replace(/\s+/g, ' ').slice(0, 400)}` : '  > (no quote recorded)',
  ].join('\n');
}

const md = [];
md.push('# Legal source check');
md.push('');
md.push(`Run ${new Date().toISOString().slice(0, 10)}. ${sources.length} sources checked against the baseline of ${new Date(baseline.generatedAt || 0).toISOString().slice(0, 10)}.`);
md.push('');

if (!work.length) {
  md.push('Nothing to re-read. Every quote still appears on the page it came from, and no page changed in a way that reproduced on a second fetch.');
  md.push('');
} else if (work.length > MAX_WORK_ORDER) {
  md.push(`**${work.length} sources flagged, which is too many to work as one job.** That many at once usually means a site reorganized or the baseline is stale, not that ${work.length} laws moved. Triage by hand before pointing anything at this.`);
  md.push('');
  for (const w of work) md.push(`- \`${w.id}\` ${w.why}, ${cellNames(w.id).length} cell(s), ${w.url}`);
  md.push('');
} else {
  md.push(`${work.length} source(s) need a human read. Nothing below means the law changed: it means the page did, and the page is what the matrix rests on.`);
  md.push('');
  md.push('For each one: open the URL, find the section, and decide.');
  md.push('');
  md.push('- The cell is still right: bump its `verifiedOn` to today and nothing else.');
  md.push('- The cell is wrong: fix `status`, `cite`, `quote` and any `note`, then bump `verifiedOn`.');
  md.push('- The quote just moved or was reworded: replace `quote` with the current wording, then bump `verifiedOn`.');
  md.push('- The page is gone or now points somewhere unrelated: find the current official page, update the source `url`, and say so rather than guessing.');
  md.push('');
  md.push('Then run `node scripts/check-legal-sources.mjs --write` to refresh the baseline, or the same sources report again next month.');
  md.push('');
  md.push('Read only the sources listed here. Do not re-read the rest of the matrix.');
  md.push('');

  for (const w of work) {
    const cells = citedBy.get(w.id) || [];
    const flagged = new Set((w.missing || []).map((c) => c.id));
    md.push('---');
    md.push('');
    md.push(`## \`${w.id}\` (${w.why})`);
    md.push('');
    md.push(`${data.sources[w.id]?.title || ''}`);
    md.push('');
    md.push(`${w.url}`);
    md.push('');
    if (data.sources[w.id]?.note) {
      md.push(`Source note on file: ${data.sources[w.id].note}`);
      md.push('');
    }
    if (flagged.size) {
      md.push(`${flagged.size} of ${w.quotes.checked} quotes checked on this page could not be found, twice. The rest were found, so the page did arrive: these specific sentences are the ones that moved.`);
      md.push('');
    }
    // Flagged cells in full, every time. The unflagged ones are context for
    // judging the page and get capped, because a list statute can be cited by
    // fifty cells and printing all fifty buries the three that matter.
    const CONTEXT_CELLS = 12;
    const hit = cells.filter((c) => flagged.has(c.id));
    const rest = cells.filter((c) => !flagged.has(c.id));
    md.push(`Cells resting on it (${cells.length}):`);
    md.push('');
    for (const c of hit) md.push(cellBlock(c, true));
    for (const c of rest.slice(0, CONTEXT_CELLS)) md.push(cellBlock(c, false));
    if (rest.length > CONTEXT_CELLS) {
      md.push(`- and ${rest.length - CONTEXT_CELLS} more whose quotes were found on the page: ${rest.slice(CONTEXT_CELLS).map((c) => c.id).join(', ')}`);
    }
    md.push('');
  }
}

fs.writeFileSync(REPORT, `${md.join('\n')}\n`);
console.log(`\nWork order written to docs/legal-source-report.md (${work.length} source(s) to read).`);

if (work.length) {
  console.log('\nA size change under about 1% is usually furniture that slipped the filter.');
  console.log('A missing quote is never furniture.');
  process.exit(1);
}

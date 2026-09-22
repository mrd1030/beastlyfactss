// Works the quote backlog: the cells whose quoted sentence is recorded in
// docs/legal-source-hashes.json as not findable on the live page.
//
// The monthly check deliberately never reports these, because a quote that was
// already missing when the baseline was written would otherwise alarm every
// month forever. That silence is correct and it is also how a backlog becomes
// permanent, so this is the tool that goes and looks.
//
// It decides nothing. For each missing cell it fetches the source, then prints
// the quote we hold next to the passages on the page that look closest to it,
// so a human can see in one screen whether the quote drifted, moved, or was
// never there. Sources it cannot reach are listed for a desktop run instead.
//
// Usage:
//   node scripts/legal-backlog.mjs               every backlog source
//   node scripts/legal-backlog.mjs ri-250-40-05-3 de-903      named ones
//   node scripts/legal-backlog.mjs --out docs/LEGAL_BACKLOG.md

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const ROOT = path.join(import.meta.dirname, '..');
const DATA = path.join(ROOT, 'src/lib/data/legalStatus.json');
const BASELINE = path.join(ROOT, 'docs/legal-source-hashes.json');
const PDF_TEXT = path.join(ROOT, 'scripts/pdf-text.py');

const args = process.argv.slice(2);
const outIdx = args.indexOf('--out');
const OUT = outIdx === -1 ? null : args[outIdx + 1];
const only = args.filter((a, i) => !a.startsWith('--') && i !== outIdx + 1);

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const TIMEOUT_MS = 45_000;

const flatten = (t) => t
  .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z]+;|&#\d+;/gi, ' ')
  .replace(/[‘’]/g, "'")
  .replace(/[“”]/g, '"')
  .replace(/([a-z])([A-Z])/g, '$1 $2')
  .replace(/[^a-z0-9]+/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase();

function docxText(buf) {
  let i = 0;
  while (i + 30 < buf.length && buf.readUInt32LE(i) === 0x04034b50) {
    const method = buf.readUInt16LE(i + 8);
    const csize = buf.readUInt32LE(i + 18);
    const nameLen = buf.readUInt16LE(i + 26);
    const extraLen = buf.readUInt16LE(i + 28);
    const name = buf.subarray(i + 30, i + 30 + nameLen).toString('latin1');
    const at = i + 30 + nameLen + extraLen;
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

function pdfText(buf) {
  try {
    return execFileSync('python3', [PDF_TEXT], { input: buf, maxBuffer: 512 * 1024 * 1024, stdio: ['pipe', 'pipe', 'ignore'] }).toString('utf8');
  } catch { return ''; }
}

async function readSource(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: ctrl.signal, redirect: 'follow', headers: { 'user-agent': UA, accept: '*/*' } });
    if (!res.ok) return { error: `HTTP ${res.status}` };
    const buf = Buffer.from(await res.arrayBuffer());
    const isPdf = buf.subarray(0, 5).toString('latin1') === '%PDF-';
    const isDocx = !isPdf && buf.subarray(0, 2).toString('latin1') === 'PK' && /\.docx?(\?|$)/i.test(url);
    const body = isPdf ? pdfText(buf) : isDocx ? docxText(buf) : buf.toString('utf8');
    if (!body) return { error: `${isPdf ? 'pdf' : 'docx'} would not extract` };
    const flat = flatten(body);
    if (flat.length < 500) return { error: `shell response, ${flat.length} chars` };
    // Matching wants the flattened text. Rewriting a quote wants the source's
    // own capitals and punctuation, because a quote field holds what the page
    // says, not a lowercased approximation of it.
    const clean = body
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;|&#160;/gi, ' ')
      .replace(/&amp;/gi, '&')
      .replace(/&[a-z]+;|&#\d+;/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    return { flat, clean };
  } catch (err) {
    return { error: err.name === 'AbortError' ? 'timeout' : String(err.message || err).slice(0, 50) };
  } finally {
    clearTimeout(timer);
  }
}

// The passage on the page that shares the most rare words with the quote. Not
// a match, a lead: it is what a person would scroll to before deciding whether
// the quote drifted or was always wrong.
const STOP = new Set('the a an of and or to in on for by is are be been shall not no any all such other with from as at that this which person species'.split(' '));
function nearest(flat, quote, clean) {
  const words = [...new Set(flatten(quote).split(' '))].filter((w) => w.length > 3 && !STOP.has(w));
  if (!words.length) return null;
  const rare = words
    .map((w) => ({ w, n: flat.split(w).length - 1 }))
    .filter((x) => x.n > 0 && x.n < 40)
    .sort((a, b) => a.n - b.n)
    .slice(0, 6);
  if (!rare.length) return { absent: words.slice(0, 6) };
  let best = null;
  for (const { w } of rare) {
    let from = 0;
    for (;;) {
      const at = flat.indexOf(w, from);
      if (at === -1) break;
      from = at + w.length;
      const win = flat.slice(Math.max(0, at - 160), at + 200);
      const score = rare.filter((r) => win.includes(r.w)).length;
      if (!best || score > best.score) best = { score, at, text: win };
    }
  }
  if (!best) return null;
  // The same neighbourhood in the source's own wording, so a quote can be
  // rewritten from it rather than from the match text.
  let verbatim = null;
  if (clean) {
    const lower = clean.toLowerCase();
    let from = 0;
    let bestV = null;
    for (;;) {
      const at = lower.indexOf(rare[0].w, from);
      if (at === -1) break;
      from = at + rare[0].w.length;
      const win = lower.slice(Math.max(0, at - 160), at + 200);
      const score = rare.filter((r) => win.includes(r.w)).length;
      if (!bestV || score > bestV.score) bestV = { score, at };
    }
    if (bestV) verbatim = clean.slice(Math.max(0, bestV.at - 180), bestV.at + 220);
  }
  return { ...best, verbatim, rare: rare.map((r) => r.w) };
}

const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));
const baseline = JSON.parse(fs.readFileSync(BASELINE, 'utf8'));

const cellOf = (id) => {
  const [animal, jur] = id.split('/');
  return data.animals[animal]?.jurisdictions?.[jur] || null;
};

let targets = Object.entries(baseline.sources)
  .filter(([, s]) => s.quotesMissing?.length)
  .map(([id, s]) => ({ id, cells: s.quotesMissing }));
if (only.length) targets = targets.filter((t) => only.includes(t.id));
targets.sort((a, b) => b.cells.length - a.cells.length);

const md = [];
const say = (line = '') => { md.push(line); if (!OUT) console.log(line); };

say('# Legal quote backlog');
say('');
say(`${targets.reduce((n, t) => n + t.cells.length, 0)} cells across ${targets.length} sources whose quoted sentence could not be found on the live page.`);
say('');
say('The monthly check never reports these. A quote already missing when the baseline was written would otherwise alarm every month forever, so it is recorded and stays silent, which is also how a backlog becomes permanent. This is the list.');
say('');
say('Each entry shows the quote on file and the closest passage on the live page, matched on the rarest words the quote contains. That is a lead, not a verdict. Read the page before changing a cell.');
say('');

const unreachable = [];
for (const t of targets) {
  const src = data.sources[t.id];
  if (!src?.url) continue;
  const got = await readSource(src.url);
  if (got.error) { unreachable.push({ ...t, why: got.error, url: src.url, title: src.title }); continue; }

  say('---');
  say('');
  say(`## \`${t.id}\` (${t.cells.length} cell${t.cells.length > 1 ? 's' : ''})`);
  say('');
  say(src.title || '');
  say('');
  say(src.url);
  say('');
  for (const cellId of t.cells) {
    const c = cellOf(cellId);
    if (!c) { say(`### ${cellId}`); say(''); say('Cell no longer exists.'); say(''); continue; }
    say(`### ${cellId} is \`${c.status}\`, cites ${c.cite || 'no section'}, verified ${c.verifiedOn || 'never'}`);
    say('');
    say('Quote on file:');
    say('');
    say(`> ${(c.quote || '').replace(/\s+/g, ' ')}`);
    say('');
    const near = nearest(got.flat, c.quote || '', got.clean);
    if (!near) say('No lead: the quote has no distinctive words to search on.');
    else if (near.absent) say(`Not on the page at all. None of these words appear: ${near.absent.join(', ')}.`);
    else {
      const verdict = near.score === near.rare.length
        ? 'every distinctive word is present, so this is almost certainly a transcription that drifted rather than a law that moved'
        : `only ${near.score} of ${near.rare.length} distinctive words are present, so read the page before assuming anything`;
      say(`Closest passage (${verdict}). Words searched: ${near.rare.join(', ')}.`);
      say('');
      if (near.verbatim) {
        say('As the page words it:');
        say('');
        say(`> ...${near.verbatim.replace(/\s+/g, ' ')}...`);
      } else {
        say(`> ...${near.text}...`);
      }
    }
    say('');
  }
}

if (unreachable.length) {
  say('---');
  say('');
  say('## Needs a desktop run');
  say('');
  say('These sources would not open from a cloud session. A home connection is not the datacentre IP these sites answer with a 403, and has no egress gateway in front of it. Re-run this script there.');
  say('');
  for (const u of unreachable) {
    say(`- \`${u.id}\` (${u.cells.length} cell${u.cells.length > 1 ? 's' : ''}) ${u.why}`);
    say(`  ${u.url}`);
    say(`  cells: ${u.cells.join(', ')}`);
  }
  say('');
}

if (OUT) {
  fs.writeFileSync(path.join(ROOT, OUT), `${md.join('\n')}\n`);
  console.log(`Wrote ${OUT}: ${targets.length - unreachable.length} source(s) readable here, ${unreachable.length} need a desktop.`);
}

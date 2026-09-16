// The hub keeps no figure of its own (docs/RULES.md, Hubs). Every number in a
// first-week row belongs to the deep dive named in that row's `source`, and
// this is the check that says so: each numeric token in a row value has to
// appear in the article the row cites.
//
//   node scripts/check-hub-figures.mjs [--verbose] [--hub <id>]
//
// Why a second numbers script. check-species-numbers compares every page of a
// species against every other and asks a reviewer to judge; it is advisory and
// it is noisy by design. This one asks a narrower question with one right
// answer: does this row's number exist on the page the row points at. A hub
// row that states a figure its own source does not carry is either a figure
// invented at the hub or a figure the deep dive lost, and both are bugs.
//
// What counts as a match is deliberately loose about units and formatting and
// strict about the digits: 110 matches "110F", "110 degrees" and "110°F";
// 24x24x36 is three numbers; 1,200 and 1200 are the same number; and a number
// written as a word in the article ("two hours") matches a digit in the row.
// Nothing here reads the deep dive's meaning, so this cannot catch a number
// copied from the wrong sentence. It catches the number that is not there.
//
// Written 2026-09-16, after the row cap pass, to replace the rule that hub
// prose had to be copied word for word. The figures are what must survive
// unchanged; the sentence around them can be shorter than the article's.
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const verbose = args.includes('--verbose');
const onlyHub = args.includes('--hub') ? args[args.indexOf('--hub') + 1] : null;

const WORDS = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, fifteen: 15, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90, hundred: 100 };

// Digits only. Dimensions written 24x24x36 are three numbers, not a token with
// letters in it, so the x comes out first; a digit still glued to a letter
// after that is part of a name (D3, CO2, F1) and is not a figure.
function numbersIn(text) {
  const t = String(text)
    .replace(/(\d)\s*[x×]\s*(?=\d)/gi, '$1 ')
    .replace(/(\d),(?=\d{3}\b)/g, '$1');
  const out = new Set();
  for (const m of t.matchAll(/(?<![A-Za-z])(\d+(?:\.\d+)?)/g)) {
    out.add(String(parseFloat(m[1])));
  }
  return out;
}

// An article that says "half an inch" backs a row that says 1/2 inch, and the
// same for a quarter and a third. Prose spells these; a card cannot afford to.
const FRACTIONS = { half: ['1', '2'], quarter: ['1', '4'], third: ['1', '3'], thirds: ['3'] };
function articleNumbers(text) {
  const out = numbersIn(text);
  for (const [w, n] of Object.entries(WORDS)) {
    if (new RegExp(`\\b${w}\\b`, 'i').test(text)) out.add(String(n));
  }
  for (const [w, ns] of Object.entries(FRACTIONS)) {
    if (new RegExp(`\\b${w}\\b`, 'i').test(text)) for (const n of ns) out.add(n);
  }
  return out;
}

// A figure is as likely to live in a table or a component prop as in a
// sentence: the leopard gecko gradient is a ComparisonTable and the cost
// tables are arrays of props. Stripping tags first would delete all of it,
// since a JSX element with no children is one tag from < to />, so the quoted
// strings come out before anything is stripped. URLs and asset paths are
// dropped, or a number in a link would count as a figure the page states.
const ASSET = /https?:|www\.|\.(?:mdx|jpe?g|png|webp|svg|gif)\b|^\//i;
function mdxToText(raw) {
  const quoted = [...raw.matchAll(/"([^"\n]*)"/g)].map((m) => m[1]).filter((s) => s && !ASSET.test(s));
  let body = raw.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/<[^>]+>/g, ' ');
  return body + '\n' + quoted.join('\n');
}

const articleCache = new Map();
function readArticle(slug) {
  if (articleCache.has(slug)) return articleCache.get(slug);
  let found = null;
  for (const dir of ['content/guides', 'content/blog']) {
    const p = path.join(dir, slug + '.mdx');
    if (fs.existsSync(p)) { found = articleNumbers(mdxToText(fs.readFileSync(p, 'utf8'))); break; }
  }
  articleCache.set(slug, found);
  return found;
}

const files = fs.readdirSync('src/lib/data/guides').filter((f) => f.endsWith('.js') && f !== 'index.js');
const hubs = [];
for (const f of files) {
  const m = await import(path.resolve('src/lib/data/guides', f));
  for (const k of Object.keys(m)) {
    if (!Array.isArray(m[k])) continue;
    for (const g of m[k]) if (g && g.layout === 'router' && g.firstWeek) hubs.push({ file: f, guide: g });
  }
}

let rowsChecked = 0;
let figuresChecked = 0;
let missingSource = 0;
const problems = [];
for (const { file, guide } of hubs) {
  if (onlyHub && guide.id !== onlyHub) continue;
  const lines = [];
  for (const row of guide.firstWeek.rows) {
    rowsChecked++;
    const wanted = numbersIn(row.value);
    if (!wanted.size) continue;
    if (!row.source) {
      // A row with no source states a figure nothing on the site backs. Adult
      // size and lifespan rows sit here when no deep dive repeats the
      // encyclopedia entry; the comment above the hub is supposed to say so.
      missingSource++;
      continue;
    }
    const have = readArticle(row.source);
    if (!have) { lines.push(`    ${row.label}: source "${row.source}" is not an article`); continue; }
    const missing = [...wanted].filter((n) => !have.has(n));
    figuresChecked += wanted.size;
    if (missing.length) lines.push(`    ${row.label}: ${missing.join(', ')} not in ${row.source}`);
  }
  if (lines.length) problems.push(`  ${guide.id} (${file})\n${lines.join('\n')}`);
}

console.log(
  `Hub figures: ${hubs.length} router hubs, ${rowsChecked} rows, ${figuresChecked} numbers checked against the article each row cites` +
    (missingSource ? `, ${missingSource} rows with numbers and no source` : '')
);
if (problems.length) {
  console.log(`\n${problems.length} hub(s) stating a figure the cited article does not carry:`);
  for (const p of problems) console.log(p);
  console.error(`\nHub figure check FAILED. Fix the deep dive or fix the row: the hub keeps no number of its own.`);
  process.exit(1);
}
console.log('Every hub figure appears in the article its row cites.');

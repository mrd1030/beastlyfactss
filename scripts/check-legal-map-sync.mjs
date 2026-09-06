/**
 * Checks each legal guide's state-by-state claims against src/lib/data/legalStatus.json,
 * which is the same data the interactive maps at /exotic-pet-laws/<animal>/ render.
 *
 * Why this exists: the guide and the map are two hand-maintained descriptions of the
 * same law, and nothing forced them to agree. Cross-checking a third-party article
 * that cited the boa constrictor guide turned up two places where the map was right
 * and the prose was wrong for weeks, including a Louisiana row telling readers under
 * eight feet they needed no permit when the January 2025 rewrite requires one at any
 * length. Both would have been caught the day they were written by this file.
 *
 * Two checks, deliberately different in severity:
 *
 *   MISMATCH (error)  A ComparisonTable row claims a status the map contradicts.
 *                     The table is structured, so this is read precisely and is
 *                     worth failing on.
 *
 *   UNREAD (error in a table, warning in prose)
 *                     The guide names a jurisdiction the map has no entry for on
 *                     that animal. Per the legalStatus README a missing entry means
 *                     "not researched", never "no rule found", so an article
 *                     asserting a status there is asserting something unverified.
 *                     Prose demotes to a warning because a passing mention of
 *                     another state ("unlike California's ferret ban") is fair.
 *
 *   MISSING-BAN (error)
 *                     The map records a jurisdiction as `banned` and the guide
 *                     never mentions that jurisdiction at all, in a table or in
 *                     prose. This is the gap the other two checks cannot see: they
 *                     compare what the guide says, and a state the guide is silent
 *                     about produces no row to disagree with.
 *
 *                     It was worth adding because it was not hypothetical. After
 *                     the map was completed to all 52 jurisdictions, seventeen
 *                     guides were silent about at least one outright ban, and four
 *                     of those carried an "Everywhere else, generally legal" row
 *                     that turned the silence into a false statement. The box
 *                     turtle guide was missing six bans, the flying squirrel four.
 *                     Only `banned` is checked: a missing permit or conditional
 *                     state is an omission, while a missing ban tells a reader the
 *                     animal is legal where it is not.
 *
 * Status wording in prose is looser than the map's buckets, so classification is
 * keyword-based and returns null when it cannot tell, rather than guessing. Rows it
 * cannot classify are skipped and counted, not flagged.
 *
 * Usage:  node scripts/check-legal-map-sync.mjs   (or: npm run check:legal-sync)
 *         --verbose  also lists skipped rows and per-guide coverage
 * Exits 1 if any error-level finding is found.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content');
const LEGAL_STATUS = path.join(ROOT, 'src', 'lib', 'data', 'legalStatus.json');

const VERBOSE = process.argv.includes('--verbose');

/* ------------------------------------------------------------------ *
 * Status vocabulary
 * ------------------------------------------------------------------ */

// Ordered. First match wins, so "Illegal statewide" resolves as banned rather
// than matching the "legal" substring inside it.
const STATUS_RULES = [
  // Closed-allow-list states (DC especially) get written as "seven permitted pet
  // categories, and no lizard fits any of them". The permit vocabulary describes
  // the list, not the animal, and the operative clause is the exclusion, so this
  // has to resolve before the permit rule gets a look at it.
  [/\b(?:does\s*n[o']?t|do\s*n[o']?t|doesn't|don't)\s+(?:fit|qualify|count|apply|make)\b|\bnone of (?:them|these|those)\b|\bno \w+ (?:fits|qualifies)\b/i, 'banned'],
  [/\bunclear\b|\bambiguous\b|\bnot resolvable\b|\bunresolved\b/i, 'unclear'],
  [/\billegal\b|\bban(?:s|ned)?\b|\bprohibit(?:ed|s|ion)?\b|\bno permit route\b/i, 'banned'],
  [/\bpermit(?:s|ted|ting)?\b|\blicen[sc]e[sd]?\b/i, 'permit'],
  [/\bregist(?:er|ered|ration)\b|\bconditional\b/i, 'conditional'],
  // "allowed" is deliberately absent: it attaches to the list of allowed pets as
  // often as to the animal, which made every closed-list state read as legal.
  [/\bnot restricted\b|\bunrestricted\b|\bno (?:state|statewide) (?:rule|ban|law)\b|\bexempt(?:ed)?\b|\bgenerally legal\b|\blegal\b/i, 'legal'],
];

// "restricted" in the map means a permit regime applies but pet keeping is not
// clearly ruled out, which prose almost always writes as "permit required".
// Treat the pair as agreeing rather than generating noise on every such row.
const EQUIVALENT = [new Set(['permit', 'restricted'])];

// A map status of "conditional" means legal only if a stated condition is met,
// and prose legitimately leads from either side of that condition: Maryland's
// Bengal rule reads as "over 30 pounds is prohibited", South Carolina's corn
// snake rule as "legal, captive-bred under 20 inches only". Both are faithful.
// Keyword classification cannot separate those from a real contradiction, so
// conditional rows are not status-compared at all. They are still checked for
// being on the map in the first place, which is the more valuable half.
const UNCOMPARABLE_MAP_STATUS = new Set(['conditional']);

// "Legal, no permit needed" and "no pet permit exists" must not read as permit
// regimes. Up to two words of slack covers the qualifiers that show up between
// the negation and the noun.
const NEGATED_PERMIT = /\b(?:no|without(?:\s+an?)?)\s+(?:\w+\s+){0,2}?(?:permit|licen[sc]e|registration)s?\b/gi;

// Some guides run a myth-busting table whose first cell is the false claim and
// whose second cell is the verdict. Reading cell 0 as a jurisdiction status
// inverts the article's actual position, so these rows are skipped.
const MYTH_VERDICT = /^\s*(?:false|true|mostly|partly|myth|sort of)\b/i;

// A jurisdiction cell that names a species subset is not a claim about the map
// cell, which holds one status for the whole animal id. The cockatoo guide splits
// Maine into two rows because Maine genuinely splits: the Moluccan, yellow-crested
// and umbrella need a permit under the CITES and IUCN carve-out, the cockatiel and
// galah do not. The map records `permit`, for the birds the carve-out catches, and
// the "smaller species" row would otherwise read as a flat contradiction. Rows
// qualified this way are skipped and counted rather than compared.
const SPECIES_SUBSET = /\((?=[^)]*\b(?:species|only|except|other than|excluding)\b)[^)]*\)/i;

function classify(text) {
  const cleaned = text.replace(NEGATED_PERMIT, ' ');
  for (const [re, status] of STATUS_RULES) {
    if (re.test(cleaned)) return status;
  }
  return null;
}

function agrees(articleStatus, mapStatus) {
  if (articleStatus === mapStatus) return true;
  return EQUIVALENT.some((set) => set.has(articleStatus) && set.has(mapStatus));
}

/* ------------------------------------------------------------------ *
 * Jurisdiction matching
 * ------------------------------------------------------------------ */

function buildJurisdictionMatchers(jurisdictions) {
  const entries = [];
  for (const [code, meta] of Object.entries(jurisdictions)) {
    const names = new Set([meta.name]);
    if (code === 'NYC') names.add('New York City');
    if (code === 'NY') names.add('New York State');
    if (code === 'DC') {
      names.add('Washington DC');
      names.add('Washington, D.C.');
      names.add('D.C.');
    }
    for (const name of names) entries.push({ code, name });
  }
  // Longest name first so "New York City" and "New York State" are consumed
  // before the bare "New York" can claim them.
  entries.sort((a, b) => b.name.length - a.name.length);
  return entries;
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Returns the jurisdiction codes named in `text`, consuming each match so a
// longer name blocks the shorter one that sits inside it.
// Several guides carry a summary row that lists jurisdictions as postal codes
// rather than names: the serval guide's is `"Banned outright", "17", "GA, NY,
// NYC, CT, OR, ..."`. Those are real mentions, so the MISSING-BAN check has to
// see them or it reports a guide that plainly names the state.
//
// Bare two-letter codes are not safe to match anywhere in prose, because IN, OR,
// ME, HI, AL, OK, MA, PA and DE are all ordinary English words. So a code counts
// only inside a run of at least three comma-separated all-caps tokens, which is
// the shape of a summary cell and does not occur in a sentence.
const CODE_RUN = /\b[A-Z]{2,3}(?:\s*,\s*[A-Z]{2,3}){2,}\b/g;

function findJurisdictionCodesInRuns(text, valid) {
  const found = new Set();
  for (const run of text.match(CODE_RUN) || []) {
    for (const token of run.split(/\s*,\s*/)) {
      if (valid.has(token)) found.add(token);
    }
  }
  return found;
}

function findJurisdictions(text, matchers) {
  let remaining = text;
  const found = [];
  for (const { code, name } of matchers) {
    const re = new RegExp(`(?<![A-Za-z])${escapeRe(name)}(?![A-Za-z])`, 'gi');
    if (re.test(remaining)) {
      if (!found.includes(code)) found.push(code);
      remaining = remaining.replace(re, ' ');
    }
  }
  return found;
}

/* ------------------------------------------------------------------ *
 * MDX parsing
 * ------------------------------------------------------------------ */

function listMdxFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listMdxFiles(full));
    else if (entry.name.endsWith('.mdx')) out.push(full);
  }
  return out;
}

// Pulls the rows out of every <ComparisonTable ... rows={[ ... ]} /> in the file.
// Each row is returned as its array of cell strings.
function parseComparisonRows(source) {
  const rows = [];
  const tableRe = /<ComparisonTable\b[\s\S]*?\/>/g;
  for (const table of source.match(tableRe) || []) {
    const rowsBlock = table.match(/rows=\{\[([\s\S]*)\]\}/);
    if (!rowsBlock) continue;
    const rowRe = /\[((?:[^[\]"]|"(?:[^"\\]|\\.)*")*)\]/g;
    let m;
    while ((m = rowRe.exec(rowsBlock[1])) !== null) {
      const cells = [];
      const cellRe = /"((?:[^"\\]|\\.)*)"/g;
      let c;
      while ((c = cellRe.exec(m[1])) !== null) {
        cells.push(c[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\'));
      }
      if (cells.length) rows.push(cells);
    }
  }
  return rows;
}

function stripTables(source) {
  return source.replace(/<ComparisonTable\b[\s\S]*?\/>/g, ' ');
}

/* ------------------------------------------------------------------ *
 * Main
 * ------------------------------------------------------------------ */

const legal = JSON.parse(fs.readFileSync(LEGAL_STATUS, 'utf8'));
const matchers = buildJurisdictionMatchers(legal.jurisdictions);

// Join key: each animal in legalStatus.json carries the article path it backs.
const bySlug = new Map();
for (const [animalId, animal] of Object.entries(legal.animals)) {
  if (!animal.article) continue;
  const slug = animal.article.replace(/^\/blog\//, '').replace(/\/$/, '');
  bySlug.set(slug, { animalId, animal });
}

const files = listMdxFiles(CONTENT_DIR);
const errors = [];
const warnings = [];
let guidesChecked = 0;
let rowsChecked = 0;
let rowsSkipped = 0;

for (const file of files) {
  const slug = path.basename(file, '.mdx');
  const match = bySlug.get(slug);
  if (!match) continue;

  const { animalId, animal } = match;
  const mapped = animal.jurisdictions || {};
  const source = fs.readFileSync(file, 'utf8');
  const rel = path.relative(ROOT, file);
  guidesChecked += 1;

  const namedInTable = new Set();

  for (const cells of parseComparisonRows(source)) {
    const codes = findJurisdictions(cells[0], matchers);
    if (!codes.length) continue; // "Everywhere else" and similar

    // Status column only. The detail column explains the reasoning and routinely
    // contains the opposite verdict's vocabulary: the boa guide's Florida row
    // reads "On neither the Prohibited nor the Conditional list", which classifies
    // as "banned" on a naive whole-row read.
    const statusCell = cells[1] ?? '';
    if (MYTH_VERDICT.test(statusCell)) continue;
    if (SPECIES_SUBSET.test(cells[0])) {
      rowsSkipped += 1;
      if (VERBOSE) console.log(`  skipped (species subset): ${rel} :: ${cells[0]}`);
      for (const code of codes) namedInTable.add(code);
      continue;
    }
    const claimed = classify(statusCell);
    for (const code of codes) {
      namedInTable.add(code);
      const entry = mapped[code];

      if (!entry) {
        errors.push({
          file: rel,
          animalId,
          kind: 'UNREAD',
          detail:
            `table asserts ${legal.jurisdictions[code].name} (${code}), but the map ` +
            `has no ${animalId} entry for it, which means it was never read`,
          row: cells[0],
        });
        continue;
      }

      if (!claimed) {
        rowsSkipped += 1;
        if (VERBOSE) {
          console.log(`  skipped (no status keyword): ${rel} :: ${cells[0]} :: ${cells[1] ?? ''}`);
        }
        continue;
      }

      if (UNCOMPARABLE_MAP_STATUS.has(entry.status)) {
        rowsSkipped += 1;
        if (VERBOSE) {
          console.log(`  skipped (map status conditional): ${rel} :: ${cells[0]}`);
        }
        continue;
      }

      rowsChecked += 1;
      if (!agrees(claimed, entry.status)) {
        errors.push({
          file: rel,
          animalId,
          kind: 'MISMATCH',
          detail:
            `table reads as "${claimed}" for ${legal.jurisdictions[code].name} (${code}), ` +
            `map says "${entry.status}"`,
          row: `${cells[0]} | ${cells[1] ?? ''}`,
        });
      }
    }
  }

  // Prose-only mentions of a jurisdiction the map never read for this animal.
  const prose = stripTables(source);
  for (const code of findJurisdictions(prose, matchers)) {
    if (mapped[code] || namedInTable.has(code)) continue;
    warnings.push({
      file: rel,
      animalId,
      kind: 'UNREAD',
      detail:
        `prose names ${legal.jurisdictions[code].name} (${code}), which the map has ` +
        `never been read for on ${animalId}`,
    });
  }

  // Bans the guide never mentions anywhere. Searched against the whole file, not
  // just the tables, so a state covered only in prose still counts as mentioned.
  const mentionedAnywhere = new Set([
    ...findJurisdictions(source, matchers),
    ...findJurisdictionCodesInRuns(source, new Set(Object.keys(legal.jurisdictions))),
    ...namedInTable,
  ]);
  for (const [code, entry] of Object.entries(mapped)) {
    if (entry.status !== 'banned') continue;
    if (mentionedAnywhere.has(code)) continue;
    errors.push({
      file: rel,
      animalId,
      kind: 'MISSING-BAN',
      detail:
        `the map records ${legal.jurisdictions[code].name} (${code}) as banned for ` +
        `${animalId}, and the guide never mentions it`,
    });
  }
}

/* ------------------------------------------------------------------ *
 * Report
 * ------------------------------------------------------------------ */

function print(list, label) {
  if (!list.length) return;
  console.log(`\n${label}\n`);
  const byFile = new Map();
  for (const item of list) {
    if (!byFile.has(item.file)) byFile.set(item.file, []);
    byFile.get(item.file).push(item);
  }
  for (const [file, items] of byFile) {
    console.log(`  ${file}`);
    for (const item of items) {
      console.log(`    [${item.kind}] ${item.detail}`);
      if (item.row) console.log(`      row: ${item.row}`);
    }
    console.log('');
  }
}

print(errors, 'Guide and map disagree:');
print(warnings, 'Worth a look:');

const summary =
  `Legal map sync: ${guidesChecked} guides, ${rowsChecked} table rows compared` +
  (rowsSkipped ? `, ${rowsSkipped} unclassifiable rows skipped` : '');

if (errors.length) {
  console.log(summary);
  console.log(
    `\n${errors.length} error${errors.length === 1 ? '' : 's'}. The map is the ` +
      `researched record with a cite and a verifiedOn date per entry, so when the two\n` +
      `disagree, check the map's source first and fix whichever is actually wrong.\n`,
  );
  process.exit(1);
}

console.log(
  `${summary}. No contradictions` +
    (warnings.length ? `, ${warnings.length} prose mention${warnings.length === 1 ? '' : 's'} to look at` : '') +
    '.',
);

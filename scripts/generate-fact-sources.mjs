#!/usr/bin/env node
/**
 * Writes docs/fact-sources/sources.json, one {publisher, url, quote} per fact
 * id, and src/lib/data/factSources.js, the publisher names alone that the site
 * shows. Both are read out of the sourcing passes under docs/fact-sources/.
 *
 * Why a generator: the passes are the record of how every card was checked
 * and rewritten, and each later pass can replace the source a card cites.
 * Reading them in order means the card shows the source that matches its
 * current text, not the first page a batch pass happened to find.
 *
 * Pass order (later wins):
 *   batch*.json    first pass, every fact, status confirmed / partly / unconfirmed
 *   deep*.json     second look at the hard ones; carries its own publisher and url
 *   replace*.json  cards replaced outright (new title, new text, new source)
 *   wrong*.json    cards fixed for a wrong detail, with the source that fixed it
 *   long.json      cards trimmed to one point; same url as before
 *   edit*.json     wording edits only; no publisher, so the source stands.
 *                  Any extraSources there and in search.json are kept in the
 *                  docs only: the card shows one source.
 *
 * A pass that carries no quote (long, edit) keeps the quote from the last pass
 * that cited the same url.
 *
 * Publisher strings are normalized for display:
 *   a paper becomes "Journal Name (Year)"
 *   an institution, newsroom or magazine becomes its name only, no year
 *   notes such as "via Europe PMC", "abstract via", author lists, bylines and
 *   parentheticals are dropped
 * The odd cases that the generic rules cannot read are listed in OVERRIDES,
 * and the names that appear in more than one spelling are unified in ALIASES.
 *
 * Usage:  node scripts/generate-fact-sources.mjs
 * Check:  node scripts/check-fact-sources.mjs (build)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCES_DIR = path.join(ROOT, 'docs', 'fact-sources');
const OUT = path.join(ROOT, 'src', 'lib', 'data', 'factSources.js');
const RECORD = path.join(SOURCES_DIR, 'sources.json');

const { facts } = await import('../src/lib/data/facts.js');

// Raw publisher strings the generic rules would misread. Keyed on the exact
// string in the json.
const OVERRIDES = {
  'Fennessy et al. 2016, Current Biology; Wildlife Conservation Society': 'Current Biology (2016)',
  'London South Bank University research portal (Grant, Greenwell & Kolubinski, Applied Animal Behaviour Science 279, 2024)':
    'Applied Animal Behaviour Science (2024)',
  'Mammalian Genome (Springer), via Europe PMC; Gandolfi B, Outerbridge CA, Beresford LG, Myers JA, Pimentel M, Alhaddad H, Grahn JC, Grahn RA, Lyons LA. 2010':
    'Mammalian Genome (2010)',
  'WWF Tigers Alive Annual Report 2023 (Global Tiger Forum estimate)': 'WWF',
  'National Park Service, Sequoia National Park Nature Guide Service (Walter Fry, Bulletin No. 15, 1923)': 'National Park Service',
  'Burke Museum (University of Washington), Rod Crawford, Spider Myths': 'Burke Museum',
  'UC Berkeley PhD dissertation (Roy Caldwell lab), eScholarship, University of California': 'UC Berkeley',
  'Catania Lab, Vanderbilt University': 'Vanderbilt University',
  'Marine Science Institute, The University of Texas at Austin (Science and the Sea)': 'University of Texas Marine Science Institute',
  'Savannah River Ecology Laboratory, University of Georgia': 'University of Georgia Savannah River Ecology Laboratory',
  'A Moment of Science, Indiana Public Media (Indiana University)': 'Indiana Public Media',
  'Hawaii Department of Land and Natural Resources, Division of Forestry and Wildlife': 'Hawaii DLNR Division of Forestry and Wildlife',
  'Natural History Museum, London': 'Natural History Museum, London',
  'Zoo New England (Stone Zoo); Connecticut\'s Beardsley Zoo': 'Zoo New England',
  'LafeberVet (Anna McRee, DVM; reviewed by Sandra Mitchell, DVM)': 'LafeberVet',
};

// Cleaned names that still differ in spelling from one pass to the next.
const ALIASES = {
  'Natural History Museum': 'Natural History Museum, London',
  'Smithsonian magazine': 'Smithsonian Magazine',
  'PLoS ONE': 'PLOS ONE',
  'PLoS Biology': 'PLOS Biology',
  'PLoS Genetics': 'PLOS Genetics',
  'Proceedings of the National Academy of Sciences': 'PNAS',
  'Biology (Basel)': 'Biology',
  'Discover Wildlife': 'BBC Wildlife',
  'BBC Wildlife / Discover Wildlife': 'BBC Wildlife',
  'University of Florida IFAS Extension': 'UF/IFAS Extension',
  'Australian Antarctic Division': 'Australian Antarctic Program',
  'NOVA': 'PBS NOVA',
  'U.S. National Park Service': 'National Park Service',
  'San Diego Zoo Wildlife Alliance Library': 'San Diego Zoo Wildlife Alliance',
  'Science Friday': 'NPR',
  'The Journal of the Acoustical Society of America': 'Journal of the Acoustical Society of America',
  "Smithsonian's National Zoo and Conservation Biology Institute": "Smithsonian's National Zoo",
  'National Audubon Society': 'Audubon',
};

// Newsrooms, magazines and institutions whose raw string carries a year that
// is a date of publication, not a paper's year. They get the name only.
const NO_YEAR = new Set([
  'National Geographic',
  'Smithsonian Magazine',
  'Science News',
  'Nature News',
  'NPR',
  'University of Cambridge',
  'Stanford University',
  'WWF',
  'National Park Service',
]);

const YEAR = /\b(?:18|19|20)\d{2}\b/g;

function normalizePublisher(raw) {
  const s = String(raw || '').trim();
  if (!s) return '';
  if (OVERRIDES[s]) return OVERRIDES[s];

  // Several sources joined by ';': the first is the one the card cites.
  const first = s.split(';')[0].trim();
  const years = first.match(YEAR) || [];
  const year = years.length ? years[years.length - 1] : null;

  let base = first
    .replace(/\s*\([^)]*\)/g, '') // parentheticals: author lists, years, bylines, notes
    .replace(/,?\s+(?:via|abstract (?:via|as indexed by)|by)\b.*$/i, '') // "via PMC", "abstract via ...", "by <author>"
    .replace(/,\s*(?:18|19|20)\d{2}\s*$/, '') // trailing ", 2020"
    .replace(/[\s,]+$/, '')
    .trim();
  base = ALIASES[base] || base;

  if (year && !NO_YEAR.has(base)) return `${base} (${year})`;
  return base;
}

// Load every pass in order. Later passes override earlier ones per id.
const rank = (name) => {
  if (name.startsWith('batch')) return 0;
  if (name.startsWith('deep')) return 1;
  if (name.startsWith('replace')) return 2;
  if (name.startsWith('wrong')) return 3;
  if (name === 'long.json') return 4;
  if (name.startsWith('edit')) return 5;
  if (name.startsWith('new')) return 6; // new facts, sourced when written
  return -1; // search.json, triage.json: extra confirmation only, never the card's source
};

const files = fs
  .readdirSync(SOURCES_DIR)
  .filter((f) => f.endsWith('.json') && rank(f) >= 0)
  .sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));

const chosen = new Map(); // id -> { publisher, url, quote, raw, file }
const quotesByUrl = new Map(); // id -> Map(url -> quote), for passes that carry none
const unconfirmed = new Set();

for (const file of files) {
  const entries = JSON.parse(fs.readFileSync(path.join(SOURCES_DIR, file), 'utf8'));
  if (!Array.isArray(entries)) continue;
  for (const e of entries) {
    const id = Number(e.id);
    if (!Number.isInteger(id)) continue;
    const url = (e.url || '').trim();
    const publisher = normalizePublisher(e.publisher);
    const quote = (e.quote || '').trim();

    if (url && quote) {
      if (!quotesByUrl.has(id)) quotesByUrl.set(id, new Map());
      quotesByUrl.get(id).set(url, quote);
    }

    if (e.status === 'unconfirmed') unconfirmed.add(id);
    if (publisher && url) unconfirmed.delete(id);

    // A pass with no publisher (edit*) or an empty one (still-not-found)
    // leaves the current source in place.
    if (!publisher || !url) continue;
    chosen.set(id, {
      publisher,
      url,
      quote: quote || quotesByUrl.get(id)?.get(url) || '',
      raw: e.publisher,
      file,
    });
  }
}

// Report, then write.
const missing = facts.filter((f) => !chosen.get(f.id)?.publisher).map((f) => f.id);
const stillUnconfirmed = [...unconfirmed].filter((id) => facts.some((f) => f.id === id)).sort((a, b) => a - b);

// The full record (publisher, url, quote) stays in docs: it is the proof of
// what was checked and is never shown. The site ships publisher names only,
// since FactModal is in the Home, Facts, Gallery and Pack bundles and the
// full record is about 200KB.
const record = {};
for (const fact of facts) {
  const src = chosen.get(fact.id);
  if (src) record[fact.id] = { publisher: src.publisher, url: src.url, quote: src.quote };
}
fs.writeFileSync(RECORD, JSON.stringify(record, null, 1) + '\n');

const esc = (s) => JSON.stringify(String(s));
const lines = [];
lines.push('// GENERATED by scripts/generate-fact-sources.mjs. Do not edit by hand:');
lines.push('// rerun the script after a sourcing pass lands in docs/fact-sources/.');
lines.push('//');
lines.push('// The publisher each fact is sourced to, keyed by fact id like FACT_IMAGES.');
lines.push('// Shown as "Source: <publisher>" with no link; the url and quote behind each');
lines.push('// one are in docs/fact-sources/sources.json. scripts/check-fact-sources.mjs');
lines.push('// fails the build on a fact with no entry.');
lines.push('');
lines.push('export const FACT_SOURCES = {');
for (const fact of facts) {
  if (record[fact.id]) lines.push(`  ${fact.id}: ${esc(record[fact.id].publisher)},`);
}
lines.push('};');
lines.push('');
lines.push('// The publisher a fact is sourced to, or null when none has been recorded.');
lines.push('export function sourceFor(fact) {');
lines.push('  const id = fact && (fact.id || fact._id);');
lines.push('  return (id && FACT_SOURCES[id]) || null;');
lines.push('}');
lines.push('');

fs.writeFileSync(OUT, lines.join('\n'));

const sourced = facts.length - missing.length;
console.log(`Fact sources: ${sourced} of ${facts.length} facts sourced from ${files.length} passes, written to ${path.relative(ROOT, OUT)}.`);
if (stillUnconfirmed.length) {
  console.log(`  unconfirmed in the batch pass and never fixed: ${stillUnconfirmed.join(', ')}`);
}
if (missing.length) {
  console.log(`  no source: ${missing.join(', ')}`);
}

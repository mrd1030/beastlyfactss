#!/usr/bin/env node
// Flags article wording that reads like an advertisement for another site,
// publication or paper (owner, 2026-11-01). The rule in docs/RULES.md: name a
// source in the body only when the name is the fact (a legal citation, a named
// study whose authors carry the claim, a manufacturer's spec for its own
// product). Everywhere else the article states the fact plainly and the source
// lives in the <Sources> block, or in a FunFact's source prop.
//
// What it reads: the body of each MDX article and its frontmatter FAQ answers.
// What it skips: the <Sources> block, MDX comments, JSX attribute values
// (FunFact source="", AffiliateLink product=""), and link URLs.
//
// It reports; it does not fail the build. Every hit is a sentence for a person
// to read: some are the allowed exceptions above.
//
// Usage:
//   node scripts/check-source-promo.mjs                 every article
//   node scripts/check-source-promo.mjs <file> [...]    only these files
//   node scripts/check-source-promo.mjs --json          machine-readable
import fs from 'node:fs';
import path from 'node:path';

const ROOTS = ['content/guides', 'content/blog', 'content/fun-facts'];

// Sites, publishers and organizations an article tends to plug by name.
const NAMES = [
  'Seriously Fish', 'Practical Fishkeeping', 'FishBase', 'Merck', 'PetMD',
  'VCA', 'UF/IFAS', 'IFAS', 'University of Florida', 'SRAC', 'Aquarium Co-Op',
  'Aquarium Coop', 'Fishkeeper', 'Aquarium Source', 'ANGFA', 'TFH',
  'Tropical Fish Hobbyist', 'Fishlore', 'Reddit', 'Wikipedia', 'The Spruce',
  'Spruce Pets', 'Chewy', 'Petco', 'PetSmart', 'Fluval', 'Tetra brand',
  'Aqueon', 'MedlinePlus', 'PubMed', 'ScienceDirect', 'Project Piaba',
  'ReptiFiles', 'Reptiles Magazine', 'Animal Diversity Web', 'iNaturalist',
  'National Geographic', 'Britannica', 'Aquarium Science', 'Tropica', 'Seachem',
  'GloFish', 'CDC', 'NOAA', 'USFWS', 'Fish and Wildlife Service', 'DFO',
];

// Phrases that narrate or advertise a source rather than state the fact.
const PHRASES = [
  /\baccording to\b/i,
  /\bet al\b/i,
  /\bpublished (in|by)\b/i,
  /\b(a|one|another|the|this|that|in a|in one)\s+(\d{4}\s+)?(study|paper|trial|survey|case report|case series|review)\b/i,
  /\b(researchers|scientists|authors|investigators)\s+(at|from|in|found|showed|reported|described|noted)\b/i,
  /\b(study|studies|paper|trial|report)\s+(found|shows|showed|suggests|suggested|reports|reported|confirms|confirmed)\b/i,
  /\bfact sheet\b/i,
  /\bcare sheet (from|by)\b/i,
  /\b(guide|page|article|profile|entry) (from|by|on) [A-Z]/,
  /\b(visit|check out|head over to|have a look at)\b/i,
  /\b(their|its) (website|site|page|blog|forum)\b/i,
  /\b[\w-]+\.(com|org|net|co\.uk|gov|edu)\b/i,
  /\bas [A-Z][\w &/.-]{2,40} (puts|put|notes|noted|says|said|explains)\b/,
];

// A capitalized source followed by a reporting verb: "Merck lists", "Seriously
// Fish recommends".
const NAME_VERB = new RegExp(
  `\\b(${NAMES.map((n) => n.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')).join('|')})(?:'s)?\\b[^.]{0,40}?\\b(says|said|notes|noted|lists|listed|recommends|recommended|suggests|suggested|advises|advised|warns|warned|reports|reported|describes|described|calls|rates|puts|gives|quotes|cites)\\b`,
);
const NAME_ONLY = new RegExp(
  `\\b(${NAMES.map((n) => n.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')).join('|')})\\b`,
);

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.mdx')) out.push(p);
  }
  return out;
}

// Blanks out everything the check must not read, keeping line numbers.
function scrub(text) {
  const keepLines = (s) => s.replace(/[^\n]/g, ' ');
  return text
    .replace(/<Sources>[\s\S]*?<\/Sources>/g, keepLines)
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, keepLines)
    .replace(/\]\([^)]*\)/g, (m) => ']' + ' '.repeat(m.length - 1))
    .replace(/\b(source|product|href|src|alt|imageAlt)="[^"]*"/g, keepLines)
    .replace(/https?:\/\/\S+/g, keepLines);
}

function check(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const rawLines = raw.split('\n');
  // Index of the closing frontmatter fence, or -1.
  const fmEndLine = rawLines[0] === '---' ? rawLines.indexOf('---', 1) : -1;
  const hits = [];
  const lines = scrub(raw).split('\n');
  // External links in the body send the reader off the site, which is the
  // strongest version of the problem. Read with the Sources block and comments
  // blanked but link targets kept. Affiliate links are their own component.
  const keepLines = (t) => t.replace(/[^\n]/g, ' ');
  const linkView = raw
    .replace(/<Sources>[\s\S]*?<\/Sources>/g, keepLines)
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, keepLines)
    .split('\n');
  lines.forEach((line, i) => {
    const inFm = i <= fmEndLine;
    // In frontmatter, read only FAQ answers.
    if (inFm && !/^\s*a:\s/.test(line)) return;
    const reasons = [];
    const ext = linkView[i].match(/\]\((https?:\/\/[^)]+)\)/);
    if (ext) reasons.push(`external link in the body: ${ext[1].slice(0, 60)}`);
    const nv = line.match(NAME_VERB);
    if (nv) reasons.push(`names a source: "${nv[0].trim()}"`);
    else {
      const n = line.match(NAME_ONLY);
      if (n) reasons.push(`names "${n[1]}"`);
    }
    for (const re of PHRASES) {
      const m = line.match(re);
      if (m) reasons.push(`"${m[0].trim()}"`);
    }
    if (reasons.length) {
      const text = rawLines[i].trim();
      hits.push({ file, line: i + 1, reasons, text: text.length > 220 ? text.slice(0, 217) + '...' : text });
    }
  });
  return hits;
}

const args = process.argv.slice(2);
const json = args.includes('--json');
const files = args.filter((a) => !a.startsWith('--'));
const targets = files.length ? files : ROOTS.flatMap((r) => walk(r));
const all = targets.flatMap(check);

if (json) {
  console.log(JSON.stringify(all, null, 2));
} else {
  for (const h of all) console.log(`${h.file}:${h.line}  ${h.reasons.join('; ')}\n    ${h.text}`);
  const files = new Set(all.map((h) => h.file)).size;
  console.log(`\nSource-promo check: ${all.length} line(s) to read in ${files} of ${targets.length} article(s). Report only; nothing fails.`);
}

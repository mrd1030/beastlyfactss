// Coverage and voice for the state pages' written analysis.
//
// Reports rather than fails on coverage: the notes fill in over several passes
// and a page without them is complete, just thinner. It DOES fail on a voice
// breach, because check-voice.mjs only walks content/ and these paragraphs live
// in src/, so nothing else would catch a dash or an intensifier in them.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

const LEGAL = JSON.parse(read('src/lib/data/legalStatus.json'));
const src = read('src/lib/data/stateNotes.js');

// Parsed rather than imported: this file is an ES module with an @ alias import
// at the top, which node cannot resolve without vite's config.
const codes = [...src.matchAll(/^ {2}([A-Z]{2,3}):\s*\[/gm)].map((m) => m[1]);
const known = Object.keys(LEGAL.jurisdictions);

const failures = [];

for (const code of codes) {
  if (!known.includes(code)) {
    failures.push(`stateNotes.js has an entry for "${code}", which is not a jurisdiction in legalStatus.json.`);
  }
}

// The paragraph strings, for the voice pass. Deliberately crude: it only needs
// to see inside the double-quoted paragraphs this file is made of.
const paragraphs = [...src.matchAll(/^\s{4}"((?:[^"\\]|\\.)*)",?$/gm)].map((m) => m[1]);

const BANNED_CHARS = [
  ['—', 'em dash'],
  ['–', 'en dash'],
];
// The intensifiers docs/RULES.md bars. The site's own voice check enforces these
// in content/; these paragraphs are prose too and get held to the same line.
const BANNED_WORDS = [
  'actually', 'genuinely', 'really', 'truly', 'very', 'incredibly', 'extremely',
];

for (const para of paragraphs) {
  for (const [ch, name] of BANNED_CHARS) {
    if (para.includes(ch)) failures.push(`${name} in: "${para.slice(0, 70)}..."`);
  }
  for (const w of BANNED_WORDS) {
    if (new RegExp(`\\b${w}\\b`, 'i').test(para)) {
      failures.push(`intensifier "${w}" in: "${para.slice(0, 70)}..."`);
    }
  }
  // British variants the rules bar in prose.
  for (const [bad, good] of [['licence', 'license'], ['organise', 'organize'], ['gray', 'grey']]) {
    if (new RegExp(`\\b${bad}\\b`, 'i').test(para)) {
      failures.push(`use "${good}" not "${bad}" in: "${para.slice(0, 70)}..."`);
    }
  }
}

if (failures.length) {
  console.error(`\nState notes: ${failures.length} problem(s).\n`);
  for (const f of failures) console.error(`  ${f}`);
  console.error('\nSee docs/RULES.md. These paragraphs live in src/, so check-voice.mjs');
  console.error('does not walk them and this check is what holds the line.\n');
  process.exit(1);
}

const missing = known.filter((c) => !codes.includes(c));
console.log(
  `State notes: ${codes.length} of ${known.length} jurisdictions written up, ` +
    `${paragraphs.length} paragraphs, voice clean.`,
);
if (missing.length) {
  console.log(`  Still to write (${missing.length}): ${missing.join(' ')}`);
}

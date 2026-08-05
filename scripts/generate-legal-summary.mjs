// Emits the tiny per-animal legal summary the encyclopedia pages need.
//
// Why this exists: legalStatus.json is the full matrix, 1,176 sourced entries
// with a quote and a note on each, and it is over 400KB built. The map page
// genuinely needs all of it. An encyclopedia animal page needs two things, the
// legal-guide id to link to and how many jurisdictions restrict the species,
// which is about 1.2KB for the whole site. Importing the matrix to compute that
// pulled the entire 400KB chunk into every animal page.
//
// Deriving it here rather than hand-keeping a second list means the count can
// never drift from the matrix: add a jurisdiction and this is regenerated on
// the next build.
//
// Runs before `vite build` (see package.json).
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const legal = JSON.parse(
  fs.readFileSync(path.join(root, 'src/lib/data/legalStatus.json'), 'utf8'),
);
const outPath = path.join(root, 'src/lib/generated/legal-summary.json');

// Keyed by encyclopediaId, because that is what the encyclopedia route has in
// hand. The two id sets do not always match: every cat is cat-<breed> in the
// guides and plain <breed> in the encyclopedia, which is why the mapping is
// stored rather than derived at read time.
const summary = Object.fromEntries(
  Object.entries(legal.animals)
    .filter(([, a]) => a.encyclopediaId)
    .map(([id, a]) => [
      a.encyclopediaId,
      {
        id,
        restricted: Object.values(a.jurisdictions).filter((e) => e.status !== 'legal').length,
        checked: Object.keys(a.jurisdictions).filter(
          (j) => legal.jurisdictions[j]?.level !== 'city',
        ).length,
      },
    ]),
);

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${JSON.stringify(summary, null, 2)}\n`);

const count = Object.keys(summary).length;
const bytes = fs.statSync(outPath).size;
console.log(`Legal summary: ${count} animals, ${bytes} bytes.`);

// An animal with a legal guide but no encyclopediaId never shows the card, which
// is a silent miss rather than a broken page, so it is worth seeing.
const unlinked = Object.entries(legal.animals)
  .filter(([, a]) => !a.encyclopediaId)
  .map(([id]) => id);
if (unlinked.length) {
  console.log(`  no encyclopediaId (no card on any animal page): ${unlinked.join(', ')}`);
}

// Emits the Beastlypedia route list for prerender.mjs and generate-sitemap.js.
//
// Why this exists rather than a third hardcoded array: both of those scripts
// currently hand-mirror the encyclopedia and guide ID lists in comments that
// say "mirrors <source>.js". Those mirrors drift the moment someone adds an
// animal and updates only one of them, and the failure is quiet - a page that
// renders fine for a visitor but never gets prerendered or listed in the
// sitemap. Beastlypedia is going from 1 entry to 15, so it would drift almost
// immediately.
//
// Runs before `vite build` (see package.json), so the JSON is always in step
// with the data and never needs hand-editing.
import fs from 'node:fs';
import path from 'node:path';

import { beastfiles, beastfileGroups } from '../src/lib/data/beastlypedia/index.js';
import { facts } from '../src/lib/data/facts.js';
import { imagePathFor } from '../src/lib/data/factImages.js';

const outPath = path.join(process.cwd(), 'src/lib/generated/beastlypedia-index.json');

// Only groups that actually have entries get a route. Prerendering an empty
// filter page would put a dead end in the sitemap.
const populatedGroupSlugs = beastfileGroups
  .filter((g) => beastfiles.some((b) => b.group === g.name))
  .map((g) => g.slug);

// A Beastfile's fun facts come from the existing fact database rather than
// being written twice, so the wording stays in one place and each one can open
// its own photo.
//
// Resolved here rather than imported at runtime because facts.js is around
// 197KB of prose. Pulling it into the Beastfile route just to read a handful of
// strings is the same mistake GuideSpotlight made with the 507KB guides barrel.
// This emits only what the page renders, which is the four fields ImageLightbox
// reads plus the fact text itself.
//
// image comes from imagePathFor, the same resolver FactCard uses, so a fact
// with no photo of its own still picks up the animal-level fallback. It can
// still come back null, and the page renders those as plain text with nothing
// to open.
// Matched case-insensitively. facts.js has 136 distinct animal names entered by
// hand over a long stretch, so capitalisation drifts: the Beastfile says
// "Aye-Aye" and fact 188 says "Aye-aye". An exact match silently dropped that
// one and the page fell back to authored fun facts as if no fact existed.
const normalise = (s) => String(s).trim().toLowerCase().replace(/\s+/g, ' ');

const factsByAnimal = new Map();
for (const f of facts) {
  const key = normalise(f.animal);
  if (!factsByAnimal.has(key)) factsByAnimal.set(key, []);
  factsByAnimal.get(key).push(f);
}

const factsFor = {};
for (const b of beastfiles) {
  const animal = b.factAnimal || b.name;
  const found = factsByAnimal.get(normalise(animal)) || [];
  if (found.length === 0) continue;
  factsFor[b.id] = found.map((f) => ({
    title: f.title,
    fact: f.fact,
    animal: f.animal,
    category: f.category,
    image: imagePathFor(f),
  }));
}

const payload = {
  ids: beastfiles.map((b) => b.id).sort(),
  groupSlugs: populatedGroupSlugs,
  factsFor,
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`);

// Reverse of factsFor: which Beastfile, if any, covers a given fact's animal.
// FactModal uses it to offer "Full animal profile" on a wild-animal fact, the
// way it already does for pet species via the Encyclopedia.
//
// Its own file, and only three fields, because FactModal is imported by Home,
// Facts, Gallery and Pack. The full index is 56KB and the data modules 94KB;
// neither belongs in four route chunks to resolve one optional link.
//
// Keyed on the same normalised animal name used for matching above, so
// "Aye-Aye" and "Aye-aye" resolve identically here too.
const animalMapPath = path.join(process.cwd(), 'src/lib/generated/beastlypedia-animal-map.json');
const animalMap = {};
for (const b of beastfiles) {
  animalMap[normalise(b.factAnimal || b.name)] = { id: b.id, name: b.name };
}
fs.writeFileSync(animalMapPath, `${JSON.stringify(animalMap, null, 2)}\n`);

// Separate, deliberately tiny file for the homepage teaser. The beastlypedia
// data modules come to about 40KB, nearly all of it overview/origin/
// conservation prose the teaser never renders, and the homepage is the page
// least able to afford dead weight. A separate file rather than another key on
// the index above, so the homepage does not also pull in factsFor.
const teaserPath = path.join(process.cwd(), 'src/lib/generated/beastlypedia-teaser.json');
const teaser = beastfiles.map((b) => ({
  id: b.id,
  name: b.name,
  tagline: b.tagline,
  group: b.group,
  heroImage: b.heroImage,
  heroAlt: b.heroAlt,
}));
fs.writeFileSync(teaserPath, `${JSON.stringify(teaser, null, 2)}\n`);

const withFacts = Object.keys(factsFor).length;
const totalFacts = Object.values(factsFor).reduce((n, l) => n + l.length, 0);
console.log(
  `Beastlypedia index: ${payload.ids.length} beastfiles, ${payload.groupSlugs.length} group pages, ` +
    `${totalFacts} linked facts across ${withFacts} beastfiles`
);
// Loud rather than silent: an entry with no matching facts falls back to its
// authored funFacts, which is fine, but a typo in factAnimal looks identical.
const noFacts = beastfiles.filter((b) => !factsFor[b.id]).map((b) => b.id);
if (noFacts.length) console.log(`  no fact matches (using authored funFacts): ${noFacts.join(', ')}`);

// Same reasoning for photos. A fact with no image still renders, it just has
// nothing to open, so it is worth seeing rather than discovering by clicking.
const noImage = Object.values(factsFor)
  .flat()
  .filter((f) => !f.image)
  .map((f) => f.title);
if (noImage.length) console.log(`  no photo (renders as plain text): ${noImage.join(', ')}`);

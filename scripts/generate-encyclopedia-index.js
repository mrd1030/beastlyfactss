// Emits a slim, card-sized index of every encyclopedia animal.
//
// Why this exists: src/lib/data/encyclopedia/* holds the FULL bio for every
// animal - origin, habitat, diet, lifespan, conservation, the lot. Reading the
// full barrel just to get the list of ids (what prerender.mjs and
// generate-sitemap.js actually need to build /encyclopedia/animal/<id>/
// routes) would mean hand-copying that id list instead, and a hand-copied
// list goes stale the moment a new animal is added, exactly the bug this file
// fixes: 18 species added this session had no route in either script because
// their ids were never added to the old hardcoded arrays.
//
// Same pattern as generate-guides-index.js -> guides-index.json, which solved
// the same class of problem for care guides. Runs before `vite build` (see
// package.json), so the JSON is always in step with the source data and never
// needs hand-editing.
import fs from 'node:fs';
import path from 'node:path';

// Imported as leaf files with explicit extensions, not the index.js barrel:
// that barrel re-exports via extensionless specifiers ('./geckos'), which
// Vite resolves but plain Node ESM (this script runs outside the bundler)
// cannot. Same reason generate-guides-index.js imports guides/*.js directly
// instead of going through guides/index.js.
import { amphibianEncyclopedia } from '../src/lib/data/encyclopedia/amphibians.js';
import { birdEncyclopedia } from '../src/lib/data/encyclopedia/birds.js';
import { catEncyclopedia } from '../src/lib/data/encyclopedia/cats.js';
import { dogEncyclopedia } from '../src/lib/data/encyclopedia/dogs.js';
import { fishEncyclopedia } from '../src/lib/data/encyclopedia/fish.js';
import { geckoEncyclopedia } from '../src/lib/data/encyclopedia/geckos.js';
import { invertebrateEncyclopedia } from '../src/lib/data/encyclopedia/invertebrates.js';
import { lizardEncyclopedia } from '../src/lib/data/encyclopedia/lizards.js';
import { smallMammalEncyclopedia } from '../src/lib/data/encyclopedia/smallMammals.js';
import { snakeEncyclopedia } from '../src/lib/data/encyclopedia/snakes.js';
import { turtleEncyclopedia } from '../src/lib/data/encyclopedia/turtles.js';

// Same concatenation order as the barrel in src/lib/data/encyclopedia/index.js.
const encyclopediaAnimals = [
  ...amphibianEncyclopedia,
  ...birdEncyclopedia,
  ...catEncyclopedia,
  ...dogEncyclopedia,
  ...fishEncyclopedia,
  ...geckoEncyclopedia,
  ...invertebrateEncyclopedia,
  ...lizardEncyclopedia,
  ...smallMammalEncyclopedia,
  ...snakeEncyclopedia,
  ...turtleEncyclopedia,
];

// Enough to identify and label an animal without the full bio payload.
const CARD_FIELDS = ['id', 'name', 'emoji', 'category', 'difficulty', 'guideId', 'image'];

const animals = encyclopediaAnimals.map((animal) => {
  const slim = {};
  for (const field of CARD_FIELDS) {
    if (animal[field] !== undefined) slim[field] = animal[field];
  }
  return slim;
});

const outPath = path.join('src', 'lib', 'generated', 'encyclopedia-index.json');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify({ animals }, null, 2) + '\n', 'utf8');

const kb = (fs.statSync(outPath).size / 1024).toFixed(1);
console.log(`Generated encyclopedia index: ${animals.length} animals, ${kb} KB`);

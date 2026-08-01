// Emits a slim, card-sized index of every care guide.
//
// Why this exists: src/lib/data/guides/* holds the FULL text of every guide -
// sections, FAQs, cost tables, the lot. Bundled together that is 507 KB, and
// any component importing the `allGuides` barrel drags in all of it. The
// homepage's GuideSpotlight did exactly that to render 11 cards, so the entry
// graph pulled half a megabyte of guide prose that nothing above the fold ever
// displays. On a throttled mobile connection that JS competed with the document
// itself for bandwidth and delayed first paint.
//
// The cards only need seven scalar fields, so this generates just those. Same
// pattern as sync-articles.js -> articles-index.json, which already solved this
// for CategoryBrowse. The full guide objects are still imported directly by the
// pages that actually render a guide.
//
// Runs before `vite build` (see package.json), so the JSON is always in step
// with the source data and never needs hand-editing.
import fs from 'node:fs';
import path from 'node:path';

import { amphibianGuides } from '../src/lib/data/guides/amphibians.js';
import { birdGuides } from '../src/lib/data/guides/birds.js';
import { catGuides } from '../src/lib/data/guides/cats.js';
import { dogGuides } from '../src/lib/data/guides/dogs.js';
import { fishGuides } from '../src/lib/data/guides/fish.js';
import { geckoGuides } from '../src/lib/data/guides/geckos.js';
import { invertebrateGuides } from '../src/lib/data/guides/invertebrates.js';
import { lizardGuides } from '../src/lib/data/guides/lizards.js';
import { smallMammalGuides } from '../src/lib/data/guides/smallMammals.js';
import { snakeGuides } from '../src/lib/data/guides/snakes.js';
import { turtleGuides } from '../src/lib/data/guides/turtles.js';

// Same concatenation order as the allGuides barrel in
// src/lib/data/guides/index.js. That order is load-bearing: consumers pick "the
// first guide of each petType", so reordering here would silently change which
// guide the homepage features.
const allGuides = [
  ...amphibianGuides,
  ...birdGuides,
  ...catGuides,
  ...dogGuides,
  ...fishGuides,
  ...geckoGuides,
  ...invertebrateGuides,
  ...lizardGuides,
  ...smallMammalGuides,
  ...snakeGuides,
  ...turtleGuides,
];

// Exactly the fields a guide card renders. Deliberately omits sections, faqs,
// costs and funFact, which are the bulk of the weight.
const CARD_FIELDS = ['id', 'name', 'emoji', 'difficulty', 'petType', 'image', 'tagline'];

const guides = allGuides.map((guide) => {
  const slim = {};
  for (const field of CARD_FIELDS) {
    if (guide[field] !== undefined) slim[field] = guide[field];
  }
  return slim;
});

const outPath = path.join('src', 'lib', 'generated', 'guides-index.json');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify({ guides }, null, 2) + '\n', 'utf8');

const kb = (fs.statSync(outPath).size / 1024).toFixed(1);
console.log(`Generated guides index: ${guides.length} guides, ${kb} KB`);

// Emits the published and updated dates for every care guide hub, which the
// hub page (GuideDetail) and its encyclopedia view (EncyclopediaAnimal) show
// under the title and emit as datePublished / dateModified.
//
// A hub keeps no figure of its own: every row is copied from the deep dive
// named in its `source`, and that article is where the number changes. So a
// hub is exactly as current as the deep dives it copies from, and its dates are
// derived from theirs rather than hand-stamped:
//   updated   = newest lastUpdated (or publish date) among those deep dives
//   published = the guide's own `published` field if set, else the earliest
//               publish date among them
// A `lastReviewed` on the guide object is only ever set by hand, on the day the
// owner rereads that hub against its deep dives; the site defines a review date
// that way (HowGuidesAreMade), so it is never derived here.
//
// The deep dives are found by walking the guide object for any string that is a
// published article slug. Legacy hubs with no row sources fall back to the
// articles named "<guide id>-<suffix>"; the dog and cat breed hubs carry their
// own text rather than copied rows, so they stay undated until they get a
// hand-set `published`. Only content/ (mdx-meta.json) counts,
// so a scheduled draft can never lend a hub a future date, and every date is
// clamped to today on the owner's clock (US Eastern).
//
// Runs after sync-articles.js, which writes the mdx-meta.json read here.
import fs from 'node:fs';

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

const allGuides = [
  ...amphibianGuides, ...birdGuides, ...catGuides, ...dogGuides, ...fishGuides,
  ...geckoGuides, ...invertebrateGuides, ...lizardGuides, ...smallMammalGuides,
  ...snakeGuides, ...turtleGuides,
];

const ISO = /^\d{4}-\d{2}-\d{2}$/;
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' }).format(new Date());

const meta = JSON.parse(fs.readFileSync('./src/lib/generated/mdx-meta.json', 'utf8'));
const articles = new Map();
for (const m of meta) {
  if (!m.slug || !ISO.test(String(m.date))) continue;
  const updated = ISO.test(String(m.lastUpdated)) && m.lastUpdated > m.date ? m.lastUpdated : m.date;
  articles.set(m.slug, { date: m.date, updated });
}

function collectSlugs(value, found) {
  if (typeof value === 'string') {
    if (articles.has(value)) found.add(value);
  } else if (Array.isArray(value)) {
    for (const v of value) collectSlugs(v, found);
  } else if (value && typeof value === 'object') {
    for (const v of Object.values(value)) collectSlugs(v, found);
  }
}

// The domain was registered on this day, so no page here can be older. A few
// deep dives carry earlier publish dates; a hub must not inherit them.
const SITE_LAUNCH = '2026-05-18';

const clamp = (d) => (d > today ? today : d < SITE_LAUNCH ? SITE_LAUNCH : d);
const out = {};
const missing = [];

for (const guide of allGuides) {
  const slugs = new Set();
  collectSlugs(guide, slugs);
  if (!slugs.size) {
    for (const slug of articles.keys()) if (slug.startsWith(`${guide.id}-`)) slugs.add(slug);
  }
  const dives = [...slugs].map((s) => articles.get(s));
  if (!dives.length) {
    missing.push(guide.id);
    continue;
  }
  const earliest = dives.reduce((a, d) => (d.date < a ? d.date : a), dives[0].date);
  const newest = dives.reduce((a, d) => (d.updated > a ? d.updated : a), dives[0].updated);
  const published = ISO.test(String(guide.published)) ? guide.published : earliest;
  const entry = { published: clamp(published), updated: clamp(newest > published ? newest : published) };
  if (ISO.test(String(guide.lastReviewed))) entry.lastReviewed = clamp(guide.lastReviewed);
  out[guide.id] = entry;
}

fs.writeFileSync('./src/lib/generated/hub-dates.json', JSON.stringify(out, null, 2) + '\n');
console.log(`Hub dates: ${Object.keys(out).length} of ${allGuides.length} hubs dated from their deep dives`);
if (missing.length) console.log(`  no deep dive found, left undated: ${missing.join(', ')}`);

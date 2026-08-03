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
import { slugify } from '../src/lib/utils/slugify.js';

const outPath = path.join(process.cwd(), 'src/lib/generated/beastlypedia-index.json');

// Only groups that actually have entries get a route. Prerendering an empty
// filter page would put a dead end in the sitemap.
const populatedGroupSlugs = beastfileGroups
  .filter((g) => beastfiles.some((b) => b.group === g.name))
  .map((g) => g.slug);

// A Beastfile's fun facts come from the existing fact database rather than
// being written twice, so the wording stays in one place and each one can link
// to its own /facts/ page.
//
// Resolved here rather than imported at runtime because facts.js is around
// 197KB of prose. Pulling it into the Beastfile route just to read a handful of
// strings is the same mistake GuideSpotlight made with the 507KB guides barrel.
// This emits only what the page renders: title, text and the slug the fact page
// is served from.
//
// The slug must match what Facts.jsx builds, which is slugify(fact.title). If
// that ever changes, these links break silently, so it is derived from the same
// helper rather than hand-built.
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
    slug: slugify(f.title),
  }));
}

const payload = {
  ids: beastfiles.map((b) => b.id).sort(),
  groupSlugs: populatedGroupSlugs,
  factsFor,
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`);

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

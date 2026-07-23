#!/usr/bin/env node
/**
 * Animal keyword idea finder for beastlyfacts.com
 *
 * Pulls real search suggestions from Google's public autocomplete
 * endpoint (no API key needed) by combining species/topic seeds with
 * common care-guide and fact-page phrasing, plus an A-to-Z sweep per
 * seed to catch anything the modifier list misses.
 *
 * Seeds are auto-generated from every species already in this site's
 * own src/lib/data/guides/ and src/lib/data/encyclopedia/ files, so the
 * list stays current as the site grows - no manual species list to
 * maintain. Add one-off, non-species topics to EXTRA_SEEDS below.
 *
 * Dog/cat guide titles aren't clean species names ("Labrador Retriever:
 * Breed Quirks", "Dog Care: The Essentials") - cleanGuideName() strips
 * these down to the breed name (or the bare pet type for the generic
 * "<Type> Care" pages), which also collapses them onto the same seed as
 * their already-clean encyclopedia entry instead of running as two
 * separate, half-broken seeds.
 *
 * Species-aware modifiers: each species seed is grouped into one of
 * CATEGORY_GROUPS (from its own petType/category field), and gets
 * UNIVERSAL_MODIFIERS plus whatever's in GROUP_MODIFIERS for its group -
 * so "tank setup" only fires for reptiles/amphibians/inverts/fish, not
 * "tank setup Labrador Retriever", and birds/small mammals get "cage
 * setup" instead. EXTRA_SEEDS have no group - they're already complete
 * thought-starters, not simple nouns, so they're queried as-is with no
 * modifier prepended and no A-to-Z sweep (appending a letter to a full
 * phrase doesn't make grammatical sense the way it does for a species name).
 *
 * Google doesn't expose real search volume through this endpoint (that
 * needs Google Ads' free Keyword Planner or a paid tool like Ahrefs), so
 * each suggestion is instead tagged with two free proxy signals:
 *   - query_hits: how many of this seed's queries surfaced it
 *   - best_rank: the best (lowest) position it held in any of those
 *     results - Google's own ranking is a real signal, just not a volume
 * Treat both as "worth a second look," not hard numbers.
 *
 * Each row also flags whether this site already has a guide/encyclopedia
 * entry for that seed, so brand-new species with no coverage at all stand
 * out immediately at the top of the console summary.
 *
 * Requires Node 18+ (built-in fetch, no npm install needed).
 *
 * Edit UNIVERSAL_MODIFIERS, GROUP_MODIFIERS, or EXTRA_SEEDS below, then
 * run from anywhere:
 *   node tools/keyword-finder/animal-keyword-finder.js
 *
 * Output: keyword-ideas.csv, written next to this script.
 */

import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// --- Site's own species data (mirrors src/lib/data/guides/index.js and
// src/lib/data/encyclopedia/index.js - re-imported directly here, with
// explicit .js extensions, since plain Node ESM needs those) ---
import { amphibianGuides } from "../../src/lib/data/guides/amphibians.js";
import { birdGuides } from "../../src/lib/data/guides/birds.js";
import { catGuides } from "../../src/lib/data/guides/cats.js";
import { dogGuides } from "../../src/lib/data/guides/dogs.js";
import { fishGuides } from "../../src/lib/data/guides/fish.js";
import { geckoGuides } from "../../src/lib/data/guides/geckos.js";
import { invertebrateGuides } from "../../src/lib/data/guides/invertebrates.js";
import { lizardGuides } from "../../src/lib/data/guides/lizards.js";
import { smallMammalGuides } from "../../src/lib/data/guides/smallMammals.js";
import { snakeGuides } from "../../src/lib/data/guides/snakes.js";
import { turtleGuides } from "../../src/lib/data/guides/turtles.js";

import { amphibianEncyclopedia } from "../../src/lib/data/encyclopedia/amphibians.js";
import { birdEncyclopedia } from "../../src/lib/data/encyclopedia/birds.js";
import { catEncyclopedia } from "../../src/lib/data/encyclopedia/cats.js";
import { dogEncyclopedia } from "../../src/lib/data/encyclopedia/dogs.js";
import { fishEncyclopedia } from "../../src/lib/data/encyclopedia/fish.js";
import { geckoEncyclopedia } from "../../src/lib/data/encyclopedia/geckos.js";
import { invertebrateEncyclopedia } from "../../src/lib/data/encyclopedia/invertebrates.js";
import { lizardEncyclopedia } from "../../src/lib/data/encyclopedia/lizards.js";
import { smallMammalEncyclopedia } from "../../src/lib/data/encyclopedia/smallMammals.js";
import { snakeEncyclopedia } from "../../src/lib/data/encyclopedia/snakes.js";
import { turtleEncyclopedia } from "../../src/lib/data/encyclopedia/turtles.js";

const ALL_GUIDES = [
  ...amphibianGuides, ...birdGuides, ...catGuides, ...dogGuides, ...fishGuides,
  ...geckoGuides, ...invertebrateGuides, ...lizardGuides, ...smallMammalGuides,
  ...snakeGuides, ...turtleGuides,
];
const ALL_ENCYCLOPEDIA = [
  ...amphibianEncyclopedia, ...birdEncyclopedia, ...catEncyclopedia, ...dogEncyclopedia,
  ...fishEncyclopedia, ...geckoEncyclopedia, ...invertebrateEncyclopedia, ...lizardEncyclopedia,
  ...smallMammalEncyclopedia, ...snakeEncyclopedia, ...turtleEncyclopedia,
];

// Dog/cat guide titles aren't clean species names - they're page titles
// like "Labrador Retriever: Breed Quirks" or "Dog Care: The Essentials".
// Reptile/bird/fish/small-mammal guide names don't have this problem.
// Strip the suffix down to the breed name, or to the bare pet type for
// the generic "<Type> Care" overview pages (which have no breed at all).
function cleanGuideName(guide) {
  const colonIdx = guide.name.indexOf(":");
  if (colonIdx === -1) return guide.name;
  const prefix = guide.name.slice(0, colonIdx).trim();
  if (prefix.toLowerCase() === `${guide.petType.toLowerCase()} care`) return guide.petType;
  return prefix;
}

const guideNames = new Set(ALL_GUIDES.map((g) => cleanGuideName(g).toLowerCase()));
const encyclopediaNames = new Set(ALL_ENCYCLOPEDIA.map((a) => a.name.toLowerCase()));

// Groups modifiers can be scoped to. Values are the raw petType (guides)
// / category (encyclopedia) strings actually used in this site's data.
const CATEGORY_GROUPS = {
  "reptile-terrarium": ["Lizards", "Geckos", "Snakes", "Turtles & Tortoises", "Amphibians", "Invertebrates"],
  "birds": ["Birds"],
  "fish": ["Fish"],
  "dogs-cats": ["Dog", "Cat"],
  "small-mammals": ["Small Mammals"],
};

function groupForType(rawType) {
  for (const [group, rawTypes] of Object.entries(CATEGORY_GROUPS)) {
    if (rawTypes.includes(rawType)) return group;
  }
  return null;
}

// seed name -> group. Encyclopedia's `category` field goes in first, then
// guides' `petType` overwrites it where both exist - the two should always
// agree, but a guide is the more authoritative/detailed source if they don't.
const seedGroup = new Map();
for (const a of ALL_ENCYCLOPEDIA) {
  const group = groupForType(a.category);
  if (group) seedGroup.set(a.name, group);
}
for (const g of ALL_GUIDES) {
  const group = groupForType(g.petType);
  if (group) seedGroup.set(cleanGuideName(g), group);
}

// One-off, non-species topics worth researching alongside actual animals.
// These have no group - see the file header for why they're queried
// differently from species seeds.
const EXTRA_SEEDS = [
  "easiest exotic pet to take care of",
  "quietest pet for an apartment",
  "pets that don't need a vet",
];

const ALL_SEEDS = [...new Set([
  ...ALL_GUIDES.map((g) => cleanGuideName(g)),
  ...ALL_ENCYCLOPEDIA.map((a) => a.name),
  ...EXTRA_SEEDS,
])].sort();

// Quick dry run before committing to the full sweep:
//   SEED_LIMIT=3 node tools/keyword-finder/animal-keyword-finder.js
const SEED_LIMIT = Number(process.env.SEED_LIMIT) || null;
const SEEDS = SEED_LIMIT ? ALL_SEEDS.slice(0, SEED_LIMIT) : ALL_SEEDS;

// Applied to every species seed, regardless of group.
const UNIVERSAL_MODIFIERS = [
  "why do",
  "how to care for",
  "is",
  "",
  "vs",
  "for beginners",
  "lifespan",
  "diet",
  "not eating",
  "baby",
  "facts",
  "cost",
  "male or female",
  "sick",
];

// Applied only to seeds in the matching group, on top of the universal set.
const GROUP_MODIFIERS = {
  "reptile-terrarium": ["tank setup", "legal to own"],
  "birds": ["cage setup", "legal to own"],
  "fish": ["tank setup"],
  "dogs-cats": [],
  "small-mammals": ["cage setup", "legal to own"],
};

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
const DELAY_MS = 300; // stay polite to the endpoint

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchSuggestions(query) {
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data[1] || [];
  } catch (err) {
    console.error(`Failed on "${query}": ${err.message}`);
    return [];
  }
}

function buildQueries(seed, group) {
  if (!group) return [seed]; // extra topic - already a complete thought, query as-is
  const modifiers = [...UNIVERSAL_MODIFIERS, ...(GROUP_MODIFIERS[group] || [])];
  const queries = modifiers.map((mod) => (mod ? `${mod} ${seed}`.trim() : `${seed} `));
  for (const letter of ALPHABET) queries.push(`${seed} ${letter}`);
  return queries;
}

function escapeCsv(value) {
  const str = String(value);
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

async function main() {
  const groupCounts = {};
  for (const seed of SEEDS) {
    const g = seedGroup.get(seed) || "topic";
    groupCounts[g] = (groupCounts[g] || 0) + 1;
  }
  console.log(
    SEED_LIMIT
      ? `SEED_LIMIT=${SEED_LIMIT} set - running a quick ${SEEDS.length}-seed dry run out of ${ALL_SEEDS.length} total.`
      : `${SEEDS.length} seeds (${ALL_GUIDES.length} guides + ${ALL_ENCYCLOPEDIA.length} encyclopedia entries + ${EXTRA_SEEDS.length} extra, deduped).`
  );
  console.log(Object.entries(groupCounts).map(([g, n]) => `${g}: ${n}`).join(", "));

  const totalQueries = SEEDS.reduce((sum, seed) => sum + buildQueries(seed, seedGroup.get(seed)).length, 0);
  const estMinutes = Math.round((totalQueries * DELAY_MS) / 60000) || 1;
  console.log(`${totalQueries} total queries, ~${estMinutes} minute minimum runtime at ${DELAY_MS}ms/query.\n`);

  const bySeed = new Map(); // seed -> Map(suggestion -> { hits, bestRank, exampleQuery })

  for (const seed of SEEDS) {
    const group = seedGroup.get(seed) || null;
    const queries = buildQueries(seed, group);
    console.log(`Fetching suggestions for "${seed}" (${queries.length} quer${queries.length === 1 ? "y" : "ies"})...`);
    const counts = new Map();

    for (const q of queries) {
      const suggestions = await fetchSuggestions(q);
      suggestions.forEach((s, idx) => {
        const key = s.trim();
        const existing = counts.get(key);
        if (existing) {
          existing.hits += 1;
          if (idx < existing.bestRank) {
            existing.bestRank = idx;
            existing.exampleQuery = q;
          }
        } else {
          counts.set(key, { hits: 1, bestRank: idx, exampleQuery: q });
        }
      });
      await sleep(DELAY_MS);
    }

    bySeed.set(seed, counts);
  }

  const rows = [["seed", "group", "has_guide", "has_encyclopedia_entry", "suggestion", "query_hits", "best_rank", "example_query"]];
  for (const seed of SEEDS) {
    const counts = bySeed.get(seed);
    const group = seedGroup.get(seed) || "topic";
    const hasGuide = guideNames.has(seed.toLowerCase()) ? "yes" : "no";
    const hasEncyclopedia = encyclopediaNames.has(seed.toLowerCase()) ? "yes" : "no";
    const sorted = [...counts.entries()].sort(
      (a, b) => b[1].hits - a[1].hits || a[1].bestRank - b[1].bestRank
    );
    for (const [suggestion, info] of sorted) {
      rows.push([seed, group, hasGuide, hasEncyclopedia, suggestion, info.hits, info.bestRank, info.exampleQuery]);
    }
  }

  const csv = rows.map((r) => r.map(escapeCsv).join(",")).join("\n");
  const outPath = path.join(__dirname, "keyword-ideas.csv");
  await fs.writeFile(outPath, csv, "utf8");

  const totalSuggestions = rows.length - 1;
  const noGuideSeeds = SEEDS.filter((s) => seedGroup.has(s) && !guideNames.has(s.toLowerCase()));
  console.log(`\nDone. ${totalSuggestions} keyword ideas across ${SEEDS.length} seeds written to ${outPath}`);
  if (noGuideSeeds.length) {
    console.log(`\n${noGuideSeeds.length} seeds have no care guide yet (possible new-guide opportunities):`);
    console.log(noGuideSeeds.join(", "));
  }
}

main();

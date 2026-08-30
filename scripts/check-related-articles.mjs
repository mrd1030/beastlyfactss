#!/usr/bin/env node
/**
 * Keeps RELATED_ARTICLES honest, in both directions.
 *
 * Why this exists: most species on this site get their deep dives for free.
 * getAutoDetectedSlugs strips a standard suffix off a guide id, so writing
 * `leopard-gecko-feeding-guide` wires itself to the leopard gecko guide with
 * no entry in RELATED_ARTICLES at all.
 *
 * Dogs and cats have no such quintet. Their articles are cross-breed condition
 * hubs with names like `periodontal-dental-disease-guide`, which match no
 * guide id and therefore auto-detect against nothing. Six such hubs shipped
 * between 2026-09-30 and 2026-10-07 and every one of them was reachable only
 * by search: no breed page linked to any of them, and they linked to breed
 * pages in prose but got nothing back. Nothing flagged it, because nothing was
 * checking that an article ends up attached to a guide.
 *
 * Three checks:
 *
 *   1. ORPHANS. Any article tagged "Dog Health" or "Cat Health" must appear in
 *      at least one RELATED_ARTICLES entry. Those two tags are the marker for
 *      a cross-breed piece that cannot auto-detect.
 *   2. DEAD SLUGS. Every slug listed must resolve to a real MDX file, so a
 *      renamed or deleted article does not leave a silent dead entry.
 *   3. DEAD KEYS. Every guide id key must be a real guide id, so a typo does
 *      not quietly attach articles to nothing.
 *
 * Usage:  node scripts/check-related-articles.mjs   (or: npm run check:related)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { RELATED_ARTICLES } from '../src/lib/data/relatedArticles.js';
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

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = path.join(ROOT, 'content');

// The tags that mark a cross-breed dog or cat piece. These articles are named
// for a condition rather than a species, so nothing auto-detects them.
const CROSS_BREED_TAGS = ['Dog Health', 'Cat Health'];

const guideIds = new Set([
  ...amphibianGuides, ...birdGuides, ...catGuides, ...dogGuides, ...fishGuides,
  ...geckoGuides, ...invertebrateGuides, ...lizardGuides, ...smallMammalGuides,
  ...snakeGuides, ...turtleGuides,
].map((g) => g.id));

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.mdx')) out.push(p);
  }
  return out;
}

const files = walk(CONTENT);
const slugsOnDisk = new Set(files.map((f) => path.basename(f, '.mdx')));

// content/_scheduled-* holds articles queued for a future auto-publish date.
// They are not on the site yet, so they are not expected to be wired.
const isStaged = (f) => path.relative(ROOT, f).replace(/\\/g, '/').startsWith('content/_scheduled');

const wired = new Set(Object.values(RELATED_ARTICLES).flat());

const orphans = [];
for (const file of files) {
  if (isStaged(file)) continue;
  const raw = fs.readFileSync(file, 'utf8');
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) continue;
  const tagLine = fm[1].match(/^tags:\s*\[(.*)\]\s*$/m);
  if (!tagLine) continue;
  const tags = [...tagLine[1].matchAll(/"([^"]*)"|'([^']*)'/g)].map((m) => m[1] ?? m[2]);
  if (!tags.some((t) => CROSS_BREED_TAGS.includes(t))) continue;
  const slug = path.basename(file, '.mdx');
  if (!wired.has(slug)) orphans.push(slug);
}

const deadSlugs = [];
for (const [guideId, articles] of Object.entries(RELATED_ARTICLES)) {
  for (const slug of articles) {
    if (!slugsOnDisk.has(slug)) deadSlugs.push({ guideId, slug });
  }
}

const deadKeys = Object.keys(RELATED_ARTICLES).filter((id) => !guideIds.has(id));

const dogCatKeys = Object.keys(RELATED_ARTICLES)
  .filter((id) => id.startsWith('dog-') || id.startsWith('cat-')).length;
console.log(
  `RELATED_ARTICLES: ${Object.keys(RELATED_ARTICLES).length} guide ids, ` +
  `${wired.size} distinct articles (${dogCatKeys} dog/cat guide ids).`
);

let failed = false;

if (orphans.length) {
  failed = true;
  console.error(`\nFAIL - ${orphans.length} cross-breed article(s) wired to no guide:\n`);
  for (const slug of orphans.sort()) console.error(`  ${slug}`);
  console.error(
    '\nAn article tagged "Dog Health" or "Cat Health" is named for a condition,' +
    '\nnot a species, so nothing auto-detects it. Without an entry in' +
    '\nsrc/lib/data/relatedArticles.js it is reachable only by search, and the' +
    '\nbreed pages it serves link to nothing. Add it against the guide ids the' +
    '\nresearch actually supports.'
  );
}

if (deadSlugs.length) {
  failed = true;
  console.error(`\nFAIL - ${deadSlugs.length} listed article(s) do not exist:\n`);
  for (const { guideId, slug } of deadSlugs) console.error(`  ${guideId} -> ${slug}`);
}

if (deadKeys.length) {
  failed = true;
  console.error(`\nFAIL - ${deadKeys.length} entr(ies) key off an unknown guide id:\n`);
  for (const id of deadKeys) console.error(`  ${id}`);
}

if (failed) process.exit(1);
console.log('All cross-breed articles are wired, and every entry resolves.');

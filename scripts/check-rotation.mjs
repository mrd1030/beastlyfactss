#!/usr/bin/env node
/**
 * Keeps src/lib/data/rotation.json complete and stable.
 *
 * Why this exists: "Today's reads" on the homepage and on the Critter Digest
 * shows a fresh set of articles every day without leaning on publish dates.
 * The set is picked by each article's rotation number (see
 * src/lib/utils/rotation.js). If those numbers were derived at build time
 * from the article list, adding one article would shift every number after
 * it and reshuffle the schedule. So the numbers are written down once, in
 * rotation.json, and never recomputed: the same rule as fact ids.
 *
 *   - A new article gets the next number after the current highest.
 *   - A removed article leaves a gap. Nothing is ever renumbered.
 *
 * Checks, run against the article index sync-articles.js just wrote:
 *
 *   1. MISSING. Every article in the index has a number.
 *   2. DUPLICATE. No two slugs share a number.
 *
 * A slug that no longer exists in the index is fine: it is the gap a removed
 * article leaves, and rotation.js skips it.
 *
 * Usage:
 *   node scripts/check-rotation.mjs            fail on problems (build)
 *   node scripts/check-rotation.mjs --assign   number any new articles
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REGISTRY = path.join(ROOT, 'src/lib/data/rotation.json');
const INDEX = path.join(ROOT, 'src/lib/generated/articles-index.json');

const assign = process.argv.includes('--assign');
const registry = fs.existsSync(REGISTRY) ? JSON.parse(fs.readFileSync(REGISTRY, 'utf8')) : {};
const { articles } = JSON.parse(fs.readFileSync(INDEX, 'utf8'));

// New articles are numbered oldest first, then by slug, so a batch lands in a
// predictable order rather than whatever order the filesystem listed it in.
const missing = articles
  .filter(a => registry[a.slug] === undefined)
  .sort((a, b) => String(a.date || '').localeCompare(String(b.date || '')) || a.slug.localeCompare(b.slug));

const byNumber = new Map();
for (const [slug, n] of Object.entries(registry)) {
  if (!Number.isInteger(n) || n < 0) {
    console.error(`Rotation: ${slug} has an invalid number (${n}).`);
    process.exit(1);
  }
  if (!byNumber.has(n)) byNumber.set(n, []);
  byNumber.get(n).push(slug);
}
const duplicates = [...byNumber.entries()].filter(([, slugs]) => slugs.length > 1);

if (duplicates.length) {
  console.error('Rotation: numbers used more than once in src/lib/data/rotation.json:');
  for (const [n, slugs] of duplicates) console.error(`  ${n}: ${slugs.join(', ')}`);
  process.exit(1);
}

if (assign) {
  let next = Object.values(registry).reduce((max, n) => Math.max(max, n), -1) + 1;
  for (const a of missing) registry[a.slug] = next++;
  const ordered = Object.fromEntries(Object.entries(registry).sort((a, b) => a[1] - b[1]));
  fs.writeFileSync(REGISTRY, `${JSON.stringify(ordered, null, 2)}\n`);
  console.log(`Rotation: numbered ${missing.length} new article${missing.length === 1 ? '' : 's'}, ${Object.keys(ordered).length} in the registry.`);
  process.exit(0);
}

if (missing.length) {
  console.error(`Rotation: ${missing.length} article${missing.length === 1 ? ' has' : 's have'} no rotation number:`);
  for (const a of missing.slice(0, 20)) console.error(`  ${a.slug}`);
  if (missing.length > 20) console.error(`  ...and ${missing.length - 20} more`);
  console.error('Run: node scripts/check-rotation.mjs --assign');
  process.exit(1);
}

console.log(`Rotation: all ${articles.length} articles numbered.`);

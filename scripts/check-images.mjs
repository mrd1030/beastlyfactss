#!/usr/bin/env node
/**
 * Fails the build when anything references an image file that does not exist.
 *
 * The 2026-08-06 Ahrefs crawl reported broken images as its only Error-severity
 * issue. Both were the serval: a Beastfile was added pointing at
 * /assets/beastlypedia/serval-hero.jpg before that image had been generated, and
 * because the serval card is pulled into the "related animals" strip across the
 * Beastlypedia, one missing file produced 404s on seven pages.
 *
 * Nothing anywhere objected. The data file was valid JavaScript, the build was
 * green, the page rendered, and the only symptom was a broken <img> that an
 * external crawler found later. This check closes that gap.
 *
 * It also verifies the derivative tiers, because the card and thumb variants are
 * what most components actually request: a source image that exists but has
 * never been through scripts/generate-thumbnails.js still 404s in a card.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');

// Directories whose images get -card / -thumb tiers, mirroring the two lists in
// scripts/generate-thumbnails.js. facts/ is scanned but deliberately has no card
// tier, so it is absent here for the same reason it is absent there.
const THUMB_DIRS = ['assets/images', 'assets/guides', 'assets/facts', 'assets/encyclopedia', 'assets/beastlypedia'];
const CARD_DIRS = ['assets/guides', 'assets/encyclopedia', 'assets/images', 'assets/beastlypedia'];

const SCAN = [
  { dir: 'src/lib/data', exts: ['.js', '.json'] },
  { dir: 'src/pages', exts: ['.jsx'] },
  { dir: 'src/components', exts: ['.jsx'] },
  { dir: 'content', exts: ['.mdx'] },
];

const IMAGE_REF = /["'`(]\s*(\/assets\/[A-Za-z0-9._@/-]+\.(?:jpg|jpeg|png|webp|svg|gif))/gi;

function walk(dir, exts, out = []) {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return out;
  for (const entry of fs.readdirSync(full, { withFileTypes: true })) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(rel, exts, out);
    else if (exts.includes(path.extname(entry.name).toLowerCase())) out.push(rel);
  }
  return out;
}

// referenced path -> the files that reference it
const refs = new Map();
for (const { dir, exts } of SCAN) {
  for (const file of walk(dir, exts)) {
    const text = fs.readFileSync(path.join(ROOT, file), 'utf8');
    for (const m of text.matchAll(IMAGE_REF)) {
      const p = m[1];
      if (!refs.has(p)) refs.set(p, new Set());
      refs.get(p).add(file.replace(/\\/g, '/'));
    }
  }
}

const exists = (webPath) => fs.existsSync(path.join(PUBLIC, webPath.replace(/^\//, '')));

const missing = [];
const staged = [];
const missingDerivatives = [];

// content/_scheduled-* holds articles queued for a future auto-publish date.
// sync-articles.js only reads blog, guides, fun-facts and short-story, so a
// staged article is not on the site and its artwork legitimately may not exist
// yet. It is still reported, because the image has to land before the article
// is promoted or it goes live broken exactly the way the serval hero did.
const isStaged = (file) => file.startsWith('content/_scheduled');

for (const [webPath, sources] of [...refs].sort()) {
  if (!exists(webPath)) {
    const live = [...sources].filter((s) => !isStaged(s));
    if (live.length) missing.push({ webPath, sources: live });
    else staged.push({ webPath, sources: [...sources] });
    continue;
  }

  // The source is present. Check the tiers components will ask for.
  const dir = path.posix.dirname(webPath).replace(/^\//, '');
  const ext = path.extname(webPath);
  const base = webPath.slice(0, -ext.length);
  if (base.endsWith('-card') || base.endsWith('-thumb') || base.endsWith('@2x')) continue;
  if (!['.jpg', '.jpeg', '.png'].includes(ext.toLowerCase())) continue;

  const wanted = [];
  if (THUMB_DIRS.includes(dir)) wanted.push(`${base}-thumb.jpg`, `${base}-thumb.webp`);
  if (CARD_DIRS.includes(dir)) wanted.push(`${base}-card.jpg`, `${base}-card.webp`);

  const absent = wanted.filter((w) => !exists(w));
  if (absent.length) missingDerivatives.push({ webPath, absent, sources: [...sources] });
}

if (missing.length || missingDerivatives.length) {
  if (missing.length) {
    console.error(`\n${missing.length} referenced image(s) do not exist:\n`);
    for (const m of missing) {
      console.error(`  ${m.webPath}`);
      for (const s of m.sources) console.error(`      referenced by ${s}`);
    }
  }
  if (missingDerivatives.length) {
    console.error(`\n${missingDerivatives.length} image(s) exist but are missing generated tiers:\n`);
    for (const m of missingDerivatives) {
      console.error(`  ${m.webPath}`);
      console.error(`      missing: ${m.absent.map((a) => path.basename(a)).join(', ')}`);
    }
    console.error('\n  Run: node scripts/generate-thumbnails.js');
  }
  console.error('\nAn image referenced before it exists ships a 404 to every page that');
  console.error('renders it, and a card pulled into related-animal strips can reach');
  console.error('pages far from the one it was added to.\n');
  process.exit(1);
}

if (staged.length) {
  console.log(`Images: ${staged.length} artwork file(s) still missing for queued articles, not yet live:`);
  for (const s of staged) console.log(`   ${s.webPath}`);
  console.log('   These must exist before those articles are promoted out of content/_scheduled-*.');
}
console.log(`Images: all ${refs.size - staged.length} referenced paths on live pages exist, with their generated tiers.`);

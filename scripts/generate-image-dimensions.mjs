#!/usr/bin/env node
/**
 * Regenerates src/lib/data/imageDimensions.js from the real pixel size of every
 * original image under the asset folders generate-thumbnails.js scans.
 *
 * The table used to be hand-maintained and only covered hero images, so the 97
 * in-body <Figure> photos under /assets/images/ rendered with no width/height
 * and the page reflowed as each one loaded. Reading the size at build time
 * keeps the table complete without anyone remembering to add an entry.
 *
 * Generated tiers (-thumb, -card, -hero, @2x) are skipped: the table is keyed
 * by the path a page actually references, which is always the original.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const outFile = path.join(rootDir, 'src/lib/data/imageDimensions.js');

const assetDirs = [
  'public/assets/images',
  'public/assets/guides',
  'public/assets/facts',
  'public/assets/encyclopedia',
  'public/assets/beastlypedia',
].map((d) => path.join(rootDir, d));

const supported = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const GENERATED_TIER = /(-thumb|-card|-hero)(@2x)?\.(jpg|jpeg|png|webp)$/i;

function collectImages(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectImages(full, results);
    else if (supported.has(path.extname(entry.name).toLowerCase()) && !GENERATED_TIER.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

const files = assetDirs.flatMap((d) => collectImages(d)).sort();
const dims = {};
let failed = 0;
for (const file of files) {
  try {
    const { width, height } = await sharp(file).metadata();
    if (!width || !height) throw new Error('no dimensions in metadata');
    const key = '/' + path.relative(publicDir, file).split(path.sep).join('/');
    dims[key] = { width, height };
  } catch (err) {
    failed += 1;
    console.error(`  ✗ ${path.relative(rootDir, file)}: ${err.message}`);
  }
}

const header = `// Auto-generated real pixel dimensions for every original image under the
// asset folders generate-thumbnails.js scans, keyed by site-relative path.
// Used for og:image:width/height (Helmet has no way to "unset" a tag it doesn't
// declare, so a wrong declared size silently persists otherwise) and for the
// width/height attributes on hero and in-body images, which is what lets the
// browser reserve the slot before the file arrives.
// Regenerated on every build by scripts/generate-image-dimensions.mjs. Do not
// edit by hand.
export const IMAGE_DIMENSIONS = `;

// One entry per line: compact enough to keep the shipped module small, and a
// replaced image still shows up as a one-line diff.
const body = Object.entries(dims)
  .map(([k, v]) => `  ${JSON.stringify(k)}: { "width": ${v.width}, "height": ${v.height} }`)
  .join(',\n');
fs.writeFileSync(outFile, `${header}{\n${body}\n};\n`);
console.log(`Image dimensions: ${Object.keys(dims).length} originals written to src/lib/data/imageDimensions.js${failed ? `, ${failed} unreadable` : ''}`);
if (failed) process.exit(1);

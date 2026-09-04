#!/usr/bin/env node
// Re-encode tracked JPEGs through mozjpeg, which packs the same picture into
// noticeably fewer bytes than a standard encoder at the same quality setting.
//
// Not a blind pass at a fixed quality. These files are already lossy, so a
// second encode is generation loss, and how much loss depends entirely on the
// picture: flat studio backgrounds survive anything, dense fur and foliage do
// not. So every file is measured against its own original with PSNR, and the
// result is only kept if it stays above MIN_PSNR. Anything that fails at the
// first quality is retried higher, and anything that still fails is left alone.
// A file that only gets marginally smaller is also left alone, since churning
// it costs a git object for no real gain.
//
// The homepage hero is excluded outright. It is the largest thing any visitor
// sees and the one image where a few KB is not worth the argument.
//
// Derived -thumb and -card tiers are gitignored and rebuilt from these files by
// generate-thumbnails.js, so they inherit the saving without being touched.
//
//   node scripts/optimize-images.mjs            report only, writes nothing
//   node scripts/optimize-images.mjs --write    apply
import sharp from 'sharp';
import { execSync } from 'node:child_process';
import fs from 'node:fs';

const WRITE = process.argv.includes('--write');
const MIN_PSNR = 38;        // dB. Above ~40 is normally called indistinguishable.
const MIN_SAVING = 0.10;    // skip anything that does not shrink by at least this
const QUALITIES = [80, 88]; // try in order, first one clearing MIN_PSNR wins
const CONCURRENCY = 12;
const EXCLUDE = /^public\/assets\/hero-/;   // homepage hero, see above

const files = execSync('git ls-files public/assets', { encoding: 'utf8', maxBuffer: 1 << 28 })
  .trim().split('\n')
  .filter(f => /\.jpe?g$/i.test(f))
  .filter(f => !EXCLUDE.test(f));

// Sample every third byte. Full-resolution comparison over the whole library
// is memory-bound for no extra signal at this sample density.
async function psnr(origPath, buf) {
  const [a, b] = await Promise.all([
    sharp(origPath).raw().toBuffer(),
    sharp(buf).raw().toBuffer(),
  ]);
  if (a.length !== b.length) return null;
  let se = 0, n = 0;
  for (let i = 0; i < a.length; i += 3) { const d = a[i] - b[i]; se += d * d; n++; }
  return se === 0 ? Infinity : 10 * Math.log10((255 * 255) / (se / n));
}

let before = 0, after = 0, rewritten = 0;
const skippedQuality = [], skippedMargin = [];
let idx = 0;

async function worker() {
  while (idx < files.length) {
    const f = files[idx++];
    const orig = fs.statSync(f).size;
    before += orig;
    let best = null;
    for (const q of QUALITIES) {
      const buf = await sharp(f).jpeg({ quality: q, mozjpeg: true }).toBuffer();
      const p = await psnr(f, buf);
      if (p === null) break;
      if (p >= MIN_PSNR) { best = { buf, q, p }; break; }
      if (q === QUALITIES.at(-1)) skippedQuality.push([f, p.toFixed(1)]);
    }
    if (!best) { after += orig; continue; }
    if (1 - best.buf.length / orig < MIN_SAVING) {
      skippedMargin.push(f); after += orig; continue;
    }
    if (WRITE) fs.writeFileSync(f, best.buf);
    after += best.buf.length;
    rewritten++;
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

const MB = n => (n / 1048576).toFixed(1) + 'MB';
console.log(`${WRITE ? 'Rewrote' : 'Would rewrite'} ${rewritten} of ${files.length} images.`);
console.log(`  ${MB(before)} -> ${MB(after)}  (${(100 - 100 * after / before).toFixed(0)}% smaller, ${MB(before - after)} saved)`);
console.log(`  left alone: ${skippedQuality.length} below ${MIN_PSNR} dB even at q${QUALITIES.at(-1)}, ${skippedMargin.length} under the ${MIN_SAVING * 100}% saving floor`);
if (skippedQuality.length) {
  console.log('\n  too lossy to re-encode, kept as they are:');
  for (const [f, p] of skippedQuality.slice(0, 12)) console.log(`    ${p} dB  ${f}`);
  if (skippedQuality.length > 12) console.log(`    ...and ${skippedQuality.length - 12} more`);
}
if (!WRITE) console.log('\nDry run. Pass --write to apply.');

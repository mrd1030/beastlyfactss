import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
// Two separate lists, and both need the directory. assetDirs decides what gets
// scanned at all; CARD_VARIANT_DIRS below only decides which of those also get
// the larger -card tier. Adding a directory to the second without the first
// generates nothing and reports success.
const assetDirs = [
  path.join(rootDir, 'public/assets/images'),
  path.join(rootDir, 'public/assets/guides'),
  path.join(rootDir, 'public/assets/facts'),
  path.join(rootDir, 'public/assets/encyclopedia'),
  path.join(rootDir, 'public/assets/beastlypedia'),
];

// guides/ and encyclopedia/ also get a larger, non-square "-card" variant -
// both feed the homepage's photo-led GuideSpotlight/EncyclopediaTeaser cards
// (~320-380px wide, 4:3), which used to request the full original image
// (via LocalImage's fullSize prop, to avoid the -thumb tier's visible
// upscale blur at that size) - PageSpeed flagged that as ~460KB of oversized
// images. 640x480 gives a sharp result at that display size without paying
// for a 1168x784 original.
// images/ joined this list when the homepage gained the FeaturedEvent band,
// which shows an ARTICLE image in a card the same way. Without a -card tier
// LocalImage falls back to the full original, so that band was requesting a
// 1168x784 file for a 176px slot - the same regression the note above
// describes, arriving by a different route.
const CARD_VARIANT_DIRS = new Set([
  path.join(rootDir, 'public/assets/guides'),
  path.join(rootDir, 'public/assets/encyclopedia'),
  path.join(rootDir, 'public/assets/images'),
  // Beastlypedia hero images are photo-led cards on the index, so they need the
  // larger -card tier. Without this entry variant="card" silently falls back to
  // serving the full-size original.
  path.join(rootDir, 'public/assets/beastlypedia'),
  // Deliberately NOT facts/. A Beastfile's secondary image may reuse a fact
  // photo and is portrait by preference, but every tier here is a `cover` crop
  // to a landscape or square box (320x240 and 240x240) - running a portrait
  // photo through either would cut the animal's head off. Beastfile secondaries
  // therefore use the uncropped original until a portrait tier exists.
]);

const supported = new Set(['.jpg', '.jpeg', '.png']);

// Recursively collect all image files under a directory tree.
function collectImages(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectImages(full, results);
    } else if (supported.has(path.extname(entry.name).toLowerCase())) {
      results.push(full);
    }
  }
  return results;
}

// Generates one size/format tier (the plain -thumb, or one of the two card
// tiers) for one source image. Returns 1 if it actually wrote files, 0 if it
// was already there or the write failed - same accounting the old sequential
// version did with its `count += 1` inside each try block.
async function generateTier(input, { webpOut, jpgOut, resize, webpOpts, jpegOpts, label }) {
  if (fs.existsSync(webpOut) && fs.existsSync(jpgOut)) return 0;
  try {
    await sharp(input).resize(...resize).webp(webpOpts).toFile(webpOut);
    await sharp(input).resize(...resize).jpeg(jpegOpts).toFile(jpgOut);
    return 1;
  } catch (error) {
    console.warn(`Skipping ${path.basename(input)}${label}: ${error.message}`);
    return 0;
  }
}

// Runs `jobs` (zero-arg async thunks) with at most `concurrency` in flight at
// once, summing each job's return value - a small hand-rolled pool rather
// than a dependency, since this is the only place in the build that needs one.
async function runPool(jobs, concurrency) {
  let total = 0;
  let next = 0;
  async function worker() {
    while (next < jobs.length) {
      const job = jobs[next++];
      // Not `total += await job()`: a compound assignment reads `total`
      // before evaluating its right-hand side, so the await inside would
      // let two workers both read the same stale value and overwrite each
      // other's increment - a lost update. Awaiting into a local first, then
      // adding it in a single synchronous statement, closes that window.
      const generated = await job();
      total += generated;
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, jobs.length) }, worker));
  return total;
}

async function generateThumbs() {
  // Every deploy clones the repo fresh and these generated files are
  // gitignored (see .gitignore), so on Cloudflare Pages this always starts
  // from zero - there is no warm cache to skip into. Running all ~3,000
  // variants one sharp() call at a time left 3 of this build's 4 CPUs idle
  // for the entire step; a small worker pool is what actually uses them.
  // *2 because these are mostly waiting on libvips' native work (I/O plus a
  // touch of CPU for a 240-640px resize), not pure single-threaded JS, so a
  // bit of oversubscription keeps every core fed between dispatches.
  const CONCURRENCY = Math.max(4, os.cpus().length * 2);

  const jobs = [];
  for (const dir of assetDirs) {
    const files = collectImages(dir);
    const wantsCardVariant = CARD_VARIANT_DIRS.has(dir);

    for (const input of files) {
      const ext = path.extname(input);
      const baseName = path.basename(input, ext);
      if (baseName.endsWith('-thumb') || baseName.endsWith('-card') || baseName.endsWith('-card@2x')) continue;

      const base = input.slice(0, -ext.length);

      // 240x240 renders into slots as small as 80x56, so like the -card@2x
      // variant this is always drawn well below its native size. PageSpeed
      // flagged several of these individually ("increasing the image
      // compression factor could improve this image's download size"), which
      // is what q68 addresses.
      jobs.push(() => generateTier(input, {
        webpOut: `${base}-thumb.webp`,
        jpgOut: `${base}-thumb.jpg`,
        resize: [240, 240, { fit: 'cover', withoutEnlargement: true }],
        webpOpts: { quality: 68 },
        jpegOpts: { quality: 70 },
        label: '',
      }));

      if (wantsCardVariant) {
        // Two tiers, not one: PageSpeed flagged the single 640x480 file as
        // ~2-2.5x oversized for its actual ~315x236 (mobile) / ~274x206
        // (desktop) display slot on DPR-1 screens - every visitor downloaded
        // the sharp version whether their screen needed it or not. Now a
        // 320x240 "-card" file is the 1x default (matches the real slot at
        // DPR-1), and the original 640x480 becomes the "-card@2x" file,
        // served via a 1x/2x density descriptor in LocalImage.jsx so only
        // high-DPI screens pay for the larger download.
        jobs.push(() => generateTier(input, {
          webpOut: `${base}-card.webp`,
          jpgOut: `${base}-card.jpg`,
          resize: [320, 240, { fit: 'cover', withoutEnlargement: true }],
          webpOpts: { quality: 76 },
          jpegOpts: { quality: 78 },
          label: ' (card 1x variant)',
        }));

        // Lower quality than the 1x variant on purpose. This file is only
        // ever served to high-DPI screens, where its 640x480 is displayed in
        // a slot about 315x236 CSS px, so every compression artifact is
        // drawn at half size and is correspondingly harder to see. PageSpeed
        // flagged these as the single biggest image cost on the homepage
        // (around 298 KiB across the encyclopedia cards alone), and dropping
        // to q68 sheds roughly 29% of that with no visible difference at the
        // size they actually render.
        jobs.push(() => generateTier(input, {
          webpOut: `${base}-card@2x.webp`,
          jpgOut: `${base}-card@2x.jpg`,
          resize: [640, 480, { fit: 'cover', withoutEnlargement: true }],
          webpOpts: { quality: 68 },
          jpegOpts: { quality: 70 },
          label: ' (card 2x variant)',
        }));
      }
    }
  }

  const count = await runPool(jobs, CONCURRENCY);
  console.log(`Generated ${count} thumbnail variants`);
}

generateThumbs().catch((error) => {
  console.error(error);
  process.exit(1);
});

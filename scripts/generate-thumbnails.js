import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const assetDirs = [
  path.join(rootDir, 'public/assets/images'),
  path.join(rootDir, 'public/assets/guides'),
  path.join(rootDir, 'public/assets/facts'),
  path.join(rootDir, 'public/assets/encyclopedia'),
];

// guides/ and encyclopedia/ also get a larger, non-square "-card" variant -
// both feed the homepage's photo-led GuideSpotlight/EncyclopediaTeaser cards
// (~320-380px wide, 4:3), which used to request the full original image
// (via LocalImage's fullSize prop, to avoid the -thumb tier's visible
// upscale blur at that size) - PageSpeed flagged that as ~460KB of oversized
// images. 640x480 gives a sharp result at that display size without paying
// for a 1168x784 original.
const CARD_VARIANT_DIRS = new Set([
  path.join(rootDir, 'public/assets/guides'),
  path.join(rootDir, 'public/assets/encyclopedia'),
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

async function generateThumbs() {
  let count = 0;

  for (const dir of assetDirs) {
    const files = collectImages(dir);
    const wantsCardVariant = CARD_VARIANT_DIRS.has(dir);

    for (const input of files) {
      const ext = path.extname(input);
      const baseName = path.basename(input, ext);
      if (baseName.endsWith('-thumb') || baseName.endsWith('-card') || baseName.endsWith('-card@2x')) continue;

      const base = input.slice(0, -ext.length);
      const webpOut = `${base}-thumb.webp`;
      const jpgOut = `${base}-thumb.jpg`;

      // 240x240 renders into slots as small as 80x56, so like the -card@2x
      // variant this is always drawn well below its native size. PageSpeed
      // flagged several of these individually ("increasing the image
      // compression factor could improve this image's download size"), which is
      // what q68 addresses.
      if (!(fs.existsSync(webpOut) && fs.existsSync(jpgOut))) {
        try {
          await sharp(input)
            .resize(240, 240, { fit: 'cover', withoutEnlargement: true })
            .webp({ quality: 68 })
            .toFile(webpOut);

          await sharp(input)
            .resize(240, 240, { fit: 'cover', withoutEnlargement: true })
            .jpeg({ quality: 70 })
            .toFile(jpgOut);

          count += 1;
        } catch (error) {
          console.warn(`Skipping ${path.basename(input)}: ${error.message}`);
        }
      }

      if (wantsCardVariant) {
        // Two tiers, not one: PageSpeed flagged the single 640x480 file as
        // ~2-2.5x oversized for its actual ~315x236 (mobile) / ~274x206
        // (desktop) display slot on DPR-1 screens - every visitor downloaded
        // the sharp version whether their screen needed it or not. Now a
        // 320x240 "-card" file is the 1x default (matches the real slot at
        // DPR-1), and the original 640x480 becomes the "-card@2x" file,
        // served via a 1x/2x density descriptor in LocalImage.jsx so only
        // high-DPI screens pay for the larger download.
        const card1xWebpOut = `${base}-card.webp`;
        const card1xJpgOut = `${base}-card.jpg`;
        const card2xWebpOut = `${base}-card@2x.webp`;
        const card2xJpgOut = `${base}-card@2x.jpg`;

        if (!(fs.existsSync(card1xWebpOut) && fs.existsSync(card1xJpgOut))) {
          try {
            await sharp(input)
              .resize(320, 240, { fit: 'cover', withoutEnlargement: true })
              .webp({ quality: 76 })
              .toFile(card1xWebpOut);

            await sharp(input)
              .resize(320, 240, { fit: 'cover', withoutEnlargement: true })
              .jpeg({ quality: 78 })
              .toFile(card1xJpgOut);

            count += 1;
          } catch (error) {
            console.warn(`Skipping ${path.basename(input)} (card 1x variant): ${error.message}`);
          }
        }

        // Lower quality than the 1x variant on purpose. This file is only ever
        // served to high-DPI screens, where its 640x480 is displayed in a slot
        // about 315x236 CSS px, so every compression artifact is drawn at half
        // size and is correspondingly harder to see. PageSpeed flagged these as
        // the single biggest image cost on the homepage (around 298 KiB across
        // the encyclopedia cards alone), and dropping to q68 sheds roughly 29%
        // of that with no visible difference at the size they actually render.
        if (!(fs.existsSync(card2xWebpOut) && fs.existsSync(card2xJpgOut))) {
          try {
            await sharp(input)
              .resize(640, 480, { fit: 'cover', withoutEnlargement: true })
              .webp({ quality: 68 })
              .toFile(card2xWebpOut);

            await sharp(input)
              .resize(640, 480, { fit: 'cover', withoutEnlargement: true })
              .jpeg({ quality: 70 })
              .toFile(card2xJpgOut);

            count += 1;
          } catch (error) {
            console.warn(`Skipping ${path.basename(input)} (card 2x variant): ${error.message}`);
          }
        }
      }
    }
  }

  console.log(`Generated ${count} thumbnail variants`);
}

generateThumbs().catch((error) => {
  console.error(error);
  process.exit(1);
});

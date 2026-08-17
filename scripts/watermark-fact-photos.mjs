import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Stamps every built fact photo (gallery grid, lightbox, the individual
// /facts/:slug/ page, homepage strip, Pack, and the og:image social preview
// all serve the same file - see imagePathFor in src/lib/data/factImages.js)
// with the same "beastlyfacts.com" pill used on the tank-setup infographics
// (scripts/add-watermark.mjs). Deliberately runs against dist/assets/facts/
// AFTER `vite build` has copied public/ over, not against public/assets/facts/
// itself - the repo's source photos stay clean, only the built site ships
// stamped ones. Since dist/ is emptied and rebuilt every run (vite.config.js
// build.emptyOutDir), there's no "already watermarked" state to track: every
// build starts from the untouched originals and stamps them fresh.
const targetDir = path.join(rootDir, 'dist/assets/facts');

const supported = new Set(['.jpg', '.jpeg', '.webp']);

function collectImages(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const ext = path.extname(entry.name);
    if (entry.isDirectory()) {
      collectImages(full, results);
    } else if (supported.has(ext.toLowerCase())) {
      // Skip the generated -thumb tier (see generate-thumbnails.js) - the
      // gallery grid is the one place these render small enough that the
      // pill crowds out the actual photo, so only the full-size original
      // gets stamped.
      const baseName = path.basename(entry.name, ext);
      if (baseName.endsWith('-thumb')) continue;
      results.push(full);
    }
  }
  return results;
}

async function watermark(absPath) {
  const image = sharp(absPath);
  const meta = await image.metadata();

  const fontSize = Math.max(10, Math.round(meta.width * 0.018));
  const paddingX = Math.round(fontSize * 0.9);
  const paddingY = Math.round(fontSize * 0.55);
  const text = 'beastlyfacts.com';
  const textWidth = Math.round(text.length * fontSize * 0.58);
  const pillWidth = textWidth + paddingX * 2;
  const pillHeight = fontSize + paddingY * 2;
  const margin = Math.max(2, Math.round(meta.width * 0.015));

  const svg = `
    <svg width="${pillWidth}" height="${pillHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${pillWidth}" height="${pillHeight}" rx="${pillHeight / 2}" fill="black" fill-opacity="0.45" />
      <text x="${pillWidth / 2}" y="${pillHeight / 2}" text-anchor="middle" dominant-baseline="central"
        font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="${fontSize}"
        fill="white" fill-opacity="0.85">${text}</text>
    </svg>`;

  const composed = image.composite([{
    input: Buffer.from(svg),
    left: Math.max(0, meta.width - pillWidth - margin),
    top: Math.max(0, meta.height - pillHeight - margin),
  }]);

  // Unlike add-watermark.mjs (which only ever touches .jpg infographics and
  // hardcodes .jpeg()), this runs over both the plain .jpg originals and the
  // generated -thumb.webp tier, so it has to keep whichever format the file
  // already had rather than forcing one - a .webp thumb re-encoded as jpeg
  // bytes under a .webp name breaks on decode.
  const ext = path.extname(absPath).toLowerCase();
  const buffer = ext === '.webp'
    ? await composed.webp({ quality: 82 }).toBuffer()
    : await composed.jpeg({ quality: 85 }).toBuffer();

  fs.writeFileSync(absPath, buffer);
}

async function main() {
  const files = collectImages(targetDir);
  if (files.length === 0) {
    console.log('No built fact photos found under dist/assets/facts/ - skipping watermark step.');
    return;
  }

  let count = 0;
  for (const file of files) {
    try {
      await watermark(file);
      count += 1;
    } catch (error) {
      console.warn(`Skipping ${path.relative(rootDir, file)}: ${error.message}`);
    }
  }
  console.log(`Watermarked ${count}/${files.length} built fact photos in dist/assets/facts/.`);
}

main();

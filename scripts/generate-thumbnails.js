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
];

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

    for (const input of files) {
      const ext = path.extname(input);
      const baseName = path.basename(input, ext);
      if (baseName.endsWith('-thumb')) continue;

      const base = input.slice(0, -ext.length);
      const webpOut = `${base}-thumb.webp`;
      const jpgOut = `${base}-thumb.jpg`;

      if (fs.existsSync(webpOut) && fs.existsSync(jpgOut)) continue;

      try {
        await sharp(input)
          .resize(240, 240, { fit: 'cover', withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(webpOut);

        await sharp(input)
          .resize(240, 240, { fit: 'cover', withoutEnlargement: true })
          .jpeg({ quality: 82 })
          .toFile(jpgOut);

        count += 1;
      } catch (error) {
        console.warn(`Skipping ${path.basename(input)}: ${error.message}`);
      }
    }
  }

  console.log(`Generated ${count} thumbnail variants`);
}

generateThumbs().catch((error) => {
  console.error(error);
  process.exit(1);
});

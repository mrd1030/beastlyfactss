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

async function generateThumbs() {
  let count = 0;

  for (const dir of assetDirs) {
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter((file) => supported.has(path.extname(file).toLowerCase()));

    for (const file of files) {
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      if (baseName.endsWith('-thumb')) continue;

      const input = path.join(dir, file);
      const base = file.replace(ext, '');
      const webpOut = path.join(dir, `${base}-thumb.webp`);
      const jpgOut = path.join(dir, `${base}-thumb.jpg`);

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
        console.warn(`Skipping ${file}: ${error.message}`);
      }
    }
  }

  console.log(`Generated ${count} thumbnail variants`);
}

generateThumbs().catch((error) => {
  console.error(error);
  process.exit(1);
});

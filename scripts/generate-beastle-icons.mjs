// Builds the Beastle app icons in public/pwa/ from design/beastle-icon-source.jpg
// (the dragon over the B tile, 784x1168 portrait). Run by hand after
// replacing the source: node scripts/generate-beastle-icons.mjs
//
// Icons are square, so the art is centered on a square canvas in the
// source's own cream. Two framings:
//   any:      art fills about 80% of the height, for most launchers and iOS
//   maskable: art inside the central safe circle, because Android crops
//             icons to circles and squircles and would clip the claws
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = path.join(root, 'design/beastle-icon-source.jpg');
const BG = { r: 255, g: 250, b: 233 };

// Center of the artwork in the source and its height, measured from the
// non-background bounding box (x 174-609, y 254-907).
const CENTER_Y = 580;
const ART_HEIGHT = 653;

async function square(side) {
  const meta = await sharp(SOURCE).metadata();
  const top = Math.max(0, Math.round(CENTER_Y - side / 2));
  const height = Math.min(side, meta.height - top);
  const padX = Math.max(0, Math.round((side - meta.width) / 2));
  return sharp(SOURCE)
    .extract({ left: 0, top, width: meta.width, height })
    .extend({ left: padX, right: side - meta.width - padX, top: 0, bottom: side - height, background: BG })
    .flatten({ background: BG })
    .toBuffer();
}

const out = (name) => path.join(root, 'public/pwa', name);
const any = await square(Math.round(ART_HEIGHT / 0.8));
const maskable = await square(1000);

await sharp(any).resize(192, 192).png().toFile(out('beastle-192.png'));
await sharp(any).resize(512, 512).png().toFile(out('beastle-512.png'));
await sharp(any).resize(180, 180).png().toFile(out('beastle-apple-touch-180.png'));
await sharp(maskable).resize(512, 512).png().toFile(out('beastle-maskable-512.png'));
console.log('Beastle icons written to public/pwa/');

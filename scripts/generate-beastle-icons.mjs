// Draws the Beastle app icons (a 3x3 tile grid in the game's colors) into
// public/pwa/. Run by hand if the colors change: node scripts/generate-beastle-icons.mjs
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BG = '#FDF9F1';
const GREEN = '#154B3D';
const GOLD = '#D9A441';
const GRAY = '#A39B8C';
// Last row solved, like a finished Beastle.
const GRID = [GRAY, GOLD, GRAY, GOLD, GREEN, GOLD, GREEN, GREEN, GREEN];

// `inset` is the share of the canvas the grid may use: maskable icons keep
// everything inside the central safe zone, so their grid is smaller.
function svg(size, inset, rounded) {
  const area = size * inset;
  const gap = area * 0.06;
  const tile = (area - gap * 2) / 3;
  const start = (size - area) / 2;
  const r = tile * 0.16;
  const tiles = GRID.map((c, i) => {
    const x = start + (i % 3) * (tile + gap);
    const y = start + Math.floor(i / 3) * (tile + gap);
    return `<rect x="${x}" y="${y}" width="${tile}" height="${tile}" rx="${r}" fill="${c}"/>`;
  }).join('');
  const bgR = rounded ? size * 0.22 : 0;
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${bgR}" fill="${BG}"/>${tiles}</svg>`);
}

const out = (name) => path.join(root, 'public/pwa', name);
await sharp(svg(192, 0.7, false)).png().toFile(out('beastle-192.png'));
await sharp(svg(512, 0.7, false)).png().toFile(out('beastle-512.png'));
await sharp(svg(512, 0.56, false)).png().toFile(out('beastle-maskable-512.png'));
await sharp(svg(180, 0.7, false)).png().toFile(out('beastle-apple-touch-180.png'));
console.log('Beastle icons written to public/pwa/');

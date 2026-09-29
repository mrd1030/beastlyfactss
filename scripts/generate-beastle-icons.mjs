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
// Link preview for /beastle/ (og:image, 1200x630): the icon art on the
// left, the name, a line of copy and a solved tile row on the right.
const W = 1200;
const H = 630;
const GREEN = '#154B3D';
const GOLD = '#D9A441';
const GRAY = '#C9C0AF';
const rows = [[GRAY, GOLD, GRAY, GRAY, GOLD, GRAY, GRAY], [GREEN, GREEN, GRAY, GOLD, GRAY, GREEN, GRAY], [GREEN, GREEN, GREEN, GREEN, GREEN, GREEN, GREEN]];
const tile = 52;
const gap = 10;
const tilesSvg = rows.map((row, r) => row.map((c, i) =>
  `<rect x="${600 + i * (tile + gap)}" y="${370 + r * (tile + gap)}" width="${tile}" height="${tile}" rx="10" fill="${c}"/>`).join('')).join('');
const text = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <text x="600" y="215" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="112" fill="#1D3226">Beastle</text>
  <text x="604" y="285" font-family="Segoe UI, Arial, sans-serif" font-weight="600" font-size="40" fill="#5C6B60">The daily animal word game</text>
  <text x="604" y="335" font-family="Segoe UI, Arial, sans-serif" font-weight="600" font-size="30" fill="#B5491B">Guess the hidden animal in six tries</text>
  ${tilesSvg}
</svg>`;
// Edges feathered so the source's faint background gradient fades into
// the flat canvas instead of showing a box.
const feather = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="470" height="470">
  <defs><filter id="f"><feGaussianBlur stdDeviation="10"/></filter></defs>
  <rect x="22" y="22" width="426" height="426" rx="30" fill="#fff" filter="url(#f)"/>
</svg>`);
const art = await sharp(any).resize(470, 470).ensureAlpha()
  .composite([{ input: feather, blend: 'dest-in' }])
  .png().toBuffer();
// Background taken from the art's own corner, so no box shows around it.
const { data: corner } = await sharp(any).extract({ left: 2, top: 2, width: 1, height: 1 }).raw().toBuffer({ resolveWithObject: true });
await sharp({ create: { width: W, height: H, channels: 3, background: { r: corner[0], g: corner[1], b: corner[2] } } })
  .composite([{ input: art, left: 80, top: 80 }, { input: Buffer.from(text), left: 0, top: 0 }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(root, 'public/assets/og/beastle.jpg'));

console.log('Beastle icons and public/assets/og/beastle.jpg written');

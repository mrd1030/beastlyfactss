// Builds the Critter Keeper link preview, public/assets/og/critter-keeper.jpg
// (1200x630), from the game's own pixel sprites, so the preview always
// matches the dragon players see. Run by hand after changing the sprites:
// node scripts/generate-critter-og.mjs
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// The sprite modules import each other through the app's '@' alias, so
// bundle them for Node first.
const bundled = await build({
  stdin: {
    contents: "export * from '@/lib/critterKeeper/sprites/dragon'; export { itemSprite, ITEM_PAL } from '@/lib/critterKeeper/sprites/items';",
    resolveDir: root,
    loader: 'js',
  },
  bundle: true,
  format: 'esm',
  platform: 'node',
  write: false,
  alias: { '@': path.join(root, 'src') },
});
const mod = await import(`data:text/javascript;base64,${Buffer.from(bundled.outputFiles[0].text).toString('base64')}`);

const hex = (c) => [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)];

// Paint a sprite grid into an RGBA buffer at 1 pixel per cell.
function raster(grid, pal) {
  const h = grid.length;
  const w = grid[0].length;
  const buf = Buffer.alloc(w * h * 4);
  grid.forEach((row, y) => row.forEach((k, x) => {
    if (!k || !pal[k]) return;
    const [r, g, b] = hex(pal[k]);
    buf.set([r, g, b, 255], (y * w + x) * 4);
  }));
  return sharp(buf, { raw: { width: w, height: h, channels: 4 } });
}

const SCALE = 9;
const up = async (img, w, h) => img.resize(w * SCALE, h * SCALE, { kernel: 'nearest' }).png().toBuffer();

const dragon = mod.buildDragon({ pose: 'idle' });
const rock = mod.itemSprite('platform');
const dragonPng = await up(raster(dragon, mod.dragonPalette('normal')), dragon[0].length, dragon.length);
const rockPng = await up(raster(rock, mod.ITEM_PAL), rock[0].length, rock.length);

// Dragon standing on the basking stack: his feet (row 29) on its top (row 5).
const rockX = 70;
const rockY = 630 - rock.length * SCALE + 30;
const dragonX = rockX + (rock[0].length * SCALE - dragon[0].length * SCALE) / 2 + 20;
const dragonY = rockY + 5 * SCALE - 30 * SCALE;

const W = 1200;
const H = 630;
const text = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <text x="500" y="250" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="88" fill="#1D3226">Critter Keeper</text>
  <text x="504" y="316" font-family="Segoe UI, Arial, sans-serif" font-weight="600" font-size="40" fill="#5C6B60">Raise a virtual bearded dragon</text>
  <text x="504" y="370" font-family="Segoe UI, Arial, sans-serif" font-weight="600" font-size="30" fill="#B5491B">Real care rules, straight from our guides</text>
</svg>`;

await sharp({ create: { width: W, height: H, channels: 3, background: { r: 239, g: 230, b: 210 } } })
  .composite([
    { input: rockPng, left: Math.round(rockX), top: Math.round(rockY) },
    { input: dragonPng, left: Math.round(dragonX), top: Math.round(dragonY) },
    { input: Buffer.from(text), left: 0, top: 0 },
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(root, 'public/assets/og/critter-keeper.jpg'));

console.log('public/assets/og/critter-keeper.jpg written');

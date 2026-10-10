// Crop check for pin cards. Lays out the photo area of every card in a spec,
// the 2:3 pin and the 4x5 feed card side by side, one row per card with its
// name, so a whole batch can be checked by eye in one image. Run it after
// generate-pins.mjs (both sizes) and before upload-pins.mjs. A row whose
// photo loses the animal gets a "focusY" in the spec and a re-render.
//
// Usage:
//   node scripts/pin-crop-sheet.mjs <spec.json> [out.jpg]
// Writes social-batches/pins/_crop-check.jpg unless an output path is given.
import fs from 'node:fs';
import sharp from 'sharp';

const [specPath, outPath = 'social-batches/pins/_crop-check.jpg'] = process.argv.slice(2);
if (!specPath) {
  console.error('usage: node scripts/pin-crop-sheet.mjs <spec.json> [out.jpg]');
  process.exit(1);
}
const specs = JSON.parse(fs.readFileSync(specPath, 'utf8'));

// Photo heights, matching generate-pins.mjs: photo cards fill the top,
// layout panels get a strip.
const area = (spec, feed) => (spec.layout ? (feed ? 290 : 520) : (feed ? 700 : 940));
const ROW = 220;
const LABEL = 260;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const tiles = [];
const missing = [];
let width = 0;
for (const [i, spec] of specs.entries()) {
  const top = i * ROW;
  tiles.push({ input: Buffer.from(`<svg width="${LABEL}" height="${ROW}" xmlns="http://www.w3.org/2000/svg"><text x="8" y="${ROW / 2}" font-family="sans-serif" font-size="18" fill="#222">${esc(spec.out)}</text></svg>`), left: 0, top });
  let left = LABEL;
  for (const feed of [false, true]) {
    const file = `social-batches/pins/${spec.out}${feed ? '-4x5' : ''}.jpg`;
    if (!fs.existsSync(file)) { missing.push(file); continue; }
    const h = area(spec, feed);
    const w = Math.round(1000 * ((ROW - 10) / h));
    tiles.push({ input: await sharp(file).extract({ left: 0, top: 0, width: 1000, height: h }).resize(w, ROW - 10).toBuffer(), left, top: top + 5 });
    left += w + 10;
  }
  width = Math.max(width, left);
}
await sharp({ create: { width, height: specs.length * ROW, channels: 3, background: '#fff' } })
  .composite(tiles).jpeg({ quality: 80 }).toFile(outPath);
if (missing.length) console.log(`not rendered: ${missing.join(', ')}`);
console.log(`${specs.length} cards in ${outPath}`);

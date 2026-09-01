// Composes 1000x1500 (2:3) Pinterest pins from existing site assets: the
// photo fills the top, a cream band below carries the title in the site's own
// display face, and the domain sits at the foot in the brand orange. Nothing
// is fetched and no new photography is needed; every pin is derived from an
// image already shipped with the site.
//
// Fonts: librsvg resolves families through fontconfig, so the site's variable
// woff2 faces are instanced to static TTFs first (Fredoka-SemiBold for
// titles, Nunito-Bold for the kicker and domain) and dropped in ~/.fonts.
// A session that has not done that falls back to DejaVu, which is legible
// but off-brand - regenerate after registering the fonts.
//
// Usage:
//   node scripts/generate-pins.mjs <spec.json>
// where spec.json is an array of:
//   { "out": "bearded-dragon-shopping-list",   -> public/assets/pins/<out>.jpg
//     "image": "public/assets/images/....jpg", -> source photo (any aspect)
//     "kicker": "CARE GUIDE",                  -> small orange eyebrow line
//     "title": "The Buy-Once Bearded Dragon Setup" }
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const W = 1000;
const H = 1500;
const PHOTO_H = 940;
// The site's light theme, mirrored: warm cream ground, deep green ink,
// the deepened brand orange used for links and accents.
const CREAM = '#F9F1E1';
const INK = '#1D3226';
const ORANGE = '#B5491B';

const specPath = process.argv[2];
if (!specPath) {
  console.error('usage: node scripts/generate-pins.mjs <spec.json>');
  process.exit(1);
}
const specs = JSON.parse(fs.readFileSync(specPath, 'utf8'));
const outDir = 'public/assets/pins';
fs.mkdirSync(outDir, { recursive: true });

// Greedy word wrap against an estimated average glyph width. Fredoka is a
// rounded geometric face, so 0.58em per character holds up well enough for
// three-line titles; anything that would need a fourth line drops the font
// size a step instead.
function layoutTitle(title) {
  for (const size of [76, 68, 60, 52]) {
    const maxChars = Math.floor((W - 160) / (size * 0.58));
    const words = title.split(' ');
    const lines = [''];
    for (const w of words) {
      const probe = lines[lines.length - 1] ? lines[lines.length - 1] + ' ' + w : w;
      if (probe.length <= maxChars) lines[lines.length - 1] = probe;
      else lines.push(w);
    }
    if (lines.length <= 3) return { size, lines };
  }
  return { size: 52, lines: [title.slice(0, 60)] };
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

for (const spec of specs) {
  const { size, lines } = layoutTitle(spec.title);
  const lineHeight = size * 1.18;
  const titleTop = PHOTO_H + 150;
  const titleSvg = lines
    .map((l, i) => `<text x="80" y="${titleTop + i * lineHeight}" font-family="Fredoka-SemiBold" font-size="${size}" fill="${INK}">${esc(l)}</text>`)
    .join('\n');

  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="${PHOTO_H}" width="${W}" height="${H - PHOTO_H}" fill="${CREAM}"/>
    <rect x="0" y="${PHOTO_H}" width="${W}" height="14" fill="${ORANGE}"/>
    <text x="80" y="${PHOTO_H + 78}" font-family="Nunito-Bold" font-size="30" letter-spacing="6" fill="${ORANGE}">${esc(spec.kicker.toUpperCase())}</text>
    ${titleSvg}
    <text x="80" y="${H - 62}" font-family="Nunito-Bold" font-size="34" fill="${ORANGE}">BeastlyFacts.com</text>
  </svg>`;

  const photo = await sharp(spec.image)
    .resize(W, PHOTO_H, { fit: 'cover', position: 'attention' })
    .toBuffer();

  await sharp({ create: { width: W, height: H, channels: 3, background: CREAM } })
    .composite([
      { input: photo, top: 0, left: 0 },
      { input: Buffer.from(svg), top: 0, left: 0 },
    ])
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(path.join(outDir, `${spec.out}.jpg`));

  const kb = Math.round(fs.statSync(path.join(outDir, `${spec.out}.jpg`)).size / 1024);
  console.log(`pin: ${spec.out}.jpg (${size}px title, ${lines.length} lines, ${kb}KB)`);
}
console.log(`${specs.length} pins in ${outDir}`);

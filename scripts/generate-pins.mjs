// Composes 1000x1500 (2:3) Pinterest pins from existing site assets: the
// photo fills the top, a cream band below carries the title in the site's own
// display face, and the domain sits at the foot in the brand orange. Nothing
// is fetched and no new photography is needed; every pin is derived from an
// image already shipped with the site.
//
// Fonts: librsvg resolves families through fontconfig, so the site's variable
// woff2 faces are instanced to static TTFs first (Schibsted-Bold for
// titles, Atkinson-Bold for the kicker and domain) and dropped in ~/.fonts.
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
//
// Two text-forward layouts sit beside that photo card, for care content that
// reads better as a reference than as a picture. Both shrink the photo to a
// strip and give the panel to a list. Cost tokens (%%setup:chinchilla%%) in
// any field resolve against the live cost sheets, so a pin never quotes a
// price the guide has since changed.
//   { "layout": "checklist", "out", "image", "kicker", "title",
//     "items": ["Water thermometer", ...],      -> 5 to 7 rows, names only
//     "cta": "Sizes, temps and costs at" }       -> footer, domain appended
//   { "layout": "cost", "out", "image", "kicker", "title",
//     "stat": "%%setup:chinchilla%%",            -> the one number shown
//     "statLabel": "to set up, before the chinchilla itself",
//     "items": ["The cage", ...],                -> 4 or 6, no prices
//     "cta": "Every price, line by line, at" }
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { resolveCostTokens } from '../src/lib/costs.js';

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

// Greedy word wrap against an estimated average glyph width. 0.58em per
// character holds up well enough for Schibsted Grotesk at title sizes;
// anything that would need a fourth line drops the font size a step instead.
function layoutTitle(title, sizes = [76, 68, 60, 52], maxLines = 3) {
  for (const size of sizes) {
    const maxChars = Math.floor((W - 160) / (size * 0.58));
    const words = title.split(' ');
    const lines = [''];
    for (const w of words) {
      const probe = lines[lines.length - 1] ? lines[lines.length - 1] + ' ' + w : w;
      if (probe.length <= maxChars) lines[lines.length - 1] = probe;
      else lines.push(w);
    }
    if (lines.length <= maxLines) return { size, lines };
  }
  return { size: sizes[sizes.length - 1], lines: [title.slice(0, 60)] };
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Checklist and cost pins: a 1000x520 photo strip, then the panel.
const STRIP_H = 520;

function panelHead(spec) {
  const { size, lines } = layoutTitle(spec.title, [68, 62, 56], 2);
  const lineHeight = size * 1.15;
  const top = STRIP_H + 160;
  const svg = `<rect x="0" y="${STRIP_H}" width="${W}" height="14" fill="${ORANGE}"/>
    <text x="80" y="${STRIP_H + 82}" font-family="Atkinson-Bold" font-size="30" letter-spacing="6" fill="${ORANGE}">${esc(spec.kicker.toUpperCase())}</text>
    ${lines.map((l, i) => `<text x="80" y="${top + i * lineHeight}" font-family="Schibsted-Bold" font-size="${size}" fill="${INK}">${esc(l)}</text>`).join('\n')}`;
  return { svg, bottom: top + (lines.length - 1) * lineHeight, size, lines };
}

const footer = (cta) => `<text x="80" y="${H - 62}" font-family="Atkinson-Bold" font-size="34" fill="${INK}">${esc(cta)} <tspan fill="${ORANGE}">BeastlyFacts.com</tspan></text>`;

function checklistSvg(spec) {
  const head = panelHead(spec);
  const rowH = 84;
  const first = head.bottom + 100;
  const rows = spec.items.map((item, i) => {
    const y = first + i * rowH;
    return `<rect x="80" y="${y - 36}" width="44" height="44" rx="8" fill="none" stroke="${ORANGE}" stroke-width="5"/>
    <path d="M90 ${y - 14} l10 10 l20 -22" fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="152" y="${y}" font-family="Atkinson-Bold" font-size="40" fill="${INK}">${esc(item)}</text>`;
  });
  return { svg: `${head.svg}\n${rows.join('\n')}\n${footer(spec.cta)}`, note: `${spec.items.length} rows` };
}

function costSvg(spec) {
  const head = panelHead(spec);
  const statY = head.bottom + 150;
  const half = Math.ceil(spec.items.length / 2);
  const rows = spec.items.map((item, i) => {
    const col = i < half ? 0 : 1;
    const y = statY + 236 + (i % half) * 84;
    const x = 80 + col * 430;
    return `<circle cx="${x + 10}" cy="${y - 13}" r="9" fill="${ORANGE}"/>
    <text x="${x + 36}" y="${y}" font-family="Atkinson-Bold" font-size="38" fill="${INK}">${esc(item)}</text>`;
  });
  const svg = `${head.svg}
    <text x="80" y="${statY}" font-family="Schibsted-Bold" font-size="104" fill="${ORANGE}">${esc(spec.stat)}</text>
    <text x="80" y="${statY + 58}" font-family="Atkinson-Bold" font-size="34" fill="${INK}">${esc(spec.statLabel)}</text>
    <text x="80" y="${statY + 156}" font-family="Atkinson-Bold" font-size="30" letter-spacing="6" fill="${ORANGE}">WHERE IT GOES</text>
    ${rows.join('\n')}
    ${footer(spec.cta)}`;
  return { svg, note: `${spec.stat}, ${spec.items.length} items` };
}

async function renderPanel(spec, build) {
  const { svg, note } = build(spec);
  const strip = await sharp(spec.image)
    .resize(W, STRIP_H, { fit: 'cover', position: 'attention' })
    .toBuffer();
  const file = path.join(outDir, `${spec.out}.jpg`);
  await sharp({ create: { width: W, height: H, channels: 3, background: CREAM } })
    .composite([
      { input: strip, top: 0, left: 0 },
      { input: Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`), top: 0, left: 0 },
    ])
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(file);
  const kb = Math.round(fs.statSync(file).size / 1024);
  console.log(`pin: ${spec.out}.jpg (${spec.layout}, ${note}, ${kb}KB)`);
}

const LAYOUTS = { checklist: checklistSvg, cost: costSvg };

for (const raw of specs) {
  const spec = JSON.parse(resolveCostTokens(JSON.stringify(raw)));
  if (LAYOUTS[spec.layout]) {
    await renderPanel(spec, LAYOUTS[spec.layout]);
    continue;
  }
  const { size, lines } = layoutTitle(spec.title);
  const lineHeight = size * 1.18;
  const titleTop = PHOTO_H + 150;
  const titleSvg = lines
    .map((l, i) => `<text x="80" y="${titleTop + i * lineHeight}" font-family="Schibsted-Bold" font-size="${size}" fill="${INK}">${esc(l)}</text>`)
    .join('\n');

  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="${PHOTO_H}" width="${W}" height="${H - PHOTO_H}" fill="${CREAM}"/>
    <rect x="0" y="${PHOTO_H}" width="${W}" height="14" fill="${ORANGE}"/>
    <text x="80" y="${PHOTO_H + 78}" font-family="Atkinson-Bold" font-size="30" letter-spacing="6" fill="${ORANGE}">${esc(spec.kicker.toUpperCase())}</text>
    ${titleSvg}
    <text x="80" y="${H - 62}" font-family="Atkinson-Bold" font-size="34" fill="${ORANGE}">BeastlyFacts.com</text>
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

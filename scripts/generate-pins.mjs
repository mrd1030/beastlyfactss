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
//   { "out": "bearded-dragon-shopping-list",   -> social-batches/pins/<out>.jpg
//     "image": "public/assets/images/....jpg", -> source photo (any aspect)
//     "kicker": "CARE GUIDE",                  -> small orange eyebrow line
//     "title": "The Buy-Once Bearded Dragon Setup" }
//
// Two text-forward layouts sit beside that photo card, for care content that
// reads better as a reference than as a picture. Both shrink the photo to a
// strip and give the panel to a list. Neither carries a price: a pin keeps
// circulating for months after the guide's cost sheet moves, so the dollar
// figures stay on the page and the generator refuses any "$" or cost token.
//   { "layout": "checklist", "out", "image", "kicker", "title",
//     "items": ["Water thermometer", ...],      -> 5 to 7 rows, names only
//     "cta": "Sizes, temps and costs at" }       -> footer, domain appended
//   { "layout": "cost", "out", "image", "kicker", "title",
//     "hook": "The chinchilla is the cheap part.", -> a claim the guide makes
//     "items": ["The cage", ...],                -> 4 or 6, no prices
//     "cta": "Every price, line by line, at" }
//   { "layout": "numbered", ..., "items": [3 entries],
//     "more": "Plus the free one", "cta" }      -> fun facts, enrichment
//   { "layout": "legal", ..., "title": "Can You Own a Fennec Fox?",
//     "hook": "It depends on your state.", "items": [what the guide covers],
//     "cta" }                                    -> never the verdict
//   { "layout": "feeding", ..., "tiers": [{ "label": "Staple",
//     "foods": "Earthworms, nightcrawlers" }, ...], "cta" }
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
// Cards render outside public/ so they never ride a site deploy: they go to
// the beastlyfacts-pins R2 bucket through scripts/upload-pins.mjs.
const outDir = 'social-batches/pins';
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

const label = (text, y) => `<text x="80" y="${y}" font-family="Atkinson-Bold" font-size="30" letter-spacing="6" fill="${ORANGE}">${esc(text.toUpperCase())}</text>`;

// An orange display line under the title (cost hook, legal answer-withheld).
function hookLines(text, top) {
  const fitSize = [64, 58, 52].find((s) => text.length <= Math.floor((W - 160) / (s * 0.58)));
  const hook = fitSize ? { size: fitSize, lines: [text] } : layoutTitle(text, [64, 58, 52], 2);
  const svg = hook.lines.map((l, i) => `<text x="80" y="${top + i * hook.size * 1.15}" font-family="Schibsted-Bold" font-size="${hook.size}" fill="${ORANGE}">${esc(l)}</text>`).join('\n');
  return { svg, bottom: top + (hook.lines.length - 1) * hook.size * 1.15 };
}

// The footer baseline sits at H - 62; a row below this line collides with it.
const PANEL_FLOOR = H - 128;

function checkRows(items, first, rowH = 84) {
  if (first + (items.length - 1) * rowH > PANEL_FLOOR) throw new Error(`${items.length} rows run into the footer, cut one`);
  return items.map((item, i) => {
    const y = first + i * rowH;
    return `<rect x="80" y="${y - 36}" width="44" height="44" rx="8" fill="none" stroke="${ORANGE}" stroke-width="5"/>
    <path d="M90 ${y - 14} l10 10 l20 -22" fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="152" y="${y}" font-family="Atkinson-Bold" font-size="40" fill="${INK}">${esc(item)}</text>`;
  }).join('\n');
}

function checklistSvg(spec) {
  const head = panelHead(spec);
  const rows = checkRows(spec.items, head.bottom + 100);
  return { svg: `${head.svg}\n${rows}\n${footer(spec.cta)}`, note: `${spec.items.length} rows` };
}

// Numbered: the first few entries of a longer list (fun facts, enrichment
// ideas), then a line saying what the page still holds.
function numberedSvg(spec) {
  const head = panelHead(spec);
  const rowH = 124;
  const first = head.bottom + 130;
  const rows = spec.items.map((item, i) => {
    const y = first + i * rowH;
    return `<circle cx="114" cy="${y - 14}" r="34" fill="${ORANGE}"/>
    <text x="114" y="${y}" text-anchor="middle" font-family="Schibsted-Bold" font-size="42" fill="${CREAM}">${i + 1}</text>
    <text x="176" y="${y}" font-family="Atkinson-Bold" font-size="40" fill="${INK}">${esc(item)}</text>`;
  }).join('\n');
  const moreY = first + spec.items.length * rowH + 10;
  const svg = `${head.svg}
    ${rows}
    <text x="80" y="${moreY}" font-family="Schibsted-Bold" font-size="44" fill="${ORANGE}">${esc(spec.more)}</text>
    ${footer(spec.cta)}`;
  return { svg, note: `${spec.items.length} of the list` };
}

// Legal: the question, never the verdict. Laws move, so the pin names what
// the guide settles and the answer stays on the page.
function legalSvg(spec) {
  const head = panelHead(spec);
  const hook = hookLines(spec.hook, head.bottom + 120);
  const dividerY = hook.bottom + 120;
  const svg = `${head.svg}
    ${hook.svg}
    ${label('The guide covers', dividerY)}
    ${checkRows(spec.items, dividerY + 90)}
    ${footer(spec.cta)}`;
  return { svg, note: `${spec.items.length} rows` };
}

// Feeding: food names by tier. Amounts and schedules stay on the page.
function wrapText(text, size, width = W - 160) {
  const maxChars = Math.floor(width / (size * 0.52));
  const lines = [''];
  for (const w of text.split(' ')) {
    const probe = lines[lines.length - 1] ? `${lines[lines.length - 1]} ${w}` : w;
    if (probe.length <= maxChars) lines[lines.length - 1] = probe;
    else lines.push(w);
  }
  return lines;
}

function feedingSvg(spec) {
  const head = panelHead(spec);
  let y = head.bottom + 110;
  const tiers = spec.tiers.map((tier) => {
    const lines = wrapText(tier.foods, 40);
    const out = `${label(tier.label, y)}
    ${lines.map((l, i) => `<text x="80" y="${y + 58 + i * 50}" font-family="Atkinson-Bold" font-size="40" fill="${INK}">${esc(l)}</text>`).join('\n')}`;
    y += 58 + (lines.length - 1) * 50 + 92;
    return out;
  }).join('\n');
  if (y - 92 > PANEL_FLOOR) throw new Error('tiers run into the footer, shorten the food lists');
  return { svg: `${head.svg}\n${tiers}\n${footer(spec.cta)}`, note: `${spec.tiers.length} tiers` };
}

function costSvg(spec) {
  const head = panelHead(spec);
  const hook = hookLines(spec.hook, head.bottom + 130);
  const dividerY = hook.bottom + 120;
  const half = Math.ceil(spec.items.length / 2);
  const rows = spec.items.map((item, i) => {
    const col = i < half ? 0 : 1;
    const y = dividerY + 84 + (i % half) * 84;
    const x = 80 + col * 430;
    return `<circle cx="${x + 10}" cy="${y - 13}" r="9" fill="${ORANGE}"/>
    <text x="${x + 36}" y="${y}" font-family="Atkinson-Bold" font-size="38" fill="${INK}">${esc(item)}</text>`;
  });
  const svg = `${head.svg}
    ${hook.svg}
    ${label('Where the money goes', dividerY)}
    ${rows.join('\n')}
    ${footer(spec.cta)}`;
  return { svg, note: `${spec.items.length} items` };
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

const LAYOUTS = { checklist: checklistSvg, cost: costSvg, numbered: numberedSvg, legal: legalSvg, feeding: feedingSvg };

for (const spec of specs) {
  if (LAYOUTS[spec.layout]) {
    const text = JSON.stringify({ ...spec, image: '', out: '' });
    if (/\$|%%/.test(text)) {
      console.error(`${spec.out}: pins carry no prices, remove the "$" or cost token`);
      process.exit(1);
    }
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

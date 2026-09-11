#!/usr/bin/env node
// Renders pages of a care package to JPEGs for the product page's carousel and
// lightbox, and page 1 to the cover image the hero shows as a book.
//
//   node scripts/render-care-package-previews.mjs hamster 2 6 7 19 26 29
//   node scripts/render-care-package-previews.mjs hamster cover
//
// Output: public/assets/care-packages/<id>/page-<N>.jpg (or cover.jpg for
// page 1), 1224px wide, the full letter page. The page numbers are the PDF's
// own (the cover is page 1), so the list doubles as a record of which pages
// were chosen; keep it in the `previews` entry in
// src/lib/data/carePackageCopy.js.
//
// Paid pages are guarded in the file itself. Any page from the first care
// guide page onward keeps its top third sharp (the section title, the intro,
// the start of the first table) and is blurred and faded below that with a
// one-line caption, so the lightbox shows the layout and the quality of a
// page without handing over its numbers. The cover, the contents page and the
// other pages inside the free sample are rendered whole; the cut is read from
// the package's own table of contents, the same way the sample builder finds
// it. Nothing sharp below the cut ever reaches public/, so there is no
// full-resolution original to fetch.
//
// Why from the source HTML and not the PDF: nothing here can rasterize a PDF,
// while the same headless Chromium that prints the PDF can screenshot the
// pages the PDF is printed from. See scripts/lib/carePackageSource.mjs.
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';
import { ASSET_DIR, LAUNCH_ARGS, findChrome, writeRenderCopy } from './lib/carePackageSource.mjs';

const OUT_WIDTH = 1224;
// Where the sharp part of a guarded page ends, as a fraction of its height,
// and how tall the fade between sharp and blurred is.
const SHARP_FRACTION = 0.22;
const FADE_PX = 120;

// Bakes the guard into a full-page PNG: the original on top for the sharp
// part, the blurred copy with a gradient alpha below it, a white veil so the
// blur reads as faded rather than smeared, and the caption. The ramps are raw
// single-channel buffers rather than SVG gradients, which librsvg rendered
// flat here.
function ramp(width, height, from, to, valueAt) {
  const buf = Buffer.alloc(width * height);
  for (let y = 0; y < height; y += 1) {
    const t = Math.min(1, Math.max(0, (y - from) / (to - from)));
    buf.fill(valueAt(t), y * width, (y + 1) * width);
  }
  return buf;
}

async function guardPage(png) {
  const { width, height } = await sharp(png).metadata();
  const cut = Math.round(height * SHARP_FRACTION);
  const raw = { raw: { width, height, channels: 1 } };
  const blurred = await sharp(png).blur(22).removeAlpha().png().toBuffer();
  const blurAlpha = ramp(width, height, cut - FADE_PX / 2, cut + FADE_PX / 2, t => Math.round(255 * t));
  const blurredWithAlpha = await sharp(blurred).joinChannel(blurAlpha, raw).png().toBuffer();
  const veilAlpha = ramp(width, height, cut - FADE_PX / 2, cut + FADE_PX, t => Math.round(255 * 0.5 * t));
  const veil = await sharp({ create: { width, height, channels: 3, background: '#ffffff' } })
    .joinChannel(veilAlpha, raw).png().toBuffer();
  const caption = Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(${width / 2} ${cut + FADE_PX + 110})">
      <rect x="-330" y="-34" width="660" height="68" rx="34" fill="#ffffff" fill-opacity="0.96" stroke="#000000" stroke-opacity="0.15"/>
      <text x="0" y="9" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="26" font-weight="700" fill="#2a2420">Preview. The full page is in the package.</text>
    </g></svg>`);
  return sharp(png).composite([{ input: blurredWithAlpha }, { input: veil }, { input: caption }]).png().toBuffer();
}

const [id, ...pageArgs] = process.argv.slice(2);
const pages = pageArgs.map(a => (a === 'cover' ? 1 : Number(a))).filter(n => Number.isInteger(n) && n > 0);
if (!id || pages.length === 0) {
  console.error('usage: node scripts/render-care-package-previews.mjs <package-id> <page|cover> [...]');
  process.exit(1);
}

const { url, cleanup } = writeRenderCopy(id, 'preview');
const outDir = join(ASSET_DIR, id);
mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, executablePath: findChrome() || undefined, args: LAUNCH_ARGS });
try {
  const page = await browser.newPage();
  // 8.5in at 96dpi is 816px; 1.5x gives the 1224px the carousel wants without
  // a resize step softening the type.
  await page.setViewport({ width: 900, height: 1100, deviceScaleFactor: 1.5 });
  await page.goto(url, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);

  const handles = await page.$$('.page');
  // The first care guide page, from the third table of the contents page.
  // Everything before it is in the free sample and is rendered whole.
  const firstGuidePage = await page.evaluate(() => {
    const tables = document.querySelectorAll('.toc table');
    return Number(tables[2]?.querySelector('tr')?.lastElementChild?.textContent.trim()) || 3;
  });
  console.log(`${handles.length} pages in ${id}.html, guard from page ${firstGuidePage}`);

  for (const n of pages) {
    const el = handles[n - 1];
    if (!el) {
      console.error(`page ${n} does not exist`);
      process.exitCode = 1;
      continue;
    }
    await el.evaluate(e => e.scrollIntoView());
    let png = await el.screenshot({ type: 'png' });
    const guarded = n >= firstGuidePage;
    if (guarded) png = await guardPage(png);
    const name = n === 1 ? 'cover.jpg' : `page-${n}.jpg`;
    const info = await sharp(png)
      .resize({ width: OUT_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toFile(join(outDir, name));
    console.log(`wrote public/assets/care-packages/${id}/${name}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)}KB${guarded ? '  guarded' : ''}`);
  }
} finally {
  await browser.close();
  cleanup();
}

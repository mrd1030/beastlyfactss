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
// Why from the source HTML and not the PDF: nothing here can rasterize a PDF,
// while the same headless Chromium that prints the PDF can screenshot the
// pages the PDF is printed from. See scripts/lib/carePackageSource.mjs.
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';
import { ASSET_DIR, LAUNCH_ARGS, findChrome, writeRenderCopy } from './lib/carePackageSource.mjs';

const OUT_WIDTH = 1224;

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
  console.log(`${handles.length} pages in ${id}.html`);

  for (const n of pages) {
    const el = handles[n - 1];
    if (!el) {
      console.error(`page ${n} does not exist`);
      process.exitCode = 1;
      continue;
    }
    await el.evaluate(e => e.scrollIntoView());
    const png = await el.screenshot({ type: 'png' });
    const name = n === 1 ? 'cover.jpg' : `page-${n}.jpg`;
    const info = await sharp(png)
      .resize({ width: OUT_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toFile(join(outDir, name));
    console.log(`wrote public/assets/care-packages/${id}/${name}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)}KB`);
  }
} finally {
  await browser.close();
  cleanup();
}

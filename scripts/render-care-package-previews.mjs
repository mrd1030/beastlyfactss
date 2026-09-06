#!/usr/bin/env node
// Renders interior pages of a care package to JPEGs for the product page's
// preview carousel.
//
//   node scripts/render-care-package-previews.mjs hamster 6 7 19 26 29
//
// Output: public/assets/care-packages/<id>/page-<N>.jpg, one per page number,
// 1224px wide, the full letter page. The page numbers are the PDF's own page
// numbers (the cover is page 1), so the list doubles as a record of which
// pages were chosen; keep it in the `previews` entry in
// src/lib/data/carePackageCopy.js.
//
// Why from the source HTML and not the PDF: nothing here can rasterize a PDF,
// while the same headless Chromium that prints the PDF can screenshot the
// pages the PDF is printed from. The fonts are inlined first, the same way
// content/CAREPACKAGE Guides/source/_render.mjs does it, because a cloud
// session's Chromium has no network and the Google Fonts @import would
// otherwise fail silently into a fallback face.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE_DIR = join(ROOT, 'content', 'CAREPACKAGE Guides', 'source');
const FONT_CACHE = join(SOURCE_DIR, '.fonts');
const OUT_WIDTH = 1224;

const [id, ...pageArgs] = process.argv.slice(2);
const pages = pageArgs.map(Number).filter(n => Number.isInteger(n) && n > 0);
if (!id || pages.length === 0) {
  console.error('usage: node scripts/render-care-package-previews.mjs <package-id> <page> [<page> ...]');
  process.exit(1);
}

const src = join(SOURCE_DIR, `${id}.html`);
if (!existsSync(src)) {
  console.error(`No source at ${src}`);
  process.exit(1);
}

function tryGlob(pattern) {
  try {
    return execFileSync('bash', ['-lc', `ls -d ${pattern} 2>/dev/null`], { encoding: 'utf8' })
      .split('\n').filter(Boolean);
  } catch {
    return [];
  }
}

const CHROME = [
  process.env.CHROME_BIN,
  ...tryGlob('/opt/pw-browsers/chromium-*/chrome-linux/chrome'),
].filter(Boolean).find(p => existsSync(p));

// Same as _render.mjs: fetch the @import once, keep the latin faces, inline
// each woff2 as a data URI in a render copy. The source file is not touched.
function inlineFonts(html) {
  const importMatch = html.match(/@import url\('([^']+)'\);/);
  if (!importMatch) return html;
  mkdirSync(FONT_CACHE, { recursive: true });
  const cssPath = join(FONT_CACHE, 'fonts.css');
  if (!existsSync(cssPath)) {
    const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
    execFileSync('curl', ['-sS', '-m', '60', '-A', ua, importMatch[1], '-o', cssPath]);
  }
  const css = readFileSync(cssPath, 'utf8');
  const blocks = css.split('@font-face').slice(1).map(b => '@font-face' + b.split('}')[0] + '}');
  const latin = blocks.filter(b => /unicode-range:[^;]*U\+0000-00FF/.test(b));
  const out = latin.map(block => {
    const url = block.match(/url\((https:\/\/[^)]+)\)/);
    if (!url) return null;
    const file = join(FONT_CACHE, url[1].split('/').pop());
    if (!existsSync(file)) execFileSync('curl', ['-sS', '-m', '60', url[1], '-o', file]);
    const b64 = readFileSync(file).toString('base64');
    return block.replace(/url\(https:\/\/[^)]+\)/, `url(data:font/woff2;base64,${b64})`);
  }).filter(Boolean);
  console.log(`inlined ${out.length} latin font faces`);
  return html.replace(importMatch[0], out.join('\n'));
}

// Cover art in the source is a relative path into public/assets/guides; make
// it absolute so the render copy, written next to the source, still finds it.
function absolutizeAssets(html) {
  return html.replace(/(src|href)="(\.\.\/)+public\/assets\//g, `$1="file://${ROOT}/public/assets/`)
    .replace(/(src|href)="\/assets\//g, `$1="file://${ROOT}/public/assets/`);
}

const html = absolutizeAssets(inlineFonts(readFileSync(src, 'utf8')));
const tmp = join(SOURCE_DIR, `.preview-${id}.html`);
writeFileSync(tmp, html);

const outDir = join(ROOT, 'public', 'assets', 'care-packages', id);
mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  executablePath: CHROME || undefined,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
});

try {
  const page = await browser.newPage();
  // 8.5in at 96dpi is 816px; 1.5x gives the 1224px the carousel wants without
  // a resize step softening the type.
  await page.setViewport({ width: 900, height: 1100, deviceScaleFactor: 1.5 });
  await page.goto(`file://${tmp}`, { waitUntil: 'load' });
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
    const dest = join(outDir, `page-${n}.jpg`);
    const info = await sharp(png)
      .resize({ width: OUT_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toFile(dest);
    console.log(`wrote public/assets/care-packages/${id}/page-${n}.jpg  ${info.width}x${info.height}  ${Math.round(info.size / 1024)}KB`);
  }
} finally {
  await browser.close();
  execFileSync('rm', ['-f', tmp]);
}

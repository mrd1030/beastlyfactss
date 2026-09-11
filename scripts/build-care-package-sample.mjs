#!/usr/bin/env node
// Builds the free sample PDF for a care package.
//
//   node scripts/build-care-package-sample.mjs hamster
//
// Output: public/assets/care-packages/<id>/sample.pdf, and the number of
// source pages it carries on stdout as JSON, which goes into `samplePages` in
// src/lib/data/carePackages.js.
//
// What is in it: a generated title page with the package cover small in the
// middle, then the real pages 2 through the page before the first care guide
// page, from the same render copy the PDF is printed from. That is the
// contents page, how to use the package, the quick profile and the cost
// overview (plus the legal page on the packages that put it there), and not
// one page of the care guide, health triage, checklists or logs. The contents
// page is the point: it is the best single sales page in the package.
//
// The cut is read from the package's own table of contents (the first row of
// the Full Care Guide section), so it moves with the package when it is
// rebuilt. cover.jpg must exist first: run render-care-package-previews.mjs
// <id> cover.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';
import { ASSET_DIR, LAUNCH_ARGS, ROOT, findChrome, writeRenderCopy } from './lib/carePackageSource.mjs';

const id = process.argv[2];
if (!id) {
  console.error('usage: node scripts/build-care-package-sample.mjs <package-id>');
  process.exit(1);
}

const catalogText = readFileSync(join(ROOT, 'src', 'lib', 'data', 'carePackages.js'), 'utf8');
const entry = catalogText.match(new RegExp(`  \\{\\n    id: '${id}',[\\s\\S]*?\\n  \\},\\n`));
if (!entry) throw new Error(`${id} is not in the catalog`);
const field = name => entry[0].match(new RegExp(`    ${name}: '([^']*)'`))?.[1];
const fieldNum = name => Number(entry[0].match(new RegExp(`    ${name}: (\\d+)`))?.[1]);
const animal = field('animal');
const name = field('name');
const price = field('price');
const pages = fieldNum('pages');

const outDir = join(ASSET_DIR, id);
const coverPath = join(outDir, 'cover.jpg');
if (!existsSync(coverPath)) throw new Error(`Render the cover first: node scripts/render-care-package-previews.mjs ${id} cover`);
const coverSmall = await sharp(coverPath).resize({ width: 620 }).jpeg({ quality: 78, mozjpeg: true }).toBuffer();
const coverDataUri = `data:image/jpeg;base64,${coverSmall.toString('base64')}`;

const { url, cleanup } = writeRenderCopy(id, 'sample');
const browser = await puppeteer.launch({ headless: true, executablePath: findChrome() || undefined, args: LAUNCH_ARGS });
try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);

  const result = await page.evaluate(({ animal, name, price, pages, id, coverDataUri }) => {
    const all = Array.from(document.querySelectorAll('.page'));
    // The contents page lists sections as .toc-label + table. The third table
    // is the Full Care Guide; its first row's last cell is that page number.
    const tables = Array.from(document.querySelectorAll('.toc table'));
    const firstGuideRow = tables[2]?.querySelector('tr');
    const firstGuidePage = Number(firstGuideRow?.lastElementChild?.textContent.trim());
    if (!Number.isInteger(firstGuidePage) || firstGuidePage < 3) return { error: 'could not read the Full Care Guide start page from the contents table' };
    const lastPage = firstGuidePage - 1;

    all.forEach((p, i) => { if (i >= lastPage) p.remove(); });

    const first = all[0];
    const foot = all[1].querySelector('.pagefoot');
    const included = Array.from(tables[0].querySelectorAll('tr td:first-child')).map(td => td.textContent.trim())
      .concat(Array.from(tables[1].querySelectorAll('tr td:first-child')).map(td => td.textContent.trim()));
    const listed = ['What’s inside'].concat(included).map(t => t.replace(/&amp;/g, '&'));
    const rest = pages - lastPage;
    first.className = 'page snug';
    first.removeAttribute('style');
    first.innerHTML = `
      <div class="eyebrow">Free sample</div>
      <h1 class="section-title">${name}</h1>
      <div class="section-sub">The first ${lastPage} pages of the ${pages}-page printable manual, free to keep.</div>
      <div style="display:flex;justify-content:center;margin:0.28in 0 0.3in;">
        <img src="${coverDataUri}" alt="${name} cover" style="width:3.1in;height:auto;border-radius:5px;box-shadow:0 12px 28px rgba(0,0,0,0.28);" />
      </div>
      <p style="margin:0 0 8pt;"><strong>In this sample:</strong> ${listed.join(', ')}. The contents page shows every one of the ${pages} pages, so you can see exactly what the full package covers before you buy it.</p>
      <p style="margin:0 0 8pt;"><strong>Not in this sample:</strong> the ${rest} pages that follow, which are the full care guide, the health section, the quick reference cards, and the owner tools, checklists and logs.</p>
      <p style="margin:0;"><strong>The full package</strong> is ${price} at <strong>beastlyfacts.com/care-packages/${id}/</strong>. One purchase, and every corrected edition is a free re-download from your library. The free ${animal.toLowerCase()} care guide it was built from is at beastlyfacts.com/guides/${id}/, and stays free.</p>
    `;
    if (foot) {
      // The footer is cloned from page 2, so its page number says 2.
      const clone = foot.cloneNode(true);
      Array.from(clone.querySelectorAll('*')).filter(el => el.children.length === 0 && el.textContent.trim() === '2')
        .forEach(el => { el.textContent = '1'; });
      first.appendChild(clone);
    }
    return { lastPage, kept: document.querySelectorAll('.page').length };
  }, { animal, name, price, pages, id, coverDataUri });

  if (result.error) throw new Error(result.error);

  // SAMPLE_DEBUG_PNG=/tmp/x.png screenshots the generated title page, since
  // nothing in a cloud session can rasterize the PDF to look at it.
  if (process.env.SAMPLE_DEBUG_PNG) {
    await page.setViewport({ width: 900, height: 1100, deviceScaleFactor: 1 });
    await (await page.$('.page')).screenshot({ path: process.env.SAMPLE_DEBUG_PNG });
  }

  await page.pdf({
    path: join(outDir, 'sample.pdf'),
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
  });
  const size = (await import('node:fs')).statSync(join(outDir, 'sample.pdf')).size;
  console.error(`wrote public/assets/care-packages/${id}/sample.pdf  ${result.kept} pages  ${Math.round(size / 1024)}KB`);
  console.log(JSON.stringify({ id, samplePages: result.lastPage }));
} finally {
  await browser.close();
  cleanup();
}

#!/usr/bin/env node
// Renders a care package source file to ../rebuilt/{Animal}_Care_Package_v{N}.pdf.
//
//   node source/_render.mjs ball-python "Ball Python" 1
//   node source/_render.mjs ball-python "Ball Python" 1 --measure
//
// Why this exists: TEMPLATE_GUIDE.md step 9 notes that a cloud session's
// Chromium has no internet, so the Google Fonts @import silently fails and the
// whole guide renders in a fallback face. This script downloads the woff2 files
// once, inlines them as @font-face in a RENDER COPY only, and leaves the source
// file's @import alone so it still previews correctly on a normal machine.
//
// --measure runs the overflow check from TEMPLATE_GUIDE.md instead of printing:
// it reports the free pixels above each page footer. Anything under 15 is too
// tight for print, and a negative number is content already being clipped.

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(here, '..');
const fontCache = join(here, '.fonts');

const [slug, animalName, version, ...flags] = process.argv.slice(2);
if (!slug || !animalName || !version) {
  console.error('usage: node _render.mjs <slug> "<Animal Name>" <version> [--measure]');
  process.exit(1);
}
const measure = flags.includes('--measure');

const CHROME = [
  process.env.CHROME_BIN,
  ...tryGlob('/opt/pw-browsers/chromium-*/chrome-linux/chrome'),
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean).find((p) => p && existsSync(p));

if (!CHROME) {
  console.error('No Chrome binary found. Set CHROME_BIN.');
  process.exit(1);
}

function tryGlob(pattern) {
  try {
    return execFileSync('bash', ['-lc', `ls -d ${pattern} 2>/dev/null`], { encoding: 'utf8' })
      .split('\n').filter(Boolean);
  } catch { return []; }
}

// ---------- fonts ----------
// Pull the same families the template @imports, keep only the latin subset, and
// inline each woff2 as a data URI so Chromium needs no network at render time.
function inlineFonts(html) {
  const importMatch = html.match(/@import url\('([^']+)'\);/);
  if (!importMatch) return html;

  mkdirSync(fontCache, { recursive: true });
  const cssPath = join(fontCache, 'fonts.css');

  if (!existsSync(cssPath)) {
    // A modern desktop UA is what makes Google Fonts serve woff2 rather than ttf.
    const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
    execFileSync('curl', ['-sS', '-m', '60', '-A', ua, importMatch[1], '-o', cssPath]);
  }
  const css = readFileSync(cssPath, 'utf8');

  const blocks = css.split('@font-face').slice(1).map((b) => '@font-face' + b.split('}')[0] + '}');
  const latin = blocks.filter((b) => /unicode-range:[^;]*U\+0000-00FF/.test(b));

  const out = latin.map((block) => {
    const url = block.match(/url\((https:\/\/[^)]+)\)/);
    if (!url) return null;
    const file = join(fontCache, url[1].split('/').pop());
    if (!existsSync(file)) execFileSync('curl', ['-sS', '-m', '60', url[1], '-o', file]);
    const b64 = readFileSync(file).toString('base64');
    return block.replace(/url\(https:\/\/[^)]+\)/, `url(data:font/woff2;base64,${b64})`);
  }).filter(Boolean);

  console.log(`  inlined ${out.length} latin font faces`);
  return html.replace(importMatch[0], out.join('\n'));
}

// ---------- build the render copy ----------
const src = join(here, `${slug}.html`);
if (!existsSync(src)) {
  console.error(`Missing ${src}`);
  process.exit(1);
}

let html = inlineFonts(readFileSync(src, 'utf8'));

// The overflow probe from TEMPLATE_GUIDE.md, appended to the render copy only.
const PROBE = `<script>document.fonts.ready.then(()=>{const out=[];document.querySelectorAll('.page').forEach((p,i)=>{const pr=p.getBoundingClientRect();const f=p.querySelector('.pagefoot');const ft=f?f.getBoundingClientRect().top:pr.bottom;let mx=pr.top;p.querySelectorAll('*').forEach(e=>{if(f&&f.contains(e))return;if(i===0)return;const r=e.getBoundingClientRect();if(r.height>0&&r.bottom>mx)mx=r.bottom;});out.push('p'+(i+1)+':'+Math.round(ft-mx-8));});document.body.setAttribute('data-measure',out.join('  '));});<\/script>`;
if (measure) html = html.replace('</body>', `${PROBE}</body>`);

const tmp = join(here, `.render-${slug}.html`);
writeFileSync(tmp, html);
const profile = join(here, `.chrome-${slug}`);

try {
  if (measure) {
    const dom = execFileSync(CHROME, [
      '--headless', '--disable-gpu', '--no-sandbox',
      '--virtual-time-budget=15000',
      `--user-data-dir=${profile}`,
      '--dump-dom', `file://${tmp}`,
    ], { encoding: 'utf8', maxBuffer: 1024 * 1024 * 200, stdio: ['ignore', 'pipe', 'ignore'] });

    const m = dom.match(/data-measure="([^"]*)"/);
    if (!m) { console.error('No measurement produced. Did the page load?'); process.exit(1); }
    const rows = m[1].split(/\s+/).filter(Boolean).map((r) => {
      const [page, px] = r.split(':');
      return { page, px: Number(px) };
    });
    const bad = rows.filter((r) => r.px < 15);
    console.log(rows.map((r) => `${r.page}=${r.px}`).join('  '));
    if (bad.length) {
      console.log(`\nTIGHT OR OVERFLOWING (${bad.length}): ${bad.map((r) => `${r.page}=${r.px}px`).join(', ')}`);
      process.exitCode = 2;
    } else {
      console.log(`\nAll ${rows.length} pages clear, minimum ${Math.min(...rows.map((r) => r.px))}px free.`);
    }
  } else {
    const outName = `${animalName.replace(/\s+/g, '_')}_Care_Package_v${version}.pdf`;
    const dest = join(pkgRoot, 'rebuilt', outName);
    mkdirSync(join(pkgRoot, 'rebuilt'), { recursive: true });
    execFileSync(CHROME, [
      '--headless', '--disable-gpu', '--no-sandbox',
      '--no-pdf-header-footer', '--run-all-compositor-stages-before-draw',
      '--virtual-time-budget=15000',
      `--user-data-dir=${profile}`,
      `--print-to-pdf=${dest}`, `file://${tmp}`,
    ], { stdio: ['ignore', 'ignore', 'inherit'] });
    console.log(`built  rebuilt/${outName}`);
  }
} finally {
  rmSync(tmp, { force: true });
  rmSync(profile, { recursive: true, force: true });
}

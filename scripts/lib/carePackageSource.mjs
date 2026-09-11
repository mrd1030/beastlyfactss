// Shared by the two scripts that render a care package's source HTML with
// headless Chromium: render-care-package-previews.mjs (page images) and
// build-care-package-sample.mjs (the free sample PDF).
//
// A render copy is the source file with its Google Fonts @import replaced by
// inlined @font-face data URIs, the same trick content/CAREPACKAGE
// Guides/source/_render.mjs uses to print the PDFs, because a cloud session's
// Chromium has no network and the import would otherwise fail silently into a
// fallback face. The source file itself is never touched.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const SOURCE_DIR = join(ROOT, 'content', 'CAREPACKAGE Guides', 'source');
export const ASSET_DIR = join(ROOT, 'public', 'assets', 'care-packages');
const FONT_CACHE = join(SOURCE_DIR, '.fonts');

function tryGlob(pattern) {
  try {
    return execFileSync('bash', ['-lc', `ls -d ${pattern} 2>/dev/null`], { encoding: 'utf8' })
      .split('\n').filter(Boolean);
  } catch {
    return [];
  }
}

export function findChrome() {
  return [
    process.env.CHROME_BIN,
    ...tryGlob('/opt/pw-browsers/chromium-*/chrome-linux/chrome'),
  ].filter(Boolean).find(p => existsSync(p));
}

export const LAUNCH_ARGS = ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'];

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
  return html.replace(importMatch[0], out.join('\n'));
}

// Cover art in a source is a relative path into public/assets/guides; make it
// absolute so the render copy, written next to the source, still finds it.
function absolutizeAssets(html) {
  return html
    .replace(/(src|href)="(\.\.\/)+public\/assets\//g, `$1="file://${ROOT}/public/assets/`)
    .replace(/(src|href)="\/assets\//g, `$1="file://${ROOT}/public/assets/`);
}

// Writes the render copy next to the source and returns its file:// URL plus
// a cleanup function. Always call cleanup, in a finally.
export function writeRenderCopy(id, suffix = 'render') {
  const src = join(SOURCE_DIR, `${id}.html`);
  if (!existsSync(src)) throw new Error(`No source at ${src}`);
  const html = absolutizeAssets(inlineFonts(readFileSync(src, 'utf8')));
  const tmp = join(SOURCE_DIR, `.${suffix}-${id}.html`);
  writeFileSync(tmp, html);
  return { url: `file://${tmp}`, cleanup: () => rmSync(tmp, { force: true }) };
}

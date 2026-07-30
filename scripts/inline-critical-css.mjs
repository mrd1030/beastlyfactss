// Eliminates the render-blocking main stylesheet flagged by Lighthouse: every
// prerendered page currently ships the FULL ~90KB Tailwind bundle as a single
// blocking <link>, even though any one page only actually uses a fraction of
// it. For each prerendered HTML file, this inlines just the CSS that file's
// own markup actually references (matched via PurgeCSS's static content scan
// against the real rendered output - safe here specifically because Tailwind
// utility classes, including state variants like hover:/dark:, are always
// written directly in JSX className strings, so they're present in the
// server-rendered HTML regardless of runtime state) and defers the full
// stylesheet the same way index.html already defers Google Fonts
// (media="print" -> "all" on load). Anything this pass misses self-heals
// within milliseconds once the deferred sheet finishes loading, since it's
// not gated on user interaction.
import fs from 'node:fs/promises';
import path from 'node:path';
import { PurgeCSS } from 'purgecss';

const DIST = path.resolve('dist');

async function findHtmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findHtmlFiles(full)));
    } else if (entry.name.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

async function run() {
  const rootHtml = await fs.readFile(path.join(DIST, 'index.html'), 'utf-8');
  const cssMatch = rootHtml.match(/<link rel="stylesheet" crossorigin(?:="")? href="(\/assets\/index-[^"]+\.css)">/);
  if (!cssMatch) {
    console.warn('inline-critical-css: main stylesheet link not found in dist/index.html, skipping.');
    return;
  }
  const cssHref = cssMatch[1];
  const cssPath = path.join(DIST, cssHref.replace(/^\//, ''));
  const fullCss = await fs.readFile(cssPath, 'utf-8');
  const linkTagPattern = /<link rel="stylesheet" crossorigin(?:="")? href="\/assets\/index-[^"]+\.css">/;

  const htmlFiles = await findHtmlFiles(DIST);
  let processed = 0;
  let totalCriticalBytes = 0;

  for (const htmlFile of htmlFiles) {
    const html = await fs.readFile(htmlFile, 'utf-8');
    const fileMatch = html.match(linkTagPattern);
    if (!fileMatch) continue;
    const linkTag = fileMatch[0];

    const [result] = await new PurgeCSS().purge({
      content: [{ raw: html, extension: 'html' }],
      css: [{ raw: fullCss }],
      safelist: {
        standard: [/^dark$/],
        greedy: [/^(hover|focus|focus-visible|focus-within|active|disabled|checked|group-hover|group-focus|peer-checked|peer-focus|dark):/],
      },
      keyframes: true,
      variables: true,
    });

    const criticalCss = result?.css?.trim();
    if (!criticalCss) continue;

    const replacement =
      `<style>${criticalCss}</style>\n` +
      `    <link rel="stylesheet" href="${cssHref}" media="print" onload="this.media='all'">\n` +
      `    <noscript><link rel="stylesheet" href="${cssHref}"></noscript>`;

    const newHtml = html.replace(linkTag, replacement);
    await fs.writeFile(htmlFile, newHtml, 'utf-8');
    processed++;
    totalCriticalBytes += criticalCss.length;
  }

  const avgKb = processed ? (totalCriticalBytes / processed / 1024).toFixed(1) : 0;
  console.log(`Inlined critical CSS into ${processed}/${htmlFiles.length} pages (avg ${avgKb} KB/page, full sheet ${(fullCss.length / 1024).toFixed(1)} KB deferred)`);
}

run().catch((err) => {
  console.error('inline-critical-css failed:', err);
  process.exit(1);
});

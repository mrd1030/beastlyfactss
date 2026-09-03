#!/usr/bin/env node
// Renders each care package HTML to a print-ready PDF with headless Chrome.
//
//   node care-packages/build.mjs              # build everything
//   node care-packages/build.mjs ball-python  # build one
//
// Chrome is the renderer on purpose: the v2.0 Bearded Dragon package was
// produced the same way, so page breaks, fonts and color handling match.
// Set CHROME_BIN if the binary isn't in one of the paths below.

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, 'pdf');

const PACKAGES = [
  { slug: 'ball-python', out: 'BeastlyFacts-Ball-Python-Care-Package.pdf' },
  { slug: 'betta-fish', out: 'BeastlyFacts-Betta-Fish-Care-Package.pdf' },
  { slug: 'hamster', out: 'BeastlyFacts-Hamster-Care-Package.pdf' },
  { slug: 'rabbit', out: 'BeastlyFacts-Rabbit-Care-Package.pdf' },
  { slug: 'tarantula', out: 'BeastlyFacts-Tarantula-Care-Package.pdf' },
  { slug: 'corn-snake', out: 'BeastlyFacts-Corn-Snake-Care-Package.pdf' },
];

const CHROME_CANDIDATES = [
  process.env.CHROME_BIN,
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error('No Chrome binary found. Set CHROME_BIN to one.');
  process.exit(1);
}

const wanted = process.argv.slice(2);
const targets = wanted.length
  ? PACKAGES.filter((p) => wanted.includes(p.slug))
  : PACKAGES;

if (!targets.length) {
  console.error(`Unknown package. Known: ${PACKAGES.map((p) => p.slug).join(', ')}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

for (const { slug, out } of targets) {
  const src = join(here, `${slug}.html`);
  if (!existsSync(src)) {
    console.error(`Missing ${src}`);
    process.exit(1);
  }

  // Chrome writes to the path given, but wants a unique profile dir per run.
  const profile = join(outDir, `.chrome-${slug}`);
  const dest = join(outDir, out);

  execFileSync(chrome, [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--no-pdf-header-footer',
    '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=10000',
    `--user-data-dir=${profile}`,
    `--print-to-pdf=${dest}`,
    `file://${resolve(src)}`,
  ], { stdio: ['ignore', 'ignore', 'inherit'] });

  rmSync(profile, { recursive: true, force: true });
  console.log(`built  pdf/${out}`);
}

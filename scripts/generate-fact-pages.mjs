/**
 * generate-fact-pages.mjs
 *
 * Writes dist/facts/<slug>/index.html for every fact, by stamping that fact's
 * head tags into the built SPA shell. No browser involved.
 *
 * These 281 routes used to go through the full puppeteer prerender, which cost
 * about a third of that step for pages that never needed it. Facts.jsx marks
 * every deep-linked fact noindex,follow, so their body is not indexed and does
 * not have to exist statically - a crawler that runs JS renders it anyway.
 *
 * What DOES have to be static is the head. Two things depend on it:
 *
 *   1. A file has to exist at the path at all. public/_redirects has no
 *      catch-all 200 rule (89 rules, every one a 301), so a missing file falls
 *      through to Cloudflare's 404.html and returns a real 404 - on links people
 *      are actively sharing from the fact cards and modal.
 *   2. Social crawlers do not execute JS, so og:image only reaches them if it is
 *      in the served HTML. That is the whole reason these routes were added.
 *
 * The head tags are built by importing the same slugify / truncateDescription /
 * absoluteImageFor helpers Facts.jsx uses, so the two cannot drift on how a
 * title is slugged or a description truncated. Only the assembly below is
 * duplicated, and it is deliberately kept to a readable block that mirrors the
 * <Helmet> in Facts.jsx one line at a time.
 *
 * On the duplicate-tag question: once JS runs, Helmet adds its own og:image to
 * these pages alongside the one stamped in here, so a JS-executing crawler sees
 * two. index.html carries a long comment about why that pattern was removed
 * from it - a crawler taking the first of two conflicting og:image tags got the
 * generic one instead of the real image. This is not that bug: both tags here
 * are computed for the same fact by the same absoluteImageFor(), so they carry
 * the same value, and the audience that matters (crawlers with no JS) only ever
 * sees the static one. It would become that bug if the image source in
 * Facts.jsx changed without this file following, which is the one thing to keep
 * in step.
 *
 * Must run AFTER `vite build` and BEFORE `node prerender.mjs`: prerender
 * overwrites dist/index.html with the rendered homepage, and this needs the
 * clean shell.
 */
import { mkdir, writeFile, readFile } from 'fs/promises';
import path from 'path';

const DIST = './dist';
const SITE = 'https://beastlyfacts.com';

const { facts } = await import('../src/lib/data/facts.js');
const { slugify } = await import('../src/lib/utils/slugify.js');
const { truncateDescription } = await import('../src/lib/utils/truncate.js');
const { absoluteImageFor } = await import('../src/lib/data/factImages.js');

const HERO = `${SITE}/assets/hero-1200.jpg`;

// Minimal escaping for values going into a double-quoted HTML attribute. Fact
// text is authored prose and regularly contains apostrophes and quotes.
const attr = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function headFor(fact) {
  const url = `${SITE}/facts/${slugify(fact.title)}/`;
  const title = `${fact.animal}: ${fact.title} | Beastly Facts`;
  const description = truncateDescription(`${fact.emoji} ${fact.fact}`);
  const factImage = absoluteImageFor(fact);
  const image = factImage || HERO;
  const alt = `${fact.animal} - ${fact.title}`;

  // Mirrors the <Helmet> block in src/pages/Facts.jsx for a linked fact,
  // including its rule that og:image:width/height are only emitted for the
  // generic hero, whose dimensions are known. Per-fact photos vary.
  return [
    `<title>${attr(title)}</title>`,
    `<meta name="description" content="${attr(description)}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta name="robots" content="noindex,follow">`,
    `<meta property="og:title" content="${attr(title)}">`,
    `<meta property="og:description" content="${attr(description)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:image" content="${image}">`,
    ...(factImage
      ? []
      : ['<meta property="og:image:width" content="1200">', '<meta property="og:image:height" content="630">']),
    `<meta property="og:image:alt" content="${attr(alt)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${attr(title)}">`,
    `<meta name="twitter:description" content="${attr(description)}">`,
    `<meta name="twitter:image" content="${image}">`,
  ].join('\n    ');
}

const shell = await readFile(path.join(DIST, 'index.html'), 'utf-8');

// The shell carries one generic sitewide <title> and no per-page SEO tags of its
// own, so replacing that title with this fact's block is the whole edit.
//
// This is asserted rather than assumed because index.html used to carry a
// static generic og:image and meta description, and removing them was a
// deliberate fix: they sat alongside Helmet's per-page versions as a second,
// stale tag, and a crawler reading the first of two conflicting og:image tags
// got the generic one instead of the real per-page image. See the comments in
// index.html. Re-adding one there would break these pages the same way.
//
// Comments are stripped before checking, since those very comments mention the
// tag names and matched on the first run of this guard.
const shellMarkup = shell.replace(/<!--[\s\S]*?-->/g, '');

if (!/<title>[^<]*<\/title>/.test(shellMarkup)) {
  console.error('❌ No <title> in dist/index.html - cannot place fact head tags.');
  process.exit(1);
}
for (const tag of ['rel="canonical"', 'property="og:image"', 'name="description"', 'name="robots"']) {
  if (shellMarkup.includes(tag)) {
    console.error(`❌ dist/index.html already contains ${tag}; injected fact tags would be a second, conflicting copy.`);
    process.exit(1);
  }
}

const seen = new Set();
let written = 0;
for (const fact of facts) {
  const slug = slugify(fact.title);
  if (!slug || seen.has(slug)) continue; // mirrors the de-duped slug list prerender used
  seen.add(slug);

  const html = shell.replace(/<title>[^<]*<\/title>/, headFor(fact));
  const dir = path.join(DIST, 'facts', slug);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), html, 'utf-8');
  written++;
}

console.log(`🖼️  Fact share pages: ${written} written with per-fact og:image (no browser render)`);

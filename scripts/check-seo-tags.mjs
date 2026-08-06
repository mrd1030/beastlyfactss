#!/usr/bin/env node
/**
 * Fails the build when a page would render a <title> or meta description longer
 * than search engines will show.
 *
 * An Ahrefs crawl on 2026-08-06 flagged 35 titles and 10 meta descriptions. None
 * were typos: every one came from a template that read well in isolation and
 * only breached the limit once the brand suffix or a long animal name was
 * substituted in. Nothing in the build had an opinion about length, so the first
 * time anyone found out was an external crawl months later.
 *
 * Both surfaces are checked from source rather than from built HTML, so the
 * failure names the file to edit.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { withBrand, pickWithinLimit, plural, TITLE_MAX, DESCRIPTION_MAX, BRAND } from '../src/lib/utils/seo.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];
const truncated = [];

// Blog.jsx caps the meta description at 155 via truncateDescription.
const TRUNCATE_AT = 155;

/* ------------------------------------------------------------------ articles */

const GUIDES = path.join(ROOT, 'content/guides');

function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    out[kv[1]] = kv[2].trim().replace(/^["'](.*)["']$/, '$1');
  }
  return out;
}

let articles = 0;
for (const name of fs.readdirSync(GUIDES)) {
  if (!name.endsWith('.mdx')) continue;
  const fm = frontmatter(fs.readFileSync(path.join(GUIDES, name), 'utf8'));
  const source = fm.seoTitle || fm.title;
  if (!source) continue;
  articles += 1;

  // withBrand drops the suffix rather than overflow, so the only way an article
  // can fail is a seoTitle that is already too long on its own.
  const rendered = withBrand(source);
  if (rendered.length > TITLE_MAX) {
    failures.push({
      file: `content/guides/${name}`,
      what: fm.seoTitle ? 'seoTitle' : 'title',
      len: rendered.length,
      max: TITLE_MAX,
      value: rendered,
    });
  }

  // Only a dedicated seoDescription is held to the limit. excerpt is on-page
  // copy that happens to be the meta fallback, and Blog.jsx runs it through
  // truncateDescription, so it can never overflow the tag. Flagging every long
  // excerpt would have failed the build on 280 articles that ship correctly.
  if (fm.seoDescription && fm.seoDescription.length > DESCRIPTION_MAX) {
    failures.push({
      file: `content/guides/${name}`,
      what: 'seoDescription',
      len: fm.seoDescription.length,
      max: DESCRIPTION_MAX,
      value: fm.seoDescription,
    });
  }

  // Not a failure, but worth surfacing: with no seoDescription the tag becomes
  // the excerpt cut at 155, so the SERP line ends in an ellipsis mid-sentence.
  if (!fm.seoDescription && (fm.excerpt || '').length > TRUNCATE_AT) truncated.push(name);
}

/* ----------------------------------------------- programmatic legal map pages */

const LEGAL = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/lib/data/legalStatus.json'), 'utf8'));

// Kept in step with src/pages/ExoticPetLaws.jsx by hand. If the templates there
// change and these do not, this check reports lengths for copy that is no longer
// shipped, so the two are cross-checked in the test below.
const PROPER_FIRST_WORDS = new Set([
  'Bengal', 'Russian', 'Argentine', 'Nile', 'Burmese', 'Quaker', 'African', 'Asian', 'American',
]);
const inSentence = (name) => {
  const [first, ...rest] = name.split(' ');
  return PROPER_FIRST_WORDS.has(first) ? name : [first.toLowerCase(), ...rest].join(' ');
};
const bucketFor = (s) =>
  s === 'legal' ? 'none' : s === 'banned' ? 'banned' : s === 'permit' ? 'permit' : s === 'unclear' ? 'unclear' : 'conditions';

let animals = 0;
for (const [id, animal] of Object.entries(LEGAL.animals)) {
  animals += 1;
  const c = { banned: 0, permit: 0, conditions: 0, unclear: 0 };
  for (const e of Object.values(animal.jurisdictions)) {
    const b = bucketFor(e.status);
    if (b !== 'none') c[b] += 1;
  }

  const title = withBrand(
    pickWithinLimit(
      [
        `${animal.name} Laws by State: Where It Is Banned`,
        `${animal.name} Laws by State: Bans and Permits`,
        `${animal.name} Laws by State`,
      ],
      TITLE_MAX - ` | ${BRAND}`.length,
    ),
  );
  if (title.length > TITLE_MAX) {
    failures.push({ file: 'src/pages/ExoticPetLaws.jsx', what: `title for ${id}`, len: title.length, max: TITLE_MAX, value: title });
  }

  const desc = pickWithinLimit(
    [
      `Every US state where the ${inSentence(animal.name)} is banned, needs a permit or comes with conditions, each entry citing the regulation itself. ${plural(c.banned, 'ban')}, ${plural(c.permit, 'permit state')}.`,
      `Where the ${inSentence(animal.name)} is banned, restricted or needs a permit, each entry citing the regulation itself. ${plural(c.banned, 'ban')}, ${plural(c.permit, 'permit state')}.`,
      `Where the ${inSentence(animal.name)} is banned or needs a permit, citing each regulation. ${plural(c.banned, 'ban')}, ${plural(c.permit, 'permit state')}.`,
    ],
    DESCRIPTION_MAX,
  );
  if (desc.length > DESCRIPTION_MAX) {
    failures.push({ file: 'src/pages/ExoticPetLaws.jsx', what: `description for ${id}`, len: desc.length, max: DESCRIPTION_MAX, value: desc });
  }
}

// Guard against this file drifting from the page it mirrors: both must build the
// tag the same way, so the page's own template strings have to still be present.
const pageSource = fs.readFileSync(path.join(ROOT, 'src/pages/ExoticPetLaws.jsx'), 'utf8');
for (const fragment of ['Laws by State: Where It Is Banned', 'Laws by State: Bans and Permits', 'withBrand(title)']) {
  if (!pageSource.includes(fragment)) {
    failures.push({
      file: 'scripts/check-seo-tags.mjs',
      what: 'template drift',
      len: 0,
      max: 0,
      value: `ExoticPetLaws.jsx no longer contains "${fragment}", so this check is measuring copy the site does not ship. Update both together.`,
    });
  }
}

/* ---------------------------------------------------------------------- report */

if (failures.length) {
  console.error(`\nSEO tag lengths: ${failures.length} over budget.\n`);
  for (const f of failures) {
    console.error(`  ${f.file}`);
    console.error(`    ${f.what}: ${f.len > 0 ? `${f.len} chars, limit ${f.max}` : ''}`);
    console.error(`    ${f.value}\n`);
  }
  console.error('Titles are capped at 60 and descriptions at 160 because that is where');
  console.error('Google truncates. See src/lib/utils/seo.js.\n');
  process.exit(1);
}

if (truncated.length) {
  console.log(`Note: ${truncated.length} article(s) have no seoDescription and an excerpt over ${TRUNCATE_AT} chars,`);
  console.log(`so their meta description ships truncated. Not a failure, but a wasted SERP line.`);
}
console.log(`SEO tags: ${articles} articles and ${animals} legal map pages inside the ${TITLE_MAX}/${DESCRIPTION_MAX} budget.`);

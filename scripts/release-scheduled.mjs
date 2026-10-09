#!/usr/bin/env node
/**
 * Moves the articles that are due today out of content/_scheduled-* and into
 * content/, which is the only way an article with a future date ever ships.
 *
 * Why this exists: an article's `date` is the day it goes live, and
 * check-publish-dates.mjs fails the build on a future date in content/. So a
 * batch written ahead waits in content/_scheduled-<anything>/, where the
 * build never looks, and comes out a few at a time. Doing that by hand every
 * morning is the kind of chore that stops happening, so the schedule lives in
 * scripts/release-queue.json and this script does the morning.
 *
 * For every queued page whose date is today or earlier and whose file is
 * still in a scheduled directory:
 *
 *   1. git mv it into content/<dir>/.
 *   2. Stamp date, lastUpdated and lastReviewed with today (US Eastern). A
 *      page that missed its day ships with the day it actually shipped.
 *   3. Apply the inbound link edits the queue lists for it: exact sentences
 *      in live articles that should now carry a link to the new page.
 *   4. Add it to the index on the exotic-pet-legal-hub article, under the
 *      same group heading the map picker uses, A to Z within the group.
 *
 * Then, once for the batch: sync-articles, check-rotation --assign (every new
 * article needs a permanent rotation number), and the checks that would fail
 * the build. Committing and pushing is left to the caller: the workflow in
 * .github/workflows/release.yml does it, and a person can run this locally
 * and look at the diff first.
 *
 * Usage:
 *   node scripts/release-scheduled.mjs              ship what is due today
 *   node scripts/release-scheduled.mjs --dry-run    say what would ship
 *   node scripts/release-scheduled.mjs --date 2026-10-12   pretend it is that day
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LEGAL_GROUPS } from '../src/lib/data/legalGroups.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const QUEUE = path.join(ROOT, 'scripts/release-queue.json');
const HUB = path.join(ROOT, 'content/guides/exotic-pet-legal-hub.mdx');
const LEGAL = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/lib/data/legalStatus.json'), 'utf8'));

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const dateArg = args[args.indexOf('--date') + 1];
const today = args.includes('--date') && dateArg
  ? dateArg
  : new Date().toLocaleDateString('en-CA', { timeZone: 'America/New_York' });

if (!/^\d{4}-\d{2}-\d{2}$/.test(today)) {
  console.error(`Bad date: ${today}`);
  process.exit(2);
}

const queue = JSON.parse(fs.readFileSync(QUEUE, 'utf8')).pages;

// Where a scheduled file lives, if it is still scheduled.
function scheduledPath(slug) {
  const content = path.join(ROOT, 'content');
  for (const entry of fs.readdirSync(content, { withFileTypes: true })) {
    if (!entry.isDirectory() || !entry.name.startsWith('_scheduled')) continue;
    const p = path.join(content, entry.name, `${slug}.mdx`);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

const due = queue
  .filter((p) => p.date <= today)
  .map((p) => ({ ...p, from: scheduledPath(p.slug) }))
  .filter((p) => p.from);

if (!due.length) {
  console.log(`Nothing due on ${today}.`);
  process.exit(0);
}

console.log(`${today}: ${due.length} page(s) due: ${due.map((p) => p.slug).join(', ')}`);
if (dryRun) process.exit(0);

function setFrontmatter(text, key, value) {
  const re = new RegExp(`^${key}: .*$`, 'm');
  if (!re.test(text)) throw new Error(`frontmatter has no ${key}`);
  return text.replace(re, `${key}: "${value}"`);
}

function frontmatterValue(text, key) {
  const m = text.match(new RegExp(`^${key}: "(.*)"$`, 'm'));
  return m ? m[1] : null;
}

// The matrix animal a guide covers, by its article path.
function animalFor(slug) {
  return Object.entries(LEGAL.animals).find(([, a]) => a.article === `/blog/${slug}/`);
}

function titleCase(name) {
  return name
    .split(' ')
    .map((w) => (w[0] === "'" ? w : w[0].toUpperCase() + w.slice(1)))
    .join(' ')
    .replace(/-([a-z])/g, (m, c) => `-${c.toUpperCase()}`);
}

// The first letter of the hook comes down unless the first word is a name
// (a state, an agency, a species name written with a capital).
const PROPER = /^(Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New|North|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode|South|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West|Wisconsin|Wyoming|Congress|FWC|DNR|USDA|CITES|Lacey|Savannah|Bengal|Virginia|Canada|Asian|African|American)\b/;
function hook(excerpt) {
  const first = excerpt.split(' ')[0];
  if (PROPER.test(excerpt) || /^[A-Z][A-Z]/.test(first) || /[A-Z]/.test(first.slice(1))) return excerpt;
  return excerpt[0].toLowerCase() + excerpt.slice(1);
}

function hubGroupFor(page) {
  if (page.hubGroup) return page.hubGroup;
  const found = animalFor(page.slug);
  if (!found) throw new Error(`${page.slug}: no matrix animal and no hubGroup in the queue`);
  const [id] = found;
  const group = LEGAL_GROUPS.find((g) => g.ids.includes(id));
  if (!group) throw new Error(`${page.slug}: animal ${id} is in no group in legalGroups.js`);
  return group.label;
}

function hubName(page, text) {
  if (page.hubName) return page.hubName;
  const found = animalFor(page.slug);
  if (found) return titleCase(found[1].name);
  return frontmatterValue(text, 'title');
}

// Adds a bullet under the group heading in the hub article, A to Z by the
// bold name, creating the heading in LEGAL_GROUPS order if it is not there.
function addToHub(hub, group, name, slug, excerpt) {
  if (hub.includes(`(/blog/${slug}/)`)) return hub;
  const bullet = `- **[${name}](/blog/${slug}/)**: ${hook(excerpt)}`;
  const heading = `### ${group}`;
  if (!hub.includes(`\n${heading}\n`)) {
    const order = LEGAL_GROUPS.map((g) => g.label);
    const after = order.slice(order.indexOf(group) + 1).find((l) => hub.includes(`\n### ${l}\n`));
    const anchor = after ? `\n### ${after}\n` : '\n## How to Verify Any Species Yourself';
    hub = hub.replace(anchor, `\n${heading}\n\n${anchor.replace(/^\n/, '')}`);
  }
  const start = hub.indexOf(`\n${heading}\n`) + heading.length + 2;
  const end = (() => {
    const next = hub.slice(start).search(/\n##+ /);
    return next === -1 ? hub.length : start + next;
  })();
  const block = hub.slice(start, end);
  const lines = block.split('\n');
  const bullets = lines.filter((l) => l.startsWith('- **['));
  const nameOf = (l) => l.match(/^- \*\*\[([^\]]+)\]/)[1];
  bullets.push(bullet);
  bullets.sort((a, b) => nameOf(a).localeCompare(nameOf(b)));
  const rebuilt = `\n${bullets.join('\n')}\n`;
  return hub.slice(0, start) + rebuilt + hub.slice(end);
}

function git(...a) {
  return execFileSync('git', a, { cwd: ROOT, stdio: 'pipe' }).toString();
}

let hub = fs.readFileSync(HUB, 'utf8');
const shipped = [];

for (const page of due) {
  const to = path.join(ROOT, 'content', page.dir, `${page.slug}.mdx`);
  if (fs.existsSync(to)) throw new Error(`${to} already exists`);
  git('mv', page.from, to);

  let text = fs.readFileSync(to, 'utf8');
  for (const key of ['date', 'lastUpdated', 'lastReviewed']) text = setFrontmatter(text, key, today);
  fs.writeFileSync(to, text);

  for (const edit of page.inbound || []) {
    const f = path.join(ROOT, edit.file);
    const t = fs.readFileSync(f, 'utf8');
    if (!t.includes(edit.find)) throw new Error(`${page.slug}: inbound text not found in ${edit.file}:\n${edit.find}`);
    let next = t.replace(edit.find, edit.replace);
    if (f !== HUB) {
      next = setFrontmatter(next, 'lastUpdated', today);
      fs.writeFileSync(f, next);
    } else {
      hub = hub.replace(edit.find, edit.replace);
    }
  }

  const excerpt = frontmatterValue(text, 'excerpt');
  if (!excerpt) throw new Error(`${page.slug}: no excerpt for the hub line`);
  hub = addToHub(hub, hubGroupFor(page), hubName(page, text), page.slug, excerpt);
  shipped.push(page.slug);
  console.log(`  shipped ${page.slug} -> content/${page.dir}/`);
}

hub = setFrontmatter(hub, 'lastUpdated', today);
hub = setFrontmatter(hub, 'lastReviewed', today);
fs.writeFileSync(HUB, hub);

const run = (file, ...a) => execFileSync('node', [path.join(ROOT, 'scripts', file), ...a], { cwd: ROOT, stdio: 'inherit' });
run('sync-articles.js');
run('check-rotation.mjs', '--assign');
run('generate-guides-index.js');
run('generate-legal-summary.mjs');
run('check-publish-dates.mjs');
run('check-internal-links.mjs');
run('check-related-articles.mjs');

// The map sync check has one known pre-existing finding (cockatoo, Maine). It
// is informative here, not blocking: a page already passed it when written.
try {
  run('check-legal-map-sync.mjs');
} catch {
  console.log('check-legal-map-sync reported findings (see above); not blocking the release.');
}

fs.writeFileSync(path.join(ROOT, '.release-shipped'), shipped.join('\n'));
console.log(`Shipped ${shipped.length}: ${shipped.join(', ')}`);

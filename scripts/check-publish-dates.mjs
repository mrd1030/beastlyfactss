#!/usr/bin/env node
/**
 * Fails the build on any live article dated in the future.
 *
 * Why this exists: articles used to ship with a future `date` as a soft
 * release signal. The page went live and crawlable the day it deployed, but
 * the site hid its date until the calendar caught up, so 215 live articles
 * carried no visible date at all, and the listings, sitemap and RSS feed all
 * needed special cases to cope. That was retired on 2026-09-24: an article's
 * date is now the day it ships.
 *
 * Writing ahead is still fine. An article that is not ready to go live waits
 * in content/_scheduled-*, which the build never publishes, and moves into
 * content/ on the day it ships. This script does not look in there.
 *
 * Checks date, lastUpdated and lastReviewed in the frontmatter of every live
 * MDX file against today in US Eastern, the site's timezone.
 *
 * Usage:  node scripts/check-publish-dates.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = path.join(ROOT, 'content');
const FIELDS = ['date', 'lastUpdated', 'lastReviewed'];
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/New_York' });

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('_scheduled')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.endsWith('.mdx')) out.push(full);
  }
  return out;
}

const problems = [];
for (const file of walk(CONTENT)) {
  const text = fs.readFileSync(file, 'utf8');
  const front = text.startsWith('---') ? text.slice(3, text.indexOf('\n---', 3)) : '';
  for (const field of FIELDS) {
    const m = front.match(new RegExp(`^${field}:\\s*["']?(\\d{4}-\\d{2}-\\d{2})`, 'm'));
    if (m && m[1] > today) problems.push(`${path.relative(ROOT, file)}: ${field} ${m[1]}`);
  }
}

if (problems.length) {
  console.error(`Publish dates: ${problems.length} future date${problems.length === 1 ? '' : 's'} on live articles (today is ${today}):`);
  for (const p of problems) console.error(`  ${p}`);
  console.error('Date an article the day it ships. To write ahead, keep it in content/_scheduled-* until then.');
  process.exit(1);
}

console.log(`Publish dates: no live article is dated after ${today}.`);

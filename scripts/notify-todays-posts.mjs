#!/usr/bin/env node
//
// Sends the daily "new article is up" push, and nothing else.
//
// Every article in this repo ships deployed and crawlable; a frontmatter date
// in the future is the only thing holding one out of the blog list, the RSS
// feed, and the date lines on the cards (see src/lib/utils/date.js and the
// matching gate in public/_worker.js). The moment site-time midnight passes
// that date the article surfaces on its own, with no deploy involved, so this
// script is what turns that silent rollover into a notification: it reads the
// same committed index the site reads, finds the posts whose date is today in
// SITE_TIMEZONE, and hands the edge function a title and body built from them.
//
// Run by .github/workflows/notify-new-posts.yml at 9am ET, a few hours after
// the articles surfaced, rather than at midnight when the phone is face down.
//
// Usage:
//   node scripts/notify-todays-posts.mjs --dry-run     # print, send nothing
//   node scripts/notify-todays-posts.mjs               # send
//   node scripts/notify-todays-posts.mjs --date 2026-09-01   # pretend it is
//
// Env (only needed for a real send):
//   SEND_NOTIFICATION_URL     https://<project-ref>.supabase.co/functions/v1/send-notification
//   SEND_NOTIFICATION_SECRET  same value as the function's SEND_NOTIFICATION_SECRET

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// Same zone as src/lib/utils/date.js and public/_worker.js. Duplicated rather
// than imported because this runs as plain node with no bundler to resolve the
// '@/' alias, and a second copy of one string beats a build step in CI.
const SITE_TIMEZONE = 'America/New_York';

// A notification body gets truncated by the OS anyway; this keeps the excerpt
// from being cut mid-word when it does.
const BODY_LIMIT = 140;

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const dateArg = args[args.indexOf('--date') + 1];
const today =
  args.includes('--date') && dateArg
    ? dateArg
    : new Date().toLocaleDateString('en-CA', { timeZone: SITE_TIMEZONE });

function truncate(text, limit = BODY_LIMIT) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= limit) return clean;
  const cut = clean.slice(0, limit);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > limit * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[,.;:]$/, '')}...`;
}

// articles-index.json, not mdx-meta.json: the index is exactly the set that
// appears in the blog list, already excluding the Chronicles short stories that
// live in their own section and are not what this notification is about.
function postsPublishedOn(day) {
  const index = JSON.parse(readFileSync(join(ROOT, 'src/lib/generated/articles-index.json'), 'utf8'));
  const articles = Array.isArray(index) ? index : index.articles || [];
  return articles.filter(a => String(a.date || '').slice(0, 10) === day);
}

// One article gets its own headline, which is the whole point of sending this
// rather than a generic ping. Several on one day collapse into a count, because
// stacking three notifications on a phone to say the same thing is how people
// turn notifications off.
function buildPayload(posts) {
  if (posts.length === 1) {
    const [post] = posts;
    return {
      title: post.title,
      body: truncate(post.excerpt) || 'New on BeastlyFacts. Tap to read it.',
      url: `/blog/${post.slug}/`,
    };
  }
  return {
    title: `${posts.length} new articles on BeastlyFacts`,
    body: truncate(posts.map(p => p.title).join(', ')),
    url: '/blog/',
  };
}

async function main() {
  const posts = postsPublishedOn(today);
  if (posts.length === 0) {
    console.log(`No articles dated ${today}. Nothing to send.`);
    return;
  }

  const payload = buildPayload(posts);
  console.log(`${posts.length} article(s) dated ${today}:`);
  for (const post of posts) console.log(`  - ${post.title} (/blog/${post.slug}/)`);
  console.log(`Payload: ${JSON.stringify(payload)}`);

  if (dryRun) {
    console.log('Dry run, nothing sent.');
    return;
  }

  const url = process.env.SEND_NOTIFICATION_URL;
  const secret = process.env.SEND_NOTIFICATION_SECRET;
  if (!url || !secret) {
    throw new Error('SEND_NOTIFICATION_URL and SEND_NOTIFICATION_SECRET must both be set.');
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-send-secret': secret },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`send-notification returned ${res.status}: ${text}`);
  console.log(`Sent. ${text}`);
}

main().catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});

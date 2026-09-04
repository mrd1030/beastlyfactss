// Publer CSV builder: turns a batch JSON into an import-ready CSV, and refuses
// to emit a broken one.
//
// The copy itself (captions, hooks, thread posts, reply lines) has to be
// written, that part is not mechanical. Everything after that is: the exact
// 12-column header, CSV quoting, the colon in the time, keeping Link(s) empty,
// joining reply chains with ||, matching alt-text count to media count. Every
// one of those has broken a real batch at least once, so they live here as
// enforced rules rather than as things to remember.
//
//   node scripts/build-social-csv.mjs <batch.json> [-o out.csv]
//   node scripts/build-social-csv.mjs <batch.json> --check    (validate only)
//
// Batch JSON shape:
//
//   {
//     "platform": "x" | "ig" | "threads",
//     "posts": [
//       {
//         "date": "2026-08-29 10:00",      required, colon in the time
//         "text": "the main post",          required
//         "media": ["https://..."],         1 url, or several for an IG carousel
//         "alt": ["..."],                   IG only, one per media url
//         "comments": ["reply", "reply"]    replies, in order, chained
//       }
//     ]
//   }
//
// `comments` is the whole reply mechanism. One entry is a single reply. Several
// entries become a chain that fires in order seconds after the main post. An X
// thread is one post object with its follow-ups in comments, not four objects.
//
// Failures are loud and specific. Nothing is written if any row is invalid,
// since a half-good CSV is worse than none: the bad rows land as unscheduled
// drafts and look like they worked.

import fs from 'fs';
import path from 'path';

const PLATFORMS = ['x', 'ig', 'threads'];
const SITE = 'https://beastlyfacts.com';

// Publer's bulk template. Fixed order, and the empty ones are not padding, they
// hold the positions the importer expects.
const COLS = [
  'Date', 'Text', 'Link(s)', 'Media URL(s)', 'Title', 'Label(s)',
  'Alt text(s)', 'Comment(s)', 'Board/Album', 'Post subtype', 'CTA', 'Reminder',
];

const DATE_RE = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;

function csvField(v) {
  v = v == null ? '' : String(v);
  if (/[",\n]/.test(v)) v = '"' + v.replace(/"/g, '""') + '"';
  return v;
}

function validate(batch, file) {
  const errors = [];
  const err = (i, msg) => errors.push(`post ${i + 1}${batch.posts?.[i]?.date ? ` (${batch.posts[i].date})` : ''}: ${msg}`);

  if (!PLATFORMS.includes(batch.platform)) {
    errors.push(`platform must be one of ${PLATFORMS.join(', ')}, got ${JSON.stringify(batch.platform)}`);
  }
  if (!Array.isArray(batch.posts) || batch.posts.length === 0) {
    errors.push('posts must be a non-empty array');
    return errors;
  }

  const seenSlot = new Map();
  const seenMedia = new Map();

  batch.posts.forEach((p, i) => {
    // Date. The colon is the one that silently fails: a hyphen parses as
    // nothing, the row imports as an unscheduled draft, and no error is shown.
    if (!p.date) err(i, 'missing date');
    else if (!DATE_RE.test(p.date)) {
      err(i, `date must be YYYY-MM-DD HH:MM with a colon in the time, got ${JSON.stringify(p.date)}`);
    } else if (seenSlot.has(p.date)) {
      err(i, `duplicate time slot, already used by post ${seenSlot.get(p.date) + 1}`);
    } else {
      seenSlot.set(p.date, i);
    }

    if (!p.text || !String(p.text).trim()) err(i, 'missing text');

    // Urls belong in comments. In Text they either get stripped or turn the
    // post into a link post, which is the low-reach format this whole approach
    // exists to avoid.
    if (p.text && /https?:\/\//.test(p.text)) {
      err(i, 'text contains a url, urls go in comments');
    }

    if ('link' in p || 'links' in p) {
      err(i, 'link fields are not supported, Link(s) must stay empty or Publer builds a link post instead of a native photo post');
    }

    const media = p.media ?? [];
    if (!Array.isArray(media) || media.length === 0) err(i, 'missing media, expected at least one url');
    media.forEach(m => {
      if (!/^https:\/\//.test(m)) err(i, `media url must be a full https url, got ${JSON.stringify(m)}`);
      else if (!m.startsWith(SITE + '/')) err(i, `media url is not on ${SITE}: ${m}`);
      if (seenMedia.has(m)) err(i, `image reused from post ${seenMedia.get(m) + 1}: ${m}`);
      else seenMedia.set(m, i);
    });

    const alt = p.alt ?? [];
    if (!Array.isArray(alt)) err(i, 'alt must be an array');
    if (batch.platform === 'ig') {
      if (alt.length !== media.length) {
        err(i, `ig needs one alt text per image, got ${alt.length} for ${media.length} image(s)`);
      }
    } else if (alt.length) {
      err(i, 'alt text only applies to ig');
    }

    const comments = p.comments ?? [];
    if (!Array.isArray(comments)) err(i, 'comments must be an array');
    if (comments.length === 0) err(i, 'no comments, every post gets at least one reply');
    comments.forEach(c => {
      if (!c || !String(c).trim()) err(i, 'empty comment entry');
      // || is the chain separator, so it cannot appear inside a single reply.
      if (String(c).includes('||')) err(i, 'comment contains ||, use separate array entries for a chain');
    });

    if (batch.platform === 'ig' && comments.some(c => /https?:\/\//.test(c))) {
      err(i, 'ig comments are not clickable, a url here does nothing, use the bio link instead');
    }
  });

  // Dashes are banned in the house style and are easy to paste in by accident.
  batch.posts.forEach((p, i) => {
    const all = [p.text, ...(p.comments ?? []), ...(p.alt ?? [])].join(' ');
    if (/[—–]/.test(all)) err(i, 'contains an em or en dash');
  });

  return errors;
}

function toCsv(batch) {
  const lines = [COLS.join(',')];
  for (const p of batch.posts) {
    const row = {
      'Date': p.date,
      'Text': p.text,
      'Link(s)': '',
      'Media URL(s)': (p.media ?? []).join(','),
      'Alt text(s)': (p.alt ?? []).join('||'),
      'Comment(s)': (p.comments ?? []).join('||'),
    };
    lines.push(COLS.map(c => csvField(row[c] ?? '')).join(','));
  }
  return lines.join('\n') + '\n';
}

function summarize(batch) {
  const byDay = new Map();
  let threads = 0;
  let carousels = 0;
  for (const p of batch.posts) {
    const day = p.date.slice(0, 10);
    byDay.set(day, (byDay.get(day) ?? 0) + 1);
    if ((p.comments ?? []).length > 1) threads++;
    if ((p.media ?? []).length > 1) carousels++;
  }
  console.log(`platform:  ${batch.platform}`);
  console.log(`posts:     ${batch.posts.length}`);
  console.log(`days:      ${byDay.size} (${[...byDay.entries()].map(([d, n]) => `${d}: ${n}`).join(', ')})`);
  console.log(`chains:    ${threads} post(s) with more than one comment`);
  if (carousels) console.log(`carousels: ${carousels}`);
}

const args = process.argv.slice(2);
const file = args.find(a => !a.startsWith('-'));
const checkOnly = args.includes('--check');
const outIdx = args.findIndex(a => a === '-o' || a === '--out');
const out = outIdx !== -1 ? args[outIdx + 1] : null;

if (!file) {
  console.log('usage: node scripts/build-social-csv.mjs <batch.json> [-o out.csv] [--check]');
  console.log('       --check   validate without writing');
  console.log('see docs/PUBLER_CSV_HOWTO.md for the batch JSON shape');
  process.exit(1);
}

let batch;
try {
  batch = JSON.parse(fs.readFileSync(file, 'utf8'));
} catch (e) {
  console.error(`could not read ${file}: ${e.message}`);
  process.exit(1);
}

const errors = validate(batch, file);
if (errors.length) {
  console.error(`${errors.length} problem(s), nothing written:\n`);
  errors.forEach(e => console.error('  ' + e));
  process.exit(1);
}

summarize(batch);

if (checkOnly) {
  console.log('\nvalid, nothing written (--check)');
  process.exit(0);
}

const target = out ?? file.replace(/\.json$/, '') + '.csv';
fs.writeFileSync(target, toCsv(batch));
console.log(`\nwrote ${path.relative(process.cwd(), target)}`);

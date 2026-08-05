/**
 * Checks every source link across all MDX articles and reports the ones that
 * are actually broken.
 *
 * Why this exists: no prompt or authoring rule can prevent link rot months
 * after publication, so this is the only layer that catches a source that
 * worked when it was written and 404s today.
 *
 * The important nuance is 403 vs 404. Publishers this site cites the most
 * (Science, Wiley, Cell, Smithsonian, Cornell, AMNH) actively block automated
 * requests, so a plain fetch reports 403 for pages that load perfectly in a
 * browser. Treating those as broken would bury the genuinely dead links in
 * false positives, so they are reported separately as "blocked, verify by
 * hand" rather than as failures.
 *
 * Reads links out of <Sources> blocks in content/**\/*.mdx. Originally this
 * queried the Sanity API; that content now lives in MDX (see
 * _sanity-archive/), so it parses the files directly.
 *
 * Usage:  node scripts/check-source-links.mjs   (or: npm run check:sources)
 * Exits 1 if any genuinely-dead link is found, so it can gate a build if wanted.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, '..', 'content');
const TIMEOUT_MS = 15000;
// Second and final attempt for anything that times out or errors on the first.
const RETRY_TIMEOUT_MS = 45000;
const CONCURRENCY = 6;

// A real browser UA: many publishers 403 anything that looks scripted.
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function walkMdx(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkMdx(full, out);
    else if (entry.name.endsWith('.mdx')) out.push(full);
  }
  return out;
}

// Pulls markdown links out of every <Sources>...</Sources> block. Links
// elsewhere in the body are intentionally ignored: this audit is about
// citations, and most inline links are internal cross-links to our own pages.
function fetchPosts() {
  const posts = [];
  for (const file of walkMdx(CONTENT_DIR)) {
    const raw = fs.readFileSync(file, 'utf8');
    const slug = (raw.match(/^slug:\s*"([^"]+)"/m) || [])[1] || path.basename(file, '.mdx');
    const sources = [];
    const blockRe = /<Sources>([\s\S]*?)<\/Sources>/g;
    let block;
    while ((block = blockRe.exec(raw))) {
      const linkRe = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
      let link;
      while ((link = linkRe.exec(block[1]))) {
        sources.push({ title: link[1], url: link[2] });
      }
    }
    if (sources.length) posts.push({ slug, sources });
  }
  return posts;
}

async function attempt(url, timeoutMs) {
  const res = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
    signal: AbortSignal.timeout(timeoutMs),
    headers: { 'User-Agent': UA },
  });
  return { status: res.status, finalUrl: res.url };
}

// Retries once, slowly, before calling a link dead. Six requests run at a time,
// so a genuinely slow host can blow the normal timeout while being perfectly
// alive: a 950KB PDF on a university server took 30 seconds unloaded and was
// reported broken three runs running. False positives are worse here than a
// slow check, because they train you to skim the BROKEN list, which is the one
// list that has to be trusted.
async function checkOne(link) {
  try {
    return { ...link, ...(await attempt(link.url, TIMEOUT_MS)) };
  } catch {
    try {
      return { ...link, ...(await attempt(link.url, RETRY_TIMEOUT_MS)) };
    } catch (err) {
      return { ...link, status: 'ERR', error: err.message.slice(0, 60) };
    }
  }
}

// Simple concurrency cap so a long source list doesn't open 100 sockets at once.
async function mapLimit(items, limit, fn) {
  const out = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx]);
      }
    })
  );
  return out;
}

const posts = fetchPosts();

const links = [];
for (const post of posts) {
  for (const source of (post.sources || []).flat().filter(Boolean)) {
    if (source?.url) links.push({ slug: post.slug, title: source.title, url: source.url });
  }
}

if (!links.length) {
  console.log('No source links found.');
  process.exit(0);
}

console.log(`Checking ${links.length} source links across ${posts.length} posts...\n`);

const results = await mapLimit(links, CONCURRENCY, checkOne);

const dead = results.filter((r) => r.status === 404 || r.status === 410 || r.status === 'ERR');
const blocked = results.filter((r) => typeof r.status === 'number' && [401, 403, 429].includes(r.status));
const redirected = results.filter(
  (r) =>
    typeof r.status === 'number' &&
    r.status < 400 &&
    r.finalUrl &&
    r.finalUrl.replace(/\/$/, '') !== r.url.replace(/\/$/, '')
);
const ok = results.length - dead.length - blocked.length;

if (dead.length) {
  console.log(`BROKEN (${dead.length}) - these need fixing:`);
  for (const d of dead) {
    console.log(`  [${d.status}] /blog/${d.slug}/`);
    console.log(`         ${d.title}`);
    console.log(`         ${d.url}${d.error ? `  (${d.error})` : ''}`);
  }
  console.log('');
}

if (redirected.length) {
  console.log(`REDIRECTED (${redirected.length}) - still load, but update to the final URL:`);
  for (const r of redirected) {
    console.log(`  ${r.url}\n    -> ${r.finalUrl}`);
  }
  console.log('');
}

if (blocked.length) {
  console.log(`BLOCKED BY PUBLISHER (${blocked.length}) - likely fine, open in a browser to confirm:`);
  for (const b of blocked) {
    console.log(`  [${b.status}] ${b.url}`);
  }
  console.log('');
}

console.log(`Summary: ${ok} OK, ${dead.length} broken, ${blocked.length} blocked, ${redirected.length} redirected.`);

if (dead.length) process.exit(1);

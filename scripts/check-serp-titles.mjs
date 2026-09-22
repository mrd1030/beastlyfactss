#!/usr/bin/env node
// What does Google actually show as the title for our pages?
//
// Every guide ships two titles: `title` becomes the H1 and `seoTitle` becomes
// the <title> tag. Google picks whichever it likes for the blue link, and it
// often picks the H1 when the two disagree. This script asks Google directly,
// one `site:` search per page, and prints a table of H1 / seoTitle / what
// Google displayed, with a verdict per page.
//
// Run it from a desktop, not a cloud session: the cloud sandbox intercepts TLS
// and Google refuses to serve results to anything without JavaScript, so it
// needs a real Chrome with a normal trust store. Puppeteer is a devDependency
// and brings its own.
//
//   node scripts/check-serp-titles.mjs                # 30 default pages
//   node scripts/check-serp-titles.mjs --limit 40     # more of the default list
//   node scripts/check-serp-titles.mjs --urls list.txt  # one URL per line
//   node scripts/check-serp-titles.mjs --headful      # watch it, solve a captcha
//   node scripts/check-serp-titles.mjs --out serp.md  # also write the table
//
// Google will throw a captcha after a few dozen fast queries. The delay
// between searches is deliberately slow (about 6 seconds); if a captcha
// appears anyway, rerun with --headful, solve it once, and the run continues.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE = 'https://beastlyfacts.com';
const DELAY_MS = 6000;

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  return i === -1 ? fallback : args[i + 1];
};
const headful = flag('--headful');
const limit = Number(opt('--limit', 30));
const urlsFile = opt('--urls', null);
const outFile = opt('--out', null);

const meta = JSON.parse(readFileSync(join(ROOT, 'src/lib/generated/mdx-meta.json'), 'utf8'));
const posts = Array.isArray(meta) ? meta : meta.posts || Object.values(meta);
const bySlug = new Map(posts.map((p) => [p.slug, p]));

// Default sample: the pages with the most impressions and the worst clicks in
// Search Console, then a spread across the standard suffixes so each format
// gets a few data points. Legal guides are left out on purpose: they are the
// best performing format and the two checked so far already display the
// seoTitle, so the open question is the other five formats.
const LEAK_PAGES = [
  'ball-python-cost-guide',
  'betta-fish-vs-goldfish-guide',
  'conure-cost-guide',
  'praying-mantis-handling-guide',
  'sulcata-tortoise-tank-setup-guide',
  'goldfish-cost-guide',
  'hamster-cost-guide',
  'african-grey-parrot-cost-guide',
  'red-eared-slider-tank-setup-guide',
  'sulcata-tortoise-cost-guide',
  'jumping-spider-feeding-guide',
  'pacman-frog-feeding-guide',
  'bearded-dragon-feeding-guide',
  'bearded-dragon-cost-guide',
  'leopard-gecko-cost-guide',
  'green-iguana-cost-guide',
  'boa-constrictor-cost-guide',
  'leopard-gecko-health-issues-guide',
  'bearded-dragon-health-issues-guide',
  'crested-gecko-health-issues-guide',
  'crested-gecko-handling-guide',
  'leopard-gecko-handling-guide',
  'hedgehog-handling-guide',
  'budgie-handling-guide',
  'axolotl-tank-setup-guide',
  'bearded-dragon-tank-setup-guide',
  'blue-tongue-skink-tank-setup-guide',
  'corn-snake-feeding-guide',
  'ball-python-feeding-guide',
  'hognose-snake-feeding-guide',
  'gerbil-vs-hamster-guide',
  'tiger-salamander-vs-axolotl-guide',
  'cockatoo-cost-guide',
  'hedgehog-cost-guide',
  'chinchilla-cost-guide',
  'cockatiel-cost-guide',
  'gargoyle-gecko-cost-guide',
  'fire-bellied-toad-cost-guide',
  'green-anole-cost-guide',
  'lovebird-vs-budgie-guide',
];

function slugFromUrl(url) {
  const m = url.match(/\/blog\/([a-z0-9-]+)\/?/);
  return m ? m[1] : null;
}

let targets;
if (urlsFile) {
  targets = readFileSync(urlsFile, 'utf8')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'))
    .map((l) => (l.startsWith('http') ? l : `${SITE}/blog/${l}/`));
} else {
  targets = LEAK_PAGES.slice(0, limit).map((s) => `${SITE}/blog/${s}/`);
}

// A `site:` query built from the slug words finds the page reliably, and the
// title Google shows for a site: search is the same title candidate it shows
// for a normal query on the vast majority of pages.
function queryFor(url) {
  const slug = slugFromUrl(url) || url.replace(SITE, '').replace(/\//g, ' ');
  return `site:beastlyfacts.com ${slug.replace(/-guide$/, '').replace(/-/g, ' ')}`;
}

function normalize(s) {
  return (s || '')
    .replace(/\s*[|\-–—]\s*Beastly Facts\s*$/i, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function verdict(displayed, post) {
  if (!displayed) return 'not found';
  const d = normalize(displayed);
  const h1 = normalize(post?.title);
  const seo = normalize(post?.seoTitle);
  if (seo && d === seo) return 'seoTitle';
  if (h1 && d === h1) return 'H1';
  if (seo && (d.startsWith(seo.slice(0, 30)) || seo.startsWith(d.slice(0, 30)))) return 'seoTitle (trimmed)';
  if (h1 && (d.startsWith(h1.slice(0, 30)) || h1.startsWith(d.slice(0, 30)))) return 'H1 (trimmed)';
  return 'rewritten';
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const { default: puppeteer } = await import('puppeteer');
const browser = await puppeteer.launch({
  headless: !headful,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--lang=en-US'],
});
const page = await browser.newPage();
await page.setUserAgent(
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
);
await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en;q=0.9' });

const rows = [];
for (const [i, url] of targets.entries()) {
  const slug = slugFromUrl(url);
  const post = bySlug.get(slug);
  const q = queryFor(url);
  const searchUrl = `https://www.google.com/search?hl=en&gl=us&pws=0&num=10&q=${encodeURIComponent(q)}`;
  let displayed = null;
  let note = '';
  try {
    await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 45000 });
    // Captcha or consent wall: wait for a human when headful, give up otherwise.
    for (let tries = 0; tries < 60; tries++) {
      const blocked = await page.evaluate(() =>
        /unusual traffic|not a robot|Before you continue/i.test(document.body.innerText.slice(0, 2000)),
      );
      if (!blocked) break;
      if (!headful) {
        note = 'captcha';
        break;
      }
      if (tries === 0) console.error('Google wants a captcha solved; do it in the browser window.');
      await sleep(5000);
    }
    const hits = await page.evaluate(() => {
      const out = [];
      for (const h3 of document.querySelectorAll('a h3')) {
        const a = h3.closest('a');
        if (a?.href) out.push({ title: h3.innerText.trim(), url: a.href });
      }
      return out;
    });
    const want = url.replace(/\/$/, '');
    const hit = hits.find((h) => h.url.replace(/\/$/, '').split('?')[0] === want);
    displayed = hit?.title || null;
    if (!hit && hits.length === 0 && !note) note = 'no results';
  } catch (e) {
    note = e.message.split('\n')[0];
  }
  const v = note === 'captcha' ? 'blocked' : verdict(displayed, post);
  rows.push({ slug: slug || url, h1: post?.title || '', seo: post?.seoTitle || '', displayed: displayed || '', verdict: v, note });
  console.error(`${String(i + 1).padStart(2)}/${targets.length} ${slug}: ${v}${note ? ` (${note})` : ''}`);
  if (i < targets.length - 1) await sleep(DELAY_MS);
}
await browser.close();

const counts = {};
for (const r of rows) counts[r.verdict] = (counts[r.verdict] || 0) + 1;

const esc = (s) => String(s).replace(/\|/g, '\\|');
const lines = [
  `# Google displayed titles, ${new Date().toISOString().slice(0, 10)}`,
  '',
  `Checked ${rows.length} pages. ` +
    Object.entries(counts)
      .map(([k, n]) => `${k}: ${n}`)
      .join(', '),
  '',
  '| Page | H1 (title) | seoTitle | Google shows | Verdict |',
  '|---|---|---|---|---|',
  ...rows.map(
    (r) => `| ${esc(r.slug)} | ${esc(r.h1)} | ${esc(r.seo)} | ${esc(r.displayed)} | ${esc(r.verdict)}${r.note ? ` (${esc(r.note)})` : ''} |`,
  ),
];
const md = lines.join('\n');
console.log(md);
if (outFile) writeFileSync(outFile, md + '\n');

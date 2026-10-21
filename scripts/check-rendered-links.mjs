#!/usr/bin/env node
/**
 * Fails the build on any internal link in the built site that lands on a
 * redirect or on nothing.
 *
 * Runs against dist/ after prerender, so it reads the same HTML a crawler
 * does, including links built by code from data (guide ids, encyclopedia
 * entries, Beastfiles, legal pages, quiz sources) that
 * scripts/check-link-targets.mjs cannot see in source. That check runs first
 * and catches nearly everything in seconds; this is the backstop that costs a
 * build cycle when it fires.
 *
 * A target is fine when dist/ holds it: a prerendered page (<path>/index.html),
 * a fact page from scripts/generate-fact-pages.mjs, or a static file. It fails
 * when it is the source of a public/_redirects rule (link the destination) or
 * when nothing in dist/ answers it. WORKER_ROUTES lists the few paths the
 * Pages worker serves with no file behind them.
 *
 * Usage:  node scripts/check-rendered-links.mjs   (after node prerender.mjs)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const norm = (p) => (p.endsWith('/') ? p : `${p}/`);

// Served by public/_worker.js with no file in dist/.
const WORKER_ROUTES = new Set(['/rss.xml', '/feed.xml', '/sitemap.xml']);

if (!fs.existsSync(DIST)) {
  console.error('Rendered links: no dist/. Run the build (vite build, then node prerender.mjs) first.');
  process.exit(1);
}

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else files.push(full);
  }
})(DIST);

const urlOf = (file) => '/' + path.relative(DIST, file).split(path.sep).join('/');
const pages = new Set();
const assets = new Set();
for (const f of files) {
  const u = urlOf(f);
  if (u.endsWith('/index.html')) pages.add(u.slice(0, -'index.html'.length));
  else assets.add(u);
}

const redirects = new Map();
const redirectPrefixes = [];
for (const line of fs.readFileSync(path.join(ROOT, 'public', '_redirects'), 'utf8').split('\n')) {
  const [from, to] = line.trim().split(/\s+/);
  if (!from || from.startsWith('#') || !to) continue;
  if (from.endsWith('*')) redirectPrefixes.push([from.slice(0, -1), to]);
  else if (norm(from) !== norm(to)) redirects.set(norm(from), to);
}

const HREF = /\shref=["']((?:https?:\/\/(?:www\.)?beastlyfacts\.com)?\/(?!\/)[^"'#?\s]*)/g;
const bad = new Map(); // target -> { reason, from: Set }
let checked = 0;
for (const file of files) {
  if (!file.endsWith('.html')) continue;
  const from = urlOf(file).replace(/index\.html$/, '');
  for (const m of fs.readFileSync(file, 'utf8').matchAll(HREF)) {
    const raw = m[1].replace(/^https?:\/\/(?:www\.)?beastlyfacts\.com/, '') || '/';
    checked++;
    let reason = null;
    if (/\.[a-z0-9]+$/i.test(raw)) {
      if (!assets.has(raw) && !WORKER_ROUTES.has(raw)) reason = 'no such file';
    } else {
      const target = norm(raw);
      const moved = redirects.get(target) || redirectPrefixes.find(([p]) => target.startsWith(p))?.[1];
      if (moved) reason = `redirects to ${moved}`;
      else if (!pages.has(target)) reason = 'no page';
    }
    if (!reason) continue;
    const key = raw;
    if (!bad.has(key)) bad.set(key, { reason, from: new Set() });
    bad.get(key).from.add(from);
  }
}

if (bad.size) {
  console.error(`Rendered links: ${bad.size} internal link target(s) that moved or do not exist.`);
  for (const [target, { reason, from }] of [...bad].sort()) {
    const list = [...from].sort();
    console.error(`  ${target}  (${reason}) on ${list.slice(0, 3).join(', ')}${list.length > 3 ? ` and ${list.length - 3} more` : ''}`);
  }
  process.exit(1);
}
console.log(`Rendered links: all ${checked} internal links on ${pages.size} built pages land on a live page or file.`);

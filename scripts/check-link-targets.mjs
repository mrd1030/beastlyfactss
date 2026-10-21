#!/usr/bin/env node
/**
 * Fails the build on an internal link whose target is gone or moved.
 *
 * Why this exists: the 2026-10-20 Ahrefs audit found seven internal links to
 * redirects. Six were quiz sources naming facts by their titles from before
 * the 2026-10 sourcing pass renamed them; the quiz page found no fact for the
 * stale slug and quietly rendered a plain link to the old URL instead of the
 * popup. The seventh was the corrections log still pointing at the old legal
 * hub. Nothing failed, because nothing compared stored links with what exists.
 *
 * This reads links where they are written, so it runs at the front of the
 * build in seconds: every .md and .mdx under content/ (scheduled ones too,
 * since they go live as written) and every .js, .jsx and .json under src/
 * except src/lib/generated/, which only copies content/. A link is any quoted
 * or markdown site path, relative or on beastlyfacts.com. Comment lines are
 * skipped: old URLs are named there on purpose.
 *
 * It fails when a link:
 *   - is the source of a rule in public/_redirects (link the destination);
 *   - names /facts/<slug>/ that no current fact title produces;
 *   - names /blog/<slug>/ that no article has, or one only scheduled, from a
 *     live page.
 *
 * Routes built from data (guides, encyclopedia, Beastfiles, legal pages) are
 * covered after prerender by scripts/check-rendered-links.mjs, which checks
 * every link on every built page.
 *
 * Usage:  node scripts/check-link-targets.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { slugify } from '../src/lib/utils/slugify.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rel = (p) => path.relative(ROOT, p);
const norm = (p) => (p.endsWith('/') ? p : `${p}/`);

const { facts } = await import('../src/lib/data/facts.js');
const factPaths = new Set(facts.map((f) => `/facts/${slugify(f.title)}/`));

// Redirect sources, both slash forms collapsed to one. The splat rules at the
// bottom of the file become prefixes.
const redirects = new Map();
const redirectPrefixes = [];
for (const line of fs.readFileSync(path.join(ROOT, 'public', '_redirects'), 'utf8').split('\n')) {
  const [from, to] = line.trim().split(/\s+/);
  if (!from || from.startsWith('#') || !to) continue;
  if (from.endsWith('*')) redirectPrefixes.push([from.slice(0, -1), to]);
  // "/quiz /quiz/" only adds the slash, which every link here already has.
  else if (norm(from) !== norm(to)) redirects.set(norm(from), to);
}

function walk(dir, ext, skip = () => false) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (skip(full)) continue;
    if (e.isDirectory()) out.push(...walk(full, ext, skip));
    else if (ext.test(e.name)) out.push(full);
  }
  return out;
}

// Article slugs from frontmatter, falling back to the file name.
const CONTENT = path.join(ROOT, 'content');
const mdFiles = walk(CONTENT, /\.mdx?$/, (p) => p.includes('CAREPACKAGE'));
const isScheduled = (p) => rel(p).split(path.sep).some((s) => s.startsWith('_scheduled'));
const liveSlugs = new Set();
const allSlugs = new Set();
for (const file of mdFiles) {
  const m = /^slug:\s*["']?([^"'\n]+)["']?\s*$/m.exec(fs.readFileSync(file, 'utf8'));
  const slug = m ? m[1].trim() : path.basename(file).replace(/\.mdx?$/, '');
  allSlugs.add(slug);
  if (!isScheduled(file)) liveSlugs.add(slug);
}

const SRC = path.join(ROOT, 'src');
const codeFiles = walk(SRC, /\.(jsx?|json)$/, (p) => p.startsWith(path.join(SRC, 'lib', 'generated')));

// In content, a quoted, parenthesized or absolute site path. In code, only a
// path in a link position (to, href, link, url, page, navigate), so route
// patterns and pathname tests are not read as links. Files (anything with an
// extension), assets and the API are not pages.
const SITE = '(?:https?:\\/\\/(?:www\\.)?beastlyfacts\\.com)?';
const PATH = '(\\/[a-z0-9][a-z0-9/_-]*)(?=[)"\'\\x60#?])';
const CONTENT_LINK = new RegExp('(?:["\'\\x60(]|https?:\\/\\/(?:www\\.)?beastlyfacts\\.com)' + PATH, 'g');
const CODE_LINK = new RegExp('(?:\\b(?:to|href|link|url|page)\\s*[:=]\\s*\\{?\\s*|navigate\\(\\s*)["\'\\x60]' + SITE + PATH, 'g');
const NOT_A_PAGE = /^\/(assets|api|images|fonts|icons)\//;
const COMMENT = /^\s*(\/\/|\*|\/\*|#|<!--)/;

const problems = [];
for (const file of [...mdFiles, ...codeFiles]) {
  const scheduled = isScheduled(file);
  const LINK = /\.mdx?$/.test(file) ? CONTENT_LINK : CODE_LINK;
  fs.readFileSync(file, 'utf8').split(/\r?\n/).forEach((line, i) => {
    if (COMMENT.test(line)) return;
    for (const m of line.matchAll(LINK)) {
      const target = norm(m[1]);
      if (NOT_A_PAGE.test(target)) continue;
      const where = `${rel(file)}:${i + 1}`;
      const moved = redirects.get(target) || redirectPrefixes.find(([p]) => target.startsWith(p))?.[1];
      if (moved) {
        problems.push(`  ${where}  ${target} redirects to ${moved}; link that instead`);
        continue;
      }
      const fact = /^\/facts\/(?!category\/)([^/]+)\/$/.exec(target);
      if (fact && !factPaths.has(target)) {
        problems.push(`  ${where}  ${target} is not a current fact (fact URLs follow the title)`);
        continue;
      }
      const blog = /^\/blog\/(?!category\/|tag\/|page\/)([^/]+)\/$/.exec(target);
      if (blog && !(scheduled ? allSlugs : liveSlugs).has(blog[1])) {
        problems.push(`  ${where}  ${target} is not ${allSlugs.has(blog[1]) ? 'live yet' : 'an article'}`);
      }
    }
  });
}

if (problems.length) {
  console.error(`Link targets: ${problems.length} internal link(s) to a page that moved or does not exist.`);
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log(`Link targets: every internal link in ${mdFiles.length + codeFiles.length} files lands on a live page.`);

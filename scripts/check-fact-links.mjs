#!/usr/bin/env node
/**
 * Fails the build on any article that links to an individual fact page,
 * /facts/<slug>/.
 *
 * Why this exists: a fact page is a head-only shell (see
 * scripts/generate-fact-pages.mjs) marked noindex, follow. Its card and links
 * only exist once JavaScript runs, so a crawler that reads the raw HTML lands
 * on a dead end. The 2026-10-06 Ahrefs audit listed 17 of them under "page has
 * no outgoing links", every one reached through a link: 15 from quiz sources,
 * 2 from an article.
 *
 * The rule (owner, 2026-10-06, docs/RULES.md): nothing links to a single fact.
 * Where facts are browsed (quizzes, the homepage, the gallery) a fact opens as
 * a popup; in an article the fact is stated as plain text. Links to /facts/
 * itself and to /facts/category/<x>/ are fine.
 *
 * Scans every live MDX and Markdown file under content/ (not content/_scheduled-*)
 * for markdown links, href= and to= attributes, relative or absolute, and the
 * components and pages under src/ for literal href= and to= attributes. It
 * looks at what renders, not what is stored: quiz sources and the Beastle pool
 * keep /facts/<slug>/ as an identifier and render it as a popup button, and
 * share buttons still build a fact's URL for people to paste.
 *
 * Usage:  node scripts/check-fact-links.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = path.join(ROOT, 'content');
const CODE = [path.join(ROOT, 'src', 'pages'), path.join(ROOT, 'src', 'components')];

// /facts/<slug> with an optional trailing slash, query or hash; never
// /facts/ alone or /facts/category/...
const FACT_LINK = /(?:\]\(|href=["']|to=["'])(?:https?:\/\/(?:www\.)?beastlyfacts\.com)?\/facts\/(?!category\/)([a-z0-9][a-z0-9-]*)\/?(?=[)"'#?])/g;

function walk(dir, ext = /\.mdx?$/) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('_scheduled')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, ext));
    else if (ext.test(entry.name)) out.push(full);
  }
  return out;
}

const problems = [];
const files = [...walk(CONTENT), ...CODE.flatMap((d) => walk(d, /\.jsx?$/))];
for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const m of line.matchAll(FACT_LINK)) {
      problems.push(`  ${path.relative(ROOT, file)}:${i + 1}  /facts/${m[1]}/`);
    }
  });
}

if (problems.length) {
  console.error(`Fact links: ${problems.length} link(s) to a single fact page.`);
  console.error(problems.join('\n'));
  console.error('\nState the fact as plain text instead; a fact page is a head-only shell crawlers cannot follow (docs/RULES.md).');
  process.exit(1);
}
console.log(`Fact links: none of ${files.length} articles, pages and components links a single fact page.`);

// Enforces the affiliate-link rules that apply to article bodies and frontmatter.
//
// Scope note: href resolution (<AffiliateLink href> pointing at a real product's
// `link`) and untagged amazon.com URLs are ALREADY checked, in the "Second surface"
// block near the end of scripts/check-cost-coverage.mjs. This file deliberately does
// not repeat either one. What it covers is everything on the MDX side that nothing
// else looks at:
//
//   1. relatedProducts slugs resolve to a real product.
//      Blog.jsx does AFFILIATE_PRODUCTS.find(p => p.slug === slug).filter(Boolean),
//      so a typo'd or renamed slug is silently dropped - the product card just never
//      renders and the article looks fine. Nothing errors, nothing warns.
//
//   2. No product is linked twice in the same article.
//      A repeat reads as padding rather than a recommendation. The exception is a
//      product that appears as a row in two DIFFERENT ComparisonTables: "Paper-based
//      bedding $18-30" under Upfront Setup and "Bedding (ongoing) $60-100" under
//      Ongoing Costs are separate line items with separate prices, not a duplicate.
//      Same table twice is a real duplicate and does fail.
//
//   3. At most MAX_PROSE_LINKS inline links per article.
//      Table rows are uncapped on purpose: in a cost guide the table IS the content,
//      one row per item with its price. Inline links in body prose are the
//      discretionary ones, and Google's spam policy names "thin affiliate pages" and
//      "affiliate programs with minimal original material" explicitly, so the cap is
//      about not reading as a storefront.
//
//   4. <AffiliateLink> tags are balanced.
//      An unbalanced tag breaks the MDX parse at build time; catching it here names
//      the file instead of failing deep inside the bundler.
//
// Exits 1 on any violation, so it can gate a build.
// Run: node scripts/check-affiliate-mdx.mjs [--verbose]

import fs from 'node:fs';
import path from 'node:path';

import { AFFILIATE_PRODUCTS } from '../src/lib/data/affiliateProducts.js';

const MAX_PROSE_LINKS = 5;

const verbose = process.argv.includes('--verbose');

const productSlugs = new Set(AFFILIATE_PRODUCTS.map((p) => p.slug));
const productByLink = new Map(AFFILIATE_PRODUCTS.map((p) => [p.link, p]));

function walkMdx(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walkMdx(full, out);
    else if (e.name.endsWith('.mdx')) out.push(full);
  }
  return out;
}

// Frontmatter is the first --- delimited block. The body can contain its own ---
// horizontal rules, so this slices at the closing delimiter rather than splitting.
function splitFrontmatter(text) {
  const open = text.indexOf('---');
  if (open !== 0) return { frontmatter: '', body: text };
  const close = text.indexOf('\n---', open + 3);
  if (close === -1) return { frontmatter: '', body: text };
  return { frontmatter: text.slice(open + 3, close), body: text.slice(close + 4) };
}

function relatedProductSlugs(frontmatter) {
  const block = frontmatter.match(/^relatedProducts:\n((?:\s*-\s.*\n)+)/m);
  if (!block) return [];
  return [...block[1].matchAll(/^\s*-\s*["']?([^"'\n]+?)["']?\s*$/gm)].map((m) => m[1]);
}

const badSlugs = [];
const duplicates = [];
const overCap = [];
const unbalanced = [];

const files = walkMdx('content');
let totalLinks = 0;
let totalProse = 0;

for (const file of files) {
  const name = path.basename(file);
  const text = fs.readFileSync(file, 'utf8');

  const opens = (text.match(/<AffiliateLink\b/g) || []).length;
  const closes = (text.match(/<\/AffiliateLink>/g) || []).length;
  if (opens !== closes) {
    unbalanced.push({ name, opens, closes });
    continue; // ranges below would be meaningless on a malformed file
  }

  const { frontmatter, body } = splitFrontmatter(text);

  for (const slug of relatedProductSlugs(frontmatter)) {
    if (!productSlugs.has(slug)) badSlugs.push({ name, slug });
  }

  // Which ComparisonTable a link sits in, or -1 for body prose.
  const tables = [...body.matchAll(/<ComparisonTable[\s\S]*?\n\/>/g)].map((m) => [
    m.index,
    m.index + m[0].length,
  ]);
  const tableIndexAt = (i) => tables.findIndex(([a, b]) => i >= a && i < b);

  const occurrences = [];
  for (const m of body.matchAll(/<AffiliateLink\b[^>]*>[\s\S]*?<\/AffiliateLink>/g)) {
    const href = (m[0].match(/href=["']([^"']+)["']/) || [])[1];
    occurrences.push({ href, table: tableIndexAt(m.index) });
  }
  totalLinks += occurrences.length;

  const prose = occurrences.filter((o) => o.table < 0);
  totalProse += prose.length;
  if (prose.length > MAX_PROSE_LINKS) {
    overCap.push({ name, count: prose.length });
  }

  const byHref = new Map();
  for (const o of occurrences) {
    if (!byHref.has(o.href)) byHref.set(o.href, []);
    byHref.get(o.href).push(o.table);
  }
  for (const [href, where] of byHref) {
    if (where.length < 2) continue;
    // Rows in distinct tables are separate line items, not a repeat.
    const allTables = where.every((t) => t >= 0);
    const allDistinct = new Set(where).size === where.length;
    if (allTables && allDistinct) continue;
    const product = productByLink.get(href);
    duplicates.push({ name, label: product ? product.slug : href, times: where.length });
  }
}

console.log(
  `Article affiliate links: ${totalLinks} uses across ${files.length} MDX files ` +
    `(${totalProse} inline in prose, ${totalLinks - totalProse} in cost tables).`,
);

if (unbalanced.length) {
  console.log(`\nFAIL - ${unbalanced.length} file(s) have unbalanced <AffiliateLink> tags:`);
  for (const u of unbalanced) console.log(`  ${u.name}  ${u.opens} open, ${u.closes} close`);
  console.log('\nThis breaks the MDX parse. Fix before anything else here is meaningful.');
}

if (badSlugs.length) {
  console.log(`\nFAIL - ${badSlugs.length} relatedProducts slug(s) match no product:`);
  for (const b of badSlugs) console.log(`  ${b.name.padEnd(48)} ${b.slug}`);
  console.log(
    '\nBlog.jsx drops these silently, so the product card simply never renders.\n' +
      'Fix the slug, or add the product to src/lib/data/affiliateProducts.js.',
  );
}

if (duplicates.length) {
  console.log(`\nFAIL - ${duplicates.length} product(s) linked more than once in one article:`);
  for (const d of duplicates) console.log(`  ${d.name.padEnd(48)} ${d.times}x  ${d.label}`);
  console.log(
    '\nKeep one link per product per article. Where it appears in both a cost table\n' +
      'and prose, keep the table row - that row is the article\'s actual content.',
  );
}

if (overCap.length) {
  console.log(`\nFAIL - ${overCap.length} article(s) exceed ${MAX_PROSE_LINKS} inline prose links:`);
  for (const o of overCap) console.log(`  ${o.name.padEnd(48)} ${o.count} prose links`);
  console.log(
    '\nUnwrap the extras: keep the visible text, drop the <AffiliateLink> wrapper,\n' +
      'so the prose reads the same. Cost-table rows do not count toward this cap.',
  );
}

const failures = unbalanced.length + badSlugs.length + duplicates.length + overCap.length;

if (!failures) console.log('All clear.');

if (verbose) {
  const counts = new Map();
  for (const file of files) {
    const text = fs.readFileSync(file, 'utf8');
    for (const m of text.matchAll(/<AffiliateLink[^>]*href=["']([^"']+)["']/g)) {
      counts.set(m[1], (counts.get(m[1]) || 0) + 1);
    }
  }
  const ranked = [...counts]
    .map(([link, n]) => [productByLink.get(link)?.slug || link, n])
    .sort((a, b) => b[1] - a[1]);
  console.log('\nMost-linked products across all articles:');
  for (const [slug, n] of ranked.slice(0, 15)) console.log(`  ${String(n).padStart(3)}x  ${slug}`);

  const linked = new Set(counts.keys());
  const never = AFFILIATE_PRODUCTS.filter((p) => !linked.has(p.link));
  console.log(`\n${never.length} product(s) are never linked from an article body:`);
  for (const p of never) console.log(`      ${p.slug}`);
}

process.exit(failures ? 1 : 0);

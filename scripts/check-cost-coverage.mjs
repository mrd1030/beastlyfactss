// Reports how many Cost Builder line items in each care guide resolve to a real
// affiliate product, and names the ones that do not.
//
// Why this exists: getAffiliateForItem() in src/lib/data/affiliateProducts.js is an
// exact, case-insensitive string match against each product's `covers` array. There
// is no fuzzy matching. So a cost item written as "Solid 8 in exercise wheel" links
// to nothing, while "Solid exercise wheel (10-12 in)" links to a real product with a
// vetted price. The two look equally reasonable in the source file and only one of
// them earns anything or shows the reader a price that was actually checked.
//
// This is silent by nature: the guide renders fine either way, the Cost Builder just
// quietly has no products in it. Five guides shipped at 5% coverage against a 63%
// baseline before anyone noticed, which is what this check is here to prevent.
//
// Exits 1 if any guide falls below MIN_COVERAGE, so it can gate a build.
// Run: node scripts/check-cost-coverage.mjs [--verbose]

// Imported file by file rather than through the `allGuides` barrel, which uses
// extensionless specifiers that Vite resolves and plain Node does not. Same
// approach as scripts/generate-guides-index.js.
import { amphibianGuides } from '../src/lib/data/guides/amphibians.js';
import { birdGuides } from '../src/lib/data/guides/birds.js';
import { catGuides } from '../src/lib/data/guides/cats.js';
import { dogGuides } from '../src/lib/data/guides/dogs.js';
import { fishGuides } from '../src/lib/data/guides/fish.js';
import { geckoGuides } from '../src/lib/data/guides/geckos.js';
import { invertebrateGuides } from '../src/lib/data/guides/invertebrates.js';
import { lizardGuides } from '../src/lib/data/guides/lizards.js';
import { smallMammalGuides } from '../src/lib/data/guides/smallMammals.js';
import { snakeGuides } from '../src/lib/data/guides/snakes.js';
import { turtleGuides } from '../src/lib/data/guides/turtles.js';
import { AFFILIATE_PRODUCTS, getAffiliateForItem } from '../src/lib/data/affiliateProducts.js';

const allGuides = [
  ...amphibianGuides, ...birdGuides, ...catGuides, ...dogGuides, ...fishGuides,
  ...geckoGuides, ...invertebrateGuides, ...lizardGuides, ...smallMammalGuides,
  ...snakeGuides, ...turtleGuides,
];

// A guide with ZERO matches is the hard failure, because it is unambiguous: nobody
// looked at the `covers` vocabulary while writing it. A percentage floor would be the
// wrong gate, since plenty of cost lines can never match a product. Vet exams, DNA
// clearances, spay/neuter, pet insurance and electricity are real costs with no SKU,
// and the cat and dog guides are legitimately full of them.
//
// Low coverage is still reported as a warning so it stays visible without failing a
// build for a guide that is simply service-heavy.
const WARN_BELOW = 0.4;

const verbose = process.argv.includes('--verbose');

const rows = [];
const unmatchedByGuide = new Map();

for (const guide of allGuides) {
  const items = [...(guide.costs?.setup || []), ...(guide.costs?.annual || [])];
  if (!items.length) continue;

  const unmatched = items.filter((i) => !getAffiliateForItem(i.item)).map((i) => i.item);
  rows.push({
    id: guide.id,
    total: items.length,
    matched: items.length - unmatched.length,
    coverage: (items.length - unmatched.length) / items.length,
  });
  if (unmatched.length) unmatchedByGuide.set(guide.id, unmatched);
}

rows.sort((a, b) => a.coverage - b.coverage);

const totalItems = rows.reduce((s, r) => s + r.total, 0);
const totalMatched = rows.reduce((s, r) => s + r.matched, 0);

const failing = rows.filter((r) => r.matched === 0);
const warning = rows.filter((r) => r.matched > 0 && r.coverage < WARN_BELOW);

console.log(
  `Cost Builder coverage: ${totalMatched}/${totalItems} items across ${rows.length} guides ` +
    `(${Math.round((totalMatched / totalItems) * 100)}%).`,
);

if (failing.length) {
  console.log(`\nFAIL - ${failing.length} guide(s) match no affiliate product at all:`);
  for (const r of failing) {
    console.log(`  ${r.id.padEnd(20)} 0/${r.total}`);
    for (const item of unmatchedByGuide.get(r.id) || []) console.log(`      no product: ${item}`);
  }
  console.log(
    '\nEither reword the cost item to match an existing `covers` string in\n' +
      'src/lib/data/affiliateProducts.js, or add the product and its covers there.',
  );
}

if (warning.length) {
  console.log(`\nLow coverage (under ${Math.round(WARN_BELOW * 100)}%), not a failure:`);
  for (const r of warning) {
    console.log(`  ${r.id.padEnd(22)} ${r.matched}/${r.total}  (${Math.round(r.coverage * 100)}%)`);
  }
  console.log('  Run with --verbose to see which items these are.');
}

if (verbose) {
  console.log('\nEvery unmatched item, grouped by guide:');
  for (const [id, items] of unmatchedByGuide) {
    console.log(`  ${id}`);
    for (const item of items) console.log(`      ${item}`);
  }

  // The reverse view: covers strings that no guide actually uses. Useful when adding
  // products, since a product whose covers match nothing is dead weight.
  const used = new Set();
  for (const guide of allGuides) {
    for (const i of [...(guide.costs?.setup || []), ...(guide.costs?.annual || [])]) {
      const p = getAffiliateForItem(i.item);
      if (p) used.add(p.slug);
    }
  }
  const orphans = AFFILIATE_PRODUCTS.filter((p) => (p.covers || []).length && !used.has(p.slug));
  console.log(`\n${orphans.length} product(s) have covers that no guide currently matches:`);
  for (const p of orphans) console.log(`      ${p.slug}`);
}

process.exit(failing.length ? 1 : 0);

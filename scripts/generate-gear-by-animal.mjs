// Builds the per-animal gear lists behind the /gear species search.
//
// Nothing here is curated by hand. Every product on an animal's list is one the
// site already recommends for that animal somewhere, so the list stays in step
// with the guides as they change:
//
//   1. Essentials: the hub's What to buy lines, in the hub's order, matched to a
//      product through `covers` (the same match the hub itself renders).
//   2. Also recommended: every product that animal's own articles link, whether
//      as an inline link, a cost table row (by covers) or a Recommended Gear
//      card, with the articles each one came from.
//   3. Other sizes and brands: `altGroup` siblings of anything above.
//
// "That animal's own articles" means the guide's related articles whose slug
// names the animal (bearded-dragon-brumation-guide, bengal-cat-enrichment-guide).
// Shared pieces like the UVB lighting guide are left out: they link products
// for many species, and a sulcata UVB kit has no place on a gecko's list.
// Comparison articles (-vs-) are left out for the same reason. As a last guard,
// a product tagged for a different pet group never lands in section 2 or 3.
//
// Runs before `vite build` (see package.json). Writes
// src/lib/generated/gear-by-animal.json.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { costTableProducts } from '../src/lib/costs.js';

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
import { getRelatedArticleSlugs } from '../src/lib/data/relatedArticles.js';
import { shortLabelFor } from '../src/lib/data/articleLabels.js';

// fileURLToPath, not URL.pathname: on Windows pathname is /C:/... with %20
// for spaces, which path.resolve turns into C:\C:\...
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const index = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/lib/generated/articles-index.json'), 'utf8'));
const posts = index.articles.map((a) => ({ ...a, _id: a.slug }));
const titleOf = new Map(index.articles.map((a) => [a.slug, a.title]));

const GROUPS = [
  [amphibianGuides, 'reptiles-amphibians'], [birdGuides, 'birds'], [catGuides, 'dogs-cats'],
  [dogGuides, 'dogs-cats'], [fishGuides, 'fish'], [geckoGuides, 'reptiles-amphibians'],
  [invertebrateGuides, 'reptiles-amphibians'], [lizardGuides, 'reptiles-amphibians'],
  [smallMammalGuides, 'small-mammals'], [snakeGuides, 'reptiles-amphibians'],
  [turtleGuides, 'reptiles-amphibians'],
];

const byLink = new Map(AFFILIATE_PRODUCTS.map((p) => [p.link, p]));
const bySlug = new Map(AFFILIATE_PRODUCTS.map((p) => [p.slug, p]));

// The word an animal's articles carry in their slug. Cat and dog hubs are
// cat-bengal and dog-beagle while their articles are bengal-cat-... and
// beagle-..., so the breed part is the key; the universal hubs keep theirs.
function slugKey(id) {
  if (/^(cat|dog)-universal$/.test(id)) return id.split('-')[0];
  return id.replace(/^(cat|dog)-/, '');
}

function articleFile(slug) {
  for (const dir of ['content/guides', 'content/blog']) {
    const f = path.join(ROOT, dir, `${slug}.mdx`);
    if (fs.existsSync(f)) return f;
  }
  return null;
}

function productsInArticle(slug) {
  const file = articleFile(slug);
  if (!file) return [];
  const text = fs.readFileSync(file, 'utf8');
  const found = [];
  for (const m of text.matchAll(/<AffiliateLink\b[^>]*href=["']([^"']+)["']/g)) {
    const p = byLink.get(m[1]);
    if (p) found.push(p);
  }
  // Tables drawn from the shared price list link their rows at render time.
  for (const t of costTableProducts(text)) {
    for (const s of t.products) {
      const p = bySlug.get(s);
      if (p) found.push(p);
    }
  }
  if (slug.endsWith('-cost-guide')) {
    for (const t of text.matchAll(/<ComparisonTable[\s\S]*?\n\/>/g)) {
      for (const r of t[0].matchAll(/\[\s*"((?:[^"\\]|\\.)*)"\s*,/g)) {
        const p = getAffiliateForItem(JSON.parse(`"${r[1]}"`));
        if (p) found.push(p);
      }
    }
  }
  const cards = text.match(/^relatedProducts:\n((?:[ \t]*-[ \t].*\n)+)/m);
  if (cards) {
    for (const c of cards[1].matchAll(/-\s*["']?([^"'\n]+?)["']?\s*$/gm)) {
      const p = bySlug.get(c[1]);
      if (p) found.push(p);
    }
  }
  return found;
}

// "Bearded Dragon Brumation Guide: What to Expect" reads as "Brumation Guide"
// under a card on the bearded dragon list: the animal is already the page.
function label(slug, animalName) {
  const short = shortLabelFor(slug);
  if (short) return short;
  const title = (titleOf.get(slug) || slug).split(':')[0].trim();
  const trimmed = title.replace(new RegExp(`^${animalName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+`, 'i'), '');
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}
const fitsGroup = (p, group) => !p.pets?.length || p.pets.includes(group);

const animals = [];
for (const [guides, group] of GROUPS) {
  for (const g of guides) {
    const essentials = [];
    for (const line of g.buyList || []) {
      const p = getAffiliateForItem(line);
      if (p && !essentials.includes(p.slug)) essentials.push(p.slug);
    }

    const key = slugKey(g.id);
    const own = getRelatedArticleSlugs(g.id, posts)
      .filter((s) => s.includes(key) && !s.includes('-vs-'));
    const from = new Map();
    for (const slug of own) {
      for (const p of productsInArticle(slug)) {
        if (essentials.includes(p.slug) || !fitsGroup(p, group)) continue;
        if (!from.has(p.slug)) from.set(p.slug, []);
        const l = label(slug, g.name.split(':')[0].trim());
        if (!from.get(p.slug).includes(l)) from.get(p.slug).push(l);
      }
    }
    const recommended = [...from].map(([slug, sources]) => ({ slug, from: sources }));

    const listed = new Set([...essentials, ...from.keys()]);
    const alternates = [];
    for (const slug of listed) {
      const grp = bySlug.get(slug)?.altGroup;
      if (!grp) continue;
      for (const alt of AFFILIATE_PRODUCTS) {
        if (alt.altGroup === grp && !listed.has(alt.slug) && !alternates.includes(alt.slug) && fitsGroup(alt, group)) {
          alternates.push(alt.slug);
        }
      }
    }

    if (!essentials.length && !recommended.length) continue;
    animals.push({ id: g.id, name: g.name.split(':')[0].trim(), emoji: g.emoji, essentials, recommended, alternates });
  }
}

animals.sort((a, b) => a.name.localeCompare(b.name));
const out = path.join(ROOT, 'src/lib/generated/gear-by-animal.json');
fs.writeFileSync(out, `${JSON.stringify({ animals }, null, 2)}\n`);
const total = animals.reduce((n, a) => n + a.essentials.length + a.recommended.length + a.alternates.length, 0);
console.log(`Gear by animal: ${animals.length} animals, ${total} listings -> ${path.relative(ROOT, out)}`);

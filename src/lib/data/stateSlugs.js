import LEGAL from '@/lib/data/legalStatus.json';

// URL slugs for the 52 jurisdictions in the legal matrix, so the dataset can be
// read along its other axis: /exotic-pet-laws/<animal>/ is one animal across
// every jurisdiction, /exotic-pet-laws/state/<slug>/ is one jurisdiction across
// every animal.
//
// Derived from LEGAL.jurisdictions rather than hand-listed, for the same reason
// prerender.mjs and generate-sitemap.js derive their animal routes from the
// dataset: a hand-copied list goes stale the moment a jurisdiction is added, and
// then the route exists with no static file behind it, which on Cloudflare is a
// real 404 for every crawler.
//
// Two of the 52 are not states. DC is a federal district and New York City is a
// city with its own Health Code, and both need to keep their own names in the
// URL ("district-of-columbia", "new-york-city") rather than being forced into a
// state-shaped slug.
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const JURISDICTION_CODES = Object.keys(LEGAL.jurisdictions);

export const CODE_TO_SLUG = Object.fromEntries(
  JURISDICTION_CODES.map((code) => [code, slugify(LEGAL.jurisdictions[code].name)]),
);

export const SLUG_TO_CODE = Object.fromEntries(
  Object.entries(CODE_TO_SLUG).map(([code, slug]) => [slug, code]),
);

// A to Z by name, which is the order every list of these renders in. Sorting by
// code would put DC between CT and DE and NYC between NV and NY, which is the
// kind of ordering a reader cannot predict without already knowing the codes.
export const JURISDICTIONS_AZ = [...JURISDICTION_CODES].sort((a, b) =>
  LEGAL.jurisdictions[a].name.localeCompare(LEGAL.jurisdictions[b].name),
);

export const jurisdictionName = (code) => LEGAL.jurisdictions[code]?.name ?? code;

export const statePath = (code) => `/exotic-pet-laws/state/${CODE_TO_SLUG[code]}/`;

import LEGAL from '@/lib/data/legalStatus.json';
import { bucketFor } from '@/components/legal/LegalStatusMap';

// The legal matrix, read down a column instead of across a row.
//
// legalStatus.json is keyed animal -> jurisdiction because that is the question
// the map was built for ("where is the serval banned?"). The state pages ask the
// transposed question ("what is banned in Texas?"), and nothing in the dataset
// answers it without walking all 52 animals. That walk is 2,704 lookups, so it
// happens once at module load rather than per render.

export const ANIMAL_IDS = Object.keys(LEGAL.animals);
export const TRACKED_ANIMAL_COUNT = ANIMAL_IDS.length;

// Severity order for the rows on a state page. Banned first, then the things you
// can get with paperwork, then the conditions, then the unresolved ones, and the
// unrestricted majority last. Someone landing on a state page wants the "you
// cannot have this" list, and burying it under 40 alphabetised clear rows means
// they never see it on a phone.
const STATUS_RANK = { banned: 0, permit: 1, conditional: 2, restricted: 3, unclear: 4, legal: 5 };
const rankOf = (status) => STATUS_RANK[status] ?? 6;

// One pass over the matrix, producing both views.
const BY_CODE = {};
for (const code of Object.keys(LEGAL.jurisdictions)) {
  const rows = [];
  const counts = { banned: 0, permit: 0, conditions: 0, unclear: 0, none: 0, notChecked: 0 };

  for (const id of ANIMAL_IDS) {
    const animal = LEGAL.animals[id];
    const entry = animal.jurisdictions[code];
    const bucket = bucketFor(entry?.status);
    counts[bucket] += 1;
    rows.push({ id, name: animal.name, scientific: animal.scientific, article: animal.article, entry, bucket });
  }

  rows.sort((a, b) => {
    const r = rankOf(a.entry?.status) - rankOf(b.entry?.status);
    return r !== 0 ? r : a.name.localeCompare(b.name);
  });

  BY_CODE[code] = {
    code,
    name: LEGAL.jurisdictions[code].name,
    level: LEGAL.jurisdictions[code].level,
    scope: LEGAL.jurisdictions[code].scope ?? null,
    rows,
    counts,
    // The headline number, and the one the heat map paints. "Banned or permit
    // required" is the line worth drawing because it is the line between "go
    // and buy one" and "you cannot, or not without the state's permission
    // first". Conditions are a real restriction too, but they are a restriction
    // on how you keep the animal rather than on whether you may, so folding
    // them into one number would put Minnesota (30 conditional, 1 banned) next
    // to Hawaii (40 banned) and call them comparable.
    gated: counts.banned + counts.permit,
    // Kept separate so a page can say so rather than implying a state with 30
    // conditional entries is permissive.
    conditioned: counts.conditions,
  };
}

export const STATE_LEGAL = BY_CODE;

export const forJurisdiction = (code) => BY_CODE[code] ?? null;

// Five bands rather than a continuous ramp. The counts run 0 to 41 with a median
// of 7, so a linear ramp would compress four fifths of the country into the
// bottom fifth of the scale and make the map look uniform. Banding by how the
// values actually cluster is what makes Hawaii, New Jersey and DC separate from
// the pack at a glance.
export const HEAT_BANDS = [
  { key: 'none', label: 'Nothing on the list restricted', min: 0, max: 0, fill: 'hsl(var(--muted))', text: 'inherit' },
  { key: 'low', label: '1 to 4 animals', min: 1, max: 4, fill: '#FEF3C7', text: '#3B2600' },
  { key: 'some', label: '5 to 9 animals', min: 5, max: 9, fill: '#FDBA74', text: '#3B2600' },
  { key: 'high', label: '10 to 19 animals', min: 10, max: 19, fill: '#F97316', text: '#FFFFFF' },
  { key: 'severe', label: '20 or more animals', min: 20, max: Infinity, fill: '#B91C1C', text: '#FFFFFF' },
];

export const heatBandFor = (gated) =>
  HEAT_BANDS.find((b) => gated >= b.min && gated <= b.max) ?? HEAT_BANDS[0];

// Most restrictive first, for the ranked list under the heat map. Ties break
// alphabetically so the order is stable between builds.
export const JURISDICTIONS_BY_RESTRICTION = Object.values(BY_CODE)
  .slice()
  .sort((a, b) => (b.gated - a.gated) || a.name.localeCompare(b.name));

// There was a lastVerified(code) here returning the newest date in a column.
// It was wrong for the only thing it was used for: 36 of the 52 jurisdictions
// carry several distinct verifiedOn values about a month apart, so the newest
// of them presented as "last verified" overstates the older rows. Use
// describeVerified() in src/lib/utils/verifiedDates.js, which reports the span.

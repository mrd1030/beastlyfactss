# map-legal-finish

Do not merge to main until reviewed.

Every animal now has a cell for all 52 jurisdictions (50 states + DC + NYC).

    node scripts/apply-legal-additions.mjs

Merges `src/lib/data/legal-additions-*.json` into `legalStatus.json`.
Never overwrites a cell that already had a cite.

Native herps, Vermont's closed list, and Pennsylvania's "includes but is not limited to" stay grey or conditional.

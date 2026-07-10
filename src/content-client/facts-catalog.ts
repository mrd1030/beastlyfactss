import rawFacts from './facts-catalog-data.json';

/**
 * Bundled, local, static facts library — sourced verbatim from
 * beastlyfactss's own real facts database (src/lib/data/facts.js, synced to
 * public/facts.json), NOT invented. This is a distinct dataset from
 * species-catalog.ts's per-species `facts` arrays (those are guide-derived
 * facts about the 78 collectible species specifically); this one is a
 * standalone library of ~178 short, topic-based animal facts spanning many
 * more animals than just the 78 catalog species, and backs the Facts tab's
 * full browse/search list plus the Daily Fact rotation.
 */

export interface CatalogFact {
  id: number;
  title: string;
  emoji: string;
  animal: string;
  category: string;
  fact: string;
  image: string;
}

/** Fixed display order for the Facts tab's category filter chips. */
export const FACT_CATEGORY_ORDER = ['Ocean', 'Mammals', 'Birds', 'Reptiles', 'Dogs & Cats', 'Weird & Wonderful'];

const FACTS: CatalogFact[] = rawFacts as CatalogFact[];

/** All bundled facts, in source order. */
export function getAllFacts(): CatalogFact[] {
  return FACTS;
}

export function getFactById(id: number): CatalogFact | undefined {
  return FACTS.find((fact) => fact.id === id);
}

/** A pseudo-random fact, deterministic per `seed` (e.g. a day-of-year
 * number) so the same seed always yields the same fact within a session. */
export function getFactForSeed(seed: number): CatalogFact {
  const index = ((seed % FACTS.length) + FACTS.length) % FACTS.length;
  return FACTS[index];
}

/** Distinct categories actually present, ordered per FACT_CATEGORY_ORDER
 * (any unexpected category is appended alphabetically after the known
 * ones, so nothing is silently dropped). */
export function getAllFactCategories(): string[] {
  const present = new Set(FACTS.map((fact) => fact.category));
  const known = FACT_CATEGORY_ORDER.filter((category) => present.has(category));
  const unknown = [...present].filter((category) => !FACT_CATEGORY_ORDER.includes(category)).sort();
  return [...known, ...unknown];
}

export function getFactsByCategory(category: string): CatalogFact[] {
  return FACTS.filter((fact) => fact.category === category);
}

/** Case-insensitive substring match over title/animal/fact text. */
export function searchFacts(query: string): CatalogFact[] {
  const q = query.trim().toLowerCase();
  if (!q) return FACTS;
  return FACTS.filter(
    (fact) =>
      fact.title.toLowerCase().includes(q) ||
      fact.animal.toLowerCase().includes(q) ||
      fact.fact.toLowerCase().includes(q)
  );
}

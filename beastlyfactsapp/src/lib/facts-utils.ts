import type { CatalogFact } from '@/content-client/facts-catalog';

/** Deterministic-friendly Fisher-Yates shuffle.
 * Pass `random` in tests to produce stable output order assertions. */
export function shuffleArray<T>(items: T[], random: () => number = Math.random): T[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function filterFacts(facts: CatalogFact[], activeCategory: string | null, searchText: string): CatalogFact[] {
  const query = searchText.trim().toLowerCase();
  return facts.filter((fact) => {
    if (activeCategory && fact.category !== activeCategory) return false;
    if (!query) return true;
    const haystack = `${fact.title} ${fact.animal} ${fact.fact}`.toLowerCase();
    return haystack.includes(query);
  });
}

export function orderFacts(
  visibleFacts: CatalogFact[],
  randomized: boolean,
  randomOrderIds: number[]
): CatalogFact[] {
  if (!randomized || randomOrderIds.length === 0) return visibleFacts;
  const byId = new Map(visibleFacts.map((fact) => [fact.id, fact]));
  return randomOrderIds.flatMap((id) => {
    const fact = byId.get(id);
    return fact ? [fact] : [];
  });
}

export function paginateFacts(facts: CatalogFact[], page: number, pageSize: number): {
  pageCount: number;
  currentPage: number;
  factsPage: CatalogFact[];
} {
  const pageCount = Math.max(1, Math.ceil(facts.length / pageSize));
  const currentPage = Math.min(page, pageCount - 1);
  const factsPage = facts.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
  return { pageCount, currentPage, factsPage };
}

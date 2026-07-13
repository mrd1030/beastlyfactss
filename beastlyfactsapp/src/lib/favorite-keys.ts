const FACT_FAVORITE_PREFIX = 'fact:';

export function getFactFavoriteId(factId: number): string {
  return `${FACT_FAVORITE_PREFIX}${factId}`;
}

export function isFactFavoriteId(favoriteId: string): boolean {
  return favoriteId.startsWith(FACT_FAVORITE_PREFIX);
}

export function parseFactFavoriteId(favoriteId: string): number | null {
  if (!isFactFavoriteId(favoriteId)) return null;
  const raw = favoriteId.slice(FACT_FAVORITE_PREFIX.length);
  const parsed = Number(raw);
  return Number.isInteger(parsed) ? parsed : null;
}

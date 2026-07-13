import { dayOfYear } from './date';

/**
 * Picks "today's" entry deterministically from whatever pool of entries is
 * currently available (live-fetched or cached) — same calendar day -> same
 * index into the pool, so everyone (and every re-render) sees the same
 * "entry of the day" as long as the pool's order doesn't change.
 *
 * This only picks which ENTRY is today's; see `pickDailyFactText` below for
 * how the actual fact text shown on the card is derived from that entry.
 */
export function pickDailyEntry<T>(pool: T[], date: Date = new Date()): T | null {
  if (pool.length === 0) return null;
  const index = dayOfYear(date) % pool.length;
  return pool[index];
}

/**
 * Shape `pickDailyFactText` needs from an entry — a structural subset of
 * `ProvisionalEntry`, kept local so this module doesn't need to import the
 * full content-client type just for this.
 */
export interface DailyFactSource {
  title: string;
  excerpt?: string;
  facts?: string[];
}

/**
 * Derives the actual fact text to show on the daily-fact card for a given
 * (already-picked, via `pickDailyEntry`) entry.
 *
 * Prefers a real, curated `facts[]` array on the post when it's non-empty
 * — same day-of-year rotation as `pickDailyEntry`, so the specific fact
 * shown is also deterministic/stable per calendar day. Falls back to the
 * existing placeholder behavior (the entry's `excerpt`, or its `title` if
 * even that's missing) when `facts` is absent/empty, which is expected to
 * be true for most/all posts until they're authored in Sanity Studio.
 */
export function pickDailyFactText(entry: DailyFactSource | null, date: Date = new Date()): string | null {
  if (!entry) return null;
  if (entry.facts && entry.facts.length > 0) {
    const index = dayOfYear(date) % entry.facts.length;
    return entry.facts[index];
  }
  return entry.excerpt ?? entry.title;
}

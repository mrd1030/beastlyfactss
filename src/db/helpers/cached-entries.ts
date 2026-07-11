import { desc, eq } from 'drizzle-orm';

import { requireDb } from '../client';
import { cachedEntries } from '../schema';
import type { CachedEntry, NewCachedEntry } from '../types';

/** Insert a cached entry, or overwrite the existing row for that sourceId. */
export async function upsertCachedEntry(entry: NewCachedEntry): Promise<void> {
  await requireDb()
    .insert(cachedEntries)
    .values(entry)
    .onConflictDoUpdate({ target: cachedEntries.sourceId, set: entry });
}

export async function getCachedEntry(sourceId: string): Promise<CachedEntry | null> {
  return (await requireDb().query.cachedEntries.findFirst({ where: eq(cachedEntries.sourceId, sourceId) })) ?? null;
}

export async function listCachedEntries(): Promise<CachedEntry[]> {
  return requireDb().select().from(cachedEntries).orderBy(desc(cachedEntries.cachedAt));
}

export async function deleteCachedEntry(sourceId: string): Promise<void> {
  await requireDb().delete(cachedEntries).where(eq(cachedEntries.sourceId, sourceId));
}

import { desc, eq } from 'drizzle-orm';

import { requireDb } from '../client';
import { favorites } from '../schema';
import type { Favorite } from '../types';

export async function addFavorite(entryId: string): Promise<void> {
  await requireDb()
    .insert(favorites)
    .values({ entryId, addedAt: new Date().toISOString() })
    .onConflictDoNothing({ target: favorites.entryId });
}

export async function removeFavorite(entryId: string): Promise<void> {
  await requireDb().delete(favorites).where(eq(favorites.entryId, entryId));
}

export async function isFavorite(entryId: string): Promise<boolean> {
  const row = await requireDb().query.favorites.findFirst({ where: eq(favorites.entryId, entryId) });
  return row !== undefined;
}

export async function listFavorites(): Promise<Favorite[]> {
  return requireDb().select().from(favorites).orderBy(desc(favorites.addedAt));
}

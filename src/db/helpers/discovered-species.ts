import { eq } from 'drizzle-orm';

import { requireDb } from '../client';
import { discoveredSpecies } from '../schema';
import type { DiscoveredSpecies, UnlockMethod } from '../types';

export async function getDiscoveredSpecies(entryId: string): Promise<DiscoveredSpecies | undefined> {
  return requireDb().query.discoveredSpecies.findFirst({ where: eq(discoveredSpecies.entryId, entryId) });
}

export async function listDiscoveredSpecies(): Promise<DiscoveredSpecies[]> {
  return requireDb().select().from(discoveredSpecies);
}

export async function isDiscovered(entryId: string): Promise<boolean> {
  const row = await getDiscoveredSpecies(entryId);
  return row?.discovered ?? false;
}

/**
 * Marks a species entry as discovered. Reading to completion, passing
 * the quiz, or linking an owned pet all call this with their respective
 * `unlockMethod` — whichever happens first wins and is not overwritten.
 */
export async function unlockSpecies(entryId: string, unlockMethod: UnlockMethod): Promise<void> {
  const db = requireDb();
  const existing = await getDiscoveredSpecies(entryId);
  if (existing?.discovered) return;

  const unlockedAt = new Date().toISOString();
  if (existing) {
    await db
      .update(discoveredSpecies)
      .set({ discovered: true, unlockMethod, unlockedAt })
      .where(eq(discoveredSpecies.entryId, entryId));
  } else {
    await db.insert(discoveredSpecies).values({ entryId, discovered: true, unlockMethod, unlockedAt });
  }
}

/**
 * Named unlock hooks, one per trigger, so each call site (and the next
 * stage's pet-linking feature) reads as "this is how that unlock method
 * happens" rather than a bare `unlockSpecies(id, 'read')` string literal.
 * All three are thin wrappers around the same `unlockSpecies` — whichever
 * fires first wins, per the comment above.
 */

/** Call when an entry's detail screen is read to a real completion point
 * (e.g. scrolled to the end). See src/app/entry/[id].tsx. */
export async function unlockByRead(entryId: string): Promise<void> {
  return unlockSpecies(entryId, 'read');
}

/** Call when the user passes the short multiple-choice quiz for an entry.
 * See src/components/entry-quiz.tsx. */
export async function unlockByQuiz(entryId: string): Promise<void> {
  return unlockSpecies(entryId, 'quiz');
}

/**
 * HOOK FOR THE NEXT STAGE: call this when a real owned pet (`pets` table)
 * is linked to a species entry (`pets.linkedEntryId`) — ownership itself
 * should count as discovery. Not called anywhere yet since the pet-owning
 * UI hasn't been built; wire it up wherever a pet's `linkedEntryId` gets
 * set (on create and on edit).
 */
export async function unlockByPet(entryId: string): Promise<void> {
  return unlockSpecies(entryId, 'pet');
}

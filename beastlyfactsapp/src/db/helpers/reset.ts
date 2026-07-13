import { requireDb } from '../client';
import {
  cachedEntries,
  careTasks,
  dailyFactLog,
  discoveredSpecies,
  favorites,
  foodInventoryItems,
  husbandryLogEntries,
  medicationPlans,
  petRecords,
  pets,
  streakState,
} from '../schema';

/**
 * Wipes every local SQLite table — the "Delete all data" action on the
 * Settings tab, satisfying Play Store's data-deletion expectation for an
 * app that stores user data on-device. Deletes child tables before `pets`
 * even though the FKs already cascade, so this stays correct if a table's
 * cascade behavior ever changes. Does NOT touch the AsyncStorage-backed
 * profile/settings (see profile-store.ts's `clearProfile`) — callers that
 * want a full reset should call both.
 */
export async function resetAllLocalData(): Promise<void> {
  const db = requireDb();
  await db.delete(medicationPlans);
  await db.delete(foodInventoryItems);
  await db.delete(petRecords);
  await db.delete(careTasks);
  await db.delete(husbandryLogEntries);
  await db.delete(pets);
  await db.delete(discoveredSpecies);
  await db.delete(favorites);
  await db.delete(dailyFactLog);
  await db.delete(streakState);
  await db.delete(cachedEntries);
}

import { and, asc, count, desc, eq, isNotNull } from 'drizzle-orm';

import { requireDb } from '../client';
import { generateLocalId } from '../id';
import { husbandryLogEntries } from '../schema';
import type { HusbandryLogEntry, NewHusbandryLogEntry } from '../types';

export type CreateHusbandryLogInput = Omit<NewHusbandryLogEntry, 'id'>;

export async function addHusbandryLogEntry(input: CreateHusbandryLogInput): Promise<HusbandryLogEntry> {
  const row: NewHusbandryLogEntry = { ...input, id: generateLocalId() };
  await requireDb().insert(husbandryLogEntries).values(row);
  return row as HusbandryLogEntry;
}

export async function listHusbandryLogForPet(petId: string): Promise<HusbandryLogEntry[]> {
  return requireDb()
    .select()
    .from(husbandryLogEntries)
    .where(eq(husbandryLogEntries.petId, petId))
    .orderBy(desc(husbandryLogEntries.timestamp));
}

/** Page through a pet's full log, newest first — backs the dedicated "full
 * log" screen so it doesn't have to pull every entry into memory at once
 * (see listHusbandryLogForPet, which the pet detail screen's short recent
 * preview and the category-filtered view still use directly). */
export async function listHusbandryLogPageForPet(
  petId: string,
  { limit = 20, offset = 0 }: { limit?: number; offset?: number } = {}
): Promise<HusbandryLogEntry[]> {
  return requireDb()
    .select()
    .from(husbandryLogEntries)
    .where(eq(husbandryLogEntries.petId, petId))
    .orderBy(desc(husbandryLogEntries.timestamp))
    .limit(limit)
    .offset(offset);
}

export async function countHusbandryLogForPet(petId: string): Promise<number> {
  const rows = await requireDb()
    .select({ value: count() })
    .from(husbandryLogEntries)
    .where(eq(husbandryLogEntries.petId, petId));
  return rows[0]?.value ?? 0;
}

export async function listRecentHusbandryLog(limit = 10): Promise<HusbandryLogEntry[]> {
  return requireDb().select().from(husbandryLogEntries).orderBy(desc(husbandryLogEntries.timestamp)).limit(limit);
}

export async function listWeightLogForPet(petId: string): Promise<HusbandryLogEntry[]> {
  return requireDb()
    .select()
    .from(husbandryLogEntries)
    .where(and(eq(husbandryLogEntries.petId, petId), isNotNull(husbandryLogEntries.weightGrams)))
    .orderBy(asc(husbandryLogEntries.timestamp));
}

export async function deleteHusbandryLogEntry(id: string): Promise<void> {
  await requireDb().delete(husbandryLogEntries).where(eq(husbandryLogEntries.id, id));
}

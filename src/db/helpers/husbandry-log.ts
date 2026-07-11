import { and, asc, desc, eq, isNotNull } from 'drizzle-orm';

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

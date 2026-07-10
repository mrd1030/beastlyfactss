import { desc, eq } from 'drizzle-orm';

import { requireDb } from '../client';
import { dailyFactLog } from '../schema';
import type { DailyFactLogEntry } from '../types';

/** Records that the daily fact card was viewed on `date` (idempotent per day). */
export async function logDailyFactView(date: string, entryId: string): Promise<void> {
  await requireDb()
    .insert(dailyFactLog)
    .values({ date, entryId })
    .onConflictDoNothing({ target: dailyFactLog.date });
}

export async function getDailyFactLog(date: string): Promise<DailyFactLogEntry | undefined> {
  return requireDb().query.dailyFactLog.findFirst({ where: eq(dailyFactLog.date, date) });
}

export async function listDailyFactLog(limit = 30): Promise<DailyFactLogEntry[]> {
  return requireDb().select().from(dailyFactLog).orderBy(desc(dailyFactLog.date)).limit(limit);
}

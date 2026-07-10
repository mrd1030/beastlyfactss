import { eq } from 'drizzle-orm';

import { requireDb } from '../client';
import { SINGLETON_STREAK_ID, streakState } from '../schema';
import type { StreakState } from '../types';

async function ensureStreakRow(): Promise<StreakState> {
  const db = requireDb();
  const existing = await db.query.streakState.findFirst({
    where: eq(streakState.id, SINGLETON_STREAK_ID),
  });
  if (existing) return existing;

  const row = { id: SINGLETON_STREAK_ID, currentStreak: 0, longestStreak: 0, lastActiveDate: null };
  await db.insert(streakState).values(row);
  return row as StreakState;
}

export async function getStreakState(): Promise<StreakState> {
  return ensureStreakRow();
}

function daysBetween(fromIso: string, toIso: string): number {
  const from = new Date(`${fromIso}T00:00:00Z`).getTime();
  const to = new Date(`${toIso}T00:00:00Z`).getTime();
  return Math.round((to - from) / (1000 * 60 * 60 * 24));
}

/**
 * Call once when the daily fact card is viewed, with today's device-local
 * date ('YYYY-MM-DD'). No-ops if already recorded today; increments the
 * streak if yesterday was the last active day, otherwise resets to 1.
 */
export async function recordActiveToday(today: string): Promise<StreakState> {
  const current = await ensureStreakRow();
  if (current.lastActiveDate === today) return current;

  const isConsecutive = current.lastActiveDate !== null && daysBetween(current.lastActiveDate, today) === 1;
  const currentStreak = isConsecutive ? current.currentStreak + 1 : 1;
  const longestStreak = Math.max(current.longestStreak, currentStreak);

  const updated = { currentStreak, longestStreak, lastActiveDate: today };
  await requireDb().update(streakState).set(updated).where(eq(streakState.id, SINGLETON_STREAK_ID));
  return { ...current, ...updated };
}

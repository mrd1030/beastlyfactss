import { siteToday } from '@/lib/utils/date';

// Beastle day numbering, split out so the homepage and Pack cards can show
// "Beastle #N" without loading the answer pool. Days follow the site clock
// (America/New_York), so everyone plays the same animal on the same day.
// Must match EPOCH in scripts/generate-beastle.mjs.
export const EPOCH = '2026-09-28';
const DAY_MS = 24 * 3600 * 1000;

// Both sides are read as UTC midnights, so DST never shifts the count.
export function dayNumber(isoDate = siteToday()) {
  return Math.floor((Date.parse(`${isoDate}T00:00:00Z`) - Date.parse(`${EPOCH}T00:00:00Z`)) / DAY_MS) + 1;
}

export function dateForDay(n) {
  return new Date(Date.parse(`${EPOCH}T00:00:00Z`) + (n - 1) * DAY_MS).toISOString().slice(0, 10);
}

export const STORAGE = {
  daily: 'beastle-daily',
  stats: 'beastle-stats',
  bonus: 'beastle-bonus',
  journal: 'beastle-journal',
  unlimited: 'beastle-unlimited',
};

// A streak survives until a full day is missed: won today or yesterday.
export function liveStreak(stats, today = dayNumber()) {
  if (stats?.lastWinDay == null) return 0;
  return stats.lastWinDay >= today - 1 ? stats.streak : 0;
}

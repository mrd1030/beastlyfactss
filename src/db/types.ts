import type {
  cachedEntries,
  careTasks,
  dailyFactLog,
  discoveredSpecies,
  favorites,
  husbandryLogEntries,
  pets,
  streakState,
} from './schema';

export type CachedEntry = typeof cachedEntries.$inferSelect;
export type NewCachedEntry = typeof cachedEntries.$inferInsert;

export type Favorite = typeof favorites.$inferSelect;
export type NewFavorite = typeof favorites.$inferInsert;

export type DailyFactLogEntry = typeof dailyFactLog.$inferSelect;
export type NewDailyFactLogEntry = typeof dailyFactLog.$inferInsert;

export type Pet = typeof pets.$inferSelect;
export type NewPet = typeof pets.$inferInsert;

export type CareTask = typeof careTasks.$inferSelect;
export type NewCareTask = typeof careTasks.$inferInsert;

export type HusbandryLogEntry = typeof husbandryLogEntries.$inferSelect;
export type NewHusbandryLogEntry = typeof husbandryLogEntries.$inferInsert;

export type DiscoveredSpecies = typeof discoveredSpecies.$inferSelect;
export type NewDiscoveredSpecies = typeof discoveredSpecies.$inferInsert;

export type UnlockMethod = 'read' | 'quiz' | 'pet';

export type StreakState = typeof streakState.$inferSelect;

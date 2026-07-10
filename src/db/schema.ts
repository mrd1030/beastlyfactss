import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

/**
 * On-device schema (expo-sqlite + drizzle-orm). Everything here is 100%
 * local — no accounts, no server sync. The only network-sourced data is
 * Sanity `post`/`category` documents (read live via src/content-client),
 * which get cached locally in `cachedEntries` for offline access and to
 * back the collection/discovery UI without refetching per screen.
 *
 * Several columns below are PROVISIONAL placeholders standing in for
 * structured Sanity fields that don't exist yet (see AGENTS-level notes
 * in content-client/types.ts) — e.g. rarityTier/artworkUrl on
 * discoveredSpecies. They're nullable so they can be backfilled from a
 * real Sanity schema later without a migration that touches existing
 * rows.
 */

// A locally cached copy of a Sanity `post`, treated as a "species entry".
export const cachedEntries = sqliteTable('cached_entries', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  sourceId: text('source_id').notNull().unique(), // Sanity _id
  title: text('title').notNull(),
  excerpt: text('excerpt'),
  body: text('body'), // provisional: Sanity `post.body` is portable text serialized to plain text/JSON string
  category: text('category'),
  imageUrl: text('image_url'),
  cachedAt: text('cached_at').notNull(), // ISO timestamp
});

// A user-favorited entry, keyed by Sanity _id (not a local FK — favorites
// can exist before/without a cached copy).
export const favorites = sqliteTable('favorites', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  entryId: text('entry_id').notNull().unique(),
  addedAt: text('added_at').notNull(),
});

// One row per calendar day the daily-fact card was viewed; backs the
// streak counter and prevents double-counting a day.
export const dailyFactLog = sqliteTable('daily_fact_log', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  date: text('date').notNull().unique(), // 'YYYY-MM-DD', device-local date
  entryId: text('entry_id').notNull(),
});

// A real pet the user owns.
export const pets = sqliteTable('pets', {
  id: text('id').primaryKey(), // client-generated uuid
  nickname: text('nickname').notNull(),
  photoUri: text('photo_uri'),
  linkedEntryId: text('linked_entry_id'), // Sanity _id of the matching species entry, if any
  acquiredDate: text('acquired_date'),
  createdAt: text('created_at').notNull(),
});

// A recurring care reminder generated for a pet (feeding, cleaning, temp
// check, etc). `taskType` is free-text/provisional pending a real care-
// schedule schema in Sanity — see care-schedule-defaults.ts.
export const careTasks = sqliteTable('care_tasks', {
  id: text('id').primaryKey(),
  petId: text('pet_id')
    .notNull()
    .references(() => pets.id, { onDelete: 'cascade' }),
  taskType: text('task_type').notNull(),
  intervalDays: integer('interval_days').notNull(),
  nextDueDate: text('next_due_date').notNull(),
  lastCompletedDate: text('last_completed_date'),
  label: text('label'),
  // 'auto' (generated from the linked species' careInfo/category defaults,
  // safe to wipe and regenerate on a species-link change) or 'custom' (user
  // -added, must survive regeneration). Defaulted so existing rows from
  // before this column existed are treated as 'auto'.
  source: text('source').notNull().default('auto'),
});

// A freeform husbandry log note for a pet (e.g. shed, weigh-in, vet visit).
export const husbandryLogEntries = sqliteTable('husbandry_log_entries', {
  id: text('id').primaryKey(),
  petId: text('pet_id')
    .notNull()
    .references(() => pets.id, { onDelete: 'cascade' }),
  note: text('note').notNull(),
  timestamp: text('timestamp').notNull(),
  photoUri: text('photo_uri'),
});

// Collection/unlock state for a species entry. Ownership of a linked pet,
// finishing a quiz, or reading an entry to completion all write a row
// here — this is the single source of truth the Pack grid reads from.
//
// `entryId` is a deliberately generic string key (never a typed/branded
// Sanity-only id), so no migration was needed when the bundled local
// species catalog (src/content-client/species-catalog.ts) became the
// PRIMARY source for this table: it holds either a catalog species id
// (e.g. 'axolotl') or a Sanity post `_id` interchangeably, and existing
// on-device rows from Sanity-only testing keep working unchanged.
export const discoveredSpecies = sqliteTable('discovered_species', {
  entryId: text('entry_id').primaryKey(), // catalog species id OR Sanity post _id
  discovered: integer('discovered', { mode: 'boolean' }).notNull().default(false),
  unlockMethod: text('unlock_method'), // 'read' | 'quiz' | 'pet'
  unlockedAt: text('unlocked_at'),
  // Provisional placeholders: no real rarity/artwork fields exist in
  // Sanity yet. Left nullable so real values can be added later without
  // a schema migration touching existing rows.
  rarityTier: text('rarity_tier'),
  artworkUrl: text('artwork_url'),
});

// Singleton row (id always 1) tracking the daily-fact viewing streak.
export const streakState = sqliteTable('streak_state', {
  id: integer('id').primaryKey().default(1),
  currentStreak: integer('current_streak').notNull().default(0),
  longestStreak: integer('longest_streak').notNull().default(0),
  lastActiveDate: text('last_active_date'),
});

export const SINGLETON_STREAK_ID = 1;

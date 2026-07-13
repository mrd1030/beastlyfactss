import type { CareInfo } from '@/content-client/types';

/**
 * PROVISIONAL placeholder care-interval defaults, keyed by Sanity
 * `category` title via a loose regex match (same pattern as
 * quiz-placeholder.ts's category buckets). This is a small local stand-in
 * so the care-task engine (care-task-engine.ts) always has something
 * reasonable to generate reminders from, even for a pet whose linked post
 * has no (or only partial) real `careInfo` authored yet.
 *
 * None of these numbers are meant to be species-accurate; they're rough,
 * generic-per-category placeholders. Real per-species values now exist —
 * primarily via the bundled local species catalog's `careInfo`
 * (src/content-client/species-catalog.ts, 78 real species, grounded in
 * beastlyfactss's own guide text), and secondarily via the optional Sanity
 * `post.careInfo` field for supplementary blog posts — see
 * `resolveCareScheduleDefaults` below, which prefers whichever real
 * `careInfo` the caller passes in (per-field) and falls back to this
 * module's category buckets otherwise. In practice this means these
 * buckets are now SUPERSEDED for every pet linked to one of the 78
 * catalog species; they still matter as a fallback for pets linked to a
 * supplementary Sanity post without authored `careInfo`, or with no
 * linked species at all.
 */

export interface CareScheduleDefaults {
  /** How often (days) this kind of pet typically needs feeding. */
  feedingIntervalDays: number | null;
  /** How often (days) its enclosure/habitat should be cleaned. */
  cleaningIntervalDays: number | null;
  /** How often (days) its temperature should be checked. */
  tempCheckIntervalDays: number | null;
  /** How often (days) its humidity should be checked. */
  humidityCheckIntervalDays: number | null;
}

const REPTILE_DEFAULTS: CareScheduleDefaults = {
  feedingIntervalDays: 3,
  cleaningIntervalDays: 14,
  tempCheckIntervalDays: 1,
  humidityCheckIntervalDays: 1,
};

const AMPHIBIAN_DEFAULTS: CareScheduleDefaults = {
  feedingIntervalDays: 2,
  cleaningIntervalDays: 7,
  tempCheckIntervalDays: 1,
  humidityCheckIntervalDays: 1,
};

const MAMMAL_DEFAULTS: CareScheduleDefaults = {
  feedingIntervalDays: 1,
  cleaningIntervalDays: 7,
  tempCheckIntervalDays: null,
  humidityCheckIntervalDays: null,
};

const BIRD_DEFAULTS: CareScheduleDefaults = {
  feedingIntervalDays: 1,
  cleaningIntervalDays: 7,
  tempCheckIntervalDays: null,
  humidityCheckIntervalDays: null,
};

const FISH_DEFAULTS: CareScheduleDefaults = {
  feedingIntervalDays: 1,
  cleaningIntervalDays: 10,
  tempCheckIntervalDays: 3,
  humidityCheckIntervalDays: null,
};

const INVERTEBRATE_DEFAULTS: CareScheduleDefaults = {
  feedingIntervalDays: 5,
  cleaningIntervalDays: 21,
  tempCheckIntervalDays: 3,
  humidityCheckIntervalDays: 3,
};

/** Fully generic fallback for a category that doesn't match any bucket
 * below (or a pet with no linked species/category at all). */
const GENERIC_DEFAULTS: CareScheduleDefaults = {
  feedingIntervalDays: 2,
  cleaningIntervalDays: 14,
  tempCheckIntervalDays: 3,
  humidityCheckIntervalDays: null,
};

const CATEGORY_BUCKETS: { match: RegExp; defaults: CareScheduleDefaults }[] = [
  { match: /reptile|lizard|snake|turtle|tortoise|gecko/i, defaults: REPTILE_DEFAULTS },
  { match: /amphibian|frog|salamander|newt/i, defaults: AMPHIBIAN_DEFAULTS },
  { match: /mammal|rodent|dog|cat|rabbit/i, defaults: MAMMAL_DEFAULTS },
  { match: /bird|avian|parrot/i, defaults: BIRD_DEFAULTS },
  { match: /fish|aquatic/i, defaults: FISH_DEFAULTS },
  { match: /invertebrate|insect|spider|tarantula|crab|snail/i, defaults: INVERTEBRATE_DEFAULTS },
];

/**
 * Returns placeholder care-interval defaults for the given category title,
 * falling back to a fully generic pool for categories that don't match
 * anything above (or no category/title at all — e.g. a pet not linked to
 * any species entry still gets a sensible generic reminder set).
 */
export function getCareScheduleDefaults(categoryTitle?: string | null): CareScheduleDefaults {
  const bucket = categoryTitle ? CATEGORY_BUCKETS.find((b) => b.match.test(categoryTitle)) : undefined;
  return bucket?.defaults ?? GENERIC_DEFAULTS;
}

/**
 * Resolves the care-interval defaults to actually use for a pet, preferring
 * a linked post's real `careInfo` fields (feeding/cleaning intervals) when
 * present, and falling back per-field to the category-based placeholder
 * defaults otherwise — so a post with only, say, `feedingIntervalDays`
 * authored still gets placeholder cleaning/temp/humidity intervals rather
 * than losing reminders for the fields nobody's filled in yet.
 *
 * `careInfo.temperatureRangeF`/`humidityRangePercent` describe a target
 * range, not a check-interval, so there's no real-data equivalent for
 * `tempCheckIntervalDays`/`humidityCheckIntervalDays` yet — those always
 * come from the category placeholder, same as before this field existed.
 */
export function resolveCareScheduleDefaults(
  careInfo: CareInfo | null | undefined,
  categoryTitle?: string | null
): CareScheduleDefaults {
  const placeholder = getCareScheduleDefaults(categoryTitle);
  return {
    feedingIntervalDays: careInfo?.feedingIntervalDays ?? placeholder.feedingIntervalDays,
    cleaningIntervalDays: careInfo?.cleaningIntervalDays ?? placeholder.cleaningIntervalDays,
    tempCheckIntervalDays: placeholder.tempCheckIntervalDays,
    humidityCheckIntervalDays: placeholder.humidityCheckIntervalDays,
  };
}

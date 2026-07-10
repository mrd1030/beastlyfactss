import type { CareInfo, PostQuizQuestion, ProvisionalEntry } from './types';

import rawCatalog from './species-catalog-data.json';

/**
 * Bundled, local, static species catalog — sourced from beastlyfactss's own
 * already-published "Guides" library (78 real species care pages), NOT
 * invented and NOT fetched from Sanity. This is a second, independent
 * content source alongside src/content-client (the read-only Sanity layer):
 * Sanity stays available for blog-style reading content, but this catalog
 * is the PRIMARY collectible "species" unit for the Pack/Collector grid,
 * since it covers all 78 real guide species rather than just the smaller
 * set that happens to already exist as Sanity blog posts.
 *
 * The raw data lives in ./species-catalog-data.json (plain JSON, no code)
 * so it's trivial to diff/regenerate independently of this accessor
 * module. Every fact and quiz question below was already vetted against
 * beastlyfactss's real guide content; every `careInfo` sub-field was only
 * populated when the source text explicitly stated that number for that
 * exact species — never estimated or borrowed from a related species.
 */

export type PetCategory =
  | 'Amphibians'
  | 'Birds'
  | 'Cat'
  | 'Dog'
  | 'Fish'
  | 'Geckos'
  | 'Invertebrates'
  | 'Lizards'
  | 'Small Mammals'
  | 'Snakes'
  | 'Turtles & Tortoises';

/** Fixed display/grouping order for the Pack grid's category sections. */
export const PET_CATEGORY_ORDER: PetCategory[] = [
  'Amphibians',
  'Birds',
  'Cat',
  'Dog',
  'Fish',
  'Geckos',
  'Invertebrates',
  'Lizards',
  'Small Mammals',
  'Snakes',
  'Turtles & Tortoises',
];

export interface CatalogQuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

/** Same shape as content-client's `CareInfo` — every sub-field is only
 * present when the source guide text explicitly stated it for this exact
 * species; treat every field as possibly-absent. */
export interface CatalogCareInfo {
  feedingIntervalDays?: number | null;
  temperatureRangeF?: { min?: number; max?: number } | null;
  humidityRangePercent?: { min?: number; max?: number } | null;
  cleaningIntervalDays?: number | null;
}

export interface CatalogCostItem {
  item: string;
  low: number;
  high: number;
}

export interface CatalogFaq {
  q: string;
  a: string;
}

/** The full care guide for a species — beastlyfactss's own real guide page
 * content, bundled verbatim (prose sections, supply checklist, FAQs, and
 * itemized setup/annual cost estimates). `faqs`/`costs` are genuinely
 * absent for a few entries (e.g. the cat/dog breed guides have no FAQs in
 * the source) — render conditionally, never fabricate. */
export interface CatalogGuide {
  housing: string;
  diet: string;
  enrichment: string;
  health: string;
  checklist: string[];
  faqs?: CatalogFaq[];
  costs?: { setup: CatalogCostItem[]; annual: CatalogCostItem[] };
}

export interface CatalogSpecies {
  id: string;
  name: string;
  emoji: string;
  petType: PetCategory;
  difficulty: string;
  tagline: string;
  careInfo: CatalogCareInfo;
  facts: string[];
  quiz: CatalogQuizQuestion[];
  guide?: CatalogGuide;
}

const CATALOG: CatalogSpecies[] = rawCatalog as CatalogSpecies[];

/** All 78 bundled species, in source order. */
export function getAllSpecies(): CatalogSpecies[] {
  return CATALOG;
}

/** Looks up a single bundled species by its stable slug-style id (e.g.
 * `'axolotl'`), or `undefined` if `id` isn't a catalog species (e.g. it's a
 * Sanity post `_id` instead — callers should fall back to the Sanity
 * content-client in that case). */
export function getSpeciesById(id: string): CatalogSpecies | undefined {
  return CATALOG.find((species) => species.id === id);
}

/** All bundled species belonging to one `petType` category. */
export function getSpeciesByCategory(petType: string): CatalogSpecies[] {
  return CATALOG.filter((species) => species.petType === petType);
}

/** Distinct `petType` categories actually present in the catalog, ordered
 * per `PET_CATEGORY_ORDER` (falling back to appending any unexpected
 * category alphabetically after the known ones, so nothing is silently
 * dropped if the data ever grows a new petType). */
export function getAllCategories(): PetCategory[] {
  const present = new Set(CATALOG.map((species) => species.petType));
  const known = PET_CATEGORY_ORDER.filter((category) => present.has(category));
  const unknown = [...present].filter((category) => !PET_CATEGORY_ORDER.includes(category)).sort();
  return [...known, ...(unknown as PetCategory[])];
}

/**
 * Adapts a bundled `CatalogSpecies` into the same `ProvisionalEntry` shape
 * the rest of the app (PackCard, SpeciesPicker, EntryQuiz, care-task-engine,
 * etc.) already knows how to render/consume, so those components don't
 * need a parallel implementation for catalog-sourced vs. Sanity-sourced
 * entries. `_id`/`slug` are the catalog `id` — stable, never collides with
 * a Sanity `_id` format — and `body`/`mainImage` are intentionally left
 * unset since the catalog has no long-form portable-text content or image
 * asset (screens should render `facts`/`careInfo` directly for these
 * instead of a Sanity-style body).
 */
export function toProvisionalEntry(species: CatalogSpecies): ProvisionalEntry {
  return {
    _id: species.id,
    title: species.name,
    slug: species.id,
    excerpt: species.tagline,
    animalType: species.petType,
    categoryTitle: species.petType,
    mainImage: null,
    facts: species.facts,
    careInfo: species.careInfo as CareInfo,
    quiz: species.quiz as PostQuizQuestion[],
    emoji: species.emoji,
  };
}

/** All 78 bundled species, pre-adapted to `ProvisionalEntry` shape — the
 * primary pool the Pack/Collector grid renders. */
export function getAllSpeciesAsEntries(): ProvisionalEntry[] {
  return CATALOG.map(toProvisionalEntry);
}

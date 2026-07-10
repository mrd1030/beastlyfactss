import { sanityClient } from './sanityClient';
import type { Category, EntryDetail, ProvisionalEntry } from './types';

export async function fetchCategories(): Promise<Category[]> {
  return sanityClient.fetch(
    `*[_type == "category"] | order(title asc) {
      _id, title, "slug": slug.current, description
    }`
  );
}

/**
 * Provisional stand-in for "browse encyclopedia entries by category":
 * queries the existing `post` document type, since the dedicated
 * `entry`/`careGuide` type doesn't exist in Sanity yet. Swap this for a
 * real `entry` query once the Phase 0 schema changes are approved and
 * shipped — the screen consuming this doesn't need to change, just this
 * query and the ProvisionalEntry type.
 */
export async function fetchRecentEntries(limit = 20): Promise<ProvisionalEntry[]> {
  return sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...$limit] {
      _id, title, "slug": slug.current, excerpt, animalType, publishedAt, mainImage,
      facts, careInfo, quiz, rarityTier, artworkUrl,
      "categoryTitle": categories[0]->title
    }`,
    { limit }
  );
}

/**
 * Every `post`, unpaginated — the full pool the Pack tab's collection grid
 * groups by category and renders as unlocked cards / locked silhouettes.
 * Deliberately separate from fetchRecentEntries (which is capped to a
 * home-feed slice): the collection needs to show every collectible
 * "species", not just the most recent ones.
 */
export async function fetchCollectionEntries(): Promise<ProvisionalEntry[]> {
  return sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)] | order(title asc) {
      _id, title, "slug": slug.current, excerpt, animalType, publishedAt, mainImage,
      facts, careInfo, quiz, rarityTier, artworkUrl,
      "categoryTitle": categories[0]->title
    }`
  );
}

/**
 * Full detail for a single entry (a `post`), including its portable-text
 * `body`. Used by the entry detail screen, kept separate from
 * fetchRecentEntries so the Browse list query stays cheap.
 */
export async function fetchEntryDetail(id: string): Promise<EntryDetail | null> {
  return sanityClient.fetch(
    `*[_type == "post" && _id == $id][0] {
      _id, title, "slug": slug.current, excerpt, animalType, publishedAt, mainImage, body, tags, readTime,
      facts, careInfo, quiz, rarityTier, artworkUrl,
      "categoryTitle": categories[0]->title
    }`,
    { id }
  );
}

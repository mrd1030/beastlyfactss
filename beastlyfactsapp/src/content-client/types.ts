export interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string;
}

/**
 * Shaped from Sanity's `post.careInfo` object field. All sub-fields are
 * optional/authorable independently in Studio, so any of them (or the
 * whole object) can be missing on a given post — callers should treat
 * every field here as possibly-undefined, not assume the object is
 * complete just because it's present.
 */
export interface CareInfo {
  feedingIntervalDays?: number;
  temperatureRangeF?: { min?: number; max?: number };
  humidityRangePercent?: { min?: number; max?: number };
  cleaningIntervalDays?: number;
}

/** Shaped from one entry of Sanity's `post.quiz[]` array (the `quizQuestion` object type). */
export interface PostQuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

/**
 * Shaped from the CURRENT Sanity `post` schema (title, slug, excerpt,
 * animalType, categories, publishedAt), now also carrying the additive,
 * OPTIONAL fields added for the mobile app's daily-fact/care/quiz features
 * (facts, careInfo, quiz, rarityTier, artworkUrl). There is still no
 * dedicated `entry`/`careGuide` document type — every Sanity `post` is
 * treated as the collectible "species entry" both apps already display.
 * Every new field below is expected to be empty/undefined on most posts
 * until they're filled in via Sanity Studio; all consumers must fall back
 * to existing placeholder logic when they are.
 */
export interface ProvisionalEntry {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  animalType?: string;
  categoryTitle?: string;
  publishedAt?: string;
  mainImage?: { asset?: { _ref?: string } } | null;
  /** Real curated facts for the daily-fact card; prefer over the placeholder rotation when non-empty. */
  facts?: string[];
  /** Real per-species care intervals/ranges; prefer per-field over the category-based placeholder defaults when present. */
  careInfo?: CareInfo | null;
  /** Real per-species quiz bank; prefer over the generic category-based placeholder questions when non-empty. */
  quiz?: PostQuizQuestion[];
  /** Provisional-in-app-schema, real-in-Sanity: not wired into any UI yet (Phase 4 polish). */
  rarityTier?: string;
  /** Provisional-in-app-schema, real-in-Sanity: not wired into any UI yet (Phase 4 polish). */
  artworkUrl?: string;
  /**
   * Populated only when this entry was adapted from the bundled local
   * species catalog (see content-client/species-catalog.ts's
   * `toProvisionalEntry`), where every species has an emoji but no Sanity
   * image asset. Always undefined for real Sanity `post` documents — use
   * `mainImage`/`sanityImageUrl` for those instead.
   */
  emoji?: string;
}

/**
 * Minimal shape of a Sanity portable-text span/block — just enough to
 * render plain paragraphs/headings/lists. Real portable text supports far
 * richer marks/annotations (links, custom decorators, inline images);
 * this app only needs a basic block-to-text renderer (see
 * src/components/portable-text-body.tsx), not full parity with the
 * website's PortableTextRenderer.
 */
export interface PortableTextSpan {
  _type: 'span';
  _key?: string;
  text: string;
  marks?: string[];
}

export interface PortableTextBlock {
  _type: string; // 'block' for normal text; other types (e.g. embedded images) are skipped by the renderer
  _key: string;
  style?: string; // 'normal' | 'h1' | 'h2' | 'h3' | 'blockquote' | ...
  listItem?: string; // 'bullet' | 'number' | undefined
  children?: PortableTextSpan[];
}

/**
 * Full detail shape for a single `post`, used by the entry detail screen.
 * Extends ProvisionalEntry with the fields only needed once you've
 * drilled into one entry (body, tags, readTime) so the Browse list query
 * can stay light.
 */
export interface EntryDetail extends ProvisionalEntry {
  body?: PortableTextBlock[] | null;
  tags?: string[];
  readTime?: number;
}

// Length limits for the tags search engines truncate, and the helpers that keep
// us inside them.
//
// An Ahrefs crawl on 2026-08-06 flagged 35 titles and 10 meta descriptions as too
// long. Every one came from a template that was written without a length budget:
// the copy read well in isolation, then the brand suffix or a long animal name
// pushed the rendered tag past the limit. Composing tags through these helpers
// means the limit is applied where the tag is built rather than discovered in an
// audit months later.

// Google truncates titles at roughly 600px, which is about 60 characters, and
// meta descriptions at about 160. Both are the thresholds Ahrefs warns on.
export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 160;

export const BRAND = 'Beastly Facts';
const BRAND_SUFFIX = ` | ${BRAND}`;

/**
 * Append the brand suffix only when it fits inside the title budget.
 *
 * A title that already earns its 60 characters should keep them. The brand is
 * the first thing worth dropping, because the domain is shown beside the title
 * in the results anyway, so the suffix is the cheapest part of the tag to lose.
 */
export function withBrand(title, max = TITLE_MAX) {
  const clean = String(title || '').trim();
  if (!clean) return BRAND;
  const full = `${clean}${BRAND_SUFFIX}`;
  return full.length <= max ? full : clean;
}

/**
 * Return the first variant that fits, falling back to the shortest one given.
 *
 * Templated pages get one line of copy applied across dozens of animals, and the
 * name length swings the total by 20+ characters. Order the variants
 * most-descriptive first: short names keep the richer wording and long ones fall
 * back rather than overflowing.
 */
export function pickWithinLimit(variants, max) {
  const list = variants.map((v) => String(v || '').trim()).filter(Boolean);
  return list.find((v) => v.length <= max) || list[list.length - 1] || '';
}

/** Pluralize a counted noun: 1 ban, 2 bans, 0 bans. */
export function plural(count, singular, pluralForm = `${singular}s`) {
  return `${count} ${count === 1 ? singular : pluralForm}`;
}

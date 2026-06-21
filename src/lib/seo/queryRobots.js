/**
 * SEO helper: determines robots directives based on URL query parameters.
 *
 * Only "state" params that produce distinct page content trigger noindex.
 * Tracking-only params (UTM, gclid, fbclid, etc.) are ignored so that
 * URLs with only tracking params remain indexable.
 */

export const NOINDEX_STATE_PARAMS = new Set([
  'category',
  'page',
  'tab',
  'search',
  'post',
]);

/**
 * Returns true when the given search string contains at least one state
 * param that should trigger `noindex,follow`.
 *
 * @param {string} search - `location.search` (e.g. "?category=reptiles&utm_source=x")
 * @returns {boolean}
 */
export function hasNoindexStateParams(search) {
  if (!search) return false;
  const params = new URLSearchParams(search);
  for (const key of params.keys()) {
    if (NOINDEX_STATE_PARAMS.has(key)) return true;
  }
  return false;
}

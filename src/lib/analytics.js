// Analytics events for a GTM-only setup.
//
// IMPORTANT: this site loads the Google Tag Manager container (GTM-N3PXSDZB)
// from index.html and nothing else. The GTM snippet defines `window.dataLayer`.
// It does NOT define `window.gtag` - that global comes from the separate
// gtag.js snippet, which this site does not use. GTM loads gtag/js internally
// to run the GA4 tag, but that never exposes a `gtag()` function to the page.
//
// This mattered: three call sites used to be written as
//
//   if (window.gtag) window.gtag('event', 'search', { search_term: q });
//
// and that guard is permanently false in production, so those events had never
// once been recorded. Verified directly against the live site, where
// `typeof window.gtag === 'undefined'` while `window.dataLayer` is a real array.
//
// Pushing to dataLayer is the correct route in a GTM container: the push
// becomes a custom event that a GTM trigger can listen for, and a GA4 Event tag
// bound to that trigger forwards it on. An event pushed here does nothing until
// that tag exists in the container, but it is at least reaching GTM rather than
// vanishing into an undefined global.
export function trackEvent(event, params = {}) {
  if (import.meta.env.MODE !== 'production') return;
  if (!Array.isArray(window.dataLayer)) return;
  window.dataLayer.push({ event, ...params });
}

// Search reporting, debounced.
//
// Only the homepage search is a real form submit. /blog/ and /search/ filter
// results live as you type, so there is no submit to hang an event on, and
// users have no reason to press Enter - /search/ reported nothing at all and
// /blog/ only reported when someone happened to hit Enter. Firing on every
// keystroke instead would report "a", "ax", "axo", "axol"... as separate
// searches, which is worse than no data.
//
// So: wait for a pause in typing and report what they settled on. MIN_CHARS
// drops single letters and stray keystrokes. `lastTracked` stops the same term
// being reported twice when someone edits and returns to it, or when a page
// re-renders with the query already in state.
const SEARCH_DEBOUNCE_MS = 900;
const MIN_CHARS = 3;
let searchTimer = null;
let lastTracked = '';

export function trackSearch(term, { immediate = false } = {}) {
  const q = (term || '').trim();
  clearTimeout(searchTimer);
  if (q.length < MIN_CHARS) return;

  const fire = () => {
    if (q === lastTracked) return;
    lastTracked = q;
    trackEvent('search', { search_term: q });
  };

  // immediate for a real submit (homepage form, Enter key), where the user has
  // clearly finished; debounced for live-filtering inputs.
  if (immediate) fire();
  else searchTimer = setTimeout(fire, SEARCH_DEBOUNCE_MS);
}

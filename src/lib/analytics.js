// Analytics events for a direct gtag.js setup.
//
// index.html defines `window.gtag` inline at page start (a queue onto
// window.dataLayer) and injects the gtag.js library after the load event, so
// gtag() is always callable here and anything sent before the library lands is
// replayed by it. GA4 receives these as events named `event` with `params`.
//
// History, because the shape here has flipped twice: the site used to load a
// Tag Manager container and no gtag.js, so `window.gtag` was undefined and an
// earlier `if (window.gtag) window.gtag('event', ...)` guard silently dropped
// every event. That was replaced by GTM-style `dataLayer.push({ event })`,
// which a GTM trigger forwarded to GA4. GTM is gone now (three tags, 121KB and
// 130ms of blocking to deliver them), and gtag.js does NOT read GTM-style object
// pushes, so the events go through gtag() directly. Do not reintroduce either
// old form.
export function trackEvent(event, params = {}) {
  if (import.meta.env.MODE !== 'production') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', event, params);
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

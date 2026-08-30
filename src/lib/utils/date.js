// A post's publish date can be set in the future as a soft scheduling signal.
// These helpers keep that date invisible everywhere (visible text, JSON-LD,
// meta tags) until the real-world clock actually reaches it.

export function isFutureDated(dateValue) {
  if (!dateValue) return false;
  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) return false;
  return parsed > new Date();
}

export function getDisplayDate(dateValue, options = { month: 'short', day: 'numeric', year: 'numeric' }) {
  if (!dateValue || isFutureDated(dateValue)) return '';
  return new Date(dateValue).toLocaleDateString('en-US', options);
}

// For machine-readable fields (JSON-LD, <meta> tags) that should be omitted
// entirely rather than shown with a formatted fallback.
export function getDisplayIsoDate(dateValue) {
  if (!dateValue || isFutureDated(dateValue)) return '';
  return dateValue;
}

// Sort comparator that keeps released posts above scheduled ones.
//
// A post's date can be set ahead as a soft release signal: the article is live
// and crawlable the moment it deploys, but isFutureDated() above hides the date
// everywhere until the clock reaches it. Sorting by date alone therefore put the
// furthest-future article first, so the newest thing a reader could actually see
// a date on sat below five posts that looked undated.
//
// Released outranks scheduled regardless of which date is larger. Within the
// released group, newest first, as before. Within the scheduled group, SOONEST
// first, so the next article due to surface sits closest to the released block
// rather than at the very bottom.
//
// `today` is a parameter rather than a call to the clock on purpose. Prerendered
// HTML and the first client render have to agree or hydration mismatches (React
// #418/#423), and those two run on different days. Callers pass the build stamp
// for the first render and upgrade to the real date in a post-mount effect, the
// same shape HeroSection uses for its daily fact.
export function byReleaseThenDate(today) {
  const cutoff = String(today).slice(0, 10);
  const dateOf = post => String(post?.publishedAt || post?.date || '').slice(0, 10);
  return (a, b) => {
    const da = dateOf(a);
    const db = dateOf(b);
    // An undated post is not scheduled for anything, so it counts as released
    // and sorts to the back of that group rather than leading the scheduled one.
    const aReleased = da === '' || da <= cutoff;
    const bReleased = db === '' || db <= cutoff;
    if (aReleased !== bReleased) return aReleased ? -1 : 1;
    return aReleased ? db.localeCompare(da) : da.localeCompare(db);
  };
}

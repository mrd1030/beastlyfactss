// A post's publish date can be set in the future as a soft scheduling signal.
// These helpers keep that date invisible everywhere (visible text, JSON-LD,
// meta tags) until the real-world clock actually reaches it.

// One clock for the whole site. "The date has arrived" has to mean the same
// thing in the blog sort, the date line on a card, and the job that sends the
// push notification, so all of them resolve "today" here rather than each
// picking their own timezone. Previously the sort and the date line used
// toISOString(), i.e. UTC, which flipped an article live at 8pm ET the evening
// before its own date, while YouMayAlsoLike already used this zone - the two
// disagreed with each other by four hours every day.
export const SITE_TIMEZONE = 'America/New_York';

// Today in the site's timezone as YYYY-MM-DD. 'en-CA' is the locale that
// formats as ISO, so this is a date-only string directly comparable against a
// frontmatter `date`.
export function siteToday(now = new Date()) {
  return now.toLocaleDateString('en-CA', { timeZone: SITE_TIMEZONE });
}

// Compared as date strings, not as instants: a bare "YYYY-MM-DD" parses as UTC
// midnight, so comparing Date objects made the release moment depend on the
// viewer's own offset. Both sides are plain YYYY-MM-DD in site time here, so an
// article surfaces at ET midnight for everyone, wherever they are reading from.
export function isFutureDated(dateValue, today = siteToday()) {
  if (!dateValue) return false;
  const stamp = String(dateValue).slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(stamp)) return false;
  return stamp > today;
}

export function getDisplayDate(dateValue, options = { month: 'short', day: 'numeric', year: 'numeric' }) {
  if (!dateValue || isFutureDated(dateValue)) return '';
  // Formatted in UTC, because a bare "YYYY-MM-DD" parses as UTC midnight and
  // that instant is still the previous evening in every US timezone: an article
  // dated the 31st rendered "Aug 30" for the whole country. The frontmatter
  // date is a calendar day, so it should render as that same calendar day.
  return new Date(dateValue).toLocaleDateString('en-US', { timeZone: 'UTC', ...options });
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
// for the first render and upgrade to siteToday() in a post-mount effect, the
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

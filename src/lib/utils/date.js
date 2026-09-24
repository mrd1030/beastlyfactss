// One clock for the whole site. "Today" has to mean the same thing everywhere
// it is asked (the daily picks, the animal days calendar, quiz releases), so
// all of them resolve it here rather than each picking their own timezone.
export const SITE_TIMEZONE = 'America/New_York';

// Today in the site's timezone as YYYY-MM-DD. 'en-CA' is the locale that
// formats as ISO, so this is a date-only string directly comparable against a
// frontmatter `date`.
export function siteToday(now = new Date()) {
  return now.toLocaleDateString('en-CA', { timeZone: SITE_TIMEZONE });
}

// Articles are dated the day they ship; scripts/check-publish-dates.mjs fails
// the build on a future date, so nothing here has to hide one.
export function getDisplayDate(dateValue, options = { month: 'short', day: 'numeric', year: 'numeric' }) {
  if (!dateValue) return '';
  // Formatted in UTC, because a bare "YYYY-MM-DD" parses as UTC midnight and
  // that instant is still the previous evening in every US timezone: an article
  // dated the 31st rendered "Aug 30" for the whole country. The frontmatter
  // date is a calendar day, so it should render as that same calendar day.
  return new Date(dateValue).toLocaleDateString('en-US', { timeZone: 'UTC', ...options });
}

// Newest first, undated posts last.
export function byNewest(a, b) {
  const dateOf = post => String(post?.publishedAt || post?.date || '').slice(0, 10);
  return dateOf(b).localeCompare(dateOf(a));
}

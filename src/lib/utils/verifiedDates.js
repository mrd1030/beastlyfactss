// Verification dates, said honestly.
//
// Every cell in the legal matrix carries its own verifiedOn, and they are not
// uniform: 36 of the 52 jurisdictions hold more than one distinct date, spread
// across about a month. A page-level line that prints the newest of them claims
// freshness the oldest rows do not have, which is a small dishonesty on a normal
// page and a real one on a page built to be cited, because the date ends up in
// someone else's published text.
//
// So a range where there is a range, a single date where there genuinely is one.

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Split rather than new Date(iso): parsing "2026-08-04" yields UTC midnight, and
// formatting that in a timezone behind UTC renders it as the 3rd. These are
// calendar dates with no time in them, so they are treated as such.
export function formatDay(iso) {
  if (typeof iso !== 'string') return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return null;
  const [, y, mo, d] = m;
  const month = MONTHS[Number(mo) - 1];
  if (!month) return null;
  return `${Number(d)} ${month} ${y}`;
}

// The span of a set of dates, ignoring blanks. Null when there is nothing to
// report, so a caller can drop the sentence rather than print an empty one.
export function verifiedRange(dates) {
  const sorted = [...new Set((dates || []).filter((d) => typeof d === 'string' && d))].sort();
  if (!sorted.length) return null;
  return { from: sorted[0], to: sorted[sorted.length - 1] };
}

// "verified 5 September 2026" or "entries verified 4 August to 5 September 2026".
// The plural wording only appears when there really are several dates, so the
// 16 jurisdictions checked in one pass do not get hedged language they have not
// earned.
export function describeVerified(dates) {
  const range = verifiedRange(dates);
  if (!range) return null;
  const from = formatDay(range.from);
  const to = formatDay(range.to);
  if (!from || !to) return null;
  if (range.from === range.to) return `verified ${to}`;
  // Same year on both ends is the normal case, so the year is said once.
  const sameYear = range.from.slice(0, 4) === range.to.slice(0, 4);
  const fromShort = sameYear ? from.replace(` ${range.from.slice(0, 4)}`, '') : from;
  return `entries verified ${fromShort} to ${to}`;
}

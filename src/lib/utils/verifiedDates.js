// Verification dates, said honestly.
//
// Every cell in the legal matrix carries its own verifiedOn, and they are not
// uniform. The newest date alone claims freshness the older cells do not have,
// which matters on pages built to be cited, because the date ends up in
// someone else's published text. A bare range is honest but useless when one
// stale cell sits among 51 fresh ones: it makes the whole page look as old as
// its oldest row, and a citer has nothing to quote.
//
// So the rule, in one place for every surface (guides, map, state pages,
// index): lead with the date most cells share, then name the cells that differ
// when they come from 3 or fewer places, or count them when there are more.
// If no single date covers at least half the cells, fall back to the range.
// The modal date rather than the newest, so one re-checked cell among 51 old
// ones never headlines the page as fresh.

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

// "4 August to 5 September 2026", with the year said once when both ends share it.
function formatSpan(from, to) {
  const a = formatDay(from);
  const b = formatDay(to);
  if (!a || !b) return null;
  if (from === to) return b;
  const sameYear = from.slice(0, 4) === to.slice(0, 4);
  return `${sameYear ? a.replace(` ${from.slice(0, 4)}`, '') : a} to ${b}`;
}

function joinNames(names) {
  if (names.length < 2) return names.join('');
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
}

const count = (n) => n.toLocaleString('en-US');

// items: [{ date: 'YYYY-MM-DD', label: 'Maine' }]. The label is whatever the
// differing cells should be named by on that surface: the jurisdiction on a
// guide, the map or the index, the animal on a state page. Blank dates are
// dropped. Returns null when nothing is dated.
export function aggregateVerified(items) {
  const dated = (items || []).filter((it) => typeof it?.date === 'string' && it.date);
  if (!dated.length) return null;
  const tally = new Map();
  for (const it of dated) tally.set(it.date, (tally.get(it.date) || 0) + 1);
  // Most cells wins; on a tie the newer date, which is the one a re-check moved toward.
  const [modal, modalCount] = [...tally.entries()].sort((a, b) => (b[1] - a[1]) || b[0].localeCompare(a[0]))[0];
  const others = dated
    .filter((it) => it.date !== modal)
    .map((it) => [it.date, it.label])
    .sort((a, b) => a[0].localeCompare(b[0]) || String(a[1]).localeCompare(String(b[1])));
  const all = dated.map((it) => it.date).sort();
  return { total: dated.length, modal, modalCount, others, from: all[0], to: all[all.length - 1] };
}

// agg: aggregateVerified() output, or the same shape read back from JSON.
// unit: what the cells are, said in the count ("jurisdictions", "animals").
// Returns { line, citation }, both starting with lowercase "verified" or
// "entries verified" so a caller can prefix them.
//   line      the full sentence for the page:
//             "verified 1 October 2026 for 51 of 52 jurisdictions; Maine last checked 5 August 2026"
//   citation  short enough to sit inside a quoted reference:
//             "verified 1 October 2026 (Maine 5 August 2026)"
export function describeVerified(agg, { unit = 'jurisdictions' } = {}) {
  if (!agg || !agg.total) return null;
  const { total, modal, modalCount, others = [], from, to } = agg;
  const headline = formatDay(modal);
  if (!headline) return null;
  if (!others.length) {
    const s = `verified ${headline}`;
    return { line: s, citation: s };
  }
  if (modalCount / total < 0.5) {
    const span = formatSpan(from, to);
    if (!span) return null;
    const s = `entries verified ${span}`;
    return { line: s, citation: s };
  }
  const dates = others.map((o) => o[0]).sort();
  const otherSpan = formatSpan(dates[0], dates[dates.length - 1]);
  // "between" only when there is a span. Never "earlier": a straggler can be
  // newer than the modal date, as on a state page where most rows are old.
  const when = dates[0] === dates[dates.length - 1] ? otherSpan : `between ${otherSpan.replace(' to ', ' and ')}`;
  const names = [...new Set(others.map((o) => o[1]).filter(Boolean))];
  const lead = `verified ${headline} for ${count(modalCount)} of ${count(total)} ${unit}`;
  if (names.length && names.length <= 3) {
    return {
      line: `${lead}; ${joinNames(names)} last checked ${when}`,
      citation: `verified ${headline} (${joinNames(names)} ${otherSpan})`,
    };
  }
  return {
    line: `${lead}; the other ${count(others.length)} last checked ${when}`,
    citation: `verified ${headline} (${count(others.length)} of ${count(total)} ${unit} checked ${otherSpan})`,
  };
}

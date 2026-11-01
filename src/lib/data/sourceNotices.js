// Sources that have gone wrong since they were last read in full, and what a
// reader of a guide resting on one needs to be told about it.
//
// A notice is not a status change. The cells keep the answer and the
// verifiedOn they had when the source last said something checkable, and the
// guide says plainly that the source no longer says it. Each guide's own
// "accurate when checked" date comes from its cell's verifiedOn, via
// scripts/generate-legal-summary.mjs into legal-source-notices.json, so it is
// never hand-typed into 30 files.
//
// Remove an entry once the source is readable again and its cells have been
// re-verified. The generator, <SourceNotice> and the state pages all read this
// file, so the boxes disappear on the next build. The <SourceNotice> tags in
// the guides then render nothing and can be deleted at leisure.
//
// `body` is shared. `guideTail` closes the box in a legal guide, `pageTail` on
// a state page, where it covers every row resting on the source. In all three,
// {changed}, {status} and {when} are filled with formatted dates ({when} reads
// "on August 5, 2026" or "between August 4 and September 5, 2026"), and {count}
// with the number of rows.
// Retired: me-unrestricted (Maine's list was fish-only from September 8, 2026;
// the full list came back in October 2026 and its 48 cells were re-verified
// on November 1, 2026).
export const SOURCE_NOTICES = {};

// The finished text of a notice: body plus the tail for its surface. `dates`
// are the verifiedOn values the box speaks for; `count` is only used on pages.
// Null when the notice has been retired or there is nothing dated to vouch for.
export function noticeText(id, { surface, dates, count, formatDay }) {
  const notice = SOURCE_NOTICES[id];
  const sorted = [...new Set((dates || []).filter(Boolean))].sort();
  if (!notice || !sorted.length) return null;
  const from = formatDay(sorted[0]);
  const to = formatDay(sorted[sorted.length - 1]);
  const sameYear = sorted[0].slice(0, 4) === sorted[sorted.length - 1].slice(0, 4);
  const when = sorted.length === 1
    ? `on ${to}`
    : `between ${sameYear ? from.replace(`, ${sorted[0].slice(0, 4)}`, '') : from} and ${to}`;
  const tail = surface === 'page' ? notice.pageTail : notice.guideTail;
  return {
    title: notice.title,
    archive: notice.archive || null,
    text: `${notice.body} ${tail}`
      .replace('{changed}', formatDay(notice.changedOn))
      .replace('{status}', formatDay(notice.statusCheckedOn))
      .replace('{when}', when)
      .replace('{count}', String(count ?? sorted.length)),
  };
}

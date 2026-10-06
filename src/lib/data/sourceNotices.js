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
// "on 5 August 2026" or "between 4 August and 5 September 2026"), and {count}
// with the number of rows.
export const SOURCE_NOTICES = {
  'me-unrestricted': {
    title: "Maine's species list is offline",
    // When the agency replaced the file, and when the replacement was last looked at.
    changedOn: '2026-09-08',
    statusCheckedOn: '2026-10-06',
    // The last full copy anyone can still read: the Internet Archive's capture of
    // the list before Maine replaced it. Rendered as a link after the text.
    archive: {
      label: 'See the last full list, saved by the Internet Archive on 12 February 2026',
      url: 'https://web.archive.org/web/20260212233615/https://www.maine.gov/IFW/docs/unrestrictedspecies.pdf',
    },
    body:
      "On {changed}, Maine's Department of Inland Fisheries and Wildlife replaced its Unrestricted Species List with a version that covers fish only; the mammal, bird, reptile and invertebrate pages were removed. The department told us on {status} that only the fish section has been revised so far, that the mammal, bird and reptile sections have not yet been updated, and that it is working on merging the old and new documents in the meantime.",
    guideTail:
      'The Maine details in this guide come from the full list and were accurate when we checked it {when}. Confirm with the department before relying on them.',
    pageTail:
      'The {count} entries below that rest on it come from the full list and were accurate when we checked them {when}. Confirm with the department before relying on them.',
  },
};

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
    : `between ${sameYear ? from.replace(` ${sorted[0].slice(0, 4)}`, '') : from} and ${to}`;
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

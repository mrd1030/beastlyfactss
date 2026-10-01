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
// re-verified. The generator and <SourceNotice> both read this file, so the
// boxes disappear on the next build. The <SourceNotice> tags in the guides
// then render nothing and can be deleted at leisure.
export const SOURCE_NOTICES = {
  'me-unrestricted': {
    title: "Maine's species list is offline",
    // When the agency replaced the file, and when the replacement was last looked at.
    changedOn: '2026-09-08',
    statusCheckedOn: '2026-10-01',
    // {changed}, {status} and {checked} are filled with formatted dates.
    body:
      "On {changed}, Maine's Department of Inland Fisheries and Wildlife replaced its Unrestricted Species List with a version that covers fish only. The mammal, bird, reptile and invertebrate pages were removed without explanation, and when we last checked on {status}, nothing had replaced them. The Maine details in this guide come from the full list and were accurate when we checked it on {checked}. Confirm with the department before relying on them.",
  },
};

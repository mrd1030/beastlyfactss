# Cockatoo care package source

`../cockatoo.html` is generated. Edit the fragments here, then:

    python3 build.py                                   # assemble the source
    node ../_render.mjs cockatoo "Cockatoo" 1.0 --measure  # overflow check
    node ../_render.mjs cockatoo "Cockatoo" 1.0            # render the PDF

`build.py` assigns page numbers in document order from the `<!--PAGE key-->` markers,
resolves `{{P:key}}` cross-references and `<!--FOOT key-->` footers, generates the contents
page from its `SECTIONS` map, and embeds the cover photo. It fails the build on a duplicate
page key, a page missing from the contents, a contents entry with no page, an unknown
`{{P:key}}`, a leftover placeholder, or an em or en dash. Content is split across five page
files rather than four, because this guide runs to 44 pages.

Four things worth knowing before editing:

- **Every cross-reference is a token.** There is not a single literal "page 12" in these
  fragments and there should never be one. `grep -nE 'page [0-9]' pages_*.html` returning
  nothing is the check.
- **The head CSS is one step tighter than the cockatiel's**, which is itself a step tighter
  than the budgie's. On top of the cockatiel head: callouts at 6.5/10.5pt with 5pt margins,
  `h2.h` margins 6.5/2, `check-item` 2.8pt, `table` margin-top 4.5pt, `section-sub`
  margin-bottom 5.5pt, `table.dense td` 2.0pt on 1.24. That pass alone cleared seven of the
  nine remaining tight pages. Do not loosen it.
- **The contents page is two-column** (`.toc{column-count:2}`). At 44 entries a single
  column overflows by about 110 px. Any package past roughly 38 pages will need this.
- **The cover photo is `images/cockatoo-cover-1.jpg`**, a left-facing sulphur-crested bird
  against a dark canopy. The cover chrome is re-toned to indigo, not the template's
  bearded-dragon browns. `cockatoo-cover-2.jpg` is the alternate.

Content cut to make pages fit goes in `../../notes/cockatoo-v2-notes.md`, never in the bin.

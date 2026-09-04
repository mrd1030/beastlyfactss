# Lovebird care package source

`../lovebird.html` is generated. Edit the fragments here, then:

    python3 build.py                                     # assemble the source
    node ../_render.mjs lovebird "Lovebird" 2.0 --measure # overflow check
    node ../_render.mjs lovebird "Lovebird" 2.0           # render the PDF

`build.py` assigns page numbers in document order from the `<!--PAGE key-->` markers,
resolves `{{P:key}}` cross-references and `<!--FOOT key-->` footers, generates the
contents page from its `SECTIONS` map, and embeds the cover photo. It fails the build on
a duplicate page key, a page missing from the contents, a contents entry with no page, an
unknown `{{P:key}}`, a leftover placeholder, or an em or en dash.

Splitting a page means adding a `<!--PAGE key-->` / `<!--FOOT key-->` pair and one line in
`SECTIONS`. Every number downstream follows on its own. This build split the egg page in
two partway through and moved a dozen blocks between pages during the overflow pass; not
one page number went stale, which is the entire argument for the fragment layout.

Two things worth knowing before editing:

- **Every cross-reference is a token.** There is not a single literal "page 12" in these
  fragments, and there should never be one. `grep -nE 'page [0-9]' pages_*.html` returning
  nothing is the check.
- **Move blocks with whole-block slices, and assert the start index is before the end
  index.** A reversed slice during this build silently duplicated a section of the light
  page instead of removing it, which is exactly the resume hazard the hamster block in
  `../../TEMPLATE_GUIDE.md` describes. The build's duplicate-key check does not catch a
  duplicated block *within* a page.

The head's CSS is tightened from `_template.html`: line height 1.44, `td` padding 5.2pt,
callouts at 9.5pt/13pt, `check-item` at 4.6pt. That reclaimed roughly 60 to 100 px a page
across 38 pages and is what kept the guide from running to 42. Content cut to make pages
fit goes in `../../notes/lovebird-v3-notes.md`, never in the bin.

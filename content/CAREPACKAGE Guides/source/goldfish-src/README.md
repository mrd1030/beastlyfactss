# Goldfish care package source

`../goldfish.html` is generated. Edit the fragments here, then:

    python3 build.py                                    # assemble the source
    node ../_render.mjs goldfish "Goldfish" 3 --measure  # overflow check
    node ../_render.mjs goldfish "Goldfish" 3            # render the PDF

`build.py` assigns page numbers in document order from the `<!--PAGE key-->` markers,
resolves `{{P:key}}` cross-references and `<!--FOOT key-->` footers, generates the
contents page from its `SECTIONS` map, and embeds the cover photo. It fails the build on
a duplicate page key, a page missing from the contents, a contents entry with no page, an
unknown `{{P:key}}`, a leftover placeholder, or an em or en dash.

Splitting a page means adding a `<!--PAGE key-->` / `<!--FOOT key-->` pair and one line in
`SECTIONS`. Every number downstream follows on its own, which is the point: this package
was renumbered from 31 to 49 to 39 pages during its build, and no page number went stale.

Content cut to make pages fit goes in `../../notes/goldfish-v3-notes.md`, never in the
bin. See **Always keep a next-version notes file** in `../../TEMPLATE_GUIDE.md`.

Only the goldfish uses this fragment layout so far. Other packages are single hand-edited
files, which is fine for a build that does not get restructured; consider it if you expect
to move pages around.

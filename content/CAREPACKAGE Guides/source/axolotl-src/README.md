# Axolotl care package source

`../axolotl.html` is generated. Edit the fragments here, then:

    python3 build.py                                      # assemble the source
    node ../_render.mjs axolotl "Axolotl" 2.0 --measure    # overflow check
    node ../_render.mjs axolotl "Axolotl" 2.0              # render the PDF

`build.py` assigns page numbers in document order from the `<!--PAGE key-->` markers,
resolves `{{P:key}}` cross-references and `<!--FOOT key-->` footers, generates the
contents page from its `SECTIONS` map, and embeds the cover photo
(`images/axolotl-cover-1.jpg`). It fails the build on a duplicate page key, a page missing
from the contents, a contents entry with no page, an unknown `{{P:key}}`, a leftover
placeholder, or an em or en dash.

Splitting a page means adding a `<!--PAGE key-->` / `<!--FOOT key-->` pair and one line in
`SECTIONS`. Every number downstream follows on its own, which is the point: the
temperature page was split in two late in the 2.0 build and no page number went stale.

Guide version 2.0 on template t3, 41 pages. The 1.0 edition was 20 pages on the pre-t3
layout and is still the file `rebuilt/Axolotl_Care_Package.pdf`, because `carePackages.js`
still lists 1.0 as the live edition. Do not move it into `rebuilt/past versions/` until
the listing is updated.

Content cut to make pages fit goes in `../../notes/axolotl-v3-notes.md`, never in the bin.
See **Always keep a next-version notes file** in `../../TEMPLATE_GUIDE.md`.

# Guinea pig care package source

`../guinea-pig.html` is generated. Edit the fragments here, then:

    python3 build.py                                 # assemble the source
    node ../_render.mjs guinea-pig "Guinea Pig" 2.0 --measure # overflow check
    node ../_render.mjs guinea-pig "Guinea Pig" 2.0           # render the PDF

`build.py` assigns page numbers in document order from the `<!--PAGE key-->` markers,
resolves `{{P:key}}` cross-references and `<!--FOOT key-->` footers, generates the contents
page from its `SECTIONS` map, and embeds the cover photo. It fails the build on a duplicate
page key, a page missing from the contents, a contents entry with no page, an unknown
`{{P:key}}`, a leftover placeholder, or an em or en dash.

Two things worth knowing before editing:

- **Every cross-reference is a token.** There is not a single literal "page 12" in these
  fragments and there should never be one. `grep -nE 'page [0-9]' pages_*.html` returning
  nothing is the check.
- **The head CSS is tightened a step further than the lovebird's**: line height 1.40, `p`
  and `li` at 10.1pt, `td` padding 4.5pt, callouts 8/12pt at 10pt/1.40, `check-item`
  4pt/9.8pt, `h2.h` 13pt with 9/3 margins, `table.dense td` 2.6pt/1.30. That one pass took
  this guide from 22 overflowing pages to zero. Do not loosen it, and copy it forward to the
  next package rather than starting from `_template.html`.

Content cut to make pages fit goes in `../../notes/guinea-pig-v3-notes.md`, never in the bin.

The fragments run to five page files rather than four; `PAGE_FILES` in `build.py` lists them.

# Cockatiel care package source

`../cockatiel.html` is generated. Edit the fragments here, then:

    python3 build.py                                     # assemble the source
    node ../_render.mjs cockatiel "Cockatiel" 1.0 --measure  # overflow check
    node ../_render.mjs cockatiel "Cockatiel" 1.0            # render the PDF

`build.py` assigns page numbers in document order from the `<!--PAGE key-->` markers,
resolves `{{P:key}}` cross-references and `<!--FOOT key-->` footers, generates the contents
page from its `SECTIONS` map, and embeds the cover photo. It fails the build on a duplicate
page key, a page missing from the contents, a contents entry with no page, an unknown
`{{P:key}}`, a leftover placeholder, or an em or en dash.

Three things worth knowing before editing:

- **Every cross-reference is a token.** There is not a single literal "page 12" in these
  fragments and there should never be one. `grep -nE 'page [0-9]' pages_*.html` returning
  nothing is the check.
- **The head CSS is tightened a step further than the budgie's.** Page padding
  0.56/0.60/0.50, `p` and `li` at 9.9pt on 1.36, `td` padding 3.7pt, `table` 9.4pt,
  callouts 7/11pt at 9.6pt/1.36, `check-item` 3.2pt/9.5pt on 1.30, `h2.h` 12.4pt with
  7.5/2.5 margins, `table.dense` 8.5pt with 2.2pt padding, `section-title` 18pt. That one
  pass took this guide from 19 overflowing pages to one, reclaiming roughly 90 to 160 px a
  page. Do not loosen it, and copy it forward rather than starting from the budgie head.
- **The cover photo is `images/cockatiel-cover-1.jpg`**, a left-facing bird against a warm
  sunset. The cover chrome is re-toned to amber-brown to match it; it is not the template's
  bearded-dragon palette. `cockatiel-cover-2.jpg` is the alternate.

Content cut to make pages fit goes in `../../notes/cockatiel-v2-notes.md`, never in the bin.

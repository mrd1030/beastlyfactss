# African fat-tailed gecko care package source

`../african-fat-tail.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                                              # assemble the source
    node ../_render.mjs african-fat-tail "African Fat-Tailed Gecko" 1.0 --measure  # overflow check
    node ../_render.mjs african-fat-tail "African Fat-Tailed Gecko" 1.0            # render the PDF

The PDF is `rebuilt/African_Fat-Tailed_Gecko_Care_Package_v1.0.pdf`. On Windows, set
`CHROME_BIN` to Chrome first.

`build.py` assigns page numbers in document order from the `<!--PAGE key-->` markers,
resolves `{{P:key}}` cross-references and `<!--FOOT key-->` footers, generates the contents
page from its `SECTIONS` map, and embeds the cover photo. It fails the build on a duplicate
page key, unpaired PAGE and FOOT markers, a page missing from the contents, a contents entry
with no page, an unknown `{{P:key}}`, a leftover placeholder, a literal "page N" written by
hand, an em or en dash (character or HTML entity), a link or website reference in the page
text, or a short list of non-US words.

Things worth knowing before editing:

- **Every cross-reference is a token.** The build refuses a hand-written "page 12".
- **`pages_6.html` closes the document** with `</body></html>`. `_render.mjs` injects its
  overflow probe before the first `</body>`, so without it `--measure` reports "No
  measurement produced".
- **The head CSS is the White's tree frog's** (itself the cockatoo's), with the accent triple
  changed to a savanna umber (`#8A5420` / `#6A3F15` / `#F5EADB`) and three additions:
  `table.cond` for the cause, signs, response and recovery tables on the health pages,
  `table.sym` for the symptom page, and the `.snug` checklist rule.
- **The cover chrome is tokenized.** `.cover-savanna` at the bottom of `head.html` holds every
  cover color as a `--cv-*` custom property: the near-black umber of the photo's background
  with the warm tan and ochre of the gecko's bands as the accent. Re-tone the cover by
  editing that one block.
- **The cover photo is `images/african-fat-tail-cover-1.jpg`**, the owner's image: a banded
  gecko facing left on a rock with the head near the center and the fat tail curling back
  into frame, 1696x2528. `african-fat-tail-cover-2.jpg` (a close, chunky gecko with the head
  left of center) and `african-fat-tail-cover-3.jpg` (a smaller gecko with more tail) are the
  alternates. `build.py` embeds the file as base64 and nothing else, so it is never resized
  or re-encoded. `object-position:40% 50%` keeps the eye clear of the 30% left fade; the
  snout tip sits inside the fade and the far body runs off the right edge.
- **Abbreviations are spelled out at first use in reading order, letters first** (UVB, UVI,
  IUCN, CDC, ARAV, MBD, and the units on the how-to page), contents page included, and every
  one is in the two-page glossary. Keep it that way when adding a page.
- **Site figures are copied exactly.** Every number the Beastly Facts fat-tail guides carry
  is printed as the guide states it, identically on the care pages, the setup checklist, the
  emergency card and the owner tools. Change a figure in every place or none.

Content cut to make pages fit, and everything the next edition needs, goes in
`../../notes/african-fat-tail-v2-notes.md`, never in the bin.

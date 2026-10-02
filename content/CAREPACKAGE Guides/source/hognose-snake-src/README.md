# Hognose snake care package source

`../hognose-snake.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                                 # assemble the source
    node ../_render.mjs hognose-snake "Hognose Snake" 1.0 --measure  # overflow check
    node ../_render.mjs hognose-snake "Hognose Snake" 1.0            # render the PDF

The PDF is `rebuilt/Hognose_Snake_Care_Package_v1.0.pdf`. On Windows, set `CHROME_BIN` to
Chrome first.

`build.py` reads every `pages_*.html` file in name order, assigns page numbers in document
order from the `<!--PAGE key-->` markers, resolves `{{P:key}}` cross-references and
`<!--FOOT key-->` footers, generates the contents page from its `SECTIONS` map, and embeds the
cover photo. It fails the build on a duplicate page key, unpaired PAGE and FOOT markers, a page
missing from the contents, a contents entry with no page, an unknown `{{P:key}}`, a leftover
placeholder, a literal "page N" written by hand, an em or en dash (character or entity), an
external link (http or www, outside SVG `xmlns` attributes), or a British spelling or usage on
its banned list.

Things worth knowing before editing:

- **Species.** The package covers the western hognose, *Heterodon nasicus*, only. The eastern
  and southern hognoses appear only where the law or a care difference needs them named.
- **Every cross-reference is a token.** The build refuses a hand-written "page 12".
- **The head CSS is the White's tree frog's**, which is the cockatoo's, with the accent triple
  changed to `#9A6A2C` / `#76501F` / `#F4EADB`, a dry-grass tan. The contents page is
  two-column.
- **The cover chrome is tokenized.** `.cover-prairie` at the bottom of `head.html` holds every
  cover color as a `--cv-*` custom property: dusk umber with warm tan and dry-grass gold, to
  sit with the owner's photo of a tan snake on sand at dusk. Re-tone the cover by editing that
  one block.
- **The cover photo is `images/hognose-snake-cover-1.jpg`**, the owner's image: a coiled
  western hognose facing left, upturned snout, 1696x2528. `build.py` embeds it as base64 and
  nothing else, so it is never resized or re-encoded. `object-position:18% 50%` keeps the
  snout and eye clear of the 30% left fade; at full page height the coil runs past the right
  edge of the 3.9 in slot.
- **Pages split across seven files** (`pages_01` to `pages_07`), by section. A new file sorts
  into place by name.
- **The legal pages (21 to 23) mirror `src/lib/data/legalStatus.json`** status for status, all
  52 jurisdictions, as read on 1 October 2026. If that file changes, re-check every row: the
  status buckets must match exactly, and the notes must say which hognose a rule reaches.
- **Abbreviations and jargon are spelled out at first use in reading order**, the contents
  page included (its titles avoid jargon), and every one has a glossary entry. Keep it that way
  when adding a page.

Content cut or deferred goes in `../../notes/hognose-snake-v2-notes.md`, never in the bin.

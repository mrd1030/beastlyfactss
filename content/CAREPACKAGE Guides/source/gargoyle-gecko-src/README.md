# Gargoyle gecko care package source

`../gargoyle-gecko.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                                 # assemble the source
    node ../_render.mjs gargoyle-gecko "Gargoyle Gecko" 1.0 --measure  # overflow check
    node ../_render.mjs gargoyle-gecko "Gargoyle Gecko" 1.0            # render the PDF

The PDF is `rebuilt/Gargoyle_Gecko_Care_Package_v1.0.pdf`. On Windows, set `CHROME_BIN` to
Chrome first.

`build.py` assigns page numbers in document order from the `<!--PAGE key-->` markers,
resolves `{{P:key}}` cross-references and `<!--FOOT key-->` footers, generates the contents
page from its `SECTIONS` map, and embeds the cover photo. It fails the build on a duplicate
page key, unpaired PAGE and FOOT markers, a page missing from the contents, a contents entry
with no page, an unknown `{{P:key}}`, a leftover placeholder, a literal "page N" written by
hand, an em or en dash (character or HTML entity), or URL-like text in the printed body.

Things worth knowing before editing:

- **Every cross-reference is a token.** The build refuses a hand-written "page 12".
- **The head CSS is the White's tree frog's** (itself the cockatoo's), with only the accent
  triple changed to a burnt rust (`#A3452A` / `#7A321E` / `#F6E3DA`), taken from the orange
  of the gecko's dorsal stripes. The contents page is two-column.
- **The cover chrome is tokenized.** `.cover-bark` at the bottom of `head.html` holds every
  cover color as a `--cv-*` custom property: near-black forest green to match the dark green
  background of the owner's photo, with burnt orange accents. Re-tone the cover by editing
  that one block.
- **The cover photo is `images/gargoyle-gecko-cover-1.jpg`**, the owner's image: portrait,
  1696x2528, gecko facing left on a diagonal branch. `build.py` embeds it as base64 and
  nothing else, so it is never resized or re-encoded. `object-position:25% 45%` keeps the
  eye well clear of the 30% left fade; the snout tip sits near the fade edge.
- **Abbreviations and jargon are spelled out at first use in reading order**, contents page
  included (UVB, IUCN, CDC, ARAV, T5 HO, UVI, MBD, FTS, and terms such as arboreal,
  ectothermic, urates, vent, hemipenes, gravid, dystocia), and every one has a glossary entry
  on the two glossary pages. Keep it that way when adding a page.

Content cut to make pages fit goes in `../../notes/gargoyle-gecko-v2-notes.md`, never in the
bin.

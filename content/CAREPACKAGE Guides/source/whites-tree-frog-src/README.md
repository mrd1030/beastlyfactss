# White's tree frog care package source

`../whites-tree-frog.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                                  # assemble the source
    node ../_render.mjs whites-tree-frog "Whites Tree Frog" 1.1 --measure  # overflow check
    node ../_render.mjs whites-tree-frog "Whites Tree Frog" 1.1            # render the PDF

Pass the name without the apostrophe. `_render.mjs` builds the filename from it, and
"White's Tree Frog" produces `White's_Tree_Frog_Care_Package_v1.1.pdf`, an apostrophe in a
file that gets uploaded and linked. The PDF is `rebuilt/Whites_Tree_Frog_Care_Package_v1.1.pdf`.
On Windows, set `CHROME_BIN` to Chrome first
(`CHROME_BIN="C:/Program Files/Google/Chrome/Application/chrome.exe"`). Every page must
report at least 15 px free.

Edition 1.1 (41 pages) is a light alignment of 1.0 (39 pages) to the bearded dragon 4.0
conventions: the line-icon cover mark in a thin ring, the flagship section order (handling,
then body language and enrichment, then arrival and sexing), a units note on the how-to page,
a two-page glossary, a separate sources-disagree page and a short-list version history. The
care content was not rewritten. The 1.0 PDF stays in `rebuilt/`.

`build.py` reads every `pages_*.html` file in name order (`pages_1` to `pages_6`), assigns page
numbers in document order from the `<!--PAGE key-->` markers,
resolves `{{P:key}}` cross-references and `<!--FOOT key-->` footers (the edition comes from
`EDITION` in `build.py`), generates the contents page from its `SECTIONS` map, and embeds the
cover photo. It fails the build on a duplicate page key, unpaired PAGE and FOOT markers, a page
missing from the contents, a contents order that differs from the page order, an unknown
`{{P:key}}`, a leftover placeholder, a literal "page N" written by hand, an external link, a
British spelling on its banned list, or an em or en dash, as a character or as an HTML entity.

Things worth knowing before editing:

- **The edition is in three places.** `EDITION` in `build.py` drives every page footer. The
  cover chip and the version history in `pages_6.html` carry it as text. Change all together.
- **Every cross-reference is a token.** The build refuses a hand-written "page 12". Keep
  pointers sparse: tool pages one per row; everywhere else one per destination per page, never
  to the page itself or the next page in the same section, no ping-pong, nothing to the
  glossary. Glossary entries point only into the care half (profile to health) and the budget
  page. The mistakes table on the enrichment page is the one care page that carries a pointer
  on every row.
- **The head CSS is the cockatoo's**, the tightest in the series, with only the accent
  triple changed (`#2F7D52` / `#24603F` / `#E6F2EA`, the storefront theme's green). Do not
  loosen it. The contents page is two-column, as the cockatoo's is.
- **The cover chrome is tokenized.** `.cover-canopy` at the bottom of `head.html` holds every
  cover color as a `--cv-*` custom property: deep rainforest green with the pale gold of the
  frog's iris as the accent, matching the `whites-tree-frog` entry in
  `src/lib/data/carePackageThemes.js`. Blackwater was the existing amphibian token and was
  passed over because this frog lives in trees, not water. Re-tone the cover by editing that
  one block.
- **The cover photo is `images/whites-tree-frog-cover-1.jpg`**, the owner's image: a compact
  frog facing left on a diagonal branch, 896x1200. `whites-tree-frog-cover-2.jpg` is the
  alternate frame. `build.py` embeds it as base64 and nothing else, so it is never resized or
  re-encoded. `object-position:60% 50%` keeps the eye clear of the 30% left fade; at full
  page height the frog is a fraction wider than the 3.9 in slot, so the tip of the snout sits
  in the fade and the hind toes touch the right edge.
- **Abbreviations are spelled out at first use in reading order** (UVB, RO, T5 HO, UV, UVI,
  PCR, DNA, IUCN, PVC; units on the how-to page) and each has a glossary entry. Keep it that
  way when adding a page.
- **No outside names in care text**: no brands, stores, websites or organizations. Named
  studies and the Association of Reptile and Amphibian Veterinarians' find-a-vet directory are
  the exceptions. Sources live on the Sources page, which does not cite the site's own pages.

Content cut to make pages fit goes in `../../notes/whites-tree-frog-v2-notes.md`, never in
the bin.

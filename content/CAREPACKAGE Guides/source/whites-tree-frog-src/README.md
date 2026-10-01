# White's tree frog care package source

`../whites-tree-frog.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                                  # assemble the source
    node ../_render.mjs whites-tree-frog "Whites Tree Frog" 1.0 --measure  # overflow check
    node ../_render.mjs whites-tree-frog "Whites Tree Frog" 1.0            # render the PDF

Pass the name without the apostrophe. `_render.mjs` builds the filename from it, and
"White's Tree Frog" produces `White's_Tree_Frog_Care_Package_v1.0.pdf`, an apostrophe in a
file that gets uploaded and linked. The PDF is `rebuilt/Whites_Tree_Frog_Care_Package_v1.0.pdf`.
On Windows, set `CHROME_BIN` to Chrome first.

`build.py` assigns page numbers in document order from the `<!--PAGE key-->` markers,
resolves `{{P:key}}` cross-references and `<!--FOOT key-->` footers, generates the contents
page from its `SECTIONS` map, and embeds the cover photo. It fails the build on a duplicate
page key, unpaired PAGE and FOOT markers, a page missing from the contents, a contents entry
with no page, an unknown `{{P:key}}`, a leftover placeholder, a literal "page N" written by
hand, or an em or en dash, as a character or as an HTML entity.

Things worth knowing before editing:

- **Every cross-reference is a token.** The build refuses a hand-written "page 12".
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
- **Abbreviations are spelled out at first use in the body** (UVB, RO, T5 HO, UVI, PCR,
  IUCN, PVC) and the main ones are in the glossary. Keep it that way when adding a page.

Content cut to make pages fit goes in `../../notes/whites-tree-frog-v2-notes.md`, never in
the bin.

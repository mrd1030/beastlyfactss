# Guinea pig care package source

`../guinea-pig.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                                      # assemble the source
    node ../_render.mjs guinea-pig "Guinea Pig" 3.0 --measure            # overflow check
    node ../_render.mjs guinea-pig "Guinea Pig" 3.0                      # render the PDF

The PDF is `rebuilt/Guinea_Pig_Care_Package_v3.0.pdf`. On Windows, set `CHROME_BIN` to
Chrome first (`CHROME_BIN="C:/Program Files/Google/Chrome/Application/chrome.exe"`). Every
page must report at least 15 px free.

`build.py` reads every `pages_*.html` file in name order, assigns page numbers in document
order from the `<!--PAGE key-->` markers, resolves `{{P:key}}` cross-references and
`<!--FOOT key-->` footers, generates the contents page from its `SECTIONS` map, and embeds the
cover photo. It fails the build on a duplicate page key, unpaired PAGE and FOOT markers, a page
missing from the contents, a contents order that differs from the page order, an unknown
`{{P:key}}`, a leftover placeholder, a literal "page N" written by hand, an em or en dash
(character or entity), an external link (http, www or .com, outside SVG `xmlns` attributes), or
a British spelling on its banned list.

Things worth knowing before editing:

- **Edition 3.0 replaced the hand-edited 2.1 file and the stale five-file fragments.** 2.1
  (41 pages) stays in git history and in `rebuilt/Guinea_Pig_Care_Package_v2.1.pdf`. 3.0 is the
  same t3 look (the bearded dragon 4.0 head CSS with the guinea pig accent `#B5851F` / `#8C6518`
  / `#F4EBD3`, the 2.1 cover) on the longer outline the recent packages use, with a two-column
  contents page.
- **The edition is in two places.** `EDITION` in `build.py` drives every page footer
  ("Guinea Pig Care Package · Edition 3.0"). The cover chip, the colophon and the version
  history in `pages_07.html` carry it as text. Change all of them together.
- **Every cross-reference is a token.** The build refuses a hand-written "page 12". Keep
  pointers sparse: tool pages (how-to, checklist, emergency card, symptom table, first 30 days,
  routine, sitter sheet) one per row; everywhere else one per destination per page, never to
  the page itself or the next page in the same section, no ping-pong, nothing to the glossary.
  Glossary entries point only into the care half (profile to health) and the budget page, one
  per row.
- **The cover photo is `images/guinea-pig-cover-2.jpg`**, the same file 2.1 carried inline
  (md5 3da61036edb9c46ca8a19cf3c820fd28). `build.py` embeds it as base64 and nothing else, so it
  is never resized or re-encoded. The corner icon is the approved side-view guinea pig, drawn
  like the bearded dragon cover's: a 26 by 26 ring with a nested 17.6 px line icon in the
  cover's gold `#E0AF57`.
- **Pages split across seven files** (`pages_01` to `pages_07`), by section. A new file sorts
  into place by name. Tight pages carry `class="page snug"`; `table.ref` in `head.html` is the
  densest table style, used on the glossary, sources and disagreement pages.
- **The law page mirrors `src/lib/data/legalStatus.json`** (guinea-pig entries, read
  1 October 2026): 51 jurisdictions legal with no permit, Hawaii conditionally approved, none
  barred, none permit-only, and twelve states that let cities or counties be stricter
  (California, Colorado, Illinois, Kentucky, Maryland, Michigan, Montana, Nevada, North
  Carolina, Ohio, Oregon, Washington). If that file changes, recount and re-check every row.
- **Every figure comes from the site.** The deep dives in `content/guides/guinea-pig-*.mdx`
  and the shared small mammal guides (temperature and heat stress, vet visits and travel,
  grooming and nails, enterotoxemia) own the numbers; prices come only from the cost guide, whose
  rows and totals add up: setup $300 to $470 with every item priced and rounded to the nearest
  $5, a pair $75 to $185 a month (food $60 to $135, food for one $30 to $70). Neuter or spay is
  the one line left unpriced, since clinics set it. The budget runs over two pages (`budget` and
  `budget2`). Where the site disagrees with itself, the
  topic's own guide wins. The 3.0 rebuild first fixed the site (heat onset at 75°F, alfalfa
  stages, the cost guide's pair breakdown) and added the missing material (sexing and breeding
  timings, choosing a healthy guinea pig, sounds, cleaning and water, weighing, mites, lice,
  ringworm, lumps, boar butt, pregnancy toxemia) before any of it went into the book.
- **Abbreviations are spelled out at first use in reading order** (the how-to page defines the
  units, the enclosure page C&C, the bedding page PVC, the stasis page GI), and every one has a
  glossary entry. Keep it that way when adding a page.
- **No outside names in care text**: no brands, stores, websites or organizations. Named
  studies and legal citations are the exceptions. Sources live on the Sources page, and the
  site's own pages are never cited there.
- No UVB, lamp, thermostat or substrate-heating rules appear anywhere: a guinea pig's climate
  is the room.

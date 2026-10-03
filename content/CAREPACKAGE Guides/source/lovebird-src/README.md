# Lovebird care package source

`../lovebird.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                              # assemble the source
    node ../_render.mjs lovebird "Lovebird" 3.0 --measure        # overflow check
    node ../_render.mjs lovebird "Lovebird" 3.0                  # render the PDF

The PDF is `rebuilt/Lovebird_Care_Package_v3.0.pdf`. On Windows, set `CHROME_BIN` to Chrome
first (`CHROME_BIN="C:/Program Files/Google/Chrome/Application/chrome.exe"`). Every page must
report at least 15 px free.

`build.py` reads every `pages_*.html` file in name order, assigns page numbers in document
order from the `<!--PAGE key-->` markers, resolves `{{P:key}}` cross-references and
`<!--FOOT key-->` footers, generates the contents page from its `SECTIONS` map, and embeds the
cover photo. It fails the build on a duplicate page key, unpaired PAGE and FOOT markers, a page
missing from the contents, a contents order that differs from the page order, an unknown
`{{P:key}}`, a leftover placeholder, a literal "page N" written by hand, an em or en dash
(character or entity), an external link (http, www or .com, outside SVG `xmlns` attributes), or
a British spelling on its banned list ("African grey" is exempt, since it is a name).

Things worth knowing before editing:

- **Edition 3.0 replaced the hand-edited 2.1 file.** The 2.0 fragments that used to live here
  were stale and are gone; 2.1 (39 pages) stays in git history and in
  `rebuilt/Lovebird_Care_Package_v2.1.pdf`. 3.0 is the bearded dragon 4.0 outline and page
  furniture (the 4.0 head CSS and two-column contents page) in the lovebird colors
  (accent `#C2455B` / `#963545` / `#F7E0E5`) and the 2.x cover.
- **The edition is in two places.** `EDITION` in `build.py` drives every page footer
  ("Lovebird Care Package · Edition 3.0"). The cover chip, the copyright line and the version
  history in `pages_07.html` carry it as text. Change all of them together.
- **Every cross-reference is a token.** The build refuses a hand-written "page 12". Keep
  pointers sparse: tool pages (checklist, emergency card, symptom table, first 30 days,
  routine, sitter sheet, logs) one per row; everywhere else one per destination per page,
  never to the page itself or the next page in the same section, no ping-pong, nothing to the
  glossary. Glossary entries point only into the care half (profile to health) and the budget.
- **The cover photo is `images/lovebird-cover-2.jpg`**, the same file 2.x carried inline.
  `build.py` embeds it as base64 and nothing else, so it is never resized or re-encoded. The
  top-left ring icon is the lucide bird, drawn like the bearded dragon cover's icon in the
  cover accent `#E3849C`.
- **Pages split across seven files** (`pages_01` to `pages_07`), by section. A new file sorts
  into place by name. Tight pages carry `class="page snug"`; `table.ref` in `head.html` is the
  densest table style, used on the glossary, sources and disagreement pages.
- **There is no law section.** `src/lib/data/legalStatus.json` has no lovebird entry and the
  site's lovebird guides state no legal rule, so the outline's law page is left out. If a
  lovebird entry is added, add the page and recount every row.
- **Every figure comes from the site.** The guides in `content/guides/lovebird-*.mdx` and the
  shared bird guides own the numbers; prices come only from the cost guide, whose rows and
  totals add up: every item priced and rounded to the nearest $5, $295 to $625 setup, $260 to $430 a
  year, $20 to $40 a month. The budget runs over two pages (`budget` and `budget2`). Anything the
  site does not support is left out: masked lovebirds, a pair-cost figure, scaly face mites,
  night frights and a cuttlebone are not in this edition for that reason.
- **Abbreviations are spelled out at first use in reading order** (the how-to page defines the
  units), and every one has a glossary entry. Keep it that way when adding a page.
- **No outside names in care text**: no brands, stores, websites or organizations. Named
  studies and the Association of Avian Veterinarians' find-a-vet directory are the
  exceptions. Sources live on the Sources page.

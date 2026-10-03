# Tarantula care package source

`../tarantula.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                              # assemble the source
    node ../_render.mjs tarantula "Tarantula" 3.0 --measure      # overflow check
    node ../_render.mjs tarantula "Tarantula" 3.0                # render the PDF

The PDF is `rebuilt/Tarantula_Care_Package_v3.0.pdf`. On Windows, set `CHROME_BIN` to
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

- **Edition 3.0 replaced the hand-edited 2.3 file.** 2.3 (44 pages) stays in git history.
  3.0 is the same t3 look (the 2.3 head CSS, accent `#3F5F4A` / `#2C4535` / `#E3EDE5`, the 2.3
  cover) on the bearded dragon 4.0 outline, with a two-column contents page and the line
  spider icon in the cover ring.
- **The edition is in two places.** `EDITION` in `build.py` drives every page footer
  ("Tarantula Care Package · Edition 3.0"). The cover chip, the colophon and the version
  history in `pages_07.html` carry it as text. Change all of them together.
- **Species scope.** The package covers the beginner New World species the site covers: the
  Chilean rose hair, curly hair, Brazilian black, Chaco golden knee and Mexican red knee on the
  ground, and the pink toe in the trees. Figures that belong to one species say so; never
  print one species' number as a tarantula figure. Old World species and obligate burrowers
  are out of scope.
- **Every cross-reference is a token.** The build refuses a hand-written "page 12". Keep
  pointers sparse: tool pages (how-to, checklist, emergency card, symptom table, first 30 days,
  routine, sitter sheet) one per row; everywhere else one per destination per page, never to
  the page itself or the next page in the same section, no ping-pong, nothing to the glossary.
  Glossary entries point only into the care half (profile to health) and the budget page.
- **The cover photo is `images/tarantula-cover-1.jpg`**, extracted byte for byte from the
  base64 cover the 2.3 HTML carried inline (md5 4fdd6191ac14961dacc5824d02eba711).
  `build.py` embeds it as base64 and nothing else, so it is never resized or re-encoded.
- **Pages split across seven files** (`pages_01` to `pages_07`), by section. A new file sorts
  into place by name. Tight pages carry `class="page snug"`; `table.ref` in `head.html` is the
  densest table style, used on the glossary, legal and reference pages.
- **The law page mirrors `src/lib/data/legalStatus.json`** (tarantula entries, read
  1 October 2026, Maine 5 August 2026): 41 legal, New York City, Hawaii, Montana and the
  District of Columbia barred, Rhode Island permit, Maine three named species, Oregon
  conditional on stock collected in the continental United States, Idaho, Arkansas, New Mexico
  and New Jersey unclear, and local overrides in nine legal states plus Oregon. If that file
  changes, recount and re-check every row.
- **Every figure comes from the site.** The deep dives in `content/guides/tarantula-*.mdx` and
  the shared invertebrate guides own the numbers; prices come only from the cost guide, and the
  budget page must equal its totals, every item priced and rounded to the nearest $5 ($105 to
  $305 setup, $130 to $405 with the spider, $75 to $235 a year, about $5 to $20 a month). Where the site disagrees with itself, the topic's own guide wins.
- **Abbreviations are spelled out at first use in reading order** (the how-to page defines the
  units), and every one has a glossary entry. Keep it that way when adding a page.
- **No outside names in care text**: no brands, stores, websites or organizations. Named
  studies and legal citations are the exceptions. Sources live on the Sources page.

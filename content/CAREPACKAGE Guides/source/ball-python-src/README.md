# Ball python care package source

`../ball-python.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                                 # assemble the source
    node ../_render.mjs ball-python "Ball Python" 3.0 --measure     # overflow check
    node ../_render.mjs ball-python "Ball Python" 3.0               # render the PDF

The PDF is `rebuilt/Ball_Python_Care_Package_v3.0.pdf`. On Windows, set `CHROME_BIN` to
Chrome first (`CHROME_BIN="C:/Program Files/Google/Chrome/Application/chrome.exe"`). Every
page must report at least 15 px free.

`build.py` reads every `pages_*.html` file in name order, assigns page numbers in document
order from the `<!--PAGE key-->` markers, resolves `{{P:key}}` cross-references and
`<!--FOOT key-->` footers, generates the contents page from its `SECTIONS` map, and embeds the
cover photo. It fails the build on a duplicate page key, unpaired PAGE and FOOT markers, a page
missing from the contents, a contents order that differs from the page order, an unknown
`{{P:key}}`, a leftover placeholder, a literal "page N" written by hand, an em or en dash
(character or entity), an external link (http, www or .com, outside SVG `xmlns` attributes), or
a British spelling on its banned list. The list matches whole-word stems, so "organisms" and a
journal title with "Behaviour" in it both trip it: reword rather than loosen the list.

Things worth knowing before editing:

- **Edition 3.0 replaced the hand-edited 2.2 file.** 2.2 (35 pages, its cover chip said 34)
  stays in git history and in `rebuilt/Ball_Python_Care_Package_v2.2.pdf`. 3.0 is the same t3
  look (the 2.2 head CSS, accent `#6B4E8C` / `#513B6B` / `#E8E1F1`, the 2.2 cover) on the
  outline the Bearded Dragon 4.0 rebuild uses, with a two-column contents page and the
  `table.ref` style for the glossary, legal and reference pages.
- **The edition is in two places.** `EDITION` in `build.py` drives every page footer
  ("Ball Python Care Package · Edition 3.0"). The cover chip, the colophon and the version
  history in `pages_07.html` carry it as text. Change all of them together.
- **Every cross-reference is a token.** The build refuses a hand-written "page 12". Keep
  pointers sparse: tool pages (how-to, checklist, emergency card, budget, first 30 days,
  symptom table, routine, outage, sitter sheet, logs) one per row; everywhere else one per
  destination per page, never to the page itself or the next page in the same section, no
  ping-pong, nothing to the glossary. Glossary entries point only into the care half (profile
  to health) and the budget page.
- **The cover photo is `images/ball-python-cover-1.jpg`**, decoded byte for byte from the
  base64 the 2.2 HTML carried inline (md5 `f6a4f87bd683b71f83a2174e90502d8c`, 1168x784, a
  coiled ball python with its head raised, facing left). `build.py` embeds it as base64 and
  nothing else, so it is never resized or re-encoded.
- **Pages split across seven files** (`pages_01` to `pages_07`), by section. A new file sorts
  into place by name. Tight pages carry `class="page snug"`.
- **The law page mirrors `src/lib/data/legalStatus.json`** (ball-python entries, read
  1 October 2026, Maine 5 August 2026): 46 legal, Hawaii and New York City barred, New Jersey,
  Delaware and West Virginia permit, Minnesota conditional, and twelve states with a local
  override. If that file changes, recount and re-check every row.
- **Every figure comes from the site.** The deep dives in `content/guides/ball-python-*.mdx`,
  the shared reptile and snake guides, the hub in `src/lib/data/guides/snakes.js` and the
  encyclopedia entry own the numbers; prices come only from the cost guide, and the budget
  rows are its rows, so the totals add up. Where the site disagrees with itself, the species
  guide wins and the conflict goes on the "Where the sources disagree" page.
- **Left out for want of a site source:** weights by age (the snake sexing guide says no
  verified ranges exist), a body-weight percentage for prey, female follicle and egg-binding
  detail beyond the prolapse link, dehydration signs other than urates, and supplements (whole
  prey is the complete diet; the site says nothing more). Add them back only with a site
  article behind them.
- **Abbreviations are spelled out at first use in reading order** (the how-to page defines the
  units; the enclosure diagram says "ultraviolet" so UVB is first met, and defined, on the
  humidity page), and every one has a glossary entry. Keep it that way when adding a page.
- **No outside names in care text**: no brands, stores, websites or organizations, and no
  "keepers say" narration. Named studies, legal citations and the Association of Reptile and
  Amphibian Veterinarians' find-a-vet directory are the exceptions. Sources live on the
  Sources page.

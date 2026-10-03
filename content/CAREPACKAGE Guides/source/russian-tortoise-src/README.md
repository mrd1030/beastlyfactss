# Russian tortoise care package source

`../russian-tortoise.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                                          # assemble the source
    node ../_render.mjs russian-tortoise "Russian Tortoise" 3.1 --measure    # overflow check
    node ../_render.mjs russian-tortoise "Russian Tortoise" 3.1              # render the PDF

The PDF is `rebuilt/Russian_Tortoise_Care_Package_v3.1.pdf`. On Windows, set `CHROME_BIN` to
Chrome first (`CHROME_BIN="C:/Program Files/Google/Chrome/Application/chrome.exe"`). Every
page must report at least 15 px free.

`build.py` reads every `pages_*.html` file in name order, assigns page numbers in document
order from the `<!--PAGE key-->` markers, resolves `{{P:key}}` cross-references and
`<!--FOOT key-->` footers, generates the contents page from its `SECTIONS` map, and embeds the
cover photo. It fails the build on a duplicate page key, unpaired PAGE and FOOT markers, a page
missing from the contents, a contents order that differs from the page order, an unknown
`{{P:key}}`, a leftover placeholder, a literal "page N" written by hand, an em or en dash
(character or entity), an external link (http, www or .com, outside SVG `xmlns` attributes), or
a British spelling on its banned list. The word list is blunt: "organisms" and "programmed"
trip it, so reword rather than loosen it.

Things worth knowing before editing:

- **Edition 3.0 replaced the hand-edited 2.3 file.** The 2.1 fragments that used to sit here
  were stale since 2.2 and are gone; 2.3 (41 pages) stays in git history and in
  `rebuilt/Russian_Tortoise_Care_Package_v2.3.pdf`. 3.0 is the same t3 look (accent `#7A8A3E` /
  `#5C6A2A` / `#E9EEDA`, the 2.x cover with its top-left icon untouched) on the bearded dragon
  4.0 outline and head CSS, with a two-column contents page.
- **The edition is in two places.** `EDITION` in `build.py` drives every page footer
  ("Russian Tortoise Care Package · Edition 3.1"). The cover chip, the colophon and the version
  history in `pages_07.html` carry it as text. Change all of them together.
- **Every cross-reference is a token.** The build refuses a hand-written "page 12". Keep
  pointers sparse: tool pages (how-to, checklist, emergency card, budget, first 30 days,
  symptom table, routine, outage, sitter sheet, logs) one per row; everywhere else one per
  destination per page, never to the page itself or the next page in the same section, no
  ping-pong, nothing to the glossary. Glossary entries point only into the care half (profile
  to health) and the budget page.
- **The cover photo is `images/russian-tortoise-cover-3.jpg`**, the same file 2.x carried inline
  (md5 35a2a824de746f5b8bdf606dc5642548). `build.py` embeds it as base64 and nothing else.
- **Pages split across seven files** (`pages_01` to `pages_07`), by section. Tight pages carry
  `class="page snug"`; `table.ref` is the densest table style, used on the glossary, legal and
  reference pages.
- **The law pages mirror `src/lib/data/legalStatus.json`** (russian-tortoise entries, read
  2 October 2026): 42 with no rule, Colorado banned, New Jersey, West Virginia, New Mexico,
  Delaware and Massachusetts permit, Hawaii, New York City, Vermont and Minnesota conditional,
  and eleven states where local rules may be stricter. If that file changes, recount and
  re-check every row.
- **Every figure comes from the site.** The deep dives in `content/guides/russian-tortoise-*.mdx`
  and the shared tortoise and reptile guides own the numbers; prices come only from the cost
  guide, and the budget page's lines add up to its totals. Where the site disagrees with
  itself, the topic's own guide wins and the split goes on the "Where the sources disagree" page.
- **Abbreviations are spelled out at first use in reading order** (the cover expands UVB, the
  how-to page defines the units, the profile page T5 HO, UVI, IUCN and CITES), and every one
  has a glossary entry. Keep it that way when adding a page.
- **No outside names in care text**: no brands, stores, websites or organizations. Named
  studies with their authors, legal citations and the Association of Reptile and Amphibian
  Veterinarians' find-a-vet directory are the exceptions. Sources live on the Sources page.

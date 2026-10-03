# Axolotl care package source

`../axolotl.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                       # assemble the source
    node ../_render.mjs axolotl "Axolotl" 3.0 --measure    # overflow check
    node ../_render.mjs axolotl "Axolotl" 3.0              # render the PDF

The PDF is `rebuilt/Axolotl_Care_Package_v3.0.pdf`. On Windows, set `CHROME_BIN` to Chrome
first (`CHROME_BIN="C:/Program Files/Google/Chrome/Application/chrome.exe"`). Every page must
report at least 15 px free.

`build.py` reads every `pages_*.html` file in name order, assigns page numbers in document
order from the `<!--PAGE key-->` markers, resolves `{{P:key}}` cross-references and
`<!--FOOT key-->` footers, generates the contents page from its `SECTIONS` map, and embeds the
cover photo. It fails the build on a duplicate page key, unpaired PAGE and FOOT markers, a page
missing from the contents, a contents order that differs from the page order, an unknown
`{{P:key}}`, a leftover placeholder, a literal "page N" written by hand, an em or en dash
(character or entity), an external link (http, www or .com, outside SVG `xmlns` attributes), or
a British spelling on its banned list.

Things worth knowing before editing:

- **Edition 3.0 replaced the hand-edited 2.2 file.** In 2.2 the edits went straight into
  `../axolotl.html` and these fragments went stale; 3.0 rebuilt them from scratch, so the
  fragments are the source again. 2.2 (42 pages) stays in git history. 3.0 is the same t3 look
  (the 2.2 head CSS and accent `#B15A82` / `#8A4363` / `#F2DEE8`, the 2.2 cover and its
  top-left icon untouched) on the outline the recent packages use, with the two-column contents
  page and the `table.ref` style from the bearded dragon 4.0 head.
- **The edition is in two places.** `EDITION` in `build.py` drives every page footer
  ("Axolotl Care Package · Edition 3.0"). The cover chip, the colophon and the version history
  in `pages_07.html` carry it as text. Change all of them together.
- **Every cross-reference is a token.** The build refuses a hand-written "page 12". Keep
  pointers sparse: tool pages (how-to, checklist, emergency card, symptom table, first 30 days,
  routine, outage, sitter sheet) one per row; everywhere else one per destination per page,
  never to the page itself or the next page in the same section, no ping-pong, nothing to the
  glossary. Glossary entries point only into the care half (profile to health) and the budget
  page.
- **The cover photo is `images/axolotl-cover-1.jpg`**, the same file 2.2 carried inline (md5
  c38548239067daec21a16e24bfb4c3f3). `build.py` embeds it as base64 and nothing else, so it is
  never resized or re-encoded.
- **Pages split across seven files**, by section: `pages_01` cover to profile, `pages_02`
  housing, `pages_03` feeding, `pages_04` handling to life stages, `pages_05` the law and
  health, `pages_06` quick reference and owner tools, `pages_07` reference. Tight pages carry
  `class="page snug"`. The water page measures exactly 15 px free, so anything added there
  needs a new page.
- **The law pages mirror `src/lib/data/legalStatus.json`** (axolotl entries, read 1 October
  2026): 38 legal with no permit, 6 banned (California, New Jersey, New Mexico, Wyoming,
  Alabama, the District of Columbia), 4 permit (Maine, Vermont, Massachusetts, West Virginia),
  3 conditional (Hawaii, Rhode Island, Minnesota), Arkansas unclear, and eleven legal states
  with a local override. If that file changes, recount and re-check every row. The site's
  legal guide still disagrees with the JSON on the District of Columbia, New Mexico and Hawaii;
  the package follows the JSON.
- **Every figure comes from the site.** The axolotl deep dives in `content/guides/axolotl-*.mdx`,
  `why-axolotls-need-cold-clean-water.mdx`, the profile article, the encyclopedia entry and the
  shared aquarium and amphibian guides own the numbers; prices come only from the cost guide,
  whose rows add up to $120 to $375 basic and $270 to $775 with a chiller. Where the site
  disagrees with itself, the topic's own guide wins.
- **Abbreviations are spelled out at first use in reading order** (the how-to page defines the
  units), and every one has a glossary entry. Keep it that way when adding a page.
- **No outside names in care text**: no brands, stores, websites or organizations. Named
  studies, legal citations and the Association of Reptile and Amphibian Veterinarians'
  find-a-vet directory are the exceptions. Sources live on the Sources page.

# Budgie care package source

`../budgie.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                              # assemble the source
    node ../_render.mjs budgie "Budgie" 3.0 --measure            # overflow check
    node ../_render.mjs budgie "Budgie" 3.0                      # render the PDF

The PDF is `rebuilt/Budgie_Care_Package_v3.0.pdf`. On Windows, set `CHROME_BIN` to Chrome first
(`CHROME_BIN="C:/Program Files/Google/Chrome/Application/chrome.exe"`). Every page must report at
least 15 px free.

`build.py` reads every `pages_*.html` file in name order, assigns page numbers in document order
from the `<!--PAGE key-->` markers, resolves `{{P:key}}` cross-references and `<!--FOOT key-->`
footers, generates the contents page from its `SECTIONS` map, and embeds the cover photo. It fails
the build on a duplicate page key, unpaired PAGE and FOOT markers, a page missing from the
contents, a contents order that differs from the page order, an unknown `{{P:key}}`, a leftover
placeholder, a literal "page N" written by hand, an em or en dash (character or entity), an
external link (http, www or .com, outside SVG `xmlns` attributes), or a British spelling on its
banned list. "Grey" is allowed only inside "African grey" and "grey parrot", and "Organisation"
only inside the proper name "World Budgerigar Organisation".

Things worth knowing before editing:

- **Edition 3.0 replaced the hand-edited 2.1 file.** 2.1 (40 pages) stays in git history and in
  `rebuilt/Budgie_Care_Package_v2.1.pdf`. 3.0 is the same t3 look (the bearded dragon 4.0 head CSS
  with the budgie accent `#3D63A8` / `#2C4A80` / `#DEE5F4`, and the 2.1 cover layout and photo) on
  the newer outline, with a two-column contents page. The old `pages_1` to `pages_4` fragments,
  which were stale since 2.1, are gone.
- **The edition is in two places.** `EDITION` in `build.py` drives every page footer
  ("Budgie Care Package · Edition 3.0"). The cover chip, the colophon and the version history in
  `pages_08.html` carry it as text. Change all of them together.
- **Every cross-reference is a token.** The build refuses a hand-written "page 12". Keep pointers
  sparse: tool pages (how-to, checklist, emergency card, symptom table, first 30 days, routine,
  sitter sheet) one per row; everywhere else one per destination per page, never to the page
  itself or the next page in the same section, no ping-pong, nothing to the glossary. Glossary
  entries point only into the care half (profile to health) and the budget page.
- **The cover photo is `images/budgie-cover-2.jpg`**, the same file 2.1 carried inline. `build.py`
  embeds it as base64 and nothing else, so it is never resized or re-encoded. The top-left ring is
  the lucide bird, drawn like the bearded dragon cover's corner icon, in the cover's blue.
- **Pages split across eight files** (`pages_01` to `pages_08`), by section. A new file sorts into
  place by name. Tight pages carry `class="page snug"`; `table.ref` in `head.html` is the densest
  table style, used on the glossary, sources, disagreement and symptom pages.
- **There is no law page.** `src/lib/data/legalStatus.json` has no budgie entry and none of the
  site's budgie or bird guides states a federal import or release rule, so the outline's law
  section is left out. If a budgie legal guide or a `legalStatus.json` entry is ever added, add
  the page after Section 05 and renumber the section labels.
- **Every figure comes from the site.** The budgie guides in `content/guides/budgie-*.mdx` and the
  shared bird guides own the numbers; prices come only from the cost guide, and every total equals
  its own rows: every item priced and rounded to the nearest $5, setup $335 to $775, monthly
  $25 to $60 ($20 to $55 before the exam), first year about $620 to $1,500. The budget runs
  over two pages (`budget` and `budget2`).
  Where the site disagrees with itself, the topic's own guide wins. The site was corrected first
  on 2026-10-03; re-check these pages if the guides change.
- **Abbreviations are spelled out at first use in reading order** (UV and DNA on the profile
  page, PTFE on the air page, PBFD and PCR on the quarantine page), and every one has a glossary
  entry. Keep it that way when adding a page.
- **No outside names in care text**: no brands, stores, websites or organizations. Named studies
  (author and year) and the Association of Avian Veterinarians' find-a-vet directory are the
  exceptions. Sources live on the Sources page, one entry per site, and the site's own pages are
  never cited.
- **No medicine doses.** The site's guides carry a few, and the package prints only what a vet may
  do, never an amount.

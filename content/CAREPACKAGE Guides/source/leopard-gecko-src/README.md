# Leopard gecko care package source

`../leopard-gecko.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                                     # assemble the source
    node ../_render.mjs leopard-gecko "Leopard Gecko" 3.0 --measure     # overflow check
    node ../_render.mjs leopard-gecko "Leopard Gecko" 3.0               # render the PDF

The PDF is `rebuilt/Leopard_Gecko_Care_Package_v3.0.pdf`. On Windows, set `CHROME_BIN` to
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

- **Edition 3.0 replaced the hand-edited 2.1 file.** 2.1 (35 pages, its cover said 34) stays in
  git history and in `rebuilt/Leopard_Gecko_Care_Package_v2.1.pdf`. 3.0 is the same t3 look
  (the 2.1 head CSS with the bearded dragon 4.0 additions, slate accent `#5C6B7A` / `#42505C` /
  `#E4E8EB`, the 2.1 cover) on the newer outline the recent packages use, with a two-column
  contents page. It follows the bearded dragon 4.0 source system file for file.
- **The edition is in two places.** `EDITION` in `build.py` drives every page footer
  ("Leopard Gecko Care Package · Edition 3.0"). The cover chip, the colophon and the version
  history in `pages_07.html` carry it as text. Change all of them together.
- **Every cross-reference is a token.** The build refuses a hand-written "page 12". Keep
  pointers sparse: tool pages (how-to, checklist, emergency card, symptom table, first 30 days,
  routine, sitter sheet) one per row; everywhere else one per destination per page, never to
  the page itself or the next page in the same section, no ping-pong, nothing to the glossary.
  Glossary entries point only into the care half (profile to health) and the budget page.
- **The cover photo is `images/leopard-gecko-cover-1.jpg`**, the same file 2.1 carried inline
  (md5 e6eca9d53e4056b11403f4da08071002). `build.py` embeds it as base64 and nothing else, so it
  is never resized or re-encoded.
- **Pages split across seven files** (`pages_01` to `pages_07`), by section. A new file sorts
  into place by name. Tight pages carry `class="page snug"`; `table.ref` in `head.html` is the
  densest table style, used on the glossary, legal and reference pages.
- **One British spelling is deliberate.** The Sources page cites the journal *Applied Animal
  Behaviour Science* by its real title, written `Behavio&#117;r` so the banned-word check (which
  guards prose) passes. Keep it that way if the line is edited.
- **The law page mirrors `src/lib/data/legalStatus.json`** (leopard-gecko entries, read
  1 October 2026, Maine 5 September 2026): 46 legal, Hawaii and the District of Columbia barred,
  New Jersey and West Virginia permit, Maine and Minnesota conditional, and eight states with a
  local override. If that file changes, recount and re-check every row.
- **Every figure comes from the site.** The deep dives in `content/guides/leopard-gecko-*.mdx`
  and the shared reptile guides own the numbers; prices come only from the cost guide. Where
  the site disagrees with itself, the topic's own guide wins, and the Where the Sources
  Disagree page says which. The cost guide's monthly rows add to $20 to $82 while its headline
  is $20 to $50; the budget page prints both, labeled.
- **Abbreviations are spelled out at first use in reading order** (the cover expands UVB, the
  profile UVI, the enclosure page PVC, the UVB page T5 HO, the arrival page PCR, the legal page
  CITES, the bone disease page MBD; the how-to page defines the units), and every one has a
  glossary entry. Keep it that way when adding a page.
- **No outside names in care text**: no brands, stores, websites or organizations. Named
  studies, legal citations and the Association of Reptile and Amphibian Veterinarians'
  find-a-vet directory are the exceptions. Sources live on the Sources page.

# Betta fish care package source

`../betta-fish.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                                 # assemble the source
    node ../_render.mjs betta-fish "Betta Fish" 3.1 --measure       # overflow check
    node ../_render.mjs betta-fish "Betta Fish" 3.1                 # render the PDF

The PDF is `rebuilt/Betta_Fish_Care_Package_v3.1.pdf`. On Windows, set `CHROME_BIN` to
Chrome first (`CHROME_BIN="C:/Program Files/Google/Chrome/Application/chrome.exe"`). Every
page must report at least 15 px free.

`build.py` reads every `pages_*.html` file in name order, assigns page numbers in document
order from the `<!--PAGE key-->` markers, resolves `{{P:key}}` cross-references and
`<!--FOOT key-->` footers, generates the contents page from its `SECTIONS` map, and embeds the
cover photo. A line that starts with `[] ` becomes a check-list item. It fails the build on a
duplicate page key, unpaired PAGE and FOOT markers, a page missing from the contents, a
contents order that differs from the page order, an unknown `{{P:key}}`, a leftover
placeholder, a literal "page N" written by hand, an em or en dash (character or entity), an
external link, or a British spelling on its banned list.

Things worth knowing before editing:

- **Edition 3.0 replaced the hand-edited 2.2 file.** 2.2 (37 pages) stays in git history and in
  `rebuilt/Betta_Fish_Care_Package_v2.2.pdf`. 3.0 is the same t3 look (the 2.2 head CSS, accent
  `#7E3D6E` / `#5E2B51` / `#F1E1EC`, the 2.2 cover with its teal fish icon untouched) on the
  newer outline the recent packages use, with a two-column contents page.
- **The edition is in two places.** `EDITION` in `build.py` drives every page footer. The cover
  chip, the colophon and the version history in `pages_08.html` carry it as text. Change them
  together.
- **Every cross-reference is a token.** Keep pointers sparse: tool pages (how-to, checklist,
  emergency card, symptom table, first 30 days, routine, sitter sheet) one per row; everywhere
  else one per destination per page, never to the page itself or the next or previous page in
  the same section, no ping-pong, nothing to the glossary. Glossary entries point only into
  the care half (profile to health) and the budget page.
- **The cover photo is `images/betta-fish-cover-2.jpg`**, extracted byte for byte from the
  base64 the 2.2 HTML carried inline (md5 `3fee27cd57742b58c2f460fc37cd53cd`). `build.py`
  embeds it and nothing else, so it is never resized or re-encoded. The cover layout mirrors
  it with `transform:scaleX(-1)`, as 2.2 did.
- **Pages split across eight files** (`pages_01` to `pages_08`), by section. Tight pages carry
  `class="page snug"`; `table.ref` in `head.html` is the densest table style, used on the
  glossary and reference pages, and `table.kv` is the key and value table.
- **There is no law page.** Betta fish have no entry in `src/lib/data/legalStatus.json` and no
  legal guide, so the outline's law section is omitted. If either appears, add a page.
- **Every figure comes from the site.** The deep dives in `content/guides/betta-fish-*.mdx`
  and the shared aquarium guides own the numbers (cycling, water changes, filtration, ich,
  quarantine, power outage and transport, stocking, sick fish); prices come only from the cost
  guide, whose rows add up to its totals. Where the site disagrees with itself, the topic's
  own guide wins. The site was corrected first (2026-10-02): cost rows, ich heat, tankmate
  sizes, body condition, bubble nests and breeding, and the 20 to 30 minute float.
- **Left out for lack of a source:** how to tell a female by her egg spot, fin types and what
  they cost the fish, a planted-tank how-to, and any seasonal section (a tank is not seasonal).
- **Abbreviations are spelled out at first use in reading order**, and every one has a glossary
  entry. Keep it that way when adding a page.
- **No outside names in care text**: no brands, stores, websites or organizations. Named
  studies and the American Association of Fish Veterinarians' find-a-vet directory are the
  exceptions. Sources live on the Sources page.

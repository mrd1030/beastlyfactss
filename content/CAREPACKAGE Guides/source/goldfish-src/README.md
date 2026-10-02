# Goldfish care package source

`../goldfish.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                                  # assemble the source
    node ../_render.mjs goldfish "Goldfish" 3.0 --measure            # overflow check
    node ../_render.mjs goldfish "Goldfish" 3.0                      # render the PDF

On Windows, set `CHROME_BIN` to Chrome first
(`CHROME_BIN="C:/Program Files/Google/Chrome/Application/chrome.exe"`). Every page must report at
least 15 px free.

`build.py` reads every `pages_*.html` file in name order, assigns page numbers in document order
from the `<!--PAGE key-->` markers, resolves `{{P:key}}` cross-references and `<!--FOOT key-->`
footers, generates the contents page from its `SECTIONS` map, and embeds the cover photo. It fails
the build on a duplicate page key, unpaired PAGE and FOOT markers, a page missing from the
contents, a contents order that differs from the page order, an unknown `{{P:key}}`, a leftover
placeholder, a literal "page N" written by hand, an em or en dash (character or entity), an
external link (http, www or .com, outside SVG `xmlns` attributes), or a British spelling on its
banned list.

Things worth knowing before editing:

- **Edition 3.0 replaced the hand-edited 2.1 file.** The old `pages_1` to `pages_3` fragments were
  deleted; 2.1 (40 pages) stays in git history. 3.0 is the same t3 look (accent `#1E7FA0` /
  `#155E76` / `#D9EDF3`, the 2.1 cover with its top-left icon untouched) on the outline the other
  rebuilt packages use, with the Bearded Dragon 4.0 head styles and a two-column contents page.
- **The edition is in two places.** `EDITION` in `build.py` drives every page footer
  ("Goldfish Care Package, Edition 3.0"). The cover chip, the colophon and the version history in
  `pages_07.html` carry it as text. Change all of them together.
- **Every cross-reference is a token.** Keep pointers sparse: tool pages (how-to, checklist,
  emergency card, symptom table, first 30 days, routine, sitter sheet) one per row; everywhere else
  one per destination per page, never to the page itself or the next page in the same section, no
  ping-pong, nothing to the glossary. Glossary entries point only into the care half (profile to
  health) and the budget page.
- **The cover photo is `images/goldfish-cover-4.jpg`**, the same file 2.1 carried inline. `build.py`
  embeds it as base64 and nothing else, so it is never resized or re-encoded.
- **Pages split across seven files** (`pages_01` to `pages_07`), by section. A new file sorts into
  place by name. Tight pages carry `class="page snug"`; `table.ref` in `head.html` is the densest
  table style, used on the glossary, legal and reference pages.
- **There is no state legal table.** `src/lib/data/legalStatus.json` has no goldfish entry and the
  site has no goldfish legal guide. The law page (`legal`) therefore covers only what the site
  sources: Minnesota's regulated invasive species listing and New York's 6 NYCRR Part 575, both of
  which allow keeping and forbid release. If a goldfish legal guide or map entry is ever added,
  rebuild that page from it and count the states yourself.
- **Every figure comes from the site.** The deep dives in `content/guides/goldfish-*.mdx` and the
  shared aquarium guides (filtration, cycling, water changes, pH GH and KH, ich, quarantine,
  stocking, power outage, cooling, spotting a sick fish) own the numbers; prices come only from the
  goldfish cost guide, and the equipment rows add up to its total. Where the site disagrees with
  itself, the topic's own guide wins.
- **Left out because the site has no source:** a lighting schedule, a growth-by-age table, body
  condition scoring and weighing, and egg binding. Add them to the site with a source first.
- **Abbreviations are spelled out at first use in reading order** (the how-to page defines the
  units), and every one has a glossary entry. Keep it that way when adding a page.
- **No outside names in care text**: no brands, stores, websites or organizations. Legal citations,
  the American Association of Fish Veterinarians' find-a-vet directory, and the Minnesota and New
  York rules are the exceptions. Sources live on the Sources page.

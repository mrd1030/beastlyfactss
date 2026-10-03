# Rabbit care package source

`../rabbit.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                                # assemble the source
    node ../_render.mjs rabbit "Rabbit" 3.0 --measure              # overflow check
    node ../_render.mjs rabbit "Rabbit" 3.0                        # render the PDF

The PDF is `rebuilt/Rabbit_Care_Package_v3.0.pdf`. On Windows, set `CHROME_BIN` to Chrome
first (`CHROME_BIN="C:/Program Files/Google/Chrome/Application/chrome.exe"`). Every page
must report at least 15 px free.

`build.py` reads every `pages_*.html` file in name order, assigns page numbers in document
order from the `<!--PAGE key-->` markers, resolves `{{P:key}}` cross-references and
`<!--FOOT key-->` footers, generates the contents page from its `SECTIONS` map, and embeds the
cover photo. It fails the build on a duplicate page key, unpaired PAGE and FOOT markers, a page
missing from the contents, a contents order that differs from the page order, an unknown
`{{P:key}}`, a leftover placeholder, a literal "page N" written by hand, an em or en dash
(character or entity), an external link (http, www or .com, outside SVG `xmlns` attributes), or
a British spelling on its banned list. The Sources page is exempt from the spelling list,
because it quotes published titles.

Things worth knowing before editing:

- **Edition 3.0 replaced the hand-edited 2.1 file.** 2.1 (40 pages) stays in git history and in
  `rebuilt/Rabbit_Care_Package_v2.1.pdf`. 3.0 keeps the same t3 look (the bearded dragon 4.0
  head CSS, with the rabbit's brown accent `#8A5A3B` / `#6A422A` / `#F0E4DA`) and the 2.1 cover
  on the newer outline the recent packages use. There was no `rabbit-src` before 3.0.
- **The edition is in two places.** `EDITION` in `build.py` drives every page footer
  ("Rabbit Care Package · Edition 3.0"). The cover chip and the version history in
  `pages_07.html` carry it as text. Change them together.
- **The cover photo is `images/rabbit-cover-1.jpg`**, extracted unchanged from the 2.1 HTML
  (md5 `745f7e38dbce8ccfd5d2240f64076eb6`). `build.py` embeds it as base64 and nothing else.
  The corner icon is the lucide `rabbit` line icon in the cover's own `#B9C48C`, drawn like the
  bearded dragon cover's: a ring (r 12.3, stroke 1.05) in a 26 viewBox with the icon nested at
  4.2 / 4.2, 17.6 px, stroke 1.85, round caps and joins.
- **Every cross-reference is a token.** The build refuses a hand-written "page 12". Keep
  pointers sparse: tool pages (how-to, checklist, emergency card, symptom table, first 30 days,
  routine, outage, travel, sitter, logs, budget) one per row; everywhere else one per
  destination per page, never to the page itself or the next page in the same section, no
  ping-pong, nothing to the glossary. Glossary entries point only into the care half (profile
  to health) and the budget page. A pointer check (not in the build) caught two ping-pongs
  while writing; rerun one after any edit that adds a pointer.
- **Every figure comes from the site.** The deep dives in `content/guides/rabbit-*.mdx` and the
  shared small-mammal guides (temperature and heat stress, grooming, nails and molting, vet
  visits and travel, enterotoxemia) own the numbers. Prices come only from the cost guide,
  whose rows and totals add up: equipment $125 to $197, food and litter $62 to $135 a month, a
  year after the first $924 to $1,895, the first year $1,219 to $2,697 without the adoption
  fee. A hay feeder, cord tubing, flooring, a hide, a dig box, chew material and a scale are not priced there, so they are
  listed unpriced.
- **The law page mirrors `src/lib/data/legalStatus.json`** (rabbit entries, read 1 October
  2026): 50 of 52 jurisdictions legal, Minnesota and Nevada unclear, and seven legal states plus
  Nevada letting cities or counties be stricter. If that file changes, recount.
- **Abbreviations are spelled out at first use in reading order** (the cover expands GI, the
  how-to page defines the units, the company page expands RHDV2, the arrival page expands
  E. cuniculi), and every one has a glossary entry, as does every unit.
- **No outside names in care text**: no brands, stores, websites or organizations. Named
  studies and legal citations are the exceptions. Sources live on the Sources page, which does
  not cite the site's own pages.
- **Left out for lack of a site source** (see the Phase A report): hay buying and storing,
  litter box cleaning products, a breed-by-breed size list, and leaving a rabbit for a single
  night.

# Crested gecko care package source

`../crested-gecko.html` is generated. Edit the fragments here, never that file, then:

    python build.py                                                    # assemble the source
    node ../_render.mjs crested-gecko "Crested Gecko" 3.0 --measure    # overflow check
    node ../_render.mjs crested-gecko "Crested Gecko" 3.0              # render the PDF

The PDF is `rebuilt/Crested_Gecko_Care_Package_v3.0.pdf`. On Windows, set `CHROME_BIN` to
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

- **Edition 3.0 replaced the hand-edited 2.1 file.** 2.1 (35 pages, cover said 34) stays in git
  history and in `rebuilt/Crested_Gecko_Care_Package_v2.1.pdf`. 3.0 is the same t3 look (the
  2.1 head CSS, accent `#2F7A63` / `#205848` / `#DCEEE7`, the 2.1 cover) on the newer outline
  the bearded dragon 4.0 rebuild uses, with a two-column contents page and the `table.ref`
  reference style added to `head.html`.
- **The edition is in two places.** `EDITION` in `build.py` drives every page footer
  ("Crested Gecko Care Package · Edition 3.0"). The cover chip, the colophon and the version
  history in `pages_07.html` carry it as text. Change all of them together.
- **Every cross-reference is a token.** The build refuses a hand-written "page 12". Keep
  pointers sparse: tool pages (how-to, checklist, emergency card, symptom table, first 30 days,
  routine, sitter sheet) one per row; everywhere else one per destination per page, never to
  the page itself or the next page in the same section, no ping-pong, nothing to the glossary.
  Glossary entries point only into the care half (profile to health) and the budget page.
- **The cover photo is `images/crested-gecko-cover-2.jpg`**, a crested gecko facing left on a
  mossy branch, the same file 2.1 carried inline (md5 713cfbd37439b065abcc47f87da83faa).
  `build.py` embeds it as base64 and nothing else, so it is never resized or re-encoded.
- **Pages split across seven files** (`pages_01` to `pages_07`), by section. A new file sorts
  into place by name. Tight pages carry `class="page snug"`.
- **The law page mirrors `src/lib/data/legalStatus.json`** (crested-gecko entries, read
  2 October 2026, verified on 1 October 2026, Maine on 5 September 2026): 45 legal, Hawaii and
  the District of Columbia barred, Massachusetts, New Jersey and West Virginia permit, Maine and
  Minnesota conditional, and eight states with a local override. The species is not listed
  under CITES; the IUCN Vulnerable rating is what drives Massachusetts and sits one rung under
  Maine's cut. If that file changes, recount and re-check every row.
- **Every figure comes from the site.** The crested gecko deep dives in
  `content/guides/crested-gecko-*.mdx` and the shared reptile guides (quarantine, hygiene,
  heating and thermostats, UVB lighting, emergency plan, stool and urates, gut-loading,
  shedding) own the numbers; prices come only from the cost guide. Where the site disagrees with
  itself, the topic's own guide wins, and the Where the Sources Disagree page says so.
- **Not in this edition for lack of a site source:** a separate vitamin D3 or multivitamin
  schedule, and cooling an enclosure with a frozen bottle or by misting (no veterinary or
  specialist source found on 2 October 2026). Add them only once a site guide carries them.
  Adult weight, maturity, shed frequency, firing up, the worm feeders, overweight signs,
  overheating first aid and tail-stump care went onto the site on 2 October 2026 and are in.
- **Abbreviations are spelled out at first use in reading order** (the cover expands UVB, the
  how-to page defines the units), and every one has a glossary entry. Keep it that way when
  adding a page.
- **No outside names in care text**: no brands, stores, websites or organizations. Legal
  citations and the Association of Reptile and Amphibian Veterinarians' find-a-vet directory
  are the exceptions. Sources live on the Sources page.

# Care Package Fix Plan

Open work for the 20 printable care packages only. Site fixes stay in FIX_PLAN.md. This file holds open work only: when an item is done, move it (with a few words on how it was resolved) to `archive/docs-completed/FIX_PACKAGES_COMPLETED_<YYYY-MM-DD>.md`, newest batch first, and delete it here.

Set up 2026-10-04 from the FIX_PLAN reconcile, the 2026-10-03 pricing and gear pass, and a scan of all 20 glossaries.

**Keep this file organized by animal (owner, 2026-10-04).** It will build up between rounds. Every new item goes under its animal's heading in section 3, tagged by kind (Book, Glossary, Gear, Store) with the file and line where the edit goes. Only rules and items that truly cover every package go in sections 2 and 4. When an animal has nothing open, its heading says "Nothing open."

## 1. Where each kind of edit goes

| What | File | Notes |
|---|---|---|
| Book text | `content/CAREPACKAGE Guides/source/<id>-src/pages_NN.html` | Then `python build.py` in `<id>-src`, which writes `<id>.html`. Check the build reproduces the tracked `<id>.html` before editing. |
| Cockatoo book text | `content/CAREPACKAGE Guides/source/cockatoo.html` | Edit directly. Its fragments are stale: never run the cockatoo `build.py`. |
| Edition number | `EDITION` in `<id>-src/build.py` (cockatoo: the edition strings in `cockatoo.html`) | Every changed book gets a minor bump (all 20 are live). |
| Version history | the last `pages_NN.html` of the book (the "Version history & about" page) | One short line: "N.N, Mon YYYY. What changed." |
| Render and measure | from `content/CAREPACKAGE Guides/source`: `CHROME_BIN="C:/Program Files/Google/Chrome/Application/chrome.exe" node _render.mjs <id> "<Name>" <edition> --measure`, then without `--measure` | Every page at least 15px free; add a page rather than cut. Render to the tracked PDF name in `rebuilt/` (White's tree frog renders as "Whites Tree Frog"). |
| Site twin of a price or gear row | `content/guides/<id>-cost-guide.mdx`, hub in `src/lib/data/guides/<group>.js`, catalog in `src/lib/data/affiliateProducts.js` | The site is the source of truth; the book budget page matches it. Pricing rules: outward $5 rounding, totals equal the rounded rows. |
| Store page | `src/lib/data/carePackages.js` (edition, page count, history) and `src/lib/data/carePackageCopy.js` (page count in the hero lines, any claim that changed) | After the books are final. |
| Upload | `node --use-system-ca scripts/upload-care-package.mjs <id> "content/CAREPACKAGE Guides/rebuilt/<File>_v<N>.pdf"` | What is live in the bucket, and the full-named file to archive for each, is in PACKAGE_BUCKET.md. Keep `--use-system-ca`. |
| Review | Fable, changed lines only: diff each book against its live edition, filter out page-number shifts, one reviewer for the whole round | Keeps the cost low. |

Live editions (2026-10-04): bearded dragon 4.1; leopard gecko, crested gecko, ball python, Russian tortoise, axolotl, betta fish, goldfish 3.1; rabbit, guinea pig, hamster, budgie, lovebird, cockatiel, tarantula 3.0; gargoyle gecko, African fat-tailed gecko, hognose snake, White's tree frog 1.1; cockatoo 1.4.

## 2. Rules for this round

**Main glossary (owner, 2026-10-04, permanent).** No name of an organization, company, state, place, agency or publication goes in the main glossary. It holds only terms about the animal, its care, its equipment or an illness: the words a reader hears about their pet or looks up, like "clutch". A professional title a reader looks for when getting help for the pet counts as a care term (the cockatoo keeps CPBC, certified parrot behavior consultant). An abbreviation that appears only on the Sources page stays there, spelled out in its own entry. An organization or agency abbreviation in the body is spelled out at its first mention in the text, not glossaried.

**Law page mini glossary.** Legal terms are the odd subject out: they get a small glossary of their own on the book's law page ("Legal terms on this page"), not in the main glossary. That covers legal statuses and law names (Conditional, Ordinance, Native species, Nongame species, Species of special concern, Injurious wildlife, Lacey Act, CITES, CFR and the codes it cites, NYCRR). Agencies (FDA, USDA APHIS) go in neither: spell them out in the text. Each mini glossary lists only terms that page uses; if the law page has no room, add a page rather than cut.

**Glossary edits.** Delete the row, check the term is spelled out where it is used (spell it out there if not), then rebuild so the glossary pages and every page pointer stay right. Line numbers are as of 2026-10-04 and drift as books change.

**Gear and pricing items.** Check each against main first. Where a product is found, it goes in four places: catalog entry, cost guide row, hub buy list item, book budget page. Where nothing fits, it stays listed as "no fitting product" under its animal, with the detail in COST_CHECK.md.

## 3. By animal

### Bearded dragon (4.1, `bearded-dragon-src`)
- [ ] Glossary: VCA out (`pages_07.html:65`).

### Leopard gecko (3.1, `leopard-gecko-src`)
- [ ] Glossary: VCA out (`pages_07.html:60`); CITES (`:12`) moves to the law page mini glossary.
- Note: ReptiFiles' heights for the 2.5% ShadeDweller Max sit closer than Arcadia's chart implies; Arcadia's general guide gives a UVI of 2 to 3 where the book follows ReptiFiles' lower figure. No change planned.

### Crested gecko (3.1, `crested-gecko-src`)
- [ ] Glossary: IUCN (`pages_07.html:40`) and VCA (`:58`) out; CITES (`:12`) moves to the law page mini glossary.
- [ ] Gear: the fogger is left unlinked as the "or" alternative to the spray bottle (cost guide setup row).
- [ ] Book: `pages_06.html:120` "If the room holds the range, skip the bulb and thermostat": add that the thermometer stays either way, as a safety check (owner, 2026-10-05; PetMD and Chicago Exotics both keep thermometers in with or without heat). The equipment page (`pages_02.html:92`) and daily check (`pages_06.html:342`) already have it, so this is one clause on the skip line.
- [ ] Book: `pages_02.html:44` pair space "double the space of an 18×18×36 in" enclosure; the setup guide's single-adult minimum is 18x18x24 (the cost guide :85 says the same 18x18x36, so settle both). (Sweep 2026-10-05.)

### Gargoyle gecko (1.1, `gargoyle-gecko-src`)
- [ ] Glossary: ARAV (`pages_5.html:8`) and IUCN (`:42`) out.
- [ ] Gear: gut-load food for the feeders and substrate changes have no price row (cost guide, book budget page).

### African fat-tailed gecko (1.1, `african-fat-tail-src`)
- [ ] Gear: no cork flat in the catalog (rounds only); the laying box has no product; electricity unpriced.
- Note: the same ShadeDweller Max heights note as the leopard gecko.
- (Glossary meets the rule.)

### Ball python (3.1, `ball-python-src`)
- [ ] Glossary: CBS, a television network (`pages_07.html:10`), PLOS, a journal (`:48`) and VCA (`:65`) out; CITES (`:12`) moves to the law page mini glossary.
- [ ] Gear: the linked hide (Exo Terra cave XL, 10x10x4 in) may be tight for a large female.

### Hognose snake (1.1, `hognose-snake-src`)
- [ ] Glossary: Conditional (`pages_07.html:21`), Native species (`:63`), Nongame species (`:64`), Ordinance (`:74`) and Species of special concern (`:89`) move to the law page mini glossary.
- [ ] Gear: no snake hook in the catalog.

### Russian tortoise (3.1, `russian-tortoise-src`)
- [ ] Glossary: FDA (`pages_07.html:18`), IUCN (`:23`) and VCA (`:55`) out; 21 CFR 1240.62 (`:7`), CITES (`:13`) and CFR and CMR (`:15`) move to the law page mini glossary.
- [ ] Gear: no herbivore multivitamin without added phosphorus; no hide sized for an adult; the cuttlebone link was removed (a bird product).

### Axolotl (3.1, `axolotl-src`)
- [ ] Glossary: IUCN (`pages_07.html:25`) and VCA (`:59`) out; Injurious wildlife (`:24`) and Lacey Act (`:27`) move to the law page mini glossary.
- [ ] Gear: sand unlinked (grain size specs conflict); no air pump for the sponge filter.

### White's tree frog (1.1, `whites-tree-frog-src`; renders as "Whites Tree Frog")
- [ ] Glossary: IUCN out (`pages_6.html:31`).
- [ ] Gear: Repashy Calcium Plus stands in for "calcium with D3 and a multivitamin" (the owner's ReptiVite is labeled for reptiles only); an under-tank heat mat kit is linked where the book asks for a side-mounted mat; substrate changes and electricity unpriced.

### Betta fish (3.1, `betta-fish-src`)
- [ ] Glossary: IUCN (`pages_08.html:45`) and VCA (`:78`) out.

### Goldfish (3.1, `goldfish-src`)
- [ ] Glossary: NYCRR (`pages_07.html:45`) moves to the law page mini glossary.
- [ ] Gear: no product for the two buckets.

### Rabbit (3.0, `rabbit-src`)
- [ ] Glossary: APOP (`pages_07.html:7`), IUCN (`:45`), PDSA (`:56`), RSPCA (`:60`) and VCA (`:67`) out.
- [ ] Gear: no washable flooring, measuring cup or brush (the linked Hair Buster is a comb); hide size unconfirmed.

### Guinea pig (3.0, `guinea-pig-src`)
- [ ] Book, Sources page: the VCA entry says "a United States veterinary hospital chain" but never what the letters stand for. Spell it out: Veterinary Centers of America.
- [ ] Gear: only a 10 lb pellet bag in the catalog, where the book's 90-day rule needs 5 lb; the C&C cage floor area and the second hide are unconfirmed.
- [ ] Book: "a wild guinea pig can spend up to 80% of the day foraging" at `pages_01.html:147`, `pages_04.html:119` and the glossary `pages_07.html:25`; there is no wild Cavia porcellus (legal guide :70). Should be wild cavies, once the source is checked. The site's enrichment guide carries the same claim. (Sweep 2026-10-05.)
- (Glossary meets the rule; RSPCA is spelled out on the Sources page.)

### Hamster (3.0, `hamster-src`)
- [ ] Glossary: IUCN (`pages_07.html:34`), PDSA (`:43`), RSPCA (`:46`) and VCA (`:55`) out.
- [ ] Gear: no valveless water bottle; the carrier is chewable EVA foam; the timothy hay bag (90 oz) is far too large.

### Budgie (3.0, `budgie-src`)
- [ ] Gear: no seed mix product; the UV lamp replacement (every 10 to 12 months) has no yearly row.
- No fitting product: plain white unprinted tray paper with a non-Amazon price.
- (Glossary meets the rule; VCA and NASPHV are spelled out on the Sources page.)

### Lovebird (3.0, `lovebird-src`)
- [ ] Glossary: IUCN out (`pages_07.html:27`).
- [ ] Gear: the linked dishes may not be the exterior-mount kind the book asks for; the UV lamp replacement (every 6 months) has no price.
- No fitting product: perches stated at 3/8 to 1/2 in; plain white tray paper.

### Cockatiel (3.0, `cockatiel-src`)
- [ ] Gear: no seed product; avian vet visits unpriced.
- No fitting product: perches covering 5/8 to 1.5 in; plain white tray paper.
- (Glossary meets the rule.)

### Cockatoo (1.4, `cockatoo.html` edited directly; never run its build.py)
- [ ] Glossary: CITES (`cockatoo.html:2078`) moves to the law page mini glossary; out: CDC (`:2073`), CPSC (`:2082`), et al. (`:2096`), HOA (`:2103`), IUCN (`:2105`), MSD (`:2109`), NASPHV (`:2110`), NHLBI (`:2111`), UC Davis (`:2134`), VCA (`:2138`). CPBC (`:2081`) stays.
- [ ] Gear: washable mat and sleep cage unpriced; the gram scale's perch tops out at 3/4 in.
- [ ] Book: sexual maturity "3 to 4 years in medium species, 5 to 6 in large ones" (`cockatoo.html:320`, `:885`, Sources note `:2153`) vs the site handling guide :42 and :66 "roughly 5 to 7 years old". Check the source and settle both. (Sweep 2026-10-05; the sweep's other cockatoo items came from the stale fragments and are void.)
- No fitting product: a 3/4 in bar cage at least 36x24x48 in for Goffin's and galahs; a cockatoo-sized travel carrier inside the $80 to $200 row; plain white tray paper; stainless cage locks or snaps (unsure: coating status unclear).

### Tarantula (3.0, `tarantula-src`)
- [ ] Glossary: USDA APHIS (`pages_07.html:46`) and USPS (`:47`) out; CITES (`:13`) moves to the law page mini glossary.
- [ ] Gear: no side-mounted heat source the book allows; the pink toe enclosure is not confirmed.
- No fitting product: an enclosure about 20x10 in with a solid acrylic lid.
- [ ] Book: uneaten prey. `pages_02.html:203` table says "Within 24 hours" vs `pages_02.html:91` "Never leave uneaten prey in overnight" (the site setup guide has the same pair at :98 and :110; the feeding guide :63 says 24 hours). Settle on one rule for book and site. (Sweep 2026-10-05.)

## 4. Across all packages

- Replacement UVB tubes in the catalog: deferred by the owner, kept as an option for later (nine UVB species; prices in COST_CHECK.md).

## 5. Decisions made

- 2026-10-04: legal terms get their own small glossary on each book's law page.
- 2026-10-04: CPBC stays in the cockatoo glossary as a professional title, not an organization.

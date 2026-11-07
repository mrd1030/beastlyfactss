# Care Package Fix Plan

Open work for the 20 printable care packages only. Site fixes stay in FIX_PLAN.md. This file holds open work only: when an item is done, move it (with a few words on how it was resolved) to `archive/docs-completed/FIX_PACKAGES_COMPLETED_<YYYY-MM-DD>.md`, newest batch first, and delete it here.

Set up 2026-10-04 from the FIX_PLAN reconcile, the 2026-10-03 pricing and gear pass, and a scan of all 20 glossaries.

Checked against the book sources on 2026-10-15: every item below is still open. Line numbers are as of 2026-10-04 and have drifted; search for the quoted text. The goldfish budget page already matches the site (3.1, $310 to $615); COST_CHECK.md's "needs fix" on it is stale.

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
- [ ] Book: feeder table, mealworm row (`pages_03.html:62`, `bearded-dragon.html:724`) reads "Hard shell and fatty. Adults only, a few at a time, never for juveniles." The site's safe foods and feeding guides follow NC State since 2026-11-03 (occasional super/mealworm from 1 to 4 months on): "Hard exoskeleton that can wear teeth. From about a month old, a few at a time, never daily."
- [ ] Book: feeder table, superworm row (`pages_03.html:63`, `bearded-dragon.html:725`) reads "Fatty and they bite. Adults only, tong-fed, never left loose in the enclosure." Replacement: "High in fat, and they bite. From about a month old, never daily, sized to the eye-width rule and tong-fed, never left loose in the enclosure."
- [ ] Book: fruit page subtitle (`pages_03.html:136`, `bearded-dragon.html:798`) reads "Fruit is a treat: about 5 to 10 percent of the plant portion, once or twice a week at most." The site now caps fruit by share of the whole diet (NC State and LafeberVet 5 percent at most, VCA 10 to 20 percent of the plants, which is 5 to 10 percent of the diet): "Fruit is a treat: 5 percent of the diet or less, never past 10 percent, once or twice a week at most."
- [ ] Book: brumation vet list (`pages_04.html:239`, `bearded-dragon.html:1156`) reads "It stretches past about three and a half months &middot; weight drops more than about 10 percent &middot; appetite hasn't returned within 2 to 3 weeks of waking &middot; ...". The site's brumation and feeding guides use Whyte Ridge Veterinary Hospital's thresholds since 2026-11-03: "It runs longer than 4 months &middot; weight drops 10 percent or more &middot; appetite doesn't return once the dragon is up and moving around consistently &middot; ..." (the rest of the line stays). The expectation line above it (`pages_04.html:235`, "Appetite usually returns within 2 to 3 weeks") stays: the site keeps 2 to 3 weeks as the expectation and uses Whyte Ridge's wording only for the vet trigger. The refusal thresholds (`pages_03.html:42`, `pages_05.html:10`, `:37`, `pages_06.html:64`) already read 1 to 2 weeks for an adult outside brumation, which the site's feeding guide now matches; no change there.
- [ ] Book: monthly figure (`pages_01.html:125`) reads "$75 to $145 for feeders, greens, supplements, electricity, bulbs and the yearly vet visit, averaged." The site cost guide moved to $70 to $140 on 2026-11-06 (supplement top-ups cut from about $10 to about $5 a month, owner). Match on the next edit, and check the budget page for the same figure and the $900 to $1,740 year (now $840 to $1,680).
- [ ] Book: safe foods table, "Pinky mice" row (`pages_03.html:153`, tier Rare, "Not a routine food. Occasionally for a larger adult fe..."). Owner (2026-11-06): no mice for bearded dragons; the site's feeding and safe foods guides dropped them. Remove the row on the next edit; the books do not mention mice at all (owner, 2026-11-06).
- [ ] Book: budget page, "Supplement top-ups about $10" (`pages_06.html:139`) and "Monthly ongoing $75 to $145" (`pages_06.html:143`). Site (2026-11-06): about $5, so the month is $70 to $140 and the year $840 to $1,680. Same edit as the `pages_01.html:125` item above.
- [ ] Book: enclosure rule of thumb (`pages_02.html:6`, and the specs card `pages_02.html:35`) reads "at least three times your dragon's total body length" / "3&times; the dragon's body length". Site (owner, 2026-11-06): measured from nose to vent, tail left out, so the rule agrees with the 4x2x2 minimum.
- [ ] Book: feeding schedule table, hatchling row (`pages_03.html:10`) reads "mostly flightless fruit flies and gut-loaded pinhead crickets". Site (owner, 2026-11-06): "flightless fruit flies and gut-loaded pinhead crickets", no "mostly".
- [ ] Book: feeding schedule table, juvenile row (`pages_03.html:12`) reads "Insects once daily", and the sources table (`pages_07.html:118`) settles juvenile feedings at "Once daily". Site (2026-11-06): insects once or twice daily, plus a salad every day (every other day at the least).
- [ ] Book: ADV entry (`pages_05.html:107`) reads "It causes fatal liver and gut disease." Site (2026-11-06): "typically" fatal (VCA, Diseases). The book already notes adults that show nothing while shedding the virus.
- [ ] Book: arm-wave, body language table (`pages_04.html:49`) and glossary (`pages_07.html:8`) read "most likely submission to a more dominant animal". Site (2026-11-06, Australian Museum): a male waves to show submission to a dominant male, which usually defuses the standoff; a female waves to show she is receptive to a male, often with a slow head bob.
- [ ] Book: free-roam (`pages_04.html:102`) reads "10 to 15 minutes to start, building toward 15 to 30 for some adults". Site (owner, 2026-11-06): session length is set by heat, around 10 to 15 minutes in an ordinary room and far longer under a heat lamp the dragon can sit under; window glass blocks UVB; a dragon wandering off usually wants to poop or sleep, the cue to take it back.
- [ ] Book: species page (`pages_01.html:149`) calls the beard "the expandable, spiny throat pouch" that "darkens toward black when the dragon is threatened or excited". Site (2026-11-06, Australian Museum): the beard is the skin under the lower jaw, puffed out when alarmed, and males turn it black to show dominance.
- Note, not yet a change: the book (`pages_02.html:144`) and the site's UVB guide put bearded dragons in Ferguson Zone 3. Baines et al. 2016 lists Pogona vitticeps as zone 3 to 4. Owner decides whether to change either.

### Leopard gecko (3.1, `leopard-gecko-src`)
- [ ] Glossary: VCA out (`pages_07.html:60`); CITES (`:12`) moves to the law page mini glossary.
- Note: ReptiFiles' heights for the 2.5% ShadeDweller Max sit closer than Arcadia's chart implies; Arcadia's general guide gives a UVI of 2 to 3 where the book follows ReptiFiles' lower figure. No change planned.

- [ ] Book: feeder table, "Pinky (a newborn mouse)" row (`pages_03.html:130`, Occasional, "Adults only; one to two days old; once a week at most.") and the sources table pinky row (`pages_07.html:129`). Owner (2026-11-06): no mice for leopard geckos; the site's feeding guide dropped them. Remove both rows on the next edit; the books do not mention mice at all (owner, 2026-11-06).

- [ ] Book: waxworm rows (`pages_03.html:67` and `:127`) read "A couple of times a week at most." Site (2026-11-06): waxworms are a treat, never a staple; superworms likewise occasional.
- [ ] Book: adult schedule note (`pages_03.html:14`) reads "Adult schedules run from every other day to every 5 days once the tail has filled out." Site (2026-11-06): every 2 to 4 days, stretching to 5 once the tail has fully filled out, with body condition setting the day.
- [ ] Book: budget page (`pages_06.html:139`) reads "UVB tube replacement, if you run one: two a year, averaged". Site (2026-11-06): a tube every 6 to 12 months, budgeted at two a year, still about $5 a month.
- [ ] Book: handling (`pages_04.html:11`) describes a "two-handed scoop" with only one hand. Site (2026-11-06): one hand under the chest and the other under the hips and tail base, or let the gecko walk onto a flat hand.
- [ ] Book: handling (`pages_04.html:19`) reads "Evening works best, close to its natural active time, but not right after it wakes." Evening is when it wakes. Site (2026-11-06): evening, once the gecko is up and moving.
- [ ] Book: MBD subtitle (`pages_05.html:83`) reads "largely preventable once heat and calcium are handled correctly", while the body below names UVB too. Site (2026-11-06): largely preventable with heat, calcium and low-level UVB handled correctly.
- [ ] Book: substrate (`pages_02.html:195`) reads paper towel or tile "remove the impaction risk". Site (2026-11-06): they take loose substrate out of the impaction risk (prey size and low heat are causes too).
- [ ] Book: enrichment (`pages_04.html:87`) recommends "a rolling dispenser that drops insects as it is nudged" and "simple timed-release prey containers", and says small insects offered naturally "has been linked to lasting increases in activity" (an unnamed study); the checklist (`pages_06.html:466`) repeats the rolling dispenser. Site (owner, 2026-11-06): tong-feeding and short supervised hunts only; the dispenser, containers and the unnamed study are cut.
- [ ] Book: enrichment (`pages_04.html:81`) "real studies" and (`pages_04.html:97`) "a wheel or a toy". Site: "Two studies", "a toy". Sources page (`pages_07.html:83`) cites Rickman 2025 through the University of Lincoln; site now cites the paper: Applied Animal Behaviour Science 283: 106487.
- [ ] Book: species page (`pages_01.html:136`) reads "Unlike most geckos, leopard geckos have movable eyelids". PetMD, the source, says "many"; the hub says "most" too.
- Note, not yet a change: the book carries the same unsourced claims as the site's owner review list (barking for food `pages_04.html:43`; most egg-binding cases are single females `pages_04.html:151`; four to five clutches a month apart `pages_04.html:159`; 14 hours summer, 12 winter `pages_02.html:132`, `:182`, `pages_06.html:15`) and the Arcadia chart figure (`pages_02.html:165`). Change them only when the owner settles them on the site.

### Crested gecko (3.1, `crested-gecko-src`)
- [ ] Glossary: IUCN (`pages_07.html:40`) and VCA (`:58`) out; CITES (`:12`) moves to the law page mini glossary.
- [ ] Gear: the fogger is left unlinked as the "or" alternative to the spray bottle (cost guide setup row).
- [ ] Book: `pages_06.html:120` "If the room holds the range, skip the bulb and thermostat": add that the thermometer stays either way, as a safety check (owner, 2026-10-05; PetMD and Chicago Exotics both keep thermometers in with or without heat). The equipment page (`pages_02.html:92`) and daily check (`pages_06.html:342`) already have it, so this is one clause on the skip line.
- [ ] Book: `pages_02.html:44` pair space "double the space of an 18×18×36 in" enclosure; the setup guide's single-adult minimum is 18x18x24. Settled 2026-10-15: the site cost guide now says double the 18x18x24 single-adult minimum; the book follows on the next edit. (Sweep 2026-10-05.)
- [ ] Book: `pages_02.html` temperature table, "Floor, the cool area" reads 70 to 75°F. The site setup guide moved the floor to 72 to 75°F on 2026-10-15, since its own text puts lethargy at or below about 72°F. Match on the next edit.
- [ ] Book: `pages_03.html:196` adult row "Males about 35 to 45 g; females about 45 to 65 g, more while carrying eggs": the site health guide now says about 35 to 55 g for an adult, a female heavier for a while when carrying eggs (owner, 2026-11-06; Zen Habitats 35 to 55 g, no source gives a split by sex or 45 to 65 g).

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
- [ ] Book: adult size reads 5 to 10 inches (`pages_01` line 108). The site now says 5 to 9 inches everywhere, matching the handling guide's sourced maximum of about 22 cm. Match on the next edit.
- [ ] Glossary: FDA (`pages_07.html:18`), IUCN (`:23`) and VCA (`:55`) out; 21 CFR 1240.62 (`:7`), CITES (`:13`) and CFR and CMR (`:15`) move to the law page mini glossary.
- [ ] Gear: no herbivore multivitamin without added phosphorus; no hide sized for an adult; the cuttlebone link was removed (a bird product).

### Axolotl (3.1, `axolotl-src`)
- [ ] Glossary: IUCN (`pages_07.html:25`) and VCA (`:59`) out; Injurious wildlife (`:24`) and Lacey Act (`:27`) move to the law page mini glossary.
- [ ] Gear: sand unlinked (grain size specs conflict); no air pump for the sponge filter.
- [ ] Book: gloves read "clean, disposable nitrile gloves" (`source/axolotl.html:781`, `pages_04.html:15`). The site's amphibian rule since 2026-10-05: powder-free vinyl wetted with dechlorinated water first, nitrile only as a fallback, never latex (LafeberVet Amphibian Handling and Restraint; Merck Clinical Techniques in Amphibians). Match it on the next rebuild.
- [ ] Book, law page: the Arkansas row (`pages_05.html:25`, `axolotl.html:966`) reads "Unclear. The unrestricted captive wildlife list has no amphibian section, so a non-native salamander is neither exempted nor addressed." The matrix now reads banned (2026-10-08): Addendum R1.03(A)(1) names the axolotl, and its *** note limits possession to animals owned before 16 May 2024 and registered with the Game and Fish Commission by 30 June 2025. Move the row up with the bans.
- [ ] Book, law page: the count line (`pages_05.html:8`, `axolotl.html:949`) reads "banned in 6 ... and unclear in 1". The matrix now gives banned in 7 and unclear in none; legal 38, permit 4 and conditional 3 are unchanged, so "fourteen places" in the subtitle (`:6`) still holds.
- [ ] Book: the opening (`pages_01.html:65`, `axolotl.html:282`) reads "banned, permit-only, conditional or unclear in fourteen places". Still fourteen, but no axolotl cell is unclear now: drop "or unclear".
- [ ] Book, Sources page: the law sources line (`pages_07.html:92`, `axolotl.html:1768`) cites the "Arkansas unrestricted captive wildlife list". The Arkansas answer now comes from the Game and Fish Commission Code Book, Addendum R1.03 and its *** note.
- [ ] Book, law page: the Vermont row (`pages_05.html:19`, `axolotl.html:960`) reads "Permit, not for pets" and "permits are issued only for scientific or educational purposes." The matrix now reads permit with permitFor personal (2026-10-08): Regulation 881 § 5.2's second sentence lets the Commissioner issue a permit for any other purpose once the animal is found not to "conflict with the purpose of this regulation". New wording: "Permit, at the Commissioner's discretion" and "Genus *Ambystoma* is on the Restricted Wild Animal List (July 2025); a private keeper may apply, and the Commissioner decides case by case." The status count is unchanged.

### White's tree frog (1.1, `whites-tree-frog-src`; renders as "Whites Tree Frog")
- [ ] Glossary: IUCN out (`pages_6.html:31`).
- [ ] Book: the version-history table (`whites-tree-frog.html:1860`, `pages_6.html:103`) still describes the site articles as "Powder-free nitrile"; the site and the book body now say vinyl first, nitrile second, never latex.
- [ ] Gear: Repashy Calcium Plus stands in for "calcium with D3 and a multivitamin" (the owner's ReptiVite is labeled for reptiles only); an under-tank heat mat kit is linked where the book asks for a side-mounted mat; substrate changes and electricity unpriced.

### Betta fish (3.1, `betta-fish-src`)
- [ ] Glossary: IUCN (`pages_08.html:45`) and VCA (`:78`) out.
- [ ] Book: temperature, owner rule 2026-11-01 (the overlap of FishBase 75 to 86°F and Seriously Fish 72 to 86°F, no invented target). Every "76 to 82°F" becomes "75 to 86°F" (24 to 30°C) and every "78 to 80°F" sweet spot or target goes, holding the temperature steady anywhere in the range instead. Search the `betta-fish-src` pages for "76 to 82" and "78 to 80": the budget/specs table (`pages_01.html`), `pages_02.html`, the not-eating list (`pages_03.html`), the setup checklist (`pages_05.html`), the heat-method ich note (`pages_06.html`, 86°F is now the top of the range) and the checklist table (`pages_07.html`). Add UF/IFAS FA212's point that an unheated container needs a room no colder than about 72°F (22°C). Matches the site's betta guides.

### Goldfish (3.1, `goldfish-src`)
- [ ] Glossary: NYCRR (`pages_07.html:45`) moves to the law page mini glossary.
- [ ] Gear: no product for the two buckets.
- [ ] Book: "block the gut" (`pages_02.html:266`, the gravel-swallowing line) becomes "block the esophagus" to match the site's goldfish tank setup guide and the aquarium substrate guide (owner, 2026-11-01; Practical Fishkeeping says the oesophagus).

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
- [ ] Book: diet shares read 60 to 80% pellets with 20 to 25% vegetables and fruit (`pages_1.html:109`, `pages_2.html:12`, `:35`, `:87`, `:48`), which can exceed 100%. The site moved to 75 to 80% pellets and the remaining 20 to 25% on 2026-10-16 (VCA), matching the other parrot guides. Match on the next edit. Listed on the product page under "Coming in the next edition".
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
- [ ] Book: sexual maturity reads 3 to 4 years, 5 to 6 in large species (`cockatoo.html` lines 320, 885). The site's handling guide and its listed PetMD source say about 5 to 7 years, when aggression tends to rise. Match on the next edit.
- [ ] Glossary: CITES (`cockatoo.html:2078`) moves to the law page mini glossary; out: CDC (`:2073`), CPSC (`:2082`), et al. (`:2096`), HOA (`:2103`), IUCN (`:2105`), MSD (`:2109`), NASPHV (`:2110`), NHLBI (`:2111`), UC Davis (`:2134`), VCA (`:2138`). CPBC (`:2081`) stays.
- [ ] Gear: washable mat and sleep cage unpriced; the gram scale's perch tops out at 3/4 in.
- [ ] Book: Vermont row reads "Banned" (`cockatoo.html:1198`). The matrix now reads Regulation 881 § 5.2 as a discretionary personal permit, so the row should read Permit, with the note that the Commissioner decides case by case and no standard is published (matrix change 2026-10-08).
- [ ] Book: sexual maturity "3 to 4 years in medium species, 5 to 6 in large ones" (`cockatoo.html:320`, `:885`, Sources note `:2153`) vs the site handling guide :42 and :66 "roughly 5 to 7 years old". Check the source and settle both. (Sweep 2026-10-05; the sweep's other cockatoo items came from the stale fragments and are void.)
- No fitting product: a 3/4 in bar cage at least 36x24x48 in for Goffin's and galahs; a cockatoo-sized travel carrier inside the $80 to $200 row; plain white tray paper; stainless cage locks or snaps (unsure: coating status unclear).

### Tarantula (3.0, `tarantula-src`)
- [ ] Glossary: USDA APHIS (`pages_07.html:46`) and USPS (`:47`) out; CITES (`:13`) moves to the law page mini glossary.
- [ ] Gear: no side-mounted heat source the book allows; the pink toe enclosure is not confirmed.
- No fitting product: an enclosure about 20x10 in with a solid acrylic lid.
- [ ] Book: uneaten prey. `pages_02.html:203` table says "Within 24 hours" vs `pages_02.html:91` "Never leave uneaten prey in overnight" (the site setup guide has the same pair at :98 and :110; the feeding guide :63 says 24 hours). Settle on one rule for book and site. (Sweep 2026-10-05.)

## 4. Across all packages

- Replacement UVB tubes in the catalog: deferred by the owner, kept as an option for later (nine UVB species; prices in COST_CHECK.md).
- "Prices checked" / "as of" lines: the owner dropped them from the site on 2026-10-06 (every cost guide and the other guides that had one). Some books still carry one on the budget or sources page (ball python "Prices checked in October 2026 at ...", leopard gecko, others); remove at each book's next rebuild, never as a standalone edit.
- US date order (owner, 2026-10-21): the site switched from "21 October" to "October 21st", and "21 October 2026" to "October 21, 2026" (no ordinal when a year follows). The books still write dates day first: about 90 in `source/` across 13 animals (axolotl, ball python, bearded dragon, crested gecko, guinea pig, hamster, hognose snake, leopard gecko, rabbit, Russian tortoise, tarantula, and the `-src` READMEs). Convert at each book's next rebuild, never as a standalone edit.
- US spelling (owner, 2026-10-12): no British spelling in book prose, same as the site. Scanned all 20 books in `source/` on 2026-10-12 and they are clean; every hit is a title or name and stays (Applied Animal Behaviour Science, World Budgerigar Organisation, AnAge's "animal ageing and longevity database", African grey). Keep it that way in every new or rebuilt page. The superseded `care-packages/` folder still has "levelled" (`hamster.html:551`) but builds nothing.

## 5. Decisions made

- 2026-10-04: legal terms get their own small glossary on each book's law page.
- 2026-10-04: CPBC stays in the cockatoo glossary as a professional title, not an organization.

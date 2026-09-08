# Reader log

Raw output from each set-test reader agent, unedited, one entry per species.
docs/READER_REVIEWS.md holds the edited, structured write-up built from
these; this file holds what the agent actually said, for when the edited
version needs checking against the source.

The list at the bottom collects every item a reader reported that no guide
anywhere, own deep dive or shared Health and More guide, covers at all,
across every species run so far, so Mike can look over the full list in one
place once several species are done.

## Leopard gecko (2026-09-08)

One Sonnet agent, ten pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, temperature, vs crested gecko),
about 102k tokens. Full agent output below, unedited.

---

1. One line per page, with grade.

Hub (00): I'd finish it in one sitting; it's the only page that hands you a first-week checklist, an emergency card, and a buy list without making you hunt across seven articles. Grade A.

Encyclopedia (01): Quick and readable, but nothing here changes what I do; it's context, not action. Grade B.

Cost guide (02): Finished it, and it's the page I'd screenshot before buying anything. Grade A.

Handling guide (03): Finished it; the tail-drop section alone justifies the page. Grade A.

Health issues guide (04): Finished it; the crypto section is the single most important thing in the whole set. Grade A.

Tank setup guide (05): Finished it; the humidity split (30-40% ambient, 70-80% in one hide) is the detail I'd have gotten wrong without it. Grade A-.

Feeding guide (06): Finished it; refreshingly honest that sources disagree on the adult schedule instead of faking a precise number. Grade A.

Enrichment guide (07): Finished it, cited real studies by name, but it's a "do this once the basics are right" page, not a setup page. Grade B+.

Temperature guide (08): Finished it, the most rigorous page in the set (it names LafeberVet, Zen Habitats, and Merck by name where they disagree), but it isn't even listed as a Deep Dive on the hub or any other page despite being the most-linked article in the set. Grade A-.

Vs. Crested guide (09): Finished it, useful if I were still deciding, but its own table and its own body text don't agree with each other. Grade B+.

2. Hub and encyclopedia: the hub earns its place, it's a genuine synthesis with its own emergency card and buy list, not a copy. The encyclopedia mostly repeats size and lifespan already on the hub, and adds only origin, wild diet, and conservation status that appear nowhere else, so it's thin but not redundant. One real disagreement: the hub's own "Temperatures" line says "Nights in the 70s, with 65°F the floor," but its "Power outage" line says "70°F is the normal night low. Below 60°F, add heat, move the animal, or call the sitter." The temperature guide backs the 65°F number: "Temperatures can safely drop to 65°F at night... If your home drops below this, use a ceramic heat emitter." So the hub tells me to act at 60°F in one place and implies the floor is 65°F in another, a 5-degree gap on the one number that matters most in a power outage.

3. As a set, yes, I could set up, buy, feed, and handle a gecko competently, the numbers are consistent enough (36x18x18, 88-92°F warm floor, 70-77°F cool side, three hides, calcium/D3 schedule) that I trust them. What's missing: no page in this set explains respiratory infection itself, even though both the temperature guide and the humidity sections warn about causing one. The tank setup guide says "house your gecko alone, they're not a social species and don't do well cohabitating" without ever saying why, no page in the set answers that. The health issues guide says crypto is "diagnosed through a fecal PCR test," and the cost guide separately prices "Initial vet exam and fecal test: $150-215," but neither page connects those two facts, so I had to do the math myself.

4. Overlap: temperature numbers, humidity numbers, quarantine length, and the hide system all repeat across four or five pages and stay consistent, that redundancy is reassuring, not annoying. Three FAQ answers on the hub (stick tail disease, the humidity mistake, why geckos stop eating) are copied verbatim from the deep dives, which is fine for a router page. The one real conflict: article 09's table says "Supplemental heat needed: Yes - belly heat mat, ~88-90°F," but its own body text says "under-tank heat mat running around 88 to 92 degrees F" twice. Same article, two different numbers.

5. One link per page:
- Hub: "It's the common name for cryptosporidiosis, a severe and highly contagious parasite with no cure" should link to the health issues guide; it doesn't.
- Encyclopedia: "over 100 recognized color morphs in captivity" should link to the cost guide, where morph pricing actually lives.
- Cost guide: "The thermostat isn't optional, it's what keeps the heat mat from overheating and burning your gecko" should link to the tank setup or temperature guide.
- Handling guide: "they're not a species that craves interaction the way a bearded dragon might" should link to the Bearded Dragon vs. Leopard Gecko guide.
- Health issues guide: "low-level UVB is worth providing even though it's technically optional for this species" should link to the tank setup guide's UVB section.
- Tank setup guide: "house your gecko alone, they're not a social species and don't do well cohabitating" needs a link, though nothing in this set actually covers it.
- Feeding guide: "that points to a medical cause rather than a normal cycle" should link to the health issues guide.
- Enrichment guide: "give a gecko something closer to natural hunting behavior than a bowl of static food" should link to the feeding guide.
- Temperature guide: already the best-linked page in the set; needs none.
- Vs. Crested guide: "near the very top of every 'best first reptile' list" should link to the Five Reptiles roundup.

6. Trust: the 60°F/65°F mismatch and the 88-90/88-92 mismatch both made me pause, small enough that they read as editing slips rather than made-up numbers, but they're exactly the kind of thing a reader checks against in an emergency. What convinced me most that a real keeper wrote this: "A dropped gecko tail can keep twitching on its own for a minute or more after it detaches... a wriggling tail draws a predator's attention while the rest of the gecko escapes." That's not a fact you'd invent, it reads like someone who has actually watched it happen.

7. Grade for the set: B+. The numbers are trustworthy and the site is genuinely useful end to end, but two small cross-page number conflicts and a temperature guide that's the most-cited page in the whole set yet excluded from every Deep Dive list undercut the polish. First fix: reconcile the 60°F/65°F night threshold and the 88-90/88-92°F range. Second fix: add the temperature guide to the species' own Deep Dive list, and add the five missing cross-links above.

---

Fixed the same day (docs/READER_REVIEWS.md has the full write-up): the
88-90/88-92°F mismatch, two link-only sentences pointing at the care guide
hub, two of the five links, and the temperature guide's Deep Dive wiring
(added to `leopard-gecko` in src/lib/data/relatedArticles.js). The
60°F/65°F hub mismatch is both sourced and left for Mike.

## Goldfish (2026-09-08)

One Sonnet agent, nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, the tank size and bowl myth
piece), about 100k tokens. Extracted after fixing a bug in
scripts/reader-extract.mjs that had silently dropped the bowl myth
piece from the set (it doesn't end in `-guide.mdx`). Full agent output
below, unedited.

---

1. One line per page, would I finish it, what I can act on, grade.

00 Care guide hub: finish it, a fast checklist and cost table I can act on right away. B+.
01 Encyclopedia: finish it, thin but it has origin and wild lifespan nothing else repeats. B.
02 Cost guide: finish it, honest that the fish is cheap and the tank is not, but its dollar range doesn't match the hub's own table. B+.
03 Handling: finish it, short and gives me an actual net-versus-hands routine. A-.
04 Health issues: finish it, dense but the most rigorously sourced page in the set, with real doses and named vets. A.
05 Tank setup: finish it, solid numbers for size, filtration, and water, though it repeats 00 and 08 closely. A-.
06 Feeding: finish it, the most complete page, and it admits when sources disagree instead of hiding it. A.
07 Enrichment: finish it, useful but the cited research is never named so I can't check it. B.
08 Bowl myth: finish it, the strongest argument in the set with a real numbers table, though one of its own FAQ answers contradicts a number used elsewhere. A-.

2. Hub and encyclopedia.

The encyclopedia earns its place. It has the wild origin (China, over a thousand years of breeding), habitat, and scientific name, none of which show up anywhere else. The hub mostly doesn't add anything new: nearly every fact in it, tank size, filtration turnover, water change percentage, also appears in 05, 06, or 08. It works fine as a landing page and checklist, but it's an index, not new information.

They do disagree on cost. The hub's setup table, built with the canister filter it lists as the "strong filtration" option, adds up to roughly $460 at the high end across tank, filter, substrate, test kit, conditioner, vacuum, decor, and net kit. The cost guide states flatly: "a complete setup lands in the $150 to $400 range." Build the setup the hub's own table describes and those two numbers don't meet.

3. The set as a whole.

Yes, after all nine pages I could buy, cycle, set up, feed, and do basic troubleshooting on a goldfish. What's still missing: how to actually pick a healthy fish at the store (the hub says "avoid cheap 'feeder' goldfish" but no page explains what that means or how to spot one), and real medication names and doses for anything besides anchor worm and flukes.

Places where one page raises a question another page answers, uncredited: page 03 says "some of the fungal and bacterial issues goldfish pick up trace back to exactly this kind of opening" but never points to 04, which has the actual Fungal Infections section. Page 06 blames appetite loss on gas that "presses on the swim bladder" but the pea-and-fast fix and the fuller mechanism live in 04's Swim Bladder Disorder section, not linked from 06. Page 05 recommends sinking pellets or gel for fancy varieties "which reduce swim bladder issues," but the actual pellet-versus-gel-versus-flake breakdown is 06's, and 05 doesn't send you there.

4. Overlap and conflict across the deep dives.

Read twice with no disagreement: tank size numbers (05, 07, 08, and the hub all agree on 20 gallons for one fancy, 10 more per fish, 55+ for common or comet); overfeeding as the main driver of both ammonia spikes and swim bladder trouble (04, 05, 06, 07); peas for constipation (04, 06); sinking pellets over floating flakes to cut air-gulping (05, 06, 07).

One real conflict: temperature. Page 05 says goldfish are "comfortable in the 65 to 75°F range." An FAQ on page 08 says goldfish need "cooler water (65-72°F) than bettas (78-80°F)." Same species, two ceilings three degrees apart.

A softer one: the hub states plainly, "Feed small portions once or twice a day," while 06 says "Sources genuinely diverge... There's no single settled number." Same practical advice, but the hub presents as settled what 06 explicitly says isn't.

5. One link per page.

00 and 01: already link every title in both sidebar lists, nothing else needed.
02: "proper goldfish keeping requires a large tank and serious filtration, exactly the part the classic fish-in-a-bowl image leaves out entirely" should point to the tank setup guide (05), not just the bowl myth piece it already links.
03: "Some of the fungal and bacterial issues goldfish pick up trace back to exactly this kind of opening" should point to the health issues guide (04).
04: "The first response is measured portions, sinking pellets instead of floating flakes, and a short fast with a single cooked, de-shelled pea" should point to the feeding guide (06).
05: "Avoid overfeeding, it's one of the most common mistakes and a direct contributor to the waste load your filtration has to handle" should point to the feeding guide (06).
06: "Excess or low-fiber food causes gas buildup that presses on the swim bladder" should point to the health issues guide's swim bladder section (04).
07: "Correct tank volume, filtration, and a fully cycled tank come before plants, toys, or tankmates" should point to the tank setup guide (05).
08: "a tank that's technically 'big enough' by volume can still develop dangerous ammonia levels without a filter rated well above the tank's actual size" should point to the tank setup guide (05) for the actual turnover numbers.

6. Trust.

What made me doubt them: the setup cost gap between the hub and page 02, and page 01's stated size floor of 4 inches, which doesn't match any variety in 08's table (fancy starts at 6). Small, but the kind of thing that makes me wonder if anyone cross-checked the numbers between pages.

The sentence that most convinced me a real keeper wrote this, from 04: "Both are correctly published, and where our care package prints Merck's number this article's 0.066 mg/L is the one to follow for anchor worm, because it is the species-and-parasite-specific figure." That's someone who found two real veterinary sources disagreeing and made a documented, reasoned call instead of quietly picking one.

7. Grade and two changes.

Grade: B+. Thorough, well sourced, and unusually honest about disputed numbers where it counts, but small unreconciled figures between pages chip away at that credibility.

First two changes: reconcile the hub's setup cost table with the $150 to $400 figure in the cost guide, or explain why the canister-filter route runs higher. Then fix the 65-75°F versus 65-72°F conflict between the tank setup guide and the bowl myth FAQ.

Not covered anywhere:
- How to pick a healthy goldfish or spot a "feeder" goldfish at the store: the hub says to avoid them, but no page in the set, and nothing in the Health and More list, explains how.
- Actual medication names and doses for ich, fin rot, dropsy, ulcers, popeye, or fungal infections: only anchor worm and flukes get a real drug and dose. The Quarantine and Hospital Tank guide in Health and More covers salt, carbon, and aeration rules generally, but not disease-specific treatment.

---

Fixed the same day (docs/READER_REVIEWS.md has the full write-up): the
extractor bug; the hub rebuilt to router shape, which resolved the
setup-cost and feeding-schedule conflicts by construction; the
65-72°F FAQ answer corrected to 65-75°F; a link-only sentence pointing
at the care guide hub cut; five of eight recommended links added.

## Axolotl (2026-09-08)

One Sonnet agent, nine pages (hub, encyclopedia, cost, handling,
health issues, tank setup, feeding, enrichment, legal), about 92k
tokens. Read the old legacy hub, before the router rebuild. Full agent
output below, unedited.

---

One line per page

00 Hub: I would finish it, it is the fastest path to a checklist and a budget, grade A minus.
01 Encyclopedia: I would finish it in under a minute, it gives origin and conservation status but nothing to act on, grade B.
02 Cost guide: I would finish it, useful ranges, but its own math does not match the hub's table, grade B minus.
03 Handling guide: I would finish it, clear and specific about drip acclimation, grade A.
04 Health guide: I would finish it, gives real vet thresholds instead of vague warnings, grade A.
05 Tank setup guide: I would finish it, this is the one I would actually shop from, grade A.
06 Feeding guide: I would finish it, the age-based schedule is exactly what I needed, grade A.
07 Enrichment guide: I would finish it, useful but padded with fun facts I already read twice, grade B plus.
08 Legal guide: I would finish it, the Virginia correction is genuinely useful, grade B plus.

Hub and encyclopedia versus the deep dives

The encyclopedia earns its place, it is the only page with origin, wild diet, and conservation status, none of which repeats elsewhere. The hub is mostly a compressed rerun of the deep dives with no new information, which is fine as a landing page but it does disagree with them in two places.

First, cohousing. The hub says: "They are social enough to house in pairs if the tank is large enough, but monitor for nipping." The enrichment guide says: "Cohousing isn't enrichment for this species and carries real risk, axolotls will bite at limbs and gills, especially around feeding time or if sizes are mismatched. Housing separately is the safer default." Those are two different recommendations, not two phrasings of one.

Second, the 40 gallon tank. The hub says a 20 gallon is "the minimum for one adult (40 gallons preferred)," implying 40 gallons is the real target even for a single animal. The tank setup guide says: "A 20-gallon long tank is the minimum for one axolotl, with a 40-gallon breeder better if you're keeping two," tying the 40 gallon size specifically to a pair. A reader following only the hub would think they underbought at 20 gallons for a single axolotl.

Third, the money does not add up. The hub's own setup table sums to roughly $265 to $725 including the chiller. The cost guide states "$200 to $500 for a basic setup, or $450 to $900" with a chiller. Subtracting the hub's chiller line from its own total gives a basic setup of about $115 to $375, not $200 to $500.

The set as a whole

After all nine pages I could buy, house, feed, and do basic troubleshooting on an axolotl. What is missing: how to actually cycle a tank before the axolotl arrives (the tank setup guide insists it "needs to be fully cycled" but never says how), and a quarantine period for a new arrival, which the handling guide skips straight past with drip-matching alone. Both are named in the Health and More sidebar list but never linked from the body text that raises the need. Three articles (handling, health, tank setup) all point readers to a page called "why axolotls need cold, clean water" for the nitrogen cycle and hardness numbers, but that page is not in this set and not in either sidebar list, so the question it is supposed to answer has no answer here.

Overlap and conflict across the deep dives

Temperature numbers repeat identically everywhere (60 to 68°F, trouble above 72, danger above 75) with no conflict. Feeding frequency for adults is given three ways: "every other day to 3 times per week" (hub), "every 2 to 3 days" (tank setup and feeding guide FAQ), and a fuller age table in the feeding guide. These are close enough to be the same rule stated loosely, not a real conflict. Substrate rules (fine sand under 1mm or bare bottom, never gravel) repeat word for word across tank setup, feeding, and enrichment, with no disagreement.

One link per page

00: none needed, the sidebar already links every title in prose form.
01: none needed, same reason.
02: "Worth checking before you buy though: this species is banned in a handful of states." should link to the legal guide, it currently does not.
03: "Sometimes a move is genuinely necessary: tank maintenance, a water change that requires temporarily relocating the axolotl, or a health check." the words "health check" should link to the health issues guide.
04: "Overfeeding and the wrong food are common triggers too." should link to the feeding guide.
05: "Once this setup is in place, day-to-day handling should stay minimal." should link to the handling guide.
06: "never use gravel or small rocks as substrate" should link to the tank setup guide's substrate section.
07: "Tong-feeding or scattering nightcrawler pieces so the axolotl has to locate them is a simple upgrade." should link to the feeding guide.
08: none needed, already well linked.

Trust

Two things read as generic filler rather than specific knowledge: the "fun fact" boxes repeat the same regeneration and neoteny facts across three separate pages almost verbatim. The sentence that most convinced me a real keeper wrote this: "This is one of the smaller pieces of the overall cost picture, the tank and temperature control matter a lot more," because it is the kind of correction someone gives after watching new owners fixate on the wrong line item.

Grade and two fixes

Grade: B. Individually strong, technically consistent on the numbers that matter most, undercut by a hub that contradicts a deep dive on cohousing and cost math that does not reconcile with its own table. First fix: make the hub's cohousing line match the enrichment guide, or explain the disagreement. Second fix: add the missing links named above, especially cost guide to legal guide.

Not covered anywhere

How to cycle the tank before adding the axolotl is not answered in this set, though "How to Cycle a Fish Tank" exists in the Health and More list, it is never linked from the tank setup page that raises the need. New-arrival quarantine length is likewise named only in "Amphibian Quarantine, Acclimation, and Water Hardness" in that same list, never linked from the handling guide's acclimation section.

---

Fixed the same day (docs/READER_REVIEWS.md has the full write-up): the
router hub rebuild resolves the tank-size and setup-cost conflicts by
construction and drops the cohousing claim instead of restating a
disputed one; five of six recommended links added; the tank setup
guide's cycling sentence now links the shared cycling guide, with a
matching hub row.

## Items no guide covers (all species, running list)

- **Leopard gecko:** what a respiratory infection actually is or how it
  presents. The temperature guide and the humidity sections in tank setup
  and enrichment all warn that getting the numbers wrong causes one, but no
  page in the set, and no shared reptile guide (quarantine, hygiene,
  emergency plan), explains the thing itself.
- **Leopard gecko:** why leopard geckos should be housed alone rather than
  together. The tank setup guide states the rule ("they're not a social
  species and don't do well cohabitating") but never the reason, and
  nothing else in the set or the shared guides covers it either.
- **Goldfish:** how to pick a healthy goldfish or spot a "feeder" goldfish
  at the store. The hub says to avoid them, but no page in the set, and
  nothing in the Health and More list, explains how to tell.
- **Goldfish:** medication names and doses for ich, fin rot, dropsy,
  ulcers, popeye, or fungal infections. Only anchor worm and flukes get a
  real drug and dose in the health issues guide; the shared quarantine
  and hospital tank guide covers salt, carbon, and aeration rules
  generally, not disease-specific treatment.

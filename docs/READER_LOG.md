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

## Leopard gecko (2026-09-08, second pass)

Same ten-page set, re-extracted after the first pass fixes landed.
One Sonnet agent, about 98k tokens. Full agent output below, unedited.

---

1. Page by page, would I finish it and could I act on it:
- Hub: yes, finish and act. Grade A. It is a router with real numbers, not just cards.
- Encyclopedia: yes, quick read. Grade B. Nothing to act on, but it is not trying to be.
- Cost guide: yes. Grade A-. Tables I would actually budget from.
- Handling guide: yes. Grade A. The tail warning alone justifies the page.
- Health issues guide: yes, and I would bookmark it. Grade A-.
- Tank setup guide: yes. Grade A.
- Feeding guide: yes. Grade A. Honest about where sources disagree.
- Enrichment guide: yes. Grade A-. Cites two named studies, not vague "enrichment is good" filler.
- Temperature guide: yes, most useful single page. Grade A.
- Vs. crested gecko guide: yes, but only useful before I've already picked. Grade B+.

2. The hub and encyclopedia do earn their place. The hub's numbers are a faithful summary, not padding, matching the deep dives exactly on temperature, budget, and feeding schedule. The encyclopedia adds wild-range, wild diet, and conservation content none of the deep dives repeat. I found no numeric disagreement between the hub and any deep dive. The one thing the hub does duplicate verbatim is the emergency symptom list, which appears identically in the health issues guide, word for word, down to the bullet order.

3. After reading all nine, I could set up, buy, feed, and handle a gecko with confidence. What's still open: nothing tells me how to prevent or handle egg binding beyond "same-day vet situation" in the health guide, no nesting box or gravid-female setup is described anywhere. Brumation gets named as a cause of appetite loss in the feeding guide, but no page gives target temperatures or a duration for managing it safely. Two places raise a question the text doesn't point to an answer for: the handling guide's settling benchmark ("stops fleeing or hiding when you approach") depends on the three-hide setup from the tank guide, but handling never links there. And the health guide says "an annual wellness exam is worth doing" without saying what it costs, while the cost guide has the exact number ($85 to $105) with no link back.

4. Overlap: the temperature range (88-92°F warm floor, 70-77°F cool) is repeated near-verbatim across the hub, tank setup, feeding, temperature, and vs-crested guides, and it's consistent every time, which reads as care rather than sloppiness. The humidity rule (30-40% general, 70-80% in the humid hide) is repeated across the hub, tank setup, and enrichment guides, also consistent. One real tension: the tank setup guide frames UVB as optional, saying geckos "don't strictly require UVB the way bearded dragons do," while the health issues guide says geckos "appear to rely heavily on UVB and correct basking temperature to process calcium properly, not diet supplementation alone." Both are trying to say the same thing (UVB helps more than people think) but one calls it optional and the other calls it something the animal relies on heavily, and a new owner deciding whether to spend $20-50 on a UVB fixture would feel that contradiction.

5. One link per page:
- Hub: none needed, it already links everywhere.
- Encyclopedia: "with over 100 recognized color morphs in captivity" should link to the cost guide, which is the page that actually prices morphs.
- Cost guide: "sick or emergency visits run $100 to $800 or more" should link to the health issues guide, which is what those visits are usually for.
- Handling guide: "don't start until it stops fleeing or hiding when you approach" should link to the tank setup guide, since the three-hide setup is what lets a gecko stop hiding in the first place.
- Health issues guide: "an annual wellness exam is worth doing" should link to the cost guide for the $85-$105 figure.
- Tank setup guide: none needed, it already links to feeding, temperature, and UVB.
- Feeding guide: "never feed wild-caught insects of any kind" duplicates ground the health issues guide covers on impaction risk; a link there would help.
- Enrichment guide: "never use wild-caught insects or fireflies" should link to the feeding guide, which owns this exact rule.
- Temperature guide: none needed, it links out well already.
- Vs-crested guide: "both species can drop their tails defensively if grabbed or badly startled" should link to the handling guide, which has the real detail on autotomy.

6. What raised doubt: the crypto stat ("around half of captive leopard geckos may carry it") is stated flatly in three places with no source named, which is a big number to hang unqualified. The UVB framing tension above also cost some trust. What convinced me a real keeper wrote this: the temperature guide's line, "The sources do not all agree with each other, let alone with this table," followed by naming LafeberVet, Zen Habitats, and Merck by name and picking a number in between. That is not something a content farm writes.

7. Grade: A-. Deeply consistent numbers, honest about disagreement instead of hiding it, and organized around what a new owner actually needs first. First fix: resolve the UVB "optional" versus "relies heavily on" contradiction into one consistent stance. Second fix: add a short egg-binding/nesting section and a brumation temperature note, since both are named as risks but neither gets real guidance anywhere in the set.

Not covered anywhere:
- Prevention or setup guidance for egg binding in gravid females (a nesting box, warning signs before it becomes an emergency). Not in the health guide, not in the shared Health and More list.
- Brumation-specific temperature targets or expected duration. Named as a cause of appetite loss in the feeding guide, but no page, species-specific or shared, gives numbers for managing it.

---

Fixed the same day (docs/READER_REVIEWS.md has the full write-up): two
more links (cost to health issues, handling to tank setup). Checked the
UVB framing tension closely: both pages already end their claim with
"technically optional," so it's read-in-isolation tension, not a
factual conflict, left alone. Left open: the crypto statistic's
missing source, egg-binding and brumation-temperature content gaps.

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

## Goldfish (2026-09-08, second pass)

Same nine-page set, re-extracted after the first pass fixes landed.
One Sonnet agent, about 94k tokens. Full agent output below, unedited.

---

1. One line per page

Hub: I would finish it, it is a fast, useful index with real numbers, but one of its own numbers is wrong elsewhere on the site. Grade B+.
Encyclopedia: I would skim it, mostly natural history I do not need to buy or feed a fish, the one useful line is a near-duplicate of the hub's fun fact. Grade C+.
Cost guide: I would finish it, the budget breakdown is actionable, but the setup-cost table is broken ("[table could not be parsed]"). Grade B-.
Handling guide: I would finish it, short and immediately actionable (net, wet hands, minimize time out of water). Grade A.
Health issues guide: I would finish it, dense but organized by symptom, sourced to Merck and IFAS, and honest about a dosing conflict. Grade A.
Tank setup guide: I would finish it, gives me the exact numbers I need to shop and cycle. Grade A-.
Feeding guide: I would finish it, thorough on schedule, tiers of food, and reasons for appetite loss, but its own FAQ contradicts its own body text on how long a fast is safe. Grade B+.
Enrichment guide: I would finish it, cites specific research and stays disciplined about not letting decor substitute for tank size. Grade A-.
Bowl myth guide: I would finish it, this is the strongest page in the set, myth then mechanism then fix. Grade A.

2. Hub and encyclopedia

The hub earns its place: it is a router with real numbers and links, not filler. The encyclopedia mostly repeats the hub and the bowl-myth article's core point ("goldfish grow to the size of their environment... they retain memories for months") almost word for word, with no new number attached. It is not wasted space, but it adds little beyond the scientific name and wild lifespan.

They do disagree. The hub's FAQ says "Goldfish need cooler water (65-72°F) than bettas (78-80°F)." The bowl myth guide's FAQ says "Goldfish need cooler water (65-75°F) than bettas (78-80°F)," and the tank setup guide independently states goldfish are "comfortable in the 65 to 75°F range." Two pages agree on 65 to 75, the hub alone says 65 to 72.

3. The set as a whole

Yes, I could set up, buy, feed, and keep a goldfish healthy from this set alone. Tank size, filtration turnover, water parameters, cycling, diet, feeding schedule, handling, and disease signs are all here with real numbers. What is missing: how to actually acclimate a new fish into the tank (temperature matching, drip acclimation) is never explained, only how to net and carry one. The health guide raises "test your water" as the first response to almost every symptom but the actual cycling procedure lives only in the sidebar's "How to Cycle a Fish Tank" guide, never in this set, so a reader following only these nine pages knows to cycle but not how.

4. Overlap and conflict across the deep dives

Tank size and filtration turnover are repeated near-identically in the hub, tank setup guide, and bowl myth guide, with no numeric conflict there, that repetition is reassuring rather than wasteful. The one real conflict is internal to the feeding guide itself: the body says "Beyond about 5 days, effects on health may start to show," while its own FAQ says "A healthy adult... can typically go up to about a week to 10 days without real concern." Those two claims, on the same page, do not agree with each other. The health issues guide also flags its own conflict on anchor worm dosing: "UF/IFAS FA185... gives 0.066 mg/L, while the Merck Veterinary Manual's general figure... is 0.03 mg/L," and states which one to follow. That is a conflict handled openly rather than hidden, which is more reassuring than most sites manage.

5. One link per page

Hub: "Cycling: Cycle the tank fully before adding any fish, the same as any other species." should link to "How to Cycle a Fish Tank," not just the tank setup guide.
Encyclopedia: "Goldfish grow to the size of their environment... contrary to popular myth" should link to the bowl myth guide.
Cost guide: "Substrate, decor, a dechlorinator, and a test kit together add another $30 to $60" should link to the tank setup guide, which explains what that gear actually does.
Handling guide: "Whatever method you use, minimize the time the fish spends out of water" would benefit from a link to the power outage and transport guide.
Health issues guide: "a new pond addition or a fish sourced from a crowded holding tank is worth a closer look before it goes in with established stock" should link to the quarantine guide.
Tank setup guide: "Cycle the tank before adding any fish... an established beneficial bacteria colony is what actually processes the waste" should link to the cycling guide.
Feeding guide: "A new tank, incompatible tank mates, bullying, or an undersized enclosure are repeatedly named triggers" should link to the enrichment guide's social stocking section.
Enrichment guide: "This only works if filtration and tank volume genuinely support the combined bioload of everyone in the tank" should link to the tank setup guide's filtration math.
Bowl myth guide: needs none, its links are already well placed.

6. Trust

The self-flagged dosing conflict on anchor worm treatment, naming both numbers and saying which to follow and why, is the strongest trust signal in the set. The broken cost table and the feeding guide contradicting itself on fasting duration are the two things that made me doubt the editing process, not the content. The sentence that most convinced me a real keeper wrote this: "rinse it in removed tank water only, never tap water, chlorine and temperature shock kill off the beneficial bacteria living in it," that is a specific, hard-won detail, not something copied from a spec sheet.

7. Grade and two changes

Grade: B+. Deep, sourced, mostly consistent, let down by one broken table and one self-contradicting FAQ. First change: fix the betta temperature number on the hub to match the rest of the site (65-75, not 65-72). Second change: fix the feeding guide's FAQ so it matches its own body text on how long a fast is safe.

Not covered anywhere:
Acclimating a new goldfish to the tank (drip acclimation, temperature matching before release) has no guide anywhere in this set or the Health and More list.
Medication names and dosages for ich, fin rot, ulcers, or fungal infections, the health guide names causes and prevention but only anchor worm gets an actual treatment dose, and no guide in the Health and More list covers goldfish medications specifically.
Breeding and spawning, mentioned only as a cause of appetite loss, with no guide anywhere in the set or sidebar explaining the process itself.

---

Fixed the same day (docs/READER_REVIEWS.md has the full write-up): the
hub's stale betta-temperature FAQ (65-72°F to 65-75°F), the feeding
guide's self-contradicting FAQ on fasting duration, five of six
recommended links. Left open: the cost guide's AffiliateLink-in-cell
table, which the extractor can't parse (a tooling limitation, not a
site defect).

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

## Axolotl (2026-09-08, second pass)

Same nine-page set, re-extracted after the first pass fixes landed.
One Sonnet agent, about 98k tokens. Full agent output below, unedited.

---

1. One line per page

Hub (00): I would finish it, it is the fastest way to get the whole picture, and I could act on the buy list and first-week numbers immediately. Grade A.
Encyclopedia (01): Quick read, gives scientific name, wild range, and conservation status that nothing else covers, but no care instructions of its own. Grade B.
Cost (02): I would finish it despite the broken "[table could not be parsed]" line sitting in the middle of the setup-cost section, and I could act on real dollar ranges for the axolotl, the tank, and monthly food. Grade B-.
Handling (03): I could act on the submerged-container method and drip-matching today, and it is honest that this is not a hands-on pet. Grade A-.
Health (04): I could act on the exact 48-hour and 5-day thresholds for calling a vet. Grade A-.
Tank setup (05): Everything I need to buy and the temperature to set it to is here, plainly stated. Grade A.
Feeding (06): The life-stage feeding table and the list of foods to avoid are both things I could use tonight. Grade A.
Enrichment (07): Good practical ideas, but the body says 2 to 4 hides and the FAQ says 2 to 3, which cost it a notch. Grade B+.
Legal (08): I could act on checking my state against the table before buying, but its own opening line undercounts what the table actually shows. Grade B.

2. Hub and encyclopedia

Both earn their place. The hub is not a rehash, it pulls the one number I need from each deep dive into one page with a link back to the source, which is exactly what a router page should do. The encyclopedia adds things no deep dive covers: scientific name, wild range, and the wild-versus-captive lifespan gap (5-6 years wild against 10-15 in captivity).

One disagreement I caught. The hub's heat-wave line says: "Sustained water above about 75°F causes reduced appetite, ascites, and uncontrollable floating." The health guide it links to, describing the same condition, says: "Watch for curled or forward-facing gill tips, appetite loss, floating, and pale patches on the skin. Extended exposure above roughly 72°F starts to suppress the immune system, and temperatures above about 75°F can be fatal." The hub introduces "ascites" and pins appetite loss and floating specifically to 75°F, while the linked article ties those same symptoms to heat stress generally and never uses the word ascites at all.

3. The set as a whole

Yes, I could set up a tank, buy the axolotl, feed it on schedule, and recognize the difference between a normal day and a vet day. What's missing: what a vet visit actually costs (the cost guide only prices the animal, the tank, and food), and how to pick a healthy animal or vet a seller before buying, which none of these nine pages touch.

The clearest unanswered question sitting inside the set: the handling guide tells me to drip-match a new arrival straight into acclimation, but never says whether it should sit in quarantine first or how long. The hub answers this, 6 to 8 weeks, with the clock resetting on illness, but the handling article does not point there or mention quarantine at all.

4. Overlap and conflict across the deep dives

Read twice, consistently: the gravel-causes-impaction warning appears in tank setup, feeding, health, and enrichment, with the same numbers each time (fine sand under 1mm, or bare bottom). The 60-68°F range with the 72°F stress and mid-70s fatal thresholds repeats in tank setup and health, matching exactly.

One real conflict, inside a single article rather than between two: enrichment's body says "Provide at least 2 hides per adult, ideally 3 to 4," and its own FAQ says "Keep 2 to 3 stable hides that never move." Those don't describe the same number.

5. One link per page

Hub: none needed, every claim already carries its own link.
Encyclopedia: "the axolotl is Critically Endangered in the wild with fewer than 1,000 individuals estimated remaining" should link to the legal guide (08), since that guide goes out of its way to say the pet-trade restrictions are ecological, not about this endangered status, and a reader could otherwise assume the two are connected.
Cost: "Axolotls need cool water, ideally 60 to 68°F" has no link at all, and should point to the tank setup guide (05), which has the full temperature and chiller detail this sentence only gestures at.
Handling: none needed, it already links out for the health check and the water parameters.
Health: none needed, its links already cover feeding and water quality.
Tank setup: "Provide hides for security" should link to the enrichment guide (07) for hide count and type.
Feeding: "swallowed gravel causes intestinal blockage that can require surgery and can be fatal" should link to the health guide's impaction section (04) for symptoms and treatment.
Enrichment: "axolotls will bite at limbs and gills, especially around feeding time or if sizes are mismatched" should link to the health guide (04) so an injury has a next step.
Legal: "that taxonomic relationship, not anything about axolotls being rare or endangered themselves, is the actual reason behind every restriction on this list" should link to the encyclopedia (01), which is where the endangered status this line is contrasting against actually lives.

6. Trust

Two things made me doubt this set. The cost guide's setup-cost table renders as literal text, "[table could not be parsed]." And the legal guide opens with "four jurisdictions restrict them," then lists twelve states in its own table, several with real restrictions like Wyoming and Alabama. That is not a small rounding error, it is the article disagreeing with its own table.

The sentence that most convinced me someone who actually keeps these animals wrote this: "Test any new item by running your hand over it, if it scratches you, it can injure the axolotl." That is a field test, not something copied from a fact sheet.

7. Grade: B+. The core husbandry pages (cost, handling, health, tank setup, feeding) are consistent with each other on every number that matters, but a broken table, a self-contradicting legal count, and a mismatched hide count keep it off an A.

Two fixes first: reconcile the legal guide's opening claim with its own table, and fix the cost guide's broken table while adding a link from it to the tank setup guide.

Not covered anywhere: what a vet visit for an axolotl actually costs. How to evaluate a seller or pick a healthy axolotl at the time of purchase.

---

Fixed the same day (docs/READER_REVIEWS.md has the full write-up): the
legal guide's jurisdiction count ("four" to "about a dozen," matching
its own table), the enrichment guide's FAQ hide count (reconciled to
the body's 3 to 4), two more links (cost to tank setup, legal to the
encyclopedia). Checked and left alone: the hub's heat-wave row versus
the health guide's Heat Stress section, both correctly sourced to
different, more specific material, not a copying error. Left open:
the cost guide's AffiliateLink-in-cell table, the same
scripts/reader-extract.mjs limitation goldfish's second pass found.

## Ball python (2026-09-08)

One Opus agent, eleven pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal, vs boa constrictor, vs
corn snake), about 92k tokens. Read against the old legacy hub. Full
agent output below, unedited.

---

# Ball Python Set: Reader Review

## 1. Page by page

- **00 Hub.** Finished it. Act on: the shopping checklist. But it is the deep dives restated at about 80 percent fidelity. **C**
- **01 Encyclopedia.** Finished in thirty seconds. Act on: nothing except "20 to 30 years." **C**
- **02 Cost.** Finished. Act on: budget $500 to $1,500 for year one. **B**
- **03 Handling.** Finished. Act on: settle 1 to 2 weeks, 48 to 72 hours post-feed, never in shed. **A**
- **04 Health.** Finished. Act on: a real go-to-the-vet-now list. **A**
- **05 Tank setup.** Finished. Act on: this is my build sheet. **A-**
- **06 Feeding.** Finished. Act on: thawing and freezer storage, the best section in the set. **B+**
- **07 Enrichment.** Finished. Act on: the priority order, and its honesty about what the study did not test. **A**
- **08 Legal.** Finished. Act on: checked my state in one table. **A**
- **09 vs Boa.** Finished. Act on: size reality. The enclosure row is wrong. **C+**
- **10 vs Corn.** Finished. Act on: it made the choice for me. **B**

## 2. Hub and encyclopedia

The hub does not earn its place. Everything on it exists downstream in more usable form, and the disagreements are largely its own:

- **Fasting.** Hub fun fact: "Ball pythons can go up to 6 months without eating." Hub diet: "A healthy adult ball python can safely fast for 6 to 8 weeks." Feeding guide: "A healthy adult ball python can go 3-6 months without eating."
- **Humidity.** Hub housing: "Ambient humidity should stay at 55 to 65%." Hub FAQ: "Ball pythons require 60 to 80% ambient humidity." Tank setup: "Keep ambient humidity at 55 to 65%."
- **Adult schedule.** Hub: "Adults eat every 10 to 14 days." Hub FAQ and tank setup: "adults every 7 to 14 days."
- **Thawing.** Hub: "in warm water for 20 to 30 minutes until it reaches 100 to 105 degrees F at the core." Feeding: "submerge it in cool to lukewarm water."
- **Handling.** Hub: "2 to 3 times per week for 15 to 20 minutes... usually 2 to 4 weeks after acquisition." Handling guide: "up to 3 to 5 for a snake that handles well... 15 to 30 minutes," starting after "the first one to two weeks."
- **Costs.** Nearly every hub line differs from the cost guide: electricity $50 to $90 vs $20 to $80, vet $50 to $90 vs $50 to $150, substrate $30 to $50 vs $40 to $120.

The encyclopedia earns a small place: origin, wild diet, morph count, the 48-year record. But "Wild Lifespan: 20-30 years (up to 48 years recorded in captivity)" is mislabeled, and "Wild populations face pressure from over-collection" sits oddly beside "Least Concern (IUCN)."

## 3. The set as a whole

Yes, I could buy legally, build it, wire the heat, feed it, and recognize the common illnesses. Questions raised on one page whose answer sits on another, unsignposted:

- Health says quarantine "several weeks to months," hub says 60 to 90 days. The Reptile Quarantine guide is a sidebar title only.
- Tank setup warns "obesity is a real and common issue" without saying how to tell. Sexing, Growth, and Body Condition covers it.
- Feeding says worry at "rapid weight loss" but never says to own a scale. Same guide.
- Nothing in the eleven pages mentions a power failure. Reptile Emergency Plan is sidebar-only.

Still open after all eleven: choosing a seller and a healthy animal, routine cleaning cadence and disinfectant, finding a reptile vet, and whether the morphs the cost guide prices carry health baggage.

## 4. Overlap and conflict across deep dives

Read twice or more: humidity 55 to 65 rising to 70 to 80 (tank, health, vs corn), frozen/thawed over live (hub, tank, feeding), two snug hides (hub, tank, enrichment), the 48-hour post-feed rule (hub, handling, feeding), thermostat mandatory (cost, tank, health, enrichment).

Conflicts:

- **Enclosure size.** Tank setup: "The current standard for an adult is a 4x2x2 ft... roughly 120 gallons." vs Boa: "Adult enclosure | 40-50 gallon range," and "stay comfortable in roughly a 50-gallon enclosure for the rest of their life." That is the size the tank guide says the hobby moved away from.
- **Escape risk.** Handling: "They're skilled escape artists." vs Corn: "Escape risk | Low - calmer, less driven."
- **Climbing.** Hub: "ball pythons are semi-arboreal, especially juveniles." Enrichment: "The point is not that ball pythons are secretly arboreal."
- **Biting.** Handling devotes a section to it. vs Corn: "Balls up, essentially never bites."
- **Prey size.** Tank setup adds "or about 10% of body weight," which no other page says and which is a very large rat for a 1,500 gram female.
- **Thaw temperature.** Three answers: hub's 100 to 105 F core, feeding's "cool to lukewarm," feeding FAQ's "warm - not hot - water... 15 to 20 minutes."

## 5. The one link each page needed

- **Hub:** "Thaw prey fully by placing it in a zip-lock bag in warm water for 20 to 30 minutes." Point to the Feeding guide.
- **Encyclopedia:** "hundreds of color morphs developed through selective breeding." Point to the Cost guide.
- **Cost:** "The thermostat is not optional." Point to Reptile Heating and Thermostats.
- **Handling:** "You'll know your snake is heading into a shed cycle when its eyes turn cloudy or blue." Point to Understanding Reptile Shedding.
- **Health:** "quarantining any new snake for several weeks to months... isn't optional." Point to Reptile Quarantine.
- **Tank setup:** "sized to roughly the width of the snake at its thickest point, or about 10% of body weight." Point to Feeding.
- **Feeding:** "A healthy adult ball python can go 3-6 months without eating." Point to Health Issues.
- **Enrichment:** "Two secure hides, one on the warm side and one on the cool side, remain the baseline." Point to Tank Setup.
- **Legal:** none needed.
- **vs Boa:** "stay comfortable in roughly a 50-gallon enclosure for the rest of their life." Point to Tank Setup, which contradicts it.
- **vs Corn:** "need enclosure humidity in the 55 to 65% range." Point to Tank Setup.

## 6. Trust

Doubts: the 50-gallon claim, the 10 percent body weight prey rule, three thawing answers, and the enrichment line "This is reasoning from natural history, and the guide should say so," which reads like an editor's note left in the text.

The sentence that convinced me a keeper wrote this: "Keep it stable enough that it cannot be tipped, and clean, since a soaking snake will also defecate in it."

## 7. Set grade: B-

Strong individual articles undermined by a hub that contradicts them and by numbers that drift between pages.

First two fixes: one source of truth for enclosure size, humidity, fasting window, feeding interval, and thaw method, with the hub rendering from it. Then cut the hub to a router that links into each deep dive at the claim, instead of restating it.

## Not covered anywhere

- How to choose a seller and assess a healthy animal before buying.
- Routine cleaning cadence and what disinfectant is safe on a snake enclosure.
- How to find and vet a qualified reptile veterinarian before you need one.
- Whether specific morphs carry health problems, given the cost guide prices them by genetics.

## Ball python (2026-09-08, second pass)

Same eleven pages re-extracted after the router hub and the first-pass
fixes. One Opus agent, same prompt, about 95k tokens. Full agent output
below, unedited.

---

# Ball Python page set, read as a buyer

## 1. One line per page

- **00 Hub:** Finished it. Every first-week number I need with the page it came from; I could buy and build from this alone. **A**
- **01 Encyclopedia:** Finished it in under a minute. Nothing to act on: origin, size, lifespan, conservation. **C**
- **02 Cost:** Finished it. I can budget $500 to $1,500 for year one and $200 to $500 after. **B**
- **03 Handling:** Finished it. I know when to start, how often, and the two hard timing rules. **A**
- **04 Health:** Finished it. I can recognize, triage, and know what is vet-today. **A**
- **05 Tank setup:** Finished it. Buildable from this page alone. **A**
- **06 Feeding:** Finished it. Schedule, prey size, thawing, freezer safety, all actionable. **B+**
- **07 Enrichment:** Finished it. The priority order is the most usable list in the set. **A**
- **08 Legal:** Finished it. Found my situation in one table with the reason behind it. **A**
- **09 vs Boa:** Finished it. Decision content only, and one number is wrong. **C+**
- **10 vs Corn:** Finished it. Useful humidity and lifespan contrast, one claim contradicts the care pages. **B**

## 2. Hub and encyclopedia

The hub earns its place completely. It is not a summary, it is a router: every line is a number plus the page that owns it, so I never had to guess where to go. The emergency card and buy list are the two things I would actually print.

The encyclopedia does not repeat the deep dives, but it barely earns a click either. Wild diet and range are the only things nowhere else, and nothing on it changes what I do.

Hub versus deep dive disagreements: none. I checked the enclosure, temperatures, humidity, substrate, feeding schedule, prey size, thawing, handling frequency, and budget lines against their source pages and every figure matches, including the wording. That is rarer than it should be.

## 3. The set as a whole

Yes. After these I could set up the enclosure, buy the right animal, feed it correctly, spot the five things that mean a vet, and know what a year costs. That is a genuinely complete package.

Questions raised on one page and answered on another without saying so:

- Health guide: "raise the enclosure temperature and check humidity immediately." It never gives the target numbers; the tank setup page has them and is not linked.
- Health guide: "weight loss in a snake that's still eating normally." How I would notice is in the sidebar's Sexing, Growth, and Body Condition guide.
- Feeding guide: "Breeding season (Oct-March): Males especially go off food." The brumation guide explains that and is not linked.
- Tank setup: "Paper towels work fine temporarily, for quarantine setups, for example." Nothing tells me what quarantine is; the quarantine guide is sidebar-only.
- Cost guide: "Initial vet exam $50 - $150." Why that first visit matters, the fecal exam, is in the health guide, unlinked. The cost guide links no other ball python page at all.

## 4. Overlap and conflict across the deep dives

Read twice, but usefully: the humidity range and the thermostat rule appear on four pages each. That is fine; both are the things that kill snakes. Read twice with no payoff: the hunger strike explanation appears nearly word for word in the health guide, the feeding guide, the hub FAQ, and both comparisons.

Real conflicts:

**Enclosure size.** Tank setup: "The current standard for an adult is a 4x2x2 ft (48x24x24 inches, roughly 120 gallons...)". Boa comparison: "Adult enclosure | 40-50 gallon range" and "most adults settle in at 3 to 5 feet and stay comfortable in roughly a 50-gallon enclosure for the rest of their life." The cost FAQ adds a third: "A 40-gallon glass minimum runs $70 to $200." That is a 3x difference in the biggest purchase I make.

**Escape risk.** Handling guide: "They're skilled escape artists. Always use a secure, locking, front-opening enclosure." Corn comparison: "Escape risk | Low - calmer, less driven."

**Thawing water.** Feeding guide, early: "Thaw in warm (not hot) water or a bag submerged in warm water." Same page, later: "seal it in a bag and submerge it in cool to lukewarm water."

**Post-feed wait.** Handling guide and hub: "48 to 72 hours." Feeding FAQ: "wait at least 48 hours."

**Quarantine length.** Hub: "quarantine periods of 3 to 6 months." Health guide: "quarantining any new snake for several weeks to months."

## 5. One link per page

- **Hub:** none needed, it is all links.
- **Encyclopedia:** "Adult Size: 3-5 feet (90-150 cm)" should link to the tank setup guide.
- **Cost:** "PVC costs more than glass but holds humidity far better" should link to the tank setup guide.
- **Handling:** "Ball pythons also carry Salmonella like most reptiles, so wash your hands before and after handling" should link to the Salmonella and hygiene guide.
- **Health:** "raise the enclosure temperature and check humidity immediately" should link to the tank setup guide.
- **Tank setup:** "Paper towels work fine temporarily, for quarantine setups, for example" should link to the quarantine guide.
- **Feeding:** "Breeding season (Oct-March): Males especially go off food during this period" should link to the brumation guide.
- **Enrichment:** "A dish the snake can fully enter supports shedding" should link to How Snakes Actually Shed.
- **Legal:** none needed.
- **vs Boa:** "stay comfortable in roughly a 50-gallon enclosure for the rest of their life" should link to the tank setup guide, after the number is fixed.
- **vs Corn:** "Ball pythons are calmer and less motivated to search for a way out" should link to the handling guide.

## 6. Trust

What made me doubt them: the enclosure conflict, because the comparison pages read like they were written against an older standard the care pages have since replaced, and nobody went back. Also the feeding page contradicting itself on thaw water within 300 words.

What convinced me a keeper wrote this: "Add sturdy, well-anchored branches too, braced firmly enough that a snake can push against one without it shifting, and they will use them." Nobody writes "push against one without it shifting" without having watched a heavy snake pull a branch down.

## 7. Set grade: B+

The care spine is excellent and internally consistent; the comparison pages and one cost FAQ drag it down with stale numbers a new buyer would act on.

First two changes:
1. Fix the enclosure number everywhere. Make 4x2x2 the only figure on the site and delete the 40-gallon and 50-gallon lines.
2. Add the seven in-body links from question 5, starting with health to tank setup and feeding to brumation.

## Not covered anywhere

- How often to spot clean, disinfect, and do a full substrate change. Only the cost table's "every 4-8 weeks" hints at it.
- How to choose a healthy animal and where to buy it: breeder, expo, or pet store, and what to check before paying.
- How to find a reptile-experienced vet, which the hub tells me to do "before you need one."
- When to offer the first meal after bringing the snake home. Quarantine covers isolation, not the feeding restart.
- What to do if the snake gets out of the enclosure and into the room.

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
- **Leopard gecko:** egg-binding prevention or setup for gravid females
  (a nesting box, warning signs before it becomes an emergency). Not in
  the health guide or any shared reptile guide.
- **Leopard gecko:** brumation-specific temperature targets or expected
  duration. Named as a cause of appetite loss in the feeding guide, but
  no page, species-specific or shared, gives numbers for managing it.
- **Goldfish:** how to pick a healthy goldfish or spot a "feeder" goldfish
  at the store. The hub says to avoid them, but no page in the set, and
  nothing in the Health and More list, explains how to tell.
- **Goldfish:** medication names and doses for ich, fin rot, dropsy,
  ulcers, popeye, or fungal infections. Only anchor worm and flukes get a
  real drug and dose in the health issues guide; the shared quarantine
  and hospital tank guide covers salt, carbon, and aeration rules
  generally, not disease-specific treatment.
- **Goldfish:** acclimating a new fish to the tank (drip acclimation,
  temperature matching before release). No page in the set or the
  Health and More list explains it; only how to net and carry a fish
  is covered.
- **Goldfish:** breeding and spawning. Mentioned only as a cause of
  appetite loss in the feeding guide, with no guide anywhere explaining
  the process itself.
- **Axolotl:** what a vet visit actually costs. The cost guide prices the
  animal, the tank, and food, never a vet visit, and no shared guide
  covers it either.
- **Axolotl:** how to evaluate a seller or pick a healthy axolotl at the
  time of purchase. Not covered anywhere in the set or the Health and
  More list.

- **Ball python:** how to choose a seller and assess a healthy animal
  before buying.
- **Ball python:** routine cleaning cadence for an established enclosure
  and what disinfectant is safe. The shared quarantine guide covers
  end-of-quarantine disinfection only.
- **Ball python:** how to find and vet a qualified reptile veterinarian
  before you need one.
- **Ball python:** whether specific morphs carry health problems, given
  that the cost guide prices them by genetics.
- **Ball python (second pass):** when to offer the first meal after
  bringing the snake home. The shared quarantine guide covers isolation,
  not the feeding restart.
- **Ball python (second pass):** what to do if the snake gets out of the
  enclosure and into the room.
- **Betta fish:** how to pick a healthy betta at the store before buying.
- **Betta fish:** tank lighting or a day/night light schedule.
- **Betta fish:** whether snails, shrimp, or other tankmates are
  compatible.
- **Betta fish:** the actual target temperature for treating ich once
  it's diagnosed (the health issues guide names warming the tank but
  never states the target).
- **Betta fish (second pass):** tank lighting or a photoperiod schedule.
- **Betta fish (second pass):** tankmate compatibility (snails, shrimp,
  corydoras) for a single male betta.
- **Betta fish (second pass):** how to actually set up and stock a
  sorority tank (the hub and enrichment guide both mention one is
  possible, neither says how).
- **Crested gecko:** how to sex a crested gecko (relevant since males
  can't be housed together, and no page explains how to tell).
- **Crested gecko:** what to do about a solitary female laying
  infertile eggs, including whether a lay box is needed.
- **Crested gecko:** how to choose a healthy individual at purchase.
- **Crested gecko (second pass):** hatchling grow-out enclosure
  dimensions (only "smaller" is given anywhere in the set).
- **Crested gecko (second pass):** safe disinfectants or cleaning
  products for the enclosure during substrate changes.
- **Guinea pig:** how to introduce and bond two guinea pigs (the hub
  says adopting a pair from the start beats introducing one later, but
  never explains introductions).
- **Guinea pig:** spay or neuter guidance and cost for a mixed-sex
  pair.
- **Guinea pig:** litter training method (only "a litter corner" is
  named anywhere in the set).
- **Guinea pig (second pass):** breeding and gestation basics (heat
  cycle, gestation length, litter size), despite pregnancy toxemia and
  pregnant-sow vitamin C needs being mentioned twice in the set.
- **Hamster:** how long to leave a new hamster alone before first
  handling (the hub just says "once settled").
- **Hamster:** cage cleaning frequency or schedule.
- **Hamster:** what "hamster-proofing" a free-roam space concretely
  requires.
- **Russian tortoise:** a calcium and multivitamin dusting schedule
  (both are on the buy list with no application frequency attached).
- **Russian tortoise:** a proactive hydration routine such as regular
  soaking, distinct from reading urates after dehydration has already
  happened.
- **Hamster (second pass):** how to sex a hamster before pairing
  dwarfs (not on the Health and More list either).
- **Russian tortoise (second pass):** feeding portions and frequency
  (how much hay and weeds, how often); neither the tank setup guide's
  Diet Basics nor the shared safe plants guide states amounts.
- **Russian tortoise (second pass):** hatchling and juvenile-specific
  husbandry differences (humidity, UVB, feeding) are never addressed.

## Hamster (2026-09-08, second pass)

One Sonnet agent, same ten pages re-extracted after the first-pass
fixes, about 95k tokens. Full agent output below, unedited.

---

# Hamster Care Set Review

## 1. Page by page

- **00 Hub:** Finish it, act on it immediately (buy list, emergency card). Grade A-.
- **01 Encyclopedia:** Finish it for the Aleppo-to-pet-store history, but nothing actionable. Grade B.
- **02 Cost guide:** Finish it, exact dollar ranges to budget against. Grade A.
- **03 Handling guide:** Finish it, the scoop-from-below technique and species warning are exactly what I needed before touching one. Grade A.
- **04 Health guide:** Finish it, wet tail alone justifies reading before day one. Grade A.
- **05 Tank setup guide:** Finish it, the size/bedding/wheel numbers are the whole shopping list. Grade A-.
- **06 Feeding guide:** Finish it, though the "pick one schedule" shrug on free-feeding vs measured feeding leaves me to guess. Grade B+.
- **07 Enrichment guide:** Finish it, the bedding study is the most convincing thing in the whole set. Grade A.
- **08 Legal guide:** Skimmable unless you live in Hawaii or keep a dwarf in Alaska/Wyoming. Grade B+.
- **09 vs. Guinea Pig guide:** Finish it if still deciding, but its own numbers disagree with the rest of the set (below). Grade C+.

## 2. Do the hub and encyclopedia earn their place?

The encyclopedia is worth keeping separate: it's the only place with the 1930 founder-litter story and the 1839-to-1930 research gap, nothing a deep dive repeats. The hub earns its place too, it's the only page that compresses seven articles into one first-week checklist.

But the hub disagrees with a deep dive. The hub and the enclosure guide both give the enclosure as "roughly 700 to 775 square inches of unbroken floor for a Syrian, around 600 for dwarf species." The vs. guinea pig comparison table instead says "Minimum space: 450+ sq in cage" and its body claims "a hamster's whole world can fit in 450 to 800 square inches." A reader following the hub's buy list would size a cage nearly double what the comparison table implies is the floor. Nothing on either page flags the gap.

## 3. Could I actually do this?

Yes, mostly. Between the hub, enclosure guide, feeding guide, and health guide I could set up, feed, and recognize the one true emergency (wet tail) without guessing. Three questions came up that no page answers, and no page admits it should:

- The handling guide tells me how to pick up a hamster, but not how many days to leave a brand-new hamster alone in its cage before the first handling attempt, even though the health guide names "transport" and "stress" as wet-tail triggers, which makes this a safety question, not just a comfort one.
- The hub's FAQ says dwarf same-sex pairs must be "introduced young," implying I need to know the hamsters' sexes, but nothing tells me how to sex a hamster.
- No page gives a routine cage-cleaning schedule (spot-clean vs full change), despite bedding cost being called out explicitly in the cost guide.

## 4. Overlap and conflict across deep dives

Read twice, consistently: Syrian solitary housing (hub, handling, enrichment, vs. guinea pig all agree, no conflict), temperature thresholds of 65-75°F comfortable, under 60°F torpor, over 80°F heat stress (hub, tank setup, feeding all match exactly), and wet tail's 24-to-48-hour fatality window (hub, cost, health, feeding all match).

One real conflict beyond the space issue above: lifespan. The cost guide and hub cite a veterinary study's "median age at death of just 1.75 years." The vs. guinea pig guide instead states flatly "Lifespan: 2-3 years" and "a hamster typically lives 2 to 3 years," never mentioning the 1.75-year median or the shorter dwarf range the rest of the set uses.

## 5. One link per page

- 00 Hub: "Some dwarf species (Campbell's, Winter White) can occasionally be kept in same-sex pairs introduced young" should link to the handling guide's species breakdown.
- 01 Encyclopedia: needs none, it's origin material with nowhere to send you.
- 02 Cost: "Wet tail specifically is a same-day emergency" should link to the health guide.
- 03 Handling: "Reaching into the cage during the day while your hamster is deeply asleep is one of the single most common ways new owners get bitten" should link to the tank setup guide's temperature/light section on nocturnal cycles.
- 04 Health: "Sugary treats, honey sticks, and fruit-heavy diets are the typical culprits" should link to the feeding guide (it links "the diet base" elsewhere but not this sentence).
- 05 Tank setup: needs none, it already links the enrichment study directly where it's raised.
- 06 Feeding: "12 to 24 hours...warrants a vet call" should link to the health guide's wet tail section.
- 07 Enrichment: needs none, well linked already.
- 08 Legal: "if you keep dwarf hamsters rather than a Syrian" should link to the handling guide's species section.
- 09 vs. Guinea Pig: "Minimum space: 450+ sq in cage" should link to the enclosure guide, which would have caught the number mismatch.

## 6. Trust

The Oregon legal entry, admitting the state "appears to have exempted the wrong hamster" rather than papering over an ambiguous statute, reads like someone who actually checked the primary source instead of aggregating other sites. The line that most convinced me a keeper wrote this: "some hamsters can go 3 to 4 days relying on a pre-provisioned hoard," a specific, slightly surprising claim that only comes from having watched a hamster do exactly that.

## 7. Overall grade: B+

The husbandry content is rigorous and internally consistent almost everywhere; the two number conflicts above are the only real dents. First changes: fix the 450 sq in vs 700-775 sq in enclosure mismatch in the vs. guinea pig guide, and reconcile the 1.75-year median with the flat "2-3 years" claim there.

## Not covered anywhere

- How long to leave a newly-arrived hamster undisturbed before first handling.
- How to sex a hamster before pairing dwarfs. Not on the Health and More list either.
- Nail trimming for hamsters specifically: the shared grooming guide's own summary names only rabbits.
- Carrier and vet-travel specifics for hamsters: the shared vet-transport guide's summary names only "a rabbit or guinea pig."
- Routine cage-cleaning frequency (spot-clean vs full change).

## Russian tortoise (2026-09-08, second pass)

One Sonnet agent, same eight pages re-extracted after the first-pass
fixes, about 97k tokens. Full agent output below, unedited.

---

# Russian Tortoise Content Review

## 1. Page by page

- 00 Hub: Would finish it. Actionable emergency card and buy list. Grade A.
- 01 Encyclopedia: Would finish it, adds range and CITES context nothing else covers. Grade B+.
- 02 Cost guide: Would finish it, real numbers and a clear buy/don't-buy table. Grade A.
- 03 Handling guide: Would finish it, short but says what it needs to. Grade B+.
- 04 Health issues guide: Would finish it, cited studies, clear emergency signs. Grade A.
- 05 Tank setup guide: Would finish it, most useful page in the set. Grade A.
- 06 Enrichment guide: Would finish it, practical and specific. Grade A-.
- 07 Legal guide: Would finish it, unusually well sourced for a legal page. Grade A.

## 2. Hub and encyclopedia

Neither is filler. The hub is a router that pulls its numbers straight from the deep dives, so it does not compete with them, it previews them. The encyclopedia earns its place with things no deep dive covers: scientific name, CITES Appendix II status, the wild-caught-versus-captive-bred trade history, and a wild lifespan figure.

That last item is where they disagree. The encyclopedia says "Wild Lifespan: 40-80 years." The cost guide (and the hub, copying it) says "40 years or more is typical, with some individuals reaching 50-plus." Those are two different upper bounds for the same species, one unsourced and 60% higher than the other, and nothing in the set explains whether "wild" and "well-kept pet" lifespans are actually meant to differ that much, or whether one number is just wrong.

## 3. The set as a whole

Setup, buying, and disease recognition are covered well enough to act on immediately: enclosure size and disagreement between sources, temperature, humidity, substrate, UVB spec, the full buy list, and the emergency card all line up with each other. Diet is thin but not empty: the tank setup guide's Diet Basics gives the staple (hay plus wild weeds, no high-oxalate greens, minimal fruit) and points to the safe-plants guide for the full list. That is adequate for "what to feed," but it never says how much or how often, and neither does anything else in the set.

Two things a page raises without saying where the answer lives: the tank setup guide says "House alone, or with caution, two females together, but not multiple males," but the handling guide, which is otherwise the place for cohabitation questions, only discusses male aggression and never mentions females can cohabit at all. And the health guide's Hexamita section tells you to watch for "watery, jelly-like urine," which only makes sense if you already know what normal urine looks like, a question the reptile stool and urates guide answers, credited by a link right there, so this one is actually handled well rather than left hanging.

## 4. Overlap and conflict across the deep dives

Read twice, consistently: the 50/50 topsoil-coconut-coir substrate mix, the UVI target of 3.0 to 4.0, and the "better climber than it looks" line, which appears in the hub, the handling guide, the tank setup guide, and the enrichment guide.

The sulcata comparison is copied almost sentence for sentence into two separate articles. Cost guide: "Sulcatas grow enormous and need real outdoor space within a few years." Handling guide: "The sulcata is a genuine giant that must have outdoor space as it grows and simply cannot be kept indoors long-term." Same claim, same conclusion, no numbers disagree, but it reads like a template swapped between two pages rather than two people writing independently.

No hard numeric conflicts turned up between the deep dives themselves; the lifespan mismatch above is the one that matters, and it sits between the encyclopedia and a deep dive, not between two deep dives.

## 5. One link per page

- Hub: "Adult size: 5 to 10 inches." has no link and should point to the encyclopedia, since that page is where the figure actually comes from.
- Encyclopedia: no sentence needs a link it doesn't already have.
- Cost guide: "our legal guide has the full state-by-state picture" already links, but stops short, it should point specifically to the four-inch-rule section of the legal guide rather than the guide generally.
- Handling guide: "Male Russian tortoises are territorial and will ram and bully other tortoises" should link to the tank setup guide's cohabitation line about housing females together.
- Health guide: needs none, its cross-links are already the strongest in the set.
- Tank setup guide: "Fruit should be minimal to none" should link to the Diet Basics claim back to the safe-plants guide's portion guidance, if that guide has any.
- Enrichment guide: needs none.
- Legal guide: "our interactive map of russian tortoise laws" already covers it well.

## 6. Trust

The lifespan mismatch and the copy-pasted sulcata paragraph both read as generated rather than lived-in. What convinced me otherwise: "An enclosure that is dry everywhere, with no damp retreat and no depth to dig into, is what produces a dehydrated, pyramided tortoise, and it is a more common failure in this species than an enclosure that is too wet." That is a specific failure mode, stated as a ranked frequency, the kind of detail that comes from having actually seen it happen.

## 7. Grade and two fixes

Grade: A-. Deep, sourced, internally consistent almost everywhere, undercut by one real numeric conflict and a missing feeding schedule.

First fix: resolve or source the 40-80 year wild lifespan figure against the 40-to-50-plus figure used everywhere else. Second fix: add feeding amounts and frequency, not just what to feed, either into Diet Basics or the safe-plants guide.

## Not covered anywhere

- Feeding portions and frequency (how much hay and weeds, how often) are absent from Diet Basics and the safe-plants guide's own summary never promises them either.
- A soaking or drinking-water routine, distinct from reading hydration in urates, has no guide anywhere in the sidebar.
- Hatchling and juvenile-specific husbandry differences (humidity, UVB, feeding) are never addressed; the brumation guide's weigh-ins cover only that one context, not general growth tracking.

## Russian tortoise (2026-09-08)

One Sonnet agent, eight pages (hub, encyclopedia, cost, handling,
health issues, tank setup, enrichment, legal; no dedicated feeding
guide for this species), about 97k tokens. Full agent output below,
unedited.

---

# Russian Tortoise Care Set: Review

## 1. Page by page

- 00 Care guide hub: Finish it, fully actionable, numbers and buy list up front. Grade A.
- 01 Encyclopedia: Finish it, low action but real complementary content (range, CITES, wild-caught risk). Grade B+.
- 02 Cost guide: Finish it, actionable, but its own FAQ contradicts its own body. Grade B-.
- 03 Handling guide: Short, finish it, actionable (table not aquarium, no two males). Grade B+.
- 04 Health issues guide: Finish it, sourced, actionable, the best page in the set. Grade A.
- 05 Enclosure setup guide: Finish it, the core how-to page, sourced and specific. Grade A.
- 06 Enrichment guide: Finish it, useful and concrete, clearly secondary to setup and health. Grade B+.
- 07 Legal guide: Finish it, genuinely surprising and well sourced (four-inch rule, Colorado, Hawaii). Grade A.

## 2. Hub and encyclopedia

Both earn their place. The hub is a compressed index with numbers pulled from each deep dive, not a rewrite. The encyclopedia covers taxonomy, wild range, and the wild-caught trade, none of which the deep dives touch. Neither repeats a deep dive's actual content.

One disagreement, but it is inside the cost guide, not between hub and deep dive. The hub says "$372 to $775" to set up and "$365 to $715 a year," matching the cost guide's own body and table. But the cost guide's FAQ says setup is "Roughly $400 to $600 total" and yearly cost is "Roughly $500 to $650 a year." Three numbers, one topic, one article.

## 3. The set as a whole

Yes, mostly. Buying (cost, legal), setup (size, temperature, humidity, substrate, UVB), and health (MBD, respiratory infection, shell rot, pyramiding, parasites, kidney infection, bladder stones) are all covered with specifics I could act on. Diet is covered adequately across the tank setup guide's "Diet Basics" and the shared weeds guide, per the note.

Two things a new owner needs are missing set-wide: how often to dust food with calcium and multivitamin (both are on the buy list with no schedule attached), and a proactive hydration routine (soaking), as opposed to just reading urates to catch dehydration after the fact.

Questions raised but answered elsewhere without the text saying so:
- The handling guide says "House males separately from each other" and the tank setup guide allows "two females together" with caution, but neither links to the shared "Tortoise Sexing" guide that would let a new owner actually tell the sexes apart.
- The tank setup guide's brumation section says "a pre-brumation vet health check is worth doing first" but never points to the shared "Tortoise Brumation" guide, which is where the actual protocol (temperatures, weigh-ins, do-not list) lives.
- The cost guide raises the four-inch rule in one sentence but the full explanation is three pages away in the legal guide, linked elsewhere in the same article for a different claim.

## 4. Overlap and conflict across the deep dives

Read twice, consistently: substrate (50/50 topsoil/coconut coir, deep enough to burrow) appears in both the tank setup and enrichment guides; the sulcata comparison ("stays small, lives indoors its whole life") appears nearly verbatim in the cost guide and handling guide; diet staples (dandelion, plantain, clover) appear in both the tank setup and enrichment guides. None of these conflict, they just repeat.

The only real numeric conflict is internal to the cost guide, described above: "Upfront Setup: $372 to $775" (body) versus "Roughly $400 to $600 total" (FAQ), and "Ongoing Costs: $365 to $715 a Year" (body) versus "Roughly $500 to $650 a year" (FAQ).

## 5. One link per page

- Hub: "They need an outdoor enclosure with walls buried 12 inches or more underground" should link to the Outdoor Reptile Housing guide.
- Encyclopedia: "wild-caught tortoises arrive stressed and carrying parasites and die at a higher rate than captive-bred ones" should link to the health guide's Parasites section.
- Cost guide: "A federal rule bars selling any turtle with a shell under four inches commercially" should link straight to the legal guide's four-inch rule section.
- Handling guide: "House males separately from each other" should link to the Tortoise Sexing guide.
- Health guide: "treat consistent UVB exposure plus a calcium source like cuttlebone as essential" should link to the enclosure guide's Lighting section.
- Enclosure guide: "a pre-brumation vet health check is worth doing first" should link to the Tortoise Brumation guide.
- Enrichment guide: "placing dandelion, plantain, clover, endive, or other safe weeds in multiple spots" should link to the Safe Weeds guide (the tank setup guide does this, enrichment doesn't).
- Legal guide: "they live long enough that rehoming is a real possibility rather than a hypothetical" should link to the Succession Planning guide.

## 6. Trust

Doubt: the cost guide contradicting its own FAQ is the thing that would make me stop trusting the numbers on that page specifically. A duplicated link entry in the health guide's link list (the stool guide linked twice) suggests a production seam, not a content problem, but it's a tell.

Most convincing sentence: "The wide top end is not padding. Three of those lines, the dimming thermostat, the infrared temperature gun and the gram scale, are the ones most first setups leave out, and they are exactly the equipment that prevents the thermal burns and the slow weight loss."

## 7. Overall grade

B+. Deep, sourced, mostly consistent, let down by one article contradicting itself and by missing a few cheap cross-links between pages that clearly needed each other.

Two changes first: fix the cost guide's FAQ numbers to match its own body and the hub, and add the sexing and brumation-protocol links identified above.

## Not covered anywhere

- How often to dust food with calcium and multivitamin (both are purchase items with no application schedule, and no page in the Health and More list covers it either).
- A proactive hydration routine such as regular soaking, as distinct from reading urates to catch dehydration after it has already happened.

## Hamster (2026-09-08)

One Sonnet agent, ten pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal, vs guinea pig), about
102k tokens. Full agent output below, unedited.

---

# Hamster Care Set Review

## 1. Page by page

- 00 Hub: B+. Finish it. The checklist and cost tables are immediately actionable, but two of its numbers disagree with the deep dives that are supposed to back it up.
- 01 Encyclopedia: B. Finish it. Good history (the Aleppo founder female, the 91 year gap), nothing to act on beyond the scientific name.
- 02 Cost guide: B. Finish it, though two tables read "[table could not be parsed]" and never render, which is a real gap in a page whose whole job is numbers.
- 03 Handling guide: A-. Finish it. The cupping technique and the Syrian-versus-dwarf temperament split are usable the day the hamster comes home.
- 04 Health issues: A. Finish it. The wet tail section, with real mortality percentages and a same-day-vet rule, is the single most useful paragraph in the set.
- 05 Tank setup: B. Finish it. Specific and confident, but contradicts the hub on cage size, wheel size, and the torpor temperature.
- 06 Feeding: A-. Finish it. Rare honesty about a real disagreement in feeding schedules, plus firm numbers for treats and a clear toxic list.
- 07 Enrichment: A. Finish it. One actual study with three numbers that reorders what you spend money on.
- 08 Legal: B+. Finish it. Answers the only question most readers have (Hawaii) in the first section; the state-by-state table is extra credit.
- 09 vs Guinea Pig: B+. Finish it. The comparison table is genuinely useful before you commit to either animal.

## 2. Hub and encyclopedia

The encyclopedia earns its place, it's the only page with origin, wild diet, and history, none of which the deep dives repeat. The hub is mostly a compressed rehash of the deep dives, which is expected of a hub, but it disagrees with them on two load-bearing numbers.

Cage size. Hub: "450 square inches... with 600 to 800+ square inches strongly preferred." Tank setup guide: "Current welfare guidance calls for... roughly 700 to 775 square inches for a Syrian, around 600 square inches for dwarf species." The hub's "preferred" range and the tank guide's stated minimum overlap, but the hub's actual floor (450) is well below what the tank guide calls current guidance.

Wheel size. Hub: "11 to 12 inches in diameter is the current minimum recommendation" for a Syrian. Tank setup guide: "Syrians need at least an 8 to 11 inch wheel." The hub's minimum is above the tank guide's maximum.

## 3. The set as a whole

Yes, mostly. Between these pages you could pick a species, size a cage, pick bedding and a wheel, feed it correctly, and recognize wet tail fast enough to save the animal's life. What's missing: how long to leave a new hamster alone before first handling (the hub just says "once settled"), how often to actually clean the cage, and what "hamster-proofed" concretely means for free-roam time.

Unstated cross-references I noticed: the feeding guide names 65°F as the torpor threshold but never points to the tank setup guide's own temperature section, where the number is different. The cost guide cites the O'Neill study for lifespan but never sends the reader to the health guide, where the same study's wet tail percentages live. The handling guide flags dwarf species as harder to handle but doesn't point forward to the tank setup guide's dwarf-specific cage and wheel numbers.

## 4. Overlap and conflict among the deep dives

Wet tail is covered in the cost, health, and feeding guides, consistently: 24 to 48 hours to fatal, same-day vet. Solitary Syrian housing is repeated in handling, enrichment, and the guinea pig comparison, consistently. Bedding depth actually agrees well: the enrichment guide's study gives 40 and 80 cm, and the tank setup guide's "15 to 30 inches" converts to almost exactly that.

The torpor temperature does not agree. Tank setup guide: "Below 60°F risks torpor." Feeding guide: "Below roughly 65°F, hamsters can enter a hibernation-like state." That's a 5 degree gap on a warning sign that can look like the animal has died.

Cheek pouch capacity is also inconsistent. Hub: pouches hold "a volume close to the size of the hamster's own body." Feeding guide: pouches hold "roughly a fifth of its own body weight." Those are very different pictures of the same trivia fact.

## 5. One link per page

- 00 Hub: "Any hamster showing diarrhea and lethargy needs an exotic vet the same day" should link to the Health Issues guide.
- 01 Encyclopedia: "a trait that carries directly into captivity and is the reason Syrians must be housed alone as adults" should link to the Handling guide.
- 02 Cost: "a median age at death of just 1.75 years" should link to the Health Issues guide, which cites the same study.
- 03 Handling: "often better enjoyed as an observation pet than a hold-and-pet one" should link to the Tank Setup guide.
- 04 Health: "Sticking with a plain, formulated hamster pellet or lab block as the diet base" should link to the Feeding guide.
- 05 Tank setup: "bedding depths of roughly 15 to 30 inches enhance welfare" should link to the Enrichment guide's study.
- 06 Feeding: "Below roughly 65°F, hamsters can enter a hibernation-like state" should link to the Tank Setup guide's temperature section.
- 07 Enrichment: "A 10 inch silent wheel lets a Syrian run with a flat back" should link to the Tank Setup guide's wheel section.
- 08 Legal: "whether your state's rule names Phodopus or only Mesocricetus auratus" should link to the Handling guide.
- 09 vs Guinea Pig: "A hamster's 2 to 3 year lifespan is short enough that it's worth stating plainly" should link to the Cost guide.

## 6. Trust

Two broken tables in the cost guide, and three different torpor temperatures across three pages, are the kind of thing that makes me want a second source before trusting the numbers. What convinced me someone who actually keeps these animals wrote parts of this: "The caveat comes straight from the study: the hamsters on shallow bedding ran more. Heavy wheel use is not automatically a sign of a happy animal, and it can accompany the same setup that produces bar-chewing." That's a specific, counterintuitive, correct piece of husbandry knowledge, not filler.

## 7. Overall grade

B. Well-sourced and genuinely actionable on health and enrichment, undercut by the hub disagreeing with its own deep dives on the two numbers (cage size, wheel size) a new owner needs most. First fixes: reconcile the cage/wheel/torpor numbers between the hub and the deep dives into one consistent set, and fix the two unparsed tables in the cost guide.

## Not covered anywhere

- How long to leave a new hamster alone before first handling.
- Cage cleaning frequency or schedule.
- What hamster-proofing a free-roam space actually requires in practice.

## Guinea pig (2026-09-08, second pass)

One Sonnet agent, same nine pages re-extracted after the first-pass
fixes, about 90k tokens. Full agent output below, unedited.

---

# Guinea Pig Care Set Review

## 1. Page by page

- 00 Hub: Finish it, yes. Numbers to act on immediately. Grade A.
- 01 Encyclopedia: Finish it, but nothing to act on beyond size and lifespan already in the hub. Grade C.
- 02 Cost guide: Finish it, clear numbers for budgeting. Grade A-.
- 03 Handling guide: Finish it, the two-hand pickup is genuinely useful. Grade A.
- 04 Health issues guide: Finish it, the mites-versus-cysts table is the most useful single thing in the set. Grade A.
- 05 Tank setup guide: Finish it, but a diet table failed to render, so I'm missing whatever it held. Grade B.
- 06 Feeding guide: Finish it, but its own FAQ admits two of its sources disagree on alfalfa. Grade A-.
- 07 Enrichment guide: Finish it, practical and short. Grade A-.
- 08 Scurvy guide: Finish it, the best-sourced page in the set. Grade A.

## 2. Hub and encyclopedia

The hub earns its place: it's a router with the first-week numbers pulled straight from each deep dive, not a rewrite of them. The encyclopedia does not earn its place next to the deep dives. Its only load-bearing facts, size and lifespan, are already on the hub, and its history section (Andes, 1570s Europe, lab animal by the 1700s) has no home elsewhere, so it's neither redundant nor useful for setup.

No hub-versus-deep-dive numbers disagree. Enclosure size, temperature, vitamin C, and the "call a vet" clock all match word for word between the hub and their source articles.

## 3. Could I actually do this after reading all nine

Yes for setup, feeding, and vitamin C. Yes for handling and recognizing an emergency. Not fully for two things the hub raises and never resolves: nail trims (hub says trim every 6-8 weeks with styptic powder ready, but the actual how-to lives in a shared guide not in this set) and vet visits (hub says don't fast a guinea pig like a dog, bring the cage mate, but again the mechanics are one click away, not here).

A question answered elsewhere without the text saying so: the handling guide says "Most guinea pigs need only minimal restraint for basic handling and exams" but never links to the vet-visit guide that actually covers exams and carriers, even though the hub links there for a different reason.

Still missing after reading everything, including the shared list: how to introduce two unfamiliar guinea pigs (the hub's FAQ says a pair from day one is easier than introducing one later, but never explains how to do the harder version), and anything on breeding or gestation, despite pregnancy toxemia and pregnant-sow vitamin C needs being mentioned twice.

## 4. Overlap and conflicts across deep dives

Read twice or more, consistently: the vitamin C dosing numbers (hub, tank setup, scurvy guide all give the same Merck/PetMD figures), bell pepper as the top source (tank setup and scurvy guide), and the 90-day pellet freshness window (tank setup and feeding guide). None of these disagree.

One real conflict, and the feeding guide flags it against itself. The tank setup guide's FAQ states alfalfa for adults is "too high in calcium, appropriate only for very young guinea pigs," a flat no. The feeding guide's own FAQ answer then says: "One source says avoid it outright for healthy adults, another allows it as an occasional treat, but grass hay... should be the adult staple." So the set contains two positions on adult alfalfa and admits it in one spot but not the other.

## 5. One link per page

- 00 Hub: "Getting a Small Mammal to the Vet" is already linked from the vet-trips line, so it needs none.
- 01 Encyclopedia: none needed, it's pure background.
- 02 Cost guide: "Sick or emergency visits run $100 to $300 or more, and complex issues like GI stasis can push well past that" would benefit from linking GI stasis to the health issues guide instead of leaving that link only on the earlier mention.
- 03 Handling guide: "Most guinea pigs need only minimal restraint for basic handling and exams" should link to the small mammal vet guide.
- 04 Health issues guide: none needed, its own links are already thorough.
- 05 Tank setup guide: "Heatstroke becomes a real risk above 80°F" should link to the small mammal heat stress guide, the way the health issues guide does.
- 06 Feeding guide: none needed.
- 07 Enrichment guide: "A guinea pig that stays hidden constantly... is signaling that something in the current setup isn't working... an underlying health issue" should link to the health issues guide, not only the vet-visit guide.
- 08 Scurvy guide: none needed.

## 6. Trust

Nothing raised real doubt except the unrendered table on the tank setup page and the alfalfa contradiction above, both of which are honest gaps rather than fabrication; the feeding guide even names the disagreement instead of hiding it. The sentence that most convinced me an actual keeper wrote this: "A single hide in a shared space tends to become something one animal guards rather than something everyone can use." That's a specific, unglamorous detail nobody invents from a spec sheet.

## 7. Overall grade

A-. Deep, consistent, well-sourced, let down only by one internal contradiction and one broken table. First two fixes: resolve the alfalfa conflict into one answer, and repair the tank setup diet table.

## Not covered anywhere

- How to introduce two unfamiliar guinea pigs to each other.
- Breeding and gestation basics (heat cycle, gestation length, litter size).

## Guinea pig (2026-09-08)

One Sonnet agent, nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, scurvy), about 105k tokens.
Full agent output below, unedited.

---

# Guinea Pig Care Set Review

## 1. Page by page

- **00 Hub:** A. The checklist and cost tables read like a shopping list, and the FAQ answers real decisions (pairs, bedding, lifespan).
- **01 Encyclopedia:** B. Good background (Andean domestication, 1570s European remains) but nothing here changes what I'd do tomorrow.
- **02 Cost guide:** A. Real dollar ranges for setup, monthly, and vet costs, and it forces the "budget for two" point before you buy one animal.
- **03 Handling guide:** A. The side approach, two hand hold, and stay low rule are things I could do on day one.
- **04 Health issues:** A. The ovarian cyst versus mites table alone is worth bookmarking.
- **05 Tank/diet setup:** B. Good numbers, but the vegetable table failed to render, "[table could not be parsed]," so part of the actual diet content is missing.
- **06 Feeding:** A. The schedule, toxic list, and "why they stop eating" list are exactly what I'd act on.
- **07 Enrichment:** A. Hideout and foraging advice with a clear reason why, easy to implement same day.
- **08 Scurvy:** A. The per kilogram math and the stage table make this the most rigorous page in the set.

## 2. Hub and encyclopedia

The encyclopedia earns its place: it's the only page with domestication history and wild lifespan, covered nowhere else. The hub is more borderline: its Housing, Diet, Enrichment, and Health sections are a compressed rerun of the deep dives, but the checklist and combined cost table are genuinely new.

Two disagreements. On bedding, the hub says "Avoid cedar and pine shavings," while the tank setup guide says "Paper-based bedding, kiln-dried pine, or fleece liners all work well. Avoid cedar, raw pine, and sawdust." The hub bans pine outright; the deep dive says kiln-dried pine is fine and only raw pine is the problem. On cage size, the hub says "The minimum is 7.5 square feet of unobstructed floor space, the same whether it's one guinea pig or a pair," and recommends "at least 10.5 square feet for a pair," while the tank guide says "Minimum footprint is about 7.5 square feet for one guinea pig, and 10.5 square feet for a pair." One treats 10.5 as a recommendation on top of a shared minimum, the other calls 10.5 the minimum for a pair. Cage cost is also slightly off between them: the hub's line is "$80 to $180," the cost guide's is "$100 to $140."

## 3. Could I actually keep one healthy

Yes, for the core loop: cage size, bedding, temperature range, unlimited hay plus pellets plus daily vegetables, vitamin C math, handling technique, and the short list of true emergencies. Missing: how to introduce two guinea pigs to each other (the hub says adopting a bonded pair beats introducing one later, but never explains introductions), whether or when to neuter a mixed sex pair, and litter training, only named as "a litter corner."

Two pages raise a question another page answers without saying so. Health issues (04) says a guinea pig that stops eating "needs urgent veterinary attention" with no time frame; feeding (06) has the actual figure, "8 to 12 hours without eating or producing droppings." Feeding (06) names "dental disease" as the top reason guinea pigs stop eating in one line; health issues (04) is where the signs (drooling, small droppings, molar spurs) actually live, and neither page links to the other on this point.

## 4. Overlap and conflict across deep dives

Read twice, nearly verbatim: the 65 to 79°F range and "the gap between the comfortable ceiling and the danger line is a single degree" appears in both the hub and the tank setup guide. The vitamin C mg/kg figures (Merck 10 to 25, PetMD 10, both giving 30 or more for growing, pregnant, or ill animals) repeat consistently across the tank setup and scurvy guides. Pellet freshness ("use within 90 days") repeats consistently across tank setup and feeding.

One real conflict, flagged by the set itself: the feeding guide's own FAQ on alfalfa for adults says "One source says avoid it outright for healthy adults, another allows it as an occasional treat." That's two sources disagreeing inside one answer, left unresolved.

## 5. One link per page

Hub and encyclopedia need none, both already link the full deep dive list. Cost guide: "complex issues like GI stasis can push well past that" should link to the health issues guide. Handling: "A well set up enclosure gives your guinea pig the secure home base" should link to the tank setup guide. Health issues: "needs urgent veterinary attention, not a wait-and-see approach" (GI stasis) should link to feeding, which has the 8 to 12 hour threshold. Tank setup: "Bell pepper is a particularly good vegetable choice" should link to feeding's full vegetable list, especially since this page's own table is broken. Feeding: "Dental disease. The single most commonly cited cause" should link to health issues' dental section. Enrichment: "develops repetitive bar-chewing is signaling that something in the current setup isn't working" should link to health issues, since those are also illness signs there. Scurvy: "Daily fresh vegetables, led by bell pepper, are the actual prevention here" should link to feeding's full rotation list.

## 6. Trust

What made me doubt them: a literal broken table, "[table could not be parsed]," sitting where the vegetable list should be in the tank setup guide. A production error, but it's the one spot the page looks unfinished. The sentence that most convinced me a real keeper wrote this: "a single hide in a shared space tends to become something one animal guards rather than something everyone can use." That's a specific, unglamorous behavioral detail no one invents without watching it happen.

## 7. Overall grade

B+. Deep and internally consistent on the numbers that matter, let down by one broken table and a few missing cross links. First two fixes: repair the vegetable table in the tank setup guide, and clarify whether the hub's annual cost table prices one guinea pig or a pair, since that same page insists on keeping pairs.

## Not covered anywhere

- How to introduce and bond two guinea pigs; only "adopt a pair from the start" is offered.
- Spay or neuter guidance and cost for a mixed sex pair.
- Litter training method, only "a litter corner" is named.
- Grooming needs specific to long haired breeds (Peruvian, Silkie, Abyssinian) named in the cost guide; the shared grooming guide's summary is written around rabbit fur risk, not guinea pig coat care.

## Crested gecko (2026-09-08, second pass)

One Sonnet agent, same nine pages re-extracted after the first-pass
fixes, about 93k tokens. Full agent output below, unedited.

---

# Crested Gecko Care Set Review

## 1. Page by page

- 00 Hub: Finish it, very actionable, a real command center. B+.
- 01 Encyclopedia: Finish it, mostly background not action, but the history section earns a read. B+.
- 02 Cost guide: Finish it, clear tables, budget numbers I can act on today. A-.
- 03 Handling guide: Finish it, gives me a real technique and a hard rule. B+.
- 04 Health issues: Finish it, this is the page I'd bookmark. A.
- 05 Tank setup: Finish it, but one number in it made me stop and reread. B.
- 06 Feeding guide: Finish it, honest about what's unsettled. A-.
- 07 Enrichment guide: Finish it, useful but the least urgent page. B+.
- 08 Humidity guide: Finish it, the most carefully sourced page in the set. A-.

## 2. Hub and encyclopedia

The hub earns its place: it's a router with real numbers pulled straight from each deep dive, useful as a first-week cheat sheet even though nearly every line duplicates a deep-dive FAQ almost word for word. The encyclopedia earns its place too, for different reasons: the rediscovery history (Seipp and Henkel, the Isle of Pines sighting, the founder-population detail) and the wild diet and conservation status appear nowhere else in the set.

One real disagreement: the hub and cost guide both give lifespan flatly as "15 to 20 years in captivity, with the earliest known captive individuals living into their 30s." The encyclopedia hedges the same number: "Wild Lifespan: Not documented (the widely quoted 10-20 years is a captive range; wild longevity for this species has not been studied)." So the encyclopedia's own aside calls the commonly cited range "10-20 years" in the same breath the hub and cost guide assert "15 to 20 years" as settled fact. Nobody sources either number.

## 3. Could I actually keep one after reading all of this

Mostly yes: enclosure, temperature, humidity, feeding schedule, handling timeline, and red-flag symptoms are all here and consistent with each other. Two real gaps remain. First, the tank setup guide says "never house two males together" and "house crested geckos singly or in carefully matched groups," and the feeding guide talks about gravid females laying eggs, but nothing anywhere explains how to sex a crested gecko or what "carefully matched" even means in practice. Second, gravidity is treated only as a reason a healthy female stops eating; there's no page on preparing an unmated female for egg-laying (a nesting substrate, what to do with infertile eggs), even though the set clearly expects this to happen to a solitary pet.

## 4. Overlap and conflict across the deep dives

Temperature, humidity numbers, and the rediscovery story are told three or four times each (hub, encyclopedia, cost guide, handling guide all repeat the 1994 rediscovery). No numbers actually clash between separate deep dives. But the tank setup guide contradicts itself internally: its table lists "Basking area (top of enclosure): 82-85°F (some sources: 72-75°F to be safe)." That's two different target zones sitting in one cell with no resolution, in an article that elsewhere calls 85°F "a hard ceiling with zero exceptions." I'd genuinely not know what number to aim for. The humidity guide does something similar but more honestly: it states its own target as "60 to 80%," then adds "PetMD's care sheet puts the ideal band at 70 to 80%," attributing the second number instead of just dropping it in unlabeled.

## 5. One link per page

- 00 Hub: needs none, it already links everything.
- 01 Encyclopedia: "Wild Diet: Fruit, nectar, pollen, and small invertebrates" should link to the feeding guide, since I immediately want to know how that becomes captive care.
- 02 Cost guide: "A hatchling can start smaller in a basic faunarium for around $20 before moving up" should link to the tank setup guide's grow-out section.
- 03 Handling guide: "house crested geckos singly or in carefully matched groups to avoid cagemate aggression" should link to the tank setup guide's housing rules.
- 04 Health issues: "feed a complete crested gecko diet powder (Pangea or Repashy are widely used)" should link to the feeding guide.
- 05 Tank setup: "Not strictly required, since a complete diet powder already supplies vitamin D3" should link to the feeding guide.
- 06 Feeding guide: "Shedding. Energy-intensive and uncomfortable, appetite commonly dips for a few days" should link to the shared shedding guide.
- 07 Enrichment guide: "Live insects offered once or twice a week bring out active hunting" should link to the feeding guide's insect schedule.
- 08 Humidity guide: "Screen tops release humidity quickly" should link to the tank setup guide's enclosure section.

## 6. Trust

The self-contradicting basking range in the tank setup guide is the one thing that made me doubt the set. So did the confident, unsourced "living into their 30s" claim repeated twice with nothing behind it. What convinced me a real keeper wrote parts of this: "one specific flavor, watermelon, is called out as having unusually high acceptance among fussy eaters." Nobody invents that detail; it reads like something learned by trial and error.

## 7. Grade and two fixes

Grade: B+. Deep, mostly consistent, undercut by one internal contradiction and a real gap in breeding-adjacent care. First fix: resolve the basking temperature cell in the tank setup guide to one number. Second fix: add a short section (or a shared-guide entry) on sexing and on caring for a gravid, unmated female.

## Not covered anywhere

- How to sex a crested gecko, needed to follow the "never house two males" rule.
- Care for a gravid, unmated female beyond "see a vet if egg-bound": no nesting setup or infertile-egg guidance.
- Dimensions for a hatchling grow-out enclosure (only "smaller" is given).
- Safe disinfectants or cleaning products for the enclosure during substrate changes.

## Crested gecko (2026-09-08)

One Sonnet agent, nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, humidity), about 97k tokens.
Full agent output below, unedited.

---

# Crested Gecko Care Set: A Reader's Review

## 1. Page by page

- Hub (00): I'd read the whole thing before buying anything. Buy list, cost tables, checklist, FAQ. Grade: B+.
- Encyclopedia (01): Thin but honest, including admitting wild lifespan isn't documented. Not much to act on. Grade: B.
- Cost guide (02): Detailed and useful, but its own FAQ contradicts its own body on monthly cost. Grade: B-.
- Handling guide (03): Specific ages, weights, times, and the tail warning up front. The most actionable page in the set. Grade: A-.
- Health issues (04): Good symptom lists and a "when to worry" section, but its cause for Floppy Tail Syndrome disagrees with the hub's. Grade: B.
- Tank setup (05): Strong on the temperature ceiling, but sets a basking target that touches the stated lethal limit and never mentions a thermostat despite that being the whole point of hitting a ceiling. Grade: B-.
- Feeding guide (06): The most trustworthy page in the set, it admits an open disagreement about raspberries instead of faking certainty. Grade: A-.
- Enrichment guide (07): Practical, consistent with tank setup, no red flags. Grade: A-.
- Humidity guide (08): The best-sourced page (PetMD, Zen Habitats, Merck), but it's cut off from the site's own navigation, no Deep Dive or Health and More list at all. Grade: A- for content, C for placement.

## 2. Hub and encyclopedia

The hub earns its place: it's the only page with the buy list, checklist, and full cost tables in one spot. The encyclopedia earns its place too, it's the only page that gives origin, wild diet, and honestly flags that wild lifespan "has not been studied," which nothing else in the set says.

They do disagree with a deep dive. On Floppy Tail Syndrome, the hub says it "is thought to result from insufficient calcium and phosphorus balance over time, causing changes in the pelvis and tail base." The health issues guide says it comes "typically from chronic upside-down resting against glass over time," and that it's "sometimes associated with calcium or pelvic issues" but "isn't diagnostic of it on its own." Those are two different root causes for the same condition.

## 3. The set as a whole

Yes, you could set up, feed, and handle a crested gecko competently from this set. What's missing: how to tell males from females (relevant since you're told never to house two males together), what to do about a solitary female laying infertile eggs, and how to pick a healthy individual at purchase.

Several questions get answered, just not where they're asked. The tank setup guide leans on a thermostat's whole job (never exceed 85°F) without once using the word "thermostat," that answer is on the shared Reptile Heating and Thermostats guide, unlinked. The handling guide mentions Salmonella in one line with no detail, the shared Salmonella guide has it. Health issues lists parasites and never mentions quarantining a new arrival, that's the shared Quarantine guide.

## 4. Overlap and conflict across the deep dives

I read the FTS cause conflict above, and the tail-loss fact (drop is permanent, "frogbutt" is fine) three times, in the hub, handling guide, and cost guide, consistently. Enclosure upgrade advice differs: the hub suggests "18x18x36" or 24x24x48"," the tank setup guide suggests "a 2x2x2 foot enclosure," a smaller and less tall step than the hub's own recommendation. And the cost guide contradicts itself: the body states "Ongoing Costs: $31 to $52 a Month," but its own FAQ says "Roughly $20 to $30 a month."

## 5. One link per page

- Hub: "Low-output UVB lighting (T5 HO 5% or a compact 5.0 bulb)... is now recommended" should point to T5 vs Compact UVB.
- Encyclopedia: "the widely quoted 10-20 years is a captive range" should point to the cost guide's lifespan section.
- Cost guide: "the earliest known captive individuals have lived well into their 30s" should point to the encyclopedia.
- Handling: "crested geckos can carry Salmonella" should point to the Salmonella guide.
- Health issues: "Weigh your gecko weekly" should point to Reading Reptile Stool, Urates, and Hydration, its natural companion check.
- Tank setup: "this is the detail that trips up owners coming from bearded dragons" should point to Reptile Heating and Thermostats.
- Feeding: "metabolic bone disease from inadequate calcium are all real medical causes" should point to the health issues guide.
- Enrichment: "A well-established bioactive enclosure... adds ongoing low-level stimulation" should point to tank setup's substrate section.
- Humidity: none needed, already the best-linked page in the set.

## 6. Trust

What made me doubt them: the cost guide contradicting its own FAQ, and the FTS cause disagreement, both read like nobody proofread across pages. What convinced me most that a real keeper wrote this: the feeding guide saying raspberries are "a real point of disagreement, some sources list them as a safe treat, others flag them as high-oxalate, worth knowing rather than presenting either way as settled."

## 7. Grade and two fixes

Grade: B. Individually strong pages, undermined by numbers that don't match each other and one orphaned article. Fix the cost guide's self-contradiction first. Second, wire the humidity guide into the Deep Dive list, it's better sourced than most pages that made the cut.

## Not covered anywhere

- How to tell a male crested gecko from a female.
- What to do about a solitary female laying infertile eggs, including a lay box.
- How to choose a healthy individual at purchase.

## Betta fish (2026-09-08, second pass)

One Sonnet agent, same nine pages re-extracted after the first-pass
fixes, about 98k tokens. Full agent output below, unedited.

---

# Betta Fish Content Review

**1. Page by page**

- 00 Hub: Finish it, act on every bullet immediately. A.
- 01 Encyclopedia: Skim it, nothing actionable beyond origin/lifespan. C.
- 02 Cost guide: Finish it, budget with real numbers. A-.
- 03 Handling guide: Finish it, know exactly how to move the fish. A.
- 04 Health issues: Finish it, the columnaris-vs-ich temperature reversal alone is worth the read. A.
- 05 Tank setup: Finish it, buy list is clear (one stray double comma typo). A-.
- 06 Feeding guide: Finish it, honest about disagreement, still gives you a number to use. A.
- 07 Enrichment guide: Finish it, reorders what you'd buy first. A.
- 08 Vs. Goldfish: Finish it if deciding between the two, otherwise skip. A-.
- 09 Water parameters: Finish it, the testing schedule is the most useful table in the set. A.

**2. Hub and encyclopedia**

The hub earns its place: it's the only page that puts the whole first week in one place with real numbers pulled from each deep dive, not a rewrite of them. The encyclopedia does not earn much: origin, wild diet, and conservation status aren't duplicated anywhere else, but there's no care advice in it at all, so it reads as a stub next to the hub.

I checked every shared number (tank size, temperature, pH, feeding portion, cost, lifespan, quarantine) and found no disagreement between the hub and any deep dive. The hub's "$5 to $30 for the fish... $100 to $300 for a full setup" matches the cost guide word for word, and "76 to 82°F, 78 to 80°F the sweet spot" matches the tank setup guide exactly. That consistency is itself notable given how often this kind of set drifts.

**3. Could I set up, buy, feed, and keep this fish healthy?**

Mostly yes. What's missing: nobody tells me how to actually run a fishless cycle step by step. The tank setup guide says "Cycle the tank... before adding your betta" and the water parameters guide describes the ammonia-nitrite-nitrate pattern, but neither links to the actual cycling instructions; only the hub does. If I'd started on 05 or 09 instead of the hub, I'd be stuck. Same problem with the 30-day quarantine rule: it appears only on the hub, and the handling guide's line about watching "water parameters... for a day or two after any addition" could easily be mistaken for the whole answer on introducing a new fish, since it never mentions quarantine at all.

**4. Overlap and conflict across the deep dives**

Tank size, temperature, water change percentage, and portion size are repeated on nearly every page, consistently. One real soft conflict: the hub and tank setup guide both give "2 to 4 pellets," but the feeding guide expands that to "anywhere from 2 to 3 up to 6 to 7 depending on the pellet size and brand." Not contradictory, but a reader who only sees the hub's "2 to 4" gets a narrower number than the article that actually specializes in it. The feeding guide is also the one page honest about its own uncertainty: "Sources don't fully agree here... There's no single correct number." That's a good instinct, but it means the hub's confident "once or twice a day" line overstates a schedule the source article calls unsettled.

**5. One link per page**

- 00: "Check the heater is holding steady at 78 to 80°F first... then evaluate water quality and recent tank changes." Should point to the feeding guide's "Why Bettas Stop Eating" section.
- 01: "...intense aggression toward other male bettas - a trait that led to organized fighting matches in Thailand." Should point to the enrichment guide's rearing research.
- 02: "Most betta health issues are managed through water quality correction rather than veterinary treatment." Should point to the health issues guide.
- 03: "keep an eye on water parameters... for a day or two after any addition." Should point to the quarantine guide.
- 04: "Fasting the fish for 2 to 3 days often resolves mild cases... a single cooked, de-shelled pea." Should point to the feeding guide.
- 05: "Cycle the tank... before adding your betta, rather than adding the fish to unestablished water." Should point to the cycling guide. This is the biggest gap in the set.
- 06: "Watch for... a bloated belly, stringy feces, or buoyancy problems." Should point to the health issues guide.
- 07: "Larger tanks promoted natural, active behavior... restricted conditions produced the hiding and inactivity pattern." Should point to the tank setup guide.
- 08: "will fight other male bettas, often fatally, which is exactly where the name... comes from." Should point to the enrichment guide's aggression research.
- 09: "This whole process typically takes 4 to 6 weeks without a fish in the tank." Should point to the cycling guide.

**6. Trust**

The cost guide has a placeholder reading "[table could not be parsed]," which is a rendering flaw rather than a content one, but it's the kind of thing that makes you check everything else twice. What convinced me most that a real keeper wrote this: "The thing to know if you have already treated ich is that the temperature move is the opposite one," followed by cited mortality figures from a peer-reviewed columnaris study. That's the sentence that catches an actual mistake a returning keeper would make.

**7. Grade: A-.** Deep, specific, mostly self-consistent, let down by the encyclopedia's thinness and the missing cycling/quarantine links. First two changes: link every mention of tank cycling to the cycling guide, and add a one-line quarantine mention to the handling guide.

**Not covered anywhere**
- Lighting or photoperiod for the tank.
- Compatible tankmates for a single male betta (snails, shrimp, corydoras).
- How to actually set up and stock a sorority tank.

## Betta fish (2026-09-08)

One Sonnet agent, ten pages named in the sidebar (hub, encyclopedia,
cost, handling, health issues, tank setup, feeding, enrichment, vs
goldfish, water parameters); nine were actually in the extracted set,
the "10 Surprising Betta Fish Facts" page named on every sidebar was not
extracted since it carries no `-guide` suffix and isn't unioned into the
extractor's glob the way goldfish's bowl myth piece is. About 100k tokens.
Full agent output below, unedited.

---

# Betta Fish Care Set: A Reader's Review

## 1. Page by page

- Hub (00): Finish it, act on the checklist immediately. Grade B+.
- Encyclopedia (01): Finish it fast, nothing to act on, background only. Grade B.
- Cost guide (02): Finish it, but the setup table is broken. Grade B-.
- Handling guide (03): Finish it, changes how you treat the fish from day one. Grade A-.
- Health issues guide (04): Finish it, the columnaris/ich temperature warning alone is worth the read. Grade A.
- Tank setup guide (05): Finish it, buy list in hand. Grade A-.
- Feeding guide (06): Finish it, sets a real schedule. Grade A-.
- Enrichment guide (07): Finish it, reshapes what you put in the tank. Grade A.
- Vs. Goldfish guide (08): Finish it if deciding between the two. Grade B+.
- Water parameters guide (09): Finish it, the numbers you'll actually test against. Grade A.

(A "10 Surprising Betta Fish Facts" page is named on every sidebar but wasn't in this file set, so I can't grade it.)

## 2. Hub and encyclopedia

The encyclopedia earns its place: scientific name, wild habitat, adult size, and wild diet appear nowhere else. The hub is thinner justification, it's mostly a compressed version of the five deep dives, plus a checklist and FAQ that aren't duplicated elsewhere. It does disagree with the deep dives on two numbers. Hub: "Water temperature should stay between 78 and 80 degrees F." Tank setup guide: "Target a stable temperature of 76 to 82°F, with 78 to 80°F being the sweet spot." Vs. Goldfish guide gives a third range: "around 75 to 80 degrees F." Also, hub: "Weekly water changes of 25 to 30 percent." Tank setup guide: "Do a 20 to 30% water change weekly."

## 3. The whole set

Yes, I could set up, cycle, buy, feed, and maintain a betta after reading all ten. The gaps: no page tells you how to choose a healthy fish at the store, nothing addresses tank lighting or a day/night cycle, and no page says whether snails or shrimp can share the tank. One quiet dependency: the cost guide's own setup-cost table is missing ("[table could not be parsed]"), and the real itemized numbers only exist on the hub page, without the cost guide pointing there. The health issues guide also raises "an adjustable aquarium heater makes this easy to control precisely" for ich without ever stating the target treatment temperature.

## 4. Overlap and conflict in the deep dives

Read at least three times each, consistently: overfeeding causes bloating/swim bladder, tank size minimum is 5 gallons, and the fasting-day rule. One real conflict beyond temperature: pellet portions. Tank setup guide says "2 to 4 small, high-protein betta pellets." Feeding guide widens that to "anywhere from 2 to 3 up to 6 to 7 depending on the pellet size and brand." Not contradictory so much as the feeding guide admitting more nuance the tank setup guide flattens.

## 5. One link per page

- Hub: "a second cycled tank standing by" -> tank setup guide.
- Encyclopedia: "intense aggression toward other male bettas" -> enrichment guide.
- Cost guide: "A proper setup costs more than a lot of first-time buyers expect" -> hub (for the actual table).
- Handling guide: "Float the sealed bag in your tank for about 15 minutes" -> tank setup guide (heater target).
- Health issues guide: "offering a single cooked, de-shelled pea afterward" -> feeding guide.
- Tank setup guide: "Frozen or freeze-dried bloodworms and brine shrimp make good occasional treats" -> feeding guide (frequency limits).
- Feeding guide: "a recent move, handling, or an aggressive tankmate can suppress appetite" -> handling guide.
- Enrichment guide: "housed in groups since hatching under enriched conditions" -> hub (sorority specifics).
- Vs. Goldfish guide: "they need at least a heated, filtered 5-gallon tank" -> tank setup guide, not just the hub.
- Water parameters guide: "very soft, poorly buffered water ... can allow pH to crash suddenly after a water change" -> tank setup guide's water-change section.

## 6. Trust

The broken cost table and the three-way temperature mismatch made me trust the numbers less than the writing. What convinced me a real keeper wrote this: "Reaching for the heater because that is what worked on the white spots last time is the single worst thing you can do to a betta with columnaris." That's a specific, cited, mistake someone has actually seen happen.

## 7. Overall grade

B+. Well-sourced and genuinely useful, undercut by numbers that don't match each other and a cost page missing its own table. First two fixes: pick one temperature range and one water-change percentage and use them everywhere, and restore the cost guide's setup table so it doesn't quietly depend on the hub.

## Not covered anywhere

- How to pick a healthy betta at the store before buying.
- Tank lighting or a day/night light schedule.
- Whether snails, shrimp, or other tankmates are compatible.
- The actual target temperature for treating ich once it's diagnosed.

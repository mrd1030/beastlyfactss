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

## Budgie (2026-09-08, batch B, before the router hub)

One Opus agent, nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, enrichment, cere color, vs cockatiel), about 82k
tokens. The review below reads the old legacy hub; the router hub was
built from its findings the same day. Full agent output below, unedited.

---

# Budgie set: reader review

## 1. Page by page

- **00 Hub.** Finished it. Act on: cage size, bar spacing, pellet ratio, veg list, night cover, checklist to shop from. Densest single page here. **B**
- **01 Encyclopedia.** Finished it, fast. Act on: almost nothing. Adult size and the Gould history are genuinely interesting; the captive lifespan figure fights the rest of the set. **C**
- **02 Cost.** Finished it. Act on: build an emergency fund, expect $175 to $475 setup, $350 to $900 first year. The setup table "could not be parsed," which is the one thing I most wanted. **B**
- **03 Handling.** Finished it. Act on: wait one to two weeks, hand in cage, millet, step up, towel not hands, never punish a bite. Best-shaped page in the set. **A-**
- **04 Health.** Finished it twice. Act on: the four same-day vet signs, the limp-means-tumor pattern, the male cere flag. **A**
- **05 Cage setup.** Finished it. Act on: width over height, half-inch bars, no zinc or lead, no dowel-only perches, no sandpaper covers, dishes away from perches, 65 to 85F, no PTFE. **A-**
- **06 Enrichment.** Finished it. Act on: move part of the daily ration into a foraging toy, rotate the hiding method every few days, buy cheap and often. **B+**
- **07 Cere.** Finished it. Act on: sexing by cere, do not trust it under 6 to 12 months, brown crusty female is normal. **B+**
- **08 vs Cockatiel.** Finished it. Act on: nothing new for someone already getting a budgie. **C+**

## 2. Hub and encyclopedia

The hub earns its place: it is the only page with a shopping checklist, a veg list, and a numbered out-of-cage figure. The encyclopedia does not. Outside the 1805/1840/1925 history it repeats the hub's framing.

Conflicts, hub versus deep dives:

- Cage. Hub: "A minimum cage size of 18x18x24 inches is required for a single budgie." Setup: "An absolute minimum for a single budgie is often cited around 18x18x18 inches." Different minimum, and the hub calls it "required."
- Diet. Hub: "should make up 60 to 70% of a budgie's diet." Setup: "pellets should make up roughly 60 to 80% of a budgie's diet." Hub FAQ adds "Seed mix should be no more than 10 to 20%"; setup says "seeds treated as an occasional extra."
- Food cost. Hub annual table totals $125 to $205 in food and treats. Cost: "Food (pellet-forward diet + fresh vegetables) | $5 - $15" monthly, which is $60 to $180.
- Vet. Hub: "Annual avian vet check | $50 | $90." Cost FAQ: "Add an annual exotic vet checkup of $80 or more."
- Lifespan. Hub: "7 to 12 years with proper care." Cockatiel page: "A well-kept budgie typically lives 5 to 10 years." Encyclopedia: "up to 21 years recorded in captivity." Three answers to one question.

## 3. The set as a whole

I could buy the cage, set it up correctly, feed it, tame it, and recognize an emergency. Still missing: a cleaning routine (what liner, how often, deep clean schedule), bathing or misting frequency despite "Shower or misting bottle" being on the checklist, a toxic-foods list, portion size for vegetables, and how to introduce a second budgie.

Questions answered elsewhere in the set but never signposted:

- Cost says "avian vets emphasize catching problems early." The four same-day signs are in Health, and Cost does link there, so this one works.
- Health flags the male cere change; the whole Cere page exists and Health never points at it.
- Cere says a male's brown cere may be "a cere tumor"; Health says testicular tumor, and Cere never links back.
- Handling tells me to use a towel; the shared First Aid and Grooming guide teaches towel restraint, unlinked.
- Setup says 10 to 12 hours of darkness; the shared Photoperiod guide explains why, unlinked.

## 4. Overlap and conflict across the deep dives

Read twice or more: seed causes fatty liver (Hub, Setup, Health, plus three FAQs), width over height (Hub, Cost, Setup), social needs (Hub, Setup, Enrichment), prey animals hide illness (Cost, Handling, Health).

Conflicts:

- Millet. Hub: "a small piece 2 to 3 times per week maximum." Handling: "Millet from your fingers. Offer a favorite treat, spray millet works well for most budgies." Taming is a daily process. Nobody reconciles these.
- Solo birds. Hub: "Budgies are highly social animals and suffer psychologically when kept alone." Enrichment FAQ: "Is a single budgie okay without a cage mate? It can be."
- Sexing age. Cere: "somewhere between 6 and 12 months of age." Health: "their adult coloring doesn't settle in until several months old."
- Mirrors, within the hub itself: "mirrors if kept solo" as enrichment, then "remove or cover mirrors (birds fly into them)."

## 5. One link per page

- Hub: "The most important dietary change for most budgies is reducing seed and adding pellets." Point to Converting a Seed-Eating Bird to Pellets.
- Encyclopedia: "up to 21 years recorded in captivity." Point to the health issues guide.
- Cost: "The cage is worth prioritizing width over cheapness, since budgies fly side to side rather than up and down." Point to the cage setup guide.
- Handling: "If you need to restrain your budgie briefly, for medication or a health check, use a small towel rather than your bare hands." Point to Bird First Aid Kit and Grooming.
- Health: "Treat a change like that as a reason to book an avian vet visit rather than a coincidence to note in passing." Point to the cere color guide.
- Setup: "Budgies need roughly 10 to 12 hours of darkness and uninterrupted sleep every night." Point to Photoperiod and Sleep.
- Enrichment: "Feather plucking, repetitive pacing on the same perch, and screaming beyond normal contact calls are the clearest signs enrichment isn't covering current needs." Point to Why Is My Bird Losing Feathers.
- Cere: "That same texture change in a male is a different story." Point to the health issues guide.
- vs Cockatiel: needs none for me. The two care guides and both encyclopedia entries are already linked.

## 6. Trust

Doubts: three lifespans, two cage minimums, two pellet percentages, and a cost page whose totals do not reconcile with the hub's own table. The mirrors contradiction inside one hub section. And the Cere page discussing a male's brown cere without ever naming the testicular tumor the Health page treats as the headline cause.

The sentence that convinced me a keeper wrote this: "A budgie that suddenly starts limping, drags a leg, grips the perch weakly on one side, or falls off its perch is often not injured." Nobody writes that from a content brief.

## 7. Set grade: B+

Strong, specific, unusually honest about vet cost and solo birds, undermined by core numbers that disagree page to page.

First two changes:
1. Pick one number each for cage minimum, lifespan, pellet percentage, and monthly food, and make every page use it.
2. Add a routine husbandry page: cleaning schedule, bathing, safe and toxic foods, veg portions. Then cross-link Health to Cere and back.

## Not covered anywhere

- Cage cleaning schedule, liner or substrate choice, and what a deep clean involves.
- Bathing or misting frequency and method, despite a misting bottle being on the hub checklist.
- Toxic foods for birds (avocado, chocolate, caffeine, onion). The Household Hazards guide is described as fumes and airborne hazards, not diet.
- Vegetable portion size and how much a 30 gram bird should actually eat per day.

## Budgie (2026-09-09, batch B, second pass, after the fixes)

One Opus agent, the same nine pages re-extracted after the first-pass
fixes, about 79k tokens. Full agent output below, unedited.

---

## 1. Page by page

- **00 Hub.** Finished it; it is the most useful page here and I can act on almost every line. Undercut by its own cage numbers. **B**
- **01 Encyclopedia.** Finished it in a minute. Nothing to act on except lifespan and adult size, which the hub already gave me. **C+**
- **02 Cost.** Finished it. I can budget from it, but the setup breakdown table did not render, so the $175 to $475 has no itemization behind it. **B**
- **03 Handling.** Finished it. Clear, ordered, executable from day one. **A-**
- **04 Health.** Finished it, twice. Best page in the set; the limp-equals-tumor section is genuinely new to me. **A**
- **05 Cage setup.** Finished it. Buyable: dimensions, bar spacing, perch types to avoid, temperature, PTFE. **A-**
- **06 Enrichment.** Finished it. Actionable and cheap, but it contradicts the setup page on solo birds. **B+**
- **07 Cere.** Finished it. Useful for sexing, thinner than the health page on the same topic. **B**
- **08 Budgie vs cockatiel.** Finished it. Decision-grade, though I had already decided. **B+**

## 2. Hub and encyclopedia

The hub earns its place easily: it is a router with numbers attached, and every line names the article it came from. The encyclopedia does not. Its only unique content is the Gould and Budgerigar Club history, which is pleasant and useless to me; everything else (size, lifespan, diet, difficulty) is repeated on the hub.

The hub disagrees with itself and with the setup guide on cage size. First week and FAQ: "18x18x18 inches is the figure often cited as an absolute minimum for one bird." Buy list: "18x18x24 inch cage or larger, wider rather than taller," and the card blurb says "The 18x18x24 minimum." The setup guide backs the first: "An absolute minimum for a single budgie is often cited around 18x18x18 inches." That is the exact number I would type into a shopping search, and the hub gives me two.

## 3. The set as a whole

I could buy the cage, set it up, feed the bird, tame it, and recognize an emergency. Gaps: no cleaning routine, no bathing or misting, no safe and unsafe food list beyond "fresh vegetables," and no weighing routine even though the health page leans on weight loss as a sign.

Questions raised on one page and answered on another, silently:

- The setup page tells me pellets should be 60 to 80% of the diet but never says the shop bird will arrive seed-addicted. The Converting a Seed-Eating Bird to Pellets guide in the sidebar is the answer, and no budgie page points at it.
- The health page says egg binding is life-threatening; the Chronic Egg Laying guide covers it, unlinked from that page.
- The enrichment page says "supervised out-of-cage time in a bird-safe room" without defining bird-safe. Household Hazards answers it, unlinked.
- The handling page opens on hand-raised versus parent-raised without saying Choosing a Pet Bird covers how to tell.

## 4. Overlap and conflict across deep dives

I read the same-day vet list three times (hub, health, both FAQs), the pellet percentages twice, and cere sexing twice.

Real conflict, solo birds. Setup: "Can one budgie live alone happily? A: Not well." Enrichment: "Is a single budgie okay without a cage mate? A: It can be, provided the owner supplies the social interaction a cage mate would otherwise cover."

Soft conflict, male cere. Health: brown hypertrophy is "classically from a testicular tumor producing estrogen." Cere guide, same symptom: "it's more often linked to an actual health issue, including scaly face mites (which cause a crusty, porous texture) or, less commonly, a cere tumor." No testicular tumor at all, which is the scarier reading.

Minor: enrichment says hide "part of the daily seed or pellet ration," while setup treats seeds as "an occasional extra rather than the foundation."

## 5. The one link each page needed

- **Hub:** "Pellets should make up roughly 60 to 80% of the diet" should link to Converting a Seed-Eating Bird to Pellets.
- **Encyclopedia:** "flocks of thousands are common" should link to Colony and Aviary Keeping.
- **Cost:** "The cage is worth prioritizing width over cheapness" should link to the cage setup guide. It never does.
- **Handling:** "A hand-raised bird is already comfortable with people and may step up on its own from day one" should link to Choosing a Pet Bird.
- **Health:** "It's linked to calcium and vitamin D deficiency and to obesity" should link to Chronic Egg Laying and Egg Binding.
- **Setup:** "never use nonstick or PTFE cookware anywhere near a budgie" should link to Household Hazards for Pet Birds.
- **Enrichment:** "plus supervised out-of-cage time in a bird-safe room" should link to Household Hazards for Pet Birds.
- **Cere:** "That same texture change in a male is a different story" should link to the budgie health issues guide.
- **Vs cockatiel:** "often do very well in a same-species pair" should link to the cage setup guide.

## 6. Trust

Doubts: the two cage minimums on one page; the cost table that did not render under a heading promising a breakdown; the solo-bird contradiction. Nothing read padded or invented.

The sentence that convinced me a keeper wrote this: "A budgie that suddenly starts limping, drags a leg, grips the perch weakly on one side, or falls off its perch is often not injured."

## 7. Set grade: B+

Strong, specific, mostly non-redundant, let down by a contradicted cage number and a sidebar of relevant guides the bodies never reach into.

First two changes: pick one cage minimum and use it in all four places; add body links from the budgie pages to the pellet conversion, household hazards, and egg binding guides.

## Not covered anywhere

- Cage cleaning routine: what to wipe daily, what to strip weekly, what liner to use.
- Bathing or misting, and how often a budgie needs it.
- A safe and unsafe food list: avocado, chocolate, apple seeds, onion, plus which vegetables to actually offer.
- Water dish hygiene and how often to change water.

## Cockatiel (2026-09-09, batch B, before the router hub)

One Opus agent, nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, vs cockatoo), about 81k
tokens. The review below reads the old legacy hub; the router hub was
built from its findings the same day. Full agent output below,
unedited.

---

## 1. Page by page

- **00 Hub.** Finished it. Actionable: cage dimensions, bar spacing, itemized costs, pellet brands, night-light rule, egg-laying triggers. Densest page in the set. **B+**
- **01 Encyclopedia.** Finished it, it is short. Actionable: adult size, weight, lifespan ceiling. The mutation history is genuinely interesting, not filler. **B**
- **02 Cost.** Finished it, annoyed. Two tables where half the cells say "Part of the starter setup" instead of a number. The vet figures are the only real content. **C-**
- **03 Handling.** Finished it. Actionable: 7 to 14 day settling period, flat palm not a finger, 10 to 15 minute sessions, stress list. Best-structured article here. **A-**
- **04 Health.** Finished it. Actionable: the call-the-vet symptom list, cuttlebone, psittacosis is zoonotic. Thin on what to actually do. **B**
- **05 Cage setup.** Finished it. Actionable: width over height, half-inch bars, spot-clean daily. **B**
- **06 Feeding.** Finished it. Best article in the set: safe list, toxic list, no grit, six named reasons for appetite loss. **A**
- **07 Enrichment.** Finished it. Actionable: priority order, start foraging toys easy, no sandpaper perches. **A-**
- **08 vs Cockatoo.** Finished it, did not need it. I already chose. **C+**

## 2. Hub and encyclopedia

The encyclopedia earns its place: nothing else gives me size, weight, or origin. The hub is the most useful page here, but it is also where the set contradicts itself most.

- Cage: hub, "A minimum cage of 24x24x30 inches is required." Setup, "Reference tables commonly list a minimum of about 20 by 20 by 30 inches."
- Shape: hub, "Cockatiels are active climbers and benefit from vertical space." Setup, "cockatiels are horizontal flyers, so a tall, narrow cage wastes exactly the space they'd actually use." Directly opposed.
- Bars: hub, "1/2 to 3/4 inch is appropriate." Setup, "half an inch or smaller to prevent head entrapment." The hub permits a spacing the setup page calls unsafe.
- Lifespan: hub, "15 to 25 years." Cost, "Cockatiels live 15 to 20 years."
- Vet: hub table, "Annual avian vet check $60 $100." Cost, "commonly runs $85 to $200."
- Setup total: hub's table sums to about $145 to $280 before the bird. Cost, "Most first-time owners land in the $320 to $860 range."
- Hub against itself: Health says "10 to 12 hours of darkness per night," its own FAQ says "provide 14 to 16 hours of darkness per night."

## 3. Could I keep one

Mostly yes. I can buy the cage, spec the bars, fill the bowls, know what is poison, know the emergency signs, and know what a bad day looks like. Missing: room temperature and draft numbers, how much food per day in any measurable amount, how to find or verify an avian vet, and how to introduce a second bird after four pages told me to get one.

Unanswered questions whose answer sits elsewhere in the set, unlinked: Health says watch for "changes in droppings" but never says what normal is (the Reading Bird Droppings guide). Feeding says "monitor weight" with no scale or gram figure (Sexing, Weight, and Body Condition). Feeding and the hub both discuss hens without ever telling me how to sex the bird (same guide). Health names feather destructive behavior with no way to distinguish it from a molt (Molt vs. Plucking).

## 4. Overlap and conflict across the deep dives

Read three times: the non-stick kitchen warning (hub, health, setup) and the seed-diet lecture (hub, health, setup, feeding). Numbers disagree each time:

- Pellets: hub, "60 to 70% of a cockatiel's diet." Setup, "pellets making up 60 to 80% of the diet." Feeding, "roughly 75 to 80% of daily intake."
- Crest: handling, "Held upright and relaxed, it signals calm curiosity." vs Cockatoo, "straight up usually signals excitement or alarm, held back and relaxed signals contentment." A beginner reading both learns nothing.
- Night frights: hub, "A nightlight prevents night frights." Setup, "a cage cover or a small night light can help." A cover is the opposite intervention.

## 5. One link per page

- **Hub:** "The pellet transition from seeds is often a weeks-long process" to Converting a Seed-Eating Bird to Pellets.
- **Encyclopedia:** none needed.
- **Cost:** "so it's worth locating one near you before an emergency forces the search" to Bird Emergency Plan.
- **Handling:** "routine things like cage cleaning, nail trims, or a vet visit" to Bird First Aid Kit and Grooming.
- **Health:** "changes in droppings" to Reading Bird Droppings.
- **Setup:** "so a cage cover or a small night light can help" to Photoperiod and Sleep.
- **Feeding:** "laying hens are the one group that need extra calcium consideration" to Chronic Egg Laying and Egg Binding.
- **Enrichment:** "Do not assume plucking is behavioral before an avian vet has ruled out medical causes" to Molt vs. Plucking vs. PBFD vs. Giardia.
- **vs Cockatoo:** "have a plan for who cares for it if it outlives you" to Succession Planning.

## 6. Trust

Doubts: the cost tables with no costs. The four different pellet percentages. And setup's "Ten to twelve hours of UV light exposure, or safe supervised outdoor time" on the same page as ten to twelve hours of darkness, which is more than a day.

What convinced me a keeper wrote this, from feeding: "We couldn't find a single, consistently sourced number for exactly how many hours or days a cockatiel can safely go without eating, and would rather say that honestly than invent a round figure." Enrichment's "Material that survives the week has not done its job" is a close second.

## 7. Set grade: **B-**

Strong individual articles undermined by the hub disagreeing with them on cage size, bar spacing, cage shape, lifespan, and diet ratio.

First two changes: make the hub inherit its numbers from the deep dives instead of restating them, starting with bar spacing (a safety figure). Then put real numbers back in the cost tables and reconcile them with the hub.

## Not covered anywhere

- Room temperature and humidity range, and what counts as a draft.
- How much food to put out per day in any measurable amount (grams, teaspoons, bowl depth).
- How to find and verify an avian vet, and what a board-certified avian specialist actually is.
- How to introduce a second cockatiel, after four pages recommend a pair (the colony guide covers budgies, canaries, and finches only).

## Cockatiel (2026-09-09, batch B, second pass, after the fixes)

One Opus agent, the same nine pages re-extracted after the first-pass
fixes, about 82k tokens. Full agent output below, unedited.

---

# Cockatiel set, read as someone buying one

## 1. Page by page

- **00 Hub.** Finished it, and it is the page I would print. Actionable: cage 20x20x30, half-inch bars, 30-day quarantine, $320 to $860 setup, the vet-now list. **A-**
- **01 Encyclopedia.** Finished it, but nothing to act on. Good history, wrong lifespan for a buyer. **C+**
- **02 Cost.** Finished it. Actionable: budget $75 to $250 plus setup, $200 to $350 a year, $85 to $200 exam, find the vet first. The cost table has two real numbers and four rows saying "part of the starter setup," which is filler in a table. **B**
- **03 Handling.** Finished it. Actionable: 7 to 14 days hands-off, flat palm not a finger, 10 to 15 minute sessions, the stress list. **B+**
- **04 Health.** Finished it. Actionable: cuttlebone in permanently, no kitchen, the call-now list. **A-**
- **05 Setup.** Finished it. Actionable: everything I need to buy and place, plus spot-clean daily, deep clean weekly. **A-**
- **06 Feeding.** Finished it, twice. Actionable: free-choice pellets, pull fresh food in two hours, the safe and toxic lists, no grit, six reasons for appetite loss. Best page here. **A**
- **07 Enrichment.** Finished it. Actionable: the priority order, and rotate. **A-**
- **08 vs Cockatoo.** Skimmed. I already picked the cockatiel; this page is for someone earlier than me. **B+**

## 2. Hub and encyclopedia

The hub earns its place. It is the only page carrying the 30-day quarantine and the power-outage rule, and every number on it names the page it came from. The encyclopedia does not: it repeats size and adds natural history I enjoyed but cannot use, and its one care-relevant number contradicts the hub.

Hub: "Lifespan: 10 to 15 years is typical."
Encyclopedia: "10 to 14 years in the wild; up to 25 years in captivity, the oldest on record 36."

Those are not the same commitment, and the hub's budget line is built on the shorter one.

## 3. The set as a whole

I could buy, set up, feed and spot trouble. Still missing: how much food per day in an actual amount, how many hours out of the cage, how to tell if mine is a hen (the health page's biggest risks are all hen-only), what to clean the cage with, whether to clip before the first free flight, and how to offer a bath.

Questions answered elsewhere in the set with no signpost:
- Health raises feather destructive behavior from boredom; the enrichment page is the answer and is not linked.
- Health assumes I know my bird's sex; nothing on that page points anywhere.
- Setup mentions night frights in one line; the enrichment FAQ gives the fuller answer and neither page mentions the other.
- Cost tells me to find an avian vet; health explains what the exam catches, unlinked.

## 4. Overlap and conflict across the deep dives

Read twice or three times: the kitchen fume warning (hub, health, setup), the pellet ratio (hub, setup, feeding), the crest as mood dial (handling, vs-cockatoo).

Lifespan, the worst one:
- Cost: "A 10 to 15 year lifespan means this is a long-term financial commitment."
- vs Cockatoo: "A cockatiel's 15 to 25 year lifespan is already a real commitment."

Crest:
- Handling: "Held upright and relaxed, it signals calm curiosity."
- vs Cockatoo: "straight up usually signals excitement or alarm, held back and relaxed signals contentment."

Diet math: "Pellets should make up roughly 75 to 80% of daily intake, with fresh vegetables and fruit filling another 20 to 25%" tops out at 105 percent, before the seeds the same sentence allows.

Toy materials: health says cockatiels are "frequent offenders when it comes to ingesting rope fibers," while enrichment recommends "palm and untreated natural fiber" with no supervision caveat.

Light: setup asks for "10 to 12 hours of quiet, dark sleep" and "Ten to twelve hours of UV light exposure," which needs a 24-hour day to satisfy both maxima.

## 5. The one link each page needed

- **Hub:** "Adult size: 12 to 13 inches (30 to 33 cm) including tail; 2.5 to 3.5 oz." The only unlinked bullet. Point it at the encyclopedia.
- **Encyclopedia:** "Wild Lifespan: 10 to 14 years in the wild; up to 25 years in captivity." Point it at the cost guide, which turns years into money.
- **Cost:** "The cage is frequently the single biggest line item in the whole setup." Point it at the cage setup guide. Nothing else on the page tells me what I am buying.
- **Handling:** "Fluffed feathers combined with rapid breathing." Point it at the health guide, because that same sign is on its call-the-vet-now list.
- **Health:** "Often traced back to boredom, loneliness, or stress rather than a purely medical cause." Point it at the enrichment guide.
- **Setup:** "Include foraging toys for enrichment." Point it at the enrichment guide.
- **Feeding:** "All-seed diets are a well-documented cause of the malnutrition commonly seen in pet cockatiels, and it's linked to fatty liver disease." Point it at the health guide.
- **Enrichment:** "A single bird with excellent toys and no company is still a single bird." Point it at the handling guide.
- **vs Cockatoo:** "A cockatiel's 15 to 25 year lifespan is already a real commitment." Point it at the cost guide.

## 6. Trust

What made me doubt: the lifespan split, the percentages over 100, and the enrichment page leaning on "a 2025 study" and "a 2020 paper" with no author, journal or title, when the whole article is built on them being real. "As one avian practice puts it plainly" is the same problem in the health page.

What convinced me a keeper wrote this: "Material that survives the week has not done its job."

## 7. Set grade: B+

Genuinely useful, specific, and honest about what it does not know, but the lifespan number changes depending on which page I am standing on, which is the kind of thing that makes me check everything else.

First two changes:
1. Pick one lifespan figure and make all four pages say it.
2. Fix the diet percentages so they sum to 100 with seeds included, and put an actual out-of-cage hours number in the enrichment or handling guide.

## Not covered anywhere

- How to bathe or mist a cockatiel, though enrichment ranks "bathing opportunity" fifth in its priority list.
- How much food to put out per day in a real amount, in grams, teaspoons, or bowl depth.
- What is safe to clean a cage with, after setup asks for a weekly deep clean.
- A concrete daily out-of-cage figure. "Substantial" is the closest the set gets.
- Which toy materials are actually safe for a cockatiel, given the rope-fiber ingestion warning in the health guide points the opposite way from the enrichment guide.

## Cockatoo (2026-09-09, batch B, single pass)

One Opus agent, ten pages, about 90k tokens. Full agent output below, unedited.

---

Set grade: B. Strong, sourced, honest deep dives undercut by a hub that restates them with different numbers.

Real conflicts found: diet ratio (old hub 60-70% pellets vs feeding/setup's 75-80%); cage cost and food cost (old hub's own numbers vs cost guide's); lifespan (old hub/encyclopedia 40-60 vs cost guide's unsourced "40 to 70-plus, Umbrella 50 to 70"); affection framing (old hub "most cockatoos crave cuddling" vs handling guide's cited consultant, "cockatoos are not cuddly, we are," whose fix is less shoulder time, not more); the encyclopedia's own conservation field ("Vulnerable") contradicting its own History paragraph ("IUCN reclassified the species as Endangered in 2018"); the legal guide's New Jersey section ("the Moluccan is Vulnerable") contradicting its own Massachusetts section ("both assessed as endangered"); and a same-article contradiction inside the enrichment guide, where the body explicitly declines to cite a "six hours" foraging figure or a "training worked best" claim as unverifiable, then a heading and two FAQ answers state both as settled fact anyway.

Not covered anywhere: a worked daily timetable reconciling 4-6 hours interaction, foraging, out-of-cage time, and 10-12 hours sleep in one day; cage/dish cleaning routine; bathing or misting given the dust; what bird-proofing means in practice; finding/vetting an avian vet and PBFD screening cost; noise vs leases/HOAs/neighbors; introducing a cockatoo to existing pets.

## Lovebird (2026-09-09, batch B, single pass)

One Opus agent, eight pages, about 91k tokens. Full agent output below, unedited.

---

Set grade: B. Strong, sourced health and setup work sitting under a hub that contradicts it and a cost page whose arithmetic does not close.

Real conflicts found: pairs (hub "a bonded pair is happier and healthier, less aggressive toward humans" vs handling/vs-budgie's documented real aggression risk between mismatched pairs); lifespan, four different values across hub, encyclopedia, cost guide, and the vs-budgie guide; cost guide's own monthly headline ($70-125/month) not matching its own annual table ($260-430/year, about $22-36/month); cage price (hub table caps the cage at $150, cost guide prose says $80-200).

Not covered anywhere: how to introduce and bond a second lovebird beyond "do it slowly"; daily food quantity in grams or portions; bathing or misting routine despite a "bath option" in a cost FAQ; cage cleaning schedule beyond changing the paper liner.

## Tarantula (2026-09-09, batch B, single pass)

One Opus agent, ten pages, about 88k tokens. Full agent output below, unedited.

---

Set grade: B. The deep dives are unusually honest, especially enrichment and legal, and the hub undercuts them at the exact point a new keeper is most likely to hurt the animal.

The critical finding: the old hub's FAQ said docile New World species "tolerate calm, gentle handling," directly contradicting the handling guide ("probably the wrong choice") and the enrichment guide ("do not handle"). Everything else flagged (enclosure floor space, substrate depth, temperature, feeding intervals, mites, annual cost, lifespan) was the hub restating deep-dive numbers with different figures. Tank setup's Diet section duplicates the feeding guide closely enough to be a liability, stating "adults typically eat every 1 to 2 weeks" as flat fact where feeding guide gives an honest species-dependent range.

Not covered anywhere: how to confirm a female before buying; what to do if the spider escapes during cleaning; substrate-change schedule; how to choose a seller; sling-specific housing.

## Corn snake (2026-09-08, batch C, single pass, before the router hub)

One Sonnet agent, ten pages, about 107k tokens. Full agent output below, unedited.

---

Set grade: B+. Deep, well-sourced, occasionally contradicts itself on basic numbers.

Real conflicts found: adult feeding frequency given three ways (old hub "every 10 to 14 days," tank setup "every 10 to 21 days," feeding guide "every 14 to 21 days" for adults); humidity given three numbers (old hub/tank setup 40-60%, tank setup's other branch 65-75%, vs-hognose comparison table "40-50%"); adult size drifting across pages (old hub "4 to 5 feet," encyclopedia "3.5-5 feet," vs-hognose table "3-5 ft"); warm-side digestion temperature close but not identical between tank setup (85-88°F) and feeding guide (82-85°F, left as is, within tank setup's own stated acceptable range).

Not covered anywhere: how to verify an enclosure is actually escape-proof (gap sizes, latch hardware, a test method); how to select a healthy corn snake at the point of purchase; Pennsylvania's legal status, left explicitly unresolved by the legal guide itself.

## Boa constrictor (2026-09-09, batch C, single pass, before the router hub)

One Sonnet agent, nine pages, about 95k tokens. Full agent output below, unedited.

---

Set grade: B+. Deep, honest, and mostly consistent, undercut by the hub's internal humidity contradiction and an undefined sub-adult life stage.

Real conflicts found: the old hub's own body text ("Humidity should be maintained at 50 to 70%") disagreed with its own FAQ ("Boa constrictors require 60 to 80% ambient humidity"), and neither matched the tank setup guide's sourced 60 to 70%; the old hub's temperatures (warm side 80-84°F, cool side 76-80°F) drifted slightly from tank setup's 80-85°F and 75-80°F. The feeding guide's own FAQ softened the 48-hour post-feeding handling wait, stated precisely everywhere else, to a vague "at least a few days."

Not covered anywhere: what to do about a healthy adult boa refusing food for an extended stretch; how to actually build a bioactive substrate setup, mentioned as an option but never explained; care specifics for the roughly 1-to-3-year sub-adult stage the old hub named but never defined; UVB bulb type, wattage, or placement beyond "recommended."

## African grey (2026-09-09, batch C, single pass, before the router hub)

One Sonnet agent, ten pages, about 106k tokens. Full agent output below, unedited.

---

Set grade: B+. Deep, well-sourced content undercut by unreconciled numbers between the hub/encyclopedia and the deep dives.

Real conflicts found: pellet percentage (old hub 60-70%, feeding guide's VCA-cited 75-80%, and the feeding guide's own "20 to 40%" produce figure was actually VCA's seed-inclusion figure misattributed to fruits and vegetables, whose real produce split is 20-25% veg, 10% or less fruit); cage upgrade size (old hub "48x36x60 or larger," tank setup's real veterinary figure "closer to 40 by 30 by 60"); bar spacing (old hub "3/4 to 1 inch," tank setup's real "no more than 1 inch," dropping the floor); a CITES vote date error in the legal guide itself against its own cited USFWS press release (guide said October 2, 2016, the source and the encyclopedia both say October 3, 2016, verified by opening the source directly).

Not covered anywhere: exact daily feeding portions in cups or grams for pellets and vegetables; what a baseline avian vet exam/workup should include beyond bloodwork and PBFD testing.

## Chinchilla (2026-09-09, batch C, single pass, before the router hub)

One Sonnet agent, eleven pages, about 100k tokens. Full agent output below, unedited.

---

Set grade: B+. Deep, well-sourced, occasionally sloppy about keeping its own numbers straight.

Real conflicts found: wheel size (old hub "12-14 in," housing guide's real "15 inches or larger," matching the cost guide's own line item); cage height (old hub "24x24x48," housing guide's real "24 by 24 by 36"); fur density, same site two numbers (old hub funFact "up to 60 hairs per follicle, humans have only 1," encyclopedia and the vs-guinea-pig guide's own FunFact both say "up to 80 hairs per follicle, versus 2 to 3 for humans," confirmed the encyclopedia's number is the one two independent site sources agree on); ideal room temperature stated three ways (old hub "60-72°F," housing guide's real "50-68°F" plus the 150 rule, feeding guide's own aside "60-70°F, above 75°F risky"). A wildLifespan field error found independent of the deep dives: the encyclopedia's `wildLifespan: "10-20 years"` is actually the captive range (confirmed against Merck Veterinary Manual, which gives "up to 20 years" for captivity and no wild figure at all), corrected to the site's established "not documented in the wild" phrasing used for other species with the same gap (crested gecko, leopard gecko).

Not covered anywhere: where to find and vet a reputable breeder or rescue; how to safely introduce two chinchillas to each other; the correct minimum cage dimensions (resolved by the router rebuild).

## Ferret (2026-09-09, batch C, single pass, before the router hub)

One Sonnet agent, ten pages, about 92k tokens. Full agent output below, unedited.

---

Set grade: A-. Deep, specific, appropriately urgent about emergencies, let down by two unreconciled numeric conflicts.

Real conflicts found: cage size (old hub "3x2x2 ft," i.e. 36x24x24 inches, cage setup guide's real "30 long by 24 wide by 48 tall" for a pair); lifespan (old hub "6 to 10 years," cost guide's real, explicitly-researched "5 to 9 years on average for US pet ferrets today," which argues the older 10-15 year figure no longer reflects the population). A genuine cross-guide factual contradiction, not just a hub issue: the health issues guide cites a real 2000 peer-reviewed study (Schoemaker et al., PubMed 10649752) showing ferrets neutered late still developed adrenal disease at the same rate, arguing neutering itself (not the specific age) plus light exposure and genetics drives the disease; the adrenal disease guide's own FunFact claimed the opposite, that countries with later neuter ages show meaningfully lower rates, calling it "one of the stronger pieces of evidence supporting the early-neuter theory," with no source cited anywhere in that article. Corrected the adrenal disease guide's body, FunFact, and FAQ to match the peer-reviewed position.

Not covered anywhere: lymphoma, named as one of the three major ferret diseases but never explained on any page or shared guide; the actual litter-training method (a litter box is specified, training it is not); a canine distemper vaccine dosing schedule for kits; what descenting actually involves.

## Green Iguana (2026-09-09)

NOTE FOR THE PARENT SESSION: this batch-D worker session had no Agent/Task tool
available, so no reader subagent could be launched. The set test below was run
by the worker itself, cold, against the seven plain-text pages in
`.reader/green-iguana/` read in filename order, following the set test prompt in
READMEFIRST verbatim. It is a first-party read, not a second pair of eyes, and
should be treated as slightly weaker evidence than a real reader agent's output.
Raw output follows, unedited.

---

1. One line per page.

- 00 care guide hub (as extracted, before the router rewrite): grade C+. I would
  finish it, and I could act on the checklist, but it is a third care sheet
  rather than a router, and it contradicts the setup guide on the basking
  target and the UVB replacement interval.
- 01 encyclopedia: grade B-. Readable and the history section on the import
  trade is genuinely new information, but the size and lifespan lines do not
  match the deep dives.
- 02 cost guide: grade A. The page I would screenshot. It is the only page on
  any pet site I have read that admits you cannot buy an enclosure that meets
  the published minimum and then prices the three ways out of that.
- 03 handling guide: grade A-. Short, and every line is something I would do
  differently tomorrow: approach from the side, never the tail, expect the
  male to change in season.
- 04 health issues guide: grade B+. Correctly organized around husbandry, and
  the vet lines are unambiguous. Thin on what any of it looks like day to day.
- 05 tank setup guide: grade A-. The 10x5x6 minimum, the 100 to 120°F basking
  band and the humidity number are the three things I needed. It is a very
  short page for the most consequential subject in the set.
- 06 enrichment guide: grade A. The only page in the set built on named field
  research, and it is honest that the sociality finding does not license
  cohousing adults.

2. The hub and the encyclopedia.

The hub does not earn its place. It repeats the setup guide, the health guide
and the cost guide at lower resolution, and where it differs it is wrong.

- Basking. Hub: "Basking surface temperature should be around 120 degrees F."
  Setup guide: "Basking area 100 to 120°F, cool end around 80°F." The hub took
  the top of the range and printed it as the target.
- UVB replacement. Hub annual cost row: "UVB bulb replacement (every 6-12
  months): $111 to $141." Setup guide: "replaced every 12 months regardless of
  whether the bulb still produces visible light." The hub's own housing section
  says "Replace it every twelve months," so the hub disagrees with itself.
- Adult size. Hub FAQ: "Four to six feet including the tail, and ten to twenty
  pounds." Handling guide: "An adult male green iguana reaches 6 to 7 feet
  including tail and up to 20 pounds." Hub housing prose: "becomes a five to
  six foot lizard." Three numbers on two pages.
- Humidity at night. Hub: "Humidity of 60 to 80 percent through the day, rising
  toward 100 at night." Setup guide: "60 to 80%." Nothing in the deep dives
  supports the night figure.
- Enclosure. Hub cost table: "Custom PVC/wood enclosure, 8x4x4ft: $650 to
  $730," while the hub's own checklist says "Adult enclosure plan, 10x5x6 ft
  minimum, before purchase" and the cost guide says nothing ready made reaches
  that. The hub sells me a box its own checklist rules out.

The encyclopedia earns about half its place. Origin, habitat, wild diet, the
CITES history and the import numbers appear nowhere else and are the best part
of it. But "Adult Size: 4-6 feet including tail" is under the handling guide's
6 to 7 feet, "Wild Lifespan: 15-20 years" is the same number the cost guide
gives for a well-kept captive animal, which cannot be right for both, and the
overview's "five to six feet" does not match its own adult size field.

3. The set as a whole.

Yes, I could set up, buy and keep one. Enclosure, temperature, humidity,
substrate, lighting, cost, handling and the health list are all here and mostly
agree. What is missing is the diet, and it is a hole in the shape of a whole
article. There is no feeding guide. The 60/30/10 greens/vegetables/fruit ratio,
the list of greens to build on, the calcium and multivitamin schedule and the
avoid list (spinach, kale in quantity, beet greens, chard, iceberg) exist only
in the hub's diet section, which is not a deep dive and is not in the Deep Dive
list. The health guide tells me protein causes kidney disease and the
enrichment guide tells me to scatter the leaves, but nothing tells me what goes
in the bowl or how often.

Stranded questions:

- The health guide says kidney disease follows "chronic dehydration from low
  humidity" and never says what humidity is. The setup guide has 60 to 80% and
  says the same sentence from the other end. Neither page points at the other.
- The health guide says burns come from "heat sources positioned where the
  iguana can contact them directly." The sidebar's reptile heating and
  thermostats guide is exactly that subject and the body never says so.
- The cost guide says produce runs $30 to $50 a month. The sidebar carries a
  safe weeds and wild plants guide covering iguanas specifically, which is the
  direct answer to that line, and the cost guide does not mention it.
- The handling guide says "Housing two males together, expect real fighting"
  and stops. The enrichment guide has three paragraphs of field research on
  exactly why.
- The enrichment guide says "Do not skip parasite screening, given what the
  captive welfare assessment found." The quarantine guide in the sidebar is
  the page that says what a screening actually involves.

4. Overlap and conflict across the deep dives.

Read twice: the 10x5x6 minimum (setup guide and cost guide), the 70% first
year mortality (cost guide and health guide FunFact), the surrender story
(handling guide and enrichment guide), and "no commercial tank is large enough"
(setup guide and cost guide). All four repeats agree, and the cost guide's
version of the enclosure argument is better than the setup guide's, so the
overlap reads as reinforcement.

One real conflict between deep dives:

- Enrichment guide: "A green iguana reaches five to six feet, and the animal is
  sold at six inches to people who buy a tank," and its FAQ repeats "reaches
  five to six feet."
- Handling guide: "An adult male green iguana reaches 6 to 7 feet including
  tail and up to 20 pounds," and its FAQ repeats it.
- Cost guide, third party: "LafeberVet puts an adult at 6 feet or more
  including the tail."

Two near-conflicts I would not call errors: the cost guide heads a section
"Lifespan: 15 to 25 years" and then says "15 to 20 years, sometimes 25" (the
heading is the envelope, the body is the figure), and the cost guide's monthly
total of $60 to $150 sits above its own itemized $30 to $50 produce plus $20 to
$50 electricity, which is fine because supplements and substrate are named too.

5. One link per page.

- Hub: "Kidney disease and gout follow from animal protein and chronic
  dehydration." Should point to the health issues guide. (Hub prose, not a deep
  dive.)
- Encyclopedia: "the classic mistakes are protein and insufficient calcium."
  Should point to the health issues guide. (Encyclopedia, not a deep dive.)
- Cost guide: "produce alone commonly runs $30 to $50 a month." Should point to
  the safe weeds and wild plants guide.
- Handling guide: "Housing two males together, expect real fighting." Should
  point to the enrichment guide.
- Health issues guide: "burns come from heat sources positioned where the
  iguana can contact them directly." Should point to the reptile heating and
  thermostats guide.
- Tank setup guide: "Glass blocks UVB entirely, so a sunny window is never an
  adequate substitute." Should point to the UVB lighting guide.
- Enrichment guide: "Do not skip parasite screening." Should point to the
  reptile quarantine guide.

6. Trust.

What made me doubt them: the hub. A page that prints 120°F as the basking
target when its own setup guide gives a 100 to 120°F band, and prices an 8x4x4
enclosure two lines under a checklist demanding 10x5x6, is the kind of thing I
would notice at the worst possible moment. Nothing in the deep dives themselves
read as invented.

The sentence that most convinced me a person who keeps these wrote it, from the
cost guide: "The two ready made boxes on that table reach 6 or 8 feet long but
stop at 2 feet deep and 4 feet tall, so they are a compromise on even the
LafeberVet floor. That is what 'no commercial tank is large enough' means
above: you can buy a box, but not one that meets the minimum."

7. Set grade: B.

The deep dives are strong and the cost guide is genuinely excellent, but the
hub contradicts them on the two numbers a new keeper is most likely to get
wrong, and the whole diet subject has no article of its own.

Two changes first: rebuild the hub so every number on it comes from the deep
dive that owns it, and write a green iguana feeding guide so the 60/30/10
ratio, the greens list, the avoid list and the calcium schedule live on a page
the Deep Dive list actually shows.

8. Not covered anywhere.

- The diet itself: ratio, which greens, which to avoid, portion size, how often
  to feed, and the calcium and multivitamin schedule. Checked against the
  Health and More list: the safe weeds guide covers what is safe to forage, not
  what a daily salad is or how often it is fed. No page in the set answers it.
- What a green iguana's cold floor is in an outage. The reptile emergency plan
  guide's species table does not list this species; its fallback rule is to use
  the tank setup guide's documented nighttime low, which here is "the low
  70s°F," so this is covered only by inference.
- How long an iguana can be left alone, and what a sitter needs to be told for
  an animal this size. The emergency plan guide answers it generically for
  lizards and never for a six foot herbivore that needs daily fresh produce.

## Conure (2026-09-09)

NOTE FOR THE PARENT SESSION: no Agent/Task tool was exposed in this worker
session (it is itself a subagent), so no separate Opus reader agent could be
launched. The set test below was run inline against
/home/user/beastlyfactss/.reader/conure/ using the set test prompt from
READMEFIRST verbatim, reading the seven extract files in filename order
before the hub was touched. It is the reader pass, not a summary of one, and
it is reproduced here raw. Treat its independence as weaker than a real
second-agent pass: the same session later did the fixes.

---

1. One line per page.

- 00 care guide hub, grade B-. I would finish it, and it is the only page that
  gives me a shopping checklist, but it is a third care sheet rather than a
  front door: housing, diet, enrichment and health are all restated here at
  length, and two of its numbers do not match the articles it points at.
- 01 encyclopedia, grade B. Under a minute. The mutation history (yellow-sided
  as a sex-linked opaline, Garvin crossing to make the pineapple) is the only
  part I could not get elsewhere, and none of it changes what I do.
- 02 cost guide, grade B. Useful ranges and an honest line about avian vets
  being hard to find, but its own FAQ quotes different prices from its own
  table for the same three items, which is exactly the page I would have
  screenshotted before shopping.
- 03 handling guide, grade A-. The "reading a beak, not just a bite" framing is
  the thing I would have gotten wrong, and the sexing section is unusually
  blunt about what does not work.
- 04 health issues guide, grade A-. Real thresholds, a clean emergency list,
  and a closing husbandry pattern that ties every disease back to a cause.
- 05 tank setup guide, grade A. The page I would actually shop from. Cage size
  stated as a floor rather than a target, bar spacing, UV hours, and a safety
  paragraph that names Teflon.
- 06 enrichment guide, grade A. Honest that no conure study exists and says so
  in the first line of the research section instead of dressing up borrowed
  evidence. The priority order at the end is the most actionable list in the set.

2. The hub and the encyclopedia.

The encyclopedia earns its place, barely, on natural history. The hub does not.
Its housing, diet, enrichment and health sections restate the deep dives in
different words, and where the words differ so do the numbers.

- Bar spacing. Hub: "Bar spacing of 1/2 to 3/4 inch prevents head entrapment."
  Tank setup: "Bar spacing should be 1/2 to 5/8 inch maximum to prevent head
  entrapment or escape." I am buying a cage off one of these two numbers and
  they are not the same ceiling.
- Cage size. Hub: "A minimum cage of 24x24x30 inches is required for a green
  cheek conure, though 24x24x36 inches or larger is strongly preferred." Tank
  setup: "24x24x30 inches is the minimum most sources list for a single adult,
  but treat that as a floor, not a target. Bigger is always better, aim for 30
  to 36 inches or more in multiple dimensions." The hub's preferred size is one
  dimension taller; the deep dive's is bigger in several. Different advice.
- Lifespan. Hub, twice: "Green cheek conures can live 15 to 25 years" and "15
  to 25 years with excellent care." Cost guide: "20 to 25 years or more is the
  commonly cited range, with some individuals reaching 30 years under excellent
  care." Encyclopedia: "25 to 30 years in the wild... though the captive
  average is nearer 10 years." Three different bottom ends on the page I am
  using to decide whether I can commit.
- Setup costs. The hub's setup table has four rows. The cost guide's has seven,
  and the two extra ones (UV lighting $40 to $100, dishes and cover $30 to $70)
  are things I would have to buy. The hub is quietly cheaper than the truth.

3. The set as a whole.

I could buy, house and keep this bird from this set. I could not feed it well
from it. There is no conure feeding guide. Daily diet exists only on the hub
("pellets... 60 to 70% of a green cheek conure's nutritional intake", the
vegetable list, the avocado and chocolate list), and the hub is the one page
the deep dives do not stand behind. The health guide tells me an all-seed diet
causes fatty liver and says to feed "a quality pelleted diet alongside fresh
vegetables", which is a direction, not a diet.

Stranded questions, answers sitting on another page in the set without either
page saying so:
- The health guide's whole viral section rests on "prevention through
  quarantine" and never says how long. The sidebar's quarantine guide has the
  number.
- The handling guide blames nippiness partly on "hormonal adults" and stops.
  The photoperiod and sleep guide in the sidebar says what makes a bird
  hormonal.
- The cost guide bills "toy and enrichment replacement... $10 to $30 a month"
  and never says what rotation means. The enrichment guide is entirely about
  that.

4. Overlap and conflict across the deep dives.

The deep dives agree with each other better than the hub agrees with any of
them. 24x24x30, 65 to 80°F, 10 to 12 hours of dark, the snuggle pouch and the
Teflon warning all repeat and never disagree. What I read twice: the pineapple
mutation explanation appears as a FunFact on the cost guide and again as a
FunFact on the tank setup guide in almost the same words, and the "a conure's
beak is a tool, not a weapon" line is a FunFact on the handling guide and again
a FunFact on the health guide.

One real internal conflict, all inside the cost guide:
- Its setup table says the cage is "$100 - $180", perches "$20 - $40",
  foraging toys "$30 - $60".
- Its own FAQ says "a cage (minimum 24x24x30 inches, $150 to $450), perches
  ($30 to $80), toys and foraging items ($40 to $120)".
The UV and dishes figures in that FAQ do match the table, so this reads as
three cells copied from somewhere else rather than a considered second
estimate.

Two softer ones I would want an editor to look at:
- The annual table prices "Annual avian vet check | $70 - $120" while the vet
  section of the same page says "A routine wellness exam commonly runs $80 to
  $160."
- The annual table prices "Toys (rotating) | $50 - $90" while the paragraph
  under it says toy replacement is "$10 to $30 a month", which is $120 to $360
  a year.
- Tone rather than number: the hub sells "the apartment parrot" and the
  enrichment guide says "Do not buy a conure expecting a quiet bird" and
  "Conures are loud for their size". Both are defensible (the enrichment guide
  is about conures generally and names sun conures), but read back to back
  they pull opposite ways.

5. One link per page.

- Hub: "Pellet transition from seeds typically takes weeks of patient gradual
  mixing." to the pellet conversion guide.
- Encyclopedia: none needed, it is a data page.
- Cost: "regular rotation is a real part of keeping this bird mentally healthy,
  not an optional extra" to the enrichment guide.
- Handling: "and in hormonal adults" to the photoperiod and sleep guide.
- Health issues: "Prevention through quarantine, testing new birds, and
  sourcing from reputable breeders is critical" to the quarantine guide.
- Tank setup: "Maintain a consistent day and night photoperiod" to the
  photoperiod and sleep guide, and "rotate foraging toys and general toys
  frequently" to the enrichment guide.
- Enrichment: "Ten to twelve hours of dark quiet sleep, which is the invisible
  cause of a lot of parrot behavior problems." to the photoperiod and sleep
  guide.

6. Trust.

What made me doubt them: the cost guide quoting two different prices for the
same cage on the same page, and the hub carrying a shorter lifespan than the
article it links to. Neither reads as invented, both read as unedited, and both
sit on the two pages a buyer actually reads first. The cost guide also carries
only two sources for a page full of dollar figures, neither of which is a price
source.

The sentence that most convinced me a person who keeps these birds wrote this,
from the enrichment guide: "Supply it deliberately and they wreck the supply.
Do not supply it and they wreck the cage, the furniture, or their own
feathers." Close second, from the same page, on the sleeping pouch: "Frayed
threads and chewed holes are how birds get toes caught, and a conure will chew
the pouch. Replace it. Do not repair it."

7. Set grade: B.

The deep dives are consistent, honest about what is not known, and genuinely
useful. The hub is a fourth opinion that undercuts them, and the cost guide
disagrees with itself on the one table a buyer prints.

Two changes first: make the cost guide's FAQ quote its own table, and stop the
hub stating numbers of its own.

8. Not covered anywhere.

- What a green cheek conure eats day to day, in amounts: how much pellet, how
  much vegetable, how often fruit. Checked against the Health and More list.
  The pellet conversion guide covers switching a bird onto pellets and the
  droppings guide covers the output, but nothing in the set or the sidebar
  gives a daily diet for this species, and the species has no feeding guide.
- Nothing else. Quarantine length, hormones and photoperiod, wing clipping,
  nail and beak care, sexing, body language, first aid, egg laying, household
  hazards and power outages are all covered by the shared guides in the
  sidebar, so I am not calling any of those a gap.

## Rat (2026-09-09)

Process note for the parent session, not part of the reader output: no Agent
tool was exposed to this worker session (ToolSearch returns no Agent/Task
tool), so no reader subagent could be launched. The set test prompt was run
directly by this worker against `/home/user/beastlyfactss/.reader/rat/`,
reading only those eight files, in filename order, before the hub was
touched. What follows is that read, unedited.

---

Eight pages, read in order. The hub here is the pre-rewrite hub.

**1. Page by page.**

- 00 care guide hub, C+. I would skim it, not finish it. It is a fourth care
  sheet: housing, diet, enrichment and health prose that the six deep dives
  already carry, plus two cost tables. What I can act on is the checklist,
  and the checklist is where its numbers stop matching the articles it sits
  on top of.
- 01 encyclopedia, B. Origin, adult size, the Wistar Institute history.
  Nothing here changes what I do, but the size line and the wild lifespan
  line are the only places on the site that carry them.
- 02 cost, A-. The page I would screenshot. It prices the pair rather than
  the animal, and it is honest that the cage is what swings the total.
- 03 handling, A. The tail degloving rule and the explanation that
  allogrooming is not biting are worth the page on their own.
- 04 health issues, A. The 95% rattery figure and the two-year chronic
  outlook turn cage cleaning from a chore into a lifespan decision.
- 05 enclosure setup, A-. The tank-versus-wire-cage argument is the
  best-reasoned thing in the set, because it names the mechanism.
- 06 feeding, A-. Names actual guaranteed analyses instead of waving at
  "a good quality food".
- 07 enrichment, A. Seven categories I can audit my own cage against.

**2. Hub and encyclopedia against the deep dives.** The encyclopedia earns
its place; the hub does not, it repeats them and then disagrees with them.

- Cage size. Hub: "A commonly cited minimum is 16x28x30 inches with multiple
  levels for a rat." Setup guide: "PetMD lists 24x24x24 inches as the
  minimum for a single rat and recommends the largest habitat possible
  beyond that." Two different minimums, neither cross-referenced.
- Temperature. Hub: "Keep the room roughly 65 to 80 degrees F without big
  swings." Setup guide: "RSPCA guidance puts the ideal range at 19 to 23°C,
  roughly 66 to 73°F, and rats generally do fine across a somewhat broader
  64 to 79°F band."
- Wheel. Hub: "at least 12 to 14 inches in diameter." Setup guide: "at least
  12 inches in diameter, with many experienced keepers and rescues
  recommending 14 to 16 inches for adult rats, especially males."
- Cage price. Hub table: "24x24x36 in multi-level cage | $130 | $260." Cost
  guide table: "$130 - $360" for the same cage line. Three more hub cost
  rows are off by a few dollars against the cost guide (bedding, dishes and
  bottle, thermometer).

**3. The set as a whole.** Yes, I could set up, buy, feed and keep a pair of
rats from these pages, and I would know which mistake matters most. What is
missing: the setup guide tells me heat stress is a real risk above about
86°F and never tells me what it looks like or what to do; nothing anywhere
tells me how to introduce two rats to each other, which matters for a
species the same set tells me four times must never live alone; and beyond
"spaying a female before 7 months lowers her risk", nothing says whether to
neuter, or what it costs.

**4. Overlap and conflict across the deep dives.** I read the never-alone
rule on four pages and the ammonia mechanism on three, and both agree every
time, which reads as reassuring rather than padded. Two numbers do not
agree. The cost guide's table sells a "24x24x36 in+ multi-level wire cage"
while the setup guide's sourced minimum is "24x24x24 inches"; and the cost
table's "Solid-surface exercise wheel, 12 in or larger" sits against the
setup guide's "ideally 14 to 16 inches for an adult". Neither is a
contradiction exactly, but I had to work that out myself.

**5. One link per page.**

| Page | Sentence | Should point to |
|---|---|---|
| Hub | "rats with chronic respiratory disease rarely live past 2 years" | health issues guide |
| Encyclopedia | no slot for one | |
| Cost | "mammary tumor removal is one of the more common surgical costs in this species" | health issues guide |
| Handling | "Daily handling, playtime, and supervised time outside the cage matter for a rat's wellbeing" | enrichment guide |
| Health issues | "a thermometer to confirm the room isn't running colder, damper, or draftier than it should" | enclosure setup guide |
| Enclosure setup | "heat stress becomes a real risk above about 86°F" | nothing in this set covers the signs |
| Feeding | "obesity is common in pet rats and that calorie restriction... is one of the few interventions actually shown to extend their lifespan" | health issues guide, pituitary tumors |
| Enrichment | "a cage that fits a group is the first purchase" | enclosure setup guide |

**6. Trust.** The hub is what made me doubt them: four numbers on the page
the navigation lands on first do not match the articles underneath it. The
deep dives themselves cite Merck, RSPCA, PDSA, VCA, PetMD and AFRMA by name
and say when sources differ, which is the opposite problem. The sentence
that most convinced me a keeper wrote this, from handling: "A rat's tail
skin can shear away from the tissue underneath under pulling or grasping
pressure, an injury called degloving or tail slip, and it's specifically
caused by exactly this kind of handling."

**7. Set grade: B+.** The deep dives are specific, sourced and consistent
with each other; the hub sitting in front of them contradicts four of their
numbers. Two changes first: make the hub carry the articles' numbers or
none, and tell me what heat stress looks like on the page that warns me
about it.

**8. Not covered anywhere.** Checked against the Health and More list, which
shows only the vet trips guide, the grooming guide and the three-rodent
roundup.

- The signs of heat stress and what to do about them. The shared small
  mammal heat and cold guide is not in this species' sidebar.
- How to introduce two rats to each other.
- Whether to neuter, and what it costs.
- What to do for a pair in a heatwave or a power outage.

## Hermit Crab (2026-09-09)

Process note, recorded because it changes how this entry should be read:
this session had no Agent/Task tool available, so no reader subagent could
be launched. The set test prompt from READMEFIRST.md was run in-session by
the species agent itself against the seven plain-text pages in
/home/user/beastlyfactss/.reader/hermit-crab/, read in filename order,
before the hub was rewritten. The text below is that pass, unedited.

---

1. One line per page.

00 Care guide hub, grade B-. I would finish it, and it is the only page
that gives me a shopping list and a checklist in one place, but it reads
as a third care sheet rather than a front door, and three of its numbers
do not match the setup guide it is sitting on top of.

01 Encyclopedia, grade B+. Short and I finished it. The history is the
only thing in the set I could not get anywhere else: 1953, a souvenir
shop in West Palm Beach, the Crazy Crab pitched as a moving Pet Rock,
and Mary Akers raising 204 crabs to land in 2018. Nothing here changes
what I buy.

02 Cost, grade B+. Actionable. I know the crab is the cheap part and the
tank is not. The table's tank line and the stated total sit oddly next to
each other, and the page tells me to buy at least two crabs without
pricing a tank that holds a group comfortably.

03 Handling, grade A-. The section on how long a crab stays buried is the
most useful paragraph in the whole set. Days to over a week for a new
crab, several weeks up to around three months for a molt, and a plain
statement that a still crab is almost always alive. That is the thing
that stops a beginner from digging one up.

04 Health, grade A-. The framing is honest: essentially no vet care, so
husbandry does the work. Post purchase stress is explained well enough
that I would recognize it. It names mites and mold and then tells me
nothing about what to do.

05 Tank setup, grade A. The numbers page. Humidity, temperature,
substrate ratio and depth, two water dishes, shells, lighting. I would
print this one.

06 Enrichment, grade A. Unexpected. It cites Elwood and Appel on crabs
abandoning a shell to escape a shock, and shows Briffa disagreeing with
Elwood instead of pretending the question is settled. The priority order
at the end is the single most useful list in the set.

2. Hub and encyclopedia. The encyclopedia earns its place on history
alone. The hub does not: it restates housing, diet, enrichment, and
health in full, and where it restates them it gets three numbers wrong.
Hub: "Humidity must stay at 70 to 80%." Tank setup: "Maintain 75 to 85%
relative humidity." Hub: "always have 2 to 3 spare empty shells per
crab." Tank setup: "Offer multiple natural, unpainted shells per crab,
ideally 3 to 5 or more." Hub: "a sand and coconut fiber mix at least
three times the crab's body length." Tank setup: "at least 6 inches, or
about 3 times the height of your largest crab." Body length and height
are not the same measurement on an animal that lives sideways in a
shell. Also hub cost table: "10-20+ gallon tank (for a group) $60 to
$120" against the cost guide's "10-gallon tank (2 to 3 small crabs) $30
- $100."

3. The set as a whole. Yes, I could set up, buy, feed, and keep these
animals. What is missing: the health guide says to "quarantine and
isolate new crabs" and never says for how long, in what, or how I know
it is over. Every crab is wild caught, per that same page, so the
quarantine question is not a small one. Nothing tells me how to mix the
saltwater to strength beyond "an aquarium salt mix, never table salt."
Nothing tells me what to look at when choosing a crab in a shop, which
matters more here than for a captive bred animal. And mites get named as
a problem with no treatment.

4. Overlap and conflict across the deep dives. Diet appears in the tank
setup guide and again in the enrichment guide, but they say different
things and both are worth reading: one is what to feed, the other is to
scatter it rather than bowl it. Substrate depth appears three times and
agrees each time. Shell counts agree: 3 to 5 or more, several per crab.
Molt duration agrees across handling, health, and the shared molting
guide. I found no number that two deep dives disagree on. The
disagreements are all hub against setup guide.

5. One link per page.

Hub: "Molting is a vulnerable, weeks-long underground process" should go
to the handling guide, which is where the actual duration lives.
Encyclopedia: "they can live for decades with proper care" should go to
the cost guide, which is where the lifespan figure sits.
Cost: "Most hermit crab health problems trace straight back to that
gap." should go to the health issues guide. That sentence names a whole
page and then leaves me nowhere.
Handling: none needed, it is the best linked page here.
Health: "matter so much in this species' housing, covered in more detail
in the tank setup guide." names the guide and does not link it, which is
worse than saying nothing.
Tank setup: "a crab that's buried or molting underneath" should go to
the molting guide.
Enrichment: "Depth should let the largest crab bury completely with room
to spare." should go to the tank setup guide, which turns that into
inches.

6. Trust. The 70 to 80 against 75 to 85 is the thing that bothers me,
because humidity is the number this whole species hangs on and the hub
is the first page I landed on. Nothing reads as invented. The sentence
that most convinced me a keeper wrote this, from enrichment: "Do not
supply one spare shell for a group, because that creates competition
over a resource the research shows they weigh heavily."

7. Set grade B+. Everything a keeper needs is here, and the setup and
enrichment pages are better than most of what is online, but the hub
contradicts the setup guide on three of the four numbers that matter
most. Two changes first: make the hub stop restating the setup guide's
numbers, and give the health guide's quarantine advice a duration.

Not covered anywhere:
- How long a new hermit crab should be quarantined, in what, and how you
  know the period is over.
- What to do about mites once they appear, beyond correcting hygiene.
- How to mix marine saltwater to the right strength.
- What to look at when choosing a crab in a shop, given every one is
  wild caught.

## Box Turtle (2026-09-09)

Note on provenance: no Agent/Task tool was available in this session, so the
set test could not be delegated to a background Opus subagent as the batch
prompt specifies. The pass below was run in-session against
/home/user/beastlyfactss/.reader/box-turtle/, reading 00 through 07 in
filename order under the set test prompt from READMEFIRST.md, before any
repo file outside the extract was opened for the hub work. It is the reader's
output, not a summary of it.

---

**1. One line per page.**

00 care guide hub. Finished it, and it is the page I would act on, which is
the problem: it is a full care sheet, not a router. Housing, diet,
enrichment, health, a checklist, a cost table, eight FAQs. Grade C.

01 encyclopedia. Short, and the history section is the best thing in the set:
70 to 74 percent declines, 30,000 turtles out of Louisiana in 41 months, the
1994 CITES proposal. Nothing to act on, which is fine for what it is.
Grade B+.

02 cost guide. The most useful page here. Real arithmetic I can check: greens
at USDA per-pound prices, mealworms at $7.70 per 500, 45 kWh at 18.34 cents.
The lifespan section is the one part I do not believe. Grade B+.

03 handling guide. Would finish. The sexing section is careful in a way the
hub's is not, and the semi-terrestrial section actually explains the animal.
Grade B+.

04 health issues guide. Short but well built: it links vitamin A deficiency
to respiratory infection twice and makes the connection the point. No sources
at all, which for a medical page is a problem. Grade B-.

05 tank setup guide. The page I most need and the one that leaves the most
out. Not one temperature number in the Temperature section. Grade C+.

06 enrichment guide. The best-argued page in the set. One study, described
honestly, with a priority order that follows from it. One sentence is
garbage: "Other bag sizes are available and a proper depth wants the larger
ones." Grade A-.

07 legal guide. Long and genuinely researched, statute by statute, and it
tells me when a rule is unsettled instead of pretending. Grade A.

**2. The hub and the encyclopedia.**

The encyclopedia earns its place. The hub does not. It repeats the diet, the
housing, the health list, and the enrichment argument that four deep dives
already make, and where it repeats them it changes the numbers.

Disagreements, both sides quoted:

Substrate depth. Hub: "deep, moist substrate (coconut coir/topsoil mix, 6
inches or more deep)" and the checklist item "OR large indoor tortoise table
with 6 inch+ moist substrate". Tank setup guide: "Wood chips or a topsoil and
coconut fiber mix, at least 2 to 3 inches deep to support burrowing." Two to
three inches and six inches are not the same instruction.

UVB strength. Hub: "UVB (T5 HO Arcadia 6 to 12%)". Tank setup guide: "A T5 HO
bulb (6% strength or the equivalent Zoo Med ReptiSun 5.0 T5 HO)". A 12 percent
bulb is roughly double a 6 percent one.

Basking temperature. Hub: "a basking spot (85 to 88 degrees F)". Tank setup
guide: "Provide a clear warm basking zone with a gradient down to a cooler
area, using an indoor heat source." The deep dive gives no number at all, so
the hub's precise 85 to 88 rests on nothing I can check.

Captive lifespan. Hub: "captive animals routinely live into their 50s and
60s with good care." Cost guide: "30 to 40-plus years in captivity, with wild
box turtles averaging around 50 years." Those cannot both be right, and the
cost guide's version has captivity shortening a box turtle's life by a
decade against the wild, which reads backwards.

Juvenile protein. Hub, twice: "Juveniles need more protein (60 to 70%) for
growth." No deep dive says this. The tank setup guide only says "roughly half
animal matter and half plant matter."

Costs, line by line. Hub setup: outdoor enclosure or tortoise table $150 to
$400, UVB $60 to $100, basking bulb $20 to $40, substrate $25 to $45, soak
dish $10 to $20. Cost guide: enclosure $202 to $258, "T5 HO UVB fixture and
bulb | $95 - $115", "a basking bulb runs roughly $8 to $14, with a basking
dome fixture adding another $12 to $20", "Coconut fiber substrate | $10 -
$16", "Large soak-able water dish | $18 - $30". The hub's basking bulb is
triple the deep dive's. Annually the hub bills "UVB bulb replacement: $60 to
$100" against the cost guide's "so a $25 tube is $2 to $4 a month", and
"Annual vet wellness check: $60 to $100" against "A routine exotic exam runs
$60 to $135".

Sexing. Hub: "Eye color is the fastest tell in most North American box
turtles." Handling guide: "Eye color gets mentioned constantly, red or orange
in males versus brown in females, and it does hold for eastern and three-toed
box turtles, but it isn't universal across every box turtle subspecies, so
treat it as a supporting clue rather than the deciding one." The hub tells me
to decide on the trait the deep dive tells me not to decide on.

**3. The set as a whole.**

I could buy and legally source one, and I could feed it. I could not
confidently heat it. The tank setup guide's Temperature section is four
sentences with no degrees in them, and the only basking number anywhere in
the set is on the hub, unsourced, and lower than I expected. That is the
single hole.

Second hole, smaller: nothing tells me how much to feed an adult in a
sitting. The cost guide mentions in passing that "adults eat daily or every
other day", buried in a paragraph about grocery bills, and that is the only
feeding frequency in the set. There is no feeding guide.

Questions raised on one page and answered on another without the text saying
so: the hub tells me to "consult a chelonian-experienced vet for safe
hibernation protocols" and then stops, and the sidebar's tortoise brumation
guide has the actual protocol. The handling guide says a box turtle needs
"regular access to shallow water for soaking" and the tank setup guide has
the dish size, but neither points at the other. The cost guide's legal
section summarizes state rules in a paragraph while the legal guide has the
state-by-state table, and the cost guide never says so in the body.

**4. Overlap and conflict across the deep dives.**

Read twice: the half-animal-half-plant diet, in the cost guide's monthly
section and again as its own section in the tank setup guide. The
semi-terrestrial land-and-water argument, in the handling guide and again in
the tank setup guide, both times well. The outdoor pen, in the tank setup
guide's body, its FunFact, and the enrichment guide.

The one real number disagreement between deep dives is substrate depth read
against itself. Tank setup guide: "at least 2 to 3 inches deep to support
burrowing." Cost guide: "a 4 inch layer in a 36x18 inch indoor enclosure
takes five or six 8 quart bags at $10 each." Enrichment guide: "Do not use a
shallow scattering of substrate and call it deep, because the behavior
depends on being able to get under it." A four-and-a-half to seven inch
turtle cannot get under two inches. The tank setup minimum is technically
compatible with the cost guide's four inches, but it is the number a new
keeper will build to, and the enrichment guide is telling them not to.

**5. One link per page.**

Hub: "consult a chelonian-experienced vet for safe hibernation protocols
specific to your climate." Point it at the tortoise brumation guide.

Encyclopedia: none needed.

Cost guide: "Wild collection of box turtles is illegal or heavily restricted
across most of their native range in the US." Point it at the legal guide.

Handling guide: none needed, it already links out three times and two of
them are useful.

Health issues guide: "Often found incidentally on a routine fecal exam even
without obvious symptoms, heavier loads cause diarrhea and weight loss."
Point it at the reptile stool and urates guide, which is the check I would
run between exams.

Tank setup guide: "though an outdoor pen is genuinely excellent where your
climate allows, with walls buried deep enough and secured well enough to keep
predators out." Point it at the outdoor reptile housing guide, which has the
depth.

Enrichment guide: "a secure outdoor enclosure in suitable weather is the
highest-quality enrichment available for a box turtle." Same target.

Legal guide: none needed.

**6. Trust.**

What made me doubt them: the hub's cost table against the cost guide's, most
of all the basking bulb at $20 to $40 versus $8 to $14, because it is the hub
that reads like it is selling me something and the deep dive that shows its
work. The health issues guide having no sources under a page about antibiotics
and metabolic bone disease. The tank setup guide having no sources either.
And the hub's "85 to 88 degrees F", a two-degree-wide precision on a number
nothing else in the set repeats.

The sentence that convinced me a person wrote this: from the legal guide on
Oklahoma, "The Department's page says outright that it is an interpretive
summary and not a legal document, so this is a genuine gap between the words
and the practice rather than a settled six." Nobody assembling a care site
writes that. It costs the page its clean answer and it is the honest thing to
say.

**7. Set grade: B-.** The deep dives are good to very good and the legal and
enrichment guides are better than most of what is online. The hub drags it
down by contradicting them in public on price, temperature, substrate, UVB,
and lifespan, and the tank setup guide leaves out the one number a new keeper
needs on day one.

The two changes I would make first:
1. Put real temperature numbers in the tank setup guide, from a source, and
   delete the hub's 85 to 88 rather than move it.
2. Make the hub stop repeating the deep dives. Every figure on it should be
   one the article it links to already states.

**Not covered anywhere.**
- A basking surface temperature for a box turtle, from any source. The shared
  reptile heating and thermostats guide covers thermostats and probe
  placement, not this species' target.
- How much an adult box turtle eats in one sitting, and portion size at all.
  No feeding guide exists for this species and no shared guide covers it.
- What to do about a box turtle's homing instinct in practice. The hub warns
  that "even a few miles can disorient them fatally" and nothing, shared or
  otherwise, says what that means for an escape or a move.

## Blue Tongue Skink (2026-09-09)

Independent Opus reader, launched from the session against the pre-rewrite
extract in .reader/blue-tongue-skink/. Raw output, unedited.

# Blue Tongue Skink set review

## 1. Page by page

- **00 hub**: Finished it, but it is the weakest page. Actionable: enclosure size, cost tables, shopping checklist. Everything else is a lower resolution copy of the deep dives, and some of it is wrong. **D+**
- **01 encyclopedia**: Finished it, 675 words, no filler. Actionable: nothing husbandry, but the 1982 export ban and the pygmy bluetongue rediscovery are genuinely the frame for the whole set. **B**
- **02 cost**: Finished. Actionable: budget, and a real buying recommendation (captive-bred Northern). Two internal number problems. **B+**
- **03 handling**: Finished. Actionable: 2 to 3 week settle, 5 minutes building to 15, the huff scale, side approach, never by the tail. Best page in the set. **A**
- **04 health**: Finished. Actionable: MBD signs, fenbendazole/praziquantel, shed vs scale rot. Thin on numbers, no humidity targets, no way to score body condition. **B**
- **05 tank setup**: Finished. Actionable: everything. This is the page I would build from. **A-**
- **06 feeding**: Finished. Actionable: schedule by age, skull-sized portion, toxic list, weekly gram weighing, 7 to 10% loss threshold. **A**
- **07 enrichment**: Finished. Actionable: scatter feed, dig box tub, hides at both ends, priority order. **B+**

## 2. Hub and encyclopedia

The encyclopedia earns its place. The hub does not. It restates housing, diet, enrichment and health at lower resolution, and it contradicts the deep dives on the numbers I would actually buy against.

- Basking: hub says "Surface temperatures of 95 to 110 degrees F are required"; setup says "Northern basking surface: 105 to 115 F. Indonesian basking surface: slightly cooler, 100 to 105 F."
- UVB strength: hub says "Moderate UVB (T5 HO 5 to 6%, or Arcadia 6% Forest Bulb)"; setup says "A T5 HO bulb in the 10.0 to 12% range." Those are different bulbs, and the hub's is in the cost table and the checklist.
- Photoperiod: hub says "Run UVB on a 10 to 12 hour cycle"; setup says "roughly 11 to 13 hours depending on season."
- Substrate depth: hub "3 to 4 inches deep"; setup "Keep it 4 to 6 inches deep."
- Cool side: hub "cool side 70 to 75 degrees F"; setup "Cool side (both): 70 to 80 F."
- Diet ratio, hub against itself: body says "approximately 40 to 60% vegetables and leafy greens, 30 to 40% protein"; its own FAQ says "roughly 60% animal protein and 40% vegetables and greens."
- Lifespan: hub FAQ "commonly live 15 to 25 years"; cost guide "15 to 20 years is the commonly cited average."
- Size: hub "Adults can reach 18 to 24 inches"; encyclopedia "17-24 inches."

## 3. The set as a whole

Yes, I could set up, buy, feed and keep this animal, on the strength of 02, 05 and 06 alone. Still missing: whether two can be housed together, how to actually run a brumation (06 says "provided temperatures are managed" and never says to what), substrate spot-clean and full-change schedule, bulb wattage and mounting height beyond "no closer than about 10 inches," and how to inspect an animal before buying.

Questions answered elsewhere without the text saying so: handling says wait "2 to 3 weeks" while feeding gives the real acclimation window ("Captive-bred skinks typically acclimate within about 2 weeks, wild-caught individuals can take up to 2 months"). Health names obesity but the portion size that prevents it ("about 1 to 2 tablespoons for an adult") is only in feeding. Cost says "A thermostat is essential" and never says what one does; the shared heating guide does.

## 4. Overlap and conflict across the deep dives

Read twice: Northern vs Indonesian origin (cost, handling, health, setup, all four), quarantine and fecal exams (cost, health, setup), obesity (hub, health, feeding, enrichment), floor space beats height (hub, setup, enrichment).

Conflicts:

- Vet cost, inside 02: table says "Annual vet wellness check | $50 | $90"; body says "A routine exam runs roughly $100 to $150."
- Setup table in 02 sums to about $290 to $555, but the heading reads "Upfront Setup: Roughly $400 to $800." The thermostat it calls essential is on no table and on no checklist.
- Inside 05: "Northern basking surface: 105 to 115 F" against "a safe ceiling around 110 F to avoid burns."

## 5. One link per page

- **00**: "Subspecies identification matters for care." Point it at the tank setup guide.
- **01**: "Australia's 1982 ban on commercial wildlife export means the animals sold abroad today are largely Indonesian and New Guinean species taken from the wild." Point it at the health issues guide.
- **02**: "wild-caught Indonesian skinks frequently need a fecal exam and deworming treatment right after purchase." Point it at the health issues guide.
- **03**: "Leave a new skink alone for 2 to 3 weeks before attempting to handle it." Point it at the feeding guide.
- **04**: "This is manageable at home through portion control rather than free-feeding." Point it at the feeding guide.
- **05**: "A heat source (halogen or a deep heat projector) on a thermostat is required." Point it at Reptile Heating and Thermostats.
- **06**: "Inadequate basking temperature or UVB." Point it at the tank setup guide.
- **07**: "Do not overfeed while making food more interesting." Point it at the feeding guide.

## 6. Trust

Doubts: the hub reads like it was written from a different sourceset than the deep dives and never reconciled, and it is the page navigation lands on first. The 93% parasite figure is cited to "a peer-reviewed study" with no name. The encyclopedia's "Wild Lifespan 15-20" gets reused as a captive figure elsewhere.

The sentence that convinced me a keeper wrote this: "Wash your hands first, so they do not smell like a food item."

## 7. Grade: B-

Strong deep dives dragged down by a hub that contradicts them on temperature, UVB, and substrate depth. First two changes: make the hub inherit its numbers from the tank setup and feeding guides, or cut the duplicated sections entirely; then fix 02 so the setup table includes the thermostat, sums to the stated total, and states one vet exam price.

## Not covered anywhere

- Cohabitation: can two blue tongue skinks share an enclosure, ever.
- Brumation husbandry: what temperature and photoperiod to hold during the 3 to 4 month slowdown.
- Enclosure cleaning: spot-clean frequency and full substrate change interval.
- How to inspect a skink before buying: what a healthy animal looks like at the shop or expo.
- Basking bulb wattage and mounting distance for a 4x2x2 enclosure.

## White's Tree Frog (2026-09-09)

Independent Opus reader, launched from the session against the pre-rewrite
extract in .reader/whites-tree-frog/. Raw output, unedited.

# White's Tree Frog: reader set test

## 1. Page by page

- **00 hub**: Finished it. Actionable: shopping checklist, gut-load list, supplement schedule, quarantine window. Grade C, because three of its numbers fight the deep dives.
- **01 encyclopedia**: Finished it, 30 seconds. Actionable: adult size, lifespan range for planning. Grade B. The 1790 naming story is the best writing in the set and I remembered it.
- **02 cost**: Finished it. Actionable: frog $20 to $60, setup $200 to $400, vet exam $50 to $150, emergency from $250. Grade B minus, the monthly figure and the annual table do not agree.
- **03 handling**: Finished it. Actionable: plain water only, nitrile gloves after lotion, 5 to 15 minutes, twice a week max. Grade A minus.
- **04 health**: Finished it. Actionable: 3 to 4 insects 2 to 3 times a week, waxworms and superworms weekly at most, fat over tympanum and armpits as the obesity test. Grade A minus.
- **05 tank setup**: Finished it. Actionable: 18x18x24, 70 to 75 cool / 80 to 85 basking, 50 to 60% baseline, branch 6 inches under the T5, bulb swap 9 to 12 months. Grade A minus.
- **06 enrichment**: Finished it, best page here. Actionable: dense layered planting, wide perches high, release prey into cover, same-size groups only. Grade A.

## 2. Hub and encyclopedia

The encyclopedia earns its place: origin, wild diet, conservation status, and the naming history appear nowhere else. The hub does not. It restates the deep dives in shorter form and then disagrees with them.

Water. Hub: "Always use dechlorinated or reverse-osmosis water for the water dish and for misting." Tank setup: "Use only dechlorinated tap water or spring water for misting and drinking, never distilled or reverse-osmosis water." The hub checklist repeats "Dechlorinated or RO water only" and the cost table bills me for it. One of these is wrong and I cannot tell which.

Humidity. Hub: "Humidity should be maintained at 50 to 70% during the day and 80 to 100% at night." Tank setup: "a baseline around 50 to 60% with misting spikes up to 70 to 80% once or twice daily." The health guide blames constant wet for red-leg, so the hub is arguably prescribing the disease.

Night temperature. Hub: "dropping to 65 to 75 degrees F at night." Tank setup: "dropping into the mid-70s at night."

Feeding. Hub: "Adults eat every other day to 3 times per week." Health: "roughly 3 to 4 appropriately sized insects, 2 to 3 times a week."

Lifespan. Hub FAQ: "15 to 20 years with excellent care." Cost: "Other sources cite a slightly more conservative 10 to 15-plus years."

UVB. Hub: "strongly recommended by amphibian veterinarians." Tank setup: "Recommended, though not strictly required."

## 3. The set as a whole

I could buy, build, and run this tank tomorrow, once I picked a side on water and humidity. Still missing: any feeding guide at all (the only supplement schedule in the set, calcium w/D3 every other feeding and multivitamin weekly, sits on the hub with no deep dive behind it); enclosure cleaning frequency, though red-leg is blamed on dirt; water dish depth and change interval; how to pick a healthy frog and where; whether males call at night and how loud; sexing and what happens if two frogs breed; body condition beyond "bulging over the tympanum"; day one and week one; vacations and power cuts; normal skin sloughing.

Questions answered on another page without a pointer: handling says dechlorinate but never says what counts (tank setup does); health blames constant humidity with no numbers (tank setup has them); health names MBD and UVB with no bulb spec (tank setup); cost lists bulb replacement every 9 to 12 months with no reason (tank setup's fun fact); enrichment says "watch the weight" with no threshold (health guide); health says quarantine with no duration (hub says 30 to 60 days); enrichment's group housing needs tank setup's 24x18x24.

## 4. Overlap and conflict across deep dives

Read twice: the Pacman frog contrast (handling, cost, tank setup, health), obesity (health and enrichment), the dechlorination rule (handling, tank setup, enrichment), humidity cycling (tank setup and enrichment). Only the humidity pair is redundant rather than useful.

Group size conflicts. Tank setup: "18 inches long by 18 inches wide by 24 inches tall is the standard minimum for one adult ... 24x18x24 inches works well for a small group of two to four." Enrichment: "A tall 18x18x24 terrarium is a workable footprint for one or two adults."

The cost guide fights itself. Prose: "Roughly $20 to $60 a Month." Its own annual table totals $155 to $285, about $13 to $24 a month. The setup table also has no heat source or substrate line while the prose says "That covers ... plus a heat source ... substrate."

Enrichment: "do not treat handling as enrichment." The hub files all its handling advice under Enrichment.

## 5. One link per page

- 00: "Humidity should be maintained at 50 to 70% during the day and 80 to 100% at night" should link to the tank setup guide.
- 01: "They are one of the most docile frog species, remarkably tolerant of handling compared to most amphibians" should link to the handling guide.
- 02: "That covers the largest single expense, the terrarium itself, plus a heat source" should link to the tank setup guide.
- 03: "Using tap water straight from the faucet on hands or gloves without dechlorinating it first" should link to Amphibian Quarantine, Acclimation, and Water Hardness.
- 04: "quarantine any new or suspect animal immediately" should link to that same quarantine guide, which is where the duration lives.
- 05: "Use only dechlorinated tap water or spring water" should link to the quarantine and water hardness guide.
- 06: "Watch the weight" should link to the health issues guide.

## 6. Trust

Doubts: the RO water contradiction, the hub's 80 to 100% night humidity against its own health section, and a monthly cost figure double its own table. The enrichment page's honesty won me back: "Michaels, Antwis and Preziosi ran the study on red-eyed tree frogs ... Not this species, but another arboreal tree frog, which makes it the closest usable evidence by a wide margin." Most convincing single sentence, from the same page: "A White's tree frog will swallow anything that fits, including a smaller frog, and a mixed-size group is a feeding accident waiting to happen."

## 7. Set grade

B minus. The five deep dives are specific and usable; the hub, which is the page I land on first, contradicts them on water, humidity, and night temperature.

First two changes: make the hub copy its numbers from the deep dives rather than restate them, starting with water and humidity. Then write a feeding guide and move the supplement schedule into it.

## Not covered anywhere

- Enclosure cleaning schedule and full substrate change interval.
- Water dish depth and how often it gets changed.
- Feeder portion and supplement schedule in a dedicated guide, not just a hub paragraph.
- How to choose a healthy frog and where to buy one.
- Male calling at night and how loud it is.
- Sexing, and what to do if a group breeds.
- A body condition test more precise than "bulging over the tympanum."
- Vacation cover and power outage plans.
- Normal skin sloughing and appetite pauses.

## Red-Eared Slider (2026-09-09)

Independent Opus reader, launched from the session against the pre-rewrite
extract in .reader/red-eared-slider/. Raw output, unedited.

# Red-Eared Slider set: reader review

## 1. Page by page

- **00 hub**: Finished it, but it is a compressed rerun of five deep dives. Actionable: weekly 25-30% water change, nitrate under 40 ppm, cuttlebone. Grade C.
- **01 encyclopedia**: Finished. Actionable: nothing husbandry, but the 1975 FDA history and export loophole are real content. Grade B.
- **02 cost**: Finished. Actionable: $550-$1,250 setup, $350-$650/yr, vet exam $80-$180, emergency $150-$400. Grade B.
- **03 handling**: Finished, thin. Actionable: scoop from underneath, both hands, no hand-feeding. Grade B minus.
- **04 health**: Finished. Actionable: MBD vs pyramiding split, emergency list. Grade A.
- **05 tank setup**: Finished. Actionable: 10 gal/inch, water depth 1.5-2x shell, Ferguson Zone 3 UVI 2.0-3.0, 10-12 hr photoperiod. Grade A.
- **06 feeding**: Finished. Actionable: schedule, 15-20 min portion, no salivary glands, seven reasons for refusal. Grade A.
- **07 enrichment**: Finished. Actionable: priority order, escape behavior as the metric. Grade A minus.
- **08 legal**: Finished. Actionable: my state's rule, release ban. Grade A minus, docked for a stale clock (below).

## 2. Hub and encyclopedia

The encyclopedia earns its place: the dime-store history and the export loophole appear nowhere else. The hub does not. Four of its five sections are thinner restatements of 04, 05, 06, 07, and it contradicts them.

- Tank size. Hub: "A 10-inch adult female ... needs a 100-gallon or larger aquarium or stock tank." Tank setup: "a practical adult minimum of 75 to 100 gallons for one turtle."
- Water temp, hub against itself. Hub housing: "Water temperature should be maintained at 72 to 78 degrees F." Hub checklist: "Water heater (75 to 80 degrees F)." Tank setup: "Water temperature should sit at 72 to 82 F."
- Adult feeding. Hub: "Feed juveniles daily and adults every other day." Feeding: "adults move to every 2 to 3 days rather than daily."
- Diet split. Hub: pellets "approximately 50% of the diet." Feeding: "Sources disagree meaningfully on the exact percentage split ... treat any specific number as a rough guideline."
- Lifespan. Hub: "20 to 40 years in captivity." Cost: "20 to 30 years with good care is the consensus range."
- Glass behavior. Hub: sliders "approach the glass when they see their keeper, this is associative learning and a sign of normal, healthy cognitive engagement." Enrichment: "Do not treat constant glass-working as a personality trait."

## 3. Could I keep one

Mostly yes. I can size the tank, light it, heat it, budget it, feed it, read the failure modes, and check my state. Missing: how to cycle a new tank before the turtle goes in (the hub tells me ammonia must read zero and never says how to get there), what a "monthly deep clean" actually involves, how to swap filter media without crashing the biofilter, outdoor pond specifics (depth, winter, predator-proofing) despite four pages calling a pond ideal, how to pick a healthy hatchling, quarantine, transport and acclimation, and how much extra space per additional turtle.

Unsignposted answers inside the set: handling warns about housing multiple sliders and never points at 05 for volume; 06 lists gravidity as a reason for refusal and 05 separately says gravid females need a nesting site, neither mentions the other; 06 says digestion stops below 72 F and 05 owns the heater spec.

## 4. Deep dive overlap and conflict

Read twice or more: adult size, UVB mandatory, over-filter, dry basking platform, never release. That is four pages saying the same three things. Conflicts:

- Basking. Tank setup: "Basking surface temperature should reach 85 to 95 F." Feeding: "Target roughly 75 to 80 F water with an 85 to 90 F basking spot."
- Volume. Tank setup: "a practical adult minimum of 75 to 100 gallons." Enrichment: "An adult needs water volume in the low hundreds of gallons."
- Portion, inside one page. Feeding: "Offer as much as the turtle can finish in about 15 to 20 minutes," then "or whatever it clears in 10 to 15 minutes."
- Vet cost, inside one page. Cost table: "Annual vet wellness check | $60 - $100." Cost body: "Routine wellness exams often run $80 to $180."

## 5. The one link each page needed

- 00: "Sale of sliders with shells under 4 inches is illegal in the US under federal law." Point to the legal guide.
- 01: "in 1975 the FDA banned the sale of turtles with a shell under four inches." Legal guide.
- 02: "A 100-plus gallon enclosure is the single biggest line item here, and it's also the one first-time keepers most often try to shrink." Tank setup.
- 03: "Skipping thorough hand-washing before and after contact, Salmonella risk with aquatic turtles is real, not theoretical." Salmonella and Reptile Hygiene.
- 04: "A canister filter that's genuinely powerful enough for your tank volume, paired with a water test kit." Tank setup.
- 05: "Gravid females need a nesting option, without a suitable place to lay, a female risks egg-binding, a serious complication." Tortoise Sexing, Eggs, and Egg Binding.
- 06: "Brumation. A natural cold-season slowdown, roughly October through March." Tortoise Brumation, whose title hides that it applies here.
- 07: "An adult needs water volume in the low hundreds of gallons." Tank setup, where the smaller number lives.
- 08: None. It links out well already.

## 6. Trust

Doubts: the hub disagreeing with its own checklist and with four deep dives; the cost guide quoting two vet prices; and the legal guide saying "That deadline is days away as of this writing" about a July 30, 2026 filing, with no date on the page. Reading it in September 2026, that sentence is wrong and I cannot tell how much else is stale.

Most convincing: "sliders have no salivary glands and can only eat while at least partially submerged, always offer food in the water, never on the basking dock." Runner-up, the enrichment line "If your turtle is working the front glass constantly, take the escape-behavior finding seriously before you buy a colored object."

## 7. Set grade: B

The deep dives are genuinely good and sourced; the hub drags the set down by contradicting them. First two changes: strip the hub to routing plus the water-maintenance schedule it uniquely owns, and reconcile the tank size, water temperature, feeding interval, and vet cost numbers to one figure each. Then date-stamp the legal guide.

## Not covered anywhere

- Cycling a new tank before the turtle arrives, checked against the Health and More list: no entry covers it.
- What a monthly deep clean involves, and swapping filter media without losing the biofilter.
- Outdoor pond build specifics: depth, overwintering, predator-proofing.
- Choosing a healthy hatchling at purchase, quarantine, transport, and acclimation.
- Space and basking-spot allowance per additional slider when cohabiting.

## Hognose Snake (2026-09-09)

Independent Opus reader, launched from the session against the pre-rewrite
extract in .reader/hognose-snake/. Raw output, unedited.

# Hognose Snake Set Review

**1. Page by page**

- **00 hub**: finished it; I can act on the cost tables, the shopping checklist, and the picky-hatchling feeding fixes. It is also the single biggest source of conflict in the set. **C.**
- **01 encyclopedia**: finished it, ninety seconds. Actionable: nothing, except that most animals sold are captive-bred. **C-.**
- **02 cost**: finished it. Actionable: morph price tiers, $200 to $500 setup, $10 to $25 a month, vet line items. **A-.**
- **03 handling**: finished it. Actionable: wash hands, do not handle after feeding, do not panic at the hood. No actual technique. **B-.**
- **04 health**: finished it. Actionable: five named conditions with causes and prevention. **B+.**
- **05 tank setup**: finished it. Actionable: sizes by sex, temps, humidity, substrate ratio, lighting. **A-.**
- **06 enrichment**: finished it, best-written page here. Actionable: deep substrate on the cool end, priority order. **A.**
- **07 legal**: finished it. Actionable: a state table with citations and an honest unverified section. **A.**

**2. Hub and encyclopedia**

The encyclopedia barely earns its slot: adult size, wild diet, and a good paragraph on how the western hognose went from Miscellaneous to hobby staple. Everything else is recycled bluffing description. The hub does earn a place, because it is the only page carrying feeding at all, but it contradicts the deep dives:

- Humidity. Hub: "Ambient humidity of 40 to 60% is appropriate." Setup: "30 to 50% ambient humidity, genuinely on the dry side." For a species whose top two illnesses are blamed on dampness, that is the worst possible place to disagree.
- Heat. Hub: "a warm hide with a belly-heat surface temperature of 85 to 90 degrees F on an under-tank heater with a thermostat, a cool hide at 72 to 76 degrees F." Setup: "Basking area around 90 to 95 F on one end, cool side 70 to 75 F," with halogen over substrate preferred and heat mats called the older advice.
- Activity. Hub: "Hognose snakes are crepuscular, most active in the morning and evening." Setup: "genuinely diurnal, active during the day." The lighting recommendation rests on this.
- Substrate depth. Hub: "4 to 6 inches." Setup: "3 to 6 inches."
- Enclosure. Hub gives one size for adults; setup splits it by sex, males at "30x13x13 inches," females at "36x18x16."
- Venom. Hub: bites "cause minimal local irritation at most." Legal: "local swelling, bruising, and mild cellulitis, with a full recovery in about five months."
- Feeding place. Hub treats a separate container as a picky-eater trick; health and setup both call it standard impaction prevention.

**3. The set as a whole**

I could buy, set up, and legally site this animal. Feeding I could scrape by on, from the hub alone. Still missing: how to house a hatchling, which is what almost everyone actually buys, since every size here is an adult figure; prey size in grams and a weight-based feeding target, when obesity is called a lifespan issue; thawing procedure; how to pick a breeder and what to check on the animal; cleaning cadence; brumation; whether a female needs anything different beyond space.

Questions answered on another page with no signpost: the cost guide's heat-mat-versus-halogen hedge is settled in the setup guide; the health guide's "feed in a separate container" makes sense only once the setup guide explains the deep loose substrate; the hub's wild-caught parasite warning is unresolved until the legal guide explains where collection is even allowed; the enrichment guide's cool-side rule is the missing half of the setup guide's substrate section.

**4. Overlap and conflict across the deep dives**

Read twice: the play-dead display (hub, encyclopedia, handling, enrichment, four times), the dry-not-damp rule (setup, health), feeding off-substrate (setup, health), and the bite case report (handling, legal). Deep-dive-to-deep-dive numbers mostly hold. Two frictions: handling says "Handle regularly and gently to build trust" in spirit, while enrichment says "Do not read the hooding display as personality, because it is a threat response" and treats frequent displays as a husbandry failure. And the handling guide calls the bite "not something to be genuinely afraid of" against the legal guide's five-month recovery.

**5. One link per page**

- Hub: "Wild-caught hognose snakes frequently carry internal parasites (pinworms, nematodes, coccidia)." Point to the legal guide.
- Encyclopedia: "Most animals sold now are captive-bred rather than collected." Point to the legal guide.
- Cost: "current specialist guidance increasingly favors swapping the mat for a low-wattage halogen basking bulb on that same thermostat." Point to the tank setup guide.
- Handling: "Once you're comfortable reading your hognose's body language, the setup behind that calm behavior matters just as much." Point to the enrichment guide.
- Health: "Feeding in a separate container away from the loose substrate ... is the single most effective prevention." Point to the tank setup guide.
- Tank setup: "Provide 3 to 6 inches of loose, dry, diggable substrate." Point to the enrichment guide.
- Enrichment: "Other quantities are available, and a proper depth needs more than one bag." Point to the cost guide.
- Legal: "A real medical case report on a keeper bitten by a Western hognose during feeding documented local swelling, bruising, and mild cellulitis." Point to the handling guide.

**6. Trust**

Doubts: the hub reads like an older draft nobody reconciled, and it is the page the navigation lands on first. The enrichment guide cites one study by three surnames with no year or journal. "Other quantities are available" is a leftover product line. Most convincing sentence: "Do not handle a hognose that is mid-dig, which interrupts the behavior the enclosure exists to allow."

**7. Set grade: B-**

Four excellent deep dives undermined by a hub that disagrees with them on humidity, temperature, and day cycle. First two changes: rewrite the hub from the deep dives so every number matches, and add a feeding guide covering hatchlings, prey weight, and thawing.

## Not covered anywhere

- Hatchling housing: no page or shared guide sizes an enclosure for a baby.
- Prey size in grams and weight-based feeding targets: the body condition guide covers reading condition, not portioning.
- Thawing and prep of frozen rodents: absent from species pages and the shared list.
- Choosing a breeder and health-checking the animal at purchase: quarantine starts after you own it.
- Enclosure cleaning cadence and full substrate change interval: the stool guide is a daily observation check, not a cleaning schedule.
- Brumation: not mentioned once.

## Hognose Snake (2026-09-09)

Independent Opus reader, launched from the session against the pre-rewrite
extract in .reader/hognose-snake/. Raw output, unedited.

# Hognose Snake Set Review

**1. Page by page**

- **00 hub**: finished it; I can act on the cost tables, the shopping checklist, and the picky-hatchling feeding fixes. It is also the single biggest source of conflict in the set. **C.**
- **01 encyclopedia**: finished it, ninety seconds. Actionable: nothing, except that most animals sold are captive-bred. **C-.**
- **02 cost**: finished it. Actionable: morph price tiers, $200 to $500 setup, $10 to $25 a month, vet line items. **A-.**
- **03 handling**: finished it. Actionable: wash hands, do not handle after feeding, do not panic at the hood. No actual technique. **B-.**
- **04 health**: finished it. Actionable: five named conditions with causes and prevention. **B+.**
- **05 tank setup**: finished it. Actionable: sizes by sex, temps, humidity, substrate ratio, lighting. **A-.**
- **06 enrichment**: finished it, best-written page here. Actionable: deep substrate on the cool end, priority order. **A.**
- **07 legal**: finished it. Actionable: a state table with citations and an honest unverified section. **A.**

**2. Hub and encyclopedia**

The encyclopedia barely earns its slot: adult size, wild diet, and a good paragraph on how the western hognose went from Miscellaneous to hobby staple. Everything else is recycled bluffing description. The hub does earn a place, because it is the only page carrying feeding at all, but it contradicts the deep dives:

- Humidity. Hub: "Ambient humidity of 40 to 60% is appropriate." Setup: "30 to 50% ambient humidity, genuinely on the dry side." For a species whose top two illnesses are blamed on dampness, that is the worst possible place to disagree.
- Heat. Hub: "a warm hide with a belly-heat surface temperature of 85 to 90 degrees F on an under-tank heater with a thermostat, a cool hide at 72 to 76 degrees F." Setup: "Basking area around 90 to 95 F on one end, cool side 70 to 75 F," with halogen over substrate preferred and heat mats called the older advice.
- Activity. Hub: "Hognose snakes are crepuscular, most active in the morning and evening." Setup: "genuinely diurnal, active during the day." The lighting recommendation rests on this.
- Substrate depth. Hub: "4 to 6 inches." Setup: "3 to 6 inches."
- Enclosure. Hub gives one size for adults; setup splits it by sex, males at "30x13x13 inches," females at "36x18x16."
- Venom. Hub: bites "cause minimal local irritation at most." Legal: "local swelling, bruising, and mild cellulitis, with a full recovery in about five months."
- Feeding place. Hub treats a separate container as a picky-eater trick; health and setup both call it standard impaction prevention.

**3. The set as a whole**

I could buy, set up, and legally site this animal. Feeding I could scrape by on, from the hub alone. Still missing: how to house a hatchling, which is what almost everyone actually buys, since every size here is an adult figure; prey size in grams and a weight-based feeding target, when obesity is called a lifespan issue; thawing procedure; how to pick a breeder and what to check on the animal; cleaning cadence; brumation; whether a female needs anything different beyond space.

Questions answered on another page with no signpost: the cost guide's heat-mat-versus-halogen hedge is settled in the setup guide; the health guide's "feed in a separate container" makes sense only once the setup guide explains the deep loose substrate; the hub's wild-caught parasite warning is unresolved until the legal guide explains where collection is even allowed; the enrichment guide's cool-side rule is the missing half of the setup guide's substrate section.

**4. Overlap and conflict across the deep dives**

Read twice: the play-dead display (hub, encyclopedia, handling, enrichment, four times), the dry-not-damp rule (setup, health), feeding off-substrate (setup, health), and the bite case report (handling, legal). Deep-dive-to-deep-dive numbers mostly hold. Two frictions: handling says "Handle regularly and gently to build trust" in spirit, while enrichment says "Do not read the hooding display as personality, because it is a threat response" and treats frequent displays as a husbandry failure. And the handling guide calls the bite "not something to be genuinely afraid of" against the legal guide's five-month recovery.

**5. One link per page**

- Hub: "Wild-caught hognose snakes frequently carry internal parasites (pinworms, nematodes, coccidia)." Point to the legal guide.
- Encyclopedia: "Most animals sold now are captive-bred rather than collected." Point to the legal guide.
- Cost: "current specialist guidance increasingly favors swapping the mat for a low-wattage halogen basking bulb on that same thermostat." Point to the tank setup guide.
- Handling: "Once you're comfortable reading your hognose's body language, the setup behind that calm behavior matters just as much." Point to the enrichment guide.
- Health: "Feeding in a separate container away from the loose substrate ... is the single most effective prevention." Point to the tank setup guide.
- Tank setup: "Provide 3 to 6 inches of loose, dry, diggable substrate." Point to the enrichment guide.
- Enrichment: "Other quantities are available, and a proper depth needs more than one bag." Point to the cost guide.
- Legal: "A real medical case report on a keeper bitten by a Western hognose during feeding documented local swelling, bruising, and mild cellulitis." Point to the handling guide.

**6. Trust**

Doubts: the hub reads like an older draft nobody reconciled, and it is the page the navigation lands on first. The enrichment guide cites one study by three surnames with no year or journal. "Other quantities are available" is a leftover product line. Most convincing sentence: "Do not handle a hognose that is mid-dig, which interrupts the behavior the enclosure exists to allow."

**7. Set grade: B-**

Four excellent deep dives undermined by a hub that disagrees with them on humidity, temperature, and day cycle. First two changes: rewrite the hub from the deep dives so every number matches, and add a feeding guide covering hatchlings, prey weight, and thawing.

## Not covered anywhere

- Hatchling housing: no page or shared guide sizes an enclosure for a baby.
- Prey size in grams and weight-based feeding targets: the body condition guide covers reading condition, not portioning.
- Thawing and prep of frozen rodents: absent from species pages and the shared list.
- Choosing a breeder and health-checking the animal at purchase: quarantine starts after you own it.
- Enclosure cleaning cadence and full substrate change interval: the stool guide is a daily observation check, not a cleaning schedule.
- Brumation: not mentioned once.

## Pacman frog (2026-09-14)

One Opus 5 agent, eight pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment), about 87k tokens. Full agent
output below, unedited.

---

# Pacman Frog Page Set: A Buyer's Review

## 1. Page by page

- **00 Hub.** Finished it. I can buy the list and set the tank up from the checklist alone. But its numbers are the ones that fight everything downstream. **C+**
- **01 Encyclopedia.** Finished it, short enough. Actionable only in that it tells me there are two species and a hybrid sold under one name. **B-**
- **02 Cost.** Finished it. I can budget: frog $15-100, setup ~$100-225, vet $50-150, emergency ~$250. **B**
- **03 Handling.** Finished it. Clear rules: tongs, one frog per tank, support from underneath, expect a jump. **B+**
- **04 Health.** Finished it. Symptom lists are specific enough to act on at 11pm. **B+**
- **05 Tank setup.** Finished it. The side-mounted heat mat rule alone justified the page. **A-**
- **06 Feeding.** Finished it. Best page in the set: it tells me where sources disagree instead of picking one and hiding it. **A**
- **07 Enrichment.** Finished it, and it was the one I didn't expect to. Gives me a weekly weigh-in and a real warning sign. **A**

## 2. Do the hub and encyclopedia earn their place?

The encyclopedia does, barely: the Bell 1843 history and the cranwelli/ornata/fantasy-frog split appear nowhere else, and that matters when a shop labels everything "Pacman frog."

The hub does not. It restates the deep dives at lower resolution and, worse, disagrees with them:

- **Humidity.** Hub: "Humidity: 70 to 90%." Tank setup: "60 to 80% is the target range." Feeding: "50 to 80% humidity." Three ranges for one animal.
- **Adult feeding.** Hub: "Adults eat every 3 to 4 days." Health: "adults should eat roughly once a week." Feeding: "roughly 1 to 3 times a week as the range." The hub number is nearly twice the health guide's, on a species both call obesity-prone.
- **Heat mat.** Hub checklist: "Low-wattage heat lamp or under-enclosure mat with thermostat." Tank setup: "Never place a heat mat under the tank." The hub tells me to do the thing the deep dive calls a burn risk.
- **Substrate changes.** Hub: "Change the substrate monthly," billed annually at $30-50. Tank setup: "Change the substrate every 2 to 3 months." Cost: "substrate only needs changing every couple of months." The hub's own budget line is built on the wrong frequency.
- **Night temperature.** Hub gives "75 to 85 degrees F" flat; tank setup adds "dropping to 65 to 75°F at night." The hub reads as if no night drop exists.
- **Rodents.** Hub: "Offer appropriately sized live or freshly deceased prey... Occasional pinky mice." Feeding: "thawed, never live, never microwaved."

## 3. Could I actually keep one?

Yes, mostly. I could buy, build, feed, and spot trouble. Still missing:

- No page says **when a juvenile becomes an adult** for schedule purposes. Age? Size? Both schedules exist; the switch point doesn't.
- No **routine cleaning** between full substrate changes. Spot-clean waste daily? Weekly?
- **How to dechlorinate.** Four pages say "dechlorinated." None say conditioner, standing time, or brand-neutral method.
- **What a healthy frog looks like at purchase.**

Questions raised on one page and answered on another, unsignposted: the hub's "If a frog consistently refuses food for more than 2 to 3 weeks, investigate environmental conditions" is a whole feeding-guide section. The health guide's "a young frog under about a year old going dormant... worth a vet call" is expanded properly in the feeding guide. The cost guide's "impaction, the risk that defines this species" is the health guide's core.

## 4. Overlap and conflict across deep dives

Read three times: the identical dinosaur bite-force fun fact in the cost, handling, and tank setup pages. Read twice: cannibalism, tongs-not-fingers, impaction-from-substrate.

Real conflicts:

- **Adult schedule.** Health: "adults should eat roughly once a week." Feeding: "an exotics veterinary clinic says 2 to 3 times a week."
- **Adult size.** Handling: "Pacman frogs stay smaller, typically 4 to 7 inches." Encyclopedia: "3-5 inches (7-12 cm) body." Hub: "3 to 5 inches in diameter."
- **Weight.** Hub: "weigh over 200 grams." Encyclopedia: "0.5-1.5 lbs," which starts above 225 g.
- **Sexing age.** Handling: "commonly by around 5 to 6 months old." The hub gives no age at all.
- **UVB.** Tank setup: "No special lighting is required." Health: MBD "Caused by missing calcium supplementation or UVB."

## 5. The one link each page needed

- **Hub:** "If a frog consistently refuses food for more than 2 to 3 weeks, investigate environmental conditions" -> feeding guide.
- **Encyclopedia:** "Breeders also cross Ceratophrys cranwelli with the Surinam horned frog to produce the captive hybrid marketed as the fantasy frog" -> cost guide, where morph prices live.
- **Cost:** "Impaction, the risk that defines this species, is what usually leads to a bill like that" -> health issues guide.
- **Handling:** "to protect yourself from Salmonella" -> the Salmonella guide sitting unlinked in the sidebar.
- **Health:** "use fine coco fiber rather than gravel or coarse bark" -> tank setup guide.
- **Tank setup:** "a real cause of this species' impaction risk" -> health issues guide.
- **Feeding:** "Impaction. Blind lunging at prey can mean accidentally swallowing loose substrate" -> health issues guide.
- **Enrichment:** "obesity plus impaction are the two defining captive problems" -> health issues guide.

## 6. Trust

What hurt: the humidity spread, the two-versus-seven-times-a-week feeding gap, and a hub checklist that recommends the burn risk its own deep dive forbids. The repeated dinosaur fact reads as padding. The hub's flat "never distilled or reverse-osmosis water" is asserted with no reasoning anywhere.

What convinced me a keeper wrote this: "Never place a heat mat under the tank. Pacman frogs burrow to the substrate floor, and a mat positioned underneath risks burning a frog that's buried directly on top of it." Runner-up, the enrichment page noting that the validated body-condition scale threw out photos of restrained frogs "because holding an animal distorts the very landmarks you are trying to read."

## 7. Set grade: B-

Strong deep dives undercut by a hub that contradicts them on the numbers a new keeper will copy first.

First two changes:
1. Make the hub derive its numbers from the deep dives, starting with humidity, adult feeding frequency, the heat mat line, and substrate change interval.
2. Add the juvenile-to-adult transition point and a plain dechlorination method.

## Not covered anywhere

- When a juvenile becomes an adult for feeding-schedule purposes (age or size).
- Routine spot-cleaning between full substrate changes.
- How to actually dechlorinate water; the Amphibian Quarantine guide covers hardness, not this.
- What to look for in a healthy frog at the point of purchase.

## Zebra finch (2026-09-14)

One Opus 5 agent, eight pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment), about 97k tokens. Full agent
output below, unedited.

---

# Zebra Finch Page Set: Reader Review

## 1. Page by page

- **00 Hub.** Finished it, but it is the weakest page and I acted on the wrong numbers until the deep dives corrected me. Actionable: checklist, sexing FAQ. **C**
- **01 Encyclopedia.** Finished it. Nothing to act on, and its flock-size line is contradicted later. **C+**
- **02 Cost.** Finished it. I can budget: two birds minimum, $180 to $400 upfront. **B**
- **03 Handling.** Finished it. I can act today: net or towel, never the tail, do not force contact. **A-**
- **04 Health.** Finished it. Concrete symptom list I would call a vet over. **A-**
- **05 Cage setup.** Finished it. Dimensions, bar spacing, temperature, liner, all buyable. **B+**
- **06 Feeding.** Finished it. Ratios, teaspoon measure, no grit, cuttlebone. Best page here. **A**
- **07 Enrichment.** Finished it fast. Priority order and the What Not to Do list are the most usable thing in the set. **A**

## 2. Hub and encyclopedia vs the deep dives

The encyclopedia earns its place: origin, taxonomy, history. The hub does not. It restates the deep dives less accurately, and it is the first page the nav gives me.

Conflicts, hub first:

- Bar spacing. Hub: "Bar spacing of 1/2 inch or less keeps a finch from squeezing through." Setup: "No wider than 3/8 inch, per PetMD. That's tighter than the roughly 1/2 inch that works for a canary." The hub gives the canary number. That is a cage I might buy.
- Cage cost. Hub table: "Flight cage (24-30 in wide) | $60 | $120." Cost guide: "Wide flight cage | $120 - $220." No overlap at all.
- Cage dimension. Hub: "A flight cage at least 24 inches wide." Setup: "at least 24 inches long by 14 inches wide by 18 inches tall." The hub turned the length into the width.
- Darkness. Hub: "a consistent 10 to 12 hours of darkness." Setup: "approximately 12 hours of light and 12 hours of darkness."
- Lifespan. Hub FAQ: "Typically 5 to 10 years in captivity." Encyclopedia: "5 to 7 years in captivity." Cost guide adds Lafeber at "roughly 3 to 5 years."
- Diet framing. Hub checklist: "Quality finch seed mix or pelleted diet," an either/or. Feeding: "pellets make up roughly 70% of a finch's diet... seed limited to about one level teaspoon per bird per day."

The hub's vet line, "Annual avian vet check | $40 | $70," also sits badly next to the cost guide saying an avian exam "typically costs more than a routine cat or dog visit."

## 3. Could I keep one?

Yes, mostly. I can buy a pair, pick a long cage with 3/8 inch bars, set 65 to 80F, feed 70/20/teaspoon with cuttlebone, run a paper liner, and know what sends me to a vet same day.

Still missing: what to do when one of a bonded pair dies, and how to introduce the replacement; how long a new bird sits apart before meeting mine; what a normal zebra finch weighs in grams; what to do if a hen lays despite no nest.

Questions raised on one page, answered on another, with no link:

- Health says calcium deficiency drives egg binding. Feeding explains the cuttlebone mechanism. Neither points at the other.
- Setup warns a stable light cycle can cue breeding. Enrichment says provide material without a nest site. No link.
- Cost says "you can never buy just one." Enrichment quantifies the right number and warns against bigger. No link.
- Health says quiet daily observation is how you catch problems. Handling says the same. No link.

## 4. Overlap and conflict across the deep dives

Read twice or more: never keep one, RSPCA quote verbatim in cost and setup; fly not climb; varied perch diameters; shallow bath; all-seed is bad; cuttlebone.

Real conflict on wild flock size. Encyclopedia: "wild zebra finches travel in flocks of dozens to over a hundred birds." Setup repeats it: "in the wild they travel in flocks of dozens up to around 100 birds." Enrichment: "the commonest unit was a pair, 94.2 percent mixed-sex, with groups of three to ten also frequent and anything larger uncommon." Only the enrichment page seems to know the others exist.

Smaller: setup says "several perches of varied diameter, positioned with enough distance between them"; enrichment says put them "at the ends of the flight path, not through the middle of it." Enrichment is the usable one.

Feeding says keep pellets constantly available; hub's Diet section never mentions the teaspoon limit at all.

## 5. The one link each page needed

- **Hub.** "though avian vets increasingly recommend building the diet around a pelleted food instead" should point to Converting a Seed-Eating Bird to Pellets.
- **Encyclopedia.** "wild zebra finches travel in flocks of dozens to over a hundred birds" should point to the enrichment guide, which disputes it.
- **Cost.** "a genuine flight cage that lets the birds fly the length of it rather than just hop between two perches is a meaningfully better setup than the bare minimum" should point to the cage setup guide. It links to the canary cost guide instead.
- **Handling.** "reading this species' wellbeing from the outside is largely how you'll be interacting with it day to day" should point to Reading Bird Body Language.
- **Health.** "This is exactly why a cuttlebone is a non-negotiable part of the setup, not an optional extra" should point to the feeding guide.
- **Setup.** "a stable light cycle at home can inadvertently cue breeding behavior in a mixed-sex group" should point to Photoperiod and Sleep.
- **Feeding.** "PetMD's guidance lands in a similar place, pellets at 60 to 70%+ of intake" should point to Converting a Seed-Eating Bird to Pellets. It tells me the target and never the method.
- **Enrichment.** "do not let one bird lose condition unchecked" should point to Sexing, Weight, and Body Condition.

## 6. Trust

What hurt: the hub disagreeing with its own deep dives on bar spacing and cage price, which is the exact thing a buyer acts on. Also the cost guide quoting "very young, unweaned pairs at $29" as the budget option without a word about whether buying unweaned finches is wise.

The sentence that convinced me a keeper wrote this, from the handling guide: "Hold firmly enough to prevent escape but gently, too much pressure will make the bird gasp or squeal, a clear sign to ease up."

## 7. Set grade: B

Strong, sourced deep dives sitting under a hub that contradicts them.

First two changes: rebuild the hub from the deep dives so bar spacing, cage cost, cage dimensions, darkness hours and lifespan match. Then reconcile the flock-size claim, and have the encyclopedia and setup pages link to the enrichment finding instead of repeating the number it overturns.

## Not covered anywhere

- What to do when one bird of a bonded pair dies, and how soon to replace it.
- Quarantine-to-introduction sequencing for adding a bird to an existing pair. The shared quarantine guide covers the timeline; nothing joins it to the enrichment page's introduction advice.
- Normal zebra finch weight in grams. The shared weight guide promises grams but is written around parrots, and the encyclopedia gives only 0.3 to 0.5 oz.
- What to do if a hen lays with no nest provided. The shared chronic egg laying guide is scoped to budgies, cockatiels and lovebirds.

## Angelfish (2026-09-14)

One Opus 5 agent, eight pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment), about 86k tokens. Full agent
output below, unedited.

---

# Angelfish Set Review

## 1. Page by page

- **00 Care guide hub.** Finished it. Actionable: tank size, temp band, checklist, water change schedule. It is the only page with a water change number. **B**
- **01 Encyclopedia.** Finished it, fast. Actionable: adult size including fins, lifespan, origin. The 1823 to 1909 to 2022 history is the best writing in the set. **B+**
- **02 Cost guide.** Finished it. Actionable: itemized setup table, monthly range, the marine vs freshwater price trap. **B**
- **03 Handling.** Finished it. Actionable: add angelfish last, no nano fish, buy six juveniles and let pairs form. **A-**
- **04 Health issues.** Finished it. Actionable: symptom lists, metronidazole by brand name, 86°F for ich. **B+**
- **05 Tank setup.** Finished it, took notes. Actionable: heater wattage math, pH range, substrate, the lid. Best page here. **A**
- **06 Feeding.** Finished it. Actionable: schedule by life stage, 2 to 5 minute rule, sunken belly test. **A-**
- **07 Enrichment.** Finished it. Actionable: priority order list, cardinal tetra substitution, "two or three adults is the bullying setup." **A**

## 2. Hub and encyclopedia

The encyclopedia earns its place: natural history and the genome story appear nowhere else. The hub mostly restates the deep dives in shorter form, and it is where the contradictions live.

Conflicts, hub first:
- Temperature. Hub: "heated between 78 and 84 degrees F." Setup: "comfortable in the 78 to 82°F range, some sources extend slightly lower to 75°F." 84 is ich-treatment territory, not a housing band.
- Who fits in 29 gallons. Hub FAQ: "A minimum of 29 to 30 gallons for a single pair." Setup: "29 gallons... is the practical minimum for a single adult." One fish or two is not a rounding difference.
- Staple food. Hub: "a high-quality cichlid pellet or flake as a dietary staple." Feeding: "The staple is a high-quality flake, generally preferred over pellets for this species."
- Ongoing cost. Hub annual table: food "$50" to "$90" plus test kit "$20" to "$30," so about $70 to $120 a year. Cost guide: "$15 - $40" a month, which is $180 to $480 a year. Four times apart at the low end.
- Setup cost. Hub's four rows total roughly $180 to $345. Cost guide: "Roughly $300 to $600 for a Proper Tank."
- Feeding window. Hub: "only what's consumed within a couple of minutes." Feeding: "within about 2 to 5 minutes."
- Lifespan. Encyclopedia: "Wild Lifespan: 10-12 years." Cost: "8 to 12 years is typical with good care." Captive reading lower than wild needs a word of explanation.

## 3. The set as a whole

I could buy and set up a tank tomorrow: size, height, heater watts, substrate, plants, filter type, lid, pH target, stocking order, feeding schedule, and what illness looks like. Gaps:

- Acclimation procedure. Feeding names "pH shock during acclimation" as a cause of refusal and never says how to acclimate.
- Water change size and frequency exist only on the hub. Setup and health both say "regular" and stop.
- Nitrate target. Ammonia and nitrite get zeros, nitrate gets nothing.
- Choosing a healthy fish at the store, and how many to buy for a 55.
- A positive tankmate list. I know tiger barbs and neons are out and cardinals are in.
- Breeding past the fry feeding schedule.

Unsignposted handoffs: the cost guide's "tank height and quality filtration, both genuinely non-negotiable" never points at the setup page that has the numbers. Health's overfeeding line never points at feeding. Feeding's "Territorial or social stress" never points at handling. Handling's weak-swimmer note never points at setup's flow section.

## 4. Across the deep dives

Read twice or more: height over length (setup, enrichment, cost, hub), weak swimmers and gentle flow (handling, setup), adults eating neons (handling, enrichment, feeding, hub), fin nipping (health, enrichment, hub). The height point is repeated four times without adding anything after the first.

Disagreements:
- Group size for a 55. Setup: "a small group of four to six." Handling: "most keepers raise a group of six or more juveniles."
- Pellets versus flake, as above, and the cost guide's checklist side lists "cichlid pellets" while feeding prefers flake.
- Prey threshold framing. Handling: "once it reaches roughly 3 inches." Feeding: "Small fish under about 2 inches are natural prey." Both plausible, different yardsticks, never reconciled.

## 5. One link per page

- **Hub:** "Avoid keeping angelfish long-term with fish small enough to be viewed as prey once they mature, such as neon tetras." Point at the enrichment guide, which names the substitute.
- **Encyclopedia:** "Adult Size: 6 inches (15 cm) body; 8-10 inches (20-25 cm) including fins." Point at tank setup.
- **Cost:** "What determines your total cost is tank height and quality filtration." Point at tank setup.
- **Handling:** "Water quality and stress management also do most of the heavy lifting in preventing illness here." Point at health issues.
- **Health:** "Overfeeding is one of the quieter causes of the water-quality problems behind most of this list." Point at feeding.
- **Tank setup:** "Combined with prioritizing height over length and stocking angelfish last in a community tank." Point at handling.
- **Feeding:** "Small fish under about 2 inches are natural prey for angelfish given their ambush biology." Point at handling.
- **Enrichment:** "shredded fins are a route into infection." Point at health issues.

## 6. Trust

Doubts: the hub's cost tables and 84°F ceiling read like they were written separately from the deep dives and never reconciled. The feeding guide names two parasites as "a stomach parasite specific to cichlids" and "a separate parasite" without naming either, which is the one place the writing goes vague exactly where I needed a name to look up. Only two outside sources are ever named, Saxby 2010 and Petco.

Most convincing sentence, from tank setup: "a '20-gallon long' tank, despite the larger-sounding volume, is often only about 12 inches tall, genuinely too shallow for this species." That is someone who has watched a beginner buy the wrong tank.

## 7. Set grade: B

Strong, specific deep dives undercut by a hub that contradicts them on temperature, cost, and stocking.

First two changes: make the hub derive its numbers from the deep dives instead of restating them from somewhere else, and settle pellets versus flake in one sentence everywhere.

## Not covered anywhere

- Acclimation procedure for a new angelfish, despite pH shock being named as a cause of refusal. The transport guide covers moving an established fish, not bringing one home.
- Nitrate target and water change volume for this species. The shared pH, GH, and KH guide is written for coldwater and goldfish, and never reaches the soft, acidic water this fish wants.
- How to pick a healthy angelfish at point of sale.
- A positive tankmate list beyond cardinal tetras.
- Breeding and fry rearing past the feeding schedule, including any way to sex them.

## Tokay gecko (2026-09-14)

One Opus 5 agent, eight pages (hub, encyclopedia, cost, handling, health
issues, tank setup, enrichment, legal), about 88k tokens. Full agent
output below, unedited.

---

## 1. Page by page

**00 Hub.** Finished it, and it is the only page that tells me how often to feed and to gut-load 24 to 48 hours ahead, but its temperatures and enclosure size contradict the deep dives, so I cannot act on the husbandry numbers. **D.**

**01 Encyclopedia.** Finished it fast; the trade history (5 million animals a year, questionable captive-bred paperwork) is the one thing here I actually acted on, because it changed how hard I will vet a seller. **B.**

**02 Cost.** Finished it; I can budget $300 to $500 setup, $100 to $150 for a captive-bred normal, $15 to $30 a month, and skip the $15 wild-caught. **B.**

**03 Handling.** Finished it; the session table, the do-not-pull bite rule, and the two-bite distinction are directly usable. **A.**

**04 Health.** Finished it; the vet call list, the 3 to 6 month quarantine, the weekly gram-scale weight, and the 42.9% farmed-parasite figure are all actionable. **A.**

**05 Tank setup.** Finished it; this is my build sheet, and it is the only page that gives substrate depth and a bulb replacement interval. **A-.**

**06 Enrichment.** Finished it; the priority order and the honest caveat on pairing are usable, though "one study" is thin ground to change housing on. **B+.**

**07 Legal.** Finished it; I know my state answer and that a domestic captive-bred purchase raises no CITES question. **A.**

## 2. Hub and encyclopedia

The encyclopedia earns its place: nothing else in the set covers range, wild diet, or the trade volume. The hub does not. It repeats the deep dives at lower resolution and then disagrees with them, which is worse than omitting.

Temperature, the serious one. Hub: "Maintain daytime temperatures of 82 to 88 degrees F with a basking area, dropping to 72 to 78 degrees F at night." Setup: "Basking area 90 to 105F, cooler zone 80 to 85F, and nighttime should stay warmer than many homes naturally run, 75 to 80F." The health guide backs the setup page. A reader who builds to the hub runs a cold basking spot and a night floor below the stated minimum, which is the exact cause the health guide names for respiratory infection.

Size. Hub: "A minimum 20x20x30" (or larger) vertical, arboreal enclosure." Setup and cost: "18 inches long by 18 inches wide by 36 inches tall as a minimum." Different footprint, six fewer inches of the dimension both pages call the important one.

Handling. Hub: "Tokay geckos can become calmer over time with consistent, patient handling." Handling guide, for a gecko that barks or gapes: "No sessions. Baldwin's call is a hands-off terrarium subject."

Social. Hub: "ideal for a single adult tokay gecko." Enrichment: "pair housing improves welfare in this species."

Lifespan. Hub FAQ: "commonly live 10 to 20 years." Cost: "10 to 15 years is typical in captivity."

## 3. The set as a whole

Yes, mostly. I could source legally, budget, build the enclosure, quarantine, feed, and know when to call a vet. Still missing: how to tell a genuinely captive-bred tokay from laundered wild-caught stock, which the encyclopedia itself raises and drops; anything on females, eggs, or egg binding beyond a prolapse cause; and what to do in the first week with a new, terrified animal.

Questions answered elsewhere without a signpost:
- Cost says night heat is "needed since tokays require warmer nights than most homes provide naturally" and never gives the number. The setup guide has it.
- Handling says "Housing two males together, they fight." The enrichment guide's pairing study is the other half of that, and neither page points at the other.
- Legal notes wild-caught animals "arrive with parasite loads." The health guide has the figures.

## 4. Overlap and conflict across the deep dives

Read twice: wild-caught versus captive-bred (cost, health, handling, legal, encyclopedia), humidity 60 to 80% (setup, health), arboreal height and cork bark (setup, enrichment, hub).

Real conflict is social housing. Setup: "House one gecko per enclosure, tokays are highly territorial." Enrichment: "the results indicate pair housing improves welfare in this species." Neither acknowledges the other.

Second, UVB. Setup: "tokays can technically survive without UVB if their diet supplies enough vitamin D3." Enrichment: "Provision is increasingly treated as a welfare input rather than optional for nocturnal species."

## 5. One link per page

- **Hub:** "Maintain daytime temperatures of 82 to 88 degrees F with a basking area" should link the tank setup guide, and match its numbers.
- **Encyclopedia:** "investigations into the commercial breeding facilities that are supposed to supply them have questioned whether the captive-bred paperwork reflects any captive breeding at all" should link the cost guide, where the buying decision lives.
- **Cost:** "For night heat, needed since tokays require warmer nights than most homes provide naturally" should link the tank setup guide.
- **Handling:** "Housing two males together, they fight, often with serious or fatal results" should link the enrichment guide.
- **Health:** "its own enclosure in a separate room from any other reptile" should link the shared reptile quarantine guide.
- **Setup:** "House one gecko per enclosure, tokays are highly territorial" should link the enrichment guide.
- **Enrichment:** "Socially deprived lizards were more likely to move and hide before feeding" is fine; the page's real gap is the caveat sentence, which should also link the health guide's wild-caught quarantine section.
- **Legal:** "arrive with parasite loads and a temperament shaped by capture" should link the health guide.

## 6. Trust

What made me doubt: the hub reading like it was written from a different source than the deep dives, and the enrichment page building a headline on a single 2024 study. Nothing in the deep dives felt invented.

Most convincing sentence, from the health guide: "a weekly weight on a gram scale, since the slow weight loss Merck names is the sign a keeper can catch before the gecko looks sick."

## 7. Set grade: B

The six deep dives are specific, sourced, and honest about uncertainty; the hub drags the set down by contradicting them on temperature and size.

First two changes: rebuild the hub from the deep dives, or cut its numbers entirely; and make the setup and enrichment pages argue with each other in public over solo versus pair housing, with a link each way.

## Not covered anywhere

- How to verify a tokay is genuinely captive-bred rather than laundered wild-caught stock.
- Females, egg laying, and egg binding as a keeping issue rather than a prolapse cause.
- Acclimation: what the first week with a new tokay should look like.
- Recapturing an escaped tokay, given a fast, arboreal, biting animal.
- Feeding as its own deep dive; only the hub covers schedule, prey size, and gut-loading.

## Sugar glider (2026-09-14)

One Opus 5 agent, nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal), about 88k tokens. Full
agent output below, unedited.

---

## 1. Page by page

- **00 Care guide hub.** Finished it. Actionable: cage minimum, temp band, shopping checklist, the "never alone" rule. Grade **B-**, dragged down by numbers that the deep dives contradict.
- **01 Encyclopedia.** Finished it, fast. Actionable: nothing, and it does not pretend otherwise. The 2019 PeerJ haplotype passage is the only place in the set I learned where US gliders came from. Grade **B+**.
- **02 Cost guide.** Finished it. Actionable: $200 to $500 each, pair, $500 to $1,200 setup, $30 to $60 monthly, $200 emergency float. Grade **B**.
- **03 Handling.** Finished it. Actionable: several days settling, pouch first, 1 to 2 hours daily, back off at crabbing. Grade **A-**.
- **04 Health issues.** Finished it. Actionable: the symptom list, and "do not just add calcium." Thin on everything that is not MBD (dental disease gets one sentence). Grade **B-**.
- **05 Cage setup.** Finished it. Actionable: dimensions, half-inch bar spacing, axle-free wheel, solid bottom, fleece cover. Grade **A-**.
- **06 Feeding.** Finished it, the densest page here. Actionable: the thirds framework, 15 to 20% body weight, evening feeding, the avoid list, named diets. Grade **A**.
- **07 Enrichment.** Finished it. Actionable: the priority order and the no-touching-the-bars test. Grade **A**.
- **08 Legal.** Finished it. Actionable: I can tell whether I may legally own one. Grade **A**.

## 2. Hub and encyclopedia

The encyclopedia earns its place. It is natural history the deep dives never touch, and it is short.

The hub does not. It restates the deep dives at lower resolution and gets numbers wrong doing it.

- Cage. Hub: "minimum 24x24x36" aviary-style cage." Setup: "A minimum of roughly 30 by 18 by 36 inches for a pair, though many current keepers recommend going larger still, 24 by 24 by 48 inches or more."
- Temperature. Hub: "Temperature must stay between 75 and 85 degrees F." Setup: "75 to 88°F is the comfortable range."
- Cage cost. Hub table: "24x24x36 in aviary-style cage | $150 | $300." Cost guide: "Tall cage, sized for a genuinely vertical, climbing pair | $200 - $400."
- Glide. Hub: "can glide up to 150 feet." Encyclopedia: "glide up to 165 feet."
- Diet brand. Hub checklist: "Commercial sugar glider diet (TPG or Wombaroo)." The feeding deep dive never mentions TPG at all, listing "Leadbeater's mixture, Bourbon's Modified Leadbeater's (BML), High Protein Wombaroo (HPW), Critter Love Complete, and Exotic Nutrition."
- Certainty. Hub: a lone glider "frequently develops self-mutilation behaviors." Enrichment: "the solitary animals in its sample were healthy" and the behaviors "not observed."

## 3. The set as a whole

Yes, mostly. I could check the law, budget, buy a cage, kit it out, build a feeding plan, and know what an emergency looks like. Still missing: how to introduce a second glider, how to heat a room to 75 to 88°F, how often to clean, how to vet a breeder, how to glider-proof a room for out-of-cage time, and vacation cover.

Questions answered on another page without the text saying so:

- Cost guide's legal section is answered in full by the legal guide. No link.
- Health guide's "feeding a properly balanced diet like a commercial sugar glider diet from the start" is the entire feeding guide. No link.
- Setup's bonding pouch sentence is the handling guide. No link.
- Hub's "Only exotic veterinarians ... can provide appropriate care" is partly the shared vet-transport guide.

## 4. Overlap and conflict across deep dives

I read the pair requirement four times and MBD three times (health, feeding, hub), in near-identical words. Conflicts:

- Dishes. Cost guide budgets "hides, a glider-safe wheel, dishes, enrichment." Enrichment: "Foraging at height, never a dish."
- Wheel size. Hub: "Solid exercise wheel (12+ inch)." Setup and enrichment say only "large" and never give a diameter, so the one number I can shop with sits on the page least likely to be right.
- Temperature floor. Hub: "cannot tolerate temperatures below 65 degrees F." Handling: "keep the space above roughly 68°F during sessions." Not contradictory, but two floors with no relationship stated.
- Lifespan. Hub and cost say 10 to 15; encyclopedia says "up to 17.8 years recorded in captivity."

## 5. One link per page

- **Hub:** "Temperature must stay between 75 and 85 degrees F." Point to the cage setup guide.
- **Encyclopedia:** "Highly social in the wild, they live in groups of 10-15 individuals." Point to enrichment.
- **Cost:** "Sugar gliders are banned outright in California, Hawaii, and Alaska, and Pennsylvania requires a special permit to keep one." Point to the legal guide. It links a hedgehog cost page instead.
- **Handling:** "A lone glider is more stressed, more defensive, and genuinely harder to bond with than one kept with a companion." Point to enrichment.
- **Health:** "feeding a properly balanced diet like a commercial sugar glider diet from the start." Point to feeding. Biggest miss in the set.
- **Setup:** "A bonding pouch doubles as this resting spot and is also the starting point for taming." Point to handling.
- **Feeding:** "Hind-leg weakness, tremors, or paralysis are emergency signs." Point to health issues.
- **Enrichment:** "Do not improvise the diet, since nutritional disease is common in this species." Point to feeding.
- **Legal:** none needed. It already links three relevant places.

## 6. Trust

What made me doubt: the oxalate list in the feeding guide bundles "carrots, beets, pears, lettuce, figs, and collard greens" with spinach as calcium blockers, which is wrong for several of those and odd for a page whose whole subject is calcium. Second, the hub asserting self-mutilation as near-inevitable while the enrichment guide says the published evidence does not support that.

Most convincing sentence, from enrichment: "The test is whether a glider can get from the bottom to the top and across the cage without touching the bars." Nobody writes that who has not watched one.

## 7. Set grade

**B.** The deep dives are strong and honest; the hub sitting in front of them contradicts them on size, temperature, price, and diet brand, and the pages almost never link each other.

First two changes: rewrite the hub's numbers to match the deep dives, or delete them and let the hub point. Then add the two missing links, health to feeding and cost to legal.

## Not covered anywhere

- How to introduce a second glider to an existing one, including quarantine.
- How to hold a room at 75 to 88°F, and what heat source is safe.
- Cage and pouch cleaning frequency.
- How to choose a breeder or rescue, and what a healthy glider looks like at purchase.
- Glider-proofing a room for out-of-cage time, and recovering an escaped glider.
- Who cares for them when you travel.

## Canary (2026-09-14)

One Opus 5 agent, seven pages (hub, encyclopedia, cost, handling, health
issues, tank setup, enrichment), about 85k tokens. Full agent output
below, unedited.

---

## 1. Page by page

- **00 Hub.** Finished it. Actionable: checklist, cage cover for night dark, egg food during molt. But its numbers fight the cost guide. **C**
- **01 Encyclopedia.** Finished it, enjoyed the Haldane mining history, acted on nothing. **B-**
- **02 Cost guide.** Finished it. Actionable: ask the seller to confirm a male before paying. **B-**
- **03 Handling.** Finished it twice. Actionable: silence in July is molt, silence the week the cage moved is the television. **A-**
- **04 Health issues.** Finished it. Actionable: a male going quiet can precede any breathing sign, and treat the cage as well as the bird. **B**
- **05 Cage setup.** Finished it. Actionable: half inch bar spacing, paper liner daily spot, weekly change, powder-coated steel. **B-**
- **06 Enrichment.** Finished it. Actionable: keep the cage center empty for a flight path, perches at the ends, no sandpaper covers. **A-**

## 2. Hub and encyclopedia

The encyclopedia earns its place: origin, size, and a history section nothing else repeats. The hub does not. Its Housing, Diet, Enrichment, and Health sections are compressed versions of pages 05, 06, and 04, except for diet, which exists nowhere else. And it disagrees with the deep dives repeatedly:

- Cage cost. Hub: "Flight cage (24-30 in wide) | $60 | $120." Cost: "A quality flight cage runs $120 to $220 on its own."
- Cage size. Hub: "A flight cage at least 24 to 30 inches wide." Setup: "24 inches long by 18 inches wide by 18 inches tall is a reasonable minimum."
- Vet. Hub: "Annual avian vet check | $40 | $70." Cost: "An annual avian wellness exam... runs $50 to $100 or more."
- Lifespan, three ways. Hub: "8 to 10 years is typical, with some canaries reaching 12 to 15." Cost: "10 to 15 years with good care, sometimes cited more conservatively at 8 to 12." Encyclopedia: "up to 24 years recorded in captivity."
- Dark hours. Hub: "a consistent 10 to 12 hours of uninterrupted darkness." Enrichment: "Twelve hours of genuine dark for sleep, undisturbed."
- Pairing. Hub FAQ: "A canary does best alone or in a same-sex pair." Enrichment: "Do not house two males together, since they are territorial and will fight."

## 3. The set as a whole

I could buy, cage, and observe a canary confidently. I could not feed one from the deep dives alone: diet exists only as one hub paragraph, with no portions, no daily amounts, no unsafe foods, no answer on grit. Still missing: a cleaning routine beyond the paper liner, what a molt actually looks like week to week, and what to do if a lone hen lays.

Questions raised on one page and answered on another, unsaid:
- Handling and cost both say confirm the sex with the seller. Neither says how. The sidebar's "Sexing, Weight, and Body Condition in Pet Birds" is the answer.
- Handling's silent male sends you to "the health check the closing section points to." The health guide's air-sac mites section is that check, unlinked.
- Setup's air quality warning and handling's kitchen fume warning both point at "Household Hazards for Pet Birds," unlinked.
- The hub's egg-binding paragraph points at the shared chronic egg laying guide, unlinked.

## 4. Overlap and conflict across deep dives

Read twice or more: horizontal not vertical flight (cost, setup, enrichment), varied-diameter perches (setup, enrichment, hub), bathing (setup, enrichment, hub), only males sing (cost, handling, hub, encyclopedia), air quality (setup, health, handling).

Conflicts:
- Light. Setup: "Bright, indirect natural or artificial light with a consistent day and night cycle." Enrichment: "a canary kept under an artificial light schedule that never changes is being held in a permanent season."
- The cost guide argues with itself. Headline: "Upfront Setup: Roughly $200 to $400." Its own table sums to about $150 to $273, and the hub's equivalent table sums to $88 to $170.
- Feather picking. Health: "Feather-picking can signal mites, a diet deficiency, boredom, or general stress." Enrichment never mentions it, despite being the boredom page.

## 5. One link per page

- **Hub.** "Egg-binding can occur in females even without a male present." Link to the shared chronic egg laying and egg binding guide.
- **Encyclopedia.** None needed. It is background and the sidebar does the rest.
- **Cost.** "make sure you're buying a confirmed male, this is worth verifying with the seller directly." Link to "Sexing, Weight, and Body Condition in Pet Birds."
- **Handling.** "A sudden loss of song is a behavior change worth checking rather than waiting out." Link to Common Canary Health Issues.
- **Health.** "Caused by poor air quality, a dirty cage, household fumes, or drafts." Link to Canary Cage Setup.
- **Setup.** "Bright, indirect natural or artificial light with a consistent day and night cycle supports normal behavior." Link to Canary Enrichment, which corrects it.
- **Enrichment.** "A long flight cage beats a tall decorative one by a wide margin." Link to Canary Cage Setup, the page with the dimensions.

## 6. Trust

What hurt: the enrichment page says "Our health issues guide covers foot problems, which are common and preventable," and it does not, at all. A link that lies about its target is worse than no link. Then the cage price that doubles between two pages, three lifespans, and a hub that recommends a "same-sex pair" one screen after the deep dives say never two males. The birdwatching link in the handling guide reads as filler.

What convinced me a keeper wrote this: "LafeberVet's method is 'lights out, perches out,' taking the bird quickly before its eyes adjust. A vet dims the room before a hand goes in. A keeper's hand in daylight is not going to go better."

## 7. Set grade: B-

Two strong, sourced deep dives sitting on top of a hub whose numbers contradict them, with feeding left unwritten.

First two changes: reconcile lifespan, cage dimensions, cage price, and vet cost to one set of figures used everywhere. Then write a canary feeding deep dive and fix the enrichment page's false foot-problems link.

## Not covered anywhere

- Grit: whether canaries need it. Not mentioned on any page or in the shared list.
- Unsafe foods for a canary (avocado, onion, chocolate). The household hazards guide is fumes and safety, not diet.
- Daily food quantities, and what a day of greens actually looks like.
- Routine cage and perch cleaning and disinfection beyond the paper liner.
- Foot problems and pressure sores, promised by the enrichment page, absent from the health page, and not in the first aid and grooming guide, which covers nails and beak.
- Molt in canaries specifically: how long, and what to feed through it. "Why Is My Bird Losing Feathers?" tells molt from plucking, not how to support one.
- Egg binding in a canary hen. The shared guide names budgies, cockatiels, and lovebirds only, while the hub says canary hens do it too.

## Neon tetra (2026-09-14)

One Opus 5 agent, eight pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment), about 86k tokens. Full agent
output below, unedited.

---

## 1. Page by page

- **00 Hub.** Finished it. Actionable: tank range, temp, school size, checklist, weekly 20 to 25 percent water changes. It is the only page giving a water change percentage. **B**
- **01 Encyclopedia.** Finished it, mostly for the Hindenburg story. Nothing to act on. **C+**
- **02 Cost.** Finished it. Actionable: $1 to $3 per fish, $10 to $40 for a school, $100 to $300 setup. Its tables fight the hub's. **C**
- **03 Handling.** Finished it. Actionable: six floor, ten to twelve better, no fin-nippers, guppy experience does not transfer. **B+**
- **04 Health.** Finished it. Actionable: NTD signs, quarantine 2 to 4 weeks, never feed a dead fish to the tank, and the honest note that NTD is over-diagnosed. **A-**
- **05 Tank setup.** Finished it. Actionable: 10 gallon floor, 20 long for ten plus, pH 6.0 to 7.0, gentle sponge filter, dark substrate, 8 to 10 hours dim light, driftwood and almond leaves. Best page for doing. **A-**
- **06 Feeding.** Finished it. Actionable: twice daily, 2 to 3 minutes, 1 to 2mm mouths, protein 2 to 3 times a week. **A-**
- **07 Enrichment.** Finished it fastest. Actionable: buy ten, one species not two of five, priority list. The only cited page. **A**

## 2. Hub and encyclopedia

The encyclopedia earns its place: origin, adult size, wild diet, history appear nowhere else. The hub mostly restates the deep dives in shorter form, but it carries two things nothing else does (the 20 to 25 percent weekly water change, and a buy checklist), so it is not redundant, just inconsistent.

Disagreements with the deep dives:

- Tank vs school. Hub: "A 10 to 20 gallon tank works well for a proper school of 6 to 10 or more." Setup: "10 gallons is the practical minimum for a proper school of 6. If you're aiming for the better group size of 10 to 15 fish, step up to a 20-gallon long tank." The hub reads as if ten fish fit in ten gallons.
- Costs. Hub: "10-20+ gallon tank | $60 | $120", filter "$20 | $35", food "$30 | $50". Cost guide: "10+ gallon tank | $20 - $150", "Gentle filter | $10 - $20", "Micro-pellet or micro-crisp food | $15 - $30". Every line differs.
- Lifespan. Hub: "5 to 8 years is achievable." Cost: "Around 5 years is achievable with good, stable care, though average conditions often see neon tetras live closer to 2 to 3 years."
- Feeding. Hub: "Feed small amounts once or twice a day." Feeding: "Feed small amounts twice daily, morning and evening."
- Parasite name. Hub: "Pleistophora hyphessobrycetis." Feeding: "Pleistophora hyphessobryconis." One is wrong, and the health guide never names it at all.

## 3. The set as a whole

Yes, I could set up, stock, feed and keep them. Missing: what to do if my tap water is hard, an acclimation procedure for the day I bring them home, how many to add at once, a tankmate list beyond "avoid angelfish or oscars", the target temperature for ich treatment, and how to humanely euthanize a confirmed NTD fish after the page tells me to.

Questions raised on one page and answered on another without saying so:

- Handling: "Adding them to a tank that hasn't been properly cycled yet" and "That second mistake in particular is a big part of what drives disease risk." The health page is right there.
- Cost: lifespan "leans on water stability" with no pointer to the setup page that defines stability.
- Setup and health both say quarantine 2 to 4 weeks, and neither says what a quarantine tank is. The hospital tank guide in the sidebar does.
- Enrichment: "take real care netting them" with no method; the transport guide is the nearest thing.

## 4. Overlap and conflict across the deep dives

Read three times: cycle the tank first, quarantine 2 to 4 weeks, small mouths need micro food, dim light and dense planting. Feeding and enrichment both cover diet; enrichment's version adds the only genuinely new thing, spreading food across the surface.

Conflicts:

- School target. Handling: "ten to twelve or more is considerably better." Setup: "the better group size of 10 to 15 fish." Enrichment: "buy ten rather than six."
- Temperature. Hub: "heated between 72 and 78 degrees F." Setup: "70 to 81°F works, with 72 to 78°F being a solid, commonly recommended target."
- Test kit. The hub checklist lists "Water test kit (confirm cycling before stocking)" but the cost guide's ongoing table has only food and conditioner, so the budget omits the tool the hub calls mandatory.

## 5. One link per page

- Hub, "Always fully cycle a tank before adding neons" to How to Cycle a Fish Tank.
- Encyclopedia, "rely on large schools for both natural behavior and reduced individual stress" to the enrichment guide.
- Cost, "A school of 6 to 12 runs $10 to $40 total" to the enrichment guide, which is where the number is defended.
- Handling, "That second mistake in particular is a big part of what drives disease risk in a new neon tetra tank" to the health guide.
- Health, "quarantine new fish for 2 to 4 weeks before adding them to an established tank" to the hospital tank guide.
- Setup, "it's worth testing your source water before assuming your setup is automatically suitable" to Freshwater pH, GH, and KH.
- Feeding, "never leave a dead fish in the tank or let tankmates scavenge a visibly sick fish's body" to the health guide.
- Enrichment, "Cycle the tank fully before they go in" to How to Cycle a Fish Tank.

## 6. Trust

Doubts: the misspelled parasite on the hub, cost tables that contradict each other on the same site, 5 to 8 years against 2 to 3, and "Roughly two million are now sold in the United States each month" with nothing behind it. The enrichment page citing Saxby et al. 2010 by name, journal and year raised the set back up.

Most convincing sentence: "Spread food across the surface instead of dropping it in one spot, so the whole shoal eats rather than the boldest three."

## 7. Set grade: B-

Strong on the doing pages, undermined by numbers that disagree across pages a reader hits in one sitting.

First two changes: make the hub the single source for costs, lifespan, school size and feeding frequency and fix the deep dives to match; add real in-body links from the hub, handling and setup pages into the cycling and quarantine guides.

## Not covered anywhere

- How to soften hard tap water for a pH 6.0 to 7.0 tank. The pH, GH and KH guide argues against chasing numbers and does not give a method.
- Acclimation on the day you bring them home, bag float, drip, or neither.
- How many fish to add at once to a newly cycled tank, and whether to buy ten in one trip.
- The target temperature and duration for ich treatment.
- How to humanely euthanize a confirmed NTD fish.
- A concrete tankmate list beyond avoiding large or fin-nipping fish.
- Breeding, mentioned only as "egg-scattering" in passing.

## Veiled chameleon (2026-09-14)

One Opus 5 agent, nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal), about 96k tokens. Full
agent output below, unedited.

---

# Veiled Chameleon: Set Review

## 1. Page by page

- **00 Hub.** Finished it. Actionable: shopping checklist, cost tables, sizes, sexing. But its feeding numbers conflict with the feeding guide. **C+**
- **01 Encyclopedia.** Finished it, short. Actionable: almost nothing, and that is fine. The history paragraph on Florida and Hawaii founder populations is the one part I would repeat aloud. **B**
- **02 Cost.** Finished it. Actionable: I can budget setup, month, year, and the female emergency line. **A-**
- **03 Handling.** Finished it. Actionable: approach from below, read gaping as fear, tarsal spur sexing. Repeats itself. **B-**
- **04 Health.** Finished it. Actionable: named signs per condition, plus the blue-spot detail. **A-**
- **05 Tank setup.** Finished it. Actionable: the whole build, including bulb distance and bin depth. **A**
- **06 Feeding.** Finished it. Actionable: age-banded portions and a defensible supplement schedule. **A**
- **07 Enrichment.** Finished it twice. Actionable: planting-density test, branch diameters, prey release, priority order. Best page here. **A**
- **08 Legal.** Finished it. Actionable: DC, Hawaii, NJ permit, check your city. **A-**

## 2. Hub and encyclopedia

The encyclopedia earns its place: range, habitat, taxonomic history, the invasive populations. Nothing in it is in a deep dive.

The hub does not. It is a compressed rewrite of five articles, and where it is compressed it is wrong.

- Supplements. Hub: "calcium with D3 twice weekly, and a reptile multivitamin once a week." Feeding: "use a calcium with D3 supplement about every other week, and a multivitamin with a real vitamin A source on roughly the same twice-monthly schedule." That is four times the dose, on the two supplements the feeding guide says cause gular edema in excess.
- Portions. Hub: "offering 5 to 10 appropriately sized insects." Feeding: "roughly 4 to 6 feeders every other day."
- Prey size. Hub: "no larger than the width of the chameleon's head." Feeding: "Size prey to the space between your chameleon's eyes."
- Night temps. Hub: "Nighttime temperatures can drop to 65 to 75 degrees F." Tank: "a beneficial night drop to 55 to 65°F." Zero overlap.
- Ambient. Hub "75 to 85 degrees F" versus tank "72 to 80°F."
- Enclosure type. Hub: "Screen construction is mandatory, not optional." Tank: "Hybrid enclosures, with partially solid sides, hold humidity better and are increasingly preferred."
- UVB. Hub checklist: "Arcadia 6% or 12%." Tank: "ReptiSun 5.0 or Arcadia 6%," at 6 to 9 inches. A 12% tube at that distance is a different animal, and the hub never says so.
- Lifespan. Hub: "5 to 8 years is typical." Cost: females "often just 2 to 6 years, and many don't make it past 2 to 3."

## 3. The set as a whole

Yes. I could buy, build, wire, feed, and spot the four things that kill them. Enclosure, lighting, water, supplements, and the laying bin are all specified in numbers.

Unsignposted handoffs: the hub's lifespan FAQ raises the female cost and never points at the cost guide; the handling guide says chameleons "mask sickness well" and never points at the health guide; the health guide's closing line about the calcium and D3 schedule points nowhere; the enrichment guide tells me to ask the breeder about rearing and never points at anything about buying.

Still missing: a humidity percentage, a photoperiod, what to do after she lays, and how to pick a healthy animal.

## 4. Overlap and conflict across the deep dives

Read five times: chameleons do not drink standing water (04, 05, 06, 07, plus hub). Twice: the MBD supplementation study, vaguely in 04 and properly cited in 06. The handling guide's fun fact box restates its own "How They Compare" section nearly word for word. Egg-binding appears in 04, 05, and 06.

Between deep dives the numbers actually hold. The only real disagreement is 04 saying supplementation prevented MBD "even without added UVB or D3" sitting next to UVB being mandatory everywhere else. The legal guide's arithmetic wobbles: "legal in forty-eight states," then a table flagging Minnesota and New Jersey, then "The other forty-eight states have nothing to say."

## 5. One link per page

- 00: "calcium with D3 twice weekly, and a reptile multivitamin once a week." Point at the feeding guide.
- 01: "Escaped and released pets have founded breeding populations in both Florida and Hawaii." Point at the legal guide.
- 02: "Spaying a female can meaningfully extend her life." Point at the health guide.
- 03: "Missing early illness signs, chameleons are prey animals and mask sickness well." Point at the health guide. This page links nowhere inside the set.
- 04: "Metabolic bone disease specifically comes down to the calcium and D3 schedule." Point at the feeding guide.
- 05: "she's at real risk of egg-binding." Point at the health guide.
- 06: "proper UVB lighting lets your chameleon produce some of its own D3 naturally." Point at the tank setup guide.
- 07: "A 24x24x48 screen enclosure is a reasonable adult footprint." Point at the tank setup guide.
- 08: none needed.

## 6. Trust

Doubts: the hub disagreeing with its own articles on supplements and night temps; 12% UVB listed without distance; the repeated paragraph in the handling guide; the state count.

The sentence that convinced me: "Sky-blue spots appearing on the flanks are a normal sign after a female has successfully laid, worth knowing so you don't mistake healthy post-laying color for illness."

## 7. Set grade: B

The deep dives are genuinely good and internally consistent; the hub sitting on top of them is the weak link. First two changes: rewrite the hub to match the feeding and tank guides number for number, and add humidity, photoperiod, and post-laying care somewhere.

## Not covered anywhere

- Target humidity range as a number. Every page says "moderate."
- Photoperiod. No page says how many hours the lights run.
- What to do after a female lays: eggs, recovery, rehydration, refeeding.
- How to buy: sourcing a breeder and judging a healthy animal. Quarantine covers arrival, not selection.
- Enclosure cleaning and disinfection routine, including drainage maintenance.

---

# California Kingsnake: Set Review

Opus reader agent, first pass, 2026-09-14, batch G. Raw and unedited.

Read all seven pages in order. Review follows.

---

## 1. Page by page

**00 Care guide hub** (B-). Finished it; it is the only page with feeding cadence, thaw temperature, and a buy checklist, so I can act on it directly. Marked down because its numbers do not match the setup guide.

**01 Encyclopedia** (C+). Finished it, but the only thing I can act on is nothing; the one paragraph that earns its keep is the captive-breeding history.

**02 Cost guide** (B). Finished it; morph table, $200 to $500 setup, $15 to $30 a month, vet ranges are all buyable numbers. The co-housing section is the third time I read that rule.

**03 Handling guide** (A-). Finished it easily; the defensive-signal list and the session-length table are the most usable things in the set, and they name sources.

**04 Health issues** (B+). Finished it; symptom-to-cause-to-action is clean, and the soaking-as-mite-sign tip is real. No temperature or humidity numbers to act on.

**05 Enclosure setup** (B-). Finished it; the substrate and size spec are directly actionable, but two of its core numbers are contradicted by siblings.

**06 Enrichment** (A). Finished it; the priority order is a shopping sequence, and it tells me what its evidence is not.

## 2. Hub and encyclopedia

The hub earns its place: it carries feeding, which no deep dive covers at all. The encyclopedia mostly repeats it, minus the history paragraph.

Disagreements between hub and deep dives:

- Humidity. Hub: "Ambient humidity of 30 to 50% is appropriate." Setup: "Keep it relatively low, 40 to 60%."
- Warm end. Hub: "a surface temperature of 85 to 88 degrees F." Setup: "Basking/warm side | 85 - 90°F."
- Cool end. Hub: "a cool end at 72 to 75 degrees F." Setup: "Cool side | 70 - 80°F."
- Feeding. Hub: "adults every 10 to 14 days." Cost: "One appropriately sized rodent a week."
- Adult size. Hub FAQ: "Adults typically reach 3 to 4 feet." Encyclopedia: "Adult Size: 2.5-4 feet (75-120 cm)."
- Lifespan. Encyclopedia: "up to 33.3 years in captivity." Cost: "20 years or more is achievable with good care."

## 3. Could I keep one alive?

Setup, buy, and feed: yes. Keep healthy long term: mostly, with gaps.

Still missing: what a feeding refusal means and when to worry (regurgitation is covered on the hub, a fast is not); brumation or seasonal appetite shutdown; how to pick a healthy animal and a seller; how to recover an escaped snake, which every page insists will happen; whether a hygrometer is needed, since it is not on the checklist though two pages give a humidity range; hatchling-versus-adult temperature differences.

Questions answered elsewhere without being told: the hub's "moist hide with damp sphagnum moss supports healthy shedding" is explained, and partly contradicted, by the shared shed guide, with no pointer. The health guide's shed section has the same problem. The setup guide's thermostat line has no pointer to the shared heating and thermostat guide. The handling guide's "No handling until it is eating reliably" for a new arrival is the quarantine guide's territory, unlinked.

## 4. Overlap and conflict across the deep dives

Read three times: kingsnakes eat snakes, never co-house. Read twice: escape artist, loose lid. Both are in the handling, setup, enrichment, and cost pages.

Real conflicts:

- Enclosure length rule. Setup: "enclosure length should be at least two-thirds of your snake's body length." Enrichment: "Twelve corn snakes were housed in enclosures either two thirds of their body length or longer than their body length... they preferred the larger enclosure." The setup guide is recommending the condition the study's snakes rejected.
- Hides. Setup: "Furnish the enclosure with two cork bark hides, one on each end." Enrichment: "Cover Everywhere, Not Two Hides... A kingsnake in a large bare enclosure uses two hides and nothing else."
- Rearranging. Hub: "Rearranging the enclosure layout periodically gives the snake new territory to explore." Enrichment ranks it "6. Rearrangement, last."
- Post-feeding wait. Hub: "Allow 48 to 72 hours after feeding before handling." Handling: "Wait at least 48 hours."

## 5. One link per page

- Hub: "Provide a warm end with a surface temperature of 85 to 88 degrees F via an under-tank heater on a thermostat" → Enclosure Setup.
- Encyclopedia: "Adult Size: 2.5-4 feet (75-120 cm)" → Enclosure Setup, since that number sets the enclosure.
- Cost: "A 48x24x24 inch front-opening enclosure for an adult" → Enclosure Setup.
- Handling: "Underestimating this species as an escape artist, a loose lid is a real risk." → Enclosure Setup.
- Health: "Retained skin from humidity running too low. Manageable at home with a humid hide lined with damp sphagnum moss." → How Snakes Actually Shed, and Why Humidity Is Not the Engine.
- Setup: "As a general guide, enclosure length should be at least two-thirds of your snake's body length" → Kingsnake Enrichment.
- Enrichment: "A 4x2x2 foot enclosure comfortably exceeds adult body length for this species." → Enclosure Setup.

## 6. Trust

Doubts: two humidity ranges and two warm-end ranges inside one site; weekly feeding in the cost guide against 10 to 14 days on the hub; "up to 33.3 years" is suspiciously precise next to "20 years or more"; the enrichment guide's "Other substrate quantities are available" reads like a broken sentence; its FAQ calls the ratsnake work "closer still," which the body does not support.

Most convincing sentence: "A kingsnake in a large bare enclosure uses two hides and nothing else, which then gets misread as proof it wanted a smaller box." That is watching an animal, not summarizing a caresheet.

## 7. Set grade: B

Genuinely useful and unusually honest about evidence, held back by a hub and a setup guide that disagree on the numbers a first-time keeper will actually dial in.

First two changes: make one page the source of truth for temperature, humidity, feeding cadence, and the enclosure-length rule, and fix the setup guide's two-thirds line to match the enrichment evidence. Second, give feeding its own deep dive, since it currently exists only on the hub.

## Not covered anywhere

- What to do when a kingsnake refuses food for weeks, and when a fast becomes a vet visit.
- Brumation and seasonal appetite drop.
- How to choose a seller and assess a healthy animal before buying.
- How to find and recapture an escaped snake.
- Whether a hygrometer is needed, and where to place it.
- Hatchling-specific temperature and enclosure differences beyond "a 20-gallon works."
---

# Hedgehog: Set Review

Opus reader agent, first pass, 2026-09-14, batch G. Raw and unedited.

Read all nine files. Review below.

## 1. Page by page

- **00 Hub.** Finished it, and it is the most actionable single page (sizes, temps, checklist), but it is also the one I now distrust most. **D.**
- **01 Encyclopedia.** Finished it. Acted on nothing husbandry-wise, but the import ban and the Salmonella outbreak are real background. **B.**
- **02 Cost.** Finished it. Budget numbers and the $500 emergency fund are usable; the legal section contradicts its own FAQ. **C.**
- **03 Handling.** Finished it. Scoop technique, quilling window, do not force the ball: all directly usable. **B+.**
- **04 Health.** Finished it. Quarantine two weeks, gradual weight loss, vet for any wobble. **A-.**
- **05 Setup.** Finished it. CHE on a thermostat, solid floor, 3 to 4 inches substrate, dim 12 hour cycle. **B.**
- **06 Feeding.** Finished it. The 24 hour rule and the stop-eating checklist are the best thing in the set. **A-.**
- **07 Enrichment.** Finished it. Clean the wheel daily, hide, solo housing, scatter feed. **A.**
- **08 Legal.** Finished it twice. It quotes the regulations. **A.**

## 2. Hub and encyclopedia

The encyclopedia earns its place: origin, wild lifespan, the 1991 USDA import ban, the hybrid ancestry. None of that is in the deep dives.

The hub does not. It restates the deep dives less accurately, and it disagrees with them on the two numbers that matter most.

- WHS. Hub: "It affects an estimated 1 in 3 African pygmy hedgehogs." Health guide: "a lower confirmed rate, closer to 3%." One of those is ten times the other, and the deep dive exists specifically to debunk the inflated figure the hub prints.
- Cold threshold. Hub: "Below 65 degrees F, African pygmy hedgehogs ... can enter a dangerous state of torpor." Setup: "Below about 72°F, hedgehogs can attempt to hibernate." Seven degrees of daylight on the one rule both pages call non-negotiable.
- Enclosure size. Hub: "A minimum of 2 ft x 4 ft of floor space is required." Setup: "A minimum of 4 square feet of solid floor space." Half.
- Wheel. Hub checklist: "8 to 12 inch solid exercise wheel," against its own body text ("10 to 12 inches") and setup's "10.5 to 12 inches."
- Lifespan. Hub: "Some individuals reach 7 to 8 years." Cost: "some individuals reaching 8 to 10 years."

## 3. Could I keep one

Mostly yes. I could buy legally, build the enclosure, hold temperature, feed, spot illness early, and handle without teaching fear. Missing:

- How to pick a breeder, and what to ask. Quarantine appears only as mite prevention.
- Salmonella. The encyclopedia names a 54 person outbreak; the handling guide tells me to wash my hands only after self-anointing.
- Nail trimming. Clippers are on the shopping list and in the cost table. No page shows the trim.
- Bathing. The hub raises baths; no deep dive returns to it.
- Spaying. The hub says it cuts uterine cancer risk. No page prices it or says when.
- Finding an exotic vet, and power outage or heat failure planning.

Unsignposted handoffs: the hub says WHS hits 1 in 3 and never points to the article that corrects it; the cost guide's legality section duplicates the legal guide without linking it; the hub's "wheel noise" aside never reaches the enrichment page's daily wheel cleaning.

## 4. Deep dive overlap and conflict

Read three times: the cold-hibernation rule (health, setup, enrichment, feeding) and the solid wheel. That repetition is mostly earned, except the numbers drift.

- Floor space. Setup: "A minimum of 4 square feet." Enrichment: "68 percent were in enclosures under 0.5 square meters," listed as a failure. 4 sq ft is 0.37 sq m, so setup's minimum is below enrichment's fail line.
- Quilling. Handling: "Between 2 and 6 months old." Feeding: "most intense at 4 to 6 weeks old and again around 4 months."
- Fat. Hub: "low fat content (under 15%)." Feeding: "moderate fat (10 to 20% dry matter)."
- Insects. Hub: "3 to 5 times per week." Feeding: "3 to 4 times weekly, or roughly 2 to 3 times a week."
- Legality, inside one page. Cost body: "New Jersey is the only state in the country where a permit is the answer ... Maine names the African pygmy hedgehog on its Unrestricted Species List." Cost FAQ: "New Jersey and Wisconsin require a permit," with Maine restricted and NYC dropped from the ban list.
- Humidity, inside one page. Setup: "under 40% is preferred," then recommends a humidifier "bringing the room to 40 to 60%."

## 5. One link per page

- Hub: "It affects an estimated 1 in 3 African pygmy hedgehogs and has no treatment." Link to the health issues guide.
- Encyclopedia: "ownership remains illegal in several states." Link to the legal guide.
- Cost: "Six places will not let you keep one." Link to the legal guide.
- Handling: "Between 2 and 6 months old, hedgehogs shed their baby quills." Link to the feeding guide, which ties quilling to appetite loss.
- Health: "hedgehogs kept below roughly 72°F can attempt to hibernate." Link to the setup guide.
- Setup: "A large, solid-surface exercise wheel, 10.5 to 12 inches in diameter ... is essential." Link to the enrichment guide.
- Feeding: "Watch for ... a body that feels cold, possible torpor." Link to the setup guide.
- Enrichment: "do not assume a huffing, balled-up hedgehog is going to enjoy being socialized on your schedule." Link to the handling guide.
- Legal: none needed. It links well already.

## 6. Trust

What hurt: the hub's 1 in 3 WHS figure sitting next to an article built to refute it, and the cost guide's FAQ contradicting its own body about which states permit.

What convinced me: from the enrichment guide, "Owners who consulted a vet were more likely to clean the wheel daily, which matters more than it sounds for an animal that defecates while running." Nobody writes that from a summary.

## 7. Set grade

**B-.** The deep dives are unusually good and unusually honest about disagreement; the hub drags the set down by contradicting them on WHS prevalence, temperature, and cage size.

First two changes: rebuild the hub from the deep dives so every number matches, and fix the cost guide's legality FAQ to match its own body and the legal guide.

## Not covered anywhere

- Choosing and vetting a breeder or rescue, and what to ask before buying.
- Salmonella hygiene for owners, despite the encyclopedia naming the outbreak.
- Bathing and foot baths, raised on the hub and dropped.
- Spay decision and cost, raised on the hub and dropped.
- Finding an exotic vet who sees hedgehogs (the shared vet guide covers transport and anesthesia, not sourcing).
- Heat failure or power outage contingency.

(Nail trimming and molting are covered by the shared Grooming, Nails, and Molting guide; vet transport by the shared small mammal vet guide.)

---

# Cardinal Tetra: Set Review

Opus reader agent, first pass, 2026-09-14, batch H. Raw and unedited.

Read all eight files in order. Review follows.

## 1. Page by page

- **00 Hub.** Finished it. Actionable: shopping checklist, school size, cycle warning. **B.** The one page with a water change schedule, and its temperature range contradicts the setup guide.
- **01 Encyclopedia.** Finished it. Actionable: adult size, wild lifespan context. The naming-priority story is the only thing here I could not get elsewhere. **B.**
- **02 Cost.** Finished it. Actionable: $1 to $3 a fish, $65 to $230 setup, test kit is the non-optional line item. **A-.**
- **03 Handling.** Finished it. Actionable: minimum 10, three named beginner mistakes, the stripe tell. Thin for a standalone page. **B-.**
- **04 Health.** Finished it. Actionable: symptom lists, ich and fin rot treatment, nitrite as the number to watch. **A.**
- **05 Tank setup.** Finished it. Actionable: 20 long, 73 to 84F, pH 5.0 to 7.0, sponge filter, driftwood and almond leaves. Best page in the set. **A.**
- **06 Feeding.** Finished it. Actionable: twice daily, two-minute rule, crush the flake, remove dead fish immediately. **A-.**
- **07 Enrichment.** Finished it. Actionable: priority order list, buy from a shop that has held them, spread food across the surface. Terse, and the honest "nothing on cardinals specifically" bought my trust. **A-.**

## 2. Hub and encyclopedia

The encyclopedia earns its place: origin, adult size, wild lifespan, and the Schultz/Axelrod naming race appear nowhere else. The hub half earns it. Checklist, cost tables, and the weekly water change line are useful; the Housing, Diet, Enrichment and Health sections are compressed restatements of four deep dives.

Disagreements with the deep dives:

- Temperature. Hub: "Keep water heated between 73 and 81 degrees F." Setup: "73 to 84°F is the range Seriously Fish gives for this species." The hub checklist repeats 73 to 81.
- School size. Hub FAQ: "At least 6, ideally 8 to 10 or more if the tank allows." Enrichment: "Ten, not six... Do not stop at six." Handling: "Animal Diversity Web puts the workable minimum at 10."
- Tank size. Hub: "A 10 to 20 gallon tank suits a proper school of 8 to 10 or more." Setup: "If you're stocking the fuller 8 to 10 fish school this species is usually kept in, that's [20-gallon long] the better practical minimum."
- Feeding. Hub: "Feed small amounts once or twice daily." Feeding guide: "Twice daily... is the practical standard."
- Parasite name. Hub: "Pleistophora hyphessobrycetis." Health and feeding: "Pleistophora hyphessobryconis." One is wrong.

## 3. Could I keep one alive?

Mostly yes. I can size the tank, buy the kit, stock ten, feed them, and recognize ich, fin rot, swim bladder trouble and neon tetra disease. Still missing: how to soften hard tap water (enrichment says hard water is the main reason cardinals fail, then never says what to do about it), a tankmate list, how to acclimate a bag on arrival beyond "slowly", quarantine duration for new stock other than the 30 days mentioned under ich, and how to humanely euthanize a confirmed case.

Unmarked hand-offs: the hub asks me to "confirm a completed nitrogen cycle" without pointing anywhere; the cycling guide is in the sidebar. Handling names a fatal mistake as "adding them to a tank that hasn't finished cycling" and never links the setup guide or the cycling guide. Health tells me to set up "a modest separate tank with its own gentle sponge filter" and does not link the hospital tank guide sitting in its own sidebar. Setup says "always quarantine new fish" and links nothing.

## 4. Overlap and conflict across the deep dives

Read three times: the 2008 Acta Amazonica nitrite finding (cost, handling, health, feeding). Read twice: the neon stripe comparison (hub FAQ, handling), the incurable-disease scavenging rule (health, feeding), blackwater tannins (setup, enrichment), small mouths (feeding, enrichment).

Conflicts:

- Setup body: neon tetra is comfortable to "roughly 25°C (77°F)". Setup FAQ, same page: "warmer than neon tetra's comfort ceiling of roughly 77 to 81°F."
- Health body on ich: "a commercial ich medication alongside daily partial water changes." Health FAQ: "a gradual temperature increase plus a commercial ich medication." The body never mentions heat, which matters when the same site puts 50% mortality near 33.7°C.
- Cost: "A 10-gallon tank is workable for the bare minimum school of 6," against enrichment's flat "Do not stop at six."

## 5. One link per page

- Hub: "always confirm a completed nitrogen cycle, especially for nitrite, before stocking" points to How to Cycle a Fish Tank.
- Encyclopedia: none needed.
- Cost: "Confirming your cycle before stocking, not after, is the cheapest insurance this species has" points to How to Cycle a Fish Tank.
- Handling: "Adding them to a tank that hasn't finished cycling" points to the tank setup guide.
- Health: "A modest separate tank with its own gentle sponge filter is worth setting up for this" points to Fish Quarantine and Treatment.
- Setup: "Always quarantine new fish before adding them, given the disease risk this species carries" points to the cardinal tetra health issues guide.
- Feeding: "Overfeeding lets uneaten food decay and spike ammonia and nitrite" points to How to Tell If Your Fish Is Sick.
- Enrichment: "Do not keep them in hard alkaline water and expect them to thrive" points to Freshwater pH, GH, and KH.

## 6. Trust

Doubts: the Merck citation for a microsporidian parasite resolves to a page titled mycotic diseases, the parasite name is spelled two different ways, and the hub temperature band is narrower than the guide's without explanation. The cost guide's "up to five years" also quietly drops the hub's "up to 10."

Most convincing sentence, from the feeding guide: "Food that's too large gets taken and spat back out repeatedly, which functionally starves the fish even while food is visibly going into the tank." That is watched, not researched.

## 7. Set grade

**B+.** Strong, sourced, genuinely specific on the things that kill this fish, undermined by a hub that disagrees with its own deep dives and a near-total absence of links between pages that plainly need each other. First two changes: reconcile the hub to the setup and enrichment numbers (temperature, school size, tank size, feeding frequency), then add the cycling and quarantine links where four pages already raise the question.

## Not covered anywhere

- How to soften or acidify hard tap water for this species. The pH, GH, KH guide is framed around not chasing numbers in a coldwater tank, and does not promise a softening method.
- A cardinal tetra tankmate list, and what counts as a fin-nipper to avoid.
- Humane euthanasia method for a confirmed neon tetra disease case, which the health guide recommends and never explains.
- Breeding, or what to do with fry, given the species is described as hard to breed at scale.
---

# Milk Snake: Set Review

Opus reader agent, first pass, 2026-09-14, batch H. Raw and unedited.

Read all nine. Review below.

## 1. Page by page

- **00 Hub.** Finished it. Act on: the full shopping checklist, temps, feeding interval, the 48 to 72 hour post-feed handling wait. Grade B.
- **01 Encyclopedia.** Finished it, it is short. Act on: nothing, but the History paragraph on pattern as motion camouflage is the only genuinely new idea in the set. Grade B minus.
- **02 Cost.** Finished it. Act on: a real budget and a buy list. Grade B.
- **03 Handling.** Finished it. Act on: never cohabit, do not handle mid-shed. No actual technique: no pick-up method, no session length, no settling-in week. Grade C plus.
- **04 Health.** Finished it. Act on: symptoms and which ones mean vet today. Grade B plus.
- **05 Tank setup.** Finished it. Act on: dimensions, temps, substrate, cohabitation. Grade B plus.
- **06 Enrichment.** Finished it fastest. Act on: cover across the whole floor, priority order. Grade A minus.
- **07 Legal.** Finished it. Act on: check my state before buying. Grade A.
- **08 vs Corn.** Skimmed the back half. Act on: nothing. Grade C.

## 2. Hub and encyclopedia against the deep dives

The encyclopedia earns its place on one paragraph only, the camouflage argument, which no other page mentions. Everything else in it is restated elsewhere.

The hub does not earn its place. It is the only page with a feeding schedule and the only page with a post-feed handling wait, which is real value, but it contradicts the deep dives on the two things I would buy first.

Heating. Hub: "Under-tank heater with thermostat" and "a warm end (85 to 88 degrees F surface temperature via UTH on thermostat) and a cool end (72 to 75 degrees F)." Tank setup: "Basking surface 85 to 90°F, cool side 70 to 80°F, nighttime not below about 66°F. A halogen flood bulb positioned over a basking stone is the commonly recommended heat source for this species." The hub sells me a UTH as the primary heater, the deep dive calls the UTH a supplement.

Enclosure. Hub: "A 3x1.5x1.5 ft to 4x2x2 ft enclosure suits most adult milk snakes." Tank setup: "the minimum adult enclosure at 48 inches long by 24 inches wide by 24 inches tall." The hub's low end is below the deep dive's minimum.

Setup cost. Hub table totals roughly $208 to $430. Cost guide: "Roughly $300 to $600." The hub is budgeting a glass tank, the cost guide a PVC vivarium. Neither says so.

Size. Hub: "over 5 ft (Sinaloan milk snake)." Hub FAQ: "Sinaloan milk snakes can reach 4 to 5 feet." Encyclopedia: "2-4 feet." vs Corn: "24-36 in (some larger)." Four numbers for one animal.

Lifespan. Hub "12 to 20 years," cost guide "commonly live 20 years or more," vs Corn "15-20 years, some 25+."

## 3. Could I keep one

Almost. I can size and build the enclosure, budget it, recognize the main illnesses, and check my state's law. What is missing:

- Feeding beyond the hub's one line. No prey size by snake weight, no thawing method, no what to do with a refusal. There is no feeding deep dive in either sidebar list.
- Brumation. A temperate snake that may stop eating in winter, and nothing says so.
- Buying. Breeder versus shop, what a healthy hatchling looks like, shipping.
- Cleaning cadence. The hub bills annual substrate replacement but no page says how often to spot-clean or strip it.
- What to do when the escape artist escapes.

Questions raised on one page and answered on another, unsaid: the health guide's respiratory causes ("temperatures running too cool, humidity that's off") never point to tank setup where the numbers are. The health guide's obesity line never points to the Sexing, Growth and Body Condition guide. The handling guide's mid-shed warning never points to either shed guide. The cost guide's purchase section never points to the legal guide, which is the page that tells me I may not legally buy one in Wisconsin.

## 4. Overlap and conflict across the deep dives

Read twice or more: Batesian mimicry and the rhyme (hub twice, encyclopedia, cost fun fact, handling in full, vs Corn in full). Never cohabit (handling, tank setup, enrichment, hub). Escape artist (four pages).

Conflicts: the heating and enclosure splits above. Also the mimicry story itself. Cost guide states it flat: "evolved to resemble the venomous eastern coral snake." The encyclopedia undercuts it: "Milk snakes live across a range that includes large areas where no coral snake occurs at all, which is difficult to square with mimicry as the whole explanation." And vs Corn widens the model to "coral snake/copperhead," which no other page supports.

## 5. One link per page

- Hub: none needed, both sidebar lists carry everything.
- Encyclopedia: the History paragraph on the coral snake argument, to the handling guide, which is where the rhyme's limits live.
- Cost: "Common Pueblan milk snakes run $70 to $100." To the legal guide.
- Handling: "Handling a snake mid-shed, when skin is more vulnerable." To How Snakes Actually Shed.
- Health: "From temperatures running too cool, humidity that's off, or poor ventilation." To the tank setup guide.
- Tank setup: "A halogen flood bulb positioned over a basking stone is the commonly recommended heat source for this species." To Reptile Heating and Thermostats.
- Enrichment: "Do not handle a hiding snake to check on it." To the handling guide.
- Legal: "most people who keep one never think twice about whether it's legal." To the care guide hub.
- vs Corn: "Both species do well in a similarly sized enclosure, eat appropriately sized rodents on a similar schedule." To the milk snake tank setup guide.

## 6. Trust

Doubts: the heater contradiction between the page I land on and the page I read second. Four different adult sizes. And two sentences that read like unedited template output: "Sphagnum moss for moist hide" as a noun, and in the enrichment guide "Other substrate quantities are available and a decent depth wants the larger bag," which is product copy with the product missing.

The sentence that convinced me a keeper wrote this: "If not, it will use two hides and nothing else, and you will conclude it wanted a smaller enclosure." Nobody writes that without having watched it happen.

## 7. Set grade: B minus

Strong individual pages, a legal guide better than anything else I have read on the topic, undercut by a hub that disagrees with its own deep dives on heat and enclosure size.

First two changes: make the hub match the tank setup guide on heat source, temperatures, minimum enclosure, and setup cost, or delete those numbers from the hub. Second, write a feeding guide and link it from the hub's diet section.

## Not covered anywhere

- Brumation and winter feeding refusal in a temperate colubrid.
- Feeding mechanics: prey size by snake weight, thawing method, refusal troubleshooting.
- Choosing and buying: breeder versus shop, what a healthy animal looks like, shipping.
- Enclosure cleaning cadence: spot-clean frequency and full substrate change interval.
- What to do when a milk snake escapes, on a set of pages that calls it an escape artist five times.
- Handling technique itself: how to lift, session length, the first week home.
---

# Gargoyle Gecko: Set Review

Opus reader agent, first pass, 2026-09-14, batch H. Raw and unedited.

Read all eight files in order. Review below.

---

## 1. Page by page

- **00 Hub.** Finished it, and it is the most actionable single page: sizes, temps, costs, checklist. But it is also where the numbers go wrong. **B-**
- **01 Encyclopedia.** Finished it, short and genuinely interesting on the 2012 genus split. Nothing to act on, and it contradicts itself. **C+**
- **02 Cost.** Finished it. I can budget from it today: gear table, $280 to $745 all-in, vet tiers, monthly food. **A-**
- **03 Handling.** Finished it. Concrete plan: wait two weeks, 5 minutes every other day, work to 15, handle low. **A-**
- **04 Health.** Finished it. Symptom lists plus the causes, and a clear vet trigger list. Best page in the set. **A**
- **05 Tank setup.** Finished it. I could build the enclosure from this alone. **A**
- **06 Feeding.** Finished it, and it is the only page that tells me where sources disagree instead of picking one and hiding it. **A**
- **07 Enrichment.** Finished it. Honest about having no species research, and the priority list is usable. **B+**

## 2. Hub and encyclopedia

The encyclopedia earns its place: natural history, the Bavay/Bauer taxonomy, why captive stock exists at all. None of that is in the deep dives. It also contradicts itself: quick facts say "Conservation: Vulnerable (IUCN)" while the history says "The IUCN still rates the species Least Concern." And "the regrown version is smooth and bumpy" cannot be both.

The hub mostly repeats, in shorter and looser form, what the deep dives say better, and it disagrees with them:

- Temperature. Hub: "Temperature should stay between 72 and 80 degrees F during the day... temperatures above 85 degrees F can be fatal." Tank setup: "Comfortable range is 72 to 78°F during the day... sustained temperatures above about 82°F cause real stress."
- Insects. Hub diet section: "Supplement with live feeder insects 1 to 2 times per week." Hub FAQ: "live insects should be offered 2 to 3 times per week." Feeding guide: "once a week for adults."
- Supplements. Hub: "Dust insects with calcium w/D3 2 to 3 times per week." Feeding: "dust with a calcium supplement without D3 for most feedings, with a D3-inclusive product periodically."
- Handling time. Hub: "Sessions of 10 to 20 minutes a few times per week." Handling: "Start with 5-minute sessions every other day, working up to about 15."
- Time of day. Hub: "Handle gently at dusk when they are naturally alert." Handling: "Handling during the day, when gargoyle geckos are naturally sleepier, also tends to go smoother than an evening session."
- Temperament. Hub: "they rarely jump suddenly." Handling: "Young gargoyle geckos are skittish and jumpy, quick to leap at the slightest disturbance."
- Enclosure. Hub: "An 18x18x24" or larger enclosure works well." Tank setup calls that the minimum and 24x24x24 the ideal. The cost table prices only the minimum.
- Tail. Hub: "The tail partially regenerates." Handling: "fully functional."
- The hub's entire Enrichment section is about handling. The enrichment guide says "do not treat handling as enrichment for a species that drops its tail."

## 3. The set as a whole

Yes, I could set one up, buy it, feed it, and spot trouble. Setup, temperature ceiling, humidity cycle, diet, and the vet triggers are all covered well.

Still missing: how to choose a healthy animal at purchase and what to inspect; a cleaning and maintenance schedule; sexing, and what a lone female laying infertile eggs means; first aid for a fresh tail drop; a scale, despite feeding saying "Regular weighing is the most objective way to catch a real problem early" and no page listing one in gear or cost; cleanup crew cost for the bioactive option that two pages recommend.

Questions raised on one page and answered silently on another:

- Health: "non-particulate substrate matters for this species." The substrate answer is in tank setup, unlinked.
- Feeding: "a warm side that runs too cool slows digestion." Tank setup is the page that says whether you have a warm side at all, and says most homes need no heat. Unlinked, and arguably in conflict.
- Cost lists "UVB bulb replacement." Tank setup holds the bulb spec and UVI target. Unlinked.
- Health raises floppy tail syndrome; tank setup's clutter section is the fix. Tank setup links health, health never links back.
- Hub: "Females should not be paired with males until they reach at least 40 grams." Nothing anywhere follows that up.

## 4. Overlap and conflict across the deep dives

Read twice: glass-climbing and floppy tail syndrome (tank setup and handling), tail regrowth (handling, hub, encyclopedia), solo housing (handling, tank setup, enrichment), the wet-dry cycle (tank setup and health).

Real conflicts:

- Substrate. Health: "Impaction... is linked to ingesting loose substrate, which is why non-particulate substrate matters for this species." Tank setup: "Coconut fiber (like Zoo Med Eco Earth) works well for humidity retention." Coconut fiber is loose. Tank setup's own avoid list is "sand, wood chips, and gravel." Those two pages are not applying the same rule.
- Heat. Tank setup: "Most homes need no dedicated heat source at all." Feeding: "An enclosure that's too cool... a warm side that runs too cool." There is no warm side in the tank setup.
- Bulb life. Cost FAQ: "Add a UVB bulb replacement every 6 to 12 months." The cost table lists it as an annual line item.

## 5. One link per page

- **Hub.** None. The Deep Dive list already carries every one of these.
- **Encyclopedia.** "If threatened, it can drop and partially regenerate its tail" should go to the handling guide, which is where partial becomes "fully functional."
- **Cost.** "this species doesn't need a dedicated heat source in most homes" should go to the tank setup guide.
- **Handling.** "gargoyles climb glass poorly and need more grippable branches instead" should go to the tank setup guide.
- **Health.** "which is why non-particulate substrate matters for this species" should go to the tank setup guide's substrate section.
- **Tank setup.** "a complete powdered diet supplies vitamin D3" should go to the feeding guide.
- **Feeding.** "a warm side that runs too cool slows digestion and drops appetite" should go to the tank setup guide.
- **Enrichment.** "An 18x18x24 terrarium is a reasonable adult footprint" should go to the tank setup guide. This page links out to two other species and to none of its own.

## 6. Trust

What made me doubt: the encyclopedia rating the species Vulnerable and Least Concern on one screen. The 2024 genome study asserted flatly with no author or journal. "One specialist source" and "one detailed care sheet" never named, so I cannot weigh them. And the hub disagreeing with its own FAQ on insect frequency.

The sentence that convinced me a keeper wrote this: "Check the two calcium sacs under the throat, depleted white sacs are a visible warning sign worth checking regularly." That is something you learn by looking at the animal, not by rewriting care sheets.

## 7. Set grade: B

The five deep dives are strong, specific, and unusually honest about uncertainty. The hub sitting in front of them is looser and contradicts them on numbers a beginner will act on first.

First two changes: rebuild the hub from the deep dives so every temperature, session length, insect frequency, and supplement schedule matches, and settle the substrate question between health and tank setup in one voice.

## Not covered anywhere

Checked against the Health and More list. Emergency and cold snaps, shedding mechanics, Salmonella, stool and hydration checks, thermostats, and quarantine are all covered by the shared guides. Remaining:

- How to choose a healthy gargoyle gecko at purchase and what to inspect before paying.
- Routine cleaning and enclosure maintenance schedule.
- Sexing, and what to do when a lone female lays infertile eggs.
- First aid and wound care for a fresh tail drop.
- A scale, and target weights by age, despite weighing being called the best early warning.
- Cleanup crew cost for the bioactive setup both the hub and tank setup recommend.
---

# Gerbil: Set Review

Opus reader agent, first pass, 2026-09-14, batch H. Raw and unedited.

Read all eleven files.

# Gerbil set review

## 1. Page by page

- **00 Hub.** Finished it; densest page in the set and the only one citing Merck. Actionable: humidity, protein, portion grams, degloving. **A-**
- **01 Encyclopedia.** Finished it; short, genuinely natural history, no care padding. Nothing to act on, and it does not pretend otherwise. **B+**
- **02 Cost.** Finished it. Actionable numbers, but the monthly figure does not match its own annual table. **C+**
- **03 Handling.** Finished it; thin, mostly "social, day-active, no tail." **C**
- **04 Health.** Finished it; good triage lines, but shorter and softer than the hub's health section. **B-**
- **05 Tank setup.** Finished it; the most buildable page here. **A-**
- **06 Feeding.** Finished it; specific, sourced, and it contradicts the hub. **B**
- **07 Enrichment.** Best page in the set. One study, one conclusion, a priority list I can shop from. **A**
- **08 Legal.** Finished it; clear, sourced, tells me the exception-by-absence trap. **A**
- **09 vs Guinea pig.** Finished it; its gerbil column is unreliable. **C-**
- **10 vs Hamster.** Finished it; useful on schedule, wrong on diet. **C**

## 2. Hub and encyclopedia

The encyclopedia earns its place: origin, taxonomy, the 1935/1954 founder history, no repetition. The hub mostly earns its place too, because it carries material that appears nowhere else (aural cholesteatoma at 50 percent past two years, seizures, tumor incidence, the Merck degloving detail). But it disagrees with the deep dives repeatedly:

- Protein. Hub: "at 18 to 20 percent protein and roughly 5 to 8 grams per gerbil per day." Feeding: "a minimum of 14% protein... Aim for roughly 14 to 16% protein... roughly 5 to 10 grams."
- Fat. Hub: "on diets above about 4 percent fat they develop raised blood cholesterol." Feeding: "low fat around 4 to 8%." The hub's danger line is the feeding guide's target.
- Depth. Hub: "eight to twelve inches of substrate." Setup: "6 to 10 inches of digging depth at minimum."
- Humidity. Hub: "Merck advises staying below 40 percent." Setup and Health: "Keep it under about 50%."
- Tank. Hub checklist: "20 gallon long tank or deep-base cage for a pair." Setup: "a 40-gallon breeder... is genuinely the better target."
- Wheel. Hub checklist: "Solid 8 in exercise wheel," while the hub's own cost table prices a "Solid exercise wheel (10-12 in)."
- Wheel price. Hub: "$38 | $42." Cost guide: "$28 - $40."
- Hub prices a "Toys, tunnels, and dig boxes" line at $40 to $58 that the cost guide's table drops entirely, and a "hygrometer" the cost guide does not include even though the humidity rule needs one.

## 3. Could I keep one

Mostly yes: I can buy a pair, build a deep tank with a buried tunnel-and-chamber, feed pellets, and recognize an emergency. Still missing: how to verify same-sex at purchase and what accidental litters mean; what to look for in a healthy animal from a shop or breeder; the first-week settling routine; the warning signs of declanning and how to split a pair safely; how often bedding is actually changed, in a page other than one hub FAQ; heat emergency signs for this species.

Unsignposted handoffs: the hub's "declanning" and split-cage line raises a question the handling guide answers, with no link. The health guide's humidity fix sits on the setup page. The cost guide's "deep digging substrate" budget is set by the setup page's 40-gallon recommendation, which would move the total.

## 4. Overlap and conflict across the deep dives

Read three or more times: gerbils are social and adult introductions fail; never lift by the tail; deep substrate; wire cages cannot hold bedding. Conflicts:

- Lifespan. Cost: "2 to 5 years, commonly landing around 3 to 4." vs Guinea Pig and vs Hamster: "A gerbil's normal lifespan is 2 to 3 years."
- Space. vs Guinea Pig table: "10-gallon+ tank (deep substrate)." Setup: "A 20-gallon long tank works as a minimum for a pair."
- Diet. vs Hamster: "a quality pelleted food formulated for both works for either species." Feeding: "many products labeled simply 'Hamster and Gerbil Food' fall short of that, they're really formulated for hamsters."
- Tail injury. Handling: "sometimes losing the whole tail. This genuinely warrants a vet visit." Health: "The stump usually heals on its own." Hub: "the treatment is prompt amputation of the bare section."
- Health coverage. The health guide never mentions cholesteatoma or seizures, both of which the hub calls common.

## 5. One link per page

- **Hub:** "A 20 gallon long tank with a mesh lid suits them better than most wire cages" → Enclosure Setup.
- **Encyclopedia:** "introductions between adults frequently fail, which is the single hardest part of keeping them" → Handling.
- **Cost:** "A proper glass enclosure with deep digging substrate costs more upfront than the wire cages often marketed for small rodents" → Enclosure Setup.
- **Handling:** "Housing in a wire cage that can't hold the deep bedding this species genuinely needs." → Enclosure Setup.
- **Health:** "Correct the environment first (keep humidity under about 50%, and use clean, dry bedding)" → Enclosure Setup.
- **Setup:** "Provide 6 to 10 inches of digging depth at minimum" → Enrichment.
- **Feeding:** "What matters more day to day is constant fresh water and safe wood to gnaw, gerbil teeth grow continuously." → Health Issues.
- **Enrichment:** "which for most setups means considerably more than a bag's worth" → Enclosure Setup.
- **Legal:** none needed.
- **vs Guinea Pig:** "versus a fraction of that for a pair of gerbils in a tank with deep, diggable substrate" → Enclosure Setup.
- **vs Hamster:** "a quality pelleted food formulated for both works for either species" → Feeding.

## 6. Trust

Doubts: the two comparison pages read like they were written from a template without checking the species pages, and the protein and humidity splits mean somebody is wrong about numbers I have to buy against. Most convincing sentence, from the enrichment guide: "Cardboard tubes work as a starting version and gerbils will destroy them quickly, which is fine and also why a rigid option is worth having as the permanent one."

## 7. Set grade

**B-.** Excellent on the two things that matter most, burrow structure and law, undermined by numbers that disagree across pages I am supposed to trust equally. First two changes: reconcile the numbers into one source of truth (protein, fat, depth, humidity, tank size, wheel size, lifespan, wheel price), and fix the comparison pages' gerbil columns to match it.

## Not covered anywhere

- How to sex gerbils or confirm a same-sex pair, and what an accidental litter means.
- What to check when choosing animals from a shop or breeder.
- The first-week settling and quarantine routine.
- Warning signs that a bonded pair is declanning, and how to separate safely.
- A full cleaning schedule and bedding-change interval outside one hub FAQ.
- Heat and cold thresholds for gerbils; the shared heat stress guide names guinea pigs, rabbits, chinchillas, and hamsters, not this species.
- Out-of-tank time or playpen safety.
---

# Sulcata Tortoise: Set Review

Opus reader agent, first pass, 2026-09-14, batch H. Raw and unedited.

## 1. Page by page

- **00 Hub.** Finished it, but it is a summary of the other nine. Actionable: the two cost tables, the checklist, the 12 to 18 inch buried wall. **C.**
- **01 Encyclopedia.** Finished it, 90 seconds. Actionable: almost nothing, except the 10 foot burrow depth, which reframes the digging problem. **B-.**
- **02 Cost.** Finished it. Actionable: adoption over purchase, monthly figures by life stage, the winter electricity line. **A-.**
- **03 Handling.** Finished it. Actionable: keep juveniles low, never house two mature males, sexing cues. **B.**
- **04 Health.** Finished it. Actionable: the causes are the setup, plus clearing yard chemicals. Names two studies and admits they disagree. **A-.**
- **05 Tank setup.** Finished it. Actionable: every number I need to build, sizes, temps, substrate depth, photoperiod. The most useful page here. **A.**
- **06 Feeding.** Finished it. Actionable: schedule by age, supplement cadence, the eight reasons for not eating, the one week vet threshold. **A.**
- **07 Enrichment.** Finished it. Actionable: the priority list, target training, do not build terrain that flips a tortoise. **A-.**
- **08 Legal.** Finished it. Actionable: the state table, the tick certificate for interstate transport, the California desert tortoise mix-up. **A-.**
- **09 vs Russian.** Finished it. Actionable: mostly a do-not-buy filter, which is fair. **B+.**

## 2. Hub and encyclopedia

The encyclopedia earns a small place: origin, burrow depth, the 1970s to 1990s export history that explains the rescue backlog. Nothing else. The hub does not earn its place. Every section is a shorter, less careful version of a deep dive, and it is the only page where numbers are asserted with no hedging.

Hub versus deep dive conflicts:

- Lifespan. Hub: "they can live 70 to 150+ years." Cost guide: "Sulcatas commonly live 70 to 100 years." Handling and vs Russian also say 70 to 100. The hub is the outlier and it is the number people quote.
- Sexing size. Hub: "around 8 to 10 inches in shell length." Handling: "around 10 to 15 inches in shell length."
- Pyramiding certainty. Hub: "is caused by excessive protein intake, low humidity during growth, and rapid growth rate." Health: "What causes it is genuinely debated... dietary protein playing only a minor role."
- Calcium. Hub checklist: "Calcium supplementation (2 to 3x/week)." Feeding: "2 to 3 times a week for juveniles and about weekly for adults."
- Outdoor space. Hub: "at least 100+ square feet." Tank setup: "at least 80 to 100 square feet per tortoise."
- Shelter temp. Hub: "60 degrees F+." Tank setup: "set to maintain 70 to 75°F."
- IUCN status. Encyclopedia: "Vulnerable (IUCN)." Legal: "Centrochelys sulcata is IUCN endangered, which makes it categorically non-exempt." A legal conclusion rests on that word.

## 3. As a whole

Yes, I could set one up, buy it, feed it, and keep it alive. Setup, diet, and the size trap are all covered properly.

Still missing: a soaking protocol (feeding says juveniles "benefit from regular soaking" and stops), growth benchmarks and a weigh-in routine, how to actually build the humid hide the health page depends on, how to evaluate a hatchling or a breeder, what an emergency vet bill costs, and how you move a 100 pound tortoise.

Unsignposted handoffs: the health page's pyramiding humidity advice has its 70 percent number only in tank setup. The feeding page's "an enclosure that isn't warm enough" has its temperature gradient only in tank setup. The cost guide's heated shelter has its target temperature only in tank setup. The handling page's sexing cues sit next to the hub's different threshold with nothing connecting them.

## 4. Overlap and conflict across the deep dives

Read three or four times: adult size and surrender risk, buried fencing, indoor is temporary, pyramiding.

- Brumation, the worst one. Tank setup: "the shelter needs to stay heated to at least 55 to 60°F to allow safe brumation." vs Russian: "Sulcatas come from the edge of the Sahara and are not built for brumation at all."
- Juvenile indoor size. Handling: "requiring an 8-by-8-foot indoor minimum as a juvenile." Tank setup: "A juvenile under 10 inches needs roughly 7 feet by 3.5 feet by 2.5 feet," with 8 by 8 given as the adult figure.
- Weight. Handling: "An adult sulcata weighs 80 to 110 pounds." vs Russian: "70-150+ lbs."
- Shelter cost, inside one page. Cost table: "Heated shelter (materials + heater) | $200 - $600." Cost body: "a proper heated shelter... adds another $1,000 or more on top of that."
- Daytime temp. Feeding: "roughly 85 to 95°F during the day." Tank setup: "ambient 80 to 90°F."

## 5. One link per page

- **Hub.** "Adults need at least 100+ square feet of outdoor space" to the tank setup guide.
- **Encyclopedia.** "digging burrows up to 10 feet deep to escape heat" to the enrichment guide.
- **Cost.** "a proper heated shelter built around something like a ceramic heat emitter for cold nights" to the tank setup guide.
- **Handling.** "requiring an 8-by-8-foot indoor minimum as a juvenile and several hundred square feet outdoors as an adult" to the tank setup guide.
- **Health.** "Low humidity during the growing years is strongly linked to pyramiding" to the tank setup guide.
- **Tank setup.** "the shelter needs to stay heated to at least 55 to 60°F to allow safe brumation" to Tortoise Brumation.
- **Feeding.** "An enclosure that isn't warm enough. By far the most common cause." to the tank setup guide.
- **Enrichment.** "a tortoise calcium and multivitamin powder handles that side" to the feeding guide.
- **Legal.** "whether you can provide for an animal that may reach 200 pounds and outlive you" to the cost guide.
- **vs Russian.** "plus a heated shelter for cold nights" to the tank setup guide.

## 6. Trust

Doubts: the hub's confident pyramiding causation against the health page's honest "genuinely debated"; the 150 year lifespan that no deep dive supports; endangered versus Vulnerable; the brumation contradiction; the 8 by 8 juvenile figure. The pattern is that the hub and the odd stray sentence are unreviewed, while the deep dives are careful.

Most convincing sentence, from the enrichment guide: "A tortoise that will follow a target moves itself for weighing, health checks and enclosure transfers, which for a hundred pound animal is worth real effort." Close second, same page: "A tortoise that flips onto its back in a hot enclosure can die there."

## 7. Set grade: B+

The deep dives are genuinely good and specific, and the set is dragged down by a hub that repeats them badly and by numbers that drift page to page.

First two changes: (1) fix the brumation contradiction and pin one set of canonical numbers for weight, lifespan, sexing size, and outdoor space, then make the hub quote them; (2) rewrite the hub as a short router that links inline into the deep dives instead of restating them.

## Not covered anywhere

- A soaking protocol for juveniles: how often, how long, water depth and temperature.
- Growth benchmarks by age and a routine weigh-in schedule for a growing sulcata.
- How to build the humid hide the pyramiding advice depends on.
- How to evaluate a hatchling or a breeder at purchase.
- What an emergency vet event actually costs in dollars.
- How to physically move or transport an adult, which the cost guide raises and no page answers.

---

# African Fat-Tailed Gecko: Set Review

Opus reader agent, first pass, 2026-09-15, batch I. Raw and unedited.

## 1. Page by page

**00 Hub.** Finished it. Actionable: full shopping list, warm/cool hide temps, three-hide rule. Grade B-, it states numbers that its own deep dives contradict.

**01 Encyclopedia.** Finished it, it is short. Actionable: almost nothing husbandry-wise, but the wild-caught import history changes how I shop. Grade B.

**02 Cost.** Finished it. Actionable: I can budget the animal, the setup, and a vet emergency. Grade B+.

**03 Handling.** Finished it. Actionable: two-week wait, no tail grabbing, chirp means stop. Grade B.

**04 Health.** Finished it. Actionable: symptom lists I can check against, and a clear "this one needs a vet" split. Grade B+.

**05 Tank setup.** Finished it. Actionable: every number I need to build the enclosure, including night drop and substrate depth. Grade A-.

**06 Feeding.** Finished it, best page in the set. Actionable: portion rule, tail-thinner-than-neck red flag, nine reasons for a hunger strike. Grade A-.

**07 Enrichment.** Finished it. Actionable: a priority order I can build to, and permission to skip mirrors. Grade B+.

## 2. Hub and encyclopedia

The encyclopedia earns its place: range, habitat, and the import history are nowhere else. The hub mostly repeats the deep dives at lower resolution, and it disagrees with them.

- Humidity. Hub: "Aim for 50 to 60% ambient humidity." Tank setup: "Ambient humidity around 50 to 70% works well, maintained with a permanent humid hide running 70 to 80%." The hub never gives the humid-hide number at all.
- Cool side. Hub: "a cool hide (75 to 78 degrees F)." Tank setup: "cool side 75 to 80°F, with a nighttime drop to around 70 to 75°F." The hub has no night temperature.
- Supplements. Hub: "Dust with calcium w/D3 at every juvenile feeding and 2 to 3 times per week for adults." Feeding: "Dust with plain, phosphorus-free calcium at most feedings... with a calcium and D3 combo used once or twice a week on top." Those are different regimens, and the hub never mentions the phosphorus warning.
- Schedule. Hub: "Feed juveniles every other day, adults 2 to 3 times per week." Feeding: adults are "3 times a week, 3 to 4 times a week, or a condition-based tiered schedule." The hub has no hatchling line at all, and hatchlings eat daily.
- Lifespan. Hub: "commonly live 10 to 20 years in captivity." Cost: "Care sources commonly cite 15 to 20 years, and... a maximum recorded captive lifespan of just over 16 years."
- Substrate. Hub: "Cypress mulch or coconut fiber substrate." Tank setup: "roughly 70% topsoil to 30% play sand... at least 4 inches" for burrowing. The hub's version reads like bedding, not a dig box.
- Soak. Hub: "Soak the gecko briefly in shallow lukewarm water." Feeding: "a 15 to 30 minute soak in warm water."
- The hub says annual fecal exams are recommended, then budgets "Annual vet wellness check $50-$90" with no fecal line, while the cost guide prices a fecal at $65 to $110.

## 3. The set as a whole

Yes, I could buy, build, feed, and keep one. Still missing: how to actually raise ambient humidity to 50-70% (nobody gives a misting or ventilation method), a hygrometer (the cost FAQ mentions one, the cost table and hub checklist do not list it), a scale, and an enclosure cleaning schedule.

Unsignposted handoffs: the health guide's "manageable at home with a proper moist hide... and correct humidity" never says the numbers live in tank setup. The feeding guide's retained-eye-cap paragraph raises humidity and points nowhere. The handling guide says "fat-tails need meaningfully higher humidity" and links to leopard gecko pages instead of its own tank setup. The encyclopedia's wild-caught paragraph raises quarantine without saying so.

## 4. Overlap and conflict across deep dives

Read four times: the tail-is-a-fat-reserve fun fact (hub, cost, handling, health). Read three times: the leopard gecko comparison, the three-hide list, the humid hide. The vocalization material appears in handling and again as the tank setup fun fact.

Real conflict, sand. Tank setup: "a common blend is roughly 70% topsoil to 30% play sand... pure loose sand is sometimes flagged as an impaction risk, but the more accurate picture is that impaction tends to happen in geckos that are already unhealthy." Feeding: "Never use sand as substrate, ingested sand causes real digestive impaction." One page sells me the sand, the next page bans it.

Also, hub calls stuck shed "the most common health issue" while the health guide calls MBD "the most common serious issue in this species" and stuck shed the most common "fat-tail-specific" one. Activity window wobbles: hub "crepuscular," tank setup "nocturnal," enrichment "crepuscular and nocturnal."

## 5. One link per page

- Hub: "Cypress mulch or coconut fiber substrate help maintain this humidity level while remaining easy to clean." to tank setup guide.
- Encyclopedia: "for years most animals offered for sale were wild caught adults." to Reptile Quarantine.
- Cost: "The thermostat isn't optional, it's what keeps the heat mat from overheating the enclosure." to Reptile Heating and Thermostats.
- Handling: "fat-tails need meaningfully higher humidity than leopard geckos, and are more sensitive to conditions that run too dry." to tank setup guide.
- Health: "It's manageable at home with a proper moist hide lined with damp sphagnum moss and correct humidity." to tank setup guide.
- Tank setup: "pure loose sand is sometimes flagged as an impaction risk." to health issues guide, impaction section.
- Feeding: "If humidity is too low, the shed can get stuck, including retained eye caps." to tank setup guide.
- Enrichment: "A gecko cave packed with damp sphagnum moss stays humid inside while the rest of the enclosure runs drier." to tank setup guide.

## 6. Trust

Doubts: the sand contradiction between two adjacent pages, the hub's supplement schedule disagreeing with the feeding guide, and three lifespan figures across three pages. "The tail... can hold close to half the gecko's total body mass" is a big claim carried without a source.

Most convincing sentence, from enrichment: "A humid hide that has dried out is a hide, not a humid hide."

## 7. Set grade: B

The deep dives are specific, honest about disagreement, and clearly written, but the hub undercuts them with softer competing numbers.

First two changes: make the hub inherit its numbers from the deep dives instead of restating them, and settle the sand question once, in the tank setup guide, with the feeding guide pointing at it.

## Not covered anywhere

- How to actually raise and hold 50-70% ambient humidity: no misting, ventilation, or water-surface method on any page, and the shared Shedding and Emergency guides do not address it.
- Hygrometer: named in one cost FAQ answer, absent from the cost table and the hub checklist, so a reader buying from the list ends up unable to measure the species' headline requirement.
- A scale, despite the feeding guide calling for "routine weight checks."
- Enclosure cleaning and substrate replacement schedule.
- Cohabitation: whether two can share an enclosure, and whether males fight.
- Sexing: the hub says females are smaller, and nothing tells you how to sex one.


---

# Corydoras Catfish: Set Review

Opus reader agent, first pass, 2026-09-15, batch I. Raw and unedited.

**1. One line per page**

- 00 Hub: Finished it, and it is the only page that gives me a water change schedule, but its cost table and tank size fight the cost and setup guides. B-minus.
- 01 Encyclopedia: Finished it fast; the 2024 genus revision is the one thing here I could not get elsewhere, though nothing on the page is actionable. B.
- 02 Cost: Finished it, and I can build a shopping list and a monthly number from it. B-plus.
- 03 Handling: Finished it, though it is mostly "do not handle, buy six, they are not algae eaters," which two other pages also say. C-plus.
- 04 Health: Finished it, and it is the most usable page in the set: named conditions, nitrate under 20 ppm, 82F for ich, half or quarter medication doses. A-minus.
- 05 Tank setup: Finished it, and I could buy and assemble the tank from this page alone. A-minus.
- 06 Feeding: Finished it, portions and timing are concrete, but the "Why They Stop Eating" list is a numbered list with only item 1 in it, which reads like a page that shipped broken. B-minus.
- 07 Enrichment: Finished it twice; the only page that sources its claims and the only one that tells me the pectoral spines lock in a net. A.

**2. Hub and encyclopedia versus the deep dives**

The encyclopedia earns its place on history and taxonomy alone, nothing else carries it. The hub mostly restates the deep dives, but it uniquely carries "20 to 25 percent weekly water changes," which appears nowhere else, and that is the single most important routine number in fishkeeping.

It also disagrees with them:

- Tank size. Hub: "A 10 to 20 gallon tank suits a proper school." Setup guide: "A 20-gallon long tank is the practical minimum for a proper school of six standard-sized cories." The hub's checklist says "10-20+ gallon tank." Ten gallons is only correct for pygmies, and the hub never says so.
- Tank price. Hub table: "10-20+ gallon tank | $60 | $120." Cost guide: "20 gallon long tank | $35 - $60." Same tank, double the money.
- Filter price. Hub: "Gentle filter | $20 | $35." Cost guide: "Gentle-flow filter | $8 - $15."
- Food cost. Hub annual: "Sinking wafers + frozen bloodworms | $40 | $70." Cost guide: "Roughly $10 to $20 a Month," which is $120 to $240 a year.
- The hub's setup table omits a heater and a test kit entirely, both of which the cost guide calls required.
- The hub calls them "scaleless catfish"; the health guide and encyclopedia call them "armored catfish with sensitive, naked bellies." Same conclusion about copper, contradictory anatomy.

**3. The set as a whole**

I could set up, buy, feed, and keep them. Setup, substrate, portions, group size, and the main diseases are all here. Missing: cycling the tank before fish go in (the shared guide covers it, but no species page says "do this first"), acclimation on arrival for a species the health guide says shipping stress triggers red blotch in, a tankmate list beyond "not aggressive," breeding, and how to tell dwarf and pygmy species apart when the setup guide says they need a different tank.

Questions raised on one page and answered on another without saying so:
- Cost guide: "Soft sand substrate is genuinely important for this species, and it matters more than it looks like it should." Why is on the setup and enrichment pages; the cost guide never points there.
- Health guide: "keep nitrates under 20 ppm going forward." How is the hub's weekly 20 to 25 percent water change, which the health guide does not mention.
- Handling guide: "Choosing sharp substrate, which damages this species' sensitive barbels." The enrichment guide argues that is probably not the mechanism, and handling never says so.
- Hub FAQ: "Can corydoras live with a bristlenose pleco?" is the only tankmate answer anywhere, and no deep dive links to it.

**4. Overlap and conflict across the deep dives**

Read three or four times: cories are not algae eaters, buy six of one species, surface gulping is normal, sand not sharp gravel. Handling and feeding overlap almost completely on the first two; handling is the page I would cut.

Real conflicts:
- Barbel erosion cause. Health: "It's caused by a combination of sharp substrate causing physical damage and elevated nitrates allowing bacterial infection to take hold in the wound." Enrichment: "No controlled study establishes what causes barbel erosion" and "Do not let the substrate get dirty, which is the actual barbel risk." One page is confident about a mechanism the other says is unproven.
- Substrate depth and cleaning. Setup: "About 2 inches of depth works well" plus "Avoid over-cleaning or disturbing the substrate too aggressively during maintenance." Enrichment: "Vacuum the surface layer regularly." Hub: "making regular gravel vacuuming and 20 to 25 percent weekly water changes especially important." Three shades of the same instruction, and setup's caution cuts against the other two.
- Feeding time. Feeding: "Feeding in the evening, when this species is naturally most active." Setup: "Cories are most active around dawn and dusk." Enrichment: "feed after lights out." Close enough to be confusing, not close enough to be one instruction.
- Encyclopedia internal: header says "Scientific: Corydoras aeneus," body says "the bronze cory moved to Osteogaster." The header was not updated.

**5. One link per page**

- Hub: "Barbel damage or erosion from sharp or rough substrate is a very common and entirely preventable problem." Should point to the enrichment guide, which is where that claim gets tested.
- Encyclopedia: "They are obligate shoaling fish, meaning they need the company of their own species to feel secure." Should point to the enrichment guide's group size section.
- Cost: "A 20-gallon long tank is the practical starting size for a proper school." Should point to the tank setup guide. This is the biggest missing link in the set.
- Handling: "Choosing sharp substrate, which damages this species' sensitive barbels." Should point to the enrichment guide.
- Health: "switch to soft sand if you haven't already, do a significant water change, and keep nitrates under 20 ppm going forward." Should point to the tank setup guide. This page has no link to any sibling.
- Tank setup: "A reliable water test kit is worth keeping on hand so you catch a rising nitrate reading before it becomes a barbel problem." Should point to the health issues guide.
- Feeding: "Test water parameters immediately if appetite loss shows up alongside lethargy, hiding, labored breathing, or any visible sign of illness." Should point to How to Tell If Your Fish Is Sick.
- Enrichment: needs none. It is the only page that links where it should already.

**6. Trust**

Doubts: the hub's cost table and tank range contradicting the cost and setup guides is the kind of thing that makes me re-check everything else. The feeding guide's one-item numbered list is a visible defect. The encyclopedia's scientific name contradicting its own history paragraph. Four pages carrying the same Jackson's Chameleon and canary comparison link reads like padding, not navigation.

The sentence that convinced me a keeper wrote this: "And take real care netting one, since the pectoral spines lock and tangle in mesh." Nobody writes that who has not spent ten minutes trying to free a cory from a net.

**7. Set grade: B**

Strong on the two things that kill cories, substrate and dedicated food, but the hub contradicts its own deep dives on money and tank size, which is exactly where a buyer starts.

First two changes:
1. Rebuild the hub's cost table and tank size from the cost and setup guides so all three agree, and add the heater and test kit.
2. Reconcile the barbel erosion story. Either the health guide adopts the enrichment guide's "dirty substrate, not grain shape" framing, or the enrichment guide is not the sourced outlier it currently is.

**Not covered anywhere**

Checked against the Health and More list as well as the species pages.

- Breeding and spawning: no page, shared or species, touches it.
- A named tankmate list: only the hub FAQ's bristlenose pleco answer and "no fin nippers, nothing big enough to eat one." No shared guide covers stocking.
- Drip or float acclimation on arrival: the hospital tank guide covers quarantine, not the acclimation procedure itself, and the health guide names shipping stress as a red blotch trigger without saying what to do about it.
- Which species need cooler or warmer water: the setup guide says "preferences vary" and never resolves it, and no shared guide would.
- Sexing, and how to tell a dwarf or pygmy species from a standard one at the store, when the two need different tanks.
- Everything else I flagged is covered: cycling by How to Cycle a Fish Tank, the nitrate and water change routine by the hub and the filtration guide, symptom reading by How to Tell If Your Fish Is Sick, heat by Cooling an Aquarium Without a Chiller, moving and outages by the transport guide.

---

# Red-Footed Tortoise: Set Review

Opus reader agent, first pass, 2026-09-15, batch I. Raw and unedited.

## 1. Page by page

- **00 hub.** Finished it. Act on: the checklist and the two cost tables. But its numbers fight the deep dives. **C**
- **01 encyclopedia.** Finished it, short. Act on: almost nothing, it is natural history. The Lenten-dish and CITES-export history is the only thing here I could not get elsewhere. **B**
- **02 cost.** Finished it. Act on: a real budget, a named breeder with listed prices. **B+**
- **03 handling.** Finished it. Act on: two-handed low support, and the year-by-year growth chart that sizes the adult enclosure. **B**
- **04 health.** Finished it fast. Act on: the symptom-to-cause table in my head, especially dry-and-cool causing RI. **A-**
- **05 tank setup.** Finished it. Act on: everything, this is the build document. **A-**
- **06 feeding.** Finished it. Act on: the 90/10 split, the protein list, the avoid list. **A-**
- **07 enrichment.** Finished it, and it was the only page that surprised me. Act on: scatter feeding, target training, the priority order. **B+**
- **08 legal.** Finished it. Act on: check my state, and do not buy a hatchling in NYC. **A**

## 2. Hub and encyclopedia

The encyclopedia earns its place. It is the only page with range, taxonomy history, IUCN and CITES status, and it does not repeat husbandry.

The hub does not. It is a compressed rewrite of the deep dives, and where it differs it is wrong.

- Floor space. Hub: "Adult red-footed tortoises need at least 32 to 72 sq ft of floor space." Tank setup: "Plan for an indoor minimum around 18 to 24 square feet of floor space for one adult." That is not rounding, it is double.
- Annual cost. Hub's annual table sums to about $375 to $645. Cost guide: "Roughly $650 to $850 a Year." The hub's ceiling is below the article's floor.
- Calcium. Hub: "calcium (without D3 most feedings, with D3 twice weekly for indoor animals without natural sunlight)." Feeding: "Dust food with a calcium and D3 supplement several times a week."
- Diet split. Hub: "about 55% fruit, flowers, and leafy greens; 35% grasses and vegetables." Feeding: "about 70% leafy greens, 20% other vegetables, and 10% fruit," with fruit "commonly cited at 10 to 15%." The hub's lump lets fruit run far past that.
- Night floor. Hub: "nighttime lows no cooler than 65 to 70 degrees F." Tank setup: "Keep the nighttime floor from dropping much below 70°F."
- UVB. The hub prescribes Arcadia 12% flat; tank setup says researchers put this forest species in a lower Ferguson zone and suggests Arcadia Forest 6%.

## 3. Could I keep one

Yes, nearly. I could buy, build, heat, humidify, feed, and recognize the five things that go wrong. Still missing, not in any of the nine pages:

- A soaking protocol. Every page says they soak often. None says how often, how deep, how warm, how long.
- Whether two can live together, and what male-on-male aggression looks like.
- What to inspect on the animal before paying, and what to do in its first month.
- Healthy weight for a given shell length, and how often to weigh.
- How often to change damp substrate. Cost guide says "more often" and stops.

Questions raised on one page, answered on another, with no link: cost guide's "A full adult needs meaningfully more floor space than that" (number is in tank setup); health guide's "raise humidity and warmth in the meantime" (numbers in tank setup); legal guide's "A red-footed tortoise hatchling is inside the prohibition" (handling's growth chart says when it clears four inches); enrichment's humid-substrate priority (tank setup).

## 4. Overlap and conflict across the deep dives

Read three or four times: no-brumation, the protein-deficiency hind-leg paralysis, the 50 to 70 year lifespan, humidity as the defining difference. The protein point appears in the hub, health, feeding and encyclopedia in nearly the same words.

Conflicts:
- Growth rate, inside one page. Handling body: "roughly 3 to 4 inches by the first birthday, 7 to 9 inches and several pounds by age 2." Its own FAQ: "roughly an inch of shell length a year through the first decade." Cost guide repeats the second.
- Time to adult. Handling: "Most individuals reach close to full adult size... within 5 to 10 years." Feeding: "juveniles are still building the growth that gets them to adult size, roughly 10 to 15 years by most estimates," yet it drops feeding frequency at 5.
- Fogger price. Hub table: $40 to $90. Cost guide: "$35 to $60."
- Pyramiding study date. Health guide: "A 2021 study... (Mendoza et al., 2022)."

## 5. One link per page

- 00 hub: "Adult red-footed tortoises need at least 32 to 72 sq ft of floor space" to the tank setup guide.
- 01 encyclopedia: "Officially declared CITES exports between 2000 and 2005 came to roughly 35,565 tortoises" to the legal guide.
- 02 cost: "A full adult needs meaningfully more floor space than that" to the tank setup guide.
- 03 handling: "a dry, sandy, arid-style substrate is a genuine mismatch for it" to the tank setup guide.
- 04 health: "while you raise humidity and warmth in the meantime" to the tank setup guide.
- 05 tank setup: "a basic automatic fogger or misting system ($35 to $60)" to the cost guide.
- 06 feeding: "many keepers shift to every other day for adults, which helps prevent the overly fast growth that drives shell pyramiding" to the health issues guide.
- 07 enrichment: "a humid substrate with damp retreats is a welfare input rather than a refinement" to the tank setup guide.
- 08 legal: "A red-footed tortoise hatchling is inside the prohibition" to the handling guide's growth chart.

## 6. Trust

Doubts: the hub's floor-space and annual-cost numbers contradicting its own articles is the worst of it, because I cannot tell which page to believe on anything else. Handling contradicting itself on growth rate. The health guide's unnamed authorities, "several reptile-vet sources" and "one detailed care resource." The enrichment guide's "A 2025 study" with no author or journal, next to a mislabeled study date on the health page.

Most convincing sentence in the set: "good ventilation still matters, but 'open on top' and 'well-ventilated' aren't the same thing for a species that needs to hold 70 to 80% humidity." That distinction only comes from having fought to hold a number.

## 7. Set grade: B

The deep dives are specific, sourced, and unusually good at saying why this species is not the other two; the hub sits on top contradicting them.

First two changes:
1. Make the hub agree with the articles or strip its numbers and let it route.
2. Give the health guide in-body links to the tank setup and feeding guides, since it names the problems and holds none of the fixes.

## Not covered anywhere

Checked against the Health and More list as well as this species' own pages.

- Soaking protocol: frequency, water depth, temperature, duration. Nothing in the set, and the stool and hydration guide assesses hydration rather than prescribing soaks.
- Keeping two or more together, and male aggression. The sexing and eggs guide identifies sex but not cohabitation.
- What to check on the animal before buying, and its first-month acclimation. The herpesvirus guide covers quarantine length, not selection or settling in.
- Healthy weight for shell length and a weighing cadence. The brumation guide's weigh-ins apply only to species that brumate, which excludes this one.
- How often to change damp substrate in a permanently humid enclosure.
---

# Degu: Set Review

Opus reader agent, first pass, 2026-09-15, batch I. Raw and unedited.


## 1. Page by page

- **00 hub.** Finished it. Actionable: temperature, substrate depth, solid roof, chew replacement, orange teeth. Grade B+.
- **01 encyclopedia.** Finished it. Actionable: almost nothing, but the 1964 Santiago-to-MIT-to-Vermont colony history is the only thing on the site I could not have guessed. Grade B.
- **02 cost.** Finished it, then stopped trusting it. Actionable: pair pricing, annual table. Grade C-.
- **03 handling.** Finished it in a minute. Actionable: scoop, never the tail. Nothing on how to actually pick one up. Grade C.
- **04 health.** Finished it. Actionable: symptom lists, the vet-now vs vet-soon split. Grade B.
- **05 tank setup.** Finished it, distrusted the numbers. Actionable: aspen or paper, no cedar, solid floor. Grade C+.
- **06 feeding.** Finished it. Actionable: hay always, measured pellets, the six reasons for appetite loss. Grade A-.
- **07 enrichment.** Finished it twice. Actionable: sift the sand, do not sterilize it, sessions not permanent. Grade A.
- **08 legal.** Finished it. Actionable: check my state before buying a pair. Grade A.
- **09 vs chinchilla.** Finished it. Actionable: the schedule decision. Grade B.

## 2. Hub and encyclopedia

The hub earns its place: it is the densest page in the set and carries things no deep dive has (six inches of substrate, the solid roof and birds of prey, coprophagy as a requirement, weekly tooth checks). The encyclopedia earns it too, on history alone. But the hub disagrees with its own deep dives:

- Cage. Hub: "A pair needs at least 24x18x36 inches." Setup guide: "At minimum, 24 by 18 by 24 inches for a pair." The hub's own cost table then prices a "24x24x48 in multi-level cage." Three sizes.
- Temperature. Hub: "Keep them at 60 to 72 degrees F... cannot cope above about 80." Setup: "65 to 70°F... never let ambient temperature climb toward 77°F." Health: "kept below about 77°F." The hub's ceiling is 3 degrees past the health guide's emergency line.
- Wheel. Hub: "a solid running wheel of 12 inches or more." Setup: "A solid exercise wheel, 11 to 12 inches."
- Sand. Hub: "using chinchilla dust rather than sand." Enrichment: "Use sand for degus, not dust." A flat reversal.
- Bath length. Hub: "ten to fifteen minutes." Enrichment: "twenty minutes or so at a time."
- Pellets. Hub: "roughly a tablespoon per degu per day." Feeding: "roughly 1 to 2 tablespoons per degu daily."
- Bar spacing. Hub: "half an inch or less." Setup: "an inch or less for adults."
- Lifespan. Encyclopedia: "6-7 years in captivity." Cost: "5 to 8 years... some reaching 10 to 13." Chinchilla guide: "5 to 9 years."

## 3. The set as a whole

I could buy the cage, bed it, feed it and recognise the two diseases that matter. I could not get from "buy two" to actually owning two. Missing: where to buy and how to judge a healthy degu, how to sex them, how to introduce or bond them (four pages say introductions fail, none says how), what happens when one of a pair dies, any cleaning schedule, out-of-cage time and degu-proofing, and what an accidental litter costs me if the shop sexed them wrong.

Unsignposted answers: the cost guide's "dental work for overgrown teeth and diabetes management" is fully explained in the health guide, unlinked. The health guide's "77°F" contradicts the setup guide's room target, unlinked. The setup guide's "this isn't optional grooming, it's a real physiological need" is the whole argument of the enrichment guide, unlinked. The handling guide's warning about sugary treats is the feeding guide, unlinked.

## 4. Overlap and conflict across the deep dives

Read three times: degus are diurnal, degus cannot have sugar, never grab the tail, keep two. The feeding and health guides share a near-verbatim paragraph ("Sugar and fruit in the diet cause the diabetes that's this species' signature health risk... the single biggest lever"). Conflicts beyond the hub ones above:

- Carrot. Hub: "Carrot, sweet potato, beetroot and parsnip... belong in very small pieces as an occasional treat." Health: "even small amounts of fruit, carrot, peas, corn, or sugary treats can trigger the disease."
- Seeds. Hub FAQ: "the occasional plain oat or single sunflower seed." Chinchilla guide: "fruit, honey, seeds, and other sugary items need to be avoided almost entirely."
- Setup total. Cost guide heading: "Upfront Setup: Roughly $100 to $300." Its own table on the same screen: cage $280-$360, wheel $55-$75, plus four more lines. The real floor is about $374 before the animals.
- Sand permanence. Enrichment: "Do not leave sand in permanently." Setup: "A bath house filled with bathing sand covers both," with no session limit.

## 5. One link per page

- 00: "A pair needs at least 24x18x36 inches with multiple solid levels" to the enclosure setup guide.
- 01: "degus lack a functional insulin response and develop diabetes and cataracts on fruit" to the feeding guide.
- 02: "dental work for overgrown teeth and diabetes management" to the health issues guide.
- 03: "Feeding fruit or sugary treats as an occasional 'harmless' indulgence" to the feeding guide.
- 04: "Degus tolerate heat poorly and should be kept below about 77°F" to the enclosure setup guide.
- 05: "this isn't optional grooming, it's a real physiological need for this species" to the enrichment guide.
- 06: "Tooth spurs, sharp edges on molars that don't align properly, can cut a degu's mouth" to the health issues guide.
- 07: "Solid shelves, not wire, since wire flooring causes foot problems" to the health issues guide (bumblefoot).
- 08: "Degus are social and usually kept in pairs or groups, which means a restriction reaches more than one animal" to the handling guide.
- 09: "fruit, honey, seeds, and other sugary items need to be avoided almost entirely" to the feeding guide.

Every deep dive links out to gerbil or chinchilla pages and almost never to its own species' siblings, which is backwards for someone mid-setup.

## 6. Trust

Doubts: the $100 to $300 setup figure sitting above a table that disproves it; three cage sizes; the sand-versus-dust reversal between two pages; "rabbit food... can contain an ingredient that's genuinely toxic to degus" without naming the ingredient, which reads like a fact copied without being understood; and an article titled "tank setup" for a species the hub says must not live in a tank. The hub cites the RSPCA repeatedly, the deep dives cite nothing, so they feel written by different hands.

Most convincing sentence: "Leave it in permanently and it becomes a toilet, and sift and top it up instead of replacing everything every session, since the research suggests the scent history is part of what makes it worth using."

## 7. Set grade

C+. The individual pages are well aimed and the enrichment, legal and feeding guides are genuinely good, but a buyer following them gets three cage sizes, two temperature ceilings and two opposite answers on sand, which is exactly where a care site has to be right. First two fixes: pick one number for cage, temperature, wheel, bath medium, bath duration, pellet volume and lifespan and push it everywhere including the cost tables; then write the missing page on sourcing, sexing, introducing and re-pairing a degu, because the set tells me to buy two eight times and never tells me how.

## Not covered anywhere

- How to introduce or bond two degus, and how to re-pair a survivor when one dies.
- How to sex degus, and what to do about an accidental litter from a mis-sexed pair.
- Where to source a bonded pair and how to judge a healthy degu at purchase.
- Cage cleaning schedule and how to spot clean a six-inch dig layer.
- Out-of-cage time and degu-proofing a room for an animal that chews structurally.
- The shared list covers heat emergencies, antibiotic risk, vet transport and grooming, so those are answered; the six above are not, on any page in the set.

---

# Savannah Monitor: Set Review

Opus reader agent, first pass, 2026-09-15, batch I. Raw and unedited.


**1. Page by page**

- 00 hub: Finished it. Actionable: full parts list, cost ranges, a checklist I could shop from. But its numbers are the loosest in the set. C+
- 01 encyclopedia: Finished it. Actionable: nothing husbandry-wise, but the CITES export figures told me why the animal in front of me is probably wild-caught. B+
- 02 cost: Finished it. Actionable: a real budget, and the admission that no 8x4x4 exists ready-made. B-
- 03 handling: Finished it. Actionable: the warning-sign list, pick up from underneath, tongs for feeding, nail trims are a two or three person job. A-
- 04 health: Finished it, fast, because it is thin. Actionable: almost nothing numeric. It names four problems and says see a vet. C+
- 05 tank setup: Finished it. Actionable: the whole build. Best page here. A
- 06 enrichment: Finished it. Actionable: the priority order, puzzle feeding at existing ration, target training. Two sentences are visibly broken. B
- 07 legal: Finished it. Actionable: I know exactly whether I can own one. A-

**2. Hub and encyclopedia**

The encyclopedia earns its place: the 1792 naming and the export volumes appear nowhere else. The hub mostly restates the deep dives, and where it differs it is wrong.

Conflicts, hub versus deep dive:
- Size. Hub: "Adult savannah monitors can reach 3 to 5 ft" and "weigh 6 to 15+ lbs". Handling: "reaches 3 to 4 feet long and weighs 8 to 15 pounds". Encyclopedia: "2.5-4 feet (75-120 cm)". Three different animals.
- Basking. Hub: "A very hot basking spot (130 to 150 degrees F surface) is critical." Tank setup: "Basking surface temperature should reach 140 to 150F". A 130F floor is ten degrees of daylight between two pages.
- Cool side. Hub: "Cool side: 78 to 82 degrees F." Tank setup: "Cool side should run 75 to 85F, with nighttime dropping to around 70 to 75F." The hub never mentions a night drop at all.
- Humidity. Hub: "High humidity (60 to 70%) in the cool/burrow area." Tank setup: "Around 50% ambient, with access to a genuinely humid burrow."
- Substrate. Hub: "12 inches or more". Tank setup: "12 to 24 inches or more". The hub checklist, the thing I would actually shop from, says "12 inch+", which is the tank guide's failing grade.
- Vet. Hub: "Annual vet wellness check | $70 | $120". Cost: "A routine annual exam runs $50 to $100."
- Diet. The hub argues for an invertebrate-heavy diet, then its checklist reads "Varied whole prey diet (roaches, eggs, mice, rats)", putting the two items it just blamed for killing the species on my shopping list.

**3. The set as a whole**

I could build the enclosure, wire the heat and light, buy legally, and handle the animal. I could not feed it with confidence. The only feeding schedule in the whole set is one hub line, "Feed juveniles daily. Feed adults 3 to 5 times per week", and no deep dive repeats, sources, or refines it. No portion size, no supplement dusting frequency despite calcium being on every list, no guidance on what a healthy adult weighs.

Questions raised on one page and answered on another without being told:
- Cost says many arrive "stressed, parasitized"; health says get a fecal exam proactively. Neither points at the other, and neither points at the shared quarantine guide.
- Health blames respiratory infection on low temperatures; tank setup has the actual numbers.
- Health says correct obesity by "encouraging exercise via a properly large enclosure"; the 8x4x4 page is what that means.
- Handling says undersizing the enclosure causes behavioral problems; enrichment is the page about that.

**4. Overlap and conflict across the deep dives**

Read twice or more: the obesity and fatty liver story appears in full on cost, health, enrichment, and legal. The 8x4x4 admission appears near-verbatim on cost and tank setup. "Overfeeding is the single biggest issue" is on four pages.

Conflicts:
- Lifespan. Hub: "5 to 8 years instead of the 15 to 20 years". Cost: "Commonly cited at 10 to 15 years, with 15 to 20 achievable" and elsewhere "dying in their early teens or younger". Early teens and 5 to 8 years are not the same claim.
- Enclosure cost. Hub: "8x4x4 ft+ custom enclosure or room | $500 | $1200". Cost: "Enclosure (8x2x2ft, partial match only) | $650 - $730", which is the wrong-size box priced above the hub's floor for a right-sized one.
- Legal, internally. "the six places that do restrict it are worth reading individually", then a table of eleven jurisdictions, then "Three of the six restrictions" and "Rhode Island is the only one of the six", then "Forty-one of the 52". The table and the final count agree; the word "six" is stale in three places.

**5. One link per page**

- 00 hub: none needed, the sidebar carries every one.
- 01 encyclopedia: "Despite a reputation for being tameable, savannah monitors in captivity frequently suffer from obesity and shortened lifespans due to improper high-fat diets." To the health issues guide.
- 02 cost: "An adult needs an 8x4x4 foot custom build, and it's worth being upfront here: the enclosure above is an honest partial-match substitute". To the enclosure setup guide.
- 03 handling: "Overfeeding, the single biggest issue with this species." To the health issues guide.
- 04 health: "Manageable at home through genuine diet correction and encouraging exercise via a properly large enclosure". To the enclosure setup guide.
- 05 tank setup: "Worth being upfront here: a ready-made 8ft PVC modular enclosure is actually 8x2x2ft". To the cost guide.
- 06 enrichment: "Do not add calories in the name of enrichment, because obesity is the defining welfare problem in captive savannah monitors." To the health issues guide.
- 07 legal: "Fatty liver disease kills more pet savannah monitors young than anything else, and it is entirely a husbandry outcome." To the health issues guide.

**6. Trust**

Doubts: two sentences in the enrichment guide are stranded with their subject missing, "Other quantities are available and an enclosure for this species will need many" and "The board is sized for a lizard and not a dog, which is the gap that used to sit here", which reads like a product was pulled and the prose was not. The legal guide's "six" against its own eleven-row table. The size spread across three pages. And the hub telling me rodents kill this species, then listing mice and rats on the checklist.

Most convincing sentence: "Achieve this by pouring water directly into the deep substrate in one area and providing a humid hide, rather than trying to raise ambient humidity across the whole enclosure." That is somebody who has tried to fog an eight-foot box and given up.

**7. Set grade: B-**

The build and legal pages are genuinely good, and the set is undone by a hub whose numbers fight the pages underneath it and by a feeding question nobody answers.

First two changes:
1. Make the hub a summary of the deep dives instead of a fourth opinion: one size, one basking range, one cool side, one humidity target, one vet price, and drop mice and rats from the checklist.
2. Write the feeding page. Schedule by age, portion, supplement dusting frequency, what a healthy body looks like with numbers, and link it from health and enrichment.

**Not covered anywhere**

Checked against the Health and More shared guides first. Quarantine, shedding, power outages and sitters, Salmonella, stool and hydration checks, and thermostat and probe placement are all covered there, so they are off this list.

- Feeding schedule, portion size, and how to adjust either as the animal grows. Only one unsupported hub line.
- Calcium and D3 dusting frequency. Named as a purchase on three pages, never given a schedule.
- What a healthy adult weight or body condition score actually is. Health links out to a general body condition page but gives no monitor numbers.
- How to buy one: captive-bred versus wild-caught sourcing, and what to check on the animal before money changes hands. Flagged as the core risk on cost and health, never answered.
- Building the 8x4x4: materials, ventilation, floor loading, and how to contain 12 to 24 inches of damp soil.
- Maintenance of a deep soil bed: spot cleaning, full changes, how often.
- How to find a vet with monitor experience, called essential on the hub.
- Free-roam safety, raised on the hub and dropped everywhere else.

---

# Mourning Gecko: Set Review

Opus reader agent, first pass, 2026-09-15, batch J. Raw and unedited.

## 1. Page by page

- **00 Hub.** Finished it, and it is the most complete single page here. I can act on all of it: tank size, temps, humidity, food, checklist. Grade C+ (see the conflicts below).
- **01 Encyclopedia.** Finished it. Nothing to act on, but the History paragraph is the only place I learned why this animal exists as it does. Grade B.
- **02 Cost.** Finished it. I can budget: about $200 to $450 up front, $10 to $25 a month, $60 for a trio. Grade A-.
- **03 Handling.** Finished it. Actionable: don't. Rest a hand in the enclosure, let one walk on, putty every gap. Grade B+.
- **04 Health.** Finished it. Actionable: the MBD sign list, the 4 to 6 week clutch cycle, when to call a vet. Grade A-.
- **05 Tank setup.** Finished it. Buildable as written. Grade B+.
- **06 Feeding.** Finished it, twice. Best page in the set: it tells me the sources disagree instead of inventing a number. Grade A.
- **07 Enrichment.** Finished it. Actionable priority list. Grade B+.

## 2. Hub and encyclopedia

The encyclopedia earns its place: the parthenogenesis history, the 44 and 66 chromosome lineages, the cargo-ship spread are nowhere else. The hub does not. It is a full care sheet that restates every deep dive at lower resolution, and where it restates it, it disagrees.

- Genus. Hub: "a different genus entirely from Lygodactylus lugubris, the mourning gecko." Encyclopedia: "Scientific: Lepidodactylus lugubris." The hub names the wrong genus in the FAQ meant to clear up a naming confusion.
- Enclosure. Hub: "An 18x18x24" enclosure is suitable for a small colony of 3 to 5 mourning geckos." Tank setup: "A 12x18x18 inch, tall, front-opening enclosure works for a pair or small group of up to about three to five." Same group, two tanks, and only the bigger one is priced.
- Prey size. Hub: "Prey should be no larger than the space between the gecko's eyes." Feeding: "Prey should be no larger than the width of the gecko's head." Those are very different insects.
- Calcium dusting. Hub: "dust with calcium w/D3 2 to 3 times per week." Feeding: "dust with calcium at most feedings."
- Schedule certainty. Hub: "offered every 2 to 3 days in a small raised dish." Feeding: "This is one of the more genuinely inconsistent schedules across care sources." The hub launders a real range into one number.

## 3. The set as a whole

Yes, I could buy, build, feed and keep one. What is missing: what to do with the eggs and the surplus animals. Three pages tell me the colony grows on its own, the hub says "Population management may eventually be necessary," and no page says what management means. Also missing: how to culture fruit flies when they are $50 to $100 a year and weekly; how to source and maintain the isopod and springtail crew the hub recommends; what a healthy animal looks like at purchase; what to actually do when one gets loose.

Questions answered elsewhere without being told:
- Cost: "Heat is usually the one line item you can skip entirely" is justified only by the tank setup temperatures.
- Feeding: "a swollen abdomen paired with straining, which points to egg-binding" is fully explained on the Health page.
- Health: the calcium and D3 warning has its actual dosing schedule on the Feeding page.
- Tank setup: the dominant-female-guarding-the-dish problem is the same one Feeding lists as overcrowding and Enrichment solves with distributed stations.

## 4. Overlap and conflict across the deep dives

Read twice or more: parthenogenesis (all six pages), the 4 to 6 week clutch (health, feeding), escape-proofing with aquarium-safe putty (handling, tank setup, near word for word), 18x18x24 (cost, tank setup, enrichment), don't handle (handling, enrichment, hub).

The real conflict is whether a colony is required. Handling: "a lone mourning gecko survives fine and will still lay viable eggs on its own, some breeders keep them solo without issue, so keeping a group is more a keeper preference than a hard requirement." Enrichment: "A colony over a single animal" and "You can, and it is an odd choice for a colonial parthenogenetic species." Smaller: handling says "Adult mourning geckos measure just 3.5 to 4 inches" against the hub and encyclopedia's 3 to 4.

## 5. One link per page

- Hub: "A mourning gecko loose in a home is nearly impossible to recover." → Tank setup, escape-proofing.
- Encyclopedia: "They are tiny, fast, and thrive in communal setups, making them fascinating display animals." → Enrichment.
- Cost: "Heat is usually the one line item you can skip entirely, most homes run warm enough already." → Tank setup, temperature.
- Handling: "Before introducing any mourning geckos, especially hatchlings, seal every gap in the enclosure with aquarium-safe putty or a similar barrier." → Tank setup.
- Health: "Skipping UVB or calcium and D3 supplementation doesn't just risk MBD in the abstract, it directly raises egg-binding risk." → Feeding, for the dusting schedule.
- Tank setup: "Provide multiple feeding stations, a dominant female may guard a single food dish and prevent others from eating." → Enrichment.
- Feeding: "a swollen abdomen paired with straining, which points to egg-binding and needs urgent vet care" → Health.
- Enrichment: "And do not be surprised by eggs, because parthenogenesis means a colony grows on its own." → Health.

## 6. Trust

Doubts: the wrong genus on the hub. The hub calling hatchling geckos "nymphs," which is an insect word. A garbled hub sentence, "Monitor colony reproductive rate in optimal conditions, mourning gecko populations can grow quickly." And on Enrichment, the anchor "study on tokay geckos" points at the site's own tokay enrichment post, not the study, which reads like a citation and is not one.

The sentence that convinced me a keeper wrote this: "Pinhead-sized insects can stop triggering a hunting response once a gecko is around a year old, the fix is simply upsizing the feeder, not a health concern." Nobody guesses that. The dominant female guarding the dish is the runner-up.

## 7. Set grade: B

The deep dives are honest, specific and unusually willing to say the sources disagree; the hub sitting on top of them is a lower-quality duplicate that contradicts them on five numbers.

First two changes: (1) cut the hub back to a router with one set of numbers taken from the deep dives, and fix Lygodactylus. (2) Write the page on eggs and population management, then link it from the hub, health and enrichment.

## Not covered anywhere

- What to do with eggs and surplus geckos once the colony grows. The Health and More list has no breeding or rehoming guide.
- Where females deposit eggs, and whether to leave, move, or incubate them.
- Culturing fruit flies. The gut-loading guide covers feeding the flies, not producing them.
- Sourcing and maintaining the bioactive cleanup crew the hub calls for.
- How to pick a healthy animal at purchase and acclimate a shipped one. Quarantine is covered by the shared guide; selection and unboxing are not.
- What to do once a gecko is loose in the house. Every page says prevent it; none says recover it.

---

# Ackie Monitor: Set Review

Opus reader agent, first pass, 2026-09-15, batch J. Raw and unedited.


## 1. Page by page

**00 hub.** Finished it, and it is the page I trust least: every number on it is contradicted downstream. Actionable: the checklist. Grade C-.
**01 encyclopedia.** Finished, 60 seconds. Nothing to act on, but the History paragraph (1982 export ban, small founder pool, 18-egg clutches) is the only page that explains why this animal is in the trade at all. B-.
**02 cost.** Finished. I can build a budget from it: $150-450 animal, $800-1,500 setup, $40-80/month, vet tiers. B.
**03 handling.** Finished, twice. Actionable: wait 4-5 days to 2 weeks, tongs only, 30 minutes of presence per visit, stop it at the elbow. A-.
**04 health.** Finished. Actionable: weekly kitchen-scale weigh-in, two clean fecals before it meets anything else. B.
**05 tank setup.** Finished. This is the page I would actually build from: 5x2.5x4, 130-170F surface, 12-24 in substrate, UVI 4-6, Retes stack. A-.
**06 feeding.** Finished. Actionable schedule, staple list, dusting rule, the six reasons for a hunger strike. A-.
**07 enrichment.** Finished. Actionable: puzzle tube, damper dig zone, target training, priority order. One garbled paragraph. B+.
**08 legal.** Finished. I know my state's answer and the rule text behind it. A.

## 2. Hub and encyclopedia

The encyclopedia earns its place: wild range, wild diet, subspecies history, the smuggling note. None of that is in a deep dive.

The hub does not. It restates the deep dives at lower resolution and with different numbers, and since it is where navigation lands, it is the version most readers will carry. Conflicts:

- Enclosure. Hub: "A 6x3x3 ft enclosure is the minimum for a pair." Setup: "5 feet long by 2.5 feet wide by 4 feet tall as the minimum for a single adult." The hub's pair minimum is smaller in height than the deep dive's single-animal minimum.
- Basking. Hub Housing: "120 to 150 degrees F at the surface." Hub Health, same page: "cannot reach 130 to 150 degrees F." Setup: "roughly 130 to 170°F." Three ranges, one of them self-contradicting.
- Cool side. Hub: "80 to 85 degrees F ambient." Setup: "Cool side should sit around 75 to 80°F."
- Substrate. Hub: "A minimum of 12 inches." Setup: "12 to 24 inches." The hub's own enrichment text says burrows "extend 12 to 24 inches underground," so its minimum cannot hold the burrow it describes.
- Supplements. Hub: "Dust prey with calcium w/D3 and a reptile multivitamin on a consistent schedule." Feeding: "Use a reptile multivitamin containing true vitamin A ... occasionally rather than on a fixed weekly schedule, over-supplementing vitamins is a real risk."
- Rodents. Hub: "Whole prey items offer nutritional completeness when used judiciously." Feeding: "a rodent-heavy diet is directly linked to the fatty liver disease that shortens more captive monitor lifespans than almost anything else."
- Subspecies. Hub: "two recognized subspecies." Encyclopedia: Boulenger "naming all three currently recognized subspecies in the same work."
- Cost. Hub setup table totals about $595-1,130; cost guide says "$800 to $1,500 or more."
- Difficulty. Hub and encyclopedia: "Advanced." Handling: "ackies are classed as an intermediate reptile." Legal: "one of the most commonly recommended monitor lizards for a first-time keeper."
- Cohab. The hub pushes pairs and trios in three places. No deep dive mentions cohabitation at all, and the setup guide sizes for one animal.

## 3. The set as a whole

I could buy, house, feed and enrich one. Gaps: no bulb wattage or lamp distance for a 130-170F surface, no ambient humidity number in the setup guide (only the hub's 40-60%), no target weight or growth benchmark behind "weigh weekly," no breeder-vetting or health-check-at-purchase, no substrate maintenance or replacement schedule, no interim housing for a hatchling in a 5x2.5x4, no sexing or cohab practicalities.

Questions answered elsewhere without being told: the health guide's "temperatures too low to support proper digestion" is settled by the setup guide's 130-170F, which it never names; feeding's "an incorrect basking temperature" is the same; the cost guide's $800-1,500 line is itemized in the setup guide; handling's "substrate too shallow to hold a burrow" is quantified in the setup guide; feeding's "stress or boredom" is the whole enrichment guide.

## 4. Overlap and conflict across the deep dives

Read twice: obesity from food motivation (health, handling, feeding, enrichment); substrate depth (setup, enrichment, handling); "most keepers under-provide heat ... err toward the hotter end" appears twice inside the setup guide alone; the bearded dragon/skink contrast in cost, handling, health and setup.

Numbers that disagree: the animal's size. Encyclopedia: "18-28 inches (45-70 cm) including tail." Hub FAQ: "24 to 28 inches total length." Legal: "tops out around two feet." Feeding vs hub on schedule: "Subadults and adults (6+ months): Every other day" against "Adults eat 3 to 5 times per week." The enrichment guide says "Do not bowl-feed an animal that solves puzzle tubes in ten minutes" while feeding says offer "what your ackie can finish within a 5 to 10 minute window"; those are compatible but never reconciled. Enrichment also contains a broken sentence: "Other quantities are available and a proper depth needs several."

## 5. One link per page

- Hub: "The basking spot temperature is the most critical parameter: 120 to 150 degrees F at the surface directly under the basking light." Point to the enclosure setup guide, and adopt its range.
- Encyclopedia: "Ridge-tailed monitors nevertheless remain among the Australian reptiles most often found for sale on overseas websites." Point to the legal guide.
- Cost: "A large custom or PVC enclosure, deep burrowing substrate, a UVB fixture, multiple high-wattage basking bulbs, a thermostat, a Retes stack, hides, and monitoring equipment add up fast." Point to the enclosure setup guide, not the bearded dragon one.
- Handling: "Providing shallow substrate that can't hold a proper burrow, undermining a core part of this species' natural behavior." Point to the enclosure setup guide.
- Health: "Linked to inappropriate substrate ingestion or temperatures too low to support proper digestion." Point to the enclosure setup guide.
- Setup: "Building a large custom or PVC enclosure at this size is a genuine part of the investment." Point to the cost guide.
- Feeding: "Inconsistent calcium dusting is one of the more common feeding mistakes with this species, and it opens the door to metabolic bone disease even when UVB is otherwise adequate." Point to the health issues guide.
- Enrichment: "Do not skip the basking surface temperatures this species needs while chasing enrichment." Point to the enclosure setup guide.
- Legal: none needed.

## 6. Trust

Against: three different basking ranges across two pages that both claim it is the single most important number; three difficulty verdicts including "recommended for a first-time keeper" on a page the hub calls Advanced; the hub's unsupported cohab advocacy; the "$540 - $555" enclosure row, which reads like one scraped product price standing in for a category.

For: the handling guide's "Keep the arm out in front and stop the lizard at the elbow, because an ackie will jump from a high point like your head." Nobody writes that who has not had one on their arm. The feeding guide's refusal to invent a fasting number is a close second.

## 7. Set grade: B-

The deep dives are genuinely good and the hub in front of them is wrong on size, heat, substrate, supplements and difficulty. First two changes: make the hub derive every number from the deep dives, one source of truth each, and pick a single difficulty label; then add the missing buy-and-first-month page (choosing a breeder, health check at pickup, hatchling housing, cohab and sexing, substrate maintenance) and repoint the cost guide's setup sentence at the setup guide.

## Not covered anywhere

Checked against the Health and More list: thermostats and wattage are covered by the heating guide, UVB distance by the UVB guide, quarantine, shedding, stool and hydration, Salmonella and outage planning all by their own shared guides. Still unanswered:

- How to choose a breeder and what to check on the animal at pickup.
- Interim housing for a hatchling before it fills a 5x2.5x4 enclosure.
- Sexing, and how to actually run a pair or trio if the hub's advice is kept.
- Maintenance of 12 to 24 inches of substrate: spot cleaning, full replacement interval, bioactive cleanup crew.
- Target adult weight or growth curve to judge the weekly weigh-in against.
- An ambient humidity figure in the setup guide; only the hub gives one (40 to 60%).
---

# Garter Snake: Set Review

Opus reader agent, first pass, 2026-09-15, batch J. Raw and unedited.


## 1. Page by page

- **00 Hub.** Finished it. Actionable: shopping list, temps, cost tables. Weakened by a substrate and supplement line the deep dives contradict, and zero mention that this snake is banned in several states. **C+**
- **01 Encyclopedia.** Finished it. Actionable: almost nothing, but the lab-model and tetrodotoxin history is the only page that made me want to keep the animal. **B**
- **02 Cost.** Finished it. Actionable: real $49.99 listing, $200-400 setup, the honest "free snake still costs $200" math. **A-**
- **03 Handling.** Finished it. Actionable: wait 1-2 weeks, short sessions twice weekly, approach from the side. **A-**
- **04 Health.** Finished it. Actionable: symptom lists per condition and a clear go-to-the-vet-now list. **A**
- **05 Tank setup.** Finished it. Actionable: sizes, gradient, bin dimensions, sealed gaps. **A**
- **06 Feeding.** Finished it. Actionable: frequency table by diet type, prey sizing, red wiggler warning. **A**
- **07 Enrichment.** Finished it, fastest read. Actionable: priority order and scatter-feeding. Thin, and the correction is most of the page. **B**
- **08 Legal.** Finished it. Actionable: I now know to check my state before buying. **A**

## 2. Hub and encyclopedia

The encyclopedia earns its place: nothing else carries the range, conservation status, or the research history. The hub does not. It is a compressed rewrite of the tank, feeding, and health guides with no numbers the deep dives lack, and it drops the legal article entirely, which is the one thing a buyer needs before anything else.

Disagreements with the deep dives:
- Substrate. Hub checklist: "Aspen or cypress mulch substrate." Tank setup: "1 to 2 inches of a moisture-retentive substrate works well for most setups, coconut fiber, cypress mulch, or dry leaf litter." Aspen is not moisture-retentive and the tank guide never lists it. The cost guide repeats the hub's version.
- Warm end. Hub: "a surface temperature of 85 to 88 degrees F (basking air up to 90 degrees F)." Tank setup: "85 - 90°F (up to 95°F on some sources)... treat the lower end as a floor rather than a ceiling."
- Supplements. Hub: "Supplement with vitamin B1 and calcium a couple of times a month if fish or earthworms make up a significant part of the diet." Feeding and health both say: "add a vitamin B1 supplement if fish still make up more than roughly a quarter of what your snake eats." Different trigger, different schedule, and the deep dives never tie B1 to earthworms.
- Feeding schedule. Hub: "adults roughly once a week if eating mice, or twice a week if eating mostly earthworms." The feeding table adds the case the hub omits, fish-heavy at "every 5 - 7 days," which for a fish-eating specialist is the likeliest one.
- Heater price. Hub: "$35 | $60." Cost guide: "$35 - $70."

## 3. The set as a whole

Yes. I could legally check, buy, build, feed, handle, and spot illness. Gaps: no brumation or winter cooling anywhere; nothing on the live litter the hub advertises (up to 80 babies, no word on what you do with them); no thawing or prep procedure for frozen fish and worms; no wait-after-feeding rule before handling; cohabitation is raised three times and never actually decided.

Questions answered elsewhere without being pointed there:
- Health says "for any newly acquired garter snake" without sending me to the shared quarantine guide.
- Cost says "a wild-caught animal skips the purchase price" while the legal guide is where I learn that in New York it is not lawful to keep at all.
- Tank setup says the thermostat "is the part with zero exceptions" and never links the shared thermostat guide that says where the probe goes.
- Feeding's prey-sizing rule uses body weight; the shared body-condition guide is what tells me to own a scale.

## 4. Overlap and conflict across the deep dives

Read three times: thiaminase, tilapia/salmon/silversides, and the same neurological symptom list, nearly verbatim in cost, health, and feeding. Read twice: the swimmable water container and the weekly water change (tank setup and health, tank setup and enrichment).

One soft conflict. Enrichment: "Many garter snake populations are semi-aquatic and hunt in water." Tank setup: "Garter snakes are semi-aquatic, proficient swimmers in the wild." One says many populations, the other says the species. Otherwise the deep-dive numbers agree.

## 5. One link per page

- **Hub.** "never feed live prey - it isn't necessary and can injure the snake." Point to the feeding guide, which is where the red wigglers and live-fish parasite warnings live.
- **Encyclopedia.** "many individuals never accept a plain mouse." Point to the feeding guide.
- **Cost.** "a fecal exam for parasites is a genuinely good idea for any wild-caught snake." Point to the health guide.
- **Handling.** "Give a newly acquired garter snake one to two weeks to settle into its enclosure and start eating reliably before attempting to handle it." Point to the shared quarantine guide, since two weeks is not a quarantine.
- **Health.** "A digital thermometer and hygrometer is the single best tool for catching this early." Point to the tank setup guide.
- **Tank setup.** "a water conditioner to remove chlorine and chloramine is worth using given how much time this species spends in the water." Point to the health guide, where the same water fouling causes mouth rot.
- **Feeding.** "Size prey at no more than about 1.5 times the width of the snake at its widest point, or roughly up to 10% of body weight per meal." Point to the shared sexing, growth and body condition guide.
- **Enrichment.** "Do not feed a group in the same space." Point to the tank setup guide, the only page that sizes an enclosure for more than one snake.
- **Legal.** Needs none. It links the hub and the map, and legality does not depend on husbandry.

## 6. Trust

Doubts: the hub disagreeing with its own deep dives on substrate and supplements suggests the card data and the articles were written apart and never reconciled, and the hub is the page I landed on first. The enrichment guide says "we made it ourselves before checking" under a title that says "I," and no author is named anywhere.

The sentence that convinced me a keeper wrote this: "Do not feed a group in the same space, since one snake taking another's prey is how garter snakes injure each other." Nobody summarizing care sheets knows that the injury comes from the grab, not the fight.

## 7. Set grade: A-

The deep dives are specific, sourced to statute and study, and unusually willing to say what is not known; the hub drags it down by contradicting them.

First two changes: rebuild the hub from the deep-dive numbers, starting with substrate, the B1 trigger, and the warm-end range, and add the legal article to the hub, since a New York buyer currently reaches five pages of husbandry before anything mentions it.

## Not covered anywhere

- Brumation or a winter cooling cycle, whether to do it and how.
- What to do with a live litter, and any neonate care at all, despite the hub advertising up to 80 babies.
- Thawing and prep for frozen fish and worms, and whether to feed in or out of the water.
- How long to wait after a meal before handling.
- Cohabitation as a real decision, raised in tank setup and enrichment, settled in neither.

---

# Oscar: Set Review

Opus reader agent, first pass, 2026-09-15, batch J. Raw and unedited.


**1. Page by page**

- 00 hub: skimmed it, would not read twice. Act on: the checklist, temp 74-81F, weekly 25-30% changes. Grade C, because its headline tank number contradicts every deep dive behind it.
- 01 encyclopedia: finished it, nothing to act on, but the Agassiz misfiling and the Dade County stocking are real content, not padding. Grade B.
- 02 cost: finished it. Act on: buy the 75g from day one, budget $35-40/month. Grade B minus, numbers wobble.
- 03 handling: finished it, thin. Act on: tankmate rule, no small fish. Repeats itself across three sections. Grade B minus.
- 04 health: finished it. Act on: the HITH symptom list, nitrate control, metronidazole as the named drug. Grade A minus.
- 05 tank setup: finished it, the most useful page here. Act on: 75g, 4-5x turnover, sand, secure lid. Grade A.
- 06 feeding: finished it. Act on: 80/20 split, 35-45% protein, per-size feeding schedule, the thiaminase reason. Grade A.
- 07 enrichment: finished it and enjoyed it. Act on: the numbered priority list. Grade A minus.

**2. Hub and encyclopedia**

The encyclopedia earns its place: origin, wild diet, invasive history, none of it in the deep dives. The hub mostly restates them in shorter form, and where it differs it is wrong.

Real conflict, tank size. Hub: "A juvenile oscar needs at least 55 gallons, growing to 75 gallons or more as an adult." Setup: "75 gallons is the widely recommended minimum for a single adult... starting small and upgrading later is both more expensive overall and more disruptive for the fish." Cost, on the same question: "What's the biggest cost mistake new oscar owners make? Starting with a small tank instead of the adult-size setup." The hub's checklist tells me to make the exact mistake the cost guide calls the biggest one.

Filter price. Hub: "Heavy-duty canister filter | $100 | $200." Cost: "Canister filter | $325 - $340."

Running cost. Hub annual: food $80-$140 plus conditioner and test kit $25-$40, roughly $9-$15 a month. Cost: "Ongoing Costs: Roughly $35 to $40 a Month."

Feeding schedule. Hub: "Feed once or twice daily." Feeding: "Babies under 3 to 4 inches eat 3 times daily. Juveniles around 3 to 8 inches eat twice daily."

Routine. Hub: "Many oscars respond well to consistent feeding routines." Enrichment: "A varied feeding schedule, never a fixed one."

Lifespan. Hub FAQ: "can live 10 to 20 years." Cost: "10 to 15 years typically, with well-kept individuals occasionally reaching close to 20."

**3. The set as a whole**

Yes, I could buy, set up, feed and keep one, provided I ignore the hub and follow the setup, feeding and health pages. Tank, filter turnover, temp, substrate, diet by size class, water change cadence and the disease to watch are all here.

Still missing: tank stand and floor loading for a 75-125 gallon build, sexing and what to do if a pair forms, a single place listing target ammonia/nitrite/nitrate (nitrate under 40 ppm appears once, inside a fun fact box on the feeding page), metronidazole dosing or where to buy it, plants and lighting given that oscars uproot everything, and what to do when tankmates start fighting.

Questions raised on one page and answered on another with no signpost: the setup page says weekly changes prevent hole-in-the-head but never points at the health page that describes it. The health page says nutritional gaps cause it and never points at the feeding page. The handling page's "play dead" quirk is exactly what the health page's symptom list would otherwise have me panicking over, neither links the other. The enrichment page says "they do bite" and "take real care moving a large cichlid," and the transport plan sits unlinked in the shared sidebar.

**4. Overlap and conflict across the deep dives**

Read twice or more: the 2-inch-to-12-inch line (cost and setup, near verbatim), no feeder goldfish (setup, feeding, enrichment), 75 gallons (cost, setup, enrichment), 25-30% weekly changes (setup, health, feeding), "anything that fits in an oscar's mouth" (handling and enrichment).

Conflicts. Cause of HITH, health: "Poor water quality, elevated nitrates especially, is the common thread running through nearly every condition on this list." Feeding: "Overfeeding and uneaten food fouling the water are the primary driver behind Hole-in-the-Head disease (HITH/HLLE) in most sources." The feeding page also names "vitamin C, D, and essential fatty acids"; the health page never mentions vitamins at all.

Feeding window, hub: "only what's consumed within a couple of minutes." Feeding: "Feed only what's eaten in 2 to 3 minutes."

**5. One link per page**

- Hub: "A juvenile oscar needs at least 55 gallons, growing to 75 gallons or more as an adult" should link to the Tank Setup guide, and be rewritten to agree with it.
- Encyclopedia: "Oscars are naturally curious and active diggers, regularly rearranging substrate and decor in their environment" should link to the Enrichment guide.
- Cost: "total costs easily exceed $1,000 once you factor in premium filtration and the 75-gallon-plus tank this species will eventually require" should link to Tank Setup.
- Handling: "And since so much of the appeal here is behavioral, watching for the health issues that can dampen that personality matters too" should link to Health Issues. It gestures at it and stops.
- Health: "Nutritional gaps are part of the cause, which is why a quality staple cichlid pellet as a diet foundation is treated as genuine prevention, not just feeding" should link to the Feeding guide.
- Tank setup: "Weekly water changes of 25 to 30% are mandatory, not optional, this connects directly to preventing hole-in-the-head disease" should link to Health Issues.
- Feeding: "some keepers soak food in vitamin supplements when actively addressing Hole-in-the-Head disease" should link to Health Issues.
- Enrichment: "Do not let water quality drift, given the link to hole-in-the-head" should link to Health Issues. This page links three other species and none of its own siblings.

**6. Trust**

Doubts: the hub disagreeing with its own deep dives on the one number that decides the whole purchase. The cost page leaning twice on "an aquarium retailer" for lifespan, a seller quoted as an authority. Precise-sounding single figures with no range, "$560 as a low-end build" and a "$235" vet exam. The enrichment page arguing from a neon tetra study that found nothing for the one cichlid in it. And the shared pH/GH/KH guide is pitched at "a coldwater tank" and goldfish keepers, which is the wrong animal for anyone arriving from an oscar page.

The sentence that convinced me a keeper wrote this: "Water quality is where oscar tanks fail, and it fails slowly enough that the fish looks fine until it does not."

**7. Set grade: B plus.** The deep dives are specific, honest about disputed causes, and would get me to a healthy fish; the hub is the weak link and the pages do not point at each other where they obviously should.

First two changes:
1. Rewrite the hub to match the deep dives: 75 gallons from day one, not 55 for a juvenile, and fix the filter price and monthly cost so the hub and cost page agree.
2. Add the in-body links between setup, health and feeding where each already names the other's topic, and reconcile the HITH cause sentence to one story across both pages.

**Not covered anywhere**
- Tank stand and floor loading for a 75-125 gallon build. Nothing in the shared list touches weight or stands.
- Sexing oscars, pair formation, and what to do if a pair spawns. The cost page prices a breeding pair and no page goes further.
- A single target water parameter set, ammonia, nitrite, nitrate. The cycling guide covers dosing during a cycle; no page gives the steady-state numbers for an established oscar tank, and the 40 ppm nitrate figure appears only inside a feeding fun fact box.
- Metronidazole dosing, duration, and where to obtain it. The quarantine guide covers salt, carbon and aeration, not this drug.
- Plants and lighting for a tank whose occupant uproots everything.
- Managing aggression once tankmates are already in and fighting, and the rehoming option for an adult.

---

# Amano Shrimp: Set Review

Opus reader agent, first pass, 2026-09-15, batch J. Raw and unedited.


## 1. Page by page

**00 hub.** Finished it, and it is the page I trust least: I can act on the lid, the drip acclimation, the copper warning, the checklist. Grade C+.
**01 encyclopedia.** Finished it for the Stimpson/De Man history, which is the most interesting writing in the set. Nothing to act on. Grade B.
**02 cost.** Finished it. Actionable: $5 to $12 a shrimp, cheaper in a 10-pack, budget a test kit. Grade A-.
**03 handling.** Finished it. Actionable: soft net, one to two hour drip at one to two drops per second, three to four hours if the gap is wide, two to four weeks quarantine. Grade A-.
**04 health.** Finished it, best page here. Actionable: test water first, keep GH and KH from swinging at water changes, check every label against 0.15 to 0.20 mg/L copper. Grade A.
**05 tank setup.** Finished it. Actionable: 4 to 15 dGH targeting 6 to 8, 2 to 8 dKH, sponge as intake guard rather than flow reducer. Grade A.
**06 feeding.** Finished it. Actionable: light feeding every couple of days, remove leftovers after a few hours, leave molts in. Grade A-.
**07 enrichment.** Finished it, mostly repeat. Actionable: drop food in several spots. Grade B-.

## 2. Hub and encyclopedia

The encyclopedia earns its place: taxonomy history and origin appear nowhere else. The hub does not. It compresses the six deep dives into worse versions of themselves and contradicts three of them.

Price. Hub: "often $3 to $6 versus a dollar or two". Cost guide: "$6.39 to $7.99 each individually" and "Roughly $5 to $12 each". The hub is under the sourced floor.

Tank price. Hub table: "10+ gallon tank with secure lid | $45 | $90". Cost guide table: "10 gallon tank | $18 - $30".

pH. Hub: "Keep pH between 6 and 8 with moderately hard water". Tank setup: "Aim for pH 6.0 to 7.5."

Temperature. Hub: "65 to 82 degrees F". Tank setup: "64 to 82°F covers the tolerated range".

## 3. The set as a whole

Yes, I could set this up, buy, feed, and keep them, except for stocking number and tankmates. Still missing: how many shrimp for my tank (see 4), what fish will eat them, how to find out whether my tap water carries copper, a water change volume and interval, and the cost of the quarantine tank the handling and health guides both tell me to own.

Questions answered on another page without being told:
- Cost: "tracking general hardness matters here specifically" gives no number. The dGH range is in tank setup.
- Health: "a diet that hasn't supplied enough calcium" never says where calcium comes from. Feeding's shed-shell section answers it.
- Health: "stable mineral content" and copper warnings never point to a filter or GH page.
- Tank setup: "it's time to add sinking wafers or blanched vegetables" with no frequency. Feeding has it.
- Handling: "a known trigger for failed, often fatal molts" with no explanation. Health has it.

## 4. Overlap and conflict across the deep dives

Read three or four times: the amphidromous larvae explanation (cost, handling, health, enrichment, plus hub and encyclopedia), the copper warning, the lid, the sponge filter, and "algae is a starting supply, not renewable" (tank setup and feeding, nearly verbatim).

The one real conflict is stocking, inside a single paragraph: "Fishkeeping World suggests roughly one shrimp per 2 gallons" against "Aquarium Co-Op's upper guidance runs closer to two shrimp per gallon". That is 5 shrimp or 20 in a 10-gallon, and "often sits toward that denser end" is not a decision. The hub's "Group of 5-6+ shrimp" picks the low end without saying so.

Softer: enrichment says "Change small amounts of water often" while no page gives a percentage, and health blames "a rushed water change" for die-offs.

## 5. One link per page

- **Hub:** "Drip acclimate new arrivals over an hour or two rather than releasing them straight from the bag." To the handling guide.
- **Encyclopedia:** none needed.
- **Cost:** "tracking general hardness matters here specifically, since this species needs real dissolved minerals to molt successfully, not just clean water." To tank setup.
- **Handling:** "that kind of sudden internal stress is a known trigger for failed, often fatal molts." To health.
- **Health:** "a diet that hasn't supplied enough calcium to build the new shell properly." To feeding.
- **Tank setup:** "when that reserve runs low it's time to add sinking wafers or blanched vegetables." To feeding.
- **Feeding:** "Avoid any food, medication, or fertilizer that contains copper in any form." To health.
- **Enrichment:** "Copper is lethal to shrimp and arrives in fish medications, some fertilizers and some tap water." To health.

## 6. Trust

Doubts: the hub's $3 to $6 and $45 to $90 tank contradict sourced numbers two clicks away, which reads like someone wrote the hub from memory. The encyclopedia calls it "the largest freshwater shrimp species commonly kept in aquariums", which bamboo and vampire shrimp beat outright. Enrichment cites Birch with no link and outsources it to another species' page. Feeding's FAQ claims diatoms as a strength the body never mentions. "Sinking wafers are the practical answer, and other sizes are available" is a sentence with a product removed from it.

The sentence that convinced me a keeper wrote this: "An amano that grabs food and runs off with it is a hungry amano, and that behavior is so characteristic that it gets treated as charming rather than as information."

## 7. Set grade: B+

The deep dives are genuinely good and honestly sourced; the hub that new readers land on first undercuts them on price, tank cost, and pH.

First two changes: rebuild the hub's numbers from the deep dives so nothing on it contradicts them, and resolve the stocking spread into one recommendation with a number.

## Not covered anywhere

Checked against the Health and More list. Filtration plausibly covers cycling and water change maintenance; the pH, GH, KH guide covers raising soft tap water. These remain:

- Which fish and tankmates will eat or harass amano shrimp. Three Shrimp compares shrimp to shrimp only.
- How to find out whether your tap water carries copper, which three pages tell you to verify.
- The cost of the quarantine tank two pages require; the cost guide's $60 to $150 does not include it.
- How many shrimp to buy for a given tank size, left at 5 or 20 in a 10-gallon.
- What a female carrying eggs actually looks like, so a keeper can tell it from the molt and illness signs the health page describes.

## Tiger Salamander (2026-09-15, batch K)

Raw reader output, one Opus agent, 9-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, enrichment, legal, vs axolotl).

**1. Page by page**

- 00 hub. Finished it. Actionable: tank size, temp band, feeding schedule, calcium cadence, checklist, sexing. Grade B-.
- 01 encyclopedia. Finished it. Actionable: nothing for husbandry, but it told me what animal I'm buying and why bait-shop stock is risky. Grade A-.
- 02 cost. Finished it. Actionable: price to pay, upfront total, vet ranges. Grade C+ (numbers fight the hub; opens with a 2025 federal rule and never returns to it).
- 03 handling. Finished it, it's short. Actionable: don't handle, use wet nitrile gloves if you must. Grade C.
- 04 health. Finished it. Actionable: the four failure modes and what causes each. Grade B- (not one number anywhere).
- 05 tank setup. Finished it, twice. Actionable: dimensions, substrate list with a real avoid-list, lighting, humidity. Grade B+.
- 06 enrichment. Finished it. Actionable: the priority order list is the best thing in the set. Grade A-.
- 07 legal. Finished it, read the table twice. Actionable: whether I can legally own one where I live. Grade A.
- 08 vs axolotl. Finished it. Actionable: confirmed I want the terrestrial animal. Grade B.

**2. Hub and encyclopedia**

The encyclopedia earns its place cleanly. Nothing else tells me about the bait trade, the California hybridization emergency, or neoteny in wild populations, and it's the only page that reads like it isn't selling me a setup.

The hub half-earns it. It is the only place with a feeding schedule, a supplement cadence, adult size, gut loading, and sexing. But it is the outlier in most conflicts:

- Substrate. Hub: "deep substrate - 4 to 6 inches minimum". Setup: "at least 3 to 4 inches".
- Temperature. Hub: "60 to 72 degrees F is the ideal range. They struggle noticeably above 75". Setup: "60 to 75°F, and genuinely never above about 78°F".
- Humidity. Hub: "the humidity maintained at 70 to 80%". Setup: "70 to 75%".
- Water, the one that matters. Hub: "never distilled or reverse-osmosis water, which carries none of the electrolytes an amphibian needs". Setup: "Treat all water with a conditioner before use, or use spring or distilled water instead." One of these is wrong and I can't tell which.
- Tank price. Hub: "20-gallon long aquarium | $80 | $160". Cost: "Tank, 20-gallon long | $35 - $60". Substrate likewise $20-40 against $10-16.
- Food budget. Hub annual: "$70 | $130". Cost: "Roughly $15 to $30 a Month", so $180 to $360. More than double.
- Lifespan. Hub: "10 to 20 years in captivity". Cost: "12 to 15 years is typical".

**3. The set as a whole**

I could buy one, build the adult enclosure, feed it, and recognize the things that kill it. Legality is settled better than anywhere I've read. Still missing: how to actually keep a larva and run the metamorphosis transition (three pages tell me it "looks essentially identical to an axolotl's" and hand me off to an axolotl page, but nobody tells me when to lower the water, how much land to give, or when to stop); whether a captive animal needs a winter cooling period, when the encyclopedia says they overwinter in frozen soil; any cleaning or substrate-replacement cadence; how to source captive-bred when health says wild-caught stock is common; what to do the day the room hits 84.

Unsignposted answers: handling asks why my salamander is never visible and the enrichment guide is the page that answers it, with no link. Health says prevention is "entirely about substrate choice" and never points at the setup page that has the avoid-list. Cost names the endangered California tiger salamander with no link to the legal guide, which is where I learn California bans the whole genus.

**4. Overlap and conflict across deep dives**

Read twice or more: the axolotl larval resemblance (four pages), obesity and no self-regulation (three), cool temperatures and no heat lamp (four), the four-species comparison sentence pasted almost verbatim into four pages.

Conflicts:

- Handling. Handling: "Direct handling should genuinely be avoided... Wear wet, powder-free nitrile gloves." Hub: "Handle with clean, slightly damp, chemical-free hands only... Keep sessions short (under 10 minutes)." vs-axolotl: "Brief handling okay with damp hands."
- Cohabitation. Setup: "some very large enclosures can occasionally support a small group." Enrichment: "Do not house two together."
- Feeding placement. Enrichment: "Release worms and insects into the leaf litter so finding them is the activity," then four lines later, "Keep prey off loose substrate where you can." Health wants feeding "away from any substrate that could be ingested"; the hub wants tongs.
- Pinky mice. Hub: "Large adults can be offered occasional pinky mice as a nutritional supplement." Health lists them under "limit fatty feeders."

**5. One link per page**

- Hub: "Quarantine any new salamander for 30 to 60 days in a separate enclosure" to the amphibian quarantine, acclimation and water hardness guide.
- Encyclopedia: "Larvae are sold across the United States as fishing bait under the name waterdogs" to the legal guide.
- Cost: "the California tiger salamander is a protected, endangered species and isn't legally available as a pet" to the legal guide.
- Handling: "it's exactly why deep, burrowable substrate matters so much" to the enrichment guide.
- Health: "Prevention is entirely about substrate choice and feeding away from any substrate that could be ingested accidentally." to the setup guide.
- Setup: "Provide at least 3 to 4 inches of moisture-retentive, burrow-supporting material" to the enrichment guide.
- Enrichment: "Obesity is the standard captive problem in long-kept tiger salamanders." to the health guide.
- Legal: "If you're buying a captive-bred tiger salamander and keeping it as a pet within the continental US" to the cost guide.
- vs-axolotl: "needing a terrestrial setup with soil, cork bark, and a shallow soaking dish rather than standing water" to the setup guide.

Pattern worth naming: almost every in-body link leaves for an axolotl page or the four-species overview. Not one deep dive links to another tiger salamander keeping page.

**6. Trust**

Doubts: the distilled-water contradiction, because both sides sound confident. The handling split, because a hub that says ten minutes of bare-hand contact and an article that says gloves-only cannot both be house policy. The tank price gap. The health page having no numbers at all when the hub has plenty. And the cost page promising a 2025 federal rule in line two and never delivering it.

The sentence that convinced me a keeper wrote this: "Shallow substrate does not make the animal more visible in any meaningful sense, it removes the behavior and leaves a salamander sitting on a floor with nowhere to go." Runner-up, the appetite-loss fun fact in the health guide. Also, the legal table's 52 jurisdictions add up exactly, which nobody fakes.

**7. Set grade: B-**

Strong at the edges, legality and enrichment especially, but the core husbandry numbers disagree across pages and the reader is left arbitrating.

First two changes:

1. One source of truth for temperature, humidity, substrate depth, water treatment, handling policy, and the cost tables, then propagate it. Fix the distilled-water contradiction first.
2. Write the larval-to-adult transition page, and cross-link the deep dives to each other and back to the hub instead of sending every link to axolotl content.

**Not covered anywhere**

- Larval husbandry and the metamorphosis transition for this species, with its own numbers rather than an axolotl handoff.
- Whether a captive tiger salamander needs a winter cooling or brumation period.
- Enclosure cleaning cadence and how often deep substrate gets replaced.
- How to source a captive-bred animal and spot wild-caught stock.
- What to do in a terrestrial heat emergency; the shared aquarium cooling guide is written for water, not soil.
- What a normal shed looks like, so a keeper can tell it from the "abnormal shedding" the health page calls a red flag.
- What kind of vet to call. No page in the set names an exotic or amphibian vet as the one to find, though the cost guide prices an "exotic exam".
- A prey-size rule. The old hub's "no larger than the space between the salamander's eyes" was retired rather than carried into a deep dive, since no opened source states it.

## Parrotlet (2026-09-15, batch K)

Raw reader output, one Opus agent, 8-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, feeding, enrichment).

**1. Page by page**

- 00 Hub. Finished it; can act on cage size, the shopping checklist, and the toxic-food list, but the numbers are the softest on the site. B-
- 01 Encyclopedia. Finished it, read in 90 seconds, nothing to act on except the 4.3-5.5 in size and the 1992 import law context. B
- 02 Cost. Finished it; can budget a real number ($100-900 bird, $160-300 setup, $20-40/month) and it tells me sources disagree on lifespan. A-
- 03 Handling. Finished it; 5-10 minute sessions, millet reward, warning nip, no punishment: all actionable. A
- 04 Health. Finished it; I know my four emergency signs and the egg-binding prevention stack. A-
- 05 Setup. Finished it; bar spacing, powder-coat/stainless, 65-80F, UV, paper liner, pair introduction protocol. Most actionable page in the set. A-
- 06 Feeding. Finished it; free-choice pellets, seed once a day, no grit, the safe/toxic lists. A
- 07 Enrichment. Finished it fastest; the priority order is a to-do list. A

**2. Hub and encyclopedia**

The encyclopedia earns its place: range, wild flock size, the 1930 breeding population and the Wild Bird Conservation Act appear nowhere else. The hub does not. Every hub section is a compressed version of a deep dive, and it compresses badly.

Conflicts, hub versus deep dive:

- Bar spacing. Hub: "Bar spacing of 3/8 to 1/2 inch keeps a parrotlet from squeezing through." Setup: "Lafeber... recommends going tighter still, around 1/4 inch. That's meaningfully narrower than the 3/8 to 5/8 inch range that's fine for a lovebird." The hub is recommending the range the setup guide calls a lovebird range.
- Cage cost. Hub: "$100 | $280." Cost: "$120 - $220."
- Vet. Hub annual table: "$60 | $100." Cost table: "$60 - $150."
- Toys upfront. Hub: "$20 | $40." Cost: "$10 - $22."
- Lifespan. Hub FAQ: "Commonly 15 to 20 years in captivity with good care." Cost: "PetMD's own figure is comparatively conservative, 8 to 12 years on average." The hub states as settled what another page calls contested.

**3. The set as a whole**

Yes, I could do this. I could buy the bird, size and furnish the cage, feed it, run a socialization and training routine, and recognize an emergency. Still missing: what a parrotlet sounds like at volume, how to tell a hen from a cock, and a cleaning routine with a frequency on it.

Questions raised on one page and answered on another, unsignposted:

- Cost: "egg-binding in a female" is priced but never explained. The mechanism is in the health guide.
- Health: "a proper pelleted diet" as egg-binding prevention. The how is the feeding guide.
- Health: "A genuinely roomy flight cage and a rotating supply of chew and forage toys." The enrichment guide is the actual answer.
- Setup: "the socialization that comes with it is what keeps a parrotlet friendly rather than nippy." The routine is in the handling guide.
- Handling: molting-season nipping. The feeding guide explains molt protein demand.

**4. Overlap and conflict across the deep dives**

Read four and five times: one bird versus two (cost, handling, setup, enrichment), pellets over seed, boredom to feather plucking, the big-personality-small-body line, and the wild 40-50 flock. The pair discussion is genuinely four pages long.

Real disagreements:

- Bowls. Feeding: "refresh the base pellet bowl in the morning... clamp-on dishes that stay put on the cage bars make this easier." Enrichment: "Do not use a food bowl as the default," priority 1 being "All food delivered through foraging." Nobody reconciles these.
- Seed. Feeding: Lafeber "limiting seeds and nuts to about once a day." Hub: "Seed mix can be offered in small amounts, ideally through a foraging toy." Not contradictory, but the hub gives no frequency.
- Sessions. Handling: "5 to 10 minutes, two or three times a day." Enrichment: "Ten minutes twice a day."
- Pairing safety. Handling: "Lafeber is more cautious, recommending parrotlets be kept singly rather than paired, citing safety." Enrichment: "A bonded pair covers the social requirement... which is a trade and not a downside." The caution vanishes.
- Out-of-cage time has a number on the hub only ("at least an hour"); the enrichment priority list omits it entirely.

**5. The one link each page needs**

- Hub: "Bar spacing of 3/8 to 1/2 inch keeps a parrotlet from squeezing through or getting a head or foot caught" to the cage setup guide.
- Encyclopedia: "an under-socialized bird can turn sharp and nippy well out of proportion to its size" to the handling guide.
- Cost: "egg-binding in a female or an injury from this bird's fearless, accident-prone streak" to the health issues guide.
- Handling: "pairing can work, but only with a slow, supervised introduction, never two strangers dropped straight into one cage" to the cage setup guide, which has the actual steps.
- Health: "A genuinely roomy flight cage and a rotating supply of chew and forage toys address the boredom side directly" to the enrichment guide.
- Setup: "Indoor birds benefit from supplemental UV exposure to properly synthesize vitamin D3 for calcium absorption" to the health issues guide.
- Feeding: "A cuttlebone or mineral block should be available at all times for calcium, this matters even more for females given the egg-laying risks" to the health issues guide.
- Enrichment: "Under-slept small parrots get nippier, which is the behavior owners then attribute to temperament" to the handling guide.

**6. Trust**

Doubts: the hub disagreeing with three deep dives on numbers; the feeding guide's grit fun-fact box saying the same thing as the paragraph directly under it; and a link that misdescribes itself, "our Budgie cage setup guide covers the same pellet-over-seed shift," which is a cage page sold as a diet page. The health guide carries one bare "budgie" link and no route to anything else parrotlet.

What convinced me a keeper wrote this: "A parrotlet usually gives a gentle warning nip before an actual bite, a small piece of communication most new owners miss entirely." Nobody compiling from sources notices that. The enrichment guide's flat "Nothing on parrotlets" is the runner-up.

**7. Set grade: B+**

Six strong deep dives dragged down by a hub that contradicts them and by pages that never point at each other.

First two changes: make the hub derive its numbers from the deep dives (bar spacing, cage price, vet cost, lifespan range) instead of carrying its own; and settle the bowl-versus-foraging question in one place, with the hub's "at least an hour" out-of-cage figure added to the enrichment priority list.

**Not covered anywhere**

- Sexing a parrotlet, which the shared guide explicitly punts on ("Most parrots can't be sexed by looking at them"), yet the health and feeding pages both hinge on knowing you have a hen.
- What a parrotlet actually sounds like and whether it works in an apartment. The hub says "smaller and quieter" and stops.
- A cage cleaning schedule. "Changed regularly" is the only instruction in the set.
- The first week home. Handling says start "the day the bird comes home"; nothing says whether that is right for a bird that just moved.
- The cost and choice of the UV fixture the setup guide recommends. It is in no budget table, and the shared photoperiod guide covers schedule, not hardware.
- A daily out-of-cage duration. The old hub's "at least an hour" was retired rather than carried into a deep dive, since no deep dive or opened source states it.

## Koi (2026-09-15, batch K)

Raw reader output, one Opus agent, 9-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, feeding, enrichment, vs goldfish).

**1. Page by page**

- 00 Care guide hub. Finished it; I can act on the checklist and the pond spec, but it disagrees with three deep dives and leads with the Hanako myth as its headline fun fact. C
- 01 Encyclopedia. Finished it; nothing to act on, but the Niigata-to-1914-exposition history is the only page I'd read twice for pleasure. B
- 02 Cost guide. Finished it; I can build a budget from it, except the stated setup range doesn't match its own table. B+
- 03 Handling. Finished it; wet hands, net into a floating bowl, don't lift. Short and usable. B
- 04 Health issues. Finished it; the emergency vs manageable-at-home split is the most decision-ready thing in the set. A-
- 05 Pond setup. Finished it; 250 gal per adult, 3 to 5 ft, oversized filtration. These are the numbers I'd hand a contractor. A-
- 06 Feeding. Finished it; a temperature-banded schedule I can tape to the pond shed, and it flags its own weak sources. A
- 07 Enrichment. Finished it; really a pond-design page, and the best-written one. "Stock for the adults" is the line that changed my plan. A-
- 08 Koi vs goldfish. Finished it; useful decision frame, but its size and species figures fight the rest of the set. C

**2. Hub and encyclopedia**

The encyclopedia earns its place: the history is on no other page. The hub mostly restates the deep dives in shorter form, which is fine as a landing page, but it contradicts them:

- Quarantine. Hub: "always quarantine any new koi for 2 to 4 weeks". Health guide: "strict quarantine, often 4 to 6 weeks or longer".
- Lifespan. Hub FAQ: "25 to 35 years is typical". Cost guide and vs-goldfish: "25 to 50 years with good care".
- Peas. Hub: "Occasional treats like shelled peas, watermelon, and orange slices are enjoyed in moderation." Feeding guide: "Peas are a genuine point of disagreement ... hard or dried peas are a real choking and blockage risk".
- Volume. Hub: "at least 1,000 gallons for even a small group". Enrichment: "Adult koi need thousands of gallons rather than hundreds".
- Hanako. Hub fun fact runs the 226-year claim up front; the cost guide says "Treat it as folklore rather than fact."

The hub's setup table also totals $2,450 to $9,200 while the cost guide's prose says "commonly runs $5,100 to $15,875". Same table, incompatible headline.

**3. The set as a whole**

I could dig, plumb, stock, feed and winterize a pond from this. What's missing: how to pick a healthy fish at purchase, how to acclimate one on arrival, and any pond water-change or sludge-removal routine. The word "quarantine" appears on five pages and no koi page tells me how big the quarantine system is or how to run it.

Questions raised on one page and answered on another, unsignposted:

- Setup lists "A quarantine system: essential for any new arrival" with no spec; the health guide's KHV section is why, and the shared Hospital Tank guide is how.
- Health guide ends on "beneficial bacteria at spring startup, paired with solid filtration"; the setup guide's filtration section and the shared cycling guide both answer that, neither is named.
- Feeding says to test water immediately when multiple fish go off food; the health guide's water-quality-crisis protocol is the answer.
- Enrichment says "Do not feed in cold water" with no pointer to the feeding guide that gives the actual temperature bands.
- Handling lists skipping quarantine as a top mistake and never links the health guide.

**4. Overlap and conflict across the deep dives**

Read twice: predator netting, oversized filtration, aeration, quarantine, and the 250 gal per fish figure appear in three or four pages each. That repetition is mostly tolerable.

Real conflicts:

- Adult size. Vs-goldfish: "A typical adult koi reaches 14 to 18 inches". Handling: "koi grow substantially larger, commonly 24 to 36 inches or more as adults". Enrichment: "around two feet". Hub and encyclopedia: "12-36 inches". Four numbers, and the 250 gal per fish figure depends on which is true.
- Species. Encyclopedia: "Scientific: Cyprinus rubrofuscus ... ornamental varieties of the Amur carp". Vs-goldfish: "Koi | Cyprinus carpio (common carp)" and "koi descend from the common carp". Same site, two ancestries.
- KHV mortality. Health: "outbreaks can carry mortality rates of 80 to 100%". Feeding: "mortality is commonly cited at 70 to 100%".
- Stop-feeding threshold. Feeding: "Below about 48 to 50°F". Cost: "dropping sharply once water falls below about 50 to 55°F".
- Depth. Setup: "Minimum 3 feet, ideally 3 to 5 feet or more." Enrichment: "at least three to four feet in part of the pond", which is a weaker rule stated as the floor.

**5. One link per page**

- Hub and encyclopedia: none needed, they already link everything.
- Cost: "Itemized, that breaks down into flexible EPDM liner (preferred for durability and fish safety) plus underlayment, excavation and grading, a pump sized to circulate the full volume every 1 to 2 hours" goes to Koi Pond Setup.
- Handling: "Introducing new fish without a proper quarantine period" goes to Common Koi Health Issues.
- Health: "A healthy dose of beneficial bacteria at spring startup, paired with solid filtration and UV clarification, prevents far more of this list than any treatment ever will" goes to Koi Pond Setup.
- Setup: "A quarantine system: essential for any new arrival before it joins the main pond" goes to Fish Quarantine and Treatment: The Hospital Tank Guide.
- Feeding: "If multiple fish stop eating at once, that's a signal to test water immediately rather than assume a benign cause" goes to Common Koi Health Issues.
- Enrichment: "In cold water, feeding drops away entirely, and pushing food into fish that cannot digest it is a common winter mistake" goes to Koi Feeding.
- Vs goldfish: "That size gap is the reason koi essentially require an outdoor pond setup, roughly 250 gallons per fish" goes to Koi Pond Setup.

**6. Trust**

Doubts: the species and adult-size conflicts, the hub's cost table not matching the cost guide's own range, and the hub repeating Hanako as a fun fact while the cost guide debunks it.

What convinced me a keeper wrote this: "Do not break ice by hitting it, which sends a shockwave through the water." Nobody summarizing sources invents that. The feeding FAQ's "Koi have no true stomach, food passes straight into the intestine" is a close second.

**7. Set grade: B**

Genuinely usable, well-sourced where it matters, and undermined by numbers that don't agree across pages. First two fixes: pick one adult size and one scientific name and propagate them everywhere; then rewrite the hub so it matches the deep dives on quarantine length, lifespan, peas and cost, and drop Hanako from the headline fun fact.

**Not covered anywhere**

- How to choose a healthy koi at purchase, and where to buy from.
- Acclimating a new fish on arrival: bag float, drip, how long before it goes into quarantine.
- Pond water-change schedule, percentage, and sludge or bottom-drain maintenance. The shared filtration guide covers aquarium filter media, not pond muck.
- Pond-specific summer heat management. The shared cooling guide is aquarium-only, with no answer for a 1,000 gallon outdoor pond.
- Spawning: what to do when it happens, and whether to keep or remove eggs and fry.
- KHV after diagnosis: whether testing is available, who a "notifiable" disease gets reported to, and what happens to the pond and survivors.
- A single winter shutdown schedule with temperatures and dates. The pieces are spread across setup and enrichment, assembled nowhere.

## Emperor Scorpion (2026-09-15, batch K)

Raw reader output, one Opus agent, 9-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, feeding, enrichment, legal).

**1. Page by page**

- 00 Hub. Finished it; it is the fastest complete picture in the set and I could shop off the checklist, but several numbers are quietly wrong against the deep dives. C+
- 01 Encyclopedia. Finished it in a minute. Actionable only as background, but the CITES ranching history is real information I found nowhere else. B+
- 02 Cost guide. Finished it. I can budget from it ($80 to $250 setup, under $20/month), and the $800 debunk is useful. One feeding figure in it is wrong. B
- 03 Handling guide. Finished it. Clear rule: low, over something soft, forceps, never the tail. B+
- 04 Health issues. Finished it. Symptom lists plus causes, and it tells me which things are emergencies. A-
- 05 Tank setup. Finished it. Every number I need to buy and build is here. A
- 06 Feeding. Finished it. Portion sizes, the abdomen-versus-carapace rule, the firefly warning. A-
- 07 Enrichment. Finished it. Best-written page here, and honest that the evidence is borrowed. One sentence looks like a product blurb with the product deleted. B+
- 08 Legal. Finished it and reread the Montana section. I know exactly what to check before buying. A

**2. Hub and encyclopedia**

The encyclopedia earns its place: origin, CITES, the export quota numbers, none of it repeated elsewhere. The hub does not. It is a compressed restatement of setup, feeding, health and handling, and where it differs from the deep dive it is the deep dive that looks researched.

Disagreements with the deep dives:

- Substrate. Hub: "need 4 to 6 inches of a moist substrate". Setup: "Provide a minimum of 5 to 6 inches of substrate".
- Humidity. Hub: "high humidity (75 to 85%) are required". Setup: "Target 70 to 90%, with many keepers aiming around 75 to 80%".
- Temperature. Hub: "Temperatures of 76 to 86 degrees F". Setup: "An ambient range of 75 to 85°F is the commonly cited target".
- Adult feeding. Hub: "Adults eat every 7 to 14 days". Feeding: "Adults: once a week is standard, sometimes 2 to 3 insects offered weekly."
- Juvenile feeding. Hub: "Juveniles need food more frequently, every 4 to 7 days." Feeding: "Juveniles and nymphs: every 2 to 4 days".
- Fasting. Hub: "A scorpion that refuses food for 2 to 4 weeks is not ill". Feeding: "can safely fast for a month or two".
- Prey size. Hub: "Prey size should not exceed the scorpion's body length (excluding tail)." Feeding: "nothing larger than the abdomen." Those are wildly different animals' worth of cricket.
- Enclosure. Hub: "A 10 to 20 gallon terrarium ... is suitable for 1 to 2 emperor scorpions", and its own FAQ then wants "3 to 5 females in a 20-gallon or larger". Setup: 10 gallons for one adult, "step up to 20 to 30 gallons or more" for groups.

**3. The set as a whole**

Yes. I could legally check my state, buy captive bred, build the tank, feed it, and recognise dehydration, a bad molt, mites and cannibalism risk. That is more than most care sites manage.

Questions raised on one page and answered on another without being told:

- Health says dehydration comes from "Humidity that's too low" but never gives a number. The number is on the setup page.
- Feeding warns "obesity is a documented, common problem"; the health page's closing line is the only other mention, and neither points at the other.
- Setup says "Cohabitation is possible but not always successful"; the enrichment page is the actual manual for it.
- Cost prices the animal without ever saying it is banned in three jurisdictions. The legal guide is right there in the sidebar.

**4. Overlap and conflict across the deep dives**

Read three or four times: the UV fluorescence explanation (hub, encyclopedia, setup, enrichment, legal), the "remove live prey before a molt" warning, the tarantula comparison, and the soft-exoskeleton Insects study quote, verbatim in both health and setup.

Conflicts:

- Cost: "An adult eating 3 to 6 appropriately sized prey items a week". Feeding: "Adults: once a week is standard, sometimes 2 to 3 insects offered weekly." Cost is budgeting for roughly double the food.
- Feeding method. Hub: "Always offer prey with feeding tongs rather than by hand". Enrichment: "Release live prey in the evening rather than presenting it with tongs, and let the animal hunt." The same set tells me to use tongs and not to.
- Fluorescence colour: "blue-green" (hub, encyclopedia, setup), "bright green" (enrichment), "a bright cyan" (legal).

**5. One link per page**

- Hub. "A scorpion that refuses food for 2 to 4 weeks is not ill" should link to the feeding guide, which says a month or two.
- Encyclopedia. "Ranching, in which gravid females are collected and their young reared for export, has been the main legal supply route out of West Africa ever since." should link to the legal guide.
- Cost. "The typical range for captive-bred specimens is $25 to $100." should link to the legal guide, before I spend anything.
- Handling. "Housing multiple scorpions without enough space and hides, which can lead to aggression or cannibalism, particularly around molting time" should link to the enrichment guide.
- Health. "Humidity that's too low, inadequate misting, or overly dry substrate are the usual causes." should link to the setup guide for the actual range.
- Setup. "Cohabitation is possible but not always successful." should link to the enrichment guide.
- Feeding. "Overfeeding is the risk here, obesity is a documented, common problem in captive scorpions" should link to the health issues guide.
- Enrichment. "Dry conditions cause failed molts" should link to the setup guide's humidity section.
- Legal. "wild-caught imports arrive with parasites and dehydration often enough that it is the first thing experienced keepers check for" should link to the health issues guide.

**6. Trust**

Doubts: the hub's feeding and humidity numbers do not match the pages beneath it, which makes me wonder whether anyone reconciled them. The cost guide's "3 to 6 prey items a week" is the worst of it. And this enrichment sentence is about nothing at all: "Other sizes and volumes are available and a communal enclosure needs several." That reads like an advert with the product cut out.

The sentence that convinced me a keeper wrote this: "Every animal needs somewhere to be that is not somewhere another animal already is, and the standard failure is one good hide and three scorpions."

**7. Set grade: B**

Strong deep dives sitting under a hub that contradicts them on the numbers a first-time keeper will actually copy.

First two changes: (1) make the hub inherit its numbers from the deep dives instead of restating them, starting with feeding frequency, prey size, humidity and substrate depth; (2) settle the tongs-versus-release-and-hunt question in one place and say the same thing everywhere.

**Not covered anywhere**

- How to sex one, despite repeated warnings about mixed-sex groups and advice to keep "proven female groups".
- Quarantine: nothing on holding a new arrival separately before adding it to a group.
- Routine maintenance: spot cleaning frequency, and when a full substrate change is due. Cost budgets one a year, setup says "refresh it periodically".
- Molt frequency and how many molts to adulthood, so a keeper cannot tell a normal gap from a stalled one.
- Mite treatment beyond a full substrate swap for an animal already infested.
- What to do if one escapes the enclosure. A UV torch is mentioned for finding an escapee only inside a legal-page fun fact.
- First aid after a sting or a deep pinch, past "treat any sting as you would a bee sting".

(The shared class guides do cover pesticides, rehousing, and power outages, travel and shipping, so those are not counted as gaps.)

## Rosy Boa (2026-09-15, batch K)

Raw reader output, one Opus agent, 9-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, feeding, enrichment, legal).

**1. Page by page**

- 00 Hub. Finished it; it is the fastest complete picture in the set, and I can act on the checklist and the setup table, but several of its numbers are contradicted downstream. C
- 01 Encyclopedia. Finished it in a minute; nothing actionable beyond size, range, and lifespan, though the history paragraph earns its keep. B-
- 02 Cost. Finished it; fully actionable, real dated prices with the arithmetic shown. A-
- 03 Handling. Finished it; actionable on post-feeding wait and the balling response, but a third of it is boa constrictor comparison and it never says how often to handle. B
- 04 Health. Finished it; the "when to see a vet" list and the inactivity caveat are directly usable. A-
- 05 Tank setup. Finished it; I could build the enclosure from this page alone except substrate depth and lighting. B+
- 06 Feeding. Finished it; schedule and prey size are clear, thawing is not covered. A-
- 07 Enrichment. Finished it fastest of all; the priority list is immediately actionable and it is the only page that argues with the standard advice. A-
- 08 Legal. Finished it; genuinely checkable, state by state. A

**2. Hub and encyclopedia**

The encyclopedia earns its place: range, habitat, wild diet, and the captive-line history appear nowhere else. The hub largely restates the deep dives in compressed form, which is fine as a landing page, except that it restates them wrong in four places.

- Feeding interval. Hub: "do well on a mouse every 2 to 4 weeks." Feeding guide: "every 10 to 14 days as a commonly recommended baseline." Those are different schedules, not a range.
- Juveniles. Hub: "Feed juveniles every 7 to 10 days." Feeding guide: "every 5 to 7 days."
- Shed humidity. Hub: "around 40% ambient, rising to 60 to 65% during shed." Tank setup: "raise humidity to roughly 40 to 50 percent." The hub's shed figure also breaks the health guide's own ceiling, "generally well under 60 percent."
- Annual costs. Every line of the hub's annual table disagrees with the cost guide: mice $50 to $100 vs "$2 a month"; electricity $35 to $60 vs "$1 to $2"; vet $50 to $90 vs "$100 to $200 a year."

Also internally inconsistent on the hub itself: the fun fact says a boa constrictor is "5 to 13 foot," the comparison FAQ says "8 to 10+ feet."

**3. The set as a whole**

Yes, mostly. I could buy one, build the enclosure, set temperatures and humidity, feed it, and know what a vet visit is for. Still missing: how to thaw and warm a frozen mouse; whether the enclosure needs any lighting or day/night cycle at all (never mentioned on any page); how often to handle; substrate depth in inches; a spot-cleaning cadence; what to look for in a healthy animal at purchase; and an actual brumation protocol, which four pages call optional and none describe.

Questions raised on one page and answered on another, unsignposted: the health guide blames rostral abrasion on "a coarse screen lid" and the lid fix is in tank setup; the hub says "a brief soak resolves most cases" of retained shed while the real protocol is in health and the numbers in tank setup; the cost guide's feeding interval is argued for in the feeding guide; the health guide says "quarantine any new snake" with the quarantine guide sitting in the sidebar.

**4. Overlap and conflict across the deep dives**

Read twice or more: the boa constrictor size contrast (five pages), "overfeeding is the bigger risk" (cost, health, feeding, hub), the humidity reversal (health, tank setup, enrichment, hub), escape artists and the smooth lid (cost, health, tank setup).

Conflicts:

- Enclosure size. Tank setup: "A 20 gallon long tank covers a standard adult setup comfortably." Enrichment: "The standard recommendation for an adult rosy boa is a 20 gallon long, and that number gets repeated because the animal is undemanding rather than because it was ever tested." Enrichment is arguing against its own site's setup page without saying so.
- Water. Hub: "Fresh water should always be available." Feeding: "some keepers remove the water dish for a day afterward."
- Adult size. Encyclopedia: "rarely over 4 feet (122 cm)." Legal: "tops out around 2 to 3 feet."
- Lifespan. Everywhere: "20 to 30 years." Cost FAQ: "Animal Diversity Web puts the captive average at 18 to 22 years."

**5. One link per page**

- Hub: "typically once every 2 to 4 weeks" to the feeding guide.
- Encyclopedia: none needed; it is a facts page and the sidebar carries the rest.
- Cost: "An adult rosy boa eats every 10 to 14 days, so two or three mice a month" to the feeding guide.
- Handling: "skip handling during the shed cycle, when cloudy eyes mean temporarily impaired vision" to How Snakes Actually Shed.
- Health: "caused by a snake repeatedly rubbing against rough enclosure surfaces, most often a coarse screen lid" to the tank setup guide.
- Tank setup: "chronically high humidity is the leading cause of respiratory infection and scale rot" to the health issues guide.
- Feeding: "obesity is a real, commonly reported problem in this species" to the health issues guide.
- Enrichment: "The standard recommendation for an adult rosy boa is a 20 gallon long" to the tank setup guide, since that is where the site makes that recommendation.
- Legal: "kept mostly because it's calm and easy to handle" to the handling guide.

**6. Trust**

Doubts: the hub's 60 to 65% shed humidity directly undercuts the health guide's central argument, and a beginner who reads only the hub gets the dangerous version. The feeding interval split is the same problem. The enrichment page's "Other sizes and volumes are available" reads like a product line with the product removed. And the cost guide buries a contradicting lifespan figure in an FAQ instead of reconciling it.

Most convincing sentence in the set, from the enrichment page: "Anchor stacked rock properly. A snake that burrows underneath a stack is under it when it shifts."

**7. Set grade: B+**

Strong, specific, unusually well sourced deep dives, undermined by a hub whose numbers fight them.

First two changes: reconcile the hub to the deep dives, or generate it from them, starting with feeding interval, shed humidity, and the annual cost table. Then add the four missing basics (thawing, lighting or photoperiod, handling frequency, substrate depth in inches) and the nine in-body links above.

**Not covered anywhere**

- How to thaw and warm a frozen mouse safely, and what temperature to offer it at.
- Whether a rosy boa needs any lighting, UVB, or a day/night photoperiod.
- How often to handle a settled adult.
- Substrate depth in inches, which the enrichment page makes a top-two priority without a number.
- Spot-cleaning and water-dish cleaning cadence between full substrate changes.
- An actual brumation protocol: temperature, duration, and whether to do it at all.
- What to check on the animal at purchase, before the shared quarantine guide picks up.

## Fire-Bellied Toad (2026-09-15, batch L)

Raw reader output, one Opus agent, 7-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, enrichment).

**1. Page by page**

- 00 hub: finished it, and it is the only page that tells me how often to feed, what to dust, and how big a water change to do. Actionable. Grade B minus, dragged down by numbers the deep dives contradict.
- 01 encyclopedia: finished it for the chytrid trade history, which is genuinely interesting. Nothing to act on except "ask where it came from". Grade B.
- 02 cost: finished it, but the table does not add to the total it claims and the numbers fight the hub. Actionable: budget a vet, expect wild-caught. Grade C plus.
- 03 handling/toxin: finished it twice. The staged unken description is the best writing in the set and directly actionable: stop at stage one, close the lid. Grade A minus.
- 04 health: finished it. Red leg as emergency, fecal exam on arrival, calcium check on twitching. Grade B plus.
- 05 setup: finished it. Most actionable page for the build: gravel ban, lid, filter or 50 percent weekly. Grade B.
- 06 enrichment: finished it, and it is the only page that admits its evidence is borrowed. Plant the water, move the food. Grade A.

**2. Hub and encyclopedia versus the deep dives**

The encyclopedia earns its place: origin, wild diet, and the 2018 chytrid provenance appear nowhere else. The hub half earns it. Its diet section (feeding every 2 to 3 days, calcium at every other feeding, multivitamin weekly, gut loading 24 to 48 hours) exists on no deep dive, so it is load bearing. Its housing, health, and enrichment sections are compressed reruns of pages 4, 5 and 6.

Disagreements, hub first:

- Tank. Hub: "A 20-gallon tank with approximately 60% water section and 40% land section works well for a group of 3 to 5 adults." Setup: "A 10 gallon tank works for one to three toads". Cost then lists "10 to 20 gallon tank".
- Tank price. Hub table: "20-gallon paludarium (land + water sections) | $100 | $200". Cost table: "10 to 20 gallon tank, set up as a paludarium | $18 - $30".
- Filter price. Hub: "$25 | $50". Cost: "$8 - $15".
- Food. Hub annual: "Small live feeder insects | $60 | $110". Cost: "Roughly $15 to $30 a Month", which is $180 to $360 a year.
- Layout. Hub: "60% water section and 40% land section". Setup: "roughly half land, half water".
- Water depth. Hub: "3 to 4 inches deep". Setup: "several inches".
- Heat. Hub FAQ: "Never use under-tank heaters, heat lamps". Setup: "a low-wattage bulb or a thermostat-controlled under-tank heater works".
- Ceiling. Hub: "65 to 75 degrees F". Setup: "some sources allow up to about 78°F".
- Lifespan. Hub: "10 to 15 years with proper care". Encyclopedia: "up to 30 years in captivity".
- Toxin. Hub: "mild skin toxins (pumiliotoxins)". Handling: "specific defensive peptides". Those are different chemistry, and pumiliotoxins are a dart frog thing.

**3. Could I actually keep one**

Close. I can buy, build, feed, and spot red leg. Still missing after the whole set: how much to feed per toad per session, whether the water section needs cycling and an ammonia test kit before animals go in, cooling a room that runs warm beyond "AC or a fan", brumation or winter cooling, sexing and what the calling means, and how to pick a healthy animal in a mostly wild-caught trade.

Questions answered on another page without being told: the hub's red leg paragraph does not point to the health page's Aeromonas detail. The cost page's wild-caught paragraph raises parasites and never says the health page prescribes a fecal exam. The setup page bans small gravel for impaction and never connects to the health page's impaction section. The encyclopedia's chytrid history and the health page's chytridiomycosis section never meet.

**4. Overlap and conflict across the deep dives**

Read three times: never house with other species, water quality is the whole game, toxins mean minimal handling. Setup and enrichment both re-explain the land/water split and dechlorination.

Real conflict: feeders. Hub diet: "Dubia roaches, small mealworms, and black soldier fly larvae add variety." Setup: "Skip mealworms and other hard-shelled feeders too, for the same reason."

Second: group size. Hub: "same-species groups of 3 to 6 individuals". Setup: "10 gallon tank works for one to three toads". A group of six in ten gallons is not on offer anywhere, and enrichment says "A 10 gallon tank suits a small group" without saying how small.

**5. One link per page**

- Hub: "Dirty water causes red-leg syndrome (bacterial infection causing redness, lethargy, and ulceration of the legs and belly)." Point to the health issues guide.
- Encyclopedia: "Asian strains of that fungus were recovered from pet oriental fire-bellied toads, direct evidence that the trade carried it." Point to Amphibian Quarantine, Acclimation, and Water Hardness.
- Cost: "Most animals in the trade are wild-caught, captive breeding isn't especially profitable at this price point". Point to the health issues guide, which is where the fecal exam lives.
- Handling: "this species can also carry Salmonella like most reptiles and amphibians". Point to Salmonella and Reptile Hygiene.
- Health: "Caused by introducing an infected animal without proper quarantine, or generally poor biosecurity." Point to Amphibian Quarantine, Acclimation, and Water Hardness.
- Setup: "Skip mealworms and other hard-shelled feeders too, for the same reason." Point to the health issues guide's impaction section.
- Enrichment: "Untreated tap water is the fastest way to harm one." Point to the health issues guide.

**6. Trust**

Doubts: the hub and cost tables cannot both be right about a tank, and nobody reconciled them. "Pumiliotoxins" reads like a memory error. The encyclopedia's 30 years in captivity sits next to 10 to 15 everywhere else with no note. The cost table lists five items summing to at most $101 and then asserts $150 to $300.

Most convincing sentence, from the handling guide: "The arched back means the toad has classed the hand as a predator, and every stage after it is the toad spending toxin on you. Close the lid." Runner up, also there: "Hiding and refusing food are not listed as stress signs for this species by either source here, so this section does not list them either."

**7. Set grade: B minus.** Strong, sourced, unusually honest deep dives sitting under a hub whose numbers contradict them on tank size, cost, heating, and feeders.

First two changes: make the hub inherit the deep dives' numbers so tank size, tank cost, filter cost, food cost, mealworms, and under-tank heaters agree. Then give feeding its own page: amount per toad, cycling and testing the water section, and quarantine length in one place instead of a line on the hub.

**Not covered anywhere**

- How much to feed per toad at a session, and how to tell an overfed toad.
- Whether the water section needs cycling, and what to test it with.
- Brumation or seasonal cooling, and whether to do it.
- Sexing, calling, and breeding behavior in a mixed group.
- Choosing a healthy animal at point of sale in a mostly wild-caught trade.
- Keeping a room under 75 degrees beyond a fan or air conditioning. The axolotl tubbing and cooling guide covers cooling only for a sick axolotl.

## Quaker Parakeet (2026-09-15, batch L)

Raw reader output, one Opus agent, 8-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, enrichment, legal).

**1. Page by page**
- 00 Hub: finished it. Actionable: cage spec, toxic food list, no non-stick, checklist. Grade B.
- 01 Encyclopedia: finished it, short and honest about the JFK crate myth. Little to act on beyond size and lifespan. Grade B.
- 02 Cost: finished it. The only page with real numbers I can budget from, dated and attributed to named retailers and clinics. Grade A-.
- 03 Legal + handling: finished it, then distrusted it. Its state list contradicts 07, and nothing in it teaches handling. Grade D.
- 04 Health: finished it. Actionable: the symptom lists, the vet-first rule. Grade B.
- 05 Cage setup: finished it fast, it is thin. Actionable: size, bar gauge, liner. Grade C.
- 06 Enrichment: finished it twice. Most actionable page in the set: weaving material, priority order, session length. Grade A.
- 07 Legal: finished it, best-written page here. Actionable: my state's status and the reason behind it. Grade A.

**2. Hub and encyclopedia**

Both earn their place, barely. The hub is the only page in the set with a diet section, a toxic food list (avocado, xylitol), the kitchen fumes warning and the 65 to 80 F range. Nothing else covers feeding at all. The encyclopedia earns it on the JFK myth and the import history, though 07 repeats the import numbers better.

Hub vs deep dives, disagreements:

- Cage. Hub: "Give a single Quaker at least 24x24x30 inches" and "Bar spacing should be around five eighths of an inch." 05: "A reasonable minimum is 24 by 24 by 36 inches... Use 1/2 to 5/8 inch bar spacing." Two different minimums.
- Cage price and shape. Hub cost table: "Flight cage (24-30 in wide) | $120 | $220." 02: "Flight cage, 31x20x53 inch, 1/2 inch bar spacing | $190 - $286." The recommended cage is 20 inches deep, under both stated minimums, and costs more than the hub's ceiling.
- Running cost. Hub annual table sums to roughly $330 to $660 a year, about $27 to $55 a month. 02: "Ongoing costs: roughly $40 to $110 a month." The hub is also carrying "Fresh vegetables and some fruit | $200 | $400" for an eleven inch bird, which is the line driving its own total.
- Vet. Hub: "Annual avian vet exam | $90 | $200." 02: "Wellness exam, established client | $78 - $115." Minor, but the hub's high end is not in 02 anywhere.
- Shreddable material. Hub Housing: "Giving them safe material to do it with is enrichment," and the checklist says "Constant supply of shreddable and foraging toys." 03: "Reserve shredding toys for play areas, never the cage itself." Direct contradiction, and 05 and 06 both side with the hub.

**3. The set as a whole**

I could buy, set up, feed and house one. I could not confidently handle one. 03 promises handling and delivers temperament description only: no step-up, no what-to-do-when-it-bites, no routine for a cage-territorial bird beyond "do interactions away from the cage."

Questions raised on one page, answered on another, without the text saying so:

- 04 ends on "hygiene and quarantine practices prevent the spread of PBFD and psittacosis." The quarantine timeline is in the sidebar's quarantine guide, unlinked from that sentence.
- 04 lists "green-tinted droppings" as a fatty liver sign and never points at the droppings guide.
- Hub health says "Reduce daylight hours" for chronic laying. 05 links the photoperiod guide for exactly that mechanism; the hub does not.
- 02 says "given how long this species lives... decades of these costs" and never reaches the succession planning guide.
- 03's "buying before checking state legality" is the top first-timer mistake and does not link 07, the page that actually answers it.

**4. Overlap and conflict across the deep dives**

Read at least four times each: the nest-building fact (on all seven pages, near verbatim), the talking ability, the no-nest-box rule, the escaped-colonies rationale. The fun fact boxes are the worst offenders: 02, 03 and 06 all restate the same nest fact the body just gave.

Conflicts:

- The state lists. 03: "Commonly cited outright bans: California, Georgia, Hawaii, Kansas, Kentucky, Maine, Pennsylvania, Rhode Island, Tennessee, and Wyoming," plus "Colorado (only if owned before 1990), Connecticut (own but don't breed or sell), Wisconsin (special permit required)" and "Virginia (own but don't breed or sell), New York (identification banding/registration), Ohio (flight feathers must be clipped)." 07: "Thirteen: California, Colorado, Connecticut, Georgia, Hawaii, Kansas, Kentucky, Nebraska, New Jersey, Pennsylvania, Vermont, Wisconsin and Wyoming. Maine, Rhode Island and Arkansas require a permit." So Maine and Rhode Island flip from ban to permit, Colorado, Connecticut and Wisconsin flip from conditional to banned, Nebraska and Vermont appear from nowhere, Tennessee goes from banned to "Unclear," and Virginia's rule changes from "own but don't breed or sell" to a seamless band test. New York is the sharpest: 03 says "identification banding/registration," 07 says "in the remaining 34 jurisdictions on our map, including New York City, nothing reaches the species." Ohio's clipping requirement appears in 03 and in the hub FAQ and nowhere in 07.
- Cage material. 03: "never the cage itself." 06: "Quakers push material into cage bars, weave it through toys, and work at the structure for hours," listed as priority one.

**5. One link per page**

- 00 Hub: "Check your state law before you buy." Point it at 07.
- 01 Encyclopedia: "Several US states ban or restrict the species for that reason alone." Point it at 07.
- 02 Cost: "The cage is the line to shop carefully." Point it at 05, since that is where the spec lives.
- 03: "This list is a starting point, not a substitute for checking directly with your state's wildlife or agriculture agency before buying." Point it at 07. This is the single most needed link in the set.
- 04: "And basic hygiene and quarantine practices prevent the spread of PBFD and psittacosis between birds." Point it at the quarantine guide.
- 05: "Provide plenty of shreddable wood and foraging toys, this species needs an outlet for its natural building instinct." Point it at 06.
- 06: "Do not let a quaker escape, which is how feral colonies start and why the bans exist." Point it at 07.
- 07: needs none for its own job, but "The pet you would buy today is caught by a rule written about power lines" would earn a link to 06.

**6. Trust**

What hurt: 03 and 07 cannot both be right, and 03 reads like aggregated web folklore next to 07's citations to K.A.R. 115-18-10 and 58 Pa. Code. 05 still carries reptile template bones: a "Substrate and Lining" heading, "Humidity: No special humidity requirement," and an unsourced "Roughly 3 to 4 hours of daily UVB exposure" that no other page mentions and no cost table budgets a lamp for. 04 opens "Quaker parakeets are hardy birds" two pages after the hub calls this the species most associated with self-mutilation.

The sentence that convinced me a keeper wrote this, from 06: "watch for territorial behavior: nest building sometimes brings cage aggression, particularly in spring, in which case scale the material back rather than cutting it off entirely." Runner up, same page: "A quaker in a cage in a busy room is not getting social contact, it is watching some."

**7. Set grade: B-**

Two genuinely excellent pages (06, 07) and one solid money page carrying a legal page that contradicts them and a cage page that is half template.

First two changes:
1. Gut 03's legal section, replace it with one paragraph and a link to 07, and rewrite the rest as a real handling guide: step-up, bite response, getting a cage-territorial bird out.
2. Pick one cage spec and one running cost and make the hub, 02 and 05 say the same thing, including a recommended cage that meets the stated minimum.

**Not covered anywhere**

(checked against the Health and More list, so training, wing clipping, quarantine, droppings, weight method, emergencies, succession and where to buy are all covered there and dropped from this list)

- How much to feed a Quaker in a day. No portion, no gram figure, no meal schedule anywhere in the set.
- One bird or two, and how to introduce a second Quaker to the first.
- Cage cleaning routine. 05 says liner "changed regularly" and no page says what regularly means or what gets a deep clean.
- Bathing frequency. The hub budgets a bird bath at $12 to $16 a year and no page says how often to offer it.
- What you actually do if you own a Quaker and have to move to a ban state.


## Molly (2026-09-15, batch L)

Raw reader output, one Opus agent, 8-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, feeding, enrichment).

**1. Page by page**

- 00 hub: Finished it, it is short. Actionable: 20 gal, 72 to 78F, weekly 20 to 25% change, vegetable food, single sex or a plan. Grade C.
- 01 encyclopedia: Finished it. Nothing to act on, but the Mollienesia and black molly history is the only thing on the site I could not get elsewhere. Grade B.
- 02 cost: Finished it. I can budget: $2 to $8 a fish, $130 to $260 setup, $20 to $30 a month. Grade B+.
- 03 handling: Finished it. Sexing, 1 male to 2 or 3 females, separate or single sex groups. Grade B.
- 04 health: Finished it. Shimmy protocol, salt types, quarantine 2 to 3 weeks. Grade A-.
- 05 tank setup: Finished it. 20 long, lid, 4x turnover, pH 7.5 to 8.5, 2 to 4 week cycle. Grade A-.
- 06 feeding: Finished it. Adults once or twice daily, blanched veg 2 to 3 times a week, bloodworms capped at 3. Grade B+.
- 07 enrichment: Finished it fastest. Grazing surface, hard water over salt, spread the food. Grade A-.

**2. Hub and encyclopedia**

The encyclopedia earns its place on history and origin alone. The hub does not: every section is a compressed reprint of a deep dive, and it contradicts them twice.

Temperature. Hub: "Keep water between 72 and 78 degrees F." Health guide: "Raise the temperature toward the 76 to 80°F range." Tank setup: "roughly 72 to 80°F, with some sources extending the tolerated upper end to 82°F." A keeper following the hub checklist sits below the shimmy fix.

Salt dose. Hub FAQ: "commonly around a tablespoon per 5 gallons if you use it." Tank setup: "a commonly cited dose there is 1 tablespoon of aquarium salt per 5 gallons in a hospital tank, but that's a targeted treatment context, not necessarily a standing requirement for every molly tank." The hub turns a treatment dose into standing practice.

The hub also gives no pH or hardness target at all, then blames shimmy on "low pH or mineral hardness."

**3. The set as a whole**

I could buy, set up, cycle, feed, and troubleshoot mollies from this. What is missing: tankmates and stocking numbers (no page says how many mollies fit a 20 gallon, or what else can live there); acclimating fancy mollies from hard shipping water into soft tap water, which the health guide raises and never solves; a target hardness in actual dGH; what to do with fry once they are born, at what age they are safe, and where they go.

Answers sitting on another page with no signpost: the health guide says "Isolating the affected fish in a hospital tank while you sort out the cause is standard practice" and never points at the hospital tank guide in its own sidebar. Tank setup and handling both name cycling as the big beginner error, and the cycling guide with real ammonia numbers is one list away, unlinked. Enrichment says "Get the hardness right and the salt question mostly disappears" with no route to the pH, GH and KH guide.

**4. Overlap and conflict across the deep dives**

Read three or four times: the brood numbers (20 to 60, 10 to over 100, every 4 to 6 weeks), the 20 gallon minimum versus a guppy's 10, the salt dispute, and the no-pure-protein rule.

pH conflict. Tank setup: "Mollies do best with a pH of 7.5 to 8.5, tolerating down to around 7.0." Health guide: "check and correct pH toward 7.0 to 8.0." The health guide's target floor is the tank setup guide's tolerance floor.

Tank size wobble. Enrichment FAQ: "some varieties reach a size that makes a ten gallon inadequate." Tank setup: "20 gallons is the real minimum for a small group."

All-male groups. Handling: "Keep a males-only group for a colorful, breeding-free display." Enrichment adds the caveat handling omits: "male mollies squabble among themselves more than male guppies do, so it needs space and numbers rather than a trio."

**5. One link per page**

- 00 hub: "Weekly 20-25% water changes" should link to the tank setup guide, since that is the only place the water is described.
- 01 encyclopedia: none needed.
- 02 cost: "the filter needs real turnover capacity" should link to the filtration guide, which has the turnover math.
- 03 handling: "Not cycling the tank before adding fish, which leads to ammonia stress right from the start" should link to the cycling guide.
- 04 health: "Isolating the affected fish in a hospital tank while you sort out the cause is standard practice" should link to the quarantine and hospital tank guide.
- 05 tank setup: "If your tap water runs soft, a mineral supplement, crushed coral or a commercial buffering product, can bring it into range" should link to the pH, GH and KH guide.
- 06 feeding: "uneaten food breaking down in the tank is a common, avoidable driver of the water-quality decline behind most other molly health issues" should link to the molly health guide.
- 07 enrichment: "A water test kit is worth having here" should link to the pH, GH and KH guide.

Structural note: nearly every in-body link goes to a guppy page. The molly pages barely point at each other.

**6. Trust**

Doubts: the hub's 78F ceiling and its standing salt dose; the enrichment FAQ retreating to a ten gallon; a $20 to $22 salt row on the hub against a flat $20 in the cost guide and $21.72 in its body; and a sulcata tortoise cost link dropped into a molly budget for no reason. Dr. Joanne Norton is named as the counterweight on salt with no link, while every $6.99 fish price gets one.

The sentence that convinced me a keeper wrote this, from the enrichment guide: "Spread food instead of dropping it in one corner, so females that are being chased still eat."

**7. Set grade: B.** The deep dives are specific, sourced and unusually honest about what is disputed; the hub they hang off is a lossy summary that contradicts them.

First two changes: pin one temperature and one pH range across all eight pages and rewrite the hub to those numbers; add stocking and tankmate guidance, then put the cycling, hospital tank, and pH/GH/KH links into the article bodies where the question is actually asked.

**Not covered anywhere**

- Tankmates and stocking density: how many mollies in a 20 gallon, and what else can share it.
- Acclimating a fancy molly out of hard overseas water into soft tap water, the exact mismatch the health guide blames for shimmy.
- A molly-specific hardness target in dGH, rather than "medium-hard to hard."
- Fry after birth: at what size or age they are safe with adults, how to grow them out, and where they go.
- Juvenile feeding amounts, which the feeding guide itself flags as thin and no other page fills.
- Plants, substrate, lid and test kit as setup line items, absent from both cost tables and from the hub checklist except the test kit.

## Praying Mantis (2026-09-15, batch L)

Raw reader output, one Opus agent, 8-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, enrichment, ootheca).

**1. Page by page**

- 00 hub: finished it. Acted on: 3x height rule, one per enclosure, feed every 2 to 3 days, prey no wider than the gap between the eyes. Grade B minus, because its numbers are the ones the deep dives contradict.
- 01 encyclopedia: finished it. Acted on: the Chinese mantis is the cheap, legal, easy first species, and that is why it is everywhere. A minus.
- 02 cost guide: finished it, then stopped trusting the totals. Acted on: buy an adult or subadult, budget feeders monthly. C plus.
- 03 handling: finished it. Acted on: closed room only, hands off in pre-molt, never two in a box. B plus.
- 04 health: finished it. Acted on: mesh not solid, a hunger strike is usually pre-molt, a honey drop for a flagging animal. A minus.
- 05 tank setup: finished it. Acted on: 8x8x12 floor, 60 to 80%, mesh lid, room temperature, no UVB, 12 hour light cycle. A.
- 06 enrichment: finished it. Acted on: the 1 to 7 priority list, keep the space under the ceiling empty, release prey rather than present it. B plus.
- 07 ootheca: finished it. Acted on: individual cups and fruit flies staged before the hatch, freeze it if I do not want a brood. A minus.

**2. Hub and encyclopedia**

The encyclopedia earns its place. The History paragraph on the 1896 Mount Airy introduction and the garden centre ootheca trade is the only place on the site that explains why the Chinese mantis is the default first animal, and no deep dive touches it.

The hub does not. It is a compression of the deep dives, and where it differs it differs wrongly:

- Lifespan. Hub: "Most pet mantis species have lifespans of 12 to 18 months." Cost guide: "Most commonly kept mantis species live just 6 to 12 months total." Encyclopedia adds a third, "6-18 months."
- Enclosure price. Hub table: "Tall vertical mesh or acrylic enclosure | $15 | $35." Cost guide table: "Tall mesh or acrylic enclosure | $60 - $70." The ranges do not even touch.
- Feeder cost. Hub annual: "Fruit flies and live feeder insects | $30 | $60." Cost guide: "Roughly $10 to $40 a Month," which is $120 to $480 a year.
- Enclosure size. Hub: "a 12x12x18 inch mesh or acrylic enclosure (for adults)." Tank setup: "around 8 inches long, 8 inches wide, and 12 inches tall as a minimum."
- Temperature. Hub: "Most common pet species do well at 75 to 85 degrees F." Tank setup: "Most commonly kept species, Carolina and Chinese mantises among them, do fine at normal room temperature." My room is 70.
- Nymph or adult. Hub FAQ: "The typical keeper experience is acquiring a nymph, raising it through 6 to 9 molts." Cost guide: "Buy an adult or subadult, not a nymph."
- The molting stick. Hub prices and checklists it separately ("Vertical branch or stick for molting | $5 | $10"); cost guide says "this is one line item, not two."
- Misting. Hub: "misting one side of the enclosure once daily." Tank setup: "light misting once or twice daily."

**3. Could I actually keep one**

Mostly yes. Between the tank and enrichment pages I can buy and build the enclosure, and the health page tells me what kills them. Still missing: how to sex a mantis, which matters given females live longer and lay the oothecae the set devotes a whole page to; how often to clean the enclosure and what spot cleaning means with live prey and shed skins; how to keep and culture feeders, when the hub casually says bottle fly pupae are ones "you hatch at home"; how to hand-feed the crooked-limbed survivor the health page says will need it; what to do when the mantis I was warned I would lose in the room actually gets loose.

Questions raised on one page and answered on another without saying so:
- Handling: "If your mantis has stopped eating and seems unusually still, treat that as a signal to leave it alone entirely." The health page's appetite section explains that, unlinked.
- Tank setup warns about "the mold and infection risk that comes with excess humidity" and never points at the health page that covers it.
- Cost guide says nymphs are "genuinely difficult to keep alive through their many molts" and the ootheca page is the one that shows what raising them looks like.
- Hub says females "continue living and laying eggs for months" with no route to the ootheca page except the sidebar.

**4. Overlap and conflict across the deep dives**

Read three times: the solo housing and cannibalism rule (handling, enrichment, hub, ootheca), and the mismolt story (health, tank, enrichment). The molting material is the worst of it: enrichment's key takeaway, health's mismolt section, and tank setup's mesh lid section are three drafts of the same paragraph.

Numbers that disagree:
- Clear space under the perch. Enrichment: "clear vertical space beneath it of at least three times its body length." Tank setup: "Leave genuine clearance below the highest perch, roughly twice the mantis's body height."
- Cost guide against itself. Its own table runs $117 to $221 at the low and high ends, then the text says "most first-time setups land around $50 to $150."

**5. One link per page**

- Hub: "Failed molts are the primary cause of mantis death in captivity." Should point to the health issues guide.
- Encyclopedia: "Female mantises occasionally engage in sexual cannibalism." Should point to the ootheca guide, which explains why captivity makes it worse.
- Cost: "Nymphs are genuinely difficult to keep alive through their many molts." Should point to the health issues guide.
- Handling: "If your mantis has stopped eating and seems unusually still, treat that as a signal to leave it alone entirely." Should point to the health issues guide.
- Health: "not enough vertical space for the mantis to hang freely while shedding." Should point to the enclosure setup guide, which is where the actual inches are.
- Tank: "too wet invites mold and internal infection." Should point to the health issues guide.
- Enrichment: "Remove uneaten live prey before a molt. Crickets chew on soft mantids." Should point to the health issues guide.
- Ootheca: "mantis nymphs are highly cannibalistic toward their siblings." Should point to the handling guide, which already has the rearing-in-separate-containers rule.

**6. Trust**

What hurt: the hub and cost guide disagreeing on lifespan and enclosure price, the two numbers a buyer checks first. The cost guide's total not matching its own table. "roughly twice their own body length" as a mantis's jump and flight distance, offered as the reason to close the door, when an adult female flying across a room is the actual failure mode. "the only insect that can turn its head 180 degrees" is an overreach. Enrichment has a plain typo, "An tall nano terrarium."

What convinced me a keeper wrote it, from enrichment: "Keep the center of the upper enclosure clear. Structure that fills the space directly under the ceiling is structure the mantis can hit on the way down during a molt." Nobody arrives at that from a care sheet.

**7. Set grade: B**

The deep dives are genuinely good and the hub undercuts them with contradictory numbers on the exact figures a buyer checks first.

First two changes:
1. Make the hub agree with the deep dives on lifespan, enclosure price, feeder cost, enclosure dimensions, temperature, and nymph versus adult, then pick one clearance rule, 3x or 2x below the perch, and use it everywhere.
2. Give feeding its own page. The only feeding schedule in the set, "Feed every 2 to 3 days," and the only prey sizing rule, "never exceed the space between the mantis's eyes," live on the hub alone, with no deep dive behind them.

**Not covered anywhere**

Checked against the Health and More list, which covers pesticides, rehousing, emergencies and shipping, and stocking numbers. The invertebrate molting guide is not in that list but is body-linked from enrichment and ootheca, so pre-molt appearance is covered.

- Sexing a mantis. Nothing in the set tells me how to tell a female from a male.
- Enclosure cleaning and maintenance schedule. No page says how often or how.
- Keeping and culturing feeder insects, including the bottle fly pupae the hub says you hatch at home.
- Hand-feeding technique for a mismolted mantis, which the health page requires and nobody explains.
- Recapturing an escaped mantis. Rehousing covers the catch cup for a tarantula in a box, not a mantis loose in a room.
- Water beyond misting. Whether a mantis drinks droplets, and whether a dish is ever appropriate.

## Argentine Tegu (2026-09-15, batch L)

Raw reader output, one Opus agent, 8-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, enrichment, legal). This is the first set
the extractor could produce for this species: its guide id is `tegu` and every
deep dive is `argentine-tegu-*`, so before the fix the reader would have been
handed a hub and an encyclopedia entry and nothing else.

## 1. Page by page

- **00 Care guide hub.** Finished it, but it is the page I trust least: actionable numbers for enclosure, temps, diet split, brumation temp. Grade C-.
- **01 Encyclopedia.** Short, read it all. Actionable: scientific name, size range, the Florida invasion history and the 2021 date. Grade B.
- **02 Cost guide.** Finished. Actionable: animal price by morph, vet exam and emergency ranges, monthly range, the warning that the priced enclosure is not the enclosure I need. Grade B-.
- **03 Handling guide.** Finished easily, best-sourced page here. Actionable: stress signals, approach from the side, two handlers for an adult, bite protocol, brumation stops handling. Grade A-.
- **04 Health issues.** Finished, but it says the same three things three times. Actionable: symptom lists per condition, prolapse is an emergency. No numbers, no feeding schedule. Grade C+.
- **05 Enclosure setup.** Finished. The most buildable page: sizes, 100 to 115F, 70 to 80% humidity, 12 to 18in substrate, 46in T5 HO 12 to 14%, UVI 3.0 to 4.0, 12 to 14 hour photoperiod. Grade A-.
- **06 Enrichment.** Finished, and the opening admission bought a lot of goodwill. Actionable: priority order, puzzle feeding, target training, big soak tub. Grade A.
- **07 Legal.** Finished. Actionable: Florida dates, the closed grandfather window, the 2025 caging rule, other states. Undercut by contradicting itself. Grade B-.

(Note: "10 Surprising Argentine Tegu Facts" is in the sidebar on every page but was not in the folder, so I could not read it.)

## 2. Hub and encyclopedia

The encyclopedia earns its place: taxonomy, describer, the Merian naming, the Florida spread. Nothing in it repeats a deep dive.

The hub does not. It is a lower-resolution copy of the setup, enrichment and health guides, and where it differs it is wrong:

- Substrate. Hub: "Substrate of 4 to 6 inches minimum is needed for natural burrowing behavior." Setup: "Deep, 12 to 18 inches or more." The enrichment guide calls depth "the largest single enclosure choice for the species." The hub checklist repeats "4 to 6 inch substrate" and its cost table prices "Substrate (4-6 in soil/sand mix) $60 to $120." That is a third of what the other pages demand.
- Substrate type and humidity. Hub: "A 50/50 mix of organic topsoil and play sand works well." Setup: "70 to 80%" humidity held with "cypress mulch, coconut fiber, organic topsoil" and warns to "Avoid dry, dusty substrate." The hub never states a humidity figure at all, and prices no misting system.
- Brumation, necessary or not. Hub: brumation "is a natural and necessary part of tegu biology" and "Do not try to prevent or interrupt brumation." Handling: "Brumation isn't required for a non-breeding pet tegu, and skipping it isn't harmful."
- Brumation length. Hub FAQ: "lasting 3 to 5 months." Handling and setup both say "2 to 4 months."
- Temperatures. Hub: basking "100 to 110 degrees F or higher", warm side "85 to 90", cool "75 to 80". Setup: "Basking area 100 to 115F, warm ambient in the 90s, cool side around 80F."
- Cost. Hub setup table tops out near $1,640 and omits the animal. Cost guide: "Often exceeding $1,000 to $3,000."
- Legality. The hub, the page navigation lands on first, never mentions that Florida banned acquisition in 2021. The cost guide treats that as the first thing to know.

## 3. The set as a whole

I could build the enclosure, buy the animal outside Florida, and know what illness looks like. I could not confidently feed it. Nothing anywhere gives a feeding frequency or portion by age, yet the health guide blames obesity on "continuing a juvenile feeding schedule into adulthood" and prescribes "an appropriate feeding schedule for an adult's actual needs" without ever stating one. Also missing: how to pick a breeder and a healthy animal, how to lift and support a 15lb lizard, how to tegu-proof a room for the daily free roam every page assumes, how to run the brumation ramp-down, and what an 8x4x4 DIY build actually costs.

Questions raised on one page and answered on another, unsignposted:
- Health guide's MBD section never names a UVB spec; the setup guide has the bulb and the UVI target.
- Health guide's respiratory section says temperature and humidity are "harder to get right at this size"; the setup guide has the actual numbers.
- Handling guide says the brumation season closes handling; the setup guide is where you learn the substrate has to be deep enough for the burrow.
- Cost guide says an adult tegu is hard to transport to a vet; nothing points to the emergency plan guide in the sidebar.

## 4. Overlap and conflict across the deep dives

Read twice or more: the 8x4x4 minimum, the "ready made 8ft PVC is actually 8x2x2" caveat (near verbatim in the cost and setup guides), the 2 to 4 month brumation (handling, setup, enrichment), substrate depth (setup, enrichment, cost), and the dog comparison (hub, handling, enrichment).

Real conflicts:
- Bowl feeding. Handling: "LafeberVet's prevention: feed from a bowl or with tongs." Enrichment: "Do not bowl-feed an animal this investigative."
- Taxonomy. Hub FAQ: "Tegus (family Teiidae) are New World lizards... monitor lizards... belong to a completely separate Old World family (Varanidae)." Cost guide: "the savannah monitor cost guide for that other large monitor family lizard." Setup guide: "just as with the savannah monitor, another large monitor family lizard." The enrichment guide's entire argument is that they are not.
- Lifespan. Hub and encyclopedia: "15 to 20 years." Cost guide: "documented living past 30 years old under excellent care." The hub FAQ presents 15 to 20 as the whole answer.
- Legal scope. Legal guide opening: "most states don't mention them in their wildlife codes at all. What they have is a very specific, very real Florida problem." Same page, lower: "This guide focuses specifically on Florida's restriction because it's the one fully documented, verified rule we found." Its own table lists Georgia, Alabama, Louisiana, Hawaii, DC and NYC as bans. The FAQ "Are tegus restricted anywhere else in the US?" answers with no ban anywhere else.
- Size. Hub: males "3.5 to 4.5 feet, with some exceeding 5 feet." Encyclopedia: "3-5 feet." Handling: "up to 5.2 feet and 11 pounds" versus "up to 5 feet and 15 pounds." The handling guide names its sources and is the only one that admits the spread.

## 5. One link per page

- **Hub.** "Substrate of 4 to 6 inches minimum is needed for natural burrowing behavior." Point it at the enclosure setup guide, and fix the number while you are there.
- **Encyclopedia.** "On April 29, 2021 the Florida Fish and Wildlife Conservation Commission added the genera Salvator and Tupinambis to its prohibited list." Point it at the legal guide.
- **Cost guide.** "True adult sized housing at this species' scale is typically a DIY build or ordered direct from a manufacturer." It currently links to the savannah monitor cost guide. It should link to the tegu enclosure setup guide.
- **Handling.** "Not washing hands before and after handling, Salmonella risk applies here as with most reptiles." Point it at Salmonella and Reptile Hygiene.
- **Health.** "Caused by inadequate UVB or insufficient calcium and vitamin D3." Point it at the enclosure setup guide, which is the only page with a bulb and a UVI target.
- **Setup.** "run through a real heavy duty thermostat rated for the wattage a setup this size actually draws." Point it at Reptile Heating and Thermostats.
- **Enrichment.** "Do not let enrichment distract from basking temperatures and UVB, which outrank all of it." Point it at the enclosure setup guide.
- **Legal.** Needs none. Its four links already go where I would want to go.

## 6. Trust

What hurt: calling a teiid a "monitor family lizard" twice on a site whose own FAQ corrects that; the hub's substrate and brumation numbers fighting the deep dives; the legal guide's state table rendered under a "Date | What Happened" header with states jammed into it; and the cost guide pricing an 8x2x2 enclosure in the table after telling me it is not the enclosure I need.

What convinced me a keeper wrote it, one sentence, from the enrichment guide: "a tegu will work sliders and lift-out plugs, which is exactly what a bearded dragon will not do." Runner-up, handling: "A burrow counts as a hide, so leave it."

## 7. Set grade: B-

Three of the deep dives are genuinely good, and the hub that everyone lands on first contradicts them on the two decisions that cost the most money.

First two changes:
1. Rewrite the hub from the setup, handling and enrichment guides: 12 to 18in substrate, a humidity figure, moisture-retentive mix, 2 to 4 month brumation described as normal rather than mandatory, and one line saying tegus cannot be legally acquired in Florida.
2. Add a feeding schedule with frequency and portions by age, on the hub and in the health guide, and settle bowl versus tongs versus puzzle so handling and enrichment stop disagreeing.

## Not covered anywhere

- Feeding frequency and portion size by age, the exact thing the health guide blames obesity on.
- How to choose a breeder and assess a healthy captive-bred juvenile at purchase.
- Lifting and supporting technique for an adult, beyond "two people."
- How to tegu-proof a room for the daily free roam every page assumes.
- Brumation ramp-down protocol: fasting first, acceptable weight loss, how to bring one back up.
- What an actual 8x4x4 DIY or custom build costs, the number the cost guide says I need and never prices.
- Sexing, and whether sex should change my enclosure or budget plan.

## Platy (2026-09-15, batch M)

Raw reader output, one Opus agent, 8-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, feeding, enrichment).

**1. Page by page**

- 00 Hub: Finished it, it's short. Actionable: the checklist and the one water-change number in the whole set. C+, because its numbers fight the deep dives.
- 01 Encyclopedia: Finished it. Actionable: almost nothing, it's natural history, but the Gordon-Kosswig history is the best-written paragraph on the site. B.
- 02 Cost: Finished it. Actionable: $2-6 a fish, $60-120 setup, $15-20/month, and a real warning about fry costs. B.
- 03 Handling/breeding: Finished it. Actionable: sexing by gonopodium, 2-3 females per male, four concrete population strategies. B+.
- 04 Health: Finished it. Actionable: five conditions with what to actually do, plus 2-3 week quarantine. The melanoma section is the best thing here. A-.
- 05 Tank setup: Finished it. Actionable: nearly all of it, sizes, 68-82F, pH 7.0-8.2, 10-30 dGH, sponge filter, lid. A-.
- 06 Feeding: Finished it. Actionable: schedule by life stage, portion rule, why-they-stopped-eating list. B+.
- 07 Enrichment: Finished it fastest. Actionable: priority order list, sex ratio, what not to do. A.

**2. Hub and encyclopedia**

The encyclopedia earns its place, it's the only page with wild range, habitat, wild diet and the research history. The hub does not: every section is a shorter, vaguer version of the deep dive it sits next to, and its only unique fact, "Weekly 20 to 25 percent water changes," appears nowhere else.

Conflicts, hub first:

- Temperature: "Keep water between 72 and 78 degrees F" vs setup: "Roughly 68 to 82F works well." Its own FAQ then says "down toward the low 70s or even high 60s F," so the hub disagrees with itself too.
- Tank cost: hub table "10+ gallon tank | $40 | $80" vs cost guide "10-gallon tank | $20 - $40." Same item, no overlap at all. Filter ($15-25 vs $10-20) and food ($25-45 vs $20-35) drift the same way.
- Brood: "typically 20 to 80 fry per birth" vs cost and handling: "A typical brood runs 20 to 50 fry, with a documented range up to 80." The hub quotes the extreme as the norm.
- Vegetables: hub says platies "genuinely benefit from a real vegetable or algae component in that staple rather than a purely protein-heavy diet" and blames swim bladder on "an overly protein-heavy diet that skips vegetable matter"; feeding says "platies aren't as strictly dependent on a big vegetable ratio" and names overfeeding as the cause.

**3. The set as a whole**

Yes, I could set up, cycle, buy, feed and keep them, and I'd know to decide about fry before buying. Missing: tankmates (nothing anywhere says what else goes in a community tank with platies, or what not to), stocking numbers past "six or more" in a 20 gallon, what to actually do with fry (at what size, will a shop take them), which plants to use for the cover four pages insist on, and day-one acclimation.

Unflagged cross-page answers: handling says "dense live planting or a dedicated breeding or nursery tank gives them somewhere to hide" and never says setup covers how; feeding's swim bladder and constipation are described in full on health; health's "A properly cycled tank" is a 2-4 week job explained on setup; the encyclopedia raises platy-swordtail melanoma and never points to the page that says it isn't your fish's risk.

**4. Overlap and conflict across the deep dives**

Read three times: sperm storage and the 20-50 fry brood (cost, handling, enrichment); the 2-3 females per male ratio (handling, feeding, enrichment); shimmy (health, setup, feeding). Cost and handling share a near-identical paragraph.

Numbers: health says correct "pH toward 7.0 to 8.0," setup says "roughly 7.0 to 8.2." Encyclopedia gives "Wild Lifespan: 3-5 years" while cost says "2 to 4 years is the range most sources land on." Cost calls 10 gallons fine for five; enrichment says "A 10 gallon tank is a reasonable starting point for a small group and is not a long-term plan if you keep both sexes." Setup cites a 15-gallon minimum footprint and still headlines "A Real 10 Gallons."

**5. One link per page**

- Hub: "Weekly 20 to 25 percent water changes help keep pace with a growing colony's bioload." Point to the filtration guide, since nothing else explains the bioload claim.
- Encyclopedia: "crossing a platy with a swordtail and then backcrossing the hybrids produced offspring that developed malignant melanoma." Point to the health guide.
- Cost: "A 10-gallon tank is a realistic starting point for a small group of platies." Point to the tank setup guide, which this page never links.
- Handling: "dense live planting or a dedicated breeding or nursery tank gives them somewhere to hide." Point to the tank setup guide.
- Health: "Quarantining new fish for 2 to 3 weeks before adding them to an established tank." Point to the hospital tank guide.
- Setup: "Building the beneficial bacteria colony that processes waste takes 2 to 4 weeks with a fishless cycle." Point to the cycling guide. Biggest miss in the set.
- Feeding: "It drives constipation and swim bladder problems directly." Point to the health guide.
- Enrichment: none needed, it links where it matters.

**6. Trust**

Doubts: the hub's cost table and temperature range contradicting the articles under it; "typically visible by around 5 to 6 months of age" for the gonopodium reads late for a fish that breeds this fast; the shared pH/GH/KH guide is summarized as being about "a coldwater tank" and "goldfish keepers," which is not my fish.

Most convincing: "Watch instead for a long, stringy strand of waste trailing from the fish after a meal, a visible sign the portion was too large."

**7. Set grade: B+**

Strong deep dives, weakened by a hub that restates them with different numbers. First two changes: make the hub's costs, temperature and brood figures inherit from the articles instead of being written separately, and add body links from setup to the cycling guide and from health to the quarantine guide.

**Not covered anywhere**

- Tankmates: which community fish go with platies and which don't.
- Stocking limits: how many platies a 20 gallon actually holds.
- Fry endgame: at what age or size to rehome, and whether shops take them.
- Plant selection: which species give the dense cover four pages require.
- Acclimation: float, drip, or neither on the day the fish come home.

## Cherry Shrimp (2026-09-15, batch M)

The batch session did not file the raw reader output for this species. What
follows is reconstructed by the species check from the review section in
docs/READER_REVIEWS.md, which quotes the reader; the page-by-page detail and the
one-link-per-page list are not recoverable. One Opus agent, 8-page extract
(hub, encyclopedia, cost, handling, health issues, tank setup, feeding,
enrichment).

**Grades, as quoted in the review**

Hub C+ ("Where I got most of my wrong ideas."), encyclopedia B, cost A-,
handling A, health issues A, tank setup A ("The page I would buy from."),
feeding A-, enrichment B- ("the sentience review is a strange front door").

**7. Set grade: B+**

"The five deep dives are sourced, specific, and honest about where sources
disagree; the hub that fronts them undercuts them with different numbers."

**Not covered anywhere**

- Mixing color lines breeds offspring back to wild brown.
- Sexing and berried females.
- How to test tap water for the copper three pages warn about.
- Lighting and photoperiod.
- Fish tankmate compatibility.
- What to do when a colony outgrows its tank.

## Green Anole (2026-09-15, batch M)

The batch session did not file the raw reader output for this species. What
follows is reconstructed by the species check from the review section in
docs/READER_REVIEWS.md; the per-page grade table, the page-by-page detail and
the one-link-per-page list are not recoverable. One Opus agent, 8-page extract
(hub, encyclopedia, cost, handling, health issues, legal, tank setup,
enrichment).

**Hub and encyclopedia, as quoted**

Hub C-. The cohabitation split across three pages was the reader's sharpest
finding: hub "A male-female pair or a group of females can be housed together",
setup "Don't house multiple anoles together, they don't coexist peacefully",
enrichment "A single male with females in a large planted enclosure is the
workable version." The reader said one of them is wrong and a buyer cannot tell
which. The hub's own tables summed to roughly $210 to $405 against a stated
total of $390 to $470. The cost guide's "a genuinely new addition to the gear we
recommend for this species" read as an internal note that escaped.

**7. Set grade: B**

"Strong deep dives sitting under a hub whose numbers are the outliers." The
biggest miss in the set: the health guide's sentence that everything connects
back to the setup never pointed there.

**Not covered anywhere**

- What to do when a female lays eggs.
- How to catch or restrain one safely.
- Whether a temperate native needs a winter cooling period.
- A spot-cleaning and substrate-replacement schedule.

## Leaf-Tailed Gecko (2026-09-15, batch M)

The batch session did not file the raw reader output for this species, and its
review section carries no gaps list, so only the lines it quotes survive. One
Opus agent, 7-page extract (hub, encyclopedia, cost, handling, health issues,
tank setup, enrichment).

**Hub, as quoted**

Hub C+. "If the landing page tells me 24x24x36 and 80 to 100% while the setup
article says 18x18x24 and 60 to 80%, I stop trusting whichever one I read
second." Four of five deep dives carried no Sources block. The reader said the
enrichment guide "names Gaskill but gives no link to check"; it links both
Gaskill papers in its Sources block.

**7. Set grade: B-**

"Four strong deep dives undercut by a hub that disagrees with them on every
number a buyer acts on first."

**Not covered anywhere**

Not recoverable; the batch filed no gaps list for this species.

## Mouse (2026-09-15, batch M)

The batch session did not file the raw reader output for this species. What
follows is reconstructed by the species check from the review section in
docs/READER_REVIEWS.md; the per-page grade table, the page-by-page detail and
the one-link-per-page list are not recoverable. One Opus agent, 8-page extract
(hub, encyclopedia, cost, handling, health issues, tank setup, feeding,
enrichment).

**Hub, as quoted**

Hub C. "I would have bought the wrong cage from it." Hub, twice: "wire mesh
spacing needs to be under half an inch" and "Bar spacing under 1/2 in", against
the setup guide's quarter inch (6mm). The cost guide's stated "Roughly $15 to
$30 a Month" against an annual table totalling $125 to $240. Feeding guide
"lean toward scattering some of that ration around the cage" and "Use a shallow,
chew-resistant dish" against enrichment "Scatter feeding, never a bowl."

**7. Set grade: B**

"Six strong, specific deep dives undercut by a hub that contradicts them on the
one number that decides whether the animal stays in the cage."

**Not covered anywhere**

- A spot-clean and full-clean schedule in days.
- A weighing routine and scale against the 20% weight-loss warning.
- How to pick and sex a healthy mouse.
- How to introduce unfamiliar females.
- Accidental litters and desexing.
- Zoonotic risk and hand hygiene.
- Out-of-cage time and escape recovery.
- A travel carrier.
- End-of-life costs.

## Bristlenose Pleco (2026-09-15, batch N)

Raw reader output, one Opus agent, 8-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, feeding, enrichment).

## 1. Page by page

**00 Hub.** Finished it. Actionable: tank 20-30gal, 74-82F, driftwood, wafers, checklist. Grade **B-** (its cost table fights the cost guide).
**01 Encyclopedia.** Finished it. Actionable: 4-6in, 5-10yr, why it's sold as "Ancistrus sp." Grade **B+**.
**02 Cost.** Finished it. Actionable: $7-25 fish, $155-265 setup, $45-85/yr, replace wood every year or two. Grade **C+** (numbers contradict the hub).
**03 Handling.** Finished it. Actionable: don't net, herd into a cup; hold behind the pectorals; one cave per male. Grade **A-**.
**04 Health.** Finished it. Actionable: sunken belly is the tell, no copper, smooth substrate. Grade **B** (ich section stops short of a number).
**05 Tank setup.** Finished it. Actionable: 20gal floor, +10/fish, 74-80F, pH 6.5-7.8, AquaClear 70, sand. Grade **B+**.
**06 Feeding.** Finished it. Actionable: once daily after lights-out, 85/15 plant to protein, pull food next day. Grade **B+**.
**07 Enrichment.** Finished it twice. Actionable: big wood not an ornament piece, leave the back glass unscrubbed, priority list. Grade **A**.

## 2. Hub and encyclopedia

The encyclopedia earns its place: origin, L-numbers, the 1854/2017 taxonomy, none of it repeated elsewhere. The hub does not. Every section is a shorter version of a deep dive, and it disagrees with them:

- Temperature. Hub: "Keep water heated between 74 and 82 degrees F". Setup: "74 to 80°F suits most captive-bred bristlenose".
- Tank price. Hub: "20-30 gallon tank | $90 | $170". Cost: "20 gallon long tank (minimum) | $35 - $60".
- Filter. Hub: "$30 | $50". Cost: "$45 - $60". Heater: hub "$20 | $35", cost "$18 - $30".
- Test kit. Hub files it as annual, "Water conditioner and test kit | $15 | $25". Cost files it upfront at "$25 - $40".
- Hub setup totals $165-305 against the cost guide's "Roughly $155 to $265", and the hub is missing the test kit line entirely.
- Encyclopedia: "up to 12-15 years with excellent care". Cost: "reasonably often reported living 12 to 14 years".
- Hub calls them "scaleless"; health calls them "armored catfish with an unprotected belly". Those are different bodies.

## 3. The set as a whole

Yes, I could buy one, set it up, feed it, and spot most of what goes wrong. Still missing: a water change schedule (three pages say "regular water changes", none says how much or how often); how to prepare driftwood (boil, soak, sink, how long the tannins last); what to use instead of copper; how high to raise the temperature for ich, which the 74-80F ceiling makes urgent; what happens when they breed, which the hub raises and nobody follows; tankmates to avoid; acclimating a new fish out of the bag.

Unsignposted handoffs: the hub's copper warning never points at the health guide. The cost guide says driftwood is "tied to digestion" and leaves the reader to find the enrichment page that argues it. Worst, feeding says "Our Bristlenose Pleco tank setup guide covers exactly how to add it," and the setup guide does not cover adding it at all, while pointing back at feeding for the science that actually lives in enrichment. That is a circular pair with the answer in a third file neither links.

## 4. Overlap and conflict across the deep dives

Read three or four times: the common pleco size trap, the algae myth, the sunken belly, "driftwood is not decor." By the enrichment guide I was skimming.

Conflicts:
- Setup says "74 to 80°F"; health says ich is "Treatable by gradually raising tank temperature with strong aeration" without saying to what, which only works above that range.
- Setup: "plan for at least one secure hiding spot per fish". Enrichment: "a cave per fish is sensible when you keep more than one." Handling gives no number. Close, not identical.
- Cost prices a "20 gallon long tank (minimum)" while the hub's checklist says "20-30 gallon tank", so the beginner buying off the checklist overpays or underbuys.
- Feeding adds spinach to the vegetable list; hub and enrichment omit it.

## 5. One link per page

- **Hub**: "Bristlenose plecos, like corydoras catfish, are scaleless and unusually sensitive to copper-based medications" → the health issues guide.
- **Encyclopedia**: "Algae alone is not a complete diet for either type as an adult" → the feeding guide.
- **Cost**: "Driftwood isn't a style choice here either, it's tied to digestion rather than aesthetics." → the enrichment guide.
- **Handling**: "Those spines catch easily in ordinary net mesh, and a fish that struggles while tangled risks real injury to itself in the process." → the health issues guide, for what an open wound becomes.
- **Health**: "Treatable by gradually raising tank temperature with strong aeration, but use reduced medication doses" → Fish Quarantine and Treatment: The Hospital Tank Guide.
- **Setup**: "keep ammonia and nitrite at zero through regular water changes" → How to Cycle a Fish Tank.
- **Feeding**: "Our Bristlenose Pleco tank setup guide covers exactly how to add it." → should point to the enrichment guide, which is the page that actually delivers.
- **Enrichment**: "And take real care netting one, since the pectoral spines lock into mesh and the odontodes catch." → the handling guide.

## 6. Trust

Doubts: the hub and cost guide disagreeing on the price of a tank by a factor of two is the kind of thing that makes me re-check everything else. Five pages source driftwood to "most care guides tie that behavior to," which is hearsay; only enrichment produces actual studies, and it then undercuts what the other four asserted flatly. The enrichment guide also switches voice: "courgette," "strip it in a fortnight," and a stray "Other sizes are available" that goes nowhere. The shared pH/GH/KH guide is pitched at coldwater goldfish keepers, which is not me.

The sentence that convinced me: "A pleco visible in the open all day is often a pleco with nowhere better to be." Runner-up, the handling guide on rehoming: "it can hide successfully through most of a tank teardown."

## 7. Set grade: **B-**

Genuinely useful and unusually honest about the wood evidence, undermined by a hub that contradicts its own deep dives on price and temperature. First two fixes: reconcile the hub's cost table and temperature range to the deep dives, or drop the table and link out; then give the driftwood how-to a home in the setup guide and fix the circular pointer.

## Not covered anywhere

- Water change frequency and percentage: not in Cycling, Filtration, or any species page.
- Driftwood preparation: boiling, soaking, getting it to sink, how long tannins last.
- What to treat with instead of copper: no medication class is ever named.
- Target temperature for the ich heat treatment, and whether it breaks the 80F ceiling.
- Breeding follow-through: the hub raises it, no page says what to do with eggs or fry.
- Tankmates to avoid by name.
- Acclimating a newly bought fish; the Transport guide covers moving a tank, not bag to tank.

## Discus (2026-09-15, batch N)

Raw reader output, one Opus agent, 8-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, feeding, enrichment).

## 1. Page by page

- **00 Hub.** Finished it. Actionable: tank range, temp, pH, checklist, cost tables. It is the densest page but the numbers drift from the articles it sits on top of. **B-**
- **01 Encyclopedia.** Finished it. Actionable: adult size (6 to 8 inches), origin water type, and the strain history that explains why one fish is $20 and another $400. **B**
- **02 Cost.** Finished it. Actionable: I can build a real budget, roughly $700 to $900 all in plus $20 to $50 a month, and I know the group multiplier. **B+**
- **03 Handling/social.** Finished it. Actionable: group size, tankmate shortlist, lights off after introduction, do not feed day one. Honest about the drip acclimation split. **A-**
- **04 Health.** Finished it. Actionable: named symptoms, named drugs, the 90°F ich note. **B+**
- **05 Tank setup.** Finished it. Best page in the set. Actionable: water change cadence, substrate call, filter tradeoff, lighting. **A-**
- **06 Feeding.** Finished it. Actionable: 2 to 3 small meals, pellet sizing, beef heart as rotation not staple. **A-**
- **07 Enrichment.** Finished it. Actionable: six or more, tall tank, quiet wall, background on rear glass, feed at fixed times. **A-**

## 2. Hub and encyclopedia

The encyclopedia earns its place: origin water, adult size, and the breeding history are nowhere else. The hub mostly restates the deep dives in shorter form, and it is where the numbers slip.

Conflicts:
- Group size. Hub: "a group of 6 or more". Cost guide: "a group of 5 to 6 or more". Enrichment: "**Six or more**". Small, but the hub's own checklist says "group of 6+" while the article a reader buys from says 5 is acceptable.
- Tank price. Hub: "55-75 gallon tall tank (group of 6) | $290 | $450". Cost guide: "55-gallon tank (or 75-gallon-plus for a larger group) | $290 - $310". A $140 gap at the top.
- Water changes. Hub checklist: "Frequent large water changes (25-50% every 2-3 days in serious setups)". Tank setup: "Weekly water changes in the 25 to 50% range are commonly recommended, and some serious keepers change water every 2 to 3 days." The hub reads as if 2 to 3 days is the baseline.
- Fry feeding, hub against itself. Fun fact: mucus "for their first one to two weeks of life". Diet section: "for about a month total, most intensively through the first two weeks and weaning through weeks three and four."
- Filtration. Hub checklist: "Strong but gentle canister filtration", flat. Tank setup: "At least one discus-specialty source pushes back on canister filters specifically."
- Neon tetras. Hub FAQ answers flat. Handling calls it "a genuine point of disagreement". I prefer the article.

## 3. The set as a whole

I could set up, buy, feed and largely keep them. Still missing: where to buy and how to pick a healthy fish in the shop; what to do with RO water once you have it (remineralize, blend, buffer); a stocking rule past "55 is a floor"; grow-out care for juveniles; anything practical about breeding beyond the mucus fact.

Unsignposted handoffs: the hub's hiding FAQ raises tank placement, which the enrichment guide answers. The health guide says "a new, uncycled tank is the single most common setup mistake" and never points at the cycling guide sitting in its own sidebar. The feeding guide says "consider quarantine" with no route to the hospital tank guide.

## 4. Overlap and conflict across the deep dives

Read twice or more: the 82 to 86°F range, the group number, tall over long, water quality and stress as the root cause, the mucus fun fact (four times), and small frequent meals. Real conflict is thin. Tank setup: "A tall tank such as a 55 gallon is a starting point for a small group" appears in enrichment as "a proper group of six adults needs considerably more", while the cost guide prices a 55 as the working setup. Enrichment also recommends "A large canister filter" as settled, where tank setup treats canisters as "a genuine point of disagreement". Enrichment's opener, "most of the difficulty is water chemistry", sits oddly against its own FAQ answer that most problems are water problems and the rest of the set's stress emphasis.

## 5. One link per page

- Hub: "then consider whether the tank's placement or a recent disturbance is the cause." Link to the enrichment guide.
- Encyclopedia: "discus are genuinely social and do best in a group." Link to the social/handling guide.
- Cost: "What actually drives the discus budget is filtration sized well above the tank's actual volume and a water-change routine more demanding than most freshwater community fish need." Link to the tank setup guide.
- Handling: "Water quality and stress management also do most of the work preventing illness." Link to the health issues guide.
- Health: "a new, uncycled tank is the single most common setup mistake behind unexplained fish loss." Link to the cycling guide.
- Tank setup: "Budget the electricity and water use behind this routine into your ongoing costs." Link to the cost guide.
- Feeding: "then consider quarantine and a closer look at the fish itself if water quality checks out fine." Link to the hospital tank guide.
- Enrichment: "A large canister filter and a serious water change routine, plus a water test kit used regularly." Link to the tank setup guide.

## 6. Trust

Doubts: the hub contradicting itself on fry feeding, the tank price ceiling mismatch, and "Discus are one of the pricier community fish" opening a piece that spends the rest of its length arguing they are not really a community fish. Also the health guide's sidebar offers a pH/GH/KH guide summarized around goldfish and coldwater tanks, which is not the page a discus keeper needs.

Most convincing sentence: "A discus that hangs dark-colored at the surface in a corner is the one to act on, and the answer is usually more fish or more tank rather than removing the aggressor."

## 7. Set grade: B+

The articles are specific, honest about disagreement, and genuinely usable; the hub they hang off is looser than they are and the pages barely link to each other.

First two changes: reconcile one canonical number set (group size, tank price, water change cadence, fry weaning) across hub and articles; add the in-body cross links above, starting with health to cycling and tank setup to cost.

## Not covered anywhere

- How to choose a seller and judge a healthy discus at the point of purchase.
- What to do with RO/DI output: remineralizing, blending with tap, and holding KH steady.
- Stocking density for adults past "55 gallons is a floor", in gallons or footprint per fish.
- Grow-out care for juveniles, which is where most first-time discus are bought.
- Practical breeding: triggering a spawn, what a pair needs, and what to do with fry after weaning.

## Swordtail (2026-09-15, batch N)

Raw reader output, one Opus agent, 8-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, feeding, enrichment).

Reviewed all eight pages in /home/user/beastlyfactss/.reader/swordtail/.

## 1. Page by page

- **00 hub.** Finished it. Act on: checklist, temp range, weekly 20-25% water changes. Grade B-, it is the only page whose numbers fight the deep dives.
- **01 encyclopedia.** Finished it. Act on: little, but the fast-stream origin explains the flow advice later. Grade B.
- **02 cost.** Finished it. Act on: $3-6 a fish, $115-190 setup but budget past it, $20-35 a month. Grade B+.
- **03 handling.** Finished it. Act on: float 15-20 min, drip 45-60 min, net not pour, quarantine 2-4 weeks, sexing. Grade B+.
- **04 health.** Finished it. Act on: what ich, fin rot, dropsy and swim bladder look like, and treating ratio as a health issue. Grade A-.
- **05 tank setup.** Finished it. Act on: 29-30 gal long, 72-79F, pH 7.0-8.4, 12-30 dGH, 4-5x turnover, sealed lid. Grade A.
- **06 feeding.** Finished it, noticed it was damaged. Act on: 2-minute rule, veg a few times a week, fry 3-5x daily. Grade C+.
- **07 enrichment.** Finished it fastest. Act on: never exactly two males, one male plus four or more females, spread food, aim outflow along the length. Grade A.

## 2. Hub and encyclopedia

The encyclopedia earns its place: range, wild habitat, the Heckel/Gordon/Kallman stock-centre history, none of it repeated elsewhere. The hub mostly earns its place on one item, the water-change schedule, which appears nowhere else in the set. Otherwise it is a condensed replay, and it contradicts the deep dives three times.

- Size. Hub: "A 20-gallon tank is a reasonable minimum for a small group." Setup: "29 to 30 gallons the better real-world target for most keepers." The hub checklist says "20+ gallon tank" and never mentions 29.
- Temperature. Hub: "Keep water between 70 and 82 degrees F." Setup: "roughly 64 to 82°F, with 72 to 79°F cited most often." Neither low end matches.
- Ratio. Hub: "keep one male with two or three females." Health: "one male to three or four females." Enrichment: "one male and four or more females is a clean, easy setup."
- Cost. Hub tank: "$70 | $150." Cost guide: "20-gallon long tank | $35 - $60." Hub filter $30-50 against the cost guide's $45-60; hub food $35-60 against $25-50; hub's combined conditioner and test kit $20-30 against the cost guide's $35-55 for the same two lines.
- The hub never states the enrichment guide's single most important rule, that two males is the problem number.

## 3. The set as a whole

I could buy, set up, cycle, feed and stock this tank with confidence. Missing or unanswered: which tankmates are safe, how many fish a 29 actually holds beyond "a trio", and what to do with fry once they arrive (breeder box, when to separate, when they are sellable).

Questions raised on one page whose answer sits silently on another:
- Cost says a 29-30 gallon is the real target but never points at the setup page that argues it.
- Health says "Uneaten food is a common and avoidable driver of the water-quality decline" and stops, with the 2-minute rule sitting unlinked in the feeding guide.
- Setup raises fry-eating and female refuge; the breeding mechanics behind both are in handling, unlinked.
- Feeding blames appetite loss on ratio; the ratio rule is in enrichment, unlinked.

## 4. Overlap and conflict across the deep dives

Read three or four times: jumping and lids, fry eating, hybridising with platies, planting for female refuge, the more-active-than-a-molly line. Conflicts:

- Ratio, health: "one male to three or four females" against enrichment: "Two to three females per male minimum."
- Filtration, setup: "filter flow at 4 to 5 times the tank's volume per hour" against enrichment: "A hang-on-back filter rated above the tank volume handles both." The second reads as far less filter than the first.
- Tank floor, enrichment: "A 20 gallon long is a sensible floor rather than a generous provision" against setup's title and body pushing 29-30.
- Handling recommends "a males-only group for a colorful, breeding-free display" without the two-males warning enrichment builds a whole page around.

## 5. One link per page

- 00 hub: none needed, the sidebar carries them.
- 01 encyclopedia: "In the wild, swordtails favor faster-flowing streams than platies and are correspondingly more energetic, active swimmers in the aquarium." Point to the tank setup guide.
- 02 cost: "the comfortable starting point costs somewhat more than the table above, since a 29 or 30-gallon tank itself runs higher" to the tank setup guide.
- 03 handling: "keep a males-only group for a colorful, breeding-free display instead" to the enrichment guide.
- 04 health: "Uneaten food is a common and avoidable driver of the water-quality decline behind most of these conditions." to the feeding guide.
- 05 setup: "swordtail parents don't look after fry, and adults will eat them given the chance" to the handling guide.
- 06 feeding: "an imbalanced male-to-female ratio matters more than it does for most other community fish" to the enrichment guide.
- 07 enrichment: "A 20 gallon long is a sensible floor rather than a generous provision." to the tank setup guide.

## 6. Trust

The feeding guide's "Why Swordtails Stop Eating" list runs "1. Stress" then jumps straight to "5. Illness", and its own FAQ cites water quality, cold and a gravid female as causes that are nowhere in the body. Three items were dropped and nobody read the page afterwards. That plus the hub's numbers made me check everything else twice. The sentence that convinced me a keeper wrote this: "With two, every contest is between the same pair and the loser has nowhere to be."

## 7. Set grade: B+

Strong, sourced, unusually honest about where evidence runs out, dragged down by a hub that disagrees with its own deep dives and one broken article. First two changes: rewrite the hub from the deep dives so size, temperature, ratio and every cost line match, and restore the three missing causes in the feeding guide's list.

## Not covered anywhere

- Tankmates: no page in either list says which species can share a swordtail tank.
- Stocking numbers: nothing tells me how many swordtails a 29 gallon actually holds beyond "a small trio".
- Fry rearing: the roundup covers that they breed, but nothing covers raising fry, when to separate them, or when they can be rehomed.
- Judging a healthy fish at the shop before you buy it.

## Zebra Danio (2026-09-15, batch N)

Raw reader output, one Opus agent, 8-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, feeding, enrichment).

## 1. Page by page

**00 Hub.** Finished it. Actionable: full shopping checklist, 5-6 fish, 64-77F, weekly 25-30% changes. Numbers clash with the deep dives it points at. **C+**

**01 Encyclopedia.** Finished it. Actionable: adult size, 3.5 year lifespan, egg-scatterer. Natural history only, and it earns that. **B+**

**02 Cost.** Finished it. Actionable: $2/fish, $12-30 school, $100-180 first setup, GloFish 4x premium. **A-**

**03 Handling.** Finished it. Actionable: the corner-net trap-and-guide steps, float-and-drip acclimation timings, 2-4 week quarantine. **A**

**04 Health.** Finished it. Actionable: what ich, fin rot, mycobacteriosis look like, and gloves for open cuts. **A**

**05 Tank setup.** Finished it. Actionable: 90x30cm footprint, pH 6.0-8.0, 4-5x turnover, check every lid seam. **A**

**06 Feeding.** Finished it. Actionable: twice daily, two to three minutes, and how not to trigger a spawn. **A-**

**07 Enrichment.** Finished it. Actionable: plant sides and back, open middle, long tank, eight or more, directional flow. Only page with no source URLs. **A-**

## 2. Hub and encyclopedia

The encyclopedia earns its place: origin, wild diet, Hamilton 1822, Streisinger. Nothing else carries it.

The hub does not. It restates the deep dives at lower resolution, and where it adds a number it disagrees with them.

Costs, hub vs cost guide: "10-20+ gallon long tank | $50 | $100" vs "10-20 gallon tank | $18 - $60". Filter "$20 | $35" vs "$8 - $15". Food "$30 | $50" vs "$15 - $25". Test kit "$15 | $20" vs "a one-time purchase of $25 to $40".

Feeding: hub "Feed small amounts once or twice daily" vs feeding guide "at least twice a day, noting that multiple light feedings let fish make better use of the food."

Group size: hub "groups of at least five or six" vs enrichment "Eight or more, and more where the tank supports it."

The weekly water change schedule exists only on the hub. No deep dive gives a number.

## 3. The set as a whole

I could buy, set up, stock, feed and spot most trouble. Missing: a tankmate list beyond "not bettas"; sexing; what to do if an accidental spawn happens; any maintenance routine outside the hub's one line; the fact that ich treatment needs a heater the setup guide told me to skip.

Questions answered elsewhere without being told: the health guide's ich temperature raise is bounded by the setup guide's 64-77F, unlinked. The setup guide's "a patch of fine-leaved plants gives any eggs a place to fall out of reach" is the feeding guide's breeding wrinkle, unlinked. Handling's quarantine tank with "its own sponge filter and heater" is a cost item the cost guide never budgets.

## 4. Overlap and conflict across deep dives

Read three or four times: the 20-30cm jump height and lid warning, 64-77F, the 6 vs 8-10 school, egg-scattering with no parental care.

Planting, feeding vs enrichment: "keep the tank free of fine-leaved plants or marble substrate the eggs could survive in" against "Substrate and live planting instead of bare glass, plus driftwood for structure and surface." Both are defensible, neither acknowledges the other.

School size, handling vs enrichment: "Aquarium Co-Op names 5 to 6 as a workable minimum" against "Do not keep three or four" plus "Eight or more."

Tank, setup vs enrichment: "A 10-gallon tank is workable for the bare minimum school of 6" against "Do not buy a cube for a horizontal sprinter." A standard 10 is closer to a cube than to 90x30cm.

## 5. One link per page

- Hub: "A fully cycled tank matters just as much for this species as any other, despite their reputation for toughness." to How to Cycle a Fish Tank.
- Encyclopedia: "danios are egg-scatterers: a spawning pair releases eggs into open water or fine-leaved plants" to the feeding guide.
- Cost: "but a completely uncycled tank still damages their gills the same way it would any other fish." to How to Cycle a Fish Tank.
- Handling: "A simple 10 to 20-gallon bare-bottom tank with its own sponge filter and heater works well for this" to Fish Quarantine and Treatment.
- Health: "A gradual temperature increase toward the top of this species' comfort range, combined with a commercial ich medication and daily partial water changes, generally clears it." to the tank setup guide, which is where the range and the optional heater live.
- Tank setup: "Ammonia and nitrite should still read zero before stocking regardless." to How to Cycle a Fish Tank.
- Feeding: "keep the tank free of fine-leaved plants or marble substrate the eggs could survive in" to the enrichment guide.
- Enrichment: "Do not use them as living cycling equipment." to How to Cycle a Fish Tank.

## 6. Trust

Doubts: the hub's cost table reads like it was written separately from the cost guide. The enrichment guide names Lee et al. in the Journal of Fish Biology with no year and no link while every other page links out. A jump-height figure sourced to housedpet.com. And telling me to raise the temperature for ich on a tank the site says needs no heater.

The sentence that convinced me: "Danios in a short tank do laps, and the behavior that gets described as energetic is a fish running out of tank."

## 7. Set grade: B+

Strong, sourced, genuinely species-specific deep dives sitting under a hub that undercuts them on numbers.

First two changes: rewrite the hub from the deep dives so costs, feeding frequency, group size and tank size match, and give water changes and tankmates a real home in a deep dive instead of one hub line.

## Not covered anywhere

- Tankmate compatibility beyond "avoid bettas and slow long-finned fish."
- Telling males from females, which the breeding warnings assume.
- What to actually do with an accidental spawn or fry.
- A maintenance routine: the weekly 25-30% change appears only on the hub, and no class guide covers water changes.
- How to raise temperature for ich treatment in the unheated tank the setup guide recommends.

## Ghost Shrimp (2026-09-15, batch N)

Raw reader output, one Opus agent, 8-page extract (hub, encyclopedia, cost,
handling, health issues, tank setup, feeding, enrichment).

Review: the ghost shrimp set (8 pages, read in order)

**1. Page by page**

- 00 Care guide hub. Finished it. Actionable: the checklist is the only buy-list in the set I could take to a store. But its numbers are its own, not the deep dives'. B minus.
- 01 Encyclopedia. Finished it, short and worth it for the origin and the 2012/2013 name change. Actionable: almost nothing, and it doesn't pretend otherwise. B.
- 02 Cost guide. Finished it. Actionable: buy from a pet-stock tank, not the feeder bin, and budget $40 to $130. Its cost tables contradict the hub's line for line. B.
- 03 Handling/acclimation. Finished it. Most actionable page in the set: net not hands, 1 to 2 drops per second, double the volume over 1 to 2 hours, quarantine 2 to 4 weeks. A minus.
- 04 Health issues. Finished it. Actionable: copper under 0.03 mg/L, ammonia and nitrite at zero before stocking, recognise pre-molt stillness, four prevention habits. A minus.
- 05 Tank setup. Finished it. Actionable: sponge filter for the intake reason, dark substrate, cover for molters, size both directions. A minus.
- 06 Feeding. Finished it. Actionable: small amount every day or two, remove leftovers after a few hours, don't buy them to fix algae. B plus.
- 07 Enrichment. Finished it but trusted it least. Actionable: the priority order list. Different voice, thinnest sourcing, and it drops quarantine entirely. C plus.

**2. Hub and encyclopedia**

The encyclopedia earns its place: origin, wild lifespan, and the taxonomy history appear nowhere else. The hub mostly restates the deep dives in shorter form, and its numbers disagree with them.

- Heater. Hub checklist: "Heater if room runs below 65°F". Setup: "72 to 82°F is the range most care sources converge on... A heater is only strictly necessary if your room regularly runs below that comfortable range." Seven degrees apart on whether I buy a heater.
- pH. Hub: "Keep pH between 6.5 and 8.0." Setup: "Aim for pH 7 to 8".
- Hardness. Hub: "tolerates a wide hardness range, 5-15 dGH". Setup: "general hardness of 3 to 15 dGH".
- Cost. Every line differs. Hub tank "$25 | $50" vs cost guide "5-10 gallon tank | $18 - $30". Hub heater "$15 | $25" vs "$18 - $30". Hub food "$8 | $18" vs "Sinking wafer food | $16 - $35".
- Taxonomy. Hub: "Ghost shrimp belong to the genus Palaemonetes in the family Palaemonidae". Encyclopedia: "Palaemonetes, a genus that no longer exists... making the correct name Palaemon paludosus." The encyclopedia's own Scientific field still says "Palaemonetes spp."

**3. The set as a whole**

I could set up, buy, feed and keep them. I know the tank, filter, substrate, cover, acclimation, quarantine, diet, and the copper rule. What I still can't do: know how many shrimp to buy, know what water change to do and how often ("Small regular changes" is all I get), know whether the quarantine tank needs to be cycled first, or tell a male from a berried female after the hub told me I could watch her eggs develop.

Questions answered on another page without the text saying so:
- Enrichment says "Acclimate slowly, by drip if you can" and never gives a rate. The handling page has the whole procedure.
- Cost's "no practical veterinary care... husbandry and prevention do all the work" is the exact setup for the health page's four habits, unlinked.
- Setup's fun fact raises the brackish larvae problem; feeding and the hub answer parts of it separately.

**4. Overlap and conflict across the deep dives**

Read the feeder-tank origin four times (cost, handling, health, enrichment) with the same two quotes, and the molting/predation warning five times. Conflicts:

- Activity. Hub: "they wander openly in search of food, which makes them easy and satisfying to actually watch". Feeding: "this species is largely nocturnal, staying hidden among vegetation by day". That matters, because health lists "staying hidden far more than normal" as a stress sign.
- Protein. Hub: "supplemented with blanched vegetables and the occasional protein source." Feeding, under Foods to Avoid: "Excess protein-heavy feeding".
- Calcium. Health: "a diet that includes some calcium content" is prevention. Feeding: "No dedicated supplement is required... it includes enough calcium to support molting." Neither names a food.
- Breeding. Hub: "true Palaemonetes paludosus can complete their entire life cycle in freshwater". Setup: the researchers concluded the species "can complete its life cycle in brackish water" and "the odds improve with a trace of salinity."
- Quarantine. Health calls it one of four habits; enrichment's seven-item priority order omits it.

**5. One link per page**

- 00 Hub: "stable, dechlorinated water and a cycled tank still matter" → Aquarium Filtration.
- 01 Encyclopedia: "Unlike the cherry shrimp and Amano shrimp they're commonly sold beside" → Three Shrimp, Three Different Jobs.
- 02 Cost: "There's essentially no practical veterinary care available for a freshwater invertebrate this small, so husbandry and prevention do all the work here." → the health issues page.
- 03 Handling: "The standard precaution is a 2 to 4 week quarantine in a separate, simple setup" → Aquarium Filtration, because "simple setup" is doing a lot of work.
- 04 Health: "inadequate calcium and general hardness leave a new shell unable to harden correctly" → Freshwater pH, GH, and KH.
- 05 Setup: "A heater is only strictly necessary if your room regularly runs below that comfortable range" → Cooling an Aquarium Without a Chiller. The page names an 82°F ceiling and never says what to do above it.
- 06 Feeding: a freshly molted shrimp is "soft, defenseless" for "several hours or even days" → the moulting guide, which only the enrichment page points to.
- 07 Enrichment: "Acclimate slowly, by drip if you can, since sudden parameter changes finish off animals that are already marginal." → the handling page. Biggest gap in the set.

**6. Trust**

Doubts: two different cost tables under one roof; the hub asserting a genus the encyclopedia says was sunk in 2013; bold-by-day versus nocturnal; and enrichment's "Nothing on the species" when another page in the set cites a 1990 Journal of Crustacean Biology study on P. paludosus. Enrichment also reads like a different writer (fortnight, moulting, no sources of its own).

Most convincing: "a shrimp about to molt typically goes still and stops eating for an hour or more beforehand, normal behavior worth recognizing rather than mistaking for illness." Runner-up, "Leave discarded shells in the tank, since the shrimp eat them and recover the minerals."

**7. Set grade: B**

Genuinely useful and unusually honest about the feeder trade, undercut by a hub that contradicts the pages it introduces. First two changes: derive the hub's costs, pH, dGH and heater threshold from the deep dives instead of restating them, and settle nocturnal versus bold-by-day in the same pass; then add the two operational numbers missing everywhere, how many shrimp to start with and what water change to run.

**Not covered anywhere**

- How many shrimp to buy for a 5 or 10 gallon tank. No page and no shared guide gives a stocking number.
- Water change frequency and volume. The filtration guide's summary covers filter maintenance, not changes.
- Whether the quarantine tank has to be cycled before shrimp go in.
- How to sex them or spot a berried female, after the hub sells watching eggs develop as the appeal.
- What to actually do when you see the white ring of death. Called "frequently fatal" with no next step.
- A named calcium source for molting, given the health and feeding pages disagree on whether one is needed.

## Giant Millipede (2026-09-15, batch O)

Raw output, one Opus reader agent, extractor set of seven pages.

## 1. Page by page

**00 Hub.** Finished it, it is short and scannable; I can act on the 4 to 6 inch substrate depth, 72 to 80F, 70 to 80% humidity, and the checklist. No purchase price, no permit, and it contradicts two deep dives. **C**

**01 Encyclopedia.** Finished it for one paragraph: the USDA plant pest permit and the 2014 SFO seizure. Actionable only as "check the law before you buy." **B**

**02 Cost guide.** Finished it. I can budget $75 to $150 for the animal and roughly the same for setup, and I now know why. Does not say where to buy or how a permit is obtained. **B+**

**03 Handling.** Finished it. Act on: handle low over something soft, never grab from above, stop at the curl, leave a buried animal alone for weeks. Named sources. **A-**

**04 Health.** Finished it. Symptom to cause to fix, and the "never use mite spray" line is the kind of thing that saves an animal. **A-**

**05 Tank setup.** Finished it. Act on: 4 to 6 inches of topsoil and coco fibre, oak or beech litter, no pine or cedar, tight lid, no isopods. **B**

**06 Enrichment.** Finished it, and it is the best written of the set, but it is largely the setup guide again. Honest that there is no research. **B**

## 2. Hub and encyclopedia

The encyclopedia earns its place: the import permit history is nowhere else except a compressed version in the cost guide. The hub does not. It is the setup and health guides shortened, minus the two things I most needed on the landing page (what the animal costs, and that it is federally regulated).

Direct conflicts:

- Group housing. Hub: "A 20-gallon long terrarium (or equivalent) comfortably houses 2 to 3 adult... millipedes." Setup: "Keep one per enclosure unless you're intentionally planning to breed." Enrichment: "They are not predatory or territorial and are commonly kept in groups."
- Enclosure size. Hub: "20-gallon+ enclosure". Setup: "A minimum of 10 to 15 gallons for one adult."
- Tank cost. Hub table: "20-gallon+ enclosure | $40 | $80". Cost guide: "A 20 gallon long tank, or a 40-gallon breeder tank or tub | $35 - $60".
- Substrate cost. Hub: "$20 | $40". Cost guide: "$17 - $21+".
- Mite treatment. Hub: "mite infestations (treat with substrate replacement and drying one section of the enclosure)". Health: "Gently wipe affected areas with a damp cotton swab if needed."
- The hub is about a species named Giant African Millipede but silently folds in "North American giant millipedes (Narceus americanus)".

## 3. The set as a whole

I could build the enclosure, feed it, handle it and recognise the four things likeliest to kill it. I could not confidently buy one. Still missing: how to obtain the plant pest permit and what it costs, where to buy, how to judge a healthy animal, and whether a new arrival needs quarantine. Also missing: how often to replace or top up substrate (the hub budgets for it annually, nobody says when), how often to offer produce, and whether a standing water dish is permanent kit.

Questions answered on another page without being told:
- Hub: "millipedes can live 5 to 10 years" and no price. The cost guide explains both the price and why.
- Health: "provide a shallow water dish" with no humidity numbers. Setup has them.
- Setup: "Add a calcium source" with no consequence stated. Health explains the soft exoskeleton.
- Enrichment: "a mite bloom... is a genuine nuisance to clear." Health tells you how.
- Handling: "a molt may take several weeks." Health explains what a failed one looks like.

## 4. Overlap and conflict across the deep dives

Read three times: deep substrate is food and habitat, never pine or cedar, cuttlebone, do not dig up a buried millipede. Setup and enrichment are near duplicates on substrate and humidity.

Conflicts:
- Calcium source. Health: "add a genuine calcium source like cuttlebone or crushed oyster shell... not chalk." Enrichment and hub: "Crushed eggshell works as well." One of those is not vetted.
- Wild lifespan. Encyclopedia: "Wild Lifespan: 5-10 years." Cost: "5 to 7 years in the wild, and up to 10 years in captivity."
- Moisture. Setup: "misting once or twice daily." Enrichment: "Consistently damp and never wet, with the substrate itself doing most of the buffering."

## 5. One link per page

- **Hub:** "A 20-gallon long terrarium (or equivalent) comfortably houses 2 to 3 adult..." should point to the enclosure setup guide, which disagrees.
- **Encyclopedia:** "requires a federal permit to import them" should point to the cost guide.
- **Cost:** "Deep organic substrate, genuinely the biggest recurring cost for this species" should point to the enclosure setup guide.
- **Handling:** "resist the urge to dig it up to check on it" should point to the health issues guide.
- **Health:** "raise humidity, moisten the substrate more deeply, and provide a shallow water dish" should point to the enclosure setup guide.
- **Setup:** "Add a calcium source, cuttlebone or crushed oyster shell, directly into the enclosure" should point to the health issues guide.
- **Enrichment:** "a mite bloom in a millipede enclosure is a genuine nuisance to clear" should point to the health issues guide.

## 6. Trust

Doubts: the hub quietly swapping in a North American species; two different wild lifespans; eggshell approved on two pages and implicitly excluded on a third; the enrichment guide quoting tarantula percentages at a millipede and admitting they do not transfer; a passed-along claim that the secretions "contain cyanide" sitting next to benzoquinones everywhere else.

Most convincing sentence, from the enrichment guide: "a millipede fed mostly on fruit rather than decaying wood is being fed the interesting part instead of the nutritious part."

## 7. Set grade: B-

Strong deep dives undercut by a hub that contradicts them and a buying story that never lands.

First two changes: settle group housing and minimum enclosure size to one number across hub, setup and enrichment; put the purchase price, the permit, and a how-to-buy and quarantine section on the hub.

## Not covered anywhere

- How to obtain the USDA plant pest permit, what it costs, how long it takes.
- Where to buy, and how to tell a healthy animal from a dehydrated one at purchase.
- Whether a new arrival needs quarantine, and for how long.
- How often to replace or top up substrate and leaf litter.
- How often to offer fresh produce, and how much.
- Whether a shallow water dish is permanent kit or only a dehydration fix.
- Adult size, never stated outside the encyclopedia and absent from the hub.
- Sexing, and what happens if a group breeds.

## Jumping Spider (2026-09-15, batch O)

Raw output, one Opus reader agent, extractor set of eight pages.

## 1. Page by page

- **00 Hub.** Finished it. Actionable: enclosure shape, room temperature, prey types, checklist. But the numbers are the loosest in the set. **C**
- **01 Encyclopedia.** Finished it, fast. Nothing to act on, but the history (Koch 1846, the post 2017 Lucas the Spider surge, now in chain stores) is the only place the set tells me why this animal is suddenly everywhere. **B**
- **02 Cost.** Finished it, suspiciously. Actionable: spider price by age and sex, "vet care: effectively none." The setup table contradicts itself. **C-**
- **03 Handling.** Finished it. Actionable: let it walk on, never grab, work low over something soft. Half the page re-explains visual hunting I had already read twice. **C+**
- **04 Health.** Finished it. Actionable: curled legs and lethargy mean dehydration, thermostat or no heat, no antidote for pesticide exposure. Gives no humidity number on the page where humidity is the whole thesis. **B**
- **05 Tank setup.** Finished it. The only page I could actually build from: size, 72 to 82F, 50 to 60%, substrate depth, lighting, opening placement. **A-**
- **06 Feeding.** Finished it and reread it. Stage schedule, prey list, never-feed list, abdomen as the gauge, and it says outright where sources disagree and that the fasting numbers are hobbyist reported. **A**
- **07 Enrichment.** Finished it. Actionable priority order, and it names a real captivity effect instead of flattering me. **B+**

## 2. Hub and encyclopedia

The encyclopedia earns its place: origin, wild diet, wild lifespan, and the trade history appear nowhere else. The hub mostly restates the deep dives at lower resolution, and where it restates them it disagrees:

- Enclosure: hub "around 5x5x8 inches works well for one adult" vs setup "A minimum of about 4 by 4 by 7 inches... closer to 8 to 10 inches tall gives more genuine climbing room."
- Enclosure price: hub "Small tall enclosure (5x5x8 in or similar) | $15 | $30" vs cost "Small vertical, arboreal enclosure | $60 - $70."
- Food budget: hub "Live feeder insects... | $20 | $40" per year vs cost "Roughly $5 to $15 a Month," which is $60 to $180.
- Lifespan: hub "1 to 2 years is typical" vs cost "A realistic overall range to expect is 1 to 3 years."
- Temperature: hub "Room temperature of 70 to 80 degrees F" vs setup "72 to 82F."
- Misting: hub "Light misting every day or two" vs setup "Mist one corner of the enclosure every 2 to 3 days."
- Feeding: hub "Offer prey 2 to 3 times a week and remove anything uneaten after a day" vs feeding "pull uneaten live prey within a few hours to overnight."

## 3. The set as a whole

Yes, I could set one up, feed it, and keep it alive, and I would use the setup and feeding pages to do it and ignore the hub's numbers. Still missing: where to buy and how to judge a healthy spider, how to sex one (the cost page makes sex financially load bearing and never says how to tell), what to do on arrival day, routine enclosure cleaning with a live spider in it, what to do if it escapes into the room, how to make water dechlorinated, what a "damp cotton ball setup" physically is, and what to do if a female lays an egg sac.

Questions answered elsewhere without being told: health says "mist the enclosure regularly" and the actual target sits on setup; handling warns about "an unmonitored heat mat" and the thermostat rule sits on setup and health; the hub's checklist lists "a small water source" that only the feeding page ever describes as a shallow dish; the cost page's fruit fly culture is explained only on feeding.

## 4. Overlap and conflict across the deep dives

Read twice or more: jumping spiders hunt by sight rather than webbing (hub, encyclopedia, handling, enrichment, feeding), fragility and the fatal fall (handling, enrichment), height over floor space (setup, enrichment), never oversized prey (feeding, enrichment).

Conflicts:
- Misting cadence: setup "every 2 to 3 days" vs feeding "light daily misting of the enclosure walls."
- Prey size: hub "sized no larger than the spider's body" vs feeding "roughly no bigger than the abdomen."
- Cost internal math: "Small vertical, arboreal enclosure | $60 - $70" inside "Total upfront setup | $50 - $120," with four more items supposedly included.
- Handling body lists two first-timer mistakes, its own FAQ says "Using an unmonitored heat mat and letting the enclosure run too dry are the other two."

## 5. One link per page

- Hub: none needed, the sidebar carries them. Fix the numbers instead.
- Encyclopedia: "It is now stocked by chain pet stores across the United States and Canada" to the cost guide.
- Cost: "the large majority of health issues in this species trace back to the enclosure environment rather than anything requiring professional treatment" to the health issues guide.
- Handling: "Using an unmonitored heat mat, a genuine and common preventable cause of death." to the health issues guide.
- Health: "It's manageable at home, mist the enclosure regularly" to the enclosure setup guide, which has the 50 to 60% target.
- Setup: "aim to leave drinkable droplets rather than soaking everything" to the health issues guide, since dehydration is the leading killer.
- Feeding: "Refusal paired with a shrunken, raisin-like abdomen, lethargy, poor jumping ability, or curled-inward legs points to a real problem" to the health issues guide.
- Enrichment: "And do not offer prey larger than the spider's body." to the feeding guide.

## 6. Trust

Doubts: the cost table that cannot add up, the hub's enclosure price at a third of the cost page's, the handling FAQ promising three mistakes after a body that listed two, and the "female kept at the Bronx Zoo, lived just under 5 years" fun fact, which is exactly the kind of claim I would want a source for.

The sentence that convinced me a keeper wrote this: "Jumping spiders build their silk retreat near the top of the enclosure, so it's worth positioning your access opening lower or to the side." Runner up, from feeding: "never mist the spider's abdomen directly, water can seep between the book-lung plates and cause suffocation."

## 7. Set grade: B-

Two or three genuinely good pages sitting behind a hub that contradicts them on almost every number a buyer would write down.

First two changes: make the deep dives the single source of truth and regenerate the hub's cost, size, temperature, misting, feeding, and lifespan figures from them. Then add a "bringing one home" page covering sourcing, sexing, arrival, and escape recovery, and put the 50 to 60% humidity figure on the health page.

## Not covered anywhere

- Where to buy a jumping spider and how to judge a healthy one.
- How to tell a male from a female, despite price and lifespan hanging on it.
- Arrival and acclimation day.
- Routine enclosure cleaning and old web removal with the spider in residence.
- What to do if the spider escapes into the room.
- How to dechlorinate water.
- What a "damp cotton ball setup" actually is.
- What to do with an egg sac, including an infertile one from an unmated female.

Covered by the shared class guides, so not listed above: molting normal versus failed, pesticide exposure prevention, rehousing method, and travel or power outage planning.

## Madagascar Hissing Cockroach (2026-09-15, batch O)

Raw output, one Opus reader agent, extractor set of nine pages.

## 1. Page by page

- **00 Hub.** Finished it. Act on: the checklist and the cost tables. But it is the loosest page here on numbers. **C+**
- **01 Encyclopedia.** Finished it. Act on: adult size, lifespan, and the warning that dealers mix in two lookalike species. **B+**
- **02 Cost.** Finished it. Act on: $3 nymph, $24 pair, $65 colony of 25, and skip the heat mat unless breeding. **B**
- **03 Handling.** Finished it twice. Act on: lift around the thorax, never pull against the grip, wash hands, read the graded hiss. **A**
- **04 Health.** Finished it. Act on: 60 to 70% humidity, never handle a fresh molt, thermostat any heat mat. **B+**
- **05 Tank setup.** Finished it. Act on: the whole page. Sizes, temps, substrate depth, petroleum jelly band. **A-**
- **06 Feeding.** Finished it. Act on: dry dog food staple, produce a few times a week, sponge water, the sick-roach symptom list. **A**
- **07 Enrichment.** Finished it. Act on: colony not single, leaf litter and rotting wood, vertical clearance for molting. **A-**
- **08 Legal.** Finished it. Act on: check my state, call if I am in NM, NJ or ID. **A**

## 2. Hub and encyclopedia

The encyclopedia earns it. Nothing else gives me the horns, the lookalike-species warning, or the naming history. The hub mostly repeats the deep dives while disagreeing with them:

- Humidity. Hub: "Moderate humidity of 50 to 70% is appropriate." Setup and health: "60 to 70%."
- Temperature. Hub: "Temperatures of 75 to 90 degrees F are ideal." Setup: "75 to 85°F for general pet-keeping... Breeding specifically gets triggered around 85 to 95°F." The hub's ideal range runs into the breeding trigger it never mentions.
- Climbing. Hub: "exceptional climbers on rough surfaces... Smooth glass or smooth plastic sides at least 10 to 12 inches tall will prevent escape," with jelly as "a secondary escape-proofing method some keepers use." Setup: "capable of scaling smooth glass with ease... A secure lid alone isn't enough." The hub's own FAQ then admits "they can scale glass, most plastics, and any rough surface," contradicting its own Housing section.
- Cost. Hub's setup table totals $70 to $130 before buying an animal. Cost guide: "Estimated setup total | $40 - $100," animal included.
- Safety. Hub: "They are completely harmless to humans." Handling: "Their sharp leg spines... can scratch or draw a small amount of blood," plus "they can carry Salmonella." For a page recommending them to children, the hub should not be the softer of the two.
- Maturity. Hub: "nymphs reaching sexual maturity in 5 to 7 months." Feeding: "about six molts over roughly five months to reach adulthood."

## 3. Could I keep one?

Yes. Between them I can buy, house, heat, humidify, feed, escape-proof and check the law. Gaps: no cleaning or substrate-change schedule beyond "deeper clean periodically"; no ventilation spec; nothing on quarantining new arrivals; nothing on what to do with hundreds of surplus nymphs; nothing on recapturing an escapee.

Unsignposted answers already in the set:
- Four pages tell me to keep same-sex or males-only groups. None says how to sex one. The encyclopedia does: "Males display prominent pronotal horns."
- Feeding's "elevated humidity during this window" to molt is answered numerically only in setup and health.
- The tank setup's Arizona and Florida shipping note is properly answered only in the legal guide.
- Handling's escape-barrier bullet never says how to build one. Setup does.

## 4. Overlap and conflict across the deep dives

Read twice: the pet-versus-feeder paragraph, nearly verbatim in cost and handling; petroleum jelly in setup, handling and enrichment; the pale post-molt window in health, feeding and enrichment.

Conflicts:
- Minimum group. Setup: "A 5-gallon tank works as a minimum for a single animal or a small group." Enrichment: "Do not keep a single animal, since the species is gregarious."
- Food removal. Health: "remove any uneaten fresh food within 24 hours." Feeding: "remove anything uneaten within a day or two."
- Misting. Setup: "daily misting." Hub: "allow the substrate to dry slightly between mistings."
- Protein. Hub: "Supplement with a protein source: dry dog or cat kibble... provides the amino acids needed." Feeding: "Skip diets that are too protein-heavy, hissers are naturally protein-sparing."
- Calcium. Hub: "Provide cuttlebone or crushed eggshell pieces constantly." The feeding guide, which is the page on food, never mentions calcium at all.
- Shipping. Setup: "this species can't be legally shipped to Arizona or Florida." The legal guide lists Florida as permit-required and never names Arizona.

## 5. One link per page

- **Hub:** "Petroleum jelly applied near the top edge... is a secondary escape-proofing method some keepers use." Link to the tank setup guide, which calls it primary.
- **Encyclopedia:** "dealers routinely mix it with two Madagascan lookalikes." Link to the cost guide, where I choose a seller.
- **Cost:** "The optional heat mat and thermostat only earns its keep if you're breeding." Link to the health guide's overheating section.
- **Handling:** "Not applying an escape barrier around the enclosure." Link to tank setup.
- **Health:** "maintain 60 to 70% humidity through regular misting" (it says "the tank setup guide" without linking). Link to tank setup.
- **Tank setup:** "this species can't be legally shipped to Arizona or Florida." Link to the legal guide.
- **Feeding:** "They need elevated humidity during this window to shed successfully." Link to tank setup for the number.
- **Enrichment:** "Do not keep a single animal." Link to tank setup, which permits one.
- **Legal:** none needed.

## 6. Trust

Doubts: the hub reads like it was generated from a different source set than the guides it links to, and the calcium and Salmonella mismatches are the kind that make me check everything. The Arizona claim appears once, sourced nowhere.

Most convincing sentence, from the handling guide: "A roach that hisses once when you lift the lid is noting you. One that hisses in a run and bolts for the substrate is telling you the approach was too fast or too much."

## 7. Set grade: B+

The deep dives are unusually honest about disagreement and unusually specific; the hub drags the average down by contradicting them. First two changes: rewrite the hub from the deep dives so humidity, temperature, enclosure size, setup cost and safety match, and add sexing plus a cleaning schedule to the setup guide.

## Not covered anywhere

- Cleaning and full substrate-change frequency: no page or shared guide gives an interval.
- Quarantine or acclimation of newly bought roaches.
- What to do with surplus nymphs once the colony booms.
- How to recapture an escaped roach in a room.
- Ventilation spec: everything says "adequate airflow," nothing says what that is.
- Sexing method: only inferable from the encyclopedia's horns line, never stated as a how-to.

## Stick Insect (2026-09-15, batch O)

Raw output, one Opus reader agent, extractor set of seven pages.

## 1. Page by page

- **00 Care guide hub.** Finished it, it is the densest page here. Act on: enclosure ratio, host plant list, replace cuttings every 2 to 3 days, daily misting, egg incubation timing. Grade B-, because most of it is the deep dives rewritten, and several numbers do not match them.
- **01 Encyclopedia.** Finished it, it is short and it is the only page with real natural history. Nothing to act on, which is fine. Grade B.
- **02 Cost guide.** Finished it. Act on: the APHIS permit problem, a few dollars per nymph, no vet costs. The setup table is broken. Grade C+.
- **03 Handling guide.** Finished it twice. Act on: body grip not leg, the three stress signals, which species pinch, group housing. Named sources. Grade A-.
- **04 Health issues.** Finished it, it is 900 words of prevention with no numbers in it. Act on: cover standing water, weekly substrate change, airflow. Grade C+.
- **05 Enclosure setup.** Finished it, this is the page I would build from. Act on: 8x8x12 inches, 63 to 77F, 60 to 80% for tropicals, coir or paper towel, no UVB, 12 hour light cycle. Grade B+.
- **06 Enrichment.** Finished it. Act on: the priority list, block the vase opening with cotton wool or foil, thin the group if limbs go missing. Grade A-.

## 2. Hub and encyclopedia

The encyclopedia earns its place: Carausius morosus history, the Lord Howe Island recovery, 3,000 species. None of it repeats the guides. The hub does not. It restates all five deep dives at lower resolution, and then disagrees with them.

- Legality. Hub: "They are legal, widely available, cheap, hardy." Cost guide: "keeping non-native stick insect species, which includes the common Indian and Vietnamese stick insects widely sold in the hobby, technically requires a USDA APHIS permit." That is the one contradiction that changes whether I buy.
- Enclosure. Hub: "A 30x30x45 cm or larger mesh enclosure suits most adult species." Setup: "a roughly 8 by 8 by 12 inch tall, mesh-topped enclosure," which is 20x20x30 cm.
- Temperature. Hub: "68 to 80 degrees F." Setup: "roughly 63 to 77F."
- Humidity. Hub: "around 50 to 70% for most temperate species, higher (70 to 80%) for tropical species." Setup: "tropical types want 60 to 80%."
- Enclosure cost. Hub: mesh enclosure "$25" to "$50." Cost guide: "Tall, mesh-topped enclosure | $60 - $70."
- Group housing. Hub checklist: "House species separately (most are docile but competitive for food)." Handling guide: "Indian stick insects specifically can be housed in groups without issue."
- The hub disagrees with itself on molt length: "over 20 to 60 minutes" in Enrichment, "30 minutes to over an hour" in Health.

## 3. The set as a whole

I could buy one, build the enclosure, feed it and keep it alive. What is missing: what to do with the eggs I will definitely get, when the cost guide says releasing them is prohibited; where to legally buy one given that same section; whether nymphs walk through standard mesh; whether to intervene in a molt that is going wrong; how to keep bramble coming in winter; and any cleaning routine beyond substrate.

Questions answered on another page without being told:
- Health guide leans on "correct enclosure height" four times and never gives the number. It is 3x body length, on Setup and Enrichment.
- Cost guide lists "Substrate" as a line item and never says what kind. Coir, peat or paper towel, on Setup.
- Handling lists "an enclosure too short for a proper molt" as a first-timer mistake with no dimension attached.
- Hub calls them legal. The permit section is on the cost guide.
- Cost guide specifies a mesh top and never says why. Because they molt hanging from it, on Setup and Enrichment.

## 4. Overlap and conflict across the deep dives

Read three times: autotomy and adult legs not regrowing (Handling, Health, Enrichment), the 3x height molting rule (Setup, Enrichment, Health by implication), drowning in the cutting vase (Handling, Health, Enrichment), bramble and species-specific host plants (all four).

Conflicts:
- Handling: "Gently grasp the body or thorax if you need to move a stick insect." Hub: "Always let the insect walk voluntarily onto an open palm." Those are different instructions.
- Misting. Setup: "daily light misting." Enrichment: "once or twice a day." Hub: "once daily."
- Leg regrowth. Hub: "juvenile limbs regrow at the next molt." Handling: "only partially across molts in younger animals."
- Lifespan. Hub: "typically 6 to 18 months." Cost: "A small number of larger species can reach 2 to 3 years."

## 5. One link per page

- **Hub.** "They are legal, widely available, cheap, hardy" should point to the cost guide's legal section.
- **Encyclopedia.** None needed.
- **Cost.** "Tall, mesh-topped enclosure" should point to the enclosure setup guide.
- **Handling.** "Providing an enclosure too short for a proper molt" should point to the enclosure setup guide.
- **Health.** "prevention through correct enclosure height and misting" should point to the enclosure setup guide.
- **Setup.** "A single Indian stick insect does fine in a roughly 8 by 8 by 12 inch tall, mesh-topped enclosure" should point to the enrichment guide, which says the same rule scales with the species.
- **Enrichment.** "Many stick insects reproduce parthenogenetically, so a single female bought as a pet will quietly produce fertile eggs" should point to the cost guide, where releasing eggs turns out to be illegal.

## 6. Trust

Doubts: the cost table, where a $60 to $70 enclosure sits inside a $30 to $100 total and every other row says "Included in setup total." The hub calling the animal legal on the same site that says the permit is unobtainable. Two molt durations on one page. A hub checklist that says house them separately next to an article titled "Why You Can Keep More Than One." The enrichment page citing a tarantula study for a leaf-eater, though it says so itself, which helps.

The sentence that convinced me a keeper wrote this: "Overcrowding shows as damaged legs and antennae, and stick insects knock pieces off each other during molts in a crowded enclosure."

## 7. Set grade

**C+.** The individual articles are honest and specific, but the hub contradicts them on legality, size, temperature, humidity and cost, and the health page is written without a single number.

First two changes:
1. Fix the legality contradiction, and say plainly on the hub what the cost guide says.
2. Put the height, temperature, humidity and cost numbers in one place and make every other page quote that, starting with the health guide.

## Not covered anywhere

- What to do with unwanted eggs, when releasing them is prohibited.
- Where to legally obtain a stick insect in the US after the permit section.
- Whether nymphs escape through standard mesh, and what aperture to buy.
- Whether to intervene in a molt that is visibly failing.
- Keeping a host plant supply through winter.
- Quarantine or acclimation for a newly arrived insect.
- Enclosure cleaning beyond substrate replacement, including frass and disinfection.
- Species identification and sexing, which every host plant and humidity answer depends on.

Batch O note, not the reader's: the old hub's molt duration (20 to 60 minutes in one section, 30 minutes to over an hour in another) was retired rather than moved, since no deep dive states one. How long a molt takes, and whether to intervene in one going wrong, are both gaps on this species.

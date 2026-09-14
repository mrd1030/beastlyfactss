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

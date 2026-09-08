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

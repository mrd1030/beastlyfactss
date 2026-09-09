# Batch A and C blind reader review

Ten incognito reader agents, one per species, 2026-09-09. Each read only the
plain-text extract of its own species set (`node scripts/reader-extract.mjs
<species> <dir>`): hub, encyclopedia, and every deep dive including the legal
and vs pages where one exists. No git, no web, no repo access outside its
folder, no knowledge of who wrote the pages, no ability to edit anything.
Tables were rendered to pipe-delimited text inside the extract, so the readers
could check cost tables and buy lists against the prose.

Shorter than the batch D and E pass: 700 to 900 words per reader instead of
2000 to 2500, and the prompt asks for arithmetic and internal contradictions
explicitly instead of waiting for readers to find them unprompted. Otherwise
the same blind shape.

Batch A ran on Fable until Fable ran out of usage credits partway through;
hamster and all five of batch C ran on Sonnet. Betta fish, crested gecko,
guinea pig and Russian tortoise are Fable reports, the other six are Sonnet.

Nothing in the repo was changed as a result of this review. This file is the
record only.

## Grades

### Batch A

| Species | Set grade | Weakest page | Strongest page |
|---|---|---|---|
| Hamster | B+ | Cost (B), vs guinea pig (B) | Handling, health, enrichment (A) |
| Russian tortoise | B | Handling (C) | Feeding (A) |
| Betta fish | B- | Cost (C) | Tank setup, water parameters (A-) |
| Crested gecko | B- | Encyclopedia (C), tank setup (C+) | Feeding, humidity (A-) |
| Guinea pig | B- | Cost, encyclopedia (C) | Health (A-) |

### Batch C

| Species | Set grade | Weakest page | Strongest page |
|---|---|---|---|
| Corn snake | B+ | Cost (B) | Tank setup, feeding, legal (A) |
| Boa constrictor | B+ | Cost, tank setup, hub (B) | Feeding, legal (A) |
| African grey | B+ | Encyclopedia, vs cockatoo (B+) | Enrichment, handling, cost, health (A) |
| Chinchilla | B+ | Cost (C+) | Hub, housing, legal (A) |
| Ferret | B+ | Cost (B), adrenal (B) | Health, cage setup, feeding, enrichment (A) |

**Batch A as a whole: B-.** Three B-, one B, one B+.
**Batch C as a whole: B+.** Five B+, no set below it.

Batch C is a full step better than batch A and reads better than either D or E,
which both landed at B-. Batch C's own species check graded it B-. Blind
readers put it a step higher than its check did, which is the opposite of what
happened to batch D, where the check said A- and readers said B-. Batch A is
the weakest of the four batches reviewed this way.

## Patterns across all ten sets

**1. The cost guide is the weakest page in nine of ten sets, and the number
does not sum in all ten.** Not one cost guide survived a reader with a
calculator. Every shape from the D and E pass appears again, plus a new one:

- Table sums under the stated total: hamster (six line items reach $110 to
  $225 under a claim of "most first-time setups land around $150 to $350
  total"), betta (seven rows, six of them carrying no price at all).
- Table sums over the stated total: guinea pig (the pair breakdown of "$30 to
  $50 in pellets, $20 to $50 in fresh vegetables, and $40 to $60 in timothy
  hay each month" is $90 to $160 under a table reading "$60 - $135"),
  chinchilla ($345 to $895 in the table under prose saying "most complete
  setups land between $455 and $1,225").
- The heading matches none of its own totals: crested gecko ("Upfront Setup:
  Roughly $300 to $600" over a table giving $335 to $530, $400 to $740, and
  $450 to $940).
- Annual against monthly: guinea pig (a $400 annual floor under a $60 monthly
  floor, which is $720), ferret ("$350 to $630 a year, close to the $50 to $60
  a month most owners report," which is $600 to $720).
- Multi-year total against annual: corn snake ("$200 to $500 a year" and "$250
  to $600" setup, then "Over a decade, total cost... commonly lands somewhere
  between $800 and $2,000," repeated in its own FAQ so it is baked in twice),
  Russian tortoise ("$365 to $715 a year" over forty years printed as "roughly
  $15,000 to $30,000" when the top is $28,600).
- Rows that disagree with the prose one line above them: Russian tortoise
  ("Open-top tortoise table alone $125 - $200" under prose saying $125 to $250).

**2. The buy list and the cost table describe different purchases. Seven of
ten.** Betta (ten items on the buy list, seven rows in the table, and no air
pump, thermometer, or gravel vacuum anywhere despite three pages assuming all
three), crested gecko (calcium and CGD on the buy list and in no table; the
tank guide's humid hide, feeding ledge and water dish in no buy list; the
health guide's gram scale in neither), guinea pig (nail clippers, styptic
powder, hay rack, water bottle, chew toys and supplement priced nowhere, and
bedding omitted from the monthly breakdown that then blames annual spend on
"bedding quality"), hamster (water bottle, sand bath and chews named in a
sentence instead of a row, which is exactly the gap between the table and the
stated total), boa (nine buy-list items, seven table rows, neither tongs nor
frozen rodents priced), African grey (four line items, two of them reading
"Included in setup budget" with no number, and the UVB light, sleep cage and
misting bottle missing entirely), Russian tortoise (timer and 6500K lamp in the
cost table and enclosure guide but not on the buy list).

**3. The hub flattens a hedge its own source page insists on. Eight of ten.**
This is the batch A and C version of "the hub eats the deep dive." The hubs
here mostly route well, and several readers said so, but the router step drops
the uncertainty when it copies:

- Corn snake hub: "Hatchlings under about 3 months eat every 5 to 7 days,
  working down to every 14 to 21 days for a fully mature adult," where the
  feeding guide says "That's a real disagreement, especially for hatchlings,
  roughly a 2 to 3x difference in frequency."
- Betta hub: says its numbers are "each taken from the article that explains
  it" and gives "2 to 4 small, high-protein betta pellets, once or twice a
  day," which is the tank setup FAQ's line, not the feeding guide's "anywhere
  from 2 to 3 up to 6 to 7 depending on the pellet size and brand."
- African grey hub: "can learn over 1,000 words" three lines above its own FAQ
  giving the documented 50 objects, 7 colors, 5 shapes. The handling guide
  explicitly warns that any larger claim came from an owner, not a study.
- Guinea pig hub: "roughly 20 to 25 mg a day for a typical adult" next to "10
  to 25 mg/kg," and hay at "roughly 80% of the diet" where feeding says "70 to
  80%."
- Russian tortoise hub: "Forty-three states place no rule on it at all" where
  the legal table gives 42, and hexamita called "the kidney infection specific
  to this genus" where the health guide says "Russian tortoises and other
  Testudo species are notably affected."
- Chinchilla hub and encyclopedia: "Adult Size: 9-15 inches (23-38 cm); 1-2
  lbs" against the vs hamster page's "1-1.5 lbs" and "14 to 19 inches."
- Crested gecko encyclopedia: "the widely quoted 10-20 years is a captive
  range" against the cost guide's "Crested geckos live 15 to 20 years in
  captivity."
- Ferret encyclopedia: "Wild Lifespan: 5-10 years" untagged, next to a cost
  guide saying a modern pet ferret averages "5 to 9 years." The reader noticed
  that this means the pet now lives no longer than its wild ancestor, and that
  no page says so out loud.

**4. The vs pages are the least disciplined page type in the corpus. Five of
five.** Every set that carries a comparison page had that page flatten
something the rest of the set states carefully:

- Corn snake vs hognose prints "Humidity needs | 40-60%" with no caveat, two
  pages after the tank setup guide called the 40 to 60 versus 65 to 75 split a
  real disagreement.
- Hamster vs guinea pig: "A hamster typically lives 2 to 3 years" against the
  cost guide's cited "median age at death of just 1.75 years."
- African grey vs cockatoo: Alex "developed a working vocabulary past 150
  words," the exact embellishment the handling guide warns about.
- Chinchilla vs hamster gives a weight and length no other page in the set
  gives.
- Chinchilla vs guinea pig states the heat threshold as a flat number where
  the rest of the set uses the 150 rule as a formula.

This lines up with the open item in READMEFIRST: the vs pages were left out of
the linking pass and never got a numbers pass either.

**5. Articles that contradict themselves inside one page. Seven of ten.**
Crested gecko handling ("roughly 8 to 15 grams" for routine handling, then
"under about 10 grams are too fragile for routine handling") and its humidity
("Aim for 60 to 80%" then "PetMD's care sheet puts the ideal band at 70 to
80%" in the next sentence). Russian tortoise enclosure ("4 ft by 2 ft by 2 ft"
minimum, then "a foot of wall is plenty" two paragraphs later) and its legal
guide, whose takeaway ("You can keep a Russian tortoise in every state in the
country. New Jersey wants a permit first... Everywhere else the state has
nothing to say") deletes the Colorado ban and three of the four permit states
its own table lists. Boa tank setup, which states the sizing rule "length plus
width should equal or exceed the snake's length" and then recommends
dimensions that fail it for the 13-foot females the same set says exist, and
claims "roughly 10 square feet of floor space at minimum" when its own low-end
6 by 2 is 12. Chinchilla feeding, calling apple a "reasonably well-corroborated
safe treat" and, two paragraphs later, one of the "genuinely disputed items."
Hamster, where the hub and tank setup call 6 inches of bedding "a genuine
welfare requirement" and the enrichment guide, citing the actual study, puts
the floor at "40 cm," which is 15.75 inches. Betta enrichment, titled "Three
Studies" and citing five. Betta water parameters, whose recheck trigger
("After any water change over 30%") never fires under its own standard change
of "25 to 30 percent."

**6. Cross-references that point at nothing. Three of ten.** Chinchilla
handling: "our health issues guide covers what a fracture and other injuries
look like," and that guide has no fracture content at all. Guinea pig scurvy
guide links to "our guinea pig tank setup guide" for an animal the housing
page says never to keep in a tank. Russian tortoise hub routes its Diet bullet
to the enclosure guide instead of the feeding guide.

**7. Handling guides that do not teach handling.** Russian tortoise (C, "It
never says how to pick the animal up") and betta (B-). Batch D and E found the
same on green iguana, hognose and guppy. That is five species across four
batches, so it is a series-level problem, not a species one.

**8. Source narration is quieter here than in D and E, but not gone.** Crested
gecko tank setup carries "(some sources: 72-75°F to be safe)" inside a table
cell, on the one number the page calls non-negotiable, and the reader named
that as the single thing that cost the set trust. Guinea pig has "sources say"
with no source named and a feeding FAQ that shrugs "One source says avoid it
outright for healthy adults, another allows it as an occasional treat." Betta
enrichment names a journal but no author or year. Against that, three readers
praised pages that name a disagreement and then decide (corn snake feeding,
boa enrichment saying outright there is no boa-specific research, ferret
feeding on the fat percentage split). The distinction that holds: naming a
disagreement and giving the reader a number is trusted, naming a disagreement
instead of giving a number is not.

**9. The encyclopedia is not the weak page it was in D and E.** Six of ten D
and E encyclopedia entries graded C+ or below. Here the entries run A- (boa,
chinchilla), B+ (hamster, corn snake, African grey, ferret), B (betta), B-
(Russian tortoise) and C (crested gecko, guinea pig). Eight of ten readers
named the history paragraph specifically as the thing that earns the page its
place: the 1930 single female for hamster, 1953 to 1961 for the amelanistic
corn snake morph, 1927 for chinchilla, 1933 influenza for ferret, the Cayos
Cochinos die-off for boa, Cantor and Regan for betta. The history pass worked.
The two C grades are the two entries where the fields contradict the animal:
guinea pig lists "Wild Diet" and "Wild Lifespan" directly under "Habitat:
Fully domesticated; no wild population," and crested gecko's lifespan field
argues with the cost guide.

## Findings that need research, not an edit

1. **Russian tortoise legal counts.** The opener says one state bans it and
   four require a permit, the table lists four permit states, the hub says 43
   states have no rule where the table gives 42, and the "four attach a
   condition" count includes New York City, which is not a state. The legal
   guide needs a recount against its own table before any prose is rewritten.
2. **Hamster bedding depth.** Six inches versus the Hauzenberger study's 40 cm
   is not a rounding difference, and the site currently states both as the
   welfare floor on different pages. One of them is the site's position.
3. **African grey vocabulary.** "Over 1,000 words" on the hub is unsupported by
   anything else in the set, and the set's own handling guide is the thing that
   debunks it.
4. **Guinea pig alfalfa.** Three pages give three different lists of who should
   eat it, and the feeding guide puts seniors, the age most prone to stones, on
   the hay the health guide blames for calcium load. Same for the greens: the
   health guide warns that "kale, spinach, and parsley, add to the calcium load
   that ends up in the urine" while the feeding guide lists all three in the
   daily rotation.
5. **Guinea pig vitamin C arithmetic.** The scurvy page cites PetMD at "10
   mg/kg for an adult," weighs a boar at 1.1 kg on the same page, and then
   "does the arithmetic for you: roughly 20 to 25 mg a day."
6. **Boa enclosure sizing rule.** Either the rule or the recommended dimensions
   is wrong for a 13-foot female. The set states both.

## What is missing across the sets

The gaps readers named that the sidebar does not cover:

- Betta: a thermometer, an air pump for the sponge filter, a gravel vacuum the
  tank guide tells you to use, any dose for aquarium salt or the ich
  temperature raise, how to pick a healthy fish in the store.
- Crested gecko: how to mix CGD beyond "ketchup-like," a healthy adult weight,
  sexing (never mentioned, though the feeding guide discusses gravid females).
- Guinea pig: a weekly weigh-in, sexing and the mis-sexed pet-store pair, how
  to introduce two animals, bedding change frequency, how many C&C grids make
  10.5 square feet.
- Hamster: one page that reconciles 6 inches with 40 cm, and a priced day-one
  shopping list.
- Russian tortoise: how to lift and hold one, how to do the weekly soak, a
  starting feeding schedule for a hatchling versus an adult.
- Corn snake: hatchling housing, sized properly, in the tank guide rather than
  one passing line in the cost guide.
- Boa: shedding, sexing, growth tracking and quarantine are all pushed to
  shared class guides and summarized nowhere on the boa's own pages.
- African grey: finding a breeder, vetting CITES paperwork, finding an avian
  vet before you need one, and what a foraging rotation looks like week to week.
- Chinchilla: acclimating a new animal, sexing, and a plain answer to "one or
  two."
- Ferret: introducing two ferrets, bathing and nail trims, a first 48 hours
  checklist, and any portion guidance beyond "free-feed."

## The sentence each reader trusted most

- Betta: "Reaching for the heater because that is what worked on the white
  spots last time is the single worst thing you can do to a betta with
  columnaris."
- Crested gecko: "Don't introduce insects before a gecko is reliably eating
  CGD, geckos can learn to hold out for insects and refuse the complete diet."
- Guinea pig: "a single hide in a shared space tends to become something one
  animal guards rather than something everyone can use."
- Hamster: "Mixing a burrow-holding material with a looser one helps tunnels
  stay up instead of collapsing, which is what separates a hamster that digs
  from a hamster that redecorates."
- Russian tortoise: "this is an unusually active tortoise that walks the whole
  enclosure every day and rearranges anything light enough to move."
- Corn snake: "A corn snake in a large bare enclosure will use two hides and
  nothing else, which looks like proof it wanted a small enclosure and is
  actually proof it wanted cover."
- Boa constrictor: "If it holds on, cold water on its face or a little
  mouthwash gets it to release."
- African grey: "That figure comes from the owner rather than a controlled
  study, though, so it's worth treating with more caution than the
  peer-reviewed Alex research."
- Chinchilla: "Many chinchilla owners furnish their cage from the ferret aisle
  rather than the small-mammal one."
- Ferret: "A ferret that has just had a proper play session sleeps hard. One
  that has not is awake, still, and doing nothing, which looks like calm and is
  not."

---

# The ten reports, in full

## Batch A

### Betta fish (Fable reader)

**Page by page**

- 00 Hub: finished it. Actionable: the first-week numbers and the buy list. Grade B+.
- 01 Encyclopedia: finished it in a minute. Nothing to act on, but the Cantor and Regan history is the only text in the set that reads like a person looked something up. Grade B.
- 02 Cost: finished it, annoyed. Actionable: the $100 to $300 total. The table under it has one number in seven rows. Grade C.
- 03 Handling: finished it. Actionable: net or cup only, float the bag 15 minutes, leave store water in the bag. Grade B-.
- 04 Health: finished it. Actionable: the ich versus columnaris temperature direction. Nothing has a dose or a target number. Grade B-.
- 05 Tank setup: finished it. Actionable: all of it. Grade A-.
- 06 Feeding: finished it. Actionable: eye-sized portion, fast day, the never-feed list. The schedule section hedges instead of deciding. Grade B.
- 07 Enrichment: finished it. Actionable: plant densely, skip the mirror. Grade B.
- 08 vs Goldfish: skimmed the back half. For someone already buying a betta it adds nothing. Grade C+.
- 09 Water parameters: finished it. Actionable: the table and the testing schedule. Grade A-.

**Hub and encyclopedia**

The hub earns its place: it is the only page that puts every number in one column, and the emergency card is the best thing in the set. The encyclopedia does not repeat the deep dives because it says nothing about care at all, which is fine.

Two things on the hub do not match what it points to. The hub says the feeding numbers are "each taken from the article that explains it" and gives "2 to 4 small, high-protein betta pellets, once or twice a day." The feeding guide it links says "Sources don't fully agree here" and "anywhere from 2 to 3 up to 6 to 7 depending on the pellet size and brand," with "up to three smaller meals" also on the table. The hub's line is word for word the tank setup FAQ, not the feeding guide. Second, the hub says "stable 76 to 82°F, 78 to 80°F the sweet spot," while the water parameters table lists "Temperature | 78-80°F" as the whole target range with no mention of 76 or 82.

**The set as a whole**

I could set up the tank, cycle it (via the shared guide), buy the fish, feed it, and know when to call a vet. Still missing:

- A thermometer. Every page assumes a stable temperature; no page tells me to buy the thing that reads it.
- An air pump. A sponge filter runs on one. The cost FAQ mentions "the electricity a heater and air pump draw," but the buy list, the tank setup page, and the cost table never mention the pump.
- A gravel vacuum. Tank setup says "Do a 25 to 30% water change weekly using a gravel vacuum." It is not on the buy list.
- Any dose. "Aquarium salt" for fin rot, "gradually raising the tank temperature" for ich: no amount, no target.
- How to pick a healthy fish in the store, and what to do with it during the 4 to 6 week cycle.

**Overlap and conflict**

I read the 5-gallon minimum six times, the 76 to 82°F band five times, and "aquatic vets are the exception" three times (cost, health, hub FAQ, nearly verbatim). Conflicts:

- Feeding body: "whatever gets cleared within 1 to 2 minutes." Feeding FAQ: "whatever it clears in about a minute."
- Feeding body: "up to three smaller meals spaced 6 to 8 hours apart." Tank setup FAQ: "once or twice a day."
- Enrichment says tannins bring the tank "closer to the blackwater conditions the species comes from." The encyclopedia says "Shallow rice paddies, floodplains, and slow-moving streams," no blackwater.

**Things that do not add up**

- Title "Betta Enrichment: Three Studies" and "Three separate studies matter here," then the same section adds "Research indicates bettas of either sex can be group-housed" and "a separate study found the timing of isolation." That is five.
- Water parameters testing schedule: "After any water change over 30%: a quick recheck." The same page's FAQ sets the standard change at "25 to 30 percent." The trigger never fires under its own advice.
- The hub's buy list has ten items; the cost table has seven and carries no price for six of them. "5-gallon-plus tank | Biggest line item, varies by size and brand" is not a cost table row.
- Columnaris evidence: "none at 9.4°C, 4 to 20 percent at 12.2°C, and up to 100 percent in some species at 20.5°C." That top figure is 69°F, below the betta's floor of 76°F. The cited data stops before the range the advice is about.
- Tank setup: "including pH,, see our" has a doubled comma.

**Trust**

Doubts: the enrichment page names one journal and no author or year for any of its studies; the goldfish page's "recognize their owners for months" has no source; "the most-studied fish in the freshwater hobby" is asserted, not shown; the cost page promises a table and delivers adjectives.

The sentence that convinced me a keeper wrote it: "Reaching for the heater because that is what worked on the white spots last time is the single worst thing you can do to a betta with columnaris." That is a mistake you only warn about after watching someone make it.

**Grade for the set: B-**

Strong hub and two strong deep dives, undercut by repeated filler, an empty cost table, and a buy list that would leave me without a pump, a vacuum, or a thermometer.

First change, hub buy list. Replace "Gentle sponge filter" with "Gentle sponge filter, plus the air pump and airline that run it," and add two lines: "Aquarium thermometer (stick-on or submersible)" and "Gravel vacuum for weekly water changes."

Second change, cost table. Replace "5-gallon-plus tank | Biggest line item, varies by size and brand" and the five rows below it with real ranges that sum to the stated total, for example "5-gallon-plus tank with lid | $40 - $120", "Heater, 15 to 25 W adjustable | $15 - $35", "Sponge filter and air pump | $15 - $30", "Substrate, plants, hides | $20 - $60", "Conditioner | $5 - $10", "Liquid test kit | $25 - $40." A cost guide that will not commit to a number for a heater is not a cost guide.

### Crested gecko (Fable reader)

**1. Page by page**

- 00 Hub: finished it. Actionable numbers, an emergency card, a buy list. B.
- 01 Encyclopedia: finished it in a minute. Nothing to act on; the founder history is the only thing not on the hub. C.
- 02 Cost: finished. Two tables you can sum. Heading and prose fight the table. B minus.
- 03 Handling: finished. Treadmilling, the six put-it-back signs, the tail rule. B plus.
- 04 Health: finished. The soft jaw and weekly gram scale are the takeaways. B.
- 05 Tank setup: finished, but the temperature table stopped me cold. C plus.
- 06 Feeding: finished. Schedule, portions, nine reasons for refusal, red flags. A minus.
- 07 Enrichment: finished. Short, practical, no numbers to argue with. B.
- 08 Humidity: finished. The 24-hour table is the single most useful thing in the set. A minus.

**2. Hub and encyclopedia**

The hub earns its place. It is a router with numbers attached, and every number links to the article that owns it. The encyclopedia does not: its overview repeats the hub's fun fact, and its one distinctive line undercuts a deep dive. Encyclopedia: "the widely quoted 10-20 years is a captive range." Cost guide and hub: "Crested geckos live 15 to 20 years in captivity."

The hub also disagrees with itself on the cold floor. "65 to 72°F is the normal night low. Sustained below 72°F, day or night, causes lethargy and appetite loss." If 65 is a normal night, sustained 66 cannot be a problem. The tank guide's cool area of "70 - 75°F" sits inside the same contradiction.

The hub's buy list says "Low-wattage heat bulb and fixture, on a thermostat." The cost guide it links to says "Many keepers skip the thermostat if their home stays naturally within range." The tank guide says "A heat bulb alone drifts." Three pages, two answers.

**3. The set as a whole**

Yes, I could set one up, buy the gear, feed it, and know when to call a vet. What is missing: how to mix CGD beyond "ketchup-like," how to spot a dehydrated gecko before it stops eating (the humidity guide has signs, the feeding guide has different ones, nothing joins them), what a healthy adult weight looks like since the scale is treated as the key tool, and any guidance on picking a healthy animal from a breeder versus a pet store. Sexing is never mentioned, which matters when the feeding guide talks about gravid females laying "clutches roughly every 4 to 6 weeks."

**4. Overlap and conflict across the deep dives**

Read twice: tail loss (handling, tank, hub FAQ), the 85°F ceiling (tank, feeding, hub), the 60 to 80% swing (tank, humidity, hub FAQ, tank FAQ), and the 2 to 3 week starvation window (feeding body, feeding FAQ, hub, hub FAQ).

Disagreements:
- Insect size. Feeding: "no larger than the width of the gecko's head." Health: "no larger than the space between your gecko's eyes." Those are different sizes.
- Weighing. Health: "Weigh your gecko weekly." Feeding: "Weighing the gecko monthly, or every few days during a suspected seasonal slowdown."
- Handling weight, inside one article. "roughly 8 to 15 grams" for regular handling, then "Geckos under about 10 grams are too fragile for routine handling."
- Humidity target. Body: "Aim for 60 to 80%." Next sentence: "PetMD's care sheet puts the ideal band at 70 to 80%." Pick one.
- Impaction timing. "no bowel movement for a week or more" then "If symptoms persist beyond 24 to 48 hours, see a vet." Which clock am I on?

**5. Things a reader can check**

- Cost heading: "Upfront Setup: Roughly $300 to $600." The table underneath gives "$335 - $530" for equipment, "$400 - $740" with the vet, and $450 to $940 if you add the gecko in the top row. The heading matches none of them.
- Same table: the row "All in, before the gecko" sits in a table whose first row is "The gecko itself." Either the gecko is in or it is out.
- Cost prose: "Skipping the thermostat... is how a setup lands at the low end." The low end of $335 still contains the $30 thermostat. Skip it and the floor is $305.
- Buy list versus cost table: the buy list has "a calcium supplement" and "Commercial crested gecko diet (CGD)"; neither is in the upfront table. The tank guide's furnishings need "A humid hide lined with damp sphagnum moss," "A feeding ledge," and "A shallow water dish"; none are in the buy list. The health guide's "gram scale" is in neither.
- Feeding: "Rotate 2 to 3 flavors or brands" then "Pangea and Repashy are the two most established brands." Fine on its own, but the safe-treat list calls "berries" safe and then flags raspberries as "a real point of disagreement."

**6. Trust**

What made me doubt them: the tank guide's basking row, "82 - 85°F at the surface, right up against the hard maximum below (some sources: 72-75°F to be safe)." A ten degree hedge in a table cell, from unnamed sources, on the one number the page calls non-negotiable. Also "watermelon, is called out as having unusually high acceptance" with no one doing the calling, and the cost fun fact's "believed extinct for over a century" against the encyclopedia's "much of the twentieth century."

The sentence that convinced me a keeper wrote it: "Don't introduce insects before a gecko is reliably eating CGD, geckos can learn to hold out for insects and refuse the complete diet." That is a mistake you only warn about after watching it happen.

**7. Grade and first two changes**

Set: B minus. The husbandry is sound and the pages route well, but the numbers were written by pages that did not read each other.

First change, tank setup table. Replace "82 - 85°F at the surface, right up against the hard maximum below (some sources: 72-75°F to be safe)" with "78 - 82°F at the highest perch. Measure at the surface; if the top reads above 82°F, lower the wattage or raise the lamp."

Second change, hub power-outage line. Replace "65 to 72°F is the normal night low. Sustained below 72°F, day or night, causes lethargy and appetite loss, add heat, move the animal, or call the sitter." with "A night dip to 65 to 70°F is normal. If the enclosure sits below 68°F for more than a day, or below 65°F at all, add heat, move the animal, or call the sitter." Then bring the tank guide's "at or below about 72°F for extended periods" and its "70 - 75°F" cool area into line with whichever number wins.

### Guinea pig (Fable reader)

**1. Page by page**

- 00 Hub: finished it. The first-week list is the most useful screen in the set, and the emergency card matches the health guide word for word. B+.
- 01 Encyclopedia: finished it in a minute. Nothing to act on. C.
- 02 Cost: finished it, but the tables fight the prose under them. C.
- 03 Handling: finished it. Pickup technique, stay low, four stress signs. B.
- 04 Health: finished it. Bladder stones and ovarian cysts are the best writing in the set; GI stasis gets two sentences and a link. A-.
- 05 Housing and Diet: finished it. Cage size, temperature, bedding, daily amounts. B+.
- 06 Feeding: finished it. Safe and toxic lists and the stop-eating clock are actionable, but it never gives a portion size of its own. B.
- 07 Enrichment: finished it. Multiple hides, scatter the hay, supervised floor time. B.
- 08 Scurvy: finished it. Stage table and pepper advice are good; the arithmetic is not. B-.

**2. Hub and encyclopedia**

The hub earns its place: a router with numbers, each naming the page it came from. The encyclopedia does not. Its "Wild Diet" and "Wild Lifespan" fields sit directly under "Habitat: Fully domesticated; no wild population", and nothing on it changes what I would buy or do. Two things the hub carries over unchecked: "roughly 20 to 25 mg a day for a typical adult" next to "10 to 25 mg/kg" (see section 5), and hay at "roughly 80% of the diet" where the feeding guide says "70 to 80%". Enclosure, temperature, budget, and the stop-eating clock all match their sources.

**3. The set as a whole**

Mostly yes. I could size a C&C cage, bed it, keep the room in range, feed unlimited hay, 1/8 cup of pellets, a cup of greens with a quarter bell pepper, pick one up correctly, and name the six signs that mean a vet today. Missing: a weekly weigh-in on a kitchen scale, the cheapest early-illness check there is, appears nowhere; sexing and the risk of a mis-sexed pet-store "pair"; how to introduce two animals; how often bedding gets changed; how many C&C grids make 10.5 square feet; a lifetime cost against the 4 to 8 year lifespan.

**4. Overlap and conflict across the deep dives**

Read three times: the Merck and PetMD vitamin C paragraph (housing, scurvy, hub), don't put vitamin C in the water (housing, feeding, scurvy), and the fruit bat gene fun fact (health and scurvy, nearly word for word). Conflicts:

- Alfalfa. Housing: "appropriate only for very young guinea pigs." Health: "only appropriate for young, pregnant, or nursing guinea pigs." Feeding: "Pregnant, nursing, senior, or ill guinea pigs benefit from alfalfa." Three lists, and the feeding guide puts seniors, the age most prone to stones, on the hay the health guide blames for calcium load.
- Greens. Health: "kale, spinach, and parsley, add to the calcium load that ends up in the urine." Feeding lists spinach, kale, and parsley in the daily rotation; scurvy calls "kale, parsley, cilantro, and romaine" sources "worth rotating in."
- Quantity. Housing: "Roughly 1 cup per guinea pig." Feeding: "a small handful."
- Squeaking. Handling lists "High-pitched squeaking" as a stress sign, then its own fun fact calls the wheek "the high-pitched squeal" that greets the fridge.
- Wild. Enrichment and hub: "up to 80% of a wild guinea pig's day." Encyclopedia: "no wild population."

**5. Things a reader can check**

- Cost, pair breakdown: "roughly $30 to $50 in pellets, $20 to $50 in fresh vegetables, and $40 to $60 in timothy hay each month" sums to $90 to $160, under a table reading "$60 - $135." The annual "$400 and $1,620" has a floor of $400 against 12 times $60, which is $720.
- Cost holds up "the MidWest Guinea Habitat (an 8 sq ft option)" as the properly sized cage while insisting you budget for a pair, whose minimum everywhere else is 10.5.
- The hub buy list has nail clippers, styptic powder, a hay rack, a water bottle, chew toys, and a supplement; the cost table prices none of them, and the monthly breakdown omits bedding, then says annual spend depends on "bedding quality."
- Vitamin C: scurvy says PetMD gives "10 mg/kg for an adult" and "does the arithmetic for you: roughly 20 to 25 mg a day for a typical adult." The same page weighs a boar at 1.1 kg. Ten times 1.1 is 11, not 20 to 25.
- Pellets at 1/8 cup per animal per day costing "$30 to $50" a month for two is not a figure anyone who buys pellets would write.

**6. Trust**

What made me doubt: "an enzyme most guinea pigs simply don't have a working copy of" (it is all of them); "sources say" with no source named; the feeding FAQ shrugging that "One source says avoid it outright for healthy adults, another allows it as an occasional treat"; the scurvy page sending me to "our guinea pig tank setup guide" for an animal the housing page says never to keep in a tank. The sentence that convinced me: "a single hide in a shared space tends to become something one animal guards rather than something everyone can use." That is watched behavior, not a copied figure.

**7. Grade: B-**

Sound advice with real specifics in health and enrichment, undercut by cost arithmetic that fails on the page and three pages disagreeing about alfalfa.

First change, cost guide. Replace "For a pair, that breaks down to roughly $30 to $50 in pellets, $20 to $50 in fresh vegetables, and $40 to $60 in timothy hay each month" with "For a pair, that breaks down to roughly $10 to $20 in pellets, $20 to $50 in fresh vegetables, $25 to $45 in hay, and $5 to $20 in bedding each month, which is where the $60 to $135 range comes from." Then change "$400 and $1,620" to "$720 and $1,620."

Second change, scurvy guide, carried to the hub and housing pages. Replace "does the arithmetic for you: roughly 20 to 25 mg a day for a typical adult, and 30 to 40 mg a day for a growing or pregnant one" with "For a 1 kg adult that is 10 to 25 mg a day; for a 1 kg growing, pregnant, or sick animal, 30 mg or more. Weigh yours and multiply."

### Hamster (Sonnet reader, after the Fable run failed on credits)

**1. Page by page**

00 Hub: finish it, act on the first-week list, A-. A real router, numbers plus links, not filler.
01 Encyclopedia: finish it, nothing to act on, B+. The 1930 single-female origin story is nowhere else.
02 Cost guide: finish it, act on the budget, B. The table under-sums its own stated total.
03 Handling: finish it, act on the scoop-from-below technique now, A. Sourced to Merck, Bristol, RSPCA, MSD.
04 Health issues: finish it, act on the emergency signs, A. Precise O'Neill numbers, honest wet-tail caveat.
05 Tank setup: finish it, act on size and wheel, B+. Its own fun fact undercuts its own headline bedding number.
06 Feeding: finish it, act on the safe/toxic list, A-. Admits sources disagree instead of hiding it.
07 Enrichment: finish it, act on the priority order, A. The one page built on a named study, not aggregated advice.
08 Legal: finish it, act on almost nothing beyond "not Hawaii," A-. Careful about the Phodopus gap most sites skip.
09 Vs. guinea pig: finish it, act on the space/social comparison, B. Flattens a number the set states more carefully elsewhere.

**2. Hub and encyclopedia**

The hub earns its place: not a recap of the deep dives, but their numbers pulled forward with a link back to the source. The encyclopedia earns its place too, on the 1930 origin story and the 91-year gap between Waterhouse's 1839 paper and Adler's rediscovery, content found nowhere else.

They do disagree with the deep dives. The hub says bedding is "at least 6 inches of dust-free paper bedding or aspen shavings, a welfare requirement, not decoration," and the tank setup guide repeats it almost word for word: "This isn't decorative, it's a genuine welfare requirement." But the enrichment guide, built on the actual Hauzenberger study, puts the real floor higher: "Bedding deep enough to hold a real burrow, 40 cm as the floor, more if the cage allows." Forty centimeters is about 15.75 inches, over two and a half times the number the hub and setup guide call sufficient. The setup guide's own fun fact admits as much: "Six inches of bedding is the minimum, not the ceiling."

**3. The set as a whole**

Yes, mostly. Between setup, feeding, handling, health, and enrichment you could buy a correctly sized enclosure and wheel, bed it, feed it, handle it without getting bitten, and recognize wet tail same-day. Missing: no page reconciles the 6-inch figure with the 40 cm figure into one instruction, so a reader who only opens the hub or setup guide builds a legally fine but behaviorally shallow setup. There is also no single page pricing a full day-one shopping list once the sand bath, water bottle, and chews are actually added in.

**4. Overlap and conflict across the deep dives**

The cheek-pouch fact ("holding roughly a fifth of its own body weight") opens the feeding guide and is also the hub's fun fact, read twice with nothing new the second time. The "strictly solitary, most common and preventable" sentence repeats verbatim across the hub, handling, and enrichment FAQs.

The real conflict is lifespan. The cost guide gives the study number: "a median age at death of just 1.75 years, with a range extending to about 3.65 years," Syrians toward "2 to 3 years," dwarfs "1.5 to 2.5 years." The vs. guinea pig comparison drops the nuance: "A hamster typically lives 2 to 3 years." A reader of only the comparison page gets a rosier figure than the site's own cited study supports.

**5. What does not add up**

The cost guide's upfront table lists the hamster plus six line items (cage, wheel, bedding, hideout, dishes, thermometer). Summed at the Syrian low end that is $110, high end $225. The article then claims "most first-time setups land around $150 to $350 total," a range the table cannot produce on its own. The gap is explained by a sentence, not a row: "Add a water bottle, sand bath, and chew items." All three are on the hub's buy list but never priced anywhere in the piece meant to price them.

**6. Trust**

Nothing reads as fabricated; the vet-manual and O'Neill citations check out. What lowered my confidence was the cost-table gap above, plus the Oregon entry hedging with "Oregon appears to have exempted the wrong hamster" and leaving it unresolved. The sentence that most convinced me an actual owner wrote this: "Mixing a burrow-holding material with a looser one helps tunnels stay up instead of collapsing, which is what separates a hamster that digs from a hamster that redecorates." Nobody invents that distinction from a spec sheet.

**7. Grade and two fixes**

Grade: B+. Well sourced and genuinely actionable, undercut by one real internal contradiction and one budget table that does not add up.

Fix one. Change: "At least 6 inches of dust-free, paper-based bedding... This isn't decorative, it's a genuine welfare requirement." Replace with: "At least 6 inches minimum, but the welfare floor the research actually supports is closer to 40 cm (about 16 inches) if your cage can hold it; 6 inches keeps a hamster legal-shallow, not burrow-deep."

Fix two. Add explicit rows to the upfront cost table: "Water bottle: $8-15," "Sand bath and sand: $10-20," "Chew toys and wood blocks: $10-20," so the printed range actually sums to the stated "$150 to $350" instead of leaving that gap unlabeled.

### Russian tortoise (Fable reader)

**1. Page by page**

- 00 Hub: finished it. Numbers I can act on in the first week, an emergency card, a buy list. Diet bullet links to the enclosure guide instead of the feeding guide. B.
- 01 Encyclopedia: finished it in two minutes. The wild-caught paragraph is the only actionable thing. B minus.
- 02 Cost: finished it. The table and the annual breakdown are real; two numbers wobble. B plus.
- 03 Handling: finished it because it is short. It never says how to pick the animal up. C.
- 04 Health: finished it. Hexamita and bladder stone sections are the best medical writing in the set. A minus.
- 05 Enclosure: finished it. Size, heat, humidity shape, UVB, all usable. A minus.
- 06 Feeding: finished it. Every paragraph changes what I would do at the dish. A.
- 07 Enrichment: finished it. Substrate depth and scatter feeding are the useful parts. B.
- 08 Legal: finished it. The four-inch rule section is excellent; the page then contradicts itself. B minus.

**2. Hub and encyclopedia**

The hub earns its place as a router. Its FAQ, though, is pasted verbatim from the enclosure and health FAQs, and the "Where to go next" blurbs are the sidebar rewritten. The encyclopedia adds the CITES and wild-caught context that no deep dive covers, so it stays.

Disagreements. The hub says "Forty-three states place no rule on it at all." The legal guide's table says "The other 42" against "52 jurisdictions," and 52 minus the ten rows named is 42. The hub tagline says "can live over 50 years"; the encyclopedia says "some individuals reported past 60"; the cost guide says "some individuals reaching 50-plus." Pick one. The hub's health blurb calls Hexamita "the kidney infection specific to this genus," while the health guide says "Russian tortoises and other Testudo species are notably affected," which is not "specific."

**3. The set as a whole**

Yes, I could set one up, buy the gear, feed it, and recognize the emergencies. What is still missing:

- How to lift and hold one, and how to do the weekly soak the feeding guide mentions. The handling guide does not handle.
- A timer and a 6500K daylight lamp appear in the cost table and enclosure guide but not on the hub buy list.
- A feeding schedule for a hatchling versus an adult. "The check is the tortoise itself" is honest, but a new owner needs a starting point.
- What "quarantine for months" looks like day to day is pushed to a sidebar link.

**4. Overlap and conflict across the deep dives**

Read twice: "can live its entire life indoors" appears in the cost, handling, and enclosure guides, each with a sulcata comparison. Diet appears in the enclosure guide's "Diet Basics" and again in the feeding guide. Substrate mix is in the enclosure and enrichment guides. Males ramming appears in handling and enclosure.

Conflicts. The cost table budgets for "Calcium, calcium with D3, multivitamin, cuttlebone." The feeding guide says "skip anything with added vitamin D unless a vet has asked for it." The enclosure guide gives the minimum as "4 ft by 2 ft by 2 ft" and two paragraphs later says "a foot of wall is plenty." The enrichment guide says "Many long-term keepers treat outdoor housing as the standard to aim for"; the cost guide says the species "can be kept entirely indoors for their full, decades-long lifespan without ever needing outdoor housing."

**5. Things a reader can check**

- Cost guide: the table row reads "Open-top tortoise table alone $125 - $200" while the row above and the prose say "$125 to $250."
- Cost guide: "$365 to $715 a year" over forty years is $14,600 to $28,600, printed as "roughly $15,000 to $30,000." The top end rounds up by $1,400.
- Cost guide: "Three of those lines, the dimming thermostat, the infrared temperature gun and the gram scale" are not three lines; the thermostat shares a line with the halogen lamp and the scale shares one with the water dish.
- Legal guide: the opener says "One state bans it, four require a permit," the table lists four permit states, and then the heading says "New Jersey Is the One Permit" and the takeaway says "You can keep a Russian tortoise in every state in the country. New Jersey wants a permit first... Everywhere else the state has nothing to say." Colorado, Massachusetts, New Mexico and Delaware vanish.
- Legal guide: "four attach a condition" counts New York City, which is not a state.

**6. Trust**

What made me doubt them: the feeding guide lists four sources, the health guide quotes studies by year and country, and the other five articles cite nothing. The encyclopedia names Ukraine as an exporter of a Central Asian species with no explanation. The legal guide's takeaway reads like it was written before its own table.

The sentence that convinced me a keeper wrote this: "this is an unusually active tortoise that walks the whole enclosure every day and rearranges anything light enough to move." Close second, from the feeding guide: "a tortoise that looks chubby pulling back into its shell, with flesh crowding the openings, is being fed too much."

**7. Grade and first two changes**

B. The husbandry is sound and specific; the set loses a grade to numbers that disagree with each other on the same page.

First change, legal guide takeaway. Replace "You can keep a Russian tortoise in every state in the country. New Jersey wants a permit first. Hawaii allows it on conditions, which for Hawaii is generous. Everywhere else the state has nothing to say" with: "You can keep a Russian tortoise in every state but Colorado. New Jersey, Massachusetts, New Mexico and Delaware want a permit first. Montana, Vermont and Minnesota attach a condition, Hawaii allows it on conditions, and the other 42 jurisdictions have nothing to say." Retitle "New Jersey Is the One Permit" to "New Jersey Is the One Possession Permit."

Second change, cost table. Replace "Calcium, calcium with D3, multivitamin, cuttlebone" with "Calcium carbonate (no phosphorus, no D3), multivitamin, cuttlebone," and fix the stray row "Open-top tortoise table alone $125 - $200" to "$125 - $250" so it matches the line above it.

## Batch C

### Corn snake (Sonnet reader)

**1. Page by page**

- **00 Hub**: The best front door on the site. Every number on it matches the deep dive that owns it. B+
- **01 Encyclopedia**: Short, but the 1953 to 1961 origin story of the amelanistic morph is real information the hub doesn't have. B+
- **02 Cost guide**: Shows its arithmetic on electricity and rodent prices, both of which check out, but its own decade total contradicts its own annual number. B
- **03 Handling guide**: Exact timing rules, no padding. A-
- **04 Health issues guide**: Cause traced to husbandry every time, sends diet problems to the right page instead of re-explaining them. A-
- **05 Tank setup guide**: The strongest page in the set. States the one non-negotiable rule plainly and is honest about the humidity split instead of picking a fake winner. A
- **06 Feeding guide**: Names its own source disagreement instead of hiding it. A
- **07 Enrichment guide**: Two named 2021 papers, not vague "studies show." Changed how I'll decorate the tank. A-
- **08 Legal guide**: Statute numbers, and it admits when it can't find one (Pennsylvania is left open rather than guessed at). A
- **09 vs. Hognose guide**: Clean table, a real verdict, but it flattens a debate the tank guide just raised. B+

**2. Hub and encyclopedia**

Both earn their place. The encyclopedia is the only page with the species' actual history; the hub is the only page that condenses every deep dive into one screen. I checked the hub's numbers against every deep dive and found no contradiction: temperatures, humidity, substrate depth, budget, lifespan, and handling timing all match word for word.

The one soft spot is confidence. The hub states the feeding schedule flatly: "Hatchlings under about 3 months eat every 5 to 7 days, working down to every 14 to 21 days for a fully mature adult." The feeding guide it links to is less settled: "A vet-content source gives a notably more frequent version across the board... That's a real disagreement, especially for hatchlings, roughly a 2 to 3x difference in frequency." The hub isn't wrong, it just drops the hedge the source page insists on keeping.

**3. Could I actually do this**

Yes. Enclosure size and the thermostat rule are unambiguous, the feeding schedule and prey sizing are specific, handling has a real calendar, and the emergency list gives me something to watch for. What's thinner: hatchling housing gets one passing line in the cost guide ("A hatchling can start in a 10 to 20 gallon tank and move up later") and is never sized properly in the tank guide itself, which only covers the adult minimum.

**4. Overlap and conflict across the deep dives**

FAQ blocks repeat verbatim across pages, the humidity Q and A on the hub and the tank guide is identical word for word. That's duplication, not conflict. The real conflict is between the tank guide and the hognose comparison. Tank guide: "Some specialist husbandry guides recommend a higher baseline around 65 to 75%... Many other sources and vets cite a lower 40 to 60% baseline." The hognose comparison table just prints "Humidity needs | 40-60%" for a corn snake, no caveat, as if the debate its own sister page raised never happened.

**5. What doesn't add up**

The cost guide's own math contradicts itself. It states ongoing costs at "$200 to $500 a year" and setup at "$250 to $600." Ten years of the cheapest ongoing estimate alone is $2,000; add the cheapest setup and the floor is $2,250. But the same article's "Long Game" section says: "Over a decade, total cost... commonly lands somewhere between $800 and $2,000." The FAQ repeats the same $800 to $2,000 figure, so it's not a one-off typo, it's baked into the page twice, and any reader with a calculator catches it.

**6. Trust**

What earned trust: the electricity math is right when I checked it by hand (8 watts times 24 hours comes to 5.76 kWh, close to the stated "5.8 kWh"), and the legal guide admits a gap instead of guessing on Pennsylvania. What cost trust: the decade-total error above, sitting in an article that otherwise shows its work carefully. The sentence that most convinced me a real keeper wrote this: "A corn snake in a large bare enclosure will use two hides and nothing else, which looks like proof it wanted a small enclosure and is actually proof it wanted cover." That's an inference from watching an actual animal, not a fact lifted from a care sheet.

**7. Grade and fixes**

**Grade: B+.** Honest about its own disagreements, cited down to statute numbers, and internally consistent almost everywhere I checked, but a real arithmetic error sits unfixed in two places on the same page.

**Change 1.** In the cost guide, replace: "Over a decade, total cost (setup plus all ongoing expenses) commonly lands somewhere between $800 and $2,000, which makes them one of the more affordable long-term reptile pets relative to how long they live." with: "Over a decade, total cost (setup plus all ongoing expenses) commonly lands somewhere between $2,250 and $5,600, which still makes them one of the more affordable long-term reptile pets relative to how long they live." Update the matching FAQ answer to match.

**Change 2.** In the hognose comparison table, replace the cell "Humidity needs | 40-60%" with "Humidity needs | 40-60% (some specialist sources say 65-75%)" so the comparison doesn't quietly erase a disagreement the tank setup guide takes seriously.

### Boa constrictor (Sonnet reader)

**1. Page by page**

- **00 Care guide hub**: Finish it, yes, it's short and front-loads the emergency card. Actionable: the first-week list and buy list. Grade: B.
- **01 Encyclopedia**: Finish it, genuinely interesting (CITES trade share, the Cayos Cochinos die-off). Not much to act on, but that's not its job. Grade: A-.
- **02 Cost guide**: Finish it, real dollar ranges throughout. Actionable: budget planning. Grade: B, docked for a feeding-frequency conflict (see below).
- **03 Handling guide**: Finish it, the best-sourced page in the set. Actionable: the neck rule, the 48-hour wait, reading tongue flicks and posture. Grade: A-.
- **04 Health issues guide**: Finish it, tight and matches the emergency card exactly. Actionable: symptom to cause to "see a vet." Grade: A-.
- **05 Tank setup guide**: Finish it, but check the math yourself before buying (below). Actionable: temperature and humidity numbers, the two-hide rule. Grade: B.
- **06 Feeding guide**: Finish it, clearest page in the set. Actionable: prey-width rule, the age-based schedule. Grade: A.
- **07 Enrichment guide**: Finish it, and I respect that it says outright there's no boa-specific research. Actionable: the priority order. Grade: A-.
- **08 Legal guide**: Finish it, this is the standout, it corrects specific wrong claims (Florida, New Jersey) with cited rule numbers. Grade: A.

**2. Hub and encyclopedia: do they earn their place?**

The hub is mostly a router: nearly every number in it is lifted verbatim from a deep dive, right down to matching FAQ answers word for word ("What temperature does a boa constrictor enclosure need?" reads identically on the hub and on the tank setup guide). It earns its place as a front door and emergency card, not as new information.

The encyclopedia does earn its place. Origin, habitat, the constriction mechanism correction, and the CITES trade history aren't duplicated anywhere else in the set.

I did not find a hard numeric conflict between the hub and a deep dive. The closest is a framing gap rather than a contradiction: the hub states "20 to 30 years is typical, and boas can exceed 40 with excellent care" as the pet's lifespan, while the encyclopedia labels the same range "Wild Lifespan: 20-30 years." One is presented as what to expect from your pet, the other as a wild-population statistic, and the page never states a separate captive figure.

**3. Could I actually keep one after reading all of it?**

Mostly yes. Setup cost, enclosure dimensions, temperature and humidity, feeding schedule and prey sizing, handling safety, red-flag symptoms, and legality are all covered with real numbers. What's missing: shedding care, sexing and growth tracking, and quarantine detail are all pushed off to shared class-wide guides linked only in the sidebar, not summarized anywhere on the boa's own pages. A first-timer relying only on the seven boa-specific deep dives would set up and feed correctly but wouldn't know what a bad shed or normal stool looks like without clicking further.

**4. Overlap and conflict across the deep dives**

Read twice, nearly verbatim, inside the same article: the handling guide's fun fact box says "Compared to ball pythons, boas are bigger, more food-motivated, and confident from a young age," then the closing section repeats "Compared to ball pythons, boas are bigger, more food-motivated, and confident" almost word for word.

A real conflict: the cost guide says "Frozen rodents, fed every 7 to 14 days for an adult," but the feeding guide's own adult schedule is "every 10 to 14 days, extending to every 2 to 4 weeks for mature animals." Seven days is the baby interval elsewhere in the same feeding guide, not the adult one.

**5. What doesn't add up on inspection**

The tank setup guide states the sizing rule up front: "enclosure length plus width should equal or exceed the snake's length, and height should be at least half the snake's length." It then recommends "6 to 8 feet long, 2 to 3 feet wide, and 3 to 4 feet tall" for an adult, while both the hub and encyclopedia give adult size as "5 to 13 feet." Run the guide's own rule on its own top-end number: a 13-foot female needs length-plus-width of at least 13 feet and height of at least 6.5 feet. The recommended dimensions top out at 8+3=11 feet and 4 feet tall, short on both counts for the larger females the same page says exist.

Smaller mismatch: that same paragraph claims "roughly 10 square feet of floor space at minimum," but its own low-end dimensions, 6 by 2 feet, multiply to 12 square feet.

The hub's buy list has nine items, including feeding tongs and frozen rodents; the cost guide's pricing table has seven rows and never prices either one.

**6. Trust**

What raised an eyebrow: the hub's fun fact that boas "literally feel your pulse" oversells what heat-sensing pits actually detect, and it sits right next to a handling guide that names LafeberVet, ReptiFiles, the Florida Museum, and a 2011 clinical review by name for far smaller claims. The unsourced "one handler per 3 to 4 feet" rule in that same well-cited article stands out for having no source at all.

The sentence that most convinced me a keeper wrote this: "If it holds on, cold water on its face or a little mouthwash gets it to release." Nobody reasons their way to that; someone has done it.

**7. Overall grade and two fixes**

**Grade: B+.** Deep, specific, well-sourced content with real prices and real citations, let down by a page that contradicts its own sizing rule and a cost guide that contradicts its own feeding guide.

**Fix one.** In the tank setup guide, change:
"In practice, adults typically need somewhere around 6 to 8 feet long, 2 to 3 feet wide, and 3 to 4 feet tall, roughly 10 square feet of floor space at minimum."
to something like: "For boas up to about 9 feet, that puts adults around 6 to 8 feet long, 2 to 3 feet wide, and 3 to 4 feet tall. Females running toward the 13-foot top of the range need more of all three dimensions to meet the rule above; size the enclosure to your snake's actual length, not this baseline."

**Fix two.** In the cost guide, change:
"Frozen rodents, fed every 7 to 14 days for an adult, plus substrate and electricity make up the monthly total"
to: "Frozen rodents, fed every 10 to 14 days for a younger adult and stretching to every 2 to 4 weeks for mature animals, plus substrate and electricity make up the monthly total."

### African grey parrot (Sonnet reader)

**1. Page by page**

- 00 Hub: Finish it, act on it immediately (buy list, emergency card). Grade A minus. One weak spot: an unsourced "1,000 words" claim sitting above much more careful numbers below it.
- 01 Encyclopedia: Finish it, mostly background not action. Grade B plus. Good history, but it duplicates the sidebar lists twice over and adds little the hub didn't already summarize.
- 02 Cost guide: Finish it, directly actionable budgeting. Grade A. Clean tables, real ranges, honest about lifespan changing the math.
- 03 Handling guide: Finish it, changes how you approach the bird day one. Grade A. The most careful page in the set, it explicitly downgrades an unverified claim.
- 04 Health issues guide: Finish it, print-and-post material. Grade A. Tight, symptom-first, ties each condition back to a cause you can actually fix.
- 05 Cage setup guide: Finish it, you need these numbers before the cage ships. Grade A minus. Solid, though it leans on the hub for some of the same numbers rather than owning them.
- 06 Feeding guide: Finish it, the pellet math and toxin list are essential. Grade A.
- 07 Enrichment guide: Finish it, this is the one with citations attached to real studies. Grade A. The strongest single page in the set.
- 08 Legal guide: Finish it, especially if you're in Vermont or importing. Grade A.
- 09 Vs. cockatoo guide: Finish it if you're deciding between the two. Grade B plus. Useful comparison, but it restates the "150+ words" line without the hedging the handling guide gave the same fact.

**2. Hub and encyclopedia: do they earn their place?**

The hub earns it. It's a genuine router: first-week numbers, an emergency card, a buy list, nothing the deep dives don't also say but organized for someone who hasn't read seven articles yet.

The encyclopedia earns it less. Past the taxonomy and CITES history, it's mostly the same sidebar lists reprinted twice (Deep Dive list and Health and More list, both verbatim what the hub already shows).

They do disagree with a deep dive, and it's the set's clearest conflict. The hub's opening tagline area says: "African Greys have the cognitive ability of a 5-year-old child and can learn over 1,000 words." The handling guide, describing the same research parrot, says: "Landmark peer-reviewed research on a grey named Alex documented the ability to label 50 different objects, 7 colors, and 5 shapes, count quantities up to six, and even grasp the concept of 'none.'" That guide then goes further and warns that a separate claim about a different parrot's "vocabulary in the hundreds of words" came only from the bird's owner and should be treated with caution. Nothing in the set supports "over 1,000 words" for Alex, and it sits three lines above a hub FAQ answer that states the correct 50/7/5 figures. The hub disagrees with its own FAQ, not just with the deep dive.

**3. The set as a whole: could I actually do this?**

Mostly, yes. Cage, temperature, placement, lighting, diet ratios, toxin list, budget, and the five named health emergencies are all here and consistent with each other. What's missing to actually get a bird home: where to find a breeder and vet CITES paperwork beyond "look for closed-ring ID," how to find an avian vet before I need one (mentioned, never explained), and what an actual foraging toy rotation schedule looks like week to week rather than "rotate."

**4. Overlap and conflict across the deep dives**

Cage size, lifespan, budget, and the hypocalcemia/aspergillosis/psittacosis/PBFD list are repeated near-verbatim across three or four pages, consistently, which is reassuring rather than padding.

The one real conflict: the handling guide gives Alex's documented vocabulary as 50 objects, 7 colors, 5 shapes, and explicitly flags any claim beyond that as unverified. The vs. cockatoo guide instead states flatly that Alex "developed a working vocabulary past 150 words," the same figure the encyclopedia repeats. That's the exact kind of embellishment the handling guide just warned readers about, appearing two pages later without the warning.

**5. Something that doesn't add up**

The hub's buy list has nine items: cage, perches, UVB light, foraging toys, sleep cage, misting bottle, pellets, vegetables and fruit, gram scale. The cost guide's "Upfront Setup" table has four line items, and two of those ("Natural wood, rope, and cement perches" and "Foraging toys, stainless bowls, and a travel carrier") are marked "Included in setup budget" with no price at all. The UVB light, sleep cage, and misting bottle from the buy list don't appear in the cost table in any form. A reader pricing out the $500 to $1,500 setup number has no way to check it against the list of things they're told to buy.

Separately, the feeding guide's FAQ states "pulling uneaten fresh food within a couple of hours prevents spoilage," a specific number that never appears in the body text above it, which only says to "offer fresh food daily and keep an eye on how much your grey eats."

**6. Trust**

The hub's "1,000 words" line is the thing that made me doubt the set, an outlier number nothing else supports, sitting in the one spot most likely to be read in isolation.

The sentence that most convinced me an actual keeper wrote this: "That figure comes from the owner rather than a controlled study, though, so it's worth treating with more caution than the peer-reviewed Alex research." Nobody pads a page with that sentence. It costs the article a better anecdote in exchange for being right.

**7. Overall grade and two fixes**

**Grade: B plus.** The deep dives are genuinely careful and internally disciplined, but the routing layer (hub tagline, cost table) doesn't hold itself to the same standard, and that's exactly where a skimming reader lands first.

**Fix 1.** Replace the hub's fun fact:
"African Greys have the cognitive ability of a 5-year-old child and can learn over 1,000 words."
With: "African Greys have been documented labeling 50 objects, 7 colors, and 5 shapes, and counting to six, the level of cognition shown by the research parrot Alex."

**Fix 2.** Replace the two unpriced cost-table rows:
"Natural wood, rope, and cement perches | Included in setup budget" and "Foraging toys, stainless bowls, and a travel carrier | Included in setup budget"
With priced rows, or at minimum add the UVB light, sleep cage, and misting bottle as their own rows with real ranges, so the buy list and the cost table describe the same nine things.

### Chinchilla (Sonnet reader)

**1. Page by page**

- **00 Hub:** Finish it, yes, in five minutes flat. Buy list, emergency card, and first-week numbers are all immediately actionable. Grade: A.
- **01 Encyclopedia:** Finish it, worth it for the 1927 founding-population detail and the fur trade history alone. Nothing to act on, it's background, which is exactly its job. Grade: A minus.
- **02 Cost guide:** Finish it, but the table under it does not add up to the number in the prose (more below). Grade: C plus.
- **03 Handling guide:** Finish it, the football hold and the fur slip explanation are both clear and actionable. It promises fracture detail elsewhere that isn't there. Grade: B plus.
- **04 Health issues guide:** Finish it, the table plus the 150 rule are the two things worth bookmarking. Grade: B plus.
- **05 Housing guide:** Finish it, this is the strongest piece in the set. The ferret-cage tip alone justifies reading it. Grade: A.
- **06 Feeding guide:** Finish it, genuinely useful "why they stop eating" list, undercut by contradicting itself on apple within the same article. Grade: B.
- **07 Enrichment guide:** Finish it, a real citation (Scientific Reports) driving an actual priority order is rare in this genre. Grade: A minus.
- **08 Legal guide:** Finish it, code citations and a real 2021 USDA enforcement case make this the most rigorous page in the set. Grade: A.
- **09 vs. Guinea Pig:** Finish it, useful for a genuinely undecided buyer, though it states the heat threshold as a flat number that the rest of the set frames as a formula. Grade: B plus.
- **10 vs. Hamster:** Finish it, but it gives the chinchilla a different weight and length than every other page in the set. Grade: B minus.

**2. Hub and encyclopedia: earning their place**

They don't repeat each other. The hub is pure action (numbers, emergency card, buy list), the encyclopedia is pure background (Andes elevation, IUCN status, the fur trade collapsing into a captive-breeding industry by 1920). Someone could skip either without losing the other's content.

They do disagree with a deep dive, though, on the animal's own size. Both the hub and encyclopedia state: "Adult Size: 9-15 inches (23-38 cm); 1-2 lbs." The vs. Hamster page's comparison table says "Adult weight | 1-1.5 lbs," and its FAQ goes further: "An adult chinchilla weighs around 1 to 1.5 pounds and measures 14 to 19 inches including its tail." A new owner reading the hub first and the comparison page second would reasonably wonder which number to trust.

**3. The set as a whole: could I actually do this?**

Yes, mostly. Between the hub, housing, and feeding guides I could buy the cage, set the room temperature, run the dust bath schedule, and build the diet correctly. The health guide gives me the emergency signs and the 150 rule cold. What's missing: nothing on acclimating a newly brought-home chinchilla, nothing on sexing, and no direct answer to "should I get one or two," since the enrichment guide, the guinea pig comparison, and the hamster comparison each gesture at social needs slightly differently without ever settling it plainly for a first-timer. Grooming beyond the dust bath (nail trims) is pushed to a cross-species article not in this set.

**4. Overlap and conflict across the deep dives**

Read twice, near verbatim: the fur-slip explanation (hub FAQ and handling guide), the cecotrope explanation (hub FAQ and feeding guide, word for word), the cage-size FAQ (hub and housing guide), and the 150 rule (housing and health guides, consistently, using the same 85°F/65% humidity example both times).

One real conflict beyond the size numbers above: the handling guide says "our health issues guide covers what a fracture and other injuries look like." The health issues guide's table only covers dental disease, heat stroke, GI problems, fur chewing, ringworm, and fur ring. There is no fracture content anywhere in it. The cross-reference points to something that doesn't exist on the page it names.

**5. What doesn't add up on inspection**

The cost guide's own table doesn't support its own headline number. Summing the table's low ends: $75 (chinchilla) + $150 (cage) + $15 (dust house) + $30 (wheel) + $75 (extras) = $345. Summing the high ends: $175 + $400 + $50 + $120 + $150 = $895. The article states: "Add it up and most complete setups land between $455 and $1,225." Neither end of the table matches either end of that claim.

The feeding guide also contradicts itself within one article. It lists apple as a "reasonably well-corroborated safe treat": "a small piece of apple or pear about once weekly." Two paragraphs later, in the same article: "Apple, carrot, banana, grapes, and lettuce are genuinely disputed items that show up on both safe and avoid lists depending on the source." Apple is presented as settled in one breath and unsettled in the next.

**6. Trust**

The math error and the broken fracture cross-reference are the two things that made me trust the numbers less than the writing itself deserves. Against that: the legal guide cites actual code sections and a named, dated federal enforcement case, and the enrichment guide cites a real journal study rather than gesturing at "studies show." The sentence that most convinced me an actual owner wrote this set: "Many chinchilla owners furnish their cage from the ferret aisle rather than the small-mammal one." That's not researched, that's lived.

**7. Overall grade and two fixes**

**Grade: B plus.** Well-sourced and genuinely actionable, but a reader who cross-checks the numbers, as this one is asked to do, finds a cost total that doesn't sum and a dietary claim that contradicts itself in the same article.

**Change one**, cost guide: replace "Add it up and most complete setups land between $455 and $1,225, depending mostly on cage quality and whether you adopt or buy from a breeder" with "Add it up and most complete setups land between $345 and $895, depending mostly on cage quality and whether you adopt or buy from a breeder," so the prose matches the table above it.

**Change two**, feeding guide: replace "a small piece of apple or pear about once weekly" in the safe-treats list with "a small piece of pear about once weekly (apple is popular too, but see the disputed-items note below before making it a habit)," so the article stops calling apple settled in one place and disputed in the next.

### Ferret (Sonnet reader)

**1. Page by page**

- **00 Care guide hub:** Finish it, this is the page to act on first: buy list, emergency card, first-week numbers all in one place. Grade: A-
- **01 Encyclopedia:** Finish it, mostly for the 1933 influenza story, nothing here changes what you'd do at home. Grade: B+
- **02 Cost guide:** Finish it, gives you real budget numbers, but the arithmetic doesn't quite hold up (see below). Grade: B
- **03 Handling guide:** Finish it, the nipping advice is specific and you can use it tonight. Grade: A-
- **04 Health issues guide:** Finish it, this is the one worth bookmarking for the emergency list alone. Grade: A
- **05 Cage setup guide:** Finish it, buy to these exact numbers and you're set. Grade: A
- **06 Feeding guide:** Finish it, the single most actionable page in the set. Grade: A
- **07 Enrichment guide:** Finish it, hands you one specific behavior to check tonight. Grade: A
- **08 Legal guide:** Finish it if you're anywhere near California, Hawaii, or NYC, otherwise skim. Grade: B+
- **09 Adrenal disease guide:** Finish it, but a third of it repeats guide 04 almost word for word. Grade: B

**2. Hub and encyclopedia: earning their place**

The hub earns its place cleanly. It isn't a rehash, it's a dashboard: first-week numbers, an emergency card, a buy list, and an FAQ, each line sourced from a specific article and linked to it. The encyclopedia also earns its place, but for a different reason: it's the only page with the domestication history and the 1933 influenza story, none of which appears anywhere else in the set.

The two do brush against a real disagreement, though. The encyclopedia lists "Wild Lifespan: 5-10 years" with no qualifier tying it to the ancestral polecat the way "Wild Diet: (Ancestral polecat)" is explicitly tagged. The cost guide, meanwhile, says a modern US pet ferret averages "5 to 9 years on average" and that "older sources citing 10 to 15 years reflect a healthier population than what's typical now." Put those side by side and a cared-for pet ferret now lives barely longer, if at all, than its wild ancestor, purely because of how common endocrine disease has become. That's a real and interesting claim, but the hub never states it that plainly, and a reader would have to notice the juxtaposition themselves.

**3. The set as a whole**

After all nine articles I could set up a cage, ferret-proof a room, buy the right food, recognize a real emergency, and know what's illegal where. What's missing: nothing on introducing two ferrets to each other, no bathing or nail-trim routine, no first-48-hours checklist, and no portion guidance beyond "free-feed." The vet-carrier and grooming guides are only ever one-line teasers in the sidebar, never expanded here.

**4. Overlap and conflict across the deep dives**

The Dutch neutering study appears almost verbatim twice. Health issues guide (04): "A study of Dutch ferrets neutered much later than the US norm, between 12 and 18 months instead of a few weeks old, still found the disease showing up." Adrenal disease guide (09): "A study of Dutch ferrets neutered much later than the US norm, between 12 and 18 months instead of a few weeks old, still found the disease showing up." No disagreement, just duplication that a merge would fix.

The one live disagreement is flagged by the site itself: the feeding guide says fat content is "genuinely disputed between sources, some put it as low as 10 to 15%, others say at least 30%." That's honest, but it's still two sources in the same article contradicting each other by a factor of three.

**5. What doesn't add up**

The cost guide's own annual table gives $350 to $630 a year (kibble $150-250, vaccines $50-100, bloodwork $100-200, bedding $50-80). The very next line says: "Add those up and you land around $350 to $630 a year, close to the $50 to $60 a month most owners report for a pair." But $50 to $60 a month is $600 to $720 a year, not $350 to $630. At the low end that's a $250 gap, not "close." The text hand-waves it to toys and enrichment, but those only appear in the one-time setup table, never in the recurring one.

**6. Trust**

What made me doubt them: no article links to an actual study, journal, or name for "two 2022 surveys" or "per veterinary sources," so none of it is checkable from the page itself. The one sentence that most convinced me a real owner wrote this: "A ferret that has just had a proper play session sleeps hard. One that has not is awake, still, and doing nothing, which looks like calm and is not." Nobody invents that distinction without having watched it happen.

**7. Grade and two fixes**

**Grade: B+.** Consistent numbers, honest about disputes, genuinely useful, let down by one bad sum and one merge-worthy duplicate.

**Change one**, in the cost guide: replace "Add those up and you land around $350 to $630 a year, close to the $50 to $60 a month most owners report for a pair" with "Add those up and you land around $350 to $630 a year for essentials; factor in another $100 to $150 for toys and enrichment replacement, which brings you close to the $50 to $60 a month most owners report."

**Change two**, in the adrenal disease guide: cut the repeated Dutch-study paragraph entirely and replace it with "See our health issues guide for the neutering-age debate in full, the short version: neutering itself, not the age it happens at, appears to matter most."

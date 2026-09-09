# Batch B blind reader review

Five incognito reader agents, one per species, 2026-09-09. Each read only the
plain-text extract of its own species set (`node scripts/reader-extract.mjs
<species> <dir>`): hub, encyclopedia, and every deep dive including the legal
and vs pages where one exists. No git, no web, no repo access outside its
folder, no knowledge of who wrote the pages, no ability to edit anything.

Same short shape as the batch A and C pass: 700 to 900 words per reader, with
arithmetic and internal contradictions asked for explicitly. All five ran on
Sonnet, at Mike's instruction and because Fable was out of usage credits.

Nothing in the repo was changed as a result of this review. This file is the
record only.

## Grades

| Species | Set grade | Weakest page | Strongest page |
|---|---|---|---|
| Budgie | B+ | Cost (B), encyclopedia (B) | Health, feeding (A) |
| Cockatiel | B+ | Cost (B-) | Health, feeding (A) |
| Lovebird | B+ | Cost (C+) | Encyclopedia, health, feeding (A) |
| Tarantula | B+ | Cost (C+) | Handling, health, legal (A) |
| Cockatoo | B- | Cost (C), encyclopedia (C+) | Feeding (A) |

**Batch B as a whole: B+.** Four B+ and one B-.

Where the five batches now stand under the same blind reader:
batch B **B+**, batch C **B+**, batch A **B-**, batch D **B-**, batch E **B-**.

Batch B was the batch that changed shape partway through: budgie and cockatiel
got the full two-pass treatment with a Fable check each, and cockatoo,
lovebird and tarantula got the leaner single pass with one combined check. The
readers do not cleanly punish the lean half. Lovebird and tarantula, both lean,
match budgie and cockatiel at B+. The one set that came in a step low, cockatoo,
is a lean-pass species, but its problem is a cost table that argues with the
prose beneath it, which is the same defect the two-pass species have in milder
form. The process change is not what separates them.

## Patterns across the five sets

**1. The cost guide is the weakest page in all five sets, and the number
does not survive being checked in all five.**

- Budgie: the cage, which the guide itself calls "the single biggest line
  item," is never given a price. The other rows come to $65 to $165 against a
  stated setup of $175 to $475, leaving a $110 to $310 cage cost the reader has
  to infer.
- Cockatiel: "Food and supplies (pellet-based diet with fresh food) | $24 - $63
  / month" sits directly above "Annual routine total (food, toy replacement,
  cage upkeep) | $200 - $350 / year." Food alone annualizes to $288 to $756,
  already over a total that is meant to include toys and cage upkeep. The hub
  repeats the $200 to $350 without catching it.
- Lovebird: the section titled "Upfront Setup: Roughly $300" sits over a table
  of cage $80-150, perches $20-35, toys $20-40, cover $10-20, which sums to
  $130 to $245. The paragraph directly under that table prices the same cage at
  "$80 to $200."
- Tarantula: "Upfront Setup: Roughly $70 to $300, Plus the Spider," repeated in
  its FAQ, over line items of enclosure $20-80, substrate $10-30, and hide,
  decor and water dish $20-60, which sums to $50 to $170.
- Cockatoo: the table gives "Large stainless steel cage | $1,450 - $1,550" and
  "Heavy-gauge powder-coated cage | $820 - $880," and the prose immediately
  below says "A large, appropriately sized cage runs $200 to $1,000 depending
  on quality and size." The header "Upfront Setup: Roughly $250 to $1,300 or
  More" cannot hold when the cheaper cage in its own table starts at $820.

That is five of five here, ten of ten in batches A and C, and nine of ten in
D and E. Twenty-four of twenty-five species. The cost guide is a corpus-wide
failure, not a batch defect.

**2. The buy list and the cost table describe different purchases. Four of
five.** Budgie (ten items on the buy list, five rows in the table, nail
clippers and cage cover priced nowhere), cockatiel (six items, five rows,
cuttlebone and nightlight priced nowhere on the site), lovebird (five items,
four rows, food and water dishes missing even though the cost FAQ says bowls
are included in the $300), tarantula (the buy list skips the feeding tongs the
cost guide says are worth buying).

**3. A number drifts between the deep dives, and the vs page is usually where
it lands. Four of five.**

- Cockatiel lifespan, three values on one site: hub "Cockatiels live 10 to 15
  years," vs cockatoo "A cockatiel's 15 to 25 year lifespan" and its FAQ "A
  cockatiel commonly lives 15 to 25 years," encyclopedia "10 to 14 years in the
  wild; up to 25 years in captivity."
- Lovebird size: hub and encyclopedia "5 to 6.5 inches (13 to 17 cm)," vs
  budgie "about 5 to 6 inches long" in both body and table.
- Tarantula lifespan: cost "Female Chilean rose hairs commonly live 15 to 20
  years or more, males considerably less, typically 4 to 7 years," vs emperor
  scorpion "A female tarantula of a commonly kept species can live 15 to 30
  years... A male of the same species usually lives only 3 to 6 years." Both
  describe the general beginner case and neither sex matches.
- Cockatoo lifespan: cost "40 to 60 years is typical, with some individuals
  living into their 70s or beyond," enrichment FAQ "commonly into the 40s and
  50s and sometimes beyond 60 for larger species."

Three of the four vs pages in this batch carry the drift. That is the same
finding as batches A and C, where five of five vs pages flattened or moved a
number the rest of the set stated carefully. The vs pages have never had a
numbers pass.

**4. Articles that contradict themselves inside one page. Four of five.**
Cockatoo cost (table against prose) and cockatoo enrichment, which says
Van Zeeland's review lists the three interventions "without ranking them" and
then two sections later runs a "Priority Order" that ranks them. Lovebird cost
(the same cage at two prices in adjacent blocks). Tarantula cost (header
against line items) and tarantula enrichment, whose key takeaway says "All four
of those results are from the same study" over an FAQ calling them "Three
results that do not all point the same way." Cockatiel cost (monthly food
against annual total).

**5. The hub narrows what its source page says. Two clear cases.** Tarantula
hub: "juveniles roughly every week to two weeks (sources disagree on the exact
number)," where the feeding guide it summarizes says "estimates range from
every 4 to 7 days up to every 7 to 14 days." The hub drops the entire low end
of the range it claims to be reporting. Cockatoo hub bundles fruit with
vegetables under one ceiling ("fresh vegetables and fruit covering no more than
another 20 to 40%") where the cage setup guide splits fruit off and pairs it
with seeds under a tighter one ("seeds specifically should stay under about
10%"), so a reader portioning a bowl gets two instructions for where fruit
goes. This is the milder version of the batch A and C finding that the hub
drops the hedge its source page insists on.

**6. A summary that contradicts its own table.** The cockatoo legal guide marks
Vermont "Banned" in the summary table, and the closing takeaway recaps Maine,
Arkansas and Hawaii by name and never mentions Vermont. A reader who reads only
the takeaway concludes no state bans them outright. This is the same shape as
the Russian tortoise legal takeaway in batch A, which deletes a state ban and
three of four permit states its own table lists. Two legal guides, same defect.

**7. Duplication is heavy in the bird sets, and readers noticed.** The lovebird
nest box and happy hut warning appears five times across the set; its "one bird
or two, roughly two hours a day" passage three times. Budgie's reader read
"budgies mask illness" four separate times, the four same-day emergency signs
verbatim twice, and found the hub's first-week bullets close to word for word
from the deep dives: hub "An absolute minimum for one bird, but a wider
flight-style cage serves them far better" against the cage guide's "An absolute
minimum for a single budgie is often cited around 18x18x18 inches, but a wider
flight-style cage serves them far better." Cockatoo's over-bonding and the 4 to
6 hour daily commitment get full treatment four times. None of it contradicts,
it just reads as padding by article six.

**8. Budgie is the first set in twenty-five species with no numeric conflict at
all.** Its reader checked budget figures, cage sizes, temperatures and the diet
ratio across all ten pages and found them matching exactly. Its faults are the
unpriced cage and the redundancy above.

**9. The encyclopedia continues to earn its place on history.** Cockatiel A-
(pied in 1949, lutino in 1958), lovebird A (Vieillot in 1818, Reichenow in
1887, the 1957 first captive-bred blue Fischer's, the 1992 Tanzanian export
suspension), tarantula A- (the 1985, 1994 and 2019 CITES listings), budgie B
(Gould's 1840 shipment, the Budgerigar Club forming in 1925), cockatoo C+ (the
CITES trade history earns it, the rest is the hub tagline again). Same result
as batches A and C: the history pass is what saves this page type.

**10. What readers trusted was a page admitting it does not know.** Every one
of the five picked a sentence of that kind or a firsthand observation as the
thing that convinced them a keeper wrote the set. The cockatiel reader called
its version "the strongest trust signal in the set." Set against that, what
cost trust in four of five was arithmetic, not judgment.

## Findings that need research, not an edit

1. **Cockatiel lifespan.** Three ranges on one site, and it drives the budget
   the cost guide is built on. One of them is the site's position.
2. **Cockatoo cage pricing.** The table and the prose cannot both be right, and
   the upfront-setup header depends on which one wins.
3. **Tarantula juvenile feeding frequency.** The hub and the feeding guide state
   different ranges for the same thing, and the feeding guide's own range is
   wider than what the hub quotes from it.
4. **Cockatoo legal, Vermont.** Confirm the ban, then make the takeaway agree
   with the table.
5. **Tarantula lifespan by sex.** The cost guide and the comparison guide give
   different figures for both sexes of the same beginner species.
6. **Lovebird adult size.** 5 to 6 or 5 to 6.5 inches. Two pages against one.

## What is missing across the sets

- Budgie: a price for the cage, a grams-based weight benchmark for catching
  weight loss early, and a position on wing clipping (linked in the shared list,
  taken up by no budgie page).
- Cockatiel: product-level pricing for anything but the bird, guidance on solo
  versus paired beyond one enrichment bullet, and cockatiel-specific pages on
  quarantine, wing clipping and egg laying, all of which live behind
  cross-species links.
- Cockatoo: a reconciled total budget. The cost guide never adds its own numbers
  into one figure a buyer can save toward.
- Lovebird: a real out-of-cage-time number separate from "two hours of
  interaction a day," how often to bathe or mist, and quarantine and pellet
  conversion, which the hub treats as day-one essentials and hands off to
  unread links.
- Tarantula: where to source a captive-bred spider, how to sex one before
  committing to a decades-long female, and the physical rehousing process, which
  sits in Health and More rather than this species' own Deep Dive list.

## Template artifacts worth a look

The budgie vs cockatiel article links to the budgie cage guide at a URL still
called "tank-setup-guide," which its reader read as a reptile template never
re-skinned for a bird. The lovebird reader flagged the identical 20-item Health
and More list pasted unchanged onto all nine pages as "template machinery rather
than curation."

## The sentence each reader trusted most

- Budgie: "I have looked after neighbors' budgies on and off for years, and the
  tidy-looking, barely touched seed dish is the single most misleading sight in
  the cage."
- Cockatiel: "We couldn't find a single, consistently sourced number for exactly
  how many hours or days a cockatiel can safely go without eating, and would
  rather say that honestly than invent a round figure."
- Cockatoo: "A cockatoo solves a puzzle once and then it is a container."
- Lovebird: "Reintroducing a toy that's been out of rotation for a few weeks
  often gets treated as new again, which stretches a small toy collection
  further than buying constantly."
- Tarantula: "The preference test is the result that ought to make everyone
  cautious. It is the closest thing to asking the animal directly, and the
  answer was a shrug."

---

# The five reports, in full

### Budgie

**1. Page by page**

- **00 Hub:** Finish it, act on it immediately (buy list, emergency card). Grade: B+.
- **01 Encyclopedia:** Finish it in two minutes, nothing to act on, just background. Grade: B.
- **02 Cost guide:** Finish it, act on the budget numbers, one pricing gap costs it a notch. Grade: B.
- **03 Handling guide:** Finish it, act on the taming order today. Grade: A-.
- **04 Health issues guide:** Finish it, the most useful page in the set for catching something before it's an emergency. Grade: A.
- **05 Cage setup guide:** Finish it, act on bar spacing and perch variety immediately. Grade: A-.
- **06 Feeding guide:** Finish it, act on the pellet ratio and skip the grit. Grade: A.
- **07 Enrichment guide:** Finish it, act on the foraging tip, though the "research" behind it is never named. Grade: B+.
- **08 Cere color guide:** Finish it, act on it the next time the cere changes. Grade: A-.
- **09 Budgie vs. cockatiel:** Finish it if deciding, otherwise skip. Grade: B+.

**2. Hub and encyclopedia: earned or repeated?**

The encyclopedia earns its place, it's the only page with real natural history (Gould's 1840 shipment, the Budgerigar Club forming in 1925). The hub doesn't earn much of anything new: its "first week" bullets are close to word-for-word lifts from the deep dives. Compare the hub, "An absolute minimum for one bird, but a wider flight-style cage serves them far better," to the cage guide, "An absolute minimum for a single budgie is often cited around 18x18x18 inches, but a wider flight-style cage serves them far better." That's not a disagreement, it's the same sentence twice. I did not find an actual numeric conflict between the hub and any deep dive; the budget figures, cage sizes, and temperatures all match exactly. The hub's real flaw is redundancy, not error.

**3. After reading everything, could I set up, buy, feed, and keep this bird healthy?**

Yes, mostly. I know the cage size and bar spacing, the diet ratio, the taming order, the same-day emergency signs, and how to sex the bird by cere. What's missing: an actual price for the cage itself (see below), any grams-based weight benchmark for spotting weight loss early, and a straight answer on wing clipping, since the hub links to it in the shared list but no budgie-specific page here takes a position either way.

**4. Overlap and conflict across the deep dives**

I read the diet ratio (60 to 80% pellets, 20 to 25% fruit and veg) three times: hub, cage guide, feeding guide, all matching. I read the four same-day emergency signs twice, verbatim, in the hub and the health guide. I read "budgies mask illness" as a framing device four separate times. None of these repeats contradict each other, they just make the set feel padded by article six or seven. I found no numeric disagreement between any two deep dives.

**5. What doesn't add up on its own terms**

The hub's "What to buy" list has ten items: cage, perches, cuttlebone, pellets, vegetables, foraging toys, chew toys, dishes, nail clippers, cage cover. The cost guide's own setup table prices only five: the bird, cage, perches, dishes, and one combined "toys" line. Nail clippers and a cage cover appear on the buy list and are never priced anywhere in the cost guide.

Worse, the cage itself, the item the cost guide calls "the single biggest line item," is never given a number. Adding the table's other rows (bird $20-80, perches $15-25, dishes $10-20, toys $20-40) gets you $65-165, against a claimed total setup cost of $175-475. That leaves a cage cost of roughly $110-310 that a reader has to infer rather than see.

**6. Trust**

What made me doubt them: the vs-cockatiel article links to the cage guide at a URL still called "tank-setup-guide" for a bird, which reads like a reptile-page template that was never fully re-skinned. The health guide also cites "VCA Animal Hospitals" by name in running prose with no link, while the feeding guide has a proper Sources block naming three organizations. That inconsistency in how sources get shown suggests the pages weren't built to the same standard.

The sentence that most convinced me a real keeper wrote this: from the feeding guide, "I have looked after neighbors' budgies on and off for years, and the tidy-looking, barely touched seed dish is the single most misleading sight in the cage." That's a specific, lived observation, not a paraphrase of a vet handout.

**7. Grade and two changes**

**Grade: B+.** Accurate and internally consistent where it matters, let down by an unpriced cage line and a hub that repeats rather than adds.

**Change one.** In the cost guide's setup table, replace:
"Cage (example pick) | The single biggest line item"
with an actual price range, for example: "Cage (18x18x18 flight-style or larger) | $80 - $250"

**Change two.** In the hub's "What to buy" list, since nail clippers and a cage cover have no home in the cost breakdown, either drop them from the priced total's implication or add a line to the cost table: "Nail clippers and cage cover | $10 - $25 combined" so the buy list and the cost table describe the same purchase.

### Cockatiel

**1. Page by page**

- **00 Care guide hub**: Finish it, and act on it immediately (buy list, emergency card). Grade: B+.
- **01 Encyclopedia**: Finish it, mostly for the mutation history and taxonomy nowhere else on the site. Grade: A-.
- **02 Cost guide**: Finish it, but the "cost table" doesn't actually price most of what it lists. Grade: B-.
- **03 Handling guide**: Finish and act on it step by step. Grade: A-.
- **04 Health issues guide**: Finish it, print the emergency list. Grade: A.
- **05 Cage setup guide**: Finish and shop from it directly. Grade: A-.
- **06 Feeding guide**: Finish it; refreshingly honest where it doesn't know something. Grade: A.
- **07 Enrichment guide**: Finish it, act on the priority order. Grade: B+.
- **08 vs. Cockatoo guide**: Worth reading once, but it quietly contradicts the lifespan number the rest of the site trained me on. Grade: B.

**2. Hub and encyclopedia: do they earn their place?**

They split cleanly and don't just repeat the deep dives. The hub is a router: numbers, an emergency card, a buy list, nothing you'd call reading. The encyclopedia is the only place with the scientific name, wild range, and the actual mutation history (pied in 1949, lutino in 1958). Neither is filler.

But they disagree with a deep dive on lifespan, and the disagreement matters because it drives a budget. The hub says: "Cockatiels live 10 to 15 years, so this is a long-term financial commitment." The vs.-Cockatoo guide says: "A cockatiel's 15 to 25 year lifespan is already a real commitment," and its FAQ puts it plainly: "A cockatiel commonly lives 15 to 25 years." The encyclopedia itself splits the difference oddly: "10 to 14 years in the wild; up to 25 years in captivity." Three numbers, same site, same bird: 10-15, 10-25, 15-25.

**3. The set as a whole: could I actually do this?**

Yes, mostly. Cage size, bar spacing, sleep hours, the 75/80-20/25 pellet-to-fresh-food ratio, the step-up technique, and the emergency symptom list are all specific enough to act on today, and they agree with each other everywhere except lifespan. What's missing: no product-level pricing for anything but the bird itself, no guidance on solo versus paired cockatiel beyond one enrichment bullet, and no cockatiel-specific page on quarantine, wing clipping, or egg laying: those live behind links to cross-species guides I'd have to leave this species' own track to read.

**4. Overlap and conflict across the deep dives**

Read twice or more, near-verbatim: the emergency symptom list (hub, health guide body, health guide FAQ), the kitchen non-stick warning (hub, health guide, cage guide), bar spacing, and sleep hours. That's fine, it's the same fact reinforced.

One real disagreement: the crest guide. The handling guide's fun fact says "swept sharply forward can mean startled alertness," while the vs.-Cockatoo guide's fun fact says "straight up usually signals excitement or alarm." Both agree flattened means fear, but they describe the alert posture two different ways, which is exactly the kind of detail a new owner is trying to read correctly in the moment.

**5. What doesn't add up on inspection**

The cost guide's own numbers fail to reconcile. It states: "Food and supplies (pellet-based diet with fresh food) | $24 - $63 / month" directly above: "Annual routine total (food, toy replacement, cage upkeep) | $200 - $350 / year." Food alone at $24 to $63 a month annualizes to $288 to $756, which already exceeds the stated $200 to $350 total that's supposed to include food plus toys plus cage upkeep. The hub repeats the flawed $200-$350 figure without catching it.

Separately, the hub's buy list has six items (cage, perches, dishes, cuttlebone, toys, nightlight) pointing to the cost guide for prices, but the cost guide's table only has rows for the bird, cage, perches, dishes, and toys. Cuttlebone and nightlight never get priced anywhere on the site.

**6. Trust**

The unsourced "When to Worry" figure being left out rather than invented is the strongest trust signal in the set: "We couldn't find a single, consistently sourced number for exactly how many hours or days a cockatiel can safely go without eating, and would rather say that honestly than invent a round figure." That's the one sentence that most convinced me an actual keeper, not a content mill, wrote this. What made me doubt them was the annual-cost arithmetic above, plus the lifespan number moving between three different ranges depending on which page I was on.

**7. Overall grade and two fixes**

**Grade: B+.** Specific, mostly internally consistent, willing to admit gaps, undercut by one real arithmetic error and one unreconciled lifespan figure that both touch the budgeting story the site leans on.

**Change 1**, fix the annual cost math. Replace: "Annual routine total (food, toy replacement, cage upkeep) | $200 - $350 / year" with something like: "Annual routine total (food, toy replacement, cage upkeep) | $350 - $900 / year", and update the hub and FAQ to match.

**Change 2**, pick one lifespan and use it everywhere. Replace the hub's "Cockatiels live 10 to 15 years, so this is a long-term financial commitment" with: "Cockatiels commonly live 15 to 25 years in captivity, so this is a decades-long financial commitment," matching the vs.-Cockatoo guide, and update the cost guide's two matching lines the same way.

### Cockatoo

**1. Page by page**

- 00 Hub: Would finish it. Actionable: the whole first-week checklist, straight into a decision. Grade A-.
- 01 Encyclopedia: Would skim, not finish slowly. Actionable: the CITES/import history, nothing else new. Grade C+.
- 02 Cost guide: Would finish, then get annoyed. Actionable: the budget range, but see below. Grade C.
- 03 Handling guide: Would finish. Actionable: the crest/eye/tail body language section, genuinely useful before day one. Grade A-.
- 04 Health issues: Would finish. Actionable: the emergency-vs-behavioral triage list. Grade B+.
- 05 Cage setup guide: Would finish. Actionable: bar spacing and cage material choice. Grade A-.
- 06 Feeding guide: Would finish. Actionable: the toxic food list and portion picture. Grade A.
- 07 Enrichment guide: Would finish, respect it more than the others. Actionable: the priority order, if you ignore that it undercuts its own thesis (see below). Grade B.
- 08 Legal guide: Would finish, best-researched page in the set. Actionable: check your state before buying. Grade A-.
- 09 Screaming/plucking guide: Would finish. Actionable: the independence-building bullet list. Grade B+.

**2. Hub and encyclopedia**

The hub earns its place, it's a genuine dashboard with its own numbers, not a rehash. The encyclopedia mostly does not: past the CITES trade history, it is the same bio a reader already has from the hub tagline.

They do disagree, mildly, with one deep dive. The hub says diet is "Pellets should make up 75 to 80% of daily intake, with fresh vegetables and fruit covering no more than another 20 to 40%." The cage setup guide says "fresh vegetables making up most of the rest and fruit and seeds kept to a smaller share, seeds specifically should stay under about 10%." The hub bundles fruit with vegetables under one ceiling; the cage guide splits fruit off and pairs it with seeds under a much tighter one. A reader trying to portion a bowl gets two different instructions for where fruit goes.

**3. The set as a whole**

Yes, mostly. Setup: cage size, material, bar spacing, and locks are all specific and actionable. Buying: species-by-species price ranges exist. Feeding: the ratio and toxic list are clear. Health: warning signs are listed plainly enough to act on. What's missing is a reconciled total budget: the cost guide never actually adds its own numbers into one figure you can trust (see below), so a buyer leaves without a number to save toward.

**4. Overlap and conflict across the deep dives**

Over-bonding and the 4 to 6 hour daily commitment get full treatment four separate times, in the handling guide, the health guide, the enrichment guide, and the screaming/plucking guide, largely consistently. That's the one thing worth reading once and cross-referencing rather than reading four times.

One real internal conflict: the enrichment guide says Van Zeeland's review lists "environmental enrichment, foraging enrichment and reinforcement-based training together as behavioral interventions, without ranking them," then two sections later runs a "## Priority Order" that puts "1. Daily short training sessions" at the top. It cites a source for not ranking, then ranks anyway.

Lifespan also drifts. The cost guide: "40 to 60 years is typical, with some individuals living into their 70s or beyond." The enrichment guide's own FAQ: "commonly into the 40s and 50s and sometimes beyond 60 for larger species." Same species, same site, two different pictures of how long this commitment runs, on the number that's supposed to drive the whole decision.

**5. What doesn't add up on inspection**

The cost guide's cage table and its own prose disagree outright. The table: "Large stainless steel cage | $1,450 - $1,550" and "Heavy-gauge powder-coated cage ... | $820 - $880." The prose right below it: "A large, appropriately sized cage runs $200 to $1,000 depending on quality and size." Both stainless and powder-coated already exceed $1,000 in the table above. The article's own "Upfront Setup: Roughly $250 to $1,300 or More" header can't be true if the cage in its own table starts at $820.

The legal guide's summary table marks Vermont "Banned" outright, but the closing "Takeaway" section, which recaps Maine, Arkansas, and Hawaii by name, never mentions Vermont at all. A reader who only reads the takeaway would come away thinking every US state is at worst permit-restricted.

**6. Trust**

What made me doubt them was the cost table contradicting its own prose in the same article, that's not a source disagreement, it's arithmetic the writer should have caught. What built trust back was the enrichment guide's honesty about weak evidence: "research on FDB in parrots is currently in its infancy," stated plainly rather than papered over with confident advice, which is rarer than it should be on pet sites.

The sentence that most convinced me a real keeper wrote this: "A cockatoo solves a puzzle once and then it is a container." That's not research paraphrase, that's someone who has watched a cockatoo do exactly that.

**7. Overall grade and two fixes**

Grade: B-. Deep, specific, and unusually honest about evidence limits, undercut by a cost section that contradicts itself on the number buyers most need.

Fix one: replace the cost guide's mismatched cage prose. Change "A large, appropriately sized cage runs $200 to $1,000 depending on quality and size" to "A large, appropriately sized cage runs $820 to $1,550 depending on material and size" so it matches the table above it, and update "Upfront Setup: Roughly $250 to $1,300 or More" to "Upfront Setup: Roughly $900 to $1,750 or More."

Fix two: replace the enrichment guide's self-contradicting ranking. Change the header "## Training, as the Primary Item" to "## Training, One of Three Pillars" and change "## Priority Order" to "## A Practical Setup Order (Not a Ranking)" so the section stops claiming a hierarchy the article's own cited source explicitly says doesn't exist.

### Lovebird

**1. Page by page**

- **00 Hub**: Finish it, yes. Actionable: the buy list, bar spacing, and the one-bird-or-two decision. Grade: A-
- **01 Encyclopedia**: Finish it. The trapping history (Fischer's export ban in 1992, the black-cheeked lovebird's Vulnerable status) is the one thing not repeated anywhere else in the set. Grade: A
- **02 Cost guide**: Finish it, but the setup math doesn't hold up under its own numbers (see #5). Grade: C+
- **03 Handling guide**: Finish it. Directly actionable: exterior dishes, stick-training, moving an aggressive bird to a neutral room. Grade: A-
- **04 Health issues guide**: Finish it, the best page in the set. Actionable down to drug names and dosing intervals (leuprolide, three to four weeks; deslorelin implant, three to six months). Grade: A
- **05 Cage setup guide**: Finish it. Actionable and specific: half-inch bar spacing, no round cages, no grit. Grade: A-
- **06 Feeding guide**: Finish it. The 75-80% pellet split and the "why dusting seed does nothing" mechanism are both genuinely useful. Grade: A
- **07 Enrichment guide**: Finish it. Actionable: 3 to 5 toys, rotated weekly, hide part of the diet. Grade: B+
- **08 Vs. Budgie guide**: Finish it, but it hands you a size figure that contradicts two other pages (see #2). Grade: B

**2. Hub and encyclopedia: do they earn their place?**

Yes, differently. The hub is a router with real numbers pulled straight from the deep dives, it doesn't add new facts so much as compress them into a first-week checklist and an emergency card. The encyclopedia is the one page that isn't repeated anywhere: the naming history (Vieillot in 1818, Reichenow naming Fischer's lovebird in 1887 for the explorer it's named after), the 1957 first captive-bred blue Fischer's, the 1992 Tanzanian export suspension. None of that shows up in any deep dive.

They do disagree with a deep dive, though not with each other. The hub says "Adult Size: 5 to 6.5 inches (13 to 17 cm)" and the encyclopedia matches it exactly. But the vs-budgie deep dive says "A lovebird is about 5 to 6 inches long," and its own comparison table lists "Adult size: ~5-6 inches." Three pages, two different upper bounds.

**3. Could you actually keep one after reading all of it?**

Mostly, yes. Cage size and material, bar spacing, diet split, the calcium/vitamin A mechanism, enrichment cadence, and the emergency signs are all here and consistent with each other. What's missing: the set never gives a real out-of-cage-time number separate from the vague "two hours of interaction a day," never says how often to actually bathe or mist the bird despite noting lovebirds bathe enthusiastically, and leans on two linked-but-unread articles (quarantine, pellet conversion) for procedures the hub treats as day-one essentials. You'd still need to click out for those before bringing a bird home.

**4. Overlap and conflict across the deep dives**

Read twice, nearly word for word: the "one bird or two, roughly two hours a day, closer to keeping a pair of finches" passage appears in the hub, the cost guide, and the handling guide. The nest box/happy hut warning appears in the hub, cost guide, handling guide, cage setup guide, and health guide, five times. No numbers disagree there, it's just heavy duplication rather than conflict.

The one real disagreement is the size figure covered above: hub and encyclopedia say "5 to 6.5 inches," the vs-budgie guide says "about 5 to 6 inches."

**5. What doesn't add up on its own**

The cost guide's own table doesn't support its own heading. The section is titled "Upfront Setup: Roughly $300," but the table underneath it reads cage $80-150, perches $20-35, toys $20-40, cover $10-20, which sums to $130-245, never $300. Worse, the paragraph directly below that same table says "A quality stainless or powder-coated option runs $80 to $200," a different price for the same cage the table just quoted at $80-150. Use that second figure and the top end nearly reaches $300 ($200+35+40+20=295); use the table's own number and it can't.

The hub's buy list also lists five items, cage, perches, toys, cover, and food/water dishes, while the cost table only prices four of them, no dishes, even though the cost guide's own FAQ says the $300 "bowls" are included.

**6. Trust**

What raised doubt: the cage price contradicting itself inside one article, and the sidebar's identical 20-item "Health and More" list pasted unchanged onto all nine pages, which reads like template machinery rather than curation.

What built it: the drug-and-duration specificity in the health guide, the brood-patch explanation for why pulled eggs backfire, and named, sourced claims throughout (VCA, LafeberVet, PetMD, the University of Michigan's Animal Diversity Web). The single sentence that most convinced me a real keeper wrote this, not a scraper: "Reintroducing a toy that's been out of rotation for a few weeks often gets treated as new again, which stretches a small toy collection further than buying constantly." Nobody cites that. It's the kind of thing you only know from actually rotating toys in and out of a lovebird's cage.

**7. Overall grade and two fixes**

**Grade: B+.** Deep, well-sourced, internally consistent almost everywhere, let down by one real arithmetic contradiction and one unresolved size figure that a careful reader will catch within minutes.

**Fix one**, the cage price. Change "| 18x18x24 in+ cage (larger for a pair) | $80 - $150 |" to "| 18x18x24 in+ cage (larger for a pair) | $80 - $200 |" so the table matches the prose right beneath it and the section's own "$300" heading actually sums correctly.

**Fix two**, the size figure. Change "A lovebird is about 5 to 6 inches long, and a budgie is around 7 inches" to "A lovebird is about 5 to 6.5 inches long, and a budgie is around 7 inches" and update the comparison table's "~5-6 inches" to "~5-6.5 inches" to match the hub and encyclopedia.

### Tarantula

**1) One line per page**

Care guide hub: Finished it fast, built to be skimmed. First-week numbers, emergency card, and buy list are directly actionable. The buy list skips feeding tongs, which the cost guide calls worth buying. B+

Encyclopedia: Short, and earns its slot instead of repeating the hub, with a CITES timeline (1985, 1994, 2019 listings) nothing else covers. A-

Cost guide: Usable price ranges, but its own header promise does not survive its own table, see below. C+

Handling guide: Clear and decisive, no hedging where none is needed, never contradicts the hub. A

Health issues guide: Matches the hub's emergency card almost word for word and explains the reasoning behind it. A

Tank setup guide: Real, usable numbers, honest about the one spot where sources genuinely split. A-

Feeding guide: The strongest article here, calm about the strangest fact of the hobby, that skipping meals for weeks is normal. Its own juvenile range is wider than what the hub quotes from it. A-

Enrichment guide: Genuinely good science writing that quotes the unflattering result instead of burying it, then miscounts its own findings by one. B+

Legal guide: The most rigorous page. Its jurisdiction count is the one figure in the set I checked by hand, and it adds up. A

Tarantula vs. Emperor Scorpion: A fair comparison, but its lifespan table drifts from numbers stated twice earlier in the set. B

**2) The hub and the encyclopedia**

They earn separate slots rather than repeating each other. The hub is a router built for action: setup numbers, budget, an emergency card, a buy list. The encyclopedia is natural history: species count, habitat, wild diet, and a CITES timeline, real information, not a summary of the deep dives. The one place the hub disagrees with a deep dive is juvenile feeding frequency. The hub: "juveniles roughly every week to two weeks (sources disagree on the exact number)." The feeding guide it links to: "estimates range from every 4 to 7 days up to every 7 to 14 days." The hub's summary is narrower than the article it claims to summarize, dropping the entire low end.

**3) The set as a whole**

After all nine pages I could build a 20x10x10 enclosure with the right substrate depth, run a feeding schedule by life stage, tell normal premolt fasting from a real emergency, and check whether my state restricts the exact species I want. Two gaps remain: nothing tells a first-time buyer where to source a captive-bred spider or how to sex one before committing to a decades-long female, and nothing here walks through the physical rehousing process, that guide sits in Health and More, shared across invertebrates, not in this species' own Deep Dive list.

**4) Overlap and conflict across the deep dives**

Dehydration signs, the rule against disturbing a molt, and the water dish requirement repeat across four articles. That repetition is fine, it is the one thing the set treats as non-negotiable. The real conflict is lifespan. The cost guide: "Female Chilean rose hairs commonly live 15 to 20 years or more, males considerably less, typically 4 to 7 years." The comparison guide: "A female tarantula of a commonly kept species can live 15 to 30 years... A male of the same species usually lives only 3 to 6 years." Both describe the general beginner case, not a named outlier, and they do not match on either sex.

**5) What does not add up on its own terms**

The cost guide's table fails its own header. It reads "Upfront Setup: Roughly $70 to $300, Plus the Spider," and its FAQ repeats that setups land "in the $70 to $300 range before the spider itself." The line items under that header, excluding the spider, are enclosure $20 to $80, substrate $10 to $30, and hide, decor, and a water dish at $20 to $60. That sums to $50 to $170, not $70 to $300. The enrichment guide does the same to its own count: the key takeaway box says "All four of those results are from the same study," and the FAQ below calls them "Three results that do not all point the same way."

**6) Trust**

The arithmetic slip in the cost guide and the miscount in the enrichment guide made me hesitate, not because either is dangerous, but because they are exactly what a careful editor catches before publishing a number-heavy page. What convinced me a real keeper is behind this, not a content mill, is one sentence in the enrichment guide about the result of its cited study that did not flatter the case for bigger enclosures: "The preference test is the result that ought to make everyone cautious. It is the closest thing to asking the animal directly, and the answer was a shrug." Nobody writes that sentence to move more enclosures.

**7) Overall grade and two fixes**

Grade: B+. Genuinely useful, safety-first throughout, and unusually honest about where sources disagree, but its own numbers do not always survive being checked against each other.

Fix one. In the cost guide, change "Upfront Setup: Roughly $70 to $300, Plus the Spider" to "Upfront Setup: Roughly $50 to $170, Plus the Spider," or add a table line that closes the gap to $300.

Fix two. In the enrichment guide, change "Three results that do not all point the same way" to "Four results that do not all point the same way," matching the key takeaway box it sits below.

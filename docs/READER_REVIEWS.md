# Reader reviews

Cold reads of the site by an agent that is told nothing about who wrote the
pages or how, and asked to review them as a keeper would. One section per
animal. Findings stay here until they are fixed, then move to the Fixed list
at the bottom of that animal's section with the commit that fixed them.

## How a test runs

- Extract the set with `node scripts/reader-extract.mjs <species-id> <out-dir>`.
  It writes the care guide hub, the encyclopedia entry, and every
  `<species>-*-guide.mdx` as plain text, with ComparisonTable rows as a
  table, FunFact and KeyTakeaway as labeled paragraphs, the Sources list, the
  links the body carries, and the Deep Dive list the page shows. Two early
  tests read hand-stripped text and reported "tables render as raw code" and
  "the hub links to nothing"; both were artifacts of the stripping.
- One Opus agent reads the set in order and answers a fixed prompt: a grade
  per page, hub versus deep dives, gaps, questions raised on one page and
  answered on another without the text saying so, overlap and conflicting
  numbers with both sides quoted, one link per page that would help most,
  trust, set grade, two changes first. The prompt is in READMEFIRST under
  "The set test prompt".
- Cost: about 65,000 to 70,000 Opus tokens for an eight or nine page set,
  50,000 for a single article. Screenshot-based page reviews cost the same
  and are only worth it for layout questions; they misread sticky sidebars
  and lazy-loaded images in flattened captures.
- What the test is good at: cross-page contradictions, questions left
  stranded on one page, sentences that read as an editor's note. What it is
  not: fact-checking against sources (that is the beef-up loop) and layout.

## Bearded dragon (2026-09-08, five deep dives, before the extractor existed)

Pages: cost, handling, health issues, tank setup, feeding. Hub, encyclopedia,
and enrichment were not in this test.

| Page | Grade | Reader's one line |
|---|---|---|
| Cost | B+ | Budget is usable ($400 to $800 upfront, $50 to $108 monthly); the UVB degradation explanation appears twice in adjacent paragraphs. |
| Handling | B+ | Shortest and cleanest of the five: wait 7 to 14 days, scoop from below, stop at the stress signs. |
| Health issues | A- | Real triage list, the fecal sample rule, skip over-the-counter dewormers. |
| Tank setup | A | Could buy and assemble the whole setup from this page, including UVI targets and the morph exception. |
| Feeding | A- | Schedule by age, staples, avoid list, eight causes of appetite loss; sourcing transparency is unusual. |

Set grade: B+. Strong and specific, undercut by supplement numbers that
disagree across two pages and by feeding not handing off to tank setup.

Conflicts, both sides quoted:

- Adult calcium. Tank setup: "Dust feeder insects with a phosphorus-free
  calcium supplement near-daily for juveniles, 2 to 3 times a week for
  adults." Feeding: "dust with plain calcium powder, daily on food is common
  guidance, with calcium plus D3 a couple times a week." No age split in
  feeding, and D3 is on one page and not the other.
- Adult food refusal. Health issues: "An adult refusing food for 1 to 2 weeks
  outside brumation." Feeding: "One veterinary teaching hospital treats
  refusing food for 1 to 2 or more days as a reason to seek care in adults."
- Brumation length, inside feeding: "commonly lasting 1 to 3 months" and
  later "not eating for 1 to 4 months is expected."

Stranded question: feeding says "only feed when basking temperatures are in
the correct range" and never says what the range is; tank setup has it.

Gaps the set never covers: cohabitation (feeding lists it as a stressor,
health mentions a cage-mate bite, tank setup never rules it out), hydration
and bathing, shedding care beyond "don't pull", adult size and lifespan.

Read twice or more: UVB replacement every 6 to 12 months (cost, tank setup),
impaction from loose substrate (four pages), the 80/20 flip (tank setup,
feeding), infrared thermometer (three pages).

Trust: the multivitamin appears only in tank setup's diet aside, not in
feeding; health warns about coil bulbs and tank setup never mentions them.
The sentence that convinced the reader a keeper wrote it: "if even one foot
is unsupported, the dragon feels off balance and will scramble to
compensate, which reads as 'difficult to handle' when it's really just a
support problem."

Reader's two changes: one canonical supplement schedule with ages and D3 in
feeding, tank setup's diet section cut to a pointer; feeding gets the
basking range or a link at the sentence that demands it.

Recommended links (one per page): feeding to tank setup at "only feed when
basking temperatures are in the correct range". Others not asked in this
test.

Open. Nothing fixed yet.

## Rabbit (2026-09-08, first pass, before the extractor existed)

Pages: hub, encyclopedia, cost, handling, health issues, tank setup, feeding,
enrichment. The hub and encyclopedia were fed as raw data fields, so the
reader could not see their Deep Dive lists or the cost guide's tables; those
two complaints are struck below. A second pass with the extractor follows in
the next section.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | C | Densest single page; a full care sheet that duplicates the deep dives at 60 percent depth. |
| Encyclopedia | D | Twenty seconds, nothing to act on; the wild lifespan claim not believable. |
| Cost | B | First year $1,000 to $1,500, then $500 to $800, plus a $500 to $1,000 emergency fund. One cell says "The rest of your budget." |
| Handling | A- | Chest-and-hindquarters lift, football hold, the trancing debunk, the stress list. Best written. |
| Health issues | A- | Concrete triggers, named sources, RHDV2 vaccine flagged. |
| Tank setup | B | Pen dimensions, flooring, litter; then a "Diet Basics" section it should not have. |
| Feeding | A- | Life-stage schedule, toxic list, seven reasons for appetite loss. |
| Enrichment | A | Changed what the reader would buy. A stray "and other sizes are available" fragment. |

Set grade: B-. Six strong deep dives undercut by a hub that repeats them and
contradicts them.

Hub versus deep dives, both sides quoted:

- Vet trigger. Hub: "A rabbit that has not eaten or produced droppings for
  12 hours is an emergency." Health: "treat eight as when you pick up the
  phone."
- Exercise. Hub: "at minimum 3 to 4 hours of free-roaming time." Tank setup:
  "a minimum of 5 hours a day." Enrichment: "Permanent beats scheduled."
- Hay share. Hub: "80 to 90%." Tank setup and feeding: "80 to 85%."
- Vet frequency. Hub: "Annual wellness visits." Health and cost:
  "twice-yearly."
- Costs. Hub pen "$60 to $150" vs cost "$40 - $100"; hub litter box "$15 to
  $25" vs cost "$5 - $15"; hub litter "$60 to $100" a year vs cost "$15 to
  $25" a month; hub hay "$150 to $250" a year vs cost "$20 to $40" a month.
  The hub's cost data carries a code comment, invisible on the page: "Rough
  starting ranges, not verified current pricing - needs a review pass."
- Encyclopedia: "wildLifespan: 5-12 years (wild)" against the hub's 8 to 12
  for pets.

Deep dives against each other:

- Greens. Tank setup: "roughly 1 cup per 2 pounds of body weight daily."
  Hub: "1 to 2 cups per 4 pounds." Hub FAQ: "a daily cup of fresh leafy
  greens per 5 pounds."
- Pellets. Tank setup: "about 1/4 cup per 5 pounds." Feeding: "roughly 1/8
  to 1/4 cup ... per 5 to 6 lbs." Hub: "1/8 to 1/4 cup per day," no weight.
- Uterine cancer. Hub: "affects the majority of unspayed female rabbits by
  age 4 to 5." Health: "Up to 80% of unspayed does aged 5 and older."

Gaps: cecotropes never explained, nail trimming never described though
clippers and styptic powder are on the checklist, bunny-proofing billed but
never described, grooming and molt, where to get a rabbit.

Stranded questions: handling mentions "10 Surprising Rabbit Facts", health
and feeding mention "the GI stasis guide" and an unlimited-hay guide, cost
mentions a budgie roundup, none linked in the text.

Read twice or more: hay-based diet (four pages), GI stasis (three), spay and
uterine cancer (three), litter training (two), wire flooring (two), bonding
(two).

Real defects confirmed in the files: the cost table cell "The rest of your
budget"; the enrichment fragment "Timothy hay should be the bulk of the diet
and available constantly, and other sizes are available"; the hub numbers
above; the encyclopedia wild lifespan.

Struck as extraction artifacts: "two tables render as raw code", "stray
KeyTakeaway tag", "the hub links to nothing" (the hub's Deep Dive list is in
the prerendered HTML; verified with the prerender flag set: 8 links).

Trust: health's "one of the highest cancer risks documented in any commonly
kept pet" has no source. The sentence that convinced the reader: "A rabbit
let out for an hour a day spends the rest of it confined, and the study
measured time-of-day effects for a reason: rabbits are crepuscular and want
the space at dawn and dusk, not when it suits the household."

Reader's two changes: make the hub a router with its numbers taken from the
deep dives; pick one greens and one pellet formula per pound and use it on
every page.

Open. Nothing fixed yet.

## Rabbit (2026-09-08, second pass, with the extractor)

Pages: hub, encyclopedia, cost, handling, health issues, tank setup, feeding,
enrichment, GI stasis (nine). 77,000 Opus tokens. Everything below is real
page content; no extraction artifacts this time.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | C | Repeats the deep dives more than it routes to them, and where it differs it is the one that is wrong. |
| Encyclopedia | C | Warrens, Iberian origin, breed size range; not care content and does not pretend to be. |
| Cost | B+ | Budget $150 to $600 setup, $60 to $100 a month, $500 to $1,000 emergency fund, adopt already altered. |
| Handling | A- | Best written: two-hand lift, football hold, no trancing, stress signs. |
| Health issues | A- | Find an exotic vet first, call at eight hours, ask about RHDV2, check hindquarters. |
| Tank setup | B | 4x4 pen minimum, no wire floor; the diet section does not belong here. |
| Feeding | A- | Life stage schedule, toxic list, seven reasons for appetite loss. |
| Enrichment | A- | Changed the reader's plan to two rabbits; priority list, dig box, bonding method. |
| GI stasis | A | What normal droppings look like, no pineapple juice, syringe feeding only under a vet. The only page that links out properly. |

Set grade: B. The deep dives are strong, sourced, and honest about
uncertainty; the hub in front of them is stale and contradicts them on the
numbers that matter most.

Hub versus deep dives, both sides quoted:

- Vet trigger. Hub: "A rabbit that has not eaten or produced droppings for
  12 hours is an emergency." Health: "so treat eight as when you pick up the
  phone."
- Exercise. Hub: "at minimum 3 to 4 hours of free-roaming time." Tank setup:
  "for a minimum of 5 hours a day." Enrichment: permanent access, scheduled
  hours are the wrong model.
- Greens. Hub body: "1 to 2 cups per 4 pounds of body weight." Hub FAQ: "a
  daily cup of fresh leafy greens per 5 pounds of body weight." Tank setup:
  "roughly 1 cup per 2 pounds of body weight daily." Feeding: "roughly 1 to 4
  cups per several pounds of body weight depending on the source."
- Hay share. Hub: "80 to 90%." Tank setup and feeding: "80 to 85%."
- Vet schedule and cost. Hub annual table: "Annual vet wellness check | $50 |
  $100." Health: "a twice-yearly wellness exam." Cost: "$60 to $100 per
  visit, with twice-yearly wellness checks recommended."
- Companions. Hub: "Same-sex pairs (particularly two spayed or neutered
  animals) work well when properly introduced." Enrichment FAQ: "Neutered,
  opposite sex is the usual recommendation."
- Lifespan. Hub: "8 to 12 years with good care." Tank setup: "Indoor rabbits
  typically live 7 to 10 years."
- Costs. Hub pen $60 to $150 vs cost $40 to $100; hub spay or neuter tops
  out at $400, cost guide "$500 or more."
- Difficulty. Hub grades the animal "Beginner/Intermediate"; the deep dives
  describe an exotic-vet patient with an eight hour emergency clock.

Deep dives against each other:

- Pellets. Tank setup: "about 1/4 cup per 5 pounds of body weight." Feeding:
  "roughly 1/8 to 1/4 cup ... per 5 to 6 lbs of body weight daily, sources
  vary."
- Alfalfa. Tank setup: "alfalfa is appropriate only for rabbits under about
  6 months old." Feeding: "Juveniles (7 weeks to 7 months): Unlimited
  alfalfa hay."
- Uterine cancer. Health: "aged 5 and older." Hub: "by age 4 to 5."
- Space. Tank setup gives 8 plus 24 square feet and five hours; enrichment
  says permanent access is the finding. Nobody reconciles them.
- Feeding and GI stasis agree on the eight to twelve hour window in the same
  words. The one number the set has settled.

Gaps: nail trimming technique (clippers are on the buy list), cecotropes
explained only inside the emergency article, bunny-proofing (cords,
baseboards), litter change frequency, heat and cold beyond one hub line,
carrier and car travel, RHDV2 cost, where to get a rabbit.

Stranded questions (answer exists in the set, text does not say where):
cost's "A GI stasis workup alone can exceed $1,500"; handling's "Teeth
grinding, a pain signal, not contentment"; feeding's fur ingestion and
brushing (no page covers brushing); enrichment's "bond them properly" and
the hub's bonding basics; health's sore hocks and tank setup's flooring.

Read twice or more: hay share, pellet amounts, GI stasis signs, the 80
percent uterine cancer figure, litter training via hay over the box, dental
overgrowth. Tank setup's diet section duplicates and contradicts feeding.

Recommended links, one per page:

| Page | Sentence | Link to |
|---|---|---|
| Hub | "A rabbit that has not eaten or produced droppings for 12 hours is an emergency." (and fix the number) | GI stasis guide |
| Encyclopedia | "In the wild they live in large, complex underground warrens with strict social hierarchies." | Enrichment guide |
| Cost | "A GI stasis workup alone can exceed $1,500." | GI stasis guide |
| Handling | "Teeth grinding, a pain signal, not contentment" | GI stasis guide |
| Health issues | "Sore hocks (pododermatitis), from wire flooring or inadequate bedding, another reason flooring choice matters." | Tank setup guide |
| Tank setup | "Hay should make up about 80 to 85% of a rabbit's diet, unlimited access, not a side item." | Feeding guide |
| Feeding | "Stress. New housing, a new pet in the household, loud noises, or handling changes are real triggers." | Handling guide |
| Enrichment | "Permanent access to a run, or free range of a rabbit-proofed room, is what the corticosterone result is pointing at." | Tank setup guide |
| GI stasis | none needed | |

Trust: enrichment's stranded fragment "and other sizes are available" and a
line about "the reptile half of this series"; feeding's "Roughly 70% of
rabbits recover" with no source; the tank setup URL calling a rabbit pen a
tank setup. The sentence that convinced the reader, from GI stasis: "Teeth
grinding (bruxism) at a harsh, audible pitch - distinct from the soft,
contented tooth-purring rabbits do when relaxed." (That sentence carries a
hyphen used as a dash; the checker allows hyphens.)

Reader's two changes: make the hub the shortest page on the site (buy list,
emergency card, one line per topic linking the deep dive, no duplicated
figures); cut the diet section from tank setup and link feeding, then one
greens and pellet rule across every page.

Open. Nothing fixed yet.

## Single-article reads (2026-09-08, text only)

Earlier single-page reads, kept for the record. Grades: tegu handling A-,
budgie cost B-, flying squirrel health B then C after its links were cut,
leopard gecko health B-. Common findings: the FunFact box restating a body
sentence, closing link paragraphs read as housekeeping, a sibling guide
being the answer to a question the page raised without the page saying so
(the one-sibling-link exception in RULES came from this), the budgie cost
guide's cage row with no price and a Sources block that does not name the
VCA and PetMD pages the body cites, the leopard gecko health guide's
unsourced "about half of captive leopard geckos may carry it."

## What the tests changed so far

- The article page: excerpt block removed, Deep Dive prerendered and given a
  care-guide row, sidebar order on phones, contents highlight.
- RULES: no sibling links or care-guide sentence in prose, one sibling link
  allowed with a reason where it is the answer, the site never talks about
  itself, Mike's original text is editable when it helps the reader.
- The linking pass across all 532 series guides.
- This file and scripts/reader-extract.mjs.

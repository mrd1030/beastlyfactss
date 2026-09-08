# Reader reviews

Cold reads of the site by an agent that is told nothing about who wrote the
pages or how, and asked to review them as a keeper would. One section per
animal. Findings stay here until they are fixed, then move to the Fixed list
at the bottom of that animal's section with the commit that fixed them.

## How a test runs

The extract shows the sidebar as two lists, Deep Dive (the species' own
articles) and Health and More (shared class guides, each with its excerpt).
The first three set tests showed one list of bare titles, and every reader
reported gaps the shared guides already covered. Read the gaps section of a
review against the Health and More list before treating a gap as real.

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

## Bearded dragon (2026-09-08, second pass, after the router hub)

Extractor set of thirteen pages (hub, encyclopedia, eleven guides including
brumation, eggs, growth, safe foods, and the leopard gecko comparison; the
shopping list has no -guide suffix and was not in the set). One Opus agent,
about 107k tokens.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B | A router; the whole first week in numbers plus a buy list, each figure attributed to a deep dive. |
| Encyclopedia | C+ | Natural history, nothing to act on, no body links. |
| Cost | B- | A budget, but the tables do not sum to the headline. |
| Handling | B+ | Wait 7 to 14 days, scoop from below, the stop-signal list. |
| Health issues | A- | Symptom-to-action for eleven conditions plus a vet-now list. |
| Tank setup | A | Could build the enclosure from this page alone. |
| Feeding | A- | Schedule, ratios, dusting, eight reasons for refusal. |
| Enrichment | B+ | Dig box spec, free-roam rules, a priority order that says what to skip. |
| Brumation | A | The weekly routine and the 3.5-month and 10 percent thresholds. |
| Eggs and egg binding | A | Lay box build and a gravid-vs-dystocia table. |
| Growth and weight checks | A | Weigh-in method, growth table, stool table, hydration signs. |
| Safe foods | A | Could shop from the tiers today. |
| vs leopard gecko | B | A real decision. |

Set grade: B+ (first pass, five pages, B+). "Deep, honestly sourced, and
genuinely usable, held back by numbers that disagree across pages and by
a hub that summarizes without always reconciling."

Hub versus the set, both sides quoted:

- Emergency card. The hub dropped the last four items of the health
  guide's vet-now list, including "Tissue protruding from the vent",
  which the guide calls "always treated as an emergency". My copying
  error; fixed the same day, the card now carries all fifteen.
- Adult size. Hub "18 to 22 inches nose to tail tip" (growth guide);
  encyclopedia "16-24 inches (40-60 cm) including tail". The growth guide
  reconciles them, the hub does not.
- Lifespan. Hub and encyclopedia "10 to 15 years"; the comparison guide
  "Bearded dragons typically live 8 to 12 years."
- UVB product. Hub buy list (from the shopping list) "Arcadia 14% Dragon
  or ReptiSun 10.0"; tank setup "ReptiSun 10.0 or Arcadia 12% Desert".
  "I am at the store holding two different Arcadia tubes."
- The diet-ratio row cites tank setup rather than feeding (feeding gives
  no percentages, so tank setup is the only page with the number).

Deep dives against each other:

- Brumation length. Feeding "not eating for 1 to 4 months is expected";
  brumation "typically runs 1 to 3 months... past about three and a half
  months". Both sourced, left as they are on the first pass too.
- Adult calcium. Feeding (after the second-pass move) "near-daily for
  juveniles and 2 to 3 times a week for adults"; eggs, of an adult
  female, "plain calcium dusted daily, calcium with D3 a couple times a
  week". A third page to reconcile.
- Food refusal. Feeding states the tension between its two sources;
  health flattens it to "An adult refusing food for 1 to 2 weeks outside
  brumation."
- Cost arithmetic. Upfront table sums to roughly $510 to $1,380 against
  "$400 to $800"; monthly table $63 to $117 against "$50 to $108". The
  tables and the headline are not the same budget.

Gaps: enclosure cleaning and disinfection, day one (transport,
quarantine, first vet appointment), how to find a reptile vet, and
shedding, which three pages cite as a cause and no page explains.

Stranded: handling's "don't pull at loose skin" (health explains tail
rot); feeding's brumation reason (never points at the brumation guide);
enrichment's gravid females (never points at eggs); the comparison's
"setup cost: Higher" (never points at cost, though cost points back).

Recommended links, one per page:

| Page | Sentence | Link to |
|---|---|---|
| Hub | "Lifespan: 10 to 15 years in captivity." (the one row with no source) | Encyclopedia |
| Encyclopedia | "Adult Size: 16-24 inches (40-60 cm) including tail." | Growth guide |
| Cost | "A single impaction surgery runs $800 to $2,500." | Health issues guide |
| Handling | "If your dragon is mid-shed, don't pull at loose skin." | Health issues guide |
| Health issues | "If your dragon hasn't defecated in five or more days, it's time to see a vet." | Growth guide's stool table |
| Tank setup | "Skip hot rocks entirely, they're a common cause of thermal burns." | Health issues guide |
| Feeding | "A seasonal dormancy most captive dragons can enter, typically starting between 1 and 3 years old, commonly lasting 1 to 3 months." | Brumation guide |
| Enrichment | "...a real husbandry requirement for gravid females who need somewhere to dig a lay site." | Eggs guide |
| Brumation | "Weigh the dragon. A kitchen scale that reads in grams is enough." | Growth guide |
| Eggs | "Substrate depth: 6 to 12 in (15 to 30 cm) of a 50/50 mix..." | Enrichment guide's dig box |
| Growth | none needed | |
| Safe foods | none needed | |
| vs leopard gecko | "Approx. setup cost: Higher / Lower" | Cost guide |

Trust: the cost tables; the lifespan split; two Arcadia percentages; a
brumation guide sentence that ends in a colon and delivers nothing ("For
owners who want the brumation routine, the pre-brumation vet checklist,
and a full year of husbandry in one printable reference:", the care
package block under it does not render in the extract); safe foods
calling the eggs guide "upcoming" when it is published; two pages
pitching a care package inside the advice. The sentence that convinced
the reader, from handling, same as the first pass: "if even one foot is
unsupported, the dragon feels off balance and will scramble to
compensate, which reads as 'difficult to handle' when it's really just a
support problem."

Reader's two changes: make the cost tables and the headline budget agree,
and settle lifespan, adult size, and the Arcadia bulb to one figure each
across hub, encyclopedia, and comparison; then the four cross-links
(feeding to brumation, enrichment to eggs, handling to health, comparison
to cost).

Fixed the same day: the cost guide's sum sentence now reads off its own
table (near $400 with budget picks, past $1,100 premium, $400 to $800 the
realistic middle, the vet exam on top); lifespan 10 to 15 in the leopard
gecko comparison; adult size 16 to 24 inches on the hub with 18 to 22
typical (Mike's call: up to 24); tank setup names both Arcadia tubes;
the eggs guide's adult calcium matches feeding's 2 to 3 times a week;
the health guide's adult refusal bullet carries the lethargy, stool, and
abdomen clause; safe foods links the eggs guide instead of calling it
upcoming; eight of the thirteen links (cost, handling, health, feeding,
enrichment, brumation, eggs; hub lifespan has no link slot to the
encyclopedia). Not added: tank setup to health (second suffix link), the
comparison table cell (no markdown in cells). Brumation 1 to 3 against 1
to 4 months left, both sourced. The brumation guide's colon sentence
introduces a care package card the extractor now renders as a card.

Open: the rest of the above, and the gaps: day one
and quarantine, shedding, cleaning and hygiene, and the power-outage
floor are all covered by the shared reptile guides in the sidebar's
Health and More list. Same extractor blind spot as the rabbit third pass,
same fix: the extractor shows the shared list with excerpts, and the hub's
first-week card carries a day one, shedding, hygiene, and power outage row
sourced to those guides. Finding a reptile vet is still uncovered.

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

## Rabbit (2026-09-08, third pass, after the router hub)

Same extractor, same prompt, one Opus agent, about 74k tokens. Run after
the hub was rebuilt as a router (RULES, Hubs) and the second-pass fixes
landed in the deep dives.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | A- | The only page that says what to do in week one and what to buy: pen size, litter type, the 8 hour call, the budget. A router, not a rerun. |
| Encyclopedia | C- | Thirty seconds, nothing to act on, and its difficulty and lifespan numbers fight the hub. |
| Cost | A- | Can build a real budget from it. |
| Handling | A | Two-hand lift, football hold, what to stop doing. |
| Health issues | A- | The vet-today list and the spay argument. |
| Tank setup | B+ | Pen, flooring, litter box, done. |
| Feeding | A- | Best page for daily decisions, apart from one age conflict. |
| Enrichment | A | Changed the plan to two rabbits. |
| GI stasis | A- | The dropping-check habit is the one thing the reader will do daily. |

Set grade: A- (from B). "Genuinely useful, well cross-linked, and honest
about uncertainty, held back by an encyclopedia that fights the hub and a
handful of numbers that do not reconcile."

Hub versus the set: one slip, the hub credited "At least 5 hours a day to
run" to the enrichment guide when the figure is tank setup's, and
enrichment argues against a daily allowance. Fixed the same day (source
changed to tank setup). Otherwise the hub agrees with every deep dive.

Encyclopedia versus hub, both sides quoted:

- Difficulty. Encyclopedia "Beginner/Intermediate", hub "Intermediate"
  (the hub label was changed on the second-pass finding; Mike decides
  which one stands, then both match).
- Lifespan. Encyclopedia "5-12 years (wild); up to 12+ years in
  captivity", hub and tank setup "7 to 10 years indoors".

Deep dives against each other:

- Alfalfa, inside feeding: "Juveniles (7 weeks to 7 months): Unlimited
  alfalfa hay" against "Transition to adult (roughly 4 to 6 months):
  Alfalfa is phased out." The reader cannot do both at five months.
- Hay share, softer: GI stasis "80% or more", hub and feeding "80 to 85%".
  Enrichment "Timothy hay should be the bulk of the diet"; feeding allows
  orchard, oat, or brome equally.
- Read four times: the 8 to 12 hour rule. Three times: continuously
  growing teeth. Defensible for the emergency, tedious for the teeth.

Gaps: nail trimming (the buy list sells clippers, no page shows how),
carrier use and the car trip, brushing during a molt (feeding names fur
ingestion as a stasis cause), heat beyond "above 85 degrees F", the cost
of the RHDV2 vaccine health calls near-mandatory.

Stranded: handling's teeth grinding (only GI stasis explains the
difference from tooth-purring); cost's uterine cancer (only health gives
the age-two onset); tank setup's "spaying improves litter habits" (only
cost says what it costs).

Recommended links, one per page:

| Page | Sentence | Link to |
|---|---|---|
| Hub | none needed, every line carries one | |
| Encyclopedia | "Adult Size: Highly variable; 2.5-20+ lbs depending on breed" | Feeding guide |
| Cost | "Rabbits need an exotic or rabbit-savvy vet, not a standard small-animal clinic, and a single serious illness can be expensive." | Health issues guide |
| Handling | "Most rabbits are calmest with all four feet on the ground, and many never come to love being picked up..." | Enrichment guide |
| Health issues | "Annual vaccination is recommended in the US and is genuinely worth discussing with your vet, not an optional extra." | Cost guide |
| Tank setup | "Spaying or neutering also meaningfully improves litter habits." | Cost guide |
| Feeding | "GI stasis. A slowdown or stoppage of normal gut motility..." (named five times, never linked) | GI stasis guide |
| Enrichment | "Neuter both, bond them properly instead of putting two rabbits in a room." | Cost guide |
| GI stasis | trigger table row "Low-fiber diet" | Feeding guide |

Trust: the unsourced "Roughly 70% of rabbits recover with prompt
veterinary treatment" (feeding, flagged in the second pass too); the
"$1,500 workup" beside a "$500 to $1,000 emergency fund"; the housing
article's URL saying tank setup. The sentence that convinced the reader,
from enrichment: "Bonding takes weeks and going too fast is how it fails:
short supervised sessions on ground neither rabbit has claimed, ended
before either animal is tired of it, repeated daily until they rest in
contact."

Reader's two changes: reconcile the alfalfa cutoff, lifespan, difficulty,
and the emergency fund against the $1,500 workup; then cover what the buy
list already sold (nails, carrier, molting, heat).

Fixed the same day: the alfalfa cutoff (juveniles to about 6 months, the
transition 4 to 7 months and said to overlap), the emergency fund line
now says more if you can since one workup can exceed it, and three of the
nine links (cost to health, handling to enrichment, feeding to GI
stasis). Not added: health, tank setup, and enrichment to cost, each of
which would be a second same-species suffix link and trip the checker;
the GI stasis table row, since table cells do not take markdown links;
the encyclopedia, which is structured data. Lifespan settled 2026-09-08 against the House Rabbit Society, VCA, and
the RSPCA: 8 to 12 years indoors, some to 14 or beyond, about 3 to 5
outdoors, 1 to 2 wild. The tank setup guide's 7 to 10 and the
encyclopedia's "5-12 years (wild)" were the outliers and now match.
Difficulty settled at Beginner/Intermediate on the site's own legend (a
real learning curve, no environmental parameters to balance), one notch
above the guinea pig; hub and encyclopedia agree.

Open: the rest of the above, and the gaps: nails,
carrier and car travel, molting, and heat are all covered by the shared
small-mammal guides in the sidebar's Health and More list (grooming, vet
trips, heat stress). The reader never opened them because the extract
listed them as bare titles inside one Deep Dive list. The extractor now
shows the two lists separately with each shared title's excerpt, and the
hub's first-week card carries a heat, nails, molting, and vet trips row
sourced to those guides.

## Leopard gecko (2026-09-08, first pass, after the router hub)

Extractor set of ten pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, temperature, vs crested gecko).
One Sonnet agent, about 102k tokens. The hub was already reconciled to
the router shape before this pass; this is the first review filed to
this doc for the species.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | A | The only page that hands you a first-week checklist, an emergency card, and a buy list without hunting across seven articles. |
| Encyclopedia | B | Readable, but nothing here changes what I do. |
| Cost | A | The page I'd screenshot before buying anything. |
| Handling | A | The tail-drop section alone justifies the page. |
| Health issues | A | The crypto section is the single most important thing in the set. |
| Tank setup | A- | The humidity split (30-40% ambient, 70-80% in one hide) is the detail I'd have gotten wrong without it. |
| Feeding | A | Honest that sources disagree on the adult schedule instead of faking a precise number. |
| Enrichment | B+ | A "do this once the basics are right" page, not a setup page. |
| Temperature | A- | The most rigorous page in the set, names LafeberVet, Zen Habitats, and Merck where they disagree, but wasn't listed as a Deep Dive on any other page. |
| vs crested gecko | B+ | Useful for deciding, but its own table and body text didn't agree with each other. |

Set grade: B+. "The numbers are trustworthy and the site is genuinely
useful end to end, but two small cross-page number conflicts and a
temperature guide that's the most-cited page in the whole set yet
excluded from every Deep Dive list undercut the polish."

Hub versus the set, both sides quoted:

- Night floor versus outage threshold. The hub's "Temperatures" row
  reads "Nights in the 70s, with 65°F the floor," sourced to the
  temperature guide, which says "Temperatures can safely drop to 65°F
  at night... If your home drops below this, use a ceramic heat
  emitter." The hub's separate "Power outage" row reads "70°F is the
  normal night low. Below 60°F, add heat, move the animal, or call the
  sitter," sourced to the reptile emergency plan guide, whose own
  species table gives the leopard gecko a normal night low of 70°F and
  an "act below this" of 60°F. Both rows are copied correctly from
  their named sources, and the two guides answer different questions
  (the nightly floor to provide versus the outage threshold to act on),
  but the hub never says so, so a reader sees 65°F in one place and
  60°F in the other with nothing bridging them. Left for Mike: this is
  a hub row, out of scope for a deep-dive-only fix pass.
- Otherwise the hub agrees with the set: enclosure, temperatures,
  hides, humidity, feeding schedule, calcium, and budget all match the
  deep dive each row cites.

The set as a whole: a reader could set up, buy, feed, and keep a gecko
healthy from this set. The core numbers (36x18x18, 88 to 92°F warm
floor, 70 to 77°F cool side, three hides, the calcium/D3 schedule)
repeat across four or five pages and agree every time. Two gaps, both
checked against the sidebar's Health and More list before being called
real (neither is covered by quarantine, hygiene, or the emergency
plan guide): no page explains what a respiratory infection actually is
or how it presents, even though the temperature guide and the humidity
sections both warn that getting the numbers wrong causes one; and the
tank setup guide says to house the gecko alone, "they're not a social
species and don't do well cohabitating," without ever saying why. A
stranded question: the health guide says crypto is "diagnosed through
a fecal PCR test," and the cost guide separately prices "Initial vet
exam and fecal test: $150-215," but neither page connects the two
facts for the reader.

Deep dives against each other: temperature, humidity, quarantine
length, and the hide system repeat across four or five pages and stay
consistent, which reads as reassuring rather than sloppy. Three hub
FAQs are copied verbatim from the deep dives, expected for a router
page. One real conflict: the vs crested gecko guide's own comparison
table read "Supplemental heat needed: Yes - belly heat mat, ~88-90°F,"
while its own body text read "88 to 92 degrees F" twice, a same-page
mismatch a prior fix pass had corrected in the body but missed in the
table cell and the seoDescription tag.

Recommended links, one per page:

| Page | Sentence | Link to |
|---|---|---|
| Hub | "cryptosporidiosis, a severe and highly contagious parasite with no cure" | Health issues guide (hub out of scope this pass) |
| Encyclopedia | "over 100 recognized color morphs in captivity" | Cost guide (encyclopedia out of scope this pass) |
| Cost | "The thermostat isn't optional, it's what keeps the heat mat from overheating and burning your gecko." | Temperature guide |
| Handling | "they're not a species that craves interaction the way a bearded dragon might" | Bearded Dragon vs Leopard Gecko guide |
| Health issues | "low-level UVB is worth providing even though it's technically optional for this species" | Tank setup guide's UVB section |
| Tank setup | "house your gecko alone, they're not a social species and don't do well cohabitating" | nothing in this set covers it |
| Feeding | "that points to a medical cause rather than a normal cycle" | Health issues guide |
| Enrichment | "give a gecko something closer to natural hunting behavior than a bowl of static food" | Feeding guide |
| Temperature | none needed, already the best-linked page in the set | |
| vs crested gecko | "near the very top of every 'best first reptile' list" | Five Reptiles roundup |

Trust: the 60°F/65°F reading and the 88-90/88-92°F mismatch both read
as editing slips rather than invented numbers, small but exactly the
kind of thing a reader checks against in an emergency. The sentence
that most convinced the reader a keeper wrote this, from handling: "A
dropped gecko tail can keep twitching on its own for a minute or more
after it detaches... a wriggling tail draws a predator's attention
while the rest of the gecko escapes."

Reader's two changes: reconcile the 60°F/65°F night threshold and the
88-90/88-92°F range, then add the temperature guide to the species'
own Deep Dive list plus the five missing cross-links above.

Fixed the same day: the vs crested gecko guide's comparison table cell
and seoDescription both changed from 88-90°F to 88-92°F to match its
own body text and the temperature guide; two link-only sentences that
pointed at the care guide hub (forbidden by RULES, Linking) were cut
from the temperature guide and the vs crested gecko guide rather than
redirected; two of the eight recommended links added (cost guide to
temperature guide, feeding guide to health issues guide). Not added:
the health issues guide's UVB link (the guide already carries its one
allowed sibling link, to tank setup on shed) and the enrichment
guide's feeding link (already carries its one allowed sibling link, to
health issues on substrate); the handling guide's link (the sentence
sits before the first H2); the hub and encyclopedia links (out of
scope, not deep dives).

Open: the temperature guide's absence from the Deep Dive sidebar on
every other leopard gecko page is a wiring gap, not a content gap.
`leopard-gecko-temperature-guide` was never added to the `leopard-gecko`
entry in src/lib/data/relatedArticles.js, so it doesn't auto-detect
(temperature is not a standard suffix) and has no manual entry either.
Fixing that means editing a src/ file outside the guide data file and
the SHORT_LABELS line, out of scope for this pass; left for Mike.
Also left for Mike: the hub's 65°F/60°F night-threshold rows (both
sourced), the respiratory infection and cohabitation content gaps, and
the crypto/fecal-test stranded question, none of which are fixable
with a link or a number correction.

## Leopard gecko (2026-09-08, second pass, after the fixes)

Same ten-page set, re-extracted after the first pass fixes landed
(the temperature guide's Deep Dive wiring fix included). One Sonnet
agent, about 98k tokens.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | A | A router with real numbers, not padding. |
| Encyclopedia | B | Wild-range and conservation content nothing else repeats. |
| Cost | A- | Tables to actually budget from. |
| Handling | A | The tail warning alone justifies the page. |
| Health issues | A- | Would bookmark it. |
| Tank setup | A | Everything needed to build the enclosure. |
| Feeding | A | Honest about where sources disagree. |
| Enrichment | A- | Cites two named studies, not vague filler. |
| Temperature | A | The most useful single page in the set. |
| vs crested gecko | B+ | Useful only before the decision is made. |

Set grade: A-. "Deeply consistent numbers, honest about disagreement
instead of hiding it, organized around what a new owner actually
needs first."

No numeric hub-versus-deep-dive disagreement found this pass, the
first pass's fixes held. One duplication noted, by design and not a
bug: the hub's emergency card matches the health issues guide's
vet-now list word for word, which is exactly how an emergency card
copied in full is supposed to work.

Checked and left alone, not a bug: tank setup calls UVB "not
strictly required... the way bearded dragons do," while health issues
says geckos "appear to rely heavily on UVB... to process calcium
properly, not diet supplementation alone." Read in full, both
sentences already carry the same hedge, health issues' own line ends
"...even though it's technically optional for this species." The two
pages agree; the tension is in how each excerpt reads in isolation,
not a factual or numeric conflict, so nothing to fix under the
deep-dives-only rules (no number to correct, no hedge to change,
both already say "optional").

Gaps, checked against the Health and More list before calling them
real: egg-binding prevention or setup (a nesting box, warning signs
before it becomes an emergency) is not in the health guide or any
shared reptile guide; brumation-specific temperature targets or
duration are named as a cause of appetite loss in the feeding guide,
but no page anywhere gives numbers for managing it. Both filed in
docs/READER_LOG.md.

Stranded questions, now linked: handling's settling benchmark
("stops fleeing or hiding when you approach") never pointed to tank
setup's three-hide system, which is what actually lets a gecko settle;
cost's "sick or emergency visits run $100 to $800 or more" never
pointed to the health issues guide, which is what those visits are
usually for. Both fixed this pass.

Two more recommended links added: cost guide to health issues (the
emergency-visits sentence), handling guide to tank setup (the settling
sentence). Not added: health issues' suggested link to cost guide
(already at its one-sibling cap, used on tank setup for the humid-hide
line), feeding's and enrichment's suggested links (both already at
cap from the first pass), vs crested gecko's suggested link to
handling (already at cap, used on cost guide).

Trust: the "about half of captive leopard geckos may carry it" crypto
statistic is repeated in three places with no source named, noted in
this file's older single-article read too and still unresolved,
that's a fact-check task (open a source or hedge the claim), not a
link or number fix; left for Mike.

Fixed the same day: two more links (cost to health issues, handling
to tank setup).

Open: the crypto statistic's missing source, filed for Mike; the
egg-binding and brumation-temperature gaps in docs/READER_LOG.md.

## Goldfish (2026-09-08, first pass, after the router hub)

Extractor set of nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, the tank size and bowl myth
piece). One Sonnet agent, about 100k tokens. The extractor had a bug
before this run: it only globbed `<species>-*-guide.mdx`, so the bowl
myth piece (no `-guide` suffix) never reached a reader even though it
is wired into RELATED_ARTICLES as goldfish's own content. Fixed in
scripts/reader-extract.mjs before this pass; see "What the tests
changed so far". The hub was rebuilt to the router shape after this
review came back, using its findings.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B+ | A fast checklist and cost table to act on right away. |
| Encyclopedia | B | Thin, but it has origin and wild lifespan nothing else repeats. |
| Cost | B+ | Honest that the fish is cheap and the tank is not, but its dollar range didn't match the hub's own table. |
| Handling | A- | Short, with an actual net-versus-hands routine. |
| Health issues | A | Dense but the most rigorously sourced page in the set, with real doses and named vets. |
| Tank setup | A- | Solid numbers for size, filtration, and water, though it repeats the hub and the bowl myth piece closely. |
| Feeding | A | The most complete page, and it admits when sources disagree instead of hiding it. |
| Enrichment | B | Useful, but the cited research is never named so it can't be checked. |
| Tank size and bowl myth | A- | The strongest argument in the set with a real numbers table, though one of its own FAQ answers contradicted a number used elsewhere. |

Set grade: B+. "Thorough and unusually honest about disputed numbers
where it counts, but small unreconciled figures between pages chip
away at that credibility."

Hub versus the set, both sides quoted (both since fixed by the router
rebuild, which cites the deep dive's own figure instead of restating
it):

- Setup cost. The old hub's own setup table, built around the canister
  filter it listed, summed to roughly $460 at the high end. The cost
  guide states flatly: "a complete setup lands in the $150 to $400
  range." The router hub's Budget row now quotes the cost guide's
  $150 to $400 figure directly instead of summing a separate table.
- Feeding schedule certainty. The old hub stated "Feed small portions
  once or twice a day" as settled, while the feeding guide says
  "Sources genuinely diverge... There's no single settled number."
  The router hub's Feeding schedule row now carries the feeding
  guide's own hedge instead of flattening it.

Deep dives against each other:

- Read twice with no disagreement: tank size across tank setup, the
  bowl myth piece, and enrichment (20 gallons for one fancy, 10 more
  per fish, 55+ for common or comet); overfeeding as the driver behind
  both ammonia spikes and swim bladder trouble (health issues, tank
  setup, feeding, enrichment); peas for constipation (health issues,
  feeding); sinking pellets over floating flakes to cut air-gulping
  (tank setup, feeding, enrichment).
- One real conflict: temperature. Tank setup says goldfish are
  "comfortable in the 65 to 75°F range." An FAQ on the bowl myth piece
  said goldfish need "cooler water (65-72°F) than bettas (78-80°F)."
  Tank setup cites PetMD and Advanced Aquarium Concepts in its Sources
  block for the water section this number comes from; the bowl myth
  piece carries no Sources block at all. Fixed to 65-75°F on the bowl
  myth piece to match the sourced page.

Gaps, checked against the Health and More list before calling them
real: how to pick a healthy goldfish or spot a "feeder" goldfish at
the store (the hub says to avoid them, no page or shared guide
explains how to tell); real medication names and doses for anything
besides anchor worm and flukes (the quarantine and hospital tank guide
covers salt, carbon, and aeration rules generally, not disease-specific
treatment). Both real, both content gaps rather than link gaps, filed
in docs/READER_LOG.md.

Stranded questions: handling's "some of the fungal and bacterial
issues... trace back to exactly this kind of opening" never pointed at
health issues' actual Fungal Infections section; feeding's swim-bladder
line never pointed at health issues' Swim Bladder Disorder section;
tank setup's sinking-pellet recommendation never pointed at feeding's
pellet-versus-gel-versus-flake breakdown.

Recommended links, one per page:

| Page | Sentence | Link to |
|---|---|---|
| Hub | none needed | |
| Encyclopedia | none needed | |
| Cost | "proper goldfish keeping requires a large tank and serious filtration, exactly the part the classic fish-in-a-bowl image leaves out entirely" | Tank setup guide (sentence sits before the first H2) |
| Handling | "Some of the fungal and bacterial issues goldfish pick up trace back to exactly this kind of opening" | Health issues guide |
| Health issues | "The first response is measured portions, sinking pellets instead of floating flakes, and a short fast with a single cooked, de-shelled pea" | Feeding guide |
| Tank setup | "Avoid overfeeding, it's one of the most common mistakes and a direct contributor to the waste load your filtration has to handle" | Feeding guide |
| Feeding | "Excess or low-fiber food causes gas buildup that presses on the swim bladder" | Health issues guide |
| Enrichment | "Correct tank volume, filtration, and a fully cycled tank come before plants, toys, or tankmates" | Tank setup guide (sentence sits before the first H2, inside the key takeaway box) |
| Tank size and bowl myth | "a tank that's technically 'big enough' by volume can still develop dangerous ammonia levels without a filter rated well above the tank's actual size" | Tank setup guide |

Trust: the hub-versus-cost-guide setup total gap, and the
encyclopedia's stated size floor of 4 inches, which matches no variety
in the bowl myth piece's table (fancy starts at 6). The sentence that
most convinced the reader a real keeper wrote this, from health
issues: "Both are correctly published, and where our care package
prints Merck's number this article's 0.066 mg/L is the one to follow
for anchor worm, because it is the species-and-parasite-specific
figure."

Reader's two changes: reconcile the hub's setup-cost table with the
cost guide's $150 to $400 figure (done by the router rebuild), and fix
the 65-75°F versus 65-72°F conflict between tank setup and the bowl
myth piece's FAQ (done).

Fixed the same day: the extractor bug that hid the bowl myth piece
from every reader run; the hub rebuilt to router shape, which resolves
the setup-cost and feeding-schedule-certainty conflicts above by
construction; the 65-72°F FAQ answer on the bowl myth piece corrected
to 65-75°F to match tank setup's sourced number; a link-only sentence
on the bowl myth piece that pointed at the care guide hub, cut rather
than redirected; five of the eight recommended links added (cost and
enrichment skipped, both sentences sit before the first H2).

Open: how to pick a healthy goldfish and disease-specific medication
doses beyond anchor worm and flukes, both filed in docs/READER_LOG.md
as items no guide covers. The encyclopedia's "4-12+ inches" floor is
out of scope for a deep-dives-only fix pass; left for Mike.

## Goldfish (2026-09-08, second pass, after the fixes)

Same nine-page extractor set, re-extracted from the fixed content (no
change since the extractor bug fix, the bowl myth piece was already
included). One Sonnet agent, about 94k tokens.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B+ | A fast, useful index with real numbers, but one of its own numbers was wrong elsewhere on the site. |
| Encyclopedia | C+ | Mostly natural history, the one useful line near-duplicates the hub's fun fact. |
| Cost | B- | Actionable budget breakdown, but the setup table showed as unparseable to the extractor. |
| Handling | A | Short and immediately actionable. |
| Health issues | A | Dense, sourced to Merck and IFAS, honest about a dosing conflict. |
| Tank setup | A- | Exact numbers to shop and cycle from. |
| Feeding | B+ | Thorough, but its own FAQ contradicted its own body text on fasting duration. |
| Enrichment | A- | Cites specific research, disciplined about decor not substituting for tank size. |
| Tank size and bowl myth | A | The strongest page in the set, myth then mechanism then fix. |

Set grade: B+. "Deep, sourced, mostly consistent, let down by one
broken table and one self-contradicting FAQ."

Real findings, both confirmed and fixed:

- The router hub's own FAQ still read "Goldfish need cooler water
  (65-72°F) than bettas," left over from before the first pass fixed
  that number on the bowl myth piece. The hub's FAQ is copied
  verbatim from a deep dive at build time, not re-synced automatically,
  so a source fix after the copy was made doesn't propagate. Fixed to
  65-75°F to match the bowl myth piece and tank setup, both of which
  already agreed.
- The feeding guide contradicted itself on the same page: its body
  says "Beyond about 5 days, effects on health may start to show," its
  own FAQ said a goldfish "can typically go up to about a week to 10
  days without real concern." Fixed the FAQ to carry the same staged
  thresholds the body already states (3 to 4 days fine, 5 days
  effects may show, a week to 10 days worth arranging a feeder),
  reworded rather than copied to avoid tripping the FAQ-copies-body
  checker rule.
- The cost guide's "[table could not be parsed]" is a
  scripts/reader-extract.mjs limitation, not a site defect: that
  table's first-column cells are `<AffiliateLink>` elements rather
  than plain strings, which the extractor's regex-based table parser
  doesn't handle. The live page renders it fine. Left as a known
  extractor gap, not fixed this pass; noted for Mike since a second
  species (leopard gecko's SHORT_LABELS pattern aside) has now hit an
  extractor limitation.

Six more recommended links from this pass, five added: cost guide to
tank setup (the substrate/decor/test-kit sentence), handling guide to
the power outage and transport guide (minimize time out of water),
health issues guide to the quarantine guide (crowded holding tank
sentence), tank setup guide to the cycling guide (cycle the tank
sentence). Not added: feeding guide's suggested link to enrichment's
social stocking section, feeding guide already carries its one
allowed sibling link (to health issues, added in the first pass).
Enrichment's suggested link to tank setup's filtration math was
already satisfied, that sentence already links "filtration" to the
shared aquarium filtration guide.

Gaps, checked against the Health and More list before calling them
real: acclimating a new goldfish to the tank (drip acclimation,
temperature matching) has no page anywhere in the set or the sidebar;
breeding and spawning is mentioned only as a cause of appetite loss,
with no guide explaining the process. Both filed in docs/READER_LOG.md.
Medication names and doses beyond anchor worm repeat from the first
pass, already filed.

Fixed the same day: the hub's stale betta-temperature FAQ, the feeding
guide's self-contradicting FAQ, five of six recommended links.

Open: the extractor's inability to render an AffiliateLink-in-cell
table, left for Mike as a tooling note rather than a content fix.

## Axolotl (2026-09-08, first pass, after the router hub)

Extractor set of nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal). One Sonnet agent,
about 92k tokens. The review below reads the old legacy hub (housing
prose, a cost table, a checklist); the router hub was built from its
findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | A- | The fastest path to a checklist and a budget. |
| Encyclopedia | B | Under a minute, origin and conservation status, nothing to act on. |
| Cost | B- | Useful ranges, but its own math didn't match the hub's table. |
| Handling | A | Clear and specific about drip acclimation. |
| Health issues | A | Real vet thresholds instead of vague warnings. |
| Tank setup | A | The one page a reader would actually shop from. |
| Feeding | A | The age-based schedule is exactly what a new owner needs. |
| Enrichment | B+ | Useful but padded with fun facts repeated elsewhere in the set. |
| Legal | B+ | The Virginia correction is genuinely useful. |

Set grade: B. "Individually strong, technically consistent on the
numbers that matter most, undercut by a hub that contradicted a deep
dive on cohousing and cost math that didn't reconcile with its own
table."

Hub versus the set, both sides quoted (all against the old legacy
hub, resolved by the router rebuild):

- Cohousing. The old hub said: "They are social enough to house in
  pairs if the tank is large enough, but monitor for nipping." The
  enrichment guide says: "Cohousing isn't enrichment for this species
  and carries real risk, axolotls will bite at limbs and gills,
  especially around feeding time or if sizes are mismatched. Housing
  separately is the safer default." Two different recommendations,
  not two phrasings of one. The router hub states neither; it has no
  cohousing row, since no single deep dive gives one clean recommendation
  to copy and the two existing statements disagree. Left for Mike:
  writing an actual cohousing row means resolving this tension in the
  enrichment guide first, out of scope for a deep-dives-only pass
  focused on links and numbers, not new content.
- Tank size. The old hub said a 20-gallon "is the minimum for one
  adult (40 gallons preferred)," implying 40 gallons was the real
  target even for one axolotl. Tank setup says: "A 20-gallon long
  tank is the minimum for one axolotl, with a 40-gallon breeder
  better if you're keeping two," tying 40 gallons specifically to a
  pair. The router hub's Tank size row now quotes tank setup's own
  sentence, so the 40-gallon figure is correctly tied to keeping two.
- Setup cost. The old hub's own setup table summed to roughly $265 to
  $725 including the chiller. The cost guide states "$200 to $500 for
  a basic setup, or $450 to $900" with a chiller. The router hub's
  Budget row now quotes the cost guide's own figures directly instead
  of summing a separate table.

The set as a whole: buyable, houseable, feedable, and basic
troubleshooting is all here. Two real gaps, both checked against the
Health and More list before being called real: how to actually cycle
the tank before the axolotl arrives (tank setup says it "needs to be
fully cycled" but three separate deep dives point to an unwired
article, "why axolotls need cold, clean water," for the how; that
article is not reachable from the Deep Dive sidebar at all, see
below), and a new-arrival quarantine length (the handling guide skips
straight to drip-matching with no window given; the shared amphibian
quarantine guide has the real number, 6 to 8 weeks, and it is now a
router hub row).

Deep dives against each other: temperature numbers (60 to 68°F,
trouble above 72, danger above 75) repeat with no conflict across the
set. Substrate rules (fine sand under 1mm or bare bottom, never
gravel) repeat word for word across tank setup, feeding, and
enrichment with no disagreement. Adult feeding frequency is stated
three slightly different ways (the old hub's "every other day to 3
times per week", tank setup and feeding's FAQ "every 2 to 3 days",
and feeding's fuller age table) close enough to be the same rule
stated loosely, not a real conflict; the router hub's Feeding schedule
row now quotes the feeding guide's own age table.

Recommended links, one per page:

| Page | Sentence | Link to |
|---|---|---|
| Hub | none needed | |
| Encyclopedia | none needed | |
| Cost | "Worth checking before you buy though: this species is banned in a handful of states." | Legal guide (sentence sits before the first H2) |
| Handling | "or a health check" | Health issues guide |
| Health issues | "Overfeeding and the wrong food are common triggers too." | Feeding guide |
| Tank setup | "day-to-day handling should stay minimal" | Handling guide |
| Feeding | "never use gravel or small rocks as substrate" | Tank setup guide |
| Enrichment | "Tong-feeding or scattering nightcrawler pieces" | Feeding guide |
| Legal | none needed, already well linked | |

Trust: the regeneration and neoteny fun facts repeat almost verbatim
across three separate pages, which reads as padding rather than
knowledge. The sentence that most convinced the reader a real keeper
wrote this, from cost: "This is one of the smaller pieces of the
overall cost picture, the tank and temperature control matter a lot
more."

Reader's two changes: make the hub's cohousing line match the
enrichment guide, or explain the disagreement (the router rebuild
sidesteps this by dropping the claim rather than resolving it, left
for Mike); add the missing links named above, especially cost guide
to the legal guide (skipped, before the first H2, see below).

Fixed the same day: the router hub rebuild resolves the tank-size and
setup-cost conflicts by construction and drops the cohousing claim
rather than restate a disputed one; five of the eight recommended
links added (cost guide's is disqualified by position, not skipped
by choice). The tank setup guide's cycling sentence now also links
the shared aquarium cycling guide directly, since the reader flagged
cycling as a real, unanswered "how" question; a matching Cycling row
was added to the router hub.

Open: `why-axolotls-need-cold-clean-water` is linked four times across
the set (cost, handling, health issues, tank setup) but is not wired
into RELATED_ARTICLES for axolotl and is invisible in every Deep Dive
sidebar on the site, the same bug class as leopard gecko's temperature
guide. Fixing it means editing src/lib/data/relatedArticles.js, out of
scope for this pass; left for Mike. Also left for Mike: the cohousing
disagreement above, and cost guide's link (before the first H2).

## Axolotl (2026-09-08, second pass, after the fixes)

Same nine-page set, re-extracted after the first pass fixes landed.
One Sonnet agent, about 98k tokens.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | A | The fastest way to get the whole picture, actionable buy list and first-week numbers. |
| Encyclopedia | B | Scientific name, wild range, and conservation status, no care instructions of its own. |
| Cost | B- | Real dollar ranges, but the setup table showed as unparseable and the water-temperature line had no link. |
| Handling | A- | The submerged-container method and drip-matching, honest that this isn't a hands-on pet. |
| Health | A- | Exact 48-hour and 5-day vet thresholds. |
| Tank setup | A | Everything to buy and the temperature to set it to. |
| Feeding | A | The life-stage table and the foods-to-avoid list. |
| Enrichment | B+ | Good ideas, undercut by its own body and FAQ giving different hide counts. |
| Legal | B | The state table is useful, but its own opening line undercounted what the table shows. |

Set grade: B+. "The core husbandry pages are consistent with each
other on every number that matters, but a broken table, a
self-contradicting count, and a mismatched hide count keep it off an
A."

Real findings:

- Legal guide, same-article contradiction: the opening line said "four
  jurisdictions restrict them," while its own table, titled "Where
  Axolotls Are Restricted," lists twelve. The Takeaway section's own
  four-state list (California, New Jersey, Maine, DC) is a narrower
  claim, "not worth testing the boundaries on," not a total count, so
  the opening line undersold the table it introduces. Fixed to "about
  a dozen jurisdictions restrict them in some way," a count taken
  directly from the table's own rows.
- Enrichment guide, same-article contradiction: the body says
  "Provide at least 2 hides per adult, ideally 3 to 4," its own FAQ
  said "Keep 2 to 3 stable hides that never move." Fixed the FAQ to
  read off the body's own 3 to 4 figure rather than stating a third,
  unreconciled number.
- Checked and left alone, not a bug: the hub's heat-wave row (source
  aquarium-power-outage-and-transport-guide) mentions ascites and a
  75°F danger point, which the health issues guide's own Heat Stress
  section doesn't use in those words. The hub row is correctly copied
  from the shared guide's own citation (a vet's WSAVA presentation on
  the outage-specific danger point), which is more specific than the
  health guide's general heat-stress description, not a copying error.
  Both are accurately sourced to what they cite.

Two more recommended links added: cost guide to tank setup (the cool
water sentence), legal guide to the encyclopedia profile (the
endangered-status aside, inside a FunFact box). Not added: cost
guide's cost-guide-to-tank-setup link was the only one available in
that budget; tank setup's, feeding's, and enrichment's suggested links
all target a sibling guide those three articles are already at their
one-per-article sibling cap for (tank setup already links handling;
feeding and enrichment already link each other and health issues from
the first pass).

Gaps, checked against the Health and More list before calling them
real: what a vet visit for an axolotl actually costs (the cost guide
prices the animal, the tank, and food, never a vet visit), and how to
evaluate a seller or pick a healthy axolotl at purchase. Neither is
covered anywhere in the set or the shared guides. Filed in
docs/READER_LOG.md.

Fixed the same day: the legal guide's jurisdiction count, the
enrichment guide's hide-count FAQ, two more links.

Open: `why-axolotls-need-cold-clean-water`'s missing RELATED_ARTICLES
wiring (first pass), still left for Mike.

## Ball Python (2026-09-08, first pass)

Extractor set of eleven pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal, vs boa constrictor, vs
corn snake). One Opus agent, about 92k tokens. The review reads the old
legacy hub (housing and diet prose, a cost table, five FAQs); the router
hub was built from the same baseline the same day, before the review
came back.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | C | The deep dives restated at about 80 percent fidelity. |
| Encyclopedia | C | Thirty seconds, nothing to act on except "20 to 30 years". |
| Cost | B | Budget $500 to $1,500 for year one. |
| Handling | A | Settle 1 to 2 weeks, 48 to 72 hours post-feed, never in shed. |
| Health issues | A | A real go-to-the-vet-now list. |
| Tank setup | A- | This is my build sheet. |
| Feeding | B+ | Thawing and freezer storage, the best section in the set. |
| Enrichment | A | The priority order, and its honesty about what the study did not test. |
| Legal | A | Checked my state in one table. |
| vs Boa constrictor | C+ | Size reality, but the enclosure row is wrong. |
| vs Corn snake | B | It made the choice for me. |

Set grade: B-. "Strong individual articles undermined by a hub that
contradicts them and by numbers that drift between pages." The reader's
first fix, unprompted, was the router shape: "cut the hub to a router
that links into each deep dive at the claim, instead of restating it."

Hub versus the set, both sides quoted (all against the old legacy hub,
resolved by the router rebuild):

- Fasting. Old hub funFact: "Ball pythons can go up to 6 months without
  eating." Old hub diet prose: "A healthy adult ball python can safely
  fast for 6 to 8 weeks." Feeding guide: "A healthy adult ball python
  can go 3-6 months without eating." Three windows on two pages. The
  router hub's Not eating row now quotes the feeding guide, and the
  funFact was changed to 3 to 6 months to match it.
- Humidity. Old hub housing prose: "Ambient humidity should stay at 55
  to 65%." Old hub FAQ: "Ball pythons require 60 to 80% ambient
  humidity." Tank setup: "Keep ambient humidity at 55 to 65%." The hub
  disagreed with itself and with the deep dive. The router hub's
  Humidity row and its copied FAQ both read 55 to 65%.
- Adult feeding interval. Old hub prose: "Adults eat every 10 to 14
  days." Old hub FAQ and tank setup: "adults every 7 to 14 days."
  Feeding guide: "Adults (18+ months): Every 10-14 days." The feeding
  guide owns the schedule and is the page whose Sources cite it, so the
  hub now quotes it and the tank setup aside was cut (below).
- Thawing. Old hub: "in warm water for 20 to 30 minutes until it reaches
  100 to 105 degrees F at the core." Feeding guide: "submerge it in cool
  to lukewarm water." The router hub's Thawing row quotes the feeding
  guide, which sources the method to the Merck Veterinary Manual.
- Handling. Old hub: "2 to 3 times per week for 15 to 20 minutes...
  usually 2 to 4 weeks after acquisition." Handling guide: "up to 3 to 5
  for a snake that handles well... 15 to 30 minutes," starting after
  "the first one to two weeks." The router hub's Handling row quotes the
  handling guide.
- Costs. "Nearly every hub line differs from the cost guide: electricity
  $50 to $90 vs $20 to $80, vet $50 to $90 vs $50 to $150, substrate $30
  to $50 vs $40 to $120." The hub's cost table is gone; the Budget row
  and the buy list carry the cost guide's own figures, and the buy list
  carries no prices at all.

The encyclopedia earns a smaller place than the hub does: origin, wild
diet, morph count, the 48-year record. The reader flagged two things in
it, both outside a deep-dives-only pass and left for Mike: "Wild
Lifespan: 20-30 years (up to 48 years recorded in captivity)" labels a
captivity figure as a wild one, and "Wild populations face pressure from
over-collection" sits oddly beside "Least Concern (IUCN)".

Deep dives against each other, both sides quoted:

- Adult enclosure size, the one real conflict left. Tank setup: "The
  current standard for an adult is a 4x2x2 ft... roughly 120 gallons,"
  explicitly "replacing the old advice about keeping them in small
  tubs." vs Boa constrictor table row: "Adult enclosure | 40-50 gallon
  range," and in prose, ball pythons "stay comfortable in roughly a
  50-gallon enclosure for the rest of their life." Tank setup is the
  page whose Sources cite it (ReptiFiles' terrarium size and lighting
  page, plus the Zen Habitats reprint); the vs boa guide's sources are
  general care sheets that do not carry an enclosure standard. Not fixed
  in this pass and left for Mike, because the 50-gallon figure is the
  anchor text of an AffiliateLink for a 36x18x18 enclosure (which tank
  setup gives as the juvenile size, not the adult one), the 40-50 figure
  sits in a ComparisonTable cell that cannot take markdown, and
  correcting the ball python side to 120 gallons makes the boa's own
  "75+ gallons" row read smaller than the ball python's. Fixing it
  properly means re-choosing the affiliate product and re-sourcing the
  boa figure, which is new content rather than reconciliation.
- Prey size. Tank setup added "or about 10% of body weight," which no
  other page in the set states and which the reader called out as a very
  large rat for a 1,500 gram female. Unsourced anywhere in the set. Cut
  with the diet aside (below).
- Climbing. Tank setup: "Add sturdy, well-anchored branches too, they're
  semi-arboreal and will use them." Enrichment: "The point is not that
  ball pythons are secretly arboreal, it is that vertical structure adds
  usable space." The enrichment guide cites Kaufmann et al. in PLOS ONE
  for the housing study behind the claim; tank setup cites no source for
  "semi-arboreal." Tank setup changed to match.
- Thaw temperature, same page. Feeding guide body: "submerge it in cool
  to lukewarm water," then warm gently afterward. Feeding guide FAQ:
  "submerge it in warm - not hot - water until it feels warm all the way
  through, usually 15 to 20 minutes for a medium rat." The FAQ collapsed
  two steps into one and carried a figure the body does not. Fixed by
  making the FAQ read off the body.
- Escape risk. Handling: "They're skilled escape artists." vs Corn
  snake: "Escape risk | Low - calmer, less driven." Checked and left
  alone: the vs guide's claim is comparative, and it already lands on
  the same instruction ("neither snake should be kept in anything with a
  loose-fitting top"). Not a conflict, the same way the leopard gecko
  UVB framing was not.
- Biting. Handling gives it a section; vs corn says "Balls up,
  essentially never bites." Both say bites are rare and defensive. Not
  a conflict.

Read twice or more across the set, with no disagreement: humidity 55 to
65 rising to 70 to 80 (tank setup, health, vs corn), frozen-thawed over
live (tank setup, feeding), two snug hides (tank setup, enrichment), the
post-feed handling wait (handling, feeding), and the thermostat rule
(cost, tank setup, health, enrichment).

Stranded questions, each checked against the Health and More list before
being called real:

- Health issues says quarantine is "several weeks to months" and names
  no window; the shared Reptile Quarantine guide has the number (3 to 6
  months, Merck) and was reachable only as a sidebar title. Fixed: the
  health guide now links it in the IBD transmission paragraph, and the
  router hub carries a Quarantine row sourced to it.
- Tank setup warns "obesity is a real and common issue" without saying
  how a keeper would tell; the shared Sexing, Growth, and Body Condition
  guide has the cross-section test and the weigh-in habit. Fixed: tank
  setup now links it on that sentence, and the hub carries a Weight
  checks row sourced to it.
- Feeding says to worry at "rapid weight loss" but never says to own a
  scale. Same guide; covered by the hub's Weight checks row rather than
  a second link in that short section.
- Nothing in the eleven pages mentioned a power failure; the shared
  Reptile Emergency Plan guide has a ball python row (72-75°F cold
  floor). Fixed: the hub carries a Power outage row sourced to it.

Recommended links, one per page:

| Page | Sentence | Link to | Done |
|---|---|---|---|
| Hub | "Thaw prey fully by placing it in a zip-lock bag in warm water for 20 to 30 minutes." | Feeding guide | Moot, the sentence is gone with the router rebuild; the Thawing row links the feeding guide |
| Encyclopedia | "hundreds of color morphs developed through selective breeding." | Cost guide | Skipped, the encyclopedia entry is structured data with no link slot |
| Cost | "The thermostat is not optional." | Reptile Heating and Thermostats | Added on the following sentence, since "thermostat" itself is AffiliateLink anchor text |
| Handling | "its eyes turn cloudy or blue" | Understanding Reptile Shedding | Added |
| Health issues | "quarantining any new snake... isn't optional" | Reptile Quarantine | Added, in the body prose above that KeyTakeaway rather than inside it (no precedent anywhere for a markdown link in that component) |
| Tank setup | "or about 10% of body weight" | Feeding guide | Added, as the sibling pointer that replaced the diet aside |
| Feeding | "A healthy adult ball python can go 3-6 months without eating." | Health issues guide | Added |
| Enrichment | "Two secure hides, one on the warm side and one on the cool side, remain the baseline." | Tank setup guide | Added |
| Legal | none needed | | |
| vs Boa | "stay comfortable in roughly a 50-gallon enclosure for the rest of their life." | Tank setup guide | Skipped, linking a page that contradicts the sentence is not the fix; see the enclosure conflict above |
| vs Corn | "need enclosure humidity in the 55 to 65% range" | Tank setup guide | Skipped, the quoted phrase is AffiliateLink anchor text and the pages agree on the number anyway |

Trust: the reader doubted the 50-gallon claim, the 10 percent body weight
prey rule, and the three thawing answers, and singled out one line in the
enrichment guide as an editor's note left in the text, "This is reasoning
from natural history, and the guide should say so." The sentence that
most convinced the reader a keeper wrote this, from enrichment: "Keep it
stable enough that it cannot be tipped, and clean, since a soaking snake
will also defecate in it."

Reader's two changes: one source of truth for enclosure size, humidity,
fasting window, feeding interval, and thaw method, with the hub rendering
from it; then cut the hub to a router. Both are what the router rebuild
does, except for enclosure size, where the vs boa guide is still the
outlier.

Not covered anywhere, checked against the Health and More list:

- How to choose a seller and assess a healthy animal before buying.
- Routine cleaning cadence for an established enclosure, and what
  disinfectant is safe. The quarantine guide covers end-of-quarantine
  disinfection only.
- How to find and vet a qualified reptile veterinarian before you need
  one.
- Whether specific morphs carry health problems, given that the cost
  guide prices them by genetics.

Open, left for Mike: the vs boa enclosure conflict and its affiliate
product; the encyclopedia's "Wild Lifespan" label and the Least
Concern line; the enrichment guide's editor's-note sentence.

## Ball Python (2026-09-08, second pass, after the fixes)

Same eleven pages, re-extracted after the router hub and the first-pass
fixes, one Opus agent, same prompt, about 95k tokens.

| Page | First pass | Second pass |
|---|---|---|
| Care guide hub | C | A |
| Encyclopedia | C | C |
| Cost | B | B |
| Handling | A | A |
| Health issues | A | A |
| Tank setup | A- | A |
| Feeding | B+ | B+ |
| Enrichment | A | A |
| Legal | A | A |
| vs Boa constrictor | C+ | C+ |
| vs Corn snake | B | B |

Set grade: B- to B+. "The care spine is excellent and internally
consistent; the comparison pages and one cost FAQ drag it down with
stale numbers a new buyer would act on."

Hub: no disagreement left. "I checked the enclosure, temperatures,
humidity, substrate, feeding schedule, prey size, thawing, handling
frequency, and budget lines against their source pages and every figure
matches, including the wording. That is rarer than it should be." The
reader also named the emergency card and the buy list as the two things
it would print, which is what the print icon prints.

New defects this pass found, all inside a single article, all fixed:

- Thaw water, feeding guide against itself. The early section said
  "Thaw in warm (not hot) water or a bag submerged in warm water"; the
  later, Merck-sourced section says "seal it in a bag and submerge it in
  cool to lukewarm water." The first pass caught the same contradiction
  in that page's FAQ and the fix missed this third statement of it. The
  early section now matches the sourced method and keeps the two steps
  distinct, thaw cool, then warm before offering.
- Post-feed wait. Handling guide and hub: "48 to 72 hours." Feeding
  guide FAQ: "wait at least 48 hours." The handling guide is the page
  that owns handling; the FAQ now says 48 to 72.
- Quarantine window. Hub, sourced to the shared quarantine guide and
  through it to Merck: "3 to 6 months." Health guide: "several weeks to
  months." Narrowed to "for months," which is the direction the source
  supports; the quarantine guide's whole argument is that the informally
  repeated two to four weeks is too short. A hedge changed deliberately,
  flagged here for veto.
- A third enclosure figure, in the cost guide's own FAQ: "A 40-gallon
  glass minimum runs $70 to $200." The tank setup guide recognizes no
  40-gallon adult minimum at all (4x2x2 ft is the adult standard,
  36x18x18 is for juveniles under 3 feet). The FAQ now prices the same
  4x2x2 enclosure in both materials instead of inventing a smaller one.

Stranded questions this pass, each fixed with the link the reader named:

- Health issues said "raise the enclosure temperature and check humidity
  immediately" without saying to what. Now points at tank setup, without
  restating a temperature the health guide's own Sources do not carry.
- Tank setup said "for quarantine setups, for example" with nothing
  telling a first-time keeper what one is. Now links the quarantine guide.
- Feeding's "Breeding season (Oct-March)" now links the shared brumation
  guide, which is where that seasonal dip is explained.
- Handling's Salmonella sentence now links the shared hygiene guide.
- Enrichment's soak-dish sentence now links How Snakes Actually Shed.
- vs Corn's escape-risk claim now links the handling guide, which carries
  the instruction the comparison implies.
- Cost's PVC sentence now links tank setup. The reader noted the cost
  guide "links no other ball python page at all"; it does now.

Left open, unchanged from the first pass: the vs boa constrictor guide's
"40-50 gallon range" and "roughly a 50-gallon enclosure for the rest of
their life." The reader called it out again and its verdict is the
sharper one: "the comparison pages read like they were written against
an older standard the care pages have since replaced, and nobody went
back." Still not fixed here for the reasons in the first-pass section
(AffiliateLink anchor text, a ComparisonTable cell, and the boa's own
row goes incoherent if only the ball python side moves). The reader's
first change would be to "make 4x2x2 the only figure on the site and
delete the 40-gallon and 50-gallon lines," which needs Mike's call on
the affiliate product.

Trust: "Nobody writes 'push against one without it shifting' without
having watched a heavy snake pull a branch down." That sentence is one
the first-pass fix wrote, replacing the unsourced "they're semi-arboreal"
claim, which is a useful signal that reconciling to the sourced page did
not cost the voice anything. The reader's remaining doubt is the
enclosure conflict and, before it was fixed, the feeding page
contradicting itself "within 300 words."

Not covered anywhere, second pass. Three repeat from the first pass
(cleaning cadence, choosing a healthy animal and where to buy, finding a
reptile vet) and two are new:

- When to offer the first meal after bringing the snake home. The
  quarantine guide covers isolation, not the feeding restart.
- What to do if the snake gets out of the enclosure and into the room.

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
- 2026-09-08, rabbit and bearded dragon (branch claude/hub-rabbit-bd):
  both hubs rebuilt as router hubs (RULES, Hubs), every number copied from
  a deep dive and linked to it, emergency card from the health guide,
  buy list without prices, the package card in the sidebar, two free
  print cards instead of the whole guide. scripts/check-species-numbers.mjs
  written to list the conflicts by topic. Rabbit deep dives: tank setup's
  diet section cut to a pointer at the feeding guide (its FAQ with the
  1/4 cup per 5 pounds figure went with it), the cost table's "The rest of
  your budget" cell reworded, enrichment's two stray fragments cut, and
  six of the eight recommended links added (hub and GI stasis needed
  none; the encyclopedia entry is structured data with no link slot).
  Bearded dragon deep dives: feeding links tank setup at the basking
  sentence, tank setup's calcium schedule by age moved into feeding so
  one page carries it, tank setup's diet aside cut to a pointer. Left
  alone, both sourced: brumation 1 to 3 months (brumation guide) against
  1 to 4 (feeding), and the adult food-refusal window, where feeding
  already states the tension between its two sources.
- 2026-09-08, leopard gecko (branch claude/hub-leopard-gecko): hub already
  reconciled to the router shape; first reader pass filed, the vs crested
  gecko guide's table cell and seoDescription reconciled to 88-92°F, two
  link-only sentences pointing at the care guide hub cut, two of the
  eight recommended links added (cost to temperature, feeding to health
  issues). Also: `leopard-gecko-temperature-guide` wired into
  src/lib/data/relatedArticles.js, docs/READER_LOG.md added (raw reader
  output per species plus a running "not covered anywhere" list), and the
  set test prompt gets a closing "Not covered anywhere" section so future
  reviews are easy to harvest into it. Second pass (branch
  claude/hub-leopard-gecko-second-pass, not merged): no numeric
  hub-versus-deep-dive disagreement left; two more links added (cost to
  health issues, handling to tank setup); checked the UVB
  "optional"-versus-"relies heavily on" framing across two pages and
  found both already hedge the same way, not a bug; two content gaps
  (egg binding, brumation temperature) and an unsourced crypto
  statistic left for Mike.
- 2026-09-08, goldfish (branch claude/hub-goldfish): scripts/reader-extract.mjs
  fixed first, it only globbed `<species>-*-guide.mdx` and silently
  dropped goldfish-tank-size-bowl-myth.mdx from every set test despite
  the file being wired into RELATED_ARTICLES; now unions the suffix glob
  with a species' own non-shared RELATED_ARTICLES entries. Hub rebuilt to
  router shape, which resolved the hub-versus-cost-guide setup total gap
  and the feeding-schedule-certainty conflict the reader flagged, by
  construction. Fixes: the bowl myth piece's 65-72°F FAQ answer corrected
  to 65-75°F to match tank setup's sourced number, its link-only
  care-guide-hub sentence cut, five of eight recommended links added.
  Second pass (branch claude/hub-goldfish-second-pass, not merged):
  caught a stale copy, the router hub's own FAQ still had the pre-fix
  65-72°F betta number since the hub copies a deep dive's FAQ at build
  time rather than staying synced to it; and a same-page contradiction,
  the feeding guide's FAQ said a fast was fine through 10 days while its
  own body said effects may start at 5. Both fixed, five more links
  added, one extractor limitation (AffiliateLink cells in a
  ComparisonTable) noted rather than fixed.
- 2026-09-08, ball python (branch claude/hub-ball-python): hub rebuilt
  to router shape, 22 rows, which resolved six hub-versus-deep-dive
  conflicts by construction (fasting window, humidity, adult feeding
  interval, thaw method, handling frequency, and a cost table whose
  every line differed from the cost guide). Six rows cite the shared
  reptile and snake guides: quarantine, thermostat probe placement,
  hygiene, the power-outage cold floor, winter appetite, and weight
  checks. Deep dive fixes: the tank setup guide's diet aside cut to a
  pointer, taking with it the set's only "adults every 7 to 14 days"
  and an unsourced "about 10% of body weight" prey rule; its unsourced
  "semi-arboreal" claim reconciled to the enrichment guide's
  PLOS ONE-sourced framing, which the second-pass reader then named as
  the sentence that most convinced it a keeper wrote the set. Second
  pass (B- to B+, hub C to A, "hub versus deep dive disagreements:
  none"): the feeding guide stated its thaw method three ways on one
  page, two of them wrong, and the first-pass fix caught only the FAQ;
  the cost guide's FAQ carried a fourth enclosure figure, a "40-gallon
  glass minimum" the tank setup guide does not recognize for an adult;
  the health guide's quarantine window narrowed to the sourced one.
  Thirteen links added across the two passes. Left for Mike: the vs boa
  constrictor guide's 40-50 gallon adult figure against tank setup's
  sourced 4x2x2 standard, unfixed because the number is AffiliateLink
  anchor text for a juvenile-sized enclosure and the boa's own row goes
  incoherent if only the ball python side moves.
- 2026-09-08, axolotl (branch claude/hub-axolotl): hub rebuilt to router
  shape, resolving the old hub's tank-size (40 gallons wrongly implied
  as the target for one animal, not a pair) and setup-cost ($265-725
  summed versus the cost guide's $200-500/$450-900) conflicts by
  construction, and dropping a cohousing claim that contradicted the
  enrichment guide rather than restating either side. Five of six
  recommended links added; the tank setup guide's cycling sentence now
  links the shared cycling guide directly, with a matching Cycling row
  added to the hub. Found but not fixed: `why-axolotls-need-cold-clean-water`
  is linked four times across the set but not wired into
  RELATED_ARTICLES, the same bug class as leopard gecko's temperature
  guide, left for Mike. Second pass: caught two same-article
  contradictions, the legal guide's opening line undercounted its own
  twelve-row table ("four jurisdictions" fixed to "about a dozen"),
  and the enrichment guide's body and FAQ gave two different hide
  counts (FAQ fixed to read off the body's own number). Two more links
  added.

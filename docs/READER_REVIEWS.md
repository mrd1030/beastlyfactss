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
the SHORT_LABELS line, outside the prompt's file list; done anyway
the same day (commit "Leopard gecko: wire the temperature guide into
the Deep Dive list") because the guide was one of the hub's own routes.
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

Six more recommended links from this pass, four added: cost guide to
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
guide's self-contradicting FAQ, four of six recommended links.

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
endangered-status aside, inside a FunFact box). Not added: tank
setup's, feeding's, and enrichment's suggested links, each of which
targets a sibling guide when the article is already at its one
sibling link (tank setup links handling; feeding links tank setup;
enrichment links feeding, all from the first pass).

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

## Ball Python (2026-09-08, species check)

The check prompt run on branch claude/hub-ball-python against main
before merging. Hub: every first-week row's numbers are in the source
it names (the Temperatures row reads the tank setup table's "88 - 92°F",
"75 - 80°F", and "72 - 75°F" rows), the emergency card is the health
guide's five bullets, seven own routes and no shared ones, no prices in
the buy list, three FAQs verbatim, Intermediate on both the hub and the
encyclopedia. Voice warnings unchanged on all seven touched slugs;
every gate and eslint pass. The encyclopedia checker commit on the
branch was left out of the merge, since the encyclopedia session
carries a newer version of the same file.

Fixed before merging, before and after:

- Cost guide FAQ. The second pass had turned "A 40-gallon glass minimum
  runs $70 to $200, while a 4x2x2 ft PVC enclosure runs $100 to $450"
  into "A 4x2x2 ft enclosure, the adult standard, runs $70 to $200 in
  glass and $100 to $450 in PVC", which moved the 40-gallon price onto
  a 4x2x2 glass build the cost table does not price. Now: "A 40-gallon
  glass tank runs $70 to $200 but is sized for a juvenile; the 4x2x2 ft
  PVC enclosure an adult needs runs $100 to $450" (tank setup gives
  36x18x18 as the juvenile size).
- Cost guide: "[What that enclosure has to hold], and how big the adult
  standard is, decides which of these lines you pay." existed to carry
  a link and talked about the table. Cut; the link now sits on the
  existing "humidity is the detail that makes or breaks a ball python
  setup".
- Enrichment guide: "What those hides sit inside, and the [temperatures
  they need to bracket], is the other half of the same decision." Same
  problem, cut; the link now sits on "warm side and one on the cool
  side". And "Water matters at the end of the shed cycle more than
  through it" became "Humidity matters at the very end of a shed, not
  all the way through it", which is what the linked shedding guide
  says.
- Health guide: "which is why a respiratory infection almost always
  has an enclosure problem behind it" was a stronger claim than the
  page's own cause list (low temperature, humidity, a dirty enclosure,
  or stress). Cut.
- vs boa constrictor, the conflict both passes left open. Table row
  "40-50 gallon range" and "75+ gallons, as long as the snake" became
  "4x2x2 ft (roughly 120 gallons), the current standard" and "6 to 8 ft
  long, 2 to 3 ft wide, about 10 square feet of floor"; the prose
  "stay comfortable in roughly a 50-gallon enclosure for the rest of
  their life" became "are done growing inside a 4x2x2 ft enclosure, the
  current adult standard, for the rest of their life", and the boa's
  "something closer to a 120-gallon enclosure" became "an enclosure 6
  to 8 feet long and 2 to 3 feet wide". Both figures come from the two
  tank setup guides, each sourced to ReptiFiles; PetMD's ball python
  care sheet (in this guide's Sources) gives 40 gallons as a floor
  with "the largest habitat possible", not a standard, so the pages do
  not disagree. The two affiliate links moved to the products those
  guides already use (the 4x2x2 PVC enclosure, the 6x2x2 PVC
  enclosure); the 36x18x18 and 48x24x24 products are no longer linked
  from this page. lastUpdated bumped.

Kept: the health guide's "several weeks to months" to "for months",
sourced through the quarantine guide to Merck's 3 to 6 months. Verdict:
fixed on the branch, merged.

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

## Betta fish (2026-09-08, first pass, before the router hub)

Extractor set of nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, water parameters; vs goldfish
wasn't in the extracted file set and the fact page has no `-guide`
suffix). One Sonnet agent, about 100k tokens. The hub still carried the
old legacy prose when this review was filed; the router hub was built
from its findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B+ | A fast checklist, but a stale copy of the deep dives on two numbers. |
| Encyclopedia | B | Scientific name, wild habitat, size, and diet nothing else repeats. |
| Cost | B- | Honest cost breakdown, but its own setup table wouldn't parse. |
| Handling | A- | The slime-coat rule alone changes how you'd touch the fish. |
| Health issues | A | The columnaris-versus-ich temperature warning is the single most useful thing in the set. |
| Tank setup | A- | Buy list in hand, though its Diet section duplicated the feeding guide. |
| Feeding | A- | A real schedule, honest that sources disagree on frequency. |
| Enrichment | A | Three named studies, not vague filler. |
| Water parameters | A | The numbers you'd actually test against. |

Set grade: B+. "Well-sourced and genuinely useful, undercut by numbers
that don't match each other and a cost page missing its own table."

Hub versus the set, both sides quoted (both resolved by the router
rebuild, which cites each deep dive's own figure instead of restating
it):

- Temperature. The old hub said "Water temperature should stay between
  78 and 80 degrees F." Tank setup: "Target a stable temperature of 76
  to 82°F, with 78 to 80°F being the sweet spot." The vs goldfish guide
  gave a third figure, "around 75 to 80 degrees F," not read by this
  pass but caught and reconciled to 76-82°F the same day since it's the
  same disagreement.
- Water change percentage. The old hub said "Weekly water changes of 25
  to 30 percent." Tank setup said "Do a 20 to 30% water change weekly."
  Neither page's Sources block states the number specifically; the
  water parameters guide (whose whole subject is the water itself)
  carries the same 25 to 30% figure in its own FAQ, so tank setup's 20
  to 30% was the outlier and moved to match.

Deep dives against each other:

- Pellet portions. Tank setup: "2 to 4 small, high-protein betta
  pellets." Feeding: "anywhere from 2 to 3 up to 6 to 7 depending on the
  pellet size and brand." Not a real contradiction, feeding's fuller
  figure already contains tank setup's range and explains the variance;
  left alone rather than flattened, same treatment as the bearded
  dragon's brumation-length pages.
- Read three or more times with no disagreement: overfeeding causing
  bloating and swim bladder problems, the 5-gallon tank minimum, and the
  weekly fasting day.

The set as a whole: buyable, cyclable, feedable, and troubleshootable
from this set alone. Four gaps, all checked against the Health and More
list before being called real (none of them covered by the shared
aquarium quarantine, cycling, filtration, pH/GH/KH, spotting-a-sick-fish,
or cooling guides): how to pick a healthy betta at the store, tank
lighting or a day/night cycle, snail or shrimp tankmate compatibility,
and the actual target temperature for treating ich (the health guide
says warming the tank helps but never states the number). All four filed
in docs/READER_LOG.md.

Recommended links, one per page:

| Page | Sentence | Link to |
|---|---|---|
| Hub | "a second cycled tank standing by" | Tank setup guide (hub out of scope this pass) |
| Encyclopedia | "intense aggression toward other male bettas" | Enrichment guide (encyclopedia out of scope this pass) |
| Cost | "A proper setup costs more than a lot of first-time buyers expect" | already the hub's own table; no fix available in a deep-dives-only pass |
| Handling | "Float the sealed bag in your tank for about 15 minutes" | Tank setup guide (heater target) |
| Health issues | "offering a single cooked, de-shelled pea afterward" | Feeding guide |
| Tank setup | "Frozen or freeze-dried bloodworms and brine shrimp make good occasional treats" | Feeding guide |
| Feeding | "a recent move, handling, or an aggressive tankmate can suppress appetite" | Handling guide |
| Enrichment | "housed in groups since hatching under enriched conditions" | already covered, enrichment already carries its one sibling link to health issues |
| Water parameters | "very soft, poorly buffered water ... can allow pH to crash suddenly after a water change" | Tank setup guide's water-change section |

Trust: the cost guide's unparseable setup table and the three-way
temperature mismatch. The sentence that most convinced the reader a
keeper wrote this, from health issues: "Reaching for the heater because
that is what worked on the white spots last time is the single worst
thing you can do to a betta with columnaris."

Reader's two changes: pick one temperature range and one water-change
percentage and use them everywhere (done by the router rebuild plus the
vs goldfish and tank setup fixes), and restore the cost guide's setup
table so it doesn't quietly depend on the hub.

Fixed the same day: the router hub rebuild, which resolves the
temperature and water-change conflicts by construction; tank setup's
water change corrected from 20-30% to 25-30%; tank setup's Diet section
(a full duplicate of the feeding guide, the same pattern as the rabbit
and ball python tank setup pages) cut to a one-sentence pointer at the
feeding guide; the vs goldfish guide's three betta-temperature mentions
(FAQ, table cell, body) corrected from 75-80°F to 76-82°F to match tank
setup and water parameters; two link-only sentences on the water
parameters guide that pointed at the care guide hub and at three more
site pages in its closing paragraph, cut per RULES, Linking, rather than
redirected; three of the eight recommended links added (handling to
tank setup, health issues to feeding, feeding to handling, water
parameters to tank setup - four, not three).

Open: the cost guide's setup-cost table is built from
`<AffiliateLink>` elements in its first column, the same
scripts/reader-extract.mjs limitation goldfish's cost guide hit
("[table could not be parsed]"), not a site defect; left as a known
extractor gap. The four content gaps above are filed in
docs/READER_LOG.md for Mike. Not added: cost guide's suggested link
(the sentence names the hub's own table, not a fixable target from a
deep-dives-only pass); enrichment's suggested link (already at its one
sibling cap, used on health issues in the first pass this guide had).

## Betta fish (2026-09-08, second pass, after the fixes)

Same nine-page set, re-extracted after the first-pass fixes landed. One
Sonnet agent, about 98k tokens.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | A | Puts the whole first week in one place with real numbers pulled from each deep dive, not a rewrite of them. |
| Encyclopedia | C | Origin, wild diet, and conservation status, no care advice at all. |
| Cost | A- | Real budget numbers. |
| Handling | A | Know exactly how to move the fish. |
| Health issues | A | The columnaris-vs-ich temperature reversal alone is worth the read. |
| Tank setup | A- | Buy list is clear. |
| Feeding | A | Honest about disagreement, still gives you a number to use. |
| Enrichment | A | Reorders what you'd buy first. |
| Vs. Goldfish | A- | Useful if deciding between the two. |
| Water parameters | A | The testing schedule is the most useful table in the set. |

Set grade: A- (up from B+). "Deep, specific, mostly self-consistent, let
down by the encyclopedia's thinness and the missing cycling and
quarantine links."

No numeric hub-versus-deep-dive disagreement found this pass; the
reader specifically checked tank size, temperature, pH, feeding
portion, cost, lifespan, and quarantine and found the hub matching
each deep dive word for word. The pellet-portion softness (hub/tank
setup "2 to 4" against feeding's fuller "2 to 3 up to 6 to 7") is the
same non-conflict noted in the first pass, left alone.

New findings, both fixed: tank setup's cycling sentence ("Cycle the
tank... before adding your betta") never linked the actual cycling
instructions, so a reader starting on tank setup or water parameters
instead of the hub had no path to them; now links
[aquarium-cycling-guide]. The handling guide mentioned watching water
parameters "for a day or two after any addition" without ever naming
quarantine, so a reader could easily mistake that for the whole
answer on introducing a new fish; now names and links the fish
quarantine guide instead of repeating the water-parameters plug it
carried before.

Gaps, checked against the Health and More list before calling them
real: tank lighting or a photoperiod schedule, tankmate compatibility
(snails, shrimp, corydoras) for a single male betta, and how to
actually set up and stock a sorority tank. All three repeat or extend
the first pass's list and none are covered by the shared aquarium
guides; filed in docs/READER_LOG.md.

Trust: the cost guide's "[table could not be parsed]" flagged again,
still the known AffiliateLink-in-cell extractor limitation, not a site
defect. The sentence that most convinced the reader, from health
issues: "The thing to know if you have already treated ich is that the
temperature move is the opposite one," backed by the cited columnaris
mortality figures.

Fixed the same day: the two links above (tank setup to cycling,
handling to quarantine).

Open: lighting/photoperiod, tankmate compatibility, and sorority setup
gaps filed in docs/READER_LOG.md for Mike.

## Crested gecko (2026-09-08, first pass, before the router hub)

Extractor set of nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, humidity). One Sonnet agent,
about 97k tokens. The hub still carried the old legacy prose when this
review was filed; the router hub was built from its findings the same
day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B+ | Buy list, cost tables, and checklist in one place, I'd read it before buying anything. |
| Encyclopedia | B | Thin but honest, including admitting wild lifespan isn't documented. |
| Cost | B- | Detailed, but its own FAQ contradicted its own body on monthly cost. |
| Handling | A- | Specific ages, weights, and times up front; the most actionable page in the set. |
| Health issues | B | Good symptom lists, but its cause for Floppy Tail Syndrome disagreed with the hub's. |
| Tank setup | B- | Strong on the temperature ceiling, but never mentions a thermostat despite that being the whole point of holding one. |
| Feeding | A- | Admits an open disagreement about raspberries instead of faking certainty. |
| Enrichment | A- | Practical, consistent with tank setup. |
| Humidity | A- for content, C for placement | The best-sourced page in the set (PetMD, Zen Habitats, Merck), but wired into no Deep Dive or Health and More list at all. |

Set grade: B. "Individually strong pages, undermined by numbers that
don't match each other and one orphaned article."

Hub versus the set, both sides quoted (both resolved by the router
rebuild, which cites each deep dive's own figure instead of restating
it):

- Floppy Tail Syndrome cause. The old hub said it "is thought to result
  from insufficient calcium and phosphorus balance over time, causing
  changes in the pelvis and tail base." Health issues says it comes
  "typically from chronic upside-down resting against glass over
  time," and that it's "sometimes associated with calcium or pelvic
  issues" but "isn't diagnostic of it on its own." Two different root
  causes for the same condition; the router hub's emergency card
  doesn't restate FTS at all, since it isn't a call-the-vet item on its
  own.
- Enclosure upgrade size. The old hub suggested "18x18x36\" or
  24x24x48\"" as the step up from the 18x18x24 minimum; tank setup's
  own upgrade recommendation is "a 2x2x2 foot enclosure." The router
  hub now quotes tank setup's own figure.

Deep dives against each other: the tail-loss fact (permanent, "frogbutt"
is fine) repeats consistently across the hub, handling guide, and cost
guide. One same-page contradiction: the cost guide's body states
"Ongoing Costs: $31 to $52 a Month" while its own FAQ said "Roughly $20
to $30 a month," an older figure that never got updated when the table
was built.

The set as a whole: buyable, houseable, feedable, and handleable from
this set alone. Three gaps, all checked against the Health and More
list before being called real (none of them covered by the shared
reptile quarantine, hygiene, emergency plan, heating and thermostats,
or stool/hydration guides): how to sex a crested gecko (relevant since
males can't be housed together), what to do about a solitary female
laying infertile eggs, and how to choose a healthy individual at
purchase. All three filed in docs/READER_LOG.md.

Recommended links, one per page:

| Page | Sentence | Link to |
|---|---|---|
| Hub | "Low-output UVB lighting... is now recommended" | T5 vs Compact UVB (hub out of scope this pass) |
| Encyclopedia | "the widely quoted 10-20 years is a captive range" | Cost guide (encyclopedia out of scope this pass) |
| Cost | "the earliest known captive individuals have lived well into their 30s" | Encyclopedia (skipped, no reciprocal slot available this pass) |
| Handling | "crested geckos can carry Salmonella" | Reptile hygiene guide |
| Health issues | "Weigh your gecko weekly" | Reptile stool, urates, and hydration guide |
| Tank setup | "this is the detail that trips up owners coming from bearded dragons" | Reptile heating and thermostats guide |
| Feeding | "metabolic bone disease from inadequate calcium are all real medical causes" | already covered, feeding already links the gut-loading guide and the humidity guide |
| Enrichment | "A well-established bioactive enclosure... adds ongoing low-level stimulation" | already covered, tank setup's own substrate section is one click away via the Deep Dive |
| Humidity | none needed, already the best-linked page in the set | |

Trust: the cost guide contradicting its own FAQ, and the Floppy Tail
Syndrome cause disagreement, both read like nobody proofread across
pages. The sentence that most convinced the reader a keeper wrote this,
from feeding: "Raspberries are a real point of disagreement, some
sources list them as a safe treat, others flag them as high-oxalate,
worth knowing rather than presenting either way as settled."

Reader's two changes: fix the cost guide's self-contradiction first,
then wire the humidity guide into the Deep Dive list, since it's
better sourced than most pages that made the cut.

Fixed the same day: `crested-gecko-humidity-guide` wired into
src/lib/data/relatedArticles.js; the router hub rebuild, which resolves
the FTS-cause and enclosure-upgrade conflicts by construction; the cost
guide's FAQ corrected from $20-30 to $31-52 a month to match its own
table; tank setup's Humidity section (a full duplicate of the humidity
guide, the same pattern as several other species' tank setup pages)
cut to a one-sentence pointer with its two affiliate links preserved in
the pointer; a link-only opener sentence on the humidity guide pointing
at the care guide hub cut, and its closing paragraph's second link
(browsing the Geckos category) trimmed, both per RULES, Linking; a new
sentence added to tank setup's Temperature section linking the reptile
heating and thermostats guide, since the reader correctly flagged that
the article discusses a strict temperature ceiling without ever saying
what actually holds it there; two more recommended links added
(handling to the hygiene guide, health issues to the stool/hydration
guide).

Open: how to sex a crested gecko, the infertile-egg question for a
solitary female, and how to choose a healthy individual at purchase are
filed in docs/READER_LOG.md for Mike. Not added: the cost guide's
suggested link to the encyclopedia (no natural sentence slot found this
pass without adding new prose, which is out of scope for a links-and-
numbers-only fix).

## Crested gecko (2026-09-08, second pass, after the fixes)

Same nine-page set, re-extracted after the first-pass fixes landed. One
Sonnet agent, about 93k tokens.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B+ | A real command center, actionable, though nearly every line duplicates a deep-dive FAQ. |
| Encyclopedia | B+ | The rediscovery history earns a read. |
| Cost | A- | Clear tables, budget numbers to act on today. |
| Handling | B+ | A real technique and a hard rule. |
| Health issues | A | Would bookmark it. |
| Tank setup | B | One number made the reader stop and reread. |
| Feeding | A- | Honest about what's unsettled. |
| Enrichment | B+ | Useful but the least urgent page. |
| Humidity | A- | The most carefully sourced page in the set. |

Set grade: B+. "Deep, mostly consistent, undercut by one internal
contradiction and a real gap in breeding-adjacent care."

The tank setup guide's own basking-area table cell contradicted itself:
"82 - 85°F (some sources: 72-75°F to be safe)" gave two unresolved
target zones in one cell, in an article that elsewhere calls 85°F "a
hard ceiling with zero exceptions." Fixed to a single reading: 72 to
75°F as the conservative target, with a note that 82-85°F sits too
close to the hard ceiling to be the number this article leads with.
(Reversed by the species check: ReptiFiles, the article's own cited
source, gives 82-85°F for the basking surface, so that figure leads
again and the "some sources: 72-75°F" hedge stays as it was.)

No hub-versus-deep-dive numeric disagreement found this pass. One
unsourced claim repeated twice, "the earliest known captive individuals
have lived well into their 30s" on both the hub and the cost guide, with
nothing backing it in either page's Sources block; flagged for Mike as a
fact-check item rather than fixed (no source to correct it against).

New findings, both fixed: the health issues guide's MBD prevention
sentence named "a complete crested gecko diet powder" without linking
the feeding guide that explains it; the handling guide's tail-loss
prevention sentence mentioned housing crested geckos "singly or in
carefully matched groups" without linking the tank setup guide's actual
housing rules. Both now link their sibling guide.

Gaps, checked against the Health and More list before calling them
real: how to sex a crested gecko (still needed to follow the "never
house two males" rule), care for a gravid, unmated female beyond "see a
vet if egg-bound" (no nesting setup or infertile-egg guidance), hatchling
grow-out enclosure dimensions (only "smaller" is given), and safe
disinfectants for substrate changes. None are covered anywhere in the
set or the shared reptile guides; filed in docs/READER_LOG.md.

Trust: the self-contradicting basking cell (fixed) and the unsourced
"30s" longevity claim (flagged, not fixed). The sentence that most
convinced the reader, from feeding: "one specific flavor, watermelon, is
called out as having unusually high acceptance among fussy eaters."

Fixed the same day: the basking-temperature table cell, and two more
recommended links (health issues to feeding, handling to tank setup).

Open: sexing, gravid-female care, grow-out dimensions, and safe
disinfectants filed in docs/READER_LOG.md; the unsourced "30s" longevity
claim left for Mike.

## Guinea pig (2026-09-08, first pass, before the router hub)

Extractor set of nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, scurvy). One Sonnet agent,
about 105k tokens. The hub still carried the old legacy prose when
this review was filed; the router hub was built from its findings the
same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | A | Checklist and cost tables read like a shopping list; the FAQ answers real decisions. |
| Encyclopedia | B | Good background, nothing that changes tomorrow's care. |
| Cost | A | Real dollar ranges, and forces the "budget for two" point before you buy one animal. |
| Handling | A | The side approach, two-hand hold, and stay-low rule are things to do on day one. |
| Health issues | A | The ovarian cyst versus mites table alone is worth bookmarking. |
| Tank setup | B | Good numbers, but the vegetable table failed to render. |
| Feeding | A | The schedule, toxic list, and "why they stop eating" list are exactly what to act on. |
| Enrichment | A | Hideout and foraging advice with a clear reason why. |
| Scurvy | A | The per-kilogram math and the stage table make this the most rigorous page in the set. |

Set grade: B+. "Deep and internally consistent on the numbers that
matter, let down by one broken table and a few missing cross links."

Hub versus the set, both sides quoted (both resolved by the router
rebuild, which cites each deep dive's own figure instead of restating
it):

- Bedding. The old hub said "Avoid cedar and pine shavings," banning
  pine outright. Tank setup says "Paper-based bedding, kiln-dried pine,
  or fleece liners all work well. Avoid cedar, raw pine, and sawdust,"
  meaning kiln-dried pine is fine and only raw pine is the problem. The
  router hub now quotes tank setup's own distinction.
- Enclosure size. The old hub said "The minimum is 7.5 square feet...
  the same whether it's one guinea pig or a pair" and separately
  "recommend[ed] at least 10.5 square feet for a pair" as if 10.5 were
  a bonus on top of a shared floor. Tank setup states 10.5 as the
  minimum for a pair outright. The router hub now states it tank
  setup's way.
- Cage cost. The old hub's own setup line ("$80 to $180") didn't match
  the cost guide's cage line ("$100 to $140"). The router hub's Budget
  row now quotes the cost guide's own setup total instead of a separate
  cage figure.

Deep dives against each other: the 65 to 79°F range and its "single
degree" gap to the 80°F danger line repeat, consistently, between the
hub and tank setup. The vitamin C mg/kg figures (Merck and PetMD, both
giving 30+ for growing, pregnant, or ill animals) repeat consistently
across tank setup and the scurvy guide. One real, self-acknowledged
disagreement: the feeding guide's own FAQ on adult alfalfa says "One
source says avoid it outright for healthy adults, another allows it as
an occasional treat," an open disagreement the page states rather than
hides, left as is.

The set as a whole: buyable, houseable, feedable, and handleable from
this set alone. Two pages raise a question another page answers
without saying so: health issues says a guinea pig that stops eating
"needs urgent veterinary attention" with no time frame, while feeding
has the actual figure (8 to 12 hours); feeding names "dental disease"
as the top reason guinea pigs stop eating in one line, while health
issues is where the actual signs live, with neither page pointing at
the other. Both fixed this pass with a link each way.

Four gaps, checked against the Health and More list before being
called real: how to introduce and bond two guinea pigs (the hub says
adopting a pair from the start beats introducing one later, but never
explains introductions), spay or neuter guidance and cost for a mixed-
sex pair, and litter training method (only "a litter corner" is named).
The reader's fourth flagged item, grooming for long-haired breeds
(Peruvian, Silkie, Abyssinian), is actually covered: the shared small
mammal grooming guide has a dedicated "Matting: Long-Coated Guinea Pigs
and Angora Rabbits" section and a guinea-pig-specific grease gland
section, so it is struck rather than filed. The other three are real
and filed in docs/READER_LOG.md.

Recommended links, one per page:

| Page | Sentence | Link to |
|---|---|---|
| Hub | none, already links the full deep dive list | |
| Encyclopedia | none needed this pass | |
| Cost | "complex issues like GI stasis can push well past that" | Health issues guide |
| Handling | "A well set up enclosure gives your guinea pig the secure home base" | Tank setup guide |
| Health issues | "needs urgent veterinary attention, not a wait-and-see approach" (GI stasis) | Feeding guide |
| Tank setup | "Bell pepper is a particularly good vegetable choice" | Feeding guide |
| Feeding | "Dental disease. The single most commonly cited cause" | Health issues guide |
| Enrichment | "develops repetitive bar-chewing is signaling that something in the current setup isn't working" | already covered, enrichment already carries its one allowed sibling link (the vet visit guide) |
| Scurvy | "Daily fresh vegetables, led by bell pepper, are the actual prevention here" | already covered, scurvy already links the tank setup guide's diet section |

Trust: a literal "[table could not be parsed]" sitting where the tank
setup guide's vegetable table should be, the same AffiliateLink-in-cell
extractor limitation goldfish and betta fish hit, not a site defect.
The sentence that most convinced the reader a real keeper wrote this,
from enrichment: "a single hide in a shared space tends to become
something one animal guards rather than something everyone can use."

Reader's two changes: repair the vegetable table (a known extractor
gap, not a site defect, left as is) and clarify whether the annual cost
table prices one guinea pig or a pair (the router hub's Budget row now
states both figures explicitly, from the cost guide).

Fixed the same day: the router hub rebuild, which resolves the bedding,
enclosure-size, and cage-cost conflicts by construction; a link-only
opener sentence on the scurvy guide pointing at the care guide hub cut,
and its closing paragraph's second link (browsing the Small Mammals
category) trimmed, both per RULES, Linking; four of seven recommended
links added (cost to health issues, handling to tank setup, health
issues to feeding, tank setup to feeding, feeding to health issues,
five not four).

Open: guinea pig introductions, spay/neuter guidance for a mixed pair,
and litter training method filed in docs/READER_LOG.md for Mike. The
feeding guide's self-acknowledged alfalfa disagreement left as is,
since the page already states the tension between its two sources.

## Guinea pig (2026-09-08, second pass, after the fixes)

Same nine-page set, re-extracted after the first-pass fixes landed. One
Sonnet agent, about 90k tokens.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | A | Numbers to act on immediately. |
| Encyclopedia | C | Nothing to act on beyond size and lifespan already on the hub. |
| Cost | A- | Clear numbers for budgeting. |
| Handling | A | The two-hand pickup is genuinely useful. |
| Health issues | A | The mites-versus-cysts table is the most useful single thing in the set. |
| Tank setup | B | A diet table failed to render. |
| Feeding | A- | Its own FAQ admits two sources disagree on alfalfa. |
| Enrichment | A- | Practical and short. |
| Scurvy | A | The best-sourced page in the set. |

Set grade: A- (up from B+). "Deep, consistent, well-sourced, let down
only by one internal contradiction and one broken table."

No hub-versus-deep-dive numeric disagreement found this pass; enclosure
size, temperature, vitamin C, and the "call a vet" clock all matched
word for word between the hub and their source articles.

One same-set contradiction, which the feeding guide already flags
against itself: tank setup's FAQ states adult alfalfa is "too high in
calcium, appropriate only for very young guinea pigs," a flat no.
Feeding's own FAQ answer says "One source says avoid it outright for
healthy adults, another allows it as an occasional treat, but grass
hay... should be the adult staple." Both pages agree grass hay is the
adult staple and alfalfa isn't a regular feed; the only daylight is
whether an occasional-treat exception exists, and feeding-guide already
states that tension transparently rather than hiding it. Left as is,
same treatment as the betta feeding guide's fasting hedge and the
bearded dragon's brumation-length pages: a hedge two sources genuinely
disagree on, not a number either page misstates.

Checked and not a bug: the reviewer suggested linking the cost guide's
FAQ at "complex issues like GI stasis can push well past that," the
same sentence already linked in the body. FAQ answers cannot carry a
markdown link on this site (the `faq-link` rule), so the FAQ's copy of
that sentence is correctly plain text; nothing to fix.

Three more recommended links added: handling to the small mammal vet
guide (the minimal-restraint sentence), tank setup to the small mammal
heat stress guide (the heatstroke sentence), enrichment to health
issues (the bar-chewing/withdrawal sentence).

Gaps, checked against the Health and More list before calling them
real: how to introduce two unfamiliar guinea pigs (repeats the first
pass), and breeding and gestation basics (heat cycle, gestation length,
litter size), a new item this pass. Neither is covered anywhere in the
set or the shared small mammal guides; filed in docs/READER_LOG.md.

Trust: the unrendered diet table (the same AffiliateLink-in-cell
extractor limitation noted in the first pass, not a site defect) and
the alfalfa tension (examined, left as an honest hedge). The sentence
that most convinced the reader, from enrichment: "A single hide in a
shared space tends to become something one animal guards rather than
something everyone can use."

Fixed the same day: three more links (handling to vet visits, tank
setup to heat stress, enrichment to health issues).

Open: guinea pig introductions and breeding/gestation basics filed in
docs/READER_LOG.md; the alfalfa hedge and the extractor's table
limitation both left as is.

## Hamster (2026-09-08, first pass, before the router hub)

Extractor set of ten pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal, vs guinea pig). One
Sonnet agent, about 102k tokens. The hub still carried the old legacy
prose when this review was filed; the router hub was built from its
findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B+ | Immediately actionable, but two of its numbers disagree with the deep dives behind it. |
| Encyclopedia | B | Good history, nothing to act on beyond the scientific name. |
| Cost | B | Two tables failed to render. |
| Handling | A- | The cupping technique and the Syrian-versus-dwarf split are usable day one. |
| Health issues | A | The wet tail section is the single most useful paragraph in the set. |
| Tank setup | B | Specific and confident, but contradicted the hub on cage size, wheel size, and the torpor temperature. |
| Feeding | A- | Rare honesty about a real schedule disagreement, firm treat numbers, a clear toxic list. |
| Enrichment | A | One study with three numbers that reorders what you spend money on. |
| Legal | B+ | Answers the only question most readers have (Hawaii) up front. |
| vs Guinea Pig | B+ | Genuinely useful before committing to either animal. |

Set grade: B. "Well-sourced and genuinely actionable on health and
enrichment, undercut by the hub disagreeing with its own deep dives on
the two numbers a new owner needs most."

Hub versus the set, both sides quoted (all resolved by the router
rebuild, which cites each deep dive's own figure instead of restating
it):

- Cage size. The old hub said "450 square inches... with 600 to 800+
  square inches strongly preferred." Tank setup says "roughly 700 to
  775 square inches for a Syrian, around 600 square inches for dwarf
  species." The hub's actual floor (450) sat well below current
  welfare guidance; the cost guide's own cage line item repeated the
  same stale 450+ figure and is fixed too.
- Wheel size. The old hub said "11 to 12 inches in diameter is the
  current minimum recommendation" for a Syrian. Tank setup says
  "Syrians need at least an 8 to 11 inch wheel." The hub's stated
  minimum was above tank setup's maximum. The cost guide's own wheel
  line item compounded this: its anchor text read "11-12 in solid
  exercise wheel" while linking a product literally named "10 inch,"
  now corrected to match both the product and tank setup.
- Cheek pouch capacity. The hub's funFact said pouches hold "a volume
  close to the size of the hamster's own body," while the feeding
  guide states "roughly a fifth of its own body weight." Different
  claims about the same trivia fact; the hub's funFact now matches
  feeding's figure.

Deep dives against each other: wet tail's 24-to-48-hour fatality window
repeats consistently across cost, health, and feeding. Solitary Syrian
housing repeats consistently across handling, enrichment, and the vs
guinea pig comparison. One real numeric conflict: the torpor
temperature. Tank setup said "Below 60°F risks torpor." Feeding said
"Below roughly 65°F, hamsters can enter a hibernation-like state," a 5
degree gap on a warning sign that can look like the animal has died.
Neither page's Sources block specifically earmarks this number to one
citation; tank setup is the subject-matter page (its whole job is the
temperature section), so feeding's two mentions were corrected to 60°F.

The set as a whole: buyable, houseable, feedable, and troubleshootable
from this set alone. Three gaps, checked against the Health and More
list before being called real (none of them covered by the shared
small mammal enterotoxemia, temperature and heat stress, vet visits, or
grooming guides): how long to leave a new hamster alone before first
handling, cage cleaning frequency, and what "hamster-proofing" a
free-roam space concretely requires. All three filed in
docs/READER_LOG.md.

Recommended links, one per page:

| Page | Sentence | Link to |
|---|---|---|
| Hub | "Any hamster showing diarrhea and lethargy needs an exotic vet the same day" | Health issues guide (hub out of scope this pass) |
| Encyclopedia | "the reason Syrians must be housed alone as adults" | Handling guide (encyclopedia out of scope this pass) |
| Cost | "a median age at death of just 1.75 years" | Health issues guide, which cites the same study (no natural sentence slot found without adding new prose) |
| Handling | "often better enjoyed as an observation pet than a hold-and-pet one" | Tank setup guide |
| Health issues | "Sticking with a plain, formulated hamster pellet or lab block as the diet base" | Feeding guide |
| Tank setup | "bedding depths of roughly 15 to 30 inches enhance welfare" | Enrichment guide, which covers the actual study |
| Feeding | "Below roughly 65°F [now 60°F], hamsters can enter a hibernation-like state" | Tank setup guide's temperature section |
| Enrichment | "A 10 inch silent wheel lets a Syrian run with a flat back" | already covered, tank setup's own wheel section is one click away via the Deep Dive |
| Legal | "whether your state's rule names Phodopus or only Mesocricetus auratus" | already covered, out of scope for a deep-dives-only pass (legal gets its own card, not a route) |
| vs Guinea Pig | "A hamster's 2 to 3 year lifespan is short enough" | already covered, out of scope (vs pieces are not fixed for links this pass) |

Trust: two unparsed cost-guide tables (the same AffiliateLink-in-cell
extractor limitation noted for goldfish and betta fish, not a site
defect) and the three-way cage/wheel/torpor mismatch. The sentence that
most convinced the reader a keeper wrote this, from enrichment: "The
caveat comes straight from the study: the hamsters on shallow bedding
ran more. Heavy wheel use is not automatically a sign of a happy
animal, and it can accompany the same setup that produces bar-chewing."

Reader's two changes: reconcile the cage, wheel, and torpor numbers
into one consistent set (done by the router rebuild plus the feeding
and cost guide fixes) and fix the two unparsed cost-guide tables (left
as a known extractor gap, not a site defect).

Fixed the same day: the router hub rebuild, which resolves the cage and
wheel conflicts by construction; the cost guide's cage and wheel line
items corrected to match tank setup and the linked product; feeding's
torpor threshold corrected from 65°F to 60°F (twice); the hub's
cheek-pouch funFact corrected to match feeding's body-weight figure;
four of ten recommended links added (handling to tank setup, health
issues to feeding, tank setup to enrichment, feeding to tank setup).

Open: how long to wait before first handling, cleaning frequency, and
hamster-proofing specifics filed in docs/READER_LOG.md for Mike. Not
added: cost guide's suggested link (no natural sentence slot without
adding new prose, out of scope for a links-and-numbers-only pass).

## Russian tortoise (2026-09-08, first pass, before the router hub)

Extractor set of eight pages (hub, encyclopedia, cost, handling, health
issues, tank setup, enrichment, legal; this species has no dedicated
feeding guide, its diet lives in the tank setup guide's Diet Basics
section and the shared herbivorous reptile safe plants guide). One
Sonnet agent, about 97k tokens. The hub still carried the old legacy
prose when this review was filed; the router hub was built from its
findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | A | Fully actionable, numbers and buy list up front. |
| Encyclopedia | B+ | Real complementary content: range, CITES, wild-caught risk. |
| Cost | B- | Actionable, but its own FAQ contradicted its own body. |
| Handling | B+ | Short and actionable: table not aquarium, no two males. |
| Health issues | A | The best page in the set. |
| Tank setup | A | The core how-to page, sourced and specific. |
| Enrichment | B+ | Useful and concrete, clearly secondary to setup and health. |
| Legal | A | Genuinely surprising and well sourced (four-inch rule, Colorado, Hawaii). |

Set grade: B+. "Deep, sourced, mostly consistent, let down by one
article contradicting itself and by missing a few cheap cross-links
between pages that clearly needed each other."

No hub-versus-deep-dive disagreement this pass; the one real conflict
was internal to the cost guide itself, both fixed the same day:

- Setup total. Body and table: "$372 to $775." FAQ: "Roughly $400 to
  $600 total." Fixed the FAQ to read off the body's own subtotal.
- Annual cost. Body: "Ongoing Costs: $365 to $715 a Year." FAQ:
  "Roughly $500 to $650 a year." Fixed the FAQ to match.
- Also caught and fixed the same day, found while verifying the above:
  the cost guide's own body claimed "No state bans this species, and
  New Jersey is the only place that wants a permit," directly
  contradicted by the legal guide, the actual subject-matter authority,
  which documents Colorado's outright ban and four states that require
  a permit. Corrected to defer to the legal guide.

Deep dives against each other: substrate (50/50 topsoil and coconut
coir), the sulcata size comparison, and the diet staples (dandelion,
plantain, clover) all repeat consistently between tank setup and
enrichment with no disagreement, just overlap.

The set as a whole: buyable, legally checkable, houseable, and
health-checkable from this set alone. Diet is adequately covered
across the tank setup guide's Diet Basics section and the shared safe
plants guide, per the reviewer's explicit check. Two gaps, checked
against the Health and More list before being called real (neither
covered by the shared reptile guides, including the brumation and
sexing guides): a calcium/multivitamin dusting schedule (both are on
the buy list with no application frequency attached), and a proactive
hydration routine such as regular soaking, as distinct from reading
urates after dehydration has already happened. Both filed in
docs/READER_LOG.md.

Recommended links, one per page:

| Page | Sentence | Link to |
|---|---|---|
| Hub | "They need an outdoor enclosure with walls buried 12 inches or more underground" | Outdoor reptile housing guide (hub out of scope this pass) |
| Encyclopedia | "wild-caught tortoises arrive stressed and carrying parasites and die at a higher rate" | Health issues guide's Parasites section (encyclopedia out of scope this pass) |
| Cost | "a federal rule bars selling any turtle with a shell under four inches" | already fixed this pass with a legal guide link, addressing the same underlying gap |
| Handling | "House males separately from each other" | Tortoise sexing, eggs, and egg binding guide |
| Health issues | "treat consistent UVB exposure plus a calcium source like cuttlebone as essential" | Tank setup guide's Lighting section |
| Tank setup | "a pre-brumation vet health check is worth doing first" | Tortoise brumation guide |
| Enrichment | "placing dandelion, plantain, clover, endive, or other safe weeds in multiple spots" | Herbivorous reptile safe plants guide |
| Legal | "they live long enough that rehoming is a real possibility" | already covered, legal gets its own card, out of scope for a deep-dives-only pass |

Trust: the cost guide contradicting its own FAQ twice. The sentence
that most convinced the reader, from cost: "The wide top end is not
padding. Three of those lines, the dimming thermostat, the infrared
temperature gun and the gram scale, are the ones most first setups
leave out, and they are exactly the equipment that prevents the
thermal burns and the slow weight loss."

Reader's two changes: fix the cost guide's FAQ numbers to match its
own body and the hub (done), and add the sexing and brumation-protocol
links identified above (done).

Fixed the same day: the router hub rebuild; the cost guide's two
self-contradicting FAQ answers corrected to match its own body, and
its "no state bans this species" claim corrected against the legal
guide; the tank-setup-guide's two duplicate "Enclosure Size" sections
merged into one; a short Diet Basics section added to tank-setup-guide
so its own Tortoise Trust fruit-avoidance citation, present in Sources
but unused in the body, actually backs a claim; the enrichment guide's
FAQ decor-rotation interval corrected to match its body; five
recommended links added (handling to sexing, health issues to tank
setup, tank setup to brumation, enrichment to safe plants, plus the
cost-to-legal link from the earlier fix).

Open: a calcium dusting schedule and a proactive hydration/soaking
routine filed in docs/READER_LOG.md for Mike.

## Hamster (2026-09-08, second pass, after the fixes)

Same ten-page set, re-extracted after the first-pass fixes landed. One
Sonnet agent, about 95k tokens.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | A- | The only page that compresses seven articles into one first-week checklist. |
| Encyclopedia | B | The founder-litter history, nothing actionable. |
| Cost | A | Exact dollar ranges to budget against. |
| Handling | A | The scoop-from-below technique and species warning are exactly what's needed before touching one. |
| Health issues | A | Wet tail alone justifies reading before day one. |
| Tank setup | A- | The size, bedding, and wheel numbers are the whole shopping list. |
| Feeding | B+ | Honest that free-feeding versus measured feeding is a real, unresolved disagreement. |
| Enrichment | A | The bedding study is the most convincing thing in the set. |
| Legal | B+ | Skimmable unless you keep a dwarf somewhere specific. |
| vs Guinea Pig | C+ | Its own numbers disagreed with the rest of the set. |

Set grade: B+. "The husbandry content is rigorous and internally
consistent almost everywhere; two number conflicts, both in the vs
guinea pig comparison, are the only real dents."

New finding, fixed: the vs guinea pig guide never got the cage-size fix
from the first pass. Its table still read "450+ sq in cage," its body
said "A hamster's whole world can fit in 450 to 800 square inches," and
its FunFact derived a "2 to 3 times larger" ratio from that stale
number. All three corrected to the current 700-775 sq in (Syrian) / 600
sq in (dwarf) figure, with the ratio re-derived to 1.4 to 1.8x (the
species check corrected the arithmetic to 1.4 to 1.5x, since 1,080
over 700 to 775 is 1.39 to 1.54, and moved the guinea pig side's "the
same whether it's one guinea pig or a pair" clause to tank setup's 7.5
for one, 10.5 for a pair).

Checked and left as is: the vs guinea pig guide's flat "2-3 years"
hamster lifespan, against the rest of the set's "median age at death of
1.75 years, Syrians toward 2 to 3, dwarves 1.5 to 2.5." For a
Syrian-centric two-species comparison table, "2-3 years" isn't wrong,
just less granular than the fuller figure elsewhere; not a number
conflict to fix, a simplification appropriate to the format.

One more link added: cost guide to health issues at the wet-tail
same-day-emergency sentence.

Gaps, checked against the Health and More list before calling them
real: how to sex a hamster before pairing dwarfs (not covered anywhere,
including the Health and More list), and routine cage-cleaning
frequency (repeats the first pass). Two more, worth noting rather than
filing as content gaps: the shared grooming guide's own summary names
only rabbits, and the shared vet-transport guide's summary names only
"a rabbit or guinea pig," so a hamster owner following either link from
this species' sidebar may reasonably expect hamster coverage that
isn't there. Both are wiring/scope questions for Mike, not something a
deep-dives-only pass can fix.

Trust: the Oregon legal entry's own admission that the state "appears
to have exempted the wrong hamster" reads like someone who checked the
primary source. The sentence that most convinced the reader: "some
hamsters can go 3 to 4 days relying on a pre-provisioned hoard."

Fixed the same day: the vs guinea pig guide's three stale cage-size
figures, and one more link (cost to health issues).

Open: sexing, cage-cleaning frequency, and the two shared-guide scope
notes above, all in docs/READER_LOG.md for Mike.

## Russian tortoise (2026-09-08, second pass, after the fixes)

Same eight-page set, re-extracted after the first-pass fixes landed.
One Sonnet agent, about 97k tokens.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | A | Actionable emergency card and buy list. |
| Encyclopedia | B+ | Range and CITES context nothing else covers. |
| Cost | A | Real numbers and a clear buy/don't-buy table. |
| Handling | B+ | Short but says what it needs to. |
| Health issues | A | Cited studies, clear emergency signs. |
| Tank setup | A | The most useful page in the set. |
| Enrichment | A- | Practical and specific. |
| Legal | A | Unusually well sourced for a legal page. |

Set grade: A-. "Deep, sourced, internally consistent almost everywhere,
undercut by one real numeric conflict and a missing feeding schedule."

Encyclopedia versus a deep dive, left as is per the batch rule (the
encyclopedia is out of scope for this pass; the deep dive's sourced
figure is what the hub carries, and the disagreement is recorded here):
the encyclopedia's "Wild Lifespan: 40-80 years" against the cost
guide's "40 years or more is typical, with some individuals reaching
50-plus." The hub already carries the cost guide's figure, not the
encyclopedia's, so nothing to fix on this pass; flagged for whoever
next touches the encyclopedia entry.

No conflict between deep dives; the sulcata comparison sentence in the
cost guide and the handling guide reads near-identical in both
("Sulcatas grow enormous and need real outdoor space within a few
years" / "The sulcata is a genuine giant that must have outdoor space
as it grows and simply cannot be kept indoors long-term"), which the
reader flagged as reading like a template rather than two independent
passages, but the two sentences don't disagree on anything, so nothing
to fix under the numbers-and-links rules.

Gaps, checked against the Health and More list before calling them
real: feeding portions and frequency, how much hay and weeds and how
often, are absent from both the tank setup guide's Diet Basics and the
shared safe plants guide (a new, more specific version of the
first pass's diet-schedule gap); hatchling and juvenile-specific
husbandry differences (humidity, UVB, feeding) are never addressed
anywhere in the set. Both filed in docs/READER_LOG.md. The soaking/
hydration gap repeats from the first pass.

Trust: the lifespan mismatch and the near-identical sulcata paragraph
both read as a production seam rather than a factual problem. The
sentence that most convinced the reader: "An enclosure that is dry
everywhere, with no damp retreat and no depth to dig into, is what
produces a dehydrated, pyramided tortoise, and it is a more common
failure in this species than an enclosure that is too wet."

Fixed the same day: nothing required a content fix this pass; the
encyclopedia/deep-dive lifespan gap is recorded, not fixed, since it's
out of scope.

Open: feeding portions/frequency, hatchling-specific husbandry, and the
soaking routine gap filed in docs/READER_LOG.md; the encyclopedia
lifespan figure flagged for whoever next touches that file.

## Budgie (2026-09-08, batch B, first pass, before the router hub)

Extractor set of nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, enrichment, cere color, vs cockatiel). One Opus
agent, about 82k tokens. The review below reads the old legacy hub; the
router hub was built from its findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B | Densest single page: cage, bar spacing, pellet ratio, veg list, checklist. |
| Encyclopedia | C | Fast, little to act on, and its lifespan figure fights the rest of the set. |
| Cost | B | Useful ranges, but the setup table itself couldn't be read, and its own totals didn't reconcile with the hub's. |
| Handling | A- | Clear taming progression, towel not hands, never punish a bite. |
| Health issues | A | The same-day vet signs and the limp-means-tumor pattern are genuinely useful. |
| Tank setup | A- | Width over height, half-inch bars, no zinc or lead, no dowel-only perches. |
| Enrichment | B+ | Useful, foraging-first framing, but never signposted from the hub or the health page. |
| Cere color | B+ | Solid sexing method, but doesn't link back to the tumor risk Health raises. |
| vs Cockatiel | C+ | Nothing new for someone already set on a budgie. |

Set grade: B+. "Strong, specific, unusually honest about vet cost and
solo birds, undermined by core numbers that disagree page to page."

Hub versus the set, both sides quoted (all against the old legacy hub,
resolved by the router rebuild):

- Cage. The old hub said: "A minimum cage size of 18x18x24 inches is
  required for a single budgie." The tank setup guide says: "An
  absolute minimum for a single budgie is often cited around 18x18x18
  inches, but a wider flight-style cage serves them far better,
  something closer to 30x18x18 inches for a pair." Different minimum,
  and the old hub called its own number "required." The router hub's
  Enclosure row now quotes tank setup's own sentence.
- Diet. The old hub said: "should make up 60 to 70% of a budgie's
  diet," with an FAQ adding "Seed mix should be no more than 10 to
  20%." Tank setup says: "pellets should make up roughly 60 to 80% of
  a budgie's diet, with fruits, vegetables, and greens covering
  another 20 to 25%, and seeds treated as an occasional extra." The
  router hub's Diet row now quotes tank setup's own figures.
- Lifespan. Three answers to one question: the old hub's FAQ said "7
  to 12 years with proper care" (unsourced), the vs cockatiel guide
  said "A well-kept budgie typically lives 5 to 10 years" citing
  PetMD, and the encyclopedia said "up to 21 years recorded in
  captivity" (also unsourced). Opening the vs guide's own cited PetMD
  page found it actually states 7 to 15 years for captive budgies, not
  5 to 10; a further search found the real record holder, Charlie, a
  budgerigar who lived 29 years and 2 months (Guinness World Records),
  not 21. The vs cockatiel guide's body, table, FAQ, and seoDescription
  are now corrected to 7 to 15 years, and the encyclopedia entry now
  reads "typically 7 to 15 years in captivity, with the oldest
  documented individual living 29 years, 2 months," which the router
  hub's Lifespan row quotes.
- Vet cost. The old hub's own annual table listed "Annual avian vet
  check: $50 to $90" against the cost guide's FAQ "Add an annual
  exotic vet checkup of $80 or more" and its table's "~$7" amortized
  line, three numbers for the same idea. The router hub's Budget row
  now quotes the cost guide's own headline figures instead of
  restating a separate table.

The set as a whole: buyable, houseable, feedable, tameable, and basic
emergencies are recognizable from this set. Real gaps, checked against
the Health and More list before being called real: a cage cleaning
schedule, bathing or misting frequency (despite a misting bottle on
the old hub's checklist), a toxic-foods list, and vegetable portion
size for a 30-gram bird. None of these are covered by a shared guide
either; filed in docs/READER_LOG.md.

Deep dives against each other: seed-causes-fatty-liver, width-over-
height, and "prey animals hide illness" each repeat consistently
across three or more pages with no disagreement. Two soft
inconsistencies, not true conflicts: the cere color guide's specific "6
to 12 months" sexing window against health's vaguer "several months
old" (compatible, just different precision), and the tank setup
guide's "needs substantial daily interaction... close to as important
as diet or cage size" against the enrichment guide's FAQ "it can be
[okay alone], provided the owner supplies the social interaction" -
both actually agree solo is fine only with heavy compensating
interaction, just phrased from different angles. Neither needed a fix.

Recommended links, one per page:

| Page | Sentence | Link to |
|---|---|---|
| Hub | none needed | |
| Encyclopedia | "up to 21 years recorded in captivity" | Health issues guide (skipped: encyclopedia entries are structured data with no link slot) |
| Cost | "The cage is worth prioritizing width over cheapness" | Tank setup guide (skipped: the cost guide had already spent its one allowed same-species link on the health issues guide) |
| Handling | "use a small towel rather than your bare hands" | Bird First Aid Kit and Grooming guide (added) |
| Health issues | "Treat a change like that as a reason to book an avian vet visit" | Cere color guide (added, using the health guide's one allowed same-species link) |
| Tank setup | "Budgies need roughly 10 to 12 hours of darkness" | Photoperiod and Sleep guide (added) |
| Enrichment | "the clearest signs enrichment isn't covering current needs" | Why Is My Bird Losing Feathers guide (added) |
| Cere color | "That same texture change in a male is a different story" | Health issues guide (skipped: would be cere color's own second same-species link and the guide already has none spent, but the health guide already links back so a second is redundant) |
| vs Cockatiel | none needed, already well linked | |

Trust: three different lifespans, two cage minimums, and a cost page
whose own math didn't reconcile with the old hub's separate table were
the main doubts, all resolved by the router rebuild and the lifespan
research above. The sentence that most convinced the reader a keeper
wrote this: "A budgie that suddenly starts limping, drags a leg, grips
the perch weakly on one side, or falls off its perch is often not
injured."

Reader's two changes: pick one number each for cage minimum, lifespan,
pellet percentage, and monthly food, and use it everywhere (done by
the router rebuild and the lifespan research); add a routine husbandry
page for cleaning, bathing, and toxic foods (not done, a new-content
gap outside a deep-dives-only pass, filed in docs/READER_LOG.md).

Fixed the same day: router hub rebuilt, resolving the cage, diet, and
vet-cost conflicts by construction; the lifespan conflict researched
for real (PetMD's actual figure and the Guinness record holder) and
corrected across the vs cockatiel guide and the encyclopedia entry;
four of the eight recommended links added.

Open: the cage-cleaning, bathing, toxic-foods, and vegetable-portion
gaps filed in docs/READER_LOG.md for whoever writes new content next.

## Budgie (2026-09-09, batch B, second pass, after the fixes)

One Opus agent, the same nine pages re-extracted after the first-pass
fixes, about 79k tokens.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B | The most useful page here, undercut by its own cage numbers. |
| Encyclopedia | C+ | Nothing to act on except lifespan and adult size, which the hub already gave. |
| Cost | B | Budgetable, but the setup table did not render, so the $175 to $475 had no itemization behind it. |
| Handling | A- | Clear, ordered, executable from day one. |
| Health issues | A | Best page in the set; the limp-equals-tumor section is new to most readers. |
| Tank setup | A- | Buyable: dimensions, bar spacing, perch types to avoid, temperature, PTFE. |
| Enrichment | B+ | Actionable and cheap, but contradicts the setup page on solo birds. |
| Cere color | B | Useful for sexing, thinner than the health page on the same topic. |
| vs Cockatiel | B+ | Decision-grade, though the reader had already decided. |

Set grade held at B+, same reason: "strong, specific, mostly
non-redundant, let down by a contradicted cage number and a sidebar of
relevant guides the bodies never reach into."

One real bug the second pass caught that the first pass couldn't: the
new router hub contradicted its own first-week row. The Enclosure row
correctly read 18x18x18 (tank setup's real sourced minimum), but the
buy list still said "18x18x24 inch cage or larger" and the Tank setup
route line still said "The 18x18x24 minimum," both leftover from the
pre-fix draft that had copied the old hub's number instead of the deep
dive's own. Both corrected to 18x18x18 to match the first-week row and
the source.

A real conflict the reader named directly: the tank setup guide's FAQ
says "Can one budgie live alone happily? A: Not well," while the
enrichment guide's FAQ says "Is a single budgie okay without a cage
mate? A: It can be, provided the owner supplies the social
interaction." Neither page cites a source for this (the tank setup
guide carries no Sources block at all, see below), so per the
source-ranking rules the page whose subject is the topic wins: tank
setup has a dedicated Social Needs section built around this exact
question, enrichment's is a single FAQ answer. Enrichment's FAQ
reworded to "Not especially well on its own... needs the owner to
supply substantial daily interaction... to make up for the flock
companion it's missing," keeping its own point about foraging and
destructible enrichment not being substituted, while agreeing with
tank setup's headline answer instead of contradicting it.

Two softer ones the reader named, checked and left alone: the health
guide ties a mature male's blue-to-brown cere to "a testicular tumor
producing estrogen" while the cere color guide, on the same symptom,
names scaly face mites or "less commonly, a cere tumor" and never the
testicular one. Different precision, not a contradiction: the cere
guide's list is broader and the health guide's case is the specific
one, and the health guide now links the cere guide from that exact
sentence. And the enrichment guide's "hide part of the daily seed or
pellet ration" against tank setup's "seeds as an occasional extra":
the foraging advice covers either ration, so no figure or
recommendation is at odds.

A tooling bug, not a content one, fixed at the reader's request mid
session: the cost guide's setup table showed as "[table could not be
parsed]" in both reader passes because one of its rows uses a bare
`<AffiliateLink>` element directly as a cell value (`[<AffiliateLink
...>Perches</AffiliateLink>, "$15 - $25"]`) rather than a plain string,
and the extractor's table parser only knew how to unwrap that pattern
inside a `<>fragment</>`, not as a raw cell on its own; the whole table
literal failed to evaluate as JS and every row vanished behind the
one error message. scripts/reader-extract.mjs's `clean()` now resolves
any bare `<Tag>...</Tag>` cell value the same way it already resolved
fragments, looping so a component nested inside a fragment resolves
innermost-first. Verified against leopard gecko, goldfish, axolotl,
ball python, rabbit, and bearded dragon: no table anywhere newly broke,
and the budgie cost table now renders in full.

Five more recommended links added: handling to the shared bird first
aid and grooming guide (towel restraint), health issues to the shared
chronic egg laying guide (egg binding's calcium and vitamin D link),
tank setup to the shared household hazards guide (a second sentence,
past the PTFE warning), enrichment to the same household hazards guide
(what "bird-safe" rules out), and the vs cockatiel guide to budgie's
own tank setup guide (its one allowed same-species link, on the
same-species-pair sentence). One suggested link skipped for real this
time: handling guide's hand-raised-versus-parent-raised sentence is
its opening paragraph, and RULES bars a link before the first H2; no
later sentence in that article revisits the topic naturally, so it's
disqualified by position, not skipped by choice.

Open, for whoever writes new content next: budgie-tank-setup-guide.mdx
carries no Sources block at all, the only budgie deep dive missing
one; its cage, bar spacing, and diet-percentage figures are plausible
and match what other sites state, but none of them trace to an opened
source the way every other budgie article's do. Flagged, not fixed:
adding real citations is a research pass (RULES, Sources: opened pages
only), not a link-and-number fix. The cage-cleaning, bathing,
toxic-foods, and vegetable-portion gaps from the first pass remain
open too, still uncovered anywhere in the set.

## Budgie (2026-09-09, batch B, species check)

One Fable agent, branch claude/batch-b-startup-ve7avl against base
773c6bf (one commit before the stated 83a3e68; the branch forked
before that commit landed on main, not a scope problem, just a note
for whoever merges: the branch doesn't carry that commit's sharp
version bump).

Findings, fixed on the branch (commit be2adfe):

- The hub's Zoonotic risk row still carried the old legacy hub's
  psittacosis text ("mention the possibility to your own doctor if you
  develop flu-like symptoms") instead of the health guide's own
  wording. Corrected to the health guide's actual Psittacosis section:
  cause, signs, and "mention the possibility to your vet directly."
- The enrichment guide's reworded solo-bird FAQ had picked up a tail
  that near-copied the body's own Social Enrichment sentence on a
  comma splice ("...either way, both birds still need those
  individually"). Trimmed back to "...either way."
- The second-pass review section was missing the per-page grade table
  the leopard gecko and axolotl templates use; added from the raw
  log. Two softer conflicts the reader named (the cere guide's "less
  commonly, a cere tumor" against health's specific "testicular
  tumor"; enrichment's "part of the daily seed or pellet ration"
  against tank setup's "seeds as an occasional extra") were named by
  the reader but never recorded as checked; recorded, correctly left
  as different precision rather than contradiction. "Four more
  recommended links" corrected to five, matching the actual list, in
  both the second-pass section and the running summary.

Verified independently rather than just trusted: the lifespan
research (opened PetMD's own cited page directly: "budgies can live
anywhere between 7-15 years"; opened the Guinness World Records page
for Charlie, 29 years 2 months) and the extractor fix's "no
regressions" claim (ran the parser against 12 species at both the
base and branch commits and diffed the output: six cost or tank-setup
tables changed, all six were "[table could not be parsed]" at base and
all six render at the branch head, zero newly broken).

Everything else checked clean: every hub row's numbers and wording
against its named source, the emergency card against the health
guide's list, routes and buy list and the three verbatim FAQs, the
18x18x18 figure consistent everywhere in the hub object, no link over
its limit, both correct and missing date bumps, no untracked hedge or
Sources or affiliate-link changes, and the full gate suite (internal
links, related articles, affiliate, cost coverage, SEO tags, voice
--strict, species numbers, eslint) green.

Verdict: fixed on the branch. Nothing merged to main.

## Cockatiel (2026-09-09, batch B, first pass, before the router hub)

Extractor set of nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, vs cockatoo). One Opus agent,
about 81k tokens. The review below reads the old legacy hub; the
router hub was built from its findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B+ | Densest page: cage dimensions, itemized costs, pellet brands, night-light rule. |
| Encyclopedia | B | Short but earns its place: size, weight, and a genuinely interesting mutation history. |
| Cost | C- | Two tables half full of "Part of the starter setup" instead of numbers. |
| Handling | A- | Best-structured article: settling period, flat-palm step-up, a real stress list. |
| Health issues | B | The call-the-vet list and the zoonotic flag are useful; thin on what to actually do. |
| Tank setup | B | Width over height, half-inch bars, spot-clean daily. |
| Feeding | A | Best article in the set: safe list, toxic list, no grit, six honest reasons for appetite loss. |
| Enrichment | A- | A real priority order, start-easy foraging advice, no sandpaper perches. |
| vs Cockatoo | C+ | Fine, but the reader had already decided. |

Set grade: B-. "Strong individual articles undermined by the hub
disagreeing with them on cage size, bar spacing, cage shape, lifespan,
and diet ratio."

Hub versus the set, both sides quoted (all against the old legacy hub,
resolved by the router rebuild):

- Cage. The old hub said: "A minimum cage of 24x24x30 inches is
  required for a cockatiel." Tank setup says: "Reference tables
  commonly list a minimum of about 20 by 20 by 30 inches for a single
  cockatiel, though many keepers aim closer to 24 by 24 by 30 inches."
  Different minimum, and the old hub called its own number required.
- Shape. Directly opposed, not just different numbers: the old hub
  said "Cockatiels are active climbers and benefit from vertical
  space," tank setup says "cockatiels are horizontal flyers, so a
  tall, narrow cage wastes exactly the space they'd actually use."
  Tank setup's framing is the one with a citation behind it (PetMD's
  care sheet); the old hub's "active climbers" line traces to no
  source at all.
- Bar spacing, a safety figure. The old hub said "1/2 to 3/4 inch is
  appropriate." Tank setup says "half an inch or smaller to prevent
  head entrapment," a stricter, safer number. The old hub permitted a
  spacing tank setup calls a genuine injury risk.
- Diet ratio, a real three-way conflict across the set, not just hub
  versus deep dive: the old hub said pellets should be "60 to 70%,"
  tank setup said "60 to 80%," feeding said "roughly 75 to 80%."
  Opened tank setup's own cited VCA page directly (vcahospitals.com,
  Cockatiels: Feeding): it states "Pellets should ideally represent
  approximately 75%-80% of the bird's diet," matching feeding's
  figure, not tank setup's own quote of it. Tank setup's diet
  paragraph was a near-duplicate of the feeding guide's fuller
  treatment anyway, so it's now a one-sentence pointer at feeding
  instead of restating a number it was misquoting.
- Lifespan. The old hub said "15 to 25 years." The cost guide said
  "Cockatiels live 15 to 20 years," matching neither of its own two
  most relevant cited sources: opened them directly, TheVetDesk states
  "the next 10 to 15 years" and Hepper states "around 10 to 15 years
  old." Corrected to 10 to 15 throughout the cost guide. Left
  unresolved and noted rather than force-reconciled: both
  budgie-vs-cockatiel-guide.mdx and cockatiel-vs-cockatoo-guide.mdx
  independently state "15 to 25 years" for cockatiels, citing PetMD's
  "How Long Do Birds Live" page directly (opened it: PetMD does say
  "on average approximately 15 to 25 years... oldest cockatiel
  reported to be 36 years old," a real quote, not invented), and
  cockatiel-vs-cockatoo-guide also cites a peer-reviewed captive-parrot
  survival paper (Young et al. 2011) that could not be opened
  (paywalled) to check its exact figure. Two real, cited numbers from
  different source tiers that do not agree; out of scope to force one
  side to match the other in a deep-dives-only pass, flagged here
  instead. The encyclopedia's "up to 25 years in captivity, the oldest
  on record 36" matches PetMD exactly and was left untouched, it is
  not the unsourced guess it looks like at a glance.
- Vet cost. The old hub's table said "Annual avian vet check: $60 to
  $100." Cost says "$85 to $200." The router hub's Budget row now
  quotes the cost guide's own figures.
- Setup total. The old hub's own table summed to roughly $145 to $280
  before the bird. Cost says "$320 to $860" for the full setup. The
  router hub drops the separate summed table and quotes cost's own
  headline range.
- Hub against itself, in the old legacy version only: Health said "10
  to 12 hours of darkness per night," the same page's own FAQ said
  "provide 14 to 16 hours of darkness per night" for reducing egg
  laying. Neither figure came from a cockatiel deep dive, so neither
  carried into the router hub; the Sleep row now quotes tank setup's
  actual 10 to 12 hour figure, and the 14 to 16 hour egg-laying
  intervention is left for the shared chronic egg laying guide to
  cover if it doesn't already, not invented here.

Checked and found not a bug: tank setup's "Ten to twelve hours of UV
light exposure" sitting on the same page as "10 to 12 hours of...dark
sleep" reads like a duplication error (the two together exceed 24
hours), but PetMD's own cockatiel care sheet, cited by that page,
states exactly "shine a full-spectrum UV light...for 10-12 hours each
day." Day light hours and night dark hours are two different real
figures, not one number pasted twice.

The set as a whole: buyable, houseable, feedable, tameable, and the
emergency signs are all here. Real gaps, checked against the Health
and More list before being called real: room temperature and draft
guidance, a measurable daily food amount (grams or a bowl depth, not
just a percentage), how to actually find or verify an avian vet, and
how to introduce a second cockatiel (the shared colony guide covers
budgies, canaries, and finches only, not cockatiels). None of these
are covered by a shared guide either; filed in docs/READER_LOG.md.

Deep dives against each other: the non-stick kitchen warning and the
seed-diet lecture each repeat consistently across three or four pages
with no disagreement once the pellet percentage above is fixed. The
crest-reading disagreement between handling ("held upright and
relaxed... calm curiosity") and vs cockatoo (different bird, different
crest language) is a different species' body language, not a
same-species contradiction, and stays as is.

Recommended links, one per page:

| Page | Sentence | Link to |
|---|---|---|
| Hub | none needed | |
| Encyclopedia | none needed | |
| Cost | "so it's worth locating one near you before an emergency forces the search" | Bird Emergency Plan guide (added) |
| Handling | "routine things like cage cleaning, nail trims, or a vet visit" | Bird First Aid Kit and Grooming guide (added) |
| Health issues | "changes in droppings" | Reading Bird Droppings guide (added) |
| Tank setup | "Cockatiels need 10 to 12 hours of quiet, dark sleep every night" | Photoperiod and Sleep guide (added in the species check; the first-pass commit never added it, and the reader's night-fright sentence is not something the photoperiod guide covers, so the link sits on the sleep-hours sentence that guide actually answers) |
| Feeding | "laying hens are the one group that need extra calcium consideration" | Chronic Egg Laying and Egg Binding guide (added) |
| Enrichment | "Do not assume plucking is behavioral before an avian vet has ruled out medical causes" | Molt vs. Plucking vs. PBFD vs. Giardia guide (added) |
| vs Cockatoo | "have a plan for who cares for it if it outlives you" | Succession Planning guide (added) |

Trust: the two cost tables with cells reading "Part of the starter
setup" instead of a number, the three-way pellet percentage split, and
the cage-shape contradiction were the main doubts, the first two
resolved by the router rebuild and the diet research above; the third
was never a real bug, see above. The sentence that most convinced the
reader a keeper wrote this, from feeding: "We couldn't find a single,
consistently sourced number for exactly how many hours or days a
cockatiel can safely go without eating, and would rather say that
honestly than invent a round figure."

Reader's two changes: make the hub inherit its numbers from the deep
dives instead of restating them, starting with bar spacing, a safety
figure (done by the router rebuild); put real numbers back in the cost
tables and reconcile them with the hub (the cost guide's own tables
already carry real per-item ranges for the vet and ongoing sections,
only the setup table's per-item cells were vague by design, matching
the site's established "item, then range or note" cost-table pattern
used elsewhere; left as is since it's not actually missing data, just
a different table shape than the reader expected).

Fixed the same day: router hub rebuilt, resolving the cage, shape, bar
spacing, and vet-cost conflicts by construction; the diet-percentage
conflict researched for real (VCA's actual page) and fixed in tank
setup, which is now a pointer at feeding rather than a near-duplicate;
the lifespan conflict researched for real (TheVetDesk and Hepper, both
opened directly) and corrected in the cost guide. Six of seven
recommended links added in the first pass; the seventh (tank setup)
landed in the species check.

Open: the two vs-piece lifespan figures (15 to 25, both real, both
cited) against the cost guide's now-corrected 10 to 15 (also real,
also cited) are left unreconciled, a genuine cross-tier source
disagreement rather than an error, flagged for whoever next touches
either vs guide. The room temperature, food-amount, avian-vet-finding,
and second-cockatiel gaps from the first pass remain open too, still
uncovered anywhere in the set.

## Cockatiel (2026-09-09, batch B, second pass, after the fixes)

One Opus agent, the same nine pages re-extracted after the first-pass
fixes, about 82k tokens.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | A- | The page I would print: cage 20x20x30, half-inch bars, 30-day quarantine, the vet-now list. |
| Encyclopedia | C+ | Good history, wrong lifespan for a buyer. |
| Cost | B | Budgetable, but four setup-table rows say "part of the starter setup." |
| Handling | B+ | 7 to 14 days hands-off, flat palm, 10 to 15 minute sessions, the stress list. |
| Health issues | A- | Cuttlebone in permanently, no kitchen, the call-now list. |
| Tank setup | A- | Everything to buy and place, plus spot-clean daily, deep clean weekly. |
| Feeding | A | Best page here; read it twice. |
| Enrichment | A- | The priority order, and rotate. |
| vs Cockatoo | B+ | Skimmed; for someone earlier in the decision. |

Set grade held at B+, same shape as before:
"genuinely useful, specific, and honest about what it does not know,
but the lifespan number changes depending on which page I am standing
on."

Real issues the second pass caught that the first pass didn't:

- Diet arithmetic. Feeding's own sentence, "roughly 75 to 80% of daily
  intake... with fresh vegetables and fruit filling another 20 to
  25%," tops out at 105% before counting the seeds the same sentence
  allows. Opened the cited VCA page again, more carefully this time:
  it actually says fruits and vegetables "should account for no more
  than 20%-25%," an upper-bound qualifier the site's copy had dropped.
  Restored "no more than" in the feeding guide's body and FAQ, the
  tank setup guide's FAQ (now a pointer at feeding, same figure), and
  the router hub's Diet row, so the ranges read as independent ceilings
  rather than a sum. Budgie's own tank setup guide has the identical
  "another X%" pattern and the identical overshoot risk; left
  untouched since it's outside this species and its own species check
  already passed, flagged here for whoever next touches it.
- Crest position, a real same-species contradiction, not just
  different wording: the handling guide said "held upright and
  relaxed, it signals calm curiosity," the vs cockatoo guide said
  "straight up usually signals excitement or alarm." Neither
  citation actually backs a fixed position-to-mood dictionary (checked
  handling's own two sources, Lafeber's cockatiel FAQ page and its
  bird behavior page directly; neither gives one), and the site's own
  shared bird-body-language-guide.mdx says so explicitly: "this guide
  isn't going to invent that granularity where the documentation
  doesn't support it." The handling guide's "upright = calm" claim,
  the one with no source of its own and the one that actively
  contradicts the site's shared reference, was cut from the FunFact;
  the box keeps the flattened and forward readings and now links the
  shared body language guide. Species check correction: handling's
  own two sources back only the flattened reading (SpectrumCare:
  "flattens its crest tightly... back up and slow down"); Lafeber's
  behavior page, cited by the vs guide, says only that a raised or
  lowered crest indicates emotional state, "excited, fearful or
  happy." So "swept forward = startled alertness" is Mike's original,
  unsourced, hedged with "can mean," and left. The body's comfort
  list still reads "A relaxed, upright crest," left too: Lafeber lists
  "happy" among raised-crest states, so it is incomplete rather than
  contradicted, the same way the vs guide's "straight up = excitement
  or alarm" is. The vs cockatoo guide's more granular
  claim was left as is, it no longer conflicts with anything on this
  page, though it runs a little ahead of what that same shared page
  considers verified, noted for whoever next touches it.
- Toy material, a softer version of the same pattern: health's
  "frequent offenders when it comes to ingesting rope fibers" against
  enrichment's recommendation of "untreated natural fiber" toys with
  no caveat. Not a hard contradiction (rope and generic natural fiber
  aren't necessarily the same material), but close enough to read as
  one page's warning and another page's blind spot. Enrichment now
  flags checking rope-based toys for frayed strands and links the
  health guide.
- Lifespan framing. The hub's "10 to 15 years is typical" read to the
  reader as flatly disagreeing with the encyclopedia's "up to 25 years
  in captivity." Not a numeric conflict (typical and maximum are
  different claims, and both are separately sourced), but the hub row
  was given "though some live considerably longer with excellent care"
  so it read as compatible rather than contradictory. Reverted in the
  species check: the cost guide never says that, and a hub row is a
  copy of its source (RULES, Hubs). The row now carries the cost
  guide's own FAQ sentence, "Cockatiels live 10 to 15 years, so this
  is a long-term financial commitment even though the entry cost is
  modest." The typical-versus-maximum gap against the encyclopedia is
  a wording gap for the cost guide to close if Mike wants it closed,
  not for the hub to paper over.

The set as a whole and deep-dive overlap otherwise unchanged from the
first pass; the "24-hour day" UV-versus-darkness question the second
pass raised again was already checked in the first pass and is real,
sourced, non-conflicting content (day UV hours, night dark hours), not
re-litigated here.

Recommended links: two more added (handling to the shared bird body
language guide, enrichment to the health issues guide, both above),
the rest already covered in the first pass.

Trust: same doubts as the grade line above, mostly resolved by the
arithmetic and crest fixes; enrichment's uncredited "a 2025 study" and
"a 2020 paper," and health's "as one avian practice puts it plainly,"
were flagged by the reader as citation style rather than a factual
problem, both genuinely exist in that article's own Sources block
(checked), just not named inline; left as house style rather than
rewritten, matching how other articles on the site cite research in
prose.

## Cockatiel (2026-09-09, batch B, species check)

One Fable agent, branch claude/batch-b-startup-ve7avl, commit 3c0e03c.
Findings, fixed on the branch:

- The hub's Lifespan row added an unsourced "though some live
  considerably longer with excellent care" clause to soften the
  encyclopedia contrast; the cost guide never says that. Reverted to
  the cost guide's own FAQ sentence.
- Tank setup's diet-pointer rewrite had silently dropped the ZuPreem
  pellet affiliate link when the paragraph was cut (a Never-list
  item); restored, moved into the pointer sentence as the rule
  requires.
- Five added link sentences read as the site talking about itself
  ("our X guide covers/flags/walks through"); reworded onto the
  animal, same targets kept.
- The first-pass link table had recorded a tank-setup-to-photoperiod
  link as added that was never made; added for real, on the sleep
  sentence.
- The second-pass review section was missing its per-page grade table
  (added from the raw log), and overstated Lafeber's crest-position
  support (Lafeber's cockatiel FAQ has no crest content at all, and
  its behavior page only says raised/lowered crests mean "excited,
  fearful or happy," not the specific flattened/forward readings
  attributed to it); corrected to name what each source actually
  supports.

Verified independently: TheVetDesk, Hepper, and VCA's exact wording
all opened directly and confirmed. No scope violations. Full gate
suite green, including affiliate coverage back to the correct count
after the restored link.

Verdict: fixed on the branch. Nothing merged to main.

## Cockatoo (2026-09-09, batch B, single pass, before the router hub)

One Opus agent, ten pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal, the screaming and
plucking explainer), about 90k tokens. Single-pass review this
species, to spend less per species; fixes below folded into one pass
instead of first pass plus second pass.

Set grade: B. "Strong, sourced, honest deep dives undercut by a hub
that restates them with different numbers."

Hub versus the set (all against the old legacy hub, resolved by the
router rebuild): diet ratio (old hub 60-70% pellets against
feeding/tank setup's sourced 75-80%), cage cost, food cost, and
lifespan (old hub and encyclopedia agreed at 40-60; cost guide alone
said "40 to 70-plus, Umbrella cockatoos commonly 50 to 70") all
resolved by construction, plus one genuine philosophical conflict: the
old hub's "most cockatoos crave cuddling and close physical contact"
against the handling guide's cited behavior consultant, "cockatoos are
not cuddly, we are," whose fix is cutting shoulder and lap time, not
indulging it. The router hub carries handling's framing (a Bonding row
warning against over-bonding), not the old hub's.

Researched for real: the cost guide's "40 to 70-plus years, Umbrella
cockatoos commonly 50 to 70" didn't match its own cited PetMD page,
which actually says "20-40 years in the wild, and up to 70 years or
more as pets" with no Umbrella-specific figure at all. Corrected to
"40 to 60 years is typical, with some individuals living into their
70s or beyond," matching the encyclopedia's own field. Feeding's diet
percentages had the same dropped-qualifier bug found in cockatiel:
"Pelleted food should make up 75 to 80%... the remaining 20 to 40%"
sums past 100%; VCA's actual cited page says produce should be "no
more than 20%-40%," restored that qualifier in the body and FAQ.

A real encyclopedia error, not a deep-dive conflict: the cockatoo
entry's own `conservation` field said "Vulnerable (IUCN)" while its
own History paragraph said "the IUCN reclassified the species as
Endangered in 2018," a direct self-contradiction. Checked Wikipedia's
current IUCN listing (Endangered, 2018 assessment) directly; corrected
the field. The legal guide's New Jersey section separately claimed
"the Moluccan is Vulnerable" against its own Massachusetts section's
"both assessed as endangered"; checked the Moluccan (salmon-crested)
cockatoo's real IUCN status, also Endangered, and corrected NJ to
match.

A real same-article self-contradiction in the enrichment guide, not a
cross-page one: the body explicitly says "we are not attaching a
specific number of hours to [wild foraging time], because the figures
that circulate for it do not trace to a source worth citing," then a
heading two paragraphs later reads "Foraging, to Fill Six Hours" and
an FAQ answer states "up to six hours a day" as fact. Separately, the
body says a 2014 training-versus-other-treatments study's "training
outperformed the rest" claim isn't verifiable and "this guide does not
make it," then the very next FAQ question is "Why did training work
best?" answered as though it were settled. Both fixed to match the
body's own honest hedge rather than restating the disclaimed claims:
the heading reworded, the "six hours" FAQ answer given no number, the
training FAQ rewritten to say the evidence doesn't clearly say so, and
the What Not to Do paragraph's "when the tested winner was structured
time" clause, the same disclaimed claim, reworded to match.

Also fixed: `cockatoo-legal-guide` was missing from
src/lib/data/relatedArticles.js entirely, the same wiring-bug class as
leopard gecko's temperature guide and hamster's legal guide, invisible
in every Deep Dive sidebar despite being cross-linked from other
cockatoo articles and shown in the hub's own routes. Added.

Left open, filed rather than fixed in a hub-and-fixes pass: no page
reconciles 4 to 6 hours of interaction, foraging time, out-of-cage
time, and 10 to 12 hours of sleep into one 24-hour day; no cage or
dish cleaning routine; no bathing or misting guidance despite the
species' heavy feather dust; no guidance on finding or vetting an
avian veterinarian, or pricing PBFD screening before purchase; no
noise-versus-lease-or-neighbor guidance in the legal guide; no
introduction guidance for existing pets in the house. None of these
are covered by a shared guide either.

## Lovebird (2026-09-09, batch B, single pass, before the router hub)

One Opus agent, eight pages (hub, encyclopedia, cost, handling, health
issues, tank setup, enrichment, vs budgie), about 91k tokens. Set
grade: B, "strong, sourced health and setup work sitting under a hub
that contradicts it and a cost page whose arithmetic does not close."

Real conflicts, all resolved by construction in the router rebuild:
diet, cage price, and the old hub's rosy "a bonded pair is happier and
healthier, less aggressive toward humans" against the handling guide's
"a bonded pair bonds to each other instead, largely ignores its
keeper, and is closer to keeping a pair of finches, entertaining but
rarely tame" (the router hub's "One bird or two" row carries
handling's framing, not the old hub's). The mismatched-pair aggression
risk is stated only in lovebird-vs-budgie-guide.mdx, not in the
handling guide, so the species check pulled that clause out of the
handling-sourced row.

Two real arithmetic bugs, both researched and fixed:
- The cost guide's own headline, "Roughly $70 to $125 a month," didn't
  match its own itemized annual table ($70-110 pellets + $80-130
  vegetables + $40-70 toys + $70-120 vet = $260-430/year, about $22 to
  $36 a month), and its prose sub-figures ("$20 to $30 in quality
  pellets" a month, "$10 to $15" produce) didn't match the table's
  annual per-item figures either. Corrected the headline, body, and
  FAQ to the table's own math: "$260 to $430 a year," roughly $20 to
  $35 a month.
- A four-way lifespan conflict: the old hub said "10 to 20 years,"
  the encyclopedia said "typically 15 to 25 years in captivity," the
  cost guide said "10 to 15 years typically, up to 20," and
  lovebird-vs-budgie-guide.mdx said "7 to 15 years" (also still
  carrying budgie's own pre-fix "5 to 10 years, occasionally up to
  15," left over from budgie's batch since only
  budgie-vs-cockatiel-guide.mdx was touched then). Opened the cost
  guide's own cited VCA page directly: "Average lifespan is 10-15
  years; maximum is around 20 years," an exact match for the cost
  guide's figure. Corrected the encyclopedia to match VCA (the higher
  and unsourced figure was the one wrong here, the reverse of the
  budgie and cockatoo cases), and corrected lovebird-vs-budgie-guide.mdx
  on both sides: lovebird to "10 to 15 years, with a maximum around
  20," and budgie finally brought up to its own already-corrected "7
  to 15 years."

The "10 to 12 hours of covered darkness" versus "cutting exposure to
about 8 hours a day" light-schedule question the reader raised is the
same non-conflict pattern as cockatiel's egg-laying darkness note:
general sleep guidance against a specific intervention for a hen
already laying chronically, not the same claim. Tank setup itself
never states a specific hours figure for ordinary sleep (only "genuine
darkness at night"), so the router hub carries no Sleep row rather
than inventing one.

Recommended links: not added this pass, to keep the single-pass
version lighter on scope; the reader's eight suggestions (mostly
cross-links among handling, health issues, and enrichment on
plucking, nest triggers, and boredom signs) are left for a future
pass, filed here rather than actioned.

Open: no page reconciles the daily-time math (2 hours interaction plus
foraging plus sleep); no food-quantity, bathing, or cage-cleaning
guidance; no guidance for introducing a second lovebird beyond "do it
slowly." None covered by a shared guide.

## Tarantula (2026-09-09, batch B, single pass, before the router hub)

One Opus agent, ten pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal, vs emperor scorpion),
about 88k tokens. Set grade: B, "the deep dives are unusually honest,
especially enrichment and legal, and the hub undercuts them at the
exact point a new keeper is most likely to hurt the animal."

The single most important finding: the old legacy hub's own FAQ said
"Docile New World species like the Chilean Rose Hair...tolerate calm,
gentle handling," directly contradicting the handling guide's "a
tarantula, including the Chilean rose hair, is probably the wrong
choice" and the enrichment guide's "do not handle." That is the
question a first-time reader lands on the hub to ask, and the old hub
answered it backwards. The router hub carries the handling guide's
real answer (a Handling row: "Mostly, no"), not the old hub's.

Everything else the reader flagged as a hub-versus-deep-dive
disagreement (enclosure floor space, substrate depth, temperature,
adult and juvenile feeding intervals, mites, annual cost, lifespan)
resolved by construction, since the router hub copies every figure
from the deep dive that states it rather than restating its own.

One real same-article duplicate, not a conflict: tank setup's Diet
section was a near-copy of the feeding guide's much fuller treatment
("Adults typically eat every 1 to 2 weeks" stated as flat fact where
feeding guide gives the honest species-dependent range). Cut to a
one-sentence pointer, the affiliate link moved into it.

Checked and left as is, real disagreements between named or
implied different species rather than a contradiction: cost guide's
male/female Chilean rose hair lifespan (4-7 / 15-20+) against
tarantula-vs-emperor-scorpion-guide's general "popular species" figure
(3-6 / 15-30); the encyclopedia's broad 5-30 year range covers both.
Health issues' "wait about a week" for post-molt feeding against
feeding guide's stage-specific "3 to 7 days for slings and juveniles,
7 to 14 for adults" is compatible (a week falls inside both ranges),
not contradictory, so neither was changed.

`tarantula-legal-guide` was missing from relatedArticles.js entirely,
the same wiring-bug class as leopard gecko's temperature guide and
cockatoo's legal guide, invisible in every Deep Dive sidebar despite
being one of the hub's own routes; added.

Three links added (health issues to the setup guide's humidity
section, handling to the setup guide's low-and-wide design rationale,
tank setup's new feeding pointer); the reader's other six suggestions
left for a future pass.

Open: how to sex or confirm a female before buying, despite the hub
recommending one for longevity; what to do if a tarantula escapes
during cleaning; a substrate-change schedule; how to choose a seller;
sling-specific housing. None covered by a shared guide.

## Cockatoo, lovebird, tarantula (2026-09-09, batch B, species check)

One Fable agent, branch claude/batch-b-startup-ve7avl, commit 7d40c2b,
covering all three single-pass species in one check (matching how
batch A's check covered five species in one pass). Findings, fixed on
the branch:

- Cockatoo. The emergency card's vetLine said "confirm PBFD only
  through PCR testing"; the health guide says "Confirm with a vet
  through PCR testing," no "only." Removed. The What Not to Do
  clause in the enrichment guide had been reworded without being
  flagged as a fix at the time (still the same disclaimed training
  claim, restated rather than left as fact); kept, now listed. Every
  other number and framing (lifespan, IUCN status, diet percentages,
  the crave-cuddling removal) verified directly against real sources.
- Lovebird. The hub's "One bird or two" row claimed a specific
  mismatched-pair injury risk and attributed it to
  lovebird-handling-guide, which never actually makes that claim, only
  lovebird-vs-budgie-guide does. Corrected the row to the handling
  guide's own words. The Lifespan row's VCA phrasing swapped for the
  cost guide's own sentence. Both date bumps had been stamped
  2026-09-09 off the container's UTC clock; `TZ=America/New_York date`
  read 2026-09-08 at the time, matching CLAUDE.md's Eastern-date rule
  and the cockatiel batch's own correct 09-08 stamp 28 minutes
  earlier; corrected to 09-08.
- Tarantula. The Lifespan row said "a confirmed female is the
  long-term commitment," a word the cost guide never uses; swapped for
  the cost guide's actual sentence. Two of the three links added this
  pass read as the site talking about itself ("our enclosure setup
  guide has you build," "covers the actual humidity target," when the
  guide actually says sources disagree); reworded onto the animal,
  same targets kept. The dubia roaches affiliate link in the new diet
  pointer had drifted to cover "crickets or dubia roaches" together;
  narrowed back to the product it actually names.

Verified independently: PetMD's cockatoo page, the current IUCN status
for both cockatoo species, VCA's cockatoo and lovebird feeding pages,
and the lovebird cost guide's own arithmetic, all opened directly.

Full gate suite green across all three species (internal links,
related articles, affiliate, cost coverage, SEO tags, voice --strict,
species numbers for all three, eslint on every touched data file).

Verdict, all three: fixed on the branch. Nothing merged to main.

## Corn snake (2026-09-08, batch C, single pass, before the router hub)

One Sonnet agent, ten pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal, vs hognose), about 107k
tokens. Single-pass review this species, the batch's default shape.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B+ | The only page with a first-week checklist and cost table without hunting seven articles. |
| Encyclopedia | A- | Short and genuinely different content, wild range and morph history. |
| Cost | A | Real setup and monthly budget. |
| Handling | A- | The 48-72 hour and shed-avoidance rules are the actionable core. |
| Health issues | A- | Symptom list and when to call a vet. |
| Tank setup | A- | The most useful single page: temps, humidity, substrate depth. |
| Feeding | A | The most detailed page in the set: weight-keyed schedule, prey sizing. |
| Enrichment | A | Genuinely different, cites named studies. |
| Legal | B+ | Useful if you live in Georgia, New Jersey, or a handful of other states; Pennsylvania left openly unresolved. |
| vs Hognose | B | Useful for deciding, but its own humidity number didn't match the rest of the set. |

Set grade: B+. "Deep, well-sourced, occasionally contradicts itself on
basic numbers."

Hub versus the set, both sides quoted (resolved by the router rebuild):
adult size, old hub "Adult corn snakes typically reach 4 to 5 feet"
against the encyclopedia's "3.5-5 feet (107-152 cm)"; humidity
certainty, old hub "Humidity should stay at 40 to 60%" stated as
settled fact against the tank setup guide's own "This is one area
where sources don't fully agree... some specialist husbandry guides
recommend a higher baseline around 65 to 75%." Both resolved by
construction: the router hub now copies the encyclopedia's adult size
with no source (no deep dive states it) and the tank setup guide's own
hedge verbatim for humidity.

Deep dives against each other, both sides quoted: adult feeding
frequency given three ways, the old hub and feeding guide's own table
"Adults (3+ years, 600g+): Every 14 to 21 days" against tank setup's
"on a schedule of every 7 to 10 days for juveniles, stretching to
every 10 to 21 days as they reach adulthood." Feeding guide is the
subject-matter page and its own table is internally consistent across
five age brackets; tank setup's aside was a stray, uncited duplicate.
Fixed by cutting tank setup's aside to a one-sentence pointer at the
feeding guide, the same pattern used on ball python and axolotl.

The vs hognose guide's own comparison table read "Humidity needs:
40-50%" for corn snake, matching neither of tank setup's two stated
ranges (40-60% baseline, 65-75% per some specialist sources). Neither
side states 40-50 anywhere. Tank setup is the subject-matter page on
humidity, so vs hognose's table cell, one FAQ answer, and one body
sentence corrected to "40-60%," the more commonly cited baseline tank
setup itself uses first. The same page's adult-length figures ("3-5
ft" in the table, two more instances in FAQ and body) corrected to
"3.5-5 ft" to match the encyclopedia, the only place adult length is
actually stated; filed below as unsourced on both sides, decided by
which page owns the figure.

Recommended links, one per page, four added: cost guide's "The
thermostat genuinely is not optional" now points to tank setup;
handling's "always use a secure, locking enclosure" now points to tank
setup; feeding's "an underlying medical issue is the likely
explanation" now points to health issues; enrichment's "comfortably
exceeds body length for an adult" now points to tank setup. Not added:
health issues' suggested link to tank setup (already at its one-
sibling cap, spent on the feeding guide's diet-and-schedule sentence);
the hub's and encyclopedia's suggested links (out of scope, not deep
dives, and the encyclopedia is structured data with no link slot).

Left as sourced, not a bug: the warm-side digestion temperature in
feeding ("corn snakes need roughly 82 to 85°F on the warm side to
digest food safely") reads close to but not identical to tank setup's
table ("85 - 88°F, some sources: 80-85°F acceptable"); feeding's figure
sits inside tank setup's own stated acceptable range, so both already
agree once read in full.

Unsourced, needs a fact-check: the vs hognose guide's corrected 3.5-5
ft corn snake length and 40-60% humidity numbers now match the
encyclopedia and tank setup respectively, but neither original figure
(3-5 ft, 40-50%) traced to a cited source on either page, so this was
a which-page-owns-it call, not a source-ranking one.

Trust: the internal feeding-frequency and humidity mismatches read as
unreconciled drafts rather than deliberate flags. The sentence that
most convinced the reader a keeper wrote this: "A corn snake in a
large bare enclosure will use two hides and nothing else, which looks
like proof it wanted a small enclosure and is actually proof it wanted
cover."

Not covered anywhere: how to verify an enclosure is actually
escape-proof (gap sizes, latch hardware, a test method); how to select
a healthy corn snake at the point of purchase. Both filed in
docs/READER_LOG.md. Pennsylvania's legal status is left explicitly
unresolved by the legal guide itself, not a gap to fill.

Full gate suite green (internal links, related articles, affiliate,
cost coverage, SEO tags, voice --strict, species numbers, eslint on
the touched data file).

## Boa constrictor (2026-09-09, batch C, single pass, before the router hub)

One Sonnet agent, nine pages (hub, encyclopedia, cost, handling,
health issues, tank setup, feeding, enrichment, legal), about 95k
tokens. Single-pass review, the batch's default shape.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B+ | A genuine one-stop overview with a checklist I'd screenshot, but its own humidity numbers contradict its own FAQ. |
| Encyclopedia | B | Short, nothing actionable, but the CITES/Cayos Cochinos history nothing else covers. |
| Cost | A- | Real dollar ranges and the imperator-vs-red-tail pricing trap explained. |
| Handling | A | The neck-loop warning and tongue-flick/posture cues are the most useful safety content in the set. |
| Health issues | B+ | Clear signs and always-see-a-vet calls, but thin on what a vet visit actually costs (that lives unlinked on the cost guide). |
| Tank setup | A | The most immediately buildable page in the set. |
| Feeding | A- | The age-banded schedule is the clearest answer to "how often" anywhere on the site. |
| Enrichment | A- | Refreshingly honest that no boa-specific research exists rather than pretending otherwise. |
| Legal | A | Resolves real confusion (Florida, New Jersey, Louisiana). |

Set grade: B+. "Deep, honest, and mostly consistent, undercut by the
hub's internal humidity contradiction and the undefined sub-adult
life stage."

Hub versus the set, both sides quoted (resolved by the router
rebuild): the old hub contradicted itself before it even reached a
deep dive. Body text: "Humidity should be maintained at 50 to 70% in
ambient conditions." Its own FAQ: "Boa constrictors require 60 to 80%
ambient humidity." Neither matched the tank setup guide's own sourced
"60 to 70%, higher during shedding cycles." Temperatures drifted too:
old hub "ambient warm-side air temperature of 80 to 84 degrees F, and
a cool side of 76 to 80 degrees F" against tank setup's "ambient warm
side 80 to 85°F, cool side 75 to 80°F." All resolved by construction:
the router hub now copies tank setup's temperature and humidity rows
verbatim, once each.

The old hub's cost breakdown table summed to $300-600 for the
enclosure alone against the cost guide's own stated "$400 to $1,200"
total setup figure; the router hub now copies the cost guide's total
directly instead of maintaining a separate cost table. The old hub's
feeding schedule ("Feed juveniles every 7 to 10 days. Sub-adults
every 10 to 14 days. Adults every 14 to 21 days.") didn't match the
feeding guide's own five-bracket, age-and-weight schedule; the router
hub now copies that schedule verbatim. The old hub's quarantine
figure for IBD ("quarantine all new animals for 60 to 90 days")
undershot the shared reptile-quarantine-guide's actual Merck-sourced
recommendation of 3 to 6 months, the guide that specifically names
boas as the species that can carry IBD for months to years with no
visible signs; the router hub's Day one row now cites that guide's
real figure instead.

Deep dives against each other: the feeding guide's own FAQ softened
the 48-hour post-feeding handling wait, stated precisely everywhere
else (handling guide: "Wait at least 48 hours after feeding"; old hub:
"Allow 48 to 72 hours"), to a vague "Wait at least a few days after
feeding before handling." Corrected to match the specific, sourced
figure used everywhere else on the site.

Recommended links, five added: cost guide's illness-cost sentence now
points to health issues; handling's 48-hour wait sentence now points
to feeding; health issues' and tank setup's thermostat sentences now
point to the shared reptile heating and thermostats guide (no
same-species cap, since it's a shared class guide); enrichment's
tub-scenario sentence now points to tank setup. Not added: legal's
suggested link to cost guide for the red-tail pricing story, the only
sentence that carries it sits inside a ComparisonTable cell, which
does not take markdown links (RULES, Linking); the hub's and
encyclopedia's suggested links (out of scope, not deep dives, and the
encyclopedia is structured data with no link slot).

Also found, not fixed: `boa-constrictor-handling-guide` links out to
"10 Surprising Boa Constrictor Facts" at `/blog/10-surprising-boa-constrictor-facts/`,
a real, published, correctly-routed article (its frontmatter `slug`
matches). It is not wired into `boa-constrictor`'s RELATED_ARTICLES
entry, so it doesn't appear in the species' own Deep Dive list, the
same wiring-bug class as leopard gecko's temperature guide. Adding it
was tried and reverted: the file lives at
content/fun-facts/fun-facts-boa-constrictor.mdx, whose filename does
not match its own slug, and scripts/check-related-articles.mjs
resolves a listed slug against the file's name on disk, not its
frontmatter `slug` field, so adding the correct slug fails the dead-
slug gate. This is not unique to boa constrictor: six other fun-facts
articles carry the same filename-versus-slug mismatch (axolotl,
cuttlefish, golden retriever, humpback whale, octopus, rabbit),
including two species (axolotl, rabbit) whose hubs are already
reconciled and whose fun-facts pieces are similarly unwired. Fixing
it for real means renaming all seven files to match their slugs (the
convention every other "10 Surprising X Facts" piece already follows)
or teaching the checker to resolve by frontmatter slug, either of
which touches content or tooling outside a single species' deep
dives; left for Mike as a batch cleanup item rather than forced here.

Left as sourced, not a bug: the enrichment guide's "no research exists
on boa constrictor" framing against the ball python housing study it
borrows from, already the guide's own honest hedge, not a conflict.

Not covered anywhere: what to do about a healthy adult boa refusing
food for an extended stretch; how to actually build a bioactive
substrate setup, mentioned as an option but never explained; care
specifics for the roughly 1-to-3-year sub-adult stage the old hub
named but never defined; UVB bulb type, wattage, or placement beyond
"recommended." All filed in docs/READER_LOG.md.

Full gate suite green (internal links, related articles, affiliate,
cost coverage, SEO tags, voice --strict, species numbers, eslint on
the touched data file).

## African grey (2026-09-09, batch C, single pass, before the router hub)

One Sonnet agent, ten pages (hub, encyclopedia, cost, handling, health
issues, cage setup, feeding, enrichment, legal, vs cockatoo), about
106k tokens. Single-pass review, the batch's default shape.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B+ | Dense but scannable, though its numbers drift from the deep dives it summarizes. |
| Encyclopedia | A- | Short and adds real history, wild size, wild lifespan, CITES background. |
| Cost | A- | Clear dollar ranges across the whole ownership span. |
| Handling | A | Honest about what's proven versus anecdotal (Alex versus N'kisi). |
| Health issues | A | Tight and actionable. |
| Cage setup | A- | Practical, buildable. |
| Feeding | A- | Detailed, though its own numbers disagreed with the hub. |
| Enrichment | A | The most rigorous page in the set. |
| Legal | A | Genuinely interesting and well sourced. |
| vs Cockatoo | B+ | A useful decision aid. |

Set grade: B+. "Deep, well-sourced content undercut by unreconciled
numbers between the hub/encyclopedia and the deep dives."

Hub versus the set, both sides quoted (resolved by the router
rebuild): pellet percentage, old hub "60 to 70%" against the feeding
guide's VCA-cited "75 to 80%"; cage upgrade size, old hub "48x36x60
inches or larger is strongly preferred" against tank setup's real
veterinary figure "closer to 40 by 30 by 60 inches"; bar spacing, old
hub "3/4 to 1 inch" against tank setup's real "no more than 1 inch,"
dropping the floor entirely. All now resolved by construction: the
router hub copies each figure from its deep dive verbatim.

A real same-page error caught inside the feeding guide itself, not a
hub-versus-deep-dive conflict: its own body read "Fresh fruits and
vegetables fill out most of the rest, limited to roughly 20 to 40% of
total intake, with fruit specifically capped closer to 10%," which
doesn't reconcile against the same sentence's "pellets make up 75 to
80%" (75-80% pellets plus up to 40% produce oversums past 100%).
Opened the cited VCA source directly
(https://vcahospitals.com/know-your-pet/african-grey-feeding): pellets
75-80%, vegetables 20-25%, fruit 10% or less, and seeds (not fruits
and vegetables) are the category VCA caps at "20-40% if included at
all." The article had misattributed VCA's seed-inclusion figure to
fruits and vegetables. Corrected throughout (body and FAQ) to
vegetables 20-25%, fruit 10% or less.

A real fact error in the legal guide, checked against its own cited
source: the body and FAQ both stated the CITES CoP17 vote moving the
African grey to Appendix I happened "October 2, 2016," while the
guide's own cited USFWS press release
(https://www.fws.gov/press-release/2016-10/strongest-cites-protections-signal-hopeful-future-african-grey-parrots)
and the encyclopedia entry both say October 3, 2016. Opened the press
release directly to confirm: "adopted in a vote with 95 countries in
support, 35 opposed, and five abstentions" on October 3. Corrected
both instances in the legal guide to match its own source and the
encyclopedia.

[Reversed by the species check, 2026-09-09: the USFWS release is dated
October 3 but never states a vote date, and the Committee I secret
ballot it describes took place on Sunday, October 2, 2016 (WCS release
dated October 2, 2016, "intervening on behalf of the African grey
parrot at CITES CoP17 Oct. 2, 2016"; the ENB daily report for 2
October 2016 covers the Prop. 19 vote). The legal guide's original
October 2 was right; restored, with its lastUpdated returned to
2026-07-13 since the page now carries no change. The encyclopedia's
history section, which says October 3, is outside what this pass may
edit; left for Mike.]

Recommended links, six added: cost guide's emergency-cost sentence to
health issues; handling's sleep-mention to cage setup; cage setup's
plucking-risk sentence to enrichment; feeding's supplement sentence to
the shared bird-pellet-conversion-guide (no same-species cap, it's a
shared class guide); health issues' plucking-cause sentence to
enrichment; enrichment's medical-rule-out sentence to health issues.
Not added: the hub's and encyclopedia's suggested links (out of
scope, not deep dives, and the encyclopedia is structured data with
no link slot).

Left as sourced, not a bug: Alex's documented abilities read two ways
across the set, handling guide's "labeled 50 objects, 7 colors, and 5
shapes... grasp the concept of 'none'" against the encyclopedia and vs
cockatoo guide's "working vocabulary of over 150 words... understood
the concept of 'zero.'" Both describe the same real research from
different angles (the peer-reviewed count-and-label study versus the
plainer-language summary of his overall vocabulary), not a numeric
disagreement to reconcile; left as is since neither figure contradicts
the other, they answer different questions.

Not covered anywhere: exact daily feeding portions in cups or grams
for pellets and vegetables; what a baseline avian vet exam should
include beyond bloodwork and PBFD testing. Both filed in
docs/READER_LOG.md.

Full gate suite green (internal links, related articles, affiliate,
cost coverage, SEO tags, voice --strict, species numbers, eslint on
the touched data file).

## Chinchilla (2026-09-09, batch C, single pass, before the router hub)

One Sonnet agent, eleven pages (hub, encyclopedia, cost, handling,
health issues, housing, feeding, enrichment, legal, vs guinea pig, vs
hamster), about 100k tokens. Single-pass review, the batch's default
shape.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B | Gives a shopping checklist and cost tables you can act on, but its numbers disagree with the deep dives. |
| Encyclopedia | B+ | Adds real history (13 founder animals, the fur trade) with nothing to buy or do. |
| Cost | A- | Two clean dollar ranges you can actually budget against. |
| Handling | A- | The exact hold technique, the tail warning, fur slip explained clearly. |
| Health issues | A- | The 150 rule and a clear vet-now list. |
| Housing | B | Cage and dust-bath specs to shop against, but its numbers disagree with the hub. |
| Feeding | A | A ration you can follow tonight, and it admits where sources disagree. |
| Enrichment | A | Cites a named study and gives a priority order for building the cage. |
| Legal | A | Fact-checks specific bans and permit myths with statute citations. |
| vs Guinea Pig | B+ | Helped decide, though its lifespan framing clashed with the hub. |
| vs Hamster | B+ | Same value, same size-number wobble against the encyclopedia. |

Set grade: B+. "Deep, well-sourced, occasionally sloppy about keeping
its own numbers straight."

Hub versus the set, both sides quoted (resolved by the router
rebuild): wheel size, old hub "12-14 in solid exercise wheel" against
the housing guide's real "A solid metal wheel, 15 inches or larger,"
which also matches the cost guide's own "15\" or larger" line item;
cage height, old hub "24x24x48 in multi-level cage" against the
housing guide's real "around 24 by 24 by 36 inches"; ideal room
temperature stated three different ways, old hub "comfortable at 60 to
72 degrees F," the housing guide's real "Ideal room temperature 50 to
68°F" plus the 150-combined-with-humidity rule, and the feeding
guide's own aside "roughly 60 to 70°F, with anything above about 75°F
risky." All now resolved by construction: the router hub copies the
housing guide's real figures verbatim, and the feeding guide's aside
was cut to a pointer at the housing guide rather than restating a
third version.

A same-site fur-density conflict fixed independent of any single deep
dive: the old hub's funFact and FAQ said "up to 60 hairs per follicle
(humans have only 1)," while the encyclopedia's own overview
("extraordinarily dense fur (up to 80 hairs per follicle, versus 2-3
for humans)") and the vs-guinea-pig guide's own FunFact ("up to 80
hairs growing from a single follicle compared to 2 to 3 for a human")
independently agree on 80 versus 2 to 3. Corrected the hub's top-level
funFact field to match the two agreeing sources.

A real encyclopedia field error, researched and fixed: the
`wildLifespan` field held "10-20 years." Opened the Merck Veterinary
Manual's chinchilla page directly: "Chinchillas have a long lifespan,
up to 20 years," with no wild-specific figure given anywhere in the
source. The 10-20 year range is the captive range every deep dive and
both vs-pieces already use for pet chinchillas; the field was
mislabeling it as wild. Corrected to "Not documented (the widely
quoted 10-20 years is a captive range; wild longevity for this species
has not been studied)," the exact phrasing the leopard gecko
encyclopedia entry already uses for the same kind of gap.

Recommended links, three added: handling's fracture-risk sentence to
health issues; health issues' antibiotic mention (GI problems section)
to the shared antibiotic-associated-enterotoxemia-guide (no
same-species cap, it's a shared class guide); feeding's heat-stress
aside converted to a pointer at the housing guide instead of restating
a third temperature range. Not added: the reader's suggested
hub-checklist and encyclopedia links (out of scope, not deep dives).

Left as sourced, not a bug: the vs-hamster guide's FAQ already
disambiguates its own "14 to 19 inches including its tail" against the
encyclopedia's body-only "9-15 inches," so despite reading as a size
conflict out of context, the guide's own wording already explains the
difference.

Unsourced, needs a fact-check, left for Mike: the housing guide's own
"10 to 30 minutes" dust-bath duration, cited in part to Merck,
doesn't match the shared small-mammal grooming guide's own Merck
citation of "up to 15 minutes." Both cite the same source for
different numbers; resolving it means editing the shared guide, which
is content outside this species' own deep dives.

Not covered anywhere: where to find and vet a reputable breeder or
rescue; how to safely introduce two chinchillas to each other. Both
filed in docs/READER_LOG.md.

Full gate suite green (internal links, related articles, affiliate,
cost coverage, SEO tags, voice --strict, species numbers, eslint on
the touched data files).

## Ferret (2026-09-09, batch C, single pass, before the router hub)

One Sonnet agent, ten pages (hub, encyclopedia, cost, handling, health
issues, cage setup, feeding, enrichment, legal, adrenal disease), about
92k tokens. Single-pass review, the batch's default shape.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | A- | Only page with the full checklist and both cost tables in one place. |
| Encyclopedia | B | Taxonomy, wild diet, and the 1933 influenza history; nothing to act on. |
| Cost | A | Act on the budget numbers directly. |
| Handling | A | Act on the no-pop-the-nose rule. |
| Health issues | A | Act on the emergency list. |
| Cage setup | B | Good on temperature, but cage size conflicts with the hub. |
| Feeding | A | Act on the same-day vet rule for appetite loss. |
| Enrichment | A- | The priority order list is directly actionable. |
| Legal | A | Act on checking your state before buying. |
| Adrenal disease | B+ | The hair-loss pattern table is useful, but it contradicts the health guide on neuter age. |

Set grade: A-. "Deep, specific, appropriately urgent about
emergencies, let down by two unreconciled numeric conflicts."

Hub versus the set, both sides quoted (resolved by the router
rebuild): cage size, old hub "a multi-level cage (minimum 3x2x2 ft
with solid ramps and platforms)," 36 by 24 by 24 inches, against the
cage setup guide's real "For a pair, aim for at least 30 inches long
by 24 inches wide by 48 inches tall"; lifespan, old hub FAQ "6 to 10
years in captivity" against the cost guide's real, explicitly
researched "5 to 9 years on average in the US," which argues the
older 10 to 15 year figure reflects a healthier population than
today's pet ferrets. Both resolved by construction: the router hub
copies the cage setup and cost guides' real figures verbatim. The
cost guide's own setup table also still named a "3x2x2 ft multi-level
cage" line item for the same Critter Nation product the cage setup
guide describes as 30x24x48 for a pair; corrected the cell label to
match rather than leaving two dimensions for one product on the site.

A real cross-guide factual contradiction, not a hub issue: the health
issues guide cites a real, peer-reviewed 2000 study (Schoemaker et
al., PubMed 10649752) on Dutch ferrets neutered at 12 to 18 months
instead of as kits, which still developed adrenal disease at a gap to
diagnosis nearly identical to early-neutered US ferrets, concluding
"neutering itself, combined with prolonged indoor light exposure and
genetic factors, appears to drive the disease more than the exact age
at which a ferret is neutered." The adrenal disease guide's own
FunFact claimed the reverse: "Ferrets kept in countries where later
spay/neuter ages are more standard report meaningfully lower rates of
adrenal disease, which is one of the stronger pieces of evidence
supporting the early-neuter theory," with no source cited anywhere in
that article. Per the source-ranking rule, the page backed by a real
peer-reviewed citation wins: rewrote the adrenal disease guide's body
paragraph, FunFact, and FAQ answer to state the same Dutch-study
finding and conclusion the health issues guide already gives, rather
than the unsourced opposite claim.

Recommended links, three added: handling's out-of-cage-time bullet to
enrichment; tank setup's artificial-light sentence to adrenal disease;
feeding's insulinoma list item to health issues. Not added: health
issues' suggested link to feeding (already at its one-sibling cap,
spent on the adrenal disease guide); the hub's and encyclopedia's
suggested links (out of scope, not deep dives, and the encyclopedia is
structured data with no link slot).

Not covered anywhere: lymphoma, named as one of the three major
ferret diseases but never explained on any page or shared guide; the
actual litter-training method (a litter box is specified, training it
is not); a canine distemper vaccine dosing schedule for kits; what
descenting actually involves. All filed in docs/READER_LOG.md.

Full gate suite green (internal links, related articles, affiliate,
cost coverage, SEO tags, voice --strict, species numbers, eslint on
the touched data file). One legacy baseline failure (ferret-adrenal-
disease-guide, pre-existing, unrelated to this pass's edits) skipped
by the strict gate as before.

## Corn snake, boa constrictor, african grey, chinchilla, ferret (2026-09-09, batch C species check)

One Fable check over the whole batch, branch claude/batch-c-setup-kgvj92
from base d1ee1a5, fifteen commits. Scope clean: every file in the diff
is a guide data file, a species MDX, the review and log files, or the
one chinchilla encyclopedia field, and that field's research is real
(Merck's chinchilla page, opened again here: "Chinchillas live about
10-15 years, on average, but some pet chinchillas have lived up to 20
years," no wild figure anywhere on the page). All 63 sourced hub rows
carry numbers that appear in the deep dive they name; routes cover
every own deep dive and nothing shared; no buy-list prices; every
difficulty matches the encyclopedia. Voice counts unchanged on every
touched MDX except one, below. Gates green after the fixes.

Corn snake: clean apart from one word. The vs hognose FAQ's new
"with most sources citing a 40 to 60% baseline" claimed a majority the
tank setup guide never states ("Many other sources and vets cite a
lower 40 to 60% baseline"); "most" changed to "many". The 3.5-5 ft
and 40-60% corrections themselves stand: no deep dive states adult
length, the encyclopedia is the only page that does, and tank setup
owns humidity. Fixed on the branch.

Boa constrictor: the feeding FAQ's "a few days" to "48 hours" matches
the handling guide's figure, which owns the topic and cites ReptiFiles
and LafeberVet (ReptiFiles returned 403 to this check, so the figure
was not re-opened, but it was not changed either). Review file said
"six" links added where the diff shows five (cost, handling, health
issues, tank setup, enrichment); corrected. Fixed on the branch.

African grey: the feeding fix is right, verified by opening VCA
directly: "Pellets ... approximately 75-80%," "Vegetables, legumes,
and greens ... approximately 20-25%," "Fruits ... 10% or less," and
"Seeds should only be 20-40% of a balanced diet." The legal fix went
the wrong way. The USFWS release is dated October 3, 2016 but never
states when the vote happened; the Committee I secret ballot it
describes was held Sunday, October 2, 2016 (WCS release dated
October 2, "at CITES CoP17 Oct. 2, 2016"; ENB daily report for 2
October 2016). The batch session's review says the release confirms
October 3, which it does not. October 2 restored in the body and FAQ,
lastUpdated and lastReviewed returned to 2026-07-13. The encyclopedia
history section's "October 3" is now the wrong side of that conflict
and is outside this pass's edit rights; left for Mike. The hub's
"How intelligent" FAQ was the old hub's answer, not the handling
guide's frontmatter; replaced with the verbatim copy. Fixed on the
branch.

Chinchilla: the emergency card did not copy the health guide's
call-the-vet sentence ("drooling, changes in appetite or stool,
diarrhea, any respiratory signs, or any indication of heat stress"),
and its first bullet, "No droppings at all for 12 hours," is a
feeding-guide figure the health guide never states. Rebuilt as the
five items of that sentence. Fixed on the branch.

Ferret: PubMed 10649752 is real (Shoemaker, Schuurmans, Moorman,
Lumeij, JAVMA 2000;216(2):195-7, Utrecht): 50 affected Dutch ferrets,
median 3.5 years from neutering to diagnosis, "a significant linear
correlation between age at neutering and age at time of diagnosis,"
conclusion "age at neutering may be associated with age at development
of hyperadrenocorticism." The adrenal guide's rewrite mirrors the
health guide's sourced framing and keeps its "appears to" hedge, a
fair reading. Two fixes: the rewritten FAQ ran 84 words against the
checker's 70 (a new faq-long warning) and had dropped the original
"an association, not a guaranteed cause" hedge; trimmed to 69 words
with the hedge back. The emergency card's fourth bullet (hypoglycemic
crisis) and the vetLine's Karo syrup line come from the feeding guide,
not the health guide the card names; cut, vetLine now carries the
health guide's own "immediate veterinary care, not a wait-and-see
approach." Two of three hub FAQs ("Do ferrets smell?", "Is a ferret a
type of weasel?") were the old hub's, not deep-dive copies; replaced
with the tank setup cage FAQ and the health guide's emergency FAQ,
verbatim. Note for Mike: the adrenal guide carries no Sources block at
all, so its Dutch-study paragraph is sourced only by way of the health
guide. Fixed on the branch.

Pass grade: B-. The router hubs are mostly right and the VCA and
Merck checks were real, but the session asserted a source said
something it does not (the USFWS date), let two hubs keep old-hub
FAQs against an explicit rule, built two emergency cards from pages
other than the health guide they name, and miscounted its own links
in one review section.

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
- 2026-09-08, species check of the leopard gecko, goldfish, and axolotl
  sets (branch claude/review-species-sonnet-wewmck, the check prompt in
  READMEFIRST): the leopard gecko night floor is 65°F everywhere, the
  emergency plan guide's leopard gecko "act below" row and the hub's
  power outage row moved from 60°F to match the temperature guide; the
  hub vetLine now keeps the health guide's hedge that one clear PCR
  doesn't rule crypto out. Goldfish: the betta vs goldfish guide's
  65 to 72°F became 65 to 75°F to match tank setup, the bowl myth
  piece got a Sources block (PetMD, the Oxford distance study), and the
  hub's power outage row carries the source's two ranges (10 to 15
  minutes in a small tank, 20 to 30 in a larger one) instead of one.
  Axolotl: the legal guide's FAQ, Takeaway, and hub row now include
  Wyoming and Alabama, which its own table lists as banned; the intro
  keeps the "if narrow" hedge next to the dozen-jurisdiction count; the
  enrichment guide's seoDescription reads 3 to 4 hides like its FAQ.
  Left as Sonnet wrote them: the goldfish feeding FAQ and the axolotl
  enrichment FAQ.
- 2026-09-08, ball python species check (merged with the branch): the
  cost FAQ's enclosure prices back on the sizes the cost table prices,
  two link-only sentences cut with their links moved onto existing
  sentences, one overstated respiratory-infection claim cut, and the vs
  boa constrictor enclosure row and prose reconciled to the two tank
  setup guides (4x2x2 ft for the ball python, 6 to 8 ft long for the
  boa) with the affiliate links moved to those guides' products.
- 2026-09-08, betta fish (batch A, branch claude/readmefirst-batch-a-9opaeb):
  hub rebuilt to router shape, which resolved a temperature conflict
  (78-80°F flat versus tank setup's 76-82°F range) and a water-change
  conflict (25-30% versus tank setup's 20-30%) by construction. Tank
  setup's own 20-30% corrected to 25-30% to match water parameters (the
  page whose subject is the water itself); its Diet section, a full
  duplicate of the feeding guide, cut to a one-sentence pointer. The vs
  goldfish guide's three betta-temperature mentions corrected from
  75-80°F to 76-82°F. Two link-only sentences on the water parameters
  guide (one pointing at the care guide hub, one dumping three more
  links in the closing paragraph) cut per RULES, Linking. Four of nine
  recommended links added. Four content gaps (picking a healthy fish at
  the store, tank lighting, tankmate compatibility, the ich treatment
  temperature) filed in docs/READER_LOG.md. `water-parameters-guide` and
  `cycling-guide` added to SHORT_LABELS in src/pages/GuideDetail.jsx
  since the hub cites both as first-week row sources.
- 2026-09-08, crested gecko (batch A, branch claude/readmefirst-batch-a-9opaeb):
  hub rebuilt to router shape. `crested-gecko-humidity-guide` wired into
  RELATED_ARTICLES, the same wiring bug as leopard gecko's temperature
  guide: published, linked from four other articles, invisible in every
  Deep Dive sidebar. Tank setup's Humidity section, a duplicate of the
  humidity guide, cut to a pointer; a Diet Basics section added so the
  guide's own ReptiFiles fruit-avoidance citation, present in Sources
  but unused in the body, actually backs a claim. Cost guide's FAQ
  ($20-30) corrected to $31-52 to match its table. Second pass caught a
  same-page contradiction in tank setup's basking-temperature table cell
  (82-85°F and 72-75°F both given with no resolution); the fix moved to
  the conservative reading, then the species check below reversed that
  back to 82-85°F, the article's own cited ReptiFiles figure, hedge kept
  intact either way. `humidity-guide` added to SHORT_LABELS.
- 2026-09-08, guinea pig (batch A, branch claude/readmefirst-batch-a-9opaeb):
  hub rebuilt to router shape, resolving two hub-versus-deep-dive
  conflicts by construction: the old hub banned pine bedding outright
  where tank setup allows kiln-dried pine, and the old hub's cage-size
  wording implied 10.5 sq ft was a bonus on top of a shared 7.5 sq ft
  floor where tank setup states 10.5 as the pair minimum. Nine
  recommended links added across two passes (cost to health issues,
  handling to tank setup and to the vet guide, health issues to feeding,
  tank setup to feeding and to the heat stress guide, feeding to health
  issues, enrichment to health issues). A link-only opener and a
  closing-paragraph link dump on the scurvy guide cut per RULES,
  Linking. The feeding-versus-tank-setup alfalfa hedge left as is: both
  pages agree grass hay is the adult staple, and feeding already states
  the source disagreement transparently.
- 2026-09-08, hamster (batch A, branch claude/readmefirst-batch-a-9opaeb):
  hub rebuilt to router shape, resolving a stale 450 sq in cage floor
  (current welfare guidance is 700-775 for a Syrian, 600 for a dwarf)
  and an 11-12 in wheel figure that exceeded tank setup's own 8-11 in
  Syrian maximum, both repeated in the cost guide's own line items.
  `hamster-legal-guide` wired into RELATED_ARTICLES, the same wiring bug
  class again. Feeding's cold-torpor threshold corrected from 65°F to
  60°F to match tank setup, the subject-matter page. The hub's
  cheek-pouch funFact reconciled to feeding's body-weight figure. Second
  pass caught the vs guinea pig guide still carrying all three stale
  cage numbers and a ratio derived from them; corrected, then the
  re-derived ratio's own arithmetic was corrected again by the species
  check below (1.4-1.8x was itself wrong; the real range is 1.4-1.5x).
- 2026-09-08, Russian tortoise (batch A, branch
  claude/readmefirst-batch-a-9opaeb): hub rebuilt to router shape. This
  species has no feeding guide, so the hub's Diet row and a new Diet
  Basics section added to tank setup both cite the shared herbivorous
  reptile safe plants guide and tank setup's own content, resolving the
  question the tank setup guide's orphaned Tortoise Trust citation
  raised (cited in Sources, never used in the body). The cost guide's
  own body claimed "No state bans this species," contradicted by the
  legal guide's documented Colorado ban; corrected to defer to the legal
  guide. Two same-page contradictions in the cost guide's FAQ (setup
  total, annual cost, both disagreeing with the guide's own table)
  fixed. Tank setup's two duplicate "Enclosure Size" sections merged
  into one. Ten links added across two passes. Left as is per the batch
  rule: the encyclopedia's 40-80 year wild lifespan against the cost
  guide's 40-to-50-plus figure, an encyclopedia-versus-deep-dive gap
  outside a deep-dives-only pass; the hub already carries the deep
  dive's figure.
- 2026-09-08, batch A species check (branch
  claude/readmefirst-batch-a-9opaeb, one Fable agent covering all five
  species on the shared branch rather than five separate checks, since
  a fresh worktree per check wasn't available and running them
  concurrently on one working tree risked git races): found that none
  of the five hubs had copied three FAQs from their deep dives (the
  router-hub rule from the leopard gecko and axolotl templates), all
  had kept legacy hand-written FAQs instead; all five replaced with
  verbatim deep-dive copies. Also found and fixed: guinea pig's Diet row
  cited a figure the feeding guide never states (it's in tank setup's
  table); hamster's Company row and buy list carried unsourced or
  merged prose; the crested gecko basking-cell reversal from the second
  pass had it backwards, restored to the sourced 82-85°F with the
  original hedge; the hamster vs guinea pig ratio's arithmetic error and
  a leftover "same whether it's one or a pair" clause; the Russian
  tortoise legal row and cost guide both said "several" states where
  the legal guide gives a specific count of four; the betta fish first
  pass review had claimed four links that were never actually made, now
  made for real. Full gate suite green across all five species after.
- 2026-09-09, budgie (batch B, branch claude/batch-b-startup-ve7avl):
  hub rebuilt to router shape, resolving the old hub's cage minimum
  (18x18x24 "required" against tank setup's sourced 18x18x18), pellet
  percentage (60-70% against tank setup's sourced 60-80%), and vet cost
  (three different numbers for one idea) conflicts by construction. A
  real three-way lifespan conflict (old hub 7-12 years unsourced, the
  vs cockatiel guide's 5-10 years citing PetMD, the encyclopedia's
  unsourced "up to 21 years") researched for real: PetMD's own cited
  page actually states 7 to 15 years, and the real record holder is
  Charlie, a budgerigar who lived 29 years, 2 months (Guinness World
  Records), not 21. The vs cockatiel guide and the encyclopedia entry
  both corrected. Four of eight recommended links added (handling to
  the shared first aid guide, health issues to cere color, tank setup
  to the shared photoperiod guide, enrichment to the shared feather
  loss guide); cost guide's link skipped since it had already spent
  its one allowed same-species link elsewhere. `cere-color-guide`
  added to SHORT_LABELS, the same wiring class as leopard gecko's
  temperature guide. Left for whoever writes new content next: no
  guide anywhere covers cage cleaning, bathing or misting frequency,
  toxic foods, or vegetable portions. Second pass caught a self-
  contradiction the first pass introduced: the new hub's buy list and
  a route line still said 18x18x24 after the first-week row had
  already been fixed to 18x18x18, both now consistent; a real solo-
  bird conflict between the tank setup and enrichment guides' FAQs
  ("Not well" against "It can be") resolved in enrichment's favor of
  tank setup's dedicated section, since neither page cites a source;
  five more links added. Also fixed, at the reader's own request:
  scripts/reader-extract.mjs's table parser choked on a bare
  `<AffiliateLink>` used directly as a cell value instead of wrapped in
  a `<>fragment</>`, which crashed the budgie cost guide's entire setup
  table into "[table could not be parsed]" in both reader passes; now
  resolves either form, verified against six other species' tables
  with no regressions. Open: budgie-tank-setup-guide.mdx carries no
  Sources block at all, the only budgie deep dive without one, flagged
  for a real research pass rather than fixed here.
- 2026-09-09, budgie species check (branch claude/batch-b-startup-ve7avl,
  commit be2adfe, one Fable agent): the hub's Zoonotic risk row still
  carried the old legacy hub's psittacosis wording instead of the
  health guide's own, corrected; a comma-spliced tail on the
  enrichment guide's reworded solo-bird FAQ trimmed; independently
  re-verified the lifespan research (opened PetMD and the Guinness
  World Records page directly) and the extractor fix (ran both commits
  against 12 species and diffed, confirming six previously-broken
  tables now render and nothing else changed). Full gate suite green.
  Note for whoever merges: this branch forked one commit before main's
  stated batch-B base and does not carry that commit's sharp version
  bump in package.json.
- 2026-09-09, cockatiel (batch B, branch claude/batch-b-startup-ve7avl):
  hub rebuilt to router shape, resolving the old hub's cage minimum
  (24x24x30 "required" against tank setup's sourced 20x20x30), cage
  shape (the old hub's unsourced "active climbers, benefit from
  vertical space" against tank setup's PetMD-cited "horizontal
  flyers"), bar spacing, and vet-cost conflicts by construction. A real
  diet-percentage conflict (old hub 60-70%, tank setup 60-80%, feeding
  75-80%) researched for real: tank setup's own cited VCA page actually
  says 75-80%, matching feeding, not the 60-80% tank setup was quoting
  it as; tank setup's near-duplicate diet paragraph cut to a pointer at
  feeding. A real lifespan conflict (cost guide's own "15 to 20 years"
  matched neither of its two most relevant cited sources) researched
  for real: TheVetDesk and Hepper, opened directly, both say "10 to 15
  years"; corrected throughout the cost guide. Left open, flagged
  rather than force-reconciled: two vs-pieces (budgie-vs-cockatiel and
  cockatiel-vs-cockatoo) independently cite PetMD for "15 to 25 years,"
  a real quote from a real page, genuinely disagreeing with the
  now-corrected cost guide at a different source tier; the
  encyclopedia's "up to 25 years, oldest on record 36" also matches
  that same PetMD page exactly and was left untouched. Second pass
  caught the diet percentages summing past 100% (VCA's own "no more
  than 20-25%" qualifier had been dropped everywhere on the site,
  restored), a real same-species crest-reading contradiction between
  the handling and vs-cockatoo guides (traced to neither source
  actually backing a fixed position-to-mood dictionary, and the site's
  own shared bird-body-language-guide.mdx saying exactly that; trimmed
  the unsourced side), and a soft rope-fiber-ingestion-versus-toy-
  material tension between health and enrichment. Nine links added
  across both passes.
- 2026-09-09, cockatiel species check (branch claude/batch-b-startup-ve7avl,
  commit 3c0e03c, one Fable agent): reverted an unsourced clause added
  to the hub's Lifespan row, restored an affiliate link the tank setup
  diet-pointer rewrite had dropped, reworded five links that read as
  the site talking about itself, added one link the review had claimed
  but never made, and corrected the review file's overstated claim
  about what Lafeber's sources actually support on crest position.
  Full gate suite green.
- 2026-09-09, cockatoo (batch B, single pass, branch
  claude/batch-b-startup-ve7avl): hub rebuilt to router shape,
  resolving diet-ratio, cage-cost, food-cost, and lifespan conflicts by
  construction, and dropping the old hub's "crave cuddling" framing in
  favor of handling's cited consultant's over-bonding warning. Cost
  guide's lifespan researched for real (its own cited PetMD page
  doesn't support "40 to 70-plus, Umbrella 50 to 70") and corrected to
  match the encyclopedia. Feeding's diet percentages had the same
  dropped-"no more than"-qualifier bug as cockatiel's, fixed the same
  way. The encyclopedia's own conservation field contradicted its own
  History paragraph (Vulnerable vs "reclassified Endangered in 2018");
  checked Wikipedia's current IUCN listing and corrected the field; the
  legal guide's NJ section had the Moluccan's status backwards for the
  same reason, corrected. The enrichment guide's own body explicitly
  declined to cite two figures as unverifiable, then a heading and two
  FAQ answers stated both anyway; reworded to match the body's own
  hedge. `cockatoo-legal-guide` was missing from relatedArticles.js
  entirely, the same wiring-bug class as leopard gecko's temperature
  guide, invisible in every Deep Dive sidebar; added.
- 2026-09-09, lovebird (batch B, single pass, branch
  claude/batch-b-startup-ve7avl): hub rebuilt to router shape,
  resolving diet, cage-price, and pairs-framing conflicts by
  construction (the router hub keeps handling's "bonds to each other
  instead, largely ignores its keeper" framing, not the old hub's
  "happier and healthier" claim). Two real
  arithmetic bugs fixed: the cost guide's own monthly headline didn't
  match its own annual table (corrected to the table's real $260-430 a
  year), and a four-way lifespan conflict (hub, encyclopedia, cost
  guide, and lovebird-vs-budgie-guide.mdx all disagreed) resolved by
  opening the cost guide's own cited VCA page directly ("10-15 years,
  maximum around 20") and correcting the encyclopedia and the vs guide
  to match; the vs guide's stale pre-fix budgie figure (left over from
  budgie's batch, since only budgie-vs-cockatiel-guide.mdx was touched
  then) brought up to budgie's already-corrected 7 to 15 years too.
  Recommended links deferred this pass to keep it lighter.
- 2026-09-09, tarantula (batch B, single pass, branch
  claude/batch-b-startup-ve7avl): hub rebuilt to router shape. The
  critical fix: the old hub's own FAQ told readers docile species
  "tolerate calm, gentle handling," directly contradicting the
  handling and enrichment guides' "don't handle this species." The
  router hub carries the real answer instead. Enclosure size,
  substrate depth, temperature, feeding intervals, mites, cost, and
  lifespan conflicts all resolved by construction. Tank setup's Diet
  section, a near-duplicate of the feeding guide, cut to a pointer
  with its affiliate link moved in. `tarantula-legal-guide` was
  missing from relatedArticles.js entirely, the same wiring-bug class
  as leopard gecko's temperature guide; added. Three links added,
  batch B's fifth and final species.
- 2026-09-09, cockatoo/lovebird/tarantula species check (branch
  claude/batch-b-startup-ve7avl, commit 7d40c2b, one Fable agent
  covering all three): a stray "only" in cockatoo's vetLine removed;
  lovebird's hub attributed a pair-injury claim to the wrong article,
  corrected to the source that actually makes it; both lovebird date
  bumps corrected from the container's UTC clock to Eastern (09-09 to
  09-08); tarantula's Lifespan row and two self-referential link
  sentences reworded to match their sources. Batch B (budgie,
  cockatiel, cockatoo, lovebird, tarantula) is done: five router hubs
  rebuilt, every hub-versus-deep-dive conflict resolved, every
  species checked. Nothing merged to main.
- 2026-09-08, corn snake (batch C, single pass, branch
  claude/batch-c-setup-kgvj92): hub rebuilt to router shape, resolving
  an adult-size conflict (old hub "4 to 5 feet" against the
  encyclopedia's "3.5-5 feet") and a humidity-certainty conflict (old
  hub stated 40-60% as settled fact where tank setup's own body calls
  it a genuine source disagreement) by construction. Tank setup's own
  stray feeding-frequency aside ("every 10 to 21 days" for adults)
  disagreed with the feeding guide's own five-bracket table ("every 14
  to 21 days"); cut to a one-sentence pointer at the feeding guide, the
  same fix pattern as ball python and axolotl. The vs hognose guide's
  comparison table carried its own humidity (40-50%) and adult-length
  (3-5 ft) figures matching neither tank setup nor the encyclopedia;
  corrected to 40-60% and 3.5-5 ft respectively across the table, one
  FAQ, and the body, since neither original figure traced to a source
  on either side. Four of eight recommended links added (cost and
  handling to tank setup, feeding to health issues, enrichment to tank
  setup). Left for Mike: how to verify an enclosure is actually
  escape-proof and how to pick a healthy corn snake at purchase, both
  filed in docs/READER_LOG.md; Pennsylvania's legal status, already
  left unresolved by the legal guide itself.
- 2026-09-09, boa constrictor (batch C, single pass, branch
  claude/batch-c-setup-kgvj92): hub rebuilt to router shape, resolving
  a humidity self-contradiction (old hub's body said "50 to 70%," its
  own FAQ said "60 to 80%," neither matched tank setup's sourced
  "60 to 70%"), a temperature drift (old hub's warm-side/cool-side air
  temperatures were a degree or more off tank setup's), a cost
  mismatch (old hub's own cost table summed to $300-600 for the
  enclosure alone against the cost guide's stated $400-1,200 total),
  and a feeding-schedule mismatch (old hub's three-tier schedule
  against the feeding guide's real five-bracket, age-and-weight one),
  all by construction. The old hub's IBD quarantine figure ("60 to 90
  days") undershot the shared reptile-quarantine-guide's real
  Merck-sourced 3 to 6 months, the guide that specifically calls out
  boas for extended silent IBD carriage; the router hub's Day one row
  now cites that guide directly. The feeding guide's own FAQ softened
  the 48-hour post-feeding handling wait to a vague "a few days,"
  corrected to match the specific figure used everywhere else. Six
  links added (cost to health issues, handling to feeding, health
  issues and tank setup to the shared thermostat guide, enrichment to
  tank setup). Found but not fixed: the handling guide links to "10
  Surprising Boa Constrictor Facts," a real published article not
  wired into the species' Deep Dive list because its file's name on
  disk doesn't match its own frontmatter slug, the same bug class
  affecting six other fun-facts articles site-wide (including two
  already-reconciled species, axolotl and rabbit); a real fix means
  renaming files or changing the checker, left for Mike as a separate
  cleanup rather than forced into this species' pass.
- 2026-09-09, african grey (batch C, single pass, branch
  claude/batch-c-setup-kgvj92): hub rebuilt to router shape, resolving
  a pellet-percentage conflict (old hub 60-70%, feeding guide's
  VCA-cited 75-80%), a cage-upgrade-size conflict (old hub "48x36x60
  or larger," tank setup's real veterinary "40 by 30 by 60"), and a
  bar-spacing conflict (old hub "3/4 to 1 inch," tank setup's real
  "no more than 1 inch," which drops the floor entirely), all by
  construction. Two real fact errors caught and fixed, both verified
  by opening the cited source directly: the feeding guide's own body
  had misattributed VCA's seed-inclusion figure ("20 to 40% if
  included at all") to fruits and vegetables, corrected to VCA's real
  produce split (vegetables 20-25%, fruit 10% or less); the legal
  guide stated the CITES CoP17 vote date as October 2, 2016 against
  its own cited USFWS press release and the encyclopedia, both of
  which say October 3, corrected to match (reversed by the species
  check: the release is dated October 3 but the vote was October 2;
  see that section). Six links added (cost to
  health issues, handling to cage setup, cage setup to enrichment,
  feeding to the shared pellet-conversion guide, health issues to
  enrichment, enrichment to health issues). Left as sourced: Alex's
  documented abilities read two different but non-contradicting ways
  across handling ("labeled 50 objects... concept of none") and the
  encyclopedia/vs-cockatoo guide ("vocabulary of over 150 words...
  concept of zero"), the peer-reviewed specifics versus a plainer
  vocabulary summary of the same real research, not a numeric
  disagreement.
- 2026-09-09, chinchilla (batch C, single pass, branch
  claude/batch-c-setup-kgvj92): hub rebuilt to router shape, resolving
  a wheel-size conflict (old hub "12-14 in," housing guide's real "15
  inches or larger," matching the cost guide's own line item), a
  cage-height conflict (old hub "24x24x48," housing guide's real "24
  by 24 by 36"), and a three-way temperature conflict (old hub
  "60-72°F," housing guide's real "50-68°F" plus the 150 rule,
  feeding guide's own aside "60-70°F, above 75°F risky," now cut to a
  pointer at the housing guide), all by construction. A same-site fur-
  density conflict fixed independent of any deep dive: the old hub's
  funFact and FAQ said "up to 60 hairs per follicle, humans have only
  1," while the encyclopedia and the vs-guinea-pig guide's own FunFact
  both independently say "up to 80 hairs per follicle, versus 2 to 3
  for humans"; corrected the hub's funFact to match the two agreeing
  sources. A real encyclopedia field error, researched and fixed: the
  `wildLifespan` field held "10-20 years," which is actually the
  captive range (Merck Veterinary Manual gives "up to 20 years" for
  captivity and states no wild figure at all); corrected to "not
  documented in the wild," the same phrasing already used for crested
  gecko and leopard gecko's identical gap. Three links added (handling
  to health issues, health issues to the shared enterotoxemia guide,
  and the feeding guide's temperature aside converted to a pointer at
  the housing guide). Left as is: the vs-hamster guide's "14 to 19
  inches including its tail" already disambiguates itself against the
  encyclopedia's body-only "9-15 inches," not a real conflict despite
  reading as one out of context; the housing guide's own "10 to 30
  minutes" dust-bath duration against the shared grooming guide's
  Merck citation of "up to 15 minutes" is a genuine minor mismatch
  between one species deep dive and a shared class guide, left for
  Mike since fixing it means editing content outside this species.
- 2026-09-09, ferret (batch C, single pass, branch
  claude/batch-c-setup-kgvj92): hub rebuilt to router shape, resolving
  a cage-size conflict (old hub "3x2x2 ft," 36x24x24 inches, cage
  setup guide's real "30 long by 24 wide by 48 tall" for a pair) and a
  lifespan conflict (old hub "6 to 10 years," cost guide's real,
  researched "5 to 9 years on average for US pet ferrets today") by
  construction. The cost guide's own setup table still named the same
  Critter Nation product at the old "3x2x2 ft" dimension; corrected
  the cell label to 30x24x48 to match the cage setup guide. A genuine
  cross-guide factual contradiction found and fixed, not a hub issue:
  the health issues guide cites a real 2000 peer-reviewed study
  (Schoemaker et al., PubMed 10649752) showing ferrets neutered at 12
  to 18 months still developed adrenal disease at the same rate as
  ferrets neutered as kits, concluding neutering itself, light
  exposure, and genetics drive the disease more than the specific
  neuter age; the adrenal disease guide's own unsourced FunFact
  claimed the opposite, that later-neutering countries show
  meaningfully lower rates, calling it strong evidence for the
  early-neuter theory. Rewrote the adrenal disease guide's body,
  FunFact, and FAQ to match the peer-reviewed position. Three links
  added (handling to enrichment, tank setup to adrenal disease,
  feeding to health issues). One legacy voice-baseline failure on the
  adrenal disease guide, pre-existing and unrelated to this pass,
  confirmed still tolerated by the strict gate.
- 2026-09-09, batch C species check (corn snake, boa constrictor,
  african grey, chinchilla, ferret, branch claude/batch-c-setup-kgvj92):
  scope, hub numbers, routes, buy lists, and difficulties all clean.
  Fixed: corn snake vs hognose "most sources" to "many"; boa review
  link count six to five; african grey CITES vote date restored to
  October 2, 2016 (the USFWS release is dated October 3 but the
  Committee I ballot was October 2 per WCS and ENB; encyclopedia's
  October 3 left for Mike) with the legal guide's date bump reverted,
  and the hub's old-hub intelligence FAQ replaced with the handling
  guide's verbatim; chinchilla emergency card rebuilt from the health
  guide's own call-the-vet sentence; ferret adrenal FAQ trimmed to 69
  words with its "association, not a guaranteed cause" hedge restored,
  emergency card's feeding-guide bullet and Karo line cut, and two
  old-hub FAQs replaced with deep-dive copies. VCA feeding split and
  PubMed 10649752 both verified real. Pass grade B-. Nothing merged.

## Green Iguana (2026-09-09, first pass)

Extractor set of seven pages (hub, encyclopedia, cost, handling, health issues,
tank setup, enrichment). Batch D. The hub was still the legacy care sheet when
the set was extracted, so the hub conflicts below are against the old shape and
were resolved by the router rewrite in the same pass.

Process note: this session had no Agent tool, so the set test was run
first-party by the batch worker against `.reader/green-iguana/` using the
READMEFIRST set test prompt, rather than by a separate Opus reader agent. Raw
output is in docs/READER_LOG.md under the same heading. Treat the grades as a
first-party read.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub (legacy shape) | C+ | A third care sheet, and where it differs from the deep dives it is wrong. |
| Encyclopedia | B- | The CITES and import history is the best thing on it; the size and lifespan lines do not match the deep dives. |
| Cost | A | The only page anywhere that admits you cannot buy an enclosure meeting the published minimum, then prices the three ways out. |
| Handling | A- | Short, and every line changes what you do: approach from the side, never the tail, expect the male to change in season. |
| Health issues | B+ | Organized around husbandry and unambiguous about the vet, thin on what any of it looks like day to day. |
| Tank setup | A- | The three numbers that matter, on a very short page for the most consequential subject in the set. |
| Enrichment | A | The only page built on named field research, and honest that the sociality finding does not license cohousing adults. |

Set grade: B. "The deep dives are strong and the cost guide is genuinely
excellent, but the hub contradicts them on the two numbers a new keeper is most
likely to get wrong, and the whole diet subject has no article of its own."

Hub versus the set, both sides quoted (all against the legacy hub, all fixed by
the router rewrite):

- Basking. Hub: "Basking surface temperature should be around 120 degrees F."
  Tank setup guide: "Basking area 100 to 120°F, cool end around 80°F,
  nighttime not dropping below the low 70s°F." The hub printed the top of the
  range as the target. Fixed: the router hub's Temperature row is the tank
  setup sentence verbatim.
- UVB replacement. Hub annual cost row: "UVB bulb replacement (every 6-12
  months): $111 to $141." Tank setup guide: "replaced every 12 months
  regardless of whether the bulb still produces visible light." The hub's own
  housing prose said "Replace it every twelve months," so it disagreed with
  itself as well. Fixed: costs dropped, UVB row copied from the tank setup
  guide.
- Adult size. Hub FAQ: "Four to six feet including the tail, and ten to twenty
  pounds." Hub housing prose: "becomes a five to six foot lizard." Handling
  guide: "An adult male green iguana reaches 6 to 7 feet including tail and up
  to 20 pounds." Fixed: the hub's Adult size row is the handling guide's
  sentence verbatim, and the old FAQs are gone.
- Night humidity. Hub: "Humidity of 60 to 80 percent through the day, rising
  toward 100 at night." Tank setup guide: "60 to 80%." No deep dive supports
  the night figure. Fixed: prose dropped, Humidity row copied from the tank
  setup guide.
- Enclosure. Hub setup table: "Custom PVC/wood enclosure, 8x4x4ft: $650 to
  $730," two lines under the hub's own checklist item "Adult enclosure plan,
  10x5x6 ft minimum, before purchase," and against the cost guide's "nothing
  ready made reaches the ReptiFiles number, which is walk-in territory."
  Fixed: costs dropped; the buy list carries no prices and names the juvenile
  box plus "A plan and a budget for the walk-in adult enclosure."

After the rewrite, `check-species-numbers.mjs green-iguana` shows every line
marked `hub` appearing verbatim in the deep dive its row names. The remaining
CONFLICT groups are the checker grouping a hub row with the identical source
sentence, plus cost-guide-internal groupings, plus the encyclopedia lines
handled below.

Deep dives against each other:

- Adult length. Enrichment guide: "A green iguana reaches five to six feet, and
  the animal is sold at six inches to people who buy a tank," repeated in its
  FAQ. Handling guide: "An adult male green iguana reaches 6 to 7 feet
  including tail and up to 20 pounds," repeated in its FAQ. Cost guide, citing
  a third source: "LafeberVet puts an adult at 6 feet or more including the
  tail." Decided for the handling guide. Its Sources carry both figures:
  LafeberVet's basic information sheet states "Including the tail, adults can
  reach 1.8 m (6 feet) or more," and Chicago Exotics states "Recorded weights
  and lengths of adult male iguanas have been as much as 20 pounds and 7 feet
  respectively." Both opened with WebFetch. The enrichment guide's four sources
  are the Burghardt sociality papers and the welfare assessment, none of which
  state a length. Fixed in the enrichment guide, body and FAQ.
- Not conflicts, left alone: the cost guide's section heading "Lifespan: 15 to
  25 years, if the iguana survives its first year" over a body that says "15 to
  20 years, sometimes 25" (the heading is the envelope of the body figure), and
  the cost guide's $60 to $150 monthly total over its own itemized $30 to $50
  produce plus $20 to $50 electricity (supplements and substrate are named in
  the same sentence).

Gaps, checked against the sidebar's Health and More list before being called
real:

- The diet. This species has no feeding guide. The 60/30/10 greens, vegetables
  and fruit ratio, the greens to build on, the avoid list (spinach, kale in
  quantity, beet greens, chard, iceberg) and the calcium and multivitamin
  schedule existed only in the legacy hub's diet prose, which the router
  rewrite removes. The health guide carries the no-protein rule and the
  enrichment guide carries the foraging method, and both are now hub rows, but
  no page states the ratio or the schedule. The shared safe weeds and wild
  plants guide covers what is safe to forage, not what a daily salad is. Real
  gap, and the largest thing open on this species.
- Cold floor in an outage. The reptile emergency plan guide's species table
  does not list the green iguana. Its stated fallback is to use the species'
  tank setup guide nighttime low, which here is "the low 70s°F." Covered by
  inference only; the hub's Power outage row now says exactly that, quoting the
  emergency plan guide's own rule.
- Time alone and sitter instructions for an animal this size. The emergency
  plan guide answers generically for lizards, never for a six foot herbivore
  needing daily fresh produce. Open.

Stranded questions (a page raises it, another page in the set answers it,
neither says so):

- Health guide: kidney disease follows "chronic dehydration from low humidity,"
  and the page never says what humidity is. The tank setup guide's "60 to 80%
  ... Chronically low humidity is directly linked to dehydration and kidney
  disease" is the same sentence from the other end. Not linked: the health
  guide's one allowed sibling link is better spent, and the hub's Humidity and
  Diet rows now sit next to each other. Listed here rather than fixed.
- Health guide: burns come from "heat sources positioned where the iguana can
  contact them directly," which is the entire subject of the shared reptile
  heating and thermostats guide. Fixed with a link.
- Cost guide: "produce alone commonly runs $30 to $50 a month," with a shared
  safe weeds and wild plants guide covering iguanas by name. Fixed with a link.
- Handling guide: "Housing two males together, expect real fighting," full
  stop, while the enrichment guide has the field research on why. Fixed with
  the article's one allowed sibling link.
- Enrichment guide: "Do not skip parasite screening," with the shared
  quarantine guide holding the fecal screen and the intake workup. Fixed with a
  link.

Recommended links, one per page:

| Page | Sentence | Link to | Done |
|---|---|---|---|
| Hub | "Kidney disease and gout follow from animal protein and chronic dehydration." | Health issues guide | Not applicable, the prose is gone and the router rows link their own sources |
| Encyclopedia | "the classic mistakes are protein and insufficient calcium" | Health issues guide | Skipped, encyclopedia is out of scope for links |
| Cost | "produce alone commonly runs $30 to $50 a month, with electricity adding another $20 to $50." | Safe weeds and wild plants guide | Added |
| Handling | "Housing two males together, expect real fighting." | Enrichment guide | Added, the one sibling link this article is allowed |
| Health issues | "burns come from heat sources positioned where the iguana can contact them directly" | Reptile heating and thermostats guide | Added |
| Tank setup | "Glass blocks UVB entirely, so a sunny window is never an adequate substitute." | UVB lighting guide | Added |
| Enrichment | "Do not skip parasite screening, given what the captive welfare assessment found." | Reptile quarantine guide | Added |

Trust: the doubt was all on the hub, a page printing 120°F as the basking
target while its own setup guide gives a 100 to 120°F band, and pricing an
8x4x4 box two lines under a checklist demanding 10x5x6. Nothing in the deep
dives read as invented. The sentence that most convinced the reader a keeper
wrote this, from the cost guide: "The two ready made boxes on that table reach
6 or 8 feet long but stop at 2 feet deep and 4 feet tall, so they are a
compromise on even the LafeberVet floor. That is what 'no commercial tank is
large enough' means above: you can buy a box, but not one that meets the
minimum."

Reader's two changes: rebuild the hub so every number comes from the deep dive
that owns it (done), and write a green iguana feeding guide so the diet ratio,
the greens list, the avoid list and the calcium schedule live on a page the
Deep Dive list shows (open, out of scope for this pass).

Encyclopedia: two fields conflicted with a deep dive's sourced figure, both
researched with real opened sources before changing.

- `adultSize` read "4-6 feet (1.2-1.8 m) including tail; 10-20 lbs" against the
  handling guide's sourced "6 to 7 feet including tail and up to 20 pounds."
  LafeberVet's basic information sheet ("Including the tail, adults can reach
  1.8 m (6 feet) or more") and Chicago Exotics Animal Hospital ("Recorded
  weights and lengths of adult male iguanas have been as much as 20 pounds and
  7 feet respectively") both open on the figure. Changed to "4-6 feet (1.2-1.8
  m) including tail, adult males recorded to 7 feet; 10-20 lbs", which keeps
  the existing typical range and adds the sourced male maximum instead of
  replacing a figure wholesale.
- `wildLifespan` read "15-20 years", which is the same number the cost guide
  gives for a well-kept captive animal ("With excellent care, green iguanas
  live 15 to 20 years, sometimes 25") and which LafeberVet also gives as a
  captive figure ("Green iguanas can live up to 15-20 years when cared for
  properly"). A captive number in a wild field. Animal Diversity Web (Michigan
  Museum of Zoology) states "wild iguanas are thought to live only about 8
  years" and that iguanas "can live for more than 20 years in captivity."
  Changed to "About 8 years in the wild (Animal Diversity Web); the widely
  quoted 15-20 years is a captive figure", the same shape the crested gecko and
  other entries already use.
- Left alone deliberately: the entry's `overview` still says "An adult is five
  to six feet long ... and lives twenty years." It carries the same two
  looseness's as the fields above, but the batch prompt scopes encyclopedia
  edits to the field that conflicts, and the overview is prose that would need
  rewriting rather than a field correction. Flagged for the species check.

Fixed the same day: the hub rebuilt to the router shape (21 first-week rows, a
12 bullet emergency card off the health guide's four call-the-vet passages, 5
routes, an 11 item buy list with no prices, 3 FAQs copied verbatim from
deep-dive frontmatter, difficulty Advanced matching the encyclopedia); the
enrichment guide's "five to six feet" corrected to "six feet or more" in body
and FAQ; five links added as listed above; two encyclopedia fields corrected
against opened sources.

Not fixed, and why: no lastUpdated bump on the enrichment guide even though a
number changed, because that article's `date` and `lastUpdated` are both
2026-10-23 and bumping to 2026-09-09 would date the revision before the
article's own publication. The other four green iguana articles took link-only
edits, which by the 2026-09-08 date rule do not bump.

Open: the missing feeding guide; sitter and time-alone guidance for an animal
this size; the encyclopedia overview's "five to six feet" and "lives twenty
years"; and the hub's `funFact` still repeating the handling guide's FunFact
box nearly word for word, which is a hub field rather than a deep dive edit.

## Conure (2026-09-09, first pass)

Extractor set of seven pages (hub, encyclopedia, cost, handling, health
issues, tank setup, enrichment). The review reads the old legacy hub
(housing, diet, enrichment and health prose plus a cost table); the
router hub was built from its findings the same day. Filed against a
reader pass run inline rather than by a separate agent: no Agent tool
was exposed to this worker session, so the same session that did the
fixes also did the read. Treat its independence as weaker than the
leopard gecko or axolotl passes. Raw output in docs/READER_LOG.md.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B- | The only page with a shopping checklist, and a third care sheet that disagrees with the articles it points at. |
| Encyclopedia | B | Under a minute, and the mutation history is the only part not available elsewhere. |
| Cost | B | Honest that finding an avian vet is the hard part, but its own FAQ quotes different prices from its own table. |
| Handling | A- | Reading a beak rather than a bite is the thing a new owner gets wrong, and the sexing section is blunt about what does not work. |
| Health issues | A- | Real thresholds, a clean emergency list, and a closing pattern that ties every disease back to a cause. |
| Tank setup | A | The one page a reader would actually shop from. |
| Enrichment | A | Says in its first research line that no conure study exists instead of dressing up borrowed evidence. |

Set grade: B. "The deep dives are consistent, honest about what is not
known, and genuinely useful. The hub is a fourth opinion that undercuts
them, and the cost guide disagrees with itself on the one table a buyer
prints."

Hub versus the set, both sides quoted (all against the old legacy hub,
resolved by the router rebuild):

- Bar spacing. Old hub: "Bar spacing of 1/2 to 3/4 inch prevents head
  entrapment." Tank setup: "Bar spacing should be 1/2 to 5/8 inch
  maximum to prevent head entrapment or escape." Both are defensible
  and they are not the same ceiling. PetMD, the only source either page
  cites, says "The space between the cage's bars should be 3/4-in apart
  or smaller," which is a maximum; the 1/2 to 5/8 inch figure is the
  target several husbandry references give inside that maximum.
  Decided: the tank setup guide keeps 1/2 to 5/8 inch and the router
  hub copies its sentence. The deep dive is not loosened toward the
  cited ceiling, because a target inside a maximum is not a
  contradiction of it and the looser number is the one that gets a bird's head
  stuck.
- Cage size. Old hub: "A minimum cage of 24x24x30 inches is required
  for a green cheek conure, though 24x24x36 inches or larger is
  strongly preferred." Tank setup: "24x24x30 inches is the minimum most
  sources list for a single adult, but treat that as a floor, not a
  target. Bigger is always better, aim for 30 to 36 inches or more in
  multiple dimensions." The hub's preferred size grew one dimension,
  the deep dive's grows several. The router hub now quotes the tank
  setup guide's own sentence.
- Lifespan. Old hub, twice: "Green cheek conures can live 15 to 25
  years" and "15 to 25 years with excellent care." Cost guide: "20 to
  25 years or more is the commonly cited range, with some individuals
  reaching 30 years under excellent care." The hub's 15 was unsourced
  and lower than the article it linked to. The router hub's Lifespan
  row now quotes the cost guide verbatim.
- Setup cost. The old hub's setup table carried four rows; the cost
  guide's carries seven, and the two the hub dropped (full-spectrum
  avian UV lighting and fixture, $40 to $100; dishes, water bottle,
  cage cover, initial food, and cuttlebone, $30 to $70) are real
  purchases. The router hub has no cost table at all; its Budget row
  quotes the cost guide's own headline figures and its buy list carries
  the seven items with no prices.
- Out-of-cage time. Old hub: "Minimum 2 to 3 hours of supervised
  out-of-cage time daily in a bird-safe space is required." No deep
  dive states a number; the tank setup guide says "several hours of
  supervised free time daily." The 2 to 3 hours figure existed only on
  the hub, so it is gone: the router hub's row quotes the tank setup
  guide instead. Left for Mike: if 2 to 3 hours is a figure worth
  keeping, it needs a source and a home in the tank setup or handling
  guide, not the hub.

Deep dives against each other: they agree with each other far better
than the old hub agreed with any of them. 24x24x30, 65 to 80°F, 10 to
12 hours of darkness, the snuggle pouch, and the Teflon warning repeat
across pages and never disagree. Read twice: the pineapple mutation
explanation is a FunFact on both the cost guide and the tank setup
guide in nearly the same words, and the "a conure's beak is a tool, not
a weapon" line is a FunFact on both the handling guide and the health
guide. Not fixed, both are FunFact boxes and the batch prompt does not
touch them; this is the same defect class as the 22 boxes in
READMEFIRST's FunFact prompt, and these four belong on that list.

One real conflict, entirely inside the cost guide:

- Its setup table: cage "$100 - $180", perches "$20 - $40", foraging
  toys "$30 - $60". Its own FAQ: "a cage (minimum 24x24x30 inches, $150
  to $450), perches ($30 to $80), toys and foraging items ($40 to
  $120)". The UV ($40 to $100) and dishes ($30 to $70) figures in the
  same FAQ do match the table, so three cells were mis-copied rather
  than independently estimated. Neither cited source (PetMD, Lafeber)
  states any price at all, so the tiebreak is the same-page rule: the
  table is the itemization the hub copied, the affiliate products hang
  off its rows, and the FAQ changed to match it.

Unsourced, needs a fact-check:

- The cost guide's annual table prices "Annual avian vet check | $70 -
  $120" while its own vet section says "A routine wellness exam
  commonly runs $80 to $160." Both unsourced, both on the same page,
  and no source in the block carries prices. Not touched, because
  moving either one changes a total the page also states.
- The same table prices "Toys (rotating) | $50 - $90" a year while the
  paragraph under it says toy replacement runs "$10 to $30 a month",
  which is $120 to $360 a year. Same reasoning, not touched.
- "with some individuals reaching 30 years under excellent care" in the
  cost guide. Neither cited source states 30: PetMD says "20+ years
  with proper care", Lafeber says "up to 25 years or more with proper
  care" and lists "Up to 20 years" in its quick facts. The number is
  hedged and pre-existing, so it stays, but it needs a source or a cut.
- The cost guide carries two sources for a page built on dollar figures
  and no "Prices last checked <Month Year>" line under its last cost
  table, which RULES, Sources requires of a cost guide quoting retail
  prices. No other reconciled cost guide in the birds set carries one
  either, so this is a series-wide gap rather than a conure one.

Gaps, checked against the sidebar's Health and More list before being
called real:

- Real. What a green cheek conure eats day to day, in amounts. This
  species has no feeding guide. Daily diet lived only on the legacy hub
  (pellets at "60 to 70% of a green cheek conure's nutritional intake",
  the vegetable list, the avocado and chocolate list), and the router
  rebuild removes it by construction. The health guide gives a
  direction ("feeding a quality pelleted diet alongside fresh
  vegetables instead of a seed-only bowl") and no amounts. The shared
  pellet conversion guide covers switching a bird onto pellets, not
  portions. Partly mitigated: the router hub carries a Diet row quoting
  the health guide and a Pellet conversion row quoting the shared
  guide's VCA conure-specific schedules, so the seed-to-pellet
  instructions a new owner needs are at least reachable. The real fix
  is a conure feeding guide, out of scope here.
- Not real, all covered by the shared guides in the sidebar: quarantine
  length, what makes a bird hormonal, wing clipping, nail and beak
  care, sexing, body language, first aid, chronic egg laying, household
  hazards, power outages.

Stranded questions, answer on another page in the set with neither page
saying so, all three now linked:

- The health guide's viral section rests on "Prevention through
  quarantine" and never gives a window; the shared quarantine guide
  has it.
- The handling guide blames nippiness partly on "hormonal adults" and
  stops; the shared photoperiod and sleep guide says what makes a bird
  hormonal.
- The cost guide bills "$10 to $30 a month" for toy and enrichment
  replacement without saying what rotation means; the enrichment guide
  is entirely about that.

Recommended links, one per page:

| Page | Sentence | Link to |
|---|---|---|
| Hub | "Pellet transition from seeds typically takes weeks of patient gradual mixing." | Pellet conversion guide (hub out of scope; the router rebuild makes it a first-week row instead) |
| Encyclopedia | none needed, it is structured data with no link slot | |
| Cost | "regular rotation is a real part of keeping this bird mentally healthy, not an optional extra" | Enrichment guide |
| Handling | "and in hormonal adults" | Photoperiod and sleep guide |
| Health issues | "Prevention through quarantine, testing new birds, and sourcing from reputable breeders is critical" | Quarantine guide |
| Tank setup | "Maintain a consistent day and night photoperiod" and "rotate foraging toys and general toys frequently" | Photoperiod and sleep guide, enrichment guide |
| Enrichment | "Ten to twelve hours of dark quiet sleep, which is the invisible cause of a lot of parrot behavior problems." | Photoperiod and sleep guide |

Six of the seven added. Skipped: the hub's, because the hub is not a
deep dive and the router rebuild answers it with a Pellet conversion
row instead; and the health guide's second candidate ("A roomy,
well-ventilated flight cage kept clean helps reduce that risk" to the
tank setup guide), held to keep this pass at one addition per page,
since the quarantine link was the higher-value one on that page. Every
link added sits after the first H2, none is inside a ComparisonTable
cell, and no article gained a second same-species sibling link: the
cost guide and the tank setup guide each took their one (enrichment),
and the handling, health, tank setup and enrichment links all point at
shared class guides, which do not count against it.

Trust: the cost guide quoting two different prices for the same cage on
the same page, and the old hub carrying a shorter lifespan than the
article it linked to. Neither reads as invented, both read as unedited,
and both sat on the two pages a buyer reads first. The sentence that
most convinced the reader a keeper wrote this, from the enrichment
guide, on destructible material: "Supply it deliberately and they wreck
the supply. Do not supply it and they wreck the cage, the furniture, or
their own feathers."

Reader's two changes: make the cost guide's FAQ quote its own table
(done), and stop the hub stating numbers of its own (done by the router
rebuild).

Encyclopedia: checked, nothing changed. The entry's wildLifespan reads
"25 to 30 years in the wild, and the same is reachable in captivity,
though the captive average is nearer 10 years, put down to poor diet
and neglect," against the cost guide's "20 to 25 years or more is the
commonly cited range, with some individuals reaching 30 years under
excellent care." These answer different questions (a wild figure with a
captive-average aside, against a captive range), so they are not the
Russian tortoise case. Researched anyway: the published figures for
this species scatter badly and none of them is high tier. Reported wild
lifespans run 8 to 25, 10 to 15, and 25 to 30 depending on the site;
the two sources the deep dives actually cite give captive figures only
(PetMD "20+ years with proper care", Lafeber "up to 25 years or more
with proper care" with "Up to 20 years" in its quick facts). Nothing
turned up better than what is already there, and the existing entry
already carries the hedge and the reason for the low captive average,
so it stays as written. The difficulty field is "Intermediate" in the
encyclopedia and was already "Intermediate" on the hub, so nothing
moved there either.

Fixed the same day (branch claude/batch-d-opus-agents-7jgjwi): the hub
rebuilt to the router shape, 18 first-week rows, which resolves the bar
spacing, cage size, lifespan, setup cost, and out-of-cage-time
conflicts by construction; three of those rows cite the shared bird
guides (quarantine, pellet conversion, power outage), the pellet
conversion row standing in for the feeding guide this species does not
have. The cost guide's setup FAQ reconciled to its own table on three
line items. Six links added.

Open: the missing conure feeding guide, and with it the daily diet
amounts the router rebuild removed from the hub. The cost guide's
vet-check and toy-rotation figures that disagree with its own
paragraphs, and its unsourced "reaching 30 years", all listed above
under "Unsourced, needs a fact-check". The four duplicated FunFact
boxes (pineapple on cost and tank setup, beak-as-tool on handling and
health), which belong on READMEFIRST's FunFact repeats list. And the
tone split between the hub's "apartment parrot" framing and the
enrichment guide's "Do not buy a conure expecting a quiet bird": both
are scoped and hedged correctly (the enrichment guide is a genus-level
page and names sun conures), so nothing was changed, but the router
hub no longer carries the "apartment parrot" prose either way.

## Rat (2026-09-09, first pass)

Eight pages (hub, encyclopedia, cost, handling, health issues, enclosure
setup, feeding, enrichment), read from the `.reader/rat/` extract before the
hub was rebuilt. Single-pass review, the batch's default shape. No Agent
tool was available in the worker session, so the set test prompt was run by
the worker itself against the extract rather than by a separate reader
agent; the raw output is in docs/READER_LOG.md under "Rat (2026-09-09)".

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | C+ | A fourth care sheet that repeats the deep dives and then disagrees with four of their numbers. |
| Encyclopedia | B | Origin, adult size, and the Wistar Institute history; nothing to act on, but the only place the size line lives. |
| Cost | A- | Prices the pair rather than the animal, and is honest that the cage swings the total. |
| Handling | A | The tail degloving rule and the allogrooming explanation carry the page. |
| Health issues | A | The 95% rattery figure and the two-year chronic outlook turn cage cleaning into a lifespan decision. |
| Enclosure setup | A- | The tank-versus-wire-cage argument names the mechanism instead of asserting the rule. |
| Feeding | A- | Names actual guaranteed analyses instead of waving at "a good quality food". |
| Enrichment | A | Seven categories a beginner can audit their own cage against. |

Set grade: B+. "The deep dives are specific, sourced and consistent with
each other; the hub sitting in front of them contradicts four of their
numbers."

Hub grade before the rebuild: C+. After the rebuild: router shape, 22
first-week rows, every row copied from the deep dive it names, no figure of
its own.

### Hub versus the set, both sides quoted (all resolved by the router rebuild)

- Cage size. Old hub: "A commonly cited minimum is 16x28x30 inches with
  multiple levels for a rat." Enclosure setup guide: "PetMD lists 24x24x24
  inches as the minimum for a single rat and recommends the largest habitat
  possible beyond that." The 16x28x30 figure appears nowhere else on the
  site and is cited to nothing. Resolved by construction: the hub's Cage
  size row now copies the setup guide's sentence, PetMD figure and all, and
  the buy list carries no dimension of its own.
- Temperature. Old hub: "Keep the room roughly 65 to 80 degrees F without
  big swings." Enclosure setup guide: "RSPCA guidance puts the ideal range
  at 19 to 23°C, roughly 66 to 73°F, and rats generally do fine across a
  somewhat broader 64 to 79°F band." Resolved: the hub row keeps both
  ranges, plus the 86°F heat stress threshold, in the setup guide's words.
- Wheel. Old hub: "A solid-surface exercise wheel at least 12 to 14 inches
  in diameter." Enclosure setup guide: "most sources recommend at least 12
  inches in diameter, with many experienced keepers and rescues
  recommending 14 to 16 inches for adult rats, especially males." The old
  hub had merged a floor and a target into one range. Resolved: the hub row
  keeps both figures separately, as the source states them.
- Cage price. Old hub cost table: "24x24x36 in multi-level cage | $130 |
  $260." Cost guide table: "$130 - $360" for the same line. Three smaller
  rows differed too: bedding ($15-$25 hub against $18-$30 cost), dishes and
  bottle ($10-$20 against $10-$18), thermometer ($10-$15 against $11-$19).
  Resolved: the hub carries no prices at all now, and its one Budget row
  copies the cost guide's own totals ($250 to $550 for a pair, about $130 to
  $360 for the cage, $20 to $40 a month, $60 to $110 for a wellness exam).

### Deep dives against each other

Read four times that rats must never be kept alone (cost, setup, feeding,
enrichment) and three times that ammonia drives chronic respiratory disease
(cost, setup, health). Both agree everywhere, which reads as reassuring
rather than padded, so neither was cut.

One real numeric mismatch, fixed. The cost guide's setup table sold a
"24x24x36 in+ multi-level wire cage with solid ramped shelves", a dimension
no source in either Sources block states, against the enclosure setup
guide's PetMD-sourced "24x24x24 inches as the minimum for a single rat".
Neither Sources block settles it because only one of the two figures is
sourced at all: the cost guide's block cites PDSA (cages built for ferrets
or chinchillas) and Merck, neither of which gives 24x24x36, while the setup
guide cites PetMD for 24x24x24. Under the batch prompt's tiebreak the page
whose subject is that topic keeps its figure and the other changes; the
setup guide is the size page and its figure is the sourced one. The cost
guide's cell now reads "Multi-level wire cage with solid ramped shelves"
with the price range untouched, so the site states one cage minimum, in one
place, from a named source.

Not a conflict, left alone: the cost table's "Solid-surface exercise wheel,
12 in or larger" against the setup guide's "at least 12 inches in diameter,
with many experienced keepers and rescues recommending 14 to 16 inches for
adult rats". Both name 12 inches as the floor and the setup guide adds the
target above it; that is a minimum and a recommendation, not two answers.

### Gaps, checked against the Health and More list first

The sidebar for this species shows only three shared pages: the small mammal
vet trips guide, the grooming guide, and the three-rodent roundup.

- Heat stress signs and first aid. The setup guide warns that "heat stress
  becomes a real risk above about 86°F" and never says what it looks like.
  The shared small mammal heat and cold guide covers exactly this, in order,
  with the do-not-use-ice-water rule, but it is not wired into the rat entry
  in relatedArticles.js, so it is not in this species' sidebar. Half fixed
  in scope: the setup guide now links it in body and the hub carries a Heat
  stress signs row sourced to it. The relatedArticles line is written up for
  the parent to apply (scratch shared-edits file).
- How to introduce two rats to each other. Real gap. No page in the set and
  no shared small mammal guide covers introductions, for a species four
  pages tell the reader must never live alone. Not fixable with a link.
- Whether to neuter, and what it costs. Only the health guide's "spaying a
  female rat before 7 months of age meaningfully lowers her lifetime risk"
  touches it. Real gap.
- What to do for a pair in a heatwave or a power outage. Partly covered by
  the shared heat and cold guide once it is wired in.

### Stranded questions

- The cost guide prices "mammary tumor removal" as one of the more common
  surgical costs in the species; the health guide explains what the tumor is
  and that most are operable fibroadenomas. Neither pointed at the other.
  Fixed with a link.
- The enrichment guide says "a cage that fits a group is the first
  purchase" and never gives a size; the setup guide has the size. Fixed
  with a link.
- The feeding guide says calorie restriction is one of the few interventions
  shown to extend a rat's lifespan; the health guide is where a high-calorie
  diet turns into pituitary tumor risk. Fixed with a link.

### Recommended links, one per page

| Page | Sentence | Link to | Done |
|---|---|---|---|
| Hub | "rats with chronic respiratory disease rarely live past 2 years" | health issues guide | n/a, hub prose is gone; the route and the Respiratory disease row link it |
| Encyclopedia | none possible | | structured data, no link slot |
| Cost | "mammary tumor removal is one of the more common surgical costs in this species" | health issues guide | added |
| Handling | "Daily handling, playtime, and supervised time outside the cage matter for a rat's wellbeing" | enrichment guide | skipped, the sentence sits in the closing paragraph, where RULES says the article ends on the animal, and the Deep Dive list already carries enrichment |
| Health issues | "a thermometer to confirm the room isn't running colder, damper, or draftier than it should" | enclosure setup guide | skipped, the clause is one item in a four-item husbandry list and breaking it for a link reads as an editor's note |
| Enclosure setup | "heat stress becomes a real risk above about 86°F" | shared small mammal heat and cold guide | added |
| Feeding | "obesity is common in pet rats and that calorie restriction... is one of the few interventions actually shown to extend their lifespan" | health issues guide | added |
| Enrichment | "a cage that fits a group is the first purchase" | enclosure setup guide | added |

Every added link sits after the first H2, outside any ComparisonTable cell,
and each article carries at most one link to a sibling suffix guide (cost
and feeding to health issues, enrichment to enclosure setup; the setup
guide's new link is to a shared class guide and does not count against the
cap).

### Trust

What made the reader doubt the set was the hub, not the articles: four
numbers on the page the navigation lands on first did not match the pages
underneath it. The deep dives name Merck, RSPCA, PDSA, VCA, PetMD and AFRMA
and say where sources differ. The sentence that most convinced the reader a
keeper wrote this, from handling: "A rat's tail skin can shear away from the
tissue underneath under pulling or grasping pressure, an injury called
degloving or tail slip, and it's specifically caused by exactly this kind of
handling."

### The reader's two changes

1. Make the hub carry the articles' numbers or none. Done: router rebuild.
2. Tell the reader what heat stress looks like on the page that warns about
   it. Done: the setup guide's 86°F sentence now links the shared heat and
   cold guide's ordered signs, and the hub carries a Heat stress signs row.

### Encyclopedia

Checked, nothing changed. The entry's wild lifespan ("About 1 year on
average in the wild, commonly 5-12 months, occasionally up to 3 years") is
stated nowhere else in the set, so nothing contradicts it. Its pet figure,
"pet fancy rats typically live 2-3 years, occasionally to 4", matches the
cost guide's PDSA sentence word for word in substance; the cost guide's
Merck figure of "18 to 36 months" sits inside that band and the cost guide
already states both side by side, so this is two sources reported honestly
rather than a conflict. Adult size (7-10 in body, 6-8 in tail, 0.8-1 lb
females, 1-1.4 lb males) appears in no deep dive, so it carries no source in
the hub row and nothing disputes it. Difficulty is "Beginner" in both the
encyclopedia entry and the hub. No field was edited.

### Dates

No lastUpdated bumped. Every rat deep dive is future-dated (2026-09-21, and
2026-10-17 for enrichment) with lastUpdated equal to date, so stamping
today's Eastern date, 2026-09-09, would put lastUpdated before the publish
date. The one fact-bearing edit, the cost guide's cage cell, removed an
unsourced figure rather than adding one, on an article that has not
published yet. Recorded here rather than dated.

### Fixed the same day

Hub rebuilt to the router shape: 22 first-week rows, each copied from the
deep dive it names (16 from the six rat guides, 1 from the encyclopedia for
adult size, 3 from the shared grooming, heat and cold, and vet trips
guides), the emergency card copying the health guide's "When to See a Vet"
list bullet for bullet with its hedges in the vetLine, six routes for the
six own deep dives, a twelve-item buy list with no prices, and three FAQs
copied verbatim from the setup, enrichment and health guides' frontmatter.
`costs`, `sections` and the old six FAQs dropped. Deep dives: the cost
guide's cage cell reconciled to the setup guide's sourced minimum, and four
links added (cost to health issues, setup to the shared heat and cold guide,
feeding to health issues, enrichment to setup).

### Open

- No page covers introducing two rats to each other.
- No page covers whether to neuter a pet rat or what it costs.
- `small-mammal-temperature-heat-stress-guide` still needs adding to the rat
  entry in src/lib/data/relatedArticles.js before the shared guide shows in
  this species' sidebar.

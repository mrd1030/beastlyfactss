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
fixes, about 79k tokens. Set grade held at B+, same reason: "strong,
specific, mostly non-redundant, let down by a contradicted cage number
and a sidebar of relevant guides the bodies never reach into."

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

Four more recommended links added: handling to the shared bird first
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
  four more links added. Also fixed, at the reader's own request:
  scripts/reader-extract.mjs's table parser choked on a bare
  `<AffiliateLink>` used directly as a cell value instead of wrapped in
  a `<>fragment</>`, which crashed the budgie cost guide's entire setup
  table into "[table could not be parsed]" in both reader passes; now
  resolves either form, verified against six other species' tables
  with no regressions. Open: budgie-tank-setup-guide.mdx carries no
  Sources block at all, the only budgie deep dive without one, flagged
  for a real research pass rather than fixed here.

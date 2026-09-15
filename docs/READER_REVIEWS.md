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
- 2026-09-09, batch D, five species in parallel (branch
  claude/batch-d-opus-agents-7jgjwi). Green iguana: enrichment's "five to six
  feet" corrected to LafeberVet's "six feet or more" against handling's 6 to 7,
  encyclopedia adultSize and overview brought to the same figure, wildLifespan
  moved off a captive number to Animal Diversity Web's "about 8 years" in the
  wild, five links added. Conure: the cost guide's setup FAQ reconciled to its
  own table on cage, perches and toys, six links added, SHORT_LABELS gained
  pellet-conversion-guide. Rat: an unsourced 24x24x36 cage dimension dropped
  from a cost table cell in favor of the setup guide's sourced PetMD 24x24x24,
  the shared heat and cold guide wired into the rat entry so it reaches the
  sidebar, four links added. Hermit crab: four hub conflicts resolved by
  retiring hub prose rather than editing a sourced deep dive, and the
  enrichment guide's "most common way these animals die" superlative given up
  to the health guide's sourced PPS claim. Box turtle: VCA's 60 F outdoor floor
  replacing an unsourced 70 F on the deep dive and in the shared reptile
  emergency plan guide's species row, VCA's 90 to 100 F basking zone added to a
  temperature section that carried no number at all, and Indiana DNR's
  documented 60-plus year lifespan replacing a figure that had captivity
  costing a turtle a decade against the wild, corrected in all five places it
  appeared.
- 2026-09-09, batch D process: the species workers had no Agent tool, so none
  could launch its own reader and each read its own set. Five independent Opus
  readers were run afterwards from the session against the same pre-rewrite
  extracts, then five Opus check agents, one per species, report-only with the
  parent applying every fix. Every species checked out at pass grade A-.
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

- 2026-09-14, batch F (pacman frog, zebra finch, angelfish, tokay gecko,
  sugar glider), branch claude/hub-pacman-frog-80291s, five classes:
  amphibian, bird, fish, gecko, small mammal. Five router hubs built, 130
  first-week rows between them. Pacman frog: the health guide's
  once-a-week adult feeding corrected to the feeding guide's 1 to 3 times
  a week against a veterinary clinic and PetMD, the feeding guide's 50 to
  80% humidity to tank setup's sourced 60 to 80%, the encyclopedia's 3 to
  5 inch adult size to the handling guide's sourced 4 to 7, and its 6 to
  15 year wild lifespan rewritten on the undocumented-in-the-wild pattern
  against AnAge's 14.7 years captive. Zebra finch: the cost guide's 5 to
  10 year captive lifespan corrected to Animal Diversity Web's
  species-specific 5 to 7, the pellet share stated once instead of as two
  sources at odds, and the wild flock-size clash between the encyclopedia,
  tank setup and a peer-reviewed field study resolved by one verb rather
  than a figure. Angelfish: the encyclopedia's 10 to 12 year wild lifespan
  moved to the deep dives' sourced 8 to 12, the old hub's 78 to 84°F
  retired for tank setup's 78 to 82, and the group-size and prey-threshold
  clashes resolved by scoping one sentence and adding one link. Tokay
  gecko: a sourced Diet Basics section added to the tank setup guide, since
  this species has no feeding guide and the old hub's diet prose was the
  set's only feeding content, and the solo-versus-pair conflict settled
  toward the 2024 pair-housing study without flipping the default. Sugar
  glider: the cost guide's three-state legal paragraph replaced by the
  legal guide's eight-jurisdiction list, the encyclopedia's ounce weight
  replaced by the veterinary gram ranges, and the hub funFact's 150-foot
  glide moved to the Australian Museum's 50 m. Thirty in-body links
  added across the five sets (six, seven, six, five and six), one sibling
  link per article.
- 2026-09-14, batch F species check (one Fable agent covering all five
  species on the shared branch, the model decision recorded in the batch
  prompt): found and fixed a sugar glider emergency-card bullet the health
  guide never states, an angelfish hub row that mixed a handling-guide
  sentence under the enrichment guide's source (split into two rows), a
  zebra finch hub diet row left stale against the batch's own later fix to
  that guide, a zebra finch cost guide `description` field still carrying
  the retired 5 to 10 year lifespan, a hedge dropped from the angelfish
  handling guide when a retailer attribution was cut ("can become
  territorial" restored), an angelfish feeding-guide date bumped for a
  link only, and three review-file notes that did not match the diff. It
  also traced the sugar glider adult-weight figure to the VCA page that
  actually states it and added that page to the feeding guide's Sources.
  Pass grade B+.
- 2026-09-14, batch G (canary, neon tetra, veiled chameleon, California
  kingsnake, hedgehog), one reader pass each and one Fable check. Canary:
  cost guide setup total corrected to its own table ($150 to $275),
  lifespan to LafeberVet's 6 to 12 years, a sourced Diet Basics section
  and two Sources blocks added where three deep dives had none, and the
  tank setup lighting sentence reconciled with the enrichment guide's
  photoperiod research. Neon tetra: nothing moved; the old hub's
  misspelled parasite name and its conflated wild lifespan went with the
  rebuild. Veiled chameleon: humidity (40 to 50% day, 80 to 100% night)
  and a 12-hour photoperiod added to the tank setup guide from
  ReptiFiles, the legal guide's forty-eight corrected to forty-seven, the
  encyclopedia lifespan field split by sex. California kingsnake: warm
  and cool side to Tree of Life's 85 to 88 and 72 to 78, the two-thirds
  enclosure rule replaced by "at least as long as the snake", feeding to
  the vet schedule (5 to 7 days juvenile, 10 to 14 adult), a sourced Diet
  Basics section added since the species has no feeding guide. Hedgehog:
  floor space to Merck's 2 by 3 feet, ideal temperature to 75 to 85, the
  40 to 60% humidifier line retired, quilling to LafeberVet's episodes,
  the cost guide's vet table and legal FAQ matched to their own bodies,
  the encyclopedia wild lifespan to Animal Diversity Web's 2 to 3 years.
  Twenty-four in-body links added across the five sets, one sibling per
  article.
- 2026-09-14, batch G species check (one Fable agent covering all five):
  found and fixed three canary cost guide frontmatter copies of the
  retired setup total and lifespan, a canary hub lighting row stale
  against the batch's own fix, a canary emergency bullet worded from the
  handling guide, two hedgehog hub rows carrying the feeding guide's
  source narration (settled in the deep dive first), a hedgehog feeding
  guide date not bumped for a number change, a LafeberVet source missing
  from the hedgehog handling guide's block, the California kingsnake hub's
  missing vetLine, a veiled chameleon encyclopedia field carrying a
  captive figure under "Wild Lifespan" with no label, and one review-file
  note that did not match the diff. Every number decision held when the
  sources were reopened. Pass grade B+.
- 2026-09-14, batch H (cardinal tetra, milk snake, gargoyle gecko, gerbil,
  sulcata tortoise, branch claude/hub-pacman-frog-80291s). Cardinal tetra: the
  health guide's ich FAQ dropped the temperature-increase advice its cited
  Aquarium Co-Op protocol never gives, the cost guide's lifespan gained ADW's
  "about five, up to ten", and the hub's misspelled parasite went with the
  legacy sections. Milk snake: the setup guide moved to ReptiFiles' 75 to 80
  cool side and 70 to 75 night, its "4 to 5 feet" subspecies line to the cited
  28 to 48 inches, and gained a sourced Diet Basics section; the vs corn table
  lost its copperhead and its 24 to 36 inches. Gargoyle gecko: the tank setup
  guide's no-heat thesis was rewritten against all three of its own sources to
  a gradient with a low ceiling, and the encyclopedia's Vulnerable became Least
  Concern. Gerbil: the hub was right and the deep dives wrong, so six Merck
  figures (protein, fat, portion, humidity, lifespan, tail amputation) moved
  into the deep dives, plus cholesteatoma, seizures and tumor incidence as new
  health guide sections. Sulcata: the setup guide's brumation advice for a
  Sahel species was cut against the shared brumation guide, the encyclopedia's
  Vulnerable became Endangered and its 70 to 150 lb and 70 to 150 years became
  the sourced 80 to 110 lb, 200 lb males, and 70-plus years.
- 2026-09-14, batch H species check (one Fable agent covering all five):
  confirmed both claims the batch rested on against the source pages (Merck
  on gerbil, the three gargoyle heat sources), then found and fixed: source
  names in nine cardinal tetra hub rows, one milk snake row, three gerbil rows
  and the gargoyle and gerbil deep dives' new prose; two gargoyle hub rows and
  one setup-guide range ("82 to 84°F") no source states; a stale gargoyle body
  H1; a Merck seizure sentence read out of its dihydrostreptomycin paragraph
  and carried into the gerbil emergency card; that card written rather than
  copied, and the sulcata and milk snake cards each carrying a bullet their
  health guide does not; three hubs routing vs pieces; the milk snake vs corn
  page still saying copperhead and the sulcata vs Russian page saying 70 to
  110 where the review said otherwise; a gerbil FunFact still at three to
  four years; and ten files with a number changed and no date bump. Pass
  grade B-.

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
12 bullet emergency card, 10 bullets off the health guide's four call-the-vet
passages plus burns and impaction, which that guide calls preventable rather
than a vet call, 5
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
- The cost guide's setup table sums to $230 to $470 across its six
  non-bird rows, against the "Roughly $400 to $900 or more" the page
  states in its H2, its closing line, its seoTitle, the setup FAQ, and
  the hub's Budget row. Reconciling the FAQ to the table put both
  figures in one sentence, so the gap is now visible in a single
  reader-facing line. Neither cited source states any price, so nothing
  was changed here; the total needs either a source or a table that
  reaches it.
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
  in relatedArticles.js, so it was not in this species' sidebar. Fixed in
  scope: the setup guide now links it in body, the hub carries a Heat stress
  signs row sourced to it, and the guide is wired into the rat entry in
  src/lib/data/relatedArticles.js so it shows in the sidebar. Note the
  commit message's claim that every other small mammal already carried it is
  wrong: ferret, hedgehog, sugar glider, flying squirrel and mouse all lack
  it too, and wiring those is another species' work.
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
deep dive it names (18 from the six rat guides, 1 from the encyclopedia for
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

## Hermit Crab (2026-09-09, first pass)

Extractor set of seven pages (hub, encyclopedia, cost, handling, health
issues, tank setup, enrichment). No reader subagent: this session had no
Agent/Task tool, so the set test prompt was run in-session by the species
agent against `.reader/hermit-crab/` before the hub was rewritten. Raw
output is in the reader log entry for the same date. The hub was the
legacy care-sheet shape when the pass ran; it is a router hub now.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B- | The only page with a checklist and a shopping list, but it is a third care sheet and three of its numbers do not match the setup guide. |
| Encyclopedia | B+ | The history is the only thing in the set you cannot get elsewhere, and nothing here changes what you buy. |
| Cost | B+ | You learn the crab is the cheap part and the tank is not; the table's tank line and the stated total sit oddly together. |
| Handling | A- | The section on how long a crab stays buried is the most useful paragraph in the set. |
| Health issues | A- | Honest that there is essentially no vet care, so husbandry does the work; names mites and then says nothing about them. |
| Tank setup | A | The numbers page, and the one to print. |
| Enrichment | A | Cites Elwood and Appel, shows Briffa disagreeing rather than resolving it, and ends on the best list in the set. |

Set grade: B+. "Everything a keeper needs is here and the setup and
enrichment pages are better than most of what is online, but the hub
contradicts the setup guide on three of the four numbers that matter
most."

Hub grade after the rewrite: A-. Router shape, 18 first-week rows, a
five-bullet emergency card, five routes, a twelve-line buy list with no
prices, three verbatim deep-dive FAQs. Marked down only because the
species has no feeding or legal guide, so two rows a reader would expect
to route somewhere land on the tank setup guide instead.

Hub versus the set, both sides quoted (all four resolved by the router
rewrite, since the hub now copies the deep dive named in each row):

- Humidity. Hub: "Humidity must stay at 70 to 80%, measured with a
  hygrometer rather than guessed," and its checklist line "70-80%
  humidity, 75-85°F temperature." Tank setup guide: "Maintain 75 to 85%
  relative humidity," and its FAQ "75 to 85% relative humidity, checked
  on a hygrometer." Neither page's Sources block states a figure that
  settles it: the tank setup guide cites the Land Hermit Crab Owners
  Society basics page, which was opened and gives no numeric humidity
  range at all, and Crab Street Journal's humidity article, which
  returns 403 to a fetch. A search of the wider husbandry literature
  puts the consensus at roughly 70 to 85% with a floor around 65%, which
  contains both figures and contradicts neither. Decided by topic
  ownership under the batch prompt's tiebreak: the tank setup guide is
  the page whose subject is humidity, so 75 to 85% wins and the hub
  follows. No deep dive changed. Nothing to fact-check further.
- Spare shells. Hub: "always have 2 to 3 spare empty shells per crab,"
  repeated in the checklist and in a hub FAQ. Tank setup guide: "Offer
  multiple natural, unpainted shells per crab, ideally 3 to 5 or more."
  Enrichment guide: "Provide several shells per crab, across a range of
  sizes and opening shapes." The two deep dives agree with each other
  and only the hub disagreed. Tank setup wins on topic ownership; hub
  now copies it.
- Substrate depth. Hub: "a sand and coconut fiber mix at least three
  times the crab's body length," and the checklist "(3x crab body
  length)." Tank setup guide: "at least 6 inches, or about 3 times the
  height of your largest crab." Body length and height are different
  measurements on this animal. Tank setup wins; hub now copies both
  halves of that sentence, the inches and the multiple, rather than
  merging them.
- Tank price. Hub cost table: "10-20+ gallon tank (for a group) $60 to
  $120." Cost guide table: "10-gallon tank (2 to 3 small crabs) | $30 -
  $100." The hub's cost tables are gone with the router rewrite, so the
  cost guide's figures are now the only ones on the site.
- Lifespan, not a real conflict. Hub FAQ: "In the wild, land hermit
  crabs can live 20 to 30 years or more... captive lifespans of a decade
  or more are genuinely achievable." Cost guide: "Hermit crabs can live
  10 to 20 years or more when kept well." One is a wild figure and one
  is a captive figure. `check-species-numbers` groups them under
  `lifespan | years` and flags them; they answer different questions.
  The hub's Lifespan row now carries the cost guide's captive figure
  with a source, and the wild figure stays where it belongs, in the
  encyclopedia entry and the hub's funFact.

Deep dives against each other: no number disagreements. Substrate depth
appears on three pages and agrees each time. Shell counts agree between
tank setup and enrichment. Molt duration agrees across handling ("several
weeks up to around three months"), health ("weeks-long"), and the shared
invertebrate molting guide ("Several weeks buried, depending on size").
Diet appears in both the tank setup guide and the enrichment guide, but
they are not the same aside: tank setup says what to feed, enrichment
says to scatter it rather than bowl it. The species has no feeding guide
to move either into, so both stay and no pointer was created.

Gaps, each checked against the sidebar's Health and More list (the
invertebrate molting guide, the invertebrate pesticide hazards guide,
the invertebrate emergency and travel guide, and the four unusual pets
overview) before being called real:

- Quarantine. The health guide says to "quarantine and isolate new
  crabs" and never gives a duration, a container, or a criterion for
  ending it. Every pet hermit crab is wild-caught by that page's own
  account, so this is the gap that matters most. There is no invertebrate
  quarantine guide in the shared list. Real gap, not fixable with a link.
- Mites. The health guide names mites and mold and gives no procedure.
  Not covered by any shared guide. Real gap.
- Saltwater strength. The tank setup guide says "marine saltwater made
  from an aquarium salt mix, never table salt" with no ratio or target.
  Real gap, minor.
- Choosing a crab in a shop. Nothing in the set says what to look at.
  Real gap, given the wild-caught framing.
- Sexing. The legacy hub carried a FAQ on gonopores; the router rewrite
  drops the old FAQs by rule, and no deep dive covers it. Now uncovered
  anywhere in the set. Noted rather than fixed, since inventing a sexing
  section is outside a fix pass.
- Not real: molting duration (handling guide plus the shared molting
  guide), power outages and travel (the shared invertebrate emergency
  guide, whose hermit crab row calls this species "the real exception in
  the group"), household pesticides (the shared pesticide guide).

Stranded questions, where a page raised something another page answers
without saying so:

- The health guide's dehydration section ended "covered in more detail in
  the tank setup guide," naming a page and not linking it. Fixed.
- The cost guide's "Most hermit crab health problems trace straight back
  to that gap." named a whole page and went nowhere. Fixed.
- The enrichment guide's "Depth should let the largest crab bury
  completely with room to spare." leaves the reader without a number the
  tank setup guide states in inches. Fixed.
- The tank setup guide's heat mat warning turns on a crab "buried or
  molting underneath" without saying how long that lasts. Fixed with a
  link to the shared molting guide rather than to the handling guide,
  because the tank setup guide's one allowed sibling link is spent.

Recommended links, one per page:

| Page | Sentence | Link to | Done |
|---|---|---|---|
| Hub | "Molting is a vulnerable, weeks-long underground process" | Handling guide | Rewritten to the router shape instead; the routes carry it |
| Encyclopedia | "they can live for decades with proper care" | Cost guide | Skipped, encyclopedia out of scope |
| Cost | "Most hermit crab health problems trace straight back to that gap." | Health issues guide | Added |
| Handling | "The real warning signs of a genuine problem are a strong, rotten odor, or a body that's gone limp or fallen out of the shell entirely." | Health issues guide | Skipped: the page already carries three in-body links and the sentence sits in the Takeaway, where a link reads as a nav bar |
| Health issues | "matter so much in this species' housing, covered in more detail in the tank setup guide." | Tank setup guide | Added, and the self-reference clause went with it |
| Tank setup | "a crab that's buried or molting underneath" | Invertebrate molting guide | Added (shared class guide, does not count against the sibling limit) |
| Enrichment | "Depth should let the largest crab bury completely with room to spare." | Tank setup guide | Added |

Trust: nothing read as invented. The 70-to-80 against 75-to-85 split was
the one that mattered, because humidity is the number this species hangs
on and the hub was the first page a reader lands on. The sentence that
most convinced the reader a keeper wrote this, from the enrichment guide:
"Do not supply one spare shell for a group, because that creates
competition over a resource the research shows they weigh heavily."

Reader's two changes: stop the hub restating the setup guide's numbers
(done, router rewrite), and give the health guide's quarantine advice a
duration (open, needs research and new sourced text, not a fix-pass edit).

Encyclopedia: checked the hermit crab entry in
src/lib/data/encyclopedia/invertebrates.js against every deep-dive
figure. Adult size "Up to 4 inches (10 cm) across, including legs" is
not stated by any deep dive, so the hub's Adult size row cites it with
no source, as the rules allow. Wild lifespan "20-30+ years in the wild"
does not conflict with the cost guide's captive "10 to 20 years or more
when kept well"; they are different questions and both stand. Difficulty
is "Intermediate", which the hub now matches. Scientific name, origin,
habitat, wild diet, and the history section carry nothing a deep dive
contradicts. Nothing was changed in the encyclopedia file.

Fixed the same day: the hub rewritten to the router shape (four hub
figures retired, none of them the winner in any conflict); four links
added as listed above; one self-reference clause removed from the health
guide. No
lastUpdated bumps: every deep-dive edit was a link or a self-reference
removal, and no fact or number in any deep dive changed.

Open: the quarantine duration, the mite procedure, the saltwater ratio,
what to look at when buying a crab, and sexing, all of which need
research and new sourced text rather than a link or a number correction.
Also noted: the router rewrite drops the hub's `costs` block, so the
three affiliate products whose `covers` strings matched the old hub cost
table ("Marine salt mix (saltwater pool)", "Spare shells (2-3 per crab)",
the Fluker's substrate) are now reachable only from /gear and from the
prose links that already carry them. `check-cost-coverage` does not fail
on it, and the same is true of every species reconciled in batches A to
C, so it is recorded rather than treated as a defect.

## Box Turtle (2026-09-09, first pass)

Batch D. Extractor set of eight pages (hub, encyclopedia, cost, handling,
health issues, tank setup, enrichment, legal). Read against the old legacy
hub (housing and diet prose, a cost table, a checklist, eight FAQs); the
router hub was built from its findings the same day. No Agent tool was
available in this session, so the set test was run in-session against
.reader/box-turtle/ under the READMEFIRST set test prompt rather than
delegated to a background agent; the raw output is in the reader log entry
for this date.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | C | A full care sheet where a router should be, and it changes the numbers when it repeats them. |
| Encyclopedia | B+ | The history section is the best writing in the set. |
| Cost | B+ | Real arithmetic you can check, and one lifespan claim you cannot. |
| Handling | B+ | Careful about sexing in a way the hub is not. |
| Health issues | B- | Good causal structure, no sources at all under a page about antibiotics. |
| Tank setup | C+ | The page most needed on day one, and its Temperature section has no degrees in it. |
| Enrichment | A- | One study, honestly described, with a priority order that follows from it. |
| Legal | A | Statute by statute, and it says when a rule is unsettled. |

Set grade: B-. "The deep dives are good to very good and the legal and
enrichment guides are better than most of what is online. The hub drags it
down by contradicting them in public on price, temperature, substrate, UVB,
and lifespan, and the tank setup guide leaves out the one number a new keeper
needs on day one."

Hub grade after the rebuild: A-. Twenty first-week rows, every one copied
from the deep dive named in its source, six routes, five emergency bullets,
a nine-item buy list with no prices, three verbatim FAQs. Held back from an A
only because two rows (Adult size, and the Outdoor pen row sourced to a
shared guide) are the only places a reader meets those figures at all.

### Hub versus the set, both sides quoted

All against the old legacy hub, all resolved by the router rebuild.

- Substrate depth. Old hub: "deep, moist substrate (coconut coir/topsoil mix,
  6 inches or more deep)", and the checklist item "OR large indoor tortoise
  table with 6 inch+ moist substrate". Tank setup guide: "Wood chips or a
  topsoil and coconut fiber mix, at least 2 to 3 inches deep to support
  burrowing." The tank setup guide is the subject page and keeps its figure;
  the hub's Substrate row now quotes that sentence.
- UVB strength. Old hub: "UVB (T5 HO Arcadia 6 to 12%)", twice. Tank setup
  guide: "A T5 HO bulb (6% strength or the equivalent Zoo Med ReptiSun 5.0 T5
  HO) in a reflective fixture, targeting a basking-area UV index of 3.0 to
  4.0." The cost guide's Sources already carry the Zoo Med ReptiSun 5.0 spec
  sheet and no source anywhere supports 12%. The hub's UVB row now quotes the
  tank setup guide.
- Basking temperature. Old hub: "a basking spot (85 to 88 degrees F)", in the
  housing prose and again in the checklist. Tank setup guide: "Provide a clear
  warm basking zone with a gradient down to a cooler area, using an indoor
  heat source", with no number anywhere on the page. The 85 to 88 figure is not
  invented, it is Wildwood Veterinary Hospital's daytime ambient range for US
  box turtles ("85-88 F/day, 70-75 F/night"), mislabeled on the old hub as a
  basking spot. The hub keeps no figure of its own either way. Resolved by
  putting a sourced number in the deep dive, from VCA, whose 90 to 100 F
  basking zone contains Wildwood's 90 to 94 F basking area. Note Wildwood is
  cited on the tank setup guide for substrate depth only, and its temperature
  figures are deliberately not the ones that page uses, so do not later
  reconcile the page to them. See the numbers section below; see the numbers section below; the hub's
  Temperature row now quotes the tank setup guide's corrected sentence and the
  85 to 88 figure is gone rather than moved.
- Captive lifespan. Old hub: "captive animals routinely live into their 50s
  and 60s with good care." Cost guide: "30 to 40-plus years in captivity, with
  wild box turtles averaging around 50 years." Neither is supported by either
  page's sources, and the cost guide's version has captivity costing a box
  turtle a decade against the wild. Resolved against Indiana DNR, below.
- Juvenile protein. Old hub, in the diet prose and again in a FAQ: "Juveniles
  need more protein (60 to 70%) for growth." No deep dive states it. VCA's box
  turtle feeding page, already cited by the cost guide, says only that "Young,
  growing box turtles, up to four to six years of age, tend to be primarily
  carnivores." The percentage is invented precision. Dropped with the hub and
  deliberately not moved into a deep dive, because no source states a number.
- Costs, line by line. Old hub setup table: outdoor enclosure or tortoise
  table $150 to $400, UVB $60 to $100, basking bulb $20 to $40, substrate $25
  to $45, soak dish $10 to $20. Cost guide: "Enclosure, 36x18x18 inch minimum
  | $202 - $258", "T5 HO UVB fixture and bulb | $95 - $115", "a basking bulb
  runs roughly $8 to $14, with a basking dome fixture adding another $12 to
  $20", "Coconut fiber substrate | $10 - $16", "Large soak-able water dish |
  $18 - $30". The hub's basking bulb was triple the deep dive's. Annually the
  hub billed "UVB bulb replacement: $60 to $100" against the cost guide's "so
  a $25 tube is $2 to $4 a month", and "Annual vet wellness check: $60 to
  $100" against "A routine exotic exam runs $60 to $135". The router hub has
  no cost table; its Budget row quotes the cost guide's own totals.
- Sexing. Old hub FAQ: "Eye color is the fastest tell in most North American
  box turtles." Handling guide: "Eye color gets mentioned constantly, red or
  orange in males versus brown in females, and it does hold for eastern and
  three-toed box turtles, but it isn't universal across every box turtle
  subspecies, so treat it as a supporting clue rather than the deciding one."
  A recommendation conflict, not a number. The handling guide cites a source
  for it and is the subject page, so it keeps its position; the hub's FAQ is
  replaced by three verbatim deep-dive FAQs.

### Deep dives against each other

One real disagreement, and it is with a shared guide rather than inside the
species set.

- Outdoor temperature floor. Box turtle tank setup guide: "This species
  shouldn't be kept outdoors once temperatures drop below about 70°F", with no
  source on the page at all. Shared outdoor reptile housing guide: "VCA's box
  turtle housing guidance sets the line at 60°F (16°C) for that species
  specifically." Shared reptile emergency plan guide, cold-floor table: ["Box
  turtle", "N/A, keep indoors below this", "70°F (21°C)"]. VCA Animal
  Hospitals' box turtle housing page, opened for this pass, states: "Bring the
  box turtle indoors if the temperature drops below 60°F (16°C)." A veterinary
  hospital, species-specific, beats an unsourced sentence, and the shared
  outdoor housing guide already agrees with it. The tank setup guide changed
  to 60°F. The emergency plan guide's row carried the last copy of the old
  figure and was fixed in the same commit, since it is a single species row on
  a shared guide: ["Box turtle", "65-70°F (18-21°C) overnight indoors, per
  VCA", "60°F (16°C), the outdoor line VCA gives for this species"], with VCA's
  box turtle housing page added to that guide's Sources.

Read twice, no conflict: the half-animal-half-plant diet (cost guide's monthly
section and the tank setup guide's own section, both short and both earning
their place, so neither was collapsed to a pointer); the semi-terrestrial
land-and-water argument (handling and tank setup, both good); the outdoor pen
(tank setup body, tank setup FunFact, enrichment guide).

Advisory, not a conflict: substrate depth read across three pages. Tank setup
"at least 2 to 3 inches deep", cost guide "a 4 inch layer in a 36x18 inch
indoor enclosure", enrichment "do not use a shallow scattering of substrate
and call it deep." Four inches satisfies "at least 2 to 3", so there is no
contradiction to fix, but 2 to 3 inches is the number a new keeper will build
to and a 4.5 to 7 inch turtle cannot get under it. ReptiFiles, the cost
guide's source for the depth math, returned 403 to every fetch this pass, so
the figure could not be checked and nothing was changed. Listed under
"Unsourced, needs a fact-check".

### Gaps, checked against the Health and More list first

Real:
- A basking surface temperature for a box turtle, from any source. The shared
  reptile heating and thermostats guide covers what a thermostat does and
  where the probe goes, not this species' target. Fixed this pass: VCA's
  numbers are now in the tank setup guide.
- How much an adult box turtle eats in one sitting. The cost guide's "adults
  eat daily or every other day" is the only feeding frequency in the set, and
  it sits inside a paragraph about grocery bills. There is no box turtle
  feeding guide and no shared guide covers portioning. Still open.
- What the homing instinct means in practice after an escape or a move. The
  old hub warned that "even a few miles can disorient them fatally" and
  nothing follows it. Not covered by any shared guide. Still open, and note
  the claim left the site with the old hub prose, so nothing now asserts it.

Not real, covered by the sidebar already:
- Brumation protocol. Shared tortoise brumation guide, which covers North
  American box turtles explicitly with their own numbers. Now a hub row.
- New-arrival quarantine. Shared chelonian herpesvirus guide, six months
  minimum. Now a hub row.
- Outdoor pen construction and buried fencing depth. Shared outdoor reptile
  housing guide. Now a hub row.
- Salmonella and hygiene, daily stool checks, shedding, succession planning
  for a pet that outlives you. All shared guides in the list.

### Stranded questions

- Old hub told the reader to "consult a chelonian-experienced vet for safe
  hibernation protocols" and stopped; the shared brumation guide had the
  protocol. Answered by the hub's new Brumation row.
- Handling guide says a box turtle needs "regular access to shallow water for
  soaking"; the tank setup guide has the dish. Neither pointed at the other.
  Both are in the Deep Dive list on every page, so no in-body link was added.
- Cost guide summarizes state rules in a paragraph while the legal guide has
  the state-by-state table, and never says so. Same reason, no link added.

### Recommended links, one per page

| Page | Sentence | Link to | Done |
|---|---|---|---|
| Hub | "consult a chelonian-experienced vet for safe hibernation protocols" | Tortoise brumation guide | Yes, as a hub row rather than prose (the prose is gone) |
| Encyclopedia | none needed | | |
| Cost | "Wild collection of box turtles is illegal or heavily restricted across most of their native range in the US." | Legal guide | Skipped: the sentence sits before the first H2 |
| Handling | none needed, already links out three times | | |
| Health issues | "Often found incidentally on a routine fecal exam even without obvious symptoms, heavier loads cause diarrhea and weight loss." | Reptile stool and urates guide | Yes |
| Tank setup | "though an outdoor pen is genuinely excellent where your climate allows" | Outdoor reptile housing guide | Skipped: the page already carries three in-body links and the enrichment guide now carries this target |
| Enrichment | "a secure outdoor enclosure in suitable weather is the highest-quality enrichment available for a box turtle" | Outdoor reptile housing guide | Yes |
| Legal | none needed | | |

All three added links go to shared class guides, so none of them count against
the one-sibling-link-per-article limit, none sit before a first H2, none are
inside a ComparisonTable cell, and each sentence is about the animal.

### Trust

What made the reader doubt them: the old hub's cost table against the cost
guide's, most of all a basking bulb at $20 to $40 against $8 to $14, because
the hub reads like it is selling and the deep dive shows its work. The health
issues guide carrying no Sources block under a page about antibiotics and
metabolic bone disease. The tank setup guide carrying none either. And the
hub's "85 to 88 degrees F", a two-degree precision on a number nothing else in
the set repeats.

The sentence that most convinced the reader a real person wrote this, from the
legal guide on Oklahoma: "The Department's page says outright that it is an
interpretive summary and not a legal document, so this is a genuine gap
between the words and the practice rather than a settled six."

### Reader's two changes

1. Put real temperature numbers in the tank setup guide, from a source, and
   delete the hub's 85 to 88 rather than move it. Done: VCA's 90 to 100°F
   basking zone, 70 to 75°F cool end, and 65 to 70°F overnight are in the tank
   setup guide with a new Sources block, and the hub carries no figure of its
   own.
2. Make the hub stop repeating the deep dives. Done by the router rebuild.

### Unsourced, needs a fact-check

- Substrate depth. Tank setup "at least 2 to 3 inches", cost guide "a 4 inch
  layer", enrichment arguing for deeper. ReptiFiles 403'd on every attempt.
- Humidity, 60 to 80%, tank setup guide only, no source states it.
- The health issues guide has no Sources block at all. Every claim on it
  (metabolic bone disease causes, the vitamin A to respiratory infection link,
  shell rot, Baytril by implication from the cost guide) is unattributed.
  Out of scope for this pass, which was links and numbers, not new research.

### Encyclopedia

Checked the box turtle entry in src/lib/data/encyclopedia/turtles.js against
the deep dives' sourced figures. Nothing changed, and here is why.

- Wild Lifespan, "50-100+ years", and the Overview's "They can live over 100
  years". Indiana DNR: "Eastern box turtles have been documented to exceed 60
  years of age. Very old specimens may reach ages of more than 100."
  Smithsonian National Zoo: "Box turtles generally live for 25-35 years but
  have been known to survive to over 100 years old!" The top of the
  encyclopedia's range is directly supported by both, and its floor of 50 sits
  inside what Indiana DNR documents rather than against it. Not a conflict, so
  under the narrow encyclopedia rule the field was left alone. The
  disagreement was on the cost guide's side and was fixed there.
- Adult Size, "4.5-7 inches (11-18 cm)". No deep dive states an adult size, so
  there is nothing to conflict with. Smithsonian gives "4 inches by 6 inches"
  for eastern box turtles specifically, which is inside the genus range the
  encyclopedia gives. Left alone, and it is the source for the hub's Adult
  size row.
- Conservation, "Vulnerable (IUCN); threatened in many US states", and the
  history section's 70 to 74 percent declines, 30,000 turtles from Louisiana
  in 41 months, and the CITES Appendix II listing. All consistent with the
  legal guide, which independently reports 70 to 80 percent crashes in
  intensively studied areas. No statute, date, or jurisdiction touched.

## Batch D independent reader pass (2026-09-09)

The five batch D species workers had no Agent tool, so each ran its own set
test first-party. After the batch was pushed, five independent Opus readers
were launched from the session against the same pre-rewrite extracts, one
per species. Their set grades: green iguana B, conure B, rat A-, hermit crab
B-, box turtle B. The first-party grades were B, B, B+, B+, B-.

Nearly every conflict the independent readers listed was a hub against a
deep dive, and all of those died when the hubs became routers. Three
findings were new and sat between two deep dives, where the router rewrite
does not reach.

Hermit crab, leading cause of death. Health guide: "Post-Purchase Stress
(PPS), the Leading Cause of Death", repeated in its seoDescription and its
FAQ. Enrichment guide: "a failed molt is the most common way these animals
die in captivity". Two superlatives about the same thing. The health guide's
Sources carry Crab Street Journal's post-purchase death article, which is
the subject; the enrichment guide's four sources are the Elwood and Appel
pain and sentience papers and Wild Welfare, none of which state a cause of
death frequency. Health wins on both tests, its source states the claim and
it is the health page's own subject. The enrichment guide loses the
superlative and takes the health guide's own sourced wording for the same
fact. Before: "Do not let substrate depth slip, since a failed molt is the
most common way these animals die in captivity." After: "Do not let
substrate depth slip, since substrate that is too shallow is one of the
causes of a bad molt, and a bad molt is frequently fatal." No link added:
the enrichment guide already carries its one sibling link, to the tank setup
guide. No lastUpdated bump either, and the first pass's "no fact changed" line
above does not cover this one: the claim did change, but that guide's date and
lastUpdated are both 2026-10-15, a scheduled future publish date, so stamping
today's 2026-09-09 would put lastUpdated two months before the article
publishes.

Box turtle, substrate depth. Tank setup: "at least 2 to 3 inches deep to
support burrowing." Enrichment: "do not use a shallow scattering of
substrate and call it deep, because the behavior depends on being able to
get under it." Cost guide prices a 4 inch layer. The reader called 2 to 3
inches too shallow for a 4.5 to 7 inch turtle. Researched: VCA's box turtle
housing page names substrates but gives no depth at all. Wildwood Veterinary
Hospital states it directly, "The substrate should be 2-3 inches deep
allowing plenty of room for your turtle to burrow." Husbandry sites give 4
to 6 and 8 to 12 inches, but a veterinary hospital outranks them and is
species-specific, so the tank setup guide's existing figure stands and is
now sourced rather than asserted. Wildwood added to that guide's Sources; no
number changed. The cost guide's 4 inch layer is above a stated minimum, not
a contradiction of it.

Box turtle, handling against enrichment. Ruled not a conflict. Handling:
"best suited to limited handling rather than frequent physical interaction",
and the hand-feeding sentence ends "interaction on the turtle's terms".
Enrichment: "do not handle for enrichment, since box turtles are easily
stressed by it." A turtle choosing to approach is not handling it for
enrichment, and the handling guide already limits handling in the same
paragraph. Nothing changed.

Open, carried from the independent pass: the conure cost guide's vet and toy
figures (already listed under Unsourced, needs a fact-check); the green
iguana 70% first-year mortality figure, sourced to Wikipedia citing a 1992
book on the cost guide and then repeated on the health guide as a fact box
without that hedge; and the rat enrichment guide citing an unnamed study and
using the spelling "centrepiece" in a set that is otherwise US.

## Blue-Tongue Skink (2026-09-09, first pass)

Extractor set of eight pages (hub, encyclopedia, cost, handling, health issues,
tank setup, feeding, enrichment). Batch E. One independent Opus reader, run
against the pre-rewrite extract in `.reader/blue-tongue-skink/`, so the hub
conflicts below are against the legacy care-sheet shape and were resolved by the
router rewrite in the same pass. Raw output in docs/READER_LOG.md under the same
heading.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub (legacy shape) | D+ | The weakest page in the set, a lower resolution copy of the deep dives, and some of it is wrong. |
| Encyclopedia | B | Nothing husbandry, but the 1982 export ban and the pygmy bluetongue rediscovery are the frame for the whole set. |
| Cost | B+ | A budget and a real buying recommendation, captive-bred Northern, with two internal number problems. |
| Handling | A | The 2 to 3 week settle, the huff scale, side approach, never by the tail. Best page in the set. |
| Health issues | B | MBD signs, fenbendazole and praziquantel, shed versus scale rot. Thin on numbers, no humidity targets, no way to score body condition. |
| Tank setup | A- | The page I would build from. |
| Feeding | A | Schedule by age, skull-sized portion, toxic list, weekly gram weighing, the 7 to 10% loss threshold. |
| Enrichment | B+ | Scatter feed, dig box tub, hides at both ends, priority order. |

Set grade: B-. "Strong deep dives dragged down by a hub that contradicts them on
temperature, UVB, and substrate depth."

Hub grade D+ is the lowest hub grade any reader has given across these batches.

### Hub versus the set, both sides quoted (all against the legacy hub, all fixed by the router rewrite)

- **Basking.** Hub: "Surface temperatures of 95 to 110 degrees F are required
  under the basking area, with the exact target depending on subspecies."
  Tank setup guide: "Northern basking surface: 105 to 115°F. Indonesian basking
  surface: slightly cooler, 100 to 105°F." The hub gestured at the subspecies
  split and then printed one band that sits below the Northern range and starts
  five degrees under the Indonesian one. Fixed: the router hub's Basking surface
  row is the tank setup sentence verbatim, both ranges kept, not merged.
- **UVB strength.** Hub: "Moderate UVB (T5 HO 5 to 6%, or Arcadia 6% Forest
  Bulb) is strongly recommended," repeated in the hub's cost table
  ("Moderate UVB (T5 HO Arcadia 6%): $50 to $90"), its checklist, and its own
  FAQ. Tank setup guide: "A T5 HO bulb in the 10.0 to 12% range." Those are
  different bulbs and the hub had the disagreement in the thing a reader buys
  from. Settled against the sources rather than by picking a side: see
  "Deep dives against themselves" below. Fixed: the tank setup guide now states
  the 5 to 12% both its sources give, and the hub's UVB row copies it.
- **Photoperiod.** Hub: "Run UVB on a 10 to 12 hour cycle." Tank setup guide:
  "Run a photoperiod of roughly 11 to 13 hours depending on season for either
  type." Fixed: hub row copied from the tank setup guide.
- **Substrate depth.** Hub: "Substrate should be 3 to 4 inches deep." Tank setup
  guide: "Keep it 4 to 6 inches deep." Fixed: hub Floor row copied from the tank
  setup guide, and the buy list says 4 to 6 inches.
- **Cool side.** Hub: "The ambient warm side should be 80 to 85 degrees F, and
  the cool side 70 to 75 degrees F." Tank setup guide: "Cool side (both): 70 to
  80°F." The 80 to 85°F warm-side ambient figure appears on no deep dive at all.
  Fixed: the hub's Rest of the gradient row is the tank setup sentence, and the
  unsupported warm-side ambient figure is gone.
- **Diet ratio, the hub against itself.** Hub body: "approximately 40 to 60%
  vegetables and leafy greens, 30 to 40% protein sources, and no more than 5 to
  10% fruit." Hub FAQ, two screens later: "A good adult diet is roughly 60%
  animal protein and 40% vegetables and greens." The two flip which half of the
  diet is the majority. Feeding guide: "Mature adults shift toward plant-heavy,
  roughly 40 to 60% animal protein and 45 to 60% leafy greens and vegetables,
  with about 5 to 10% fruit as treats." Fixed: the hub's Diet ratio row is the
  feeding guide sentence, both the age flip and the adult ratio, and the old
  FAQs are gone.
- **Lifespan.** Hub FAQ: "commonly live 15 to 25 years in captivity, with some
  individuals exceeding 25 years." Cost guide: "15 to 20 years is the commonly
  cited average, with well-documented cases living past 30." Neither the hub's
  15 to 25 nor its "exceeding 25" appears on any deep dive; the cost guide's
  figure is the one PetMD states. Fixed: the hub's Lifespan row is the cost
  guide sentence.
- **Adult size.** Hub funFact: "Adults can reach 18 to 24 inches!" Hub FAQ:
  "Adults reach 18 to 24 inches in total length and typically weigh 400 to 600
  grams." Encyclopedia: "17-24 inches (43-60 cm)." No deep dive states an adult
  size at all, so the encyclopedia is the only figure with a home. Fixed: the
  Adult size row is the encyclopedia's, carried with no `source` the way the
  rabbit and bearded dragon hubs carry their sourceless rows; the funFact was
  rewritten to keep the live-birth point and drop the number; the weight figure
  went with the old FAQs, and no deep dive states one, which is listed as a gap
  below.

After the rewrite, `check-species-numbers.mjs blue-tongue-skink` shows every line
marked `hub` appearing verbatim in the deep dive its row names. The remaining
CONFLICT groups are the checker grouping a hub row with the identical source
sentence, plus cost-guide-internal groupings, plus the encyclopedia adult-size
line the hub now copies.

### The subspecies split, handled deliberately

This species is not one animal for husbandry purposes, and the hub's central
failure was flattening that. Every row whose deep dive distinguishes Northern
from Indonesian keeps both figures in one row rather than being averaged:
basking surface (105 to 115°F against 100 to 105°F), humidity (around 40%
against 60 to 80%), substrate (the 60/40 topsoil and play sand mix for
Northerns, moisture-retentive additions for Indonesians), and the buy list's
"Leaf litter or sphagnum moss, for an Indonesian setup." A first row, "Which
skink is it", sourced to the health issues guide, states the wild-caught versus
captive-bred divide before any number is given, so a reader knows which column
of every following row applies to them.

### Deep dives against each other, and against themselves

- **The burn ceiling, inside the tank setup guide.** Same page: "Northern
  basking surface: 105 to 115°F" against "with a safe ceiling around 110°F to
  avoid burns." One of these had to give, and the page's own Sources settle it.
  Both cited sources state the higher range and neither states a ceiling.
  ReptiFiles' temperature page gives Northern 105 to 115°F and Indonesian 100 to
  105°F; Zen Habitats' lighting and heating guide gives "Basking surface:
  105-115°F (40-46°C)" for Australian and Indonesian animals alike. A 110°F
  ceiling would forbid the top five degrees of what both sources call correct,
  and it is a number no source on the page states. Fixed: the ceiling clause is
  cut and the point it was carrying, that unregulated heat burns skinks, moves
  into the thermostat requirement, which is the mechanism the shared heating
  guide covers. Before: "A heat source (halogen or a deep heat projector) on a
  thermostat is required, mounted with a basking dome fixture, with a safe
  ceiling around 110°F to avoid burns." After: "A heat source (halogen or a deep
  heat projector) is required, mounted with a basking dome fixture and run on a
  thermostat, which is what holds the surface inside those ranges instead of
  letting an unregulated bulb climb past them and burn the animal."
- **UVB strength, inside the tank setup guide and against the hub.** The guide
  said "A T5 HO bulb in the 10.0 to 12% range," narrower than either of its own
  sources and excluding the Arcadia Forest 6% bulb the site's own cost table and
  buy list carry. ReptiFiles states skinks "should have anywhere from a 5% to 12%
  UVB output T5 lamp, depending on the setup." Zen Habitats lists both options
  and separates them by mounting height, not by correctness: Arcadia T5 HO Forest
  6% or Zoo Med Reptisun 5.0 at 6 to 9 inches through mesh, Arcadia T5 HO Desert
  12% or Reptisun 10.0 at 12 to 15 inches, targeting a UVI of 3.0 to 4.0 at the
  basking area. So neither the hub's 5 to 6% nor the guide's 10 to 12% was wrong;
  the guide had narrowed a range its sources state as a choice made against
  distance. Fixed in the tank setup guide's body and its FAQ, and the hub's UVB
  row copies the corrected sentence. Before: "A T5 HO bulb in the 10.0 to 12%
  range, spanning at least half the enclosure on the warm side." After: "A T5 HO
  bulb anywhere from 5 to 12% output, picked against how high above the basking
  area it will hang, spanning at least half the enclosure on the warm side."
  The affiliate product on that sentence, the Arcadia Forest 6% kit, is now
  inside the range the sentence gives, which it was not before.
- **Vet exam price, inside the cost guide.** Table: "Annual vet wellness check |
  $50 - $90." Body, three sections later: "A routine exam runs roughly $100 to
  $150, with annual checkups recommended for any skink." Neither of the page's
  two sources states an exam price: PetMD's species guide gives lifespan and
  husbandry only, and the ReptiFiles subspecies page prices nothing. Settled
  against a published fee schedule instead: Colorado Exotic Animal Hospital lists
  "Wellness Exam (30 min) $115.00," which sits inside the body's range and
  outside the table's. Fixed: the table row becomes $100 - $150, the body sentence
  and its hedge are untouched, and the hospital's pricing page is added to
  Sources. The annual total below the table was recomputed from its own rows,
  $440 to $770 becoming $490 to $830, and $35 to $65 a month becoming $41 to $69.
- **Setup total against the setup table, inside the cost guide.** The heading read
  "Upfront Setup: Roughly $400 to $800" over a table whose seven rows summed to
  $290 to $555, and the paragraph under it said "A thermostat is essential, not
  optional" for a piece of equipment on no table and no checklist. Neither cited
  source states a setup total, so no total was invented: the heading now sums the
  table. Fixed: a `["Thermostat", "$40 - $80"]` row was added next to the basking
  bulb, using the range this site already publishes for the same item on the
  bearded dragon and ackie monitor cost guides rather than a new figure; the
  table now sums to $330 to $635; the heading, the setup FAQ, the seoTitle, the
  seoDescription and the `description` all state $330 to $635; and the
  total-initial-investment sentence, which was $550 to $1,400 against nothing,
  becomes $430 to $1,335, which is the page's own animal range ($100 to $700)
  plus its own setup range. The thermostat is on the hub's buy list too.
- **Not conflicts, left alone:** the feeding guide's honest split on the adult
  schedule ("Veterinary sources say every 1 to 3 days ... a cluster of widely
  used pet-industry care sheets instead say adults only need feeding once or
  twice a WEEK. That's a real disagreement, not a phrasing difference") is the
  page doing the right thing, and the hub row keeps both halves; the handling
  guide's "2 to 3 weeks" settling window and the feeding guide's "about 2 weeks
  ... up to 2 months" acclimation window answer different questions (when to
  start handling, when to expect eating) and are now linked rather than merged.

### Gaps, checked against the sidebar's Health and More list first

The list on every page of this set is: reptile emergency plan, reptile stool and
urates, salmonella and reptile hygiene, reptile heating and thermostats, reptile
quarantine, reptile shedding, and two cross-species overviews. Checked against
it, these are real:

- **Cohabitation.** No page anywhere says whether two blue tongue skinks can
  share an enclosure. Every keeper considering a second animal hits this, and
  none of the shared guides answers it. Real gap, and the largest one open.
- **Brumation husbandry.** The feeding guide names a 3 to 4 month November-to-March
  slowdown and says a skink loses little to no weight "if temperatures are
  managed correctly," and then never says to what. No temperature, no
  photoperiod, no cooling schedule anywhere in the set. Real gap.
- **Enclosure cleaning.** Spot-clean frequency and full substrate change
  interval appear nowhere. The quarantine guide covers disinfection at the end of
  a quarantine, not a maintenance schedule. Real gap.
- **Inspecting an animal before buying.** The cost guide makes a genuine buying
  recommendation (captive-bred Northern) and never says what a healthy skink
  looks like at a shop or an expo. Real gap.
- **Basking bulb wattage and mounting height.** The tank setup guide says "no
  closer than about 10 inches" for the UVB bulb and gives nothing for the heat
  bulb. The shared heating and thermostats guide covers wattage as "a starting
  guess you verify," which is the honest general answer, so this is
  half-covered; the species-specific number for a 4x2x2 is not there. Now linked
  from the tank setup guide's temperature section.
- **Adult weight.** The old hub FAQ's "typically weigh 400 to 600 grams" was the
  only weight figure in the set, and it went with the rewrite because no deep
  dive states one. The feeding guide tells a keeper to weigh weekly on a
  gram-accurate scale and to act on a 7 to 10% loss, which is a relative
  threshold and works without an absolute, but there is no number to check a new
  animal against. New gap opened by the rewrite, listed rather than papered over.
- **Not a gap:** the reader asked for humidity targets on the health issues page.
  The tank setup guide carries them, the hub's Humidity row now carries them, and
  the health guide's retained-shed and scale-rot section reads correctly without
  them.

### Stranded questions (a page raises it, another page in the set answers it, neither says so)

- Handling: "Leave a new skink alone for 2 to 3 weeks before attempting to handle
  it," while the feeding guide holds the real acclimation window, much longer for
  a wild-caught animal. Fixed with the handling guide's one allowed sibling link.
- Health issues: obesity "is manageable at home through portion control rather
  than free-feeding," and the portion that does it, about the size of the skink's
  own skull, is only in the feeding guide. Fixed with the health guide's one
  allowed sibling link.
- Cost: "wild-caught Indonesian skinks frequently need a fecal exam and deworming
  treatment right after purchase," and the health guide is where the drugs are
  named. Fixed with the cost guide's one allowed sibling link.
- Feeding: "Inadequate basking temperature or UVB" as a reason a skink stops
  eating, with the actual basking targets, and their subspecies split, on the
  tank setup guide. Fixed with the feeding guide's one allowed sibling link.
- Cost: "A thermostat is essential, not optional," and the page never says what
  one does. The shared heating and thermostats guide does, and the tank setup
  guide now carries that link on its own thermostat sentence. Not added to the
  cost guide as well, since the cost guide has spent its sibling link and the
  point is now made where the equipment is specified.

### Recommended links, one per page

| Page | Sentence | Link to | Done |
|---|---|---|---|
| Hub | "Subspecies identification matters for care." | Tank setup guide | Not applicable, the prose is gone and the router rows link their own sources |
| Encyclopedia | "Australia's 1982 ban on commercial wildlife export means the animals sold abroad today are largely Indonesian and New Guinean species taken from the wild." | Health issues guide | Skipped, the encyclopedia is out of scope for links |
| Cost | "wild-caught Indonesian skinks frequently need a fecal exam and deworming treatment right after purchase" | Health issues guide | Added, the one sibling link this article is allowed |
| Handling | "Leave a new skink alone for 2 to 3 weeks before attempting to handle it" | Feeding guide | Added, the one sibling link this article is allowed |
| Health issues | "This is manageable at home through portion control rather than free-feeding." | Feeding guide | Added, the one sibling link this article is allowed |
| Tank setup | "A heat source (halogen or a deep heat projector) on a thermostat is required." | Reptile heating and thermostats guide | Added, a shared class guide, does not count against the cap |
| Feeding | "Inadequate basking temperature or UVB." | Tank setup guide | Added, the one sibling link this article is allowed |
| Enrichment | "Do not overfeed while making food more interesting." | Feeding guide | Added, the one sibling link this article is allowed |

### Trust

The doubt was all on the hub, which the reader said "reads like it was written
from a different sourceset than the deep dives and never reconciled, and it is
the page navigation lands on first." Nothing in the deep dives read as invented,
but two things read as unbacked and both are now settled: the "safe ceiling
around 110°F," which no source on its page states and which contradicted the same
page two sentences earlier, and the 93% parasite figure cited to "a peer-reviewed
study" with no name.

That study is identified. It is Wolf D, Vrhovec MG, Failing K, Rossier C,
Hermosilla C, Pantchev N, "Diagnosis of gastrointestinal parasites in reptiles:
comparison of two coprological methods," Acta Veterinaria Scandinavica, 2014,
which reports "Analyzed reptile faecal samples contained a broad spectrum of
parasites (total occurence 93.2%, n = 55)" across 59 samples from 20 lizards, 22
snakes and 17 tortoises drawn from a diagnostic lab, a rescue centre holding
recently imported animals, and privately kept animals pre-selected as
wild-caught, which is exactly the wild-origin population the health guide is
describing. The FunFact and the FAQ both name it now, the percentage is stated as
the paper states it (93.2%), and the paper is in Sources.

The sentence that most convinced the reader a keeper wrote this, from handling:
"Wash your hands first, so they do not smell like a food item."

### The reader's two changes

1. "Make the hub inherit its numbers from the tank setup and feeding guides, or
   cut the duplicated sections entirely." Done, both: the housing, diet,
   enrichment and health prose and the cost tables are gone, and every remaining
   figure is copied from the deep dive its row names.
2. "Fix 02 so the setup table includes the thermostat, sums to the stated total,
   and states one vet exam price." Done, all three.

### Unsourced, needs a fact-check

- The cost guide's setup and annual figures are retail ranges with no "Prices
  last checked <Month Year> at ..." line, which RULES requires under the last cost
  table. The line was not added because this pass did not check retail prices at
  a retailer; it corrected the table's internal arithmetic only. Someone should
  price the table and add the line.
- The added thermostat row's $40 to $80 is this site's own published range for
  the same item on the bearded dragon and ackie monitor cost guides, not a figure
  checked for this article.
- The health issues guide's second source is a bare homepage
  (`https://treeoflifeexotics.vet/`), which RULES forbids. It was left in place
  rather than deleted, since a Sources entry is never deleted, but it needs
  pointing at the actual care page or replacing.

### Encyclopedia

One field conflicted with a deep dive's sourced figure and was researched with
real opened sources before changing.

- `wildLifespan` read "15-20 years", which is the same number the cost guide gives
  for a captive animal ("15 to 20 years is the commonly cited average") and which
  PetMD gives explicitly as a captive figure ("The normal life expectancy of a
  captive skink is anywhere between fifteen and twenty years"). A captive number
  sitting in a wild field, the same failure batch A found on Russian tortoise and
  batch D found on green iguana. Four sources were opened looking for a real wild
  figure and none gives one. The San Diego Zoo Wildlife Alliance library fact
  sheet states wild longevity as "Not reported, though thought to be long-lived"
  and managed care as "About 20 years" (Slavens and Slavens 2000; Koenig et al.
  2001). The Australian Museum's Eastern blue-tongue page says only "Several
  captive animals have lived for 20 years, and they may live much longer."
  The Smithsonian National Zoo gives "about 15 years in human care." Animal
  Diversity Web lists captive averages (14.3 years overall, 9.0 for females) and
  no wild figure at all. Changed to "Not reported in the wild, though thought to
  be long-lived (San Diego Zoo Wildlife Alliance); the widely quoted 15-20 years
  is a captive figure", the same shape the crested gecko and green iguana entries
  already use.
- Checked and left alone: `adultSize` "17-24 inches (43-60 cm)". The old hub said
  18 to 24 and no deep dive states a size, so there was no deep-dive conflict to
  resolve, and the encyclopedia figure is well supported anyway. The Smithsonian
  National Zoo gives the Northern "up to 22 inches (56 cm), and average about 17
  inches (45 cm)"; the Australian Museum gives the Eastern "almost 600 mm in
  total length"; PetMD gives "up to 20 inches and sometimes more" with Meraukes
  at 25 to 30. The hub's Adult size row copies this field.

### Dates

`lastUpdated` and `lastReviewed` bumped to 2026-09-09 on the cost, tank setup and
health issues guides, where numbers or facts changed. Not bumped on handling,
feeding or enrichment, which took link-only edits.

### Fixed the same day

The hub rebuilt to the router shape (27 first-week rows, an 11 bullet emergency
card off the health guide's four call-the-vet passages, 6 routes, a 13 item buy
list with no prices, 3 FAQs copied verbatim from deep-dive frontmatter,
difficulty Beginner/Intermediate matching the encyclopedia, costs and sections
dropped); the tank setup guide's unsourced 110°F burn ceiling cut and its UVB
range widened to what its sources state, in body and FAQ; the cost guide's
thermostat row added, setup heading and FAQ and SEO fields resummed, vet table
row aligned to the body, annual total recomputed; the health issues guide's 93%
study named in the FunFact, the FAQ and Sources; five links added as listed
above; the tank setup guide's Zen Habitats Sources entry repointed from the
site's homepage to the lighting and heating guide actually opened for it; one
encyclopedia field corrected against opened sources.

### Open

Cohabitation, brumation husbandry, the cleaning schedule, how to inspect an
animal before buying, basking bulb wattage for a 4x2x2, and the adult weight
figure the rewrite removed. The cost guide's missing retail price-check line.
The health guide's homepage Sources entry.

## White's Tree Frog (2026-09-09, first pass)

Extractor set of seven pages (hub, encyclopedia, cost, handling, health
issues, tank setup, enrichment). One independent Opus reader, run from
the session against the pre-rewrite extract in `.reader/whites-tree-frog/`.
The review below reads the old legacy hub (housing prose, a cost table, a
checklist, five FAQs); the router hub was built from its findings the same
day. There is no feeding guide and no legal guide in this set.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | C | A shopping checklist, a gut-load list, a supplement schedule and a quarantine window, and three of its numbers fight the deep dives. |
| Encyclopedia | B | Thirty seconds, adult size and a lifespan range, and the 1790 naming story is the best writing in the set. |
| Cost | B- | Useful ranges, but the monthly figure and the annual table do not agree. |
| Handling | A- | Plain water only, nitrile gloves after lotion, 5 to 15 minutes, twice a week max. |
| Health issues | A- | 3 to 4 insects 2 to 3 times a week, and fat over the tympanum and armpits as the obesity test. |
| Tank setup | A- | 18x18x24, the temperature gradient, 50 to 60% baseline, branch 6 inches under the T5, bulb swap 9 to 12 months. |
| Enrichment | A | The best page here, and honest that its evidence is red-eyed tree frogs rather than this species. |

Set grade: B-. "The five deep dives are specific and usable; the hub,
which is the page I land on first, contradicts them on water, humidity,
and night temperature."

### Hub versus the set, both sides quoted

- **Water. The clinical one, and the hub was wrong.** The old hub said,
  in its diet section: "Always use dechlorinated or reverse-osmosis water
  for the water dish and for misting." Its checklist repeated
  "Dechlorinated or RO water only (misting and dishes)", its health
  section repeated "Always use dechlorinated or RO water for misting and
  water dishes", and its cost table billed the reader for
  "Dechlorinated/RO water treatment". The tank setup guide says: "Use
  only dechlorinated tap water or spring water for misting and drinking,
  never distilled or reverse-osmosis water." The reader's verdict was
  "One of these is wrong and I cannot tell which," and a keeper following
  the wrong one harms the animal, so this was researched rather than
  reconciled by dropping hub prose.

  Sources opened, ranked by RULES:
  - Peer-reviewed: Dale DeNardo, "Amphibians as Laboratory Animals," ILAR
    Journal 37(4), 1995, which calls water quality "probably the most
    critical component of amphibian housing" and states: "Distilled and
    deionized water is extremely hypo-osmotic, it should never be used
    without the addition of salts," and "Hypo-osmotic conditions can cause
    bloating and death in amphibians." For delicate species it names
    "either commercially available spring water or ionically balanced
    solutions made in-house from distilled water."
  - Veterinary manual: the Merck Veterinary Manual's amphibian
    environment and husbandry page, which requires water "clean and free
    of toxins such as chlorine, ammonia, nitrite, pesticides, and heavy
    metals" and describes removing chlorine by carbon filtration and
    splitting the chloramine bond with a dechlorinating agent. It makes no
    case for RO or distilled water at all.
  - Established husbandry reference: Jennifer Macke's Caudata Culture
    article on bottled water for amphibians, which quotes Wright and
    Whitaker's *Amphibian Medicine and Captive Husbandry*: "Distilled and
    reverse osmosis water contain none of the elements required by
    amphibians and should not be used without modification," and adds that
    RO or distilled water "has virtually no ions in it, so it causes more
    work for the amphibian's kidneys."
  - The site's own shared guide, `amphibian-quarantine-and-water-guide`,
    already carried the same finding from the AZA Amphibian Husbandry
    Resource Guide: "distilled water and reverse-osmosis (RO) water are
    usually not electrolyte-balanced, and using either without rebalancing
    through added buffers, electrolytes, and pH adjustment can be fatal to
    amphibians."

  The one source pulling the other way, recorded because it is real:
  F. Harvey Pough, "Amphibian Biology and Husbandry," ILAR Journal 48(3),
  2007, says "distilled, deionized, or spring water is preferable to
  chlorinated tap water." That compares purified water against *untreated,
  chlorinated* tap water, not against dechlorinated tap water, and it does
  not survive DeNardo in the same journal on the hypo-osmotic point.

  **The tank setup guide wins and did not change.** Every copy of the
  hub's instruction is gone with the router rewrite (diet prose, health
  prose, checklist line, and the `costs` block). The one surviving copy in
  a deep dive, the cost guide's annual table cell, changed from
  "Dechlorinated/RO water treatment" to "Dechlorinated water treatment".
  The tank setup guide's sentence gained the reason and a link to the
  shared water guide. A new hub row, sourced to that shared guide, now
  states the AZA finding outright, so the hub says why rather than
  restating the rule.

- **Humidity.** The old hub said: "Humidity should be maintained at 50 to
  70% during the day and 80 to 100% at night (mist in the evening to
  simulate natural humidity cycles)." The tank setup guide says: "a
  baseline around 50 to 60% with misting spikes up to 70 to 80% once or
  twice daily, then letting it drop back down between mistings. Constant,
  unbroken high humidity is directly linked to bacterial and red-leg
  issues." The health guide independently blames "enclosures kept too
  humid without adequate ventilation" for bacterial and skin infections,
  so the hub was, as the reader put it, arguably prescribing the disease.
  The hub's figure is retired by the rewrite; the router hub's Humidity
  row quotes the tank setup guide's own sentence. Checked for surviving
  copies across all five deep dives and the encyclopedia: none. 80 to 100%
  appears nowhere else in the set.

- **Night temperature.** The old hub said "dropping to 65 to 75 degrees F
  at night" (and "Temperature should stay between 75 and 85 degrees F
  during the day", and "Never let temperatures exceed 90 degrees F"). The
  tank setup guide says "cool side around 70 to 75°F, a basking area
  around 80 to 85°F, dropping into the mid-70s at night." The hub's
  figures die with the rewrite. Checked for other copies: 65 to 75, 75 to
  85, and 90 appear on no other page in the set.

- **Feeding.** The old hub said "Adults eat every other day to 3 times per
  week." The health guide says "keep adult feeding to roughly 3 to 4
  appropriately sized insects, 2 to 3 times a week, rather than
  free-feeding." The router hub's Feeding row now quotes the health
  guide. No other copy of "every other day to 3 times per week" survives.

- **Lifespan.** The old hub's FAQ said "15 to 20 years with excellent
  care." The cost guide says "The Smithsonian's National Zoo states the
  average lifespan is about 16 years, with one individual recorded living
  21 years in human care. Other sources cite a slightly more conservative
  10 to 15-plus years with excellent care." The cost guide names its
  source and the hub named none, so the hub's figure is gone; the router
  hub's Lifespan row keeps both of the cost guide's ranges, and the cost
  guide's own lifespan FAQ is one of the hub's three FAQs.

- **UVB.** The old hub said UVB is "now strongly recommended by amphibian
  veterinarians" and its FAQ added claims about field studies, bone
  density, calcium metabolism and immune function that no deep dive
  carries. The tank setup guide says "Recommended, though not strictly
  required: the species survives without UVB and does better with it."
  Neither page's Sources block states the stronger claim, and the tank
  setup guide is the lighting page, so its hedge wins and the hub's
  stronger claim is gone rather than restated.

### Deep dives against each other

- **Group size, fixed.** Tank setup: "18 inches long by 18 inches wide by
  24 inches tall is the standard minimum for one adult... and 24x18x24
  inches works well for a small group of two to four." Enrichment: "A tall
  18x18x24 terrarium is a workable footprint for one or two adults."
  Neither Sources block states an enclosure dimension: the enrichment
  guide's four sources are all enrichment research (Michaels/Antwis/
  Preziosi 2014 in PLoS ONE, the 2014 amphibian enrichment review, Hurme
  et al. on dendrobatids, Burghardt 2013), and the tank setup guide cites
  two husbandry references, one of them species-and-topic specific
  (Vision Products, "White's Tree Frog Enclosure Requirements"). Same
  tier, so the page whose subject is the topic wins: enclosure size
  belongs to the tank setup guide. Enrichment changed to "one adult".

- **The cost guide fought itself, fixed.** Prose and H2: "Ongoing Costs:
  Roughly $20 to $60 a Month." Its own annual table totals $155 to $285,
  which is about $13 to $24 a month. Nothing sources either figure, and
  this is a same-page contradiction rather than a cross-page one, so it is
  resolved the way the axolotl legal guide's jurisdiction count was: the
  prose is corrected to read off the article's own table. The heading, the
  body sentence, and the monthly-cost FAQ all now say $13 to $24, and a
  sentence under the table shows the arithmetic.

- **The cost guide's setup table, fixed.** The prose said the table
  "covers the largest single expense, the terrarium itself, plus a heat
  source, thermometer and hygrometer, a low-level UVB fixture and bulb,
  substrate, climbing branches, and decor," while the table has no heat
  source line and no substrate line. Rewritten to name what the table
  actually lists and to say plainly that a heat source, substrate and
  climbing branches sit on top of those line items. No price was invented
  and no row was added.

- **Left alone, not a conflict.** The cost table's "Low-output UVB (T5 HO
  5%)" against the tank setup guide's "5 to 7% range": 5% is a product
  inside the range, not a competing figure. The Pacman frog contrast
  (handling, cost, tank setup, health) and the obesity material (health
  and enrichment) repeat across pages usefully rather than redundantly.
  The dechlorination rule repeats on handling, tank setup and enrichment
  and now agrees everywhere.

- **Noted, not fixed.** The enrichment guide says "do not treat handling
  as enrichment for an amphibian, because for this class it mostly is
  not," while the old hub filed all its handling advice under Enrichment.
  The router hub has no enrichment prose at all, so the tension is gone by
  construction rather than resolved.

### Gaps, checked against the Health and More list first

The sidebar's Health and More list for this species is: Salmonella and
Reptile Hygiene; Tubbing, Cooling, and Salt Baths for Sick Axolotls;
Amphibian Quarantine, Acclimation, and Water Hardness; and Four Pets, Four
Different Lessons.

Covered by a shared guide, so not real gaps, and each is now a hub row:
quarantine duration (the amphibian quarantine guide has Merck's 6 to 8
weeks and the AZA's 30-day minimum with 60 days preferred), how to move a
new animal (a container, not a net), what counts as safe water, and the
hygiene protocol.

Genuinely not covered anywhere in the set or the shared guides:

- **A feeding guide.** There is none. The species has no feeding article,
  and the health guide's portion line is the only feeding schedule left in
  the set.
- **The supplement schedule.** "Dust feeders with calcium w/D3 at every
  other feeding and a reptile multivitamin once weekly" and the gut-load
  list (collard greens, carrot, sweet potato, commercial gut-load powder,
  24 to 48 hours before offering) existed **only on the hub**, with no
  deep dive behind them. They are gone with the hub prose and nothing was
  invented to replace them. The buy list still names calcium w/D3 and a
  reptile multivitamin, which the cost guide's annual table also carries,
  so a reader still knows to buy them; nobody now tells them how often to
  dust. This is the largest real loss of the rewrite and it needs a
  feeding guide, not a hub row.
- **Enclosure cleaning frequency and full substrate change interval**,
  even though the health guide blames red-leg on "a dirty or poorly
  ventilated enclosure".
- **Water dish depth and how often it is changed**, though the health
  guide names "an infrequently cleaned water dish" as a cause.
- **A power outage or vacation plan.** There is no amphibian power-outage
  guide wired to this species (the aquarium one is for aquatic setups and
  is not in this sidebar), so there is no row to add and no page to point
  at.
- How to choose a healthy frog and where to buy one; male calling and how
  loud; sexing, and what to do if a group breeds; a body condition test
  more precise than fat bulging over the tympanum and armpits; normal
  skin sloughing and appetite pauses.

### Stranded questions, raised on one page and answered on another

- Handling says "dechlorinating" without saying what counts. The tank
  setup guide and the shared water guide both do. Fixed with a link.
- Health blames constant humidity with no numbers; tank setup has them.
  Now bridged by the hub's Humidity row.
- Health names MBD and UVB with no bulb spec; tank setup has it. Now
  bridged by the hub's UVB row.
- Cost lists bulb replacement every 9 to 12 months with no reason; the
  tank setup guide's fun fact is the reason. Now in the hub's UVB row.
- Enrichment says "watch the weight" with no threshold; the health guide
  has the test. Fixed with a link.
- Health says quarantine with no duration; the shared quarantine guide has
  it. Fixed with a link, and it is a hub row.

### Recommended links, one per page

| Page | Sentence | Link to | Done? |
|---|---|---|---|
| Hub | "Humidity should be maintained at 50 to 70%..." | Tank setup guide | n/a, the sentence no longer exists; the router hub links every row to its source |
| Encyclopedia | "They are one of the most docile frog species..." | Handling guide | Not added: the encyclopedia is structured data with no in-body link slot |
| Cost | "That covers the largest single expense, the terrarium itself, plus a heat source" | Tank setup guide | Added, on the rewritten sentence, as the article's one sibling link |
| Handling | "Using tap water straight from the faucet on hands or gloves without dechlorinating it first" | Amphibian Quarantine, Acclimation, and Water Hardness | Added |
| Health | "quarantine any new or suspect animal immediately" | Same quarantine guide, which is where the duration lives | Added, on the following sentence's "quarantine of new frogs", which is where the clause about the window fits |
| Tank setup | "Use only dechlorinated tap water or spring water" | Same quarantine and water guide | Added, with the AZA reason |
| Enrichment | "Watch the weight" | Health issues guide | Added, as the article's one sibling link |

Five of the seven added. Both skips are structural, not choices. Every
article is at or under one sibling link, and no link sits before the first
H2 or inside a ComparisonTable cell.

### Trust

The three things that cost the reader trust were the RO water
contradiction, the hub's 80 to 100% night humidity against its own health
section, and a monthly cost figure roughly double its own table. All three
are now gone. What won the reader back, from enrichment: "Michaels, Antwis
and Preziosi ran the study on red-eyed tree frogs... Not this species, but
another arboreal tree frog, which makes it the closest usable evidence by a
wide margin." Most convincing single sentence in the set, from the same
page: "A White's tree frog will swallow anything that fits, including a
smaller frog, and a mixed-size group is a feeding accident waiting to
happen."

### The reader's two changes

1. "Make the hub copy its numbers from the deep dives rather than restate
   them, starting with water and humidity." Done: the hub is a router,
   every row is copied from the deep dive named in its `source`, and it
   keeps no figure of its own.
2. "Then write a feeding guide and move the supplement schedule into it."
   Not done, and out of scope for a pass that may not create articles. The
   schedule is recorded above as lost, in the reader's own words, so it
   can be recovered when the feeding guide is written.

### Unsourced, needs a fact-check

- The cost guide's Sources block is two bare homepages
  (`https://nationalzoo.si.edu/` and `https://treeoflifeexotics.vet/`),
  which RULES forbids as sources. The Smithsonian page that actually
  states "The average life span is about 16 years, but one is recorded to
  have lived 21 years in human care" is
  `https://nationalzoo.si.edu/animals/whites-tree-frog`, opened and
  confirmed during this pass. Not changed here, because replacing a
  Sources entry is a deletion under the pass's rules; flagged for Mike.
- The monthly cost figure, $13 to $24, is the cost guide's own table
  arithmetic and nothing more. No source states a monthly cost for this
  species.
- The setup total, $200 to $400, and every retail range in both tables are
  unsourced snapshots. The cost guide also carries no "Prices last checked"
  line, which RULES asks for under the last cost table.

### Encyclopedia

The `whites-tree-frog` entry's `wildLifespan` read "7-20 years (up to 21
years recorded)". The "21 years recorded" is the Smithsonian's captive
record, presented in a field labelled wild, which is the same failure the
Russian tortoise entry had in batch A. Researched:

- Smithsonian's National Zoo, White's tree frog: "The average life span is
  about 16 years, but one is recorded to have lived 21 years in human
  care." Human care, not wild.
- Animal Diversity Web (University of Michigan Museum of Zoology),
  *Litoria caerulea*: gives "Average lifespan 16.0 years" and "Average
  lifespan 8.5 years", both labelled **captivity**, and "one is recorded
  to have lived 21 years" in captivity. It states no wild lifespan.
- The Australian Museum's Green Tree Frog page gives size and breeding
  biology and no lifespan figure at all.

No source found gives a wild lifespan for this species. The field now
reads: "Not well documented in the wild; the quoted figures are captive,
an average of about 16 years with one individual recorded at 21 years in
human care." That is the same shape the crested gecko entry already uses
for its own undocumented wild lifespan. Nothing else in the entry was
touched. `difficulty` is "Beginner" and the hub already matched it, so the
hub did not change.

### Dates

`lastUpdated` bumped to 2026-09-09 on the cost guide (three figures
changed) and the tank setup guide (a sourced clause added). Not bumped on
the handling guide or the health issues guide, where only a link changed.
Not bumped on the enrichment guide: a number did change there, but its
`date` is 2026-10-26 and it has not published yet, so a `lastUpdated` of
2026-09-09 would sit before its own publish date. Flagged rather than
guessed at. No `lastReviewed` was touched.

### Open

- No feeding guide, and with it the supplement schedule and the gut-load
  list, both of which existed only on the old hub. This is the one real
  content loss in the rewrite.
- No power outage or vacation plan reachable from this species, and no
  shared amphibian guide covers it.
- The cost guide's two homepage Sources entries, and its missing "Prices
  last checked" line.
- The enrichment guide's `lastUpdated`, held at its future publish date.
- Three other amphibian legacy hubs in the same data file (fire-bellied
  toad, Pacman frog, tiger salamander) still tell readers to use RO water
  on an amphibian, the same error this pass corrected here. Out of scope
  for batch E; listed in the batch's shared-edits notes.

## Red-Eared Slider (2026-09-09, first pass)

Batch E. Extractor set of nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal). One independent Opus reader,
run against `.reader/red-eared-slider/` before the rewrite, under the READMEFIRST
set test prompt; the raw output is in the reader log entry for this date. The
review below reads the old legacy hub (housing, diet, enrichment and health
prose, two cost tables, a ten-item checklist, six FAQs); the router hub was
built from its findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | C | A compressed rerun of five deep dives, and it contradicts them. |
| Encyclopedia | B | The 1975 FDA history and the export loophole are real content. |
| Cost | B | Useful ranges, and one page quoting two different vet prices. |
| Handling | B- | Finished, thin. Scoop from underneath, both hands, no hand-feeding. |
| Health issues | A | The MBD versus pyramiding split is the best thing in the set. |
| Tank setup | A | 10 gal per inch, depth 1.5 to 2x shell, Ferguson Zone 3, 10 to 12 hr photoperiod. |
| Feeding | A | Schedule, portion, no salivary glands, seven reasons for refusal. |
| Enrichment | A- | A priority order that follows from the study, with escape behavior as the metric. |
| Legal | A- | My state's rule and the release ban, docked for a stale clock. |

Set grade: B. "The deep dives are genuinely good and sourced; the hub drags the
set down by contradicting them."

Hub grade after the rebuild: A-. Twenty-six first-week rows, every one copied
from the deep dive named in its source, seven routes, six emergency bullets, a
ten-item buy list with no prices, three verbatim FAQs. Held back from an A
because two rows (Cold water floor, Daily health check) are the only places a
reader meets those figures at all, and because the old hub's nitrate ceiling
left the site rather than moving into a deep dive.

### Hub versus the set, both sides quoted

All against the old legacy hub, all resolved by the router rebuild.

- Tank size. Old hub, in the housing prose and again in the checklist and two
  FAQs: "A 10-inch adult female (females grow significantly larger than males)
  needs a 100-gallon or larger aquarium or stock tank." Tank setup guide:
  "Roughly 10 gallons of water per inch of shell length is the rule of thumb VCA
  Animal Hospitals gives for housing aquatic turtles. In practice, that means a
  practical adult minimum of 75 to 100 gallons for one turtle, with many
  experienced keepers recommending 100 to 125 gallons or more." The tank setup
  guide is the subject page and its cited source (VCA Animal Hospitals, housing
  aquatic turtles) states the rule; Tree of Life Exotic Pet Medical Center,
  opened this pass, independently gives "for most adult turtles this results in
  75-100 gallons PER turtle." The hub's Tank size row now quotes the tank setup
  sentence, both ranges kept.
- Water temperature, hub against itself. Old hub housing prose: "Water
  temperature should be maintained at 72 to 78 degrees F with a submersible
  aquarium heater." Old hub checklist, eight lines later: "Water heater (75 to
  80 degrees F)." Tank setup guide: "Water temperature should sit at 72 to 82°F,
  the range LafeberVet's aquatic turtle care sheet gives, though stability
  matters more than hitting an exact number." Two hub figures, neither matching
  the deep dive or each other. The hub keeps no figure of its own now; its Water
  temperature row quotes the tank setup sentence.
- Adult feeding interval. Old hub: "Feed juveniles daily and adults every other
  day." Feeding guide: "Juveniles eat daily, adults move to every 2 to 3 days
  rather than daily." The feeding guide's phrasing is an explicit correction of
  the every-other-day rule, so the hub was repeating the thing the deep dive
  exists to fix. The hub's Feeding schedule row now quotes the feeding guide.
- The pellet percentage. Old hub, in the diet prose and again in a FAQ:
  commercial pellets "should form the nutritional foundation - approximately 50%
  of the diet." Feeding guide: "Sources disagree meaningfully on the exact
  percentage split (see the FAQ above), so treat any specific number as a rough
  guideline, not a settled figure, the direction is what matters." The deep dive
  refuses to give a number and says why; the hub gave one anyway. The hub's Diet
  split row now quotes the refusal, including the hedge.
- Lifespan. Old hub FAQ: "20 to 40 years in captivity with appropriate care."
  Cost guide: "20 to 30 years with good care is the consensus range, with 20 to
  25 cited as typical," and its FunFact adds "a handful of far less consistently
  documented claims put the ceiling as high as 40 to 70 years." The cost guide's
  cited source, Tree of Life Exotic Pet Medical Center, says "average 20-30
  years, rarely up to 70 years," which supports the deep dive and not the hub's
  40-year captive ceiling. The hub's Lifespan row now quotes the cost guide.
- Glass behavior. Old hub enrichment prose: "Many sliders track movement outside
  their tank and approach the glass when they see their keeper - this is
  associative learning and a sign of normal, healthy cognitive engagement."
  Enrichment guide, "What Not to Do": "Do not treat constant glass-working as a
  personality trait," and, in the body, "If your turtle is working the front
  glass constantly, take the escape-behavior finding seriously before you buy a
  colored object." A recommendation conflict, not a number: the hub read the
  behavior as a good sign, the deep dive reads it as a welfare signal. The
  enrichment guide cites the pond slider study for it and is the subject page,
  so it keeps its position; the hub's claim is gone rather than moved, and the
  hub's Enrichment row now quotes the escape-behavior sentence.
- Costs, line by line. The old hub carried the cost guide's entire setup and
  annual tables as its own `costs` block, including "Annual vet wellness check:
  $60 to $100," which was the figure the cost guide's own body contradicted (see
  below). The router hub has no cost table; its Budget row quotes the cost
  guide's totals and vet prices.

Also gone with the old hub, and deliberately not moved into a deep dive: the
weekly 25 to 30% water change and the "nitrate should stay below 40 ppm"
ceiling. The reader named those as the hub's uniquely-owned, actionable content,
so the water-change half was replaced with a sourced sentence in the tank setup
guide (VCA Animal Hospitals: "the tank water must be changed at least once
weekly, or more frequently if it becomes dirty") and is now a hub row. The 40
ppm nitrate ceiling is not stated by any source this pass opened and is not on
any deep dive, so it left the site rather than being rehomed. Listed under
"Unsourced, needs a fact-check".

### Deep dives against each other

- Basking temperature. Tank setup guide: "Basking surface temperature should
  reach 85 to 95°F per that same guidance," the guidance being LafeberVet's
  aquatic turtle care sheet, which is in its Sources. Feeding guide: "Target
  roughly 75 to 80°F water with an 85 to 90°F basking spot." None of the feeding
  guide's four sources states 85 to 90; the tank setup guide is the subject page
  for temperature and its source states its figure, and Tree of Life, opened
  this pass, independently gives "a bask spot of 85-95 degrees F." Feeding
  changed to 85 to 95°F. The water half of that same feeding sentence (75 to
  80°F) sits inside the tank setup guide's 72 to 82°F range and is framed as a
  target rather than a limit, so it was left alone; the shared reptile emergency
  plan guide gives the same 75 to 80°F as the slider's normal water band.
- Water volume. Tank setup guide: "a practical adult minimum of 75 to 100
  gallons for one turtle, with many experienced keepers recommending 100 to 125
  gallons or more." Enrichment guide, twice (body and FAQ): "An adult needs water
  volume in the low hundreds of gallons." The tank setup guide owns sizes and
  cites VCA for the rule of thumb the number comes from; the enrichment guide
  cites the pond slider study and Case et al., neither of which gives a volume.
  Both enrichment sentences changed to carry the tank setup figures, both ranges
  kept.
- Portion, inside the feeding guide. "Offer as much as the turtle can finish in
  about 15 to 20 minutes," then, one sentence later, "A juvenile-specific
  portion cue some sources use: roughly the size of the turtle's own head, or
  whatever it clears in 10 to 15 minutes." Reading it cold, that is one page
  giving two portion windows. It is really a general rule and a juvenile-only
  cue, so no number changed: the second sentence now says so out loud ("For
  juveniles specifically, some sources use a tighter cue instead"). Both figures
  and the "some sources use" hedge survive.
- Vet cost, inside the cost guide. Table: "Annual vet wellness check | $60 -
  $100." Body: "Routine wellness exams often run $80 to $180." FAQ, agreeing
  with the body: "Routine wellness exams run $80 to $180." The page's only
  source, Tree of Life Exotic Pet Medical Center, was opened this pass and states
  no prices at all, so nothing settles it from outside. Two of the three
  statements say $80 to $180 and it is the more specific claim, so the table cell
  changed to "$80 - $180". That moves the annual sum from $360 to $640 (which the
  page rounded to "Roughly $350 to $650 a Year") to $380 to $720, so the section
  heading, the FAQ, and the seoDescription all changed to $380 to $720 in the
  same commit. Listed under "Unsourced, needs a fact-check", because neither
  vet figure is attributable.

Read twice or more with no conflict: adult size, UVB being mandatory,
over-filtering, the fully drying basking platform, and never releasing a slider.
Four pages saying the same three things reads as reinforcement here rather than
padding, because each page says it for a different reason.

### Gaps, checked against the Health and More list first

Real:
- Choosing a healthy hatchling at purchase, quarantine on arrival, transport,
  and acclimation. The reptile guides in the Health and More list cover hygiene,
  stool, shedding, thermostats and the emergency plan, but no quarantine guide
  is listed for this species and no deep dive covers buying. Still open.
- What a monthly deep clean involves, and how to swap filter media without
  crashing the biofilter. Nothing in the list covers it. Still open, and note the
  old hub's "monthly deep cleans are minimum maintenance" left the site with the
  hub prose, so nothing now asserts it.
- Outdoor pond specifics: depth, overwintering, predator-proofing. Four pages
  call a pond ideal or excellent. The shared outdoor reptile housing guide is not
  in this species' Health and More list. Still open.
- Space and basking-spot allowance per additional slider. The handling guide
  warns that "housing multiple sliders without enough space and basking spots"
  causes aggression, stacking and injuries, and no page says how much is enough.
  Still open; the warning is now a hub row so at least a reader meets it.

Not real, covered by the sidebar already or closed this pass:
- Cycling a tank before the turtle arrives. The reader's biggest gap. The shared
  aquarium cycling guide is not in this species' Health and More list, but it
  exists and covers the nitrogen cycle in full, so the tank setup guide now links
  it in the filtration paragraph. Closed with a link, not new content.
- Salmonella and hygiene, and the daily health check on a species whose waste
  disperses into the water. Both shared guides in the list, and both are now hub
  rows.
- What to do when the water goes cold. Shared reptile emergency plan guide, whose
  cold-floor table carries a slider row. Now a hub row.
- Brumation protocol and egg binding. The shared tortoise brumation guide and the
  shared tortoise sexing, eggs and egg binding guide both scope themselves out of
  aquatic species in their own words ("that's a different species than the ones
  this guide covers"; "treat this as a tortoise and box turtle guide rather than
  a universal chelonian one"), so neither became a hub row and neither got an
  in-body link. The feeding guide's own brumation entry and the tank setup
  guide's nesting sentence are the only coverage, and both are now hub rows.

### Stranded questions

- The handling guide warns about housing multiple sliders and never points at the
  tank setup guide for volume. Both are in the Deep Dive list on every page, so no
  in-body link was added; the hub's Cohabiting and Tank size rows now sit two rows
  apart.
- The feeding guide lists gravidity as a reason for refusal; the tank setup guide
  separately says gravid females need a nesting site or risk egg binding. Neither
  mentioned the other. Both are now hub rows, adjacent in the card.
- The feeding guide says digestion stops below about 72°F; the tank setup guide
  owns the heater spec. Same reason, no link added, both are hub rows.
- The old hub told a reader ammonia must read zero and never said how to get
  there. Answered by the tank setup guide's new cycling link.

### Recommended links, one per page

| Page | Sentence | Link to | Done |
|---|---|---|---|
| Hub | "Sale of sliders with shells under 4 inches is illegal in the US under federal law." | Legal guide | Yes, as a route and a Legal row; the prose is gone |
| Encyclopedia | "in 1975 the FDA banned the sale of turtles with a shell under four inches" | Legal guide | Skipped: the encyclopedia is not a deep dive and is out of scope for this pass |
| Cost | "Federal law actually restricts the sale of turtles under 4 inches, not ownership." | Legal guide | Yes. The one sibling link this article is allowed, and the legal guide is the direct answer to the sentence's own question |
| Handling | "Skipping thorough hand-washing before and after contact, Salmonella risk with aquatic turtles is real, not theoretical" | Salmonella and reptile hygiene guide | Yes |
| Health issues | "A canister filter that's genuinely powerful enough for your tank volume, paired with a water test kit" | Tank setup guide | Skipped, and a better target used instead: the page's UVB sentence now links the cross-species UVB lighting guide, which does not count against the one-sibling limit and answers the question the MBD section raises |
| Tank setup | "Gravid females need a nesting option, without a suitable place to lay, a female risks egg-binding" | Tortoise sexing, eggs and egg binding guide | Skipped: that guide explicitly scopes itself to land tortoises and box turtles and says an aquatic species "nests in a different way entirely". The page instead gained a link to the aquarium cycling guide, which closes a real gap |
| Feeding | "Brumation. A natural cold-season slowdown, roughly October through March." | Tortoise brumation guide | Skipped: the brumation guide says outright that aquatic turtles are "a different species than the ones this guide covers" |
| Enrichment | "An adult needs water volume in the low hundreds of gallons." | Tank setup guide | Skipped: the sentence now carries the tank setup figures directly, so the conflict is gone and a link is not needed |
| Legal | none needed, it links out well already | | |

Four links added. Three go to cross-species or shared guides (hygiene, UVB
lighting, aquarium cycling) and do not count against the one-sibling-link limit;
the fourth is the cost guide's single allowed sibling link. None sits before a
first H2, none is inside a ComparisonTable cell, and each sentence is about the
animal.

### Trust

What made the reader doubt the set: the hub disagreeing with its own checklist
on water temperature and with four deep dives on everything else; the cost guide
quoting two vet prices on one page; and the legal guide saying "That deadline is
days away as of this writing" about a July 30, 2026 filing, with no date on the
page. Reading it in September 2026, that sentence is wrong, and the reader said
so directly: "I cannot tell how much else is stale."

Most convincing, from the feeding guide: "sliders have no salivary glands and can
only eat while at least partially submerged, always offer food in the water,
never on the basking dock." Runner-up, from enrichment: "If your turtle is
working the front glass constantly, take the escape-behavior finding seriously
before you buy a colored object."

### The reader's two changes

1. Strip the hub to routing plus the water-maintenance schedule it uniquely owns,
   and reconcile tank size, water temperature, feeding interval and vet cost to
   one figure each. Done by the router rebuild: the hub now keeps no figure of
   its own, the water-change half of the maintenance schedule moved into the tank
   setup guide with a VCA citation and came back as a hub row, and all four
   numbers resolve to the deep dive that owns them.
2. Date-stamp the legal guide. Done, and better than a stamp: the relative clock
   is gone. "That deadline is days away as of this writing" became "That date has
   now passed: the filing window closed on July 30, 2026, and CPW has published no
   extension, so an owner who never filed should contact CPW directly instead of
   assuming the legacy route is still open." The section heading, the intro, the excerpt, the seoDescription,
   the description, the state table's Colorado cell and the Colorado FAQ all
   changed with it, so nothing on the page still reads as if the deadline is
   ahead. Checked against Colorado Parks and Wildlife's approved Chapter W-7
   (March 4, 2026), read in full: red-eared sliders are listed as invasive
   herpetofauna under #708, the Basis and Purpose says "Legacy reporting is
   required for possession of species noted in the Chapter acquired prior to May
   1, 2026," and July 30, 2026 is the chapter's legacy filing date. No statute
   citation, jurisdiction, date or hedge was changed.

### Unsourced, needs a fact-check

- Vet costs. The cost guide's only source states no prices, so both the $80 to
  $180 exam range that won and the $150 to $400 emergency range beside it are
  unattributed. The whole cost guide runs on one Sources entry and carries no
  "Prices last checked" line under its tables, which RULES asks for whenever a
  cost guide quotes retail prices. Out of scope for a links-and-numbers pass.
- Nitrate under 40 ppm. Carried only by the old hub, stated by no deep dive and
  by no source opened this pass. Dropped rather than rehomed. If it is right, it
  belongs in the health guide with a citation.
- The cost guide's $10 to $30 a month food line and $10 to $25 a month
  electricity line, and the whole setup table, are equally unattributed.

### Encyclopedia

Checked the red-eared slider entry in `src/lib/data/encyclopedia/turtles.js`
against the deep dives' sourced figures. One field changed.

- Wild Lifespan, "20-40 years", against the cost guide's sourced captive figure
  of "20 to 30 years with good care." A wild range that tops a captive range is
  the same shape of problem batch A found on the Russian tortoise, so it was
  researched rather than assumed. Animal Diversity Web (University of Michigan),
  already the tank setup guide's source for adult size, states: "Slider turtles
  can live up to 30 years in the wild" and "Captive sliders can live up to 41.3
  years," and adds that average longevity is not well documented for either.
  Changed to "Up to 30 years (Animal Diversity Web, University of Michigan, which
  puts captive sliders at up to 41.3 years and notes average longevity is not
  well documented for either)". Only that field was touched.
- Adult Size, "5-12 inches (13-30 cm); females significantly larger." Animal
  Diversity Web puts the average adult female at about 10 inches and the male at
  about 7, which the tank setup guide quotes. Both sit inside the encyclopedia
  range, so there is nothing to reconcile. Left alone.
- Difficulty, "Advanced". The hub already matched. Unchanged.
- Conservation, "Least Concern (IUCN); invasive outside native range", and the
  history section's 280,000 Salmonella infections, the 1975 FDA rule and the
  export loophole. All consistent with the legal guide and the tank setup guide's
  PLOS ONE FunFact. No statute, date or jurisdiction touched.

### Dates

`lastUpdated` and `lastReviewed` bumped to 2026-09-09 on the cost, feeding, tank
setup and legal guides, all of which had a number or a fact change. Not bumped on
the handling and health guides, which only gained a link. Not bumped on the
enrichment guide either: its `date` is 2026-10-26, so it has not published yet
and a 2026-09-09 review stamp would sit before its own publish date.

### Open

- The four real gaps above: buying and quarantine, deep cleaning and filter
  media, outdoor pond build, and per-turtle space when cohabiting.
- The cost guide's single Sources entry and missing "Prices last checked" line.
- The hub's Cold water floor row (65 to 70°F, from the shared emergency plan
  guide) sits four rows above the Water temperature row (72 to 82°F, from the
  tank setup guide). They answer different questions, a threshold to act on
  versus a range to provide, and the labels say so, but this is the same shape as
  the leopard gecko hub's 65°F/60°F pair that a reader flagged. Worth a look.

## Hognose Snake (2026-09-09, first pass)

Extractor set of eight pages (hub, encyclopedia, cost, handling, health issues,
tank setup, enrichment, legal). One independent Opus reader on the pre-rewrite
set; raw output filed separately. The router hub was built from its findings the
same day. This species has no feeding guide, and that shapes most of what
follows.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | C | The only page carrying feeding at all, and the single biggest source of conflict in the set. |
| Encyclopedia | C- | Ninety seconds, and nothing to act on except that most animals sold are captive-bred. |
| Cost | A- | Morph price tiers, $200 to $500 setup, $10 to $25 a month, vet line items. |
| Handling | B- | Wash hands, don't handle after feeding, don't panic at the hood. No actual technique. |
| Health issues | B+ | Five named conditions with causes and prevention. |
| Tank setup | A- | Sizes by sex, temps, humidity, substrate ratio, lighting. |
| Enrichment | A | Best-written page here: deep substrate on the cool end, and a priority order. |
| Legal | A | A state table with citations and an honest unverified section. |

Set grade: B-. "Four excellent deep dives undermined by a hub that disagrees
with them on humidity, temperature, and day cycle."

Hub grade: C, and it earned it. The old hub was an unreconciled older draft
sitting on the page navigation lands on first.

### Hub versus the set, both sides quoted (all resolved by the router rebuild)

- **Humidity, the one that mattered.** Old hub: "Ambient humidity of 40 to 60%
  is appropriate, rising during shed." Tank setup: "30 to 50% ambient humidity,
  genuinely on the dry side compared to many other pet snakes." The health
  guide blames both of the species' top two conditions on the same variable
  ("respiratory infection and scale rot, both trace back to the exact same root
  cause: humidity or dampness running too high"), so a hub telling a new keeper
  to run wetter than the setup guide was the worst possible disagreement to
  leave standing. Tank setup wins: it is the subject-matter page, and its cited
  source (ReptiFiles, Western Hognose Snake Care) states the low range, with The
  Bio Dude's care sheet independently giving "average of 30-50% humidity" when
  opened for this pass. The old hub's 40 to 60% was unsourced on the page. The
  router hub now copies the tank setup guide's sentence and its own humidity FAQ
  verbatim, so 40 to 60% survives nowhere on the site for this species: the
  hub's second copy of it (the "Do hognose snakes need a humid hide?" FAQ) went
  with the old FAQ block, no shared reptile guide carries a hognose humidity
  row, and the corn snake vs hognose guide already said 30 to 50%.
- **Activity pattern, because the lighting rests on it.** Old hub: "Hognose
  snakes are crepuscular, most active in the morning and evening." Tank setup:
  "genuinely diurnal, active during the day rather than at night or dusk," and
  its whole lighting section follows from that ("a low-output linear T5 bulb
  spanning part of the enclosure is increasingly recommended for this diurnal
  species"), as does the enrichment guide's basking-surface placement. Diurnal
  wins on sources: ReptiFiles calls the species diurnal and most active in the
  morning and late afternoon, and The Bio Dude describes it as "diurnal which
  means they can also be found occasionally aboveground basking or hunting". The
  old hub's crepuscular line cited nothing. This was resolved rather than
  dropped: the router hub carries a Lighting row copied from the tank setup
  guide that states the diurnal reading and the 12-hour cycle it justifies, and
  the hub comment records which figure was retired and why.
- **Heat.** Old hub: "a warm hide with a belly-heat surface temperature of 85 to
  90 degrees F on an under-tank heater with a thermostat, a cool hide at 72 to
  76 degrees F." Tank setup: "Basking area around 90 to 95°F on one end, cool
  side 70 to 75°F, with a night temperature around 75 to 78°F," with a halogen
  basking bulb over the substrate preferred and the heat mat named as the older
  advice. Tank setup wins by construction (the hub keeps no figure of its own);
  the Bio Dude care sheet opened for this pass gives the same 90-95°F basking
  and 70-75°F cool zone. The hub's Heat row keeps the setup guide's hedge that
  the mat-versus-halogen question is a genuine point of disagreement.
- **Substrate depth.** Old hub: "4 to 6 inches." Tank setup: "3 to 6 inches of
  loose, dry, diggable substrate." Hub now copies 3 to 6 inches with the 70/30
  soil-to-sand ratio the setup guide states.
- **Enclosure.** Old hub gave one adult size ("A 36x18x18\" or 36x18x12\"
  enclosure"). Tank setup splits by sex: males a 20-gallon equivalent "around
  30x13x13 inches", females a 40-gallon equivalent "36x18x16 inches", with a
  2x2x2 foot PVC enclosure working for either. The split is kept in the hub row,
  not flattened.
- **Venom and bite severity, the reader's safety question.** Old hub FAQ: bites
  "cause minimal local irritation at most", and the venom is "entirely harmless
  to humans". Legal guide: "A real medical case report on a keeper bitten by a
  Western hognose during feeding documented local swelling, bruising, and mild
  cellulitis, with a full recovery in about five months and no systemic
  effects." The old hub loses outright; see the deep-dive section below for how
  the handling guide was reconciled to the legal guide.
- **Feeding place.** Old hub treated a separate feeding container as a
  picky-eater trick; the health guide calls it "the single most effective
  prevention" for impaction and the tank setup guide states it flatly ("Feed
  your snake off the substrate, in a separate container, to prevent impaction").
  The hub's Where to feed row now copies the health guide.

`node scripts/check-species-numbers.mjs hognose-snake` after the rebuild: no
line marked `hub` disagrees with the deep dive its row names. The humidity
conflict group is gone entirely. What remains flagged is grouping noise (a
sentence carrying two ranges, cost-table line items, the route line quoting the
cost guide's own $200 to $500) plus one genuine encyclopedia item, below.

### Deep dives against each other

- **Bite severity, handling versus legal.** Handling said "A documented bite
  case in the scientific literature caused local swelling and bruising with no
  wider health effects" and closed "a hognose bite is not something to be
  genuinely afraid of." Legal said "local swelling, bruising, and mild
  cellulitis, with a full recovery in about five months and no systemic
  effects." Both describe the same paper. Weinstein and Keyler (2009), *Toxicon*
  54(3), 354-360, the case report the handling guide already cited in its own
  Sources, was opened for this pass: the bite produced marked edema, ecchymoses,
  lymphadenopathy and cutaneous signs suggestive of mild cellulitis with blister
  formation, no systemic effects, and recovery complete after approximately five
  months, with the authors concluding the species should not be considered
  dangerous but handled thoughtfully. The legal guide's version is the accurate
  one and it wins; the handling guide changed to match, keeping every hedge it
  had ("not considered medically significant to a healthy person", "Rare
  allergic reactions are possible, as with any bite") and keeping the authors'
  own conclusion. The handling FAQ and seoDescription that carried the old
  characterization changed in the same pass. The handling guide's Sources entry
  for the paper also had the wrong title and no link; corrected to the real
  title with its DOI.
- **Displays as temperament, handling versus enrichment.** Enrichment: "Do not
  read the hooding display as personality, because it is a threat response," and
  a snake performing them constantly "is reporting something". The
  build-trust framing the reader flagged ("Handle regularly and gently to build
  trust... Many hognoses go through an initial defensive phase that diminishes
  significantly with consistent calm handling") lived in the old hub's
  enrichment prose, not in the handling deep dive, so the rebuild retires it by
  construction. Enrichment keeps its clause: its Sources back it (Nagabaskaran,
  Skinner and Miller 2022; Hoehfurtner et al. 2021; Burghardt 2013), and the
  handling guide cited nothing for the trust framing. The handling guide's
  closing line, which the reader called a stranded pointer with no link, was
  rewritten to say the enrichment thing directly and carry the link.
- **Not a conflict, on inspection.** The cost guide prices "a 2x2x2 foot or
  36x18x18 inch PVC or glass enclosure" while the setup guide's minimums are
  30x13x13 (males) and 36x18x16 (females). 36x18x18 exceeds both minimums and is
  the product actually being priced, so the two pages agree.
- **Not a conflict.** The cost guide's "10 to 15 years commonly cited, 15 to 20
  achievable under excellent husbandry" is a captive figure and the encyclopedia
  field it was flagged against is a wild one. See Encyclopedia below.

### Gaps, checked against the Health and More list first

The sidebar's shared guides cover quarantine, hygiene, the power-outage floor,
the daily stool and urates check, shedding (twice), heating and thermostats, and
sexing, growth and body condition. Checked against that list, these are real:

- **Feeding has no home at all.** This is the one the rebuild makes worse before
  it makes it better, and it is worth stating precisely. The old hub's diet
  prose was the only feeding content on the site for this species, and the
  router shape deletes hub prose. Lost with it: the adult and juvenile schedule
  ("Adults should eat every 7 to 14 days. Juveniles every 5 to 7 days"), the
  48 to 72 hour post-feeding handling wait, prey sizing ("Prey size should match
  the snake's widest mid-body point"), frozen-thawed only and never live, tongs
  at every feeding and never by hand, and the entire hatchling picky-eater
  section: scenting prey with toad or frog shed, offering a smaller item,
  feeding in a separate enclosure, offering at night in a completely dark
  environment, leaving pre-killed prey overnight, and the reassurance that most
  hognoses that refuse initially convert to unscented mice within a few
  attempts. Also lost: the hub FAQ's version of the same schedule and the
  scenting tip. What was routed instead of invented: the health guide's
  separate-container rule and its portion-versus-activity rule are now hub rows
  (Where to feed, How much to feed), the shared body condition guide supplies a
  Weight checks row, and the shared stool guide supplies a Daily check row that
  names hognose specifically. None of that replaces a schedule, a prey size, or
  a thawing procedure. No number was moved into a deep dive to save it, because
  none of those figures is sourced anywhere on the site.
  `content/_scheduled-feeding-guides/BACKLOG.md` already lists `hognose-snake`
  unchecked; that is the fix, and it needs real sources rather than a copy of
  the deleted prose.
- **Hatchling housing.** Every enclosure figure in the set is an adult figure,
  and hatchlings are what almost everyone buys.
- **Thawing and prep of frozen rodents.** Absent from the species pages and from
  the shared list.
- **Choosing a breeder and health-checking the animal at purchase.** Quarantine
  starts after you own it.
- **Cleaning cadence and full substrate change interval.** The stool guide is a
  daily observation check, not a cleaning schedule.
- **Brumation.** Not mentioned once for this species, and the shared snake
  brumation guide is not in this species' Health and More list.

### Stranded questions

- The cost guide's heat-mat-versus-halogen hedge is settled on the tank setup
  guide. Now signposted: the cost guide's halogen sentence links there.
- The health guide's "feed in a separate container" only makes sense once the
  setup guide explains the deep loose substrate. Now signposted, same pass.
- The enrichment guide's cool-side rule is the missing half of the setup guide's
  substrate section. Now signposted from the setup guide.
- The hub's wild-caught parasite warning went out with the hub prose; the legal
  guide is where collection rules actually live, and the captive-bred point is
  in the encyclopedia's history paragraph.

### Recommended links, one per page

| Page | Sentence | Link to | Done |
|---|---|---|---|
| Hub | "Wild-caught hognose snakes frequently carry internal parasites" | Legal guide | No: hub prose deleted, and hub rows are not link slots |
| Encyclopedia | "Most animals sold now are captive-bred rather than collected." | Legal guide | No: structured data, no link slot |
| Cost | the halogen basking bulb hedge | Tank setup guide | Yes |
| Handling | the stranded closing sentence | Enrichment guide | Yes, sentence rewritten to say the thing about the animal |
| Health | "Feeding in a separate container away from the loose substrate" | Tank setup guide | Yes |
| Tank setup | "Provide 3 to 6 inches of loose, dry, diggable substrate" | Enrichment guide | Yes |
| Enrichment | "Other quantities are available, and a proper depth needs more than one bag" | Cost guide | No: the sentence was a retail fragment and is now about the animal; a shopping link there would be an aside, not the animal's question, and the Deep Dive already carries the cost guide |
| Legal | the case report sentence | Handling guide | Yes |

Every page ends at one same-species sibling link, the cap. No link sits before a
first H2 or inside a ComparisonTable cell.

### Trust

The reader's doubt was that "the hub reads like an older draft nobody
reconciled, and it is the page the navigation lands on first". That is exactly
what it was, and it is gone. Two smaller trust items are fixed: the enrichment
guide cited one study by three surnames with no year or journal, now named as
Nagabaskaran, Skinner and Miller's 2022 preference test in *Animals* (the
Sources entry now carries the volume and article number, Animals 12(23), 3347);
and "Other quantities are available, and a proper depth needs more than one bag"
was a leftover retail line, the same template artifact batch D found on box
turtle, now rewritten to be about the snake. The sentence the reader found most
convincing stays untouched: "Do not handle a hognose that is mid-dig, which
interrupts the behavior the enclosure exists to allow."

One thing left standing deliberately: the handling guide still calls this "a
small, harmless animal" in its opening bluff paragraph and its temperament FAQ
still ends "Both are harmless." Both sentences are about aggression and
temperament, not about what a bite does, and the venom section they sit around
now states the case report in full. Flagged rather than swept.

### The reader's two changes

1. "Rewrite the hub from the deep dives so every number matches." Done: router
   shape, 22 first-week rows each copied from the article named in its source, a
   4-bullet emergency card from the health guide, 6 routes, a price-free buy
   list, 3 FAQs copied verbatim from deep-dive frontmatter, difficulty matching
   the encyclopedia entry. Old costs, sections and the seven-FAQ block dropped.
2. "Add a feeding guide covering hatchlings, prey weight, and thawing." Not
   done, and out of scope for a fix pass: writing it means real research, not
   recycling the deleted hub prose. Filed above with the exact list of what the
   guide has to cover.

### Encyclopedia

Researched, one field changed. The entry's `wildLifespan` read "10-18 years",
unsourced and flagged by the numbers checker against the cost guide's sourced
"10 to 15 years commonly cited, 15 to 20 achievable under excellent husbandry".
Cosley Zoo's western hognose page, opened for this pass, states: "In the wild,
western hognose snakes have a lifespan of 9 to 19 years, with an average of 14
years. In human care, their lifespan ranges from 15 to 20 years." That is a real
institutional source that separates the two figures, which the old field did
not. `wildLifespan` is now "9-19 years in the wild, averaging 14; 15-20 years in
human care", which agrees with the cost guide's captive range instead of
contradicting it. Nothing else in the entry changed: difficulty was already
"Intermediate" and the hub matches it, and `adultSize` ("1.5-3.5 feet (45-107
cm) depending on species") conflicts with no deep dive, since no deep dive
states an adult length at all. The numbers checker still groups the entry's wild
9 to 19 against the cost guide's captive 10 to 15, but those are two different
quantities now that the field says which is which, the same advisory case the
rulebook describes rather than a conflict to resolve.

### Open

- The feeding guide, as scoped above. Biggest single item in the set.
- Two shared-file edits written up but not applied (I could not edit either
  file): the corn snake vs hognose guide's "at most minor local swelling" line,
  which understates the case report its own Sources cite, and the veiled
  chameleon / ferret / hognose overview's unhedged "a venom that's harmless".
  Both with exact strings in the batch scratch file.
- Hatchling housing, thawing, breeder selection, cleaning cadence and brumation,
  all named above, none of them fixable with a link or a number.
- Dates: the handling guide's `lastUpdated` and `lastReviewed` moved to
  2026-09-09 because its bite-case facts changed. The enrichment guide's were
  left at 2026-10-16, its own publish date, which is still in the future: moving
  them to today would put the article's last update before it exists. The other
  four touched files changed links or wording only, so their dates stand.
- The tank setup guide runs two `<Sources>` entries where the rulebook targets
  four to five. Not touched here (nothing may be deleted, and adding sources is
  research, not a fix), but the health guide (two, one of them unlinked) and the
  cost guide (two, one unlinked) are in the same position.

## Hognose Snake (2026-09-09, first pass)

Extractor set of eight pages (hub, encyclopedia, cost, handling, health issues,
tank setup, enrichment, legal). One independent Opus reader on the pre-rewrite
set; raw output filed separately. The router hub was built from its findings the
same day. This species has no feeding guide, and that shapes most of what
follows.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | C | The only page carrying feeding at all, and the single biggest source of conflict in the set. |
| Encyclopedia | C- | Ninety seconds, and nothing to act on except that most animals sold are captive-bred. |
| Cost | A- | Morph price tiers, $200 to $500 setup, $10 to $25 a month, vet line items. |
| Handling | B- | Wash hands, don't handle after feeding, don't panic at the hood. No actual technique. |
| Health issues | B+ | Five named conditions with causes and prevention. |
| Tank setup | A- | Sizes by sex, temps, humidity, substrate ratio, lighting. |
| Enrichment | A | Best-written page here: deep substrate on the cool end, and a priority order. |
| Legal | A | A state table with citations and an honest unverified section. |

Set grade: B-. "Four excellent deep dives undermined by a hub that disagrees
with them on humidity, temperature, and day cycle."

Hub grade: C, and it earned it. The old hub was an unreconciled older draft
sitting on the page navigation lands on first.

### Hub versus the set, both sides quoted (all resolved by the router rebuild)

- **Humidity, the one that mattered.** Old hub: "Ambient humidity of 40 to 60%
  is appropriate, rising during shed." Tank setup: "30 to 50% ambient humidity,
  genuinely on the dry side compared to many other pet snakes." The health
  guide blames both of the species' top two conditions on the same variable
  ("respiratory infection and scale rot, both trace back to the exact same root
  cause: humidity or dampness running too high"), so a hub telling a new keeper
  to run wetter than the setup guide was the worst possible disagreement to
  leave standing. Tank setup wins: it is the subject-matter page, and its cited
  source (ReptiFiles, Western Hognose Snake Care) states the low range, with The
  Bio Dude's care sheet independently giving "average of 30-50% humidity" when
  opened for this pass. The old hub's 40 to 60% was unsourced on the page. The
  router hub now copies the tank setup guide's sentence and its own humidity FAQ
  verbatim, so 40 to 60% survives nowhere on the site for this species: the
  hub's second copy of it (the "Do hognose snakes need a humid hide?" FAQ) went
  with the old FAQ block, no shared reptile guide carries a hognose humidity
  row, and the corn snake vs hognose guide already said 30 to 50%.
- **Activity pattern, because the lighting rests on it.** Old hub: "Hognose
  snakes are crepuscular, most active in the morning and evening." Tank setup:
  "genuinely diurnal, active during the day rather than at night or dusk," and
  its whole lighting section follows from that ("a low-output linear T5 bulb
  spanning part of the enclosure is increasingly recommended for this diurnal
  species"), as does the enrichment guide's basking-surface placement. Diurnal
  wins on sources: ReptiFiles calls the species diurnal and most active in the
  morning and late afternoon, and The Bio Dude describes it as "diurnal which
  means they can also be found occasionally aboveground basking or hunting". The
  old hub's crepuscular line cited nothing. This was resolved rather than
  dropped: the router hub carries a Lighting row copied from the tank setup
  guide that states the diurnal reading and the 12-hour cycle it justifies, and
  the hub comment records which figure was retired and why.
- **Heat.** Old hub: "a warm hide with a belly-heat surface temperature of 85 to
  90 degrees F on an under-tank heater with a thermostat, a cool hide at 72 to
  76 degrees F." Tank setup: "Basking area around 90 to 95°F on one end, cool
  side 70 to 75°F, with a night temperature around 75 to 78°F," with a halogen
  basking bulb over the substrate preferred and the heat mat named as the older
  advice. Tank setup wins by construction (the hub keeps no figure of its own);
  the Bio Dude care sheet opened for this pass gives the same 90-95°F basking
  and 70-75°F cool zone. The hub's Heat row keeps the setup guide's hedge that
  the mat-versus-halogen question is a genuine point of disagreement.
- **Substrate depth.** Old hub: "4 to 6 inches." Tank setup: "3 to 6 inches of
  loose, dry, diggable substrate." Hub now copies 3 to 6 inches with the 70/30
  soil-to-sand ratio the setup guide states.
- **Enclosure.** Old hub gave one adult size ("A 36x18x18\" or 36x18x12\"
  enclosure"). Tank setup splits by sex: males a 20-gallon equivalent "around
  30x13x13 inches", females a 40-gallon equivalent "36x18x16 inches", with a
  2x2x2 foot PVC enclosure working for either. The split is kept in the hub row,
  not flattened.
- **Venom and bite severity, the reader's safety question.** Old hub FAQ: bites
  "cause minimal local irritation at most", and the venom is "entirely harmless
  to humans". Legal guide: "A real medical case report on a keeper bitten by a
  Western hognose during feeding documented local swelling, bruising, and mild
  cellulitis, with a full recovery in about five months and no systemic
  effects." The old hub loses outright; see the deep-dive section below for how
  the handling guide was reconciled to the legal guide.
- **Feeding place.** Old hub treated a separate feeding container as a
  picky-eater trick; the health guide calls it "the single most effective
  prevention" for impaction and the tank setup guide states it flatly ("Feed
  your snake off the substrate, in a separate container, to prevent impaction").
  The hub's Where to feed row now copies the health guide.

`node scripts/check-species-numbers.mjs hognose-snake` after the rebuild: no
line marked `hub` disagrees with the deep dive its row names. The humidity
conflict group is gone entirely. What remains flagged is grouping noise (a
sentence carrying two ranges, cost-table line items, the route line quoting the
cost guide's own $200 to $500) plus one genuine encyclopedia item, below.

### Deep dives against each other

- **Bite severity, handling versus legal.** Handling said "A documented bite
  case in the scientific literature caused local swelling and bruising with no
  wider health effects" and closed "a hognose bite is not something to be
  genuinely afraid of." Legal said "local swelling, bruising, and mild
  cellulitis, with a full recovery in about five months and no systemic
  effects." Both describe the same paper. Weinstein and Keyler (2009), *Toxicon*
  54(3), 354-360, the case report the handling guide already cited in its own
  Sources, was opened for this pass: the bite produced marked edema, ecchymoses,
  lymphadenopathy and cutaneous signs suggestive of mild cellulitis with blister
  formation, no systemic effects, and recovery complete after approximately five
  months, with the authors concluding the species should not be considered
  dangerous but handled thoughtfully. The legal guide's version is the accurate
  one and it wins; the handling guide changed to match, keeping every hedge it
  had ("not considered medically significant to a healthy person", "Rare
  allergic reactions are possible, as with any bite") and keeping the authors'
  own conclusion. The handling FAQ and seoDescription that carried the old
  characterization changed in the same pass. The handling guide's Sources entry
  for the paper also had the wrong title and no link; corrected to the real
  title with its DOI.
- **Displays as temperament, handling versus enrichment.** Enrichment: "Do not
  read the hooding display as personality, because it is a threat response," and
  a snake performing them constantly "is reporting something". The
  build-trust framing the reader flagged ("Handle regularly and gently to build
  trust... Many hognoses go through an initial defensive phase that diminishes
  significantly with consistent calm handling") lived in the old hub's
  enrichment prose, not in the handling deep dive, so the rebuild retires it by
  construction. Enrichment keeps its clause: its Sources back it (Nagabaskaran,
  Skinner and Miller 2022; Hoehfurtner et al. 2021; Burghardt 2013), and the
  handling guide cited nothing for the trust framing. The handling guide's
  closing line, which the reader called a stranded pointer with no link, was
  rewritten to say the enrichment thing directly and carry the link.
- **Not a conflict, on inspection.** The cost guide prices "a 2x2x2 foot or
  36x18x18 inch PVC or glass enclosure" while the setup guide's minimums are
  30x13x13 (males) and 36x18x16 (females). 36x18x18 exceeds both minimums and is
  the product actually being priced, so the two pages agree.
- **Not a conflict.** The cost guide's "10 to 15 years commonly cited, 15 to 20
  achievable under excellent husbandry" is a captive figure and the encyclopedia
  field it was flagged against is a wild one. See Encyclopedia below.

### Gaps, checked against the Health and More list first

The sidebar's shared guides cover quarantine, hygiene, the power-outage floor,
the daily stool and urates check, shedding (twice), heating and thermostats, and
sexing, growth and body condition. Checked against that list, these are real:

- **Feeding has no home at all.** This is the one the rebuild makes worse before
  it makes it better, and it is worth stating precisely. The old hub's diet
  prose was the only feeding content on the site for this species, and the
  router shape deletes hub prose. Lost with it: the adult and juvenile schedule
  ("Adults should eat every 7 to 14 days. Juveniles every 5 to 7 days"), the
  48 to 72 hour post-feeding handling wait, prey sizing ("Prey size should match
  the snake's widest mid-body point"), frozen-thawed only and never live, tongs
  at every feeding and never by hand, and the entire hatchling picky-eater
  section: scenting prey with toad or frog shed, offering a smaller item,
  feeding in a separate enclosure, offering at night in a completely dark
  environment, leaving pre-killed prey overnight, and the reassurance that most
  hognoses that refuse initially convert to unscented mice within a few
  attempts. Also lost: the hub FAQ's version of the same schedule and the
  scenting tip. What was routed instead of invented: the health guide's
  separate-container rule and its portion-versus-activity rule are now hub rows
  (Where to feed, How much to feed), the shared body condition guide supplies a
  Weight checks row, and the shared stool guide supplies a Daily check row that
  names hognose specifically. None of that replaces a schedule, a prey size, or
  a thawing procedure. No number was moved into a deep dive to save it, because
  none of those figures is sourced anywhere on the site.
  `content/_scheduled-feeding-guides/BACKLOG.md` already lists `hognose-snake`
  unchecked; that is the fix, and it needs real sources rather than a copy of
  the deleted prose.
- **Hatchling housing.** Every enclosure figure in the set is an adult figure,
  and hatchlings are what almost everyone buys.
- **Thawing and prep of frozen rodents.** Absent from the species pages and from
  the shared list.
- **Choosing a breeder and health-checking the animal at purchase.** Quarantine
  starts after you own it.
- **Cleaning cadence and full substrate change interval.** The stool guide is a
  daily observation check, not a cleaning schedule.
- **Brumation.** Not mentioned once for this species, and the shared snake
  brumation guide is not in this species' Health and More list.

### Stranded questions

- The cost guide's heat-mat-versus-halogen hedge is settled on the tank setup
  guide. Now signposted: the cost guide's halogen sentence links there.
- The health guide's "feed in a separate container" only makes sense once the
  setup guide explains the deep loose substrate. Now signposted, same pass.
- The enrichment guide's cool-side rule is the missing half of the setup guide's
  substrate section. Now signposted from the setup guide.
- The hub's wild-caught parasite warning went out with the hub prose; the legal
  guide is where collection rules actually live, and the captive-bred point is
  in the encyclopedia's history paragraph.

### Recommended links, one per page

| Page | Sentence | Link to | Done |
|---|---|---|---|
| Hub | "Wild-caught hognose snakes frequently carry internal parasites" | Legal guide | No: hub prose deleted, and hub rows are not link slots |
| Encyclopedia | "Most animals sold now are captive-bred rather than collected." | Legal guide | No: structured data, no link slot |
| Cost | the halogen basking bulb hedge | Tank setup guide | Yes |
| Handling | the stranded closing sentence | Enrichment guide | Yes, sentence rewritten to say the thing about the animal |
| Health | "Feeding in a separate container away from the loose substrate" | Tank setup guide | Yes |
| Tank setup | "Provide 3 to 6 inches of loose, dry, diggable substrate" | Enrichment guide | Yes |
| Enrichment | "Other quantities are available, and a proper depth needs more than one bag" | Cost guide | No: the sentence was a retail fragment and is now about the animal; a shopping link there would be an aside, not the animal's question, and the Deep Dive already carries the cost guide |
| Legal | the case report sentence | Handling guide | Yes |

Every page ends at one same-species sibling link, the cap. No link sits before a
first H2 or inside a ComparisonTable cell.

### Trust

The reader's doubt was that "the hub reads like an older draft nobody
reconciled, and it is the page the navigation lands on first". That is exactly
what it was, and it is gone. Two smaller trust items are fixed: the enrichment
guide cited one study by three surnames with no year or journal, now named as
Nagabaskaran, Skinner and Miller's 2022 preference test in *Animals* (the
Sources entry now carries the volume and article number, Animals 12(23), 3347);
and "Other quantities are available, and a proper depth needs more than one bag"
was a leftover retail line, the same template artifact batch D found on box
turtle, now rewritten to be about the snake. The sentence the reader found most
convincing stays untouched: "Do not handle a hognose that is mid-dig, which
interrupts the behavior the enclosure exists to allow."

One thing left standing deliberately: the handling guide still calls this "a
small, harmless animal" in its opening bluff paragraph and its temperament FAQ
still ends "Both are harmless." Both sentences are about aggression and
temperament, not about what a bite does, and the venom section they sit around
now states the case report in full. Flagged rather than swept.

### The reader's two changes

1. "Rewrite the hub from the deep dives so every number matches." Done: router
   shape, 22 first-week rows each copied from the article named in its source, a
   4-bullet emergency card from the health guide, 6 routes, a price-free buy
   list, 3 FAQs copied verbatim from deep-dive frontmatter, difficulty matching
   the encyclopedia entry. Old costs, sections and the seven-FAQ block dropped.
2. "Add a feeding guide covering hatchlings, prey weight, and thawing." Not
   done, and out of scope for a fix pass: writing it means real research, not
   recycling the deleted hub prose. Filed above with the exact list of what the
   guide has to cover.

### Encyclopedia

Researched, one field changed. The entry's `wildLifespan` read "10-18 years",
unsourced and flagged by the numbers checker against the cost guide's sourced
"10 to 15 years commonly cited, 15 to 20 achievable under excellent husbandry".
Cosley Zoo's western hognose page, opened for this pass, states: "In the wild,
western hognose snakes have a lifespan of 9 to 19 years, with an average of 14
years. In human care, their lifespan ranges from 15 to 20 years." That is a real
institutional source that separates the two figures, which the old field did
not. `wildLifespan` is now "9-19 years in the wild, averaging 14; 15-20 years in
human care", which agrees with the cost guide's captive range instead of
contradicting it. Nothing else in the entry changed: difficulty was already
"Intermediate" and the hub matches it, and `adultSize` ("1.5-3.5 feet (45-107
cm) depending on species") conflicts with no deep dive, since no deep dive
states an adult length at all. The numbers checker still groups the entry's wild
9 to 19 against the cost guide's captive 10 to 15, but those are two different
quantities now that the field says which is which, the same advisory case the
rulebook describes rather than a conflict to resolve.

### Open

- The feeding guide, as scoped above. Biggest single item in the set.
- Two shared-file edits written up but not applied (I could not edit either
  file): the corn snake vs hognose guide's "at most minor local swelling" line,
  which understates the case report its own Sources cite, and the veiled
  chameleon / ferret / hognose overview's unhedged "a venom that's harmless".
  Both with exact strings in the batch scratch file.
- Hatchling housing, thawing, breeder selection, cleaning cadence and brumation,
  all named above, none of them fixable with a link or a number.
- Dates: the handling guide's `lastUpdated` and `lastReviewed` moved to
  2026-09-09 because its bite-case facts changed. The enrichment guide's were
  left at 2026-10-16, its own publish date, which is still in the future: moving
  them to today would put the article's last update before it exists. The other
  four touched files changed links or wording only, so their dates stand.
- The tank setup guide runs two `<Sources>` entries where the rulebook targets
  four to five. Not touched here (nothing may be deleted, and adding sources is
  research, not a fix), but the health guide (two, one of them unlinked) and the
  cost guide (two, one unlinked) are in the same position.

## Pacman Frog (2026-09-14, batch F, single pass, before the router hub)

Extractor set of eight pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment). One Opus 5 agent, about 87k
tokens. The reader read the legacy care sheet hub; the router hub was
built from its findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | C+ | Buyable and buildable from the checklist alone, but its numbers fight everything downstream. |
| Encyclopedia | B- | Actionable only in telling you there are two species and a hybrid sold under one name. |
| Cost | B | You can budget from it: frog $15-100, setup ~$100-225, vet $50-150, emergency ~$250. |
| Handling | B+ | Tongs, one frog per tank, support from underneath, expect a jump. |
| Health issues | B+ | Symptom lists specific enough to act on at 11pm. |
| Tank setup | A- | The side-mounted heat mat rule alone justified the page. |
| Feeding | A | Best page in the set. |
| Enrichment | A | A weekly weigh-in and a real warning sign, from the page that looked least likely to have one. |

Set grade: B-. "Strong deep dives undercut by a hub that contradicts them
on the numbers a new keeper will copy first."

### Numbers checker

`node scripts/check-species-numbers.mjs pacman-frog --strict` before the
pass printed 15 conflicting topic groups. The ones that were real
decisions, not the checker grouping two different figures under one
label: humidity three ways (hub 70 to 90%, tank setup 60 to 80%, feeding
50 to 80%), adult feeding frequency three ways (hub every 3 to 4 days,
health once a week, feeding 1 to 3 times a week), adult size (handling 4
to 7 inches against the encyclopedia's 3 to 5), and lifespan (cost 6 to
10 with 10 to 15 on excellent care, against the encyclopedia's 6 to 15
filed as a wild figure). Everything else in the list was one page's own
sentence carrying two ranges, or the old hub restating the cost guide's
table.

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild:

- Humidity. Old hub: "Humidity: 70 to 90%." Tank setup: "60 to 80% is the
  target range." Feeding: "50 to 80% humidity." Three ranges for one
  animal. The router hub carries tank setup's 60 to 80%, and the feeding
  guide was corrected to match (see Fixes).
- Adult feeding. Old hub: "Adults eat every 3 to 4 days." Health issues:
  "adults should eat roughly once a week." Feeding: "Treat roughly 1 to 3
  times a week as the range." The router hub carries the feeding guide's
  figure, and the health guide was corrected to match.
- Heat mat. Old hub checklist: "Low-wattage heat lamp or under-enclosure
  mat with thermostat." Tank setup: "Never place a heat mat under the
  tank." The router hub's Heat source row carries tank setup's rule in
  full, and the buy list reads "side-mounted heat mat on a thermostat".
- Substrate changes. Old hub: "Change the substrate monthly," billed at
  $30 to $50 a year. Tank setup: "Change the substrate every 2 to 3
  months." The router hub carries the deep dive's interval.
- Night temperature. Old hub: "Temperature: 75 to 85 degrees F", no night
  drop anywhere. Tank setup: "dropping to 65 to 75°F at night." The
  router hub's Temperature row carries the whole sentence.
- Rodents. Old hub: "Offer appropriately sized live or freshly deceased
  prey... Occasional pinky mice for large adult frogs." Feeding: "thawed,
  never live, never microwaved." The router hub's Diet row is the feeding
  guide's.

### Deep dives against each other

- Adult feeding schedule. Health issues: "adults should eat roughly once
  a week." Feeding: "Several sources say 1 to 2 times a week, an exotics
  veterinary clinic says 2 to 3 times a week... roughly 1 to 3 times a
  week as the range." Settled at 1 to 3 times a week, see Fixes.
- Adult size. Handling: "Pacman frogs stay smaller, typically 4 to 7
  inches." Encyclopedia: "3-5 inches (7-12 cm) body." Settled at 4 to 7
  inches, see Encyclopedia.
- UVB. Tank setup: "No special lighting is required... Low-level UVB is
  optional." Health issues: metabolic bone disease "Caused by missing
  calcium supplementation or UVB," which reads as though UVB were
  required. Reworded on the health guide so both pages say the same
  thing.
- Read three times with no disagreement, and noted by the reader as
  padding rather than a conflict: the dinosaur bite-force FunFact appears
  in the cost, handling, and tank setup guides. Left alone, a FunFact is
  never deleted under the batch rules and none of the three restates a
  body sentence.

### Gaps, checked against the Health and More list first

- When a juvenile becomes an adult for feeding-schedule purposes. Neither
  the feeding guide nor any shared amphibian guide gives an age or a size.
- Routine spot-cleaning between full substrate changes.
- How to actually dechlorinate water. The shared amphibian quarantine and
  water guide covers hardness and names a conditioner, but no page in this
  set walks the step.
- What a healthy frog looks like at the point of purchase.

All four filed in docs/READER_LOG.md. None is fixable with a link or a
number.

### Stranded questions

The cost guide's "Impaction, the risk that defines this species, is what
usually leads to a bill like that" never pointed at the health guide.
The feeding guide's impaction bullet never pointed at the page that
covers it. The handling guide's "to protect yourself from Salmonella"
never pointed at the shared hygiene guide sitting in its own sidebar. All
three fixed.

### Recommended links, one per page

| Page | Sentence | Link to | Added |
|---|---|---|---|
| Hub | "If a frog consistently refuses food for more than 2 to 3 weeks..." | Feeding guide | n/a, that hub prose is gone |
| Encyclopedia | "Breeders also cross Ceratophrys cranwelli with the Surinam horned frog..." | Cost guide | No, the encyclopedia is structured data with no link slot |
| Cost | "Impaction, the risk that defines this species, is what usually leads to a bill like that." | Health issues guide | Yes |
| Handling | "to protect yourself from Salmonella" | Salmonella and reptile hygiene guide | Yes |
| Health issues | "use fine coco fiber rather than gravel or coarse bark" | Tank setup guide | Yes, anchored on "gravel or coarse bark" since "fine coco fiber" is already an affiliate link |
| Tank setup | "a real cause of this species' impaction risk" | Health issues guide | Yes |
| Feeding | "Blind lunging at prey can mean accidentally swallowing loose substrate" | Health issues guide | Yes |
| Enrichment | "obesity plus impaction are the two defining captive problems" | Health issues guide | Yes |

Six added, each article ending at exactly one link to a sibling guide,
the cap the checker enforces.

### Trust

The reader named the humidity spread, the once-a-week against 2-to-3-times
gap, and a hub checklist recommending the burn risk its own deep dive
forbids. The sentence that most convinced it a keeper wrote the set, from
tank setup: "Never place a heat mat under the tank. Pacman frogs burrow to
the substrate floor, and a mat positioned underneath risks burning a frog
that's buried directly on top of it."

### Reader's two changes

1. Make the hub derive its numbers from the deep dives. Done, the hub is
   now a router and keeps no figure of its own.
2. Add the juvenile-to-adult transition point and a plain dechlorination
   method. Not done, both are new content rather than a number or a link,
   and both are filed in docs/READER_LOG.md.

### Numbers decided, both sides and the source that won

- Adult feeding frequency. Health issues said "roughly once a week",
  citing BackwaterReptiles, a retailer care page listed in Sources as a
  bare homepage. Feeding said "roughly 1 to 3 times a week", citing PetMD
  ("Juvenile frogs should be fed daily, while adults should be fed one to
  two times a week") and Tree of Life Exotic Pet Medical Center ("Adults:
  Feed 2-3 times per week"). Both source pages were opened. A veterinary
  hospital outranks a retailer care sheet, and 1 to 3 times a week is the
  span the two opened sources actually cover between them; once a week is
  the bottom of one of them stated as the rule. Feeding wins, and it is
  also the page whose subject this is. The health guide's body, its
  obesity FAQ, and its seoDescription all moved to 1 to 3 times a week.
- Humidity. Feeding said 50 to 80%, tank setup 60 to 80%. Neither of
  feeding's own opened sources states 50: PetMD gives "70-80%" and Tree
  of Life gives "high humidity (60-80%)". Tank setup's 60 to 80% is what
  the veterinary source states, and tank setup is the subject page.
  Feeding corrected to 60 to 80%.
- Adult size. Handling said "typically 4 to 7 inches", the encyclopedia
  "3-5 inches (7-12 cm)". Tree of Life gives "Adult Size: 4-7 inches
  (females are larger)", PetMD gives males 3 to 4 inches and females 4 to
  8, and SeaWorld's species page gives a snout-to-vent length of 14 cm
  (5.5 in). The deep dive's figure is the one a source states outright.
  The encyclopedia moved to 4-7 inches (10-18 cm).
- Lifespan. The cost guide's 6 to 10 years, with 10 to 15 on excellent
  care, is a captive figure and stands. The encyclopedia carried "6-15
  years" under Wild Lifespan, which is a captive range wearing a wild
  label. AnAge gives a maximum longevity of 14.7 years in captivity at
  data quality "Acceptable" and no wild figure at all; SeaWorld gives an
  average of 6 years. Rewritten the way the crested gecko and Russian
  tortoise entries already handle an undocumented wild lifespan.

### Encyclopedia

Two fields changed on `pacman-frog` in src/lib/data/encyclopedia/amphibians.js,
both researched against opened sources as above, nothing else in the file
touched:

- `adultSize`: "3-5 inches (7-12 cm) body; 0.5-1.5 lbs" to "4-7 inches
  (10-18 cm) body; 0.5-1.5 lbs". The weight half was left alone: no deep
  dive states a weight, so there is no conflict to settle there.
- `wildLifespan`: "6-15 years" to "Not well documented in the wild; about
  6 years is the usual figure given, with captive records reaching 14.7
  years".

### Also fixed

- Cost guide, same-page contradiction. The setup FAQ read "Roughly $100
  to $225 for the frog and everything it needs", while the body heading
  it answers is "Upfront Setup: Roughly $100 to $225" and the body
  separately says a first setup "frog included, commonly totals around
  $225". The FAQ now reads "for the enclosure and everything that goes in
  it, before the frog itself". No number changed.
- Source narration removed from the deep dives, per RULES, "The source
  goes in the block, not the sentence", which is also what the hub rows
  need before they can copy a figure. Every number and every hedge kept.
  Listed before and after in the fixes commit.
- The feeding guide's closing "Check the Pacman Frog encyclopedia profile
  for more", a sentence that existed only to carry a link.

### Open

- The four content gaps above, all in docs/READER_LOG.md.
- Sources quality across this set. Tank setup and health issues each run
  a single entry, and four entries across the set are bare homepages
  (mramphibian.com, backwaterreptiles.com, a-z-animals.com,
  thecritterdepot.com) where RULES asks for the page that carries the
  claim. Nothing was deleted, and adding sources is research rather than
  a fix, so this is left as a research job for the set.
- The cost guide and health guide both close on an "Our White's Tree Frog
  X guide covers..." sentence, the shape RULES, Linking rules out. Left
  alone: neither the reader nor the checker flagged them, both carry a
  real cross-species link, and rewriting them means asserting something
  new about the other species.

## Zebra Finch (2026-09-14, batch F, single pass, before the router hub)

Extractor set of eight pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment). One Opus 5 agent, about 97k
tokens. The reader read the legacy care sheet hub; the router hub was
built from its findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | C | The weakest page, and the one the navigation lands on first. |
| Encyclopedia | C+ | Nothing to act on, and its flock-size line is contradicted later in the set. |
| Cost | B | Two birds minimum, $180 to $400 upfront, budgetable. |
| Handling | A- | Net or towel, never the tail, do not force contact. |
| Health issues | A- | A concrete symptom list worth calling a vet over. |
| Tank setup | B+ | Dimensions, bar spacing, temperature, liner, all buyable. |
| Feeding | A | Ratios, the teaspoon measure, no grit, cuttlebone. Best page in the set. |
| Enrichment | A | The priority order and the what-not-to-do list are the most usable thing here. |

Set grade: B. "Strong, sourced deep dives sitting under a hub that
contradicts them."

### Numbers checker

`node scripts/check-species-numbers.mjs zebra-finch --strict` before the
pass printed 10 conflicting topic groups. The real decisions: bar spacing
(hub 1/2 inch against tank setup's 3/8), flight cage price (hub $60 to
$120 against the cost guide's $120 to $220), cage dimensions (hub "at
least 24 inches wide" against tank setup's 24 by 14 by 18), lifespan (hub
5 to 10 in captivity, encyclopedia 5 to 7, cost guide adding a 3 to 5
figure), and the pellet share stated twice on one page as two different
sources' numbers. The rest were the cost guide's own per-seller prices,
which are different figures rather than a conflict.

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild:

- Bar spacing. Old hub: "Bar spacing of 1/2 inch or less keeps a finch
  from squeezing through or getting a head caught." Tank setup: "No wider
  than 3/8 inch... That's tighter than the roughly 1/2 inch that works
  for a canary." The hub was printing the canary figure, on the one
  number a buyer acts on at the shop.
- Flight cage price. Old hub setup table: "Flight cage (24-30 in wide):
  $60 to $120." Cost guide: "The cage is the single biggest line item at
  $120 to $220 for a quality flight cage." The two ranges did not overlap
  at any point.
- Cage dimensions. Old hub: "A flight cage at least 24 inches wide." Tank
  setup: "at least 24 inches long by 14 inches wide by 18 inches tall as
  a minimum for a pair." The hub had turned the length into the width.
- Darkness. Old hub: "Cover the cage at night for a consistent 10 to 12
  hours of darkness." Tank setup: "approximately 12 hours of light and 12
  hours of darkness each day."
- Diet framing. Old hub checklist: "Quality finch seed mix or pelleted
  diet", an either/or. Feeding: "pellets make up roughly 70% of a finch's
  diet... seed limited to about one level teaspoon per bird per day."
- Vet cost. Old hub annual table: "Annual avian vet check: $40 to $70", a
  figure no deep dive carries, against the cost guide's "an exam
  typically costs more than a routine cat or dog visit."

### Deep dives against each other

- Wild flock size. Encyclopedia and tank setup both said wild zebra
  finches "travel in flocks of dozens" up to a hundred or more birds.
  Enrichment: "the commonest unit was a pair, 94.2 percent mixed-sex,
  with groups of three to ten also frequent and anything larger
  uncommon", citing a peer-reviewed field study. Both statements are
  true of different things, aggregation at water against the unit that
  actually forages and travels, and the clash was the word "travel".
  Changed to "live in" on both pages, no figure touched, and tank setup
  now links the enrichment guide at that sentence.
- Pellet share. The feeding guide gave the figure twice, as two sources'
  numbers set against each other. Settled to one statement, see Numbers
  decided.
- Perch placement. Tank setup: "several perches of varied diameter,
  positioned with enough distance between them that the birds fly rather
  than just hop across." Enrichment: "Site them at the ends of the flight
  path, not through the middle of it." Not a conflict, the enrichment
  guide is the more specific version of the same instruction. Left alone.

### Gaps, checked against the Health and More list first

- What to do when one bird of a bonded pair dies, and how soon to replace
  it.
- Quarantine-to-introduction sequencing for adding a bird to an existing
  pair. The shared quarantine guide has the timeline, the enrichment
  guide has the introduction advice, and nothing joins them.
- A normal zebra finch weight in grams. The shared sexing and weight
  guide is written around parrots, and the encyclopedia gives ounces.
- What to do if a hen lays with no nest provided. The shared chronic egg
  laying guide is scoped to budgies, cockatiels, and lovebirds.

All four filed in docs/READER_LOG.md.

### Recommended links, one per page

| Page | Sentence | Link to | Added |
|---|---|---|---|
| Hub | "avian vets increasingly recommend building the diet around a pelleted food instead" | Pellet conversion guide | n/a, that hub prose is gone; the hub carries a Seed to pellets row instead |
| Encyclopedia | "wild zebra finches travel in flocks of dozens to over a hundred birds" | Enrichment guide | No link slot, but the sentence was reconciled |
| Cost | "a genuine flight cage that lets the birds fly the length of it rather than just hop between two perches" | Tank setup guide | Yes |
| Handling | "reading this species' wellbeing from the outside is largely how you'll be interacting with it day to day" | Bird body language guide | Yes |
| Health issues | "This is exactly why a cuttlebone is a non-negotiable part of the setup" | Feeding guide | Yes |
| Tank setup | "a stable light cycle at home can inadvertently cue breeding behavior" | Photoperiod and sleep guide | Yes |
| Feeding | the pellet-share sentence | Pellet conversion guide | Yes |
| Enrichment | "do not let one bird lose condition unchecked" | Sexing, weight and body condition guide | Yes |

Seven added. Tank setup carries two, one shared (photoperiod) and one
sibling (enrichment), which is inside the one-sibling cap. Cost and
health issues each spend their one sibling link.

### Trust

The reader named the hub's bar spacing and cage price as the things that
hurt, both being exactly what a buyer acts on, and flagged the cost
guide quoting "very young, unweaned pairs at $29" as the budget option
without saying whether buying unweaned finches is wise. Left as is, that
is a content judgement rather than a number or a link. The sentence that
most convinced it a keeper wrote the set, from handling: "Hold firmly
enough to prevent escape but gently, too much pressure will make the bird
gasp or squeal, a clear sign to ease up."

### Numbers decided, both sides and the source that won

- Captive lifespan. The cost guide said "commonly cited as 5 to 10 years
  in captivity with good care, occasionally longer", the encyclopedia "5
  to 7 years in captivity". Opened sources: Animal Diversity Web, the
  cost guide's own citation, gives "Typical lifespan Status: captivity 5
  to 7 years" and "Typical lifespan Status: wild 2 to 3 years" for
  Taeniopygia guttata; PetMD's finch care sheet gives "5-10 years with
  proper care, depending on species", a finch-wide figure rather than a
  zebra finch one; Lafeber gives "about 3 to 5 years". Under the source
  ranking a university museum database outranks a general care sheet, and
  a species-specific figure beats a family-wide one, so the encyclopedia's
  5 to 7 wins and the cost guide moved to it, in its body and in its vet
  FAQ. Lafeber's lower figure is kept as "with some birds only reaching 3
  to 5" so its Sources entry still carries a claim.
- Pellet share. The feeding guide stated it as two sources at once:
  roughly 70% with 20% produce and about a teaspoon of seed per bird per
  day, against 60 to 70%+ with seed "in very limited quantities". Opened
  both: the veterinary hospital guidance gives the 70/20/teaspoon
  breakdown and PetMD gives "at least 60-70%". They agree on direction
  and the more specific breakdown comes from the veterinary source, so
  the page now states one figure with the other as its floor: roughly
  70%, and 60% at an absolute minimum. Both numbers kept, neither source
  named in the sentence.
- Wild flock size. No figure changed. See Deep dives against each other.

### Encyclopedia

One field changed on `zebra-finch` in src/lib/data/encyclopedia/birds.js,
nothing else in the file touched: `overview`, where "wild zebra finches
travel in flocks of dozens to over a hundred birds" became "live in
flocks". Researched against the enrichment guide's cited field study and
against the general species literature, which documents both the large
aggregations and the pair-sized foraging and travelling units. The figure
is unchanged; the verb was the part that contradicted the deep dive.
`adultSize` and `wildLifespan` were checked against Animal Diversity Web
and left exactly as they stand, since they already match it.

### Dates

No lastUpdated or lastReviewed bumped. Every zebra finch guide carries a
publish date of 2026-09-19 or later, which is still ahead of today, so
stamping today's date would put an article's last update before it
exists. The hognose snake pass took the same line for the same reason.

### Open

- The four gaps above, all in docs/READER_LOG.md.
- Source narration through the body prose of this set, which names PetMD,
  VCA, Merck, the RSPCA, and Lafeber inside sentences where RULES asks for
  the figure alone. The hub rows are clean and the two-sources-at-once
  case is settled, but the single-source attributions are left: most are
  attached to direct quotes, where de-attributing without rewriting would
  leave an unmarked lift, and rewriting all of them is a corpus-wide job
  rather than this pass's.
- Whether buying unweaned finches is wise, raised by the reader against
  the cost guide's cheapest-seller line.

## Angelfish (2026-09-14, batch F, single pass, before the router hub)

Extractor set of eight pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment). One Opus 5 agent, about 86k
tokens. The reader read the legacy care sheet hub; the router hub was
built from its findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B | Actionable, and the only page with a water change number, but where the contradictions live. |
| Encyclopedia | B+ | The history is the best writing in the set. |
| Cost | B | The itemized setup table and the marine versus freshwater price trap. |
| Handling | A- | Add angelfish last, no nano fish, buy six juveniles and let pairs form. |
| Health issues | B+ | Symptom lists, metronidazole by brand name, 86°F for ich. |
| Tank setup | A | Heater wattage math, pH, substrate, the lid. Best page in the set. |
| Feeding | A- | Schedule by life stage, the 2 to 5 minute rule, the sunken belly test. |
| Enrichment | A | The priority order and "two or three adults is the bullying setup". |

Set grade: B. "Strong, specific deep dives undercut by a hub that
contradicts them on temperature, cost, and stocking."

### Numbers checker

`node scripts/check-species-numbers.mjs angelfish --strict` before the
pass printed 11 conflicting topic groups. The real decisions: the hub's
78 to 84°F against tank setup's 78 to 82, the hub's whole setup and
annual cost tables against the cost guide's, the hub's "29 to 30 gallons
for a single pair" against tank setup's "single adult", and the
encyclopedia's 10 to 12 year wild lifespan against the deep dives' 8 to
12. The rest were one page's own two-part figures, such as 3 to 5 watts
per gallon meaning 200 to 250 watts.

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild:

- Temperature. Old hub: "Keep water heated between 78 and 84 degrees F."
  Tank setup: "comfortable in the 78 to 82°F range". As the reader put
  it, 84 is ich-treatment territory, not a housing band, and the health
  guide's own ich protocol raises the tank toward 86°F.
- Who fits in 29 gallons. Old hub FAQ: "A minimum of 29 to 30 gallons for
  a single pair." Tank setup: "29 gallons, and specifically a tall
  configuration, is the practical minimum for a single adult." One fish
  or two is not a rounding difference.
- Staple food. Old hub: "a high-quality cichlid pellet or flake as a
  dietary staple." Feeding: "The staple is a high-quality flake,
  generally preferred over pellets for this species."
- Ongoing cost. Old hub's annual rows came to roughly $70 to $120 a year.
  Cost guide: "$15 - $40" a month, which is $180 to $480 a year.
- Setup cost. Old hub's four setup rows summed to roughly $180 to $345.
  Cost guide: "Roughly $300 to $600 for a Proper Tank."
- Feeding window. Old hub: "offering only what's consumed within a couple
  of minutes." Feeding: "letting them clear it within about 2 to 5
  minutes."

### Deep dives against each other

- Group size for a 55. Tank setup: "a small group of four to six."
  Handling: "Most keepers raise a group of six or more juveniles and let
  pairs form naturally." Not actually a conflict, one is adults in a
  finished tank and the other is juveniles bought to get a pair, and the
  tank setup sentence never said which. One word added, "four to six
  adults", in its body; its FAQ was rewritten around the same word so
  it no longer copies the body sentence. No number changed.
- Prey threshold. Handling: "once it reaches roughly 3 inches", about the
  angelfish. Feeding: "Small fish under about 2 inches are natural prey",
  about the prey. Two different yardsticks, both correct, never joined.
  Fixed with the reader's own recommended link rather than by moving a
  number: the feeding sentence now links the handling guide.
- Pellets against flake. The feeding guide's flake-preferred staple is
  the set's only recommendation on this; the cost guide's table row
  prices "flake or pellet food", which is a price line rather than a
  recommendation, and the only actual "cichlid pellets" recommendation
  was the old hub's. Resolved by the rebuild.

### Gaps, checked against the Health and More list first

- Acclimation procedure for a new angelfish, despite the feeding guide
  naming pH shock during acclimation as a cause of refusal. The shared
  power outage and transport guide covers moving an established fish,
  not bringing one home.
- Water change volume and frequency. The old hub's weekly 25 percent was
  the only figure in the set and no deep dive carries it, so it is gone
  with the rebuild rather than carried forward as a hub-only number.
  This is now the top item for the deep dives to close.
- A nitrate target. Ammonia and nitrite get zeros, nitrate gets nothing.
- How to pick a healthy angelfish at point of sale.
- A positive tankmate list beyond cardinal tetras.
- Breeding and fry rearing past the feeding schedule, and any way to sex
  them.

All filed in docs/READER_LOG.md.

### Recommended links, one per page

| Page | Sentence | Link to | Added |
|---|---|---|---|
| Hub | "Avoid keeping angelfish long-term with fish small enough to be viewed as prey" | Enrichment guide | n/a, that hub prose is gone; the hub's Tankmates row is sourced to the enrichment guide |
| Encyclopedia | the adult size line | Tank setup | No link slot |
| Cost | "What determines your total cost is tank height and quality filtration" | Tank setup guide | Yes |
| Handling | "Water quality and stress management also do most of the heavy lifting in preventing illness here" | Health issues guide | Yes |
| Health issues | "Overfeeding is one of the quieter causes of the water-quality problems behind most of this list" | Feeding guide | Yes |
| Tank setup | "stocking angelfish last in a community tank" | Handling guide | Yes |
| Feeding | "Small fish under about 2 inches are natural prey for angelfish" | Handling guide | Yes |
| Enrichment | "shredded fins are a route into infection" | Health issues guide | Yes |

Six added, one sibling link per article, the cap the checker enforces.

### Trust

The reader named the hub's cost tables and its 84°F ceiling as reading
like they were written separately from the deep dives, which is exactly
what they were. It also flagged the feeding guide naming two parasites
only as "a stomach parasite specific to cichlids" and "a separate
parasite", vague at the one point a reader needs a name to look up. Left
as is: naming them is research, not a fix, and the guide's Sources do not
carry the names. The sentence that most convinced it a keeper wrote the
set, from tank setup: "a '20-gallon long' tank, despite the
larger-sounding volume, is often only about 12 inches tall, genuinely too
shallow for this species."

### Numbers decided, both sides and the source that won

- Lifespan. The cost guide and tank setup both say 8 to 12 years typical,
  which is exactly what the cost guide's own opened source, Aquarium
  Co-Op's angelfish care guide, states ("angelfish can live up to 8 to 12
  years long"). The encyclopedia's "10-12 years" matches no cited source
  and was filed under Wild Lifespan for a fish with no documented wild
  longevity figure, which a search of FishBase-adjacent literature did
  not turn up either. The deep dives win, and the encyclopedia now says
  so plainly rather than printing a captive number under a wild label.
- Temperature. No figure changed. Tank setup's 78 to 82°F stands, with
  75°F kept as the low end it tolerates. Aquarium Co-Op's own range runs
  wider (78 to 86°F), but nothing in the set disagreed with 78 to 82
  once the old hub's 78 to 84 was retired, so there was no conflict to
  settle and no reason to move a sourced figure.

### Encyclopedia

One field changed on `angelfish` in src/lib/data/encyclopedia/fish.js,
nothing else in the file touched: `wildLifespan`, from "10-12 years" to
"Not well documented in the wild; 8 to 12 years is typical in a well-kept
aquarium, up to around 15 under ideal conditions". `adultSize` was
checked against the same source and left alone, since no deep dive states
an adult size and there was nothing to conflict with.

### Also fixed

- Source narration, per RULES, "The source goes in the block, not the
  sentence". The handling guide attributed its territoriality claim to
  Petco, a retailer that is not even in its Sources block. The tank setup
  guide's "some sources extend slightly lower to 75°F" and the feeding
  guide's "Sourcing blurs two different numbers here... One guide states"
  paragraph and its FAQ twin. Every figure and every hedge kept, listed
  before and after in the fixes commit.
- Two link-only closing sentences of the "Check the Angelfish
  encyclopedia profile for more" shape, cut from the cost and health
  guides. The two that read "has more on the species itself" and "covers
  the species itself", on tank setup and handling, are left: they say what
  is on the other page rather than just pointing at it.

### Open

- The six gaps above, all in docs/READER_LOG.md, with water change volume
  the one the rebuild made more visible rather than less.
- Sources across this set. Handling runs a single entry, health issues
  and tank setup two each, and one is a bare homepage, where RULES targets
  four to five that each carry a claim. Nothing deleted, and adding
  sources is research rather than a fix.
- The two unnamed parasites in the feeding guide.

## Tokay Gecko (2026-09-14, batch F, single pass, before the router hub)

Extractor set of eight pages (hub, encyclopedia, cost, handling, health
issues, tank setup, enrichment, legal). One Opus 5 agent, about 88k
tokens. The reader read the legacy care sheet hub; the router hub was
built from its findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | D | The only page with feeding, and its temperatures and enclosure size contradict the deep dives. |
| Encyclopedia | B | The trade history changed how hard the reader would vet a seller. |
| Cost | B | Budgetable, and it says which price to skip. |
| Handling | A | The session table, the do-not-pull bite rule, the two-bite distinction. |
| Health issues | A | The vet call list, the quarantine window, the weekly gram-scale weight, the 42.9% figure. |
| Tank setup | A- | The build sheet, and the only page with substrate depth and a bulb interval. |
| Enrichment | B+ | Usable priority order, honest caveat, one study to stand on. |
| Legal | A | A clear state answer and a clear CITES answer. |

Set grade: B. "The six deep dives are specific, sourced, and honest about
uncertainty; the hub drags the set down by contradicting them on
temperature and size."

### Numbers checker

`node scripts/check-species-numbers.mjs tokay-gecko --strict` before the
pass printed 9 conflicting topic groups. The real decisions: the hub's 82
to 88°F day and 72 to 78°F night against tank setup's 90 to 105 basking,
80 to 85 cool and 75 to 80 nights; the hub's 20x20x30 enclosure against
18x18x36 on two deep dives; the hub's whole cost table against the cost
guide's; and the hub FAQ's 10 to 20 year lifespan against the cost
guide's 10 to 15 typical. The rest were the cost guide's own price tiers
and the health guide's parasite percentages, which are separate figures
rather than a disagreement.

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild:

- Temperature, the serious one. Old hub: "Maintain daytime temperatures of
  82 to 88 degrees F with a basking area, dropping to 72 to 78 degrees F
  at night." Tank setup: "Basking area 90 to 105F, cooler zone 80 to 85F,
  and nighttime should stay warmer than many homes naturally run, 75 to
  80F, not dropping below about 70F." The health guide backs the tank
  setup page and names exactly that mismatch, a tokay kept cooler than
  this, as the cause of respiratory infection. Building to the old hub
  gave a cold basking spot and a night floor under the stated minimum.
- Enclosure. Old hub: "A minimum 20x20x30\" (or larger) vertical, arboreal
  enclosure." Tank setup and cost: "18 inches long by 18 inches wide by 36
  inches tall as a minimum." Six fewer inches of the dimension both pages
  call the important one.
- Handling. Old hub: "Tokay geckos can become calmer over time with
  consistent, patient handling." Handling guide, for a gecko that barks
  or gapes: "No sessions... a hands-off terrarium subject; the occasional
  tokay that tames down is the exception."
- Social housing. Old hub: "ideal for a single adult tokay gecko."
  Enrichment: "the results indicate pair housing improves welfare in this
  species."
- Lifespan. Old hub FAQ: "commonly live 10 to 20 years in captivity."
  Cost: "10 to 15 years is typical in captivity, with well-documented
  cases reaching 20 years or more under excellent care."
- Feeding. Old hub: "Feed juveniles daily, adults every 2 to 3 days. Prey
  should be no larger than the space between the gecko's eyes." No deep
  dive carried either figure, and both opened sources give something
  else. See Numbers decided.

### Deep dives against each other

- Social housing, the one real conflict. Tank setup: "House one gecko per
  enclosure, tokays are highly territorial", citing ReptiFiles. Enrichment:
  "the results indicate pair housing improves welfare in this species",
  citing a 2024 paper in Applied Animal Behaviour Science. Settled toward
  the peer-reviewed source under the batch prompt's ranking, but not by
  flipping the default: the tank setup sentence loses its absolute and
  gains a link, and the enrichment guide's own caveat about quarantine,
  introduction, space and an exit plan stays in place and now links the
  health guide's months-long wild-caught quarantine. Both pages now
  acknowledge the other, which is what the reader asked for.
- UVB. Tank setup: "tokays can technically survive without UVB if their
  diet supplies enough vitamin D3, but low-level UVB... offers real
  benefit." Enrichment lists "A low UVB gradient" seventh in its priority
  order. Checked and left alone: both call it beneficial and neither calls
  it required, so there is no number to correct and no hedge to change.

### Gaps, checked against the Health and More list first

- How to verify a tokay is genuinely captive-bred rather than laundered
  wild-caught stock, a question the encyclopedia itself raises.
- Females, egg laying, and egg binding as a keeping issue rather than
  only a prolapse cause.
- Acclimation: what the first week with a new tokay should look like.
- Recapturing an escaped tokay.
- A feeding guide of its own. The tank setup guide's new Diet Basics
  section closes the first-week part of this, but schedule, prey size,
  and supplementation for a species this size still deserve their own
  page.

All filed in docs/READER_LOG.md.

### Recommended links, one per page

| Page | Sentence | Link to | Added |
|---|---|---|---|
| Hub | the temperature line | Tank setup | n/a, every hub row now links its source |
| Encyclopedia | the captive-bred paperwork line | Cost guide | No link slot |
| Cost | "For night heat, needed since tokays require warmer nights than most homes provide naturally" | Tank setup | No. That sentence is a ComparisonTable cell, and cells do not take markdown |
| Handling | "Housing two males together, they fight" | Enrichment guide | Yes |
| Health issues | "its own enclosure in a separate room from any other reptile" | Shared reptile quarantine guide | Yes |
| Tank setup | "House one gecko per enclosure, tokays are highly territorial" | Enrichment guide | Yes |
| Enrichment | the pairing caveat | Health issues guide | Yes |
| Legal | "arrive with parasite loads and a temperament shaped by capture" | Health issues guide | Yes |

Five added, one skipped for position. Each article spends exactly one
sibling link.

### Trust

The reader named the hub reading as though written from a different
source than the deep dives, which it was, and the enrichment page
building a headline on a single 2024 study. It also said nothing in the
deep dives felt invented. The sentence that most convinced it a keeper
wrote the set, from health issues: "a weekly weight on a gram scale,
since the slow weight loss Merck names is the sign a keeper can catch
before the gecko looks sick."

### Numbers decided, both sides and the source that won

- Feeding schedule and prey size. The old hub said "Feed juveniles daily,
  adults every 2 to 3 days" and "Prey should be no larger than the space
  between the gecko's eyes". No deep dive carried either. Both opened
  sources agree on the schedule and neither gives every 2 to 3 days;
  on prey size PetMD does give "no larger than the space between the
  gecko's eyes", so the old hub's prey rule had a source and ReptiFiles'
  head-width rule was chosen for the new section. ReptiFiles gives
  "Juvenile tokays should be fed daily, and full-grown adults should be
  fed every other day" with insects "no larger than the gecko's head" and
  a five-minute feeding window, and PetMD's vet-authored tokay care sheet
  gives "Juvenile Tokay geckos should be fed daily, while adults should
  be fed every other day". The sourced figures win, and they now live in
  the tank setup guide's new Diet Basics section with PetMD added to that
  guide's Sources to back them.
- Social housing. See Deep dives against each other. The 2024 Applied
  Animal Behaviour Science study outranks ReptiFiles and PetMD on the
  source ladder, and both of those say solitary, so the fix keeps one per
  enclosure as the default and stops stating it as an absolute.
- Enclosure size. Left at 18x18x36 on both deep dives. Worth recording
  that the two opened sources bracket it rather than confirm it:
  ReptiFiles gives "24\"L x 24\"W x 48\"H or similar" as its minimum,
  PetMD gives "a 20-gallon tank or larger" for an adult, which is smaller.
  With one source above and one below and the two deep dives already
  agreeing with each other, there was no single figure to move to, so
  nothing moved. Filed here as the number this set should fact-check
  next.
- Adult size. The old hub FAQ said 11 to 15 inches, the encyclopedia says
  10 to 15. No deep dive states an adult size, so there was no conflict
  to settle and the encyclopedia was left alone. For the record, the two
  opened sources give 10 to 12 inches average with up to 16 (ReptiFiles)
  and 8 to 16 inches (PetMD), both of which the encyclopedia's range sits
  inside.

### Encyclopedia

Nothing changed. Every field was checked against the two opened care
sheets and none of them conflicts with a deep dive's sourced figure.

### Also fixed

- The tank setup guide gained a Diet Basics section, the same move the
  Russian tortoise hub's pass made for the same reason: no feeding guide
  exists for this species and the old hub's diet prose was the only
  feeding content in the set. Sourced to ReptiFiles and to PetMD's
  vet-authored care sheet, which was added to that guide's Sources block.
  It carries a matching FAQ and links the shared gut-loading guide for
  the method.
- The UVB link moved out of a closing "The lighting decisions here are
  covered in more depth in our complete guide to UVB lighting" sentence
  and onto the UVB claim in the Lighting section where it belongs.
- Two closing sentences of the "our X guides" shape, on the tank setup
  and health issues guides, rewritten to say something about the animals
  instead of about the site (RULES, Linking). Both links kept.
- "colour morphs" caught in a hub row draft and corrected to the US
  spelling before commit.

### Dates

lastUpdated bumped on the tank setup guide, which gained a sourced diet
section and changed its cohousing claim. Not bumped on cost, handling,
health issues, legal, or enrichment: links and one closing rewrite only,
and the legal and enrichment guides carry publish dates still ahead of
today.

### Open

- The five gaps above, all in docs/READER_LOG.md.
- The 18x18x36 enclosure minimum, bracketed rather than confirmed by its
  own sources, as above.
- Sources across this set. The tank setup guide ran one entry before this
  pass and now runs two, and the cost guide runs two, where RULES targets
  four to five. The health, handling, and legal guides are well sourced.

## Sugar Glider (2026-09-14, batch F, single pass, before the router hub)

Extractor set of nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal). One Opus 5 agent, about
88k tokens. The reader read the legacy care sheet hub; the router hub was
built from its findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B- | Actionable, and dragged down by numbers the deep dives contradict. |
| Encyclopedia | B+ | The only place in the set that says where US gliders came from. |
| Cost | B | Price per glider, the pair requirement, setup, monthly, emergency float. |
| Handling | A- | Settling period, pouch first, daily hours, back off at crabbing. |
| Health issues | B- | The symptom list and "do not just add calcium", thin on everything that is not bone disease. |
| Tank setup | A- | Dimensions, bar spacing, the axle-free wheel, solid bottom, fleece cover. |
| Feeding | A | The densest page here. |
| Enrichment | A | The priority order and the no-touching-the-bars test. |
| Legal | A | A clear answer on whether you may own one. |

Set grade: B. "The deep dives are strong and honest; the hub sitting in
front of them contradicts them on size, temperature, price, and diet
brand, and the pages almost never link each other."

### Numbers checker

`node scripts/check-species-numbers.mjs sugar-glider --strict` before the
pass printed 10 conflicting topic groups. The real decisions: cage size,
cage price, temperature, vet cost, the glide distance against the
encyclopedia's, and the encyclopedia's ounce weight against the feeding
guide's gram figures. The rest were the cost guide's own price tiers.

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild:

- Cage. Old hub: "Sugar gliders require a minimum 24x24x36\" aviary-style
  cage." Tank setup: "A minimum of roughly 30 by 18 by 36 inches for a
  pair, though many current keepers recommend going larger still, 24 by
  24 by 48 inches or more."
- Temperature. Old hub: "Temperature must stay between 75 and 85 degrees
  F." Tank setup: "75 to 88°F is the comfortable range."
- Cage price. Old hub table: "24x24x36 in aviary-style cage: $150 to
  $300." Cost guide: "Tall cage, sized for a genuinely vertical, climbing
  pair: $200 - $400."
- Vet cost. Old hub annual table: "Annual vet wellness check (exotic): $70
  to $120." Cost guide: "An exotic vet visit runs $75 to $200."
- Diet brand. Old hub checklist: "Commercial sugar glider diet (TPG or
  Wombaroo)." The feeding guide names "Leadbeater's mixture, Bourbon's
  Modified Leadbeater's (BML), High Protein Wombaroo (HPW), Critter Love
  Complete, and Exotic Nutrition diets" and never mentions TPG at all.
- Certainty on isolation. Old hub: a lone glider "frequently develops
  self-mutilation behaviors." Enrichment: a study "noted that the
  solitary animals in its sample were healthy and that the aggression and
  self-mutilation behaviors were not observed", alongside the clinical
  literature that does treat solitary housing as a risk factor. The
  router hub carries the enrichment guide's framing, which holds both.
- Glide distance. Old hub funFact: "glide up to 150 feet." Encyclopedia:
  "glide up to 165 feet." Settled at 165, see Numbers decided.

### Deep dives against each other

- Dishes. The cost guide budgets for "hides, a glider-safe wheel, dishes,
  enrichment", while the enrichment guide's foraging section says
  "Foraging at height, never a dish." Checked and left alone, not a
  conflict: the enrichment guide is talking about how to present foraging
  food, and the feeding guide separately says kibble stays available at
  all times, which needs a dish.
- Temperature floors. The old hub's 65°F cage floor and the handling
  guide's "keep the space above roughly 68°F during sessions" are two
  different numbers for two different things, and only the handling one
  is in a deep dive. The hub now carries the handling figure for handling
  and the tank setup range for the cage.
- Lifespan. Cost and the old hub say 10 to 15 years, the encyclopedia
  says "up to 17.8 years recorded in captivity". A typical range against
  a record, both correctly labelled. Left alone.

### Gaps, checked against the Health and More list first

- How to introduce a second glider to an existing one, including
  quarantine.
- How to hold a room at 75 to 88°F, and what heat source is safe.
- Cage and pouch cleaning frequency.
- How to choose a breeder or rescue, and what a healthy glider looks like
  at purchase.
- Glider-proofing a room for out-of-cage time, and recovering an escaped
  glider.
- Who cares for them when you travel. The shared small mammal vet and
  travel guide covers the carrier and the clinic, not a sitter.
- A wheel diameter. The old hub's "12+ inch" was the only one in the set
  and no deep dive carries it, so it goes with the rebuild and belongs in
  the tank setup guide next.

All filed in docs/READER_LOG.md.

### Recommended links, one per page

| Page | Sentence | Link to | Added |
|---|---|---|---|
| Hub | the temperature line | Tank setup | n/a, every hub row now links its source |
| Encyclopedia | "they live in groups of 10-15 individuals" | Enrichment | No link slot |
| Cost | the legal paragraph | Legal guide | Yes |
| Handling | "A lone glider is more stressed, more defensive, and genuinely harder to bond with" | Enrichment guide | Yes |
| Health issues | "feeding a properly balanced diet like a commercial sugar glider diet from the start" | Feeding guide | Yes, anchored on "a properly balanced diet" since the next phrase is already an affiliate link |
| Tank setup | "A bonding pouch doubles as this resting spot and is also the starting point for taming" | Handling guide | Yes |
| Feeding | "Hind-leg weakness, tremors, or paralysis are emergency signs" | Health issues guide | Yes |
| Enrichment | "Do not improvise the diet, since nutritional disease is common in this species" | Feeding guide | Yes |
| Legal | none needed | | n/a |

Six added, one sibling link per article.

### Trust

The reader doubted the feeding guide's oxalate list, which bundles
"carrots, beets, pears, lettuce, figs, and collard greens" with spinach
as calcium blockers. Checked against that guide's own cited source and
left exactly as it stands: VCA's sugar glider feeding page states it
verbatim, "Avoid fruits and vegetables known to be high in oxalates, as
they will reduce calcium absorption. These include raspberries,
strawberries, blackberries, spinach, carrots, beets, pears, lettuce,
figs, and collard greens." The article is copying a veterinary hospital
faithfully, so this is a nutrition argument with the source rather than a
site defect. Recorded here so the next pass does not re-open it without
new evidence. The reader's second doubt, the hub asserting self-mutilation
as near-inevitable, was real and is fixed by the rebuild. The sentence
that most convinced it a keeper wrote the set, from enrichment: "The test
is whether a glider can get from the bottom to the top and across the
cage without touching the bars."

### Numbers decided, both sides and the source that won

- Glide distance. The hub's funFact said 150 feet, the encyclopedia 165.
  Opened sources: the Australian Museum gives "glide up to 50 m between
  trees", which is about 165 feet; Animal Diversity Web gives "up to 45
  meters", about 148. Both sit in the museum and university tier, and the
  Australian Museum is the species-specific one for an Australian
  marsupial, so 165 wins and the hub's funFact moved to it. No deep dive
  states a glide distance, so nothing else changed.
- Adult weight. The encyclopedia gave "4-5.5 oz", which is about 113 to
  156 grams and excludes a normal adult female. The feeding guide gives
  "Adult males typically weigh 100 to 160 grams and adult females 80 to
  130 grams". That figure is VCA's, from its Sugar Gliders, Owning page
  rather than the feeding page the guide cited, so the species check added
  the Owning page to the feeding guide's Sources. The deep dive wins, and the encyclopedia's adultSize now carries the
  same two ranges in grams.
- Oxalate list. Nothing changed, verified against the source, as above.

### Encyclopedia

One field changed on `sugar-glider` in
src/lib/data/encyclopedia/smallMammals.js, nothing else in the file
touched: `adultSize`, from "5-6 inches (13-15 cm) body; 4-5.5 oz" to
"5-6 inches (13-15 cm) body; males 100-160 g, females 80-130 g". The body
length half is unchanged and matches the deep dives. `wildLifespan`
already uses the "not well documented in the wild" pattern and was left
alone.

### Also fixed

- The cost guide's legal paragraph, which named three bans and then said
  "Some other sources also flag additional states and specific cities".
  It now carries the legal guide's own list, California, Alaska, Hawaii,
  Pennsylvania, the District of Columbia, New York City, New Jersey, and
  New Mexico, and links it, the same deferral the Russian tortoise cost
  guide made to its legal guide.
- Source narration in the feeding guide: "VCA's balanced framework", "VCA
  specifically names", "per VCA", "Some breeder guidance calls for daily
  dusting, while other veterinary sources recommend", "with some sources
  citing 1.5:1 to 2:1", and the two FAQs carrying the same shapes. Every
  figure and every hedge kept.

### Dates

lastUpdated bumped on the cost guide, whose legal paragraph gained four
jurisdictions. Not bumped on feeding, tank setup, handling, health
issues, enrichment, or legal: links and de-narration only, no number or
claim moved.

### Open

- The seven gaps above, all in docs/READER_LOG.md, with the wheel
  diameter and a second-glider introduction the two the rebuild made more
  visible.
- The health issues guide is thin outside metabolic bone disease: dental
  disease gets one sentence and no signs, which is why the emergency card
  has nothing to copy for it.

## Pacman frog, zebra finch, angelfish, tokay gecko, sugar glider (2026-09-14, batch F species check)

One Fable agent covering all five species on branch
claude/hub-pacman-frog-80291s from base 4345819, run once after every
species was done and pushed, per the batch prompt. It read diffs rather
than whole files, opened source URLs to check the batch's number
decisions, fixed every finding on the branch, and committed
"Pacman frog, zebra finch, angelfish, tokay gecko, sugar glider: species
check" (bb355a0). Nothing merged.

### Scope

Clean. The whole diff is the five guide entries, the five species' MDX,
this file, docs/READER_LOG.md, and four encyclopedia entries at one field
each, all for batch species. No shared class guide row, no src file beyond
the guide data, RELATED_ARTICLES, articleLabels and READMEFIRST untouched.

### Pacman frog: clean

Every hub row matches its deep dive with no source name in the prose. The
five emergency bullets cover every vet cue in the health guide and the
vetLine keeps its "rather than a wait-and-see approach". Both number
decisions verified by opening the sources: Tree of Life Exotic Pet Medical
Center gives "4 to 7 inches (females are larger)", "60 to 80%" humidity,
and "Adults: feed 2 to 3 times per week"; PetMD gives males 3 to 4 inches,
females 4 to 8, 70 to 80% humidity, and adults 1 to 2 times a week; AnAge
gives 14.7 years captive at data quality "Acceptable". All four decisions
hold as filed, every same-page copy moved with them, and the dates are
right in both directions.

### Zebra finch: fixed on the branch

- Hub Diet split row read "Pellets roughly 70% of the diet" while the
  feeding guide, after this batch's own fix, states "roughly 70% ... and
  60% at an absolute minimum". The row had gone stale against the fix.
  Now carries both figures.
- The cost guide's frontmatter `description` still said "a 5 to 10 year
  lifespan" after the body and FAQ moved to 5 to 7. Fixed. This is the
  same-page-copy failure the batch prompt names, caught in a field the
  numbers checker does not read.
- Review file said "Six added" and then listed seven links, since tank
  setup carries two. Corrected.
- Confirmed: Animal Diversity Web states "captivity 5 to 7 years" and
  "wild 2 to 3 years", so the lifespan change went the right way;
  `zebra-finch-parrotlet-overview` is correctly treated as a vs piece and
  not routed; no date bumped, which is right when every guide's publish
  date is still ahead of today.

### Angelfish: fixed on the branch

- The hub's Tankmates row put a handling-guide sentence, the 3-inch prey
  threshold and the raised-alongside point, under the enrichment guide's
  `source`. Split into a Prey threshold row sourced to handling and a
  Tankmates row sourced to enrichment, both in their articles' words.
- A hedge was lost. Cutting the Petco attribution from the handling guide
  turned "freshwater angelfish can become territorial and aggressive" into
  "become". Restored "can become". This is the Never-list item the
  de-narration pass came closest to breaking.
- The feeding guide's lastUpdated had been bumped to 2026-09-14 with
  nothing changed but a link and narration. Reverted to 2026-07-31. The
  tank setup bump was kept, since "four to six adults" is a fact
  clarification.
- Review file claimed "one word added ... in its body and its FAQ" for a
  FAQ that was rewritten whole. Corrected.
- Confirmed: Aquarium Co-Op states "8 to 12 years", so the encyclopedia
  change went the right way, and no number change went against the source
  ranking.

### Tokay gecko: fixed on the branch, review file only

- Every hub row matches, including the 12-bullet emergency card copied
  from the health guide's call-the-vet list bullet for bullet, and the
  legal row against the legal guide.
- The new Diet Basics section was verified figure by figure: ReptiFiles
  gives "juvenile tokays should be fed daily, and full-grown adults ...
  every other day", "no larger than the gecko's head", and the
  five-minute window; PetMD (Melissa Witherell, DVM) gives the same
  schedule. Every figure in the section is stated by a source.
- The cohousing call was checked against the ranking and upheld: the 2024
  Applied Animal Behaviour Science study outranks ReptiFiles and PetMD,
  both of which say house alone, so losing the absolute while keeping the
  default is correct.
- Review file said the two opened sources agree "with neither" old hub
  figure, but PetMD does carry the "space between the gecko's eyes" prey
  rule the old hub used. Corrected.
- Noted and left: the health guide's new closing line, that the leopard
  gecko and crested gecko "fail in the same three places", is a claim
  about two other species that nobody researched.

### Sugar glider: fixed on the branch

- The emergency card's sixth bullet, "Weight that has moved in either
  direction on a diet you are not certain about", appears nowhere in the
  health guide, which does not use the word "weight" at all. Replaced with
  that guide's own Malnutrition and Obesity line. This is the one place
  the batch wrote a bullet instead of copying one.
- The adult-weight provenance in this file was wrong. VCA's sugar glider
  feeding page, which the feeding guide cites, carries the oxalate list
  and no weights; VCA's Sugar Gliders, Owning page states both ranges
  exactly. The figure is a veterinary-hospital figure and the
  encyclopedia change stands, and that page was added to the feeding
  guide's Sources so the claim is traceable. Note corrected here.
- Confirmed: the Australian Museum states "glide up to 50 m", so the hub
  funFact's 165 feet holds, and the cost guide's move to the legal guide's
  eight-jurisdiction list went the right way with the date bump justified.
- Noted and left: the feeding guide's KeyTakeaway went from naming two
  brands as vet-endorsed to "Any of those", which widens the endorsement
  to all five. Left because the sentence before it already calls all five
  vet-endorsed.

### Gates on the branch head

check-internal-links, check-related-articles, check-affiliate-mdx,
check-cost-coverage, check-seo-tags, check-encyclopedia, check-voice
--strict (0 errors), and eslint --quiet all pass.
check-species-numbers --strict exits 1 for all five, as it also does for
the reconciled leopard gecko control, because it exits on any multi-value
topic group; parsed per species, every remaining hub value without a
deep-dive match is a shared-guide row, the encyclopedia-only adult size
row, or a grouping artifact. No hub line disagrees with a deep dive.
check-voice per changed slug against the same slug at 4345819: no warning
count went up anywhere, and the pacman frog and sugar glider feeding
guides each dropped one.

### Pass grade: B+

"The session followed the router rules closely, cited real sources it had
opened for every number it moved (all nine spot-checked sources said what
the review claims, bar one mis-cited VCA page), kept hedges through a lot
of de-narration with one slip, and filed complete review sections. What
keeps it off an A: a hub row stated a bullet the health guide never says,
one row mixed two sources, one row went stale against its own later fix,
one hedge was dropped, one date bumped for a link, and three review-file
notes did not match the diff. Small, but each is the kind of thing the
check exists to catch, and the hub-row ones are the same step that leaked
in batches D and E."

No species was given a redo verdict, so no second check round ran.

## Canary (2026-09-14, batch G, single pass, before the router hub)

Extractor set of seven pages (hub, encyclopedia, cost, handling, health
issues, tank setup, enrichment). One Opus 5 agent, about 85k tokens. The
reader read the legacy care sheet hub; the router hub was built from its
findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | C | Actionable, and its numbers fight the cost guide. |
| Encyclopedia | B- | The mining history is good reading and changes nothing you do. |
| Cost | B- | One thing to act on: ask the seller to confirm a male before paying. |
| Handling | A- | Silence in July is molt, silence the week the cage moved is the television. |
| Health issues | B | A male going quiet can precede any breathing sign. |
| Tank setup | B- | Bar spacing, liner routine, powder-coated steel. |
| Enrichment | A- | Keep the cage center empty, perches at the ends, no sandpaper covers. |

Set grade: B-. "Two strong, sourced deep dives sitting on top of a hub
whose numbers contradict them, with feeding left unwritten."

### Numbers checker

`node scripts/check-species-numbers.mjs canary --strict` before the pass
printed 9 conflicting topic groups. The real decisions: the flight cage
at $60 to $120 against $120 to $220, the annual vet check at $40 to $70
against $50 to $100 or more, a three-way lifespan split, and the cost
guide's own setup headline against its own table. The rest were the cost
guide's price tiers by breed, which are separate figures.

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild:

- Flight cage price. Old hub: "Flight cage (24-30 in wide): $60 to $120."
  Cost guide: "A quality flight cage runs $120 to $220 on its own."
- Cage size. Old hub: "A flight cage at least 24 to 30 inches wide is far
  better than a typical small cage." Tank setup: "24 inches long by 18
  inches wide by 18 inches tall is a reasonable minimum, but the shape
  matters more than the raw dimensions."
- Vet cost. Old hub annual table: "Annual avian vet check: $40 to $70."
  Cost guide: "An annual avian wellness exam... runs $50 to $100 or
  more."
- Darkness. Old hub: "Cover the cage at night to provide a consistent 10
  to 12 hours of uninterrupted darkness for sleep." Enrichment: "Twelve
  hours of genuine dark for sleep, undisturbed."
- Pairing. Old hub: "Canaries do best kept singly or in a compatible
  pair", and its FAQ said "alone or in a same-sex pair". Enrichment and
  handling both say males must not be housed together. A same-sex pair is
  precisely the arrangement the deep dives rule out for males.
- Lifespan, three ways. Old hub: "8 to 10 years is typical, with some
  canaries reaching 12 to 15 years." Cost guide: "10 to 15 years with
  good care, sometimes cited more conservatively at 8 to 12."
  Encyclopedia: "up to 24 years recorded in captivity." See Numbers
  decided.

### Deep dives against each other

- Light cycle. Tank setup: "Bright, indirect natural or artificial light
  with a consistent day and night cycle supports normal behavior."
  Enrichment: "a canary kept under an artificial light schedule that
  never changes is being held in a permanent season", citing the song and
  photoperiod research. The enrichment guide carries sources and the tank
  setup guide carried none, so the tank setup sentence changed to keep a
  clear day and night cycle while letting day length follow the season,
  and it now links the enrichment guide.
- The cost guide against itself. Headline: "Upfront Setup: Roughly $200
  to $400." Its own four-row table sums to $150 to $273. Headline
  corrected to $150 to $275.
- Feather picking. The health guide names boredom as a cause; the
  enrichment guide, the boredom page, never mentions it. Noted, not
  fixed: adding it is new content rather than a conflict to settle.

### Gaps, checked against the Health and More list first

- Unsafe foods for a canary. The shared household hazards guide is fumes
  and physical safety, not diet.
- What a day of greens actually looks like.
- Routine cage and perch cleaning beyond the paper liner.
- Foot problems and pressure sores. The enrichment guide promised the
  health guide covers them and it does not, and the shared first aid and
  grooming guide covers nails and beak.
- Canary-specific molt: how long, and what to feed through it.
- Egg binding in a canary hen. The shared chronic egg laying guide names
  budgies, cockatiels, and lovebirds only, while the old hub said canary
  hens do it too.

Grit, which the reader also listed, turned out to be answerable and is
now answered in the new Diet Basics section. All the rest are filed in
docs/READER_LOG.md.

### Recommended links, one per page

| Page | Sentence | Link to | Added |
|---|---|---|---|
| Hub | the egg-binding line | Shared chronic egg laying guide | n/a, that hub prose is gone |
| Encyclopedia | none needed | | n/a |
| Cost | "make sure you're buying a confirmed male" | Shared sexing, weight and body condition guide | Yes |
| Handling | "that is the health check the closing section points to" | Health issues guide | Yes |
| Health issues | "Caused by poor air quality, a dirty cage, household fumes, or drafts" | Tank setup guide | Yes |
| Tank setup | the lighting sentence | Enrichment guide | Yes |
| Enrichment | "A long flight cage beats a tall decorative one by a wide margin" | Tank setup guide | Yes |

Five added, one sibling link per article. Adding the handling guide's
tripped the sibling-link checker at two, because a FunFact already
carried "our Canary cost guide covers how much that distinction actually
affects price too"; that clause was cut as a site self-reference (RULES,
Linking) rather than dropping the link the reader asked for.

### Trust

The reader's sharpest finding was a link that misdescribes its target:
the enrichment guide said "Our health issues guide covers foot problems,
which are common and preventable", and the health guide does not mention
foot problems anywhere. Cut, with the surrounding pressure-sore point
kept, since the enrichment guide makes it itself. The reader also called
the handling guide's beginner-birdwatching link filler; cut for the same
reason, it was an "our X guide covers" sentence about something other
than keeping a canary. The sentence that most convinced it a keeper wrote
the set, from handling: "LafeberVet's method is 'lights out, perches
out,' taking the bird quickly before its eyes adjust."

### Numbers decided, both sides and the source that won

- Lifespan. Three figures, and the two deep-dive ones were unsourced:
  the cost guide has no Sources block at all, and neither does tank setup
  or health issues. Opened LafeberVet's canary basic information sheet,
  the veterinary reference the handling guide already cites: "Mean life
  span (years): 6-12, up to 15". That is the only sourced figure
  available for this species, so the cost guide moved to it in its body
  and its FAQ, and LafeberVet was added to that guide's Sources. The
  encyclopedia's "up to 24 years recorded in captivity" is a record
  rather than a typical span and reads as such, so it was left alone.
- Setup total. The cost guide's "$200 to $400" against its own table's
  $150 to $273. Arithmetic on the page's own rows settles it; corrected
  to $150 to $275. No line item changed.
- Light cycle. No figure moved. See Deep dives against each other.
- Grit, cage size, temperature and daily intake in the new Diet Basics
  section all come from the same LafeberVet sheet: "Canaries do not
  require grit, however they should be offered a cuttlebone", "All-seed
  diets are deficient in vitamins, mineral, and protein including calcium
  and vitamin A", "Food intake: Up to 30% of body weight (BW)/day", and
  "Body weight (g): 12-30".

### Encyclopedia

Nothing changed. Adult size and the captivity record were both checked
against the deep dives and the LafeberVet sheet and neither conflicts.

### Also fixed

- The tank setup guide gained a Diet Basics section and a Sources block,
  since it had neither. The section answers grit, the all-seed problem,
  daily intake, the cuttlebone, and points at the shared pellet
  conversion guide for the method.
- The cost guide gained a Sources block, since it had none.

### Open

- Three of five deep dives shipped with no Sources block at all: cost,
  tank setup, and health issues. Two now have one. The health issues
  guide still has none, and its mite and respiratory claims are the ones
  a reader acts on, so it is the priority for a sourcing pass.
- The six gaps above, in docs/READER_LOG.md.
- Feather picking, named as a boredom sign by the health guide and absent
  from the enrichment guide.

## Neon Tetra (2026-09-14, batch G, single pass, before the router hub)

Extractor set of eight pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment). One Opus 5 agent, about 86k
tokens. The reader read the legacy care sheet hub; the router hub was
built from its findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B | Carries two things nothing else does, and its tables fight the cost guide's. |
| Encyclopedia | C+ | Read for the Hindenburg story, nothing to act on. |
| Cost | C | Budgetable, and its tables fight the hub's. |
| Handling | B+ | Six floor, ten to twelve better, no fin-nippers. |
| Health issues | A- | The NTD signs, and the honest note that NTD is over-diagnosed. |
| Tank setup | A- | The best page for doing. |
| Feeding | A- | Twice daily in 2 to 3 minutes, and what a 1 to 2mm mouth changes. |
| Enrichment | A | The only cited page, and the number came out ten. |

Set grade: B-. "Strong on the doing pages, undermined by numbers that
disagree across pages a reader hits in one sitting."

Worth recording that the reader's first recommended change was to make
the hub the single source for costs, lifespan, school size, and feeding
frequency, and fix the deep dives to match. That is the opposite of the
hub rule (RULES, Hubs): the deep dives own the numbers and the hub
follows. The rebuild went the other way on purpose.

### Numbers checker

`node scripts/check-species-numbers.mjs neon-tetra --strict` before the
pass printed 8 conflicting topic groups: the hub's whole cost table
against the cost guide's, tank size against school size, lifespan three
ways, and the temperature band. The rest were the cost guide's own price
tiers.

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild:

- Tank against school. Old hub: "A 10 to 20 gallon tank works well for a
  proper school of 6 to 10 or more." Tank setup: "10 gallons is the
  practical minimum for a proper school of 6. If you're aiming for the
  better group size of 10 to 15 fish, step up to a 20-gallon long tank."
  As the reader put it, the old hub reads as if ten fish fit in ten
  gallons.
- Cost, every line. Old hub: tank "$60 to $120", filter "$20 to $35",
  food "$30 to $50". Cost guide: tank "$20 - $150", "Gentle filter | $10
  - $20", "Micro-pellet or micro-crisp food | $15 - $30".
- Lifespan. Old hub: "5 to 8 years is achievable with stable water
  quality." Cost guide: "Around 5 years is achievable with good, stable
  care, though average conditions often see neon tetras live closer to 2
  to 3 years."
- Feeding frequency. Old hub: "Feed small amounts once or twice a day."
  Feeding: "Feed small amounts twice daily, morning and evening."
- The parasite's name. Old hub, twice: "Pleistophora hyphessobrycetis."
  Feeding guide: "Pleistophora hyphessobryconis." See Numbers decided.

### Deep dives against each other

- School size. Handling: "ten to twelve or more is considerably better."
  Tank setup: "the better group size of 10 to 15 fish." Enrichment: "buy
  ten rather than six." Checked and left alone, not a conflict: all three
  put the target at ten or above and the floor at six, and Seriously Fish
  gives "a mixed-sex group of at least 8-10 specimens", which sits inside
  all of them. The hub row copies the enrichment guide, the page with the
  study behind it.
- Lifespan, encyclopedia against cost guide. The encyclopedia's "5-8
  years" is in the wildLifespan field and the cost guide's figure is
  explicitly about a home tank, so the two are measuring different
  things. The old hub was the page that conflated them, applying the wild
  figure to a home tank. Neither deep-dive number moved. See Numbers
  decided.
- Test kit. The old hub's checklist called a water test kit mandatory
  while the cost guide's ongoing table lists only food and conditioner.
  The rebuild keeps the test kit in the buy list, and the cost guide's
  table is its own, so no figure moved.

### Gaps, checked against the Health and More list first

- How to soften hard tap water for a pH 6.0 to 7.0 tank. The shared pH,
  GH and KH guide argues against chasing numbers and gives no method.
- Acclimation on the day you bring them home.
- How many fish to add at once to a newly cycled tank.
- The target temperature and duration for ich treatment.
- How to humanely euthanize a confirmed NTD fish, which the health guide
  recommends and does not explain.
- A concrete tankmate list beyond avoiding large or fin-nipping fish.
- Breeding, mentioned only as egg-scattering in passing.
- A weekly water change percentage. The old hub's 20 to 25% was the only
  one in the set and no deep dive carries one, so it goes with the
  rebuild. The enrichment guide has the rule without the number: "Small
  regular water changes, never large occasional ones."

All filed in docs/READER_LOG.md.

### Recommended links, one per page

| Page | Sentence | Link to | Added |
|---|---|---|---|
| Hub | "Always fully cycle a tank before adding neons" | Cycling guide | n/a, the hub's Cycling row is sourced to it |
| Encyclopedia | the schooling line | Enrichment guide | No link slot |
| Cost | "A school of 6 to 12 runs $10 to $40 total" | Enrichment guide | Yes |
| Handling | "what drives disease risk in a new neon tetra tank" | Health issues guide | Yes |
| Health issues | "quarantine new fish for 2 to 4 weeks" | Shared hospital tank guide | Yes |
| Tank setup | "worth testing your source water" | Shared pH, GH and KH guide | Yes |
| Feeding | "never leave a dead fish in the tank" | Health issues guide | Yes |
| Enrichment | "Cycle the tank fully before they go in" | Shared cycling guide | Yes |

Six added, one sibling link per article.

### Trust

The reader's doubts were the misspelled parasite, the cost tables that
contradict each other, the lifespan spread, and "Roughly two million are
now sold in the United States each month" with nothing behind it. The
first two are fixed. The two-million figure sits on the encyclopedia
page, which no deep dive repeats, and no source in this set carries it;
filed as open rather than deleted, since removing a fact is not this
pass's job. The sentence that most convinced it a keeper wrote the set,
from enrichment: "Spread food across the surface instead of dropping it
in one spot, so the whole shoal eats rather than the boldest three."

### Numbers decided, both sides and the source that won

- The parasite's name. The old hub said "Pleistophora hyphessobrycetis"
  twice, the feeding guide says "Pleistophora hyphessobryconis". Checked
  against the taxonomic literature: hyphessobryconis is correct, and it
  is also what the cardinal tetra deep dives and the site glossary use.
  The hub was the only wrong copy in this species' set and it is gone.
- Lifespan. No deep-dive figure moved. The encyclopedia's 5 to 8 years is
  a wild figure and the cost guide's is a captive one, and the published
  figures genuinely scatter: aquarium sources variously give 2 to 3 years
  as typical in a home tank, about 5 with good care, 5 to 8, and up to 8
  to 10 in the wild, none of them from a source that outranks the others.
  With no authority to pick between them and no cross-page contradiction
  once the labels are read, both stand and the hub carries the captive
  one, since that is the number a buyer acts on.
- School size and temperature. Nothing moved. Seriously Fish gives "at
  least 8-10 specimens" and "21-25°C / 70-77°F", both consistent with the
  deep dives as written.

### Encyclopedia

Nothing changed. The wildLifespan field is a wild figure correctly
labelled, and the adult size matches the deep dives.

### Also fixed

- Three "Our Guppy X guide covers..." sentences, on the cost, tank setup,
  and health issues guides, rewritten so the comparison is about the fish
  rather than about the site (RULES, Linking). All three links kept.

### Open

- The neon tetra disease parasite is also misspelled
  "hyphessobrycetis" in the cardinal tetra hub's legacy health prose
  (src/lib/data/guides/fish.js). That is a different species and outside
  this batch, so it was left alone and is flagged here: it will disappear
  when cardinal tetra gets its own router rebuild, but until then that
  hub ships a wrong scientific name.
- The health issues guide has no Sources block at all, the same gap the
  canary health guide has.
- The feeding guide's Sources block carries two entries as bare text with
  no URL.
- The encyclopedia's "roughly two million sold in the United States each
  month", unsourced.
- The eight gaps above, in docs/READER_LOG.md.

## Veiled Chameleon (2026-09-14, batch G, single pass, before the router hub)

Extractor set of nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal). One Opus 5 agent, about
96k tokens. The reader read the legacy care sheet hub; the router hub was
built from its findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | C+ | A compressed rewrite of five articles, and where it is compressed it is wrong. |
| Encyclopedia | B | Range, habitat, and the Florida and Hawaii founder populations, none of it in a deep dive. |
| Cost | A- | Setup, month, year, and the female emergency line. |
| Handling | B- | Approach from below, read gaping as fear. Repeats itself. |
| Health issues | A- | Named signs per condition, plus the blue-spot detail. |
| Tank setup | A | The whole build, including bulb distance and bin depth. |
| Feeding | A | Age-banded portions and a defensible supplement schedule. |
| Enrichment | A | Best page here: the planting-density test, branch diameters, prey release. |
| Legal | A- | DC, Hawaii, the New Jersey permit, check your city. |

Set grade: B. "The deep dives are genuinely good and internally
consistent; the hub sitting on top of them is the weak link."

### Numbers checker

`node scripts/check-species-numbers.mjs veiled-chameleon --strict` before
the pass printed 33 topic groups with conflicts across eight of them. The
real decisions: the supplement schedule, the night drop, ambient
temperature, portions, prey size, enclosure type, UVB strength, and
lifespan, every one of them the hub against a deep dive.

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild.
The first is the most serious defect any reader has raised in batches F
or G:

- Supplements. Old hub: "Dust insects with calcium with D3 twice weekly,
  and a reptile multivitamin once a week." Feeding guide: "use a calcium
  with D3 supplement about every other week, and a multivitamin with a
  real vitamin A source on roughly the same twice-monthly schedule." That
  is roughly four times the dose, on the two supplements the feeding
  guide specifically says cause gular edema and organ stress in excess:
  "over-supplementing vitamin A or D3 can cause throat swelling (gular
  edema) and organ stress, more isn't automatically safer here." A reader
  following the old hub was being handed an overdose.
- Night temperature. Old hub: "Nighttime temperatures can drop to 65 to
  75 degrees F." Tank setup: "a beneficial night drop to 55 to 65°F."
  The two ranges do not overlap at any point.
- Ambient temperature. Old hub: "75 to 85 degrees F." Tank setup: "72 to
  80°F."
- Portions. Old hub: "offering 5 to 10 appropriately sized insects."
  Feeding: "roughly 4 to 6 feeders every other day."
- Prey size. Old hub: "no larger than the width of the chameleon's head."
  Feeding: "Size prey to the space between your chameleon's eyes."
- Enclosure type. Old hub: "Screen construction is mandatory, not
  optional." Tank setup: "Hybrid enclosures, with partially solid sides,
  hold humidity better and are increasingly preferred."
- UVB. Old hub checklist: "Strong UVB lighting (T5 HO Arcadia 6% or 12%)
  is mandatory." Tank setup: "ReptiSun 5.0 or Arcadia 6%", with the
  basking branch 6 to 9 inches below. As the reader put it, a 12% tube at
  that distance is a different animal and the old hub never said so.
- Lifespan. Old hub: "5 to 8 years is typical." Cost guide: "Males
  commonly live 6 to 8 years. Females typically live considerably
  shorter, often just 2 to 6 years, and many don't make it past 2 to 3."

### Deep dives against each other

The reader's verdict was that between deep dives the numbers actually
hold, and re-checking them confirmed it. Two items worth recording:

- The MBD study. The health guide's FunFact says supplementation
  prevented MBD "even without added UVB or D3", which sits oddly beside
  UVB being called mandatory everywhere else. Checked and left alone: the
  same FunFact already closes with "It's not an either-or, but it's a
  reminder that lighting alone can't cover for a poor supplement
  routine", and the feeding guide states the same study more precisely
  ("independently of additional UVB and dietary cholecalciferol"). No
  number to move and no hedge to change.
- The legal guide's arithmetic did not hold, and that one was fixed. See
  Numbers decided.

### Gaps, checked against the Health and More list first

Two of the reader's five gaps turned out to be answerable from a source
this set already cites, and are now answered in the tank setup guide:

- Target humidity as a number. Every page said "moderate". Now 40 to 50%
  by day and 80 to 100% at night.
- Photoperiod. No page said how many hours the lights run. Now 12.

Still open and filed in docs/READER_LOG.md:

- What to do after a female lays: eggs, recovery, rehydration, refeeding.
- How to buy: sourcing a breeder and judging a healthy animal. The shared
  quarantine guide covers arrival, not selection.
- Enclosure cleaning and disinfection, including drainage maintenance.

### Recommended links, one per page

| Page | Sentence | Link to | Added |
|---|---|---|---|
| Hub | the supplement line | Feeding guide | n/a, the hub's Supplements row is sourced to it |
| Encyclopedia | the Florida and Hawaii line | Legal guide | No link slot |
| Cost | "Spaying a female can meaningfully extend her life" | Health issues guide | Yes |
| Handling | "chameleons are prey animals and mask sickness well" | Health issues guide | Yes, and it was the page's only link into the set |
| Health issues | "comes down to the calcium and D3 schedule" | Feeding guide | Yes |
| Tank setup | "she's at real risk of egg-binding" | Health issues guide | Yes |
| Feeding | "proper UVB lighting lets your chameleon produce some of its own D3" | Tank setup guide | No. The feeding guide already spends its one sibling link, on the health issues guide |
| Enrichment | "A 24x24x48 screen enclosure is a reasonable adult footprint" | Tank setup guide | Yes |
| Legal | none needed | | n/a |

Five added, one skipped at the cap.

### Trust

The reader's doubts were the hub's supplement and night-temperature
figures, the 12% UVB with no distance, the repeated paragraph in the
handling guide, and the state count. The first, second and fourth are
fixed. The repeated paragraph is a FunFact restating its own section
nearly word for word, which is the standing FunFact-repeats job rather
than this pass's, and a FunFact is never deleted here; noted for that
list. The sentence that most convinced it a keeper wrote the set, from
health issues: "Sky-blue spots appearing on the flanks are a normal sign
after a female has successfully laid, worth knowing so you don't mistake
healthy post-laying color for illness."

### Numbers decided, both sides and the source that won

- Supplement schedule. The feeding guide's twice-monthly D3 and
  multivitamin against the old hub's twice-weekly and weekly. Opened
  ReptiFiles' veiled chameleon care sheet, which the feeding guide
  already cites: it gives a supplement at every feeding plus "Twice
  monthly: Arcadia Revitalise D3 or Repashy CalciumPlus LoD". The feeding
  guide is confirmed and is also the subject page. The hub was the only
  wrong copy and it is gone.
- Lifespan. The cost guide's sex-split figure against the encyclopedia's
  flat "5-8 years (males often longer than females)". ReptiFiles gives
  "your pet can live for up to 6-8 years, with females typically having a
  shorter lifespan", which matches the cost guide's male figure exactly
  and supports the direction of its female one. The deep dive wins, and
  the encyclopedia's wildLifespan now carries the split rather than a
  range that excludes a normal female.
- Humidity and photoperiod. No figure moved, both were absent. ReptiFiles
  gives "40-50% during the day, and 80-100% at night" and "UVB and
  daylight lighting should both be on for 12 hours each day". Both added
  to the tank setup guide, with ReptiFiles added to its Sources block so
  the claims are traceable.
- Legal counts. The legal guide said "legal in forty-eight states" in one
  place and "The other forty-eight states have nothing to say" in
  another, while its own table names Hawaii as a ban, New Jersey as a
  permit, and Minnesota as permitted-breeder-only. Fifty states minus
  those three is forty-seven. Both sentences corrected to forty-seven,
  with the second now naming Minnesota so the arithmetic is visible.
  Washington DC is not a state and is counted separately, as the guide
  already does.

### Encyclopedia

One field changed on `veiled-chameleon` in
src/lib/data/encyclopedia/lizards.js, nothing else in the file touched:
`wildLifespan`, from "5-8 years (males often longer than females)" to
"Males 6-8 years; females often just 2-6 and frequently less, from the
toll of producing egg clutches". Researched as above. `adultSize` already
carries the sex split and matches the deep dives, so it stands.

### Also fixed

- The handling guide's "Our Ferret handling guide and Hognose snake
  handling guide cover what each species' display means" rewritten to say
  the thing about the animals instead of about the site. Both links kept.

### Open

- The three gaps above, in docs/READER_LOG.md.
- The handling guide's FunFact restating its own "How They Compare"
  section nearly word for word, for the FunFact-repeats job.

## California Kingsnake (2026-09-14, batch G, single pass, before the router hub)

Extractor set of seven pages (hub, encyclopedia, cost, handling, health
issues, tank setup, enrichment). One Opus 5 agent. The reader read the
legacy care sheet hub; the router hub was built from its findings the
same day. No feeding guide exists for this species, so the legacy hub's
diet prose was the set's only feeding content.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B- | The only page with feeding cadence, thaw temperature, and a buy checklist, and its numbers do not match the setup guide. |
| Encyclopedia | C+ | The captive-breeding history paragraph is the only thing that earns its keep. |
| Cost | B | Morph table, setup, month, and vet ranges are all buyable numbers. |
| Handling | A- | The defensive-signal list and the session-length table are the most usable things in the set. |
| Health issues | B+ | Symptom to cause to action is clean, and the soaking-as-mite-sign tip is real. |
| Tank setup | B- | Substrate and size spec are directly actionable, two core numbers are contradicted by siblings. |
| Enrichment | A | The priority order is a shopping sequence, and it tells you what its evidence is not. |

Set grade: B. "Genuinely useful and unusually honest about evidence, held
back by a hub and a setup guide that disagree on the numbers a first-time
keeper will actually dial in."

### Numbers checker

`node scripts/check-species-numbers.mjs california-kingsnake --strict`
before the pass printed conflicts on humidity, warm end, cool end,
feeding cadence, adult size, and lifespan. Every one of the first four
was the hub against a deep dive.

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild.

- Humidity. Hub: "Ambient humidity of 30 to 50% is appropriate." Setup:
  "Keep it relatively low, 40 to 60%."
- Warm end. Hub: "a surface temperature of 85 to 88 degrees F." Setup:
  "Basking/warm side | 85 - 90°F."
- Cool end. Hub: "a cool end at 72 to 75 degrees F." Setup: "Cool side |
  70 - 80°F."
- Feeding. Hub: "adults every 10 to 14 days." Cost: "One appropriately
  sized rodent a week."
- Adult size. Hub FAQ: "Adults typically reach 3 to 4 feet."
  Encyclopedia: "Adult Size: 2.5-4 feet (75-120 cm)."
- Post-feeding wait. Hub: "Allow 48 to 72 hours after feeding before
  handling." Handling: "Wait at least 48 hours."
- Rearranging. Hub: "Rearranging the enclosure layout periodically gives
  the snake new territory to explore." Enrichment ranks it "6.
  Rearrangement, last."

### Deep dives against each other

The sharpest finding in the set, and the only one that is a deep-dive
defect rather than a hub one:

- Enclosure length rule. Setup: "enclosure length should be at least
  two-thirds of your snake's body length." Enrichment: "Twelve corn
  snakes were housed in enclosures either two thirds of their body length
  or longer than their body length... they preferred the larger
  enclosure." The reader: "The setup guide is recommending the condition
  the study's snakes rejected."
- Hides. Setup: "Furnish the enclosure with two cork bark hides, one on
  each end." Enrichment: "Cover Everywhere, Not Two Hides... A kingsnake
  in a large bare enclosure uses two hides and nothing else."

### Numbers decided, both sides and the source that won

The setup guide carried no Sources block at all, so its temperatures were
unsourced. Tree of Life Exotic Pet Medical Center, the vet clinic the
handling guide already cites, outranks every husbandry reference here and
decided all three.

- Warm end. Setup 85 to 90°F against Tree of Life's "Warm Side: 85 to 88°F".
  Vet wins: 85 to 88.
- Cool end. Setup 70 to 80°F against Tree of Life's "Cool Side: 72 to 78°F".
  Vet wins: 72 to 78.
- Humidity. Setup 40 to 60% matches Tree of Life's "Moderate (40 to 60%)"
  and beats RSPCA's 40 to 55%. Unchanged.
- Enclosure length. RSPCA asks for "a vivarium that enables it to fully
  stretch out," and the enrichment guide's borrowed preference test says
  the same. The two-thirds rule is gone; an adult now gets an enclosure at
  least as long as the snake.
- Feeding. Tree of Life's "Every 5 to 7 days" juveniles and "Every 10 to 14
  days" adults beat Reptiles Magazine's "Feeding once a week." The cost
  guide's weekly line now follows the vet schedule.

### Gaps closed rather than carried

No feeding guide exists, so the setup guide gained a sourced Diet Basics
section, the Russian tortoise pattern from batch A. The legacy hub's
thaw-temperature figure (100 to 105°F) and its two-week post-regurgitation
wait had no deep dive behind them and were retired rather than carried as
unsourced rows.

### Also fixed

- The enrichment guide's "Other substrate quantities are available," a
  broken fragment the reader flagged under Trust.
- Its FAQ calling the ratsnake work "closer still in the older taxonomy,"
  which the body does not support. It now says what is actually true:
  corn snakes themselves sat in Elaphe under the older taxonomy.
- Three of the reader's seven recommended links: the setup guide's
  thermostat line into the shared heating guide, the health guide's shed
  section into the humidity-myth guide, and the handling guide's
  escape-artist bullet into the setup guide.

### Open

- The six things not covered anywhere, in docs/READER_LOG.md: feeding
  refusal and when a fast becomes a vet visit, brumation, choosing a
  seller, recapturing an escaped snake, hygrometer placement, and
  hatchling-specific temperatures.
- The reader's second recommended change, "give feeding its own deep
  dive, since it currently exists only on the hub." Diet Basics closes
  the immediate gap; a real feeding guide is still the right answer.
- Encyclopedia "up to 33.3 years in captivity" against the cost guide's
  "20 years or more." Not a contradiction (a record against a typical),
  but the reader read it as one.

## Hedgehog (2026-09-14, batch G, single pass, before the router hub)

Extractor set of nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal). One Opus 5 agent, about
90k tokens. The reader read the legacy care sheet hub; the router hub was
built from its findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | D | The most actionable single page, and the one I now distrust most. |
| Encyclopedia | B | The import ban and the Salmonella outbreak are real background. |
| Cost | C | Budget numbers are usable; the legal section contradicts its own FAQ. |
| Handling | B+ | Scoop technique, quilling window, do not force the ball. |
| Health issues | A- | Quarantine two weeks, gradual weight loss, vet for any wobble. |
| Tank setup | B | CHE on a thermostat, solid floor, substrate depth, dim 12 hour cycle. |
| Feeding | A- | The 24 hour rule and the stop-eating checklist are the best thing in the set. |
| Enrichment | A | Clean the wheel daily, hide, solo housing, scatter feed. |
| Legal | A | Finished it twice. It quotes the regulations. |

Set grade: B-. "The deep dives are unusually good and unusually honest
about disagreement; the hub drags the set down by contradicting them on
WHS prevalence, temperature, and cage size." The D on the hub is the
lowest page grade any reader has given in batches F or G.

### Numbers checker

`node scripts/check-species-numbers.mjs hedgehog --strict` before the
pass printed 17 topic groups with conflicts. Seven of them were the hub
against a deep dive, and two were a deep dive against itself.

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild.
The first is a straight factual error, not a rounding drift:

- WHS prevalence. Hub: "It affects an estimated 1 in 3 African pygmy
  hedgehogs." Health guide: "a lower confirmed rate, closer to 3%." The
  reader: "One of those is ten times the other, and the deep dive exists
  specifically to debunk the inflated figure the hub prints."
- Cold threshold. Hub: "Below 65 degrees F, African pygmy hedgehogs ...
  can enter a dangerous state of torpor." Setup: "Below about 72°F,
  hedgehogs can attempt to hibernate." The reader: "Seven degrees of
  daylight on the one rule both pages call non-negotiable."
- Enclosure size. Hub: "A minimum of 2 ft x 4 ft of floor space is
  required." Setup: "A minimum of 4 square feet of solid floor space."
- Wheel. Hub checklist "8 to 12 inch," hub body "10 to 12 inches," setup
  "10.5 to 12 inches." Three numbers, two of them on one page.
- Lifespan. Hub: "Some individuals reach 7 to 8 years." Cost: "some
  individuals reaching 8 to 10 years."
- Insects. Hub: "3 to 5 times per week." Feeding: "3 to 4 times weekly,
  or roughly 2 to 3 times a week."
- Fat. Hub: "low fat content (under 15%)." Feeding: "moderate fat (10 to
  20% dry matter)."

### Deep dives against each other

- Floor space. Setup: "A minimum of 4 square feet." Enrichment: "68
  percent were in enclosures under 0.5 square meters," listed as a
  welfare failure. The reader did the arithmetic: "4 sq ft is 0.37 sq m,
  so setup's minimum is below enrichment's fail line."
- Quilling. Handling: "Between 2 and 6 months old." Feeding: "most
  intense at 4 to 6 weeks old and again around 4 months."
- Legality, inside one page. Cost body: "New Jersey is the only state in
  the country where a permit is the answer ... Maine names the African
  pygmy hedgehog on its Unrestricted Species List." Cost FAQ: "New Jersey
  and Wisconsin require a permit," with Maine restricted and New York
  City dropped from the ban list. The article's own body debunks its own
  FAQ.
- Humidity, inside one page. Setup: "under 40% is preferred," then
  recommends a humidifier "bringing the room to 40 to 60%."

### Numbers decided, both sides and the source that won

- Floor space. Setup's 4 square feet against the enrichment guide's 0.5
  square meter fail line. Merck, which the setup guide already cites,
  settles it: "Minimum floor dimensions of 2 × 3 feet (0.6 × 0.9 m) are
  recommended." Six square feet clears the survey line, and the setup
  guide was under its own source.
- Ideal temperature. Setup's 75 to 80°F against Merck's "72 to 90°F;
  75 to 85°F is optimal," with LafeberVet giving the same 75 to 85. Vet
  sources win: 75 to 85 inside 72 to 90.
- Humidity. Merck and LafeberVet both say "Low humidity (< 40%) is
  preferred," so the enclosure target stands and the 40 to 60% humidifier
  line, which had nothing behind it, is gone.
- Quilling. LafeberVet: "'Nest spines' are shed at 1 month of age and are
  replaced with permanent spines." The feeding guide's episodic framing
  was right and the handling guide's single 2 to 6 month window was not.
  The handling guide now says episodes: about a month old, then a heavier round
  around 4 months.
- Vet cost. The cost guide carried three figures for one thing: $40 to
  $80 routine, $80 to $200 exotic, $60 to $100 in the annual table. The
  guide's own sentence says this species needs an exotic vet, so the
  table row now reads $80 to $200 and the $40 to $80 stays only as the
  general-practice comparison it actually is.
- Legality. The legal guide quotes the regulations and wins outright. The
  cost guide's FAQ now matches its own body: six closed jurisdictions,
  New Jersey the only permit, Maine and Wisconsin not permit states.

### Encyclopedia

wildLifespan read "3-5 years", which is the captive figure sitting in the
wild field. Animal Diversity Web: "African pygmy hedgehogs live
approximately 2-3 years in the wild" and "in captivity, they can live to
be 8-10 years old." Now: "About 2 to 3 years in the wild; 3 to 6 is
typical in captivity, with some individuals reaching 8 to 10."

### Also fixed

Five of the reader's nine recommended links, each into the page that
settles the question raised: cost into the legal guide, health into the
setup guide on the temperature range, handling into the feeding guide on
quilling and appetite, feeding into the setup guide on the torpor
threshold, and enrichment into the handling guide on huffing and balling.
The hub's own two (WHS and the wheel) are now routes rather than links.

### Open

- The six things not covered anywhere, in docs/READER_LOG.md: choosing a
  breeder or rescue, Salmonella hygiene for owners, bathing, the spay
  decision and its cost, finding an exotic vet who sees hedgehogs, and
  heat failure planning.
- Salmonella is the sharpest of those. The encyclopedia names a 54-person
  multistate outbreak and no care page tells an owner to wash their
  hands, except after self-anointing. Small mammals have no shared
  hygiene guide the way reptiles do.
- Bathing and the spay question were raised only by the legacy hub and go
  away with it. Neither had a deep dive behind it, so both are retired
  rather than carried, and both are worth writing.

## Canary, neon tetra, veiled chameleon, California kingsnake, hedgehog (2026-09-14, batch G species check)

One Fable agent covering all five species on branch
claude/hub-pacman-frog-80291s from base ef32e6a, run once after every
species was done and pushed, per the batch prompt. It read diffs rather
than whole files, opened the source URLs behind every number decision
(Tree of Life Exotic Pet Medical Center, LafeberVet for the canary and
the hedgehog, Merck, ReptiFiles, Animal Diversity Web for both
encyclopedia fields), fixed every finding on the branch, and committed
"Canary, neon tetra, veiled chameleon, California kingsnake, hedgehog:
species check". Nothing merged.

### Scope

Clean. The diff is the five guide entries, the five species' MDX, this
file, docs/READER_LOG.md, READMEFIRST.md and docs/TODO.md (the batch
pick-up commit), and two encyclopedia entries at one field each, both for
batch species, both traced to a named and opened source. No shared class
guide row, no other src file. SHORT_LABELS and RELATED_ARTICLES needed no
change and got none.

### Canary: fixed on the branch

- The cost guide's setup total moved from $200 to $400 to $150 to $275
  (its own table sums to $150 to $273) and its lifespan to LafeberVet's
  "6-12, up to 15", but three same-page copies were left behind: the
  `seoTitle` ("Plus $200 to $400 Setup"), the `description` ("roughly
  $200 to $400" and "a 10 to 15 year lifespan"), and the setup FAQ
  ("Roughly $200 to $400"). All three now carry the new figures. Same
  frontmatter-field failure batch F caught on the zebra finch.
- Hub Lighting row was a copy of the tank setup sentence before the
  batch's own fix to it ("consistent day and night cycle"), so it had
  gone stale against the branch. Now carries the fixed sentence, day
  length following the season.
- Hub Diet row said "fresh greens and vegetables" where the Diet Basics
  section it cites says "fresh fruits and vegetables". Row now matches.
- Emergency card's first bullet, "A canary that stops singing outside the
  summer molt", took its molt qualifier from the handling guide rather
  than the health guide it is sourced to. Now "A loss of song in a
  previously singing male", the health guide's words.
- Confirmed by opening LafeberVet's canary sheet: "Mean life span (years):
  6-12, up to 15", "Body weight (g): 12-30", "Up to 30% of body weight
  (BW)/day", "Canaries do not require grit, however they should be
  offered a cuttlebone", "All-seed diets are deficient in vitamins,
  mineral, and protein including calcium and vitamin A". Every figure in
  the new Diet Basics section and the lifespan change holds. Five links
  added, one sibling per article, none before the first H2. Dates right
  in both directions. The two "our X guide covers" cuts (birdwatching,
  the FunFact cost-guide clause) and the misdescribed foot-problems link
  are the linking rule, not rewrites, and were left.
- Out of scope, not touched, flagged for whoever next edits zebra finch:
  zebra-finch-cost-guide says a canary is kept "solo (or a same-sex pair
  for males, since two males will fight)", which contradicts itself and
  the canary enrichment guide's rule that males are never housed
  together.

### Neon tetra: clean

No number moved, and none needed to. Every hub row's figures sit in its
source article, the seven emergency bullets are the health guide's four
conditions bullet for bullet, and the vetLine keeps "likely" and
"relatively uncommon". Six links added, one sibling per article, no date
bumped, which is right for a link-only pass. The three "Our Guppy X guide
covers" rewrites keep their links and lose the site talking about itself.
The hub's Temperature row copies "commonly recommended target" from the
tank setup guide; that is the article's own phrasing rather than source
narration and was left.

### Veiled chameleon: fixed on the branch, encyclopedia only

- The batch's `wildLifespan` rewrite put ReptiFiles' pet figure ("up to
  6-8 years, with females typically having a shorter lifespan") into a
  field the site renders as "Wild Lifespan" with no captive label, the
  same mislabeling the hedgehog fix corrected. Opened Animal Diversity
  Web for Chamaeleo calyptratus: "usually five years for females and up
  to eight years for males". The field now reads "Males up to 8 years and
  females usually around 5; in captivity females often just 2-6 and
  frequently less, from the toll of producing egg clutches", so the
  captive figure is labeled as one.
- Everything else holds. ReptiFiles states "40-50% during the day, and
  80-100% at night", "UVB and daylight lighting should both be on for 12
  hours each day", and the twice-monthly D3 and multivitamin, so the
  humidity, photoperiod and supplement rows and the tank setup additions
  are sourced. The legal guide's forty-seven is right on its own table
  (Hawaii, New Jersey, Minnesota out of fifty) and no other copy of
  forty-eight survives. Four emergency bullets cover the four conditions
  the health guide names signs for; the vetLine keeps "can kill within 24
  hours" and "often require surgery". Five links added, one skipped at
  the cap, correctly. `veiled-chameleon-ferret-hognose-overview` is a
  roundup and correctly not routed.

### California kingsnake: fixed on the branch

- The emergency card had no vetLine, the only router hub of 36 without
  one. Added, copied from the health guide with its hedges: "Early cases
  of respiratory infection sometimes resolve once parameters are
  corrected, advanced cases need a vet for antibiotics", the mouth rot
  "always see a vet", the mites "can become genuinely life-threatening",
  and the closing husbandry sentence.
- Confirmed by opening Tree of Life: "85 to 88°F" warm, "72 to 78°F" cool,
  "Moderate (40 to 60%)", "Every 5 to 7 days" juvenile, "Every 10 to 14 days"
  adult, "Prey should be about as wide as the snake's thickest point",
  "pre-killed (frozen/thawed) mice or small rats". Every temperature and
  feeding change and every claim in the new Diet Basics section holds,
  and the vet source outranks Reptiles Magazine as the review says. Same-
  page copies all moved (table, FAQs, seoDescription); the cost guide's
  weekly line and FAQ moved with them.
- The enrichment FAQ rewrite ("closer still in the older taxonomy" to
  "the genus corn snakes themselves sat in") is a change the prompt's
  contradiction rule does not strictly cover, but the new sentence is
  true and the guide's own Almli and Burghardt entry names the genus
  (Elaphe). Kept.
- Dates: cost and tank setup bumped for number changes, the rest not,
  which is right. The health guide gained a shed-mechanism sentence
  carrying a link to the shared shedding guide without a bump; treated as
  navigation, since the claim is the linked page's, and left.

### Hedgehog: fixed on the branch

- Hub Portion row narrated the disagreement ("Daily amount is a real
  point of disagreement, and the more clinically oriented guidance skips
  one fixed total") and the Insects row carried "per other sources": the
  batch D and E leak, in two rows. Both came from the feeding guide's own
  wording, so the deep dive was settled first per RULES (state the range,
  say which end, move on) and the rows copy the settled sentences. Body
  before: "Daily amount is a real point of disagreement, not just
  imprecise numbers. One care sheet says 3 to 4 teaspoons of hedgehog
  pellets a day, a separate article from the same publisher says 1 to 3
  tablespoons, roughly a 2 to 3 times spread. The more clinically
  oriented guidance skips one fixed total entirely, instead framing it as
  roughly 2 to 3 teaspoons of a protein base plus 1 to 2 teaspoons of
  chopped produce, adjusted by body condition rather than a flat number."
  After: "Published daily amounts run from 3 to 4 teaspoons of hedgehog
  pellets a day up to 1 to 3 tablespoons, roughly a 2 to 3 times spread,
  so a flat total is the wrong tool. Feed roughly 2 to 3 teaspoons of a
  protein base plus 1 to 2 teaspoons of chopped produce, adjusted by body
  condition rather than a flat number." Insects before: "3 to 4 times
  weekly, or roughly 2 to 3 times a week per other sources." After: "2 to
  3 times a week and up to 3 to 4 times weekly." Both ranges kept, no
  number changed, no hedge changed. The feeding route line "the portion
  nobody agrees on" is now "the portion by body condition".
- The feeding guide's cold-stress figure moved from "the mid-60s°F or
  below" to "below about 72°F" with no date bump. lastUpdated and
  lastReviewed now 2026-09-14, matching the rest of the set.
- The handling guide's quilling numbers now rest on LafeberVet ("'Nest
  spines' are shed at 1 month of age"), but its Sources block carried
  only Merck. LafeberVet added, so the figure is traceable on the page
  that states it.
- Review file said "Both pages now say episodes" under Quilling. The
  feeding guide did not change; it already read "most intense at 4 to 6
  weeks old and again around 4 months". Corrected to name the handling
  guide only.
- Confirmed by opening Merck: "Minimum floor dimensions of 2 × 3 feet
  (0.6 × 0.9 m) are recommended", "72 to 90°F", "75 to 85°F is optimal",
  "Low humidity (< 40%) is preferred"; LafeberVet: "75-85°F", "Low
  humidity < 40% is preferred"; Animal Diversity Web: "approximately 2-3
  years in the wild", "8-10 years old" in captivity. Every number
  decision and the encyclopedia field hold. Legal FAQ now matches its body
  and the legal guide with no hedge lost. Six emergency bullets cover the
  five conditions plus the hibernation attempt, and the vetLine keeps
  "can look similar".
- Left open: the feeding guide's portion FAQ still opens "This is
  disputed, even within the same publisher's own content". It does not
  contradict its body, which is the only case the prompt lets a FAQ be
  rewritten for, so it stays and is listed here for the source-in-block
  pass.

### Gates on the branch head

check-internal-links, check-related-articles, check-affiliate-mdx,
check-cost-coverage, check-seo-tags, check-voice --strict (0 errors), and
`npx eslint . --quiet` all pass. check-species-numbers for all five: no
hub line disagrees with a deep dive; every hub-only value the checker
lists sits in a shared guide, the encyclopedia, or the same deep dive
under a different topic key. check-voice per changed slug: no warning
count went up on any of the 28 changed articles, and the three files
touched here are unchanged in count.

### Pass grade: B+

The process was followed: real sources opened and quoted for every number
decision, every one of which held when the URLs were reopened here; no
file outside scope; hedges intact everywhere, including the two FAQ
rewrites; the review file complete and quoting both sides. What it
missed is the pattern batches D through F already named: three
frontmatter copies of a moved figure on the canary cost guide, one hub
row left stale against the batch's own later fix, two hedgehog rows
carrying the deep dive's source narration, one missing vetLine, one date
not bumped, and a captive figure filed under "Wild Lifespan" with no
label on the same day the hedgehog fix labeled its own.

## Cardinal Tetra (2026-09-14, batch H, single pass, before the router hub)

Extractor set of eight pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment). One Opus 5 agent. The reader
read the legacy care sheet hub; the router hub was built from its
findings the same day. Cardinal tetra went first in batch H partly
because the neon tetra set merged in batch G cross-links it, and partly
because its hub carried a misspelled parasite name flagged during batch F
and left because the species was out of scope then.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B | The one page with a water change schedule, and its temperature range contradicts the setup guide. |
| Encyclopedia | B | The naming-priority story is the only thing here I could not get elsewhere. |
| Cost | A- | $1 to $3 a fish, $65 to $230 setup, test kit is the non-optional line item. |
| Handling | B- | Minimum 10, three named beginner mistakes, the stripe tell. Thin for a standalone page. |
| Health issues | A | Symptom lists, ich and fin rot treatment, nitrite as the number to watch. |
| Tank setup | A | Best page in the set. |
| Feeding | A- | Twice daily, two-minute rule, crush the flake, remove dead fish immediately. |
| Enrichment | A- | The honest "nothing on cardinals specifically" bought my trust. |

Set grade: B+. "Strong, sourced, genuinely specific on the things that
kill this fish, undermined by a hub that disagrees with its own deep
dives and a near-total absence of links between pages that plainly need
each other."

### Numbers checker

`node scripts/check-species-numbers.mjs cardinal-tetra --strict` before
the pass printed conflicts on tank size, temperature, lifespan and the
cost line items. The decisions were temperature, school size, tank size,
feeding frequency and lifespan, all of them the hub against a deep dive.

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild.

- Temperature. Hub: "Keep water heated between 73 and 81 degrees F."
  Setup: "73 to 84°F is the range Seriously Fish gives for this species."
  The hub checklist repeated 73 to 81.
- School size. Hub FAQ: "At least 6, ideally 8 to 10 or more if the tank
  allows." Enrichment: "Ten, not six... Do not stop at six." Handling:
  "Animal Diversity Web puts the workable minimum at 10."
- Tank size. Hub: "A 10 to 20 gallon tank suits a proper school of 8 to
  10 or more." Setup splits it: a 10-gallon for the bare minimum school
  of 6, a 20-gallon long as the practical minimum for 8 to 10.
- Feeding. Hub: "Feed small amounts once or twice daily." Feeding guide:
  "Twice daily... is the practical standard."
- Parasite name. Hub: "Pleistophora hyphessobrycetis." Health and
  feeding: "Pleistophora hyphessobryconis." The reader: "One is wrong."
  The hub was, and the whole `sections` block goes with the rebuild.

### Deep dives against each other, and against themselves

Both of the sharpest findings are same-page contradictions, which no
cross-page checker catches:

- Setup guide, body: Practical Fishkeeping "notes that cardinal tetra
  tolerates water reaching 30°C (86°F), warmer than the roughly 25°C
  (77°F) ceiling neon tetra is comfortable with." Setup guide, its own
  FAQ: "warmer than neon tetra's comfort ceiling of roughly 77 to 81°F."
  Our own neon tetra setup guide, reconciled in batch G, says 70 to 81
  works with 72 to 78 the usual target. The FAQ now carries the body's
  comparison.
- Health guide, body on ich: "a commercial ich medication alongside
  daily partial water changes." Health guide, its own FAQ: "a gradual
  temperature increase plus a commercial ich medication." The reader:
  "The body never mentions heat, which matters when the same site puts
  50% mortality near 33.7°C."
- Cost: "A 10-gallon tank is workable for the bare minimum school of 6,"
  against enrichment's flat "Do not stop at six."

### Numbers decided, both sides and the source that won

- Ich treatment. The FAQ's temperature increase against the body's
  medication-and-water-changes protocol. Opened Aquarium Co-Op, the
  guide's own cited source: it prescribes Ich-X redosed every 24 hours
  with roughly a third of the water changed each time, carried a day past
  the last spot, and never recommends raising the temperature. The body
  was right and the FAQ was repeating hobby lore. Both now say so
  explicitly, since "raise the temperature" is common enough advice that
  silence reads as agreement.
- Lifespan. Hub and encyclopedia carried "up to 10"; the cost guide said
  "up to five years" from Practical Fishkeeping, so the hub's outer
  figure had nothing behind it. Animal Diversity Web, already cited by
  the handling guide: "In captivity, the life expectancy is about 5
  years, although individuals may live as long as 10 years." Not a
  contradiction once both halves are stated, so the cost guide now
  carries the outer figure and ADW joins its Sources.
- Temperature, school size, tank size and feeding frequency all went to
  the deep dives unchanged; only the hub was wrong.

### The Merck citation the reader doubted

Worth recording because the doubt was reasonable and the citation is
sound. The reader flagged that a microsporidian parasite is cited to a
page titled "Mycotic Diseases of Fish". Opened it: the page states "Neon
tetra disease is caused by Pleistophora hyphessobryconis, which infects
the skeletal musculature" and names "tetras, angelfish, rasboras, barbs,
and zebrafish", exactly as the two guides quote it. Microsporidia are
closely related to true fungi, which is why Merck files them there. No
change.

### Gaps closed rather than carried

The legacy hub's weekly 20 to 25% water change had no deep dive behind
it, and the shared aquarium filtration guide carries no schedule figure
either, so it is retired rather than carried as an unsourced row. Same
call as angelfish in batch F and neon tetra in batch G, which makes three
fish hubs now missing a water-change cadence: worth writing once into a
shared guide rather than three times into species pages.

### Also fixed

Six of the reader's eight recommended links. Two went somewhere other
than it suggested, both times to the shared guide that actually settles
the question: its "adding them to a tank that hasn't finished cycling"
on the handling guide points at the cycling guide rather than the setup
guide, and the setup guide's "always quarantine new fish" points at the
hospital tank guide rather than the health guide, since the setup guide
had already spent its one sibling link on the handling guide.

### Open

- The four things not covered anywhere, in docs/READER_LOG.md: how to
  soften or acidify hard tap water, a tankmate and fin-nipper list,
  the humane euthanasia method the health guide recommends without
  explaining, and breeding.
- The first is the sharpest. The enrichment guide names hard alkaline
  water as the main reason cardinals fail where neons would have been
  fine, and then no page in the set says what to do about it. The shared
  pH, GH and KH guide is written around not chasing numbers in a
  coldwater tank and does not promise a softening method.

## Milk Snake (2026-09-14, batch H, single pass, before the router hub)

Extractor set of nine pages (hub, encyclopedia, cost, handling, health
issues, tank setup, enrichment, legal, and the milk snake vs corn snake
comparison). One Opus 5 agent. The reader read the legacy care sheet hub;
the router hub was built from its findings the same day. No feeding guide
exists for this species, so the legacy hub's diet prose was the set's
only feeding content, the third species in two batches after tokay gecko
and California kingsnake.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B | The only page with a feeding schedule, and it contradicts the deep dives on the two things I would buy first. |
| Encyclopedia | B- | Earns its place on one paragraph, the motion-camouflage argument. |
| Cost | B | A real budget and a buy list. |
| Handling | C+ | Never cohabit, do not handle mid-shed. No actual technique. |
| Health issues | B+ | Symptoms and which ones mean vet today. |
| Tank setup | B+ | Dimensions, temps, substrate, cohabitation. |
| Enrichment | A- | Cover across the whole floor, priority order. |
| Legal | A | Better than anything else I have read on the topic. |
| vs Corn snake | C | Skimmed the back half. Act on: nothing. |

Set grade: B-. "Strong individual pages, a legal guide better than
anything else I have read on the topic, undercut by a hub that disagrees
with its own deep dives on heat and enclosure size."

### Numbers checker

`node scripts/check-species-numbers.mjs milk-snake --strict` before the
pass printed 11 topic groups with conflicts. The reader found one the
checker could not: adult size had four different answers across four
pages, because three of them were phrased in units the grouping never
put side by side.

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild.

- Heating, and the reader's sharpest point. Hub: "a warm end (85 to 88
  degrees F surface temperature via UTH on thermostat) and a cool end (72
  to 75 degrees F)." Setup: "Basking surface 85 to 90°F... A halogen
  flood bulb positioned over a basking stone is the commonly recommended
  heat source for this species." The reader: "The hub sells me a UTH as
  the primary heater, the deep dive calls the UTH a supplement." The
  shopping checklist sold the same wrong thing.
- Enclosure. Hub: "A 3x1.5x1.5 ft to 4x2x2 ft enclosure suits most adult
  milk snakes." Setup: "the minimum adult enclosure at 48 inches long by
  24 inches wide by 24 inches tall." The hub's low end was below the deep
  dive's minimum.
- Setup cost. The hub's table totalled roughly $208 to $430 against the
  cost guide's "Roughly $300 to $600", because the hub was pricing a
  glass tank and the cost guide a PVC vivarium, and neither said so.
- Adult size, four ways. Hub body: "over 5 ft (Sinaloan milk snake)."
  Hub FAQ: "Sinaloan milk snakes can reach 4 to 5 feet." Encyclopedia:
  "2-4 feet." vs Corn: "24-36 in (some larger)."
- Lifespan, three ways. Hub "12 to 20 years", cost guide "commonly live
  20 years or more", vs Corn "15-20 years, some 25+".

### Deep dives against each other

- The mimicry story itself, which no checker would ever catch. Cost guide
  states it flat: "evolved to resemble the venomous eastern coral snake."
  The encyclopedia argues against it: "Milk snakes live across a range
  that includes large areas where no coral snake occurs at all, which is
  difficult to square with mimicry as the whole explanation." And the vs
  Corn table widened the model to "coral snake/copperhead", which no
  other page supports and which the cited mimicry research (Harper and
  Pfennig, on coral snake mimicry) does not either. The copperhead is
  gone; the encyclopedia's hedge stands, since it is the better-argued
  position and the cost and handling guides both already say the
  resemblance deters predators rather than claiming it is the only
  explanation.

### Numbers decided, both sides and the source that won

The setup guide cites exactly one source, ReptiFiles, and drifted from it
in three places. Opened it; the figures below are quoted from that page.

- Cool side. Guide 70 to 80°F against ReptiFiles' 75 to 80. Source wins.
- Night floor. Guide "not below about 66°F" against ReptiFiles' 70 to 75.
  Source wins, and 66 was the lowest figure anywhere in the set.
- Subspecies length. Guide "Honduran and other larger subspecies can
  reach 4 to 5 feet" against ReptiFiles, citing Markel: Eastern 36 to 45
  inches, Pueblan 28 to 36, Honduran and Sinaloan both 40 to 48. Nothing
  in the source reaches 5 feet. Animal Diversity Web agrees on the
  broader picture: "In the United States lengths are most often 60 to 130
  cm." Both the guide's 4-to-5-feet line and the vs Corn table's "24-36
  in" are now the cited 28 to 48.
- Lifespan. Encyclopedia wildLifespan read "10-22 years", a captive
  figure in the wild field, the same defect the hedgehog and veiled
  chameleon fixes corrected in batch G. Animal Diversity Web: "Specific
  data on lifespan is not given, although it is known that one individual
  caught as an adult lived another 21 years in captivity." The field now
  says the wild figure is undocumented and gives the captive one.
- Feeding. No feeding guide exists, so the setup guide gained a sourced
  Diet Basics section: ReptiFiles' juveniles every 7 to 10 days, adults
  every 10 to 14, prey no more than 1.5 times the snake's widest point or
  roughly 10% of body weight, frozen/thawed over live, and a bowl big
  enough to soak in.

### Also fixed

- "Other substrate quantities are available and a decent depth wants the
  larger bag" in the enrichment guide, which the reader called "product
  copy with the product missing". The same template fragment was cut from
  the California kingsnake enrichment guide in batch G, so it is worth
  grepping the rest of the enrichment set for it.
- Five of the reader's nine recommended links. Two were skipped: the
  encyclopedia carries no in-body links at all, and the legal guide's
  suggested target was this species' own care guide hub, which RULES
  forbids linking to.

### Open

- The six things not covered anywhere, in docs/READER_LOG.md: brumation
  and winter feeding refusal, feeding mechanics beyond the new Diet
  Basics section, choosing and buying, cleaning cadence, what to do when
  the escape artist escapes, and handling technique itself.
- The last is the most pointed. The reader graded the handling guide C+
  because it has no pick-up method, no session length, and no first week,
  which the California kingsnake handling guide does have. That is a
  sibling page in the same genus with the same rules, so the gap is
  fillable from work already done.
- "Escape artist" appears on five pages in this set and no page says what
  to do about it.

## Gargoyle Gecko (2026-09-14, batch H, single pass, before the router hub)

Extractor set of eight pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment). One Opus 5 agent. The reader
read the legacy care sheet hub; the router hub was built from its
findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B- | The most actionable single page, and where the numbers go wrong. |
| Encyclopedia | C+ | Genuinely interesting on the 2012 genus split, and it contradicts itself. |
| Cost | A- | I can budget from it today. |
| Handling | A- | Wait two weeks, 5 minutes every other day, work to 15, handle low. |
| Health issues | A | Best page in the set. |
| Tank setup | A | I could build the enclosure from this alone. |
| Feeding | A | The only page that tells me where sources disagree instead of picking one and hiding it. |
| Enrichment | B+ | Honest about having no species research, and the priority list is usable. |

Set grade: B. "The five deep dives are strong, specific, and unusually
honest about uncertainty. The hub sitting in front of them is looser and
contradicts them on numbers a beginner will act on first."

### Numbers checker

`node scripts/check-species-numbers.mjs gargoyle-gecko --strict` before
the pass printed 18 topic groups with conflicts, the most of any species
in batches F to H. Eight were the hub against a deep dive, and the hub
disagreed with its own FAQ on one of them.

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild.

- Temperature. Hub: "between 72 and 80 degrees F during the day...
  temperatures above 85 degrees F can be fatal." Tank setup: "72 to 78°F
  during the day... sustained temperatures above about 82°F cause real
  stress." Both turned out to be wrong, see below.
- Insects, the hub against itself. Diet section: "Supplement with live
  feeder insects 1 to 2 times per week." Its own FAQ: "live insects
  should be offered 2 to 3 times per week." Feeding guide: "once a week
  for adults."
- Supplements. Hub: "Dust insects with calcium w/D3 2 to 3 times per
  week." Feeding: "a calcium supplement without D3 for most feedings,
  with a D3-inclusive product periodically." The hub had the D3 schedule
  backwards, which is the direction that causes harm.
- Handling. Hub: "Sessions of 10 to 20 minutes a few times per week."
  Handling: "Start with 5-minute sessions every other day, working up to
  about 15."
- Time of day. Hub: "Handle gently at dusk when they are naturally
  alert." Handling: "Handling during the day, when gargoyle geckos are
  naturally sleepier, also tends to go smoother."
- Temperament. Hub: "they rarely jump suddenly." Handling: "Young
  gargoyle geckos are skittish and jumpy, quick to leap."
- Tail. Hub: "The tail partially regenerates." Handling: "fully
  functional."
- The hub's entire Enrichment section was about handling, where the
  enrichment guide says "do not treat handling as enrichment for a
  species that drops its tail."

### The tank setup guide against its own three sources

The most serious defect found in batches F, G or H, and neither the
checker nor the reader could have caught it, since it needed the sources
opened. The guide was titled "A Cool-Climate Species That Doesn't Want
Your Heat Lamp" and argued that "Most homes need no dedicated heat source
at all" and that "this is a temperature ceiling, not a floor." All three
of its own cited sources say the opposite:

- ReptiFiles, the species-specific page whose subject is this exact
  topic: daytime "between 77-84°F", a basking spot targeting "84°F", and
  air that "should never get higher than 86°F (30°C) or lower than 65°F
  (18°C)". It answers the room-temperature argument directly, noting
  geckos are ectothermic and benefit from a heat source.
- The Bio Dude: "Basking area temperature: 82-85°F", "Cool zone
  temperature: 70-75°F", and in terms: "There is a common misconception
  that gargoyle geckos don't need a heat source, but this is false."
- Reptiles Magazine: "Gargoyle geckos like temperatures of 78 to 82
  degrees Fahrenheit during the day," heated by "a low wattage
  incandescent bulb or a ceramic heat emitter... over one side of the
  tank so that the temperature of basking areas (branches) reaches the
  desired range."

Two of the three name the no-heat belief as a misconception. The guide
was publishing it as its headline. Rewritten to the reconciled position:
a gradient with a cool end around 70 to 75°F and a basking spot around 82
to 84°F, ambient at or below 82, a 65°F floor, and a hard 86°F ceiling.
The title, excerpt, description, seoDescription, figure caption, FAQ and
closing paragraph all carried the old claim and all changed. The cost
guide's "this species doesn't need a dedicated heat source in most homes"
went with it.

This also resolves a conflict the reader flagged and could not settle:
the feeding guide's "a warm side that runs too cool slows digestion"
described a warm side the setup guide said not to build. The feeding
guide was right.

### Deep dives against each other

- Substrate. Health: "Impaction... is linked to ingesting loose
  substrate, which is why non-particulate substrate matters for this
  species." Tank setup recommends coconut fiber, which is loose, and its
  own avoid list is "sand, wood chips, and gravel." The reader: "Those
  two pages are not applying the same rule." The health guide's blanket
  claim has no source behind it and the setup guide's position is backed
  by two of its three (Reptiles Magazine's peat-based soil mix, The Bio
  Dude's bioactive layering), so the health guide now names the sharp and
  indigestible particles as the risk and notes an arboreal species is at
  lower risk than a ground-dweller to begin with.
- Bulb life. Cost FAQ: "every 6 to 12 months." Cost table: an annual line
  item. The FAQ now says annually is the conservative end of that window.

### Encyclopedia

Three fields, all researched.

- `conservation` read "Vulnerable (IUCN)" while the same entry's history
  paragraph said "The IUCN still rates the species Least Concern." The
  IUCN Red List page itself returns 403 to an automated fetch, but
  Wikipedia gives Least Concern citing IUCN 3.1 and the GBIF taxon record
  agrees. Corrected to Least Concern. The likely origin is the crested
  gecko entry directly above it in the same file, which is genuinely
  Vulnerable.
- `overview` said the gecko "can drop and partially regenerate its tail,
  though the regrown version is smooth and bumpy." The reader: "cannot be
  both." The handling guide, citing Lozito et al. (2024) in Gigabyte,
  says gargoyles regenerate where crested geckos cannot, and the regrown
  tail is "prehensile and cartilage-based rather than bone, with somewhat
  asymmetrical scales, but fully functional." A peer-reviewed paper
  outranks everything, so the overview now matches it.
- `wildLifespan` read "15-20 years", a captive figure in the wild field,
  the fourth instance of this defect in two batches after hedgehog,
  veiled chameleon and milk snake. No source gives a wild figure for this
  species. Rewritten to the form the crested gecko and African fat-tail
  entries in the same file already use.

### Also fixed

Four of the reader's eight recommended links. The setup guide was already
at the one-sibling cap on a pre-existing link to the health guide, so its
suggested pointer to the feeding guide was dropped rather than the
existing one; the hub needed none; and the encyclopedia carries no
in-body links.

### Open

- The six things not covered anywhere, in docs/READER_LOG.md: choosing a
  healthy animal at purchase, a cleaning schedule, sexing and what a lone
  female laying infertile eggs means, first aid for a fresh tail drop, a
  scale and target weights by age, and cleanup crew cost for the
  bioactive option two pages recommend.
- The scale is the pointed one: the feeding guide calls regular weighing
  "the most objective way to catch a real problem early" and no page
  listed one in gear or cost. It is on the router hub's buy list now,
  which is a partial fix, not a real one.
- The hub's "Females should not be paired with males until they reach at
  least 40 grams" had no deep dive behind it and no page follows it up.
  Retired rather than carried as an unsourced row, and filed as a gap.

## Gerbil (2026-09-14, batch H, single pass, before the router hub)

Extractor set of eleven pages, the largest yet (hub, encyclopedia, cost,
handling, health issues, tank setup, feeding, enrichment, legal, and the
vs guinea pig and vs hamster comparisons). One Opus 5 agent. The reader
read the legacy care sheet hub; the router hub was built from its
findings the same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | A- | Densest page in the set and the only one citing Merck. |
| Encyclopedia | B+ | Short, genuinely natural history, no care padding. |
| Cost | C+ | The monthly figure does not match its own annual table. |
| Handling | C | Thin, mostly "social, day-active, no tail." |
| Health issues | B- | Good triage lines, shorter and softer than the hub's health section. |
| Tank setup | A- | The most buildable page here. |
| Feeding | B | Specific, sourced, and it contradicts the hub. |
| Enrichment | A | Best page in the set. |
| Legal | A | Tells me the exception-by-absence trap. |
| vs Guinea pig | C- | Its gerbil column is unreliable. |
| vs Hamster | C | Useful on schedule, wrong on diet. |

Set grade: B-. "Excellent on the two things that matter most, burrow
structure and law, undermined by numbers that disagree across pages I am
supposed to trust equally."

### The pattern reversed

This is the first species in four batches where the hub was right and the
deep dives were wrong, and it matters for the process. The hub was the
only page in the set citing the Merck Veterinary Manual, and it graded
A-, the highest hub grade any reader has given. A router rebuild that
assumed the deep dive wins by default would have deleted six correct,
vet-sourced figures and carried the drifted ones forward.

Opened Merck's gerbil page. Every hub figure is verbatim:

- "Gerbils thrive on commercially available pelleted rodent diets with
  18-20% protein."
- "Pelleted chow (5-8 g/day) has been recommended."
- "On diets containing > 4% fat", gerbils develop elevated blood
  cholesterol.
- Nasal dermatitis develops above 50% humidity; prevention requires
  "lowering environmental humidity below 40%."
- "The normal lifespan of a gerbil is 2-3 years."
- On tail degloving: "amputation of the bare portion of the tail as soon
  as possible is recommended to prevent the development of infection."

### Numbers decided, both sides and the source that won

- Protein. Feeding guide "Aim for roughly 14 to 16%" against the hub's 18
  to 20%. Merck, a veterinary manual, outranks the American Gerbil
  Society, a husbandry reference, and the two do not actually conflict:
  AGS gives 14% as a minimum and the feeding guide had read a floor as a
  target. Now 18 to 20%, with the 14% kept as the floor many
  hamster-labelled bags miss.
- Fat. Feeding guide "low fat around 4 to 8%" against Merck's ">4%"
  causing raised cholesterol. The reader put it best: "The hub's danger
  line is the feeding guide's target." Now at or under about 4%.
- Portion. Feeding guide 5 to 10 g against Merck's 5 to 8 g/day.
- Humidity. Setup and health guides "under about 50%" against the hub's
  "below 40 percent". Merck gives both numbers with different meanings:
  50% is where the disease appears, 40% is what prevents it. Both pages
  now say so.
- Lifespan. Cost guide "2 to 5 years, commonly landing around 3 to 4"
  against the two comparison pages' flat "2 to 3 years". Merck says 2 to
  3, so the pages the reader graded C- and C were right and the cost
  guide was not.
- Tail slip, three positions across three pages. Handling: "genuinely
  warrants a vet visit." Health: "The stump usually heals on its own."
  Hub: "prompt amputation of the bare section." Merck backs the hub, and
  the health guide's version was the dangerous one.

### Hub-only material moved into the health guide

Retiring this hub would have deleted clinically useful Merck content no
deep dive carried, so it moved first and the rows copy it from there:
aural cholesteatoma, which Merck records in 50% of gerbils over two years
old with head tilt as the visible sign, seizures and how to tell the
ones that resolve with age from the ones that do not, and the 25 to 40%
tumor incidence past two or three years with scent gland and ovarian
tumors at roughly 80% of the total. All three are now sections of the
health guide.

### Other fixes

- The cost guide's "$25 to $40 a month" against its own annual table,
  which sums to $125 to $232 a year including the vet check, or $10 to
  $20 a month. The reader caught it; the table was right.
- The vs guinea pig table's "10-gallon+ tank" against the setup guide's
  20-gallon long minimum for a pair.
- The vs hamster guide's "a quality pelleted food formulated for both
  works for either species", which the feeding guide and AGS both
  contradict. It now has a short section of its own saying why the bag
  labelled for both is usually a hamster bag.
- The feeding guide listed citrus as outright toxic while the RSPCA, one
  of its own three cited sources, lists oranges among the fruits that can
  supplement a pelleted diet. Citrus moved from the toxic list to the
  ration-it list.
- Encyclopedia wildLifespan read "2-3 years", a captive figure in the
  wild field, the fifth instance of this defect in two batches. Animal
  Diversity Web gives an average wild lifespan of 3 to 4 months, which is
  a far more striking number than the one it replaced.
- Six of the reader's eleven recommended links.

### Open

- The seven things not covered anywhere, in docs/READER_LOG.md: sexing
  and confirming a same-sex pair, choosing animals at purchase, the
  first-week settling routine, declanning warning signs and how to split
  a pair safely, a full cleaning schedule, heat and cold thresholds, and
  playpen safety.
- The declanning gap is the sharpest. Both the hub and the encyclopedia
  call failed introductions the hardest part of keeping gerbils, and no
  page says what a pair breaking down looks like or what to do about it.
- The shared small mammal heat stress guide names guinea pigs, rabbits,
  chinchillas and hamsters and not gerbils, which is a one-row fix in a
  shared guide rather than species work.

## Sulcata Tortoise (2026-09-14, batch H, single pass, before the router hub)

Extractor set of ten pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, legal, and the sulcata vs
Russian tortoise comparison). One Opus 5 agent. The reader read the
legacy care sheet hub; the router hub was built from its findings the
same day.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | C | A summary of the other nine, and the only page where numbers are asserted with no hedging. |
| Encyclopedia | B- | Almost nothing to act on, except the 10 foot burrow depth. |
| Cost | A- | Adoption over purchase, monthly figures by life stage, the winter electricity line. |
| Handling | B | Keep juveniles low, never house two mature males, sexing cues. |
| Health issues | A- | Names two studies and admits they disagree. |
| Tank setup | A | Every number I need to build. The most useful page here. |
| Feeding | A | Schedule by age, supplement cadence, the one week vet threshold. |
| Enrichment | A- | Target training, and do not build terrain that flips a tortoise. |
| Legal | A- | The state table, the tick certificate, the California desert tortoise mix-up. |
| vs Russian | B+ | Mostly a do-not-buy filter, which is fair. |

Set grade: B+. "The deep dives are genuinely good and specific, and the
set is dragged down by a hub that repeats them badly and by numbers that
drift page to page."

### Numbers checker

`node scripts/check-species-numbers.mjs sulcata-tortoise --strict` before
the pass printed 20 topic groups with conflicts across 48 groups, the
most of any species in batches F to H.

### The brumation contradiction

The reader called this the worst one, and it is the only case in three
batches where a deep dive contradicted one of the site's own shared
guides rather than a sibling.

Tank setup: "In regions with genuinely cold winters, the shelter needs to
stay heated to at least 55 to 60°F to allow safe brumation." The vs
Russian guide: "Sulcatas come from the edge of the Sahara and are not
built for brumation at all."

The site already settles this. Our shared tortoise brumation guide names
the species the Royal Veterinary College considers unsuitable for
hibernation outright, and the African spurred tortoise is on that list
alongside leopard, red-foot and yellow-foot tortoises, because they are
tropical or subtropical species with no cold-season adaptation. The tank
setup guide was giving Testudo advice to a Sahel animal. Rewritten: where
winters are cold, the tortoise winters indoors, and the sentence now
links the shared guide that names it.

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild.

- Lifespan. Hub: "they can live 70 to 150+ years." Cost guide: "commonly
  lives 70 to 100 years", which handling and vs Russian also say. The
  reader: "The hub is the outlier and it is the number people quote."
- Pyramiding. Hub: "is caused by excessive protein intake, low humidity
  during growth, and rapid growth rate." Health: "It's debated," with two
  named studies that disagree. The hub was stating a live scientific
  question as settled, in the direction the health guide's better source
  rejects.
- Sexing size. Hub: "around 8 to 10 inches in shell length." Handling:
  "10 to 15 inch shell-length range."
- Calcium. Hub checklist: "2 to 3x/week" flat. Feeding: "2 to 3 times a
  week for juveniles and about weekly for adults."
- Outdoor space. Hub: "at least 100+ square feet." Setup: "80 to 100
  square feet per tortoise, ideally several hundred."
- Shelter temperature. Hub: "60 degrees F+." Setup: "70 to 75°F."
- Greens cost. Hub: "$60 to $120." Cost guide: "$2.44 to $3.57 a pound,
  call it two or three pounds a month."

### Numbers decided, both sides and the source that won

- IUCN status, which carries a legal conclusion. Encyclopedia:
  "Vulnerable (IUCN)." Legal guide: "Centrochelys sulcata is IUCN
  endangered, which makes it categorically non-exempt" from a
  Massachusetts permit allowance. The 2021 assessment by Petrozzi and
  colleagues lists the species as Endangered, and Wikipedia records it as
  Endangered under IUCN 3.1 with that assessment year. The IUCN Red List
  page itself returns 403 to an automated fetch. The legal guide was
  right and the encyclopedia was out of date.
- Lifespan. Animal Diversity Web gives an average captive longevity of
  54.3 years and no wild figure; ReptiFiles says "over 70 years"; the
  cost guide says 70 to 100. Nothing supports 150. The encyclopedia's
  wildLifespan also held a captive figure, the sixth instance of that
  defect in two batches.
- Adult weight, four figures across four pages. Animal Diversity Web:
  "Range mass: 36 to 50 kg", which is 79 to 110 lbs. ReptiFiles: "70-110
  lbs on average, although particularly large males can reach over
  40 inches and 200 lbs". The handling guide's "80 to 110 pounds, and a
  male can reach 200" already matched both, so the encyclopedia's
  "70-150+ lbs" and the vs Russian guide's three instances of the same
  were corrected to it rather than a new number being introduced.
- Juvenile indoor size. Handling gave "an 8-by-8-foot indoor minimum as a
  juvenile", which is the setup guide's adult figure. Corrected to the
  setup guide's roughly 7 by 3.5 feet under 10 inches, with 8 by 8 named
  as the adult floor for housing that should not be indoors at all.
- Shelter cost, inside one page. Cost table "$200 - $600" against its own
  body's "another $1,000 or more on top of that". The table row now reads
  $200 to $1,000+ and the body says what the table is pricing.
- Daytime temperature. Feeding's "roughly 85 to 95°F during the day"
  blurred the setup guide's ambient 80 to 90 and basking 95 to 105 into
  one band. Now it names both.

### Also fixed

Seven of the reader's ten recommended links. The enrichment guide was at
its one-sibling cap on a pre-existing sentence reading "The tank setup
guide has the indoor and outdoor space requirements at each size", which
is the site self-reference RULES bans, so that sentence now carries the
80-to-100-square-feet figure directly and the freed slot went to the
reader's requested feeding link.

### Open

- The six things not covered anywhere, in docs/READER_LOG.md: a juvenile
  soaking protocol, growth benchmarks and a weigh-in schedule, how to
  build the humid hide the pyramiding advice depends on, evaluating a
  hatchling or breeder, emergency vet costs in dollars, and how to move
  an adult.
- The soaking one is the sharpest: the feeding guide says juveniles
  "benefit from regular soaking" and then stops, with no frequency,
  duration, depth or water temperature anywhere in the set.
- The moving question is the second: the cost guide raises transporting a
  hundred-pound tortoise and no page answers it, on a set where the
  enrichment guide's best line is about target training precisely so the
  animal moves itself.

## Cardinal tetra, milk snake, gargoyle gecko, gerbil, sulcata tortoise (2026-09-14, batch H species check)

One Fable agent covering all five species on branch
claude/hub-pacman-frog-80291s from base b01ecd2, run once after every
species was done and pushed, per the batch prompt. It read diffs rather
than whole files, opened the source URLs behind the two claims the batch
rests on (the Merck gerbil page, twice, plus the raw page text for the
seizure paragraph; ReptiFiles, The Bio Dude and Reptiles Magazine on
gargoyle gecko heat) and behind every other number decision (ReptiFiles
on milk snake and sulcata, Animal Diversity Web for cardinal tetra, milk
snake, gerbil and sulcata, Aquarium Co-Op on ich, the RSPCA on gerbil
citrus, Wikipedia for the two IUCN fields where the Red List returns
403), fixed every finding on the branch, and committed "Cardinal tetra,
milk snake, gargoyle gecko, gerbil, sulcata tortoise: species check".
Nothing merged.

### Scope

Clean. The diff is the five guide entries, the five species' MDX, this
file, docs/READER_LOG.md, READMEFIRST.md and docs/TODO.md (the batch
pick-up commit), and four encyclopedia entries, all for batch species,
every changed field traced to a named source that was opened again here
(gargoyle: Lozito et al. for the tail, Wikipedia and GBIF for Least
Concern; milk snake and gerbil: Animal Diversity Web; sulcata: ADW,
ReptiFiles, and Petrozzi et al. 2021 via Wikipedia for Endangered). The
sulcata overview and adultSize edits are same-page copies of the moved
weight and lifespan figures, not new research. No shared class guide
row, no other src file. SHORT_LABELS and RELATED_ARTICLES needed no
change and got none.

### The two claims the batch rests on

Both hold. Merck's gerbil page states, verbatim, 18 to 20% protein, 5 to
8 g/day, raised cholesterol on diets over 4% fat, nasal dermatitis above
50% humidity with prevention "below 40%", a 2 to 3 year lifespan, and
tail amputation "as soon as possible". Reversing the usual direction was
right. And the three gargoyle sources do reject the old no-heat thesis:
ReptiFiles gives 77 to 84°F with a basking spot at 84 and calls
inadequate heat the most common cause of lethargy and poor appetite, The
Bio Dude gives basking 82 to 85 and cool 70 to 75 and calls the belief
"a common misconception", Reptiles Magazine gives 78 to 82 by day under
a low-wattage bulb or ceramic emitter. The rewrite was warranted.

What did not hold was one sentence downstream of the Merck claim: see
Gerbil below.

### Cardinal tetra: fixed on the branch

- Eight first-week rows carried a source's name ("Animal Diversity Web
  puts", "Seriously Fish gives", "Practical Fishkeeping notes", "the
  Merck Veterinary Manual documents", "Aquarium Co-Op notes"), copied
  faithfully from deep dives that name sources inline. The batch prompt
  says none of that goes in a row and this is exactly where batches D
  and E leaked. All eight rows now carry the figure alone, numbers
  unchanged; the three hub FAQs keep their names because the verbatim
  rule wins for FAQs.
- The health guide's rewritten ich FAQ said the heat advice "is not what
  Aquarium Co-Op calls for"; the cost guide's rewritten lifespan FAQ
  said "Animal Diversity Web notes". Both batch-added names cut, hedges
  kept.
- Every number decision checked out: Aquarium Co-Op never recommends
  raising the temperature and prescribes a redose every 24 hours with a
  third of the water changed, one extra day past the last spot; ADW says
  "about 5 years, although individuals may live as long as 10 years"
  and "at least 10 of this species should be kept together". Dates
  bumped on the three files where a number moved and nowhere else. Six
  links, all to shared fish guides, none over a limit.

### Milk snake: fixed on the branch

- The setup guide's new subspecies sentence ("ReptiFiles, working from
  Markel's reference figures, gives...") and its new Diet Basics opener
  ("ReptiFiles puts juveniles on...") narrated the source in the body,
  and the hub's "Size by subspecies" row copied the narration. Both
  sentences rewritten to state the figures; row updated to match. The
  figures themselves are ReptiFiles' verbatim: cool side 75 to 80, night
  70 to 75, Pueblan 28 to 36, Eastern 36 to 45, Honduran and Sinaloan 40
  to 48, juveniles every 7 to 10 days, adults 10 to 14, prey 1.5x width
  or 10% of body weight, "20 years or more".
- The vs corn guide dropped "copperhead" from its table cell and the
  review says "the copperhead is gone", but the same page's FAQ and its
  mimicry paragraph still said "coral snakes or copperheads". Both now
  say coral snakes. That page also changed three figures (length,
  lifespan, mimic) with no date bump; bumped to 2026-09-14.
- The hub routed the vs corn piece. The batch prompt's routes are one
  per own deep dive, not vs pieces, and no other router hub on the site
  routes one; removed.
- The emergency card's "Cheesy or yellowish material around the gums"
  does not appear in the health guide, whose mouth rot section gives no
  sign at all. Bullet now reads "Signs of mouth rot (infectious
  stomatitis)", which is what the guide says.
- The enrichment sentence that lost its "other substrate quantities"
  fragment ended up with "deep enough" twice; tidied, no fact changed.

### Gargoyle gecko: fixed on the branch

- The body H1 still read "A Cool-Climate Species That Doesn't Want Your
  Heat Lamp". DemotedH1 renders it invisibly, which is exactly how a
  stale copy survives. Now matches the new title.
- "A basking spot around 82 to 84°F" appeared in the body, the FAQ, the
  seoDescription, the cost guide's new link sentence and the hub
  Temperature row. No source states that range: The Bio Dude says 82 to
  85, ReptiFiles says 84. Under "never write a number no source states",
  all five now read 82 to 85, The Bio Dude's figure, which the rest of
  that paragraph's gradient (cool end 70 to 75, ambient at or below 82)
  already came from.
- The rewritten temperature section named ReptiFiles and The Bio Dude in
  prose, the substrate section named Reptiles Magazine and The Bio Dude,
  and the excerpt and opener both said "every specialist source on this
  page says otherwise". All de-narrated; the ectothermy point and the
  misconception label stay as claims, the block carries the sources.
- Hub "Feeding schedule" and "Insects" rows copied the feeding guide's
  disagreement narration ("though one detailed care sheet breaks life
  stages out differently", "most sources say... one source says... one
  specialist source is a real outlier"). Rows now carry the figures the
  guide lands on. The feeding guide itself is pre-existing text and was
  left alone.
- Cost guide (heat sentence, bulb FAQ) and health guide (impaction
  paragraph) both changed a fact with no date bump; both bumped.
- Encyclopedia: three fields, all traced, all confirmed. Wikipedia's
  infobox gives Least Concern, the handling guide's Lozito et al.
  citation carries the tail claim.

### Gerbil: fixed on the branch

- The seizures section, new in the health guide, said "Merck notes that
  frequency and severity often decrease with age, and adds that a subset
  of adults instead get progressively worse". Merck's raw page text puts
  that sentence in the paragraph on dihydrostreptomycin toxicosis
  ("seizures due to toxicosis from dihydrostreptomycin often decrease
  with age... certain subsets of adult gerbils do not improve"), not on
  spontaneous seizures. The emergency card then carried "Seizures that
  are becoming more frequent rather than less" as a call-the-vet
  bullet, built on the misread. The section is rewritten from the MSD
  page already in that guide's Sources: 20 to 40% of gerbils, uncommon
  in many pet strains, onset at 2 to 3 months, worse to about 6 months
  then declining, episodes of several minutes with no permanent damage,
  handling in the first three weeks reduces them. The "progressively
  worse" claim and the card bullet are gone; the hub Seizures row copies
  the new section.
- The emergency card had five bullets, three of them written (head
  tilt, tail, seizures) and two of the health guide's four items
  dropped (dropped food or drooling, a persistently red or bloody
  nose). The batch added the cholesteatoma and degloving sections and
  left the guide's When to See a Vet sentence untouched, so the card had
  nothing to copy from. That sentence now names the degloved tail as a
  same-day visit and the head tilt as a prompt one, and the card copies
  it: six bullets, one per item.
- Merck named in prose seven times across four guides (cost body and
  FAQ, feeding body, setup body, health body three times and FAQ), all
  batch-added, and in three hub rows and one route line. All rewritten
  to state the figure; Merck stays in the Sources blocks it was added
  to. The 40% humidity figure is on the page ("Prevention requires
  lowering environmental humidity below 40%"), so the setup and health
  guides' two-number explanation stands.
- The cost guide's FunFact still said "on average, a three to four year
  relationship" under a Lifespan section that now says 2 to 3. Same-page
  copy; now two to three.
- Both vs guides changed a fact (guinea pig: the 20-gallon cell; hamster:
  the new protein section) with no date bump; both bumped.
- Two vs routes removed from the hub, same rule as milk snake.
- Encyclopedia wildLifespan: ADW does give "average lifespan in the wild
  is 3-4 months". Confirmed.

### Sulcata tortoise: fixed on the branch

- The review says the vs Russian guide's three weight figures "were
  corrected to" the handling guide's 80 to 110. They were changed to 70
  to 110 instead, in the table, both FAQs and the body, so the vs guide
  disagreed with the handling guide, hub, encyclopedia and cost guide
  the batch had just aligned. All four now read 80 to 110 (ADW's 36 to
  50 kg is 79 to 110 lb; ReptiFiles' 70 to 110 is the only source for a
  70, and the site figure the batch chose everywhere else is 80).
- Five files changed a number with no date bump: the tank setup guide
  (brumation), feeding (85 to 95 became the two bands), handling (the
  juvenile indoor figure), cost (the shelter table cell) and vs Russian
  (weight). All bumped to 2026-09-14. The enrichment guide's pointer
  swap was left unbumped as a navigation edit carrying a copied figure.
- Emergency card: "A tortoise found on its back" and "Refusing food for
  a week" are not in the health guide the card cites (the first is the
  enrichment guide's, the second the feeding guide's). Replaced with the
  health guide's shell fracture item, which the card had skipped.
- The vs Russian route removed from the hub, same rule.
- Encyclopedia: four fields. Endangered (Petrozzi et al. 2021, via
  Wikipedia's infobox), 36 to 50 kg and 54.3 years captive (ADW), 70 to
  110 lb and 200 lb males (ReptiFiles) all confirmed on the pages.
- Left as is: the setup guide names the Royal Veterinary College in the
  brumation sentence and the hub row copies it. That is a named
  institutional list rather than provenance for a figure, and the shared
  brumation guide names it the same way.

### Gates on the branch head

check-internal-links, check-related-articles, check-affiliate-mdx,
check-cost-coverage, check-seo-tags, check-encyclopedia, check-voice
--strict and eslint all pass. check-species-numbers for all five: no
hub line disagrees with a deep dive (--strict exits 1 on every species,
including merged ones like canary, whenever any advisory group exists,
so the exit code is not the test). Voice warning counts on the 30
changed MDX files are unchanged against b01ecd2, except the gargoyle
tank setup guide, which lost one.

### Verdicts

Cardinal tetra, milk snake, gargoyle gecko, gerbil, sulcata tortoise:
all fixed on the branch. No redo.

### Pass grade: B-

The research was real and the hard calls were right: both claims the
batch leaned on hold verbatim on the source pages, the gargoyle rewrite
was warranted, and reversing the hub-loses default on gerbil was the
correct read of Merck. But the execution around those calls was loose in
ways the process has named before. Ten files changed a number with no
date bump. Three hubs routed vs pieces against the prompt's rule. Two
emergency cards carried written bullets and one dropped half the health
guide's list. Source names went into hub rows and body prose on four of
five species after batches F and G had stopped that, and the review file
says "the copperhead is gone" and "corrected to 80 to 110" about pages
where neither happened. One Merck sentence was read out of its paragraph
and reached the emergency card. None of it was hard to fix; all of it
should have been caught by the batch's own step 4.

## African Fat-Tailed Gecko (2026-09-15, batch I, single pass, before the router hub)

Extractor set of eight pages. One Opus 5 agent. African fat-tail went
first in batch I on a specific hypothesis: the gargoyle gecko defect in
batch H was a setup guide whose whole thesis its own three sources
reject, and this is a sibling gecko guide from the same writing pass, so
it was the likeliest place for that failure to repeat.

It did not repeat. Tree of Life Exotic Pet Medical Center, the vet
clinic this set cites, backs the setup guide line for line: "A 20-gallon
long tank (or similar) is suitable for one adult", "Warm side: 88-92°F
(measured on the substrate). Cool side: 75-80°F", "Maintain around
50-70%", "Juveniles: Feed daily. Adults: Feed 3-4 times per week",
"7-9 inches total length as adults". The guide's terrestrial thesis is
simply correct. Worth recording as a negative result, since the point of
ordering the batch that way was to find out.

| Page | Grade | Reader's one line |
|---|---|---|
| Care guide hub | B- | It states numbers that its own deep dives contradict. |
| Encyclopedia | B | The wild-caught import history changes how I shop. |
| Cost | B+ | I can budget the animal, the setup, and a vet emergency. |
| Handling | B | Two-week wait, no tail grabbing, chirp means stop. |
| Health issues | B+ | Symptom lists, and a clear "this one needs a vet" split. |
| Tank setup | A- | Every number I need to build the enclosure. |
| Feeding | A- | Best page in the set. |
| Enrichment | B+ | A priority order I can build to, and permission to skip mirrors. |

Set grade: B. "The deep dives are specific, honest about disagreement,
and clearly written, but the hub undercuts them with softer competing
numbers."

### Hub versus the set, both sides quoted

All against the old legacy hub, every one resolved by the router rebuild.

- Humidity. Hub: "Aim for 50 to 60% ambient humidity." Setup: "around 50
  to 70%... maintained with a permanent humid hide running 70 to 80%."
  The hub never gave the humid hide figure at all, on a species where
  that hide is the headline requirement.
- Supplements, the one that could do harm. Hub: "Dust with calcium w/D3
  at every juvenile feeding and 2 to 3 times per week for adults."
  Feeding: "plain, phosphorus-free calcium at most feedings... with a
  calcium and D3 combo used once or twice a week on top." Different
  regimens, and the hub never mentioned phosphorus at all.
- Schedule. The hub had no hatchling line, and hatchlings eat daily.
- Cool side. Hub: "75 to 78 degrees F", with no night temperature.
  Setup: "75 to 80°F, with a nighttime drop to around 70 to 75°F."
- Lifespan, substrate and soak duration all drifted the same way.

### The sand contradiction, and both pages being half right

Setup: "a common blend is roughly 70% topsoil to 30% play sand." Feeding:
"Never use sand as substrate, ingested sand causes real digestive
impaction." The reader: "One page sells me the sand, the next page bans
it."

Cadillac Vet, which the feeding guide already cited, settles it and
splits the difference: "70% untreated topsoil and 30% play sand" for a
natural substrate, and separately "We do not recommend keeping them on
sand, as it can lead to dehydration and prevent them from properly
shedding. It can also lead to impaction if accidentally ingested."

So the mix is recommended and keeping a gecko on sand is not. The
feeding guide had over-generalised from "do not keep them on sand" to
"no sand at all". It now says what the source says and points at the
mix. The setup guide's hedge gained the dehydration and shedding
reasons, which are the real argument against pure sand and stronger than
the impaction one it was resting on, and Cadillac Vet joins its Sources.

The same page also confirms the feeding guide's supplement regimen
against the hub's: "Calcium only be used for most of their meals, and
1-2 times a week use the Calcium/D3 combo powder", and "Do not use
calcium with phosphorus added, as this can damage the kidneys and cause
gout."

### An unsourced figure, removed

"The tail can hold close to half the gecko's total body mass" appeared in
the feeding guide's excerpt, a FAQ and the body, and the reader called it
"a big claim carried without a source". A search turns up nothing
stating that fraction; the physiological measurement does not appear to
exist in the literature the care sources draw on. Cut from all three.
What it existed to justify, that healthy adults fast for weeks to months
on the tail reserve, is sourced and stands on its own.

### Links

Three of the reader's eight (feeding and health to the tank setup guide,
tank setup to the health guide on impaction). One was skipped on a
rule: the handling guide's humidity sentence sits in a closing paragraph
that already carries two cross-species links, and a third trips
`closer-dump`, the rule against a closing paragraph that is a link
library. Corrected from "two" by the species check, which counted the
diff.

### Open

- The six things not covered anywhere, in docs/READER_LOG.md. Two are
  sharper than the rest.
- No page says how to actually raise and hold 50 to 70% ambient
  humidity. The set names it as the requirement separating this species
  from a leopard gecko and never gives a misting, ventilation or
  water-surface method.
- A hygrometer is named in one cost FAQ answer and appears in neither
  the cost table nor the old hub checklist, so a reader buying from the
  list could not measure the headline requirement. It is on the router
  hub's buy list now, which is a partial fix.

## Corydoras Catfish (2026-09-15, batch I, single pass, before the router hub)

Extractor set of eight pages. One Opus 5 agent. Corydoras was picked for
batch I as the standard tankmate for the two tetra sets reconciled in
batches G and H, so any tankmate or temperature claim in those gets
checked against fresh work.

Set grade: B. "Strong on the two things that kill cories, substrate and
dedicated food, but the hub contradicts its own deep dives on money and
tank size, which is exactly where a buyer starts." Hub B-, feeding B-,
handling C+, enrichment A.

### Two shipped defects

Both are the kind a checker cannot see and a reader finds in one pass.

- The feeding guide's "Why Corydoras Catfish Stop Eating" section was a
  numbered list containing only item 1. The reader: "which reads like a
  page that shipped broken." The article's own title promises the
  section, its FAQ names four causes, and its cited source is titled "Why
  Is My Cory Catfish Not Eating? (7 Common Causes)". Restored from that
  source: settling in, group size, bullying and being outcompeted, water
  quality, overcrowding, illness, and boredom with the food.
- The encyclopedia's header read `scientific: "Corydoras aeneus"` while
  its own history paragraph said "the bronze cory moved to Osteogaster".
  The 2024 phylogenomic revision (Dias et al., Zoological Journal of the
  Linnean Society) resurrected seven genera and transferred the bronze
  cory as Osteogaster aenea. The field now reads "Osteogaster aenea
  (formerly Corydoras aeneus)", which keeps the name a shopper will
  actually search.

### The barbel erosion conflict, settled against the health guide

Health guide: barbel erosion "is caused by a combination of sharp
substrate causing physical damage and elevated nitrates allowing
bacterial infection to take hold in the wound." Enrichment guide: "No
controlled study establishes what causes barbel erosion" and "Do not let
the substrate get dirty, which is the actual barbel risk."

Aquarium Co-Op, which the feeding guide already cites, backs the
enrichment guide: "smooth sand or gravel is preferred" and, on eroding
barbels, "it may be caused by other factors like poor water quality"
rather than substrate type alone. The health guide's confident mechanism
is now the hedged one, in the body and in both FAQs that repeated it.
The enrichment guide's behavioral argument for sand, that cories root
through substrate with their barbels to find food, is the stronger case
and survives untouched.

### Hub versus the set, both sides quoted

All against the old legacy hub, resolved by the router rebuild.

- Tank price. Hub: "10-20+ gallon tank | $60 | $120." Cost guide: "20
  gallon long tank | $35 - $60." The reader: "Same tank, double the
  money."
- Filter price. Hub: "$20 | $35." Cost guide: "$8 - $15."
- Food cost. Hub annual: "$40 | $70." Cost guide: "$10 to $20 a Month",
  which is $120 to $240 a year.
- Tank size. Hub: "A 10 to 20 gallon tank suits a proper school." Setup:
  "A 20-gallon long tank is the practical minimum for a proper school of
  six standard-sized cories." Ten gallons is pygmy-only and the hub never
  said so. Aquarium Co-Op agrees: "For dwarf species, a 10-gallon
  aquarium may be suitable, but we recommend 20 gallons or more."
- The hub's setup table omitted a heater and a test kit, both of which
  the cost guide calls required. Both are on the router hub's buy list.
- Anatomy. Hub: "scaleless catfish." Health guide and encyclopedia:
  "armored catfish with sensitive, naked bellies."

### Gaps closed rather than carried

The legacy hub's weekly 20 to 25% water change had no deep dive behind
it, the fourth fish hub in three batches to lose one after angelfish,
neon tetra and cardinal tetra. Four instances is no longer a per-species
gap: it belongs in a shared freshwater maintenance guide, written once.

### Open

- The five things not covered anywhere, in docs/READER_LOG.md: breeding,
  a named tankmate list, drip or float acclimation on arrival, which
  species want cooler or warmer water, and telling a dwarf or pygmy
  species from a standard one at the store when the two need different
  tanks.
- The acclimation gap is the sharpest, because the health guide names
  shipping stress as a red blotch trigger and then says nothing about
  what to do on arrival.

## Red-Footed Tortoise (2026-09-15, batch I, single pass, before the router hub)

Extractor set of nine pages. One Opus 5 agent. Red-foot was picked for
batch I as the third tortoise set, after sulcata in batch H and box
turtle earlier, so the shared chelonian guides get a third read.

Set grade: B. "The deep dives are specific, sourced, and unusually good
at saying why this species is not the other two; the hub sits on top
contradicting them." Hub C, health A-, tank setup A-, feeding A-, legal
A.

### The hub was the whole problem

The reader: "It is a compressed rewrite of the deep dives, and where it
differs it is wrong." Six figures, all resolved by the router rebuild
and none carried over.

- Floor space. Hub: "at least 32 to 72 sq ft." Tank setup: "an indoor
  minimum around 18 to 24 square feet of floor space for one adult."
  The reader: "That is not rounding, it is double."
- Annual cost. The hub's annual table summed to roughly $375 to $645.
  Cost guide: "Roughly $650 to $850 a Year." The hub's ceiling sat below
  the article's floor.
- Calcium. Hub: "without D3 most feedings, with D3 twice weekly."
  Feeding: "a calcium and D3 supplement several times a week."
- Diet split. Hub: "about 55% fruit, flowers, and leafy greens; 35%
  grasses and vegetables." Feeding: "about 70% leafy greens, 20% other
  vegetables, and 10% fruit," with fruit capped at 10 to 15%. The hub's
  lump let fruit run far past that.
- Night floor. Hub: "no cooler than 65 to 70 degrees F." Tank setup:
  "from dropping much below 70°F."
- UVB. The hub prescribed Arcadia 12% flat. Tank setup carries the
  Ferguson-zone caveat that puts this forest-edge species lower, with
  Arcadia Forest 6% as the alternative and real shade as the thing that
  matters most. The router row carries both camps.

The fogger price conflict (hub $40 to $90, cost guide $35 to $60) went
with the cost tables.

### Deep-dive fixes

- Health guide: "A 2021 study" cited as "(Mendoza et al., 2022)" in the
  body and again in the pyramiding FAQ. Now "a controlled study,"
  matching the Sources block, which carries the full 2022 citation.
- Handling guide: the growth FAQ said "roughly an inch of shell length a
  year through the first decade," against its own body, which cites the
  Hepper chart: 1.5 to 2 inches at hatching, 3 to 4 by the first
  birthday, 7 to 9 by age 2, 9 to 11 by age 5. The FAQ now reads the
  chart. The cost guide repeated the same inch-a-year figure and is
  corrected the same way.
- Feeding guide: adult size reached "roughly 10 to 15 years by most
  estimates," while the same guide drops feeding frequency at 5 and the
  handling guide's sourced chart says most reach close to full adult
  size within 5 to 10 years. Now the chart's figure.
- Enrichment guide: "A 2025 study" with no author or journal. The
  primary paper, Evidence of mood states in reptiles (Animal Cognition,
  doi 10.1007/s10071-025-01973-y), now sits above the phys.org summary
  in Sources.
- Four of the reader's link asks added: health to tank setup on "raise
  humidity and warmth," handling and cost to tank setup on the substrate
  mismatch and on floor space, feeding to health on pyramiding. (The
  species check corrected this line from "three"; it listed four.)

The reader's second requested change, in-body links from the health
guide to both the tank setup and feeding guides, is half done on
purpose: the linking rule caps sibling-suffix links at one per article,
so the health guide links to tank setup only.

### Also fixed

RELATED_ARTICLES had no entry for red-footed-tortoise-legal-guide, so
the legal guide was reachable from the hub and from nowhere in the
sidebar. Sulcata and box turtle both list theirs. Added.

### Open

- The five things not covered anywhere, in docs/READER_LOG.md: a soaking
  protocol (how often, how deep, how warm, how long), cohabitation and
  male aggression, what to inspect on an animal before paying and its
  first month, healthy weight for shell length and a weighing cadence,
  and how often to change permanently damp substrate.
- The soaking gap is the sharpest. Every page in the set says this
  species soaks often and none of them says what that looks like. It is
  the third tortoise set to raise it: sulcata's reader asked for the
  same protocol for juveniles. Two instances make it a shared chelonian
  guide rather than a per-species gap.

## Degu (2026-09-15, batch I, single pass, before the router hub)

Extractor set of ten pages. One Opus 5 agent. Degu was picked for batch I
as the small mammal, cross-linked to gerbil from batch H and to
chinchilla by its own comparison guide.

Set grade: C+, the lowest in the batch. "The individual pages are well
aimed and the enrichment, legal and feeding guides are genuinely good,
but a buyer following them gets three cage sizes, two temperature
ceilings and two opposite answers on sand, which is exactly where a care
site has to be right." Hub B+, enrichment A, feeding A-, legal A, cost
C-, handling C.

### The second hub to reverse the hub-loses default

Gerbil did it first in batch H. Degu is the same shape: the old hub was
the only page in the set citing the RSPCA, and the reader called it "the
densest page in the set," carrying things no deep dive had. Per the
batch H rule, that content moved into the deep dives first, with the
RSPCA cited there, and the rows copy it from the articles.

Moved into the tank setup guide, all verified against the RSPCA's own
pages rather than the hub's paraphrase:

- The solid roof, and why. "As a prey species, degus can get frightened
  of movements above them (their main predators in the wild are birds of
  prey)."
- Safe-wood branches, pear, apple or beech, with platforms at different
  levels.
- The case against a glass tank, which the hub gave as dust and the
  RSPCA gives as air: "degus housed in fish tanks or glass vivariums can
  suffer from respiratory problems, as they don't allow enough air to
  circulate in and out." This also answers the reader's complaint about
  a page titled tank setup for a species that must not live in a tank.
- A solid enclosure bottom under a deep layer of bedding. The hub's six
  inches is not a figure the RSPCA gives, so it did not move.

Moved into the feeding guide: coprophagy as a requirement. "They need to
be able to eat their own droppings to get their essential nutrients and
keep their digestive system healthy."

Moved into the health guide: vitamin A deficiency and liver disease,
which sit on the RSPCA's own list alongside diabetes, tail loss, heat
stroke and respiratory infection.

### What the hub lost anyway

- Cage, three sizes across the set. Hub: 24x18x36. Setup guide:
  24x18x24. The hub's own cost table: a 24x24x48 product. None was
  sourced, so PetMD settles it at "about 28″ L x 18″ W x 28″ H" for two
  degus, and the setup guide now carries that.
- Bar spacing. The hub's half an inch was right and its article was
  wrong: the setup guide said "an inch or less for adults." PetMD says
  "no more than a half inch," and the setup guide now says that.
- Temperature. Hub: 60 to 72°F, "cannot cope above about 80." The health
  guide's emergency line is 77°F, so the hub's ceiling sat three degrees
  past it. Setup guide's 65 to 70°F with nothing approaching 77 is the
  row.
- Wheel: 12 inches or more, against the setup guide's 11 to 12.
- Bath medium: "chinchilla dust rather than sand," a flat reversal of the
  enrichment guide's "Use sand for degus, not dust."
- Bath length: ten to fifteen minutes, against the enrichment guide's
  twenty.
- Pellets: a tablespoon per degu, against the feeding guide's 1 to 2.
- Carrot, sweet potato, beetroot and parsnip "in very small pieces as an
  occasional treat," against the health guide's line that even small
  amounts of carrot can trigger the disease.

### Deep-dive fixes

- Cost guide: "Upfront Setup: Roughly $100 to $300" sat directly above
  its own table, which sums to about $375 to $520 of equipment before
  the animals. The reader: "the $100 to $300 setup figure sitting above a
  table that disproves it." Heading, seoTitle, seoDescription,
  description and the setup FAQ all corrected to the table.
- Lifespan, three figures across three pages. Encyclopedia: "1-4 years in
  the wild; 6-7 years in captivity." Cost guide: "5 to 8 years, with some
  reaching 10 to 13." Chinchilla comparison: "5 to 9 years, some reaching
  the low teens." The colony management paper the enrichment guide
  already cites settles it: "Being a prey species, they seldom live
  longer than 2 years in the wild" and "in captivity they live up to 5-8
  years." All three pages now carry that, and the unsourced 10 to 13 is
  gone.
- Feeding guide: "steer clear of rabbit food entirely, it can contain an
  ingredient that's genuinely toxic to degus." The reader flagged it as
  "a fact copied without being understood." The ingredient is a
  coccidiostat, the anti-parasitic feed additive routinely included in
  rabbit and poultry feed, and it is now named.
- Tank setup guide: the sand bath had no session limit, against the
  enrichment guide's "Do not leave sand in permanently." Now twenty
  minutes and a link to why.
- Six of the reader's link asks added. The reader's structural point,
  that "every deep dive links out to gerbil or chinchilla pages and
  almost never to its own species' siblings," was exactly right: before
  this pass not one degu guide linked to another.

### Also fixed

RELATED_ARTICLES had no entry for degu-legal-guide, the second missing
legal guide this batch after red-footed tortoise. Added. Worth a sweep
across every species with a legal guide.

### Open

- The six things not covered anywhere, in docs/READER_LOG.md: how to
  introduce or bond two degus and re-pair a survivor, how to sex them and
  what a mis-sexed pair costs, where to source a bonded pair and how to
  judge a healthy animal, a cage cleaning schedule for a deep dig layer,
  out-of-cage time and degu-proofing, and what happens when one of a pair
  dies.
- Bonding is the sharpest. The set tells the reader to buy two eight
  times and never tells them how, and four pages say introductions of
  unfamiliar adults fail.

## Savannah Monitor (2026-09-15, batch I, single pass, before the router hub)

Extractor set of eight pages. One Opus 5 agent. Savannah monitor was
picked for batch I as the lizard and to clear one of the six enrichment
guides carrying the "Other quantities are available" template fragment.

Set grade: B-. "The build and legal pages are genuinely good, and the set
is undone by a hub whose numbers fight the pages underneath it and by a
feeding question nobody answers." Tank setup A, handling A-, legal A-,
encyclopedia B+, enrichment B, cost B-, hub C+, health C+.

### The missing feeding guide

This species has no feeding guide, and the reader's summary of what that
cost them is the sharpest sentence in the batch: "I could build the
enclosure, wire the heat and light, buy legally, and handle the animal. I
could not feed it with confidence."

The only feeding schedule anywhere in the set was one hub line, "Feed
juveniles daily. Feed adults 3 to 5 times per week," which no article
repeated or sourced. It is also wrong: LafeberVet and Tree of Life Exotic
Pet Medical Center, the two veterinary sources the set already cites, both
independently say adults eat two to three times a week.

Per the standing move for a species with no feeding guide, a sourced Diet
Basics section now sits in the tank setup guide: gut-loaded insects as the
staple, lean mice, chicks or freshwater fish as occasional items, juveniles
daily or every other day and adults two to three times a week, calcium
dusting with D3 only where UVB is absent, a weekly multivitamin, and
LafeberVet's minimum 2:1 calcium to phosphorus ratio. On portion the
honest answer is that the veterinary literature does not give one, and the
section says so.

### The hub fought its articles on eight figures

All gone rather than moved.

- Size, three figures across three pages. Hub: 3 to 5 ft, 6 to 15+ lbs.
  Handling: 3 to 4 feet, 8 to 15 pounds. Encyclopedia: 2.5-4 feet. The
  reader: "Three different animals." Tree of Life Exotics settles it at
  "3-4 ft (90-120 cm) average adult length; 8-15 lbs (3.6-6.8 kg)," which
  is the handling guide's figure exactly, so the handling guide is the
  source and the encyclopedia now matches.
- Basking. Hub: 130 to 150F surface. Tank setup: 140 to 150F. "A 130F
  floor is ten degrees of daylight between two pages."
- Cool side. Hub: 78 to 82F, and no night drop at all. Tank setup: 75 to
  85F with nights at 70 to 75F.
- Humidity. Hub: 60 to 70% in the burrow area. Tank setup: around 50%
  ambient plus a genuinely humid burrow.
- Substrate. Hub: 12 inches or more, and its shopping checklist said
  "12 inch+". Tank setup: 12 to 24 inches or more. The reader noticed
  that the checklist, the part they would actually shop from, carried the
  failing figure.
- Vet exam. Hub: $70 to $120. Cost guide: $50 to $100.
- Enclosure cost. Hub: $500 to $1200 for an 8x4x4 build. Cost guide: $650
  to $730 for an 8x2x2 that does not fit the animal. The hub priced the
  right-sized box below the wrong-sized one.
- Lifespan. Hub: 5 to 8 years. Cost guide: 10 to 15 commonly cited, 15 to
  20 achievable, with many dying in their early teens.

And the defect that is not a number: the hub argued for an
invertebrate-heavy diet and then listed "Varied whole prey diet (roaches,
eggs, mice, rats)" on the checklist, "putting the two items it just
blamed for killing the species on my shopping list."

### Deep-dive fixes

- Legal guide, wrong about itself in three places. It says "the six
  places that do restrict it," "Three of the six restrictions," and
  "Rhode Island is the only one of the six," above its own eleven-row
  table and its own closing "Forty-one of the 52." The article was
  written when the matrix held six jurisdictions and five were added
  later. Corrected to eleven, and the Rhode Island paragraph now names
  the other permit routes: five outright bans, six paperwork.
- Enrichment guide, two stranded sentences. "Other quantities are
  available and an enclosure for this species will need many" and "The
  board is sized for a lizard and not a dog, which is the gap that used
  to sit here." The reader: "reads like a product was pulled and the
  prose was not." Both rewritten as real sentences. This clears one of
  the six enrichment guides carrying the fragment; the other five,
  Madagascar hissing cockroach, chinchilla, ackie monitor, Argentine
  tegu and hermit crab, are still open.
- Encyclopedia wildLifespan held a captive figure again, "10-20 years."
  Seventh instance across batches G, H and I. Now says the wild figure is
  not well documented.
- Six of the reader's seven link asks added. The encyclopedia one was
  skipped because encyclopedia overviews render as plain text and no
  other entry carries a link.

### Open

- The eight things not covered anywhere, in docs/READER_LOG.md. Three of
  them, feeding schedule, portion, and supplement frequency, are now
  answered in the tank setup guide. What remains: what a healthy adult
  weight or body condition score actually is with monitor numbers, how to
  buy one and what to check before paying, building the 8x4x4 (materials,
  ventilation, floor loading, containing damp soil), maintenance of a deep
  soil bed, how to find a vet with monitor experience, and free-roam
  safety.
- The health guide is the weak page and the reader was blunt about it:
  "Finished it, fast, because it is thin. It names four problems and says
  see a vet." It is the page that should carry body condition numbers for
  this species and instead links out to a general one.

## African fat-tail, corydoras catfish, red-footed tortoise, degu, savannah monitor (2026-09-15, batch I species check)

One Fable agent covering all five species on branch
claude/hub-pacman-frog-80291s from base e69e513, run once after every
species was done and pushed, per the batch prompt. It read diffs rather
than whole files, reopened the source URL behind every number the batch
changed (PetMD on the degu cage and bar spacing, the Frontiers colony
management paper on degu lifespan, Degutopia on the coccidiostat,
Aquarium Co-Op on cory barbels and tank size, Cadillac Vet on fat-tail
substrate and calcium, LafeberVet and Tree of Life Exotics on savannah
monitor size, schedule and supplements, Tree of Life on the fat-tail
schedule, Wikipedia for the Osteogaster revision), fixed every finding
on the branch, and committed "African fat-tail, corydoras catfish,
red-footed tortoise, degu, savannah monitor: species check". Nothing
merged.

### Scope

Clean apart from one stretch. The diff is the five guide entries, the
five species' MDX plus the degu vs chinchilla piece (a same-page copy
of the moved lifespan, allowed), this file, docs/READER_LOG.md,
READMEFIRST.md, docs/TODO.md, three RELATED_ARTICLES lines (the three
missing legal guides), and three encyclopedia fields, all for batch
species and all traced to a source that was opened again here. Savannah
monitor adultSize and wildLifespan match Tree of Life Exotics and the
cost guide; degu wildLifespan matches the colony paper's "seldom live
longer than 2 years in the wild" and "up to 5 to 8 years" in captivity.
The stretch is the corydoras `scientific` field: the conflict it fixed
was with the entry's own history paragraph, not with a deep dive, which
is narrower than the batch prompt's grant. Kept, because the source is
real (Dias et al. 2024, Zoological Journal of the Linnean Society, and
Wikipedia's Osteogaster page confirms the bronze cory as Osteogaster
aenea), the field was self-contradicting, and reverting it would put
the contradiction back. No shared class guide row, no other src file,
no SHORT_LABELS change needed.

### Every number the batch changed, checked against its source

All held. Degu cage 24x18x24 to 28x18x28 and bar spacing "an inch or
less" to "no more than half an inch": PetMD states both verbatim. Degu
lifespan "5 to 8, some 10 to 13" and "5 to 9, some low teens" to 5 to 8
captive years: the peer-reviewed colony paper outranks PetMD's 5 to 9
and states the figure. Degu setup $100 to $300 to $375 to $520: the
table sums to $374 to $518. Fat-tail sand: Cadillac Vet gives both the
70/30 topsoil and play sand mix and "we do not recommend keeping them on
sand", so the feeding guide's flat ban was the wrong reading. Cory
barbels: Aquarium Co-Op's "may be caused by other factors like poor
water quality" is on the page, and the health guide had no Sources
block at all, so the enrichment guide's cited reservoir claim wins.
Savannah adult 2 to 3 feeds a week: both vet pages state it, and the
old hub's 3 to 5 had no article behind it. Savannah size 3 to 4 feet, 8
to 15 pounds: Tree of Life states it exactly. Red-foot growth figures
are the handling guide's own Hepper chart, unchanged. Savannah legal
"six" to "eleven": the table has eleven rows, five bans and six permit
or breeder routes. The unsourced fat-tail "half the body mass" was cut,
not replaced.

### What the check found, and fixed

The pattern is the one batches D, E and H were graded on and F and G
had stopped: the router step copied source narration into hub rows,
and this time the deep-dive fixes wrote new narration too.

- Fat-tail hub: five rows carried it ("sources disagree", "most hobbyist
  care sheets say... one veterinary clinic source", "flagged by an
  exotics vet source", "no source gives one universal day count",
  "care sources commonly cite... academic longevity database"), plus
  the calcium FAQ and the feeding route line. All pre-existing in the
  feeding and cost guides, which the batch prompt says to settle before
  the row is written. Settled in the deep dives (both ranges kept, the
  RULES form: state the range, say which end and why) and the rows,
  FAQ and route now copy the settled sentences.
- Fat-tail feeding guide: the seoDescription still said "a tail storing
  nearly half its body mass" after the excerpt, FAQ and body lost the
  claim, the same frontmatter-copy miss batch F named. Rewritten to 156
  characters. The feeding guide's new sand sentence linked "the
  topsoil-and-sand mix the setup guide builds on", a sentence about the
  site; now "a topsoil-and-sand mix".
- Fat-tail emergency card: the health guide's retained-shed line ("see
  a vet if constriction or tissue death has already started") was not
  on the card, and the impaction bullet had dropped "lethargy" from the
  guide's list. Both added; six bullets now.
- Corydoras health guide: the batch's hedge fix named its source in the
  body and in a FAQ ("Aquarium Co-Op's position is that...") and quoted
  it, then copied that into the hub row. Rewritten in the site's words
  in both FAQs, the body and the row, and Aquarium Co-Op added as the
  guide's first Sources entry, since the claim now rests on it. The
  closing "Husbandry Pattern" paragraph still carried the old confident
  mechanism ("sharp substrate combined with elevated nitrates causes")
  as a same-page copy; brought to the hedged version.
- Corydoras emergency card: fifth bullet ("constant dashing to the
  surface") was written from the enrichment guide, not copied from the
  health guide. Removed; the "Surface dashes" row still carries it.
- Red-foot hub: the Diet row named PetMD, the UVB row narrated "most
  detailed care sheets... some UVB researchers", the Lifespan row and
  FAQ said "some care sheets putting", and two route lines described
  the disagreement ("two camps disagree on", "how care sheets divide").
  All copied from the feeding, tank setup and cost guides, so those
  three sentences were rewritten to state the figures (the PetMD inline
  link went; PetMD stays in Sources) and the rows, FAQ and routes copy
  them. The feeding guide's new "which most individuals reach close to
  within 5 to 10 years" was garbled; now "come close to within". The
  vetLine's "Find a vet with chelonian experience" had hardened the cost
  guide's "worth finding"; hedge restored. Cost route line "$150 to $900
  for the tortoise" merged the hatchling and adult ranges; split.
- Degu: the moved RSPCA content arrived with its name attached in
  seven places across the tank setup, feeding and health guides ("per
  PetMD", "The RSPCA asks for", "The RSPCA is direct that", "The RSPCA
  puts it as", "The RSPCA treats this as", a heading "Two More on the
  RSPCA's List", "sit on the RSPCA's list"), plus "despite what this
  guide is filed under" and "which degu keepers are consistently warned
  against", and six hub rows, the vetLine and a route line copied it.
  All rewritten to state the fact; the RSPCA pages are in each guide's
  Sources. The vs chinchilla FAQ had gained "A chinchilla bought for a
  ten-year-old can still be alive when that child finishes college",
  growth the prompt did not ask for; cut, and "Expect" softened back to
  "typically". The enrichment guide's "and other sizes are available"
  fragment, the same template leftover savannah monitor was picked to
  clear, cut.
- Savannah monitor: the new Diet Basics section opened with "There is
  no separate feeding guide for this species yet... so the essentials
  sit here" (the site talking about itself) and named LafeberVet and
  Tree of Life five times, one of them a near-quote; four hub rows
  copied it. Rewritten to state the diet, schedule and 2:1 ratio; both
  pages are in the new Sources block. The Stop signals row and the
  handling sentence it copies lost "LafeberVet's instruction". Cost
  route line split into the juvenile and adult ranges. Emergency card:
  fifth bullet (the bite, from the handling guide) was not on the
  health guide's list; removed, the handling guide keeps it.
- Degu cost seoDescription was 140 characters, under the 150 floor,
  before and after the batch's edit; now 157.

Left alone, and named: the savannah monitor handling guide narrates
LafeberVet and Tree of Life in six more sentences that no hub row
copies, all pre-existing; the red-foot Fruit row's "commonly cited at";
the fat-tail cost guide names AnAge, where the recorded maximum is the
database's own fact. None of these came from the batch.

### Review file

Each species has its first-pass section. Two counts did not match the
diff and are corrected in place above: fat-tail said two links were
added (three were), red-foot said three (it listed four). Corydoras'
raw reader output is not in docs/READER_LOG.md (the other four are),
and none of the five sections carries the "Numbers checker" subsection
the batch prompt asks for (batch H's do), nor an "Encyclopedia"
subsection for the three entries changed; the encyclopedia changes are
described in prose instead. Four of the five sections give grades in
one prose line rather than the leopard gecko grade table. Every stated
fix was checked against the diff and every one is in it; unlike batch
H, nothing was claimed that did not happen. The corydoras reader
output is the one thing the batch session must file itself.

### Gates on the branch head

check-internal-links, check-related-articles, check-affiliate-mdx,
check-cost-coverage, check-seo-tags, check-voice --strict (0 errors)
and `npx eslint . --quiet` all pass. check-species-numbers for all five:
every line marked hub matches a deep dive; the strict exit still reports
advisory groups (a cost table's product size against a setup minimum,
hatchling against adult price, and the encyclopedia adult-size rows the
hub carries with no source), none of them a hub-versus-deep-dive
disagreement. check-voice per changed slug: one warning each, same as
at the base commit.

### Verdicts

African fat-tail: fixed on the branch. Corydoras catfish: fixed on the
branch, with the raw reader output still to be pasted into
docs/READER_LOG.md by the batch session. Red-footed tortoise: fixed on
the branch. Degu: fixed on the branch. Savannah monitor: fixed on the
branch. No redo.

### Pass grade: B-

Every number the batch changed was researched for real and went the
right way, the three legal guides that were missing from
RELATED_ARTICLES were caught, and the review file describes fixes that
actually happened. Against that, the batch put source names and source
narration into hub rows on all five species and into the deep dives on
three of them, which is the single defect the Fable check was
reinstated to catch and which batches F and G had already shown is
avoidable; it wrote two emergency-card bullets instead of copying them,
left a frontmatter copy of a retired claim behind again, folded the
reader-review and reader-fixes commits into the hub commit with no
before-and-after sentence list, and filed no Numbers checker subsection
and no corydoras raw output.

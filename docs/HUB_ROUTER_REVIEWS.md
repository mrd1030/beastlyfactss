# Hub router reviews (2026-09-16)

Thirty-five router hubs read by one Opus agent each, graded as routers rather
than as care sheets. Separate from docs/READER_REVIEWS.md, which holds full set
tests. This file holds one question only: does the hub take the questions a
keeper arrives with, give a short correct answer, and send them to the right
article.

## Why this pass happened, and why the first attempt was wrong

The first-week card was capped at 18 rows and 500 words on 2026-09-15, which
took 84 hubs from 1,914 rows to 1,217. The obvious risk was that the trim cut
something a keeper needs, so six hubs were read to find out.

Those first six reads asked the wrong question. The prompt asked whether the
reader could set up, feed, and keep the animal from the card, and whether
anything a keeper needs in week one was missing from it. That is a care sheet
test. A hub links out; detail living in a linked deep dive is the design
working. The proof is the control: bearded dragon, an untouched template hub
that RULES names as the standard, came back B- under that prompt with
complaints like "the card has no hydration line at all." Those six grades
(hedgehog, Jackson's chameleon, gargoyle gecko, canary, jumping spider, bearded
dragon) are void and are not in this file.

The prompt was rewritten to mark every arriving question ANSWERED (short answer
on the card), ROUTED (obvious which article to open), or STRANDED (neither),
with an explicit instruction not to mark the hub down for depth that lives in a
linked article. A question that is stranded but answered somewhere in the set is
a missing signpost and counts against the hub. A question no page answers is a
content gap and is listed separately. The 35 grades below all use that prompt.

## Grades

| Grade | Count | Hubs |
|---|---|---|
| B- | 12 | molly, corydoras catfish, red-eared slider, sulcata tortoise, blue-tongue skink, tegu, gerbil, african fat-tail gecko, sugar glider, tokay gecko, rat, savannah monitor |
| C+ | 13 | cardinal tetra, zebra danio, ghost shrimp, flying squirrel, millipede, platy, praying mantis, angelfish, bristlenose pleco, koi, discus, amano shrimp, degu |
| C | 10 | hissing cockroach, uromastyx, fire skink, stick insect, cherry shrimp, emperor scorpion, swordtail, neon tetra, quaker parakeet, zebra finch |

No A, no B, nothing below C. The band does not track how hard a hub was
trimmed: sulcata lost 12 rows and got B-, fire skink lost 16 and got C, tegu
lost 11 and got B-. Trim depth is not what set these grades.

## Why this is happening

Six mechanisms, in order of how many hubs they hit.

### 1. The emergency card is a mammal template running on animals with no vet

24 of 35 hubs. Every fish, every invertebrate. The header reads "call the vet
now if you see any of these" while the cost guide two clicks away says "Vet
Costs: Not applicable in the traditional sense" or "Effectively none.
Invertebrates are rarely taken to a vet." Often the card's own next paragraph
says test the water first.

The mechanism: `emergencyCard` was specified once, against the rabbit and
bearded dragon templates, where calling a vet is the correct instruction. The
shape carried to fish, shrimp, insects and arachnids without anyone re-reading
the header against the cost guide for those classes. It is the single most
common reason readers gave for distrusting the site, and it was never touched by
the row trim. This is original content and it is the largest finding in the
pass.

### 2. Emergency cards mix urgency tiers inside one list

Separate from the header. Cards list items the linked article treats as
home-managed ("Obesity ... manageable at home with diet correction",
"manageable at home early") and items that are not symptoms at all ("a
wild-caught animal that has not had a fecal exam", "a copper-based medication
about to go near the tank") under a heading that says call now. Rat and gerbil
contradict their own heading in the body: "The last three are a reason to book
a routine visit."

The mechanism: the card was built by lifting the health guide's
call-the-vet list plus nearby sentences, and the health guides themselves
distinguish "see a vet immediately" from "book a routine visit promptly." The
lift flattened the distinction.

### 3. The row trim orphaned sentences, and the verification could not see it

Roughly a dozen rows across the 35. Confirmed against the pre-trim file.

The worst is **degu**. Before the trim there was a `Pellets` row reading
"Measured, not free-fed, roughly 1 to 2 tablespoons per degu daily." The merge
folded it into `Diet`, whose first clause is "Unlimited grass hay." The word
pellets went with the dropped sentence, so the two-tablespoon cap now attaches to
hay that the same line calls unlimited. Rationing hay causes the dental disease
the same page calls the top reason degus see a vet.

**hissing cockroach**: `Lighting: None needed` was its own row. The merge left
"None needed." on the end of the escape-barrier line, where it reads as saying
the barrier is not needed, the reverse of the article's most emphasized point.

Same shape on stick insect (`Keeping the leaves alive` opens on a water
container never introduced), cherry shrimp (`Copper` ends in a fragment that
lost "The practical risk is that copper shows up in places keepers don't
expect"), amano (`Water chemistry` has a verbless second sentence whose
"alongside it" points backward at nothing), tegu (`Handling` merges three
topics and keeps "the nearest rule" after dropping the sentence that defined
it), flying squirrel (`Cage size and bar spacing` ends with a subjectless "No
more than half an inch").

The mechanism, and it is the important part: the trim was verified by proving
every surviving sentence was a verbatim substring of a pre-trim row with the
same `source`. That check is sound and it passed on every file. It cannot detect
that a **dropped** sentence carried the subject, the label, or the scope of a
**kept** one. Verbatim survival was treated as proof of meaning survival, and it
is not. Any future trim needs a check that reads each row's final text as a
standalone sentence, not only as a set of provenance-verified fragments.

### 4. Conditional figures stated flat

Present in most hubs, mixed origin. The article gives a figure for an adult, or
outside a molt, or after the animal settles in, and the card states it with no
condition. Amano feeding reads as conditional on a clean tank when the article
calls supplemental food a requirement. Blue-tongue gives one settling window
where the article gives two by origin. Sulcata and red-eared slider give adult
figures on pages hatchling buyers read. Koi give a comfort band and drop the
"swings over about 2°F a day are the real risk" rule that is the actual answer.
Zebra finch states the pellet ratio as a week-one target when the article says
conversion is gradual and never abrupt.

The mechanism is partly the same as cause 3, and partly the card's shape: one
row per topic means an age split or an origin split has to fit in one line, and
the shorter half gets dropped.

### 5. Route lines and article titles drift apart

The route line is written when the hub is built and is not re-checked when the
article is retitled or rewritten.

- gargoyle gecko: route line reads "A Cool-Climate Species That Doesn't Want
  Your Heat Lamp" over an article titled "A Low Ceiling, Not No Heat at All"
  that exists to kill that claim and answers its own FAQ "Does a gargoyle gecko
  need a heat lamp? Usually yes."
- tokay gecko: "A 2024 Study Says Keep Them in Pairs" over an article whose
  verdict is "Do not pair two adult tokays casually on the strength of one
  study."
- zebra finch: "Wild Ones Travel in Twos, Not Flocks" while the setup guide and
  the encyclopedia both say wild flocks run dozens to over a hundred, and the
  article's own body reports groups of three to ten.
- Several fish hubs: the shared pH/GH/KH guide is summarized as being about "a
  coldwater tank" and "how goldfish keepers crash a tank", so tropical keepers
  are steered off the one page that answers their water question.
- Small mammal hubs: the shared heat stress, vet travel and grooming guides are
  summarized entirely in terms of rabbits and guinea pigs, so rat, degu and
  sugar glider readers read them as not for them.

### 6. Questions no page on the site answers

The hub can only route to what exists. Two gaps recur on every fish and shrimp
hub without exception:

- **Water change schedule and volume.** Every page says "regular partial water
  changes." No page gives a percentage or an interval.
- **Tankmates.** No page names a compatible or incompatible species beyond
  "peaceful, similarly sized" and "fin-nippers."

Other repeated gaps: how to sex the animal (gerbil, blue-tongue, african
fat-tail, tokay, fire skink, hissing cockroach, praying mantis, rat), how to
source a captive-bred animal (savannah monitor, uromastyx, tegu, flying
squirrel, rat, discus), and cleaning cadence (degu, gerbil, millipede, praying
mantis, rat).

### Structural, near-universal

The `Adult size` row has no link on almost every hub, because it comes from the
encyclopedia and no deep dive repeats it. RULES permits a sourceless row and the
hub comment is supposed to say so, but readers on 20 of 35 hubs flagged it as a
leftover, because the block's own opener promises "each taken from the article
that explains it."

---

## Per hub

Each entry: grade, the questions handled worst, lines that mislead read alone,
lines that read as broken, and questions no page in the set answers.

### Fish and aquatic invertebrates

**molly, B-.** 11 of 16 questions answered, 2 routed, 3 stranded. Emergency
header says call the vet now, the article says swim bladder is "often
manageable at home with a short fast" and the cost guide says mollies rarely see
a vet. Temperature line gives 72 to 82°F flat and drops the article's stability
rule, so a keeper who sets 72 has hit the article's own shimmy trigger. Feeding
line stacks two labels and omits the fry rate its own breeding line promises.
Stranded: tankmates, water change schedule, stocking number for a 20 gallon.

**corydoras catfish, B-.** The surfacing line reassures ("an occasional dash to
the surface ... is completely normal") and drops the article's "Constant ones
mean the water is short of oxygen or fouled." Emergency header contradicts its
own body two lines down. Budget quoted at equipment-only scope inside a sentence
that reads as total. Route line for "Not algae eaters" points at the handling
article. Stranded: water change cadence, stocking order, whether an aerator is
needed.

**cardinal tetra, C+.** Answers the stocking question twice, differently:
"School size: The workable minimum is 10" four lines above "Tank size: A
10-gallon tank is workable for the bare minimum school of 6", and the school
line contradicts itself inside one sentence. Temperature label says "tolerated
range" where the article calls the same band the comfort range. pH stated flat
at 5.0 to 7.0 with the article's "test your source water first" dropped, on a
page whose sidebar guide is titled "Why Chasing a Number Backfires" and is never
pointed at. Stranded: tankmates, water changes, hardness in numbers.

**zebra danio, C+.** Tells a beginner to strip plants and marbles to avoid fry,
while the enrichment article's first rule is "Do not keep them in a bare tank"
and the buy list says plant it. Heater called optional; the health article needs
one for ich treatment. "Temperature and water chemistry: Not strictly needed"
answers a different question than its label. Emergency header against a cost
guide that says vet care is not applicable. Stranded: water changes,
picking healthy fish, sexing.

**angelfish, C+.** "An adult angelfish will eat small fish ... once it reaches
roughly 3 inches" drops the article's point that this happens even to fish it
was raised with. Group-size line gives no number and routes to an article titled
"The Study Found Group Size Did Not Matter", while 55 gallons for four to six
adults sits in the hub's own FAQ. Cost guide table floors near $398 against a
stated $300 to $600. Stranded: water changes, acclimation, what to do with hard
alkaline tap water.

**bristlenose pleco, C+.** No tankmate or stocking line at all, and the route
line for the article carrying temperament never mentions it. Budget stated flat
for the 20-gallon build on a card that recommends 29 to 30. Fish price given as
$7 to $10 in one place and $7 to $25 in another. Three broken merges, including
a bullet carrying wood, caves and filtration with the nouns lost. Stranded:
water changes, breeding, whether one alone is fine, plant safety.

**platy, C+.** "Or keep a single-sex group" ignores the breeding article's
stored-sperm point, so a buyer of six store females still gets fry. Emergency
header against a cost guide that says platies rarely see a vet. Lifespan line
escalates past its own range. Power outage line gives an instruction with the
reason missing. Stranded: water changes, tankmates, acclimation day one.

**swordtail, C.** Cycling given as four to six weeks on the card and 2 to 4
weeks in the setup guide. Temperature 64 to 82°F flat, with the stability rule
and "a heater is necessary unless your room stays consistently warm" dropped.
Stocking line keeps "Combined with the rule above" after the rule above was cut.
Nothing anywhere tells a buyer of one male and four females what that produces.
Stranded: tankmates, water changes.

**neon tetra, C.** Emergency header on a page whose cost guide says vets are not
applicable, with ich and fin rot listed next to the NTD signs and no separation.
Quarantine line routes to the tank setup article, which mentions quarantine in
one trailing sentence, while the hospital tank guide sits unlinked. Diet line is
a verbless fragment. "Difficulty: Beginner" against the set's own sensitivity
warnings. Stranded: water changes, acclimation, stocking pace, named tankmates.

**discus, C+.** Water chemistry, the thing the enrichment guide calls most of
the difficulty, has no line on the card and no RO unit on the buy list. Budget
quotes the table subtotal ($600 to $800) where the article's conclusion is $700
to $900 all in. Buy list says five fish and a 55 where the articles say six and
more. Acclimation line opens on "the opposite" with the default cut. Stranded:
sourcing and judging a healthy fish, nitrate ceiling.

**koi, C+.** Temperature given as 64 to 75°F with the article's "rapid swings,
more than about 2°F a day, are the real risk" dropped, contradicting the card's
own de-icer and feeding lines. Feeding merges two cool-water bands, turning a
weekly feed at 52°F into a daily one. No line says koi are shoaling fish or that
one alone is poor. Power outage line says aquarium to a pond keeper. Stranded:
how many to start, pond cycling, water change schedule, day-one introduction.

**ghost shrimp, C+.** No tankmate line, on the species most often bought for an
existing tank, and the 5-gallon figure is stated flat where the article says 10
with a betta. Molting line goes straight to failure and never says an empty
shell is normal. Feeding and cannibalism lines pull opposite ways. Emergency
header on an animal the cost guide says no vet will treat. Stranded: stocking
density, molt versus death, lid, calcium source.

**cherry shrimp, C.** Feeding portion given with no frequency, on a page whose
article names overfeeding as the killer. Budget "$45 to $110" with no scope,
where the guide says $80 to $150 for a complete setup. Copper line ends in a
fragment. Heater advice differs between the cost guide body (high 60s) and its
FAQ and the setup guide (high 50s). Stranded: fish tankmates, how long
"mature, not just cycled" takes.

**amano shrimp, C+.** "If the tank is clean, supplement" makes feeding
conditional where the article calls it a requirement and the enrichment guide
calls starvation the commonest welfare failure. One shrimp per 2 gallons stated
as a cap where the article says an algae-choked tank carries more. Water
chemistry second sentence is verbless. Emergency header, again. Stranded:
tankmates, plant safety, telling a molt from a corpse.

### Reptiles

**red-eared slider, B-.** Emergency card says call now for refusal to eat "more
than a few days"; the feeding guide says 2 to 3 weeks outside brumation, and
brumation is not mentioned on the hub at all. Tank and portion figures are
adult-scoped on a page hatchling buyers read. Three different cold floors on one
page. Legal article's state table has its columns swapped from the Oregon row
down. Stranded: sexing, tankmates, cycling before arrival.

**sulcata tortoise, B-.** Every number matches its article and every link is
right. No lighting line anywhere in the first week, though MBD is on the
emergency card and UVB is its prevention. No quarantine line on a card titled
"The first week", with the herpesvirus guide sitting in the sidebar. Diet line
is adult-scoped. "Legal check: Several states restrict this species" reads
harsher than the article's "No state prohibits owning one." Stranded: hatchling
soaking cadence, mixed-sex cohabitation, how to verify basking temperature.

**blue-tongue skink, B-.** Handling window stated flat at 2 to 3 weeks where the
feeding guide gives up to 2 months for a wild-caught animal, on a hub built
around the Northern versus Indonesian split. Feeding line resolves a dispute its
own source deliberately leaves open and drops the body-condition instruction.
Day-one paper towel fights the 4 to 6 inch substrate line with no scoping. The
legal guide has no first-week line and no entry in "Where to go next."
Stranded: cohabitation, hatchling enclosure size, sexing.

**tegu, B-.** Diet line describes an adult rodent diet as the destination and
never mentions plants, which is the diet the health guide blames for the obesity
on the card's own emergency list. Emergency bullets include lethargy and
appetite loss with no brumation caveat, in a species that goes down for 2 to 4
months from mid-September. Handling line merges three topics and keeps "the
nearest rule" after the sentence defining it was cut. Stranded: female enclosure
size, growth timeline, cohabitation beyond two males.

**uromastyx, C.** Substrate line says "fine sand or a sandy soil mix" and drops
"skip loose calcium sand or walnut shell products entirely, both carry real
impaction risk", so the card can send a first-timer to buy the product that
causes problem number two on the health page. Feeding range spans twice a week
to daily with the "lean toward the less-frequent end" rule cut. Water line says
they get water from food while the health article prescribes a weekly soak.
Humidity 20 to 30% stated flat where Yemen wants closer to 50%. Stranded:
captive-bred versus import, egg-laying in a lone female, finding a vet.

**fire skink, C.** Setup total priced with an on/off thermostat the cost guide
says not to use on a basking bulb, while the buy list says dimming. Humidity
given as 60 to 70% ambient on the card and 60 to 70% substrate in the FAQ.
"What to feed" delivers supplements. Moisture advice has no upper bound while
two articles warn that saturated is also a failure. Stranded: drinking water
(no page mentions a dish), handling schedule, sexing.

**savannah monitor, B-.** Lifespan line prints 10 to 15 years and drops the cost
guide's "many pet savannah monitors die well before that ... nearly all tied
directly to overfeeding", which the route line directly beneath promises.
Juvenile and adult prices presented as a neutral choice with the wild-caught
caveat left in the article. Emergency header against a first bullet that says
manageable at home. "That rhythm" points at nothing. Stranded: sourcing,
cleaning cadence, whether to replicate the seasonal feeding rhythm, finding a
vet.

**tokay gecko, B-.** "The tail, and never two males" licenses a mixed pair; the
setup article says one per enclosure unless deliberately pairing, and the
enrichment article says do not pair casually. Night floor given as 70°F where
the health article says no lower than 75°F. "$15 to $50" for a wild-caught
animal stated flat with "not recommended" left in the route line. "Legal check:
49 of 52 jurisdictions" with the denominator defined nowhere. Stranded: sexing,
getting a non-handleable gecko to a vet, escape recovery.

**african fat-tail gecko, B-.** Substrate line is adult-scoped and drops "Paper
towel is the right choice for quarantine and juveniles", and the buy list
repeats it with no caveat. "88 to 92°F on the warm side" drops "basking
surface", turning a floor target into what reads as air temperature. Feeding
jumps hatchling to adult and drops the juvenile tier most buyers are in. Cost
route line misstates the normal-morph price range. Stranded: cohabitation,
sexing, sourcing, lay box for a lone female.

### Birds

**quaker parakeet, C.** The hub links two legal-titled articles whose ban lists
disagree on Maine, Rhode Island, Tennessee, Nebraska, Vermont, Ohio and New
York. Diet line reads "a minimum of 70 percent" plus "no more than 20 to 40
percent", which sums past 100, on the species whose headline problem is fatty
liver. Vet costs quoted from three named clinics as flat fact, using the
established-client price for a reader who is by definition new. Noise is absent
from a page about one of the loudest small parrots. Stranded: none, everything
is answered somewhere in the set.

**zebra finch, C.** Pellet ratio given as a first-week target where the article
says conversion is gradual and never abrupt, on birds that arrive seed-fed.
Quarantine line never says quarantine from what, so a buyer of the pair the same
card insists on may separate them. "Never one bird" and no page on the hub says
how to sex one. The enrichment article's title contradicts two other pages on
wild flock size. Stranded: out-of-cage flight.

### Small mammals

**gerbil, B-.** Emergency card upgrades four "book a routine visit promptly"
signs into call now, including a red nose that the same article treats by fixing
humidity. Feeding portion is adult-scoped where the article exempts under-6-
month animals. Budget range cannot buy the enclosure the same card calls the
better target. Legal line says "at least one state" where the article has two,
and Hawaii works the opposite way from the card's description. Stranded: sexing,
cleaning cadence, what to do when one of a pair dies.

**degu, C+.** The pellets-into-hay merge described in cause 3, which is the most
consequential single line found in this pass. Heat bullet names a temperature
instead of signs on a card that says call now if you see any of these. Card says
sand not chinchilla dust; its own FAQ and the cost guide's ongoing line say
dust. Cost guide prices a cage roughly twice the volume of the card's minimum.
Stranded: cleaning cadence, introducing non-littermates, out-of-cage time,
sexing.

**rat, B-.** Emergency card contradicts its own header: "The last three are a
reason to book a routine visit", and the health article's own FAQ puts head tilt
in the urgent tier. Cage size answers for a single rat on a page that forbids
keeping one. Vet figure quoted per rat inside a sentence framed around a pair.
Bar spacing reads "about half an inch (1 to 1.5 cm)", and 1.5 cm is 0.59 inch,
so the parenthetical contradicts the spec, at the source. Stranded: introducing
two rats, sourcing, finding an exotic vet, male versus female.

**sugar glider, B-.** Foods-to-avoid line omits the oxalate list (strawberries,
carrots, spinach) and yogurt drops, and the mechanism it omits, blocked calcium
absorption, is what the emergency card is built around. Portion given as 15 to
20% of body weight with no weight anywhere on the hub. Bar spacing loses its
label onto the cage line. Nocturnal appears only as a clause inside the feeding
line. Stranded: out-of-cage time, which two to get, introductions, odor,
cleaning cadence.

**flying squirrel, C+.** Legal line points at the cost guide while a
52-jurisdiction legal guide with a map sits in the sidebar. The word nocturnal
appears nowhere. The MBD prevention line drops the light requirement the health
article puts beside it, and the buy list has eleven items and no light. Same
emergency symptom listed three times. Stranded: sourcing and telling lawful
captive-bred stock from laundered wild-caught, cleaning cadence, sexing and
introductions.

### Terrestrial invertebrates

**hissing cockroach, C.** The emergency card turns the feeding guide's
"why your roach isn't eating" list into a flat vet-now alarm, dropping the five
benign causes the article puts first. "Failure to hiss when handled" is listed
as a vet sign where the handling guide says habituation is expected. The
"None needed." merge described in cause 3. Legal line drops Oregon, which the
article lists as conditional. Stranded: stocking density, what to do about an
escapee, child safety, settling-in period.

**millipede, C+.** "A soft, weak-feeling exoskeleton" listed as call-the-vet-now
with no molt caveat, on a page whose handling article says never handle during
or right after a molt. Card says a USDA PPQ 526 permit applies to keeping;
the legal article frames it as an import permit, and the cost guide sides with
the card, so the set contradicts itself. Communal housing, which two articles
cover, is absent from the hub. Budget reads as $150 when it is $300. Stranded:
group enclosure size, sourcing and first-day handling, maintenance cadence,
sexing.

**stick insect, C+.** Parthenogenesis is in the Fun Fact slot when the articles
treat it as a purchase decision, and nothing connects it to the release ban
three lines above. "Housed in groups without issue" stated three times where the
enrichment guide describes overcrowding damage. Lifespan averages in males on a
species whose hobby stock is all female. "Keeping the leaves alive" opens on a
water container the card never introduced. Stranded: which species a US beginner
should buy, what to do with eggs, winter host plants, where to buy.

**jumping spider, C+.** Budget line has two figures with their headings
stripped, and the priced table omits two items on the card's own buy list.
Humidity "50 to 60%" with the word humidity dropped. Starvation window given for
an adult where the article adds that spiderlings have smaller reserves, on a card
whose own budget line steers beginners to a spiderling. Emergency header sends
you to an exotic vet the cost guide says does not treat spiders. Molting absent
except as a failure mode. Stranded: unboxing a shipped spider, acclimation,
first meal.

**praying mantis, C+.** Enclosure minimum 8 by 8 by 12 stated flat next to a
four-times-body-length drop rule the card never reconciles, so a four-inch
Chinese mantis in the card's own minimum box fails the card's own molt rule.
Emergency header contradicted by its own footer, with regurgitation promoted to
an emergency the article files under normal. Post-molt hardening window dropped
from the feeding line. Stranded: cleaning and mold, feeder logistics, recovering
an escapee, sexing.

**emperor scorpion, C.** Legal line names seven of the ten flagged
jurisdictions and silently drops Oregon, New Mexico and New Jersey. Buy list
says under-tank heat mat where the setup article says side-mounted, under six
inches of damp substrate. Route line sells communal housing while the article
says keep one if it is your first. "Hides: In a communal setup this is not
decoration" leaves a solo keeper with no hide instruction at all. Stranded: the
first few days after arrival.

---

## What to do about it, in order

Status, 2026-09-16: items 1 through 4 are done. All 84 first-week cards were
rebuilt from the pre-trim rows to the template shape (one commit per class on
the working branch), the per-row cap is in scripts/check-hub-rows.mjs, and
every emergency card on a fish or invertebrate hub opens with what to check
first, with the reviewed mammal, reptile and bird cards split into two tiers.
Items 5 through 7 are done as well. The route-line drift traced to stale
generated metadata, since the cloud container had no node_modules and
sync-articles had never run there; a session-start hook now installs them. The
five contradictions in item 6 were fixed at their source: the quaker handling
FAQ defers to the legal guide's count, the zebra finch enrichment title now
reads "The Wild Flock Is Built from Pairs" and the opener grants the flock of
dozens, the rat setup guide's bar spacing reads half an inch (1.3 cm), the
millipede cost guide frames the PPQ 526 permit as import and interstate
movement to match the legal guide, and the tokay night floor was corrected in
the rebuild. Both fish articles are written and on every fish and shrimp hub:
aquarium-water-changes-guide and aquarium-stocking-and-tankmates-guide.

1. **Rewrite every emergency card header by class.** Fish and invertebrate hubs
   need a "check this first" or "act on these today" card with the first action
   next to each sign, not a vet instruction. This is 24 hubs and it is the
   biggest trust problem on the site.
2. **Split the emergency cards into two tiers** where the health article already
   splits them, and remove the items that are causes, provenance facts or
   home-managed conditions.
3. **Repair the orphaned merges**, degu first. The pre-trim rows are in git at
   `36d75aae^`, so each one can be diffed rather than rewritten.
4. **Add a check that reads each row as a standalone sentence**, since the
   verbatim-substring check cannot catch cause 3 and passed on every file.
5. **Re-sync route lines against article titles**, starting with gargoyle,
   tokay, zebra finch, and the shared pH/GH/KH and small mammal guide summaries.
6. **Fix the factual contradictions the readers surfaced**: the two quaker legal
   lists, the zebra finch flock-size title, the rat bar spacing in centimeters,
   the millipede federal permit, the tokay night floor.
7. **Write the two missing fish articles**, water change schedule and tankmates,
   which are stranded on every fish and shrimp hub.

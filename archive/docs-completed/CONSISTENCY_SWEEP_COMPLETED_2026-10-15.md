# Consistency Sweep, completed work

Finished items moved out of CONSISTENCY_SWEEP.md, newest batch first.

## Batch closed 2026-10-15

Re-checked every open item against the current files. Items ticked before this date carry their own closing note. The "Correction: cockatoo package items" and "Needs the owner first" preambles from the original sweep are kept here for the record.

### Correction: cockatoo package items

The sweep read the cockatoo package from `cockatoo-src/pages_*.html`, which
FIX_PACKAGES.md marks stale (the live book is `cockatoo.html`, edited directly).
Checked against `cockatoo.html` on 2026-10-05: diet 20 to 25%, $875 a year,
$2,270 set up, quarantine 30 to 45 days (90 with other birds) and the lifespan
note all already match the site, and "six hours" there is about sleep, not
foraging. Those five cockatoo package lines below are void. Still real:
sexual maturity "3 to 4 years... 5 to 6 in large ones" (cockatoo.html:320,
:885) vs handling guide 5 to 7.

Owner rulings 2026-10-05: bearded dragon hornworms and carrots are occasional;
UVB tubes are replaced every 6 to 12 months on the maker's schedule.

### Needs the owner first

- [x] **Crested gecko heat.** Settled 2026-10-05: the package was right (vets: heat only below about 72F, thermostat on any heat, thermometer either way); the site was corrected. Website now says a small bulb on a thermostat is
  needed (cost guide FAQ, comparison, matching the setup guide's 82-85F basking
  spot and ReptiFiles). The package says "many setups need no heat at all"
  (crested-gecko-src pages_02:53) and "if the room holds the range, skip the
  bulb and thermostat" (pages_06:120). Pick one; the package or the site moves.
- [x] **Package fixes.** Book items logged in FIX_PACKAGES.md under each
  animal (crested gecko, guinea pig, tarantula, cockatoo) for the next editions.
  Website items get fixed here.

### Safety

- [x] Gargoyle gecko: hub emergency card geckos.js:233 says a stuck toe band
  "is a same-day soak"; health guide :74 and package send a tight band or dark
  toe to the vet. Owner: health guide. Closed 2026-10-15: already fixed on
  main; the hub vetLine reads "early stuck shed gets a warm soak, and a tight
  band or a darkened toe goes to a vet", and "same-day soak" is gone.
- [x] Budgie/cockatiel: budgie-vs-cockatiel-guide.mdx:46 says cockatiels need
  "larger... bar spacing"; both setup guides say half an inch or smaller.
  Owner: cockatiel tank setup guide. Closed 2026-10-15: already fixed on main;
  line 46 reads "Bar spacing does not grow with the bird: it stays half an inch
  or smaller for both".
- [x] Jumping spider: hub FAQ invertebrates.js:639 says no prey "larger than
  the spider's own body"; feeding guide says no bigger than the abdomen.
  Closed 2026-10-15: the feeding guide (owner) now reads "about half its body
  length, three quarters at the most" and the hub FAQ already matched it. The
  hub "What they eat" row still said "no bigger than the abdomen"; changed to
  the feeding guide's rule.
- [x] Jumping spider: uromastyx-tokay-africangrey-jumpingspider-overview.mdx:83
  says prey "half to three quarters of the spider's body". Owner: feeding guide.
  Closed 2026-10-15: no conflict left; the feeding guide now gives the same
  half to three quarters rule.
- [x] Hamster: chinchilla-vs-hamster-guide.mdx:70 says "450+ sq in"; setup
  guide :64 says 700-775 (Syrian), about 600 (dwarf). Owner: tank setup.
  (Filed factual by the reader; undersizes the cage by a third.) Closed
  2026-10-15: already fixed on main; line 70 reads "about 600 sq in for a
  dwarf, 700+ for a Syrian".

### Factual

- [x] Hognose health guide :80 quarantine "first weeks" vs hub and package
  3 to 6 months. Owner: reptile quarantine guide.
  Closed 2026-10-15, already fixed: content/guides/hognose-snake-health-issues-guide.mdx:80 "Isolating a new arrival for 3 to 6 months keeps mites off the animals already in the room" vs src/lib/data/guides/snakes.js:455 "Quarantined 3 to 6 months away from any reptile you already keep".
- [x] Cockatoo weight: cockatiel-vs-cockatoo-guide.mdx:63/:78 "300-1,200g",
  hub birds.js:347 "1.1 to 1.7 lbs"; package pages_1:103 per species (Goffin's
  ~350 g, up to ~880 g) is best sourced.
  Closed 2026-10-15, already fixed: content/guides/cockatiel-vs-cockatoo-guide.mdx:63 ["Adult size", "~12-13 inches, ~90g", "12-27 inches, roughly 300-900g depending on species"] and :78 "from a smaller Goffin's cockatoo up to a Moluccan or umbrella cockatoo approaching 900 grams" vs src/lib/data/guides/birds.js:355 "12 to 27 inches (31 to 70 cm) and roughly 300 to 900 g (10 to 30 oz) across the species".
- [x] VOID (stale fragment, see Correction): Cockatoo package pages_2:7/:45 fresh food "20 to 40%" vs feeding guide
  :40 "20 to 25%". (package)
- [x] VOID (stale fragment, see Correction): Cockatoo package pages_4:340 (and pages_1:127/:154) "$1,160 to $2,380" a
  year vs cost guide :110 "$875 to $1,995". (package)
- [x] VOID (stale fragment, see Correction): Cockatoo package pages_4:326 setup "$2,105 to $6,930", equipment
  "$1,205 to $2,980" vs cost guide :93 "$2,270 to $6,410", "$1,430 to $3,200".
  (package)
- [x] White's tree frog handling guide FAQ :40 nitrile gloves vs body :58
  vinyl first, nitrile second. Owner: handling body.
  Closed 2026-10-15, already fixed: content/guides/whites-tree-frog-handling-guide.mdx:40 "wear powder-free vinyl gloves lightly wetted with dechlorinated water, with nitrile as the fallback and latex never" vs :58 "Vinyl is the right glove, latex is out, and nitrile is a second choice."
- [x] Blue-tongue skink: hamster-skink-whitestreefrog-pacmanfrog-overview.mdx:63
  "12 to 15 inches" vs encyclopedia and hub 17-24, health guide :85 ~17 to 22.
  Closed 2026-10-15, already fixed: content/guides/hamster-skink-whitestreefrog-pacmanfrog-overview.mdx:63 "adults reach about 17 to 22 inches" vs content/guides/blue-tongue-skink-health-issues-guide.mdx:85 "about 17 inches long on average, up to 22" and src/lib/data/guides/lizards.js:373 "17-24 inches (43-60 cm)". The 12-to-15 figure is gone.
- [x] Molly: health guide :48/:83 and hub emergency card fish.js:844 treat ich
  with "copper sulfate or formalin" vs aquarium-ich-treatment-guide.mdx
  :83/:103/:109 (livebearers: heat to 82F plus salt; copper dosed off alkalinity).
  Owner: ich treatment guide.
  Closed 2026-10-15, already fixed: content/guides/molly-health-issues-guide.mdx:83 "warm the tank slowly to about 82°F with an air stone running, then add aquarium salt or an ich medication, malachite green or formalin ... Copper sulfate is the last pick, because getting its dose right means testing alkalinity first" (:48 same); src/lib/data/guides/fish.js:848 "ich, treated by warming the tank slowly to about 82°F, then aquarium salt or an ich medication" vs content/guides/aquarium-ich-treatment-guide.mdx:83 ["Guppy, molly, swordtail", "Up to 82°F", "No: warm to the ceiling and medicate"] and :109 "Copper sulfate works but its dose is calculated from the tank's total alkalinity".
- [x] Jumping spider hub route line invertebrates.js:619 "$112 to $150" setup vs
  hub Budget :585 and cost guide :46 "$75 to $180".
  Closed 2026-10-15, already fixed: src/lib/data/guides/invertebrates.js:623 "%%setup:jumping-spider%% for setup" and :589 "Setup roughly %%setup:jumping-spider%%" vs content/guides/jumping-spider-cost-guide.mdx:46 "Roughly %%setup:jumping-spider%%". All three are the same token (resolves to "$80 to $210").
- [x] African fat-tail: health guide :113 "book a vet visit if the gecko stops
  eating" vs feeding guide :93/:81 seasonal fasts are normal (and :95 repeats
  the vet line). Owner: health guide, needs a seasonal-fast exception.
  Closed 2026-10-15, already fixed: content/guides/african-fat-tail-health-issues-guide.mdx:113 "Book a vet visit if the gecko stops eating outside the normal fall and winter fast, loses weight, has retained shed" vs content/guides/african-fat-tail-feeding-guide.mdx:81 "Seasonal appetite drop. As daylight hours shorten in fall and winter, adults commonly reduce food intake or stop for a period" and :95 "Schedule an exam if the gecko stops eating outside that seasonal slowdown".
- [x] Crested gecko heat: settled, see "Needs the owner first".
- [x] Guinea pig feeding guide :62 vitamin C "2 to 3 times" an adult's when
  growing/pregnant vs scurvy guide :88 30-40 mg vs 20-25 mg (~1.5x). Owner:
  scurvy guide.
  Closed 2026-10-15, already fixed: content/guides/guinea-pig-feeding-guide.mdx:62 "a growing, pregnant, nursing or ill one needs more vitamin C than a healthy adult, roughly 30 to 40 mg a day against 20 to 25" vs content/guides/guinea-pig-scurvy-vitamin-c-guide.mdx:88 "roughly 20 to 25 mg a day for a typical adult, and 30 to 40 mg a day for a growing or pregnant one".
- [x] Guinea pig enrichment guide :67 (and :18, :19, :43, hub route line,
  package pages_01:147, 04:119, 07:25) "Wild guinea pigs... 80% of the day"
  vs legal guide :70 no wild Cavia porcellus. Should be wild cavies; check the
  source before rewording. (site + package)
  Closed 2026-10-15, already fixed: content/guides/guinea-pig-enrichment-guide.mdx:67 "There are no wild guinea pigs, but their closest relatives, wild cavies, give as much as 80% of the day to finding and eating food" (:18, :19, :43 all say "Wild cavies"); src/lib/data/guides/smallMammals.js:691 "up to 80% of a wild cavy's day" vs content/guides/guinea-pig-legal-guide.mdx:70 "no wild population of Cavia porcellus anywhere".
- [x] Hamster: chinchilla-vs-hamster-guide.mdx:68/:45 "No dust bath needed" vs
  setup guide :52 sand bath "a species essential".
  Closed 2026-10-15, already fixed: content/guides/chinchilla-vs-hamster-guide.mdx:68 ["Grooming", "Dust bath required, no water", "Sand bath required, not dust"] and :45 "that sand bath belongs in every hamster setup as an essential, not an extra" vs content/guides/hamster-tank-setup-guide.mdx:52 "Yes. It is a species essential, not an extra".
- [x] Axolotl/aquarium: aquarium-power-outage-and-transport-guide.mdx:97 frozen
  bottle "cools more gradually" vs cooling-an-aquarium-without-a-chiller-guide
  :95 it can chill faster than 1F an hour; axolotl hub heat-wave row copies the
  outage page. Owner: cooling guide. (Filed minor; grouped here.)
  Closed 2026-10-15, already fixed: content/guides/aquarium-power-outage-and-transport-guide.mdx:97 "A capped, frozen bottle is gentler than loose ice, but it can still drop the water faster than the roughly 1°F an hour aquatic animals handle well"; src/lib/data/guides/amphibians.js:43 "even a bottle can pull the water down faster than about 1°F an hour" vs content/guides/cooling-an-aquarium-without-a-chiller-guide.mdx:48 "a maximum of about 1°F an hour" and :46 "A frozen bottle chills the water around it fast". "Cools more gradually" is gone.
- [x] Hamster grip and others: see Minor.
  Closed 2026-10-15, no conflict to fix: Pointer line, no conflict of its own; the hamster grip item is verified as Minor item 32 below.

### Minor

- [x] bearded-dragon-vs-leopard-gecko-guide.mdx:44/:70 adults eat "daily" vs
  feeding guide :64 daily or every other day, insects a few times a week.
  Closed 2026-10-15, already fixed: content/guides/bearded-dragon-vs-leopard-gecko-guide.mdx:44 "Adult bearded dragons get fresh greens daily or every other day and insects a few times a week" and :70 ["Feeding frequency (adult)", "Greens daily or every other day, insects a few times a week", "Every 2 to 4 days"] vs content/guides/bearded-dragon-feeding-guide.mdx:64 "Adults (18+ months): Once daily or every other day ... Insects a few times a week, greens daily."
- [x] Feeding guide :76 carrots a "good staple" vs safe foods :117 occasional.
- [x] Feeding guide :72 hornworms "regular staples" vs safe foods :77 occasional.
- [x] Feeding guide :72 mealworms "fine occasionally", no age limit, vs safe
  foods :79 adults only.
  Closed 2026-10-15, already fixed: content/guides/bearded-dragon-feeding-guide.mdx:72 "Mealworms and superworms are an occasional food for adults only, never daily and not for juveniles" vs content/guides/bearded-dragon-safe-foods-guide.mdx:79 ["Mealworms", "Occasional", "Hard exoskeleton and fatty. Adults only, a few at a time, never for juveniles."].
- [x] uromastyx-vs-bearded-dragon-guide.mdx:78 juveniles ~70% insects vs tank
  setup :120 ~80%.
  Closed 2026-10-15, already fixed: content/guides/uromastyx-vs-bearded-dragon-guide.mdx:78 "roughly 80% insects as a fast-growing juvenile, shifting toward 70 to 80% vegetables and fruit as an adult" vs content/guides/bearded-dragon-tank-setup-guide.mdx:120 "juveniles eat roughly 80% insects and 20% greens, while adults flip to about 80% greens and 20% insects".
- [x] uromastyx-vs-bearded-dragon-guide.mdx:66 humidity "low to moderate" vs
  setup :101 30-40%.
  Closed 2026-10-15, already fixed: content/guides/uromastyx-vs-bearded-dragon-guide.mdx:66 ["Humidity needs", "Very low, arid", "Low, about 30 to 40%"] vs content/guides/bearded-dragon-tank-setup-guide.mdx:101 "Keep it low, 30 to 40%."
- [x] Setup :89 T8 every 6 months vs UVB article :51 Arcadia rates T8 at 12.

Leopard gecko
- [x] Setup :79 UVB tube every 12 months vs cost guide :46 "two a year".
- [x] bearded-dragon-vs-leopard-gecko-guide.mdx:44 adults "every other day" vs
  feeding guide :62 every 2 to 4 days.

Crested gecko
  Closed 2026-10-15, already fixed: content/guides/bearded-dragon-vs-leopard-gecko-guide.mdx:44 "Leopard geckos. Adults typically eat every 2 to 4 days" (:70 "Every 2 to 4 days") vs content/guides/leopard-gecko-feeding-guide.mdx:62 "Adults ... Every 2 to 4 days is the range most sources land on".
- [x] Enrichment :80 insects "once or twice a week" vs feeding :78 about once
  a week at most.
  Closed 2026-10-15, already fixed: content/guides/crested-gecko-enrichment-guide.mdx:80 "Live insects offered about once a week at most" vs content/guides/crested-gecko-feeding-guide.mdx:78 "adults get them about once a week at most". Note: enrichment seoDescription :19 still reads "live insects once or twice a week" (no age given; feeding :40 allows once or twice a week for juveniles).
- [x] Feeding guide :71 omits the weekly multivitamin the package, cost guide
  and hub buy list include.
  Closed 2026-10-15, already fixed: content/guides/african-fat-tail-feeding-guide.mdx:71 "with a calcium and D3 combo used once or twice a week on top, and a reptile multivitamin about once a week" vs src/lib/data/guides/geckos.js:92 buyList "Reptile multivitamin" and content/guides/african-fat-tail-cost-guide.mdx:45 "the first supply of calcium, calcium with D3 and multivitamin".
- [x] Feeding guide :71 gut-load 24-48 h vs its own :97 24-72 h.
  Closed 2026-10-15, already fixed: content/guides/african-fat-tail-feeding-guide.mdx:71 "Gut-load feeder insects 24 to 72 hours before offering" vs :97 "gut loading runs on a 24 to 72 hour window".
- [x] Adult size: hub snakes.js:467 1.5-3.5 ft vs corn-snake-vs-hognose :44/:65
  14-37 in vs veiled-chameleon-ferret-hognose-overview.mdx:70 14-46 in.

Russian tortoise
  Closed 2026-10-15, already fixed: src/lib/data/guides/snakes.js:471 "14 to 46 inches (36 to 117 cm) across the species; western hognoses, the usual pet, run 14 to 37 inches." vs content/guides/corn-snake-vs-hognose-snake-guide.mdx:44 "Adult western hognoses run 14 to 37 inches, about 1 to 3 feet" (:65 "14-37 in (about 1-3 ft)") and content/guides/veiled-chameleon-ferret-hognose-overview.mdx:70 "a range of 14 to 46 inches between species".
- [x] Hub, cost guide :55/:106, package, sulcata comparison "5 to 10 inches" vs
  handling guide :66 sourced max ~9 in.

Cockatoo
  Closed 2026-10-15, already fixed: src/lib/data/guides/turtles.js:308 "5 to 9 inches."; content/guides/russian-tortoise-cost-guide.mdx:55 "a Russian tortoise stays 5 to 9 inches" (:82, :95 same); content/guides/sulcata-tortoise-vs-russian-tortoise-guide.mdx:65 ["Adult shell length", "24-30 inches", "5-9 inches"] vs content/guides/russian-tortoise-handling-guide.mdx:66 "the largest verified animals reach about 22 cm, close to 9 inches".
- [x] VOID (stale fragment, see Correction): Package pages_4:229 quarantine "45 to 60" with an existing bird vs hub
  30-45, nearer 90 (bird quarantine guide). (package)
- [x] VOID (stale fragment, see Correction): Package pages_1:104 lifespan "30 to 45... up to 70" vs cost guide :59
  25-45, 70-80+. (package)
- [x] Book (logged in FIX_PACKAGES) and handling guide: package pages_1:105 maturity 3-4 / 5-6 years vs handling :42/:66 and
  package pages_2:206 5 to 7. (package)
  Closed 2026-10-15, no conflict to fix: The only site side is content/guides/cockatoo-handling-guide.mdx:42 "Aggression tends to climb at sexual maturity, roughly 5 to 7 years old" and :66 "roughly 5 to 7 years old", which agree with each other. The 3-4 / 5-6 figure lives only in the package (out of scope); grep for "maturity" across src/lib/data/guides/birds.js and content/guides/cockatoo-*.mdx finds no other site figure. Nothing to fix on the site.
- [x] VOID (stale fragment, see Correction): Package pages_2:114/:116 "up to six hours" foraging vs enrichment
  :47/:69 unsourced. (package)

White's tree frog
- [x] Feeding guide :56 rich feeders and pinkie once a week vs its own :66
  earthworm or fuzzy once a month (package follows monthly); FAQ :38 lists
  earthworms as everyday.
  Closed 2026-10-15, already fixed: content/guides/whites-tree-frog-feeding-guide.mdx:56 "Waxworms and superworms go in once a week at most, and a pinkie mouse sits a step further out, no more than once a month for an adult" vs :66 "Larger items, an earthworm or a fuzzy mouse, come no more than once a month for an adult" and FAQ :38 "an earthworm or, for a fully grown adult, a pinkie mouse is a once-a-month extra at most". Note: :54 still lists earthworms among the "useful additions" with no frequency.
- [x] Feeding guide :44 alfalfa for "sick or senior" adults vs setup :107 and
  health :89 growing, pregnant, nursing only.

Hamster
  Closed 2026-10-15, already fixed: content/guides/guinea-pig-feeding-guide.mdx:44 "keep it for babies, juveniles under about 6 months, and pregnant or nursing sows; an ill adult gets it only if a vet advises it" vs content/guides/guinea-pig-tank-setup-guide.mdx:107 "alfalfa hay for adults (too high in calcium, suited only to growing, pregnant, or nursing guinea pigs)" and content/guides/guinea-pig-health-issues-guide.mdx:89 "High-calcium foods, alfalfa hay especially". "Senior" is gone; "ill adult if a vet advises" remains in :44 only.
- [x] gerbil-vs-hamster-guide.mdx:91 deep bedding matters more for gerbils vs
  setup :72 a welfare requirement for hamsters.
  Closed 2026-10-15, already fixed: content/guides/gerbil-vs-hamster-guide.mdx:91 "deep, diggable substrate matters for a gerbil enclosure just as it does for a hamster's, where deep bedding is a welfare requirement too" vs content/guides/hamster-tank-setup-guide.mdx:72 "At least 6 inches of dust-free, paper-based bedding or aspen shavings ... This isn't decorative, it's a welfare requirement."
- [x] Setup :46 "40 to 80 cm" = "15 to 30 inches"; 80 cm is ~31.5 in
  (package has it right).

Rabbit
  Closed 2026-10-15, already fixed: content/guides/hamster-tank-setup-guide.mdx:46 "about 16 to 31 inches (40 to 80 cm) let every hamster dig a burrow". Note: :72 still reads "40 to 80 cm, roughly 15 to 30 inches" (rounded, with "roughly"); the sweep cited :46 only.
- [x] rabbit-budgie-overview.mdx:55 emergency at 12 hours, no 8-hour call, vs
  health guide :125 call at eight.

Tarantula
  Closed 2026-10-15, already fixed: content/guides/rabbit-budgie-overview.mdx:55 "a rabbit that goes 8 hours without eating or passing droppings needs a call to the vet, and by 12 hours it is an emergency" vs content/guides/rabbit-health-issues-guide.mdx:125 "No food or droppings for 8 to 12 hours, calling at eight rather than waiting for twelve".
- [x] Setup :98 remove uneaten prey within 24 h vs its own :110 never
  overnight (package copies both); feeding guide :63 says 24 h.

Molly
  Closed 2026-10-15, already fixed: content/guides/tarantula-tank-setup-guide.mdx:98 "remove anything uneaten within 24 hours" and :110 "With a sling, tighten the 24-hour rule: never leave uneaten prey in overnight, since a cricket can attack and kill a molting sling" (now framed as the sling exception) vs content/guides/tarantula-feeding-guide.mdx:63 "any uneaten prey should be removed within 24 hours".
- [x] Feeding guide :82 brumation 3-4 months vs its own :48/:93 up to 3 and
  health :91 1 to 4; feeding guide never says Northerns and Indonesians
  shouldn't be brumated.

Zebra danio
  Closed 2026-10-15, already fixed: content/guides/blue-tongue-skink-feeding-guide.mdx:82 "Temperate species such as the eastern, blotched and shingleback brumate for about 4 to 6 months. Northern and Indonesian blue-tongues are tropical and should never be cooled, though one may slow down on its own for 1 to 4 months"; :48 "a temperate species can go without food for 4 to 6 months"; :93 "a temperate species can go 4 to 6 months without food, and a tropical skink slowing down with the heat on 1 to 4 months" vs content/guides/blue-tongue-skink-health-issues-guide.mdx:91 "let the warm side run down to about 80°F for the 1 to 4 months it lasts. Temperate species ... a 4 to 6 month brumation".
- [x] Enrichment :49/:97/:121 school of 8+ vs handling :46/:81 at least 6,
  8-10 better; setup :67 sizes for 6.
  Closed 2026-10-15, already fixed: content/guides/zebra-danio-enrichment-guide.mdx:49 "Six at the least, eight to ten for better behavior" (:97 same, :121 "A group of at least six, ideally eight to ten") vs content/guides/zebra-danio-handling-guide.mdx:46 "At least 6. Five to 6 is the workable minimum, but 8 to 10 or more is the better start" and content/guides/zebra-danio-tank-setup-guide.mdx:67 "A 10-gallon tank is workable for the bare minimum school of 6".
- [x] Enrichment :109 leads with "larger than the spider's body" before the
  abdomen limit.
  Closed 2026-10-15, already fixed: content/guides/jumping-spider-enrichment-guide.mdx:109 "do not offer prey bigger than about three quarters of the spider's body length" vs content/guides/jumping-spider-feeding-guide.mdx:42 "any prey more than three quarters of the spider's body length".

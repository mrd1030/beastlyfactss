# Consistency Sweep (2026-10-05)

Read-only sweep of the 20 care package animals plus the four highest-traffic
non-package species (molly, blue-tongue skink, zebra danio, jumping spider).
Each line: the conflict, then the page that should win (the deep dive that owns
the topic, per RULES.md "the deep dives own the numbers"). Line numbers are
origin/main as of 2026-10-05. Open work only; finished items move to
archive/docs-completed/ when this list is done.

57 conflicts: 5 safety, 18 factual, 34 minor.

## Correction: cockatoo package items

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

## Needs the owner first

- [ ] **Crested gecko heat.** Website now says a small bulb on a thermostat is
  needed (cost guide FAQ, comparison, matching the setup guide's 82-85F basking
  spot and ReptiFiles). The package says "many setups need no heat at all"
  (crested-gecko-src pages_02:53) and "if the room holds the range, skip the
  bulb and thermostat" (pages_06:120). Pick one; the package or the site moves.
- [x] **Package fixes.** Book items logged in FIX_PACKAGES.md under each
  animal (crested gecko, guinea pig, tarantula, cockatoo) for the next editions.
  Website items get fixed here.
- [ ] Gargoyle gecko: hub emergency card geckos.js:233 says a stuck toe band
  "is a same-day soak"; health guide :74 and package send a tight band or dark
  toe to the vet. Owner: health guide.
- [ ] Budgie/cockatiel: budgie-vs-cockatiel-guide.mdx:46 says cockatiels need
  "larger... bar spacing"; both setup guides say half an inch or smaller.
  Owner: cockatiel tank setup guide.
- [ ] Jumping spider: hub FAQ invertebrates.js:639 says no prey "larger than
  the spider's own body"; feeding guide says no bigger than the abdomen.
- [ ] Jumping spider: uromastyx-tokay-africangrey-jumpingspider-overview.mdx:83
  says prey "half to three quarters of the spider's body". Owner: feeding guide.
- [ ] Hamster: chinchilla-vs-hamster-guide.mdx:70 says "450+ sq in"; setup
  guide :64 says 700-775 (Syrian), about 600 (dwarf). Owner: tank setup.
  (Filed factual by the reader; undersizes the cage by a third.)

## Factual

- [ ] Ball python cost guide :128 "$560 to $1,450" vs :69 and hub "$560 to
  $1,395" (setup + exam, no snake); setup + exam + snake is $600 to $1,495.
- [ ] Hognose health guide :80 quarantine "first weeks" vs hub and package
  3 to 6 months. Owner: reptile quarantine guide.
- [ ] Cockatoo weight: cockatiel-vs-cockatoo-guide.mdx:63/:78 "300-1,200g",
  hub birds.js:347 "1.1 to 1.7 lbs"; package pages_1:103 per species (Goffin's
  ~350 g, up to ~880 g) is best sourced.
- [ ] Cockatoo package pages_2:7/:45 fresh food "20 to 40%" vs feeding guide
  :40 "20 to 25%". (package)
- [ ] Cockatoo package pages_4:340 (and pages_1:127/:154) "$1,160 to $2,380" a
  year vs cost guide :110 "$875 to $1,995". (package)
- [ ] Cockatoo package pages_4:326 setup "$2,105 to $6,930", equipment
  "$1,205 to $2,980" vs cost guide :93 "$2,270 to $6,410", "$1,430 to $3,200".
  (package)
- [ ] White's tree frog handling guide FAQ :40 nitrile gloves vs body :58
  vinyl first, nitrile second. Owner: handling body.
- [ ] Blue-tongue skink: hamster-skink-whitestreefrog-pacmanfrog-overview.mdx:63
  "12 to 15 inches" vs encyclopedia and hub 17-24, health guide :85 ~17 to 22.
- [ ] Molly: health guide :48/:83 and hub emergency card fish.js:844 treat ich
  with "copper sulfate or formalin" vs aquarium-ich-treatment-guide.mdx
  :83/:103/:109 (livebearers: heat to 82F plus salt; copper dosed off alkalinity).
  Owner: ich treatment guide.
- [ ] Jumping spider hub route line invertebrates.js:619 "$112 to $150" setup vs
  hub Budget :585 and cost guide :46 "$75 to $180".
- [ ] African fat-tail: health guide :113 "book a vet visit if the gecko stops
  eating" vs feeding guide :93/:81 seasonal fasts are normal (and :95 repeats
  the vet line). Owner: health guide, needs a seasonal-fast exception.
- [ ] Crested gecko heat: see "Needs the owner first".
- [ ] Guinea pig feeding guide :62 vitamin C "2 to 3 times" an adult's when
  growing/pregnant vs scurvy guide :88 30-40 mg vs 20-25 mg (~1.5x). Owner:
  scurvy guide.
- [ ] Guinea pig enrichment guide :67 (and :18, :19, :43, hub route line,
  package pages_01:147, 04:119, 07:25) "Wild guinea pigs... 80% of the day"
  vs legal guide :70 no wild Cavia porcellus. Should be wild cavies; check the
  source before rewording. (site + package)
- [ ] Hamster: chinchilla-vs-hamster-guide.mdx:68/:45 "No dust bath needed" vs
  setup guide :52 sand bath "a species essential".
- [ ] Axolotl/aquarium: aquarium-power-outage-and-transport-guide.mdx:97 frozen
  bottle "cools more gradually" vs cooling-an-aquarium-without-a-chiller-guide
  :95 it can chill faster than 1F an hour; axolotl hub heat-wave row copies the
  outage page. Owner: cooling guide. (Filed minor; grouped here.)
- [ ] Hamster grip and others: see Minor.

## Minor

Bearded dragon
- [ ] bearded-dragon-vs-leopard-gecko-guide.mdx:44/:70 adults eat "daily" vs
  feeding guide :64 daily or every other day, insects a few times a week.
- [x] Feeding guide :76 carrots a "good staple" vs safe foods :117 occasional.
- [x] Feeding guide :72 hornworms "regular staples" vs safe foods :77 occasional.
- [ ] Feeding guide :72 mealworms "fine occasionally", no age limit, vs safe
  foods :79 adults only.
- [ ] uromastyx-vs-bearded-dragon-guide.mdx:78 juveniles ~70% insects vs tank
  setup :120 ~80%.
- [ ] uromastyx-vs-bearded-dragon-guide.mdx:66 humidity "low to moderate" vs
  setup :101 30-40%.
- [x] Setup :89 T8 every 6 months vs UVB article :51 Arcadia rates T8 at 12.

Leopard gecko
- [x] Setup :79 UVB tube every 12 months vs cost guide :46 "two a year".
- [ ] bearded-dragon-vs-leopard-gecko-guide.mdx:44 adults "every other day" vs
  feeding guide :62 every 2 to 4 days.

Crested gecko
- [ ] Enrichment :80 insects "once or twice a week" vs feeding :78 about once
  a week at most.
- [ ] Cost guide :85 (and package pages_02:44) pair "double... 18x18x36" vs
  setup :61 single adult minimum 18x18x24.
- [ ] Setup :74 cool area 70-75F vs its own :81 lethargy at or below ~72F.

African fat-tailed gecko
- [ ] Feeding guide :71 omits the weekly multivitamin the package, cost guide
  and hub buy list include.
- [ ] Feeding guide :71 gut-load 24-48 h vs its own :97 24-72 h.
- [ ] Cost guide :57 heading "$100 to $200 for Normals" vs :59 and hub ~$100.

Hognose
- [ ] Adult size: hub snakes.js:467 1.5-3.5 ft vs corn-snake-vs-hognose :44/:65
  14-37 in vs veiled-chameleon-ferret-hognose-overview.mdx:70 14-46 in.

Russian tortoise
- [ ] Hub, cost guide :55/:106, package, sulcata comparison "5 to 10 inches" vs
  handling guide :66 sourced max ~9 in.

Cockatoo
- [ ] Package pages_4:229 quarantine "45 to 60" with an existing bird vs hub
  30-45, nearer 90 (bird quarantine guide). (package)
- [ ] Package pages_1:104 lifespan "30 to 45... up to 70" vs cost guide :59
  25-45, 70-80+. (package)
- [ ] Package pages_1:105 maturity 3-4 / 5-6 years vs handling :42/:66 and
  package pages_2:206 5 to 7. (package)
- [ ] Package pages_2:114/:116 "up to six hours" foraging vs enrichment
  :47/:69 unsourced. (package)

White's tree frog
- [ ] Feeding guide :56 rich feeders and pinkie once a week vs its own :66
  earthworm or fuzzy once a month (package follows monthly); FAQ :38 lists
  earthworms as everyday.
- [ ] Cost guide :91 and hub buy list "calcium with D3" vs feeding guide :84
  D3 depends on UVB.

Axolotl
- [ ] Legal guide description :19 lists 4 bans vs its own FAQ :40 and hub
  (adds Wyoming, Alabama, New Mexico).

Guinea pig
- [ ] Feeding guide :44 alfalfa for "sick or senior" adults vs setup :107 and
  health :89 growing, pregnant, nursing only.

Hamster
- [ ] chinchilla-vs-hamster-guide.mdx:101/:69 one-hand grip vs handling :44
  two-hand scoop.
- [ ] gerbil-vs-hamster-guide.mdx:91 deep bedding matters more for gerbils vs
  setup :72 a welfare requirement for hamsters.
- [ ] Setup :46 "40 to 80 cm" = "15 to 30 inches"; 80 cm is ~31.5 in
  (package has it right).

Rabbit
- [ ] rabbit-budgie-overview.mdx:55 emergency at 12 hours, no 8-hour call, vs
  health guide :125 call at eight.

Tarantula
- [ ] Setup :98 remove uneaten prey within 24 h vs its own :110 never
  overnight (package copies both); feeding guide :63 says 24 h.

Molly
- [ ] Hub route line fish.js:853 "$130 to $260" vs hub Budget :833 and cost
  guide :46 "$135 to $280".

Blue-tongue skink
- [ ] Feeding guide :82 brumation 3-4 months vs its own :48/:93 up to 3 and
  health :91 1 to 4; feeding guide never says Northerns and Indonesians
  shouldn't be brumated.

Zebra danio
- [ ] Enrichment :49/:97/:121 school of 8+ vs handling :46/:81 at least 6,
  8-10 better; setup :67 sizes for 6.
- [ ] Feeding guide :44/:74 "don't add fine-leaved plants" vs setup :95 and the
  feeding guide's own :80.

Jumping spider
- [ ] Enrichment :109 leads with "larger than the spider's body" before the
  abdomen limit.
- [ ] Hub buyList invertebrates.js:627 "4x4x7 inches" vs setup :61 ~8 in tall.

Budgie, cockatiel, lovebird, betta, goldfish: clean.

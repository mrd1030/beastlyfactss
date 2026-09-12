# To do

The working list. Session task lists do not survive a cloud session, so this
file is the one that counts. Cross items off here, not in a chat window.

---

## 1. Write the federal law guide

**Done 2026-09-12.** `content/guides/federal-exotic-pet-laws-guide.mdx`, live,
hero installed, wired into RELATED_ARTICLES against 14 guide ids and linked
from the hub's federal section. Voice check clean, 0 errors and 0 warnings, all
14 sources return 200.

What it covers, all against primary text: the Lacey Act's two halves, the
injurious wildlife list and the 2017 D.C. Circuit ruling that ended the
interstate transport ban, CITES including the CoP20 amendments that took effect
5 March 2026 and the Chilean rose tarantula listing that takes effect 5 June
2027, the Captive Wildlife Safety Act and the Big Cat Public Safety Act, the FDA
four-inch turtle rule, and the Wild Bird Conservation Act.

The 52 state pages and the 52 animal pages both stop at the state line, and
every one of them has a reader who then asks "but is it legal federally."
Nothing on the site answers that.

What it has to cover:

- **Lacey Act** (16 U.S.C. § 3371 et seq.), including the injurious wildlife
  listings under 18 U.S.C. § 42 that actually bar interstate transport
- **CITES**, and the practical point that Appendix I vs II decides whether a
  captive-bred animal can cross a border at all
- **Captive Wildlife Safety Act**, which is the big-cat interstate rule
- **Big Cat Public Safety Act** (2022), the one most summaries still get wrong
  because it grandfathered existing owners
- **FDA four-inch turtle rule** (21 C.F.R. § 1240.62), still in force since
  1975 and the reason red-eared slider hatchlings are sold "for educational
  purposes"
- **Wild Bird Conservation Act**, which is why almost every parrot in the US
  trade is captive-bred

Research rule applies: real sources, quoted, no writing from memory. Wire it
into RELATED_ARTICLES and give it in-body internal links to the state hub and
to species pages the rule actually touches.

## 2. Finish converting the per-animal guide hubs

Partly done. Each species hub should carry the same block structure as the
converted ones. Work through the unconverted list rather than sampling.

## 3. Re-check the state law entries

Several cells rest on bills and petitions that were pending when they were
written and are dated July/August 2026 rather than confirmed:

- **PA HB 692** (sugar gliders): status as of the last check was pending, and
  the entry reads as if that is settled
- **CA ferret Petition 2025-003**: Fish and Game Commission docket, outcome not
  captured
- **SC 2025 venomous reptile bill**: same problem

Also worth a pass: the two internal contradictions already found and left in
because the statute itself contradicts itself (Nevada NAC 503.110 disagreeing
across its own two columns) should carry a note saying so rather than reading
as an error.

Re-verify, then bump `verifiedOn`. Do not bump a date without re-reading the
source.

## 4. Backlink outreach

Playbook and templates are in `docs/OUTREACH.md`. The short version:

- The site has 2 editorial referring domains against 21 from one PBN network.
  Twenty to forty genuine ones would move position.
- Lead with corrections, not requests. Four verified factual errors in
  circulation are listed in OUTREACH.md, and the Massachusetts ferret one is
  the best opener.
- State and regional herpetological societies are the highest-yield targets,
  and the pitch is the individual state page, not the homepage.
- Qwoted and Featured for journalist queries. Reply fast and in full.
- Wikipedia: Talk page only, with the connection disclosed. Never add the link.
- Reddit and Facebook groups: answer about ten questions for every one where
  you link, and write every answer so it stands alone without the link.

Keep a list of who was contacted, when, and whether it landed. Without one you
will re-contact people.

## 5. Wrong-species guide art

Skim run 2026-09-12 after the corn snake health hero turned out to be an
albino milk-snake-looking animal. 61 of the 183 heroes in
`public/assets/guides/` were opened and checked against the species, chosen
for look-alike risk rather than at random. The rest of that folder, and the
777 article heroes in `public/assets/images/`, are unchecked.

The pattern: the legal heroes are almost all right and the older care-guide
hub heroes are where the misses are. The legal set was generated against the
species-accuracy checklist in IMAGE_PROMPTS.md ("must be Chelydra serpentina,
not the alligator snapping turtle" and so on). The hub set never had one.
Several species now carry a correct legal hero and a wrong hub hero, which is
how most of these were caught.

**Replaced 2026-09-12.** All seven (eight files, the emperor scorpion being
wrong in both its hub and its legal hero) were reshot from prompts in
IMAGE_PROMPTS.md under "Wrong-species replacements" and installed at the same
filenames, so no wiring changed. Each new frame was checked against the
identifying features before install: the pygmy hedgehog's banded cream quills
and white face, the hisser's head tucked under a one-colour pronotum, the ball
python's blocky head and gold side blotches, the kingsnake's bands wrapping the
body, glossy black on both scorpions with one pair of pincers, the cory's
armour plates and arched back, and the savannah monitor's blunt snout and
paired ocelli.

The old files are in `public/assets/guides/alternates/` with a README saying
what each one actually shows. Two of them (both scorpions) are not usable as
any species and are kept only for the record.

Lower confidence, worth a second opinion before spending art on them:

- `gerbil.jpg`: squirrel face, thin sparse tail, striped flank. A Mongolian
  gerbil's tail is furred with a dark tuft, as in `gerbil-legal.jpg`.
- `crested-gecko.jpg`: spines along the flanks a crestie does not have.
  Off-model against `crested-gecko-legal.jpg`.
- `boa-constrictor.jpg`: geometric netting and a head stripe that read
  reticulated python rather than boa saddles.
- `hognose-snake.jpg`: slender body and the upturned rostral scale, the one
  feature that identifies the species, not readable in the frame.
- `fire-bellied-toad.jpg`: the red and black belly pattern is painted on the
  flank and back. It belongs on the underside; the back is green and mottled.
- `ferret.jpg`: reads wild, in tall grass with a black-footed ferret's mask.
  Possibly fine for a sable domestic ferret, but it is not a pet photograph.

Second pass, 2026-09-12, 42 more heroes opened, 103 of 183 now checked:

- **`angelfish.jpg`** was a marine reef fish photographed over stony coral.
  **Replaced 2026-09-12** with a freshwater *Pterophyllum*: tall silver disc,
  trailing dorsal, anal and ventral fins, four vertical bars, planted tank.
- **`oscar.jpg`** had no caudal ocellus and read closer to a spotted tilapia.
  **Replaced 2026-09-12** with a tiger oscar carrying the orange-ringed black
  spot at the tail base.
- **`goldfish.jpg`** appeared to carry barbels at the mouth, which would make
  it a koi. **Replaced 2026-09-12** with a common goldfish, plain snout, no
  barbels, single caudal fin.
- `neon-tetra.jpg`: the red stripe runs the full length of the body, which is a
  cardinal tetra. On a neon the red starts mid-body. Medium confidence.
- `guppy.jpg`: body too deep and stocky, reads closer to a platy. Low
  confidence, the tail is plausibly a fancy guppy's.
- `veiled-chameleon.jpg`: species correct, but the raised front foot renders as
  a smooth stump instead of the split mitten toes. Anatomy defect, not a
  species error.
- `rabbit.jpg`: a wild-type agouti rabbit in a meadow, reading wild rather than
  pet. The weakest flag here, since domestic rabbits come in that colour.

Third pass, 2026-09-12, the overview composites and more legal heroes, 133 of
183 checked at the time. Four wrong panels found, **all four fixed the same
day**:

- `five-beginner-reptiles-overview.jpg`: the fifth panel was a banded milk or
  kingsnake where the article's fifth species is the corn snake. Whole grid
  regenerated, because its dividers are diagonal and a spliced rectangle would
  cut across them.
- `koi-conure-slider-scorpion-overview.jpg`: the scorpion panel had the orange
  legs and second pair of pincers. New panel spliced in at 584x392.
- `sulcata-hedgehog-lovebird-guppy-overview.jpg`: the hedgehog panel was the
  European species. New panel spliced in at 584x392.
- `gargoyle-mourning-african-fat-tail-gecko-overview.jpg`: the third panel was a
  knob-headed gecko rather than an African fat-tail. New panel spliced in at
  378x784, the width the white dividers actually leave (they sit at x384-388 and
  x785-789, not at even thirds).

Splicing rather than regenerating kept nine correct panels across those three
grids. Divider positions were measured off the files rather than assumed.

Worth knowing before assuming a species is cursed: the composites carry the
**correct** version of several animals whose standalone hero was wrong. The
freshwater angelfish in `ackie-milksnake-mhc-angelfish-overview.jpg`, the
corydoras school in `jacksonschameleon-canary-millipede-corydoras-overview.jpg`,
the hissing cockroach in that same ackie composite, and the hognose in
`veiled-chameleon-ferret-hognose-overview.jpg` are all right. These are
per-image failures, not per-species ones.

Fourth pass, 2026-09-12. **All 183 heroes in `public/assets/guides/` are now
checked.** The last 50 were the dog and cat breeds, the remaining legal set and
the six generic files. Two new flags, both in the legal set, both needing a
human eye before art is spent:

Both were **replaced 2026-09-12**, the same day they were found:

- **`red-eared-slider-legal.jpg`** read as a painted turtle, with red bars along
  the shell margins and no red patch behind the eye. The new frame carries the
  broad red temple stripe and a carapace with no red on it at all.
- **`tiger-salamander-legal.jpg`** read as a European fire salamander, glossy
  black with bright egg-yellow. The new frame has the dull olive-mustard
  blotches, broad blunt head, small eyes and visible costal grooves of
  *Ambystoma tigrinum*.

Two cosmetic notes, no art needed: `ackie-monitor-legal.jpg` has a slightly long
snout for the species but the spiny ringed tail reads correctly, and the props
in `exotic-pet-legal-hub.jpg` (a scorpion and a tortoise beside a gavel) look
like dried specimens rather than live animals.

Everything else in the last 50 passed: all sixteen dog and cat breed heroes, the
six generic care and legal files, and the rest of the legal set.

Still unchecked: the 777 article heroes in `public/assets/images/`. Nothing in
that folder has been looked at.

Checked and correct, for the record: all six dog and cat breeds sampled,
every parrot and finch, the turtles and tortoises, leopard gecko, gargoyle
gecko, African fat-tail, mourning gecko, fire skink, uromastyx, green anole,
tegu, ackie monitor, leaf-tailed gecko, milk snake, corn snake, garter snake,
rosy boa, burmese python, snapping turtle, tiger salamander, axolotl, betta,
pacman frog, White's tree frog, hermit crab, millipede, stick insect,
tarantula, degu, chinchilla, rat, mouse, hamster, sugar glider, flying
squirrel Second pass adds: bearded dragon, blue-tongue
skink, green iguana, tokay gecko, the Jackson's chameleon filed as
`chameleon.jpg`, koi, bristlenose pleco, platy, swordtail, discus, zebra danio,
molly, guinea pig, capybara, fennec fox, serval, prairie dog, budgie,
cockatiel, cockatoo, zebra finch, jumping spider, praying mantis, green anole
legal, giant millipede legal, argentine tegu legal, axolotl legal, red-footed
tortoise and sugar glider legal.

When these get redone, give the prompt file a species-accuracy block for the
hub set the way the legal set has one. Every miss above is a species the
generator confused with a close relative, which is exactly what that block
exists to prevent.

## 6. Wrong-species article art

Started 2026-09-12, after the guide folder was finished. `public/assets/images/`
holds 770 article heroes, about seven per species (cost, handling, health
issues, tank setup, feeding, enrichment, plus a tank-setup infographic). Three
species sampled first, chosen because their guide hero had already failed:

**Status: hedgehog and corydoras fixed 2026-09-12, emperor scorpion still open.**
Six replacements installed, the old frames archived in
`public/assets/images/alternates/` with a README. The four scorpion files are
waiting on art; prompts for all ten are in IMAGE_PROMPTS.md under "Article hero
fixes".

- **Emperor scorpion: 4 of 6 wrong.** `cost`, `handling`, `health-issues` and
  `tank-setup` all show the orange or yellow legs and, in two cases, the second
  pair of pincers no scorpion has. `feeding` and `enrichment` are correct
  glossy black animals. The infographic is fine.
- **Hedgehog: 3 replaced.** `cost` was plainly the European hedgehog and
  `handling` and `feeding` leaned the same way. All three now show the pygmy's
  banded cream quills, white face and pink-brown snout. `health-issues` and
  `enrichment` were already correct and were left alone.
- **Corydoras: 3 replaced.** `health-issues` was a wide-mouthed catfish with
  long whiskers and `handling` was a group of elongated forked-tail fish with a
  large catfish above them. `feeding` was the right species but shipped at
  512x279, so it was reshot for size at the same time. `tank-setup` and
  `enrichment` were already correct; `cost` is borderline and was left.

The important finding is that **the error is per image, not per species**. Half
of a species' set can be right and half wrong, so there is no shortcut of
replacing a whole species at once, and no way to infer a set from its guide
hero. Nineteen images checked so far, seven wrong.

### Separate from species: 12 badly undersized files

**Deferred 2026-09-12 by Mike's call.** One of the twelve, the corydoras feeding
frame, was reshot anyway because its species fix and its size fix were the same
job. The other eleven stand.

A dimension scan of all 778 files (cheap, no image reading) found twelve at
512px wide, against the 1168px house size, so they upscale soft in every slot
that renders them:

`ackie-monitor-feeding`, `african-grey-parrot-feeding`,
`corydoras-catfish-feeding`, `degu-feeding`, `fire-skink-handling`,
`fire-skink-health-issues`, `green-iguana-cost`, `quaker-parakeet-cost`,
`quaker-parakeet-handling`, `quaker-parakeet-health-issues`,
`quaker-parakeet-tank-setup`, `sulcata-tortoise-feeding`.

The 784x1168 files in that scan are deliberate portrait art and are fine.
`shima-enaga-snow-fairy-facts` at 800x600 is a different aspect and worth a
look but not urgent.

### Suggested order for the rest

Going alphabetically through 770 images is the wrong shape of job. The species
worth checking first are the ones with a common look-alike or an already proven
failure: the remaining fish (neon tetra, guppy, angelfish, oscar, goldfish,
koi, discus), the snakes that get confused with each other (corn, milk,
kingsnake, hognose, rosy boa, ball python, boa), the small mammals that get
swapped (gerbil, degu, chinchilla, hamster), the monitors, and the parrots that
share a silhouette. That is roughly 25 species, about 175 images.

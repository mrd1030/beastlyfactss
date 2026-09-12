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
183 now checked. Every miss here is a panel inside a multi-species composite, so
fixing one means regenerating that whole grid, not swapping a single frame:

- **`five-beginner-reptiles-overview.jpg`**: the fifth panel is a banded snake,
  a milk snake or kingsnake. The article's fifth species is the corn snake,
  which is saddled rather than banded (verified against the H2s in the mdx).
- **`koi-conure-slider-scorpion-overview.jpg`**: the scorpion panel has the same
  bright orange legs as the two emperor scorpion heroes. Same fault, third file.
- **`sulcata-hedgehog-lovebird-guppy-overview.jpg`**: the hedgehog panel is a
  European hedgehog, the same error as the standalone hero replaced today.
- **`gargoyle-mourning-african-fat-tail-gecko-overview.jpg`**: the third panel
  has a knobbed head and the wrong build for an African fat-tailed gecko, which
  is smooth-headed with a chunky banded body. Closest to a knob-tailed gecko.

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

- **`red-eared-slider-legal.jpg`** reads as a painted turtle: red bars along the
  shell margins and no red patch behind the eye. A slider's red temple stripe is
  the whole name of the species and this animal does not have one. Medium-high
  confidence, and it sits on the guide about that species specifically.
- `tiger-salamander-legal.jpg`: glossy black with bright yellow blotches, which
  reads closer to a European fire salamander than to a tiger salamander's
  olive-on-dark barring. Low confidence, the two overlap a lot. The standalone
  `tiger-salamander.jpg` is correct, so compare them side by side.

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

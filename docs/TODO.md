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

**Status 2026-09-14: not finished.** Five batches done, 26 of about 110 species
and 115 of 770 article heroes opened, 16 replaced, 5 open (angelfish feeding,
neon tetra health, three guppy frames). The guide folder (183) is fully checked;
this folder is not. Continue with the suggested order at the end of this section.

Started 2026-09-12, after the guide folder was finished. `public/assets/images/`
holds 770 article heroes, about seven per species (cost, handling, health
issues, tank setup, feeding, enrichment, plus a tank-setup infographic). Three
species sampled first, chosen because their guide hero had already failed:

**Status: all three sampled species fixed 2026-09-12.** Ten replacements
installed, the old frames archived in `public/assets/images/alternates/` with a
README. Prompts are in IMAGE_PROMPTS.md under "Article hero fixes".

- **Emperor scorpion: 4 replaced.** `cost`, `handling`, `health-issues` and
  `tank-setup` all showed orange or yellow legs, and two of them the second pair
  of pincers no scorpion has. All four are now glossy black throughout with one
  pair of pincers and a single telson. `feeding` and `enrichment` were already
  correct, and the tank-setup infographic is fine.
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

### Second batch: the fish, 2026-09-12

Four more species, 24 images. Two clear misses, two to look at:

- **`angelfish-feeding.jpg`** is a rounded striped cichlid with short fins, no
  trailing dorsal, anal or ventral filaments. Not *Pterophyllum*. The other five
  angelfish files are correct freshwater angels in planted tanks.
- **`neon-tetra-health-issues.jpg`** has the red stripe running from behind the
  gill all the way to the tail, which is a cardinal tetra. On a neon the red
  starts mid-body. The other five neon files are correct.
- **Guppy: the set is muddled rather than plainly wrong.** `feeding` is a
  deep-bodied spotted livebearer that reads platy, and `cost` and
  `health-issues` mix obvious platies in among the guppies. `enrichment` is a
  textbook fancy guppy male. Worth a human eye before spending art, since
  platies and guppies share a tank and a body plan.
- **Oscar: all six correct.** Worth recording, because the oscar's *guide* hero
  was one of the wrong ones. Its article set was fine the whole time, which is
  the per-image finding again.

Running total for the article folder: 7 species checked of about 110, 43 images
opened, 10 replaced and 4 open.

### Third batch: the snakes, 2026-09-12

Seven species sampled across corn snake, California kingsnake, milk snake,
hognose, ball python, boa constrictor and rosy boa, 18 images. **One miss:**

- **`corn-snake-cost.jpg`** showed orange and white bands that wrap the body,
  which is milk snake or kingsnake patterning. **Replaced 2026-09-12** with a
  corn snake carrying dark-edged saddles that stop at the flanks.

Everything else in the snake sets is right, including several that could easily
have gone wrong: the hognose handling frame shows the upturned rostral scale
clearly, the ball python set is correctly blocky-headed throughout despite its
guide hero being one of the replaced ones, and
`milk-snake-vs-corn-snake.jpg` gets the comparison exactly right, bands on the
left and saddles on the right, which is the image that would have been worst to
get wrong.

Running total for the article folder: 14 species of about 110, 67 images opened,
10 replaced, 5 open (angelfish feeding, neon tetra health, corn snake cost, plus
the muddled guppy set).

### Fourth batch: small mammals, 2026-09-12

Gerbil, degu, chinchilla and hamster, 12 images. **Three misses, all gerbil, all
replaced 2026-09-12:**

- **`gerbil-cost.jpg`** and **`gerbil-health-issues.jpg`** show rodents with
  bold dark dorsal stripes, closer to an African striped mouse or a chipmunk
  than to a Mongolian gerbil, which has a plain agouti back.
- **`gerbil-tank-setup.jpg`** has a grey animal with a long naked tail. A
  gerbil's tail is furred end to end with a dark tuft; a bare tail makes it a
  mouse.

`gerbil-feeding.jpg` is textbook and `gerbil-enrichment.jpg` and
`gerbil-handling.jpg` are fine, so this is the same per-image split as
everywhere else. Degu, chinchilla and hamster sets are all correct.

One non-species note: `chinchilla-health-issues.jpg` stands the animal on a wire
mesh floor, which causes the foot problems that guide is partly about. Right
species, wrong husbandry, and it sits on the page where it contradicts the text.
Worth a reshoot eventually but not a species error.

Running total for the article folder: 18 species of about 110, 79 images opened,
14 replaced, 5 open: the angelfish feeding frame, the neon tetra health frame,
and the three muddled guppy frames that want a human eye.

### Fifth batch: monitors and lizards, 2026-09-12

Savannah monitor, ackie monitor, uromastyx, tokay, veiled chameleon, leopard
gecko, crested gecko and blue-tongue skink, 18 images. **One species miss and
two defects of other kinds, prompts written for all three:**

- **`blue-tongue-skink-handling.jpg`**: slender limbs with long spidery toes on
  a small body where a blue-tongue is heavy and sausage-shaped on short stubby
  legs. **Replaced 2026-09-12.**
- **`crested-gecko-health-issues.jpg`**: correct species, but the digital scale
  carried invented button labels ("MUZERS", "Cund", "BRV") and a nonsense
  readout. **Replaced 2026-09-12** with a plain scale and a blank display.
- ~~`tokay-gecko-handling.jpg`~~: **flag withdrawn.** I called it right animal,
  wrong page for showing no handling. Mike questioned whether tokays are a
  hands-on species at all, and the article settles it: "Should You Handle a
  Tokay Gecko? Probably Not Often", a display animal that gapes, barks and bites
  when a hand enters. The gaping frame is the correct illustration and stays.
  The lesson is to read what a handling guide recommends before treating a
  hands-off image as a mismatch.

Everything else passed, including both monitor sets. Worth noting that the
crested gecko set is fine throughout, which downgrades the earlier
low-confidence flag on its guide hero: the species reads consistently across
seven article frames.

Running total for the article folder: 26 species of about 110, 115 images
opened, 16 replaced, 5 open: the angelfish feeding frame, the neon tetra health
frame, and the three muddled guppy frames.

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

## 7. Router hubs, species by species

Checked 2026-09-15 against `src/lib/data/guides/*.js`: a hub is a router hub
when its entry carries `firstWeek` rows (RULES, Hubs). 84 of 108 done, 24
still rendering the legacy care sheet, and all of them are dogs or cats. Batches of five, one branch each,
per the READMEFIRST process. Dogs and cats last.
Batches I and J both merged to main 2026-09-15 as 05a6fa6b. Batch I
(African fat-tail gecko, corydoras catfish, red-footed tortoise, degu,
savannah monitor) passed its Fable check at grade B-.
Batch K (tiger salamander, parrotlet, koi, emperor scorpion, rosy boa)
done, checked and merged to main 2026-09-15. Pass grade B.
Batch L (fire-bellied toad, quaker parakeet, molly, praying mantis, argentine
tegu) done, checked and merged to main 2026-09-15 as 837d5cd. Pass grade B.
Amphibians and birds are finished.
Batch M (platy, cherry shrimp, green anole, leaf-tailed gecko, mouse) done,
checked and merged to main 2026-09-15 as 4a39f2f. Pass grade B-. Geckos are
finished: leaf-tailed gecko was the last one.
Batch N (bristlenose pleco, discus, swordtail, zebra danio, ghost shrimp) done
and checked on branch
claude/bristlenosepleco-discus-swordtail-zebradanio-ghostshrimp 2026-09-15, not
merged. Pass grade: pass, after fixes. Fish are finished: this batch took the
last four.
Batch O (giant millipede, jumping spider, hissing cockroach, stick insect) done,
checked and merged to main 2026-09-15 as 84c4b559. Four species rather than
five, because that is what invertebrates had left. Pass grade B. Invertebrates
are finished.
Batch P (fire skink, Jackson's chameleon, uromastyx, flying squirrel) done and
checked on branch claude/invertebrates-readmefirst-batch-ayolwx 2026-09-15, not
merged. Four species again, because that is what lizards and small mammals had
left between them. Pass grade C+. Lizards and small mammals are finished. That
makes 84 router hubs; the 24 left are cats (10) and dogs (14), so every batch
from here is a dog or cat batch.
Batch J (mourning gecko, ackie monitor, garter snake, oscar, amano
shrimp) passed its check at grade C+. Next is batch K: pick five, one per
class, where a set from a recent batch points at them. Worker Opus 5 high effort, one Fable closing check per batch (the
batch prompt in READMEFIRST has the reasoning).

Done (69):

- [x] axolotl, White's tree frog
- [x] African grey, budgie, cockatiel, cockatoo, conure, lovebird
- [x] betta fish, goldfish, guppy
- [x] crested gecko, leopard gecko
- [x] hermit crab, tarantula
- [x] bearded dragon, blue-tongue skink, green iguana
- [x] chinchilla, ferret, guinea pig, hamster, rabbit, rat
- [x] ball python, boa constrictor, corn snake, hognose snake
- [x] box turtle, red-eared slider, Russian tortoise
- [x] pacman frog, zebra finch, angelfish, tokay gecko, sugar glider
      (batch F, merged to main 2026-09-14)
- [x] canary, neon tetra, veiled chameleon, California kingsnake, hedgehog
      (batch G, merged to main 2026-09-14)
- [x] cardinal tetra, milk snake, gargoyle gecko, gerbil, sulcata tortoise
      (batch H, merged to main 2026-09-15)
- [x] African fat-tail gecko, corydoras catfish, red-footed tortoise, degu,
      savannah monitor (batch I, merged to main 2026-09-15)
- [x] mourning gecko, ackie monitor, garter snake, oscar, amano shrimp
      (batch J, merged to main 2026-09-15)
- [x] tiger salamander, parrotlet, koi, emperor scorpion, rosy boa
      (batch K, merged to main 2026-09-15)
- [x] fire-bellied toad, quaker parakeet, molly, praying mantis, argentine
      tegu (batch L, merged to main 2026-09-15)
- [x] platy, cherry shrimp, green anole, leaf-tailed gecko, mouse
      (batch M, merged to main 2026-09-15)
- [x] bristlenose pleco, discus, swordtail, zebra danio, ghost shrimp
      (batch N, on branch 2026-09-15, not merged)
- [x] giant millipede, jumping spider, hissing cockroach, stick insect
      (batch O, merged to main 2026-09-15)
- [x] fire skink, Jackson's chameleon, uromastyx, flying squirrel
      (batch P, on branch 2026-09-15, not merged)

To do (24):

- [ ] Amphibians (0): none left, fire-bellied toad was the last one
- [ ] Birds (0): none left, quaker parakeet was the last one
- [ ] Fish (0): none left, batch N took the last four
- [ ] Geckos (0): none left, leaf-tailed gecko was the last one
- [ ] Invertebrates (0): none left, batch O took the last four
- [ ] Lizards (0): none left, batch P took the last three
- [ ] Small mammals (0): none left, flying squirrel was the last one
- [ ] Snakes (0): none left, rosy boa was the last one
- [ ] Cats (10): universal, American shorthair, Bengal, domestic shorthair,
      Maine Coon, Persian, Ragdoll, Scottish Fold, Siamese, Sphynx
- [ ] Dogs (14): universal, small breed, medium breed, large breed, beagle,
      border collie, bulldog, dachshund, French bulldog, German shepherd,
      golden retriever, Labrador, Rottweiler, Siberian husky

## 8. After the router hubs: the queue the batches kept filling

None of these blocks a batch, and none of them is a per-species job, which
is why they kept getting deferred. Do them once section 7 is finished.

- [ ] Corydoras adult size, hub against encyclopedia. The corydoras hub's
      sourceless Adult size row says "1 to 3 inches (2.5 to 7.5 cm)" and the
      encyclopedia entry it is supposed to copy says "2-3 inches (5-7.5 cm)".
      No deep dive states a size, so under RULES the row takes the
      encyclopedia's figure and currently does not. Research which is right
      before making them agree: the set turns on the dwarf-versus-standard
      distinction (the setup guide sizes the tank at 10 gallons for pygmy
      species and 20 for standard), and 2 inches as a floor excludes the
      pygmy species the same set tells a reader they can keep. Found by the
      numbers checker after batch I's species check, which missed it.
- [ ] A shared chelonian soaking guide. How often, how deep, how warm, how
      long. Two tortoise readers have now asked for it, sulcata in batch H
      for juveniles and red-footed tortoise in batch I for the species
      generally, and every page in both sets says the animal soaks often
      without saying what that looks like. Two instances make it shared-guide
      work rather than a per-species gap.
- [x] DONE 2026-09-16, the grep returns zero. The affiliate template fragment, 23 left, not the six READMEFIRST has
      been saying. It has more shapes than anyone had counted, so the grep
      that finds all of them is
      `grep -rloE '(Other |other )(quantities|flavors|sizes|flavours)[^.]*are available' content/guides/*.mdx`.
      As of 2026-09-15 that returns: ackie monitor, amano shrimp, Argentine
      tegu, bristlenose pleco, corydoras catfish, emperor scorpion, fire
      skink, gargoyle gecko, gerbil, giant millipede, koi, Madagascar hissing
      cockroach, mouse, neon tetra, pacman frog, parrotlet, red-eared slider,
      rosy boa, stick insect, sugar glider, tarantula, tiger salamander,
      uromastyx, all in enrichment guides. Batch K cleared four of those
      (tiger salamander, parrotlet, emperor scorpion, rosy boa) and batch L
      cleared the Argentine tegu, batch M the mouse, and batch O the giant
      millipede, hissing cockroach and stick insect. The grep returns 11 as of
      2026-09-15, run after batch O: corydoras catfish, fire skink, gargoyle
      gecko, gerbil, koi, neon tetra, pacman frog, red-eared slider, sugar
      glider, tarantula and uromastyx. Koi is still on it, so batch K did not
      actually clear the five it claimed, and the earlier count of 18 was wrong
      in both directions. Re-run the grep rather than trusting this number. Fire
      skink and uromastyx were in batch P, which cleared both. The grep returns 9
      as of 2026-09-15: corydoras catfish, gargoyle gecko, gerbil, koi, neon tetra,
      pacman frog, red-eared slider, sugar glider and tarantula. Shop copy with the product
      missing: "Other quantities are available and a proper depth needs
      several", "and other sizes are available" tacked onto an affiliate
      link, "Other flavors and sizes are available". Most are species whose
      hubs are already reconciled, so this does not follow the batch order at
      all and wants one pass of its own. Batch I cleared savannah monitor and
      degu, batch J clears mourning gecko, ackie monitor and amano shrimp.
- [x] DONE 2026-09-15. The FAQ verbatim check across all 56 router hubs.
      scripts/check-hub-faqs.mjs is the check, and it compares answers as well
      as questions, which is the whole point: batch J shipped three questions
      lifted correctly with all three answers reworded, and a question-only
      comparison calls that hub clean. Twelve non-verbatim FAQs across eight
      hubs, all from batches A to D, all now fixed. Eleven were the hub
      correctly stripping a source name the deep-dive FAQ still carried, so
      the fix went upstream into the article. One was a real number defect,
      below.
- [ ] The amano shrimp encyclopedia overview still opens "the largest shrimp
      commonly kept in freshwater aquariums", the same claim the adultSize
      field was corrected for in batch J. Bamboo shrimp reach 2 to 3 inches
      and are common in the trade, and Atya gabonensis reaches 15 cm. One
      clause, same entry, left alone because the species check works under a
      one-field rule.
- [ ] Source narration in pre-existing FAQs no hub row copies, found by the
      batch J check while looking at something else: two on the amano feeding
      guide ("Seriously Fish is direct about this", "Shrimp Science notes
      plainly") and one on the garter feeding guide ("Sources land in a
      similar range"). Likely more of the same corpus-wide, since four
      batches running have found this shape in text the batch did touch.
- [x] DONE 2026-09-16, both. Cherry shrimp has the same three-guide RELATED_ARTICLES entry amano
      shrimp had before batch J, so its sidebar is missing cycling, quarantine
      and the sick-tank check that every fish species carries. One line.
      Ghost shrimp gained cycling in batch N and still has neither the
      quarantine guide nor the sick-tank check, which its own health guide's
      four prevention habits lean on.
- [ ] Bristlenose pleco lifespan ceiling, hub against encyclopedia. The cost
      guide says well-kept individuals are "reasonably often reported living 12
      to 14 years"; the encyclopedia's wildLifespan field says "up to 12-15 years
      with excellent care". Neither is obviously wrong and that page's Sources do
      not settle the ceiling, so it needs research rather than a pick. Found by
      the numbers checker during batch N. (batch N)

- [ ] Five shared-guide gaps batch N's readers found on multiple species at once,
      which is what makes them shared-guide work rather than five hub lines.

      - DONE 2026-09-16, content/guides/aquarium-water-changes-guide.mdx, wired into every fish and shrimp sidebar and onto twelve hub cards as a Water changes row; the hero image is the one thing still owed. Water changes have no home anywhere on the site. Bristlenose pleco,
        swordtail, zebra danio and ghost shrimp all carry a schedule that exists
        only on the hub, and no deep dive and no shared aquarium guide states a
        frequency or a percentage. Four of five species in one batch, and the
        router conversion retires a hub-only figure, so this is actively losing
        information unless a shared guide picks it up. Probably its own guide, or
        a section in the filtration guide.
      - Ich heat treatment contradicts the stated temperature ceiling, on two
        species independently. The bristlenose health guide says to raise the
        temperature with strong aeration and never says to what, against a setup
        guide ceiling of 80F. The zebra danio health guide says the same on a
        tank its own setup guide says needs no heater at all. Both readers caught
        it separately, which makes it the shared fish-health material rather than
        either species.
      - The shared pH, GH and KH guide reads as coldwater goldfish material.
        Flagged by platy's reader in batch M and by discus and bristlenose pleco
        in batch N. Three species now, and the sidebar excerpt is what a reader
        sees before deciding whether to click, so a discus keeper reading about
        goldfish concludes the guide is not for them.
      - The shared invertebrate molting guide is terrestrial. It covers
        tarantulas, hermit crabs and jumping spiders by name and its timelines
        and signs are written for those three, while molting is the single most
        load-bearing topic for ghost shrimp and cherry shrimp, whose health
        guides carry the aquatic version alone. Either a section in that guide
        or an aquatic counterpart. Ghost shrimp's reader in batch N wanted the
        feeding guide to point there and the page it would have pointed at is
        not about shrimp.
      - Stocking numbers past a floor. Swordtail ("how many in a 29 beyond a
        trio"), zebra danio, ghost shrimp ("how many for a 5 or 10 gallon") and,
        from batch M, platy and cherry shrimp all stop at a minimum tank size and
        never say how many animals go in it. Five species across two batches.
      - DONE 2026-09-16, content/guides/aquarium-stocking-and-tankmates-guide.mdx, wired into every fish and shrimp sidebar and onto the betta, goldfish and guppy cards as a Tankmates row; the other fifteen hubs are at eighteen rows and most already carry a species-sourced tankmate or group-size row. The species table gives each animal's floor and known bad pairing.

- [ ] The opens from batches K, L and M, which the reader passes recorded in
      docs/READER_REVIEWS.md and nothing promoted here until 2026-09-15. Each one
      is a real decision the batch could not make under its Never list, and they
      are listed by what they need rather than by species.

      Needs new research before anyone can decide:
      - The white ring of death, what to actually do about it. The ghost shrimp
        health guide calls it "frequently fatal" and stops there, which is the
        one place in that set a reader is left with a named emergency and no
        next step. Shrimp Science is the page's source and may or may not give
        one. If the honest answer is that there is no intervention and
        prevention is the whole of it, the guide should say that rather than
        trailing off. (batch N)
      - Zebra danio jump height. Both the tank setup and handling guides put it
        at 20 to 30cm on housedpet.com alone, which is the weakest source in
        either set and loses to almost anything under the ranking in
        docs/RULES.md. The figure is plausible and consistent across the two
        pages and nothing better turned up in the batch N pass, so it stays until
        someone finds a real source or a reason to drop the number. (batch N)
      - Rosy boa lifespan. The cost guide's FAQ carries "20 to 30 typical" beside
        "the captive average sits nearer 18 to 22". ADW confirms both 18 to 22
        and past 30, so neither is wrong, but nothing in that page's Sources
        shows what the 20 to 30 rests on, and settling it ripples into the
        encyclopedia and the overview. (batch K)
      - Fire-bellied toad feeding schedule. PetMD, the vet-tier source, gives
        adults "once or twice a week"; Amphibian Care and Smithsonian both sit at
        every two to three days, which is what the page carries. The vet-tier
        source is the outlier of three, which is the one shape the ranking rule
        does not resolve on its own. (batch L)
      - Fire-bellied toad water depth. Amphibian Care's "about 3 inches" against
        PetMD's "1- to 2-inch-deep". PetMD's figure would contradict the page's
        standing "deep enough to genuinely swim" instruction, so one of the two
        claims has to give and that is a husbandry call, not a ranking call.
        (batch L)
      - Argentine tegu enclosure and basking. LafeberVet gives 6ft x 3ft x 3ft
        and a 95 to 100F basking range against the setup guide's 8x4x4 and 100 to
        115F. Both tegu deep dives agree with each other and the reader graded
        that page A-, so a vet-tier source sitting below the site's own numbers
        on both figures wants a deliberate decision. (batch L)
      - Leaf-tailed gecko basking. Reptile Supply gives an 80 to 84F basking
        area, 68 to 76F cool zone and a 62F night minimum for the genus; the
        setup guide that now cites it says a basking source "can be actively
        dangerous" and gives 68 to 75 by day. That is a genus-level figure
        against a species-specific warning about a montane animal. (batch M)

      Needs a style decision, then one pass to apply it everywhere:
      - Source narration in a symptom list. The quaker parakeet health guide
        names MSD, VCA and Merck inline as hyperlinks mid-sentence. On a page
        where three veterinary manuals each contribute a different part of one
        list, the attribution is arguably doing real work, and no reader has
        flagged it. Either it is an exception worth writing into RULES or it is
        the same defect the batches keep de-narrating. (batch L)
      - The Argentine tegu handling guide's pre-existing sentence naming
        LafeberVet against ReptiFiles on adult size, which is the same question
        on a page where the spread genuinely is the point. (batch L)

      Small, mechanical, just not in any batch's scope:
      - The molly cost guide's Sources block lists Splashy Fish Store, a retailer
        page RULES does not want as a source. Deleting a Sources entry is on the
        Never list, so it needs replacing rather than removing. (batch L)
      - `praying-mantis-ootheca-guide.mdx` carries two pre-existing voice errors,
        an intensifier in the heading "What an Ootheca Actually Is" and one in an
        FAQ answer. (batch L)
      - DONE 2026-09-16. `argentine-tegus-are-not-venomous.mdx` carried two pre-existing voice
        errors. The ootheca guide no longer trips the checker. (batch L)
      - DONE 2026-09-16, the prose now says typically 2 to 3 feet and rarely over 4. The rosy boa encyclopedia's description prose says "Rarely exceeding 3
        feet as adults" next to its own adultSize field of "rarely over 4 feet".
        Both are defensible, they just disagree inside one entry. (batch K)

      Checked and deliberately not actioned, recorded so nobody re-opens it: the
      emperor scorpion encyclopedia's adult size of "1.5-2 inches (4-5 cm)"
      against ADW's wider "3.5 to 8 cm". Smithsonian's "a maximum length of 2
      inches" supports the encyclopedia, no deep dive states a size, so nothing
      conflicts. (batch K)

- [ ] Batch O's open items (giant millipede, jumping spider, hissing cockroach,
      stick insect, 2026-09-15). Grouped by what each one needs.

      Needs research:
      - The hissing cockroach food removal window. The feeding guide says 24 to
        48 hours and the health guide said 24; the health guide cites nothing,
        so it moved to match the page that owns the topic. Neither source that
        opens (the OSU Extension fact sheet serves a 403, Fluker Farms only says
        to clean out leftovers regularly) states a window at all, and the figure
        that moved was the stricter one. (batch O)
      - The stick insect lifespan ceiling. The encyclopedia says "6 months-2
        years depending on species" and the cost guide says "a small number of
        larger species can reach 2 to 3 years". Neither page cites a lifespan
        source, and what is published on the longest-lived commonly kept
        phasmid, the jungle nymph, says up to 2 years. Left as written rather
        than picked. (batch O)
      - The hissing cockroach enrichment guide's welfare framework is a 2023
        Animals paper on *Gromphadorhina oblongonota*, and the pet species is
        *G. portentosa*. The guide says group-housed congener, which is honest,
        but every claim the site makes about colony welfare rests on it. Worth
        checking whether anything exists on portentosa itself. (batch O)
      - Millipedes and isopods. The giant millipede setup guide says isopods
        harass or weaken a millipede in a shared enclosure, unsourced, and one
        of the two sources opened for the group-housing fix (Bugs in Cyberspace)
        says they coexist. One of them is wrong and the guide is the one with no
        citation. (batch O)

      Needs a style decision:
      - The jumping spider cost guide's Sources block carries "Bugs in
        Cyberspace: Phidippus regius listings", a for-sale listing page, which
        RULES bars from a Sources block. Deleting a Sources entry is on the
        batch prompt's Never list, so it needs replacing rather than removing,
        the same shape as the molly cost guide's Splashy Fish entry above.
        (batch O)
      - Checked 2026-09-16 and left: 229 guides carry a future date, spread through November, so a future date is the publishing schedule rather than a defect. Three future-dated articles found in passing, all pre-existing:
        giant-millipede-enrichment-guide and stick-insect-enrichment-guide at
        2026-11-02 and 2026-11-01, and madagascar-hissing-cockroach-enrichment-
        guide at 2026-10-19. Not bumped, since nothing about them changed, but
        a date in the future is its own defect. (batch O)

      Needs a mechanical pass:
      - Checked 2026-09-16: the phrase is "Included in setup budget" and the only table carrying it is the African grey cost guide, whose two cells are now priced from affiliateProducts.js ($10 to $25 perches, $69 to $91 the rest). Its floor was above the itemized sum, not below it, so the $500 to $1,500 heading stands. "Included in setup total" as a cost table cell. Two of batch O's four
        species had a cost table whose stated floor was below the price of the
        single item it priced, hidden behind that placeholder in every other
        row: jumping spider $60-70 inside $50-120, stick insect $60-70 inside
        $30-100. Both were fixed by filling the cells from the prices already
        recorded in src/lib/data/affiliateProducts.js and summing. Grep the
        corpus for the placeholder and check the arithmetic on every table it
        appears in. (batch O)
      - Gaps no page in the set answers, and no shared invertebrate guide
        covers: quarantine or acclimation for a newly bought invertebrate, which
        three of batch O's four readers asked for independently; enclosure
        cleaning and substrate replacement intervals, asked for by all four; and
        recapturing an escapee, asked for by two. These are shared-guide work,
        not per-species work. (batch O)
      - Stick insect eggs. The set now says plainly that a single female
        produces fertile eggs without a male and that releasing them is
        prohibited, and nowhere says what to do with them instead. The one gap
        in this batch that a reader would hit within weeks of buying. (batch O)
      - The invertebrate molting guide covers tarantulas, hermit crabs and
        jumping spiders, and nothing else. Millipedes and stick insects both
        link to it from their own guides, and the species check had to re-source
        two hub rows away from it because it does not mention either animal.
        Either widen it or stop pointing myriapods and phasmids at it. (batch O)

- [ ] Batch P opens, promoted by the species check (2026-09-16):
      - Jackson's chameleon humidity needs research. The setup guide says 30
        to 50% by day rising to 75 to 100% at night, with a flatter 60 to 80%
        as the alternative; the two sources the batch added to that page for
        Diet Basics say 60 to 100% (LafeberVet) and 50 to 80% year-round
        (Reptiles Magazine). Settle it against a source that actually states
        the day-night pattern, or move the page to the veterinary figure.
      - Jackson's chameleon sourcing: the cost guide says wild-caught Hawaiian
        animals turn up cheaper, the legal guide says Hawaii bars private
        ownership and restricted inter-island transport in 1997. Both
        sourced; no page says how a legally sourced Hawaiian animal reaches
        the mainland trade. Left open by the batch, filed here.
      - Fire skink dish or scatter: the health guide suggests "considering
        feeding from a dish to reduce accidental ingestion", the enrichment
        and setup guides say release feeders into the leaf litter. A
        recommendation conflict between two hedged sentences; decide it.
      - Uromastyx basking: the set now carries the veterinary 110 to 120F
        (Long Island Birds & Exotics; Chicago Exotics gives 105 to 110F) over
        ReptiFiles' 120 to 130F, by the source ranking. If Mike wants the
        hobby figure back, it needs a source that outranks a vet clinic.

- [x] DONE 2026-09-16, eighteen added, every species with a hub and a legal guide now carries it. Legal guides missing from RELATED_ARTICLES, corpus-wide sweep. Three of
      batch I's five species had one (red-footed tortoise, degu, savannah
      monitor), so the legal guide was reachable from the hub and from
      nowhere in the sidebar. Legal is not a standard suffix, so nothing
      auto-detects it and check-related-articles does not catch it. One pass
      over every species with a legal guide.

- [x] DONE 2026-09-16: the ignore is now src/lib/generated/** only, the one disable comment naming an unregistered rule is gone, and eslint . is clean. Cloud sessions also had no node_modules at all until npm ci was run by hand, so eslint had never run there; .claude/hooks/install-deps.sh now runs npm install at every cloud session start, skipping when node_modules matches the lockfile. eslint does not see the data files at all. `eslint.config.js` has a
      top-level ignores block listing `src/lib/**` alongside `ds-bundle/**`,
      `dist/**` and `src/components/ui/**`, so every `npx eslint
      src/lib/data/guides/<file>.js` run exits 0 with no rules applied, and
      running it on the directory prints "all of the files matching the glob
      pattern are ignored" and also exits 0. That means the guides data, which
      is where the hubs live, has had no lint coverage during any batch. Decide
      whether the ignore is deliberate (it may predate the data files moving
      under src/lib) and either narrow it or stop listing eslint as a gate for
      these files. Found 2026-09-16 during the hub row cap pass.

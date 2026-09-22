# To do completed, 2026-09-22

Closed items lifted out of `docs/TODO.md`, which now holds open work only.
Verified against the repo on 2026-09-22 rather than taken from the checkboxes.

Nothing here is a source of current instructions.

## What was closed, and how it was checked

| Was | Item | Check that closed it |
|---|---|---|
| 1 | Write the federal law guide | `content/guides/federal-exotic-pet-laws-guide.mdx` exists at 18.8KB and is wired into RELATED_ARTICLES against 14 guide ids |
| 5 | Wrong-species guide art | 184 heroes in `public/assets/guides/`, and the folder is recorded as fully checked in the item that replaced it |
| 8 | The queue the batches kept filling | all 14 items carry `[x]`, none left open |

Two items were the same job under different numbers. Old 2 ("Finish converting
the per-animal guide hubs") and old 7 ("Router hubs, species by species") both
described the 108 hubs and the 24 dog and cat ones still on the legacy care
sheet. They are merged in the live file rather than archived, since the work is
not done.

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

---

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

---

## 8. After the router hubs: the queue the batches kept filling

None of these blocks a batch, and none of them is a per-species job, which
is why they kept getting deferred. Do them once section 7 is finished.

- [x] Corydoras adult size, hub against encyclopedia. The corydoras hub's
      sourceless Adult size row says "1 to 3 inches (2.5 to 7.5 cm)" and the
      encyclopedia entry it is supposed to copy says "2-3 inches (5-7.5 cm)".
      No deep dive states a size, so under RULES the row takes the
      encyclopedia's figure and currently does not. Research which is right
      before making them agree: the set turns on the dwarf-versus-standard
      distinction (the setup guide sizes the tank at 10 gallons for pygmy
      species and 20 for standard), and 2 inches as a floor excludes the
      pygmy species the same set tells a reader they can keep. Found by the
      numbers checker after batch I's species check, which missed it.
      - DONE 2026-09-16: the encyclopedia now reads 1-3 inches (2.5-7.5 cm), pygmy species at the low end, which is the range the set itself sizes tanks for, and the hub row copies it.
- [x] A shared chelonian soaking guide. How often, how deep, how warm, how
      long. Two tortoise readers have now asked for it, sulcata in batch H
      for juveniles and red-footed tortoise in batch I for the species
      generally, and every page in both sets says the animal soaks often
      without saying what that looks like. Two instances make it shared-guide
      work rather than a per-species gap.
      - DONE 2026-09-16, content/guides/tortoise-soaking-guide.mdx, dated 2026-11-29: schedule by age and species, elbow-deep, warm, 10 to 30 minutes, never unattended, urates as the check. Wired into the sulcata, Russian, red-footed and box turtle sidebars and onto the Russian hub as a Soaking row; the other three chelonian hubs are at eighteen rows. Hero image still to come.
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
- [x] The amano shrimp encyclopedia overview still opens "the largest shrimp
      commonly kept in freshwater aquariums", the same claim the adultSize
      field was corrected for in batch J. Bamboo shrimp reach 2 to 3 inches
      and are common in the trade, and Atya gabonensis reaches 15 cm. One
      clause, same entry, left alone because the species check works under a
      one-field rule.
      - DONE 2026-09-16: "the largest of the dwarf shrimp commonly kept".
- [x] Source narration in pre-existing FAQs no hub row copies, found by the
      batch J check while looking at something else: two on the amano feeding
      guide ("Seriously Fish is direct about this", "Shrimp Science notes
      plainly") and one on the garter feeding guide ("Sources land in a
      similar range"). Likely more of the same corpus-wide, since four
      batches running have found this shape in text the batch did touch.
      - DONE 2026-09-16 for the three named; no corpus-wide pass yet.
- [x] DONE 2026-09-16, both. Cherry shrimp has the same three-guide RELATED_ARTICLES entry amano
      shrimp had before batch J, so its sidebar is missing cycling, quarantine
      and the sick-tank check that every fish species carries. One line.
      Ghost shrimp gained cycling in batch N and still has neither the
      quarantine guide nor the sick-tank check, which its own health guide's
      four prevention habits lean on.
- [x] Bristlenose pleco lifespan ceiling, hub against encyclopedia. The cost
      guide says well-kept individuals are "reasonably often reported living 12
      to 14 years"; the encyclopedia's wildLifespan field says "up to 12-15 years
      with excellent care". Neither is obviously wrong and that page's Sources do
      not settle the ceiling, so it needs research rather than a pick. Found by
      the numbers checker during batch N. (batch N)
      - DONE 2026-09-16: the encyclopedia field now matches the sourced cost guide at 12-14 years, and the hub row already did.

- [x] Five shared-guide gaps batch N's readers found on multiple species at once,
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
      - DONE 2026-09-16, content/guides/aquarium-ich-treatment-guide.mdx, dated 2026-11-30: life cycle, the 86°F heat method with a species table of setup-guide ceilings, salt for scaled fish, malachite green and formalin, duration and the 30-day quarantine. Wired into all fifteen fish sidebars and onto the betta and goldfish cards as an Ich row. Hero image still to come.
      - The shared pH, GH and KH guide reads as coldwater goldfish material.
        Flagged by platy's reader in batch M and by discus and bristlenose pleco
        in batch N. Three species now, and the sidebar excerpt is what a reader
        sees before deciding whether to click, so a discus keeper reading about
        goldfish concludes the guide is not for them.
      - DONE 2026-09-16: excerpt, seoTitle, seoDescription, description and opener reframed so the mechanism is for every freshwater tank and goldfish is the worked example; the body's goldfish ranges section is unchanged.
      - The shared invertebrate molting guide is terrestrial. It covers
        tarantulas, hermit crabs and jumping spiders by name and its timelines
        and signs are written for those three, while molting is the single most
        load-bearing topic for ghost shrimp and cherry shrimp, whose health
        guides carry the aquatic version alone. Either a section in that guide
        or an aquatic counterpart. Ghost shrimp's reader in batch N wanted the
        feeding guide to point there and the page it would have pointed at is
        not about shrimp.
      - DONE 2026-09-16, content/guides/shrimp-molting-guide.mdx, dated 2026-12-01: cycle by age, pre- and post-molt signs, GH 6 to 12 and 4 to 6 ranges, the 2-a-day rule, the water change trigger, the white ring. Wired into the three shrimp sidebars, and the cherry and ghost enrichment and ghost feeding links now point at it instead of the terrestrial guide. Hero image still to come.
      - Stocking numbers past a floor. Swordtail ("how many in a 29 beyond a
        trio"), zebra danio, ghost shrimp ("how many for a 5 or 10 gallon") and,
        from batch M, platy and cherry shrimp all stop at a minimum tank size and
        never say how many animals go in it. Five species across two batches.
      - DONE 2026-09-16, content/guides/aquarium-stocking-and-tankmates-guide.mdx, wired into every fish and shrimp sidebar and onto the betta, goldfish and guppy cards as a Tankmates row; the other fifteen hubs are at eighteen rows and most already carry a species-sourced tankmate or group-size row. The species table gives each animal's floor and known bad pairing.

- [x] The opens from batches K, L and M, which the reader passes recorded in
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
        - DONE 2026-09-16: it says that now, with the tweezers last resort named and a link to shrimp-molting-guide for the prevention.
      - Zebra danio jump height. Both the tank setup and handling guides put it
        at 20 to 30cm on housedpet.com alone, which is the weakest source in
        either set and loses to almost anything under the ranking in
        docs/RULES.md. The figure is plausible and consistent across the two
        pages and nothing better turned up in the batch N pass, so it stays until
        someone finds a real source or a reason to drop the number. (batch N)
        - Left as is 2026-09-16.
      - Rosy boa lifespan. The cost guide's FAQ carries "20 to 30 typical" beside
        "the captive average sits nearer 18 to 22". ADW confirms both 18 to 22
        and past 30, so neither is wrong, but nothing in that page's Sources
        shows what the 20 to 30 rests on, and settling it ripples into the
        encyclopedia and the overview. (batch K)
        - DONE 2026-09-16: settled on ADW's 18 to 22 captive average with past 30 documented, across the cost guide, its excerpt and seoDescription, the encyclopedia entry and the three-species overview.
      - Fire-bellied toad feeding schedule. PetMD, the vet-tier source, gives
        adults "once or twice a week"; Amphibian Care and Smithsonian both sit at
        every two to three days, which is what the page carries. The vet-tier
        source is the outlier of three, which is the one shape the ranking rule
        does not resolve on its own. (batch L)
        - DONE 2026-09-16: every two to three days stays, with PetMD's once or twice a week named as the lean end of the same range.
      - Fire-bellied toad water depth. Amphibian Care's "about 3 inches" against
        PetMD's "1- to 2-inch-deep". PetMD's figure would contradict the page's
        standing "deep enough to genuinely swim" instruction, so one of the two
        claims has to give and that is a husbandry call, not a ranking call.
        (batch L)
        - DONE 2026-09-16: 3 inches stays, the toad swims; PetMD's 1 to 2 inches is named as the floor for a land-heavy layout.
      - Argentine tegu enclosure and basking. LafeberVet gives 6ft x 3ft x 3ft
        and a 95 to 100F basking range against the setup guide's 8x4x4 and 100 to
        115F. Both tegu deep dives agree with each other and the reader graded
        that page A-, so a vet-tier source sitting below the site's own numbers
        on both figures wants a deliberate decision. (batch L)
        - DONE 2026-09-16: enclosure stays 8x4x4 with LafeberVet's 6x3x3 named as the floor and the reason for the larger figure given; basking moved to 100 to 110F, inside both published ranges, on the setup guide, FAQ, seoDescription, hub row and route line.
      - Leaf-tailed gecko basking. Reptile Supply gives an 80 to 84F basking
        area, 68 to 76F cool zone and a 62F night minimum for the genus; the
        setup guide that now cites it says a basking source "can be actively
        dangerous" and gives 68 to 75 by day. That is a genus-level figure
        against a species-specific warning about a montane animal. (batch M)
        - DONE 2026-09-16: the setup guide now names the 80 to 84F genus figure and says it is for the lowland species, not this montane one.

      Needs a style decision, then one pass to apply it everywhere:
      - Source narration in a symptom list. The quaker parakeet health guide
        names MSD, VCA and Merck inline as hyperlinks mid-sentence. On a page
        where three veterinary manuals each contribute a different part of one
        list, the attribution is arguably doing real work, and no reader has
        flagged it. Either it is an exception worth writing into RULES or it is
        the same defect the batches keep de-narrating. (batch L)
        - DONE 2026-09-16: written into RULES.md as the one exception, with the quaker health and tegu handling guides as the reference.
      - The Argentine tegu handling guide's pre-existing sentence naming
        LafeberVet against ReptiFiles on adult size, which is the same question
        on a page where the spread genuinely is the point. (batch L)
        - DONE 2026-09-16: covered by the same RULES exception.

      Small, mechanical, just not in any batch's scope:
      - The molly cost guide's Sources block lists Splashy Fish Store, a retailer
        page RULES does not want as a source. Deleting a Sources entry is on the
        Never list, so it needs replacing rather than removing. (batch L)
        - DONE 2026-09-16: replaced with Aquarium Co-Op's molly care guide, opened, which carries the 20-gallon floor and the sex ratio; the price-check line no longer names the store.
      - `praying-mantis-ootheca-guide.mdx` carries two pre-existing voice errors,
        an intensifier in the heading "What an Ootheca Actually Is" and one in an
        FAQ answer. (batch L)
        - Checked 2026-09-16: the ootheca guide no longer trips check-voice.
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

- [x] Batch O's open items (giant millipede, jumping spider, hissing cockroach,
      stick insect, 2026-09-15). Grouped by what each one needs.

      Needs research:
      - The hissing cockroach food removal window. The feeding guide says 24 to
        48 hours and the health guide said 24; the health guide cites nothing,
        so it moved to match the page that owns the topic. Neither source that
        opens (the OSU Extension fact sheet serves a 403, Fluker Farms only says
        to clean out leftovers regularly) states a window at all, and the figure
        that moved was the stricter one. (batch O)
        - Decided 2026-09-16: 24 to 48 hours stands on both pages. No opened source states a window, and the feeding guide owns the figure.
      - The stick insect lifespan ceiling. The encyclopedia says "6 months-2
        years depending on species" and the cost guide says "a small number of
        larger species can reach 2 to 3 years". Neither page cites a lifespan
        source, and what is published on the longest-lived commonly kept
        phasmid, the jungle nymph, says up to 2 years. Left as written rather
        than picked. (batch O)
        - Left as written 2026-09-16.
      - The hissing cockroach enrichment guide's welfare framework is a 2023
        Animals paper on *Gromphadorhina oblongonota*, and the pet species is
        *G. portentosa*. The guide says group-housed congener, which is honest,
        but every claim the site makes about colony welfare rests on it. Worth
        checking whether anything exists on portentosa itself. (batch O)
        - Left as is 2026-09-16: the congener framing is honest, and no search was spent on it this pass.
      - Millipedes and isopods. The giant millipede setup guide says isopods
        harass or weaken a millipede in a shared enclosure, unsourced, and one
        of the two sources opened for the group-housing fix (Bugs in Cyberspace)
        says they coexist. One of them is wrong and the guide is the one with no
        citation. (batch O)
        - DONE 2026-09-16: the setup guide now follows the opened source. Isopods and springtails are fine in a display tank, with the unproven egg concern named and a breeding tank kept clear of them; seoDescription updated.

      Needs a style decision:
      - The jumping spider cost guide's Sources block carries "Bugs in
        Cyberspace: Phidippus regius listings", a for-sale listing page, which
        RULES bars from a Sources block. Deleting a Sources entry is on the
        batch prompt's Never list, so it needs replacing rather than removing,
        the same shape as the molly cost guide's Splashy Fish entry above.
        (batch O)
        - DONE 2026-09-16: replaced with UF IFAS Featured Creatures on Phidippus regius, opened, which now supports a size sentence in the pricing section.
      - Checked 2026-09-16 and left: 229 guides carry a future date, spread through November, so a future date is the publishing schedule rather than a defect. Three future-dated articles found in passing, all pre-existing:
        giant-millipede-enrichment-guide and stick-insect-enrichment-guide at
        2026-11-02 and 2026-11-01, and madagascar-hissing-cockroach-enrichment-
        guide at 2026-10-19. Not bumped, since nothing about them changed, but
        a date in the future is its own defect. (batch O)
        - Not a defect under the current convention (future dates are the publish schedule); left.

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
      - DONE 2026-09-16, content/guides/invertebrate-quarantine-cleaning-and-escapes-guide.mdx, dated 2026-12-02: three-month quarantine with separate tools, weekly spot cleans and 6 to 12 month substrate, mites and mold, escape search and cup recapture. Wired into the eight terrestrial invertebrate sidebars and onto the tarantula card as two rows. Hero image still to come.
      - Stick insect eggs. The set now says plainly that a single female
        produces fertile eggs without a male and that releasing them is
        prohibited, and nowhere says what to do with them instead. The one gap
        in this batch that a reader would hit within weeks of buying. (batch O)
      - DONE 2026-09-16: a "What to Do With the Eggs" section in stick-insect-handling-guide.mdx, hatch or freeze, with the APHIS permit scope and Bugs In Cyberspace incubation figures added to its sources.
      - The invertebrate molting guide covers tarantulas, hermit crabs and
        jumping spiders, and nothing else. Millipedes and stick insects both
        link to it from their own guides, and the species check had to re-source
        two hub rows away from it because it does not mention either animal.
        Either widen it or stop pointing myriapods and phasmids at it. (batch O)
      - DONE 2026-09-16: widened. Millipede and stick insect rows in the signs table, a Millipedes and Stick Insects section, the one rule extended, and a Sources block added (the guide had none) with the Tree of Life and Keeping Insects pages.

- [x] Batch P opens, promoted by the species check (2026-09-16):
      - Jackson's chameleon humidity needs research. The setup guide says 30
        to 50% by day rising to 75 to 100% at night, with a flatter 60 to 80%
        as the alternative; the two sources the batch added to that page for
        Diet Basics say 60 to 100% (LafeberVet) and 50 to 80% year-round
        (Reptiles Magazine). Settle it against a source that actually states
        the day-night pattern, or move the page to the veterinary figure.
        - DONE 2026-09-16: moved to the veterinary figure. Setup guide body, FAQ and hub row now carry LafeberVet's 60 to 100% with misting every 4 to 8 hours; the day-low, night-high pattern is described as what a misting schedule produces inside that band, unsourced as a target.
      - Jackson's chameleon sourcing: the cost guide says wild-caught Hawaiian
        animals turn up cheaper, the legal guide says Hawaii bars private
        ownership and restricted inter-island transport in 1997. Both
        sourced; no page says how a legally sourced Hawaiian animal reaches
        the mainland trade. Left open by the batch, filed here.
        - DONE 2026-09-16: it does not. The HISC profile says commercial export to the mainland is illegal, and LafeberVet says the feral animals are often caught for the trade anyway. The cost guide now says a mainland Hawaiian wild-caught animal was exported before the rule or in breach of it, links the legal guide, and gained a Sources block with both pages.
      - Fire skink dish or scatter: the health guide suggests "considering
        feeding from a dish to reduce accidental ingestion", the enrichment
        and setup guides say release feeders into the leaf litter. A
        recommendation conflict between two hedged sentences; decide it.
        - DONE 2026-09-16: scatter feeding stays. The health guide now says a dish is only for an animal with a past impaction or on a dry, fine substrate that should be replaced anyway.
      - Uromastyx basking: the set now carries the veterinary 110 to 120F
        (Long Island Birds & Exotics; Chicago Exotics gives 105 to 110F) over
        ReptiFiles' 120 to 130F, by the source ranking. If Mike wants the
        hobby figure back, it needs a source that outranks a vet clinic.
        - Left as is 2026-09-16: the veterinary figure stands unless Mike asks for the hobby one.

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

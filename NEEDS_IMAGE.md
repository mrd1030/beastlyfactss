# Needs Image

The live queue for images that are blocked or drafted and not yet on disk. Open
items only. **Finished work does not stay here**: once a batch lands it is
recorded in `archive/docs-completed/NEEDS_IMAGE_COMPLETED_2026-09-17.md` and
removed from this file, which is the only place that history lives.

## Open right now

Every fact on the site resolves its own photo. The 11 facts that were
borrowing another page's photo got their own on 2026-10-18.

The five October heroes and the five parked facts all landed the same day.
`check-images.mjs` passes on 1,674 referenced paths.

**Photo swap for fact 6 (Rabbit, "Purring Bunnies") plus a new binky fact**:
found 2026-10-20. Fact 6's photo, `rabbit-3.jpg`, shows a binky, but the card is
now only about purring (the binky line was cut in the sourcing pass: a second
point, and its source never mentioned it). The plan, done in one install so no
photo is ever shared:

1. Fact 6 gets a new photo: a relaxed rabbit being stroked, eyes half closed.
2. `rabbit-3.jpg` moves to a new fact, id 353, Rabbit (Mammals), "The Binky":
   Happy rabbits have their own little victory dance, called a binky. The rabbit
   hops up into the air, gives a quick twist, then lands back on the ground. Vets
   at the PDSA list it under "happy hopping", one of the signs of a happy bunny.
   Source: PDSA, https://www.pdsa.org.uk/pet-help-and-advice/looking-after-your-pet/rabbits/rabbit-body-language
   ("When your rabbits are happy, you might notice them do a little 'binky'. This
   is when they hop in the air, twist a little bit, then land back on the ground.")

**Photo swaps for four more mismatched facts, each freeing a photo for a new fact**:
found 2026-10-20. After the sourcing pass rewrote these cards, their photos no
longer match. Each card gets a new photo, and the old photo moves to a new,
already sourced fact. Do each swap in one install so no photo is ever shared.
Prompts were given in chat on 2026-10-20.

| Card now | Photo now | Why it no longer fits | Old photo goes to |
|---|---|---|---|
| 93 Common House Spider, "Not Here for the Heat" | `common-house-spider.jpg` | an orb weaver, not a house spider | new fact 354 |
| 151 Flamingo, "The One-Leg Trick" | `flamingo-2.jpg` | two flamingos on two legs | new fact 355 |
| 292 Kea, "The Rubber-Chewing Parrot" | `kea.jpg` | holds a glove; glove theft was cut as unsourced | new fact 356 |
| 337 Shiba Inu, "A Sound All Its Own" | `shiba-inu.jpg` | nail clippers in a bathroom; nail-trim scream was cut | new fact 357 |

New facts for the freed photos (sourced 2026-10-20):

- **354 Orb Weaver Spider** (Weird & Wonderful) - Eats Its Own Web. Some orb-weaver spiders remake their webs every day, even when nothing is broken. Spinning all that silk takes a lot of protein, so the spider eats the old web as it takes it down. The silk protein travels from its gut back to its silk glands to be spun into the new one. Source: Indiana Public Media (A Moment of Science), https://indianapublicmedia.org/amomentofscience/spiders-recycling/ ("When the orb-weaver takes apart an old web, it actually eats the silk.")
- **355 Flamingo** (Birds) - Head-Flagging Season. Flamingo dating starts with head flagging. Birds stretch their necks as tall as they can and swing their heads side to side, looking like flags blowing in the wind. At the Houston Zoo, the Chilean flamingos start head flagging around January and February, one of the first breeding behaviors of the year. Source: Houston Zoo, https://houstonzoo.org/blog/march-flamingos-look-flamingo-dating ("The flamingos will elongate their necks as much as possible and move their heads side to side, looking a lot like flags blowing in the wind.")
- **356 Kea** (Birds) - The Only Alpine Parrot. The kea is found only in New Zealand's Southern Alps, which makes it the world's only mountain parrot, according to New Zealand's Department of Conservation. Even its name comes from the mountains: the Maori named it for the sound of its call. Source: New Zealand Department of Conservation, https://blog.doc.govt.nz/2014/09/17/photo-of-the-week-kea/ ("The kea, named by Maori for the sound of its call, is endemic to the Southern Alps of New Zealand and is the world's only mountain parrot.")
- **357 Shiba Inu** (Dogs & Cats) - The Cat-Dog. Vets at VCA Animal Hospitals nickname the Shiba Inu "the cat-dog." Its small ears point upward much like a cat's, and these naturally fastidious dogs tend to take to housetraining quite easily. Source: VCA Animal Hospitals, https://vcahospitals.com/know-your-pet/shiba-inu ("Housetraining comes quite easily to these naturally fastidious dogs.")

Fact 100 (Mayfly) also showed a butterfly emoji; it was changed to a fly on
2026-10-20, so it needs nothing more.

## Guide heroes still needed

None. All 17 animal-day heroes (docs/NOV_DEC_ANIMAL_DAYS.md) landed on
2026-10-18, owner-generated, installed at 1168x784 through mozjpeg at quality
80. The 13 that arrived larger (1264x848 or 1728x1152) were scaled down, never up.

## Facts awaiting images

The 2026-10-05 run of five (hoopoe, Manx cat, maned wolf, sarcastic
fringehead, velvet worm) was promoted the same day as ids 343 to 347, recorded in
`archive/docs-completed/NEEDS_IMAGE_COMPLETED_2026-09-17.md`. The run below is
the current open batch.

## 2026-10-12 run: 5 facts drafted, awaiting images

Ready for the site owner to generate photos and add to facts.js.

1. **Frigatebird** (Birds) - The Red Balloon Display. Male frigatebirds attract mates by inflating a bright red throat pouch called a gular sac into a balloon nearly as large as their own body, then drumming their bill against it to make a resonating sound. The inflation can take around 20 minutes, and once a male pairs up, the pouch deflates and fades from red to pale orange. Visual hook: a male frigatebird with its giant red throat pouch fully inflated like a balloon, wings spread on a low branch.
2. **Scottish Fold** (Dogs & Cats) - The Folded Ear Gene. A Scottish Fold cat's signature folded ears come from a single gene mutation in TRPV4, identified by researchers in 2016. That same mutation affects cartilage throughout the body, and cats with two copies of it are prone to painful joint and bone problems, which is why vets and welfare groups discourage breeding two folds together. Visual hook: a close-up of a Scottish Fold cat's forward-folded ears against its round face.
3. **Fossa** (Mammals) - Not Actually a Cat. The fossa looks like a small cougar, but it is actually Madagascar's largest carnivore and a close relative of the mongoose, not a cat. It can climb down tree trunks head first using semi-retractable claws and flexible ankles, and lemurs make up more than half of its diet. Visual hook: a fossa descending a tree trunk head first, claws gripping the bark.
4. **Chambered Nautilus** (Ocean) - The Ancient Spiral Shell. Chambered nautiluses have barely changed in roughly 500 million years, making them one of the oldest living lineages in the ocean. Their spiral shell holds more than 30 gas-filled chambers connected by a thin tube called the siphuncle, which the animal uses to shift fluid in and out and control its buoyancy as it rises and sinks. Visual hook: a cross-section of a chambered nautilus shell showing its spiral chambers, with the live animal's tentacles visible at the shell's opening.
5. **Paradise Flying Snake** (Reptiles) - Swimming Through the Air. The paradise flying snake spends most of its life round like any other snake, but to glide between trees it splays its ribs outward and pulls in its belly, flattening into a dome-shaped cross-section that generates lift. Once airborne it undulates side to side as if swimming, steering itself toward a landing branch. Visual hook: a flying snake mid-glide between trees, its body flattened and curved in an S-shape against the sky.

## 2026-10-19 run: 6 facts split off, awaiting images

Each of these was a second point bundled into facts 348 to 351. Under the one
fact, one point rule they become their own cards, each needing its own photo.
The claims come from the original 2026-10-18 drafts and have not been
re-checked against sources yet.

1. **Tawny Frogmouth** (Birds) - Plan B: Puffing Up. If a predator comes too close to a stumping tawny frogmouth anyway, the bird abandons the branch disguise and puffs up its feathers to look larger. Visual hook: a tawny frogmouth with feathers fluffed out wide and beak open, facing the camera.
2. **Tawny Frogmouth** (Birds) - A Beak, Not Talons. Tawny frogmouths hunt mostly from dusk to dawn, waiting still on a perch until prey wanders close, then dropping down and snatching it with their wide beak rather than their feet. Visual hook: a tawny frogmouth dropping from a low branch at dusk, wide beak open toward an insect on the ground.
3. **Xoloitzcuintli** (Dogs & Cats) - The Dog of Xolotl. The Aztecs linked the hairless Xoloitzcuintli to the god Xolotl and often buried the dogs alongside their owners. Visual hook: a Xoloitzcuintli resting beside carved stone in warm light, its smooth gray skin and tall ears in profile.
4. **Xoloitzcuintli** (Dogs & Cats) - Saved by an Expedition. The Xoloitzcuintli nearly vanished after the Spanish conquest, surviving mainly in remote villages until a 1950s expedition tracked down enough dogs to rebuild the breed. Visual hook: a small group of Xoloitzcuintli in a dusty rural village lane.
5. **Binturong** (Mammals) - Neither Bear Nor Cat. The binturong is often called the bearcat, but it is neither a bear nor a cat. It is a long tailed relative of civets, found in the forests of South and Southeast Asia. Visual hook: a binturong's face close up, white tufted ears and long white whiskers against dark fur.
6. **Blue-Tongued Skink** (Reptiles) - A Tongue That Glows in UV. A blue-tongued skink's tongue reflects ultraviolet light, and the back of the tongue reflects almost twice as brightly as the tip. Visual hook: a blue-tongued skink's open mouth from the front, the tongue lit so its deep blue glows against the pink mouth.

## 2026-10-19 run: 7 facts split off long cards, awaiting images

Each was a second point inside one of the 21 fact cards that ran past 65
words. The cards were cut to one point and these became their own drafts.
Unlike the run above, each is already checked against the source named.

The marmoset draft reuses the old title of fact 294, whose URL
/facts/too-high-to-hear/ now redirects to 294. Delete those two lines from
public/_redirects when the draft is promoted, or give the draft a new title.

1. **Fennec Fox** (Mammals) - A Den With Back Doors. Fennec foxes dig their own homes, and they often do not stop at one door. A den can be a whole series of tunnels reaching up to 10 meters, about 32 feet, with several entrances and exits. If trouble shows up at the front door, the fox simply slips out another one. Visual hook: A fennec fox peeking out of a sandy burrow entrance with its huge ears up. Source: Smithsonian's National Zoo and Conservation Biology Institute, https://nationalzoo.si.edu/animals/fennec-fox
2. **Green Anaconda** (Reptiles) - The Breeding Ball Ends in Dinner. Female green anacondas are considerably larger than males, and breeding season shows it. Up to 13 males wrap around one female in a writhing breeding ball. Afterward she may swallow one or more of the smaller males, stocking up for a seven month pregnancy during which she will not eat again. Visual hook: A huge female green anaconda coiled in shallow water with a smaller male draped across her. Source: Smithsonian's National Zoo and Conservation Biology Institute, https://nationalzoo.si.edu/animals/green-anaconda
3. **Shima Enaga** (Birds) - 2,000 Feathers, Then Spring Cleaning. A long-tailed tit stuffs its nest with more than 2,000 feathers, a seriously plush duvet for the chilly start of spring. Then, as the weather warms, the birds gradually pull feathers back out of the nest, like swapping a winter comforter for a lighter blanket as the season heats up. Visual hook: A long-tailed tit perched at the entrance of its lichen-covered nest with a small white feather in its beak. Source: Natural History Museum, London, https://www.nhm.ac.uk/discover/why-do-birds-nest.html
4. **Dachshund** (Dogs & Cats) - Armored Up for Badgers. A dachshund's face was built for a fight underground. Badgers have thick skin, sharp teeth and claws, so the dog that met one head-on needed protection up front: a prominent bridge bone over the eyes, plus a strong, well-hinged underjaw packing surprisingly large teeth so it could give back as good as it got. Visual hook: Close side profile of a dachshund's head showing the brow ridge above the eyes and its long jaw. Source: American Kennel Club, https://www.akc.org/expert-advice/dog-breeds/dachshund-history-badger-dog-breed/
5. **Pygmy Marmoset** (Mammals) - Too High to Hear. Pygmy marmosets keep in touch by chattering and trilling in high-pitched voices, and some of their sounds climb so high that human ears can't catch them at all. Stand under a troop of the world's smallest monkeys and you may only hear part of the conversation. Visual hook: A tiny pygmy marmoset clinging to a tree trunk with its mouth open mid-call. Source: San Diego Zoo Wildlife Alliance, https://animals.sandiegozoo.org/animals/pygmy-marmoset
6. **Hoatzin** (Birds) - Fossil Hands on a Baby Bird. Baby hoatzins have wing claws in proportions strikingly similar to those of Archaeopteryx, the famous feathered fossil, while adult hoatzins look quite different. That makes the climbing chicks a living stand-in, helping scientists picture how early birds with clawed wings may have clambered through branches. Visual hook: A fuzzy hoatzin chick gripping a branch with the small claws on its wings. Source: Science Advances (2019), https://pmc.ncbi.nlm.nih.gov/articles/PMC6530998/
7. **Marine Iguana** (Reptiles) - The Shrinking Lizard. When El Niño warms the Galapagos and their favorite algae vanish, marine iguanas do something wild: they shrink, losing not just weight but up to 20% of their body length. Shrunken iguanas survive longer, and when cool water brings food back, they grow again. Some do it several times in one life. Visual hook: A marine iguana basking on black lava rock beside the surf. Source: Natural History Museum, London, https://www.nhm.ac.uk/discover/shrinking-galapagos-marine-iguanas.html

## Possible future facts: second points cut in the 2026-10-19 sourcing pass

Each was cut from a card to keep it to one point, or because the card's one
source did not cover it. None is sourced yet. Before any becomes a fact it needs
its own credible source and its own photo, and it must not repeat a card already
on the site. The full notes are in `docs/fact-sources/` (wrong*.json, edit*.json).

- 12 Mantis Shrimp: the punch, often compared to a bullet (the bullet comparison was unsourced).
- 23 Platypus: males carry a venomous ankle spur; platypuses also find prey by electroreception.
- 29 Starfish: some species reproduce by splitting in half.
- 40 Bearded Dragon: females wave to show they are receptive.
- 78 Cleaner wrasse: a fish that has also been reported to pass the mirror test.
- 101 Kangaroo: birth and the journey to the pouch.
- 154 Chicken: newly hatched chicks show signs of object permanence within days.
- 163 Starfish: how tube feet move a sea star.
- 168 Axolotl: the wild range is down to three sites in Xochimilco and Chalco.
- 179 Quokka: a pregnancy can pause, depending on whether the pouch joey survives.
- 182 Thorny Devil: the knob on its neck works as a false head.
- 198 Pangolin: when the pangolin lineages split.
- 279 Lionfish: the invasion of the western Atlantic since the 1980s.
- 289 Okapi: found in the wild only in the Democratic Republic of the Congo (unverified).
- 315 Orca: matriarch-led family groups, and calves learning their pod's calls.
- 317 Echidna: it has no teeth.
- 338 Frilled Shark: about 300 teeth in rows (unsourced).
- 345 Maned Wolf: females raise the pups, and males may bring food.

## How a blocked fact works

A fact can be drafted and parked here when no verified photo exists. Parked
facts are **not** added to `src/lib/data/facts.js`: a promoted fact whose image
never lands renders as dead text in a list where every neighbour opens a
picture. Promotion steps are in `BEASTLYPEDIA_FACT_GAPS.md`.

A full Wild Animals article can be parked the same way, saved as
`<slug>.mdx.draft` under `content/guides/`. The `.draft` suffix keeps
`check-images.mjs` and `sync-articles.js` from seeing it. Rename to `.mdx` once
the photo lands.

## Related

`BEASTLYPEDIA_FACT_GAPS.md` holds facts blocked on photos *and* tied to a
specific Beastfile page. Prompt style rules are in `IMAGE_PROMPTS.md`; the
prompts that produced existing images are in
`archive/docs-completed/IMAGE_PROMPTS_COMPLETED_2026-09-17.md`.

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

## Replacing the Adobe Stock photos (started 2026-10-20)

In July 2026 a session licensed 89 fact photos from Adobe Stock's free tier
(commits eca5ff66, c5905311, 60e3779a, 3175517d, e6f22651, e1fbf1f4, b66218fb,
715d9076). The license allows them on the site, but not offering them for reuse,
and it may require a "[Contributor]/stock.adobe.com" credit for editorial use.
The owner is replacing them with their own generated photos, five prompts at a
time, saved over the same filename so no map changes. Take each line off this
list when its photo lands.

- 27 Koala, "22-Hour Sleepers": `koala.jpg`
- 28 Butterfly, "Taste With Their Feet": `butterfly.jpg`
- 29 Starfish, "Arm Regeneration Masters": `starfish.jpg`
- 30 Hummingbird, "Super-Fast Hearts": `hummingbird.jpg`
- 31 Alpaca, "Spit Happens": `alpaca.jpg`
- 32 Pangolin, "Walking Pinecones": `pangolin.jpg`
- 34 Giraffe, "The Big Heart Myth": `giraffe.jpg`
- 35 Polar Bear, "Black Skin, Clear Fur": `polar-bear.jpg`
- 36 Armadillo, "Identical Quadruplets": `armadillo.jpg`
- 37 Wood Frog, "Frozen But Alive": `wood-frog.jpg`
- 38 Pufferfish, "Balloon Defense": `pufferfish.jpg`
- 43 Chameleon, "Color Means Communication": `chameleon.jpg`
- 44 Dog, "Three Eyelids": `dog.jpg`
- 57 Tortoise, "The Century Club": `tortoise.jpg`
- 59 Shark, "Electric Sense": `shark.jpg`
- 61 Hippo, "Hippo Sunscreen": `hippo.jpg`
- 62 Leafcutter Ant, "Ants Farm Fungi": `leafcutter-ant.jpg`
- 64 Swift, "Ten Months Aloft": `swift.jpg`
- 65 Pistol Shrimp, "Finger-Snapping Shrimp": `pistol-shrimp.jpg`
- 66 Zebra, "No Two Stripes Alike": `zebra.jpg`
- 67 Wolf, "The Willow Story, Revisited": `wolf.jpg`
- 68 Deer, "Antlers in a Hurry": `deer.jpg`
- 69 Clownfish, "Every Clownfish Starts Male": `clownfish.jpg`
- 70 Honey Badger, "Snake Venom? No Thanks": `honey-badger.jpg`
- 71 Lyrebird, "Nature's Sound Thief": `lyrebird.jpg`
- 73 Mimic Octopus, "The Ultimate Impostor": `mimic-octopus.jpg`
- 75 Goat, "Playgroup Accents": `goat.jpg`
- 78 Magpie, "Magpie Mirror Test": `magpie.jpg`
- 84 Cricket, "Dancing Crickets": `cricket.jpg`
- 85 African Grey Parrot, "The Bashful Parrot": `african-grey-parrot.jpg`
- 87 Humpback Whale, "Singers of the Sea": `humpback-whale.jpg`
- 90 Green Sea Turtle, "Reptile Alarm Clock": `green-sea-turtle.jpg`
- 94 Sea Sponge, "Surprising Sea Sponges": `sea-sponge.jpg`
- 96 Lemur, "The Purring Lemur": `lemur.jpg`
- 100 Mayfly, "A Day in the Life": `mayfly.jpg`
- 101 Kangaroo, "Bouncing Buddies": `kangaroo.jpg`
- 103 Kangaroo Rat, "Swimmers in the Desert": `kangaroo-rat.jpg`
- 104 Sphynx Cat, "No Mustache Required": `sphynx-cat.jpg`
- 106 Tamarin Monkeys, "Daddy Day Care": `tamarin-monkeys.jpg`
- 107 Sea Turtles, "Egg Layers of Mystery": `sea-turtles.jpg`
- 110 Red-footed Booby, "Treetop Booby": `red-footed-booby.jpg`
- 111 Box Turtle, "Survival Specialists": `box-turtle.jpg`
- 114 Kookaburra, "No Laughing Matter": `kookaburra.jpg`
- 115 Electric Eel, "Electric Eel Shock": `electric-eel.jpg`
- 117 Cheetah, "Can't Stop Purring": `cheetah.jpg`
- 120 California Sea Lion, "Rhythm-Keeping Sea Lion": `california-sea-lion.jpg`
- 121 Owl, "Tube-Eyed Head Rotators": `owl.jpg`
- 122 Reindeer, "Arctic Eye-Mirror Shifters": `reindeer.jpg`
- 123 Chicken, "Miracle Mike the Headless Rooster": `chicken.jpg`
- 124 Wallace's Flying Frog, "Gliding Rainforest Acrobat": `wallaces-flying-frog.jpg`
- 128 Gentoo and Adélie Penguin, "Pebble-Pinching Penguins": `penguin.jpg`
- 129 Wandering Albatross, "Locked-In Gliders": `wandering-albatross.jpg`
- 130 Woodpecker, "Small Brain, Zero Concussions": `woodpecker.jpg`
- 131 Bar-Tailed Godwit, "The Nonstop Flyer": `bar-tailed-godwit.jpg`
- 132 Peregrine Falcon, "Fastest Animal Alive": `peregrine-falcon.jpg`
- 133 Naked Mole Rat, "Cancer-Proof and Cold-Blooded": `naked-mole-rat.jpg`
- 135 Sea Cucumber, "Self-Eviction Defense": `sea-cucumber.jpg`
- 136 Ocean Sunfish, "300 Million Eggs, None Found": `ocean-sunfish.jpg`
- 137 Giant Squid, "Eyes Built for Whale-Watching": `giant-squid.jpg`
- 139 Tuatara, "The Reptile With a Third Eye": `tuatara.jpg`
- 140 American Alligator, "All Bite, No Bark": `american-alligator.jpg`
- 141 Draco Lizard, "The Flying Dragon": `draco-lizard.jpg`
- 143 Bat, "Built-In Sonar": `bat.jpg`
- 144 Elephant Seal, "Two-Hour Breath Holders": `elephant-seal.jpg`
- 146 Basenji, "The Dog That Doesn't Bark": `basenji.jpg`
- 175 Vulture, "A Hazmat Suit on the Inside": `vulture.jpg`
- 177 Dung Beetle, "Steered By the Milky Way": `dung-beetle.jpg`
- 178 Sperm Whale, "The Loudest Animal Alive": `sperm-whale.jpg`
- 354 Orb Weaver Spider, "Eats Its Own Web": `common-house-spider.jpg`

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

## 2026-10-26 run: 5 facts drafted, awaiting images

Ready for the site owner to generate photos and add to facts.js.

1. **Oilbird** (Birds) - Clicks in the Dark. Oilbirds are among the very few birds known to echolocate, clicking their way through pitch black caves across Trinidad and northern South America. Unlike bats, they are not after insects: oilbirds are strict fruit eaters, swallowing palm, laurel and incense tree fruit whole and spitting the seeds back out later. Visual hook: an oilbird perched in cave darkness, its long facial whiskers catching a sliver of light. Source: Frontiers in Physiology, https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2013.00123/pdf
2. **Chow Chow** (Dogs & Cats) - The Blue-Black Giveaway. Chow Chow puppies are born with ordinary pink tongues, but within weeks the tongue and the inside of the mouth turn a solid blue-black, a trait the breed standard calls for. No one has ever pinned down why it happens: breed experts say there is no documented scientific explanation, just old folk tales about chows licking up pieces of fallen sky. Visual hook: a Chow Chow with its mouth open, deep blue-black tongue and gums against its thick ruff of fur. Source: American Kennel Club, https://www.akc.org/expert-advice/lifestyle/why-do-chow-chows-have-blue-tongues/
3. **Colugo** (Mammals) - Built for the Glide. Colugos are sometimes called flying lemurs, though they do not fly and are not lemurs. They carry the most extensive gliding membrane of any mammal, stretching from the sides of the neck all the way to the tips of the fingers, toes and tail, webbing even the spaces between digits that most other gliding mammals leave bare. Visual hook: a colugo mid-glide between two trees, its membrane fully stretched from wrist to ankle to tail tip. Source: New World Encyclopedia, https://www.newworldencyclopedia.org/entry/Colugo
4. **Portuguese Man o' War** (Ocean) - Not One Animal, Many. A Portuguese man o' war looks like a single jellyfish, but it is actually a colony of many genetically identical animals called zooids, each specialized for one job such as floating, stinging or digesting. The zooids cannot survive apart from each other, so the whole colony only works as a team. Visual hook: a Portuguese man o' war floating at the surface, its pink crested float above and trailing tentacles below. Source: Wikipedia, https://en.wikipedia.org/wiki/Portuguese_man_o%27_war
5. **Tokay Gecko** (Reptiles) - Loud Bark, Harder Bite. Tokay geckos get their name from the loud croaking call males give, easily heard across a room or a garden. Cornered tokays switch tactics, hissing and puffing up their body before delivering a swift, hard bite from a mouth they are often reluctant to let go of. Visual hook: a tokay gecko with its mouth wide open mid-hiss, blue-gray skin with orange spots visible. Source: Smithsonian's National Zoo and Conservation Biology Institute, https://nationalzoo.si.edu/node/6861

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

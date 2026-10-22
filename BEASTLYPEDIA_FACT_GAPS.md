# Beastlypedia fact gaps

Beastfile pages pull their Fun Facts straight from the fact database, and each
one opens its photo in a lightbox when clicked. A Beastfile with no matched
facts falls back to the short `funFacts` strings written into its own data,
plain text with no photo behind them. Run `node scripts/generate-beastlypedia-index.js`
to see the current list; it prints every Beastfile still on that fallback.

The photo is not optional here. It is the entire interaction, and a promoted
fact whose image never lands renders as dead text in a list where every
neighbour opens a picture. Every new fact needs its **own** photo, with no
reuse, including from the Beastfile hero or secondary images already on disk.

> This file holds facts that are **not yet in `facts.js`**. Once a fact is
> promoted, delete it from here rather than leaving a copy. An earlier version
> of this file kept all fifteen drafts after twelve had shipped, and the copies
> immediately went stale: the ids no longer matched and one fact was reworded in
> `facts.js` while this file still showed the old sentence.

---

## Promoting a fact once its photo exists

1. Drop the photo into `public/assets/facts/` under the filename in the table.
2. Append the fact to `src/lib/data/facts.js` with the next free id, title,
   emoji, animal, category and text. Keep ids contiguous and never renumber.
3. Add the id to `FACT_IMAGES` in **both** `src/lib/data/factImages.js` and
   `public/_worker.js`. The worker cannot import the module, and it is what
   drives `og:image`, so the two copies are synced by hand.
4. `node scripts/generate-thumbnails.js`
5. `node scripts/generate-beastlypedia-index.js`
6. Move its research entry from `docs/fact-sources/drafts-*.json` into a
   `docs/fact-sources/new-<date>.json` pass under its new id, then
   `node scripts/generate-fact-sources.mjs`. The build fails on a fact with no
   source. Drafts files are ignored by the generator until then.
7. Delete the fact from this file.

Step 5 is what moves the Beastfile off its authored fallback. The script prints
which Beastfiles still have no facts.

A note on matching: facts are matched to a Beastfile by animal name, case
insensitively. Where a Beastfile's own name differs from the name used in
`facts.js`, the Beastfile carries a `factAnimal` field. The manta ray and the
panther chameleon both do.

A separate, unrelated pattern lives here too: a full Wild Animals article can
be drafted and saved as `<slug>.mdx.draft` under `content/guides/` before its
header photo exists. The `.draft` suffix keeps `check-images.mjs` and
`sync-articles.js` from seeing it. Rename to `.mdx` once the photo lands.

## Open gaps

Goal (owner, 2026-10-22): every Beastfile shows at least 3 fact cards, so the
authored `funFacts` can be retired. 23 Beastfiles are short, 32 cards in all,
researched in three batches. Each draft below has its card text, its photo
filename and its image prompt. The source, verbatim quote and research notes
are in `docs/fact-sources/drafts-beastfile-<batch>.json`, along with every old
fun fact that was dropped and why.

## Batch 1: mammals, 13 cards (researched 2026-10-22)

Prompts follow `IMAGE_PROMPTS.md`. Each frame is built to read differently
from that Beastfile's hero and secondary and from the animal's existing fact
photos. Fact photos are not cropped; mozjpeg at 80, never enlarged.

**Capybara: Teeth That Keep Growing** (Mammals, 🦫) → `/assets/facts/capybara-teeth.jpg`
Like other rodents, capybaras have long, sharp front teeth for slicing through plants. All that chewing on vegetation wears them down, so the teeth keep growing throughout a capybara's life. Steady wear plus steady growth keeps them sharp.
Source: Columbus Zoo and Aquarium

A capybara close up from the front at eye level, mid-bite on a mouthful of
long green grass, lips parted so the two broad orange-tinted upper incisors
show clearly. Blunt square muzzle, small rounded ears, coarse reddish brown
fur. Not a guinea pig or a beaver: no flat tail, huge barrel body. Soft
overcast light, green wetland meadow blurred behind. No people, no text.
Landscape 3:2.
**Check:** the front incisors are visible, and the animal is clearly capybara
sized and shaped.

**Narwhal: No Fin, No Problem** (Ocean, 🐳) → `/assets/facts/narwhal-ridge.jpg`
A narwhal has no dorsal fin. Instead, a low ridge about 5 cm high runs along about half of its back. Scientists think going finless helps it move among sea ice, and the ridge has a second use: researchers can tell one narwhal from another by it.
Source: Hinterland Who's Who

Aerial view looking straight down on a narwhal's back as it surfaces in a
narrow lead of dark water between white ice floes. The smooth mottled gray
and white back shows no dorsal fin at all, only a low bumpy ridge along the
rear half. The spiral tusk is just visible at the front. Not a beluga: mottled
skin, not white. Cold blue light, crisp ice edges. No people, no text.
Portrait.
**Check:** no dorsal fin, and the low ridge reads on the back.

**Aye-aye: A Hidden Extra Thumb** (Weird & Wonderful, 🐒) → `/assets/facts/aye-aye-pseudothumb.jpg`
Aye-ayes have a tiny extra thumb on each hand, called a pseudothumb, complete with its own fingerprints. It has a bone, a cartilage extension and three muscles to move it, and it can push with a force equal to almost half the aye-aye's body weight. It is the first extra digit ever found in a primate.
Source: North Carolina State University

Macro photograph of an aye-aye's hand gripping a mossy branch at night, seen
from the palm side. Long bony fingers, the thin skeletal middle finger, and a
small fleshy bump at the base of the thumb side of the palm, lit so it reads.
Coarse black fur on the wrist. Dark background, soft flash from the side,
100mm macro, shallow depth of field. No people, no text. Landscape 3:2.
**Check:** it is clearly an aye-aye hand (thin middle finger), and the palm
bump is visible. Do not ship a frame with six full fingers.

**Aye-aye: Mistaken for a Squirrel** (Weird & Wonderful, 🐒) → `/assets/facts/aye-aye-gnawing.jpg`
When French explorers brought two aye-ayes to Europe in 1780, naturalists ranked them with the rodents, as close cousins of squirrels. It was an easy mistake: aye-ayes have ever-growing front teeth like a rodent's and a squirrel-like skull. By the mid-1800s they had been correctly identified as primates.
Source: University of York

An aye-aye in profile gnawing into the bark of a dead branch, its large
rodent-like front incisors biting into the wood, wood chips falling. Big
leathery ears, shaggy dark gray and black fur, bushy tail hanging below like a
squirrel's. Not a squirrel or a possum. Night, warm side light, dark rainforest
background. No people, no text. Landscape 3:2.
**Check:** the front teeth are in the wood, and the bushy tail is in frame.

**Gray wolf: Raised by the Whole Pack** (Mammals, 🐺) → `/assets/facts/wolf-pups.jpg`
Wolf pups are born in early spring, and the whole pack helps raise them. For the first month they live on their mother's milk. After that, other pack members feed them meat carried home in their stomachs and brought back up. By 7 to 8 months old, the pups are traveling with the adults.
Source: National Park Service

Three gray wolf pups, about eight weeks old, crowding around a young adult wolf
outside a den in a dirt bank, licking at its muzzle to beg for food. Spring
grass, early green aspen leaves. Fluffy gray-brown pups with dark muzzles.
Not domestic dogs or huskies: no curled tails, no blue eyes. Soft morning
light, 300mm, eye level. No food or blood visible, no people, no text.
Landscape 3:2.
**Check:** pups are licking the adult's mouth, and they read as wolves.

**Lion: The Mane Is a Message** (Mammals, 🦁) → `/assets/facts/lion-dark-mane.jpg`
A lion's mane does not seem to be mainly a neck shield: neck wounds turn out to be no more common or deadly than wounds anywhere else. It works more like a signal. Males with darker manes have more testosterone and better cub survival, and lionesses find dark manes far more attractive than blond ones.
Source: The Lion Center, University of Minnesota

A male lion with a thick, very dark brown and black mane walking toward a
lioness who is watching him from the grass, both in frame. Late afternoon
backlight catches the edge of the mane. Not lying down, not facing the camera
head-on (the hero and secondary already do those). Serengeti grassland,
warm amber palette, 400mm. No people, no text. Landscape 3:2.
**Check:** the mane is clearly dark, not blond, and the lioness is in frame.

**Tiger: Stripes Go Swimming** (Mammals, 🐅) → `/assets/facts/tiger-swimming.jpg`
Tigers are strong swimmers. They often slip into the water to cool off or to escape biting flies, and they can easily cross rivers and lakes 5 miles (8 km) wide. Some have even been recorded hunting in the water.
Source: Smithsonian's National Zoo and Conservation Biology Institute

A Bengal tiger swimming across a wide brown river, only its head and the top of
its striped shoulders above the water, a V-shaped wake behind it. Eye-level
shot from the water surface. Mangrove bank in soft focus behind. Not a
jaguar: black stripes, no rosettes. Overcast, muted green and orange palette.
No people, no boats, no text. Landscape 3:2.
**Check:** the tiger is genuinely swimming (no legs on a riverbed), and the
stripes read.

**Rhinoceros: Down to the Last Two** (Mammals, 🦏) → `/assets/facts/rhino-white-pair.jpg`
Only two northern white rhinos are left on Earth, Najin and Fatu, and both are females. Scientists have now produced 39 northern white rhino embryos. In late 2025 they transferred three into southern white rhino surrogate mothers, but none became a lasting pregnancy. The team keeps trying.
Source: Ol Pejeta Conservancy

Two female white rhinos grazing side by side on short grass, seen from behind
and slightly to the side, broad square lips down to the ground, small ears.
Wide square-lipped white rhinos, not black rhinos (no hooked lip). Dry season
Kenyan grassland at dusk, Mount Kenya faint on the horizon, quiet and a little
melancholy. No fences, no rangers, no people, no text. Landscape 3:2.
**Check:** two animals, square lips, white rhino build. The card names real
individuals, so the photo must not be presented as them: the alt text says
"two white rhinos", not Najin and Fatu.

**Honey badger: A Lock Venom Can't Pick** (Mammals, 🦡) → `/assets/facts/honey-badger-cobra.jpg`
A honey badger is born with a defense against snake venom. Toxins from cobras and their relatives attack a receptor on muscle, and in honey badgers that receptor carries a swapped building block that stops the toxin from latching on. Hedgehogs and pigs evolved the same fix on their own. Mongooses use a different change at the very same spot.
Source: Toxicon (2015)

A honey badger facing off against a raised Cape cobra on red Kalahari sand,
the cobra's hood spread, the badger low and square with its pale gray back
saddle and black underside. Standoff, no bite, no blood. Low angle, harsh
midday light softened, ochre and black palette, 400mm. Not a skunk or a
wolverine. No people, no text. Landscape 3:2.
**Check:** the snake is a hooded cobra, the badger has the pale back saddle.

**Wombat: A Bottom Built Like a Shield** (Weird & Wonderful, 🐻) → `/assets/facts/wombat-rump.jpg`
A threatened wombat can block its burrow entrance with its backside. The rump holds a large plate of fascia, a tough connective tissue, and has very few nerve endings, so a fox or dog biting at it generally does little harm. The fur there is short, giving a predator nothing to grab.
Source: IFLScience

A bare-nosed wombat halfway into its burrow, seen from directly behind, so its
broad, flat, rounded rump fills the dark entrance like a cork. Short coarse
gray-brown fur on the rump, stubby legs braced. Eucalyptus leaf litter, bare
earth mound. Not a koala or a bear. Soft late afternoon light. No predator,
no people, no text. Landscape 3:2.
**Check:** only the rump and back legs show, plugging the hole.

**Wombat: Running on Low Battery** (Weird & Wonderful, 🐻) → `/assets/facts/wombat-sleeping.jpg`
Wombats live on a tiny energy budget. When scientists measured wild wombats of all three species, every one burned less energy than other marsupials and far less than expected for a plant-eating mammal. In lean seasons, wombats cut their energy use to about half of what they spend when food is plentiful.
Source: Oecologia (2003)

A bare-nosed wombat fast asleep on its side in a patch of winter sun on dry
grass, legs stretched out, broad bare nose and small eyes closed. Frosty
morning, pale gold light, breath faintly visible. Relaxed, heavy, still. Not a
koala. No people, no text. Portrait.
**Check:** eyes closed, bare nose (no hair on the nose).

**Platypus: Ten Sex Chromosomes** (Weird & Wonderful, 🦫) → `/assets/facts/platypus-diving.jpg`
A male platypus carries ten sex chromosomes: five X and five Y. Females carry two copies of each of the five X's. When sperm form, all ten link up in a single chain, then split so that each sperm carries either all five X's or all five Y's.
Source: Nature (2004)

Underwater photograph of a platypus diving toward a pebbly creek bed, front
webbed feet paddling, tail flattened, eyes closed, a silver film of air
trapped in its dense fur. Clear tea-colored water, dappled light from above,
river stones below. Not an otter or a beaver. No people, no text. Portrait.
**Check:** the duck-like bill and the webbed front feet read underwater.

**Wolverine: Nature's Deep Freezer** (Mammals, 🦡) → `/assets/facts/wolverine-cache.jpg`
Wolverines stash food in snow and in cold cracks between mountain boulders. Researchers think these icy hiding spots work like a refrigerator, guarding carrion from scavengers, insects and bacteria. The stored food helps nursing mothers from February through April, when fresh meals are scarce.
Source: Wildlife Conservation Society

A wolverine digging into a snowbank at the foot of large granite boulders high
in the mountains, front paws throwing snow, head down in the hole, rear end and
bushy tail toward the camera at an angle. Blue shadows, bright alpine light.
Not a bear cub or a badger: dark brown coat with a pale band along the flank.
No carcass visible, no people, no text. Landscape 3:2.
**Check:** boulders and snow both in frame; the pale flank band reads.

## Every authored fun fact, and where it stands

Recorded 2026-10-22 before any `funFacts` array is deleted, so nothing is lost.
Each Beastfile carries three authored `funFacts`. They show on the page only
when the animal has no fact cards, which today is none of them. "Card N" means
an existing fact already makes that point. "Not on a card" lines are spare
candidates: unsourced, so they need research before they become cards.

### Beastfiles that already have 3 or more cards (20)

| Beastfile | Cards | Authored fun facts |
|---|---|---|
| Pangolin | 8 | scales are keratin: card 199. No teeth, swallows stones: card 195. Closes nostrils and ears while feeding: not on a card |
| Fennec fox | 3 | largest ears for its size: card 257. Furred soles: card 259. Weighs less than a house cat: not on a card |
| Giraffe | 6 | 25 lb heart traces to one 1955 paper: card 34. Seven neck vertebrae: card 156. Goes longer without water than a camel: not on a card, and doubtful |
| Slow loris | 4 | mother licks venom into her infant's fur: not on a card. Raised arms reach the venom gland: card 233. Venom used against its own species: not on a card |
| African elephant | 4 | hears calls through its feet: cards 76 and 244. Trunk has no bone, uproots trees and picks up a seed: not on a card. Returns to and handles relatives' bones: card 13 in part |
| Sloth | 3 | weekly descent is deadly: card 255. Moths lay eggs in the dung: card 256. Algae turn the fur green: card 256 |
| Serval | 3 | ears hear rodents underground: card 339. Leaps about 3 m for birds: card 340. Highest hunting success of any wild cat: not on a card |
| Panther chameleon | 4 | males named by locale (Ambilobe, Nosy Be): not on a card. Eyes move independently, then converge: not on a card. Females small and muted, barred when gravid: not on a card |
| Gaboon viper | 3 | bites and holds on: card 285. Danger is stepping on one in plain view: not on a card. Moves in a straight line: card 286 |
| Green anaconda | 3 | live birth: card 262. Constriction stops blood, not bones: card 261. Slow on land, stays near water: not on a card |
| Blue poison dart frog | 3 | captive frogs not poisonous: card 264. Black spotting identifies individuals: not on a card. Not a blowdart species: card 265 |
| Victoria crowned pigeon | 3 | both parents make crop milk: card 268. Lace-tipped crest: card 267. Big enough to pass for a game bird: not on a card |
| Shima enaga | 3 | eats insect eggs and larvae even in winter: not on a card. Elastic spider-silk nest: card 282. Nest lined with over a thousand feathers: not on a card |
| Bald eagle | 4 | "balde" means white: card 328. Record St. Petersburg nest: card 325. Vermilion, Ohio nest over 2 tons, used 34 years: not on a card |
| Dolphin | 9 | copies a whistle to get attention: cards 79 and 207. Sleeps half a brain at a time: not on a card. Sponge tools passed mother to calf: not on a card |
| Clownfish | 7 | the anemone gets cleaned, defended and fed: card 99. Without an anemone it rarely survives: not on a card. Mucus coat partly acquired by brushing a new anemone: card 220 in part |
| Immortal jellyfish | 7 | transdifferentiation: card 202. A few millimeters across: card 203. Reverted polyp buds identical medusae: card 201 in part |
| Seahorse | 5 | pouch regulates salinity and oxygen: cards 226 and 228. Pairs greet each morning with a color change: not on a card. Dwarf seahorse is the slowest fish measured: not on a card |
| Octopus | 4 | probably color-blind: not on a card. Breeds once and dies, female starves guarding eggs: not on a card. A severed arm keeps reacting: not on a card |
| Sea otter | 3 | eats about a quarter of its weight a day: not on a card. Cracks shellfish on a rock on its chest: not on a card. Otters slowed salt marsh erosion in a California estuary: not on a card |

### Beastfiles under 3 cards (23), 32 new cards needed

| Beastfile | Cards now | Needed | Batch |
|---|---|---|---|
| Capybara | 2 | 1 | 1 |
| Narwhal | 2 | 1 | 1 |
| Aye-aye | 1 | 2 | 1 |
| Gray wolf | 2 | 1 | 1 |
| Lion | 2 | 1 | 1 |
| Tiger | 2 | 1 | 1 |
| Rhinoceros | 2 | 1 | 1 |
| Wombat | 1 | 2 | 1 |
| Honey badger | 2 | 1 | 1 |
| Platypus | 2 | 1 | 1 |
| Wolverine | 2 | 1 | 1 |
| Thorny devil | 1 | 2 | 2 |
| Glass frog | 1 | 2 | 2 |
| Axolotl | 2 | 1 | 2 |
| Shoebill | 1 | 2 | 2 |
| Emperor penguin | 2 | 1 | 2 |
| Crow | 2 | 1 | 2 |
| Giant manta ray | 1 | 2 | 3 |
| Leafy sea dragon | 1 | 2 | 3 |
| Shark | 1 | 2 | 3 |
| Mantis shrimp | 2 | 1 | 3 |
| Cuttlefish | 2 | 1 | 3 |
| Humpback whale | 1 | 2 | 3 |

Their authored fun facts are the starting candidates for each batch. Batch 1
(mammals, 13 cards) is drafted above. Batches 2 (reptiles, amphibians and
birds, 9 cards) and 3 (marine, 10 cards) are next.

Shipped entries are not kept here. They live in
`archive/docs-completed/BEASTLYPEDIA_FACT_GAPS_COMPLETED_2026-09-17.md`.

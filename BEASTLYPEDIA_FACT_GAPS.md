# Beastlypedia fact gaps

Beastfile pages pull their Fun Facts straight from the fact database, and each
one opens its photo in a lightbox when clicked. Fifteen of the sixteen
Beastfiles have real facts to pull.

**One does not: the Gaboon viper.** That page falls back to the short `funFacts`
strings written into the Beastfile data, which are plain text with no photo
behind them.

Twelve of the original fifteen facts here shipped on 2026-08-03 as ids 257 to
268, covering the fennec fox, green anaconda, blue poison dart frog and Victoria
crowned pigeon. Only the three viper facts are still waiting, held back because
usable reference photos of the species are hard to come by: the nasal horns are
the identifying feature and generated images keep getting them wrong.

The photo is not optional here. It is the entire interaction, and a promoted
fact whose image never lands renders as dead text in a list where every
neighbour opens a picture. Every new fact needs its **own** photo, with no
reuse, including from the Beastfile hero or secondary images already on disk.

---

## Images needed

Fifteen photos, all landscape, all to `public/assets/facts/`.

| Fact | Animal | Filename |
|---|---|---|
| 257 | Fennec Fox | `fennec-fox.jpg` |
| 258 | Fennec Fox | `fennec-fox-2.jpg` |
| 259 | Fennec Fox | `fennec-fox-3.jpg` |
| 260 | Gaboon Viper | `gaboon-viper.jpg` |
| 261 | Gaboon Viper | `gaboon-viper-2.jpg` |
| 262 | Gaboon Viper | `gaboon-viper-3.jpg` |
| 263 | Green Anaconda | `green-anaconda.jpg` |
| 264 | Green Anaconda | `green-anaconda-2.jpg` |
| 265 | Green Anaconda | `green-anaconda-3.jpg` |
| 266 | Blue Poison Dart Frog | `blue-poison-dart-frog.jpg` |
| 267 | Blue Poison Dart Frog | `blue-poison-dart-frog-2.jpg` |
| 268 | Blue Poison Dart Frog | `blue-poison-dart-frog-3.jpg` |
| 269 | Victoria Crowned Pigeon | `victoria-crowned-pigeon.jpg` |
| 270 | Victoria Crowned Pigeon | `victoria-crowned-pigeon-2.jpg` |
| 271 | Victoria Crowned Pigeon | `victoria-crowned-pigeon-3.jpg` |

IDs are provisional. If facts land from another batch first, shift these up and
keep them contiguous. Never reuse a retired id.

---

## Fennec Fox

Category `Mammals`, emoji 🦊.

### 257. Ears That Work as Radiators

> A fennec's ears run to about 15 centimetres on an animal that weighs under
> two kilograms, the largest ears relative to body size of any carnivore. They
> are not only for listening. They carry a dense network of shallow blood
> vessels, and the fox dumps heat through them into the air, which lets it hold
> its temperature down without panting away water it cannot spare. The hearing
> is real too: a fennec can track insects and small rodents moving under the
> sand and dig straight down onto them.

**Photo:** A fennec fox in profile on pale desert sand, both ears fully upright
and catching light from behind so the vessels in the thin skin are visible.
Sandy cream coat, dark eyes, small black nose tip. Warm low sun.
*Accuracy:* cream to pale sand coat, never orange or red like a red fox. Ears
enormous relative to the head. Body small, roughly cat-sized.

### 258. It Can Live Without Drinking

> A fennec can go its whole life without drinking free water. It takes moisture
> from what it eats, and its kidneys concentrate urine far enough to keep the
> loss on the other side very small. Burrowing does the rest, since the air
> down in the den stays cooler and far more humid than the surface. Given water
> a fennec will drink it, but in most of its range there is nothing to drink.

**Photo:** A fennec fox at the mouth of a burrow in sand, front paws on the
edge, head and shoulders out, sand thrown up in a fan behind the entrance.
*Accuracy:* the burrow entrance should read as dug into loose sand, not rock.

### 259. Fur on the Soles of Its Feet

> The undersides of a fennec's feet are covered in thick fur, right over the
> pads. It works as insulation on sand hot enough to burn an unprotected foot,
> and it spreads the animal's weight so it can move across loose surface
> without sinking. The same feet dig fast. A fennec can put itself out of sight
> underground in a few seconds, and dens often run several metres with more
> than one way out.

**Photo:** Close view of a fennec fox lying down with one front paw turned so
the furred underside of the foot is visible. Shallow depth of field, sand
behind.
*Accuracy:* fur should cover the pads, not sit between the toes only.

---

## Gaboon Viper

Category `Reptiles`, emoji 🐍.

### 260. The Longest Fangs of Any Snake

> A Gaboon viper's fangs reach around five centimetres, longer than any other
> snake's, folded back against the roof of the mouth until the strike swings
> them forward. It also delivers more venom per bite than almost anything else,
> a function of simply being a very large-headed, heavy-bodied snake. The venom
> is not the most potent by weight. The dose is what makes it serious.

**Photo:** A Gaboon viper with mouth open and fangs extended, head three
quarters on, showing the broad triangular head and the pattern down the neck.
*Accuracy:* two small horns between the nostrils. Head very broad and flat,
almost leaf-shaped. Pattern of interlocking brown, cream and purple-grey
rectangles and triangles.

### 261. It Bites and Holds On

> Most vipers strike, inject and let go, then track the animal down once the
> venom has worked. The Gaboon viper often does not let go. It bites and keeps
> hold, which for an ambush predator on a forest floor means prey is less
> likely to stagger off somewhere it cannot follow. The same behaviour is what
> makes a bite on a person so much worse than the fang length alone suggests.

**Photo:** A Gaboon viper coiled loosely in rainforest leaf litter, head raised
slightly, body in a natural resting arrangement.
*Accuracy:* loose natural coils, never a tidy circle or spiral. The first
attempt at this animal's Beastfile hero was rejected for exactly that.

### 262. It Moves in a Straight Line

> A Gaboon viper is heavy enough that the side-to-side motion most snakes use
> works badly for it, so it travels in a straight line instead, driving itself
> forward with the belly scales in slow waves. The effect is closer to a
> caterpillar than a snake. It is unhurried and almost silent, which suits an
> animal whose entire strategy is to be somewhere prey does not expect and to
> have been there for a long time already.

**Photo:** A Gaboon viper moving across open forest floor, body largely
straight, shot low and from the side so the belly scales are visible.
*Accuracy:* body straight or very gently curved, not in S-bends.

---

## Green Anaconda

Category `Reptiles`, emoji 🐍.

### 263. Heaviest, Not Longest

> The green anaconda is the heaviest snake alive and routinely gets called the
> biggest, which is only half right. Reticulated pythons grow longer, past
> seven metres, but an anaconda is built on a completely different scale of
> thickness and can pass 100 kilograms where a python of similar length is
> nowhere near it. Reliable measurements are rarer than the stories suggest.
> Claims above nine metres have circulated for over a century without one being
> confirmed.

**Photo:** A green anaconda's thick body in a slow curve across shallow water
and floating vegetation, head visible at one end for scale.
*Accuracy:* olive green with round to oval black blotches, and a distinct
orange-yellow stripe pattern on the side of the head. Body noticeably thick.

### 264. Constriction Is About Blood, Not Bones

> The old description of constriction is that the snake crushes its prey or
> suffocates it. Measurements on constricting snakes point somewhere else: the
> pressure a large constrictor applies is enough to stop blood circulating, and
> circulatory arrest kills far faster than suffocation would. The snake
> tightens as its prey breathes out, so each exhalation gives away a little
> more room and never gets it back.

**Photo:** A green anaconda with its body wrapped in overlapping coils around a
submerged log or branch at a river edge, coils clearly under tension.
*Accuracy:* no prey animal in frame. Coils overlapping and gripping, not draped.

### 265. It Gives Birth, It Does Not Lay Eggs

> Anacondas are viviparous. Females carry their young internally and give birth
> to live snakes, often twenty to forty at a time, each already around half a
> metre long and able to swim and hunt immediately. There is no parental care
> after that. Females are also far larger than males, which is unusual enough
> among snakes to be worth saying plainly: a big female can be several times
> the weight of any male she breeds with.

**Photo:** A juvenile green anaconda swimming at the surface of dark water,
head above the waterline, body trailing in a curve behind it.
*Accuracy:* juveniles carry the same olive and black blotch pattern as adults,
just smaller and often brighter.

---

## Blue Poison Dart Frog

Category `Weird & Wonderful`, emoji 🐸.

### 266. It Is Not a Separate Species

> The blue poison dart frog is one of the most photographed frogs on Earth and
> it is not its own species. It is a colour morph of *Dendrobates tinctorius*,
> a widespread South American frog whose populations look startlingly different
> from one patch of forest to the next. The blue form comes from isolated
> forest islands in southern Suriname, cut off in savannah, and the name
> *azureus* it was given as a species is now treated as one of those local
> forms rather than a species boundary.

**Photo:** A blue poison dart frog on a wet dark leaf, whole animal in frame,
shot slightly above eye level.
*Accuracy:* sky blue to deep blue body with darker blue or black spots, legs a
deeper blue than the back. Not turquoise. Not uniformly coloured.

### 267. Captive Ones Are Harmless

> These frogs do not make their toxins. They accumulate them from what they eat
> in the wild, mainly mites and ants carrying alkaloids of their own, and
> concentrate the compounds in glands in the skin. Take that diet away and the
> toxicity goes with it. Captive-bred frogs raised on fruit flies and
> springtails are effectively non-toxic, which is why keeping one is possible
> at all and why a wild-caught animal is a completely different proposition.

**Photo:** A blue poison dart frog on a moss-covered branch in dense green
foliage, with visible moisture on the skin.
*Accuracy:* skin should look wet and slightly glossy, never dry or matte.

### 268. The Poison Dart Name Is Borrowed

> Around 170 species get called poison dart frogs and only three were ever used
> that way, all in the genus *Phyllobates*, in a small area of western
> Colombia. Hunters wiped a dart tip across a frog's back and the coating
> stayed effective for months. Everything else in the family inherited the name
> by association, including this one, which has never had anything to do with a
> dart.

**Photo:** Two blue poison dart frogs on a leaf litter floor with one in
sharper focus, forest floor debris around them.
*Accuracy:* pattern of spots differs between individuals, so the two frogs
should not be identical.

---

## Victoria Crowned Pigeon

Category `Birds`, emoji 🕊️.

### 269. A Pigeon the Size of a Turkey

> The Victoria crowned pigeon is the largest pigeon in the world, around 75
> centimetres long and up to roughly 2.5 kilograms, which is to say a pigeon
> you would notice from across a field. It is blue-grey with a maroon breast, a
> deep red eye, and a fan of crest feathers standing upright on its head. It
> spends nearly all of its time walking the forest floor of northern New
> Guinea, and flies up mainly to roost or to get away from something.

**Photo:** A Victoria crowned pigeon standing on a rainforest floor in full
profile, crest upright, whole bird in frame.
*Accuracy:* blue-grey body, maroon-red breast patch, red iris, and a crest of
open lacy feathers each tipped white. The crest is not a solid fan and not a
crown of spikes.

### 270. The Crest Is Lace, Not Spikes

> Up close the crown is not the stiff fan it looks like at distance. Each feather
> in it has a bare shaft for most of its length and opens into a small
> triangular tip of white barbs at the end, so the whole crest reads as an open
> mesh with a dotted white edge. Two other crowned pigeon species carry their
> own versions, and the white tips are the quickest way to tell this one apart
> from them.

**Photo:** Head and shoulders portrait of a Victoria crowned pigeon against a
dark background, crest sharply in focus.
*Accuracy:* white tips at the end of each crest feather are the identifying
detail and must be visible. Blue-grey face, red iris with a darker mask through
the eye.

### 271. Both Parents Make Milk

> Pigeons feed their chicks on crop milk, a thick protein and fat rich
> secretion produced by cells lining the crop, and both the male and the female
> make it. It is not milk in any mammalian sense and contains no lactose, but
> it does the same job, and a crowned pigeon chick lives on nothing else for
> its first days. Pairs usually raise a single chick, and both birds sit the
> egg, the male through the day and the female overnight.

**Photo:** A Victoria crowned pigeon on a large stick nest in the fork of a
tree, seen from slightly below through foliage.
*Accuracy:* nest is a loose platform of sticks, not a cup.

---

## Promoting a fact once its photo exists

1. Drop the photo into `public/assets/facts/` under the filename in the table.
2. Append the fact to `src/lib/data/facts.js` with the id, title, emoji, animal,
   category and text above. Keep ids contiguous and never renumber.
3. Add the id to `FACT_IMAGES` in **both** `src/lib/data/factImages.js` and
   `public/_worker.js`. The worker cannot import the module, and it is what
   drives `og:image`, so the two copies are synced by hand.
4. `node scripts/generate-thumbnails.js`
5. `node scripts/generate-beastlypedia-index.js`

Step 5 is what moves the Beastfile off its authored fallback. The script prints
which Beastfiles still have no facts, so the list at the top of this file is
whatever that line says.

A note on matching: facts are matched to a Beastfile by animal name, case
insensitively. Where a Beastfile's own name differs from the name used in
`facts.js`, the Beastfile carries a `factAnimal` field. The manta ray and the
panther chameleon both do.

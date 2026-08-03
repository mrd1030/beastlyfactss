# Beastlypedia fact gaps

Beastfile pages pull their Fun Facts straight from the fact database, and each
one opens its photo in a lightbox when clicked. Fifteen of the sixteen
Beastfiles have real facts to pull.

**One does not: the Gaboon viper.** That page falls back to the short `funFacts`
strings written into the Beastfile data, which are plain text with no photo
behind them.

The three facts below are written and ready. They are held back because usable
reference photos of the species are hard to come by: the nasal horns are the
identifying feature and generated images keep getting them wrong.

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

## Images needed

Three photos, landscape, to `public/assets/facts/`.

| Fact | Filename |
|---|---|
| The Longest Fangs of Any Snake | `gaboon-viper.jpg` |
| It Bites and Holds On | `gaboon-viper-2.jpg` |
| It Moves in a Straight Line | `gaboon-viper-3.jpg` |

Ids are assigned at promotion time from the end of the current range, not
reserved here. The last published id is **273** (mudskipper, 2026-08-03), so
these would be 274 to 276 unless another batch lands first.

`IwmgK.jpg` in the site owner's Downloads as of 2026-08-03 is a usable Gaboon
viper frame, head-on in leaf litter with the nasal horns clearly visible. It is
a candidate for one of the three.

---

## Gaboon Viper

Category `Reptiles`, emoji 🐍.

### The Longest Fangs of Any Snake

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

### It Bites and Holds On

> Most vipers strike, inject and let go, then track the animal down once the
> venom has worked. The Gaboon viper often does not let go. It bites and keeps
> hold, which for an ambush predator on a forest floor means prey is less
> likely to stagger off somewhere it cannot follow. The same behaviour is what
> makes a bite on a person so much worse than the fang length alone suggests.

**Photo:** A Gaboon viper coiled loosely in rainforest leaf litter, head raised
slightly, body in a natural resting arrangement.
*Accuracy:* loose natural coils, never a tidy circle or spiral. The first
attempt at this animal's Beastfile hero was rejected for exactly that.

### It Moves in a Straight Line

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

## Promoting a fact once its photo exists

1. Drop the photo into `public/assets/facts/` under the filename in the table.
2. Append the fact to `src/lib/data/facts.js` with the next free id, title,
   emoji, animal, category and text. Keep ids contiguous and never renumber.
3. Add the id to `FACT_IMAGES` in **both** `src/lib/data/factImages.js` and
   `public/_worker.js`. The worker cannot import the module, and it is what
   drives `og:image`, so the two copies are synced by hand.
4. `node scripts/generate-thumbnails.js`
5. `node scripts/generate-beastlypedia-index.js`
6. Delete the fact from this file.

Step 5 is what moves the Beastfile off its authored fallback. The script prints
which Beastfiles still have no facts, so the list at the top of this file is
whatever that line says.

A note on matching: facts are matched to a Beastfile by animal name, case
insensitively. Where a Beastfile's own name differs from the name used in
`facts.js`, the Beastfile carries a `factAnimal` field. The manta ray and the
panther chameleon both do.

## Shipped from this file

**2026-08-03, ids 257 to 268.** Fennec fox, green anaconda, blue poison dart
frog and Victoria crowned pigeon, three facts each. Their text now lives only in
`facts.js`.

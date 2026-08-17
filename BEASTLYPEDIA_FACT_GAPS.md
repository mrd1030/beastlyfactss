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
6. Delete the fact from this file.

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

## Shipped from this file

**2026-08-12, ids 282 to 286.** Two more Shima Enaga facts (extending the Fun
Facts gallery beyond id 281) and all three Gaboon viper facts, which moves
that Beastfile off its authored `funFacts` fallback. Also shipped the Gaboon
viper Wild Animals article once its header photo landed. Text now lives only
in `facts.js` (and the article, in `content/guides/`).

**2026-08-03, ids 257 to 268.** Fennec fox, green anaconda, blue poison dart
frog and Victoria crowned pigeon, three facts each. Their text now lives only in
`facts.js`.

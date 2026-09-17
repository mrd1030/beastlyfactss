# Beastlypedia growth plan

**Refreshed 2026-09-17.** The earlier version of this file described a site with
sixteen Beastfiles; there are 42. Numbers below are recomputed from
`src/lib/data/beastlypedia/*.js` and the generated index.

## Where it stands

| | Count |
|---|---|
| Beastfiles | 42 |
| Rendering no Related Files section | 10 |
| Still on authored `funFacts` instead of database facts | 1 (serval) |
| Carrying a secondary image | 42 |
| Carrying an `encyclopediaId` | 1 |

The fact gap is effectively closed. Every Beastfile but the serval now pulls
real facts with photos, which was the original point of Route A.

## The ten with no Related Files

None of these has a Wild Animals article, which is the only category
`RelatedFiles.jsx` will surface. Each needs one written.

fennec fox, capybara, aye-aye, serval, thorny devil, blue poison dart frog,
shoebill, Victoria crowned pigeon, manta ray, leafy sea dragon.

## Route A: animals with photographed facts and no Beastfile

Still the cheaper direction: the facts and photos already exist, so a Beastfile
lands with linked Fun Facts on day one and needs only a hero. Animals with three
or more photographed facts and no Beastfile:

| Animal | Photographed facts |
|---|---|
| Wood Frog | 6 |
| Chicken | 5 |
| Naked Mole Rat | 5 |
| Dung Beetle | 4 |
| Honeybee | 3 |
| Tardigrade | 3 |

Cat, dog, parrot and bearded dragon also clear that bar and are deliberately
excluded: Beastlypedia is the no-husbandry section and those are care-guide
species.

## Route B: articles for the ten bare Beastfiles

The only thing that fixes the ten above, and the more expensive direction: a
researched Wild Animals article each, plus its hero image.


- MDX in `content/guides/`, frontmatter copied from
  `giraffe-heart-myth-what-the-research-shows.mdx`.
- `category: "Wild Animals"` and `categories: ["Wild Animals"]`. This matters:
  `RelatedFiles.jsx` refuses the care categories outright, so a Beastfile can
  never surface a piece filed under Reptiles, Birds, Amphibians or Fish.
- Hero image at `public/assets/images/<slug>.jpg`.
- All SEO titles above stay under 70 characters with the site suffix appended.

---

## House style

No em dashes or en dashes anywhere.

**US spelling in the prose, British variants in the keywording.** Body copy says
"color"; the `tags` array carries both, so a British search still lands. Same
for behavior/behaviour and defense/defence.

The corpus is not uniformly US, though. It is word by word, so check rather than
assume:

| Prefer | Over | Corpus count |
|---|---|---|
| color | colour | 211 to 1 |
| behavior | behaviour | 492 to 25 |
| defense | defence | 74 to 6 |
| recognize | recognise | 69 to 6 |
| **grey** | gray | **203 to 25**, the British form wins |
| metre / meter | either | 12 to 14, genuinely split, leave alone |

I had written 24 instances against the first four in `facts.js` and the
Beastfile data. Those are fixed. `grey` and `metre` were deliberately left.

---

---

## After anything lands

1. Add the slug to that Beastfile's `relatedFiles`, or create the Beastfile.
2. `node scripts/generate-beastlypedia-index.js`
3. Confirm Related Files and Fun Facts both render.

A separate gap worth doing alongside: only the axolotl carries an
`encyclopediaId`, and nothing in the Encyclopedia links back to Beastlypedia at
all. Every cross-link is currently one way.

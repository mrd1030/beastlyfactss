# Needs Image

The live queue for images that are blocked or drafted and not yet on disk. Open
items only. **Finished work does not stay here**: once a batch lands it is
recorded in `archive/docs-completed/NEEDS_IMAGE_COMPLETED_2026-09-17.md` and
removed from this file, which is the only place that history lives.

## Open right now

**One guide hero, and it is on a deadline.** `world-animal-day.mdx` is written,
voice clean and committed on `claude/site-content-expansion-qnynio`. It cannot
ship until its hero lands, because `check-images.mjs` runs at the front of
`build` and fails the deploy on a missing source image. That is the safe
failure, but it means nothing in the October cluster goes live without it.

The awareness-days calendar no longer needs a hero: it became the
`/animal-days/` page rather than a blog article, and that route uses the
default OG image like every other listing page.

Every fact on the site still resolves its own photo, 328 of 328, none shared.

## Guide heroes still needed

3:2 at 1168x784, mozjpeg quality 80. Prompt is in `IMAGE_PROMPTS.md` under
"Animal awareness days, 2026-09-22".

| File | Article | Wanted by |
|---|---|---|
| `/assets/images/world-animal-day.jpg` | `world-animal-day.mdx` | before 2026-10-04 |

The eight wrong-species replacements landed 2026-09-12 alongside the federal law
guide hero, the fourteen legal-guide heroes on 2026-09-11, and the nine
feeding-guide heroes on 2026-09-09.

## Facts awaiting images

## 2026-09-21 run: 5 facts drafted, awaiting images

Ready for the site owner to generate photos and add to facts.js.

1. **Hoatzin** (Birds) - Wing Claws at Birth. Hoatzin chicks hatch with two working claws on each wing, letting them climb back to the nest if they fall or dive into the water below to escape a predator. The claws disappear as the bird matures. Adults are nicknamed the stinkbird because they digest leaves through slow bacterial fermentation in an oversized crop, the same trick a cow's stomach uses, and it takes up to 45 hours. Visual hook: a fuzzy hoatzin chick clinging to a branch with visible claws on its wingtips, muddy river background.
2. **Norwegian Lundehund** (Dogs & Cats) - Six Toed Cliff Climber. The Norwegian Lundehund has at least six toes on each foot, extra joints in its shoulders, and neck vertebrae flexible enough to bend its head backward until it touches its own spine. The breed evolved these features to squeeze into narrow crevices and climb steep coastal cliffs hunting puffins. Visual hook: a small Lundehund dog on a rocky sea cliff with its front paw raised showing extra toes, puffins nearby.
3. **Numbat** (Mammals) - The Termite Marathon. A numbat eats between 15,000 and 20,000 termites a day, using a tongue that stretches about 10 centimeters to reach deep into their tunnels. Unlike most Australian marsupials, numbats are active during daylight hours, timing their hunts to when termites are moving near the surface. Visual hook: a numbat with its long tongue extended into a termite mound, striped back visible in dappled forest light.
4. **Yeti Crab** (Ocean) - Farms On Its Own Arms. The yeti crab grows bacteria on the dense, hair like bristles covering its claws, then combs them off with its mouthparts to eat. It waves its claws to stir the water around the bacteria, keeping fresh oxygen and chemicals flowing so its food keeps growing. Species have been found near deep sea methane seeps and hydrothermal vents. Visual hook: a pale, shaggy clawed yeti crab waving its bristled arms near a deep sea vent, illuminated by submersible lights.
5. **Marine Iguana** (Reptiles) - Sneezes Out Salt. The marine iguana is the only lizard in the world that forages in the ocean, diving to eat algae off rocks. Its diet packs in so much salt that a gland above its eyes filters it straight out of the bloodstream, and the iguana clears it with a sudden sneeze, sometimes leaving a crust of salt crystals on its snout. Visual hook: a marine iguana on black volcanic rock mid sneeze, a small spray of salt visible near its snout, ocean waves behind.

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

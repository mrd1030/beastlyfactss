# Needs Image

The live queue for images that are blocked or drafted and not yet on disk. Open
items only. **Finished work does not stay here**: once a batch lands it is
recorded in `archive/docs-completed/NEEDS_IMAGE_COMPLETED_2026-09-17.md` and
removed from this file, which is the only place that history lives.

## Open right now

**Nothing.** As of 2026-09-28 every guide hero is on disk and every fact on the
site resolves its own photo, 341 of 341, none shared between two facts.

The five October heroes and the five parked facts all landed the same day.
`check-images.mjs` passes on 1,674 referenced paths.

## Guide heroes still needed

**Sea otter, 2026-09-28.** Three images, all 3:2 at 1168x784 except the
portrait secondary. Prompts under "Sea otter, 2026-09-28" in `IMAGE_PROMPTS.md`.

| Image | Path |
|---|---|
| Beastfile hero | `/assets/beastlypedia/sea-otter-hero.jpg` |
| Beastfile secondary (portrait) | `/assets/beastlypedia/sea-otter-secondary.jpg` |
| Article hero | `/assets/images/sea-otters-salt-marsh-erosion-elkhorn-slough.jpg` |

To ship once all three land: delete `draft: true` from the `sea-otter` entry in
`src/lib/data/beastlypedia/marine.js`; rename
`content/guides/sea-otters-salt-marsh-erosion-elkhorn-slough.mdx.draft` to
`.mdx` and set its `date`, `lastUpdated` and `lastReviewed` to the ship day;
then `node scripts/sync-articles.js`, `node scripts/check-rotation.mjs
--assign`, `node scripts/generate-beastlypedia-index.js`. The two go live
together: the article links the Beastfile and the Beastfile lists the article.

Otherwise none. The five October heroes (world animal day, octopus, sloth, reptile
awareness, wombat) arrived at 1168x784 exactly, so nothing was resized and
nothing was enlarged.

The eight wrong-species replacements landed 2026-09-12 alongside the federal law
guide hero, the fourteen legal-guide heroes on 2026-09-11, and the nine
feeding-guide heroes on 2026-09-09.

## Facts awaiting images

**Sea otter, "Pockets Under the Arms"** → `/assets/facts/sea-otter-3.jpg`.
Animal "Sea Otter", category "Ocean", emoji 🦦. Third fact for the sea otter
Beastfile; promote with the Beastfile or before it. Prompt under "Sea otter
pocket fact" in `IMAGE_PROMPTS.md`.

> A sea otter carries its own shopping bag. A loose patch of skin under each
> forearm works as a pocket, so on a single dive it can collect several clams
> or urchins, tuck them away and bring the whole haul to the surface, where it
> eats floating on its back.

Sources: US Fish and Wildlife Service, southern sea otter
(fws.gov/species/southern-sea-otter-enhydra-lutris-nereis), and Monterey Bay
Aquarium, sea otter.

**Otherwise none.** The 2026-09-27 run of five and the 2026-09-28 serval run of three were
promoted on 2026-09-28 as ids 334 to 341, recorded in
`archive/docs-completed/NEEDS_IMAGE_COMPLETED_2026-09-17.md`.

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

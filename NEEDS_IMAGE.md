# Needs Image

The live queue for images that are blocked or drafted and not yet on disk. Open
items only. **Finished work does not stay here**: once a batch lands it is
recorded in `archive/docs-completed/NEEDS_IMAGE_COMPLETED_2026-09-17.md` and
removed from this file, which is the only place that history lives.

## Open right now

**The 12 repeated photos below (found 2026-10-04).** As of 2026-09-28 every guide hero is on disk and every fact on the
site resolves its own photo, 342 of 342, none shared between two facts.

The five October heroes and the five parked facts all landed the same day.
`check-images.mjs` passes on 1,674 referenced paths.

## Repeated photos (found 2026-10-04)

Owner rule, 2026-10-04: one source photo appears once across the site, the packages and the books. Allowed exceptions: Beastle and the store's package cards may show a photo already on the site; a fact photo may be a Beastlypedia entry's secondary image (never its head); and an animal's care guide hub and encyclopedia entry are one page with a toggle, so they share one photo. Each image below is shown in another slot too; keep it in one slot and give the other its own new photo (free-licensed photos may be sourced under the photo rule in CLAUDE.md, shown to the owner first). Regenerate with `python tools/image-audit/find_repeats.py`; the site-wide og-default.jpg share image is not counted.

### A fact uses the animal's hub and encyclopedia head photo (7)

- [ ] `/assets/guides/ball-python.jpg`: fact, hub and encyclopedia page (snakes)
- [ ] `/assets/guides/bearded-dragon.jpg`: fact, hub and encyclopedia page (lizards)
- [ ] `/assets/guides/crested-gecko.jpg`: fact, hub and encyclopedia page (geckos)
- [ ] `/assets/guides/guinea-pig.jpg`: fact, hub and encyclopedia page (smallMammals)
- [ ] `/assets/guides/hedgehog.jpg`: fact, hub and encyclopedia page (smallMammals)
- [ ] `/assets/guides/leopard-gecko.jpg`: fact, hub and encyclopedia page (geckos)
- [ ] `/assets/guides/rabbit.jpg`: fact, hub and encyclopedia page (smallMammals)

### A fact photo is also a fun-facts article photo (4)

- [ ] `/assets/images/fun-facts-axolotl.jpg`: article 10-surprising-axolotl-facts, fact
- [ ] `/assets/images/fun-facts-boa-constrictor.jpg`: article 10-surprising-boa-constrictor-facts, fact
- [ ] `/assets/images/fun-facts-cuttlefish.jpg`: article fun-facts-cuttlefish, fact
- [ ] `/assets/images/fun-facts-octopus.jpg`: article fun-facts-octopus, fact

### One hero across the legal pages (1)

- [ ] `/assets/guides/exotic-pet-legal-hub.jpg`: article exotic-pet-legal-hub, page ExoticPetLaws, page ExoticPetLawsHub, page ExoticPetLawsState, page ExoticPetLawsStateIndex

## Guide heroes still needed

None. The five October heroes (world animal day, octopus, sloth, reptile
awareness, wombat) arrived at 1168x784 exactly, so nothing was resized and
nothing was enlarged.

The eight wrong-species replacements landed 2026-09-12 alongside the federal law
guide hero, the fourteen legal-guide heroes on 2026-09-11, and the nine
feeding-guide heroes on 2026-09-09.

## Facts awaiting images

**None.** The 2026-09-27 run of five and the 2026-09-28 serval run of three were
promoted on 2026-09-28 as ids 334 to 341, and the sea otter pocket fact as 342, recorded in
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

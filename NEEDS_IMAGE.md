# Needs Image

The live queue for images that are blocked or drafted and not yet on disk. Open
items only. **Finished work does not stay here**: once a batch lands it is
recorded in `archive/docs-completed/NEEDS_IMAGE_COMPLETED_2026-09-17.md` and
removed from this file, which is the only place that history lives.

## Open right now

**Nothing.** As of 2026-09-22 every guide hero is on disk and every fact on the
site resolves its own photo, 333 of 333, none shared between two facts.

The five October heroes and the five parked facts all landed the same day.
`check-images.mjs` passes on 1,674 referenced paths.

## Guide heroes still needed

None. The five October heroes (world animal day, octopus, sloth, reptile
awareness, wombat) arrived at 1168x784 exactly, so nothing was resized and
nothing was enlarged.

The eight wrong-species replacements landed 2026-09-12 alongside the federal law
guide hero, the fourteen legal-guide heroes on 2026-09-11, and the nine
feeding-guide heroes on 2026-09-09.

## Facts awaiting images

## 2026-09-27 run: 5 facts drafted, awaiting images

Ready for the site owner to generate photos and add to facts.js. Prompts are
written, one per fact, under "Facts awaiting photos, 2026-09-27 run" in
`IMAGE_PROMPTS.md`, with the filename each photo installs as:
`tasmanian-devil.jpg`, `shiba-inu.jpg`, `frilled-shark.jpg`, `matamata.jpg`,
`potoo.jpg`, all under `/assets/facts/`.

1. **Tasmanian Devil** (Mammals) - Biggest Bite, Smallest Body. Tasmanian devils have the strongest bite force relative to body size of any living mammal, with a bite force quotient higher than lions or tigers. They crunch through entire carcasses, bones, fur and all, which wears their teeth down to blunt nubs over a lifetime. Visual hook: a Tasmanian devil's jaws clamped on a bone, teeth visibly worn down.
2. **Shiba Inu** (Dogs & Cats) - The Shiba Scream. Shiba Inus are famous for the Shiba scream, a piercing, high-pitched shriek most owners hear during nail trims, baths, or vet visits. Despite the drama, the breed grooms itself like a cat, licking its paws and coat clean, and stays notably low odor for a dog. Visual hook: a Shiba Inu mid scream during a nail trim, ears pinned back.
3. **Frilled Shark** (Ocean) - Three and a Half Year Wait. Frilled sharks stay pregnant for up to 42 months, the longest known gestation of any vertebrate. Their eel-like body and roughly 300 trident-shaped teeth arranged in 25 rows have earned them living fossil status, largely unchanged for tens of millions of years. Visual hook: a frilled shark's eel-like body and open trident-toothed jaw in dark water.
4. **Matamata Turtle** (Reptiles) - Sucks First, Asks Later. The matamata's flat, ridged shell and bark-like skin flaps make it nearly invisible on a muddy riverbed. Its jaws are too weak to chew, so it snaps its mouth open in a flash, creating a vacuum that sucks in fish and water together, then swallows its prey whole. Visual hook: a matamata turtle's leaf-shaped, bark-textured head camouflaged among riverbed leaves.
5. **Potoo** (Birds) - Sleeping With Eyes Open. By day, potoos perch upright and hold still, looking exactly like a broken tree stump. Tiny notches in their eyelids stay open even when the eyes are shut, letting them watch for danger while looking fast asleep, and at night their call is a haunting, drawn out wail some describe as poor me one. Visual hook: a potoo perched upright at dusk, eyes barely open, blending into a broken branch.

**None older.** The 2026-09-21 run of five (Hoatzin, Norwegian Lundehund, Numbat,
Yeti Crab, Marine Iguana) was promoted on 2026-09-22 as ids 329 to 333. The
batch is recorded in `archive/docs-completed/NEEDS_IMAGE_COMPLETED_2026-09-17.md`.

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

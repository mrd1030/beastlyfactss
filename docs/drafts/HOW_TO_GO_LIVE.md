# How to put grok/batch-d-encyc-voice on the live site

Branch tip after this doc: latest commit on `grok/batch-d-encyc-voice`.
All MDX voice work and all draft objects are already committed there.
Nothing else is waiting to be pushed from this session.

## What splicing means

Hubs and encyclopedia entries live inside one big array per class
(lizards.js, smallMammals.js, and so on). You cannot add a new file
for one animal. You replace that animal's existing object in the array
with the new object, leave every other animal alone, and save.

Open the destination file. Search for `id: "rat"` (or whichever id).
Select from the `{` that opens that animal to the `},` that closes it.
Paste the draft object in its place. Do not add a second copy. Do not
delete the neighbor animals.

## 1. Pull the branch on a computer

```
git fetch origin
git checkout grok/batch-d-encyc-voice
git pull origin grok/batch-d-encyc-voice
```

## 2. Already live once you merge (no splice)

These MDX files are already updated on the branch. Merging the branch
publishes them.

Tank / handling / health (and some cost / feeding / enrichment):

- rat-tank-setup-guide, rat-handling-guide, rat-health-issues-guide,
  rat-cost-guide, rat-enrichment-guide
- red-eared-slider-tank-setup-guide, red-eared-slider-handling-guide,
  red-eared-slider-health-issues-guide, red-eared-slider-cost-guide,
  red-eared-slider-feeding-guide
- guppy-tank-setup-guide, guppy-handling-guide, guppy-feeding-guide,
  guppy-cost-guide
- blue-tongue-skink-tank-setup-guide, blue-tongue-skink-handling-guide,
  blue-tongue-skink-health-issues-guide
- hognose-snake-tank-setup-guide, hognose-snake-handling-guide
- whites-tree-frog-tank-setup-guide
- pacman-frog-tank-setup-guide, pacman-frog-handling-guide,
  pacman-frog-health-issues-guide
- tarantula-tank-setup-guide
- hermit-crab-cost-guide
- plus earlier conure / iguana / hedgehog / A-B-C feeding files already
  on this branch

Do not merge legal guides. They were never edited here.

## 3. Splice the hubs (guide pages)

Draft -> destination file -> search id

| Draft | Put it in | Find |
| --- | --- | --- |
| docs/drafts/hedgehog-hub.object.js | src/lib/data/guides/smallMammals.js | id: "hedgehog" |
| docs/drafts/rat-hub.object.js | src/lib/data/guides/smallMammals.js | id: "rat" |
| docs/drafts/green-iguana-hub.object.js | src/lib/data/guides/lizards.js | id: "green-iguana" |
| docs/drafts/blue-tongue-skink-hub.object.js | src/lib/data/guides/lizards.js | id: "blue-tongue-skink" |
| docs/drafts/leopard-gecko-hub.object.js | src/lib/data/guides/lizards.js | id: "leopard-gecko" |
| docs/drafts/conure-hub.object.js | src/lib/data/guides/birds.js | id: "conure" |
| docs/drafts/hermit-crab-hub.object.js | src/lib/data/guides/invertebrates.js | id: "hermit-crab" |
| docs/drafts/tarantula-hub.object.js | src/lib/data/guides/invertebrates.js | id: "tarantula" |
| docs/drafts/guppy-hub.object.js | src/lib/data/guides/fish.js | id: "guppy" |
| docs/drafts/red-eared-slider-hub.object.js | src/lib/data/guides/turtles.js | id: "red-eared-slider" |
| docs/drafts/hognose-snake-hub.object.js | src/lib/data/guides/snakes.js | id: "hognose-snake" |
| docs/drafts/whites-tree-frog-hub.object.js | src/lib/data/guides/amphibians.js | id: "whites-tree-frog" |
| docs/drafts/pacman-frog-hub.object.js | src/lib/data/guides/amphibians.js | id: "pacman-frog" |

If a destination filename is slightly different on disk (for example
`turtlesAndTortoises.js`), search the repo for that `id:` and splice
there. Do not create a second file.

Hermit crab also needs the optional headline in GuideDetail.jsx.
Two-line patch: docs/drafts/GUIDEDETAIL_HEADLINE.md

## 4. Splice the encyclopedias

Same method. Draft -> encyclopedia data file -> same id.

| Draft | Put it in | Find |
| --- | --- | --- |
| docs/drafts/hedgehog-encyclopedia.object.js | src/lib/data/encyclopedia/smallMammals.js | id: "hedgehog" |
| docs/drafts/rat-encyclopedia.object.js | src/lib/data/encyclopedia/smallMammals.js | id: "rat" |
| docs/drafts/green-iguana-encyclopedia.object.js | src/lib/data/encyclopedia/lizards.js | id: "green-iguana" |
| docs/drafts/blue-tongue-skink-encyclopedia.object.js | src/lib/data/encyclopedia/lizards.js | id: "blue-tongue-skink" |
| docs/drafts/leopard-gecko-encyclopedia.object.js | src/lib/data/encyclopedia/lizards.js | id: "leopard-gecko" |
| docs/drafts/hermit-crab-encyclopedia.object.js | src/lib/data/encyclopedia/invertebrates.js | id: "hermit-crab" |
| docs/drafts/tarantula-encyclopedia.object.js | src/lib/data/encyclopedia/invertebrates.js | id: "tarantula" |
| docs/drafts/guppy-encyclopedia.object.js | src/lib/data/encyclopedia/fish.js | id: "guppy" |
| docs/drafts/red-eared-slider-encyclopedia.object.js | src/lib/data/encyclopedia/turtles.js | id: "red-eared-slider" |
| docs/drafts/hognose-snake-encyclopedia.object.js | src/lib/data/encyclopedia/snakes.js | id: "hognose-snake" |
| docs/drafts/whites-tree-frog-encyclopedia.object.js | src/lib/data/encyclopedia/amphibians.js | id: "whites-tree-frog" |
| docs/drafts/pacman-frog-encyclopedia.object.js | src/lib/data/encyclopedia/amphibians.js | id: "pacman-frog" |

Conure encyclopedia is already spliced on this branch in
src/lib/data/encyclopedia/birds.js if that commit is present. If you
still see the old overview, splice from the conure draft in
artifacts/batch-d-conure/ or leave birds.js as the branch has it.

Quiz extras need src/lib/utils/generateAnimalQuiz.js if that file is
on the branch. If it is, leave it. If main does not have the extra
`animal.quiz` append, copy that file from the branch when you merge.

## 5. Smoke check before you merge

- /guides/hermit-crab/ subtitle is "Fix the tank tonight"
- /guides/rat/ first week says 24x24x24 and half-inch bars
- /guides/red-eared-slider/ first week says 75 to 100 gallons
- /guides/guppy/ first week says 10 gallons and the fry plan
- Encyclopedia quiz on conure / hedgehog / iguana still has the extra
  care questions
- No legal guide changed

## 6. Merge when you are at a computer

```
git checkout main
git merge grok/batch-d-encyc-voice
git push origin main
```

Or open a PR from `grok/batch-d-encyc-voice` into `main`.

Add `[CI SKIP]` on the merge commit only if you want to skip the
usual GitHub Action.

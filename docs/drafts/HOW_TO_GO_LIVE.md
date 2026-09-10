# How to put grok/batch-d-encyc-voice on the live site

The branch already has the small files. A few large JS/JSX files still
need a local drop-in because the GitHub upload cap in this session
stops around 100 KB.

## What splicing means

The encyclopedia and hub data live inside one big array per class
(birds.js, lizards.js, smallMammals.js, invertebrates.js). You cannot
add a new file for one animal. You replace that animal's existing
object in the array with the new object, leave every other animal
alone, and save. That replacement is the splice.

Example: open src/lib/data/encyclopedia/birds.js, find `id: "conure"`,
select from the `{` that opens that animal to the `},` that closes it,
paste the new object in its place. Do not add a second conure. Do not
delete lovebird.

## Step by step

1. On your machine:

   git fetch origin
   git checkout grok/batch-d-encyc-voice
   git pull origin grok/batch-d-encyc-voice

2. Already committed on this branch:

   - src/lib/utils/generateAnimalQuiz.js
   - src/lib/data/encyclopedia/birds.js (conure done)
   - content/guides/conure-cost-guide.mdx
   - content/guides/rat-cost-guide.mdx
   - content/guides/rat-enrichment-guide.mdx (centerpiece)
   - content/guides/hermit-crab-cost-guide.mdx
   - docs/drafts/* objects and the hermit emergency card

3. Drop in the local files that did not upload, or splice the objects:

   - artifacts/batch-d-hermit-crab/GuideDetail.jsx -> src/pages/GuideDetail.jsx
   - artifacts/batch-d-hermit-crab/invertebrates.js -> src/lib/data/guides/invertebrates.js
     (or splice only docs/drafts/hermit-crab-emergencyCard.js into the hermit-crab object)
   - artifacts/batch-d-iguana-hedgehog/encyclopedia-lizards.js -> src/lib/data/encyclopedia/lizards.js
   - artifacts/batch-d-iguana-hedgehog/encyclopedia-smallMammals.js -> src/lib/data/encyclopedia/smallMammals.js
     (then splice docs/drafts/rat-encyclopedia.object.js over id: "rat")
   - docs/drafts/hermit-crab-encyclopedia.object.js -> splice into encyclopedia/invertebrates.js

4. Two-line version of the GuideDetail change: docs/drafts/GUIDEDETAIL_HEADLINE.md

5. Smoke check before merge:

   - /encyclopedia/animal/conure/ quiz includes pellet percent and cage size
   - /guides/hermit-crab/ emergency subtitle is Fix the tank tonight
   - /blog/rat-cost-guide/ heading is $250 to $585
   - /blog/hermit-crab-cost-guide/ heading is $85 to $300
   - legal guides untouched

6. Merge when ready:

   git checkout main
   git merge grok/batch-d-encyc-voice
   git push origin main

   Or open a PR from grok/batch-d-encyc-voice into main.

   Add [CI SKIP] on the merge commit only if you want to skip the
   usual GitHub Action.

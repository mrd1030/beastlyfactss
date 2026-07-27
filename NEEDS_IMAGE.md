# Needs Image

Notes on animal facts that were drafted but did NOT make it into `src/lib/data/facts.js` because a verified photo couldn't be secured. These are FYI only, not added to the live data.

## 2026-07-27 run: blocked by network policy, zero facts added

This scheduled run drafted 6 candidate facts and tried to source a real photo for each, but every sourcing path was blocked at the network/infrastructure level, not by content quality. Logging this so it's clear this wasn't a "couldn't find a good photo" situation:

- **Tier 1 (Wikimedia Commons):** All outbound fetches to `en.wikipedia.org`, `commons.wikimedia.org`, and `upload.wikimedia.org` returned 403 (org network policy denial), confirmed via the environment's proxy status endpoint. No Wikipedia page or Commons file could be loaded at all.
- **Tier 2 (Canva fallback):** Canva's MCP tools themselves worked fine (design generation succeeded, and generated images could be previewed inline through the tool response), but downloading the actual exported JPG bytes to disk requires fetching Canva's CDN/export URLs (`media.canva.com`, `export-download.canva.com`), which also returned 403 under the same network policy. There was no way to get real image bytes onto disk to resize/verify/commit.

Candidates that were fact-ready but blocked on the image step:

1. **Toco Toucan** (Birds) — bill thermoregulation / lightweight bone structure fact. A Canva image was generated and visually verified as a single, correct, clean image via the tool preview, but the file itself couldn't be downloaded.
2. **Beagle** (Dogs & Cats) — scent-receptor / USDA "Beagle Brigade" fact.
3. **Red Fox** (Mammals) — widest-distributed wild carnivore / magnetic-north mousing pounce fact.
4. **Giant Manta Ray** (Ocean) — largest brain-to-body ratio of any fish / mirror self-recognition fact.
5. **Frilled-necked Lizard** (Reptiles) — neck frill / bipedal sprint threat display fact.
6. **Slow Loris** (Weird & Wonderful) — only venomous primate fact.

No entries were added to `facts.js`, `public/facts.json`, `_worker.js`, or `factImages.js` this run, since none of these had a downloadable, verified photo. Worth re-running once the environment's network policy allows outbound fetches to Wikimedia/Canva (or once a different image-sourcing path is available), since the facts themselves are ready to go.

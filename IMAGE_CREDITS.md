# Image Credits

Tracks source, author, license, slot and any crop for every photo that came from a free-licensed source such as Wikimedia Commons (mainly in `public/assets/facts/`, plus Beastlypedia images), as opposed to Adobe Stock, AI-generated, Canva-made or owner photos. Allowed licenses (owner, 2026-10-04): CC0, public domain, CC BY, CC BY-SA, and Commons' "copyrighted free use" (any use, commercial included). CC BY and CC BY-SA require visible credit wherever the photo is shown, so every row here must also appear on the site's public credits page, and on a credits page in any PDF or book that uses it; note "cropped" when a photo was cropped. See the photo rule in CLAUDE.md.

| File | Subject | Author | License | Source |
|---|---|---|---|---|
| `flamingo.jpg` | American Flamingo, Clearwater Beach, FL | JeffreyGammon | CC BY 4.0 | [Commons](https://commons.wikimedia.org/wiki/File:American_Flamingo_JG.jpg) |
| `flamingo-2.jpg` | Greater Flamingo pair, Camargue, France | Giles Laurent (gileslaurent.com) | CC BY-SA 4.0 | [Commons](https://commons.wikimedia.org/wiki/File:010_Greater_flamingos_male_and_female_in_the_Camargue_during_mating_season_Photo_by_Giles_Laurent.jpg) |
| `quokka.jpg` | Quokka, Rottnest Island, Australia | Pikuan | CC BY-SA 3.0 | [Commons](https://commons.wikimedia.org/wiki/File:Quokka_at_rottnest_(cropped).jpg) |
| `shoebill.jpg` | Shoebill, Ueno Zoo, Tokyo | Bob Owen | CC BY 2.0 | [Commons](https://commons.wikimedia.org/wiki/File:Balaeniceps_rex_-Ueno_Zoo,_Tokyo,_Japan-8a.jpg) |
| `leafy-sea-dragon.jpg` | Leafy Sea Dragon, Kangaroo Island | James Rosindell | CC BY-SA 4.0 | [Commons](https://commons.wikimedia.org/wiki/File:Leafy_Seadragon_on_Kangaroo_Island.jpg) |
| `thorny-devil.jpg` | Thorny Devil, Great Central Road, WA | Bäras | CC BY-SA 3.0 | [Commons](https://commons.wikimedia.org/wiki/File:Thornydevil.jpg) |
| `glass-frog.jpg` | Glass frog (*Rulyrana susatamai*) | Mauricio Rivera Correa | CC BY-SA 2.5 | [Commons](https://commons.wikimedia.org/wiki/File:Cochranella_susatamai03.jpg) |
| `coconut-crab.jpg` | Coconut Crab, Diego Garcia, Chagos Archipelago | Drew Avery | CC BY 2.0 | [Commons](https://commons.wikimedia.org/wiki/File:Coconut_Crab_Birgus_latro.jpg) |
| `shima-enaga.jpg` | Shima Enaga (long-tailed tit ssp.), Rubeshibe Shrine, Hokkaido | 田頭寛 | CC0 | [Commons](https://commons.wikimedia.org/wiki/File:%E7%95%99%E8%BE%BA%E8%98%82%E7%A5%9E%E7%A4%BE%E3%81%AE%E5%A2%83%E5%86%85%E3%81%AB%E3%81%84%E3%82%8B%E3%82%B7%E3%83%9E%E3%82%A8%E3%83%8A%E3%82%AC.jpg) |
| `shima-enaga-hero.jpg` (beastlypedia) | Shima Enaga, Asahikawa, Hokkaido | Craft GIN | CC0 | [Commons](https://commons.wikimedia.org/wiki/File:%E3%82%B7%E3%83%9E%E3%82%A8%E3%83%8A%E3%82%AC.jpg) |
| `shima-enaga-snow-fairy-facts.jpg` (article) | Shima Enaga, Biei, Hokkaido | TOKUMI | Copyrighted free use (unrestricted, incl. commercial) | [Commons](https://commons.wikimedia.org/wiki/File:Wiki-simaenaga.jpg) |

**Credit shown (2026-10-19):** the eight CC BY / CC BY-SA rows above are in `src/lib/data/photoCredits.js` and render as "Photo: author, license" in the fact lightbox, under a Beastfile's secondary image, on `/credits/`, in the RSS item description (`public/_worker.js`) and in the corner of any social card `scripts/generate-pins.mjs` builds from them.

All 7 downloaded 2026-07-16, resized to max 1600px / JPEG quality 80 before committing (same
pipeline as the Adobe Stock photos already in this folder). `coconut-crab.jpg` added
2026-08-11 same way - it's the lead image on Wikipedia's own "Coconut crab" article, used
across two dozen other-language Wikipedias too. The first AI-generated attempt for this fact
was a generic shore crab with regular pincers, nothing like the real animal's body plan
(giant terrestrial hermit crab, one massively oversized claw), so this one's a real photo
instead.

**Shima enaga (2026-08-12): a rejection worth logging.** A second 田頭寛 photo
(`境内にいるシマエナガ.jpg`, dark-headed bird in pine branches) was initially downloaded for
this same fact but rejected after visual review - it doesn't show the white-faced adult
appearance that actually defines this subspecies, and there's no way to confirm from the photo
alone whether it's a genuine juvenile (which do have dark markings) or a mistagged/different
bird. Swapped for the same author's other Commons upload above, which clearly matches the
species. Worth remembering: same uploader, same nominal subject, does not mean same reliability
per photo - verify each one.

**Note on `flamingo-2.jpg`:** it went to fact 151 "The One-Leg Trick" so that fact and id 21
"Pink From Shrimp" would not share `flamingo.jpg`. On 2026-10-20 fact 151 got its own
owner-generated one-leg photo (`flamingo-3.jpg`), and `flamingo-2.jpg`, a male and female in
mating season, moved to the new fact 355 "Head-Flagging Season" on flamingo courtship. The
credit line follows the file, so it still shows wherever the photo does.

## Which tool made each AI image (from 2026-10-20)

New images record their tool here. Owner decision 2026-10-20: Grok's attribution
is met with one line on the Terms and Image Credits pages ("created with Grok, or
with Adobe Firefly"), not a label on each image, and the per-image record lives
only in this file. The owner's uploads tell them apart: Grok images arrive as .jpg, Firefly
images (Adobe's own model or its partner models) as .png. From 2026-10-20 the
row names the Firefly model when it is a partner model (Gemini, GPT Image). Older images were not
logged; known ones are Grok Imagine for the seven fact photos added 2026-07-06
(blobfish, bombardier beetle, box jellyfish, Cuban tree frog, hagfish, hairy
frog, pen-tailed tree shrew) and Adobe Firefly for ids 287 to 296.

| File | Tool | Date |
|---|---|---|
| `chicken-2.jpg` | Grok Imagine | 2026-10-20 |
| `rabbit-4.jpg`, `common-house-spider-2.jpg`, `flamingo-3.jpg`, `kea-2.jpg`, `shiba-inu-2.jpg` | Adobe Firefly | 2026-10-20 |
| `anglerfish.jpg`, `star-nosed-mole.jpg`, `vampire-bat.jpg` | Adobe Firefly | 2026-10-20 |
| `cat.jpg`, `snake.jpg` (replacing Adobe Stock) | Adobe Firefly | 2026-10-20 |
| `parrot.jpg`, `red-panda.jpg`, `dolphin.jpg` (replacing Adobe Stock) | Grok Imagine | 2026-10-20 |
| `crow.jpg`, `jellyfish.jpg`, `mantis-shrimp.jpg` (replacing Adobe Stock) | Adobe Firefly, partner model Gemini 3.1 (Nano Banana 2) | 2026-10-20 |
| `elephant.jpg` (replacing Adobe Stock) | Adobe Firefly, partner model GPT Image 2.5 Flare | 2026-10-20 |
| `wombat.jpg` (replacing Adobe Stock) | Adobe Firefly, partner model GPT Image 2.5 Sunburst | 2026-10-20 |
| `honeybee.jpg`, `sea-otter.jpg`, `gecko.jpg`, `komodo-dragon.jpg`, `sloth.jpg` (replacing Adobe Stock) | Adobe Firefly, partner model GPT Image 2.5 Flare | 2026-10-20 |
| `seahorse.jpg`, `platypus.jpg`, `capybara.jpg`, `tardigrade.jpg`, `narwhal.jpg` (replacing Adobe Stock) | Adobe Firefly, partner model GPT Image 2.5 Flare | 2026-10-20 |

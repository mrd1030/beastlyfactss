# Image Credits

Tracks source, author, and license for photos (mainly in `public/assets/facts/`, plus any
Beastlypedia hero/secondary images from the same sourcing pass) that came from Wikimedia
Commons, as opposed to Adobe Stock, AI-generated, or Canva-made images, which aren't tracked
here. All licenses below permit commercial reuse; CC-BY / CC-BY-SA require attribution if the
image is ever republished somewhere the credit would be expected (e.g. a blog post crediting a
photo, an image gallery) - not required for the raw feed enclosure itself, but keep this file
up to date so credit can be given if asked.

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

**Note on `flamingo-2.jpg`:** two existing facts (id 21 "Pink From Shrimp" and id 151 "The
One-Leg Trick") are both about Flamingos and previously shared the single `flamingo.jpg`
image. Fact 151 now overrides to `flamingo-2.jpg` via `FACT_IMAGES` in `public/_worker.js`, so
the two facts show visibly different photos in the RSS feed instead of looking like duplicate
content.

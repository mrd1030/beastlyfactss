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

All 7 downloaded 2026-07-16, resized to max 1600px / JPEG quality 80 before committing (same
pipeline as the Adobe Stock photos already in this folder). `coconut-crab.jpg` added
2026-08-11 same way - it's the lead image on Wikipedia's own "Coconut crab" article, used
across two dozen other-language Wikipedias too. The first AI-generated attempt for this fact
was a generic shore crab with regular pincers, nothing like the real animal's body plan
(giant terrestrial hermit crab, one massively oversized claw), so this one's a real photo
instead.

**Note on `flamingo-2.jpg`:** two existing facts (id 21 "Pink From Shrimp" and id 151 "The
One-Leg Trick") are both about Flamingos and previously shared the single `flamingo.jpg`
image. Fact 151 now overrides to `flamingo-2.jpg` via `FACT_IMAGES` in `public/_worker.js`, so
the two facts show visibly different photos in the RSS feed instead of looking like duplicate
content.

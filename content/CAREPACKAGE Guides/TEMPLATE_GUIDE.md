# Care Package template & content sourcing

The reusable layout lives at [source/_template.html](source/_template.html). It has the
full CSS design system and every page skeleton with `{{PLACEHOLDER}}` tokens. This doc
is the map of **where to pull real content from** for each page, so a new animal guide
can be built by copying from the site instead of writing from scratch.

The worked example is [source/bearded-dragon.html](source/bearded-dragon.html)
(version 3.0, 34 pages). When a template comment says "see the bearded dragon file",
copy that page's structure and swap the species content.

## Where site content actually lives

| Content type | Location | Format |
|---|---|---|
| Encyclopedia entry | `beastlyfactss/src/lib/data/encyclopedia/{category}.js` | JS array, NOT mdx |
| Main guide/care page | `beastlyfactss/src/lib/data/guides/{category}.js` | JS array, NOT mdx |
| Deep-dive articles | `beastlyfactss/content/guides/{slug}-{topic}-guide.mdx` | MDX, one file per topic |

`{category}` is one of: `lizards`, `geckos`, `amphibians`, `birds`, `fish`,
`smallMammals`, `turtles` (check the file list if unsure which an animal falls under).

`{slug}` is the animal's kebab-case id, e.g. `leopard-gecko`, `bearded-dragon`.

### Encyclopedia field shape (`encyclopedia/{category}.js`)
```
id, name, scientific, category, emoji, difficulty, guideId, available, image,
bio: { overview, origin, habitat, adultSize, wildDiet, wildLifespan, conservation }
```
`bio.wildLifespan` is the **wild** figure only. Never copy it into the PDF's "Captive
lifespan" row. That mix-up is a real bug that has been found and fixed in 4 different
animals (bearded dragon, axolotl, leopard gecko, budgie) so double check this one
specifically.

### Guide field shape (`guides/{category}.js`)
```
id, name, emoji, difficulty, petType, image, tagline, funFact,
costs: { setup: [...], annual: [...] },
sections: { housing, diet, enrichment, health },
checklist: [...],
faqs: [...]
```

### Deep-dive MDX files (`content/guides/`)
Standard set per animal, all following `{slug}-{topic}-guide.mdx`:
- `{slug}-tank-setup-guide.mdx`: enclosure size, temperature/heat, UVB, humidity, substrate, furnishings
- `{slug}-health-issues-guide.mdx`: every condition, red flags, symptom detail
- `{slug}-cost-guide.mdx`: setup cost, ongoing cost, emergency/vet cost figures
- `{slug}-handling-guide.mdx`: handling technique and taming timeline
- `{slug}-enrichment-guide.mdx`: enrichment ideas and priority
- `{slug}-feeding-guide.mdx`: diet, feeding frequency by age, supplement dosing

Some animals also have a one-off extra, e.g. `leopard-gecko-temperature-guide.mdx`, or
a comparison piece like `{a}-vs-{b}-guide.mdx` that can carry species-specific facts
outside the normal glob. Worth a quick search by animal name if a number seems to be
missing from the standard six.

**The MDX deep-dives are the primary source for PDF body content.** They're the most
detailed and the ones that got the closest fact-check against real external sources
(VCA Hospitals, PetMD, Merck Veterinary Manual, etc.) during the site-wide audit.
`guides/{category}.js` is a shorter, secondary source; if it disagrees with the MDX,
the MDX wins, but flag the JS copy to fix too so the two don't stay out of sync.

### Content the site does NOT have yet (as of Sep 2026)
The v3 bearded dragon package needed pages the site had no article for. Until those
articles exist, the PDF text is the only copy, so treat the bearded dragon file as the
source and check it against the veterinary references on its Sources page. Every package
since logs its own gaps in **Site content gaps by package** near the end of this file;
add yours there before you call a package done.

- Full safe-foods charts (every staple / occasional / rare / never food with the reason)
- Power outage, travel, and transport plan
- Pet-sitter sheet
- Sexing, growth reference, body condition
- Females, infertile eggs, lay box, egg binding
- Reading stool and urates
- Mouth rot, tail rot, eye problems, burns, prolapse
- Brumation routine (the site has a paragraph, not a routine)

Site articles to create, combined so each is long enough to stand on its own (the four
standard split guides stay as they are; these are additions, not replacements):

1. **Bearded dragon safe foods list** (`bearded-dragon-safe-foods-guide.mdx`): every
   feeder insect, green, vegetable, fruit, and "human food" in a staple / occasional /
   rare / never tier with the reason, the prey-size rule, gut-loading, and a
   daily-salad recipe. Naturally 2,500+ words. Highest search value of the set.
2. **Bearded dragon growth, weight, and at-home health checks**
   (`bearded-dragon-growth-and-health-checks-guide.mdx`): sexing, growth chart, body
   condition, weekly weigh-in routine, reading stool and urates, dehydration signs.
3. **Female bearded dragons: eggs, lay boxes, and egg binding**
   (`bearded-dragon-eggs-and-egg-binding-guide.mdx`): infertile clutches, gravid
   signs, lay box build, calcium during a cycle, dystocia signs and treatment.
4. **Bearded dragon brumation guide** (`bearded-dragon-brumation-guide.mdx`): triggers,
   the pre-brumation vet check, the weekly routine, waking up, when to worry. Also
   settles the inconsistent durations across the current pages.
5. **Reptile emergency plan: power outages, travel, and pet sitters**
   (`reptile-power-outage-and-travel-guide.mdx`): one site-wide article wired into
   every reptile guide's related articles. Species-specific temperature floors in a
   table.
6. **Expand the existing health-issues guide**, not a new article: parasites and the
   fecal test, mouth rot, tail rot, eye problems, burns, prolapse.

Once one exists, re-source that PDF page from it.

## Page-by-page sourcing (reptile skeleton, 34 pages)

| Page | Title | Primary source |
|---|---|---|
| 1 | Cover | `encyclopedia` bio.overview for the hook; `guides` tagline for tone. Fill the four "Inside" bullets with the package's strongest selling points |
| 2 | Contents | none, your own finalized outline |
| 3 | How to use this package | boilerplate; reword only the "why this package exists" callout if there's a specific outdated-care-sheet myth worth naming |
| 4 | Quick profile & cost overview | `encyclopedia` bio{} fields + `guides` costs{} + funFact; cross-check emergency-cost note against `{slug}-cost-guide.mdx` |
| 5 | Housing & enclosure (+ diagram) | `{slug}-tank-setup-guide.mdx` Enclosure Size / Furnishings |
| 6 | Temperature, UVB & humidity (or filtration / water quality for aquatic) | `{slug}-tank-setup-guide.mdx` Temperature Gradient / UVB / Humidity, or `{slug}-temperature-guide.mdx` if one exists |
| 7 | Thermostats, timers & UVB distance | `{slug}-tank-setup-guide.mdx` plus `uvb-lighting-complete-guide.mdx` and `t5-vs-compact-uvb-guide.mdx`. Reptiles and birds only; aquatic animals replace this with a water-testing page |
| 8 | Substrate, furnishings & handling | `{slug}-tank-setup-guide.mdx` Substrate / Furnishings + `{slug}-handling-guide.mdx` (Salmonella callout for every reptile and amphibian) |
| 9 | Diet & feeding by age | `{slug}-feeding-guide.mdx`. Verify the supplement table specifically: plain calcium vs calcium-with-D3 vs multivitamin, by age. This has been wrong before |
| 10 | Feeder insects (insectivores and omnivores) | `{slug}-feeding-guide.mdx` + `gut-loading-feeder-insects-guide.mdx`; the site has no full chart, use the bearded dragon page as the pattern |
| 11 | Safe greens & vegetables (herbivores and omnivores) | `{slug}-feeding-guide.mdx`; no full chart on the site, use the bearded dragon page as the pattern |
| 12 | Fruit, extras & the never-feed list | same |
| 13 | Common mistakes & enrichment | `{slug}-enrichment-guide.mdx` + `guides` sections.enrichment |
| 14 | Sexing, growth & body condition | not on the site; bearded dragon page as pattern, verify against vet sources |
| 15 | Females, eggs & egg binding (egg-laying species) | not on the site; bearded dragon page as pattern. Birds: egg binding is in `{slug}-health-issues-guide.mdx` |
| 16 | Health red flags | `{slug}-health-issues-guide.mdx` intro / when-to-call-a-vet. Split food-refusal thresholds by age wherever the species has a juvenile/adult difference |
| 17 to 19 | Condition pages (2 to 3, one pair or trio each) | `{slug}-health-issues-guide.mdx`, ranked by severity/frequency; the last one collects the minor conditions (parasites, mouth rot, eyes, burns, prolapse) |
| 20 | Brumation, shed & behavior page | `{slug}-health-issues-guide.mdx` + `{slug}-feeding-guide.mdx` brumation section |
| 21 | Reading poop & hydration | not on the site; bearded dragon page as pattern |
| 22 | Setup checklist & targets | `{slug}-tank-setup-guide.mdx` FAQs + `guides` checklist[] |
| 23 | Emergency & quick targets card | no new content; restates numbers from pages 5 to 21, plus fill-in lines for vet numbers and bulb dates |
| 24 | Budget & shopping list | `{slug}-cost-guide.mdx` (primary) + `guides` costs{}. Make the line items actually sum to the totals |
| 25 | First 30 days checklist | synthesized from tank-setup + handling + health MDX guides |
| 26 | Symptom quick reference | `{slug}-health-issues-guide.mdx`, condensed to a table, every condition page gets a row |
| 27 | Daily, weekly & seasonal routine | synthesized from tank-setup + feeding + enrichment MDX guides |
| 28 | Power outages, travel & transport | not on the site; bearded dragon page as pattern, adjust the tolerable temperature floor per species |
| 29 | Pet-sitter sheet | boilerplate with species numbers filled in |
| 30 | Owner log | blank fillable, 16 rows |
| 31 | Equipment, supplement & vet log | blank fillable plus the 12-month planner |
| 32 | Enrichment checklist & log | `{slug}-enrichment-guide.mdx`, condensed |
| 33 | Glossary | terms actually used earlier in the same document |
| 34 | Sources, version history & about | the site articles' own Sources blocks, plus the external references you checked |

Aquatic animals collapse pages 5 to 8 to tank size / filtration and cycling / water
quality and testing / diet, and drop pages 7, 10, 14 (keep body condition), 15, and
the UVB rows on 22 and 23. Expect 28 to 30 pages for a fish or an axolotl.

## Build workflow

1. Copy `source/_template.html` to `source/{slug}.html`.
2. Pick an unused accent color triple (`--accent` / `--accent-dark` / `--accent-tint`).
   Check the other files' `:root` blocks so no two animals share one.
3. Fill in placeholders page by page using the sourcing table above. Do not paraphrase
   numbers from memory. Copy the exact figure from the MDX and re-verify anything that
   looks off against a real external source before "fixing" it.
4. Give every temperature and dimension in both units: `95 to 110°F (35 to 43°C)`,
   `4×2×2 ft (120×60×60 cm)`. Gumroad buyers are global.
5. Build the housing diagram last, as inline SVG, once the housing paragraph text is
   final. Keep labels short (title / number / sub-label on separate lines). Check that
   every `<text>` fits inside its `<rect>` in the render; the bearded dragon v3 first
   render had two labels spilling out of their boxes.
6. Base64-encode the chosen cover photo with a small script (never paste the base64
   string into a chat context) and drop it into `{{COVER_IMAGE_DATA_URI}}` using the
   existing `mask-image` fade, never a flat-color gradient overlay. Pick a photo where
   the animal faces the headline (toward the left), it reads far better than one
   facing off the page.
7. Fix the TOC page numbers, every in-text "page N" cross-reference, and every
   `.pagefoot` page number once the final page count is locked in. Grep for `page `
   and check each one.
8. Render to `rebuilt/{Animal}_Care_Package_v{N}.pdf`, where N is the major version on
   the cover. Never overwrite the previous version's PDF; the old file stays as the
   record of what buyers of that version received.
9. Check for overflow. `.page` is `overflow:hidden`, so text that runs long
   is silently clipped, not pushed to the next page. Measure before trusting your eyes:

   ```bash
   # Windows (Edge)
   "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="../rebuilt/{Animal}_Care_Package_v{N}.pdf" --print-to-pdf-no-header "file:///C:/Users/Mike D/Desktop/CAREPACKAGE Guides/source/{slug}.html"

   # Linux / a Claude cloud session (Playwright's Chromium)
   /opt/pw-browsers/chromium-*/chrome-linux/chrome --headless --disable-gpu --no-sandbox --no-pdf-header-footer --virtual-time-budget=10000 --print-to-pdf="{Animal}_Care_Package_v{N}.pdf" "file:///abs/path/{slug}.html"
   ```

   Overflow check: append this to a copy of the file just before `</body>`, run the
   same Chromium with `--dump-dom`, and read `data-measure` off the body. Negative
   numbers are pixels of overflow; anything under about 15 is too tight for print.

   ```html
   <script>document.fonts.ready.then(()=>{const out=[];document.querySelectorAll('.page').forEach((p,i)=>{const pr=p.getBoundingClientRect();const f=p.querySelector('.pagefoot');const ft=f?f.getBoundingClientRect().top:pr.bottom;let mx=pr.top;p.querySelectorAll('*').forEach(e=>{if(f&&f.contains(e))return;if(i===0)return;const r=e.getBoundingClientRect();if(r.height>0&&r.bottom>mx)mx=r.bottom;});out.push('p'+(i+1)+':'+Math.round(ft-mx-8));});document.body.setAttribute('data-measure',out.join('  '));});</script>
   ```

   A cloud session has no internet access from Chromium, so Google Fonts won't load
   there. Download the woff2 files with curl and swap the `@import` for local
   `@font-face` rules in the render copy only; leave the `@import` in the source file.
10. Icons must be small inline SVGs matching the existing minimalist style, never a raw
   emoji character or HTML entity. Headless Chromium print has rendered those as
   broken or flatly wrong glyphs 3 separate times already (crested gecko, goldfish,
   axolotl all had this bug). The `&#9633;` checkbox glyph in the 12-month planner is
   the one exception that has rendered fine.
11. **Log the gaps before you call it done.** Every package ends up with pages the site
   has no article for, and that list is the most valuable byproduct of building one: it
   is a ready-made content plan, already filtered to things a paying customer wanted
   enough to read. Add a block for your animal under **Site content gaps by package**
   below. Do it while the sourcing is fresh, not later. Two things to record and not
   skip: what you found already covered (so nobody rewrites it), and any number in the
   PDF that has no site source at all, because that is the copy no one can fact-check
   against the site later.

## Pre-publish accuracy checks (learned the hard way)

- Supplement schedule: plain calcium is the daily dust; calcium with D3 is 1 to 2 times
  a week; never "D3 at every feeding" under strong UVB.
- Food-refusal and no-stool thresholds split by age (juveniles have far less margin).
- Captive lifespan, not wild lifespan, in the quick profile.
- Budget line items must add up to the printed totals, with the thermostat, the
  infrared gun, and the vet exam as separate lines.
- Latin names current: yellow fungus is *Nannizziopsis guarroi*, not CANV / *N. vriesii*.
- ADV spreads by contact and feces, not by feeder insects; stargazing is the sign to name.
- US spelling in body text ("discolored"), no em or en dashes anywhere.
- Every page ends with at least 15 px of free space by the overflow check.
- No internal notes in the printed footer ("no external links appear in this document"
  was a real one that shipped in v2.0).

## Site content gaps by package

The running list of site articles the packages need. Build workflow step 11 says to add
a block here when you finish a package; this is what turns "the PDF says something the
site doesn't" into a content plan.

How to use it: pick off the **cross-species** rows first, because one article closes the
same gap in every future package. When you write one, re-source that PDF page from the
new article, cross the row off here, and note the slug so the next person knows it exists.

Anything still open is copy that lives only in a PDF, so it has no site article to be
fact-checked against later. That is the actual risk this table tracks.

Remember `CLAUDE.md` when you write one: 1 to 2 in-body internal links, a
`RELATED_ARTICLES` entry in `src/lib/data/relatedArticles.js` unless the slug ends in a
standard suffix that auto-detects, and dates spread across days rather than dumped on
one.

### Bearded Dragon v3.0 (Aug 2026)

Listed in full under **Content the site does NOT have yet** above. Six articles, of which
these have since shipped: `bearded-dragon-growth-weight-checks-guide.mdx`,
`bearded-dragon-eggs-and-egg-binding-guide.mdx`, `bearded-dragon-brumation-guide.mdx`,
and `reptile-emergency-plan-guide.mdx` (which covers the power outage, travel, and
pet-sitter pages for every reptile package, not just this one). Still open from that
list: the full safe-foods chart, and the health-issues expansion.

### Ball Python v2.0 (Sep 2026)

Already covered, do not rewrite: pages 28 and 29 from `reptile-emergency-plan-guide.mdx`,
which carries a ball python temperature row. Page 20's shed cycle from
`reptile-shedding-complete-guide.mdx`. Note `pet-obesity-body-condition-guide.mdx` does
**not** transfer, it is a dog and cat article on the 9-point scale.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Snake heating: thermostats, probe placement, heat source types | 7 | Cross-species | No article anywhere; `thermostat` returns zero hits in `content/`. The site has three UVB articles and nothing on the device that actually prevents burns. On/off vs pulse vs dimming, probe on the surface not the mat, wattage as a guess not a target. Serves ball python, corn snake, kingsnake, hognose, garter, boa, milk snake, rosy boa |
| Quarantine for a new reptile | 18, 31 | Cross-species | Zero hits. The prevention story for both mites and IBD: 60 to 90 days, separate room, paper towel, separate tools, established animals first and the new one last |
| Snake sexing, growth &amp; body condition | 14 | Cross-species (snakes) | Nothing for any snake. Probing and popping and why an owner should not do either, weight-based growth ranges, triangular vs loaf cross-section |
| Reading reptile stool, urates &amp; hydration | 21 | Cross-species | Nothing. Also open on the bearded dragon list, so one article closes both |
| Internal parasites and the fecal test, IBD, prolapse | 19, 21 | Ball python | Expand `ball-python-health-issues-guide.mdx`, not a new URL. IBD currently exists only as a paragraph in `guides/snakes.js`, which is the secondary source |
| Prey chart, thawing method, freezer storage | 11, 12 | Ball python | Expand `ball-python-feeding-guide.mdx`. It has schedule, prey size, and refusal reasons, but not the tier chart (ASF, day-old chicks, quail), thaw temperature and method, or storage |
| Female ball pythons: follicles, eggs &amp; egg binding | 15 | Ball python | No snake equivalent of `bearded-dragon-eggs-and-egg-binding-guide.mdx`. The page with the least site backing in the whole package, so the one most worth grounding |

**Numbers with no site source at all**, carried by the PDF only until the articles above
exist: the growth table on page 14, the body-condition descriptions on page 14, the
thermostat type guidance on page 7, and the prey tiers on page 11.

**Source drift found while building:** `src/lib/data/guides/snakes.js` disagrees with the
MDX on cool side (76 to 80&deg;F vs 75 to 80&deg;F) and humidity (50 to 60% vs 55 to 70%).
The MDX wins per the rule above and is what the package uses, but the JS copy still needs
correcting so the two stop drifting.

### Betta Fish v1.0 (Sep 2026)

The first aquatic package on the v3 template. `goldfish.html` and `axolotl.html` predate
v3 and carry none of its CSS additions, so the aquatic layout here was derived from the
adaptation note in this guide rather than copied from them. It came out at 36 pages, not
the 28 to 30 that note predicts, because cycling, water chemistry, and water changes need
a page each rather than a shared one. Update that estimate to 34 to 36 for the next
aquatic build.

Already covered, do not rewrite: `betta-fish-water-parameters-guide.mdx` carries the full
parameter table, the testing schedule, and the GH/KH note, and it is the dedicated guide
so it wins over `betta-fish-tank-setup-guide.mdx` on pH (6.5 to 7.5, not 6.5 to 7.8).
`betta-fish-enrichment-guide.mdx` covers all three studies and the mirror finding.
`betta-fish-feeding-guide.mdx` covers portioning, the never-feed list, and the six
refusal reasons. Note `reptile-emergency-plan-guide.mdx` does **not** transfer: it is
reptile-only, and an aquarium blackout is a different problem with different physics.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Aquarium power outages: oxygen, heat and the filter | 29 | Cross-species (aquatic) | No article anywhere. The whole page is externally sourced. The 8-hour aeration cycle, insulating rather than heating, unplugging the filter so it cannot flush rotting media back in, and no feeding. Serves betta, goldfish, axolotl, and every future fish package |
| Fishless cycling, start to finish | 7 | Cross-species (aquatic) | `betta-fish-water-parameters-guide.mdx` explains what the cycle is and gives the 4 to 6 week figure, but not how to run one: ammonia dosing to 2 to 4 ppm, seeding, the 24-hour completion test, and the stall table. Closes the same gap for every aquatic package |
| Transporting and moving fish | 30 | Cross-species (aquatic) | Nothing. Bag versus bucket, the air gap a labyrinth fish needs, oxygen-filled bags, and carrying the filter sponge submerged so the cycle survives the move |
| Aquarium salt, and medicating a small tank | 18, 19 | Cross-species (aquatic) | Nothing on dosing or duration. 1 tsp per gallon, the 10-day ceiling, replacing only what a water change removes, and why plants, snails, and shrimp need a hospital tank. Also the carbon-removal and aeration rules that apply to every treatment |
| Betta body condition from above | 15 | Betta | Nothing. `betta-fish-feeding-guide.mdx` gives portions but no way to check whether they are right. The top-down torpedo test, shoulders versus the middle third, and the one-pellet correction over 2 weeks |
| Velvet, columnaris and telling them apart | 19 | Betta | Expand `betta-fish-health-issues-guide.mdx`, not a new URL. It names both in a sentence each. The package needs the differential (grains versus metallic dust versus cottony saddle) and, more importantly, that ich wants the temperature raised and columnaris wants it lowered |
| Betta tankmates and sororities | 22 | Betta | Nothing, and the site currently points the wrong way (see drift below). The honest version: alone is the default, snails are usually fine, shrimp and schooling fish are risky and need a real separation plan, and the group-housing research is about fish reared together from hatching |
| Sexing a betta | 28 (glossary) | Betta | Nothing on the site. Only in the glossary here because there was no page to justify, but a short article would let a future edition carry it properly: ovipositor, ventral fin length, anal fin shape, beard size, and why the egg spot is suggestive rather than conclusive |

**Numbers with no site source at all**, carried by the PDF only until the articles above
exist: the whole blackout timeline on page 29, the aquarium salt dose and its 10-day
ceiling on page 18, the ich treatment temperature of 82&deg;F (28&deg;C) and the
columnaris instruction to drop toward 76&deg;F (24.5&deg;C) on pages 18 and 19, the
fishless cycling ammonia doses and the completion test on page 7, the body-condition
descriptions on page 15, and the transport durations on page 30.

**Source drift found while building:**

- `betta-fish-cost-guide.mdx` contradicts itself: "$20 to $30 a month" is $240 to $360 a
  year, against its own stated "$100 to $250 a year." The package uses an itemised
  $6 to $20 a month ($72 to $240 a year), which agrees with the annual figure. The
  monthly line in the article needs correcting.
- `src/lib/data/guides/fish.js` says brief mirror exposure is "natural and healthy in
  small doses." `betta-fish-enrichment-guide.mdx` says the opposite, and is right: a
  mirror is what researchers use to provoke a measurable stress response. The MDX wins,
  and the JS copy needs fixing.
- `src/lib/data/guides/fish.js` recommends "sororities of five or more females with
  plenty of visual barriers" without the rearing caveat, which reads as an endorsement.
  Same fix needed.
- `src/lib/data/guides/fish.js` says feed what is finished "in about two minutes";
  `betta-fish-feeding-guide.mdx` says about 60 seconds. The MDX wins.
- `betta-fish-tank-setup-guide.mdx` gives pH 6.5 to 7.8; the dedicated
  `betta-fish-water-parameters-guide.mdx` gives 6.5 to 7.5. The dedicated guide wins and
  the setup guide should be brought into line.

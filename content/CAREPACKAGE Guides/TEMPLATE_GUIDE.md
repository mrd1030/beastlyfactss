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

### External sources: recommended, not a whitelist

VCA Hospitals, PetMD, and the Merck Veterinary Manual are the ones leaned on most here,
but they are recommendations, not the only sites allowed. Any credible source is usable:
veterinary schools and teaching hospitals, peer-reviewed papers and journals, government
wildlife and agriculture agencies, accredited zoos and aquariums, species and breed
societies, and established species-specific references. Reach for the better-placed
source when one exists. A herpetological society's published care standard beats a
general pet portal on a reptile husbandry number, and a species studbook or a
peer-reviewed paper beats both.

What does not count as credible: forums, Reddit threads, Facebook groups, care sheets on
retailer or breeder sales pages, AI-generated content farms, and anything with no named
author or organization behind it.

Two more rules that hold whatever the source is. Cite only what you actually opened and
read, never a figure recalled from memory. And when two credible sources disagree on a
number, print the range instead of picking a side, and name both on the Sources page so
a reader can see why it's a range.

### Writing site articles for content the site does not have

**This is a standing part of every package build, not a one-off backlog.** When a PDF
page needs content no site article covers, the fix is to write the site article, not to
let the PDF stay the only copy. Order of operations: write and publish the article
first, then source the PDF page from it. That keeps the PDF and the site from
disagreeing, and the research gets used twice instead of once.

Those articles follow the same rules as any other (see docs/RULES.md): 1-2+ in-body
internal links, real researched sources, and an entry in `RELATED_ARTICLES`
(`beastlyfactss/src/lib/data/relatedArticles.js`) against the guide ids it actually
serves. A slug not ending in a standard suffix (cost / handling / health-issues /
tank-setup / feeding) does not auto-detect, so it needs that entry written by hand.
Combine narrow topics so each article is long enough to stand on its own, and spread
publish dates across days rather than dumping a batch on one. The four standard split
guides stay as they are; these are additions, never replacements. Expanding an existing
guide in place is often the better move than a new thin article.

The v3 bearded dragon package drove the first round of this, and all of it is done and
live:

| PDF page need | Article | Status |
|---|---|---|
| Safe-foods charts, prey-size rule, gut-loading | `bearded-dragon-safe-foods-guide.mdx` | live |
| Sexing, growth reference, body condition, stool and urates | `bearded-dragon-growth-weight-checks-guide.mdx` | live |
| Females, infertile eggs, lay box, egg binding | `bearded-dragon-eggs-and-egg-binding-guide.mdx` | live |
| Brumation routine (the site had a paragraph, not a routine) | `bearded-dragon-brumation-guide.mdx` | live |
| Power outage, travel, transport, pet-sitter sheet | `reptile-emergency-plan-guide.mdx` | live, site-wide, wired into 31 reptile guide ids |
| Parasites and the fecal test, mouth rot, tail rot, eye problems, burns, prolapse | `bearded-dragon-health-issues-guide.mdx` | live, expanded in place |

Two of those shipped under different slugs than first planned. Link the real ones:
`bearded-dragon-growth-weight-checks-guide` (not `-growth-and-health-checks-`) and
`reptile-emergency-plan-guide` (not `reptile-power-outage-and-travel-`).

**Still open for every other species.** Those six cover the bearded dragon only. Every
other animal's package hits the same gaps, and the rows marked "check for a species
article" in the sourcing table below are where they land. For a new animal, check
whether that species has its own version first. If it does, source from it. If it
doesn't, either write it (preferred, when the topic has enough species-specific
substance to stand alone) or use the bearded dragon file as the structural pattern and
verify every single number against veterinary sources for that species. Never carry a
bearded dragon figure across to another animal.

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
| 10 | Feeder insects (insectivores and omnivores) | `{slug}-feeding-guide.mdx` + `gut-loading-feeder-insects-guide.mdx`; check for a species article first (`{slug}-safe-foods-guide.mdx`, which bearded dragon has), otherwise use the bearded dragon page as the pattern |
| 11 | Safe greens & vegetables (herbivores and omnivores) | `{slug}-feeding-guide.mdx` + `{slug}-safe-foods-guide.mdx` where one exists; check for a species article first, otherwise use the bearded dragon page as the pattern |
| 12 | Fruit, extras & the never-feed list | same |
| 13 | Common mistakes & enrichment | `{slug}-enrichment-guide.mdx` + `guides` sections.enrichment |
| 14 | Sexing, growth & body condition | `{slug}-growth-weight-checks-guide.mdx` where one exists (bearded dragon does); check for a species article first, otherwise bearded dragon page as pattern, verify against vet sources |
| 15 | Females, eggs & egg binding (egg-laying species) | `{slug}-eggs-and-egg-binding-guide.mdx` where one exists (bearded dragon does); check for a species article first, otherwise bearded dragon page as pattern. Birds: egg binding is in `{slug}-health-issues-guide.mdx` |
| 16 | Health red flags | `{slug}-health-issues-guide.mdx` intro / when-to-call-a-vet. Split food-refusal thresholds by age wherever the species has a juvenile/adult difference |
| 17 to 19 | Condition pages (2 to 3, one pair or trio each) | `{slug}-health-issues-guide.mdx`, ranked by severity/frequency; the last one collects the minor conditions (parasites, mouth rot, eyes, burns, prolapse) |
| 20 | Brumation, shed & behavior page | `{slug}-brumation-guide.mdx` where one exists (bearded dragon and snakes do), else `{slug}-health-issues-guide.mdx` + `{slug}-feeding-guide.mdx` brumation section |
| 21 | Reading poop & hydration | `{slug}-growth-weight-checks-guide.mdx` where one exists (bearded dragon's covers stool, urates and dehydration signs); check for a species article first, otherwise bearded dragon page as pattern |
| 22 | Setup checklist & targets | `{slug}-tank-setup-guide.mdx` FAQs + `guides` checklist[] |
| 23 | Emergency & quick targets card | no new content; restates numbers from pages 5 to 21, plus fill-in lines for vet numbers and bulb dates |
| 24 | Budget & shopping list | `{slug}-cost-guide.mdx` (primary) + `guides` costs{}. Make the line items actually sum to the totals |
| 25 | First 30 days checklist | synthesized from tank-setup + handling + health MDX guides |
| 26 | Symptom quick reference | `{slug}-health-issues-guide.mdx`, condensed to a table, every condition page gets a row |
| 27 | Daily, weekly & seasonal routine | synthesized from tank-setup + feeding + enrichment MDX guides |
| 28 | Power outages, travel & transport | `reptile-emergency-plan-guide.mdx`, the site-wide article; adjust the tolerable temperature floor per species |
| 29 | Pet-sitter sheet | `reptile-emergency-plan-guide.mdx` pet-sitter section, plus boilerplate with species numbers filled in |
| 30 | Owner log | blank fillable, 16 rows |
| 31 | Equipment, supplement & vet log | blank fillable plus the 12-month planner |
| 32 | Enrichment checklist & log | `{slug}-enrichment-guide.mdx`, condensed |
| 33 | Glossary | terms actually used earlier in the same document |
| 34 | Sources, version history & about | the site articles' own Sources blocks, plus the external references you checked |

Aquatic animals collapse pages 5 to 8 to tank size / filtration and cycling / water
quality and testing / diet, and drop pages 7, 10, 14 (keep body condition), 15, and
the UVB rows on 22 and 23. Expect 28 to 30 pages for a fish or an axolotl.

### Page count is a target, not a budget

Every page count in this doc (34 for the reptile skeleton, 28 to 30 aquatic) is the
expected shape, not a quota to hit. **Going over or under is fine.** Accurate, complete,
genuinely useful content beats landing on a number, every time. A package that runs 31
pages or 37 pages is the right length for that animal.

So never cut a real husbandry detail, a health red flag, a supplement dose, or a
temperature target to make a page fit. When a page runs long, in this order: combine it
with a neighboring page that shares its topic, split it into two pages and renumber, or
just let the guide run longer. When a page runs short, extend it with content that earns
its place, the species' own specifics, a worked example, a table that saves the reader a
lookup, rather than padding with filler or stretching the type to fill space.

Two half-empty pages are worse than one full page, and one clipped page is worse than
either. The one hard rule is that the count has to be *consistent* once it's locked in:
update the cover, the contents page, every in-text "page N" cross-reference, and every
footer to match, per step 7 of the build workflow.

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

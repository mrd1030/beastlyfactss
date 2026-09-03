# Care Package template & content sourcing

The reusable layout lives at [source/_template.html](source/_template.html). It has the
full CSS design system and every page skeleton with `{{PLACEHOLDER}}` tokens. This doc
is the map of **where to pull real content from** for each page, so a new animal guide
can be built by copying from the site instead of writing from scratch.

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
`bio.wildLifespan` is the **wild** figure only — never copy it into the PDF's "Captive
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
- `{slug}-tank-setup-guide.mdx` — enclosure size, temperature/heat, UVB, humidity, substrate, furnishings
- `{slug}-health-issues-guide.mdx` — every condition, red flags, symptom detail
- `{slug}-cost-guide.mdx` — setup cost, ongoing cost, emergency/vet cost figures
- `{slug}-handling-guide.mdx` — handling technique and taming timeline
- `{slug}-enrichment-guide.mdx` — enrichment ideas and priority
- `{slug}-feeding-guide.mdx` — diet, feeding frequency by age, supplement dosing

Some animals also have a one-off extra, e.g. `leopard-gecko-temperature-guide.mdx`, or
a comparison piece like `{a}-vs-{b}-guide.mdx` that can carry species-specific facts
outside the normal glob — worth a quick search by animal name if a number seems to be
missing from the standard six.

**The MDX deep-dives are the primary source for PDF body content** — they're the most
detailed and the ones that got the closest fact-check against real external sources
(VCA Hospitals, PetMD, Merck Veterinary Manual, etc.) during the site-wide audit.
`guides/{category}.js` is a shorter, secondary source; if it disagrees with the MDX,
the MDX wins, but flag the JS copy to fix too so the two don't stay out of sync.

## Page-by-page sourcing

| Page | Title | Primary source |
|---|---|---|
| 1 | Cover | `encyclopedia` bio.overview for the hook; `guides` tagline for tone |
| 2 | Contents | none — your own finalized outline |
| 3 | How to use this package | none — boilerplate framing, reword only the "why this package exists" callout if there's a specific outdated-care-sheet myth worth naming |
| 4 | Quick profile & cost overview | `encyclopedia` bio{} fields + `guides` costs{} + funFact; cross-check emergency-cost note against `{slug}-cost-guide.mdx` |
| 5 | Housing & enclosure (+ diagram) | `{slug}-tank-setup-guide.mdx` → Enclosure Size / Furnishings |
| 6 | Temperature/UVB/humidity (or filtration/water quality for aquatic) | `{slug}-tank-setup-guide.mdx` → Temperature Gradient / UVB / Humidity, or `{slug}-temperature-guide.mdx` if one exists |
| 7 | Substrate, furnishings & handling | `{slug}-tank-setup-guide.mdx` → Substrate/Furnishings + `{slug}-handling-guide.mdx` |
| 8 | Diet & feeding by age | `{slug}-feeding-guide.mdx` (verify supplement/calcium-D3 dosing language exactly — this has been wrong before) |
| 9 | Common mistakes & enrichment | `{slug}-enrichment-guide.mdx` + `guides` sections.enrichment |
| 10 | Health red flags | `{slug}-health-issues-guide.mdx` intro / when-to-call-a-vet section |
| 11–12 | Condition pairs (2–3 pages, one pair each) | `{slug}-health-issues-guide.mdx`, ranked by severity/frequency |
| 13 | Setup checklist & targets | `{slug}-tank-setup-guide.mdx` FAQs + `guides` checklist[] |
| 14 | Emergency & quick targets card | no new content — restates numbers already used on pages 5–12 |
| 15 | Budget & shopping list | `{slug}-cost-guide.mdx` (primary) + `guides` costs{} |
| 16 | First 30 days checklist | synthesized from tank-setup + handling + health MDX guides |
| 17 | Symptom quick reference | `{slug}-health-issues-guide.mdx`, condensed to a table |
| 18 | Daily & weekly routine | synthesized from tank-setup + feeding + enrichment MDX guides |
| 19 | Owner log | none — blank fillable template |
| 20 | Enrichment checklist | `{slug}-enrichment-guide.mdx`, condensed to a checklist |
| 21 | Glossary | terms actually used earlier in the same document |

The "Full Care Guide" module (pages 5–8) and "Health" module (pages 10–12) are the two
places the page count actually varies by animal — reptiles/birds get 4 care pages
(housing / heat+UVB+humidity / substrate+handling / diet), aquatic animals collapse
that to 3 (tank size / filtration+water quality / diet) since there's no UVB or
substrate-handling to cover. Health runs 1 red-flags page + 2–3 condition pairs
depending on how many conditions the species has — bearded dragon needed a 3rd
condition page for ADV, most others fit in 2.

## Build workflow

1. Copy `source/_template.html` to `source/{slug}.html`.
2. Pick an unused accent color triple (`--accent` / `--accent-dark` / `--accent-tint`) —
   check the other 9 files' `:root` blocks so no two animals share one.
3. Fill in placeholders page by page using the sourcing table above. Do not paraphrase
   numbers from memory — copy the exact figure from the MDX and re-verify anything that
   looks off against a real external source before "fixing" it.
4. Build the housing diagram last, as inline SVG, once the housing paragraph text is
   final. Keep labels short (title / number / sub-label on separate lines) — a dense,
   4-line-per-box diagram reads as "packed" even when technically correct.
5. Base64-encode the chosen cover photo with a small Node one-off script (never paste
   the base64 string into a chat context) and drop it into `{{COVER_IMAGE_DATA_URI}}`
   using the existing `mask-image` fade — never a flat-color gradient overlay, it only
   matches the true diagonal background at one height and leaves a visible seam.
6. Fix the TOC page numbers and every `.pagefoot` page number once the final page count
   is locked in.
7. Render and spot-check before calling it done:
   ```bash
   "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="../rebuilt/{Animal}_Care_Package.pdf" --print-to-pdf-no-header "file:///C:/Users/Mike D/Desktop/CAREPACKAGE Guides/source/{slug}.html"
   ```
8. Icons must be small inline SVGs matching the existing minimalist style — never a raw
   emoji character or HTML entity. Headless Chromium print has rendered those as
   broken or flatly wrong glyphs 3 separate times already (crested gecko, goldfish,
   axolotl all had this bug).

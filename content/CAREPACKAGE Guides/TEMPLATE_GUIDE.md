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

Read the Ball Python v2.0 note under **Site content gaps by package** before leaning on
that last sentence. "The MDX wins" picks a side without checking whether either side is
right. When two internal sources disagree on a number that matters, go to the external
source first.

### External sources: recommended, not a whitelist

VCA Hospitals, PetMD, and the Merck Veterinary Manual are the ones leaned on most here,
but they are recommendations, not the only sites allowed. Any credible source is usable:
veterinary schools and teaching hospitals, peer-reviewed papers and journals, government
wildlife and agriculture agencies, accredited zoos and aquariums, species and breed
societies, and established species-specific references. ReptiFiles settled the ball
python humidity drift, so a well-sourced species reference can outrank a general portal.
Reach for the better-placed source when one exists.

What does not count as credible: forums, Reddit threads, Facebook groups, care sheets on
retailer or breeder sales pages, AI-generated content farms, and anything with no named
author or organization behind it.

Two more rules that hold whatever the source is. Cite only what you actually opened and
read, never a figure recalled from memory. This governs figures and claims, not topics:
deciding a package needs a page on wing clipping or PTFE fumes is knowledge work and is
exactly what you should be doing. Writing the safe temperature onto that page is
sourcing work. And when two credible sources disagree on a number, print the range
instead of picking a side, and name both on the Sources page so a reader can see why
it's a range.

### Writing site articles for content the site does not have

**Order of operations: the PDF ships first, the articles follow.** Do not stop a package
build to go write five articles. Build and render the PDF, sourcing each page from the
site where the site has it, then log what it did not have under **Site content gaps by
package** near the end of this file (build workflow step 11). The articles are separate
work, picked up when asked, and the log is what turns them into a plan.

Gaps come from two places, and **both are required**. Neither one finds what the other
does.

**Derived gaps** are mechanical. The page skeleton is fixed, so every page has a defined
content requirement before the animal is chosen. Read what the site actually holds for
that animal (`encyclopedia/{category}.js`, `guides/{category}.js`, and every
`content/guides/{slug}-*.mdx`), map it onto the page list, and the pages left without a
source are derived gaps. Each resolves to an existing cross-species article
(`reptile-emergency-plan-guide`, `reptile-shedding-complete-guide`, the UVB guides), or
to research, or to a logged row.

**Proposed gaps come from your own knowledge of the animal, and this is where the
valuable articles come from.** The site cannot tell you what it is missing, and the
skeleton only asks for what the last animal needed. So say plainly what a keeper of this
species has to know that neither one covers. Wing clipping is the worked example: nothing
in the bird page list asks for it and a grep finds only a glossary definition and two
Quaker legal mentions, yet it is one of the first real decisions a new bird owner faces.
No amount of reading the repo surfaces that. Only knowing birds does.

Do this deliberately on every package, not as an afterthought, and put those rows in the
gap block alongside the derived ones. Species-specific husbandry decisions, the common
beginner mistakes, the household hazards, and the routine care a care sheet skips are all
worth proposing.

Two things keep it honest, and they are narrow:

- **Mark which kind a row is.** A derived row can cite its hit count. A proposed row
  cannot, so label it proposed and say what it is based on. Do not present a proposal as
  a grep result, and do not claim "zero hits" without actually grepping `content/` and
  `src/` both, since the glossary and the guides JS carry real coverage the MDX does not.
- **Proposing a topic is not the same as writing its content.** Name the topic from
  knowledge, then source every figure, dose, temperature, and claim before it goes into a
  PDF page or an article. The topic is yours. The numbers are the source's.

Until an article exists, the PDF text is the only copy of those figures, so nothing can
fact-check them against the site later. That is the actual risk the log tracks, and why
the block gets written while the sourcing is fresh rather than later. Pick off the
**cross-species** rows first, since one article closes the same gap in every future
package, and when one does get written, re-source that PDF page from it and cross the
row off.

What the build checks actually enforce is worth knowing before you lean on them:

| Requirement | Enforced by | Covers a care package article? |
|---|---|---|
| 1-2+ in-body internal links, written into the prose | `scripts/check-internal-links.mjs` (`npm run check:links`) | **Yes.** Walks every `.mdx` under `content/`, so a new article is caught the moment it exists |
| Every `RELATED_ARTICLES` slug resolves to a real file, every guide id key is real | `scripts/check-related-articles.mjs` (`npm run check:related`) | **Yes**, for dead slugs and typo'd keys, which is what catches a renamed article |
| The article is attached to at least one guide at all | same script, orphan check | **No.** The orphan check only fires on articles tagged "Dog Health" or "Cat Health". A reptile, bird, or fish article with no entry passes silently |
| Photos exist and are wired by id | `scripts/check-images.mjs` (`npm run check:images`) | Yes, when the article adds photos |

That third row is the one that bites. `getAutoDetectedSlugs` wires a slug for free only
when it is exactly `{guideId}-{suffix}` for one of the six standard suffixes
(`cost-guide`, `handling-guide`, `health-issues-guide`, `tank-setup-guide`,
`feeding-guide`, `enrichment-guide`, per `STANDARD_SUFFIXES` in `relatedArticles.js`).
A species whose article prefix differs from its guide id (`african-grey` vs
`african-grey-parrot-`, `tegu` vs `argentine-tegu-`) does not auto-detect either, even
on a standard suffix, and is wired by hand.

Most articles written for a care package page match none of that: `safe-foods-guide`,
`brumation-guide`, `growth-weight-checks-guide`, `eggs-and-egg-binding-guide`,
`quarantine-guide`, and `reptile-emergency-plan-guide` all auto-detect against nothing.
So **write the `RELATED_ARTICLES` entry by hand, every time**, against the guide ids the
article actually serves, and do not expect a check to remind you. Nothing will. An
unwired article is reachable only by search.

Run `npm run check:links` and `npm run check:related` after installing the article, plus
`npm run check:images` if it added photos. Stop there: per CLAUDE.md, content installs do
not run `npm run build` unless explicitly asked.

The rest is judgment, unenforced. Combine narrow topics so each article is long enough
to stand on its own, and spread publish dates across days rather than dumping a batch on
one. The four standard split guides stay as they are; these are additions, never
replacements. Expanding an existing guide in place is often the better move than a new
thin article, and several gap rows below call for exactly that.

The v3 bearded dragon package drove the first round of this, and all six are now done
and live:

| PDF page need | Article | Status |
|---|---|---|
| Safe-foods charts, prey-size rule, gut-loading | `bearded-dragon-safe-foods-guide.mdx` | live |
| Sexing, growth reference, body condition, stool and urates | `bearded-dragon-growth-weight-checks-guide.mdx` | live |
| Females, infertile eggs, lay box, egg binding | `bearded-dragon-eggs-and-egg-binding-guide.mdx` | live |
| Brumation routine (the site had a paragraph, not a routine) | `bearded-dragon-brumation-guide.mdx` | live |
| Power outage, travel, transport, pet-sitter sheet | `reptile-emergency-plan-guide.mdx` | live, site-wide, wired into 31 reptile guide ids |
| Parasites and the fecal test, mouth rot, tail rot, eye problems, burns, prolapse | `bearded-dragon-health-issues-guide.mdx` | live, expanded in place |

Two shipped under different slugs than first planned. Link the real ones:
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
| 14 | Sexing, growth & body condition | `{slug}-growth-weight-checks-guide.mdx` where one exists (bearded dragon does); check for a species article first, otherwise bearded dragon page as pattern, verify against vet sources. Snakes have nothing for this yet |
| 15 | Females, eggs & egg binding (egg-laying species) | `{slug}-eggs-and-egg-binding-guide.mdx` where one exists (bearded dragon does); check for a species article first, otherwise bearded dragon page as pattern. Birds: egg binding is in `{slug}-health-issues-guide.mdx` |
| 16 | Health red flags | `{slug}-health-issues-guide.mdx` intro / when-to-call-a-vet. Split food-refusal thresholds by age wherever the species has a juvenile/adult difference |
| 17 to 19 | Condition pages (2 to 3, one pair or trio each) | `{slug}-health-issues-guide.mdx`, ranked by severity/frequency; the last one collects the minor conditions (parasites, mouth rot, eyes, burns, prolapse) |
| 20 | Brumation, shed & behavior page | `{slug}-brumation-guide.mdx` where one exists (bearded dragon and snakes do) and `reptile-shedding-complete-guide.mdx` for the shed cycle, else `{slug}-health-issues-guide.mdx` + `{slug}-feeding-guide.mdx` brumation section |
| 21 | Reading poop & hydration | `{slug}-growth-weight-checks-guide.mdx` where one exists (bearded dragon's covers stool, urates and dehydration signs); check for a species article first, otherwise bearded dragon page as pattern. Open as a cross-species gap |
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

## Adapting the skeleton by animal class

The table above is the **reptile** skeleton. It is the only one written page by page,
because it came first, and every other class is an adaptation of it. Pages 1 to 4 and
pages 22 to 34 (the checklists, budget, logs, glossary and sources) carry across every
class almost unchanged. The husbandry and health middle is what moves.

Read the row for your class before building, then read the matching package's gap block
further down. Page counts below are what shipped, not estimates.

| Class | Built | Pages | The middle, in short |
|---|---|---|---|
| Reptile | Bearded Dragon v3.0, Ball Python v2.0 | 34 | The canonical table above |
| Aquatic | Betta v1.0, Goldfish v3.0 | 36 to 39 | Water systems replace heat systems |
| Mammal | Rabbit v2.0 | 39 | Diet and health dominate; no environmental control pages |
| Invertebrate | Tarantula v2.0 | 43 | Molt and rehousing replace handling; prevention replaces treatment |
| Bird | none yet | proposed | See below, this row is a proposal |

**Aquatic.** Collapse pages 5 to 8 into tank size, filtration, cycling, and water quality
and testing, and drop pages 7, 10, 14 (keep body condition), 15, and the UVB rows on 22
and 23. Cycling, water chemistry, and water changes each need their own page rather than
a shared one, which is why Betta landed at 36. Goldfish needed 39 because filtration
sizing and media maintenance also split. Water quality is this class's whole health
story: goldfish spends pages 21 to 25 on it and still routes most conditions back to the
test kit.

**Mammal.** The heat, UVB, thermostat and substrate pages have no equivalent and come
out. What replaces them is diet and health, both much larger than the reptile skeleton
allows. Rabbit v2.0 gave hay, greens and pellets, and life-stage feeding three pages, and
gave GI stasis three pages of its own before dental, flystrike and snuffles, and the
E. cuniculi group. It also needed pages the reptile table has no slot for: litter
training and rabbit-proofing, bonding and companionship, spay and neuter, and grooming,
nails and molting. Expect 38 to 40, expect health to be the biggest section in the
package, and expect prey-species behavior to change the handling pages: picking one up is
a page, and reading its body language is another.

**Invertebrate.** The heat, UVB and thermostat pages come out. Handling inverts: Tarantula
v2.0 spends three pages on why the answer is no, what interacting actually looks like,
and urticating hairs and bites, where a reptile gets one handling page. Molting takes two
pages and replaces the brumation and shed page. Rehousing takes two more and has no
reptile equivalent at all. A legal page earns its place, which the reptile skeleton does
not have. Eggs and egg binding, and reading stool, both drop. Expect 40 to 43, expect
husbandry to be short and health to lean toward prevention, because veterinary care for
invertebrates barely exists.

**Bird (proposed, not yet built).** Nothing here has been tested against a real build, so
treat it as a starting hypothesis and correct it from what the first bird package
actually needs. Page 7 survives but changes meaning, from thermostats to full-spectrum
lighting, photoperiod, and the 10 to 12 hour sleep requirement (`uvb-lighting-complete-guide.mdx`
covers birds, 18 mentions). Page 10 (feeder insects) drops. Pages 11 and 12 become pellet
versus seed, safe fresh foods, and a never list where avocado, chocolate and onion carry
real weight. Page 15 becomes chronic egg laying rather than a single clutch, which is the
actual companion bird problem. Page 20 becomes molt and behavior instead of brumation and
shed. Expect roughly 32 to 36 by analogy with the other classes, and expect the health
pages to source well: the site is strong here (PBFD in 9 files, psittacosis in 7, feather
plucking in 18, egg binding in 8).

Two things a bird build will hit that no other class does. Five of ten birds
(budgie, canary, conure, lovebird, quaker parakeet) have **no feeding guide at all**, so
the diet pages source from nothing for those species. And `guides/birds.js` carries a
"rough starting ranges, not verified current pricing" comment on its cost block, which
pages 4 and 24 both draw from, so bird costs need checking against the MDX cost guide
rather than trusting the JS. Budgie and lovebird already have pre-v3 packages at 20 and
21 pages, so those are rebuilds rather than new builds. Cockatiel is the cleanest first
bird: seven articles including a feeding guide.

### Page count is a target, not a budget

Every page count in this doc is the expected shape, not a quota to hit. **Going over or
under is fine.** Accurate, complete, genuinely useful content beats landing on a number,
every time. The shipped range across four classes is 34 to 43, and the spread is the
point: the animal decides the length, not the template.

So never cut a real husbandry detail, a health red flag, a supplement dose, or a
temperature target to make a page fit. Ball Python v2.0 had to be rebuilt precisely
because husbandry detail got trimmed to fit, and the restored version came out at 34
pages. When a page runs long, in this order: combine it with a neighboring page that
shares its topic, split it into two pages and renumber, or just let the guide run longer.
When a page runs short, extend it with content that earns its place, the species' own
specifics, a worked example, a table that saves the reader a lookup, rather than padding
with filler or stretching the type to fill space.

Two half-empty pages are worse than one full page, and one clipped page is worse than
either. The one hard rule is that the count has to be *consistent* once it's locked in:
update the cover, the contents page, every in-text "page N" cross-reference, and every
footer to match, per step 8 of the build workflow.

## Build workflow

0. **Read `notes/{slug}-v*-notes.md` first, before touching anything.** If a previous
   edition of this animal exists, its notes file is the single most useful input to the
   build and it is mandatory reading, not optional background. It carries the exact HTML
   of everything the last edition had to cut, the page count it landed on and whether
   that was a measured floor or a choice, the pages that were wanted and never drafted,
   and the cut list in priority order. Rebuilding without it means re-researching content
   that is already written and sitting in the file, and re-litigating a page limit that
   was already measured. Also read the animal's block under **Site content gaps by
   package** and any gap article that has shipped since, so pages sourced from the PDF
   last time now get sourced from the site.

1. Copy `source/_template.html` to `source/{slug}.html`.
2. Pick an unused accent color triple (`--accent` / `--accent-dark` / `--accent-tint`).
   Check the other files' `:root` blocks so no two animals share one.
3. **Re-tone the cover chrome to match that accent.** The `:root` triple only drives the
   interior pages. Page 1 carries its own hard-coded palette, and in `_template.html`
   that palette is the bearded dragon's browns, so a new guide inherits them and ships a
   brown cover behind an animal that has nothing brown about it. This regressed the
   goldfish once already: v3.0's first build had a brown cover behind a teal photo
   because the cover was copied from the template verbatim.

   Every one of these is on the cover and every one needs changing:

   | What | Template (dragon) | Goldfish | Axolotl |
   |---|---|---|---|
   | Backdrop gradient | `#2B2420,#3A2E24,#4A3524` | `#12262B,#163640,#1B4552` | `#2B2420,#33283A,#432E44` |
   | Brand strip text | `#D8A876` | `#8FD0E0` | `#DBA4BE` |
   | Kicker and "Inside" label | `#C77C3F` | `#5FB8D6` | `#C77CA0` |
   | Icon and tick circle fill | `#E39257` | `#5FC8DC` | `#E39BC4` |
   | Tick check and icon eye | `#2B2420` | `#12262B` | `#2B2420` |
   | Headline | `#FBF3E7` | `#F2FAFB` | `#FBF3E7` |
   | Subhead and chip text | `#D8CBB8` | `#C7DEE3` | `#D8CBB8` |
   | "Inside" bullet text | `#E8DCC8` | `#EAF6F8` | `#E8DCC8` |
   | Chip borders | `#6B5540` | `#3E6672` | `#6B5566` |
   | Rule above "Inside" | `#5A4633` | `#2F5A66` | `#5A4633` |
   | Photo overlay rgba | `43,36,32` / `30,24,18` | `18,38,43` / `13,28,32` | unchanged |

   The gradient's first stop stays near-black in every guide; it is the second and third
   stops that carry the hue. Tint the vertical photo overlay to the same dark, or its
   bottom fade prints as a warm haze over cool water. Warm-toned animals (dragons, geckos,
   tortoises, birds, rodents) can legitimately keep the browns; anything cool-toned should
   not. Grep the cover block for `#3A2E24`, `#C77C3F`, `#E39257` and `#6B5540` before you
   call the cover done, and confirm the render, since a brown cover looks deliberate in
   markup and obvious on screen.
4. Fill in placeholders page by page using the sourcing table above. Do not paraphrase
   numbers from memory. Copy the exact figure from the MDX and re-verify anything that
   looks off against a real external source before "fixing" it.
5. Give every temperature and dimension in both units: `95 to 110°F (35 to 43°C)`,
   `4×2×2 ft (120×60×60 cm)`. Gumroad buyers are global.
6. Build the housing diagram last, as inline SVG, once the housing paragraph text is
   final. Keep labels short (title / number / sub-label on separate lines). Check that
   every `<text>` fits inside its `<rect>` in the render; the bearded dragon v3 first
   render had two labels spilling out of their boxes.
7. Base64-encode the chosen cover photo with a small script (never paste the base64
   string into a chat context) and drop it into `{{COVER_IMAGE_DATA_URI}}` using the
   existing `mask-image` fade, never a flat-color gradient overlay. Pick a photo where
   the animal faces the headline (toward the left), it reads far better than one
   facing off the page.
8. Fix the TOC page numbers, every in-text "page N" cross-reference, and every
   `.pagefoot` page number once the final page count is locked in. Grep for `page `
   and check each one.
9. Render to `rebuilt/{Animal}_Care_Package_v{N}.pdf`, where N is the version on the
   cover. Never overwrite the previous version's PDF; the old file stays as the record
   of what buyers of that version received. Once the new build replaces it, move the old
   file into `rebuilt/past versions/` and add a row to the README there saying what
   changed, so `rebuilt/` only ever holds the current edition of each animal. Careful
   with what "current" means: the bearded dragon's live edition is the 22-page
   unversioned file, not the newer v3 build, because v3 has not been listed yet. Check
   `carePackages.js` before moving anything.
10. Check for overflow. `.page` is `overflow:hidden`, so text that runs long
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
11. Icons must be small inline SVGs matching the existing minimalist style, never a raw
   emoji character or HTML entity. Headless Chromium print has rendered those as
   broken or flatly wrong glyphs 3 separate times already (crested gecko, goldfish,
   axolotl all had this bug). The `&#9633;` checkbox glyph in the 12-month planner is
   the one exception that has rendered fine.
12. **Log the gaps before you call it done.** Every package ends up with pages the site
   has no article for, and that list is the most valuable byproduct of building one: it
   is a ready-made content plan, already filtered to things a paying customer wanted
   enough to read. Add a block for your animal under **Site content gaps by package**
   below. Do it while the sourcing is fresh, not later.

   Four things to record, none of them optional:

   - **Derived gaps**, the pages that found no source in the site's own content.
   - **Proposed gaps**, the topics a keeper of this species needs that neither the page
     list nor the site raised. This is a required pass, not a bonus. Ask directly what
     this animal's owners get wrong, what decisions they face early, and what in a normal
     house can kill one, then write down whatever the repo does not already answer. The
     best articles in the log came from here, not from the greps. Label these rows
     **proposed** so a later reader knows they rest on knowledge rather than a hit count.
   - **What you found already covered**, so nobody rewrites it.
   - **Any number in the PDF with no site source at all**, because that is the copy no
     one can fact-check against the site later.

13. Park everything you cut into `notes/{slug}-v{N+1}-notes.md`. See the next section.


## Always keep a next-version notes file

Every package gets `notes/{slug}-v{N+1}-notes.md`, written as you build, not afterward.
Fitting a page count means cutting good content, and without this file that content gets
cut twice: once out of the PDF and once out of memory, so the next edition researches and
writes it again from nothing.

What goes in it:

- **The exact HTML of every block you removed**, in a fenced code block, with a one-line
  label saying which page it came off and why it went. Reinstating a block should be a
  paste plus a re-run of the overflow check, not a rewrite. Note its rough word count so
  a future editor knows whether it needs a page split to absorb.
- **The page count you landed on, and whether it was a floor or a choice.** Say whether
  the number came from the measurement script or from judgment, so nobody re-litigates a
  limit that was already measured.
- **Ideas raised and never drafted.** The pages you wanted and did not build, with enough
  detail to start from. This is usually the most valuable part of the file.
- **The proposed gaps from step 12**, the topics you know this animal's keepers need that
  neither the page list nor the site raised. They belong here as well as in the gap log:
  the log drives site articles, this file drives the next edition of the PDF, and a topic
  can deserve both. Keep them labeled as proposals so a later reader knows they still
  need sourcing.
- **A cut list for next time, in priority order.** Having just built the thing, you know
  better than anyone which pages would survive being dropped, and which are the product.
  Name the ones that must not be cut.

Two rules that matter:

- **Cut by parking, never by trimming.** When a page overflows, first split it or move a
  block to a page with headroom; park the block only when neither works. Do not shave
  sentences to make text fit, and never let `overflow:hidden` clip content silently. A
  fact half-stated is worse than the same fact on the next page.
- **Tighten layout before you cut content.** A `class="dense"` table, a `compact` list, a
  callout at `margin:7pt 0`, or a two-column block reclaims 20 to 100 px a page and costs
  nothing. Most small overflows are a layout problem wearing a content problem's clothes.

The goldfish v3.0 rebuild is the worked example: `notes/goldfish-v4-notes.md`. It is
also what step 0 makes mandatory reading for a goldfish v4: 17 parked blocks with their
original markup, a measured 39-page floor, six undrafted ideas, and a ranked cut list.
Writing the file and reading it are the two halves of the same rule, and the file is
worth nothing if the next build starts without opening it.

## Renumbering: generate it, don't hand-edit it

Splitting or merging one page moves every page number after it, and there are three
places each number appears: the TOC, the `.pagefoot`, and every in-text "page N"
cross-reference. Hand-editing those is where stale numbers ship.

Build the file from per-page fragments carrying `<!--PAGE key-->` and `<!--FOOT key-->`
markers, write cross-references as symbolic `{{P:key}}` tokens, and let a small build
script assign numbers in document order, generate the TOC from a section map, and resolve
the tokens. The script should refuse to build on a duplicate page key, a page missing from
the TOC, a TOC entry with no page, an unknown `{{P:key}}`, or a leftover placeholder. Then
a split costs one edit instead of forty, and a wrong number becomes a build failure rather
than a proofreading job. The goldfish v3.0 build script is the pattern.


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

The running list of site articles the packages need. Build workflow step 12 says to add
a block here when you finish a package; this is what turns "the PDF says something the
site doesn't" into a content plan.

How to use it: pick off the **cross-species** rows first, because one article closes the
same gap in every future package. When you write one, re-source that PDF page from the
new article, cross the row off here, and note the slug so the next person knows it exists.

Anything still open is copy that lives only in a PDF, so it has no site article to be
fact-checked against later. That is the actual risk this table tracks.

When you write one, follow the rules and the check table under **Writing site articles
for content the site does not have** above. The short version: 1 to 2+ in-body internal
links, a hand-written `RELATED_ARTICLES` entry unless the slug is exactly
`{guideId}-{suffix}` for one of the six auto-detecting suffixes, and dates spread across
days rather than dumped on one. No check will catch a missing entry on a reptile, bird,
or fish article.

### Bearded Dragon v3.0 (Aug 2026)

**Closed.** All six are live, listed in the table under **Writing site articles for
content the site does not have** above. The last two shipped since this block was
written: `bearded-dragon-safe-foods-guide.mdx` carries the full staple / occasional /
rare / never chart, and `bearded-dragon-health-issues-guide.mdx` was expanded in place
with internal parasites and the fecal test, mouth rot, tail rot and toe loss, eye
problems, and burns and prolapse. `reptile-emergency-plan-guide.mdx` covers the power
outage, travel, and pet-sitter pages for every reptile package, not just this one.

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

**Source drift, resolved Sep 2026.** `snakes.js` said cool side 76 to 80&deg;F and
humidity 50 to 60%; the MDX said 75 to 80&deg;F and 55 to 70%. Researched rather than
picking a winner, and the "MDX wins" call was only half right. ReptiFiles, republished by
Zen Habitats, gives warm side 90 to 95&deg;F, cool side **75 to 80&deg;F**, and ambient
humidity **55 to 65%**. So the cool side went to the MDX figure, but neither humidity
figure was correct: `snakes.js` was too low and the MDX was too high at the top. Both are
now 55 to 65% ambient with 70 to 80% through a shed, along with
`ball-python-tank-setup-guide.mdx`, `ball-python-health-issues-guide.mdx`, and the two
comparison articles, which had drifted separately to 50 to 60%. The package was rebuilt
as v2.1 to match.

The lesson worth keeping: when two internal sources disagree, "the dedicated guide wins"
picks a side without checking whether either side is right. Go to the external source
first when the number matters.

### Betta Fish v1.0 (Sep 2026)

The first aquatic package on the v3 template. `goldfish.html` and `axolotl.html` predate
v3 and carry none of its CSS additions, so the aquatic layout here was derived from the
adaptation note in this guide rather than copied from them. It came out at 36 pages, not
the 28 to 30 that note predicted at the time, because cycling, water chemistry, and water
changes need a page each rather than a shared one. That estimate has since been raised to
34 to 36 in the adaptation note, and it is what prompted the **Page count is a target,
not a budget** rule above.

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

**Source drift, resolved Sep 2026.** All five were researched rather than settled by the
precedence rule, and two of the first calls were wrong.

- **Cost.** `betta-fish-cost-guide.mdx` said both "$20 to $30 a month" and "$100 to $250
  a year," which cannot both be true. The package originally used an itemised $6 to $20 a
  month, and that was also wrong: the electricity line was understated. Heating a small
  tank runs $30 to $100 a year depending on climate, so about $3 to $8 a month on its own.
  Corrected everywhere to **$10 to $25 a month, $120 to $300 a year**, with a note that a
  year needing a course of medication runs higher. Package rebuilt as v2.0.
- **Mirrors.** `guides/fish.js` called brief mirror exposure "natural and healthy in small
  doses." The enrichment MDX was right and the JS is now corrected. The supporting study
  is *Androgens and corticosteroids increase in response to mirror images and interacting
  conspecifics in males of the Siamese fighting fish Betta splendens* (Hormones and
  Behavior, 2021): plasma cortisol and androgens rose to the aggression challenge
  independent of stimulus type, so a mirror produces the same endocrine response as a live
  rival, with live rivals only drawing more attempted bites.
- **Sororities.** `guides/fish.js` described them without the caveats. Now carries the
  20 gallon minimum, experienced-keeper framing, high failure rate, backup tank, and the
  rearing point from the BMC Zoology isolation study.
- **Feeding window.** The first call, that the MDX's 60 seconds beat `fish.js`'s two
  minutes, was **wrong**. Vet-reviewed guidance is 1 to 2 minutes with no leftovers, so
  `fish.js` was closer. The MDX and the package both moved to 1 to 2 minutes instead.
- **pH.** `betta-fish-tank-setup-guide.mdx` gave 6.5 to 7.8 against the dedicated guide's
  6.5 to 7.5. External sources back 6.5 to 7.5 as ideal with tolerance to about 8.0 and
  stability mattering more than the exact figure, so the setup guide was brought into line
  and gained the tolerance note. The package already used 6.5 to 7.5 and did not change.

### Rabbit v2.0 (Sep 2026)

The first mammal package on the v3 template, and the layout needed real surgery: the
reptile heat, UVB, thermostat and substrate pages have no mammal equivalent, so they were
replaced with indoors versus outdoors and temperature, flooring and litter training,
rabbit-proofing, bonding, and spay and neuter. Section 03 went the other way and grew,
because GI stasis needs three pages on its own. It came out at 39 pages.

For the next mammal build: expect 38 to 40 pages, expect the health section to be the
long one rather than the husbandry section, and expect two pages that reptiles never need,
a vet-choice page and a companionship page.

Already covered, do not rewrite: `rabbit-tank-setup-guide.mdx` carries the House Rabbit
Society space standard and the litter-training method. `rabbit-feeding-guide.mdx` carries
the full life-stage table and the never-feed list. `rabbit-gi-stasis-guide.mdx` and
`rabbit-health-issues-guide.mdx` between them cover triggers, warning signs and treatment.
`rabbit-enrichment-guide.mdx` covers all three studies.
`why-rabbits-need-unlimited-hay-and-what-happens-to-their-teeth-without-it.mdx` covers the
dental mechanism.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Small-mammal temperature, heat stress &amp; cold | 7 | Cross-species (small mammals) | Nothing anywhere. The tank setup guide gives the indoor-versus-outdoor lifespan figures but no temperature ranges, no heatstroke signs, and no cooling method. Serves rabbit, guinea pig, chinchilla, hamster, and every future small mammal |
| Bonding a pair, step by step | 15 | Rabbit | Nothing, and `rabbit-enrichment-guide.mdx` currently promises that the handling guide covers introductions when it does not (see drift below). Side-by-side pens, neutral territory, stress bonding, what is normal negotiation versus a real fight, and the weeks it actually takes |
| Spay and neuter beyond the price | 16 | Rabbit | `rabbit-cost-guide.mdx` has the cost and the 80% uterine cancer figure. Nothing on timing, what it changes behaviorally, how to choose a clinic, or the point that rabbits must **not** be fasted before surgery, which is also the best question for vetting a practice |
| Rabbit-proofing a room | 6 | Rabbit | Nothing. Cables first because that is the one that kills, then plants, baseboards, carpet corners, and pairing every block with an outlet |
| Grooming, nails &amp; molting | 24 | Cross-species (small mammals) | Nothing. Molt frequency, why a rabbit cannot cough up a hairball and what that means for GI stasis, nail trim interval and technique, scent glands, and why you never bath a rabbit |
| Reading droppings &amp; cecotropes | 25 | Rabbit | `rabbit-gi-stasis-guide.mdx` explains cecotropes in a FunFact. There is no reference for what the litter box is telling you, which is the earliest signal this species gives and the cheapest daily check in the whole package |
| Small-mammal power outages &amp; travel | 31, 32 | Cross-species (small mammals) | Nothing, and `reptile-emergency-plan-guide.mdx` does not transfer. Note the advice inverts for a rabbit: keep feeding through an outage, because a rabbit that stops eating is in more danger than a cold one |

**Numbers with no site source at all**, carried by the PDF only until the articles above
exist: the temperature table and heatstroke signs on page 7, the bonding stages on page
15, the spay and neuter timing on page 16, the nail trim interval and scent gland
schedule on page 24, and the droppings reference table on page 25.

**Source drift found while building:**

- **Three different GI stasis thresholds across three articles.**
  `rabbit-feeding-guide.mdx` says 3 to 12 hours, `rabbit-gi-stasis-guide.mdx` says 8 to
  12 hours, and `rabbit-health-issues-guide.mdx` says 8 hours or more. This is the single
  most important number in rabbit care and it should read the same everywhere. The package
  uses 8 hours as the line, with the 3-to-12 spread described as the range sources give.
  Pick one and propagate it.
- **A broken cross-reference promise.** `rabbit-enrichment-guide.mdx` says "Our handling
  guide covers introductions." `rabbit-handling-guide.mdx` contains nothing about
  introductions or bonding. Either write the bonding article above and point at it, or fix
  the sentence.
- **Pellet and green portions disagree between guides.**
  `rabbit-tank-setup-guide.mdx` gives 1/4 cup of pellets per 5 lb;
  `rabbit-feeding-guide.mdx` gives 1/8 to 1/4 cup per 5 to 6 lb. The dedicated feeding
  guide's range is the better figure and is what the package uses. Same for greens, where
  the feeding guide's "1 to 4 cups per several pounds depending on the source" is too
  vague to act on next to the setup guide's 1 cup per 2 lb.

### Tarantula v2.0 (Sep 2026)

The first invertebrate package on the v3 template. The reptile heat, UVB and thermostat
pages collapse into a single temperature and ventilation page, which frees a lot of room,
and the freed room goes to things no reptile package needs: two pages on molting, a page
on water alone, a rehousing method, urticating hair and bite first aid, and a legality
page. It came out at 43 pages, the longest in the series so far, largely because molting
and the handling question each split in two.

For the next invertebrate build: expect 40 to 43 pages, expect husbandry to be short and
the behavior and molting sections to be long, and expect the health section to be weighted
toward prevention because veterinary care for invertebrates barely exists.

Already covered, do not rewrite: `tarantula-legal-guide.mdx` carries the full state table
on page 28. `tarantula-enrichment-guide.mdx` carries the PLoS ONE study with all four of
its findings, which is the honest version and the one the package uses.
`tarantula-feeding-guide.mdx` carries the life-stage intervals and the seven reasons for
refusing food. `invertebrate-molting-guide.mdx` covers molting cross-species, though not
at the depth pages 13 and 14 needed.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Household pesticides and invertebrate pets | 26 | Cross-species (invertebrates) | Nothing anywhere, and it is one of the few ways a well-kept spider dies suddenly with no warning. Bug spray, plug-in insect killers, flea and tick treatment on a pet in the same room, ant powder, and wild-caught feeders. Serves tarantula, scorpion, mantis, millipede, and every future invertebrate |
| Rehousing an invertebrate | 18, 19 | Cross-species (invertebrates) | Nothing. The catch-cup-and-card method, working inside a larger tub, low to the ground, what to do when it bolts, and never during a molt. Two pages here because the preparation and the method are separate jobs |
| Urticating hair first aid | 17 | Cross-species (New World species) | `tarantula-handling-guide.mdx` explains the risk and cites the eye-injury literature but gives no first aid. Tape rather than washing for skin, flush and same-day attention for eyes, ventilation and a mask for airway |
| Sexing a tarantula from the exuvia | 27 | Tarantula | Nothing. The spermatheca in the shed skin is the only reliable home method, and it decides whether the animal is a 5-year pet or a 20-year one, which makes it more consequential here than sexing is for most species |
| Enclosure type by lifestyle | 7 | Tarantula | `tarantula-tank-setup-guide.mdx` says most pet species are terrestrial and stops there. No terrestrial versus fossorial versus arboreal table, which is the decision every other husbandry choice depends on, and getting it wrong is the commonest genuine welfare failure in the hobby |
| Water, and reading the abdomen | 9 | Tarantula | `tarantula-health-issues-guide.mdx` covers dehydration as a condition. Nothing frames the water dish as the single most important object in the enclosure, and there is no reference for reading the abdomen from plump through premolt to death curl |
| Invertebrate power outages, travel &amp; shipping | 35, 36 | Cross-species (invertebrates) | Nothing. Mostly reassuring, which is worth writing down: a tarantula is fine alone for two weeks. The transport and shipping half is where the real risk is |

**Numbers with no site source at all**, carried by the PDF only until the articles above
exist: the enclosure height ceiling and the 3&times;-leg-span floor rule on page 6, the
substrate depths by type on page 7, the abdomen reference table on page 9, the premolt
sign list and hardening windows on pages 13 and 14, and the sexing method on page 27.

**Source drift found while building:** none. The tarantula guides agree with each other,
which is worth noting because they are also unusually honest about where the underlying
sources disagree. The humidity range on page 8 is presented as an open disagreement rather
than a settled number, because `tarantula-tank-setup-guide.mdx` is right that it is one:
40 to 60% from the care-guide side, 65 to 75% from the clinical side, and a full water
dish plus one damp corner is what both sides actually do.

### Goldfish v3.0 (Sep 2026)

Already covered, do not rewrite: page 7's bowl-myth argument from
`goldfish-tank-size-bowl-myth.mdx`, which is a full deep dive. Page 16's slime coat and
net-and-cup handling from `goldfish-handling-guide.mdx`. Page 25's enrichment research,
the 90 percent planted versus 10 percent barren finding and the substrate foraging work,
from `goldfish-enrichment-guide.mdx`. Note `betta-fish-water-parameters-guide.mdx`
partially transfers: its GH and KH section and testing schedule are species-neutral, but
its target ranges are betta numbers and a goldfish is a coldwater fish, so do not lift the
table. `reptile-emergency-plan-guide.mdx` does **not** transfer at all, it is temperature
floors for reptiles and a fish outage is an oxygen problem.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Cycling an aquarium, fishless and fish-in | 10, 11 | Cross-species (fish) | The single biggest gap in the fish set. `goldfish-tank-setup-guide.mdx` gives cycling three sentences, and roughly ten other fish tank-setup guides mention the nitrogen cycle without ever explaining it. Needs the fishless stages week by week, and the fish-in recovery plan: test daily, 25 to 30% change above 0.25 ppm, ammonia binder, do not clean the filter. Most new owners are in the fish-in case |
| Aquarium filtration: turnover, media types, maintenance | 8, 9 | Cross-species (fish) | The MDX gives 4 to 10x turnover and nothing else. Needs the gph math worked for common tank sizes, mechanical vs biological vs chemical and which to disturb, why manufacturer ratings overstate, and rinse-in-tank-water-only with the reason |
| Freshwater pH, GH and KH for coldwater fish | 12 | Cross-species (fish) | The betta article covers hardness well but at tropical targets. Needs the goldfish-appropriate ranges and, more usefully, the KH-buffers-pH mechanism and why chasing a pH number with adjusting chemicals backfires |
| Quarantining and treating a new or sick fish | 16, 24 | Cross-species (fish) | `quarantine` returns hits only in the angelfish guides, in passing. Needs the 2 to 4 week minimum, the bare hospital tank, seeding it from a mature sponge filter, and why medicating the display tank costs you the bacteria colony |
| Aquarium power outages and transporting a fish | 33 | Cross-species (fish) | Nothing anywhere. Aeration first and temperature a distant second, battery air pump, the cup-pour trick, pulling biological media into an aerated container, and why restarting a long-dead filter without rinsing dumps decomposed waste into the tank |
| Goldfish safe foods chart | 15, 16, 17 | Goldfish | Expand `goldfish-feeding-guide.mdx`, not a new URL. It has the diet shape but no tier chart. Pellet vs gel vs flake, the vegetable list with blanching, protein foods weekly not daily, and the never list with reasons |
| Flukes, anchor worm, velvet, popeye and ulcers | 24 | Goldfish | Expand `goldfish-health-issues-guide.mdx`. It covers ich, fin rot, swim bladder, dropsy, fungus and ammonia, and stops there. The five added in v3.0 carry published veterinary doses that currently exist only in the PDF |
| Goldfish varieties, tankmate matching and sexing | 19 | Goldfish | Nothing on the site. Fancy vs single-tail vs eye varieties with adult sizes and minimums, why mixing body types is a feeding-time mismatch rather than a preference, and the honest answer that sexing is unreliable outside breeding condition |
| Reading fish waste | 26 | Cross-species (fish) | Nothing. White stringy versus pale trailing is the most useful early signal an owner has and it appears in no article |
| Goldfish growth, body condition and lifespan | 20 | Goldfish | Nothing. Also the place to make the point that a fish is not weighed weekly, water readings are its vital signs, which contradicts the reptile-shaped owner log in the template |

**Numbers with no site source at all**, carried by the PDF only until the articles above
exist: the pH, GH and KH targets on page 12, the gph turnover figures on page 8, the
growth table on page 20, the variety adult sizes and minimums on page 19, and the
praziquantel and diflubenzuron doses on page 24 (those are from Merck, not from the site).

**Source drift, unresolved.** `guides/fish.js` costs for goldfish still carry the
`// Rough starting ranges, not verified current pricing` comment and disagree with the
itemized budget on page 29, which sums to $208 to $500 of equipment against the JS
block's implied $170 to $345. The PDF figures are the researched ones. Worth correcting
`fish.js` so the two stop drifting.

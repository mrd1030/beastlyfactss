# African Fat-Tailed Gecko v2 notes

Written during the 1.0 build (October 2026), the first African fat-tailed gecko package. Read
this before starting v2, along with the **African Fat-Tailed Gecko 1.0** block under **Site
content gaps by package** in `../TEMPLATE_GUIDE.md` once it is merged there (the block is
parked at the end of this file until then).

## What 1.0 is

42 pages, guide version 1.0, template t3, built from fragments plus a build script in
`../source/african-fat-tail-src/`, copied from the White's tree frog build system. There is
no earlier edition. Cover photo is the owner's `images/african-fat-tail-cover-1.jpg`;
`african-fat-tail-cover-2.jpg` and `african-fat-tail-cover-3.jpg` are the alternates.
Package id and slug: `african-fat-tail`, matching the site's guide slugs.

## Which skeleton, and why

The terrestrial reptile skeleton (Leopard Gecko 2.1), since the fat-tail is a eublepharid
that lives the same ground-and-hides life. Four changes:

- **A comparison page right after the profile** (page 5, fat-tail against leopard gecko).
  Buyers confuse the two, and the difference that matters, humidity, is exactly the one a
  leopard gecko care sheet gets wrong for this species.
- **Five feeding pages instead of four.** GSC (Google Search Console) shows diet questions
  are the top searches for this species, so page 11 opens with a boxed short answer to "what
  do African fat-tailed geckos eat" and a sample week, before the schedule, feeder chart,
  dusting and refusal pages.
- **Substrate is its own page** because this species burrows and the site recommends a 4 in
  soil and sand mix for adults, not the leopard gecko's paper or tile default.
- **Seven health pages**, each condition in a cause, signs, diagnosis or response, recovery
  table. The leopard gecko's cryptosporidiosis page has no fat-tail equivalent: no source
  loaded during the build names *Cryptosporidium* in this species (see ideas below).

## Page count: 42, a choice, not a floor

Every page cleared on the first measured build. The count came from the page list, not from
overflow. Minimum free space at the final render is 38 px (page 24).

```
p2=408  p3=207  p4=187  p5=186  p6=174  p7=191  p8=213  p9=241  p10=188  p11=232
p12=201  p13=202  p14=164  p15=256  p16=262  p17=250  p18=255  p19=236  p20=317  p21=204
p22=217  p23=283  p24=38  p25=181  p26=96  p27=44  p28=259  p29=279  p30=241  p31=246
p32=327  p33=199  p34=328  p35=261  p36=207  p37=238  p38=117  p39=115  p40=104  p41=197
p42=333
```

Tightest: 24 (bone disease, 38), 27 (parasites, mouth rot, tail loss, burns, 44), 26 (egg
binding, 96). Roomiest: 2 (contents), 42 (about), 34 (routine), 32 (first 30 days), 20
(mistakes and enrichment), 23 (retained shed and eye problems). Pages 20 and 23 are where new
material should go first.

## Blocks removed during drafting

Nothing was cut for space. These were removed in the source-check pass because no source
loaded during the build carried them. Kept here so nobody re-adds them unsourced.

- Page 6, "A room with a television against the glass is not" fine. Invented.
- Page 8, the humid hide "drinks less from the dish when it does". Unsourced mechanism.
- Page 13, never-list reasons "carry what the plant carried" and "Venom, stings, irritant
  hairs". Replaced by the site's own reason: wild-caught, toxin and contamination risk.
- Page 14, "A thick coat falls off and a delayed meal licks itself clean". Folk advice.
- Page 15, "roughly in order" on the refusal list, and "has not built the tail reserve that
  lets an adult coast". Unsourced ranking and mechanism.
- Page 16, "easier to read as a predator". Replaced by the site's wording.
- Page 18, "Using the warmest spot more deliberately than usual" as a sign of laying, "expect
  her appetite back within days", and "Disturbance while she is trying to lay is the last
  thing she needs". All unsourced.
- Page 23, "a pale ring around a toe" and "rubbing its face on the substrate" as signs.
  Borrowed from the leopard gecko package without a fat-tail source.
- Page 27, mouth rot "later, swelling, cheesy material in the mouth, and refusing food".
  Merck gives only the early purplish red spots.
- Page 36, sitter call thresholds of 80&deg;F and 95&deg;F. Invented; replaced by "well
  outside 88 to 92&deg;F".
- Page 10, a dim red or moonlight-style night bulb. The site's tank setup guide recommends
  one; no veterinary source loaded supports it, and the leopard gecko package says colored
  night bulbs disrupt sleep. The package says lights off at night and heat without light.

## Ideas raised and never drafted

In rough priority order. Each needs sourcing before it goes on a page.

1. **Cryptosporidiosis in fat-tails.** Search results summarize *Cryptosporidium* (including
   *C. varanii*) as identified in African fat-tailed geckos and call the wasting "stick
   tail", but the page that says so (VIN Veterinary Partner, "Cryptosporidiosis in Lizards
   and Snakes") was behind a bot check and could not be read, and the Parasites and Vectors
   2025 *C. geckonae* paper does not mention the species. If a readable veterinary source
   confirms it, crypto deserves a full page as it has in the leopard gecko package, and the
   quarantine page gains its main argument.
2. **A morph page.** Amelanistic, Oreo, Whiteout, Zulu and stacked lines are priced on the
   site, with nothing on genetics or whether any line carries health problems. Needs a
   genetics or veterinary source.
3. **A growth and weight reference.** The site has 40 to 90 g adults and a 5 g alarm, and no
   weight by age. No veterinary growth table turned up. The owner log tracks monthly grams.
4. **Fertile eggs and incubation.** The package stops at "6 to 12 weeks, shorter when
   warmer" and the temperature-dependent sex table. A breeder page (incubation medium,
   humidity, hatchling setup) would need sources.
5. **CITES status.** Not printed. Animal Diversity Web's CITES line is garbled (it says the
   whole family Gekkonidae is Appendix I), and the IUCN assessment PDF returned 403. Confirm
   from the CITES checklist or Species+ before printing anything.
6. **Seasonal cycling.** Cadillac Veterinary Clinic gives a rainy and dry season cycle (warm
   side 90 to 94&deg;F April to October, 79&deg;F November to March, nights 63 to 64&deg;F in
   the dry season) and 30 to 40% humidity. The package uses the site's one set of targets
   all year and mentions the cycle in one sentence on page 21.
7. **Heat without light.** Page 7 names a ceramic heat emitter on its own thermostat for cold
   rooms; a short reptile-wide article on night heat, and on why colored night bulbs are
   not needed, would let page 10 cite the site.

## Proposed gaps, carried from the build

Also in the gap block at the end of this file, where they drive site articles. They rest on
knowledge of the species rather than on a grep, and still need sourcing.

- A fat-tail against leopard gecko comparison article.
- A feeding-guide expansion aimed at the diet searches: sample week, multivitamin, gut-load
  list, never list tidied.
- Holding 50 to 70% in a dry house without wetting the enclosure.
- Morph-linked care and pricing.
- Night heat and night lighting for nocturnal reptiles.

## Cut list for v2, in priority order

If v2 has to lose pages:

1. **Page 21, shedding, seasons, sounds and behavior.** The sounds table and the normal or
   worth-a-look table are the parts to keep; fold them into pages 16 and 22.
2. **Page 20, mistakes and enrichment.** The mistakes table repeats fixes found elsewhere.
3. **Page 33, symptom quick reference**, only if the health pages each gain a one-line
   "go now" summary. Otherwise keep it: it is a print page.

**Do not cut, in any version:**

- **Page 5, fat-tail against leopard gecko.** The reason a buyer picks this package over a
  leopard gecko one.
- **Page 8, humidity and the three hides.** The commonest fat-tail problem is a dry hide.
- **Pages 11 to 15, the feeding section.** The searches people actually run.
- **Page 7, the thermostat and probe.** The page that prevents burns.
- **Pages 29, 30, 36 and 37.** The checklist, emergency card, sitter sheet and owner log are
  what people print.

## Site may be wrong, found during the build

None of these were edited on the site.

- **Habitat.** `gargoyle-mourning-african-fat-tail-gecko-overview.mdx` says fat-tails are
  "nocturnal ground dwellers from the desert areas of West Africa". That wording comes from
  the Reptiles Magazine care sheet it cites. The encyclopedia (arid savanna, dry forest and
  rocky scrubland), `african-fat-tail-handling-guide.mdx` (savanna), Animal Diversity Web
  (rocky woodlands and savannas) and Tree of Life (arid and semi-humid grasslands) all say
  otherwise. The package prints savanna and scrub, and page 42 names "desert" as the outlier.
- **Quarantine end point.** `african-fat-tail-health-issues-guide.mdx` says a new gecko is
  quarantined "until its fecal comes back clean". `reptile-quarantine-guide.mdx`, on Merck,
  runs 3 to 6 months and says reaching a clear fecal is not the finish line. Page 19 follows
  the quarantine guide.
- **A paragraph in the wrong section.** `african-fat-tail-feeding-guide.mdx`, under "Safe
  Treats and Foods to Avoid", opens a paragraph with "Never keep one on pure sand", a
  substrate point, before the never-feed list. It reads as misplaced on the page buyers reach
  from the diet searches.
- **Substrate in the cost table.** `african-fat-tail-cost-guide.mdx` prices "Cypress mulch or
  coconut fiber substrate" at $15 to $40. The tank setup guide and the hub recommend roughly
  70% topsoil to 30% play sand, or coconut fiber with reptile sand, and never mention cypress
  mulch. Page 31 prints the setup guide's mix at the cost guide's price.
- **Night bulb.** `african-fat-tail-tank-setup-guide.mdx` says to "use a dim red or
  moonlight-style bulb rather than bright white light at night". No veterinary source loaded
  for this build supports a night bulb for this species. Worth checking against a source and
  probably softening to "lights off at night".
- **Twenty-gallon minimum, two answers.** The fat-tail guides give a 20-gallon long as the
  minimum (Tree of Life agrees), while `leopard-gecko-tank-setup-guide.mdx` calls the same
  tank inadequate for a leopard gecko of the same size because it is too short to hold a
  gradient. Both cite their sources; the two should at least explain the difference.

## Site content gaps (to merge into TEMPLATE_GUIDE.md)

### African Fat-Tailed Gecko 1.0, t3 (Oct 2026)

A new build, 42 pages. Source is fragments plus a build script in
`source/african-fat-tail-src/`, and `notes/african-fat-tail-v2-notes.md` carries the per-page
free space, the claims removed in the source-check pass, seven undrafted ideas and a ranked
cut list. It is the terrestrial reptile skeleton (Leopard Gecko 2.1) with four changes: a
comparison page against the leopard gecko after the profile, five feeding pages led by a
boxed short answer because diet questions are this species' top searches, substrate as its
own page because the species burrows, and seven health pages each written as cause, signs,
diagnosis or response, and recovery. No legal page: a short note on page 19 uses class-wide
rules only. The White's tree frog head CSS fitted every page first time, minimum 38 px free.

Already covered, do not rewrite: `african-fat-tail-tank-setup-guide.mdx` carries the
20-gallon floor, the 88 to 92&deg;F warm side, 75 to 80&deg;F cool side and 70 to 75&deg;F
nights, the 50 to 70% and 70 to 80% humidity split, the soil mix and 4 in depth, and the 2 to
5% UVB. `african-fat-tail-feeding-guide.mdx` carries the schedule by age, portions, the
staples, the never list and the nine refusal reasons. `african-fat-tail-handling-guide.mdx`
carries sexing, maturity in days, the incubation temperatures and the vocalizations.
`african-fat-tail-enrichment-guide.mdx` carries the Bashaw ranking and the Bragg nest
temperatures. `african-fat-tail-cost-guide.mdx` carries every budget line on page 31.
`reptile-emergency-plan-guide.mdx` carries the fat-tail night floor (act below 70&deg;F) and
the outage and trip method on page 35. `reptile-quarantine-guide.mdx`,
`reptile-heating-thermostats-guide.mdx`, `reptile-salmonella-hygiene-guide.mdx`,
`reptile-stool-urates-hydration-guide.mdx`, `gut-loading-feeder-insects-guide.mdx` and
`uvb-lighting-complete-guide.mdx` (Ferguson Zone 1 for this species) carry pages 19, 7, 16
and 9, 28, 14 and 10.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Female lizards: infertile clutches, lay boxes and egg binding | 18, 26 | Cross-species (egg-laying lizards) | **Derived.** Extends the existing Leopard Gecko and Crested Gecko row; no second row. The fat-tail half: 1 to 3 eggs a clutch and up to 5 clutches in a season (Animal Diversity Web), every 15 to 22 days in a 4 to 5 month season and sperm storage (Cadillac Veterinary Clinic), and the laying box over the warm end because females chose 32.4&deg;C nest sites (Bragg 2000, already in the enrichment guide). The health guide has egg binding in one paragraph; Merck's point that reptile dystocia is often not sudden, and that medical treatment often fails, is PDF-only |
| Gecko sexing, growth and body condition | 17 | Cross-species (geckos) | **Derived.** Extends the existing row. Sexing and maturity are now on the site for this species (handling guide); the weight-by-age half is still missing, and no veterinary growth table was found. Obesity framing (Merck: slow reduction over months) is PDF-only |
| Fat-tail health, at package depth | 23 to 27 | African fat-tail | **Derived.** Expand `african-fat-tail-health-issues-guide.mdx`, not a new URL. Missing: eye problems beyond one line (retained eye caps as a vet job, Cadillac's "second most common"), vitamin A deficiency and gout (Merck), mouth rot, burns and prolapse, impacted preanal pores and hemipenis prolapse in males (Cadillac), and diagnosis and recovery for every entry. Every one of those rows is PDF-only |
| Multivitamin frequency | 11, 14 | African fat-tail | **Derived.** Zero site coverage: the feeding guide gives plain calcium and calcium with D3 but never a multivitamin schedule. Tree of Life and Reptiles Magazine both give once a week. One sentence in the feeding guide closes it |
| Choosing and sourcing a reptile | 19 | Cross-species (reptiles) | **Proposed.** Extends the existing Leopard Gecko row. The fat-tail half is the wild-caught history (exports through Ghana, Togo and Benin, now only in the encyclopedia's history field) and the fecal test for any new or wild-caught gecko |
| Legal status for the African fat-tailed gecko | 19 | African fat-tail | **Derived.** Not in `legalStatus.json`. Page 19 carries a short note built from class-wide rules only (DC, Hawaii, West Virginia, New Jersey's family listing, Maine's captive-bred condition). The owner's call is that no legal guide will be written; adding the species to the legal research would still let a future page say which states are clear |
| Fat-tail or leopard gecko: a comparison | 5 | African fat-tail and leopard gecko | **Proposed**, from the build and the owner's note that buyers confuse the two. The site has a gargoyle, mourning and fat-tail roundup but no fat-tail against leopard piece. Humidity first, then origin, temperament, substrate, enclosure, nest temperature and price |
| Feeding guide, aimed at the diet searches | 11 to 15 | African fat-tail | **Proposed.** Expand `african-fat-tail-feeding-guide.mdx`: a short answer up top, a sample week, the multivitamin, the gut-load food list from the gut-loading guide, and the misplaced sand paragraph moved out of the never-feed section |
| Night heat and night lighting for nocturnal reptiles | 7, 10 | Cross-species (reptiles) | **Proposed.** The fat-tail setup guide recommends a red or moonlight bulb at night and the leopard gecko package says colored bulbs disrupt sleep. One article settles it with a source: lights off, heat with no light, and when a ceramic emitter is needed |
| Holding moderate humidity in a dry house | 8 | Cross-species (fat-tail, leopard gecko, and other dry-enclosure species with a humid hide) | **Proposed.** Misting frequency, a moist lower substrate layer, partial lid cover, where to put the hygrometer, and the respiratory risk on the other side |

**Numbers with no site source at all:** the multivitamin once a week (pages 11, 14, 38);
clutch size, clutch number, the 15 to 22 day interval and 6 to 12 week incubation (page 18);
every diagnosis, treatment and recovery line on pages 23 to 27 beyond what the health guide
names, from Merck, PetMD and Cadillac Veterinary Clinic; the eye-problem ranking (page 23);
the impacted pores and hemipenis prolapse (page 26); the untreated-topsoil detail (page 9);
the vet triggers used to choose a gecko (page 19); the derived totals on page 31, $353 to
$715 all-in and $208 to $420 without UVB, which are sums of the cost guide's own lines; and
the class-wide state notes on page 19, which come from `legalStatus.json` and `stateNotes.js`
rather than from a fat-tail entry.

**Site work found by the build, not fixed there.** Six items, listed in full under "Site may
be wrong" above: the overview's "desert areas", the health guide's quarantine end point, a
misplaced sand paragraph in the feeding guide, cypress mulch in the cost table, the night
bulb in the setup guide, and the two answers to the 20-gallon question.

**Source drift found while building.** Humidity runs from about 30 to 40% (Cadillac
Veterinary Clinic, which the setup guide cites) to 50 to 70% (Tree of Life, the site); the
package keeps 50 to 70% because a dry enclosure is what causes this species' commonest
problem. Gut-loading is 24 to 48 hours in the species guide and 24 to 72 in the gut-loading
guide; the package prints the first inside the second. Lifespan is 15 to 20 commonly cited
with a documented record just over 16 (cost guide), against 10 to 20 in Tree of Life and
Animal Diversity Web; page 4 prints the site figure and page 42 the spread. None is a site
error.

## Pointer trim, 1.0

Page pointers trimmed by the maze rules so every package reads alike: tool pages (how to use,
setup checklist, emergency card, first 30 days, symptom reference, routine, sitter sheet) keep
one pointer per row; everywhere else one pointer per destination per page, no pointer to the
page you are on, no pointer to the next or previous page in the same section, no ping-pong
(A to B and B to A), and nothing points to the glossary. Glossary entries keep every page
that covers the term; each listed page was checked and still covers it.

| | Before | After |
|---|---|---|
| Pointers, total | 131 | 118 |
| On tool pages | 48 | 47 |
| Repeats on care pages | 5 | 0 |
| Glossary pointers (out) | 16 | 16 |
| Ping-pong pairs | 1 | 0 |
| Pointers to the glossary | 1 | 0 |
| Self-pointers | 0 | 0 |

The 13 removed: the how-to page's "collected in the Glossary on page 39"; the MBD page's
gout pointer back to Reading Poop (ping-pong); same-section neighbors (enclosure to the heat
mat, feeders to supplements, red flags to retained shed, retained shed to MBD, Reading Poop
to parasites); second pointers to the same page (the diet page's yard-insects line, now
covered by the four-parts table, and its second supplements cell, merged into one cell
spanning both rows; the red-flags table's impaction row; the second state-rules pointer on
Sources); and the About page's two pointers back to Sources. The four-parts table keeps its
Page column, including the next-page schedule row, as a section index. All 42 pages still
fit (minimum 38px free).

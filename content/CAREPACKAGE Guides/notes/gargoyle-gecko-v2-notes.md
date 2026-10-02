# Gargoyle Gecko v2 notes

Written during the 1.0 build (October 2026), the first gargoyle gecko package. Read this
before starting v2, along with the block below under **Site content gaps**, which is written
to be merged into `../TEMPLATE_GUIDE.md`.

## What 1.0 is

41 pages, guide version 1.0, template t3, built from fragments plus a build script in
`../source/gargoyle-gecko-src/` (the White's tree frog build system, copied). There is no
earlier edition. Cover photo is the owner's `images/gargoyle-gecko-cover-1.jpg`, embedded
as is, `object-position:25% 45%`; the eye renders clear of the 30% fade.

## Which skeleton, and why

The arboreal reptile skeleton (Crested Gecko 2.0), with these changes:

- **Page 6 is the gradient and the 86&deg;F (30&deg;C) ceiling**, and it argues against the
  "no heat needed" myth, which the site's own tank setup guide calls the most repeated
  mistake. The crested package's 85&deg;F ceiling and 72&deg;F action line do not transfer.
- **Feeding takes five pages**: diet by age, the powder, insects and supplements, treats and
  appetite, and weight. Insects are required for this species, so they get their own page
  rather than an extras row.
- **Sexing became sexing plus single housing**, because the gargoyle's tail-nipping and
  rough mating make "one per enclosure" a reasoned page, not a line.
- **Floppy tail syndrome shares a page with tail loss**, because this species regrows its
  tail and a buyer coming from a crested gecko confuses the two.
- **No stool page of its own.** Droppings and urates fold into the overheating and
  dehydration page; the reptile skeleton's page 21 did not need a full page here.
- **Two glossary pages.** The owner's rule (every abbreviation and jargon term spelled out
  and glossed) produced 50 entries.
- **Legality is a paragraph on page 19**, per the owner's rule. No state table.

## Page count: 41, a choice, not a floor

Every page cleared on the first measured build. Minimum 66 px free (page 6), then 73
(budget, page 30) and 99 (equipment log, page 37). Nothing was cut for space.

```
p2=409  p3=274  p4=151  p5=239  p6=66   p7=209  p8=257  p9=250  p10=171 p11=297
p12=291 p13=224 p14=184 p15=216 p16=321 p17=288 p18=204 p19=276 p20=280 p21=227
p22=253 p23=275 p24=320 p25=333 p26=202 p27=202 p28=217 p29=187 p30=73  p31=395
p32=363 p33=372 p34=226 p35=286 p36=192 p37=99  p38=222 p39=220 p40=170 p41=326
```

Roomiest: 31 (first 30 days), 33 (routine), 32 (symptoms), 25 (stuck shed and respiratory),
16 (handling), 24 (floppy tail). That is where v2 material goes without a split.

## Blocks removed during drafting

Nothing was cut for space. These were removed in the source-check pass because no source
loaded during the build carried them. Kept here so nobody re-adds them unsourced.

- Page 26, overheating: "by the time a reptile shows heat stress, the damage may already be
  done", and "Do not put it in cold water". The second came from a LafeberVet page on
  mammals, not reptiles.
- Page 27, impaction: "who confirms it with x-rays" and "keep insects small" (no insect size
  rule is sourced for this species; see ideas below).
- Page 27, mouth rot: "usually in a gecko already weakened by poor conditions", "yellow-white"
  material, and "caught early it responds to treatment".
- Page 27, prolapse: "Pink or red tissue", "keep it on damp paper towel so the tissue does
  not dry", and the word "emergency" (Merck lists causes, not urgency; the package says
  same-day vet call).
- Page 26, dehydration: "often with repeated stuck sheds" and "wrinkled-looking". Merck gives
  loose skin and sunken eyes only.
- Page 23, MBD: "in a climbing gecko, an animal that stops going up is an early clue".
- Page 24: "may twitch on its own for a while" (dropped tail), "paper towel underneath if the
  stump is raw", and "lets gravity bend the tail base over months" (mechanism not sourced).
- Page 25: "A freed toe recovers" and "Good with prompt treatment" (respiratory infection).
- Page 18: "low in the enclosure" for the laying box, and dehydration as an egg-binding cause.
- Page 12: "Sooner in a warm room" for removing made-up diet.
- Page 15: "climbs to the top of its enclosure every night" as a body-condition sign.
- Page 20: "Rearranging everything at once is not [reasonable]" (crested package wording, not
  in the gargoyle enrichment guide).
- Page 41, lifespan row: "an average of 20", which came from a search snippet, not a loaded
  page.

## Ideas raised and never drafted

In rough priority order. Each needs sourcing before it goes on a page.

1. **A heat-stress page with real signs.** The package prints the 86&deg;F (30&deg;C) ceiling
   and acts on the thermometer, because no loaded veterinary source describes what an
   overheated gargoyle looks like. Same gap as the Crested Gecko and White's Tree Frog blocks.
2. **CITES status.** Not printed. The site's crested gecko legal data calls *Correlophus*
   CITES Appendix II; for *Rhacodactylus auriculatus* the build found only a French CITES
   database page whose listing it could not read reliably (it showed EU Annex D). A v2
   should load Species+ or the CITES checklist and add one line to page 19 either way.
3. **Hawaii listing for this species.** The legal note tells Hawaii buyers to check. The
   crested gecko legal entry notes *R. leachianus* is on Hawaii's restricted list; whether
   *R. auriculatus* is listed was not researched.
4. **Insect size rule.** Every care sheet has one ("no wider than the head", "the space
   between the eyes"), and none of the sources loaded states one for this species.
5. **Powder portions by age.** The crested gecko feeding guide gives 1/2 tsp juvenile and
   1 tsp adult; no gargoyle source loaded gives a portion, so the package does not print one.
6. **A morph and color-line page.** Reticulated, striped, red-striped, orange-striped, super
   red, white and black, what the prices buy, and whether any line carries a health problem.
7. **Choosing among the New Caledonian geckos.** Crested, gargoyle, chahoua, leachianus: the
   side-by-side on page 17 is a callout; a buyer comparing them needs a page.
8. **Shed frequency for this species.** No figure was found; page 21 says there is no
   universal schedule, which is what the site's shedding guide says.

## Proposed gaps, carried from the build

Also logged in the gap block below, where they drive site articles. They rest on knowledge of
the species rather than on a grep, and still need sourcing.

- Overheating and heat stress (cross-species; extends the Crested Gecko row).
- Egg-laying females and egg binding for geckos (extends the Leopard and Crested rows).
- A gecko sexing, growth and weight reference (extends the Leopard and Crested rows).
- The gargoyle bite: first aid for a bite that breaks skin, and *Salmonella* in a wound.
- Choosing a gargoyle: color lines, prices, and the questions to ask a breeder.

## Cut list for v2, in priority order

If v2 has to lose pages:

1. **Page 21, shedding, seasonal slowdown and behavior.** Its normal-or-worth-a-look table is
   the part to keep; fold it into page 22.
2. **One glossary page**, by trimming entries to one line each, only if the owner relaxes the
   gloss-everything rule.
3. **Page 20, common mistakes and enrichment.** The mistakes table repeats fixes found
   elsewhere; the research paragraph and priority order are the unique part.

**Do not cut, in any version:**

- **Page 6, the gradient and the 86&deg;F ceiling.** The organizing idea of the package, and
  the page that corrects the "no heat" myth.
- **Page 7, the humidity cycle chart.** Too wet and too dry are the two mistakes behind most of
  Section 05.
- **Page 9, the clutter page, and page 24, floppy tail.** The species-specific husbandry.
- **Page 11, insects are required.** The difference from a crested gecko that matters most.
- **Page 15, weight.** The only objective early warning the owner has.
- **Pages 29, 35, 36.** The emergency card, sitter sheet and owner log are what people print.

## Site may be wrong, found during the build

Listed in the build report too. None of these were edited on the site.

- **Setup cost leaves out the heat.** `gargoyle-gecko-cost-guide.mdx` prices gear at $230 to
  $445 (and its seoTitle carries it) with no heat bulb, dome or thermostat, while
  `gargoyle-gecko-tank-setup-guide.mdx` says a low-wattage bulb on a thermostat is the normal
  setup and the no-heat belief is the most repeated mistake. The package adds the heat bulb
  and dome ($20 to $40) and thermostat ($30 to $35) at the crested gecko cost guide's
  figures, plus a water dish and feeding ledge from `affiliateProducts.js`: $301 to $553.
- **The cost guide contradicts itself twice.** Electricity is a $25 to $45 annual line in its
  table and "negligible" in its prose; the annual vet check is $50 to $90 in the table and a
  routine exam is $50 to $150 in the next section. Its FAQ also calls a yearly UVB swap "the
  conservative end of the 6-to-12-month window", when yearly is the long end. ReptiFiles
  (MBD page) says every 6 months; Merck says 9 to 12 for fluorescent tubes.
- **Calcium sacs location.** `gargoyle-gecko-health-issues-guide.mdx` (body, FAQ and FunFact)
  puts "the two calcium sacs under the throat". The ReptiFiles MBD page it cites describes
  them as "calcium stores located on the roof of the mouth, at the back of the palate". The
  package follows ReptiFiles and says a vet checks them.
- **The overview contradicts the setup guide on heat.**
  `gargoyle-mourning-african-fat-tail-gecko-overview.mdx` titles the gargoyle section "The One
  Where Heat Is the Enemy", says "room temperature is correct, and anything much above 82&deg;F
  starts to cause real problems", while the setup guide gives an 82 to 85&deg;F basking spot,
  an 86&deg;F ceiling, and calls "no heat needed" a misconception. The overview also gives 8 to
  10 in, the encyclopedia 7 to 9 in (ReptiFiles says 8 to 10; Reptiles Magazine about 8 in).
- **Floppy tail is not gargoyle-specific.** The gargoyle health guide calls FTS "a
  gargoyle-specific condition" and its FAQ says "largely specific to this species", while
  `crested-gecko-health-issues-guide.mdx` covers FTS in crested geckos. Worth "common in
  crested and gargoyle geckos".
- **The emergency plan's gargoyle row is a crested figure.** `reptile-emergency-plan-guide.mdx`
  lumps "Crested &amp; gargoyle gecko" with an action line of "sustained below 72&deg;F day
  and night", sourced to a crested gecko care sheet, while the gargoyle setup guide (and
  ReptiFiles) allow nights into the mid-60s with 65&deg;F as the floor. The package uses 65&deg;F.

## Site content gaps (to merge into TEMPLATE_GUIDE.md)

### Gargoyle Gecko 1.0, t3 (Oct 2026)

A new build, 41 pages, on the arboreal reptile skeleton (Crested Gecko 2.0) with the
White's Tree Frog build system. Source is `source/gargoyle-gecko-src/`, and
`notes/gargoyle-gecko-v2-notes.md` carries the per-page free space, the claims removed in
the source-check pass, eight undrafted ideas and a ranked cut list. The page count rose over
the crested gecko's 34 because insects are required for this species (five feeding pages),
single housing and tail regrowth each needed room, and the owner's gloss-everything rule
took the glossary to two pages. Minimum 66 px free on the first measured build.

Already covered, do not rewrite: `gargoyle-gecko-tank-setup-guide.mdx` carries the
18&times;18&times;24 in minimum and 24&times;24&times;24 in ideal, the gradient and the 86&deg;F
ceiling, the 50 to 70% cycle, substrate, the UVB spec and the clutter argument.
`gargoyle-gecko-feeding-guide.mdx` carries the schedule by age, insects as required, the
mixing ratio, the never list, the six refusal reasons and the 2 to 3 week, 4 to 5 day and 2 to
3 day thresholds. `gargoyle-gecko-handling-guide.mdx` carries the session lengths, the bite,
tail regrowth, sexing at 18 to 25 g and the breeding figures. `gargoyle-gecko-health-issues-guide.mdx`
carries MBD, stuck shed, respiratory infection, FTS, parasites and impaction.
`gargoyle-gecko-enrichment-guide.mdx` carries the borrowed crested and leopard gecko evidence.
`reptile-quarantine-guide`, `reptile-salmonella-hygiene-guide`, `reptile-stool-urates-hydration-guide`
(which names the gargoyle's softer stool), `reptile-shedding-complete-guide` and
`gut-loading-feeder-insects-guide` carry pages 10, 13, 19, 21, 25 and 26 as written.
`reptile-emergency-plan-guide.mdx` **only half transfers**: its method is used on page 34, but
its gargoyle row carries a crested figure (see the site list) and it has no heat-wave half.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Overheating: heat stress in reptiles and what to do about it | 6, 26, 34 | Cross-species (reptiles, tropical first) | **Proposed; extends the Crested Gecko row, do not open a second.** Zero hits for heat stress, overheating or heatstroke in any gargoyle file. The package acts on the thermometer because no loaded veterinary source gives reptile heat-stress signs or first aid. The gargoyle adds the lowest ceiling in the set, 86&deg;F (30&deg;C) |
| Female lizards: infertile clutches, lay boxes and egg binding | 18 | Cross-species (egg-laying lizards) | **Derived; extends the Leopard and Crested rows.** Zero hits for egg binding or dystocia in any gargoyle file; the handling guide has the laying box for a breeding female only. The gargoyle half: two-egg clutches, 4 to 5 a season at 4.5 to 6 week intervals (BGSU), and VCA's point that most egg-bound reptiles seen by vets are single females. Page 18 is VCA and Merck |
| Gecko sexing, growth and body condition | 15, 17 | Cross-species (geckos) | **Derived; extends the Leopard and Crested rows.** The gargoyle half is weight-shaped: under about 12 g hatchling, 18 to 25 g for the male bulge, about 35 to 40 g at maturity, 45 to 65 g adult. Only the 12 g and 18 to 25 g figures are on the site; the rest are PDF-only (Reptiles Magazine, BGSU, ReptiFiles) |
| Mouth rot, prolapse and mites in geckos | 27 | Cross-species (lizards) | **Derived.** Zero hits for stomatitis, mouth rot or prolapse in any gargoyle file. Page 27's entries are Merck (bacterial, parasitic, and the pet owner disorders page) |
| CITES and Hawaii status for *Rhacodactylus auriculatus* | 19 | Gargoyle gecko, and leachianus | **Derived.** Not in `legalStatus.json`. Page 19 carries only class-wide lizard rules (Hawaii's list rule, DC, conservation-status clearances, West Virginia's import permit). CITES was not printed because no loaded source confirmed the listing either way |
| Floppy tail syndrome, at package depth | 24 | Cross-species (crested and gargoyle) | **Extends the Crested Gecko row.** The gargoyle guide has a paragraph; the package adds the glass-gripping reason, diagnosis and the amputation outcome from ReptiFiles. Write the expansion once for both species |
| Gargoyle bite first aid | 16 | Gargoyle, tokay and other large-toothed geckos | **Proposed.** The site says "soap and water" and stops. A bite that draws blood from an animal that carries *Salmonella* deserves a short, sourced first-aid section |
| Choosing a gargoyle: color lines and breeders | 19 | Gargoyle gecko | **Proposed.** The cost guide prices the lines; nothing explains what a reticulated, striped or super red animal is, or what to ask a breeder beyond the four questions in the quarantine guide |

**Numbers with no site source at all:** the 45 to 65 g adult weight and about 35 to 40 g at
maturity (page 15; ReptiFiles, Reptiles Magazine, BGSU); the 4 to 5 clutches at 4.5 to 6
week intervals and 6 laying years (page 18; BGSU); every egg-binding figure on page 18 (VCA,
Merck); the calcium-sac location (page 15; ReptiFiles, against the site); Merck's 12 in
(30 cm) fluorescent distance (page 8); the light morning mist and 80 to 100% peak (page 7;
ReptiFiles); the mouth rot, prolapse, cryptosporidiosis and mite entries (page 27; Merck);
the dehydration signs (page 26; Merck); and the budget lines for the heat bulb and dome and
the thermostat (crested gecko cost guide) and the water dish and feeding ledge
(`affiliateProducts.js`), and with them the $301 to $553 equipment and $436 to $1,048 all-in
totals (page 30).

**Site work found by the build, not fixed there.** Six items, listed in full in this notes
file under **Site may be wrong**: the cost guide's gear total omits the heat source the setup
guide requires; the cost guide contradicts itself on electricity, the vet check and the UVB
interval; the health guide puts the calcium sacs under the throat against its own cited
source; the overview contradicts the setup guide on heat and size; FTS is called
gargoyle-specific; and the emergency plan's gargoyle row carries a crested figure.

**Source drift found while building.** Care sheets disagree on adult size (7 to 9 in, 8 to
10 in, about 8 in), adult weight (35 g at maturity to 65 g), basking (82 to 85&deg;F or
84&deg;F), the cool end (70 to 75&deg;F or 72 to 74&deg;F), night (65 to 72&deg;F, 68 to
77&deg;F, the low 70s), humidity (50 to 70%, 60 to 80%), adult powder (every 2 to 3 days,
every other day, three times a week), adult insects (weekly, twice monthly, three times a
week) and UVB life (6 months to a year). The site's figures sit inside every range and the
package keeps them; page 41 prints the spread.

## Pointer trim, 1.0

Page pointers trimmed by the maze rules so every package reads alike: tool pages (how to use,
setup checklist, emergency card, first 30 days, symptom reference, routine, sitter sheet) keep
one pointer per row; everywhere else one pointer per destination per page, no pointer to the
page you are on, no pointer to the next or previous page in the same section, no ping-pong
(A to B and B to A), and nothing points to the glossary. Glossary entries keep every page
that covers the term; each listed page was checked and still covers it.

| | Before | After |
|---|---|---|
| Pointers, total | 170 | 147 |
| On tool pages | 46 | 46 |
| Repeats on care pages | 9 | 0 |
| Glossary pointers (out) | 51 | 51 |
| Ping-pong pairs | 7 | 0 |
| Pointers to the glossary | 0 | 0 |
| Self-pointers | 0 | 0 |

The 23 removed: ping-pong returns (humidity to shed, UVB to MBD, substrate to FTS, diet to
enrichment, insects to MBD, appetite to behavior); same-section neighbors (enclosure to the
gradient, UVB to furnishings, diet to powder twice, powder to diet, sexing to eggs, FTS to
MBD, droppings to parasites); second pointers to the same page (powder to appetite, the
mistakes table's second gradient and substrate rows, the behavior table's second FTS and
shed rows, MBD's second supplement pointer, "Pages 27 and 18" to "Page 18"); and the About
page's two pointers back to Sources. All 41 pages still fit (minimum 66px free).

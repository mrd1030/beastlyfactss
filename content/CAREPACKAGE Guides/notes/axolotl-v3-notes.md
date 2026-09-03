# Axolotl v3 notes

Written during the 2.0 rebuild (September 2026), the first axolotl edition on the t3
template. Read this before starting v3, per build workflow step 0 in `TEMPLATE_GUIDE.md`.

Source lives in `source/axolotl-src/` as fragments plus `build.py`, the same pattern as
`goldfish-src/`. Page numbers, the contents page and every in-text cross-reference are
generated, so splitting or merging a page costs one edit and one line in `SECTIONS`.

## Page count: 41, mostly a floor

The build landed at 41 pages and the number came from the measurement script, not from
judgment. The first assembly was 40 pages with 13 pages tight or overflowing, the worst
at -256px. Everything except one page was resolved by layout tightening (heading margins
from 14pt to 9pt, `dense` tables, `compact` lists) plus sentence-level trims.

The one genuine split was the temperature page, which overflowed by 182px and became two:

- **Temperature: the numbers that matter** (targets table, why warm water is dangerous,
  which cooling method your climate needs, measuring where the animal is)
- **Cooling methods & the summer plan** (the six methods, frozen bottles, buying and
  running a chiller)

That split is worth keeping. Cooling is the single subject this species lives or dies on
and one page could not hold both the physiology and the equipment.

Free space per page at the final measurement, for anyone deciding where a new block fits:

```
p1=1048 p2=363 p3=59  p4=194 p5=109 p6=35  p7=157 p8=154 p9=39  p10=29
p11=48  p12=62 p13=18 p14=68 p15=15 p16=117 p17=21 p18=143 p19=61 p20=231
p21=40  p22=30 p23=132 p24=21 p25=34 p26=53 p27=78 p28=19 p29=115 p30=133
p31=20  p32=92 p33=109 p34=98 p35=52 p36=126 p37=66 p38=50 p39=84 p40=27 p41=32
```

The roomiest pages are 20 (common mistakes, 231px), 18 (staples and never-feed, 143px),
30 (budget, 133px) and 36 (pet-sitter sheet, 126px). The tightest are 15 (choosing),
13 (substrate), 28 (tubbing) and 10 (cycling).

## Parked blocks

Everything below was written, measured and cut for space. Reinstating one is a paste plus
a re-run of `_render.mjs axolotl "Axolotl" <v> --measure`, not a rewrite.

### 1. Blackout aeration without an air pump (~25 words)

Cut from the "Do" column of the power outage page (p35), which finished at 52px free and
went 35px over with this and the block below both in. It is the only fallback the page
offers for a keeper with no battery pump, so it is the first thing to restore if that page
ever gains a neighbor with headroom.

```html
        <li>With no air pump, scoop a cup of water and pour it back from a height every hour or two. Crude, and it works.</li>
```

### 2. Frozen bottle placement during transport (~18 words)

Cut from the transport list on the same page. Matters more for this species than for a
fish, because a cold-water animal in a warm car is the failure mode.

```html
    <li>Put a sealed frozen bottle in the cooler, not in the container, so the cold arrives gradually.</li>
```

### 3. Cloudy water row, early warnings table (~25 words)

Cut from the water changes page (p13, finished at 18px free). The same symptom survives
on the symptom quick reference, page 33, so nothing was lost outright.

```html
    <tr><td>Cloudy water or a sour smell</td><td>Uneaten food breaking down, or a filter that has stopped. Both need attention today.</td></tr>
```

### 4. Hatchling row, growth reference (~20 words)

Cut from the growth page (p22). The package deliberately does not cover rearing hatchlings
in depth, so this row pointed at content that is not there. If v3 adds a juvenile rearing
page, this row goes back and the table starts at hatchling again.

```html
    <tr><td>Hatchling</td><td>Under 1 in (2.5 cm)</td><td>Live food only, kept individually, bare bottom.</td></tr>
```

### 5. Regurgitation row, reading waste (~30 words)

Cut from the same page. Real content with no other home in the package, and the highest
priority restore of this group.

```html
    <tr><td>A regurgitated meal</td><td>Often oversized food, a warm tank, or handling too soon after feeding. Once is a note, twice is a pattern to act on.</td></tr>
```

### 6. Soft water skin fragility row (~30 words)

Cut from the other conditions page (p27). The underlying fact survives as the hardness row
on the water targets page (p12) and in the glossary, so this was a duplicate rather than a
loss, but the condition framing was useful.

```html
    <tr><td>Skin fragility from very soft water</td><td>Dull, poor-condition skin over weeks</td><td>Axolotls need mineral content. Do not keep them in distilled, RO or very soft water without remineralizing it.</td></tr>
```

### 7. Two log rows

Cut from the equipment and maintenance log (p38) purely for height.

```html
    <tr><td>Thermometer, battery or replacement</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
```

```html
    <tr><td style="text-align:left;">Check decor for sharp edges</td><td>&#9633;</td><td></td><td></td><td>&#9633;</td><td></td><td></td><td>&#9633;</td><td></td><td></td><td>&#9633;</td><td></td><td></td></tr>
```

## Ideas raised and never drafted

These are the pages that were wanted and not built. Each needs sourcing before it goes in,
per the rule that the topic is yours and the numbers are the source's.

- **Juvenile rearing, 0 to 6 months.** The package covers juveniles in passing: bare
  bottom, daily food, raised separately. A buyer who ends up with a 3 inch animal, or who
  hatches an accidental clutch, has no page. Wants live food culture, the cannibalism
  problem, individual housing, and the size at which sand becomes an option. Two thirds of
  a page of it already exists scattered across the feeding, substrate and tankmates pages.
- **What a vet visit actually involves.** Exam, fecal test, imaging for a suspected
  impaction, and the fact that anesthesia and analgesia in amphibians are their own field.
  Would reduce the number of owners who never call because they do not know what they are
  buying. Needs a veterinary source for anything procedural.
- **Breeding, deliberately excluded.** The package tells a buyer how to avoid breeding
  (page 15) and does not explain how to do it. That was the right call for a first t3
  edition, and a future edition could add a single honest page: what a clutch actually
  commits you to, rather than a how-to.
- **Water hardness and remineralizing, properly.** The package says moderately hard, never
  distilled or RO, and stops there because the GH and KH figures that circulate are not
  well sourced for this species. Holtfreter's solution is a laboratory practice, not home
  husbandry, and translating it into a home aquarium number needs work. This is the
  biggest genuine gap in the water chemistry coverage.
- **Xochimilco and the ethics of the trade.** Critically Endangered in the wild, millions
  in tanks, and effectively zero genetic connection between the two populations. It is the
  most interesting thing about this animal after regeneration, and it is currently three
  lines on the profile page.
- **Morph genetics.** The choosing page gives morphs as a plain list. What leucistic
  actually is, why albino and leucistic get confused, and what GFP means would fill a page
  and needs a real genetics source rather than breeder copy.
- **A DIY cooling build.** Fan-over-surface rigs and insulated cabinets are what most
  keepers actually build. Cannot be written from memory, and product-specific advice ages
  badly, so it needs care.

## Proposed gaps, for the site rather than the PDF

Logged under **Site content gaps by package** in `TEMPLATE_GUIDE.md` as well. These rest
on knowledge of the species rather than on a grep result, and each still needs sourcing
before any figure goes into an article.

- Tubbing, cooling as treatment, and salt baths. The site has none of it and it is the
  most-searched axolotl intervention after "why is my axolotl floating."
- Cooling a tank without a chiller, as a real method comparison rather than a sentence.
- Choosing and sexing, including the tiger salamander larva mix-up at point of sale.
- Cohabitation, including the cannibalism window in juveniles.
- Reading the gills as a daily health check.

## Cut list for v3, in priority order

If a future edition has to come down in length, cut in this order. Everything below the
line is the product and should not be cut.

1. **Equipment and maintenance log (p38).** Useful, and the least missed. The twelve-month
   planner could fold into the owner log page.
2. **Enrichment checklist and log (p39).** The enrichment page itself carries the content;
   this is the worksheet version.
3. **First 30 days (p32).** Genuinely helpful, and every item on it appears elsewhere in
   the package.
4. **Choosing, morphs and sexing (p15).** The morph half is cosmetic. The pre-purchase
   checks half should survive into another page if this one goes.
5. **Cost, commitment and fun facts (p5).** The numbers duplicate the budget page. Only the
   commitment table is unique.

---

Do not cut, in any edition:

- **Temperature (p8) and cooling methods (p9).** This is the animal's whole survival story.
- **Substrate (p14).** The other thing that kills them, and the one page with a body count.
- **Cycling (p11), water targets (p12) and water changes (p13).** Take one away and the
  other two stop making sense.
- **The health section (p23 to p28)**, particularly gills (p24) and tubbing (p28). Gill
  reading is the earliest warning a keeper gets, and tubbing is the intervention nobody
  explains anywhere on the site.
- **Emergency card (p30) and pet-sitter sheet (p36).** Both are printed and posted, which
  is the format doing something a website cannot.

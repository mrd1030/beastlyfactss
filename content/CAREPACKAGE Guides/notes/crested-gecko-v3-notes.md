# Crested Gecko, notes for v3

Written during the 2.0 rebuild (Sep 2026), the first t3 edition of this guide, and the first
arboreal reptile on the template. 1.0 was 21 pages on the pre-t3 layout. Read this before
starting v3, along with the Crested Gecko block under **Site content gaps by package** in
`../TEMPLATE_GUIDE.md` and the arboreal paragraph under **Adapting the skeleton by animal
class**.

## Page count: 34, and it was a choice, not a floor

Every page finished between 20 and 240 px clear of its footer, so nothing was clipped and
nothing was cut for space. The reptile skeleton absorbed this species without a page being
added or dropped; two pages changed meaning instead. There is room for 36 or 37 without
restructuring.

Free space at final render, in px above the footer:

```
p2:25   p3:190  p4:42   p5:33   p6:34   p7:25   p8:20   p9:20   p10:74  p11:157
p12:89  p13:188 p14:39  p15:83  p16:78  p17:199 p18:223 p19:69  p20:130 p21:232
p22:182 p23:136 p24:39  p25:181 p26:240 p27:189 p28:101 p29:189 p30:106 p31:126
p32:158 p33:145 p34:80
```

Tight: 8, 9, 24, 5, 7 and 14. Roomy: 17, 18, 21, 26, 13 and 11, which is where anything new
should go.

## The two page swaps, for the next arboreal build

- **Page 7** stopped being thermostats and UVB distance and became misting, ventilation and
  lighting. It carries a humidity-cycle line chart instead of a lamp-distance diagram, and
  the chart is the single most useful graphic in the package: for a species whose husbandry
  is a daily wet-dry swing, one picture of the swing beats any table. Reuse the SVG.
- **Page 28** grew a heatwave half. The reptile emergency page is built around losing heat,
  and for this species the emergency runs the other way. The two-column do/don't layout
  became "when it gets too hot" beside "when the power goes out", which reads better than the
  original and should probably be the shape for every tropical species.

The food pages also reorder for anything on a complete powdered diet: powder on 10 because it
is the base, insects on 11, fruit and the never list on 12.

## What was cut, and why

Nothing was removed outright. The compression that was applied, all reversible:

- Page 4's profile table went to `class="dense"` at 9.6 pt.
- The page 4 and page 24 callouts went to `margin:7pt 0; padding:8pt 13pt; font-size:9.6pt`.
- Three body paragraphs on pages 6, 8 and 9 lost a clause each. No figure was removed from
  any of them.

## Ideas raised and never drafted

1. **A heat emergency page of its own**, rather than the half-page it shares on 28. This
   species' defining risk deserves the same treatment cryptosporidiosis gets in the leopard
   gecko package: what it looks like, the first ten minutes, and the vet call. Logged as a
   cross-species gap because every tropical reptile needs it.
2. **A bioactive build page.** Currently one paragraph on 13 and a line on 5. The drainage
   layer, the substrate mix, the clean-up crew, the establishment period, plant choice, and an
   honest maintenance comparison against paper towel.
3. **A page on the other Rhacodactylus-type geckos** and what transfers: gargoyle, chahoua and
   leachianus all share the diet powder and most of the husbandry, and a buyer choosing
   between them has nowhere on the site to look. This is arguably a site article rather than a
   package page.
4. **A "your gecko is on the curtain" handling page.** Every new owner hits this in about week
   three, and the handling guide does not cover it. Logged as a proposed gap.
5. **A page on the picky eater**, expanded from the section it currently shares on page 10.
   Flavor rotation, texture, temperature of the food, dish position, and how long to let a
   refusal run before it becomes a health question.
6. **Egg laying at two pages rather than one**, if the next edition has room. The lovebird
   build made the same finding for hens: the management protocol and the ten-minute emergency
   are different documents. A crested gecko female cycling every 4 to 6 weeks through much of
   the year is closer to the bird case than to the leopard gecko one.

## Proposed gaps from step 12

Overheating and heat stress in reptiles (cross-species, and the highest-value row this build
produced), bioactive setups properly, and handling a jumper. All three are proposals from
knowledge of the species rather than grep results, and every figure in them needs sourcing
before it goes into a page.

## Cut list for next time, in priority order

1. Page 12's "extras and human food questions" table, merged into the main fruit table.
2. Page 32, the enrichment log, the least used of the four log pages.
3. Page 11's gut-loading paragraph, which duplicates
   `gut-loading-feeder-insects-guide.mdx` and could shrink to a cross-reference if the page
   needs room for more feeder rows.

**Do not cut, in any edition:**

- Page 6, the 85&deg;F (29&deg;C) ceiling. It is the organising idea of the whole package and
  eight other pages point back at it.
- Page 7's humidity-cycle chart. The swing is the husbandry; a static number is not.
- Page 10's "do not start with insects" rule, which is the most common way this species is
  fed into malnutrition.
- Page 19's permanent tail loss section. Owners coming from leopard geckos assume it grows
  back.
- The both-units rule on every temperature. Gumroad buyers are global.

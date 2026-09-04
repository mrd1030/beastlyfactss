# Leopard Gecko, notes for v3

Written during the 2.0 rebuild (Sep 2026), the first t3 edition of this guide. 1.0 was 22
pages on the pre-t3 layout. Read this before starting v3, along with the Leopard Gecko block
under **Site content gaps by package** in `../TEMPLATE_GUIDE.md`.

## Page count: 34, and it was a choice, not a floor

The measurement script came back with every page between 21 and 421 px of free space after
the final pass, so nothing was clipped and nothing was cut to fit. The count is the canonical
reptile 34 because the species genuinely fits it, not because the skeleton forced it. There
is room to go to 36 without restructuring anything; see the undrafted ideas below.

Free space at final render, in px above the footer:

```
p2:25   p3:169  p4:36   p5:25   p6:31   p7:27   p8:21   p9:21   p10:51  p11:84
p12:26  p13:150 p14:23  p15:56  p16:58  p17:137 p18:140 p19:90  p20:130 p21:156
p22:198 p23:172 p24:44  p25:201 p26:214 p27:123 p28:130 p29:189 p30:106 p31:126
p32:178 p33:145 p34:68
```

The tight pages are 4, 6, 8, 9, 12, 14 and 34. Anything added there needs something removed.
The roomy ones are 13, 17, 18, 20, 21, 22, 25, 26 and 29, which is where new material should
go first.

## What was cut, and why

Almost nothing, because the rebuild went from 22 pages to 34 rather than the other way. Three
blocks were tightened rather than removed, and one row came out of a table:

**Page 6, the fifth row of the "signs your setup needs adjusting" table.** Removed for space,
worth reinstating if the page ever gains room, since it is the only place in the package that
connects a pale morph to a UVB problem:

```html
<tr><td>Pale, squinting or closed eyes under a new bulb</td><td>UVB too strong or too close, especially in an albino morph</td></tr>
```

Roughly 15 words. It fits on page 7 next to the UVB distance note if page 6 stays full.

Everything else was compression rather than deletion: the page 4 profile table went to
`class="dense"`, several callouts dropped to `margin:7pt 0` and `font-size:9.6pt`, and the
page 34 source lists went to 8.9 pt with two pairs of citations merged into single lines.
Those are all reversible if a future edition wants the room back somewhere else.

## Ideas raised and never drafted

The most valuable part of this file. In rough priority order:

1. **A morph page.** Pigment changes the UVB answer, and some morph lines carry neurological
   problems that a buyer should know about before choosing. This is the single most obvious
   missing page in a package for a species with over a hundred morphs, and it was left out of
   2.0 only because nothing on the site supports it and it needs real sourcing. Logged as a
   proposed gap.
2. **A "your first 48 hours" page** separate from the First 30 Days checklist. The current
   page 25 starts at day one and moves fast. A new keeper's actual questions in the first two
   days (it will not come out, it will not eat, it dropped its tail in the car) are answered
   scattered across pages 8, 12 and 19.
3. **A cohabitation page.** Currently one "never" callout on page 5. The full argument, why
   two females that seem fine are not, deserves a page, and it would serve the whole reptile
   set.
4. **A page on where to buy a gecko and what to check** before money changes hands. Both
   mammal packages needed one and the bird package logged it too.
5. **A brumation protocol page**, as opposed to the half-page it gets on page 20. The bearded
   dragon package has a full brumation article behind it; leopard geckos have nothing
   comparable, and the questions (do I induce it, what weight loss is normal, when do I stop)
   are the same.
6. **A quarantine page.** It is currently a callout on page 17 and a line on page 25. Given
   that cryptosporidiosis is the condition this species is most defined by, a full page on
   the 60 to 90 day protocol would earn its place.

## Proposed gaps from step 12

Carried here as well as into the gap log, because the log drives site articles and this file
drives the next edition: morph-linked care differences, cohabitation, and choosing and
sourcing a reptile. All three are proposals from knowledge of the species, not grep results,
and every figure in them still needs sourcing before it goes into a page.

## Cut list for next time, in priority order

If v3 needs to lose pages, take them in this order:

1. Page 11, the gut-load chart, is the first candidate only because
   `gut-loading-feeder-insects-guide.mdx` covers it in full on the site. It would have to be
   compressed into page 10 rather than dropped outright.
2. Page 12's treats table, merged into page 10, leaving the refusal thresholds as a page.
3. Page 32, the enrichment log, is the least used of the four log pages.

**Do not cut, in any edition:**

- Page 6, the three-hide system and the humidity split. It is the reason this package exists.
- Page 7, thermostat and probe placement. This is the page that prevents burns.
- Page 17, cryptosporidiosis. Nothing else in the package matters if this is missed.
- Page 14's tail-thickness framing, which is the health check the whole book leans on.
- The both-units rule on every temperature. Gumroad buyers are global.

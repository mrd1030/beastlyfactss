# Russian tortoise v3 notes

Written during the 2.0 rebuild (Sep 2026). 1.0 was 21 pages on the pre-t3 layout; 2.0 is
37 pages on t3, built from fragments in `source/russian-tortoise-src/` across six page
files.

Read this before starting v3, along with the Russian Tortoise 2.0 block in
`TEMPLATE_GUIDE.md`.

## Page count: 37, against a 34-page reptile skeleton

Three pages the canonical reptile skeleton has no slot for, and all three earned it:

- **Outdoor housing and escape-proofing.** No other reptile in the series is routinely kept
  outdoors, and for this species an outdoor pen is the standard experienced keepers aim for
  rather than a bonus. It also carries the escape and dog-attack material, which had nowhere
  else sensible to go.
- **Weeds, grazing and growing your own.** The reptile skeleton's page 10 is feeder insects,
  which drops entirely for a herbivore. What replaced it is worth more than the page it
  replaced: this is the page that turns a $200-a-year salad bill into free food, and no
  other package in the series has an equivalent.
- **The legal page**, following the Tarantula 2.1 precedent. `russian-tortoise-legal-guide.mdx`
  is one of the best articles on the site and the four-inch rule is misquoted by nearly
  everyone, so a page that quotes the regulation and its business exception is genuinely
  useful rather than filler.

Two skeleton pages were merged rather than kept apart. **Thermostats, timers and UVB
distance** (skeleton page 7) folded into the UVB page, because for this species the
equipment story is short and it belongs with the fixture it controls. **Brumation, shed and
behavior** (skeleton page 20) became a brumation page alone, with shedding moved to the end
of the minor-conditions page, because a tortoise does not shed the way a snake or a lizard
does and the shed material is three sentences.

## Free space per page, final measurement

```
p2=74  p3=217  p4=105  p5=~30  p6=34  p7=16  p8=42  p9=27  p10=51  p11=48  p12=86
p13=33  p14=103  p15=47  p16=103  p17=20  p18=39  p19=46  p20=16  p21=20  p22=16
p23=45  p24=53  p25=80  p26=161  p27=69  p28=16  p29=119  p30=16  p31=133  p32=16
p33=90  p34=157  p35=45  p36=264  p37=146
```

Pages with real headroom for v3: 36 (glossary), 3 (howto), 26 (checklist), 34 (owner log),
31 (routine), 29 (first 30 days), 14 (mistakes), 16 (sexing).

Eight pages needed trimming, more than the budgie or the guinea pig, and the reason was the
same each time: this species has a lot of hard numbers that all have to be printed with both
units. The head CSS inherited from Budgie 2.0 is doing the heavy lifting and should not be
loosened.

## Parked blocks

### Cut from the weeds page (page 12)

The foraging-as-enrichment section, roughly 60 words, removed because page 14 already covers
scatter feeding. Reinstate only if page 14 loses it:

```html
  <h2 class="h">Foraging as enrichment</h2>
  <p>Scatter greens in several places rather than piling them, tuck them into the folds of a crumpled towel or a forage mat, and move the locations every day or two. A tortoise that walks the enclosure searching is a tortoise getting exercise, and exercise is a large part of the answer to the weight and pyramiding problems on page {{P:mbd}}. It costs nothing and takes ten seconds longer than filling a bowl.</p>
```

### Cut from the budget page (page 28)

Four line items merged into two, and the where-to-save callout demoted to a muted paragraph.
The originals, with their own figures:

```html
    <tr><td>Halogen basking lamp and fixture</td><td>$20</td><td>$45</td></tr>
    <tr><td>Dimming thermostat or lamp dimmer</td><td>$30</td><td>$60</td></tr>
    <tr><td>Digital probe thermometer and hygrometer</td><td>$15</td><td>$30</td></tr>
    <tr><td>Substrate, initial fill</td><td>$25</td><td>$60</td></tr>
    <tr><td>Water dish and feeding tile</td><td>$12</td><td>$25</td></tr>
    <tr><td>Digital kitchen scale, grams</td><td>$12</td><td>$25</td></tr>
```

### Added rather than cut

Page 5 came in at 322px free once the diagram was in, which is a half-empty page by the
standard in `TEMPLATE_GUIDE.md`. It was filled with a four-point list on what a table
actually needs (wall height, sealed floor, a genuinely cool end, lamp clearance) and a
callout on why hatchlings do not need a smaller enclosure, which is a common piece of bad
advice that had no other home in the package.

Nothing was removed that carried a figure, a dose or a threshold.

## Pages wanted and never drafted

1. **Choosing a tortoise, and where from.** The strongest candidate for v3. Captive-bred
   against wild-caught, what a healthy tortoise looks like in the seller's enclosure, the
   questions to ask, why an animal with no hatch date is a red flag, and the rescue route,
   which for a forty-year animal is a genuinely good option. Currently one callout on page 21
   and one on page 25.
2. **A soaking page.** Soaking is mentioned on five separate pages and explained fully on
   none. Method, water depth and temperature, frequency by age and season, what to look for
   in the water, and what to do with a tortoise that panics in it.
3. **Life stages.** Hatchling rearing, the first year, and old age, which for this species
   means a tortoise that may outlive its keeper. Currently scattered across pages 11, 12 and
   16.
4. **Shell anatomy and reading a shell.** Page 16 and page 18 both reach for it. A labeled
   scute diagram would let both pages say more in less space, and it is the single clearest
   thing a diagram could add to this package.
5. **Cohabitation, in detail.** Page 10 gives the rules in six lines. There is a longer piece
   to write on group dynamics, monitoring, and the honest answer that most owners who add a
   second tortoise are solving their own problem rather than the animal's.
6. **Winter, indoors, without brumation.** The package treats the brumation decision fully
   and then says little about what an active winter actually costs and involves: heating a
   basking spot in a cold room, the electricity, the shorter photoperiod, and the appetite
   drop that happens anyway.
7. **The succession plan.** Named as a problem on pages 4 and 32 and never given a page.
   Who takes the animal, how to write it down, what rescues actually accept, and how to hand
   over a forty-year animal with its records intact. No other package in the series needs
   this and this one genuinely does.

## Cut list for v3, in priority order

Cut first, if something has to go:

1. The supplement and soak grid on page 35, which duplicates the routine page.
2. The seasonal table on page 31.
3. The enrichment tick-list on page 35, if the equipment log ever needs the room.

**Do not cut, in this order:** page 7 (UVB), page 5 (enclosure), page 18 (MBD and
pyramiding), page 13 (the never list), page 19 (respiratory and herpesvirus), page 23
(brumation), page 21 (parasites and quarantine). Those seven are the product. Page 7 is the
one that decides whether the animal's shell forms correctly, and page 13 is the one that
decides whether it deforms from the other direction.

# Hamster, notes for the next version

Written against **3.0, 36 pages, template t3**, September 2026. The previous build was
v2.0 at 42 pages and never shipped, so nothing here was ever in a customer's
hands. Old page numbers below are v2.0's; new ones are v3.0's.

## What v3.0 actually did

The brief was to shorten it. Six pairs of pages that shared a topic were
combined into one page each. Nothing was trimmed sentence by sentence: every
block that came out came out whole, and every one of them is below in full
markup. Page counts either side of each merge:

| v2.0 pages | Became | v3.0 page |
| --- | --- | --- |
| 10 Choosing a species + 11 Which hamster, and where from | Choosing a hamster, and where from | 10 |
| 17 The first week, mistakes & bites + 18 Common mistakes | The first week & common mistakes | 16 |
| 24 Torpor: what it is + 25 Telling torpor from death | Torpor, and telling it from death | 22 |
| 27 Where hamsters are not legal + 28 Where the rule names a species | Where hamsters are not legal | 24 |
| 35 Power outages + 36 Travel, transport & moving | Power outages, travel & transport | 31 |
| 39 Equipment, cleaning & vet log + 40 Enrichment checklist & log | Equipment, cleaning & vet log | 34 |

The last one matches the reptile skeleton, which carries power outages, travel
and transport on one page (template page 28) and does not have a second
species-choice page at all. v2.0 had drifted wider than the template in five
places and the same width in one.

A layout-only pass came first, before any block was parked: `.snug` was applied
to every content page rather than the nine it had been on. That alone fixed
the p16 overflow in the 42-page build and bought 30 to 50px a page. No words
and no type sizes changed.

## Page count

**36 pages, and it is a choice, not a floor.** The measurement script clears
all 36 with 19px minimum headroom, so there is no clipping. But the six merges
were possible only because roughly 1,900px of real blocks were parked, which is
about two pages of content. Nothing forced 36. If the next edition wants any of
the parked blocks back, the honest count is 37 or 38, and that is a fine number
for this animal.

For reference, the measured shortfalls before parking anything, with `.snug`
already applied everywhere:

| Merge | Combined body | Page capacity | Over by |
| --- | --- | --- | --- |
| 10+11 | 954px | 840px | 114px |
| 17+18 | 1306px | 859px | 447px |
| 24+25 | 1422px | 859px | 563px |
| 27+28 | 1457px | 840px | 617px |
| 35+36 | 1388px | 840px | 548px |
| 39+40 | 1439px | 880px | 559px |

Page area is 946px. Capacity is `946 - the page head - 15px print floor`.

## Parked blocks, in full

### 1. The honest comparison, off v2.0 page 11

Why it went: it restates in prose what the species table on the same merged
page already says in its Handling column. About 110 words.

```html
  <h2 class="h">The honest comparison</h2>
  <p>If handling and interaction matter to you, choose a Syrian. If you mainly want an active, entertaining animal to watch, a dwarf and especially a Robo suits that role better than it suits regular handling. Neither choice is wrong, but picking based on what you actually want out of the relationship matters more with hamsters than with most small pets, because the difference between the two ends of this table is larger than the label suggests.</p>
```

The v2.0 section-sub it sat under, also dropped, was: "Pick on what you
actually want out of the relationship, because the two ends of the table on
page 10 are further apart than the label suggests."

### 2. First-timer mistakes, off v2.0 page 17

Why it went: every one of the six bullets is a row in the Common mistakes
table on the same merged page. This was the most duplicated block in the
guide. About 75 words.

```html
  <h2 class="h">First-timer mistakes</h2>
  <div class="two-col">
    <div class="col">
      <ul class="compact">
        <li>Reaching in during the day while the hamster is asleep.</li>
        <li>Cornering or trapping a hamster that is trying to get away.</li>
        <li>Expecting a Roborovski to behave like a Syrian (page 10).</li>
      </ul>
    </div>
    <div class="col">
      <ul class="compact">
        <li>Housing two Syrians together thinking they will bond. They will not, and fighting is the likely outcome.</li>
        <li>Handling over a table or at chest height, where a jump becomes a fall.</li>
        <li>Treating an exercise ball as handling practice (page 8).</li>
      </ul>
    </div>
  </div>
```

### 3. Wash your hands, both ways, off v2.0 page 17

Why it went: the merged page ran 79px over and this was the least load-bearing
block on it. The bite handling itself was kept, folded into the first-week
paragraph. About 80 words. **This one is worth putting back first** if the
guide ever runs to 37 pages: it is the only zoonosis line in the package.

```html
  <div class="callout info" style="margin-bottom:0;">
    <span class="label">Wash your hands, both ways</span>
    Before handling as well as after. Hands that smell of food get investigated with teeth, and hands that smell of another pet get treated as a threat. Washing after matters too: hamsters, like all small pets, can carry organisms worth not transferring to your face, and it is a habit worth having with children in particular.
  </div>
```

### 4. The pattern under all of them, off v2.0 page 18

Why it went: the merged page needed 79px and this was the closing summary
rather than the content. About 80 words.

```html
  <div class="callout info" style="margin-bottom:0;">
    <span class="label">The pattern under all of them</span>
    A hamster is sold as a low-effort starter pet in a box with a tube on it. It is actually a solitary, nocturnal, burrowing desert rodent with continuously growing teeth and a metabolism fast enough that illness moves in hours. Every mistake above comes from the first description. Almost every fix comes from taking the second one seriously.
  </div>
```

### 5. Before you assume the worst, off v2.0 page 24

Why it went: every fact in it is in the torpor-versus-death table on the merged
page. The "do not shake, do not submerge, do not bury" instruction was kept by
folding it into step 2 of What to do. About 100 words.

```html
  <div class="callout warn">
    <span class="label">Before you assume the worst</span>
    Check the room temperature first, because that is the single most useful piece of information. A hamster found cool and unresponsive in a room that has dropped below 65&deg;F (18&deg;C) is far more likely to be in torpor than dead. Look for extremely slow, shallow breathing at the flanks, held for a full minute before you conclude anything, and for faint whisker movement. Do not shake, do not submerge in warm water, and do not bury.
  </div>
```

### 6. If it is not torpor, off v2.0 page 25

Why it went: the rigor mortis distinction moved into the table's Body row,
and the vet advice moved into step 5 of What to do. What is lost is the fuller
description of what death actually looks like. About 160 words.

```html
  <h2 class="h">If it is not torpor</h2>
  <p>Rigor mortis in an animal this small sets in within a couple of hours and is unmistakable once you have felt the difference: the body is genuinely rigid rather than limp or slightly stiff, cold all the way through rather than cool on the surface, and there is no flank movement at all across a full minute in good light. The eyes are usually partly open and dull.</p>
  <p style="margin-top:5pt;">If you are still unsure after warming the room for two or three hours, take the hamster to a vet rather than deciding at home. It is a short appointment, they can confirm in seconds, and it is a far better outcome than burying an animal that was in torpor. Vets see this and will not think the question is foolish.</p>
```

### 7. Why the mistake happens, off v2.0 page 25

Why it went: explanatory rather than actionable, and the merged page could not
carry it. About 90 words. It is the block that most explains *why* the page
exists, so it is a strong candidate for restoring.

```html
  <div class="callout warn">
    <span class="label">Why the mistake happens</span>
    Torpor produces exactly the picture people expect death to look like: cool, still, curled, unresponsive to being spoken to, and often found in the morning after a cold night. The breathing is genuinely hard to see, sometimes only a few breaths a minute. Almost every keeper who has lost a hamster to a cold room describes finding it and assuming, which is the reason this page is separate and the reason the room thermometer on page 9 is not optional.
  </div>
```

### 8. Afterwards, either way, off v2.0 page 25

Why it went: the first bullet's advice is in step 5 of What to do. The
second column, on what to do if the hamster died, is genuinely not covered
anywhere else in v3.0. About 110 words.

```html
  <h2 class="h">Afterwards, either way</h2>
  <div class="two-col">
    <div class="col">
      <ul class="compact">
        <li>If it roused: work out why the room got cold, and fix it before the next cold night. Log the episode on page 38.</li>
        <li>Book a vet check anyway. An episode can uncover a hamster that was already unwell, and cold is often the thing that tipped it.</li>
      </ul>
    </div>
    <div class="col">
      <ul class="compact">
        <li>If it did not: a vet can confirm, and can advise on cremation or a post-mortem if you want to know what happened.</li>
        <li>Keep the enclosure and bedding until you have decided. If another hamster is coming, disinfect fully and replace the bedding rather than reusing it.</li>
      </ul>
    </div>
  </div>
```

Note the stale reference: "page 38" was the v2.0 owner log, which is page 33
in v3.0. Fix that on the way back in.

### 9. Why absence is not always a ban, off v2.0 page 27

Why it went: it is the longest block in the legality pair and its conclusion is
"Nebraska is fine." Real research, and the reasoning is the most transferable
part of the whole legality section, but it answers a question nobody asked.
About 230 words.

```html
  <h2 class="h">Why absence is not always a ban</h2>
  <p>Nebraska is the one place where the answer takes a second look. Its wildlife rules run a closed importation list that includes the chinchilla, the degu, the gerbil, the guinea pig and the greater jerboa, and there is no hamster on it. That looks alarming until you read what the list is a list of: the chapter governs wild birds and wild mammals as the state defines them. The golden hamster is a domesticated animal rather than Nebraska wildlife, so the importation list is not the rule that applies to it. The guinea pig appearing on that list anyway is a fair sign the drafting is not perfectly consistent, but the structure is clear enough.</p>
  <p style="margin-top:5pt;">This is the general shape of the answer across most of the country. State wildlife codes govern wildlife, a domesticated rodent is not wildlife, and so the hamster is not so much permitted as outside the scope of the rule. It works, right up until a state writes a broader definition or runs an inverted list, which is exactly what Hawaii does.</p>
```

A one-sentence compression of the second paragraph was written into the merged
Hawaii paragraph and then removed again when the page ran 19px over. If the
block comes back, that sentence is redundant with it.

### 10. Washington DC gets hamsters right by accident, off v2.0 page 27

Why it went: it is mostly about hedgehogs. About 90 words.

```html
  <div class="callout info">
    <span class="label">Washington DC gets hamsters right by accident</span>
    D.C. Code bans keeping "any living member of the animal kingdom" as a household pet except seven categories, one of which is "domesticated rodents and rabbits." A hamster is a rodent, so it clears. A hedgehog is not: it sits in the order Eulipotyphla with the moles and shrews, and no other category fits, so the same sentence that permits your hamster prohibits a hedgehog on a taxonomic technicality.
  </div>
```

### 11. California allows hamsters and bans gerbils, off v2.0 page 28

Why it went: the California row survives in the table, and this callout's extra
content is about gerbils. About 110 words. The best-written block in the
legality section and the one a reader would most enjoy.

```html
  <div class="callout info">
    <span class="label">California allows hamsters and bans gerbils</span>
    California restricts more species than any other state, so it is a reasonable guess that hamsters are on the list. They are the opposite: Title 14 &sect; 671 restricts the order Rodentia, then writes five exceptions into it, one of which clears domesticated golden hamsters and domesticated dwarf hamsters of the genus <em>Phodopus</em> by name. Gerbils are not among the five exceptions, so the restriction stands and there is no pet-keeping permit. Two animals sold side by side in every other state, one legal in California and the other not.
  </div>
```

### 12. Rough timeline in a cold outage, off v2.0 page 35

Why it went: it is the same advice as the Do column, laid out against a
temperature ladder. The ladder is the useful part and it is the part that is
genuinely gone. About 170 words. **The strongest candidate for restoring**, and
the one block here that would justify keeping outages and travel on separate
pages again.

```html
  <h2 class="h">Rough timeline in a cold outage</h2>
  <table class="dense">
    <tr><th style="width:22%;">Elapsed</th><th>What to do</th></tr>
    <tr><td>First hour</td><td>Read the thermometer and write the number down. Nothing else. A deep-bedded hamster in a house that is still warm is fine</td></tr>
    <tr><td>Room drops below 68&deg;F (20&deg;C)</td><td>Move the enclosure to the warmest interior room, away from windows and exterior walls. Add bedding rather than heat</td></tr>
    <tr><td>Room drops below 65&deg;F (18&deg;C)</td><td>Drape a towel over part of the enclosure, leaving ventilation clear. Check on the hamster hourly without digging it out</td></tr>
    <tr><td>Room heading for 60&deg;F (15&deg;C)</td><td>Torpor territory. A covered warm-water bottle <em>under one corner of the enclosure</em>, never in the bedding, plus more insulation. Read page 24</td></tr>
    <tr><td>Power back</td><td>Bring the room up gradually rather than blasting the heating. Check the water bottle, then leave the hamster alone for a day</td></tr>
  </table>
```

"page 24" is v2.0's torpor page, which is page 22 in v3.0.

### 13. Why this is the easiest animal in the series to blackout-proof, off v2.0 page 35

Why it went: reassurance rather than instruction. About 100 words.

```html
  <div class="callout info">
    <span class="label">Why this is the easiest animal in the series to blackout-proof</span>
    There is no filter, no pump, no thermostat, no UVB and no heat mat to lose. Everything a hamster needs from mains power is the room temperature, and deep bedding is a genuinely effective insulator against a few cold hours. A hamster that has 16 in (40 cm) of bedding to burrow into is far better placed in an outage than one on a liner, which is one more argument for page 7.
  </div>
```

### 14. The standalone Never callout, off v2.0 page 35

Why it went: its three prohibitions were rewritten into the Don't column of the
merged page, so the content survives in a shorter form. Kept here because the
wording is stronger than what replaced it. About 90 words.

```html
  <div class="callout never" style="margin-bottom:0;">
    <span class="label">Never</span>
    Put an unregulated heat pad, a hot water bottle, or a hand warmer into the bedding or in direct contact with the hamster: it cannot move away fast enough and it will burn. Never use a candle, a gas ring, or a paraffin heater near the enclosure. And never dig a hamster out of its nest to check on it during an outage, because you are removing the insulation that is doing the work.
  </div>
```

### 15. Enrichment setup checklist and log, off v2.0 page 40

Why it went: the Setup column duplicates the Setup Checklist page almost line
for line, and a blank enrichment log is thin value for an animal that lives two
to three years. The Monthly review column survived and sits on page 34. About
230 words with the callout.

```html
  <div class="two-col" style="margin-top:6pt;">
    <div class="col">
      <h2 class="h" style="margin-top:0;">Setup</h2>
      <div class="check-item"><div class="box"></div><span>Bedding deep enough to hold a real burrow, 16 in (40 cm) as the target (page 7)</span></div>
      <div class="check-item"><div class="box"></div><span>An enclosure with the footprint and wall height to allow it</span></div>
      <div class="check-item"><div class="box"></div><span>A correctly sized solid wheel (page 8)</span></div>
      <div class="check-item"><div class="box"></div><span>Connected cover and buried tunnel sections across the whole floor</span></div>
      <div class="check-item"><div class="box"></div><span>Sand bath, hideout, and untreated wood to chew</span></div>
    </div>
    <div class="col">
      <h2 class="h" style="margin-top:0;">Monthly review</h2>
      <div class="check-item"><div class="box"></div><span>Scatter-feed rather than bowl-feed, and vary where the food goes</span></div>
      <div class="check-item"><div class="box"></div><span>Add or move one piece of cover, without demolishing the burrow</span></div>
      <div class="check-item"><div class="box"></div><span>Check the hamster is using more of the floor than last month, not less</span></div>
      <div class="check-item"><div class="box"></div><span>Check for bar-chewing, which is the readout that tells you depth is short</span></div>
    </div>
  </div>
  <h2 class="h">Enrichment log</h2>
  <table class="log tall">
    <tr><th style="width:16%;">Date</th><th style="width:38%;">What changed</th><th>What the hamster did with it</th></tr>
    <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
  <div class="callout info" style="margin-top:12pt;">
    <span class="label">What not to do</span>
    Don't add accessories to a shallow setup and call it enriched, because the behavior that changed in the study changed with depth. Don't demolish the burrow to clean. Don't use a wire wheel or an exercise ball. Don't read heavy wheel running as proof the setup is working, since the study found the opposite pattern. And don't rearrange constantly: a hamster navigates by a map it built, and rebuilding the enclosure every week takes that away.
  </div>
```

## Restoring, in priority order

If the next edition can afford one or two more pages, take them in this order.
The first three are the ones where something real is currently missing rather
than merely differently worded.

1. **Block 12, the cold-outage timeline.** The only temperature ladder in the
   guide, and the only thing on page 31 that tells an owner *when* to act
   rather than *what* to do. Restoring it means splitting page 31 back into
   outages and travel, which is one page.
2. **Block 3, wash your hands both ways.** The package's only zoonosis line.
   Small enough that a layout pass on page 16 might absorb it.
3. **Block 8's second column,** on what to do if the hamster has died. v3.0
   covers ageing and the end on page 23 but not the practical aftermath of
   finding a hamster cold.
4. **Block 7, why the mistake happens.** Explains why the torpor page exists.
5. **Blocks 9 and 11,** the Nebraska reasoning and the California gerbil
   contrast, if legality ever goes back to two pages.

Everything else here is a rewording of something that survived.

## Ideas raised and never drafted

- **A hamster-specific weight chart.** Page 33's owner log asks for grams and
  nothing in the guide says what a normal Syrian or dwarf weighs, or what rate
  of loss matters. Every other package in the series has a target figure to
  weigh against. This is the clearest gap in v3.0.
- **A sexing page.** The guide tells the reader twice to check the sex before
  they get home, on page 10, and never shows them how. The reptile skeleton
  carries sexing on template page 14 and this build dropped it. One diagram of
  the two rear-end profiles would close it.
- **Hoarding and cheek pouches.** Pouch impaction is a real vet presentation
  and the guide never mentions pouches at all. It would sit with the incisors
  and tumors page.
- **A bar-chewing decision tree.** Bar-chewing is named on four pages as the
  readout that depth is short, but there is no single place that walks it
  through: depth, then floor area, then boredom, then dental.
- **Substrate mix ratios.** The bedding depth study is reported properly on
  page 7, but not what to actually fill 16 in with, or the paper-to-aspen
  ratio that holds a burrow without collapsing.
- **Two dwarf hamsters, properly.** The guide says one per enclosure is the
  safe default and leaves it there. Keepers do house dwarf pairs, and the guide
  currently has nothing to say to someone who already has two.
- **A photo or diagram page for wet tail.** The most dangerous condition in the
  package and it is described only in words.

## Cut list for next time, in priority order

If the guide has to lose a page again, take from the top. Everything below the
line is the product.

1. **Page 26, Emergency & quick targets card.** It restates numbers from pages
   6 to 22 and nothing on it is unique. It exists to be printed, which is a
   real use, but it is the only page whose entire content is duplicated.
2. **Page 29, Symptom quick reference.** Same argument, one step weaker: it is
   the fastest route into the health section for someone panicking.
3. **Page 3, How to use this package.** Boilerplate. It orients a first-time
   reader and costs a page to do it.
4. **Page 5, Cost overview,** could merge back into page 4 if pages 4 and 5 are
   ever tightened, though both are near full now.

---

Never cut, in any edition:

- **Page 7, bedding depth.** The study is the single most load-bearing fact in
  the package and the one thing this guide does that a pet-shop care sheet
  does not.
- **Page 19, wet tail.** Fatal in 24 to 48 hours, and the reason the first week
  home is written the way it is.
- **Page 22, torpor.** Preventable, commonly mistaken for death, and the
  package is the only place most owners will read about it.
- **Page 8, the wheel and the sand bath.** Wheel sizing is a permanent-injury
  issue and the sand bath is a species essential that gets sold as an extra.
- **Page 10's "never house two Syrians" callout.** Silent, often fatal, and
  routinely contradicted at the point of sale.

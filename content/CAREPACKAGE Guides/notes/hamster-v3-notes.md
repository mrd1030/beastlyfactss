# Hamster, notes for the next version

Written against **2.1 (built as 3.0), 36 pages, template t3**, September 2026. The previous build was
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

---

## 2.2, September 2026: the small mammal article cross-check

Written against **2.2 (rendered first as 3.1, renumbered the same day), 37 pages, template t3**. A corrections edition. The
hamster block in `TEMPLATE_GUIDE.md` has no gap table, so the check ran the
other way round: every page the four September 2026 cross-species articles
could touch was read against them.

The four are `small-mammal-temperature-heat-stress-guide`,
`small-mammal-grooming-nails-molting-guide`,
`small-mammal-vet-visits-and-travel-guide` and
`small-mammal-enterotoxemia-guide`. Three of the four found something. The
grooming one confirmed the package was already right.

### The torpor threshold was the biggest error in the package

3.0 said torpor begins below 65&deg;F (18&deg;C) with "real risk" below 60&deg;F (15&deg;C),
and hedged with "Sources differ slightly on where torpor begins, with 60&deg;F and
65&deg;F both cited." Neither figure survived a look at the sources.

- **Merck Veterinary Manual, Hamsters:** "Exposure to cold stimulates hamsters
  to gather food, and they often hibernate at temperatures < 5&deg;C (41&deg;F)."
- **LafeberVet, Basic Information Sheet: Hamster:** "Hamsters can enter torpor
  if temperatures fall below 41&deg;F (5&deg;C), particularly when exposed to short
  days," and separately, "Syrian hamsters will hibernate if kept in a cool area
  with limited food."
- **VCA's hamster page carries no temperature range at all**, only that hamsters
  do not tolerate heat.

So the two veterinary references that give a number give the same number, about
24&deg;F below what the package printed, and both attach a second trigger the
package never mentioned. The 65&deg;F figure does exist in owner-facing
vet-authored writing, but there it is the bottom of the ideal range, not a
torpor threshold, and nothing anywhere sources 60&deg;F.

**What changed, and the reasoning.** The package keeps 65&deg;F as the point to
act, because a room out of range is worth fixing whether or not it is cold
enough to be dangerous, and it now says so in those terms instead of calling it
a threshold. 41&deg;F is printed as the veterinary figure, and short days and a
thin food supply are named alongside cold, because a hamster in an unheated room
in December is exposed to all three.

| Page | Was | Became |
|---|---|---|
| 9, table | `Below 60&deg;F (15&deg;C)` / "Real risk of torpor" | `Below 41&deg;F (5&deg;C)` / "The figure Merck and LafeberVet both give for hibernation or torpor, which is dangerous and looks alarmingly like death" |
| 9, table | `Below 65&deg;F (18&deg;C)` / "Sources put the torpor threshold here or a little lower" | `Below 65&deg;F (18&deg;C)` / "Out of the target range. Appetite and activity drop first" |
| 9, note | "Sources differ slightly on where torpor begins, with 60&deg;F and 65&deg;F both cited" | "Cold is not torpor's only trigger: LafeberVet adds short days and both sources add a thin food supply, so 65&deg;F is the point to act rather than where harm starts" |
| 14 | "Below roughly 65&deg;F (18&deg;C), hamsters can enter a hibernation-like state" | "Merck and LafeberVet put this below 41&deg;F (5&deg;C), with short days and a thin food supply as further triggers" |
| 22, intro | "Below roughly 65&deg;F (18&deg;C), and with real risk below 60&deg;F (15&deg;C)" | "Cold, short days and a thin food supply together produce a hibernation-like state... Merck and LafeberVet both put the temperature below 41&deg;F (5&deg;C)" |
| 22, Context row | "A room that has dropped below 65&deg;F (18&deg;C)" | "A room that has dropped well below the target range... and usually a short winter day as well" |
| 26, card | "Below 65&deg;F (18&deg;C) this is far more likely to be torpor than death" | "A cold room, a short winter day and a hamster that has been eating poorly are what produce torpor" |
| 31, outage | "below 65&deg;F (18&deg;C) this becomes the torpor risk" | "Below 65&deg;F (18&deg;C) the room is out of range, and a room heading for the forties is torpor territory" |
| 32, sitter | "the room is below 65&deg;F (18&deg;C)" | "the room is well below 65&deg;F (18&deg;C)" |

The torpor page's premise survives intact. It is still true that a cold hamster
looks dead, that people bury animals in torpor, and that a thermometer prevents
it. What is no longer true in the package is the implication that a British or
American living room at 60&deg;F does it on its own.

### The antibiotic page: 36 pages that never mentioned the thing most likely to kill

`small-mammal-enterotoxemia-guide` names hamsters directly, and 3.0 had
**nothing**: no drug list, no warning, no mention of enterotoxemia anywhere.
Meanwhile page 19 said wet tail treatment is "antibiotics plus fluids and
supportive care" and page 21 said respiratory infection means "antibiotics and
supportive care". The package told an owner to expect antibiotics twice and
never told them which ones kill this species.

Page 18 now carries it, sourced from the primary references rather than the
article:

- **Merck, Hamsters:** "Diarrhea in adult Syrian hamsters is associated with
  *Clostridioides difficile* enterotoxemia... it might occur 3-5 days after
  administration of antimicrobials such as penicillin, lincomycin, or
  bacitracin."
- **Merck, Lincosamides Use in Animals:** "lincosamides are contraindicated for
  use in horses, guinea pigs, hamsters, rabbits, chinchillas, and ruminants,"
  and the reaction "can be lethal."
- **VCA, Health Problems in Rodents:** never give "penicillin and related drugs,
  bacitracin, erythromycin, lincomycin, tylosin, procaine additives, and
  streptomycin," and they are harmful given orally, topically or by injection.
- **Merck, Clinical Techniques for Guinea Pigs**, for the class-level statement
  that "beta lactams, lincosamides, and older macrolides pose a higher risk."

Pages 19 and 21 now point at page 18 at the moment they mention antibiotics.
Page 26's card gained "Name every drug the hamster has been given (page 18)".

**Where the room came from.** Page 18's "What to have ready when you call"
two-col was a near-verbatim duplicate of the same checklist on the page 26
emergency card. It came out, and the two details it carried that the card did
not, where the hamster came from and when the bedding was last changed, were
folded into the card. Nothing was lost and page 18 gained about 110px.

### Heat

VCA's rodent guidance puts the enclosure ceiling at 80&deg;F (27&deg;C). 3.0 had that
figure on page 9 only. It is now also on the setup targets (page 25) and the
emergency card (page 26). The package keeps 65 to 75&deg;F as its own comfortable
range rather than widening to VCA's 65 to 80, and page 9 now says so explicitly:
"VCA's rodent range runs to 80&deg;F; 75 is the tighter line."

### Outages

Page 31 gained the thermometer instruction, read it rather than judging by feel,
and a second water container in a hot outage. Both from the RSPCA guinea pig
heat guidance behind `small-mammal-temperature-heat-stress-guide`.

### Deliberately not changed, and why

- **Carrier size.** Page 31 says "Small and snug travels better than roomy." The
  vet-visits article says a carrier should be "roomy enough for the animal to lie
  down and turn around easily," but that is the RSPCA quoted on **rabbits**, and
  the article's carrier sourcing is rabbit and guinea pig throughout. It does not
  reach a hamster, which travels in something closer to a nest box. Left as is.
- **Anesthesia and fasting.** The article's fasting rules are sourced to Merck's
  rabbit and guinea pig pages. Extending them to a hamster would be an
  extrapolation, and the package says nothing about fasting, so there is nothing
  to correct. If a future edition wants a hamster surgery paragraph, source it
  from a hamster page first.
- **Nails.** Page 30 says "Check nail length, especially in an older or less
  active hamster" and page 23 notes longer nails in a less active animal. The
  grooming article says hamsters "wear their nails down naturally through digging
  and running... and generally only need a check for overgrowth in older or less
  active animals rather than a fixed trim schedule." That is an exact match, and
  it is the cleanest agreement found anywhere in this cross-check. No change.

### The cover said 42 pages

Since the 3.0 build. The badge was never updated when the six merges took it to
36. Now 37, which is the real count.

### The reference split

Pages 36 and 37, sources and version history. Cockatiel 1.0's finding, and the
sources page needed it: it gained six clinical references it did not have,
including every source behind the new page 18.

### Layout

No `.snug` changes: 3.0 already has it everywhere. Minimum headroom across all 37
pages is 17px, on page 18, which is the new antibiotic page and the tightest in
the package. If the next edition adds anything to page 18, split it rather than compress it.

### Still only in the PDF

Unchanged from 3.0 and untouched by this cross-check: **no target weight in
grams** anywhere despite the owner log asking for one, **no sexing page** despite
page 10 telling the reader twice to check the sex, and **nothing on cheek
pouches** except the impaction line on page 14. All three are in the ideas list
above and none of the four articles reaches them.

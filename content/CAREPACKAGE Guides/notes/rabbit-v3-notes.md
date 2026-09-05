# Rabbit Care Package: notes for v3

Content written for or cut from **2.0 (September 2026, 39 pages, template t3)** during the page-count
pass, plus everything raised and never drafted.

Read this before touching `source/rabbit.html`.

## An honest note on what is and is not in this file

Almost nothing was parked from this package. The first fitting pass did use sentence-level
compression, which was the wrong approach and was stopped partway through; the four edits
that had actually dropped a fact were reverted, and the remaining overflow was resolved by
splitting pages and moving whole blocks instead.

What that pass did, in the end:

1. **Three page splits.** Handling, GI stasis, and the outage-and-travel page each became
   two pages. GI stasis is therefore three pages, which is correct for the condition that
   kills more pet rabbits than anything else.
2. **A layout-only `.snug` class** on six pages.
3. **Three whole-block moves** to pages with headroom, verbatim.

The compression edits that survived are logged below in full, because a future editor
should be able to see exactly what the prose used to say and put any of it back.

## Where 2.0 landed

39 pages, with a measured minimum of 19 px of headroom on the tightest page. **Not a
measured floor**, but the point at which splitting stopped being necessary. Section 03 is
unusually long for a small mammal and that is deliberate: three pages on GI stasis, one on
dental disease, and a droppings and cecotrope reference, because the litter box is the
earliest signal this species gives and the eight-hour rule is the single most important
number in rabbit care.

## Parked blocks

### 1. Timothy hay's nutritional profile (from the "Which hay" table on the diet page)

*Roughly 8 words. The only place in the compression pass where a fact was dropped and not
reinstated. The cut phrase is the leading clause of the timothy row.*

The row currently reads:

```html
    <tr><td>Timothy</td><td><span class="tier staple">Adults</span></td><td>The default. First cut is coarser and better for teeth, second cut softer and more palatable</td></tr>
```

It previously read:

```html
    <tr><td>Timothy</td><td><span class="tier staple">Adults</span></td><td>The default. Good fiber, moderate protein and calcium. First cut is coarser and better for teeth, second cut softer and more palatable</td></tr>
```

Worth reinstating in v3. "Moderate protein and calcium" is what distinguishes timothy from
alfalfa two rows down, and without it the alfalfa row's "too rich for a healthy adult"
has nothing to be rich *relative to*.

## Compression edits that survived, with nothing material lost

Logged so a future editor can restore the fuller prose if a page split frees the room.
Each pair is before, then after.

| Page | Was | Became |
|---|---|---|
| Quick profile, native range | `Iberian Peninsula, spread across Europe by the Romans and now worldwide` | `Iberian Peninsula, spread by the Romans and now worldwide` |
| Quick profile, housing | `A bonded, neutered pair beats a single rabbit by every measure taken` | `A bonded, neutered pair beats a single rabbit` |
| Quick profile, space | `24 sq ft (2.2 m2) exercise space, 5 hours a day minimum` | `24 sq ft (2.2 m2) exercise, 5+ hours a day` |
| Diet, hay storage | `the price per pound is a fraction of it and the turnover is faster, so it arrives greener` | `cheaper per pound and fresher` |
| Greens, bell pepper row | `Higher in sugar and starch than their reputation. Small pieces, not a daily staple` | `More sugar and starch than their reputation. Small pieces only` |
| Greens, muesli row | `Rabbits selectively eat the sweet bits and leave the fiber. Directly linked to obesity and dental disease` | `Rabbits eat the sweet bits and leave the fiber. Linked to obesity and dental disease` |
| Handling, football hold | `with its body supported along your forearm` | `body along your forearm` |
| Bonding, stress bonding | `a mildly novel space, a car ride, or a carrier` | `A mildly novel space or a car ride` |
| Spay and neuter, timing | `your vet will go by size and development rather than the calendar` | `your vet goes by size rather than the calendar` |

Four further compressions from that pass **were reverted** and the fuller wording is what
ships in 2.0: pregnant does on the alfalfa row, the bowl-or-bottle option on the water
row, "no reason to use it" on the iceberg row, and "the European rabbit" in the scientific
name row. Do not re-cut those.

## Blocks moved rather than parked

| Block | Moved from | Moved to |
|---|---|---|
| "Two wellness exams a year" callout | Health red flags | Daily, weekly & seasonal routine |
| "Know your out-of-hours option now" callout | GI stasis: treatment | GI stasis: warning signs |
| "Before your rabbit comes home", 2 of 4 items | Setup checklist | First 30 days, under "Before day 1" |

The remaining two pre-arrival items stayed on the setup checklist. All four still exist;
none was lost.

## Ideas raised while writing 2.0 but never drafted

- **A bonding photo or diagram sequence.** Page 15 describes side-by-side pens, neutral
  territory and stress bonding in words. The stages are visual and would carry far better
  as a five-panel diagram, which is also the page most likely to be read under stress.
- **Breeds, and what changes with them.** 2.0 treats "rabbit" as one animal. Lops need
  their ears checked, angoras need daily grooming or they mat to the skin, giants need
  different flooring and have shorter lifespans, and flat-faced dwarfs are dentally
  predisposed. A breed table would change real husbandry decisions.
- **A rabbit-proofing floor plan.** The proofing checklist is a list. A room diagram
  showing cable runs, carpet corners, and the gap behind the sofa would land better.
- **Litter training troubleshooting.** 2.0 explains the method and says spaying fixes
  most failures. It does not cover the rabbit that uses three corners, the one that
  regresses after a move, or the bonded pair that disagree about where the box is.
- **Outdoor housing, done properly.** The package says indoors and gives the lifespan
  figures, then offers one callout for people who will not be persuaded. A full page on
  shed-and-run setups, predator proofing and daily checks would serve those readers
  better than a warning does.
- **Growth and weight charts by breed size.** The owner log records weight with nothing
  to compare it against. Expected adult weights per breed group would make the log
  actionable rather than merely a trend line.
- **Post-operative care after a spay or neuter.** Covered in one callout. The first 48
  hours are the risky window and deserve a proper checklist.

## If a future edition needs to be shorter

In the order I would cut, having built it:

1. **"Which hamster, and where from" equivalent**, meaning the second half of the species
   or sourcing material, if a future edition merges the bonding pages.
2. **The three GI stasis pages merged back to two.** The split was made to avoid trimming,
   not because the topic demands three pages, and treatment plus prevention would sit on
   one full page.
3. **"Building trust & reading a rabbit"**, merged back into the handling page it was
   split from.
4. **Grooming, nails & molting**, which is the page most duplicated by general small-pet
   guidance elsewhere.

Do not cut: any GI stasis content, the eight-hour rule wherever it appears, the droppings
and cecotrope reference, the dental page, the spay and neuter page, the space standard on
page 5, or any owner-tool page. The uterine cancer figure and the eight-hour rule are the
two numbers this package exists to put in front of an owner.

---

## 2.1, September 2026: the small mammal article cross-check

Written against **2.1, 40 pages, template t3**. A corrections edition, not a
rebuild. It came out of checking the package against the four cross-species
small mammal articles published on 3 and 4 September 2026
(`small-mammal-temperature-heat-stress-guide`,
`small-mammal-grooming-nails-molting-guide`,
`small-mammal-vet-visits-and-travel-guide`, `small-mammal-enterotoxemia-guide`)
and against `rabbit-gi-stasis-guide`, which has not been expanded since the
package was built.

Every figure below was re-sourced from the primary veterinary reference rather
than taken from the article, and two of the article's numbers turned out to be
roundings rather than sources. Those are logged on the site list in the Rabbit
block of `TEMPLATE_GUIDE.md`.

### Every page touched, old text and new

**Page 7, temperature table.**

| Was | Became |
|---|---|
| `60 to 70&deg;F (15 to 21&deg;C)` / "Comfortable. A normal indoor room, and no intervention needed" | `61 to 72&deg;F (16 to 22&deg;C)` / "Merck's optimal rabbit environment. A normal indoor room, and no intervention needed" |
| `Above 77&deg;F (25&deg;C)` / "Start actively cooling: airflow..." | `Above 77&deg;F (25&deg;C)` / "Start actively cooling, ahead of the line: airflow..." |
| `Above 85&deg;F (29&deg;C)` / "Genuine heatstroke risk. Move the rabbit to the coolest room in the house and do not wait to see how it copes" | `Above 80&deg;F (27&deg;C)` / "**The line.** VCA calls it critical to keep a rabbit at or below this. Move to the coolest room and do not wait to see how it copes" |
| `Below 50&deg;F (10&deg;C)` / "Tolerable for a healthy, acclimated rabbit with deep bedding and a windbreak, but see the lifespan figures above before deciding this is fine" | `Below 50&deg;F (10&deg;C)` / "Merck notes rabbits tolerate subzero outdoor temperatures given proper shelter, so an acclimated rabbit with deep bedding and a windbreak copes. Indoors, drafts and damp bedding cause far more cold-related illness than a steadily cool room. See the lifespan figures above first" |

Sources: Merck Veterinary Manual, *Housing of Rabbits*, "the optimal rabbit
environment is 61&deg;-72&deg;F". VCA Animal Hospitals, *Health Problems in Rabbits*,
which calls it critical to keep a rabbit at or below 80&deg;F (26&deg;C). The 85&deg;F
figure had no source and sat above the sourced danger line, which is the wrong
direction to be wrong in.

**Page 7, heat stress signs.** Was: "Heatstroke signs are rapid shallow
breathing, wet nose, red or very hot ears, lethargy, and a rabbit lying
stretched flat and unwilling to move." Became: "Heatstroke signs arrive in an
order: rapid shallow breathing, then drooling or salivating, then weakness and
a rabbit lying stretched flat and unwilling to move, with red or very hot ears
and a wet nose throughout." Drooling was missing entirely and it is the second
sign in VCA's rodent list ("panting, salivating, weakness, convulsions, and
refusal to move") and the first in the RSPCA's guinea pig entry.

**Page 7, the vaccination callout: removed, not cut.** The "Vaccination is
regional" callout was a duplicate. Every fact in it, the US annual
recommendation and the UK and European combined vaccine covering myxomatosis
and RHDV1, was already in page 23's RHDV2 paragraph. Its one unique clause, the
regional caveat, was moved into that paragraph verbatim in meaning: page 23 now
ends "Ask your vet what is standard where you live rather than assuming this
package's list is complete for your region." Nothing was lost, and page 7 went
from 31px over to 130px free.

Worth knowing for v3: page 7 is a table plus two callouts, and **trimming prose
on it does nothing at all.** Four rounds of sentence-level compression moved the
measurement by exactly 0px, because a four-line callout stays four lines until
about 100 characters come out of it. The page only moved when a whole block
did. The same is true of any page whose tail is callouts rather than paragraphs.

**Page 16, choosing a clinic.** Was: "The answer you want is that they do
**not** fast a rabbit before surgery, because rabbits cannot vomit and an empty
gut is a stasis risk." Became: "The answer you want is Merck's: fasting for
longer than three hours is neither required nor recommended, because rabbits
cannot vomit and their stomachs are never empty anyway. A short one to two hour
fast is normal, and its purpose is clearing the mouth, not settling the
stomach." The old wording was directionally right and factually too absolute: a
short pre-op fast **is** recommended, for a narrower reason. Source: Merck
Veterinary Manual, *Management of Rabbits*.

**Page 16, recovery.** Was: "Expect a rabbit to be eating within a few hours and
back to normal in a couple of days... Any rabbit that has not eaten by the
evening of surgery day goes straight back to the vet." Became: "Merck's bar is
**2 to 3 hours**: a rabbit that has not eaten by then needs its pain relief
reviewed, not more waiting." Same source: "If the rabbit does not eat within 2-3
hours after surgery, the analgesic protocol should be reevaluated." The old
deadline was many hours looser than the source.

**Pages 4, 17, 25, 27 and 30, the GI stasis line.** All five read "8 hours".
Page 19 read "8 to 12 hours", as does `rabbit-gi-stasis-guide`. All six now read
**8 to 12 hours**. This was the package disagreeing with itself on its single
most important number, with the emergency card and the care page on opposite
sides of it.

**Page 24, molting.** Was: "Rabbits molt roughly every three months, and two of
those a year are usually heavy." Became: "...and Merck's point is that the
pattern is unpredictable: one molt can be light and the next heavy." Merck
describes it as unpredictable rather than a fixed schedule; the two-heavy-molts
figure had no source.

**Page 24, fur and stasis.** Was: "Swallowed fur combined with dehydrated gut
contents forms a mass that is hard to pass, which is a direct route to the
emergency on page 18." Became: "A rabbit normally carries some hair in its
stomach and passes it, so fur is rarely the cause of a stasis episode on its
own. What it does is compound a gut that has already slowed for another reason,
which is why a heavy molt is a fortnight to watch closely rather than a shedding
nuisance." VCA is explicit that rabbits normally have hair in their stomachs and
that stasis generally has a separate underlying trigger. The old sentence
inverted the causation, which matters: an owner who thinks fur causes stasis
brushes harder instead of looking for the real trigger.

**Page 24, brushing.** "Brush daily through a heavy molt, and weekly otherwise"
became "...and at least twice weekly otherwise", which is Merck's figure for a
short-haired rabbit.

**Pages 24, 31 and 36, nail interval.** "Every 4 to 8 weeks" became "every 6 to
8 weeks" in all three places, which is Lafeber's interval for both rabbits and
guinea pigs.

**Page 24, dark nails.** Was: "on dark nails, take a very small amount at a time
and stop when the cut surface changes texture." Became the same, preceded by
"hold a torch *behind* the nail and the quick becomes visible against the
light". The package had the torch pointed at the wrong nail: Lafeber's technique
is a flashlight behind a **dark** nail, which is the case where you cannot see
the quick, not a pale one where you already can.

**Page 24, scent glands.** Was: "Clean them gently every month or two with a
damp cotton bud." Became: "Clean them every 6 to 8 weeks, in the same session as
the nails. Have a rabbit-savvy vet or groomer show you once first: the area is
sensitive and easy to irritate with the wrong method." Lafeber recommends a vet
or groomer handle it or teach it, and the package was sending an owner in
unaided.

**Page 24, bathing.** "the panic of being submerged can cause spinal injury"
became "the Rabbit Welfare Association warns that a rabbit panicking in water
can fracture its spine or a limb thrashing to get out." The claim was true and
unsourced; RWAF's *Bathing Rabbits* carries it almost word for word, and names
a limb as well as the spine.

**Page 32, outages.** Added, all from PDSA's winter guidance for rabbits and
guinea pigs and the RSPCA's guinea pig heat guidance: raise the pen off the
floor where the coldest air sits, check the water has not frozen including the
ball in a bottle nozzle, water-heavy foods (cucumber, melon, apple) in a hot
outage, water in more than one container, and the relocate-at-hour-two rule.
That last one is the only genuinely new decision on the page: managing in place
works while the room is still in band, and the call to move the rabbit out is
worth making early rather than after a house has had all day to heat up.

**Page 33, transport.** Added, all RSPCA *Transporting Your Rabbits*: a handful
of unsoiled bedding from home, a towel over most of the carrier because a prey
animal wants to hide rather than watch, water alongside the hay, and the
carrier's side facing the direction of travel so a hard stop does not throw the
rabbit face first into the end.

**Pages 39 and 40, the reference split.** Page 39 is now sources only and page
40 is version history, the disclaimer and the colophon. This is the Cockatiel
1.0 finding, and it applies here for the same reason: the sources page nearly
tripled in length. On a single hand-edited file the split is an append at the
very end and moves no existing page number, exactly as the aquatic note in
`TEMPLATE_GUIDE.md` says.

The old sources page carried four papers, House Rabbit Society, PetMD, the
Wisconsin Humane Society and FurCalc, and **not one** of Merck, VCA, RSPCA,
Lafeber or PDSA, which are the sources behind most of Section 02 and 03. All
five are now on it, per figure, along with RWAF.

### Layout changes, no words

`.snug` was added to pages 7, 24 and 27, which had not had it. The targets
tables on pages 26 and 27 became `table.dense`, matching the guinea pig
package's emergency card. Minimum headroom across all 40 pages is 19px.

### Not fixed here, and why

- **Bonding stages (page 15), rabbit-proofing (page 6), the droppings reference
  table (page 25) and the spay and neuter timing (page 16)** are all still PDF
  only. No site article covers any of them, and the cross-species batch did not
  reach them. They remain open rows in the Rabbit block.
- **Merck's temperature-plus-humidity rule** (the two summed should not exceed
  150, so 80&deg;F at 70% humidity is already the ceiling) is a real, sourced
  figure that page 7 does not carry, and it is the single best addition
  available to that page in v3. It was left out of 2.1 only because a
  corrections edition should not add facts nobody asked for.

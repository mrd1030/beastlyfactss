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

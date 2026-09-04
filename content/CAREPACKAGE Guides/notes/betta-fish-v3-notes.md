# Betta Fish Care Package: notes for v3

Content written for or cut from **2.1 (September 2026, 36 pages, template t3)** during the page-count
pass, plus everything raised and never drafted.

Read this before touching `source/betta-fish.html`.

## An honest note on what is and is not in this file

This package was fitted mostly by splitting pages, and the compression that did happen was
sentence-level rather than block-level. Three of those compressions dropped a fact that
appears nowhere else in the package, and those three are parked below with the exact
markup. The rest are logged as before-and-after pairs so a future editor can restore the
fuller prose if a split frees the room.

Nothing was deleted as a whole block. Seven pages were split, one layout-only tightening
pass was applied to two pages, and one callout was moved.

## Where 2.1 landed

36 pages, with a measured minimum of 19 px of headroom. **Not a measured floor.** The
first build came in at 29 pages following the aquatic adaptation note in the template
guide, and then seven pages had to be split because cycling, water chemistry and water
changes each needed a page of their own rather than sharing two. That is the finding worth
carrying forward: the note's 28-to-30 estimate was too low for a fish whose whole care
story is the nitrogen cycle, and the guide has since been updated to 34 to 36 for aquatic.

## Parked blocks

### 1. Native range, by country (quick profile table)

*Roughly 6 words. The specific countries appear nowhere else in the package.*

Currently:

```html
    <tr><td style="color:var(--muted);font-weight:600;">Native range</td><td>Shallow rice paddies, floodplains and slow streams in Southeast Asia</td></tr>
```

Previously:

```html
    <tr><td style="color:var(--muted);font-weight:600;">Native range</td><td>Shallow rice paddies, floodplains, and slow streams in Thailand, Cambodia, and Vietnam</td></tr>
```

Reinstate in v3 if the row fits. "Southeast Asia" is accurate but vaguer than the
encyclopedia entry the package is sourced from, and the countries matter for a species
whose wild populations are IUCN Vulnerable, which is stated two rows below.

### 2. The labyrinth organ's anatomy (fun facts, quick profile page)

*Roughly 10 words. The anatomical description is gone; the function is still stated.*

Currently:

```html
    <li>They breathe air. The labyrinth organ above the gills takes oxygen straight from the surface, an adaptation to warm paddy water holding very little dissolved oxygen. It also means a betta blocked from the surface can drown.</li>
```

Previously:

```html
    <li>They breathe air. The labyrinth organ is a folded, vascularized structure above the gills that lets a betta take oxygen straight from the surface, an adaptation to warm, stagnant paddy water that holds very little dissolved oxygen. It also means a betta blocked from the surface can drown.</li>
```

"Folded, vascularized structure" is the part that makes the organ comprehensible rather
than a name. Worth restoring, and the glossary entry for it could carry the description
instead if the fun-fact row cannot grow.

### 3. Male-versus-female finnage framing (quick profile, adult size row)

*Roughly 10 words.*

Currently:

```html
    <tr><td style="color:var(--muted);font-weight:600;">Adult size</td><td>2.5 to 3 in (6 to 7.5 cm) body. Male finnage is fin, not extra size</td></tr>
```

Previously:

```html
    <tr><td style="color:var(--muted);font-weight:600;">Adult size</td><td>2.5 to 3 in (6 to 7.5 cm) body. Males carry far more fin than females, which is finnage, not size</td></tr>
```

The current wording only makes sense to someone who already knows males are the finned
ones. Since sexing is a logged content gap and only appears in the glossary, this row is
currently doing more work than it looks like.

## Compression edits that survived, with nothing material lost

| Page | Was | Became |
|---|---|---|
| Quick profile, lifespan | `Most are already several months old at purchase` | `Often months old when sold` |
| Quick profile, tank minimum | `10 gal (38 L) is meaningfully easier to keep stable` | `10 gal (38 L) is far easier` |
| Quick profile, conservation | `despite being one of the most numerous captive fish on earth` | `despite huge numbers in captivity` |
| Quick profile, hard rule | `Ammonia and nitrite both read 0 ppm, always. Any other number is an emergency` | `Ammonia and nitrite read 0 ppm, always. Anything else is an emergency` |
| Food chart, pellet | `30 to 35% protein` in the row (the figure is still stated in full on the diet page) | dropped from the row only |
| Food chart, freeze-dried | `Fed dry it swells inside the fish and raises constipation risk` | `Fed dry it swells inside the fish` |
| Cycling, step 4 | `Seeded media can cut weeks off this` | `Seeded media cuts weeks off this` |
| Budget note | `A hospital container with a spare heater and a seeded sponge (page 17)` | `A hospital container (page 17)` |
| Emergency card | `it is never the wrong thing to have done, and it buys time` | `and it buys time` |

## Blocks moved rather than parked

| Block | Moved from | Moved to |
|---|---|---|
| "Cycle with the plants already in" callout | Fishless cycling, step by step | Filtration & the nitrogen cycle |

## Corrections made after v1.0, for the record

Two figures in v1.0 were wrong and were fixed by external research rather than by the
site's own guides, which is worth remembering because the site was the original source:

- **Feeding window.** v1.0 said "cleared within about 60 seconds", taken from the site's
  feeding MDX. Vet-reviewed guidance is 1 to 2 minutes with no leftovers, which is what
  2.1 says. The MDX was corrected to match.
- **Running costs.** v1.0 itemised $6 to $20 a month, which understated heater
  electricity. Heating a small tank is $30 to $100 a year on its own. 2.1 says $10 to $25
  a month and $120 to $300 a year, and the site's cost guide was corrected too, since it
  had been self-contradictory.

## Ideas raised while writing 2.1 but never drafted

- **Sexing a betta.** Logged as a site content gap and currently present only as a
  glossary entry for "ovipositor". Ovipositor, ventral fin length, anal fin shape, beard
  size, and why the egg spot is suggestive rather than conclusive. A short page, and it
  would also let the adult size row above say something simpler.
- **Bubble nests, properly.** Mentioned as a fun fact and as a good sign on the behavior
  page. What a nest means, when it appears, whether to remove it, and what a male does
  with one deserve a proper treatment.
- **A tank cycling log.** The owner log records weekly parameters for an established tank.
  Cycling needs its own grid: date, ammonia dosed, ammonia, nitrite, nitrate, over six
  weeks. It is the period with the most testing and the least structure.
- **Fin types and what they cost the fish.** Halfmoon, crowntail, plakat, double tail and
  rosetail are sold on appearance, and heavy finnage carries real swimming and fin-rot
  consequences. A buyer's table would change purchases.
- **Planted tank basics.** The enrichment research points hard at live planting and the
  package says to do it without saying how. Substrate, light, and five plants that
  tolerate a betta tank would close that.
- **Diagnostic illustrations.** Ich versus velvet versus columnaris is the one
  distinction in the package that text struggles with, and it is on the differential
  callout for exactly that reason. Three small SVGs would carry it better.

## If a future edition needs to be shorter

In the order I would cut, having built it:

1. **"Why a betta stops eating"**, merged back into the diet page it was split from.
2. **"Water changes & keeping the cycle"**, merged back into water quality and testing.
3. **The travel page**, merged back into power outages.
4. **The tankmates page**, if the site ever carries a proper tankmate article to point at.

Do not cut: the parameter table, either cycling page, the ich-versus-velvet-versus-
columnaris differential, the abdomen and body condition diagram, the aquarium salt dosing
and its 10-day ceiling, or any owner-tool page. The two cycling pages are the reason this
package exists, since an uncycled tank is what actually kills most bettas.

## Sep 4 2026: cross-check against the new aquatic articles (v2.1 to v2.2)

Package cross-checked against the cross-species aquatic articles published Sep 3 and Sep 4:
`aquarium-cycling-guide`, `aquarium-power-outage-and-transport-guide`, and
`fish-quarantine-and-treatment-guide`. Every page touched is below, old text then new.
Version bumped 2.1 to 2.2, template stays t3.

### Page 7, Fishless cycling, step by step

Completion test, nitrate added:

- Was: `read <strong>0 ammonia and 0 nitrite 24 hours later</strong>. Not "close to zero." Zero.`
- Now: `read <strong>0 ammonia and 0 nitrite 24 hours later, with nitrate present</strong>. Not "close to zero." Zero.`

Fish-in callout, action line set at 0.1 to 0.25 ppm. This wording is now identical in all
three aquatic packages:

- Was: "Test ammonia and nitrite daily. Change 25 to 50% of the water any time either reads above 0, use a conditioner that detoxifies ammonia between changes"
- Now: "Test ammonia and nitrite daily. Watch from 0.1 ppm and change water at 0.25 ppm, scaling the change to the reading: 25 to 30% just over the line, 50% or more once either number is clearly climbing. Use a conditioner that detoxifies ammonia between changes"

### Page 17, Finding a vet & what to tell them

Hospital tank, Merck's reference build added alongside the betta-sized one:

- Was: "A bare 2 to 3 gallon (8 to 11 L) container with a spare heater and a sponge filter seeded in your main tank lets you treat a fish without dosing medication into your plants, your snails, and your bacteria colony."
- Now: "The veterinary reference build is a 10 gallon (38 L) tank with a sponge filter, an air pump and a heater. For one betta, a bare 2 to 3 gallon (8 to 11 L) container with a spare heater and a sponge filter seeded in your main tank does the same job. Either lets you treat a fish without dosing medication into your plants, your snails, and your bacteria colony."

Quarantine window raised to the Merck minimum:

- Was: "Quarantine a new fish for 2 to 4 weeks in a separate container before it goes anywhere near an established tank, and rinse and inspect plants."
- Now: "Quarantine a new fish for at least 30 days in a separate container before it goes anywhere near an established tank, and 30 to 60 days for one you especially do not want to lose. Rinse and inspect plants."

### Page 18, Fin rot & ich

Aquarium salt duration. The fixed ceiling was not supported by any site or veterinary
source, and the article that now covers this ground declines to give a number of days:

- Was: "Do not run salt for more than about 10 days continuously, it is hard on the kidneys and liver. Salt does not evaporate, so only replace what you remove in a water change, dosed to the volume replaced."
- Now: "There is no agreed number of days to stop at, so do not run a countdown. End it the way the veterinary guidance does: once the infection has cleared, change the water repeatedly until the salt is fully out. Salt does not evaporate, so between changes only replace what you remove, dosed to the volume replaced."

The 1 tsp per gallon dose itself was **not** changed. It is unsourced against the two vet
sources now on the site and is parked pending a decision.

### Page 22, Tankmates

- Was: "Quarantine it for 2 to 4 weeks first (page 17)"
- Now: "Quarantine it for at least 30 days first (page 17)"

### Page 27, Symptom quick reference

- Was: "Fix the water, salt at 1 tsp per gallon, max 10 days (page 18)"
- Now: "Fix the water, salt at 1 tsp per gallon, cleared by water changes (page 18)"

### Page 29, Power outages & the blackout plan

The biggest change in this pass. The page opened by telling a keeper to do nothing for an
hour or two and to leave oxygen until the 8 hour mark. The article puts aeration first and
temperature a distant second, so the ordering inverted and the 8-hour cycle was dropped
rather than kept, because it contradicted the new first step. The labyrinth organ stays as
the reason a betta has more margin than a gill-only fish, which is what the old ordering
was really reaching for.

Section subtitle:

- Was: "A betta breathes air, which buys you far more time in a blackout than most fish get. Temperature is the thing that will actually get you."
- Now: "Oxygen goes first and temperature second, even for a fish that can breathe air. Aerate before you do anything else."

Do list, first three items:

- Was: "For the first hour or two, do nothing. A single betta in 5 gallons is a very light bioload and the water holds fine." / "Insulate..." / "Heat gently..." / "From about the 8 hour mark, restore oxygen for an hour, then repeat every 8 hours..."
- Now: "**Aerate straight away.** Once the filter stops, the surface stops moving and dissolved oxygen starts falling within a couple of hours. A battery or USB air pump on a power bank, left running, is the whole job." / "No pump: scoop water out and pour it back from a few inches up, every 10 to 15 minutes at this tank size. Crude, and it works." / "The labyrinth organ is your margin, not your plan. A betta takes oxygen at the surface, so it tolerates still water far better than a gill-only fish. Keep aerating anyway." / then insulate, then heat gently.

Timeline table, first three rows:

- Was: "0 to 2 hours: Nothing. Leave the lid on, leave the lights off, and do not open the tank" / "2 to 8 hours: Insulate with towels. Start watching the thermometer rather than the clock" / "From 8 hours: Run oxygen for an hour, then repeat every 8 hours..." / "Past 24 hours: Keep the 8-hour oxygen cycle going..."
- Now: "First 10 min: Get air moving: battery pump on, or start the pour-back cycle. Unplug the filter at the wall, lid on, lights off" / "0 to 2 hours: Keep aerating. No feeding. Temperature has barely moved yet, so do not chase it" / "2 to 8 hours: Insulate with towels and start watching the thermometer. Aeration continues throughout" / "Past 24 hours: Still aerating, still no feeding..."

Page 30, travel and transport, was **not** changed. The bag ratio there is under review, see
the site list.

### Page 33, Equipment, water change & vet log

- Was: "Quarantine log (any new fish, plant, or snail, 2 to 4 weeks)"
- Now: "Quarantine log (any new fish, plant, or snail, 30 days minimum)"

### Page 36, Sources, version history & about

Added: Merck's Management of Aquarium Fish and Routine Health Care of Fish; VCA on ending a
salt course by water change; NC State on power outages, folded into the Aquarium Co-Op line.
The two tank-size enrichment studies were merged onto one line and the Merck entries folded
together, purely to buy space. Cover badge and colophon moved to Version 2.2, and a 2.2 row
was added to the version history.

**This page did not fit.** It ran 143px over after the additions, and 81px over even with
every existing history row and the closing disclaimer cut to the bone. Its baseline
headroom was 37px, so the page has been effectively full since 2.0. See the note below.

### The back reference page needs to be two pages

All three aquatic packages hit the same wall in this pass: betta 36, goldfish 39 and
axolotl 41 are single reference pages carrying sources, version history, the colophon, and
in the axolotl's case a source-drift section, and none of them has room for another source
line or another history row. This is exactly the finding the Cockatiel 1.0 build recorded
in `TEMPLATE_GUIDE.md`: a package that sources properly needs two reference pages at the
back, not one. Betta is the awkward one of the three because it is a single hand-edited
file rather than a `-src` fragment build, though a split at the very end of the document
appends a page without moving any existing page number.

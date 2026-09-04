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

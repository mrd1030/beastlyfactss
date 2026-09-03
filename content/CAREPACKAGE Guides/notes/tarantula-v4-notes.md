# Tarantula Care Package: notes for v4

Content written for or cut from **v3.0 (September 2026, 43 pages)** during the page-count
pass, plus everything raised and never drafted.

Read this before touching `source/tarantula.html`.

## An honest note on what is and is not in this file

Very little was parked from this package, and that is not an oversight. When pages ran
long during the build, the overflow was resolved in this order, and content was only ever
the last resort:

1. **Seven page splits.** Quick profile, handling, rehousing, health red flags, molt
   complications, power outages, and the equipment log each became two pages.
2. **A layout-only `.snug` class** applied to eleven pages, tightening heading margins,
   callout padding and dense-table row height without touching the type scale.
3. **Seven whole-block moves** to pages with headroom, verbatim, no rewording.
4. **One deletion**, recorded below, and it was genuinely redundant.

That is why the package is 43 pages. The count is a consequence of refusing to trim, not
a target anyone aimed at. See "Where v3.0 landed" below before deciding to shorten it.

## Where v3.0 landed

43 pages, with a measured minimum of 19 px of headroom on the tightest page. **This is
not a measured floor.** It is where the content settled once trimming was ruled out. The
package could be shorter, and "If a future edition needs to be shorter" at the end says
what that would cost.

For context against the rest of the series: Rabbit and Goldfish are 39, Betta 36, Bearded
Dragon and Ball Python 34. Tarantula is the longest, largely because molting and the
handling question each needed two pages and the legality page has no equivalent in the
reptile skeleton.

## Parked blocks

### 1. "Before your tarantula comes home" (removed from the Setup Checklist page)

*Roughly 30 words. Removed because both items already appear verbatim on the First 30
Days page under "Before day 1", so this was the same checklist printed twice.*

```html
  <h2 class="h">Before your tarantula comes home</h2>
  <div class="two-col">
    <div class="col">
      <div class="check-item"><div class="box"></div><span>Legality checked at state, city and lease level (page 28)</span></div>
    </div>
    <div class="col">
      <div class="check-item"><div class="box"></div><span>Species identified in Latin, and its type confirmed (page 7)</span></div>
    </div>
  </div>
```

If a future edition drops the First 30 Days page, this block needs reinstating on the
setup checklist, because those two checks genuinely belong before purchase and nowhere
else in the package makes them a gate.

## Blocks moved rather than parked

None of these left the package. They are listed because each landing page is now at or
near capacity, so a future editor adding content to one of them should expect to move
these on again rather than assume free space.

| Block | Moved from | Moved to |
|---|---|---|
| "Buy the species, not the look" callout | Substrate & furnishing | How to use this package |
| "Where to put the enclosure" callout | Temperature & ventilation | Enclosure: shape, size & the lid |
| "The distinction that does the work" callout | Why a tarantula stops eating | What isn't a red flag |
| "A spider on its back is not dying" callout | Molting: the cycle | What isn't a red flag |
| "Don't read stillness as anything at all" callout | Enrichment | What isn't a red flag |
| "Expect it to look wrong for a while" callout | Molting: what to do | Molt complications, mites & mold |
| "Who else lives in your house" callout | Urticating hairs & bites | What interacting actually looks like |

The "What isn't a red flag" page now carries three moved callouts and is the page to
watch: it works well, because all three are about normal-looking states that alarm
owners, but it has the least room left of any page in Section 03.

## Wording changed to fit, with nothing lost

One SVG label on the enclosure diagram was overrunning the enclosure border and clipping.
The fix was a shorter label, not less information:

- `room temperature, no supplemental heat` became `room temperature, no extra heat needed`
- The temperature block was also shifted from `x="130"` to `x="148"` so it stops crossing
  the enclosure's left edge. If that diagram is ever rebuilt, keep the centre at 148 or
  further right.

## Ideas raised while writing v3.0 but never drafted

- **A species picker table.** v3.0 explains terrestrial, fossorial and arboreal and then
  leaves the reader to identify their own animal. A table of the twenty or so commonly
  sold species against type, adult leg span, temperament, and beginner suitability would
  be the most useful single page that is missing, and it is the question every buyer
  actually has.
- **Old World species, properly.** They appear only as a warning inside the handling and
  hairs pages. A dedicated page on why they are a step up, what the bite risk actually
  means, and which species are commonly mis-sold to beginners would be worth having.
- **Breeding, and what to do with an eggsac.** Not covered at all. Even a page on "your
  female laid an eggsac and you did not plan this" would serve more keepers than a full
  breeding treatment.
- **A molt photo or diagram sequence.** Premolt signs, the molt itself and the exuvia are
  all described in words. Simple inline SVGs of a bald patch, an inverted molting spider,
  and a spermatheca in a flattened exuvia would carry pages 13, 14 and 27 far better than
  text does, and the spermatheca especially is hard to describe and easy to draw.
- **Communal species.** v3.0 says one spider per enclosure, full stop, which is right for
  the beginner species it covers. The handful of genuinely communal species deserve a
  paragraph saying why they are the exception rather than being silently contradicted by
  a keeper who has seen one.
- **Feeder insect husbandry.** Gut-loading gets a paragraph. Actually keeping a roach
  colony or a cricket tub alive, which every keeper ends up doing, is not covered.
- **A "your first month, week by week" fold-out.** The First 30 Days page is a checklist;
  the molting and feeding timelines run on different clocks, and a single calendar view
  would resolve that better than three cross-references.

## If a future edition needs to be shorter

In the order I would cut, having built it:

1. **The legality page**, if the site's `tarantula-legal-guide.mdx` is judged to cover it.
   It is the most self-contained page in the package and the one most likely to date.
2. **"What interacting actually looks like"**, merged back into the handling page it was
   split from. That merge is the cleanest single-page saving available and costs nothing
   but headroom.
3. **The two rehousing pages merged back into one**, accepting a very full page.
4. **"Where tarantulas are not legal" and "Cost overview" merged into Section 01**, which
   is where the cost half came from.

Do not cut: the water page, the abdomen reference table, either molting page, the
urticating hair first aid, the dehydration and falls page, the enclosure diagram, or any
owner-tool page. The water page and the two molting pages are the product. A tarantula
package without the death-curl-versus-molting-on-its-back distinction is actively
dangerous, and that distinction is currently spread across pages 13, 24 and the emergency
card by design, not by accident.

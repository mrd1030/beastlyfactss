# Goldfish Care Package: notes for v3

Content written for or cut from **2.0 (September 2026, 39 pages, template t3)** during the page-count
pass. Nothing here was cut for being wrong: it was cut to keep every page inside the
print area, and it is parked so a later edition does not have to research or write it
again.

The HTML is the exact markup that was removed, so reinstating a block is a paste into
`source/goldfish.html` plus a re-run of the overflow check in `../TEMPLATE_GUIDE.md`.
Anything reinstated needs a page split to absorb it; the page-by-page headroom is in the
measurement output, not guessable by eye.

## Where 2.0 landed

39 pages. The floor for this content at the template's type sizes, measured, not
estimated. Getting below it means parking whole topics rather than trimming, and the
candidates are listed under "If a future edition needs to be shorter" at the end.

## Parked blocks

### 1. Myth and reality table (Section 01)

*Roughly 404 words.*

```html
  <table class="dense">
    <tr><th style="width:34%;">The claim</th><th>What is actually true</th></tr>
    <tr><td>"A goldfish grows to the size of its tank."</td><td>It becomes stunted in a small one. Cramped space and chronic ammonia exposure suppress body growth while the skeleton and organs keep developing, which shortens life rather than conveniently limiting size.</td></tr>
    <tr><td>"Goldfish have a three-second memory."</td><td>They form associative memories lasting months, learn feeding routines within days, and can be trained to navigate mazes and push levers. The myth mostly serves to excuse an unstimulating container.</td></tr>
    <tr><td>"A bowl is fine, that's what they're for."</td><td>A bowl has too little water volume to dilute waste and too little surface area for gas exchange, and it cannot hold a filter. It is the single most harmful piece of goldfish advice in circulation.</td></tr>
    <tr><td>"Goldfish only live a few years."</td><td>10 to 15 years is normal in a well-kept tank, 20 to 30+ in a pond, and the record is 43. Short goldfish lives are a husbandry outcome, not a species trait.</td></tr>
    <tr><td>"Feeder goldfish are a different, hardier kind."</td><td>They are the same species, usually commons or comets, bred cheaply and in crowded conditions. They start with a health disadvantage and grow the largest of all.</td></tr>
    <tr><td>"You need to change all the water to keep it clean."</td><td>A full change strips out the bacteria colony doing the filtering and restarts the cycle with a fish in the tank. Partial weekly changes of 25 to 50 percent are the correct approach.</td></tr>
    <tr><td>"Clear water means healthy water."</td><td>Ammonia and nitrite are invisible and odorless at harmful levels. A crystal-clear tank can be actively poisoning a fish, which is why the test kit is not optional.</td></tr>
    <tr><td>"Goldfish are a good starter pet for a small child."</td><td>They are genuinely easy to keep well, but they need a cycled 20 gal (76 L) tank, weekly testing, and a decade of commitment. The animal is easy; the setup is not trivial.</td></tr>
    <tr><td>"They can live with tropical community fish."</td><td>Goldfish want 65 to 75&deg;F (18 to 24&deg;C) and no heater; a tropical community wants 76 to 80&deg;F (24 to 27&deg;C). In a shared tank one of the two is always being kept wrong.</td></tr>
    <tr><td>"A goldfish won't outgrow a 10 gallon tank."</td><td>A fancy reaches 6 to 8 in (15 to 20 cm) and a comet 10 to 14+ in (25 to 36+ cm). Neither has the swimming room or the filtration headroom it needs in 10 gal (38 L).</td></tr>
  </table>
```

### 2. What this fish asks of you (commitment table, Section 01)

*Roughly 165 words.*

```html
  <h2 class="h">What this fish asks of you</h2>
  <table class="dense">
    <tr><th style="width:30%;">Commitment</th><th>What it actually looks like</th></tr>
    <tr><td>Time before the fish</td><td>Four to six weeks of cycling an empty tank, testing every few days. This is the part most owners skip, and skipping it is the leading cause of early goldfish death.</td></tr>
    <tr><td>Weekly time</td><td>About 30 to 45 minutes: a water test, a 25 to 50 percent water change, and a substrate siphon.</td></tr>
    <tr><td>Daily time</td><td>Five minutes. Feed a measured portion, check the filter is running, look the fish over.</td></tr>
    <tr><td>Space</td><td>A 20 gal (76 L) tank needs roughly 30 &times; 12 in (76 &times; 30 cm) of floor and weighs about 225 lb (102 kg) filled. It is furniture, not an ornament.</td></tr>
    <tr><td>Years</td><td>10 to 15, routinely. Plan for a fish that outlasts a house move, a job change, and possibly a college degree.</td></tr>
    <tr><td>What you get back</td><td>A trainable, food-motivated, genuinely responsive animal that recognizes routines and people. Not a fish you touch, but far from a decoration.</td></tr>
  </table>
```

### 3. Pond overwintering

*Roughly 264 words.*

```html
  <h2 class="h">Overwintering</h2>
  <p>Goldfish are genuinely cold-hardy and overwinter outdoors in most temperate climates rather than needing to be brought inside. What they need is depth and gas exchange: enough unfrozen water below the ice to hold a stable, cold temperature, and one opening kept clear so gases can escape rather than accumulating under a sealed lid of ice.</p>
  <ul class="compact">
    <li>Keep a section of the surface open with a floating de-icer or an air stone set near the surface. Never break ice by hitting it, since the shock wave carries through the water to the fish.</li>
    <li>Stop feeding below about 39&deg;F (4&deg;C) and do not resume until the water is reliably back above it, not on the first warm afternoon.</li>
    <li>Net out fallen leaves through autumn. Decaying leaf litter consumes oxygen all winter under the ice, which is the usual cause of losses in a pond that looked fine in November.</li>
    <li>Cut back and remove dying plant growth before the freeze for the same reason.</li>
    <li>Turn off or raise a pump that would otherwise circulate the warmest bottom water up to the surface to be chilled. The fish spend winter in that bottom layer.</li>
  </ul>

  <div class="callout warn" style="margin-bottom:0;">
    <span class="label">Spring is the risky season, not winter</span>
    Fish come out of winter with their immune systems still running slowly while bacteria and parasites resume activity faster as the water warms. That mismatch is why disease often appears in spring rather than in the cold. Start feeding lightly and gradually, watch closely for the conditions in Section 03, and do not stock new fish into a pond until the water is stable and warm.
  </div>
```

### 4. Reading a goldfish food label

*Roughly 190 words.*

```html
  <h2 class="h">Reading a goldfish food label</h2>
  <ul class="compact">
    <li><strong>A named protein first.</strong> Fish meal, krill, shrimp or spirulina near the front of the list beats a generic cereal filler or "fish derivatives".</li>
    <li><strong>Protein around 30 to 36 percent</strong> suits a growing goldfish; adults do well at the lower end. Very high-protein cichlid or carnivore formulas are the wrong food for an omnivore with no stomach.</li>
    <li><strong>Some fiber and plant matter</strong> is a feature here, not filler. It is part of why goldfish-specific food reduces the constipation problems on page {{P:swimbladder}}.</li>
    <li><strong>A date on the bag.</strong> Vitamin content degrades after opening, so buy a size you will finish in two or three months rather than the biggest tub on the shelf.</li>
    <li><strong>Sinking, and the right pellet size.</strong> A pellet a fish cannot fit in its mouth gets shredded and wasted; one too small gets inhaled with a mouthful of air.</li>
  </ul>

  <div class="callout tip" style="margin-bottom:0;">
    <span class="label">Store it properly</span>
    Keep food sealed, dry and out of sunlight, and never on the warm hood of the tank, where humidity and heat degrade it fastest. A bag that has gone soft or smells rancid has lost the vitamins you bought it for.
  </div>
```

### 5. What each water reading actually does to the fish

*Roughly 179 words.*

```html
  <h2 class="h">What each reading actually does to the fish</h2>
  <table class="dense">
    <tr><th style="width:22%;">Reading off target</th><th>What it does</th></tr>
    <tr><td>Ammonia above 0</td><td>Burns the gills and skin, blocks oxygen uptake, and leaves dark patches as the burns heal. Acutely dangerous within hours at high levels.</td></tr>
    <tr><td>Nitrite above 0</td><td>Binds to the blood so it cannot carry oxygen, so the fish suffocates in water that is chemically full of it. Gills may look pale or brownish.</td></tr>
    <tr><td>Nitrate over 40 ppm</td><td>Not acutely toxic, but chronic exposure suppresses growth and immune response, which is how a tank drifts into disease without one obvious cause.</td></tr>
    <tr><td>pH moving quickly</td><td>Osmotic shock. A stable pH slightly outside the ideal range is safer than one being corrected in a hurry with adjusting chemicals.</td></tr>
    <tr><td>Temperature over 75&deg;F (24&deg;C)</td><td>Raises the fish's oxygen demand while the warmer water holds less of it. The combination is why summer gasping happens in a tank that was fine in spring.</td></tr>
    <tr><td>KH under 40 ppm</td><td>Removes the buffer that holds pH steady, so a crash can happen overnight with no warning in the pH reading itself.</td></tr>
  </table>
```

### 6. Moving house with a goldfish

*Roughly 86 words.*

```html
  <div class="callout warn" style="margin-bottom:0;">
    <span class="label">Moving house with a goldfish</span>
    Drain the tank into clean buckets and keep as much of the original water as you can carry, since that is what your bacteria colony lives in alongside the filter media. Keep the media wet in tank water for the whole trip, never dry and never in tap water. Set the tank up at the other end before you unpack anything else, and test daily for the first week: a move disturbs the colony and a small cycle afterward is common.
  </div>
```

### 7. Before you go (pre-trip checklist)

*Roughly 81 words.*

```html
  <h2 class="h">Before you go</h2>
  <div class="two-col">
    <div class="col">
      <div class="check-item"><div class="box"></div><span>Water change and a full test 24 hours before you leave, not on the morning of</span></div>
      <div class="check-item"><div class="box"></div><span>Pre-portion food into one labeled container per feeding day</span></div>
      <div class="check-item"><div class="box"></div><span>Fill in the pet-sitter sheet on page {{P:sitter}} and leave it by the tank</span></div>
    </div>
    <div class="col">
      <div class="check-item"><div class="box"></div><span>Do not clean the filter or change media in the week before a trip</span></div>
      <div class="check-item"><div class="box"></div><span>Top the water level up so evaporation does not expose the filter intake</span></div>
      <div class="check-item"><div class="box"></div><span>Leave the vet's number, your number, and a backup contact written down</span></div>
    </div>
  </div>
```

### 8. After the power comes back, and the sponge-filter insurance note

*Roughly 133 words.*

```html
  <div class="callout info">
    <span class="label">After the power comes back</span>
    Rinse the mechanical media in removed tank water before restarting, then bring the filter back online and check the flow. Test ammonia and nitrite the same day and daily for the next few days: an outage long enough to hurt the bacteria colony can produce a small cycle again, and the fix is the same as a fish-in cycle on page {{P:cycling}}. Resume feeding lightly rather than making up for missed meals.
  </div>
  <div class="callout tip" style="margin-bottom:0;">
    <span class="label">The cheap insurance</span>
    A sponge filter on an air pump, running permanently alongside your main filter, is the single best preparation for this. It costs very little, adds biological capacity a goldfish tank needs anyway, and during an outage you move one airline from the wall pump to a battery pump and the tank keeps breathing.
  </div>
```

### 9. Quick profile: "the one number that matters most" callout

*Roughly 71 words.*

```html
  <div class="callout info" style="margin-bottom:0;">
    <span class="label">The one number that matters most</span>
    Tank volume. Almost every goldfish health problem in this package traces back to a tank too small for the fish's waste output, and almost none of them are hard to avoid in a correctly sized, well-filtered one. If you take a single figure from this page, take 20 gal (76 L) for one fancy goldfish, and 55 gal (208 L) for one common or comet.
  </div>
```

### 10. Water changes: "signs your water needs testing today" table (largely duplicated by the symptom quick reference)

*Roughly 200 words.*

```html
  <h2 class="h">Signs your water needs testing today</h2>
  <table class="dense">
    <tr><th style="width:38%;">You notice</th><th>Likely means</th></tr>
    <tr><td>Gasping at the surface, gills working hard</td><td>Low oxygen or ammonia burn to the gills. Test ammonia and nitrite, and increase surface agitation.</td></tr>
    <tr><td>Red or purple streaks in the fins, or bloodshot gills</td><td>Classic ammonia or nitrite poisoning. Water change immediately.</td></tr>
    <tr><td>Clamped fins, sitting on the bottom, off food</td><td>Water quality first, disease second. Test before treating anything.</td></tr>
    <tr><td>Cloudy white water in a new tank</td><td>Bacterial bloom during cycling. Normal. Do not add fish, do not deep clean.</td></tr>
    <tr><td>Green water, or algae on every surface</td><td>Too much light or too much nitrate. Cut the photoperiod to 8 to 12 hours and check your change schedule.</td></tr>
    <tr><td>A sudden smell from the tank</td><td>Something has died, or the filter has stalled. Count the fish and check the flow.</td></tr>
  </table>

  <div class="callout tip" style="margin-bottom:0;">
    <span class="label">The single most useful habit</span>
    Test on the same day each week and write the numbers in the Owner Log on page {{P:ownerlog}}, even when they are boring. A slow drift in nitrate or a creeping pH tells you something is changing weeks before the fish shows it, and a page of past readings is the most useful thing you can hand a vet.
  </div>
```

### 11. Diet: feeding rings and automatic feeders callout

*Roughly 103 words.*

```html
  <div class="callout warn">
    <span class="label">Feeding rings and automatic feeders</span>
    A feeding ring keeps floating food in one place, which is convenient for you and works against a fancy goldfish for the reason above. Automatic feeders have the opposite problem: they dispense on a timer regardless of whether the last portion was eaten, so they reliably overfeed. For a species that tolerates fasting as well as a goldfish does, neither is worth the tradeoff for a short absence, covered on page {{P:outage}}.
  </div>

  <div class="callout never" style="margin-bottom:0;">
    <span class="label">Never feed</span>
    Bread, avocado, chocolate, raw meat, cheese, or onions. Citrus should not be a habit. The full never-feed list, with reasons, is on page {{P:treats}}.
  </div>
```

### 12. Staple foods: "how to blanch, in one line" callout

*Roughly 53 words.*

```html
  <div class="callout tip" style="margin-bottom:0;">
    <span class="label">How to blanch, in one line</span>
    Drop the vegetable in boiling water for 30 to 60 seconds until it softens, then cool it in cold water before it goes in the tank. Softening is the whole point: it makes the vegetable digestible and stops a fish tearing at something it cannot break down.
  </div>
```

### 13. Protein foods: thawing and portioning frozen food

*Roughly 71 words.*

```html
  <h2 class="h">Thawing and portioning frozen food</h2>
  <p>Break off a piece rather than dropping in a whole cube, and thaw it in a small cup of tank water before it goes in. Feeding a frozen block means the fish swallows it cold and solid, and the packing liquid in most frozen foods is waste you have no reason to add to the tank. Pour off that liquid and feed only the food itself.</p>
```

### 14. Travel: the 1 to 2 week fasting-limit note

*Roughly 40 words.*

```html
  <p class="muted" style="font-size:9.3pt;margin-top:4pt;">Goldfish are often quoted as surviving 1 to 2 weeks without food thanks to a slow coldwater metabolism. That is a survival limit, not a plan. Overfeeding by a well-meaning sitter kills more fish than a missed meal ever does.</p>
```

### 15. Sexing: the pectoral-fin sign

*Roughly 24 words.*

```html
    <li><strong>Pectoral fins.</strong> Often longer and more pointed on a male, rounder and shorter on a female. One of the weaker signs on its own.</li>
```

### 16. Power outage: keep the lid on and the lights off

*Roughly 16 words.*

```html
        <li>Keep the lid on and the lights off. Less evaporation, less stress, and no heat added.</li>
```

### 17. Power outage: the outage kit callout (the same gear is itemized on the setup checklist and budget pages)

*Roughly 25 words.*

```html
      <div class="callout tip" style="margin:6pt 0 0 0;padding:8pt 11pt;">
        <span class="label">Outage kit</span>
        Battery air pump with spare batteries, airline and air stone, dechlorinator, a clean bucket, and a flashlight, all stored together near the tank.
      </div>
```

## Ideas raised while writing 2.0 but never drafted

- **A stocking calculator table.** Volume against number and type of fish, so a buyer
  can check a mixed group rather than reading two minimums and doing the arithmetic.
- **A water-test log with space for a hand-drawn trend line.** The owner log records
  numbers; a small grid would make a nitrate drift visible at a glance.
- **Breeding and raising fry.** 2.0 covers spawning behavior as something that happens
  to you, not as a project. A full treatment needs a page on conditioning, a spawning
  mop, egg handling, and the fry feeding schedule that is currently compressed into two
  rows of the feeding-by-age table.
- **Pond construction.** 2.0 tells single-tail owners a pond is the right long-term
  home and then stops. Depth, volume per fish, liner, pond filtration and predator
  netting are all missing, and a pond section is arguably its own product.
- **A varieties visual key.** The varieties table describes body types in words. Small
  silhouettes of fancy, single-tail and telescope-eye shapes would carry it better, and
  matches the inline-SVG style used for the tank diagram.
- **Diagnostic photographs.** Ich, dropsy and fin rot are all described in text because
  the package has no photo library for them. Even simple SVG illustrations of pinecone
  scaling and clamped fins would make the health section faster to use under stress.

## If a future edition needs to be shorter

In the order I would cut, having built it:

1. **Pond feeding by temperature** (on the diet page). Irrelevant to indoor tank owners,
   who are most buyers.
2. **The sexing section** (on the varieties page). Most owners never breed, and the
   honest answer is that sexing is unreliable anyway.
3. **The growth reference table**. Useful context, but nothing an owner acts on.
4. **The fish-in cycling half of the cycling page**, if it were ever split back out.
   Cutting this one is a real loss: it is the situation most new owners are actually in.

Do not cut the water chemistry table, the filtration turnover figures, the cycling
walkthrough, or any owner-tool page. Those are the package.

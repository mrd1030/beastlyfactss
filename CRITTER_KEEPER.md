# Critter Keeper

A virtual bearded dragon that runs on the site's own care guides. Get the heat,
UVB, food, water and handling right and he thrives. Get it wrong and he shows
the symptoms a real dragon would, each linking to the guide that explains why.

- **Branch:** `critter-keeper`. Nothing ships to beastlyfacts.com until it merges.
- **Test site:** https://beastlyfactss-sharetest.pages.dev/critter-keeper/ (the
  sharetest Pages project builds this branch as its production branch; a push
  shows up in about 2 minutes).
- **Page:** `/critter-keeper/`, `src/pages/CritterKeeper.jsx`. We build and tune
  it on the page first. The floating widget comes last.

## Ground rules

- Every number and rule comes from the bearded dragon guides in
  `content/guides/`. If a guide changes, `src/lib/critterKeeper/rules.js`
  changes with it. Never invent care advice for the game.
- Pixel art is drawn in code (grids plus shapes, one palette), not generated
  images, so every frame and item matches.
- The dragon lives in real time in the player's browser (localStorage key
  `critter-keeper-v1`), even while the page is closed, and ages a week per real
  day: he arrives at 4 months and is an adult in about two months of play.

## Code map

| File | What it holds |
|---|---|
| `src/lib/critterKeeper/rules.js` | Care ranges, foods, conditions, guide links, the starter kit and the basic setup |
| `src/lib/critterKeeper/sim.js` | State, the hourly tick, care actions, tank checks, mood |
| `src/lib/critterKeeper/pixel.js` | Grid, polygon, outline and draw helpers shared by every sprite |
| `src/lib/critterKeeper/sprites/dragon.js` | The dragon: poses (idle, eat, sleep curled) and mood recolors (stress, shed, sick) |
| `src/lib/critterKeeper/sprites/items.js` | Enclosure items: log hide, rock cave, branch, hammock, dig box, treat ball, succulent, water dish, heat rock, basking platform, thermometer |
| `src/components/critterKeeper/TankScene.jsx` | The pixel tank: enclosure, substrate, fixtures and lights, the dragon, and the drag and drop decor slots |

## Done

- Real-time sim: fullness, hydration, trust, enrichment, tank cleanliness,
  hidden bone health, calcium, gut, respiratory risk, fat, stress, weight.
- The pet store starter kit (20 gallon, calcium sand, no UVB behind glass,
  heat rock, cold basking spot, 55% humidity) that the player has to fix.
- Conditions with staged symptoms and guide links: MBD, impaction,
  respiratory infection, burns, dehydration, stuck shed (toe loss), obesity,
  stress, parasites, D3 overdose, poisoning (fireflies, avocado, onion).
- The vet: treats, and explains that it comes back if the cause stays.
- Care streak, care log, UVB bulb aging with a warning.
- The pixel dragon in six states (idle with bob and blink, eating, asleep
  curled with the tail wrapped round and its tip outlined, stressed with a
  black beard, shedding, sick).

## In progress: the tank scene

- Pixel enclosure replaces the photo. It shows the real setup: tank size,
  substrate (tile, paper towel, calcium sand, walnut shell, bioactive), the
  UVB tube over mesh or behind glass, the basking bulb glowing by day, the
  heat rock, the water dish, a thermometer, the basking platform.
- **Basic setup:** one tap applies the guides' simple setup (4x2x2, tile,
  T5 HO over mesh, halogen, basking in range, cool side 80°F, humidity 35%).
- **Bioactive substrate:** needs a 4x2x2 or larger (4 to 6 inches of
  substrate). The cleanup crew takes a few weeks to establish (3 real days in
  game); once it has, it breaks down waste, though you still pick up any feces
  you can see. Still a loose substrate, so a little impaction risk.
- **Drag and drop decor:** a tray of enrichment items. Floor items (log
  hide, rock cave, dig box, succulent, treat ball) snap into floor spots: 1
  in a 20 gallon, 2 in a 40, 3 in a 4x2x2. The climbing branch and hammock
  are free: they land wherever they are released, can be moved again, and
  rotate in 15° steps (drawn from their shapes after rotating, so they stay
  crisp). Items add to enrichment; fewer than two hides adds stress. Moving
  things counts as rearranging, which the guide says to do occasionally,
  not constantly.

## Next

1. **Living enclosure** (the tank should not be set once and done):
   - Basking bulbs burn out at random every few weeks; the spot goes cold
     until replaced.
   - Room temperature drifts: cold snaps take nights below 65°F (needs a
     ceramic heat emitter), heat waves push the basking spot too hot (a
     thermostat prevents it).
   - Humidity moves with soaks, a water dish on the warm side, a dirty tank.
   - He outgrows the tank; dig box substrate gets dirty.
   - A quick daily "check the thermometer" habit, with the day's events in
     the log.
   - Bioactive crew health: too wet or too dry and the crew dies off, then
     odor and mold.
2. **More items:** ceramic heat emitter, thermostat, warm side hide, second
   branch, succulents and safe plants for bioactive, a light daylight LED.
3. **Brumation** for adults (the brumation guide's rules).
4. **The floating widget:** the dragon in a bubble on every page, mood at a
   glance, a red dot when something is wrong, tap for a compact care popup.
5. **Push reminders** ("Dex is hungry"), achievements, sharing.
6. **More species** later, each from its own guides.

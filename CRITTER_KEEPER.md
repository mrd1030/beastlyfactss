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
- **Perching:** with the branch in the tank he climbs it on his own: a 25%
  chance each daytime hour, for half an hour. He is drawn tilted along the
  branch, facing uphill whichever way it is rotated, pivoting on the point
  between his feet (`tilt` in `buildDragon`).

## First session and stakes (Fable review, steps 1 and 2)

- A "do this now" line under the tank (`nextStep`): the vet, then the tank,
  then hides, then the lowest need, each with a button that opens the right
  panel.
- Basic setup fixes one thing at a time (`nextFix`), each with the reason
  from the guides, in order: UVB, UVB over mesh, heat rock, basking temp,
  substrate, humidity, cool side, tank size, then hides.
- The decor tray hides behind a Decorate button. Rearranging is free in the
  first week (setting up).
- Health slides with hidden risk (bone, respiratory, gut, stress, calcium,
  thirst) before symptoms fire.
- The vet costs something: a visit resets the healthy-day streak, and the
  vet can see him again only after 12 hours, except for poisoning and burns.
  The visit count shows on his card.
- Lifelong marks (`MARKS`): toe loss from stuck shed, a crooked jaw once MBD
  gets severe. Each lowers his top health by 5 for good.

## Daily loop (built)

- **Today's care checklist:** Fed, Dusted, Weighed, Tray. The streak counts
  days with all four done (checked at midnight); a vet visit resets it.
  Adults count a dusting in the last three days, since they are dusted two
  or three times a week. Unfinished items feed the do-this-now line.
- **Weigh-in:** once a real day (a dragon week), in grams, with a little
  scale noise. Plotted on the growth guide's ranges (`GROWTH_BANDS`), with
  the guide's advice: weigh before the first meal, watch the trend, a
  juvenile stuck three to four weeks or an adult losing a tenth needs a vet.
- **Tong Time** (`TongTime.jsx`): from the Insects panel. 30 seconds of
  feeders crossing the floor; a bar shows the widest prey he can take (it
  grows with him). Right size fills him, too big is a strike (three ends
  it) and adds impaction risk, a firefly poisons him. Counts as fed, as
  dusted with the chosen dust, and as enrichment (tong-feeding).

## Death (built, Fable's plan)

- Health at 0 makes him **critical** (not a condition): a red warning in
  the do-this-now line with an hours countdown. A vet visit in the 72 hour
  window saves him (no cooldown, streak still resets).
- The window only starts once the player has **seen** the warning
  (`markCriticalSeen`, called by the page), so time away with the page
  closed can bring him to critical but never kill him.
- If the window runs out he dies. The ending card gives his age, days
  together, the cause (`CAUSE_OF_DEATH`, first match in order: poisoning,
  MBD, respiratory, impaction, burns, parasites, dehydration, else neglect)
  with its guide, and only lines found in the guides. "Look back" shows his
  best streak, vet visits, lifelong marks and growth chart.
- "Adopt a new dragon" keeps him in `critter-keeper-remembered` (last 5) and
  starts fresh, with "What he taught you": every condition he ever had
  (`had`) and its guide, on the adopt screen and the new dragon's first day.
- Settling in before handling is one real day (the guides' 7 to 14 days on
  the game clock). Rearranging while setting up is free for a real week.

## The floating widget (built)

- `useCritterGame` (`src/lib/critterKeeper/useCritterGame.js`) is the one
  shared dragon: the page, the bubble and the popup read and save it, and a
  change is broadcast to every copy and to other tabs.
- `CritterBubbleSlot` sits in AppLayout on every page. It carries only an
  existence check, run after idle; the bubble and the game code load only
  if a dragon exists and "Show Dex on every page" (on his card) is on.
  Nothing renders during prerender or hydration.
- `CritterBubble`: his sprite in the corner (above the phone tab bar), with
  his look, a red dot when he needs you (not for problems whose fix is
  leaving him be) and a pulse when critical. Hidden on his page, the
  composer and the installed Beastle app.
- `QuickCare`: the sheet the bubble opens. A live mini tank, the
  do-this-now line, today's checklist, quick feed (dubias with calcium, or
  a salad for an adult), water, soak, clean, weigh, Tong Time, the vet when
  needed, and a link to his page. Opening it brings him up to date, and
  counts as seeing a critical warning.

## Ideas from Fable (not built yet)

Mini games, each teaching a guide rule and feeding the sim: Tong Time (pick
prey no wider than his eyes, skip fireflies), Salad Bar (staple, occasional,
rare, never), Dust and Load (gut-load a day ahead, dust by age), Litter Tray
(read the stool and urates), Shed Check (find stuck rings, soak, never peel),
Lift Him Right (scoop from underneath, 10 to 15 minutes, a black beard ends
it).

Retention: a daily checklist (feed, dust, weigh, tray) whose streak counts
full days; weekly weigh-ins plotted on the growth table (a real day is a
dragon week); milestones as events (first shed, sexing at 4 to 6 months,
brumation at a year, gotcha day); one living enclosure event a week; decor
unlocked by streaks (3, 7, 14, 30 days); one push a day at most, never a
guilt ping; a Beastle win drops a hornworm treat in the tank.

## Future maybe: save to an account

Not now: the site is on Supabase's free plan, and its built-in email sender
only manages a few sign-in emails an hour. Revisit if the plan or email
setup changes. The plan, for then:

- A "Keep him safe" card on his page, signing in with the same emailed
  code as the care package library (`CarePackageLibrary.jsx`, Supabase
  `signInWithOtp`), so buyers are already signed in.
- One private table, one row per account (user id, game, remembered
  dragons, updated time), with RLS so each person reads and writes only
  their own row.
- Signing in on a new device pulls the save down; if that device already
  has a different dragon, ask which to keep. While signed in, changes save
  a few seconds after they happen. Newest save wins, which is safe because
  the sim runs on real time.
- The bubble stays local-only, so the Supabase client still loads only on
  his page.

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

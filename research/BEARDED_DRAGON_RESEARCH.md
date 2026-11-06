# Bearded Dragon Research

Notes for the bearded dragon guides. Started 2026-11-03 with the source cleanup of
`content/guides/bearded-dragon-feeding-guide.mdx`.

## 2026-11-03: feeding guide source cleanup

- Removed Hepper from the feeding guide's Sources block. Hepper is a pet product
  retailer's blog, which the no hobby sites rule (owner, 2026-11-01) keeps out of
  Sources. It was cited for "How Long Can a Bearded Dragon Go Without Eating" and
  "Bearded Dragon Brumation".
- Added two sources already verified for the safe foods guide, each backing a claim
  the feeding guide makes in its Foods to Avoid section: Merck Veterinary Manual,
  Avocado (Persea spp) Toxicosis in Animals (persin), and Knight and colleagues
  1999, Firefly Toxicosis in Lizards (fireflies). The guide now has 4 sources.
- Rewrote the inline source talk in the body and FAQs ("per veterinary sources",
  "Enthusiast sites cite", "a real tension in the sourcing", "common guidance",
  "Sources differ on the exact percentages") as plain statements, per RULES.md
  "The source goes in the block, not the sentence".
- Checked against the live pages on 2026-11-03: VCA "Brumation in Bearded
  Dragons" and VCA "Bearded Dragons: Feeding". The NC State page ("How to Feed
  Your Bearded Dragon") returned 503 to the cloud fetch, so its claims were not
  rechecked.

## 2026-11-03: second pass, vet sources for the unsourced claims

Pages opened on 2026-11-03 and what each states:

- NC State Veterinary Hospital, "How To Feed Your Bearded Dragon"
  (hospital.cvm.ncsu.edu/services/small-animals/nutrition/how-to-feed-your-bearded-dragon/).
  The direct fetch still returns 503 from a cloud runner (WebFetch and curl both);
  the text was read through a reader proxy (r.jina.ai). The owner checked the live
  page on the desktop the same day and pasted its text: every figure below
  matches. States: "<1 month old; Feed 2-3x daily", "1 - 4 months old: Feed 2x
  daily", "4 months old - adulthood: Feed once daily", "Adult dragons can be fed
  everyday or every other day", diet "50% dark leafy greens, 20% grated or chopped
  vegetables, 25% animal matter" and "a maximum of 5% fruits", "Fruits should be
  limited in the diet, as they are high in sugar." Also: seek an exotic vet if the
  dragon becomes lethargic or "stops eating for more than 1-2 days (adults only)".
  That last line is the origin of the guide's old "more than a day or two"
  threshold, which the owner overruled on 2026-11-03 (a 1 to 2 day refusal is
  normal); the guide now calls a vet at 1 to 2 weeks, the health guide's and the
  emergency card's line (third pass below).
- LafeberVet, "Care of the Australian Bearded Dragon" client education handout
  (lafeber.com/vet/wp-content/uploads/Bearded-Dragons.pdf, PDF author Christal
  Pollock, 2012). Same tiers as NC State: "<1 month old: Feed 2-3 times daily", "1-4
  months old: Feed twice daily", "4 months to adult: Feed once daily", "Adult: Feed
  every 1-2 days". "Fruit should make up no more than 5% of the diet". "Avoid
  lightning bugs, as they can be toxic." Not added to the Sources block only
  because it would be a seventh entry; it is the swap-in if NC State stays
  unreachable.
- VCA, "Bearded Dragons: Feeding" (live text): "Most young, bearded dragons should
  eat once or twice daily", "Adult dragons may only eat every 24 to 72 hours",
  "about 50% plant-based and 50% animal-based (insect) material", "Fruit should
  comprise only 10% to 20% of the plants fed to bearded dragons." With plants at
  about half the diet that is 5 to 10% of the whole diet, so the guide's old
  "5 to 10%" was not wrong; it now says aim for 5% or less and never past 10%,
  which matches VCA, NC State and LafeberVet together.
- Whyte Ridge Veterinary Hospital (Winnipeg), "Bearded Dragon Care Info"
  (whyteridgevet.ca/bearded-dragon-care-info.pml): "Brumation usually lasts around
  2 months", "Weigh them with a gram scale once a week- they should not lose a
  significant amount of weight while brumating", and the vet-visit list: "losing
  10% or more of their pre-brumation body weight, brumation lasting longer than 4
  months, and no return of appetite when they start moving around consistently."
  Added to Sources.
- Texas Avian & Exotic Hospital (Grapevine, TX), "Why Isn't My Bearded Dragon
  Eating? Common Causes of Appetite Loss" (2026-07-01): "Not every case of a
  bearded dragon not eating is cause for alarm" and, for a vet visit, when it
  "persists for more than a week (or sooner for younger dragons)". Brumation is
  listed as a normal reason for appetite change, no figures. Added to Sources.
  Its "more than a week" is the low end of the guide's 1 to 2 week threshold,
  and the guide still uses its "not every case is cause for alarm" point, so it
  stays in Sources (third pass below).
- Avian & Exotic Animal Hospital of Louisiana (gregrichdvm.com), "Why is My
  Bearded Dragon Not Eating?": "Bearded dragons need to eat daily for the first
  10-12 months of life", "After 10 months of age, many bearded dragons convert from
  eating a meal every day to eating every 48-72 hours", "As long as your adult
  bearded dragon remains active and eats every 2-3 days he/she should be ok." Not
  in Sources (cap); supports the day-or-two-is-normal line.
- South Pasadena Animal Hospital, "Signs Your Bearded Dragon Needs to See a Vet":
  "give it a few days to a week before panicking", vet visit at "two or more weeks
  without eating when it's not brumation season". Not in Sources (cap). Its two
  weeks is the high end of the guide's 1 to 2 week threshold.
- Checked and found nothing usable: VCA "Brumation in Bearded Dragons" (no
  figures), Merck "Providing a Home for a Reptile", "Management of Reptiles",
  "Disorders and Diseases of Reptiles" (no fasting or brumation figures), Chicago
  Exotics "Bearded Dragon Care" (hatchlings "two to three times a day" up to two
  months, no brumation), PetMD "What Do Bearded Dragons Eat?" (Sean Perry DVM:
  hatchlings "two to three times daily", fruit "no more than 5%"; left out as a
  Chewy property). Veterinary Partner (VIN) blocks cloud fetches. The site's own
  brumation guide cites VCA, NC State "Caring for Your Pet Bearded Dragon" (also
  503) and Merck, none of which state its brumation figures.

Guide changes on this pass: fruit line (see VCA above); brumation duration adds
"most often about 2" months; the brumation vet threshold moves from "past roughly
3.5 months or more than about 10%" to "longer than 4 months, 10% or more, or
appetite not returning once it's moving around consistently" to match Whyte
Ridge; the refusal threshold moves from "more than a day or two" to "a day or two
is normal, past about a week call a vet" in When to Worry and the FAQ (moved
again on the third pass below).

## 2026-11-03: third pass, the feeding guide matches the health guide, and the safe foods and brumation guides follow

Owner decision (2026-11-03): the feeding guide matches the health guide and the
emergency card, not the other way around. `bearded-dragon-health-issues-guide.mdx`
and the hub's emergency card (`src/lib/data/guides/lizards.js`) call an adult
refusing food for 1 to 2 weeks outside brumation a call-now sign.

- Feeding guide, When to Worry and the FAQ "How long can a bearded dragon go
  without eating?": a 1 to 2 day refusal is normal (owner rule); an adult
  refusing food for 1 to 2 weeks outside brumation, a shed or a gravid cycle is
  the point to call a vet. The sentence "A healthy adult can physically go 1 to
  2 weeks without food, but that is its reserve, not a waiting period" is gone,
  since the reserve and the threshold were now the same span. Babies and
  juveniles stay at 2 to 3 days. Texas Avian ("more than a week") and South
  Pasadena ("two or more weeks") both sit inside a 1 to 2 week threshold. Texas
  Avian stays in Sources: the guide still uses its "not every case ... is cause
  for alarm" point and its one-week figure is the low end of the threshold.
- Safe foods guide: the mealworm and superworm rows follow NC State the way the
  feeding guide did on the second pass (occasional from about a month old, never
  daily, in place of "adults only, never for juveniles"); "fatty" dropped from
  the mealworm row (owner, 2026-11-03), superworms keep "high in fat". The fruit
  line and its FAQ move from "about 5 to 10 percent of the plant portion" to
  "5 percent of the diet or less, never past 10 percent", matching the feeding
  guide (VCA, NC State, LafeberVet above).
- Brumation guide: the vet thresholds move from "past about three and a half
  months, not a hard four months", "more than 10 percent" and "appetite not back
  within 2 to 3 weeks of waking" to Whyte Ridge's "longer than 4 months", "10
  percent or more of starting weight" and "no return of appetite once the
  dragon is up and moving around consistently", in the FAQ, How Long Brumation
  Lasts, the vet list and the worked example. "Most often about 2" months added
  there too. The 2 to 3 week figure stays as the expectation for appetite coming
  back (FAQ and Waking Up), the way the feeding guide keeps it (owner, option A,
  2026-11-03). Whyte Ridge added to its Sources; VCA, NC State and Merck stay.
- The bearded dragon care package (edition 4.1) still carries the old worm rows,
  fruit line and brumation thresholds; listed in FIX_PACKAGES.md for the next
  rebuild.

## 2026-11-06: cost guide morph prices

Price bands, not sourced facts (RULES: sources are for facts, not prices).
Taken from the owner's screenshots of MorphMarket listings, filtered to US and
Canada and Central Bearded Dragons, mostly 2026 juveniles, asking price before
shipping. "Possible het" animals were not used to set a band. Auction prices
are current bids, not final.
- Normals: "Spunky Red Normal" $100; plain red dragons $150 and $350; red
  monster auctions at $65, $70, $75, $110 (two) and $165. Only one true normal,
  so the guide's "$40 to $100" stays as written (see the owner review list).
- One or two visible traits, $125 to $500: citrus and red leatherbacks $125
  (Red River Exotics, several); genetic super stripe leatherback $125;
  leatherback possible hets $130 and $150; hypo dunners $120, $200 (two),
  $350; citrus dunner $225; red citrus blue bar dunner $349; German blue bar
  dunner $150 (auction); citrus tiger leatherback hypo $300 (two) and $500;
  sunburst citrus hypo $400; citrus hypo g-stripe $500 (sale from $600); hypo
  leatherback $375; hypo 50% red monster $375 (two); hypo tiger $300; citrus
  translucent leatherback $250; high red translucent leatherback $300; red
  monster visual translucent $295; citrus $300; 50% red monster and red German
  lines $200 to $400; 3/4 red monster $300; 100% red monster $299 (sale) and
  $550.
- Zeros and witblits, $200 to $750: hypo zero $350 (sale), $450 (five), $500
  (two), $525, $550 (three), $575, $750; witblits $210, $235, $250, $275, $300
  (four), $350 (four), $450; hypo trans leatherback $500; red monster hypo
  translucent $550; trans leatherback red monster $700; 100% translucent red
  monster $700.
- Rare lines, $1,000 to $2,500: paradox $1,400, $1,500, $1,950, $2,500
  (paradox line animals $400 to $700, one red paradox blue bar $495); dark red
  monster dunners $1,250 and $1,450; German red hypo holdback $1,400;
  witblits trans "Mezmer" $2,100; proven hypo het trans female $1,200 (an
  adult breeder, not a juvenile).
- Shipping: $15 to $125 across listings, most $50 to $75, several free.
- Silkback: none listed in the owner's search; the owner notes they are not
  looked on favorably. The guide names silkback only in the UVB line, copied
  from the tank setup guide (UVI 3.0 or lower). That guide's sentence has a
  comma splice to fix when the sweep reaches it.

## 2026-11-06: cost guide "wild-caught" line

The cost guide said "An older, wild-caught animal is harder to tame, more
likely to carry intestinal parasites, and often stressed by captivity" (VCA
Owning Bearded Dragons says this of older wild-caught animals). Australia bans
the commercial export of live native reptiles (Australian Veterinary
Association policy page, EPBC Act 1999), so a US buyer does not meet a
wild-caught dragon. Owner (2026-11-06): the cost guide keeps the money angle
(an older adult with no health history is the costly one); the wild-caught
comparison stays on the site in the reptile quarantine guide; the health
guide's parasite section gained one sentence on adults with no health history.
The export ban is not on any care guide; if wanted, it belongs in the
encyclopedia entry, sourced to the Australian government's EPBC Act page.

## 2026-11-06: feeding schedule wording (sweep)

The feeding guide's schedule contradicted itself (juveniles "once daily, or
once to twice daily" then a salad "every day" and "every other day is the
minimum"; adults "once daily or every other day, roughly every 24 to 72 hours"
next to "greens daily"). Now: juveniles insects once or twice daily plus a
daily salad (every other day at the least); adults a salad daily and insects a
few times a week. The adult "every 24 to 72 hours" figure came out with the
contradiction; FAQ 1 and the hub's Feeding schedule row follow the guide.

## 2026-11-06: enrichment guide hobby sources kept

BeardedDragon.org (dig box guide) and Hepper (glass surfing) stay in the
enrichment guide's Sources under the under-3 exception (RULES, no hobby
sites): removing them leaves RSPCA alone. They are the only sources behind the
dig box figures (4 to 6 inches general, 6 to 12 for a gravid female, organic
topsoil and washed play sand near 50/50, slightly damp, never calcium sand)
and the glass surfing cause list (undersized enclosure, wrong temperatures,
reflections, boredom, hunger, a gravid female). A ReptiFiles page would
replace either one if it states the same figures (desktop check). Each hobby
source comes out the day a non-hobby source backs its claims and the count
stays at 3.

## 2026-11-06: no mice for bearded dragons (owner)

VCA "Bearded Dragons, Feeding" says "Pinkie mice or young 'fuzzy' mice may be
fed to larger bearded dragons, but sparingly" (NC State's page was down when
checked). Owner (2026-11-06): the site does not suggest mice for bearded
dragons; snakes and larger reptiles are fine. The feeding guide's pinky line
came out, and the safe foods guide now says pinky mice and other rodents stay
off the menu, with insects covering protein at every age. A house rule, not a
sourced claim.

## 2026-11-06: free-roam and handling time (owner)

The enrichment guide said free-roam sessions build "toward 15 to 30 minutes for
some adults"; the handling guide caps sessions near 10 to 15 minutes because a
dragon cools down. Owner (2026-11-06): session length is set by heat. The
owner's dragons roam for an hour or so in window sun under a heat lamp,
checked with a temp gun, and go back when they wander off to poop or sleep.
The enrichment guide now carries that as its firsthand beat (15 to 30 minutes
removed), with the note that window glass blocks UVB (tank setup guide's
sourced line) and that time out does no harm with a good setup to return to.
The handling guide says 10 to 15 minutes in an ordinary room, longer with a
heat lamp.

## 2026-11-06: FunFact sources

FunFacts carry their source as the `source` prop (plain text, not in the
Sources block).
- Tank setup: "full, direct desert sun" was contradicted. Baines et al. 2016
  (JZAR 4(1):42-63), Table 1: Zone 3 "Open or partial sun basker" zone range
  UVI 1.0 to 2.6, maximum 2.9 to 7.4; Zone 4 "Mid-day sun basker" 2.6 to 3.5,
  maximum 4.5 to 9.5. The species table lists Pogona vitticeps as zone 3 to 4.
  Rewritten to the 3 to 9.5 maximum range. Open: the UVB lighting guide lists
  bearded dragons under Zone 3 only.
- Health and enrichment: Australian Museum, Central Bearded Dragon. The beard
  is the lower jaw, puffed out "when alarmed", blackened by males to signal
  dominance; "an adept climber, and can usually be found on tree stumps, tree
  branches, boulders and fence posts", in woodland and shrubland across the
  semi-arid interior of eastern Australia, basking from the elevated position.

- Cost guide: the UVB FunFact said a tube can glow "for months after it's
  stopped producing usable UV output". Baines et al. 2016 (lamp tests): UV-B
  "decays with use, primarily due to solarisation of the glass envelope";
  seven Arcadia and Zoo Med tubes lost a mean 39.9% of UVI from new after 4000
  hours (about a year), and one other brand lost 64% after 1000 hours (about
  three months). Rewritten to those figures. "Even while it still lights up"
  rests on VCA "Bearded Dragons, Housing" ("replaced every six months... even
  if they still produce visible light"), read from a fetch summary, not
  verbatim; confirm on the desktop.
- Handling: the arm-wave FunFact said "Nobody is entirely sure why". The
  Australian Museum states it: males wave to show submission to a dominant
  male, which generally defuses the confrontation; females wave to show
  responsiveness to a male, with a slow head bob. Rewritten.

## Kept without a source (owner review)

- Fruit "once or twice a week at most" (safe foods guide, Fruit and the
  Never-Feed List): VCA, NC State and LafeberVet cap fruit by share of the diet,
  none gives a frequency. Kept as written (owner, 2026-11-03).
- Babies and juveniles "2 to 3 days at most" without food: Texas Avian says only
  "sooner for younger dragons" and the Louisiana hospital says they "need to eat
  daily". No vet page gives 2 to 3 days. Kept as written.
- Brumation "typically starting between 1 and 3 years old": no vet page gives an
  age range. Kept as written.
- Brumation "commonly lasting 1 to 3 months": Whyte Ridge says "usually around 2
  months", which sits inside the range but does not state it. Kept, with "most
  often about 2" added.
- "After brumation ends, appetite should return within 2 to 3 weeks" (feeding
  guide, and the brumation guide's FAQ and Waking Up section): Whyte Ridge says
  only "no return of appetite when they start moving around consistently", no
  time frame. Kept as the expectation; the vet trigger uses Whyte Ridge's wording
  (owner, 2026-11-03).
- Hatchlings "3 to 5 feedings a day" (removed on the first pass): NC State,
  LafeberVet, Chicago Exotics and PetMD all give 2 to 3 for hatchlings, so the
  guide's 2 to 3 is now sourced. [owner call stands: leave the 3 to 5 out, or
  restore it as a breeder figure]

- Cost guide, after Hepper and The Vet Desk came out of its Sources (hobby
  sites, 2026-11-06): "$40 to $100" for a standard morph, impaction surgery
  "$800 to $2,500" and metabolic bone disease treatment "$200 to $500 or more"
  had only those two behind them. Kept as written.
- Cost guide FAQ: dragons "reach adult size within a year or so". Owner
  (2026-11-06): no reliable source found for adult sizing. Kept as written.
  The site's growth and weight guide puts adult at "18 months and up".
- Cost guide: "$40 to $100 at most pet stores, sometimes less from a
  breeder". Pet store prices not checked. The owner's MorphMarket screenshots
  (2026-11-06) show one breeder normal at $100 and red monster auctions from
  $65, so "sometimes less from a breeder" is not borne out. Owner
  (2026-11-06): removed; the morph prices are MorphMarket breeder listings.

- Handling guide, Trimming the Claws, after The Vet Desk came out of its
  Sources (hobby site, 2026-11-06): a dragon on tile, slate or a rough basking
  rock files its own claws and may need a trim only a few times a year or
  never; the quick ends where the claw's color changes; cut just past the sharp
  point, short of that change; small animal or baby nail clippers, since
  full-size human clippers can split the claw and dog or cat clippers are too
  big to control; styptic powder on a cut quick. Nothing else in Sources states any of it.
  Kept as written, except the vet call: owner (2026-11-06) made it
  conditional (won't stop, bleeds again, swelling, favoring the foot).
- Health guide, pre-brumation vet visit (added 2026-11-06 so the hub's Vet row
  matches its source): cited to VCA "Brumation in Bearded Dragons", added to
  the guide's VCA entry. Needs a desktop check that the page states a
  pre-brumation exam.

## Possible contradictions found (not changed)

- Mealworms and superworms: the guide says they are "an occasional food for
  adults only, never daily and never for juveniles". NC State lists an
  "occasional super/mealworm" from 1 to 4 months and super/mealworms in the
  4 months to adulthood diet. Owner (2026-11-03): follow NC State, and note
  superworms are high in fat. The feeding guide now says occasional from about
  a month old, never daily, and the safe foods guide's rows match it (third
  pass).

- NC State says an adult that "stops eating for more than 1-2 days" should see an
  exotic vet; the owner's rule (2026-11-03) is that a 1 to 2 day refusal is
  normal, and the guide now calls a vet at 1 to 2 weeks, matching the health
  guide and the emergency card. NC State stays in Sources for the feeding tiers
  and the fruit cap.
- Whyte Ridge says "Fruits should be avoided" outright; the guide keeps fruit as
  a minor treat at 5% or less, which is what VCA, NC State and LafeberVet allow.

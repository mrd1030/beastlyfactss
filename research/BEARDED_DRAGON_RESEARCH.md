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
Canada and Central Bearded Dragons, 2026 juveniles, asking price before
shipping:
- One visible trait (leatherback, translucent, citrus or red lines): $125
  (Red River Exotics, several), $125 (genetic super stripe leatherback), $130
  and $150 (leatherback, possible hets), $250 (citrus translucent
  leatherback), $295 (red monster visual translucent), $300 (citrus), $200 to
  $400 (50% red monster and red German lines). Band: about $125 to $400 (the red
  lines set the top).
- Zeros and combinations: hypo zero $350 (sale), $450 (four listings), $500,
  $525, $550 (two), $575, $750; hypo trans leatherback $500; red monster
  hypo translucent $550; red monster leatherback trans $375; trans leatherback
  red monster $700; red monster trans het $650. Band: about $350 to $750.
- Shipping: $30 to $110, most $50 to $75.
- Not in the screenshots: visual witblits and silkback, so the guide names
  neither with a price. "Possible het" animals were not used for the bands.
- The UVB line for hypo, translucent and silkback morphs copies the tank setup
  guide (UVI 3.0 or lower). That guide's sentence has a comma splice to fix
  when the sweep reaches it.

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

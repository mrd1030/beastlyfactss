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
  normal); the guide now follows the Texas Avian threshold below.
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
- Avian & Exotic Animal Hospital of Louisiana (gregrichdvm.com), "Why is My
  Bearded Dragon Not Eating?": "Bearded dragons need to eat daily for the first
  10-12 months of life", "After 10 months of age, many bearded dragons convert from
  eating a meal every day to eating every 48-72 hours", "As long as your adult
  bearded dragon remains active and eats every 2-3 days he/she should be ok." Not
  in Sources (cap); supports the day-or-two-is-normal line.
- South Pasadena Animal Hospital, "Signs Your Bearded Dragon Needs to See a Vet":
  "give it a few days to a week before panicking", vet visit at "two or more weeks
  without eating when it's not brumation season". Not in Sources (cap). The guide
  uses the one-week end of the week-to-two-weeks spread, since the two-week end is
  the physical reserve, not a waiting period.
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
is normal, past about a week call a vet" in When to Worry and the FAQ. Note for
the owner: `bearded-dragon-brumation-guide.mdx` still says three and a half
months, "not a hard four months"; it was not touched on this pass.

## Kept without a source (owner review)

- "A healthy adult can physically go 1 to 2 weeks without food" (FAQ and When to
  Worry): no vet page states a fasting reserve. South Pasadena Animal Hospital's
  "two or more weeks" vet threshold is the closest. Kept as written.
- Babies and juveniles "2 to 3 days at most" without food: Texas Avian says only
  "sooner for younger dragons" and the Louisiana hospital says they "need to eat
  daily". No vet page gives 2 to 3 days. Kept as written.
- Brumation "typically starting between 1 and 3 years old": no vet page gives an
  age range. Kept as written.
- Brumation "commonly lasting 1 to 3 months": Whyte Ridge says "usually around 2
  months", which sits inside the range but does not state it. Kept, with "most
  often about 2" added.
- "After brumation ends, appetite should return within 2 to 3 weeks": Whyte Ridge
  says only "no return of appetite when they start moving around consistently",
  no time frame. Kept as written.
- Hatchlings "3 to 5 feedings a day" (removed on the first pass): NC State,
  LafeberVet, Chicago Exotics and PetMD all give 2 to 3 for hatchlings, so the
  guide's 2 to 3 is now sourced. [owner call stands: leave the 3 to 5 out, or
  restore it as a breeder figure]

## Possible contradictions found (not changed)

- Mealworms and superworms: the guide says they are "an occasional food for
  adults only, never daily and never for juveniles". NC State lists an
  "occasional super/mealworm" from 1 to 4 months and super/mealworms in the
  4 months to adulthood diet. [owner call]

- NC State says an adult that "stops eating for more than 1-2 days" should see an
  exotic vet; the owner's rule (2026-11-03) is that a 1 to 2 day refusal is
  normal, and the guide now uses Texas Avian's "more than a week". NC State stays
  in Sources for the feeding tiers and the fruit cap.
- Whyte Ridge says "Fruits should be avoided" outright; the guide keeps fruit as
  a minor treat at 5% or less, which is what VCA, NC State and LafeberVet allow.

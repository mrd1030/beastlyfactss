# Ask Beastly reader test

23 real questions sent to the test site (beastlyfactss-sharetest.pages.dev), 2026-11-01: 5 health, 5 feeding, 5 setup, 3 animal facts, 3 legal, 2 the site does not cover. Run 1 found five problems; they were fixed and run 2 is the result below. Every answer was then checked against the exact sections the model was given (see Source check).

## Results (run 2)

| Kind | Expected | Got |
|---|---|---|
| health (5) | answer + vet line | answered 5 |
| feeding (5) | answer | answered 4, no_match 1 |
| setup (5) | answer | answered 5 |
| facts (3) | answer | answered 3 |
| legal (3) | law links, no model | legal 3 |
| not covered (2) | no match, no model | no_match 2 |

Answer time: 1.0 to 1.8 seconds with the model, under 0.15 seconds without (legal, no match).

## Run 1 problems and the fixes

1. Six of 17 answers said "the sources say" or "Source 2 notes". Fix: one rule added to the system prompt (speak to the reader directly). Run 2: three answers still do (rabbit, axolotl).
2. The emergency card showed on adult feeding, crested gecko heat lamp, substrate and axolotl neoteny answers, because any matched section mentioning breathing or swelling turned it on. Fix: health words in the question, or a health guide section as the best match. Run 2: only the three real health emergencies show it.
3. "Can I have a hedgehog in California" reached the model and got a ban summary. Fix: a state name with own / have / keep / buy / get is a legal question. Run 2: law links only.
4. "My rabbit hasn't pooped today and won't eat" found nothing. Fix: poop / droppings / stool synonyms. Run 2: answered, with the vet line.
5. "Can guinea pigs eat grapes" returns no match in both runs. No guinea pig guide mentions grapes: a content gap, not a bug. It goes on the READER_GAPS.md list.

## Every answer (run 2)

### my bearded dragon has a swollen jaw, what does that mean

*health*, result **answered**, emergency card on

> A swollen jaw can be a sign of Metabolic Bone Disease or mouth rot, both of which need prompt attention from a vet. Mouth rot may also cause puffiness on one side of the jaw along with swollen gums or cheesy material in the mouth. Please see a vet promptly rather than waiting to see if it resolves.

- [Common Bearded Dragon Health Issues and What Causes Them](/blog/bearded-dragon-health-issues-guide/#when-to-see-a-vet-no-question-asked)

### why is my ball python wheezing

*health*, result **answered**, emergency card on

> Wheezing in a ball python is urgent and can point to a respiratory infection, which is often caused by temperatures that run too low, incorrect humidity, a dirty enclosure, or ongoing stress. Warm the enclosure, check humidity, isolate the snake if you have others, and get to a vet as soon as possible, since this illness needs vet-prescribed antibiotics and can become fatal if untreated.

- [Common Ball Python Health Issues and What Causes Them](/blog/ball-python-health-issues-guide/#respiratory-infection)
- [Brumation in Pet Snakes: How to Safely Cool Down Ball Pythons and Corn Snakes](/blog/snake-brumation-guide/#warning-signs-to-abort)
- [Ball Python Feeding: Everything You Need to Know](/blog/ball-python-feeding-guide/#when-to-worry)

### my leopard gecko has stuck shed on its toes

*health*, result **answered**

> Soak your gecko in shallow lukewarm water first to loosen the stuck shed, and never peel off dry, stuck shed. A constricting band of shed on the toes can cut off circulation, so check the toes after every shed and get it cleared. A dedicated humid hide can help prevent this from happening again.

- [Common Leopard Gecko Health Issues and What to Watch For](/blog/leopard-gecko-health-issues-guide/#shedding-problems-dysecdysis)
- [The Complete Leopard Gecko Temperature Guide](/blog/leopard-gecko-temperature-guide/#signs-the-temperatures-are-wrong)

### my rabbit hasn't pooped today and won't eat

*health*, result **answered**, emergency card on

> A rabbit that has not passed droppings and is refusing food needs a vet today, not later. Sources say 8 to 12 hours without food or droppings is already abnormal and past 12 hours is an emergency, so call your vet now. Also watch for hunched posture, tooth grinding, a bloated belly, or lethargy.

- [Rabbit Feeding: Schedule, Diet, and Why They Stop Eating](/blog/rabbit-feeding-guide/#when-to-worry)

### my axolotl's gills are shrinking

*health*, result **answered**

> Shrinking gills can be a sign of stress or poor water conditions, and the sources don't say what causes this specifically. The sources do say that curled or forward-facing gill tips, appetite loss, floating, and pale skin patches can point to heat stress, and that temperatures above roughly 72°F can suppress the immune system.

- [Common Axolotl Health Issues (Most Trace Back to Temperature)](/blog/axolotl-health-issues-guide/#heat-stress)
- [Forever Young, Forever Underwater](/facts/forever-young-forever-underwater/)
- [Axolotl Beastfile](/beastlypedia/axolotl/)

### how often should I feed an adult bearded dragon

*feeding*, result **answered**

> Adult bearded dragons are generally fed once daily or every other day, once their growth has stopped. Vet sources give a broader range than enthusiast sites, so treat those vet ranges as the more reliable guide. Most of the adult diet should be plant matter, with insects offered only a few times a week.

- [Bearded Dragon Feeding: Schedule, Diet, and Why They Stop Eating](/blog/bearded-dragon-feeding-guide/)

### can guinea pigs eat grapes

*feeding*, result **no_match**

### what do hermit crabs eat

*feeding*, result **answered**

> Hermit crabs are omnivorous scavengers that eat commercial hermit crab diets, fruits, vegetables, nuts and brine shrimp. Vegetables are offered most days, fruit a few times a week, and they are fed once a day in the evening.

- [Hermit Crab Feeding: Scatter It, Vary It, and Watch the Label](/blog/hermit-crab-feeding-guide/)

### how much should I feed my betta fish

*feeding*, result **answered**

> Portion size matters more than how often you feed. A common guide is 2 to 4 pellets per meal, or whatever your betta clears in about 1 to 2 minutes, with no food left on the bottom. Many keepers feed once a day and take one fasting day a week.

- [Betta Fish Feeding: Schedule, Diet, and Why They Stop Eating](/blog/betta-fish-feeding-guide/#feeding-schedule)

### do corn snakes eat frozen mice

*feeding*, result **answered**

> Yes, frozen-thawed whole rodents are the staple diet for corn snakes, and they are strongly preferred over live prey. Thaw them in the refrigerator overnight, then warm them in warm water to roughly 98 to 102°F, never in the microwave.

- [Corn Snake Feeding: Schedule, Diet, and Why They Stop Eating](/blog/corn-snake-feeding-guide/#what-corn-snakes-eat)
- [Corn Snake vs. Hognose Snake: Which Beginner-Friendly Snake Fits You](/blog/corn-snake-vs-hognose-snake-guide/#feeding-reliability-favors-the-corn-snake)

### what size tank does a leopard gecko need

*setup*, result **answered**

> A leopard gecko needs an enclosure of at least 36x18x18 inches as an adult, which is bigger than older care sheets often recommend. Hatchlings can start in a 10-gallon tank while they're small. Since they live on the ground, floor space matters more than height.

- [Leopard Gecko Enclosure Setup: What Your Gecko Actually Needs](/blog/leopard-gecko-tank-setup-guide/#enclosure-size)
- [How Much Does a Leopard Gecko Really Cost?](/blog/leopard-gecko-cost-guide/#upfront-setup-465-to-975-with-the-first-vet-exam)

### what temperature should a ball python enclosure be

*setup*, result **answered**

> The warm side or basking spot should be 88 to 92°F, and the air should never go above 95°F anywhere. The cool side should be 75 to 80°F, and at night the enclosure can drop to 72 to 75°F. Every heat source needs its own thermostat to keep these temperatures safe.

- [Ball Python Enclosure Setup: Humidity Is the Detail That Makes or Breaks It](/blog/ball-python-tank-setup-guide/#temperature-gradient)
- [How Much Does a Ball Python Really Cost?](/blog/ball-python-cost-guide/#upfront-setup-560-to-1395-with-the-first-vet-exam)
- [Ball Python Enrichment: What 35 Snakes in a Study Actually Showed](/blog/ball-python-enrichment-guide/)

### does a crested gecko need a heat lamp

*setup*, result **answered**

> Not always. Crested geckos do best between about 72 and 78°F, and many homes already sit in that range, so a heat source is only needed when the room runs cooler than about 72°F. Whatever heat you use should run on a thermostat, and you should keep the enclosure under 85°F.

- [Crested Gecko Enclosure Setup: Vertical Space, Humidity, and a Hard Temperature Ceiling](/blog/crested-gecko-tank-setup-guide/#temperature-the-ceiling-is-non-negotiable)

### how often should I clean a hamster cage

*setup*, result **answered**

> Spot clean daily by removing soiled bedding, uneaten fresh food, and rinsing the water bottle or bowl. For a small cage, a full clean with a small-animal habitat cleaner may be needed weekly, while a large enclosure with deep bedding may only need it every few weeks.

- [Hamster Enclosure Setup: Bigger and Deeper Than the Starter Kit Suggests](/blog/hamster-tank-setup-guide/#cleaning-spot-daily-deep-less-often)
- [How Much Does a Hamster Really Cost?](/blog/hamster-cost-guide/)

### what substrate is safe for a bearded dragon

*setup*, result **answered**

> Paper towel, newspaper, or tile are the safest substrates, especially for someone new to keeping dragons. Loose sand (including calcium sand), wood chips, and gravel carry a real impaction risk if ingested.

- [Bearded Dragon Enclosure Setup: Temperature, UVB, and Everything Else](/blog/bearded-dragon-tank-setup-guide/#substrate)
- [Bearded Dragon Enrichment: Climbing, Digging, and Safe Free-Roam](/blog/bearded-dragon-enrichment-guide/#dig-boxes)

### how many hearts does an octopus have

*facts*, result **answered**

> An octopus has three hearts. Two of them push blood through the gills to pick up oxygen, and the third pumps the oxygenated blood to the rest of the body.

- [The Octopus Has Three Hearts (And Uses All of Them)](/blog/the-octopus-has-three-hearts-and-uses-all-of-them/#three-hearts-and-blue-blood-the-science)
- [Three-Heart Crew](/facts/three-heart-crew/)
- [Three Hearts of Love](/facts/three-hearts-of-love/)

### why do axolotls never grow up

*facts*, result **answered**

> Axolotls never fully grow up because they have a trait called neoteny, which means they keep their larval features for life. Most amphibians lose their gills and move onto land, but axolotls keep their feathery external gills and tail fin and stay in the water. They can be triggered to metamorphose with iodine, but this rarely happens naturally.

- [10 Surprising Axolotl Facts](/blog/10-surprising-axolotl-facts/)
- [The Incredible Axolotl - Nature’s Smiling Salamander](/blog/the-incredible-axolotl-nature-s-smiling-salamander/#how-an-axolotl-regrows-a-limb)
- [Forever Young, Forever Underwater](/facts/forever-young-forever-underwater/)

### how long do tortoises live

*facts*, result **answered**

> Sulcata tortoises typically live 50 to 70 years, and 70 or more is achievable with good care. Russian tortoises commonly live 40 to 50 years, and red-footed tortoises are commonly cited at 50 to 70 years or more.

- [Sulcata Tortoise vs. Russian Tortoise: Which Tortoise Actually Fits Your Space](/blog/sulcata-tortoise-vs-russian-tortoise-guide/#the-lifespan-commitment-is-generational)
- [How to Handle a Red-Footed Tortoise](/blog/red-footed-tortoise-handling-guide/#growth-and-the-decades-long-housing-commitment)
- [How Much Does a Sulcata Tortoise Really Cost?](/blog/sulcata-tortoise-cost-guide/#lifespan-the-number-that-should-drive-every-other-decision)

### is it legal to own a fennec fox in texas

*legal*, result **legal**

- [Texas exotic pet laws](/exotic-pet-laws/state/texas/)
- [Fennec fox laws in every state](/exotic-pet-laws/fennec-fox/)
- [Is a fennec fox legal? The full guide](/blog/fennec-fox-legal-guide/)

### can I have a hedgehog in california

*legal*, result **legal**

- [California exotic pet laws](/exotic-pet-laws/state/california/)
- [Hedgehog laws in every state](/exotic-pet-laws/hedgehog/)
- [Is a hedgehog legal? The full guide](/blog/hedgehog-legal-guide/)

### do I need a permit for a sugar glider in pennsylvania

*legal*, result **legal**

- [Pennsylvania exotic pet laws](/exotic-pet-laws/state/pennsylvania/)
- [Sugar glider laws in every state](/exotic-pet-laws/sugar-glider/)
- [Is a sugar glider legal? The full guide](/blog/sugar-glider-legal-guide/)

### how do I train my horse to jump fences

*not covered*, result **no_match**

### what is the best saddle for a camel

*not covered*, result **no_match**

## Source check

A Fable agent checked all 17 model answers against the exact sections each one was given, claim by claim, for anything added, made stronger, or wrong, and for answers that mention "the sources". I checked its three flags against the sources myself: all three hold.

**Result: 14 pass, 3 flagged.** No hedge was made stronger, no link was wrong, no dashes.

What it means:

- **Added (1): the axolotl gills answer.** "Shrinking gills can be a sign of stress or poor water conditions" is in none of its sources. The site does not cover shrinking gills; the right reply was NO_ANSWER. This is the failure that matters: the model filled a gap instead of saying so.
- **Wrong, minor (1): the bearded dragon swollen jaw answer.** It ties a swollen jaw to MBD; the MBD section lists a misshapen jaw and swollen limbs. The vet list's "swelling in the jaw or limbs" and the mouth rot section do support the rest.
- **Leak (2): rabbit and axolotl.** "Sources say" and "the sources don't say" survive the new prompt rule.

## Ask Beastly source check: 17 answers

Judged only against the `sources` text in check-input.json. No outside knowledge, no web.

### Summary

1. my bearded dragon has a swollen jaw, what does that mean: FLAG (WRONG, minor)
2. why is my ball python wheezing: PASS
3. my leopard gecko has stuck shed on its toes: PASS
4. my rabbit hasn't pooped today and won't eat: FLAG (LEAK)
5. my axolotl's gills are shrinking: FLAG (ADDED, LEAK)
6. how often should I feed an adult bearded dragon: PASS (note: "Vet sources" is quoted from the source text, not a leak)
7. what do hermit crabs eat: PASS
8. how much should I feed my betta fish: PASS
9. do corn snakes eat frozen mice: PASS
10. what size tank does a leopard gecko need: PASS
11. what temperature should a ball python enclosure be: PASS
12. does a crested gecko need a heat lamp: PASS
13. how often should I clean a hamster cage: PASS
14. what substrate is safe for a bearded dragon: PASS
15. how many hearts does an octopus have: PASS
16. why do axolotls never grow up: PASS
17. how long do tortoises live: PASS

Counts: 14 pass, 3 flagged. By type: ADDED 1 (n5), STRONGER 0, WRONG 1 (n1, minor), LEAK 2 (n4, n5), LINK 0.

Dashes: no em or en dashes in any of the 17 answers.

### Flags

#### 1. my bearded dragon has a swollen jaw, what does that mean

- WRONG (minor): "A swollen jaw can be a sign of Metabolic Bone Disease". The MBD section attaches swelling to the limbs and a different word to the jaw: "soft, bowed, or swollen limbs, a misshapen jaw or spine, a receded lower jaw" (/blog/bearded-dragon-health-issues-guide/#metabolic-bone-disease-mbd). The vet list does say "Swelling in the jaw or limbs" (/blog/bearded-dragon-health-issues-guide/#when-to-see-a-vet-no-question-asked) but without naming a cause, and the mouth rot section says MBD "can all trigger it" (/blog/bearded-dragon-health-issues-guide/#mouth-rot-infectious-stomatitis), so the linkage is indirect rather than invented. Why it matters: low severity, the vet advice is the same either way, but the answer presents jaw swelling as a listed MBD sign when the source lists jaw deformity instead.
- Everything else is supported: "puffiness on one side of the jaw along with swollen gums or cheesy material in the mouth" matches "swollen or bleeding gums, yellow-white cheesy material in the mouth ... a jaw that looks puffy on one side"; "see a vet promptly rather than waiting" matches "see a vet promptly" and "it's not one to put off". First link (when-to-see-a-vet, which contains "Swelling in the jaw") is a reasonable choice.

#### 4. my rabbit hasn't pooped today and won't eat

- LEAK: "Sources say 8 to 12 hours without food or droppings is already abnormal and past 12 hours is an emergency". The phrase "Sources say" is the model's own; the source text reads "The alarm point is 8 to 12 hours without food or droppings. Past eight hours it is abnormal and a vet should see the rabbit, and at twelve it is an emergency" (/blog/rabbit-feeding-guide/#when-to-worry). The word "sources" does appear in the same page's FAQ ("sources put it at 80 to 85%") but about hay share, not this claim, so this is a genuine leak. Why it matters: it tells the reader there is a document behind the answer rather than speaking as the site.
- Supported, not flagged: "needs a vet today, not later" matches "same-day vet contact is the safe default"; the warning signs (hunched posture, tooth grinding, bloated belly, lethargy) match "a hunched or tense posture, audible tooth grinding, a bloated or tense abdomen, lethargy". The wording "8 to 12 hours ... is already abnormal" slightly flattens "past eight hours it is abnormal", same direction and same urgency, so not counted as STRONGER.

#### 5. my axolotl's gills are shrinking

- ADDED: "Shrinking gills can be a sign of stress or poor water conditions". Not in any source. The heat stress section lists "curled or forward-facing gill tips, appetite loss, floating, and pale patches on the skin" (/blog/axolotl-health-issues-guide/#heat-stress) and mentions "too much current"; nothing names shrinking or receding gills, and nothing names "poor water conditions" as a cause of gill change. Why it matters: the reader is told a cause the site never gives, right after being told the site does not cover it.
- LEAK: "the sources don't say what causes this specifically" and "The sources do say that curled or forward-facing gill tips...". Both phrases are the model's own; no source text uses "sources" here. Why it matters: it exposes the retrieval mechanism and reads as a disclaimer instead of an answer.
- Supported, not flagged: the heat stress signs and "temperatures above roughly 72°F can suppress the immune system" match "Extended exposure above roughly 72°F starts to suppress the immune system". First link (heat-stress) is the right page among those given.

### Notes on answers that pass

- 6 (adult bearded dragon feeding): "Vet sources give a broader range than enthusiast sites, so treat those vet ranges as the more reliable guide" is a close paraphrase of the source's own FAQ text: "Vet sources give broader ranges than enthusiast sites' specific numbers, treat the vet ranges as the more reliable floor and ceiling" (/blog/bearded-dragon-feeding-guide/). "Vet sources" is quoted from the site, so it is not a leak. It is awkward for a reader because the answer does not state what those ranges are, but it is faithful.
- 8 (betta): "Many keepers feed once a day" paraphrases "Once a day is a common baseline" (/blog/betta-fish-feeding-guide/#feeding-schedule); the fasting day is a recommendation in the source ("build in one fasting day a week") rather than a report of what keepers do. Meaning and hedge are kept, so not flagged.
- 13 (hamster): "may be needed weekly" is softer than the source's flat "Weekly for a small cage"; a weakened claim, not a strengthened one, so not flagged.
- 16 (axolotl neoteny): the iodine claim comes from "Adding a small amount of iodine to their water can cause an axolotl to metamorphose ... It rarely happens naturally" (/blog/10-surprising-axolotl-facts/). The Beastfile says "Injected with the right hormone ... which does not happen naturally" (/beastlypedia/axolotl/); the two sources differ slightly from each other, but the answer follows one of them accurately.
- 17 (tortoise lifespan): every figure matches its source (sulcata 50 to 70 and 70 or more; Russian 40 to 50; red-footed "commonly cited at 50 to 70 years or more"). The answer covers only the three species the sources cover, which is correct behavior for a generic question.

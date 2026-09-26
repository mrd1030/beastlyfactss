# Guide fun fact overlaps

Found 2026-09-26 in an audit of which facts show on the encyclopedia and guide
pages. Each guide hub's `funFact` (src/lib/data/guides/<group>.js) shows in the
guide body and in the encyclopedia sidebar, right next to the Fun Facts cards
from facts.js. On the pages below, the hub fun fact repeats a fact card on the
same page. Fix by replacing the hub `funFact` with a different, researched
fact (real sources, per CLAUDE.md). Never renumber or delete the facts.js entry
to solve it.

This file holds open work only. Delete a line when its fix ships, and delete
the file when it is empty.

- [ ] **Crested Gecko** (geckos.js): hub fun fact is near word for word fact 42, "Rediscovered in 1994".
- [ ] **Bearded Dragon** (lizards.js): hub fun fact and fact 40, "The Wave of Peace", are both the submissive arm wave.
- [ ] **Leopard Gecko** (geckos.js): hub fun fact's tail fat line repeats fact 41, "Tail Fat Reserves".
- [ ] **Ball Python** (snakes.js): hub fun fact's months without eating repeats fact 39, "Months Without Eating".
- [ ] **Axolotl** (amphibians.js): hub fun fact covers neoteny and regeneration, the same ground as fact 14, "Axolotl Superpowers", and fact 168, "Forever Young, Forever Underwater".
- [ ] **Siamese** (cats.js, cat-siamese): hub fun fact's temperature-sensitive color enzyme repeats fact 321, "Born Blank, Colored by Cold". Shows on both the guide and the encyclopedia page.
- [ ] **Box Turtle** (turtles.js): hub fun fact repeats fact 165, "Sealed Shut Like a Box". It also says box turtles are "the only turtles" that can seal themselves in, which looks wrong (mud turtles close up too). Verify and correct.

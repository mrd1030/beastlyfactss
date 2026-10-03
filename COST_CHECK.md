# Cost guide, hub and package check

Started 2026-10-03. Any change to a cost guide's numbers must reach three places:
the cost guide itself, the species hub (Budget row, cost route line, buy list) in
`src/lib/data/guides/<group>.js`, and the care package (budget page and profile
cost lines, then a re-render). **Every package marked "needs fix" must be fixed
before the next mass package upload.**

## What one check covers

1. The cost table rows add up to every total the guide states (H2, seoTitle,
   seoDescription, description, FAQ, closing lines).
2. The hub Budget row and the cost route line match those totals.
3. Every hub buy list item is either priced in the cost table or knowingly left
   out (food sits in the monthly line), and links to a product that fits.
4. Each linked product fits its row: right size for the species, and a catalog
   price that sits inside the row's range.
5. The line under the last cost table names the retailers:
   "Prices last checked <Month Year> at <retailers>." It stays (RULES.md).
   Rows priced from catalog fields say "at PetSmart and other retailers".
6. Package only: the budget page and profile cost lines match the site.

Prices come only from retailer checks or catalog price fields, never Amazon and
never invented. Where no price exists, say so and ask the owner.

## Care packages (20): site and package

| Package | Cost guide + hub | Package | Notes |
|---|---|---|---|
| Goldfish | ✅ 2026-10-03 | ❌ needs fix | Filter row now $50 to $85 (200+ gallons an hour), setup $145 to $325 (was $105 to $270). Book budget page and profile still say $105 to $270. Branch claude/goldfish-filter. |
| Betta fish | ✅ 2026-10-03 | ✅ no change | All totals, hub lines and links matched. |
| Budgie | ◐ hub only | ❌ needs fix | Buy list fixed and linked (branch claude/budgie-rebuild). Cost table still has no rows for gram scale ($30 to $40), cuttlebone ($8 to $12), UV light (no catalog price). Waiting on the owner. |
| Lovebird | ◐ hub only | ❌ needs fix | Buy list fixed and linked (branch claude/lovebird-rebuild). Cost table still has no rows for dishes ($10 to $18), bath ($12 to $16), gram scale ($30 to $40), UV light (no catalog price). Waiting on the owner. |
| Cockatiel | ☐ | ☐ | Rebuild paused. Its agent re-priced perch, dish and toy rows from catalog fields: setup $295 to $601 (was $320 to $860). |
| Tarantula | ☐ | ☐ | Rebuild paused. Setup now $50 to $170, or $75 to $270 with the spider (was $70 to $300). |
| Rabbit | ☐ | ☐ | Cost guide re-totaled on claude/rabbit-rebuild (setup $125 to $197, monthly $62 to $135). |
| Guinea pig | ☐ | ☐ | Cost guide re-totaled on claude/guinea-pig-rebuild (setup $158 to $204). |
| Hamster | ☐ | ☐ | On claude/hamster-rebuild. |
| Cockatoo | ☐ | ☐ | |
| Bearded dragon | ☐ | ☐ | |
| Leopard gecko | ☐ | ☐ | |
| Crested gecko | ☐ | ☐ | |
| Gargoyle gecko | ☐ | ☐ | |
| African fat-tailed gecko | ☐ | ☐ | |
| Ball python | ☐ | ☐ | |
| Hognose snake | ☐ | ☐ | |
| Russian tortoise | ☐ | ☐ | |
| Axolotl | ☐ | ☐ | |
| White's tree frog | ☐ | ☐ | |

## Cost guides without a package (64): site only

Same checks 1 to 5. A change here touches the guide and the hub only.

| Species | Checked |
|---|---|
| Ackie monitor | ☐ |
| African grey parrot | ☐ |
| Amano shrimp | ☐ |
| Angelfish | ☐ |
| Argentine tegu | ☐ |
| Blue-tongue skink | ☐ |
| Boa constrictor | ☐ |
| Box turtle | ☐ |
| Bristlenose pleco | ☐ |
| California kingsnake | ☐ |
| Canary | ☐ |
| Cardinal tetra | ☐ |
| Cherry shrimp | ☐ |
| Chinchilla | ☐ |
| Conure | ☐ |
| Corn snake | ☐ |
| Corydoras catfish | ☐ |
| Degu | ☐ |
| Discus | ☐ |
| Emperor scorpion | ☐ |
| Ferret | ☐ |
| Fire-bellied toad | ☐ |
| Fire skink | ☐ |
| Flying squirrel | ☐ |
| Garter snake | ☐ |
| Gerbil | ☐ |
| Ghost shrimp | ☐ |
| Giant millipede | ☐ |
| Green anole | ☐ |
| Green iguana | ☐ |
| Guppy | ☐ |
| Hedgehog | ☐ |
| Hermit crab | ☐ |
| Jackson's chameleon | ☐ |
| Jumping spider | ☐ |
| Koi | ☐ |
| Leaf-tailed gecko | ☐ |
| Madagascar hissing cockroach | ☐ |
| Milk snake | ☐ |
| Molly | ☐ |
| Mourning gecko | ☐ |
| Mouse | ☐ |
| Neon tetra | ☐ |
| Oscar fish | ☐ |
| Pacman frog | ☐ |
| Parrotlet | ☐ |
| Platy | ☐ |
| Praying mantis | ☐ |
| Quaker parakeet | ☐ |
| Rat | ☐ |
| Red-eared slider | ☐ |
| Red-footed tortoise | ☐ |
| Rosy boa | ☐ |
| Savannah monitor | ☐ |
| Stick insect | ☐ |
| Sugar glider | ☐ |
| Sulcata tortoise | ☐ |
| Swordtail | ☐ |
| Tiger salamander | ☐ |
| Tokay gecko | ☐ |
| Uromastyx | ☐ |
| Veiled chameleon | ☐ |
| Zebra danio | ☐ |
| Zebra finch | ☐ |

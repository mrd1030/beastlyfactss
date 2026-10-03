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
6. Every cost table row carries a gear link (`<AffiliateLink>` with the exact
   catalog link and product name) where a fitting product exists. Rows with no
   fitting product stay unlinked and go in the species' Notes as
   "No gear available: <row>".
7. Package only: the budget page and profile cost lines match the site.

Prices come only from retailer checks or catalog price fields, never Amazon and
never invented. Where no price exists, say so and ask the owner.

## Care packages (20): site and package

| Package | Cost guide + hub | Package | Notes |
|---|---|---|---|
| Goldfish | ✅ 2026-10-03 | ❌ needs fix | Filter row now $50 to $85 (200+ gallons an hour), setup $145 to $325 (was $105 to $270). Book budget page and profile still say $105 to $270. Branch claude/goldfish-filter. |
| Betta fish | ✅ 2026-10-03 | ✅ no change | All totals, hub lines and links matched. |
| Budgie | ◐ hub only | ❌ needs fix | Buy list fixed and linked (branch claude/budgie-rebuild). Cost table still has no rows for gram scale ($30 to $40), cuttlebone ($8 to $12), UV light (no catalog price). Waiting on the owner. |
| Lovebird | ◐ hub only | ❌ needs fix | Buy list fixed and linked (branch claude/lovebird-rebuild). Cost table still has no rows for dishes ($10 to $18), bath ($12 to $16), gram scale ($30 to $40), UV light (no catalog price). Waiting on the owner. |
| Cockatiel | ◐ rebuild | ✅ matches site | Rebuilt 3.0 on claude/cockatiel-rebuild: setup $295 to $601, book matches. Hub buy list items with no cost row: cuttlebone or mineral block, nightlight or cage cover. No gear available: the bird, annual total. |
| Tarantula | ◐ rebuild | ✅ matches site | Rebuilt 3.0 on claude/tarantula-rebuild: setup $50 to $170 ($75 to $270 with the spider), book matches. Unlinked buy list: acrylic lid (no product), feeder insects (product has no covers). Thermometer/hygrometer links but has no cost row. No gear available: the spider, annual total. |
| Rabbit | ☐ | ☐ | Cost guide re-totaled on claude/rabbit-rebuild (setup $125 to $197, monthly $62 to $135). |
| Guinea pig | ☐ | ☐ | Cost guide re-totaled on claude/guinea-pig-rebuild (setup $158 to $204). |
| Hamster | ☐ | ☐ | On claude/hamster-rebuild. |
| Cockatoo | ☐ | ☐ | Found in the 1.4 light pass: the book's budget page itemizes setup at $2,195 to $7,340 (play stand, purifier, carrier, up to a $3,500 Moluccan); the site's first-year table says $1,975 to $6,300 before toys, bird $700 to $3,000. Scopes differ; the book's disagree page explains it. |
| Bearded dragon | ☐ | ☐ | |
| Leopard gecko | ☐ | ☐ | |
| Crested gecko | ☐ | ☐ | |
| Gargoyle gecko | ☐ | ☐ | |
| African fat-tailed gecko | ☐ | ☐ | Found in the 1.1 light pass: the cost guide heading and prose say setup $325 to $580 but its table sums to $369 to $579 (the book uses the table); the description line says "$75-1,000+" while the body says $75 to $600. |
| Ball python | ☐ | ☐ | |
| Hognose snake | ☐ | ☐ | |
| Russian tortoise | ☐ | ☐ | |
| Axolotl | ☐ | ☐ | |
| White's tree frog | ☐ | ☐ | |

## Cost guides without a package (64): site only

Same checks 1 to 6. A change here touches the guide and the hub only.

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

## Open questions, to answer during the cost checks (logged 2026-10-03)

- Bearded dragon: the thermostat row is $40 to $80 but the linked dimming thermostat is $73 to $93 in the catalog; raise the row to $40 to $95?
- Bearded dragon: bearded-dragon-shopping-list.mdx carries its own per-product prices ($5 steps, enclosure $300 to $700) that differ from the new cost rows; align it?
- Jumping spider: Arachnamoria (escape source) not yet checked against the source bar.
- Five light-passed books (hognose, gargoyle, African fat-tail, White's tree frog, cockatoo): free script checks, then a Fable reading pass each.
- No gear available: replacement UVB tubes. The catalog carries only full kits and hoods, so the ongoing "UVB tube replacement" rows on the nine UVB species stay unlinked. Prices were checked at Chewy on 2026-10-03: ShadeDweller-Max 2.5% 22 in $25.01, ReptiSun 5.0 T5 HO 12 in $20.98, Arcadia Desert 12% 39 W 34 in $52.50, Arcadia 6% 39 W 34 in $40.54, Arcadia Forest 6% 24 W 22 in $29.57, ReptiSun 10.0 T5 HO 22 in $26.99, Arcadia Desert 12% 24 W 22 in $32.99. Adding the matching tubes to the catalog is the owner's call.
- Step 4 gear search (2026-10-03), still no fitting product: a 3/4 in bar cage at least 36x24x48 for Goffin's and galah cockatoos (Prevue 3154 too small; every 36x28 and 40x30 cage checked has 1 in bars); lovebird perches stated at 3/8 to 1/2 in; cockatiel perches covering 5/8 to 1.5 in (the CZWESTC set's thinnest perch is 0.6 in and it is sold for budgies, so the row stays unlinked); plain white unprinted tray paper with a non-Amazon price; a cockatoo-sized travel carrier inside the $80 to $200 row (Celltei Pak-O-Bird Large is $555); a tarantula enclosure about 20x10 in with a solid acrylic lid (Tarantula Cribs Terrestrial XL is $210). Unsure: stainless cage locks or snaps for the cockatoo (plated or uncoated status unclear).

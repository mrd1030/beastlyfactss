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
5. No "Prices last checked" or "as of" line anywhere (owner, 2026-10-06;
   all were removed site-wide that day). The table component prints its
   own "Typical price ranges across retailers." note.
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
| Budgie | ◐ hub only | ❌ needs fix | Buy list fixed and linked (branch claude/budgie-rebuild). Cost table still has no rows for gram scale ($30 to $40), cuttlebone ($8 to $12), UV light (no catalog price). Waiting on the owner. Site: moved onto the shared price list 2026-10-06 with every figure unchanged ($315 to $750, bird included). |
| Lovebird | ◐ hub only | ❌ needs fix | Buy list fixed and linked (branch claude/lovebird-rebuild). Cost table still has no rows for dishes ($10 to $18), bath ($12 to $16), gram scale ($30 to $40), UV light (no catalog price). Waiting on the owner. Site: moved onto the shared price list 2026-10-06 with every figure unchanged ($275 to $600). |
| Cockatiel | ◐ rebuild | ✅ matches site | Rebuilt 3.0 on claude/cockatiel-rebuild: setup $295 to $601, book matches. Hub buy list items with no cost row: cuttlebone or mineral block, nightlight or cage cover. No gear available: the bird, annual total. Site: moved onto the shared price list 2026-10-06 with every figure unchanged ($370 to $765, bird included). |
| Tarantula | ◐ rebuild | ✅ matches site | Rebuilt 3.0 on claude/tarantula-rebuild: setup $50 to $170 ($75 to $270 with the spider), book matches. Unlinked buy list: acrylic lid (no product), feeder insects (product has no covers). Thermometer/hygrometer links but has no cost row. No gear available: the spider, annual total. |
| Rabbit | ☐ | ☐ | Cost guide re-totaled on claude/rabbit-rebuild (setup $125 to $197, monthly $62 to $135). |
| Guinea pig | ☐ | ☐ | Cost guide re-totaled on claude/guinea-pig-rebuild (setup $158 to $204). |
| Hamster | ☐ | ☐ | On claude/hamster-rebuild. |
| Cockatoo | ☐ | ☐ | Found in the 1.4 light pass: the book's budget page itemizes setup at $2,195 to $7,340 (play stand, purifier, carrier, up to a $3,500 Moluccan); the site's first-year table says $1,975 to $6,300 before toys, bird $700 to $3,000. Scopes differ; the book's disagree page explains it. Site: moved onto the shared price list 2026-10-06 with every figure unchanged ($2,270 to $6,410; gear $1,430 to $3,200). |
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
| Ackie monitor | ✅ 2026-10-06: setup $900 to $2,245 (was $850 to $2,150 or more; hub route line and the ackie overview said $800 to $1,500). Added rows (must-haves only, owner 2026-10-06): first supply of calcium and vitamin A multivitamin, kitchen scale for the weekly weights; the daylight LED, puzzle feeder and clicker are priced in a separate extras table, not counted in the setup total; the UV index meter keeps its own highly recommended note; UVB now the 36 in 12% kit (the 22 in kit spans about a third of a 5 ft enclosure), also on the setup guide. No gear available: a 5x2.5x4 ft enclosure (the catalog's 48x24x48 is below the minimum, so it is unlinked from the cost, setup and enrichment guides); hides. After the Fable check (2026-10-06): basking row first unlinked (the 250 W bulb is only the cold-room step-up), then linked to the owner's pick, LUCKY HERP 100 W 2 pack (B0BQW3Z9PJ), which the hub's basking line now links too; split (owner, 2026-10-06) into the bulbs, $10 to $15 from the owner's $11.99 for the linked pack, and two dome lamps rated to 150 W, $25 to $40 each, setup now $900 to $2,245; substrate row unlinked and priced as the DIY topsoil and sand mix (12 to 24 inches over 5x2.5 ft is 11 or more 36 qt bags of the bioactive mix, far over the row), the hub keeps its bioactive mix link; infrared gun and supplement floors lowered to cover the catalog prices; the below-spec enclosure lost its ackie covers string; catalog prices added for the Bio Dude LED (~$85, thebiodude.com $84.95) and the Daltile slate 6 pack ($39 to $56, Home Depot and Lowe's per square foot). Unpriced: substrate dam. Prices checked: Zoo Med plain calcium 8 oz $9.79 to $12.99 (Walmart, ReptileSupply, Poudre Feed), Repashy Vitamin A Plus 3 oz $8.99 to $10.99 (Josh's Frogs, LLL Reptile, Repashy). |
| African grey parrot | ✅ 2026-10-06, on the shared price list: setup $500 to $1,230 (was "roughly $500 to $1,500"; seoTitle said "$500+"). Necessities: powder-coated cage 36x24x48 with 3/4 to 1 in bars (unlinked), perches, avian UVB kit (PetSmart $64.99, others $74.99 to $91.99), large-parrot foraging toys, two bolt-on dishes, a grey-size carrier ($36.99 to $124.99 at PetSmart and Chewy, unlinked), cage cover, mist bottle, gram scale; extras: play stand ($209.99 to $249.99), HEPA purifier. UV index meter note added. Unlinked as below spec on every grey page: the Yaheetech "large" flight cage (31 x 20.5 in body, sold for parakeets and cockatiels; cost, setup and vs-cockatoo guides), the parakeet perch set (cost, setup), the budgie apple-wood perch set (enrichment). Harrison's High Potency Fine and RoudyBush Mini (small-bird grinds) replaced by Lafeber's Premium Daily Diet for Parrots on the cost and health guides; the feeding guide's "tree nuts" link to a pellet product removed. No gear available: powder-coated grey cage, large-parrot perch set, grey-size carrier. |
| Amano shrimp | ☐ |
| Angelfish | ☐ |
| Argentine tegu | ☐ |
| Blue-tongue skink | ☐ |
| Boa constrictor | ☐ |
| Box turtle | ☐ |
| Bristlenose pleco | ☐ |
| California kingsnake | ☐ |
| Canary | ✅ 2026-10-06, shared price list: setup $285 to $460 (was roughly $195 to $345, four rows). Added the must-haves the hub lists: first pellets and egg food (Amazon $13.64 for the Higgins 3 pack), cage cover, gram scale, carrier; cuttlebone now the single 5 in piece; the two-cage line no longer states a figure. Prevue F040 flight cage confirmed 31 x 20.5 in, 1/2 in bars. |
| Cardinal tetra | ☐ |
| Cherry shrimp | ☐ |
| Chinchilla | ☐ |
| Conure | ✅ 2026-10-06, shared price list: setup $315 to $530 before the bird (was roughly $230 to $470). The bird row left the setup table. The bundled dishes, bottle, cover, food and cuttlebone row split into dishes, cage cover, cuttlebone and first pellets; gram scale and carrier added; UVB on the shared avian kit item. Unlinked as wrong or below spec: the sugar glider pouch used as a bird tent (cost, setup and health guides; its "Snuggle pouch or bird tent" covers string removed) and the parakeet perch set. No gear available: a 24x24x30 cage with 1/2 to 5/8 in bars (the F040 is 20.5 in deep), conure perches, a bird tent. |
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
| Parrotlet | ✅ 2026-10-06, shared price list: setup $295 to $495 (was roughly $210 to $365). Added first pellets and millet, cage cover, gram scale, carrier; toys and cuttlebone rows now cover their catalog prices; perches are the CZWESTC set the hub links. No gear available: a cage with 1/4 in bars. |
| Platy | ☐ |
| Praying mantis | ☐ |
| Quaker parakeet | ✅ 2026-10-06 (owner chose the rewrite), shared price list: setup $295 to $560 (was roughly $300 to $800, with a dated worked example at $400 to $590). The worked example table, its exact sale and list prices and the first exam row are replaced by the usual setup table; the cage-depth advice and the toy note stay in the prose; the vet price table stays. Unlinked as below spec: the Prevue 5 ft wrought iron flight cage (37 x 23 in, under the 24 in depth) on the cost, setup and enrichment guides, and on the zebra finch enrichment guide (1/2 in bars, finches need 3/8); Harrison's High Potency Fine pellets link removed from the monthly line. No gear available: a 24x24x36 cage with 1/2 to 5/8 in bars, natural wood perches, starter toys. |
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
| Zebra finch | ✅ 2026-10-06, shared price list: setup $270 to $550 with the pair (was roughly $225 to $465). Added first pellets and egg food, clamp-on dishes, gram scale; cuttlebone row covers the Penn-Plax 2 pack. The 25 lb finch seed sack is not a setup item. No gear available: a cage with 3/8 in bars. |

## Open questions, to answer during the cost checks (logged 2026-10-03)

- Bearded dragon: the thermostat row is $40 to $80 but the linked dimming thermostat is $73 to $93 in the catalog; raise the row to $40 to $95?
- Bearded dragon: bearded-dragon-shopping-list.mdx carries its own per-product prices ($5 steps, enclosure $300 to $700) that differ from the new cost rows; align it?
- Jumping spider: Arachnamoria (escape source) not yet checked against the source bar.
- Five light-passed books (hognose, gargoyle, African fat-tail, White's tree frog, cockatoo): free script checks, then a Fable reading pass each.
- No gear available: replacement UVB tubes. The catalog carries only full kits and hoods, so the ongoing "UVB tube replacement" rows on the nine UVB species stay unlinked. Prices were checked at Chewy on 2026-10-03: ShadeDweller-Max 2.5% 22 in $25.01, ReptiSun 5.0 T5 HO 12 in $20.98, Arcadia Desert 12% 39 W 34 in $52.50, Arcadia 6% 39 W 34 in $40.54, Arcadia Forest 6% 24 W 22 in $29.57, ReptiSun 10.0 T5 HO 22 in $26.99, Arcadia Desert 12% 24 W 22 in $32.99. Adding the matching tubes to the catalog is deferred: the owner wants to keep it as an option for later (2026-10-03).
- Step 4 gear search (2026-10-03), still no fitting product: a 3/4 in bar cage at least 36x24x48 for Goffin's and galah cockatoos (Prevue 3154 too small; every 36x28 and 40x30 cage checked has 1 in bars); lovebird perches stated at 3/8 to 1/2 in; cockatiel perches covering 5/8 to 1.5 in (the CZWESTC set's thinnest perch is 0.6 in and it is sold for budgies, so the row stays unlinked); plain white unprinted tray paper with a non-Amazon price; a cockatoo-sized travel carrier inside the $80 to $200 row (Celltei Pak-O-Bird Large is $555); a tarantula enclosure about 20x10 in with a solid acrylic lid (Tarantula Cribs Terrestrial XL is $210). Unsure: stainless cage locks or snaps for the cockatoo (plated or uncoated status unclear).

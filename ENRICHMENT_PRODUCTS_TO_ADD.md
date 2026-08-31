# Enrichment products to add to affiliateProducts.js

Eight categories the enrichment guides need that the 261-item catalogue does not
cover at all. These are not size variants of anything already listed: each is a
mechanism with no existing entry.

Found by search, not from memory. Every ASIN and product title below has been
verified against the live Amazon listing.

**On the blank fields.** An earlier version of this file claimed ratings and
prices could not be retrieved. That was wrong and it made Mike do work twice.
What is actually true, after testing it:

- **Titles** are reliable. Amazon serves them in the page meta tag.
- **Ratings** come back from search snippets perhaps a quarter of the time.
- **Prices** never do. Amazon renders them client-side and blocks the fetch.

So prices genuinely need a human with the page open, and ratings are worth a
search first.

**Images** come from the listing gallery. Mike sends the main product photo and it
gets resized to fit 640px and saved as `product-N.jpg`. Only that source file is
tracked; the `-thumb` and `-card` tiers are gitignored and rebuilt by
`generate-thumbnails.js` at the front of `build` and `dev`.

Link format matches the newer entries in the file:
`https://www.amazon.com/dp/<ASIN>?tag=beastlyfacts-20`

---

## 1. Small-pet foraging puzzle
Unlocks the food-extraction mechanism for rat, mouse, chinchilla, degu, guinea
pig, hamster and rabbit. The catalogue's four puzzle feeders are all dog products.

Originally sourced as the Sieral single unit, ASIN `B0B82CQ78G`, which went out of
stock with no restock date. Replaced by Mike with the Hamiledyi three pack below,
which is a better fit anyway: the listing names chinchilla, bunny, rat and gerbil
directly, so it covers the species list rather than approximating it, and three
units means one per enclosure in a multi-pet home.

- **ASIN** `B0DPKP3JBX`
- **Product** Hamiledyi 3 Pack Guinea Pig Foraging Toys Interactive Wooden Rabbit Enrichment Toys Hamster Hide Treats Snuffle Puzzle Game for Chinchilla Bunny Rat Gerbil
- **Link** https://www.amazon.com/dp/B0DPKP3JBX?tag=beastlyfacts-20
- **Category** Small Mammal & Exotic Pet Gear
- **rating** `4.5`
- **price** `"$15–$20"` (seen at $16.99, banded to match every other price field in the catalogue)
- **image** `/assets/images/affiliate/product-259.jpg` installed
- **covers** `["Foraging or puzzle feeder for small mammals"]`
- **pets** `["small-mammals"]`

## 2. Small-pet snuffle mat
Different mechanism from the wooden puzzle rather than a variant of it: scent-led
searching in fabric instead of solving a lid. Covers ferrets, which the wooden
puzzle does not.

- **ASIN** `B09HBSZXT6`
- **Product** Abizoo Bunny Snuffle Mat Toy, 11.8''x11.8'' Washable Skin Friendly Puzzle Fun Foraging Pad Treat Dispenser Consume Energy for Rabbit Guinea Pigs Ferrets Chinchillas Small Animal Toys Cage Supplies
- **Link** https://www.amazon.com/dp/B09HBSZXT6?tag=beastlyfacts-20
- **Category** Small Mammal & Exotic Pet Gear
- **rating** `4.5`
- **price** `"$10–$16"` (seen at $11.99)
- **image** `/assets/images/affiliate/product-260.jpg` installed
- **covers** `["Snuffle mat or scatter-feeding mat for small mammals"]`
- **pets** `["small-mammals"]`

## 3. Small-animal tunnel
Connected cover, which changes how much of an enclosure a prey species will
actually cross. Nine species, no existing entry.

- **ASIN** `B0BYMSTP23`
- **Product** YUEPET Collapsible Corner Tunnel and Tube for Small Animals
- **Link** https://www.amazon.com/dp/B0BYMSTP23?tag=beastlyfacts-20
- **Category** Small Mammal & Exotic Pet Gear
- **rating** `4.4`
- **price** `"$8–$14"` (seen at $9.99)
- **image** `/assets/images/affiliate/product-261.jpg` installed
- **covers** `["Tunnel or tube cover for small mammals"]`
- **pets** `["small-mammals"]`

## 4. Tortoise forage seed blend
Turns feeding back into grazing for the four tortoise and turtle species plus
iguana and uromastyx. Chosen over the Testudo-specific and grazer-specific mixes
because this one listing covers Sulcata, Russian and Hermann's, so it is one
product rather than three.

- **ASIN** `B0H3R2RXFJ`
- **Product** Tortoise Forage Seed Mix – Grow Fresh Grazing Greens for Sulcata, Russian & Hermann's Tortoises – Oats, Rye & Alfalfa Blend for Indoor Trays or Outdoor Enclosures – Non-GMO Seed (1 lb)
- **Link** https://www.amazon.com/dp/B0H3R2RXFJ?tag=beastlyfacts-20
- **Category** Food & Treats
- **rating** omit the field entirely. The listing shows 3 stars from only 3
  reviews, which is noise rather than a signal, and 3.0 sitting beside a wall of
  4.5s would read as a warning the sample size does not support. ProductCard and
  ProductModal both guard with `rating != null` and fall back to price alone, so
  an absent rating renders correctly. This would be the first of the catalogue to
  use it. Revisit once the listing has a real review count.
- **price** `"$15–$25"` (seen at $19.99)
- **image** `/assets/images/affiliate/product-262.jpg` installed, cropped from the
  A+ composite to the bag alone, since the full composite is unreadable at the
  240x240 thumb and 320x240 card sizes
- **covers** `["Growable browse or forage seed for tortoises"]`
- **pets** `["reptiles-amphibians"]`

## 5. Rolling treat dispenser, for pushing species
Originally sourced as a single "reptile puzzle feeder" covering all 19 species.
Mike caught the problem: the wooden board sourced for that role has a **rope pull**
as one of its mechanisms, and a bearded dragon does not pull cord. That is a
parrot and rodent action. A dragon **pushes and noses**, so a rolling dispenser
that sheds mealworms as it moves is the mechanism that matches the animal.

Split into two products as a result, this one and item 8. Bearded dragon, leopard
gecko and the smaller lizards get the ball; the manipulative species get the
extraction board.

- **ASIN** `B0BVFLSFHC`
- **Product** ALI2 Lizard Feeder Toys Bearded Dragon Enrichment Reptile Interactive Rugby Shape Toy for Bearded Dragon, Lizard, Gecko and Small Animals
- **Link** https://www.amazon.com/dp/B0BVFLSFHC?tag=beastlyfacts-20
- **Category** Feeding & Watering
- **rating** `4.1`
- **price** `"$7–$12"` (seen at $8.59)
- **image** `/assets/images/affiliate/product-263.jpg` installed
- **covers** `["Rolling treat dispenser for reptiles"]`
- **pets** `["reptiles-amphibians"]`

## 6. Target stick and clicker
Cognitive enrichment and cooperative-care training for parrots, tortoises,
monitors, tegus, rats, ferrets and rabbits. Costs almost nothing and there is no
entry for it.

- **ASIN** `B07GBC85T9`
- **Product** Parrot Training Clicker and Target Stick
- **Link** https://www.amazon.com/dp/B07GBC85T9?tag=beastlyfacts-20
- **Category** Decor & Enrichment
- **covers** `["Target stick or clicker for training"]`
- **pets** `["birds", "reptiles-amphibians", "small-mammals"]`

## 7. Composable burrow tunnel system for small rodents
The gerbil enrichment guide turns on a specific finding: Wiedenmayer showed that
gerbils raised with a **tunnel connected to a chamber** do not develop stereotypic
digging, and that tunnel-like dens were far more effective than sand alone. Deep
bedding is not a substitute, so this is a mechanism the catalogue has no entry
for. The igloo hideout covers the chamber half and nothing covers the tunnel.

Also serves mouse, hamster and degu.

- **ASIN** `B082FBW69F`
- **Product** Niteangel Creative & Composable Hamster Tunnel - DIY & Build Unique Tube Burrow as Hideout for Small Sized Animals Like Hamsters Mouse Gerbils Mice (Corner)
- **Link** https://www.amazon.com/dp/B082FBW69F?tag=beastlyfacts-20
- **Category** Small Mammal & Exotic Pet Gear
- **covers** `["Burrow tunnel system for small rodents", "Tunnel and chamber burrow enrichment"]`
- **pets** `["small-mammals"]`

## 8. Extraction puzzle board, for manipulative species
The other half of the split. This is the product Mike flagged as mis-advertised
for bearded dragons, and it is the right product for a different set of animals.

Puzzle and extraction feeding is central to two guides specifically. The savannah
monitor and Argentine tegu guides are both built on the varanid study where eight
juvenile black-throated monitors were given a transparent tube of food and all
eight opened it within ten minutes on the first trial, with solving latencies
falling over later trials. That is an extraction problem, and a rolling ball is
not one for an animal that size. Red-footed tortoise lists food puzzles in its
priority order too.

So: monitors, tegus and tortoises here. Not bearded dragons, whatever the listing
photo shows.

- **ASIN** `B0CZHKGB3M`
- **Product** FlidRunest Bearded Dragon Feeder Puzzle, Wooden Lizard Feeding Box, Reptile Interactive Enrichment Food Feeder Training Treat Dispenser for Lizard Bearded Dragon Frog Hamster
- **Link** https://www.amazon.com/dp/B0CZHKGB3M?tag=beastlyfacts-20
- **Category** Feeding & Watering
- **rating** `4.0`
- **price** `"$15–$25"` (seen at $18.99)
- **image** `/assets/images/affiliate/product-264.jpg` installed
- **covers** `["Extraction or puzzle feeder for reptiles"]`
- **pets** `["reptiles-amphibians"]`

---

## Deliberately not sourced

Three enrichment mechanisms in the matrix need no product and should never get
an affiliate link, because buying something is the wrong answer:

- **Group size.** Not purchasable and the most commonly ignored item on the list.
- **Scent trails and olfactory novelty.** Shed skin from another enclosure, a
  scent-marked object, prey dragged across the substrate. All free.
- **Dig boxes.** A storage tub with damp substrate in it.

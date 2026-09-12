# Etsy listings for the care packages

Why Etsy at all: the Stripe storefront works, but it only sees the traffic the
site brings, and in September 2026 that is about 500 search clicks a month.
Etsy brings its own buyers. The packages are finished products that do not need
the site's rankings to sell, so the site stops being the only distribution
channel.

Launch set, five packages: bearded dragon, crested gecko, ball python, axolotl,
betta fish. Goldfish is the planned sixth. Not all fourteen at once: fourteen
listings with no reviews is fourteen things to maintain and no more sales than
five, and the first batch is there to teach us which listings convert.

## The review problem, and the only honest way through it

Etsy reviews come from Etsy purchases. There is no other source.

Do not buy reviews, do not have family or friends buy in order to leave one,
and do not offer a discount, refund or freebie in exchange for a review. Etsy
prohibits incentivized reviews outright and correlates accounts, addresses and
payment methods. A shop banned in its first month is worse than a shop with no
reviews.

The loop breaks from outside Etsy. The first five to ten buyers come from
Pinterest, from beastlyfacts.com, and from species communities, sent straight
to the listing. They buy, they review, and those reviews are what open Etsy's
own search. The site's 500 monthly visitors are not enough to build a business
on, but they are plenty to seed a listing.

Around that:

- Ask after purchase. Etsy allows a thank-you message and asking for a review
  is permitted. Most buyers never leave one unless asked. Never attach a reward
  to the ask.
- The listing images carry the credibility that reviews would. With no reviews
  the images are all a browser has to go on.
- Testimonials from existing buyers in the `purchases` table can go on the
  product pages and inside listing images as attributed quotes. They cannot
  become Etsy reviews, but they are social proof available now.
- The free sample is the hook. Give `sample.pdf` away on Pinterest and the
  site, sell the full package on Etsy.

## Pricing

Every package is $8.99 on the Stripe storefront today.

| Stage | Etsy price | Site price |
| --- | --- | --- |
| Launch, first ~20 reviews | $6.99 | $8.99 |
| After ~20 reviews | $9.99 | $8.99 |

Early reviews are worth more than early margin, so the launch price is set to
move. After that Etsy sits above the site: Etsy takes a $0.20 listing fee, 6.5%
transaction and roughly 3% + $0.25 processing, about $1.40 on a $8.99 sale, and
pricing above the site keeps the storefront the better deal for anyone who
finds both. The site nets close to the full amount, so it should never be the
expensive option.

## Images

Nothing new needs rendering. Every package already has what it needs under
`public/assets/care-packages/<id>/`: `cover.jpg`, six interior page JPGs, and
`sample.pdf`.

Ten image slots per listing, in this order:

1. `cover.jpg`, with the page count set over it. This is the thumbnail and it
   is the single highest-leverage asset in the listing.
2. to 7. The six interior page JPGs, unedited. Real pages beat mockups here:
   the buyer wants to know what they are actually getting.
8. The contents page, so the scope is visible at a glance.
9. A plain "what's inside" card built from the `bullets` array in
   `src/lib/data/carePackages.js`.
10. An attributed testimonial, once one exists. Leave empty until then rather
    than filling it with anything invented.

## Titles and tags

Etsy allows 140 characters of title and 13 tags at 20 characters each. Search
weights the front of the title most, so the species and the format go first.

### Betta fish

**Title**
Betta Fish Care Guide Printable | 37 Page Complete Betta Care Package | Tank Setup, Water Parameters, Fish Health | Instant Download PDF

**Tags**
betta fish care, betta care guide, printable fish care, betta fish printable,
aquarium printable, fish tank setup, betta fish gift, new betta owner, fish
care planner, betta tank guide, aquarium care guide, fish health guide,
beginner fish guide

### Bearded dragon

**Title**
Bearded Dragon Care Guide Printable | 35 Page Complete Beardie Care Package | Tank Setup, UVB, Feeding, Health | Instant Download PDF

**Tags**
bearded dragon care, beardie care guide, reptile printable, bearded dragon
gift, reptile care guide, lizard care guide, new reptile owner, beardie
printable, reptile planner, dragon tank setup, uvb lighting guide, reptile
health guide, beginner reptile

### Crested gecko

**Title**
Crested Gecko Care Guide Printable | 35 Page Complete Crestie Care Package | Terrarium Setup, Feeding, Health | Instant Download PDF

**Tags**
crested gecko care, crestie care guide, gecko printable, reptile printable,
crested gecko gift, gecko care guide, new gecko owner, reptile care guide,
terrarium setup, gecko health guide, reptile planner, beginner reptile, gecko
feeding guide

### Ball python

**Title**
Ball Python Care Guide Printable | 35 Page Complete Ball Python Care Package | Heating, Humidity, Feeding, Health | Instant Download PDF

**Tags**
ball python care, snake care guide, python printable, reptile printable, ball
python gift, snake printable, new snake owner, reptile care guide, snake tank
setup, python feeding, snake health guide, reptile planner, beginner snake

### Axolotl

**Title**
Axolotl Care Guide Printable | 42 Page Complete Axolotl Care Package | Tank Setup, Water Parameters, Health | Instant Download PDF

**Tags**
axolotl care, axolotl care guide, axolotl printable, axolotl gift, aquarium
printable, amphibian care, new axolotl owner, axolotl tank setup, water
parameters, axolotl health, aquatic pet guide, exotic pet guide, beginner
axolotl

## Description template

Written once for betta, below. The other four follow the same shape: the hook
in the first two lines (Etsy shows those in Google results), then what is
inside from `contents`, then the practical terms. House rules apply, so no em
dashes and US spelling throughout.

---

A complete 37 page betta care guide, written to be printed and kept next to
the tank.

Most betta care advice online is wrong in the same three ways: the bowl, the
missing heater, and the water changes nobody explains. This covers what a betta
actually needs, with the numbers, and it does not pad the page count to look
thorough.

WHAT IS INSIDE

Full care guide
- Tank, heater and lid, with real size and temperature targets
- Filtration and the nitrogen cycle, explained without jargon
- Fishless cycling, step by step
- Water quality, testing, and water changes that keep the cycle alive
- Diet and feeding schedule, a food chart, and the never-feed list
- Why a betta stops eating
- Enrichment, based on what the research actually shows
- Reading a healthy betta and body condition

Health and common issues
- Red flags and first response
- Finding a vet and what to tell them
- Fin rot, ich, velvet and columnaris
- Swim bladder, dropsy and mycobacteriosis
- Stress signals, behavior, and tankmates

Owner tools, all printable
- Setup checklist and water targets
- Budget and shopping list
- First 30 days checklist
- Symptom quick reference
- Daily, weekly and seasonal routine
- Power outage and blackout plan
- Travel, transport and moving
- Pet sitter sheet
- Owner log, equipment and water change log, vet log
- Enrichment checklist and log

Plus an emergency quick targets card, a glossary, and the full source list.
Every number in the guide is cited.

WHAT YOU GET

One PDF, 37 pages, US Letter. Instant download, so it is yours the moment the
payment clears. Print the whole thing, print only the checklists, or keep it on
a phone next to the tank.

This is a digital file. Nothing ships.

Questions before you buy are welcome. Message me.

---

## Still to do

- Build the ten listing images per package from the existing assets.
- Write the remaining four descriptions from the template.
- Open the Etsy shop and set the digital download terms.
- Decide whether the site links out to Etsy, or the two stay separate.
- Line up the first Pinterest pins so the listings have traffic on day one.

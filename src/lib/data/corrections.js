// Public corrections log and external review register for /how-guides-are-made/.
//
// CORRECTIONS: every substantive fix to a published page, newest first. A
// substantive fix changes what a reader would do: a temperature, a dose, a
// legal status, a species claim, a product pulled as unsafe. Typos, link
// repairs, price re-totals and rewording for clarity do not go here. Each
// entry names the page, what was wrong, what it says now, and when it changed.
// Entries are permanent: never edit or remove one; append a new entry if the
// fix itself needed fixing.
//
// Fields: date (US Eastern, the day the fix went live; for the entries
// seeded from the working docs on 2026-10-15, the day the doc recorded it
// done), page (site path), title (the page's name), was, now, why (the source
// that settled it, optional), edition (the care package edition that carries
// the same fix, optional), reportedBy (first name or "a reader", optional,
// never an email).
//
// The 36 entries dated 2026-09-03 to 2026-10-06 were seeded from
// archive/docs-completed/FIX_PLAN_COMPLETED_2026-09-25.md,
// archive/docs-completed/CONFLICTS_COMPLETED_2026-09-16.md and
// CONSISTENCY_SWEEP.md on 2026-10-15, when the log opened. Consistency
// alignments, unsourced claims removed, and fact-page fixes from the same
// period were left out on purpose.
//
// REVIEWS: pages that someone outside the site has read for accuracy, with
// their name, what qualifies them, and when. Empty until the first review
// happens. Never list a review that was not actually done.

export const CORRECTIONS = [
  {
    date: '2026-10-16',
    page: '/blog/axolotl-legal-guide/',
    title: 'Axolotl Legal Guide',
    was: 'Hawaii was missing from the table, and the takeaway counted Maine among the bans and called it an eight-jurisdiction pattern.',
    now: 'Hawaii has its row: the axolotl is named on the conditionally approved list, so it is allowed under Department of Agriculture conditions. The takeaway names seven bans and says Maine issues permits but not for pets, which is the matrix\'s count.',
    why: 'Hawaii Department of Agriculture conditionally approved animals list; the site\'s legal matrix.',
    reportedBy: 'an AI-assisted audit',
  },
  {
    date: '2026-10-16',
    page: '/blog/sugar-glider-legal-guide/',
    title: 'Sugar Glider Legal Guide',
    was: 'Said sugar gliders are legal in Georgia despite rumors, and folded New Jersey and New Mexico into "everywhere else".',
    now: 'Georgia has its own row: legal without a license only with proof of a USDA-regulated source. New Jersey and New Mexico are named as permit states. The map already said both.',
    why: 'Georgia DNR Rule 391-4-8-.05(1)(a)7.',
    reportedBy: 'an AI-assisted audit',
  },
  {
    date: '2026-10-16',
    page: '/exotic-pet-laws/',
    title: 'Exotic Pet Legal Hub',
    was: 'The axolotl summary said banned in California, New Jersey and Maine, and reportedly in Washington DC. The sugar glider summary said illegal in California, Alaska and Hawaii and unobtainable in Pennsylvania.',
    now: 'Both summaries carry the full matrix: axolotl banned in seven jurisdictions with four permit and three conditional states; sugar glider banned in six including DC and New York City, permit-only in two, conditional in Georgia. The full guides were already right; the hub blurbs had not been updated with them.',
    why: 'The site\'s own legal matrix.',
    reportedBy: 'an AI-assisted audit',
  },
  {
    date: '2026-10-16',
    page: '/blog/budgie-feeding-guide/',
    title: 'Budgie Feeding',
    was: 'Pellets 60 to 80 percent of daily intake with vegetables and fruit at 20 to 25 percent, which could add to more than 100. The hub and the tank setup guide said the same.',
    now: 'Pellets 75 to 80 percent, vegetables and a little fruit the remaining 20 to 25 percent, seed an occasional extra, matching the other parrot guides.',
    why: 'VCA Animal Hospitals, budgie feeding page.',
    reportedBy: 'an AI-assisted audit',
  },
  {
    date: '2026-10-16',
    page: '/facts/',
    title: 'Animal Facts: Pangolin',
    was: 'Said every pangolin\'s tongue stretches longer than its head and body combined.',
    now: 'That is true of the giant pangolin, the largest species, which is what the Beastlypedia profile already said. The fact now says so. A second fact that repeated the only-scaled-mammal line was replaced with the trade ban.',
    reportedBy: 'an AI-assisted audit',
  },
  {
    date: '2026-10-06',
    page: '/blog/chinchilla-tank-setup-guide/',
    title: 'Chinchilla Tank Setup',
    was: 'Gave a comfort band of 50 to 68 F, repeated on the hub, the degu comparison and the small-mammal heat stress guide.',
    now: '55 to 70 F, never above 80 F, on every chinchilla page.',
    why: 'PetMD (55 to 70 F) and LafeberVet (59 to 70 F).',
  },
  {
    date: '2026-10-06',
    page: '/blog/fire-bellied-toad-handling-guide/',
    title: 'Fire-Bellied Toad Handling',
    was: 'Offered a small net as a handling option, and said the skin toxin harms tankmates of other species.',
    now: 'The net is gone; an amphibian is never netted. The skin secretion irritates the mouth and eyes of animals that mouth the toad, which is what the source says.',
    why: 'Smithsonian National Zoo.',
  },
  {
    date: '2026-10-05',
    page: '/blog/crested-gecko-cost-guide/',
    title: 'Crested Gecko Cost',
    was: 'The FAQ and the gecko comparison said a small heat bulb on a thermostat is needed.',
    now: 'Heat only when the room drops below about 72 F, a thermostat on any heat source, a thermometer either way. The care package had it right and the site moved to match.',
    why: 'Veterinary care sheets; the package edition 3.0 already carried the rule.',
    edition: 'Crested Gecko Care Package 3.0, October 2026, was already correct.',
  },
  {
    date: '2026-10-05',
    page: '/blog/bearded-dragon-feeding-guide/',
    title: 'Bearded Dragon Feeding',
    was: 'Called carrots a good staple and hornworms a regular staple, against the same page\'s safe-foods list.',
    now: 'Both are occasional foods.',
  },
  {
    date: '2026-10-04',
    page: '/blog/hedgehog-cost-guide/',
    title: 'Hedgehog Cost',
    was: 'The enclosure row, and the tank setup guide, linked a hamster cage with 3/8 inch bars and a small floor.',
    now: 'The link is removed from both pages. The row says to check the floor dimensions; the hub asks for at least 2 by 3 feet of solid floor. No fitting product has been found yet.',
  },
  {
    date: '2026-10-04',
    page: '/blog/hermit-crab-tank-setup-guide/',
    title: 'Hermit Crab Tank Setup',
    was: '10 gallons for up to two crabs, 5 more per extra crab. The cost guide and hub said the same.',
    now: 'At least 10 gallons per small to medium crab and 15 per large, bigger is better. The cost guide now prices a 20-gallon long for a pair and a 40-gallon breeder for three or four.',
    why: 'Crab Street Journal; the owner keeps three in a 40.',
  },
  {
    date: '2026-10-04',
    page: '/blog/platy-tank-setup-guide/',
    title: 'Platy Tank Setup',
    was: 'A fishless cycle takes 2 to 4 weeks.',
    now: '4 to 6 weeks, matching the aquarium cycling guide.',
  },
  {
    date: '2026-10-04',
    page: '/blog/neon-tetra-health-issues-guide/',
    title: 'Neon Tetra Health Issues',
    was: 'Quarantine 2 to 4 weeks, on this page and the tank setup guide.',
    now: 'At least 30 days on both pages, matching the fish quarantine guide.',
  },
  {
    date: '2026-10-04',
    page: '/guides/millipede/',
    title: 'Giant Millipede Care Guide',
    was: 'Lifespan up to 10 years in captivity.',
    now: 'Typically 5 to 7 years, some past 10.',
    why: 'Tree of Life Exotics.',
  },
  {
    date: '2026-10-02',
    page: '/blog/uvb-lighting-complete-guide/',
    title: 'UVB Lighting Complete Guide',
    was: 'Replace a quality T5 HO bulb every 12 months.',
    now: 'Every 6 to 12 months depending on the model, matching the bearded dragon pages and the care packages.',
    why: 'Tree of Life Exotic Pet Medical Center.',
    edition: 'Leopard Gecko, Crested Gecko and Russian Tortoise Care Packages 3.0, October 2026.',
  },
  {
    date: '2026-10-02',
    page: '/guides/axolotl/',
    title: 'Axolotl Care Guide',
    was: 'pH 7.4 to 7.8, on the hub and the tank setup guide.',
    now: '7.4 to 7.6, with 6.5 to 8.0 tolerated as long as it stays stable. The care package already said so.',
    why: 'LafeberVet.',
    edition: 'Axolotl Care Package was already correct.',
  },
  {
    date: '2026-10-02',
    page: '/guides/hamster/',
    title: 'Hamster Care Guide',
    was: 'Under 60 F risks torpor.',
    now: 'Below about 41 F (5 C), especially with short days, risks torpor.',
    why: 'Merck Veterinary Manual and LafeberVet.',
    edition: 'Hamster Care Package 2.2, September 2026.',
  },
  {
    date: '2026-10-02',
    page: '/blog/tarantula-handling-guide/',
    title: 'Tarantula Handling',
    was: 'First aid for urticating hairs in the eye included rinsing.',
    now: 'Never flush the eye. Shield it and see an eye doctor the same day.',
    why: 'NIH StatPearls.',
    edition: 'Tarantula Care Package 2.2, September 2026.',
  },
  {
    date: '2026-09-25',
    page: '/blog/cockatiel-cost-guide/',
    title: 'Cockatiel Cost',
    was: 'Lifespan 10 to 15 years here and on the hub, 15 to 25 on the cockatoo comparison, and up to 25 in the encyclopedia.',
    now: '12 to 15 years everywhere, with up to about 25 reported.',
    why: 'LafeberVet.',
  },
  {
    date: '2026-09-25',
    page: '/blog/jacksons-chameleon-tank-setup-guide/',
    title: "Jackson's Chameleon Tank Setup",
    was: 'Ambient 68 to 75 F.',
    now: '70 to 80 F, kept toward the low end, with a night drop to 50 to 65 F.',
    why: 'LafeberVet.',
  },
  {
    date: '2026-09-25',
    page: '/blog/crested-gecko-health-issues-guide/',
    title: 'Crested Gecko Health Issues',
    was: 'Weigh your gecko weekly.',
    now: 'At least monthly, more often while off food.',
    edition: 'Crested Gecko Care Package 3.0, October 2026.',
  },
  {
    date: '2026-09-25',
    page: '/blog/crested-gecko-tank-setup-guide/',
    title: 'Crested Gecko Tank Setup',
    was: 'The basking row read 82 to 85 F at the surface, then added "some sources: 72 to 75 F to be safe", undercutting itself.',
    now: 'Ambient 72 to 78 F, the warm area at the top up to about 80 F, a hard maximum of 85 F anywhere.',
  },
  {
    date: '2026-09-25',
    page: '/blog/box-turtle-tank-setup-guide/',
    title: 'Box Turtle Tank Setup',
    was: 'Adults fed daily or every other day, here and on the hub.',
    now: 'Every other day is the default for adults. Daily works only on the looser published schedule, and this species runs to obesity.',
  },
  {
    date: '2026-09-25',
    page: '/guides/sulcata-tortoise/',
    title: 'Sulcata Tortoise Care Guide',
    was: 'Commonly 70 to 100 years.',
    now: '50 to 70 years typical, 70 or more achievable.',
  },
  {
    date: '2026-09-25',
    page: '/blog/red-eared-slider-cost-guide/',
    title: 'Red-Eared Slider Cost',
    was: 'Lifespan 40 to 70 years.',
    now: '20 to 30 years is the consensus range; the documented captive record is 41.3 years.',
  },
  {
    date: '2026-09-25',
    page: '/blog/goldfish-feeding-guide/',
    title: 'Goldfish Feeding',
    was: 'The FAQ split the difference between once a day and two to three times as "1 to 2 small meals".',
    now: 'Adults get one small meal a day eaten in under two minutes, which can be split in two with the same total. Juveniles two to three.',
    why: 'PetMD.',
    edition: 'Goldfish Care Package 3.0, October 2026.',
  },
  {
    date: '2026-09-25',
    page: '/blog/canary-tank-setup-guide/',
    title: 'Canary Tank Setup',
    was: 'Offered a canary seed mix or a pelleted food as equals.',
    now: 'Pellets at about three quarters of the diet, matching the feeding guide.',
  },
  {
    date: '2026-09-25',
    page: '/blog/cockatoo-feeding-guide/',
    title: 'Cockatoo Feeding',
    was: '75 to 80 percent pellets, with fresh food covering no more than another 20 to 40 percent. The shares could add to more than 100.',
    now: 'Pellets 75 to 80 percent, fresh food the remaining 20 to 25, seed under about 10.',
    why: 'VCA Animal Hospitals.',
    edition: 'Cockatoo Care Package 1.2, October 2026.',
  },
  {
    date: '2026-09-25',
    page: '/blog/quaker-parakeet-feeding-guide/',
    title: 'Quaker Parakeet Feeding',
    was: 'At least 70 percent pellets plus 20 to 40 percent produce, which could add to more than 100. The conure feeding guide had the same arithmetic.',
    now: 'Pellets at least 70 percent, produce the rest up to 30, seed as a treat only. The conure guide was fixed the same way.',
  },
  {
    date: '2026-09-25',
    page: '/blog/african-grey-parrot-legal-guide/',
    title: 'African Grey Parrot Legal Guide',
    was: 'The FAQ told buyers to look for a CITES certificate.',
    now: 'A US-bred bird needs a closed band, not a CITES certificate. CITES controls imports and exports, not sales between states.',
    why: 'US Fish and Wildlife Service CITES fact sheet.',
  },
  {
    date: '2026-09-25',
    page: '/blog/sugar-glider-tank-setup-guide/',
    title: 'Sugar Glider Tank Setup',
    was: 'Pair cage minimum 30 by 18 by 36 inches, with no source behind it.',
    now: '36 by 24 by 36 inches, here and on the hub.',
    why: 'Merck Veterinary Manual.',
  },
  {
    date: '2026-09-25',
    page: '/blog/guinea-pig-handling-guide/',
    title: 'Guinea Pig Handling',
    was: 'Approach from the side.',
    now: 'Approach from the front, on every page that describes picking one up.',
    why: 'RSPCA Australia.',
  },
  {
    date: '2026-09-25',
    page: '/blog/rabbit-health-issues-guide/',
    title: 'Rabbit Health Issues',
    was: 'Uterine cancer in 80 percent of unspayed does aged 5 and older.',
    now: 'Up to 80 percent by 3 years in some strains, which moves the spay decision earlier.',
    why: 'Merck Veterinary Manual.',
    edition: 'Rabbit Care Package 3.0, October 2026.',
  },
  {
    date: '2026-09-25',
    page: '/blog/degu-enrichment-guide/',
    title: 'Degu Enrichment',
    was: 'Sand, not dust, for bathing.',
    now: 'Chinchilla bathing dust, two to three times a week for about 20 minutes, on every degu page.',
    why: 'PetMD.',
  },
  {
    date: '2026-09-25',
    page: '/blog/degu-tank-setup-guide/',
    title: 'Degu Tank Setup',
    was: 'The cage minimum was given three ways across the setup guide, its FAQ and the cost guide, and the wheel as 11 to 12 inches on one page and 12 to 14 on another.',
    now: '28 by 18 by 28 inches for a pair at minimum, and a solid wheel at least 12 inches across, on all three pages.',
  },
  {
    date: '2026-09-25',
    page: '/blog/flying-squirrel-feeding-guide/',
    title: 'Flying Squirrel Feeding',
    was: 'A routine vitamin D3 dusting that contradicted the page\'s own source.',
    now: 'About 80 percent rodent block and 20 percent produce, plain calcium on moist food three times a week and on insects, cuttlebone always in, extra D3 only as a vet-set dose. The health guide and hub match.',
  },
  {
    date: '2026-09-25',
    page: '/blog/tiger-salamander-vs-axolotl-guide/',
    title: 'Tiger Salamander vs Axolotl',
    was: 'Temperature 60 to 72 F and fatal above about 80; handling tolerant with damp hands; lifespan 10 to 20 years.',
    now: '60 to 75 F, never above about 78; handle only when necessary, briefly, with wet powder-free gloves; 12 to 15 years typical, 25 the record. All three now match the species guides.',
  },
  {
    date: '2026-09-25',
    page: '/blog/giant-millipede-tank-setup-guide/',
    title: 'Giant Millipede Tank Setup',
    was: 'A heading said to skip isopods as a cleanup crew and a fun fact said they can harass a millipede, against the guide\'s own body and the hub.',
    now: 'Isopods and springtails are fine as a cleanup crew in a display tank.',
  },
  {
    date: '2026-09-25',
    page: '/blog/small-mammal-temperature-heat-stress-guide/',
    title: 'Small Mammal Temperature and Heat Stress',
    was: 'The key takeaway put the danger line at 80 F while the table on the same page gave guinea pigs at risk from 75 F.',
    now: 'The takeaway is species-dependent, with guinea pigs at risk from 75 F.',
    why: 'RSPCA.',
    edition: 'Guinea Pig Care Package 2.1, September 2026.',
  },
  {
    date: '2026-09-16',
    page: '/blog/bearded-dragon-feeding-guide/',
    title: 'Bearded Dragon Feeding',
    was: 'Not eating for 1 to 4 months during brumation is expected, next to advice to see a vet past about 3.5 months.',
    now: '1 to 3 months is typical, with a vet check past about 3.5 months, matching the brumation guide and the care package.',
    edition: 'Bearded Dragon Care Package was already correct.',
  },
  {
    date: '2026-09-03',
    page: '/blog/reptile-emergency-plan-guide/',
    title: 'Reptile Emergency Plan',
    was: 'The uromastyx act-below night temperature was 75 F, from one manufacturer care sheet, against the setup guide\'s 65 F.',
    now: '68 F is the act-below line and 65 F the hard floor, from a survey of six sources. The manufacturer sheet was dropped.',
    why: 'Chicago Exotics Animal Hospital, Reptile Supply, Dubia.com.',
  },
];

export const REVIEWS = [
  // {
  //   date: '2026-11-01',
  //   page: '/guides/bearded-dragon/',
  //   title: 'Bearded Dragon Care Guide',
  //   reviewer: 'Jane Doe, DVM',
  //   credentials: 'Exotic animal veterinarian, 12 years in reptile practice',
  //   url: 'https://example-exotics-vet.com/our-team/',   // optional: practice, profile or paper; the name links there
  //   scope: 'Husbandry figures, diet by age, and the health red flags section',
  // },
];

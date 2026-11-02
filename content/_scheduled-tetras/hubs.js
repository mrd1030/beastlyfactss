// Held back until each species ships, one species a day (owner, 2026-11-01).
// Nothing imports this file; it sits with the held guides, outside the data
// folders the build checks scan. The cost sheets stay live in costSheets/fish.js. On a species' ship day, move its object back into
// the live array in src/lib/data/guides/fish.js (alphabetical by id), move its six guides from
// content/_scheduled-tetras/ into content/guides/ with the ship date, and drop `planned: true` from its row
// in the tetras group entry in src/lib/data/guides/fish.js. Then add its line to
// RELATED_ARTICLES in src/lib/data/relatedArticles.js, copied from 'ember-tetra'
// (the nine shared aquarium guides plus power-outage-pets-guide), so its hub
// sidebar carries the shared guides.
export const scheduledTetraGuides = [
  {
    id: "black-skirt-tetra",
    name: "Black Skirt Tetra",
    emoji: "🐠",
    difficulty: "Beginner",
    petType: "Fish",
    image: "/assets/guides/black-skirt-tetra.jpg",
    tagline: "The hardy, black-finned schooler that keeps its nipping in the family!",
    seoTitle: "Black Skirt Tetra Care Guide: Tank, School, and Health",
    seoDescription: "Black skirt tetras are hardy but nip fins. Keep a school of 12 in a 20-gallon long at 68 to 79°F, feed once a day, and treat ich fast without the heat cure.",
    funFact: "Every black skirt tetra starts out with ovaries: in fish that become males, the egg tissue breaks down and is replaced as the testes develop.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry. Water changes and the power outage rule cite the shared aquarium
    // guides. The emergency card follows the health guide's three groups. The
    // fin-nipping caution is also carried on the tetras group page
    // (branches.species[].caution), copied from the handling guide
    // (research: research/BLACK_SKIRT_TETRA_RESEARCH.md). Built 2026-10-31.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "How many", value: "Twelve. Kept in a group of 12 or more, they usually turn their nipping on each other instead of their tankmates.", source: "black-skirt-tetra-handling-guide" },
        { label: "Tank size", value: "A 20-gallon long, 30 x 12 inches (75 x 30 cm) across the base, for a school of 12. A 10-gallon is too small.", source: "black-skirt-tetra-tank-setup-guide" },
        { label: "Temperature", value: "68 to 79°F (20 to 26°C), which tops out below an ember or cardinal tank. They eat and move less by about 63°F, so run a heater in any cool room and never set it past 79°F.", source: "black-skirt-tetra-tank-setup-guide" },
        { label: "Water chemistry", value: "pH 6.0 to 7.5 and 5 to 19 dGH. Captive-bred stock adapts well, so tap water that tests inside both bands only needs dechlorinating.", source: "black-skirt-tetra-tank-setup-guide" },
        { label: "Cycle first", value: "Cycle the tank fully before the school goes in, then hold the water steady.", source: "black-skirt-tetra-tank-setup-guide" },
        { label: "Diet", value: "Flake or granules as the daily staple, with small live or frozen foods such as daphnia and bloodworm offered regularly.", source: "black-skirt-tetra-feeding-guide" },
        { label: "Feeding schedule", value: "Once a day for adults, small enough that none of it is left lying on the bottom.", source: "black-skirt-tetra-feeding-guide" },
        { label: "Tankmates", value: "They nip fins, and slow, long-finned fish take the worst of it, so no bettas. Livebearers, danios, rasboras, other tetras, Corydoras and smaller plecos suit them.", source: "black-skirt-tetra-handling-guide" },
        { label: "Acclimation", value: "30 to 60 minutes of adding tank water to the bag in small amounts with the lights off. Net the fish across and throw the bag water away.", source: "black-skirt-tetra-handling-guide" },
        { label: "Quarantine", value: "At least 30 days in their own tank before new fish meet the school.", source: "black-skirt-tetra-health-issues-guide" },
        { label: "Ich", value: "Ich can kill within about two days, so treatment starts the day spots show. Heat goes only to 79°F with an air stone; aquarium salt or an ich medication does the killing.", source: "black-skirt-tetra-health-issues-guide" },
        { label: "Color", value: "Young fish carry the deepest black and turn paler as they mature. A fish that goes darker and sits apart from the school is the one to check.", source: "black-skirt-tetra-health-issues-guide" },
        { label: "GloFish Skirt Tetras", value: "The same species in the same tank, run at 76 to 79°F all year. Adult GloFish handled cold far worse than unrelated adult white skirts in one comparison, though young GloFish showed no gap against their siblings.", source: "black-skirt-tetra-tank-setup-guide" },
        { label: "Water changes", value: "25 to 30% weekly from the substrate, with conditioned water at tank temperature. Test nitrate first: under 20 ppm the routine is right, past 40 ppm the next change is 50%.", source: "aquarium-water-changes-guide" },
        { label: "Budget", value: "About $3 to $6 a fish, GloFish $12 to $13; twelve come to %%animal:black-skirt-tetra%%. Setup roughly %%setup:black-skirt-tetra%%.", source: "black-skirt-tetra-cost-guide" },
        { label: "Lifespan", value: "About 3 to 5 years.", source: "black-skirt-tetra-cost-guide" },
        { label: "Adult size", value: "About 2 to 2.5 inches in aquariums, up to 3 inches (7.5 cm)." },
        { label: "Power outage", value: "Oxygen is the threat, not darkness. Unplug the filter rather than letting it sit dead in the water, and keep the surface moving.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "black-skirt-tetra-health-issues-guide",
      heading: "Test the water first, then act on these today.",
      callNow: [
        "Two or more fish off their food or moving slowly at the same time",
        "A fish found dead: take the body out of the tank before anything else",
        "The whole school gone sluggish and eating less: read the thermometer along with the test kit",
        "Fish piping at the surface or coughing: if the water tests clean, gill flukes are one cause",
        "White spots on the body or fins: start ich treatment today",
        "A fish that turns darker, keeps apart from the school and refuses food while the water tests clean",
      ],
      soonHeading: "Watch and check again tomorrow.",
      soon: [
        "A torn or ragged fin on a single fish",
        "One fish eating less than the others but otherwise behaving normally",
        "A slow run of losses, one fish at a time, with no clear cause",
      ],
      vetLine: "Ich moves fast in this species, so a fish with white spots is treated the same day.",
    },
    routes: [
      { slug: "black-skirt-tetra-cost-guide", line: "$3 to $6 a fish, what GloFish skirts cost, and the %%setup:black-skirt-tetra%% for a 20-gallon long." },
      { slug: "black-skirt-tetra-tank-setup-guide", line: "A 20-gallon long for 12, a cooler 68 to 79°F range, and running a GloFish tank warmer." },
      { slug: "black-skirt-tetra-feeding-guide", line: "Once a day for adults, the live and frozen foods worth adding, and food for fry." },
      { slug: "black-skirt-tetra-handling-guide", line: "Fin nipping and the school of 12 that contains it, which tankmates work, and acclimation." },
      { slug: "black-skirt-tetra-health-issues-guide", line: "Why ich gets treated the same day, the 79°F heat limit, ragged fins and the 30-day quarantine." },
      { slug: "black-skirt-tetra-enrichment-guide", line: "How a startled school passes the alarm faster than any one fish could, and what keeps a big school busy." },
    ],
    buyList: [
      "20-gallon long tank for a school of twelve",
      "Twelve black skirt tetras",
      "Aquarium heater",
      "Sponge filter or a baffled hang-on-back",
      "Sand",
      "Live plants around open water",
      "Liquid water test kit",
      "Water conditioner",
      "Flake or granules",
      "Frozen daphnia or bloodworm",
    ],
    faqs: [
      { q: "What size tank do black skirt tetras need?", a: "A 20-gallon long, 30 x 12 inches (75 x 30 cm) across the base, for a school of 12. The length is the part that counts, because the school uses the open middle of the tank to swim." },
      { q: "How often should I feed black skirt tetras?", a: "Once a day for adults. Keep the meal small enough that none of it is left lying on the bottom, because overfeeding is the usual mistake and it fouls the water." },
      { q: "Can black skirt tetras take the 86°F ich heat treatment?", a: "Not as a plan. 86°F is 7°F past the 79°F top of the species' range, so the tank goes only to 79°F, with an air stone running, and aquarium salt or an ich medication kills the parasite." },
    ],
  },
  {
    id: "glowlight-tetra",
    name: "Glowlight Tetra",
    emoji: "🐠",
    difficulty: "Beginner",
    petType: "Fish",
    image: "/assets/guides/glowlight-tetra.jpg",
    tagline: "The easygoing schooler with a stripe that glows like a lit fuse!",
    seoTitle: "Glowlight Tetra Care Guide: Tank, School, and Health",
    seoDescription: "Glowlight tetras want a school of ten and a tank with a 24 x 15 inch base. Keep the water at 75 to 82°F, feed small and light, and treat ich without heat.",
    funFact: "The glowlight's stripe is a band where the dark pigment cells are missing: the species name, erythrozonus, means red-banded, and a 1917 scientific description called the stripe cherry-red in life.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry. Water changes and the power outage rule cite the shared aquarium
    // guides. The emergency card follows the health guide's three groups
    // (research: research/GLOWLIGHT_TETRA_RESEARCH.md). Built 2026-10-31.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "How many", value: "Ten or more, with six the least that counts as a school.", source: "glowlight-tetra-handling-guide" },
        { label: "Tank size", value: "A base of at least 24 x 15 inches (60 x 38 cm), roughly 18 to 20 gallons, for a school of 10. A 10-gallon falls short of that base.", source: "glowlight-tetra-tank-setup-guide" },
        { label: "Temperature", value: "75 to 82°F (24 to 28°C), held steady with a heater set inside the range. 82°F is the top.", source: "glowlight-tetra-tank-setup-guide" },
        { label: "Water chemistry", value: "pH 5.5 to 7.5 and 2 to 15 dGH. Fish kept on the acidic side of that pH range show more color.", source: "glowlight-tetra-tank-setup-guide" },
        { label: "Cycle first", value: "Cycle the tank fully before the school goes in.", source: "glowlight-tetra-tank-setup-guide" },
        { label: "Plants", value: "A good spread of fine-leaved plants at several heights, with a clear stretch of open water in the middle for the school.", source: "glowlight-tetra-tank-setup-guide" },
        { label: "Diet", value: "Micropellets or small flakes day to day, with bloodworm, daphnia and brine shrimp as live or frozen extras. They take almost anything offered.", source: "glowlight-tetra-feeding-guide" },
        { label: "Feeding schedule", value: "Once or twice a day, each feeding light: only what the school finishes.", source: "glowlight-tetra-feeding-guide" },
        { label: "Acclimation", value: "Dim the room, then add a little tank water to the bag every few minutes for 30 to 60 minutes. Net the fish across and leave the bag water behind.", source: "glowlight-tetra-handling-guide" },
        { label: "Tankmates", value: "Lively and peaceful, at home with other small, calm fish. Not with angelfish: a full-grown angelfish treats a 1.6-inch tetra as food.", source: "glowlight-tetra-handling-guide" },
        { label: "Quarantine", value: "At least 30 days in a separate tank before new fish meet the school.", source: "glowlight-tetra-health-issues-guide" },
        { label: "Ich", value: "No heat cure: most strains die above 86°F and the glowlight's range stops at 82°F. Warm slowly to 82°F with an air stone and treat with an ich medication, in soft water one without copper. Salt is unproven for this species at the 4 to 5 grams per liter that kills ich.", source: "glowlight-tetra-health-issues-guide" },
        { label: "Water changes", value: "25 to 30% weekly from the substrate, with conditioned water at tank temperature. Test nitrate first: under 20 ppm the routine is right, past 40 ppm the next change is 50%.", source: "aquarium-water-changes-guide" },
        { label: "Budget", value: "About $3 to $5 a fish; ten come to %%animal:glowlight-tetra%%. Setup roughly %%setup:glowlight-tetra%%.", source: "glowlight-tetra-cost-guide" },
        { label: "Lifespan", value: "About 2 to 4 years.", source: "glowlight-tetra-cost-guide" },
        { label: "Adult size", value: "About 1.6 inches (4 cm)." },
        { label: "Power outage", value: "Oxygen is the threat, not darkness. Unplug the filter rather than letting it sit dead in the water, and keep the surface moving.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "glowlight-tetra-health-issues-guide",
      heading: "Test ammonia and nitrite first, then act on these today.",
      callNow: [
        "Fish gasping at the surface or breathing fast",
        "Two or more fish showing the same sign at once",
        "A fish found dead: take the body out of the tank before anything else",
        "White spots like grains of salt on the body or fins: start treatment today",
        "Fins that look shortened, ragged or reddened along the edges, worse than the day before",
        "Fast breathing that continues once the water tests clean, since ich can infect the gills",
      ],
      soonHeading: "Watch closely and check again tomorrow.",
      soon: [
        "Flashing: rubbing against plants, glass or substrate",
        "A fish off its food or hanging listless",
        "Fins held clamped against the body",
        "Color fading to dull",
      ],
      vetLine: "Most of what goes wrong starts in the water or arrives with a new fish, so test first and quarantine every newcomer.",
    },
    routes: [
      { slug: "glowlight-tetra-cost-guide", line: "$3 to $5 a fish, the school of ten to price, and the %%setup:glowlight-tetra%% for the tank around them." },
      { slug: "glowlight-tetra-tank-setup-guide", line: "A 24 x 15 inch base for ten, 75 to 82°F, acidic water for color, and planted cover around open water." },
      { slug: "glowlight-tetra-feeding-guide", line: "Once or twice a day, kept light, an easy eater, and food for fry." },
      { slug: "glowlight-tetra-handling-guide", line: "Acclimation over 30 to 60 minutes, the school of ten, and why angelfish are off the list." },
      { slug: "glowlight-tetra-health-issues-guide", line: "Why the ich heat cure stops at 82°F, the 30-day quarantine, and the signs that need action today." },
      { slug: "glowlight-tetra-enrichment-guide", line: "Tannins, leaf litter and planting that bring out the stripe and settle the school." },
    ],
    buyList: [
      "20-gallon tank with a 24 x 15 inch or larger base",
      "Ten glowlight tetras",
      "Aquarium heater",
      "Sponge filter or a baffled hang-on-back",
      "Sand",
      "Fine-leaved live plants",
      "Liquid water test kit",
      "Water conditioner",
      "Micro or nano pellet, or a tropical flake to crush",
      "Frozen brine shrimp or daphnia",
    ],
    faqs: [
      { q: "What size tank do glowlight tetras need?", a: "A tank with a base of at least 24 x 15 inches (60 x 38 cm), roughly 18 to 20 gallons, for a school of 10. A 20-gallon long has the same floor area." },
      { q: "How often should glowlight tetras be fed?", a: "Once or twice a day, keeping each feeding light. Give only what the school finishes, since uneaten food fouls the water." },
      { q: "Can you cure ich in glowlight tetras with heat?", a: "Heat alone will not do it. The temperature that kills most ich strains is 86°F, and a glowlight's range stops at 82°F. Warm the tank slowly up to 82°F with an air stone running to speed the parasite's cycle, and treat with an ich medication. Salt is unproven for this species at the 4 to 5 grams per liter that kills ich." },
    ],
  },
];

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

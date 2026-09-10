// Splice into src/lib/data/guides/amphibians.js at id: "whites-tree-frog". Legal not touched. No cost row until the cost guide is checked.
{
    id: "whites-tree-frog",
    name: "White's Tree Frog",
    emoji: "🐸",
    difficulty: "Beginner",
    petType: "Amphibians",
    image: "/assets/guides/whites-tree-frog.jpg",
    tagline: "Tall tank. Humidity that drops between mistings.",
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Enclosure", value: "18x18x24 inches for one adult. 24x18x24 for two to four. Height matters.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Temperature", value: "Cool side 70 to 75F. Basking 80 to 85F. Mid-70s at night.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Humidity", value: "Baseline 50 to 60%. Mist to 70 to 80% once or twice a day, then let it fall. Constant 70 to 80% is how bacterial issues start.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Water", value: "Dechlorinated tap or spring. Never distilled or RO without minerals added back.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "UVB", value: "Low-output T5 5 to 7%. Branch at least 6 inches below. Replace every 9 to 12 months.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Handling", value: "Plain water on the hands, or wetted powder-free nitrile. No soap, no lotion. 5 to 15 minutes, twice a week at most.", source: "whites-tree-frog-handling-guide" },
      ],
    },
    emergencyCard: {
      source: "whites-tree-frog-health-issues-guide",
      callNow: ["Red legs", "Sitting in the water and not moving", "Cloudy eyes", "Skin that looks burned after a handling session"],
      vetLine: "An exotic vet who sees amphibians. Constant high humidity is the usual cause. Drop the baseline to 50 to 60% and mist, then dry.",
    },
    routes: [
      { slug: "whites-tree-frog-tank-setup-guide", line: "18x18x24, 50 to 60% baseline humidity, mist and let it drop." },
      { slug: "whites-tree-frog-handling-guide", line: "Water-only hands or wetted gloves. Short sessions." },
      { slug: "whites-tree-frog-health-issues-guide", line: "Red-leg and bacterial issues from a tank that never dries." },
      { slug: "whites-tree-frog-feeding-guide", line: "Gut-loaded insects. Do not overfeed a frog that looks fat." },
    ],
    buyList: ["18x18x24 glass terrarium", "Low-watt heat", "Low-output T5 UVB", "Hygrometer", "Coarse bark or coco husk", "Water conditioner", "Powder-free nitrile gloves"],
    faqs: [
      { q: "What size enclosure does a White's tree frog need?", a: "18x18x24 for one. Height is the point." },
      { q: "Should humidity stay at 80%?", a: "No. 50 to 60% baseline. Spike with misting, then let it fall." },
      { q: "Can I use soap before I pick one up?", a: "No. Plain water or wetted gloves." },
    ],
  },

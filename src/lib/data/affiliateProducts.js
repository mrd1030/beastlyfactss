// Amazon Associates product links, sourced from a manual research pass (see affiliate-product-checklist.md).
// Only items with a real vetted affiliate link are listed here - most guides' cost items have no match yet,
// which is expected: this covers the first two research batches (climate control / water quality / hides,
// and substrate). More batches will be added as links are found for the rest of the checklist.

// `category` groups products for the standalone gear page (src/pages/Gear.jsx) - // it has no effect on the CostBuilder matching logic below, which keys off `covers`.
export const AFFILIATE_PRODUCTS = [
  {
    slug: "digital-thermometer-hygrometer-combo",
    product: "Digital thermometer/hygrometer combo",
    category: "Temperature & Humidity Monitoring",
    link: "https://amzn.to/3QHrM81",
    image: "/assets/images/affiliate/product-1.jpg",
    covers: ["Digital thermometer and hygrometer", "Hygrometer and thermometer", "Thermometer and hygrometer", "Digital hygrometer", "Digital thermometer"],
  },
  {
    slug: "infrared-temp-gun",
    product: "Infrared temp gun",
    category: "Temperature & Humidity Monitoring",
    link: "https://amzn.to/4flGgUg",
    image: "/assets/images/affiliate/product-2.jpg",
    covers: ["Digital thermometer (IR gun ideal/recommended)", "Infrared thermometer gun"],
  },
  {
    slug: "uvb-arcadia-desert-12",
    product: "UVB - Arcadia Desert 12% (ProT5 kit, 22\"/24W)",
    category: "Heating & Lighting",
    link: "https://amzn.to/3TipZXE",
    image: "/assets/images/affiliate/product-3.jpg",
    covers: ["Strong desert UVB (T5 HO Arcadia 12%/Desert)", "Strong UVB (T5 HO Arcadia 12%)"],
  },
  {
    slug: "uvb-arcadia-dragon-14",
    product: "UVB - Arcadia Dragon 14% (ProT5 kit, 34\"/39W)",
    category: "Heating & Lighting",
    link: "https://amzn.to/4gUsut1",
    image: "/assets/images/affiliate/product-4.jpg",
    covers: ["Strong desert UVB (T5 HO Arcadia Dragon 12%)"],
  },
  {
    slug: "uvb-arcadia-forest-6",
    product: "UVB - Arcadia Forest 6% (ProT5 kit, 36\"/39W)",
    category: "Heating & Lighting",
    link: "https://amzn.to/3TiqeC4",
    image: "/assets/images/affiliate/product-5.jpg",
    covers: ["Strong UVB (T5 HO Arcadia 6-12%)", "UVB (T5 HO Arcadia 6-12%)", "Moderate UVB (T5 HO Arcadia 6%)"],
  },
  {
    slug: "basking-bulb-75w",
    product: "Basking bulb (standard, 75W)",
    category: "Heating & Lighting",
    link: "https://amzn.to/4bqzQAS",
    image: "/assets/images/affiliate/product-6.jpg",
    covers: ["Basking bulb", "Basking bulb replacement"],
  },
  {
    slug: "basking-dome-fixture",
    product: "Basking dome/fixture",
    category: "Heating & Lighting",
    link: "https://amzn.to/44eEEFH",
    image: "/assets/images/affiliate/product-7.jpg",
    covers: ["Basking bulb + fixture", "Basking heat lamp"],
  },
  {
    slug: "high-wattage-basking-bulb-250w",
    product: "High-wattage basking bulb (250W)",
    category: "Heating & Lighting",
    link: "https://amzn.to/4vfa5L0",
    image: "/assets/images/affiliate/product-8.jpg",
    covers: ["High-wattage basking bulb + fixture"],
  },
  {
    slug: "high-wattage-basking-fixture",
    product: "High-wattage basking fixture (up to 150W)",
    category: "Heating & Lighting",
    link: "https://amzn.to/4ybRSRw",
    image: "/assets/images/affiliate/product-9.jpg",
    covers: ["High-wattage basking setup"],
  },
  {
    slug: "under-tank-heat-mat-thermostat-kit",
    product: "Under-tank heat mat + thermostat kit",
    category: "Heating & Lighting",
    link: "https://amzn.to/44hAxJ1",
    image: "/assets/images/affiliate/product-10.jpg",
    covers: ["Under-tank heater with/+ thermostat", "Heat mat with thermostat", "Heat source with thermostat", "Thermostat-controlled heat source", "Low-wattage heat lamp/mat with thermostat", "Under-tank heater with thermostat"],
  },
  {
    slug: "shallow-water-dish",
    product: "Small/shallow water dish",
    category: "Water & Humidity Care",
    link: "https://amzn.to/44hAzR9", // medium size - a reasonable default; small/large also available
    image: "/assets/images/affiliate/product-12.jpg",
    covers: ["Shallow water dish", "Small shallow water dish", "Small water dish", "Water dish"],
  },
  {
    slug: "large-soakable-water-dish",
    product: "Large soak-able water dish",
    category: "Water & Humidity Care",
    link: "https://amzn.to/4eKyN0W",
    image: "/assets/images/affiliate/product-14.jpg",
    covers: ["Soak-able water dish", "Large soak-able water dish", "Shallow soak dish", "Large water dish"],
  },
  {
    slug: "fine-mist-spray-bottle",
    product: "Fine mist spray bottle",
    category: "Water & Humidity Care",
    link: "https://amzn.to/4vPKMjX",
    image: "/assets/images/affiliate/product-15.jpg",
    covers: ["Misting bottle", "Fine misting bottle", "Spray bottle"],
  },
  {
    slug: "automatic-misting-system-fogger",
    product: "Automatic misting system/fogger",
    category: "Water & Humidity Care",
    link: "https://amzn.to/4fibBY2",
    image: "/assets/images/affiliate/product-16.jpg",
    covers: ["Automatic misting system", "Automatic mister", "Fine mist system", "Mist system or fogger"],
  },
  {
    slug: "cork-bark-round-hide",
    product: "Cork bark round hide",
    category: "Hides & Enclosure Decor",
    link: "https://amzn.to/3SKmfOx",
    image: "/assets/images/affiliate/product-17.jpg",
    covers: ["Cork bark hide", "Cork bark hides", "Cork bark hide(s)", "Cork bark for hiding structures"],
  },
  {
    slug: "climbing-branch-mopani-wood",
    product: "Climbing branch (Mopani wood)",
    category: "Hides & Enclosure Decor",
    link: "https://amzn.to/3QQNV3L",
    image: "/assets/images/affiliate/product-18.jpg",
    covers: ["Branches and cork bark", "Climbing branches", "Sturdy climbing branches", "Branches for climbing/enrichment"],
  },
  {
    slug: "water-test-kit",
    product: "Water test kit",
    category: "Water & Humidity Care",
    link: "https://amzn.to/4p1T7yd",
    image: "/assets/images/affiliate/product-19.jpg",
    covers: ["Water test kit", "Water quality test kit"],
  },
  {
    slug: "water-conditioner",
    product: "Water conditioner",
    category: "Water & Humidity Care",
    link: "https://amzn.to/3Rg5gTT",
    image: "/assets/images/affiliate/product-20.jpg",
    covers: ["Water conditioner", "Dechlorinated/RO water treatment"],
  },
  {
    slug: "bioactive-substrate-mix",
    product: "Bioactive substrate mix",
    category: "Substrate",
    link: "https://amzn.to/4wqEOFU",
    image: "/assets/images/affiliate/product-21.jpg",
    covers: ["Coconut fiber or bioactive substrate", "Bioactive or coconut fiber substrate"],
  },
  {
    slug: "cypress-mulch-substrate",
    product: "Cypress mulch substrate",
    category: "Substrate",
    link: "https://amzn.to/4vNgpe1",
    image: "/assets/images/affiliate/product-22.jpg",
    covers: ["Coconut fiber or cypress mulch substrate", "Cypress mulch or coconut fiber substrate", "Aspen or cypress mulch substrate"],
  },
  {
    slug: "aspen-shavings-substrate",
    product: "Aspen shavings substrate",
    category: "Substrate",
    link: "https://amzn.to/3TkxAVF",
    image: "/assets/images/affiliate/product-23.jpg",
    covers: ["Aspen shavings substrate", "Aspen or coconut fiber substrate"],
  },
  {
    slug: "sphagnum-moss",
    product: "Sphagnum moss (for moist hide)",
    category: "Substrate",
    link: "https://amzn.to/4bpnvNm",
    image: "/assets/images/affiliate/product-24.jpg",
    covers: ["Sphagnum moss for moist hide", "Damp sphagnum moss for moist hide"],
  },
];

// Display order for category sections on the standalone gear page.
export const GEAR_CATEGORY_ORDER = [
  "Heating & Lighting",
  "Temperature & Humidity Monitoring",
  "Water & Humidity Care",
  "Substrate",
  "Hides & Enclosure Decor",
];

// Exact (case-insensitive, whitespace-trimmed) lookup only - deliberately NOT a substring/fuzzy match.
// A prior bug on this site (Komodo Dragon facts appearing on the Bearded Dragon page) came from
// word-overlap matching; cost items are short enough that exact-match coverage is worth the trade-off
// of missing some near-duplicate phrasing rather than risking a wrong product on the wrong item.
const COVERS_INDEX = new Map();
for (const p of AFFILIATE_PRODUCTS) {
  for (const c of p.covers) {
    COVERS_INDEX.set(c.trim().toLowerCase(), p);
  }
}

export function getAffiliateForItem(itemText) {
  if (!itemText) return null;
  return COVERS_INDEX.get(itemText.trim().toLowerCase()) || null;
}

const POSTS_PER_DAY = 2; // bump this (e.g. 3, 4) for more posts/day - one new fact becomes visible per slot
const DAY_MS = 86400000;
const SLOT_MS = DAY_MS / POSTS_PER_DAY;
const EPOCH = Date.UTC(2026, 0, 1);
const WINDOW = 14 * POSTS_PER_DAY; // ~14 days of backlog regardless of cadence, so a slow Publer poll never misses one
const FALLBACK_IMAGE = 'https://beastlyfacts.com/assets/hero-1200.jpg';

const SANITY_PROJECT = '7nqbs1gk';
const SANITY_DATASET = 'production';
const ARTICLES_WINDOW = 40; // most recent posts across MDX + Sanity combined

// Mirrors src/lib/utils/slugify.js exactly - must produce identical output,
// since this is how /facts/:slug matches a fact by title on the frontend.
function slugify(text) {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/\s*&\s*|\s+and\s+/g, '-and-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Only exact, confirmed species matches - add more as real photos get sourced.
// Anything not listed here falls back to the branded hero image.
// Mirrored in src/lib/data/factImages.js for frontend use (gallery page, the
// Image popup on fact cards, per-fact og:image tags) - this Worker file can't
// import that module, so keep both in sync manually when adding a photo.
const ANIMAL_IMAGES = {
  'Bearded Dragon': '/assets/guides/bearded-dragon.jpg',
  'Leopard Gecko': '/assets/guides/leopard-gecko.jpg',
  'Crested Gecko': '/assets/guides/crested-gecko.jpg',
  'Ball Python': '/assets/guides/ball-python.jpg',
  'Rabbit': '/assets/guides/rabbit.jpg',
  'Guinea Pig': '/assets/guides/guinea-pig.jpg',
  'Hedgehog': '/assets/guides/hedgehog.jpg',
  'Axolotl': '/assets/images/fun-facts-axolotl.jpg',
  'Octopus': '/assets/images/fun-facts-octopus.jpg',
  'Cuttlefish': '/assets/images/fun-facts-cuttlefish.jpg',
  'Boa Constrictor': '/assets/images/fun-facts-boa-constrictor.jpg',
  'Wombat': '/assets/facts/wombat.jpg',
  'Narwhal': '/assets/facts/narwhal.jpg',
  'Honey Badger': '/assets/facts/honey-badger.jpg',
  'Cat': '/assets/facts/cat.jpg',
  'Dog': '/assets/facts/dog.jpg',
  'Parrot': '/assets/facts/parrot.jpg',
  'Chameleon': '/assets/facts/chameleon.jpg',
  'Clownfish': '/assets/facts/clownfish.jpg',
  'Dolphin': '/assets/facts/dolphin.jpg',
  'Dolphins': '/assets/facts/dolphin.jpg',
  'Elephant': '/assets/facts/elephant.jpg',
  'Crow': '/assets/facts/crow.jpg',
  'Leafcutter Ant': '/assets/facts/leafcutter-ant.jpg',
  'Wood Frog': '/assets/facts/wood-frog.jpg',
  'Gecko': '/assets/facts/gecko.jpg',
  'Pangolin': '/assets/facts/pangolin.jpg',
  'African Grey Parrot': '/assets/facts/african-grey-parrot.jpg',
  'Tardigrade': '/assets/facts/tardigrade.jpg',
  'Sloth': '/assets/facts/sloth.jpg',
  'Three-Toed Sloth': '/assets/facts/sloth.jpg',
  'Komodo Dragon': '/assets/facts/komodo-dragon.jpg',
  'Flamingo': '/assets/facts/flamingo.jpg',
  'Seahorse': '/assets/facts/seahorse.jpg',
  'Platypus': '/assets/facts/platypus.jpg',
  'Koala': '/assets/facts/koala.jpg',
  'Giraffe': '/assets/facts/giraffe.jpg',
  'Polar Bear': '/assets/facts/polar-bear.jpg',
  'Shark': '/assets/facts/shark.jpg',
  'Hippo': '/assets/facts/hippo.jpg',
  'Zebra': '/assets/facts/zebra.jpg',
  'Wolf': '/assets/facts/wolf.jpg',
  'Snake': '/assets/facts/snake.jpg',
  'Red Panda': '/assets/facts/red-panda.jpg',
  'Jellyfish': '/assets/facts/jellyfish.jpg',
  'Mantis Shrimp': '/assets/facts/mantis-shrimp.jpg',
  'Sea Otter': '/assets/facts/sea-otter.jpg',
  'Butterfly': '/assets/facts/butterfly.jpg',
  'Starfish': '/assets/facts/starfish.jpg',
  'Hummingbird': '/assets/facts/hummingbird.jpg',
  'Alpaca': '/assets/facts/alpaca.jpg',
  'Armadillo': '/assets/facts/armadillo.jpg',
  'Pufferfish': '/assets/facts/pufferfish.jpg',
  'Tortoise': '/assets/facts/tortoise.jpg',
  'Swift': '/assets/facts/swift.jpg',
  'Deer': '/assets/facts/deer.jpg',
  'Goat': '/assets/facts/goat.jpg',
  'Magpie': '/assets/facts/magpie.jpg',
  'Humpback Whale': '/assets/facts/humpback-whale.jpg',
  'Lemur': '/assets/facts/lemur.jpg',
  'Kangaroo': '/assets/facts/kangaroo.jpg',
  'Honeybee': '/assets/facts/honeybee.jpg',
  'Honey Bee': '/assets/facts/honeybee.jpg',
  'Lyrebird': '/assets/facts/lyrebird.jpg',
  'Mimic Octopus': '/assets/facts/mimic-octopus.jpg',
  'Cricket': '/assets/facts/cricket.jpg',
  'Green Sea Turtle': '/assets/facts/green-sea-turtle.jpg',
  'Common House Spider': '/assets/facts/common-house-spider.jpg',
  'Mayfly': '/assets/facts/mayfly.jpg',
  'Kangaroo Rat': '/assets/facts/kangaroo-rat.jpg',
  'Sphynx Cat': '/assets/facts/sphynx-cat.jpg',
  'Sea Turtles': '/assets/facts/sea-turtles.jpg',
  'Box Turtle': '/assets/facts/box-turtle.jpg',
  'California Sea Lion': '/assets/facts/california-sea-lion.jpg',
  'Owl': '/assets/facts/owl.jpg',
  'Reindeer': '/assets/facts/reindeer.jpg',
  'Chicken': '/assets/facts/chicken.jpg',
  'Cheetah': '/assets/facts/cheetah.jpg',
  'Tamarin Monkeys': '/assets/facts/tamarin-monkeys.jpg',
  'Red-footed Booby': '/assets/facts/red-footed-booby.jpg',
  "Wallace's Flying Frog": '/assets/facts/wallaces-flying-frog.jpg',
  'Gentoo and Adélie Penguin': '/assets/facts/penguin.jpg',
  'Capybara': '/assets/facts/capybara.jpg',
  'Sea Sponge': '/assets/facts/sea-sponge.jpg',
  'Pistol Shrimp': '/assets/facts/pistol-shrimp.jpg',
  'Blobfish': '/assets/facts/blobfish.jpg',
  'Bombardier Beetle': '/assets/facts/bombardier-beetle.jpg',
  'Box Jellyfish': '/assets/facts/box-jellyfish.jpg',
  'Cuban Tree Frog': '/assets/facts/cuban-tree-frog.jpg',
  'Hagfish': '/assets/facts/hagfish.jpg',
  'Hairy Frog': '/assets/facts/hairy-frog.jpg',
  'Pen-tailed Tree Shrew': '/assets/facts/pen-tailed-tree-shrew.jpg',
  'Kookaburra': '/assets/facts/kookaburra.jpg',
  'Electric Eel': '/assets/facts/electric-eel.jpg',
  'Wandering Albatross': '/assets/facts/wandering-albatross.jpg',
  'Woodpecker': '/assets/facts/woodpecker.jpg',
  'Bar-Tailed Godwit': '/assets/facts/bar-tailed-godwit.jpg',
  'Peregrine Falcon': '/assets/facts/peregrine-falcon.jpg',
  'Naked Mole Rat': '/assets/facts/naked-mole-rat.jpg',
  'Anglerfish': '/assets/facts/anglerfish.jpg',
  'Sea Cucumber': '/assets/facts/sea-cucumber.jpg',
  'Ocean Sunfish': '/assets/facts/ocean-sunfish.jpg',
  'Giant Squid': '/assets/facts/giant-squid.jpg',
  'Tuatara': '/assets/facts/tuatara.jpg',
  'American Alligator': '/assets/facts/american-alligator.jpg',
  'Draco Lizard': '/assets/facts/draco-lizard.jpg',
  'Star-Nosed Mole': '/assets/facts/star-nosed-mole.jpg',
  'Bat': '/assets/facts/bat.jpg',
  'Elephant Seal': '/assets/facts/elephant-seal.jpg',
  'Basenji': '/assets/facts/basenji.jpg',
  'Alligator': '/assets/facts/american-alligator.jpg',
  'Vulture': '/assets/facts/vulture.jpg',
  'Dung Beetle': '/assets/facts/dung-beetle.jpg',
  'Sperm Whale': '/assets/facts/sperm-whale.jpg',
  'Vampire Bat': '/assets/facts/vampire-bat.jpg',
  'Firefly': '/assets/facts/firefly.jpg',
  'Quokka': '/assets/facts/quokka.jpg',
  'Shoebill': '/assets/facts/shoebill.jpg',
  'Leafy Sea Dragon': '/assets/facts/leafy-sea-dragon.jpg',
  'Thorny Devil': '/assets/facts/thorny-devil.jpg',
  'Glass Frog': '/assets/facts/glass-frog.jpg',
  'Meerkat': '/assets/facts/meerkat.jpg',
  'Secretary Bird': '/assets/facts/secretary-bird.jpg',
  'Vampire Squid': '/assets/facts/vampire-squid.jpg',
  'Gharial': '/assets/facts/gharial.jpg',
  'Aye-aye': '/assets/facts/aye-aye.jpg',
};

// Per-fact overrides, keyed by fact id - takes priority over ANIMAL_IMAGES.
// Use this whenever two facts share the same animal, so each fact still gets
// its own distinct photo instead of looking like duplicate content in the feed.
const FACT_IMAGES = {
  151: '/assets/facts/flamingo-2.jpg', // "The One-Leg Trick" - id 21 keeps flamingo.jpg
  81: '/assets/facts/chameleon-2.jpg', // "Color-Changing Camouflage"
  88: '/assets/facts/chameleon-3.jpg', // "Chameleon Color Change"
  138: '/assets/facts/chameleon-4.jpg', // "Faster Than a Fighter Pilot"
  63: '/assets/facts/dolphin-2.jpg', // "Mirror Test Passers"
  79: '/assets/facts/dolphin-3.jpg', // "Secrets in the Sound"
  105: '/assets/facts/dolphin-4.jpg', // "Glowing Oceans, No Joke!"
  49: '/assets/facts/cat-2.jpg', // "Meow is Just for Us"
  50: '/assets/facts/cat-3.jpg', // "Healing Purr"
  51: '/assets/facts/cat-4.jpg', // "Always Landing Right"
  52: '/assets/facts/cat-5.jpg', // "Lactose Intolerant Cats"
  53: '/assets/facts/cat-6.jpg', // "70% of Life Asleep"
  145: '/assets/facts/cat-7.jpg', // "Can't Taste Sugar"
  148: '/assets/facts/cat-8.jpg', // "Built-In Measuring Tape"
  45: '/assets/facts/dog-2.jpg', // "Unique Nose Prints"
  46: '/assets/facts/dog-3.jpg', // "Dogs Dream Too"
  47: '/assets/facts/dog-4.jpg', // "Born Blind and Deaf"
  48: '/assets/facts/dog-5.jpg', // "Mental Fatigue is Real"
  147: '/assets/facts/dog-6.jpg', // "A Nose Built Different"
  83: '/assets/facts/octopus-2.jpg', // "Silent Signals"
  95: '/assets/facts/octopus-3.jpg', // "Octopus Ink Defense"
  102: '/assets/facts/octopus-4.jpg', // "Silent Swimmers"
  54: '/assets/facts/parrot-2.jpg', // "Parrots Need Company"
  58: '/assets/facts/parrot-3.jpg', // "Mimics Everything"
  40: '/assets/facts/bearded-dragon-2.jpg', // "The Wave of Peace"
  119: '/assets/facts/bearded-dragon-3.jpg', // "Temperature-Switch Dragons"
  86: '/assets/facts/tardigrade-2.jpg', // "The Tardigrade Resilience"
  166: '/assets/facts/tardigrade-3.jpg', // "The Radiation Shield Protein"
  108: '/assets/facts/pangolin-2.jpg', // "Armored Squirrels"
  167: '/assets/facts/pangolin-3.jpg', // "A Tongue Longer Than Its Body"
  99: '/assets/facts/clownfish-2.jpg', // "Fluffy Fish Friends"
  118: '/assets/facts/clownfish-3.jpg', // "Shrimp Anemone Alliance"
  113: '/assets/facts/narwhal-2.jpg', // "Super Sneaky Narwhal"
  109: '/assets/facts/cuttlefish-2.jpg', // "Underwater Fireworks"
  163: '/assets/facts/starfish-2.jpg', // "Stomach on the Outside"
  152: '/assets/facts/seahorse-2.jpg', // "No Stomach, No Problem"
  161: '/assets/facts/mantis-shrimp-2.jpg', // "Married for Twenty Years"
  171: '/assets/facts/hummingbird-2.jpg', // "Flying Backwards, Sleeping Like the Dead"
  97: '/assets/facts/african-grey-parrot-2.jpg', // "Birds Can Count"
  153: '/assets/facts/owl-2.jpg', // "Wings Built for Silence"
  154: '/assets/facts/chicken-2.jpg', // "Never Forgets a Flockmate"
  60: '/assets/facts/crow-2.jpg', // "Crow Tool Users"
  164: '/assets/facts/komodo-dragon-2.jpg', // "A Bite That Won't Clot"
  116: '/assets/facts/gecko-2.jpg', // "Climbing the Walls"
  165: '/assets/facts/box-turtle-2.jpg', // "Sealed Shut Like a Box"
  174: '/assets/facts/american-alligator-2.jpg', // "2,000 Teeth and Counting"
  168: '/assets/facts/axolotl-2.jpg', // "Forever Young, Forever Underwater"
  82: '/assets/facts/honeybee-2.jpg', // "The Tiny Yet Mighty"
  91: '/assets/facts/leafcutter-ant-2.jpg', // "The Snack Time Ant"
  92: '/assets/facts/sloth-2.jpg', // "Sloth Speedsters"
  159: '/assets/facts/honey-badger-2.jpg', // "The Loose-Skin Escape Artist"
  55: '/assets/facts/rabbit-2.jpg', // "Rabbits Need Exercise"
  112: '/assets/facts/hedgehog-2.jpg', // "Cuddle Drones"
  158: '/assets/facts/cheetah-2.jpg', // "Zero to Sixty in Seconds"
  156: '/assets/facts/giraffe-2.jpg', // "Same Neck Bones as You"
  157: '/assets/facts/koala-2.jpg', // "Fingerprints Like Ours"
  173: '/assets/facts/capybara-2.jpg', // "Built-In Snorkel Mode"
  172: '/assets/facts/red-panda-2.jpg', // "A Thumb That Isn't a Thumb"
  160: '/assets/facts/sphynx-cat-2.jpg', // "Always Running Warm"
  170: '/assets/facts/platypus-2.jpg', // "Milk Without Nipples"
  76: '/assets/facts/elephant-2.jpg', // "Hear With Their Feet"
  155: '/assets/facts/zebra-2.jpg', // "Stripes That Repel Flies"
  162: '/assets/facts/sea-otter-2.jpg', // "A Million Hairs Per Inch"
  169: '/assets/facts/wolf-2.jpg', // "The Alpha Wolf Myth"
  150: '/assets/facts/guinea-pig-2.jpg', // "The Vitamin C Shortage"
  98: '/assets/facts/wood-frog-2.jpg', // "Quacks Like a Duck, Hops Like a Frog"
};

function imageFor(fact) {
  const path = FACT_IMAGES[fact.id] || ANIMAL_IMAGES[fact.animal];
  return path ? `https://beastlyfacts.com${path}` : FALLBACK_IMAGE;
}

function cdata(value) {
  return `<![CDATA[${String(value).replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
}

function rssDocument(title, link, description, itemsXml) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${title}</title>
    <link>${link}</link>
    <description>${description}</description>${itemsXml}
  </channel>
</rss>`;
}

async function buildFactsFeed(request) {
  const factsRes = await fetch(new URL('/facts.json', request.url));
  const { facts } = await factsRes.json();

  const slotIndex = Math.floor((Date.now() - EPOCH) / SLOT_MS);

  const items = [];
  for (let i = 0; i < WINDOW; i++) {
    const slot = slotIndex - i;
    const idx = ((slot % facts.length) + facts.length) % facts.length;
    const fact = facts[idx];
    const pubDate = new Date(EPOCH + slot * SLOT_MS);
    items.push({ fact, pubDate, guid: `beastlyfacts-slot-${slot}-fact-${fact.id}` });
  }

  const itemsXml = items
    .map(
      ({ fact, pubDate, guid }) => `
    <item>
      <title>${cdata(`${fact.emoji} ${fact.animal}: ${fact.title}. ${fact.fact}`)}</title>
      <link>https://beastlyfacts.com/facts/${slugify(fact.title)}/</link>
      <guid isPermaLink="false">${guid}</guid>
      <pubDate>${pubDate.toUTCString()}</pubDate>
      <description>${cdata(`${fact.emoji} ${fact.fact}`)}</description>
      <enclosure url="${imageFor(fact)}" type="image/jpeg" length="0" />
    </item>`
    )
    .join('');

  return rssDocument(
    'BeastlyFacts - Daily Animal Fact',
    'https://beastlyfacts.com/facts/',
    'A new wild animal fact, every day.',
    itemsXml
  );
}

// Chronicles live at /chronicles/<id>/<part>/, not /blog/<slug>/ - excluded by
// slug prefix, same convention as prerender.mjs/generate-sitemap.js. They're
// fetched separately below (fetchSanityChronicles) and merged back into the feed.
const SANITY_ARTICLES_QUERY = `*[_type == "post" && defined(slug.current) && !(slug.current match "chronicles-of-*")] | order(publishedAt desc) [0...${ARTICLES_WINDOW}]{
  "slug": slug.current,
  title,
  seoTitle,
  "excerpt": coalesce(seoDescription, excerpt),
  publishedAt,
  "image": coalesce(seoImage.asset->url, mainImage.asset->url)
}`;

// Mirrors CHRONICLES_SERIES in src/lib/chronicles.js / CHRONICLES_PREFIXES in
// prerender.mjs & generate-sitemap.js - stories are matched by slug prefix.
const CHRONICLES_PREFIXES = { dex: 'chronicles-of-dex', otis: 'chronicles-of-otis' };

const SANITY_CHRONICLES_QUERY = `*[_type == "post" && defined(slug.current) && slug.current match "chronicles-of-*"]{
  "slug": slug.current,
  title,
  seoTitle,
  "excerpt": coalesce(seoDescription, excerpt),
  publishedAt,
  "image": coalesce(seoImage.asset->url, mainImage.asset->url)
}`;

async function fetchSanityArticles() {
  try {
    const url = `https://${SANITY_PROJECT}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${encodeURIComponent(SANITY_ARTICLES_QUERY)}`;
    const res = await fetch(url);
    const data = await res.json();
    return (data.result || []).map(p => ({
      slug: p.slug,
      title: p.seoTitle || p.title,
      excerpt: p.excerpt || '',
      date: p.publishedAt,
      image: p.image || null,
    }));
  } catch {
    return []; // Sanity hiccup shouldn't take down the MDX half of the feed
  }
}

async function fetchSanityChronicles() {
  try {
    const url = `https://${SANITY_PROJECT}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${encodeURIComponent(SANITY_CHRONICLES_QUERY)}`;
    const res = await fetch(url);
    const data = await res.json();
    return (data.result || []).map(p => ({
      slug: p.slug,
      title: p.seoTitle || p.title,
      excerpt: p.excerpt || '',
      date: p.publishedAt,
      image: p.image || null,
    }));
  } catch {
    return [];
  }
}

// Assigns each chronicle its live-site link by computing its 1-based position
// within its series, sorted by date - mirrors groupChronicles() in
// src/lib/chronicles.js so RSS links always match the part number the site itself
// renders. Must run over the FULL cross-source list before any date-window slicing,
// or a story could be numbered using only a partial set of its series' parts.
function withChroniclesLinks(chronicles) {
  // A story can briefly exist in both MDX and Sanity mid-migration - keep
  // whichever copy appeared first (callers always spread MDX before Sanity).
  const seenSlugs = new Set();
  const deduped = chronicles.filter(s => {
    if (seenSlugs.has(s.slug)) return false;
    seenSlugs.add(s.slug);
    return true;
  });

  const items = [];
  for (const [id, prefix] of Object.entries(CHRONICLES_PREFIXES)) {
    const seriesStories = deduped
      .filter(s => s.slug.startsWith(prefix))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    seriesStories.forEach((s, i) => {
      items.push({
        ...s,
        link: `https://beastlyfacts.com/chronicles/${id}/${i + 1}/`,
        guid: `beastlyfacts-chronicle-${s.slug}`,
      });
    });
  }
  return items;
}

async function buildArticlesFeed(request) {
  const mdxRes = await fetch(new URL('/articles.json', request.url));
  const { articles: mdxArticles, chronicles: mdxChronicles = [] } = await mdxRes.json();
  const [sanityArticles, sanityChronicles] = await Promise.all([
    fetchSanityArticles(),
    fetchSanityChronicles(),
  ]);

  const blogItems = [...mdxArticles, ...sanityArticles].map(a => ({
    ...a,
    link: `https://beastlyfacts.com/blog/${a.slug}/`,
    guid: `beastlyfacts-post-${a.slug}`,
  }));
  const chronicleItems = withChroniclesLinks([...mdxChronicles, ...sanityChronicles]);

  const merged = [...blogItems, ...chronicleItems]
    .filter(a => a.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, ARTICLES_WINDOW);

  const itemsXml = merged
    .map(({ title, excerpt, date, image, link, guid }) => {
      const imageUrl = image
        ? (image.startsWith('http') ? image : `https://beastlyfacts.com${image}`)
        : FALLBACK_IMAGE;
      return `
    <item>
      <title>${cdata(excerpt ? `${title}. ${excerpt}` : title)}</title>
      <link>${link}</link>
      <guid isPermaLink="false">${guid}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
      <description>${cdata(excerpt)}</description>
      <enclosure url="${imageUrl}" type="image/jpeg" length="0" />
    </item>`;
    })
    .join('');

  return rssDocument(
    'BeastlyFacts - Latest Articles',
    'https://beastlyfacts.com/blog/',
    'New care guides, fun facts articles, blog posts, and Chronicles episodes from BeastlyFacts.',
    itemsXml
  );
}

export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);
    const rss =
      pathname === '/articles.xml' ? await buildArticlesFeed(request) : await buildFactsFeed(request);

    return new Response(rss, {
      headers: { 'content-type': 'application/rss+xml; charset=utf-8' },
    });
  },
};

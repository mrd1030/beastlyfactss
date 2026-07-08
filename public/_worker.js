const POSTS_PER_DAY = 2; // bump this (e.g. 3, 4) for more posts/day - one new fact becomes visible per slot
const DAY_MS = 86400000;
const SLOT_MS = DAY_MS / POSTS_PER_DAY;
const EPOCH = Date.UTC(2026, 0, 1);
const WINDOW = 14 * POSTS_PER_DAY; // ~14 days of backlog regardless of cadence, so a slow Publer poll never misses one
const FALLBACK_IMAGE = 'https://beastlyfacts.com/assets/hero-1200.jpg';

const SANITY_PROJECT = '7nqbs1gk';
const SANITY_DATASET = 'production';
const ARTICLES_WINDOW = 40; // most recent posts across MDX + Sanity combined

// Only exact, confirmed species matches - add more as real photos get sourced.
// Anything not listed here falls back to the branded hero image.
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
};

function imageFor(animal) {
  const path = ANIMAL_IMAGES[animal];
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
      <guid isPermaLink="false">${guid}</guid>
      <pubDate>${pubDate.toUTCString()}</pubDate>
      <description>${cdata(`${fact.emoji} ${fact.fact}`)}</description>
      <enclosure url="${imageFor(fact.animal)}" type="image/jpeg" length="0" />
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
// slug prefix, same convention as prerender.mjs/generate-sitemap.js.
const SANITY_ARTICLES_QUERY = `*[_type == "post" && defined(slug.current) && !(slug.current match "chronicles-of-*")] | order(publishedAt desc) [0...${ARTICLES_WINDOW}]{
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

async function buildArticlesFeed(request) {
  const mdxRes = await fetch(new URL('/articles.json', request.url));
  const { articles: mdxArticles } = await mdxRes.json();
  const sanityArticles = await fetchSanityArticles();

  const merged = [...mdxArticles, ...sanityArticles]
    .filter(a => a.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, ARTICLES_WINDOW);

  const itemsXml = merged
    .map(({ slug, title, excerpt, date, image }) => {
      const link = `https://beastlyfacts.com/blog/${slug}/`;
      const imageUrl = image
        ? (image.startsWith('http') ? image : `https://beastlyfacts.com${image}`)
        : FALLBACK_IMAGE;
      return `
    <item>
      <title>${cdata(excerpt ? `${title}. ${excerpt}` : title)}</title>
      <link>${link}</link>
      <guid isPermaLink="false">beastlyfacts-post-${slug}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
      <description>${cdata(excerpt)}</description>
      <enclosure url="${imageUrl}" type="image/jpeg" length="0" />
    </item>`;
    })
    .join('');

  return rssDocument(
    'BeastlyFacts - Latest Articles',
    'https://beastlyfacts.com/blog/',
    'New care guides, fun facts articles, and blog posts from BeastlyFacts.',
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

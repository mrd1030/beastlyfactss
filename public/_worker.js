const DAY_MS = 86400000;
const EPOCH = Date.UTC(2026, 0, 1);
const WINDOW = 14;
const FALLBACK_IMAGE = 'https://beastlyfacts.com/assets/hero-1200.jpg';

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
};

function imageFor(animal) {
  const path = ANIMAL_IMAGES[animal];
  return path ? `https://beastlyfacts.com${path}` : FALLBACK_IMAGE;
}

function cdata(value) {
  return `<![CDATA[${String(value).replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
}

export default {
  async fetch(request) {
    const factsRes = await fetch(new URL('/facts.json', request.url));
    const { facts } = await factsRes.json();

    const dayIndex = Math.floor((Date.now() - EPOCH) / DAY_MS);

    const items = [];
    for (let i = 0; i < WINDOW; i++) {
      const day = dayIndex - i;
      const idx = ((day % facts.length) + facts.length) % facts.length;
      const fact = facts[idx];
      const pubDate = new Date(EPOCH + day * DAY_MS);
      items.push({ fact, pubDate, guid: `beastlyfacts-day-${day}-fact-${fact.id}` });
    }

    const itemsXml = items
      .map(
        ({ fact, pubDate, guid }) => `
    <item>
      <title>${cdata(`${fact.animal}: ${fact.title}`)}</title>
      <link>https://beastlyfacts.com/facts/</link>
      <guid isPermaLink="false">${guid}</guid>
      <pubDate>${pubDate.toUTCString()}</pubDate>
      <description>${cdata(`${fact.emoji} ${fact.fact}`)}</description>
      <enclosure url="${imageFor(fact.animal)}" type="image/jpeg" length="0" />
    </item>`
      )
      .join('');

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>BeastlyFacts — Daily Animal Fact</title>
    <link>https://beastlyfacts.com/facts/</link>
    <description>A new wild animal fact, every day.</description>${itemsXml}
  </channel>
</rss>`;

    return new Response(rss, {
      headers: { 'content-type': 'application/rss+xml; charset=utf-8' },
    });
  },
};

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

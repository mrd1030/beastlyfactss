const DAY_MS = 86400000;
const EPOCH = Date.UTC(2026, 0, 1);
const WINDOW = 14;

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

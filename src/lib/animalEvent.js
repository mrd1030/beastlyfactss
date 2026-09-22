// Resolves "is an animal awareness day happening right now, and which article
// should we put in front of it".
//
// Kept separate from the component so the date logic is testable on its own and
// so nothing here reaches for facts.js or the guides barrel - the homepage
// graph does not carry those, and pulling one in for a promo band would repeat
// the 507 KB GuideSpotlight mistake. Everything below runs off
// articles-index.json, which the homepage already loads for CategoryBrowse.
import { ANIMAL_EVENTS, EVENT_WINDOW_DAYS } from '@/lib/data/animalEvents';
import { matchesAnimal } from '@/lib/utils/matchAnimal';

const DAY_MS = 24 * 60 * 60 * 1000;

// Compared in UTC throughout. A visitor's local midnight is not worth chasing
// here - the window is several days wide, so an hours-level offset at the edge
// changes nothing anyone would notice.
const utcDay = (y, m, d) => Date.UTC(y, m - 1, d);

// An event is active for EVENT_WINDOW_DAYS either side of its date, so the band
// is up for about a week rather than a single day. Fixed-date events are
// checked against both this year and the neighbouring year, so a window
// spanning New Year (a Jan 2 event on Dec 31) still resolves.
function activeWindow(event, now) {
  const year = now.getUTCFullYear();

  if (event.ranges) {
    const range = event.ranges[year];
    if (!range) return null;
    const [sm, sd] = range.start.split('-').map(Number);
    const [em, ed] = range.end.split('-').map(Number);
    const start = utcDay(year, sm, sd);
    const end = utcDay(year, em, ed);

    // Floating single-day observances (World Pangolin Day is the third
    // Saturday, so it moves every year) are declared per-year the same way a
    // multi-day run is, but they are still a DAY. Giving them a centre puts
    // them in the exact-date tier, so they behave like a fixed date rather
    // than being treated as a run that can outrank its neighbours. Without
    // this, "third Saturday of February" would quietly outrank a real
    // fixed-date event sitting next to it.
    if (start === end) {
      const from = start - EVENT_WINDOW_DAYS * DAY_MS;
      const to = start + EVENT_WINDOW_DAYS * DAY_MS;
      return now.getTime() >= from && now.getTime() <= to ? { start: from, end: to, centre: start } : null;
    }

    // `end` is that date's midnight, so add a day to cover it fully. Strictly
    // less than, or the following midnight would still count as inside and a
    // run ending the 19th would light up on the 20th.
    return now.getTime() >= start && now.getTime() < end + DAY_MS ? { start, end } : null;
  }

  for (const y of [year - 1, year, year + 1]) {
    const centre = utcDay(y, event.month, event.day);
    const start = centre - EVENT_WINDOW_DAYS * DAY_MS;
    const end = centre + EVENT_WINDOW_DAYS * DAY_MS;
    if (now.getTime() >= start && now.getTime() <= end) return { start, end, centre };
  }
  return null;
}

// Overlap resolution, in three tiers. August packs four observances into ten
// days and Shark Week straddles World Snake Day, so this is not hypothetical.
//
// Tier 0, a fixed-date event on its ACTUAL date. Nothing displaces a day from
// the day it is named after.
// Tier 1, a multi-day run such as Shark Week. It outranks the single days
// around it, because a week-long event reduced to a couple of days by a
// neighbour is backwards, but tier 0 means it never erases one either: before
// this, Shark Week kept 3 of its 8 days; now it keeps 7 and World Snake Day
// still owns July 16.
// Tier 2, everything else, nearest date first, so the band hands over cleanly
// mid-window instead of sticking on whichever event was declared first.
const DAY_TIER_EXACT = 0;
const DAY_TIER_RANGE = 1;
const DAY_TIER_NEAR = 2;

// Every event running today, best first. Returning the ranked list rather than
// only the winner matters because several events have no article yet: if the
// top-ranked one is dormant, the caller falls through to the next instead of
// blanking a day another live event was covering anyway.
export function getActiveEvents(now = new Date()) {
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());

  return ANIMAL_EVENTS
    .map((event) => {
      const window = activeWindow(event, now);
      if (!window) return null;
      return {
        event,
        tier: window.centre === today ? DAY_TIER_EXACT
          : event.ranges ? DAY_TIER_RANGE
            : DAY_TIER_NEAR,
        distance: Math.abs((window.centre ?? window.start) - now.getTime()),
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.tier - b.tier || a.distance - b.distance)
    .map((entry) => entry.event);
}

export function getActiveEvent(now = new Date()) {
  return getActiveEvents(now)[0] ?? null;
}

// Multi-animal recap posts ("Green Anole, Tegu, Toad & Salamander") match an
// event's animal list as readily as a dedicated article does, and being recent
// they were winning on date. A roundup is a weak thing to lead World Snake Day
// with when a real snake guide exists, so they sort last within their tier
// rather than being excluded - if a roundup is genuinely the only match, it is
// still better than an empty band.
const isRoundup = (article) => /-overview$/.test(article.slug);

// Best article for an event.
//
// The category fallback applies ONLY to events that name no animals, such as
// World Animal Day. When an event does name animals and none of them have an
// article yet, this returns null and the band stays hidden: the site has no
// lion, elephant, rhino, penguin or sloth article, and before this rule those
// five days all resolved to whatever the newest Wild Animals post happened to
// be. Pointing World Lion Day at an article about jellyfish is worse than
// showing nothing. Those events stay in the calendar deliberately, so each one
// lights up by itself the day its article exists.
export function getEventArticle(event, articles) {
  if (!event || !Array.isArray(articles)) return null;

  const rank = (a, b) => (isRoundup(a) - isRoundup(b)) || String(b.date).localeCompare(String(a.date));

  if (event.animals?.length) {
    // `exclude` covers the case matchesAnimal cannot: an animal name appearing
    // as a MODIFIER rather than the head of a compound. "Tiger Salamander"
    // contains the whole word "tiger", so International Tiger Day matched the
    // salamander care guides. matchesAnimal is right to allow it in general -
    // "Corn Snake" should match "Snake" - and it is verified across 151
    // encyclopedia and guide pages, so the narrow fix belongs here rather than
    // in the shared matcher.
    const excluded = (article) =>
      event.exclude?.some((name) => matchesAnimal(article.title, name));
    const matches = articles
      .filter((article) => !excluded(article)
        && event.animals.some((animal) => matchesAnimal(article.title, animal)))
      .sort(rank);
    return matches[0] ?? null;
  }

  const inCategory = (article) => {
    const list = article.categories?.length ? article.categories : [article.category];
    return list.some((c) => event.categories?.includes(c));
  };
  return articles.filter(inCategory).sort(rank)[0] ?? null;
}

// Convenience for the component: null when there is nothing to show, which is
// most of the year.
export function getFeaturedEvent(articles, now = new Date()) {
  for (const event of getActiveEvents(now)) {
    const article = getEventArticle(event, articles);
    if (article) return { event, article };
  }
  return null;
}

// The date an event falls on in a given year, as { month, day }, or null when
// the event is dormant that year (a floating observance with no `ranges` entry
// for it). /animal-days/ renders the calendar off this, so a date lives in
// exactly one place: an article never states its own date and cannot drift
// from the one the homepage band fires on.
//
// Floating events declare start and end even when they are a single day, so a
// run returns its opening date here. The calendar shows a run by its start.
export function resolveEventDate(event, year) {
  if (!event) return null;
  if (event.ranges) {
    const range = event.ranges[year];
    if (!range) return null;
    const [month, day] = range.start.split('-').map(Number);
    return { month, day };
  }
  if (!event.month || !event.day) return null;
  return { month: event.month, day: event.day };
}

// Lowercased, singularised whole words, so the containment test below reads
// "Lions Are the Only Cat" as carrying "lion". Mirrors the singulariser inside
// matchAnimal.js, which does not export it.
function normalize(text) {
  return String(text || '')
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter(Boolean)
    .map((word) => {
      if (word.endsWith('ies') && word.length > 4) return `${word.slice(0, -3)}y`;
      if (/(sh|ch|ss|x|z)es$/.test(word)) return word.slice(0, -2);
      if (word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1);
      return word;
    })
    .join(' ');
}

// An article is "about the animal" if it is a Fact File or a fact roundup.
//
// Everything else that matches an event's animals is husbandry: the shopping
// list, the bioactive setup, why the parrot screams, why the rabbit needs hay.
// Those are guides in everything but the slug, and a day page listing them is
// a care catalogue with a date on it. Filtering on the -guide suffix alone let
// all of them through, which is why membership keys on the site's own factFile
// flag instead of on the URL.
const isAnimalArticle = (post) =>
  Boolean(post?.factFile) || /^10-surprising-.+-facts$/.test(post?.slug?.current || post?.slug || '');

const slugOf = (post) => post?.slug?.current || post?.slug || '';

// Every Fact File, fact roundup and Beastfile about an event's animals.
//
// Reuses matchesAnimal, so it inherits the head-final rule ("Corn Snake" counts
// for World Snake Day) and the event's own `exclude` list for the cases that
// rule gets wrong. The day's own article is passed in as `ownSlug` and dropped,
// since it is already rendered above the list.
export function getEventAnimalContent(event, posts, beastfiles, ownSlug) {
  const names = event?.animals || [];
  if (!names.length) return { articles: [], files: [] };

  // Deliberately NOT matchesAnimal. That matcher is bidirectional, so
  // matchesAnimal('Tiger', 'Tiger Salamander') is true and the Tiger Beastfile,
  // named exactly "Tiger", was being excluded from International Tiger Day by
  // its own salamander guard. An exclude entry means "this text is about the
  // other animal", which is a one-way containment test: the text has to carry
  // the excluded name, not the other way round.
  const excluded = (text) => {
    const words = normalize(text);
    return (event.exclude || []).some((name) => {
      const needle = normalize(name);
      return needle.length > 0 && new RegExp(`(^| )${needle}( |$)`).test(words);
    });
  };
  const hits = (text) => Boolean(text) && !excluded(text) && names.some((n) => matchesAnimal(text, n));

  const articles = (posts || [])
    .filter(isAnimalArticle)
    .filter((p) => slugOf(p) !== ownSlug)
    .filter((p) => hits(p.title) || hits(p.animal))
    .sort((a, b) => a.title.localeCompare(b.title));

  const files = (beastfiles || [])
    .filter((f) => hits(f.name))
    .sort((a, b) => a.name.localeCompare(b.name));

  return { articles, files };
}

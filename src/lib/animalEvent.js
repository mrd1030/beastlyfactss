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
    return now.getTime() >= start && now.getTime() <= end + DAY_MS ? { start, end } : null;
  }

  for (const y of [year - 1, year, year + 1]) {
    const centre = utcDay(y, event.month, event.day);
    const start = centre - EVENT_WINDOW_DAYS * DAY_MS;
    const end = centre + EVENT_WINDOW_DAYS * DAY_MS;
    if (now.getTime() >= start && now.getTime() <= end) return { start, end, centre };
  }
  return null;
}

// If two events overlap, the one whose centre is nearest wins, so the band
// switches over cleanly mid-window rather than sticking on whichever was
// declared first. August has three observances inside eight days, so this is
// not hypothetical.
export function getActiveEvent(now = new Date()) {
  let best = null;
  for (const event of ANIMAL_EVENTS) {
    const window = activeWindow(event, now);
    if (!window) continue;
    const distance = Math.abs((window.centre ?? window.start) - now.getTime());
    if (!best || distance < best.distance) best = { event, distance };
  }
  return best?.event ?? null;
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
    const matches = articles
      .filter((article) => event.animals.some((animal) => matchesAnimal(article.title, animal)))
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
  const event = getActiveEvent(now);
  if (!event) return null;
  const article = getEventArticle(event, articles);
  return article ? { event, article } : null;
}

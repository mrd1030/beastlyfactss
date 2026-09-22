import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { ArrowRight } from 'lucide-react';
import { mdxPosts } from '@/lib/mdxPosts';
import { ANIMAL_EVENTS } from '@/lib/data/animalEvents';
import { resolveEventDate, getEventAnimalContent } from '@/lib/animalEvent';
// The teaser file, not the beastlypedia barrel: this needs id and name only,
// and the full content module is 94KB of overview and funFacts prose that
// would land in this page's chunk for nothing.
import beastfileTeasers from '@/lib/generated/beastlypedia-teaser.json';
import CrossLinkCta from '@/components/shared/CrossLinkCta';
import buildStamp from '@/lib/generated/build-stamp.json';
import { siteToday } from '@/lib/utils/date';

// Membership is the `animalDay` frontmatter flag, not a category, for the same
// reason Fact Files uses one: a category would make this page a mirror of the
// /blog/category/<x>/ listing the site already generates for free. The flag's
// value is an ANIMAL_EVENTS id, so an article never states its own date. The
// date resolves from the event, which is also what the homepage band fires on,
// so the two can never disagree.
//
// This page is the only place on the site that answers "when is X day". The
// researched calendar was briefly a blog article as well, which would have put
// two URLs in front of the same query; it lives here instead.

// Editorial notes per event, kept here rather than in animalEvents.js so the
// data file stays what the homepage band needs and nothing more. Every claim
// below traces to the sources at the foot of this page. An event with no note
// falls back to its own blurb.
const EVENT_NOTES = {
  'world-wildlife-day':
    'The strongest credential on the calendar. The UN General Assembly adopted it in 2013, and the date is the anniversary of the signing of CITES in 1973.',
  'world-pangolin-day':
    'Pangolins are widely described as the most trafficked wild mammal in the world. Eight species survive, four in Africa and four in Asia, and all of them are threatened.',
  'world-bee-day':
    'A UN observance, adopted in 2017 on Slovenia’s proposal. The date is the birthday of Anton Janša, the eighteenth century Slovenian beekeeper.',
  'world-turtle-day': 'Created by American Tortoise Rescue in 2000.',
  'world-parrot-day':
    'Started by the World Parrot Trust in 2004, originally to push for an end to wild-caught bird imports into the EU.',
  'world-oceans-day':
    'Proposed at the 1992 Earth Summit in Rio and formally recognised by the UN in 2008.',
  'world-sea-turtle-day':
    'The birthday of Archie Carr, the biologist whose work founded modern sea turtle conservation.',
  'world-giraffe-day':
    'Run by the Giraffe Conservation Foundation and set on the solstice, on the reasoning that the longest day suits the tallest animal.',
  'international-tiger-day':
    'Agreed at the 2010 Saint Petersburg Tiger Summit, where the thirteen tiger range countries committed to doubling wild tiger numbers by 2022.',
  'world-elephant-day': 'Launched in 2012.',
  'national-honey-bee-day':
    'A US observance, and a separate thing from the UN’s World Bee Day in May.',
  'world-rhino-day':
    'Started by WWF South Africa in 2010. All five surviving species are covered by it.',
  'world-animal-day':
    'The oldest of them, founded in 1925. The reason it sits on 4 October is a booking problem rather than anything to do with animals.',
  'world-octopus-day':
    'Started in 2007 by members of TONMO, an octopus enthusiast forum, as the opening day of Cephalopod Awareness Days. The date was chosen for the eight arms.',
  'international-sloth-day':
    'Founded in 2010 by AIUNAU, a Colombian wildlife foundation, after the first international meeting on sloth welfare and conservation in Medellín. This is the date most calendars get wrong.',
  'reptile-awareness-day':
    'A US observance with genuinely unclear origins. No founding organization claims it, and the earliest solid traces are promotion by reptile publications and conservation groups.',
  'international-wombat-day':
    'Also unattributed. The date appears to go back to 2005, and the usual explanation about Australian spring planting is folklore with no sourced account behind it.',
  'national-bird-day':
    'A US observance, run alongside the Avian Welfare Coalition’s campaigning on the captive bird trade.',
  'world-frog-day':
    'Amphibians are the most threatened vertebrate class on Earth, which gives the day more weight than its branding suggests.',
  'world-penguin-day':
    'Timed to the annual northward migration of Adélie penguins from Antarctica.',
};

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// The floating ones, stated as the rule rather than a number. A reader
// scheduling against these needs the rule; the resolved date beside it is a
// convenience, not the source of truth.
const FLOATING_RULES = {
  'world-pangolin-day': 'Third Saturday in February',
  'international-sloth-day': 'Third Saturday in October',
  'international-rabbit-day': 'Fourth Saturday in September',
};

const slugOf = (post) => post?.slug?.current || post?.slug || '';

// Shown inline before the rest goes behind an expander. Four, because the
// distribution decides it: 21 of the 32 days carry one to three links and
// would gain nothing but a click from being collapsed. Only World Oceans Day
// (17) and World Wildlife Day (7) are ever over the line.
const INLINE_LINKS = 4;

// The Beastfiles and Fact Files for one day's animals, as a single run of
// links. Collapsed content is still crawled and still passes link equity, so
// the expander costs nothing in search and is purely about not handing someone
// a wall of seventeen ocean links.
function AnimalLinks({ files, articles }) {
  const [open, setOpen] = useState(false);
  const items = useMemo(
    () => [
      ...files.map((f) => ({ key: `bf-${f.id}`, to: `/beastlypedia/${f.id}/`, label: f.name })),
      ...articles.map((a) => ({ key: slugOf(a), to: `/blog/${slugOf(a)}/`, label: a.title })),
    ],
    [files, articles],
  );
  if (!items.length) return null;

  const shown = open ? items : items.slice(0, INLINE_LINKS);
  const hidden = items.length - shown.length;

  return (
    <p className="mt-1.5 font-body text-xs leading-relaxed text-muted-foreground">
      {shown.map((item, i) => (
        <React.Fragment key={item.key}>
          {i > 0 && <span className="mx-1.5 text-muted-foreground/40" aria-hidden="true">&middot;</span>}
          <Link to={item.to} className="text-secondary hover:underline">{item.label}</Link>
        </React.Fragment>
      ))}
      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="ml-1.5 font-semibold text-muted-foreground underline underline-offset-2 hover:text-foreground"
        >
          {`+${hidden} more`}
        </button>
      )}
    </p>
  );
}

const ordinal = (n) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export default function AnimalDays() {
  // Today starts as the build date so the prerendered HTML and the first client
  // render agree, then upgrades to the real site date after mount. Reading the
  // live clock during render is the hydration mismatch CritterDigestPreview
  // documents, and "what is next" is exactly the kind of value that differs
  // between a capture and a visit days later.
  const [today, setToday] = useState(buildStamp.generatedAt);
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setToday(siteToday());
  }, []);

  const year = Number(today.slice(0, 4));

  const { byMonth, dated, floating, upcoming } = useMemo(() => {
    const articleFor = new Map();
    for (const post of mdxPosts) {
      if (post.animalDay) articleFor.set(post.animalDay, post);
    }

    const rows = ANIMAL_EVENTS.map((event) => {
      const date = resolveEventDate(event, year);
      const article = articleFor.get(event.id) || null;
      return {
        event,
        date,
        rule: FLOATING_RULES[event.id] || null,
        note: EVENT_NOTES[event.id] || event.blurb || '',
        article,
        ...getEventAnimalContent(event, mdxPosts, beastfileTeasers, article?.slug?.current),
      };
    });

    const withDate = rows.filter((r) => r.date);
    withDate.sort((a, b) => a.date.month - b.date.month || a.date.day - b.date.day);

    const grouped = new Map();
    for (const row of withDate) {
      const key = row.date.month;
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key).push(row);
    }

    // What is next, from today, wrapping into next year when December runs out.
    // A day resolves for next year only if its rule does: a floating event with
    // no `ranges` entry for the following year is left out rather than guessed
    // at, which is the same refusal the rest of the page makes.
    const stamp = (y, d) => `${y}-${String(d.month).padStart(2, '0')}-${String(d.day).padStart(2, '0')}`;
    const ahead = withDate
      .filter((r) => stamp(year, r.date) >= today)
      .map((r) => ({ row: r, on: stamp(year, r.date), year }));
    const nextYear = ANIMAL_EVENTS
      .map((event) => ({ event, date: resolveEventDate(event, year + 1) }))
      .filter((r) => r.date)
      .map(({ event, date }) => {
        const row = rows.find((x) => x.event.id === event.id);
        return { row: { ...row, date }, on: stamp(year + 1, date), year: year + 1 };
      })
      .sort((a, b) => a.on.localeCompare(b.on));

    return {
      byMonth: [...grouped.entries()].sort((a, b) => a[0] - b[0]),
      dated: withDate,
      floating: rows.filter((r) => r.rule),
      upcoming: [...ahead, ...nextYear].slice(0, 3),
    };
  }, [year, today]);

  const pageTitle = `Animal Awareness Days: The ${year} Calendar | Beastly Facts`;
  const pageDescription =
    'Every animal awareness day with the date its founder set. Three of them move every year, and most published calendars still print those three as fixed.';
  const canonicalUrl = 'https://beastlyfacts.com/animal-days/';

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Animal awareness days, ${year}`,
    itemListElement: dated.map((row, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${row.event.name}, ${row.date.day} ${MONTHS[row.date.month - 1]}`,
      ...(row.article ? { url: `https://beastlyfacts.com/blog/${row.article.slug.current}/` } : {}),
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which animal awareness days change date every year?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Three of the widely observed ones. World Pangolin Day is the third Saturday in February, International Sloth Day is the third Saturday in October, and International Rabbit Day is the fourth Saturday in September. Any calendar printing those as fixed numbers is wrong in most years.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is International Sloth Day on 20 October?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, though a great many calendars say so. AIUNAU, the Colombian foundation that created the day in 2010, sets it as the third Saturday in October. 20 October was the third Saturday in 2013 and has been reprinted ever since.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who decides what becomes an animal awareness day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nobody centrally. Some are UN observances adopted by General Assembly resolution, such as World Wildlife Day. Others were started by a single conservation charity, a hobbyist forum, or an anonymous person with a web page. There is no registry, which is why the dates drift between sources.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen px-4 pb-16 pt-12 sm:px-6">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <span className="mb-1 block text-2xl">📅</span>
          <h1 className="mb-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Animal Days
          </h1>
          <div className="max-w-2xl space-y-3 font-body text-sm text-muted-foreground">
            <p>
              An animal awareness day is not an official thing. There is no registry and no
              authority handing out dates. Some were adopted by United Nations General Assembly
              resolution. Others were invented by one conservation charity, a hobbyist forum, or a
              single person who made a web page and waited to see if it stuck.
            </p>
            <p>
              That decides who you believe about the date. When the UN sets an observance, the date
              is in a resolution and it does not move. When a Colombian sloth foundation sets one,
              the foundation&rsquo;s own site is the record, and if it says the third Saturday in
              October then that is the date, no matter how many calendars have copied 20 October off
              each other.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <CrossLinkCta to="/beastlypedia/" label="Browse Beastlypedia" className="" />
            <CrossLinkCta to="/fact-files/" label="Browse Fact Files" className="" />
          </div>
        </motion.div>

        {upcoming.length > 0 && (
          <section className="mb-8 rounded-xl border border-secondary/30 bg-secondary/5 p-5">
            <h2 className="mb-3 font-display text-lg font-bold text-foreground">Next up</h2>
            <ul className="space-y-3">
              {upcoming.map(({ row, on, year: onYear }) => (
                <li key={on + row.event.id} className="flex flex-wrap items-baseline gap-x-2 font-body text-sm">
                  <span aria-hidden="true">{row.event.emoji}</span>
                  <span className="font-semibold text-foreground">{row.event.name}</span>
                  <span className="text-muted-foreground">
                    {`${ordinal(row.date.day)} ${MONTHS[row.date.month - 1]}`}
                    {onYear !== year ? ` ${onYear}` : ''}
                  </span>
                  {row.article && (
                    <Link
                      to={`/blog/${row.article.slug.current}/`}
                      className="inline-flex items-center gap-1 font-semibold text-secondary hover:underline"
                    >
                      {row.article.title}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* The three that move, first, because it is the thing the rest of the
            internet gets wrong and the reason this page exists. */}
        <section className="mb-10 rounded-xl border border-border bg-card p-5">
          <h2 className="mb-1 font-display text-lg font-bold text-foreground">
            The three that move
          </h2>
          <p className="mb-4 font-body text-xs text-muted-foreground">
            If you are scheduling anything, only these three need re-checking each year. Everything
            else on this page is a fixed date and has been for years.
          </p>
          <ul className="space-y-2.5">
            {floating.map((row) => (
              <li key={row.event.id} className="flex flex-wrap items-baseline gap-x-2 font-body text-sm">
                <span aria-hidden="true">{row.event.emoji}</span>
                <span className="font-semibold text-foreground">{row.event.name}</span>
                <span className="text-muted-foreground">{row.rule}</span>
                {row.date && (
                  <span className="rounded-md bg-secondary/10 px-2 py-0.5 text-xs font-semibold text-secondary">
                    {`${ordinal(row.date.day)} ${MONTHS[row.date.month - 1]} ${year}`}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-8">
          {byMonth.map(([month, rows]) => (
            <div key={month}>
              <h2 className="mb-3 border-b border-border pb-1.5 font-display text-lg font-bold text-foreground">
                {MONTHS[month - 1]}
              </h2>
              <ul className="space-y-4">
                {rows.map((row) => (
                  <li key={row.event.id} className="flex gap-3">
                    <div
                      className="mt-0.5 flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-muted text-center"
                      aria-hidden="true"
                    >
                      <span className="font-display text-sm font-bold leading-none text-foreground">
                        {row.date.day}
                      </span>
                      <span className="text-[10px] uppercase leading-none text-muted-foreground">
                        {MONTHS[month - 1].slice(0, 3)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-sm font-bold text-foreground">
                        <span className="mr-1.5" aria-hidden="true">{row.event.emoji}</span>
                        {row.event.name}
                        {row.rule && (
                          <span className="ml-2 font-body text-xs font-normal text-muted-foreground">
                            {row.rule}
                          </span>
                        )}
                      </h3>
                      {row.note && (
                        <p className="mt-1 font-body text-sm text-muted-foreground">{row.note}</p>
                      )}
                      {row.article && (
                        <Link
                          to={`/blog/${row.article.slug.current}/`}
                          className="mt-1.5 inline-flex items-center gap-1 font-body text-xs font-semibold text-secondary hover:underline"
                        >
                          {row.article.title}
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      )}
                      <AnimalLinks files={row.files} articles={row.articles} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="mb-2 font-display text-lg font-bold text-foreground">
            How to check a date yourself
          </h2>
          <div className="max-w-2xl space-y-3 font-body text-sm text-muted-foreground">
            <p>
              The rule that resolves almost every disagreement is to go to whoever created the day. A
              UN observance has a resolution number and a UN page. A charity-founded day has the
              charity. Where neither exists, as with reptile awareness day and wombat day, no source
              is authoritative and the consensus date is the best available answer, which is worth
              saying plainly instead of inventing a founder.
            </p>
            <p>
              Aggregator calendars are where the errors breed. They copy each other, a floating date
              gets flattened into whatever number it fell on the year someone transcribed it, and the
              wrong figure then appears in fifty places and looks corroborated. The sloth day error is
              exactly this: 20 October was the third Saturday in 2013, and it has been reprinted ever
              since.
            </p>
          </div>
        </section>

        <section className="mt-10 border-t border-border pt-6">
          <h2 className="mb-3 font-display text-sm font-bold text-foreground">Sources</h2>
          <ul className="space-y-1.5 font-body text-xs text-muted-foreground">
            {[
              ['The Origin of World Animal Day, World Animal Day', 'https://www.worldanimalday.org/100-years-of-world-animal-day-the-forgotten-legacy-of-heinrich-zimmermann/'],
              ['Sloth International Day, Fundación AIUNAU', 'https://aiunau.org/en/activities/sloth-international-day/'],
              ['World Wildlife Day, United Nations', 'https://www.un.org/en/observances/world-wildlife-day'],
              ['World Bee Day, United Nations', 'https://www.un.org/en/observances/bee-day'],
              ['International Cephalopod Awareness Days, TONMO', 'https://tonmo.com/threads/its-world-octopus-day.94241/'],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

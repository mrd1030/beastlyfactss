import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { ArrowLeft } from 'lucide-react';
import LEGAL from '@/lib/data/legalStatus.json';
import LEGAL_GUIDES from '@/lib/generated/legal-guides.json';
import { STATE_NAMES } from '@/lib/data/usStatePaths';
import { withBrand, pickWithinLimit, plural, TITLE_MAX, DESCRIPTION_MAX, BRAND } from '@/lib/utils/seo';
import LegalStatusMap, { STATUS_BUCKETS, BUCKET_ORDER, bucketFor } from '@/components/legal/LegalStatusMap';

const SITE = 'https://beastlyfacts.com';

// The serval is the default because it is the most restricted animal in the
// dataset and uses all five buckets, so the page that gets prerendered at
// /exotic-pet-laws/ shows the map doing something rather than sitting blank.
const DEFAULT_ANIMAL = 'serval';

const ANIMAL_IDS = Object.keys(LEGAL.animals);

// Every article in the Legal category, filtered and sorted at build time by
// scripts/generate-legal-summary.mjs rather than here. This page is the hub for
// the category: the written hub article sits at number 17 of 20 in the category
// feed, where nobody finds it. Filtering it out of mdx-meta.json at runtime
// meant importing ~1MB of metadata for all 426 articles to end up with
// nineteen titles and slugs, and mdx-meta is a chunk this route needs for
// nothing else.

// Maps a legal guide back to the animal it covers, so a guide can link straight
// to that animal's map rather than to the hub.
const GUIDE_TO_ANIMAL = Object.fromEntries(
  Object.entries(LEGAL.animals)
    .filter(([, a]) => a.article)
    .map(([id, a]) => [a.article.replace(/^\/blog\/|\/$/g, ''), id]),
);

// Order matters here: the list doubles as the page's navigation, so it runs
// most-restricted first rather than alphabetically. An animal nobody can keep
// anywhere is more useful at the top than a guinea pig with no rules at all.
const ANIMALS_BY_INTEREST = [...ANIMAL_IDS].sort((a, b) => {
  const restricted = (id) =>
    Object.values(LEGAL.animals[id].jurisdictions).filter((e) => e.status !== 'legal').length;
  return restricted(b) - restricted(a) || LEGAL.animals[a].name.localeCompare(LEGAL.animals[b].name);
});

// Several of the 28 names lead with a proper noun. A blanket .toLowerCase()
// turned those into "the bengal cat" mid-sentence and "Where Is the Bengal cat
// Legal?" in the title, so the name is only lowered when its first word is not
// one.
//
// A Set lookup on the first word rather than a regex prefix. The regex version
// of this silently never matched: editing it through a shell heredoc left a
// literal backspace character where \b was meant, so it required a backspace
// after "Bengal" and every name fell through to toLowerCase().
const PROPER_FIRST_WORDS = new Set([
  'Bengal', 'Russian', 'Argentine', 'Nile', 'Burmese', 'Quaker', 'African', 'Asian', 'American',
]);
function inSentence(name) {
  const [first, ...rest] = name.split(' ');
  // Only the first word is lowered, and only when it is not a proper noun.
  // Lowercasing the whole string flattened "Giant African millipede" into
  // "giant african millipede", since the proper noun there is not the word the
  // sentence position affects.
  if (PROPER_FIRST_WORDS.has(first)) return name;
  return [first.toLowerCase(), ...rest].join(' ');
}

function statusRank(status) {
  return { banned: 0, permit: 1, conditional: 2, restricted: 3, unclear: 4 }[status] ?? 5;
}

function BucketPill({ bucketKey, children }) {
  const b = STATUS_BUCKETS[bucketKey];
  const isNone = b.key === 'none';
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-body font-semibold border"
      style={
        isNone
          ? { borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }
          : { background: b.key === 'unclear' ? '#CBD5E1' : b.fill, color: b.text, borderColor: 'transparent' }
      }
    >
      {children ?? b.label}
    </span>
  );
}

export default function ExoticPetLaws() {
  const { animalId } = useParams();

  const activeId = LEGAL.animals[animalId] ? animalId : DEFAULT_ANIMAL;
  const animal = LEGAL.animals[activeId];
  const isIndex = !animalId;

  const [selectedState, setSelectedState] = React.useState(null);
  const mapRef = React.useRef(null);
  const firstRender = React.useRef(true);

  // Reset the pinned state whenever the animal changes, otherwise you keep a
  // detail card for a jurisdiction that has nothing to say about the new one.
  React.useEffect(() => setSelectedState(null), [activeId]);

  // The picker sits below the map, which on a phone means it can be a screen
  // and a half further down. Changing animal from there would otherwise repaint
  // a map the reader cannot see. Only scrolls when the map is actually out of
  // view, so nothing jumps on desktop where both are on screen at once, and
  // never on first load.
  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const el = mapRef.current;
    if (!el) return;
    const { top, bottom } = el.getBoundingClientRect();
    const offScreen = bottom < 0 || top > window.innerHeight;
    if (!offScreen) return;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  }, [activeId]);

  const statuses = animal.jurisdictions;

  const restricted = useMemo(
    () =>
      Object.entries(statuses)
        .filter(([, e]) => e.status !== 'legal')
        .sort(
          ([ca, a], [cb, b]) =>
            statusRank(a.status) - statusRank(b.status) ||
            (STATE_NAMES[ca] || ca).localeCompare(STATE_NAMES[cb] || cb),
        ),
    [statuses],
  );

  const counts = useMemo(() => {
    const c = { banned: 0, permit: 0, conditions: 0, unclear: 0 };
    for (const e of Object.values(statuses)) {
      const b = bucketFor(e.status);
      if (b !== 'none') c[b] += 1;
    }
    return c;
  }, [statuses]);

  // researched includes DC, which is not a state, so the two are counted
  // separately rather than reporting "51 states" at anyone.
  const researchedCount = LEGAL.coverage.researched.filter(
    (c) => LEGAL.jurisdictions[c]?.level !== 'city',
  ).length;
  const stateCount = researchedCount - (LEGAL.coverage.researched.includes('DC') ? 1 : 0);

  const jurisdictionName = (code) =>
    LEGAL.jurisdictions[code]?.name || STATE_NAMES[code] || code;

  // City jurisdictions have no shape on a state map, so their restrictions
  // count toward the legend totals but never appear as a colour. Without
  // saying so, "Banned (3)" over two red states reads as a bug.
  const cityEntries = Object.entries(statuses).filter(
    ([code, e]) => e.status !== 'legal' && LEGAL.jurisdictions[code]?.level === 'city',
  );

  // How much of the country has actually been read for this animal. Coverage
  // runs from 2 jurisdictions to 51, and a reader has no way to tell the
  // difference from the map alone unless the page says so.
  const checkedStates = Object.keys(statuses).filter(
    (code) => LEGAL.jurisdictions[code]?.level !== 'city',
  ).length;
  const uncheckedStates = researchedCount - checkedStates;

  const detail = selectedState
    ? { code: selectedState, entry: statuses[selectedState] }
    : null;

  // Animal names here run from "Hamster" to "Argentine black and white tegu", a
  // 23 character swing, so the tags are composed from variants rather than one
  // template: short names keep the descriptive wording, long ones fall back.
  // See src/lib/utils/seo.js for why the budgets are 60 and 160.
  const title = isIndex
    ? 'Exotic Pet Laws by State: An Interactive US Map'
    : pickWithinLimit(
        [
          `${animal.name} Laws by State: Where It Is Banned`,
          `${animal.name} Laws by State: Bans and Permits`,
          `${animal.name} Laws by State`,
        ],
        TITLE_MAX - ` | ${BRAND}`.length,
      );

  const description = isIndex
    ? `An interactive map of US exotic pet law covering ${ANIMAL_IDS.length} animals across all ${stateCount} states and DC, every entry quoting the statute or regulation itself.`
    : pickWithinLimit(
        [
          `Every US state where the ${inSentence(animal.name)} is banned, needs a permit or comes with conditions, each entry citing the regulation itself. ${plural(counts.banned, 'ban')}, ${plural(counts.permit, 'permit state')}.`,
          `Where the ${inSentence(animal.name)} is banned, restricted or needs a permit, each entry citing the regulation itself. ${plural(counts.banned, 'ban')}, ${plural(counts.permit, 'permit state')}.`,
          `Where the ${inSentence(animal.name)} is banned or needs a permit, citing each regulation. ${plural(counts.banned, 'ban')}, ${plural(counts.permit, 'permit state')}.`,
        ],
        DESCRIPTION_MAX,
      );

  // An animal with no restriction anywhere has no page of its own worth
  // indexing: an all-grey map and one honest sentence. It stays selectable on
  // the hub and fully rendered for anyone who lands on it, but it is kept out
  // of the index and out of the sitemap rather than shipped as a thin page.
  const nothingToReport = restricted.length === 0;

  const canonical = isIndex ? `${SITE}/exotic-pet-laws/` : `${SITE}/exotic-pet-laws/${activeId}/`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{withBrand(title)}</title>
        <meta name="description" content={description} />
        <meta name="robots" content={nothingToReport ? 'noindex,follow' : 'index,follow'} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={withBrand(title)} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE}/assets/guides/exotic-pet-legal-hub.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Interactive map of United States exotic pet laws" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}/assets/guides/exotic-pet-legal-hub.jpg`} />
        <meta name="twitter:title" content={withBrand(title)} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-6 pb-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* A real link rather than history.back(). Most arrivals here come
              cold from search, where there is nothing to go back to, and on a
              phone the map fills the screen with no other way out. An animal
              page goes up to the hub, the hub goes up to the Legal category. */}
          {/* py-3 with a matching negative margin: the row looks the same size as
              the Beastfile back link but gives a 44px tap target. The first
              version was 32px, under the minimum for a thumb. */}
          <Link
            to={isIndex ? '/blog/category/legal/' : '/exotic-pet-laws/'}
            className="inline-flex items-center gap-1.5 text-xs font-body font-bold text-muted-foreground hover:text-primary transition-colors mb-3 py-3 -my-2 pr-3 -mr-3"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {isIndex ? 'Legal guides' : 'All animals'}
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              {isIndex ? 'Exotic pet laws, state by state' : `Where is the ${inSentence(animal.name)} legal?`}
            </h1>
            <p className="text-muted-foreground font-body leading-relaxed max-w-3xl">
              {isIndex ? (
                <>
                  Pick an animal and the map shows where it is restricted. Every entry below was read from
                  the statute or the regulation itself, never from a summary of one, and each carries the
                  citation so you can check it. {ANIMAL_IDS.length} animals across all {stateCount} states
                  and the District of Columbia, plus New York City, which has its own Health Code.
                </>
              ) : (
                <>
                  {animal.scientific ? <em>{animal.scientific}</em> : null}
                  {animal.scientific ? '. ' : ''}
                  {nothingToReport ? (
                    <>
                      Nothing in any of the {Object.keys(statuses).length} jurisdictions we checked restricts
                      this animal, which is why the map below is blank. That is the answer rather than a gap.
                    </>
                  ) : (
                    <>
                      Restricted in {restricted.length} of the {Object.keys(statuses).length} jurisdictions
                      checked. Every entry quotes the rule it comes from.
                    </>
                  )}
                </>
              )}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-[1fr,18rem] items-start">
          {/* Map */}
          <div ref={mapRef} className="scroll-mt-20 rounded-xl border border-border bg-card p-3 sm:p-5">
            <LegalStatusMap
              statuses={statuses}
              selected={selectedState}
              onSelect={(code) => setSelectedState((prev) => (prev === code ? null : code))}
              animalName={inSentence(animal.name)}
            />
            <p className="mt-3 text-[11px] font-body text-muted-foreground">
              Select a state for the rule behind its colour. Alaska, Hawaii and the District of Columbia are
              drawn out of position so they can be clicked.
              {cityEntries.length > 0 && (
                <>
                  {' '}
                  The counts include{' '}
                  {cityEntries.map(([code], i) => (
                    <React.Fragment key={code}>
                      {i > 0 ? ' and ' : ''}
                      {jurisdictionName(code)}
                    </React.Fragment>
                  ))}
                  , which {cityEntries.length === 1 ? 'has' : 'have'} rules separate from the surrounding
                  state and so cannot be shaded on a state map. Listed in full below.
                </>
              )}
              {uncheckedStates > 0 && (
                <>
                  {' '}
                  <span className="text-foreground font-semibold">
                    {checkedStates} of {researchedCount} states and DC have been read for this animal
                  </span>
                  , so the {uncheckedStates === 1 ? 'single dotted one is' : `${uncheckedStates} dotted ones are`}{' '}
                  a gap in our research rather than a finding of no rule.
                </>
              )}
            </p>
          </div>

          {/* Legend and detail.
              The order flips by breakpoint on purpose. On a phone everything is
              one column, so whatever sits first is what appears directly under
              the map, and after tapping a state that should be the answer rather
              than the key. On desktop the two sit in a sidebar beside the map and
              both are visible at once, so the key stays put and the detail card
              appears under it instead of shoving it down on every click. */}
          <div className="flex flex-col gap-4">
            <div className="order-2 lg:order-1 rounded-xl border border-border bg-card p-4">
              <h2 className="font-display font-bold text-sm text-foreground mb-3">What the colours mean</h2>
              <ul className="space-y-2.5">
                {BUCKET_ORDER.map((key) => {
                  const b = STATUS_BUCKETS[key];
                  // The two grey buckets carry a count too, otherwise "read it,
                  // found nothing" and "have not read it" look interchangeable.
                  const n =
                    key === 'none'
                      ? Object.values(statuses).filter((e) => e.status === 'legal').length
                      : key === 'notChecked'
                        ? uncheckedStates
                        : counts[key];
                  return (
                    <li key={key} className="flex gap-2.5 text-xs font-body">
                      <span
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded-sm border"
                        style={{
                          background:
                            key === 'none'
                              ? 'hsl(var(--muted))'
                              : key === 'unclear'
                                ? 'repeating-linear-gradient(45deg,#CBD5E1 0 3px,#64748B 3px 5px)'
                                : key === 'notChecked'
                                  ? 'radial-gradient(hsl(var(--muted-foreground)/0.45) 1px, hsl(var(--background)) 1px) 0 0 / 5px 5px'
                                  : b.fill,
                          borderColor: 'hsl(var(--border))',
                        }}
                      />
                      <span>
                        <span className="font-semibold text-foreground">
                          {b.label}
                          {n ? ` (${n})` : ''}
                        </span>
                        <span className="block text-muted-foreground leading-snug">{b.blurb}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {detail && (
              <div className="order-1 lg:order-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h2 className="font-display font-bold text-base text-foreground">
                    {jurisdictionName(detail.code)}
                  </h2>
                  <BucketPill bucketKey={bucketFor(detail.entry?.status)} />
                </div>
                {detail.entry ? (
                  <>
                    {detail.entry.cite && (
                      <p className="text-xs font-body font-semibold text-foreground">{detail.entry.cite}</p>
                    )}
                    {detail.entry.quote && (
                      <blockquote className="mt-2 border-l-2 border-primary/40 pl-3 text-xs font-body italic text-muted-foreground leading-relaxed">
                        {detail.entry.quote}
                      </blockquote>
                    )}
                    {detail.entry.note && (
                      <p className="mt-2 text-xs font-body text-muted-foreground leading-relaxed">
                        {detail.entry.note}
                      </p>
                    )}
                    {detail.entry.grandfathered && (
                      <p className="mt-2 text-xs font-body text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Existing owners: </span>
                        {detail.entry.grandfathered.detail}
                      </p>
                    )}
                    {detail.entry.localOverride && (
                      <p className="mt-2 text-xs font-body text-muted-foreground leading-relaxed">
                        This state allows cities and counties to prohibit what state law permits, so check
                        your local ordinance too.
                      </p>
                    )}
                    {LEGAL.sources[detail.entry.sourceId]?.note && (
                      <p className="mt-2 text-xs font-body text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">How this rule works: </span>
                        {LEGAL.sources[detail.entry.sourceId].note}
                      </p>
                    )}
                    {LEGAL.sources[detail.entry.sourceId] && (
                      <a
                        href={LEGAL.sources[detail.entry.sourceId].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-xs font-body text-primary hover:underline"
                      >
                        {LEGAL.sources[detail.entry.sourceId].title} →
                      </a>
                    )}
                  </>
                ) : (
                  // No entry means nobody read this jurisdiction for this
                  // animal. Saying "nothing restricts it here" would be stating
                  // a conclusion the research never reached.
                  <p className="text-xs font-body text-muted-foreground leading-relaxed">
                    We have not checked {jurisdictionName(detail.code)} for the {inSentence(animal.name)}{' '}
                    yet, so there is no answer here either way. Treat it as unknown rather than as permitted,
                    and ask the state agency before relying on it.
                    {LEGAL.jurisdictions[detail.code]?.scope
                      ? ` When we do read it, the body of law that governs is: ${LEGAL.jurisdictions[detail.code].scope}`
                      : ''}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Animal picker, deliberately below the map */}
        <div className="mt-8">
          <h2 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">
            Choose an animal
          </h2>
          <div className="flex flex-wrap gap-2">
            {ANIMALS_BY_INTEREST.map((id) => {
              const isActive = id === activeId;
              return (
                <Link
                  key={id}
                  to={`/exotic-pet-laws/${id}/`}
                  className={`rounded-full border px-3 py-1.5 text-sm font-body transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground border-primary font-semibold'
                      : 'border-border text-foreground hover:border-primary/50 hover:text-primary'
                  }`}
                >
                  {LEGAL.animals[id].name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* The map has no text for a crawler or a screen reader to work with, so
            the same information is written out here in full. */}
        <section className="mt-12">
          <h2 className="font-display font-bold text-2xl text-foreground mb-1">
            Every restriction on the {inSentence(animal.name)}
          </h2>
          <p className="text-sm font-body text-muted-foreground mb-5">
            {restricted.length === 0
              ? `Nothing in the ${Object.keys(statuses).length} jurisdictions checked restricts this animal.`
              : `${restricted.length} of the ${Object.keys(statuses).length} jurisdictions checked restrict this animal in some way. The rest had no rule we could find.`}
          </p>

          <div className="space-y-3">
            {restricted.map(([code, entry]) => (
              <div key={code} className="rounded-lg border border-border bg-card p-4">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="font-display font-bold text-base text-foreground">
                    {jurisdictionName(code)}
                  </h3>
                  <BucketPill bucketKey={bucketFor(entry.status)} />
                  {entry.cite && (
                    <span className="text-xs font-body text-muted-foreground">{entry.cite}</span>
                  )}
                </div>
                {entry.quote && (
                  <blockquote className="border-l-2 border-primary/40 pl-3 text-sm font-body italic text-muted-foreground leading-relaxed">
                    {entry.quote}
                  </blockquote>
                )}
                {entry.note && (
                  <p className="mt-2 text-sm font-body text-muted-foreground leading-relaxed">{entry.note}</p>
                )}
                {entry.grandfathered && (
                  <p className="mt-2 text-sm font-body text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Existing owners: </span>
                    {entry.grandfathered.detail}
                  </p>
                )}
                {LEGAL.sources[entry.sourceId]?.note && (
                  <p className="mt-2 text-sm font-body text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">How this rule works: </span>
                    {LEGAL.sources[entry.sourceId].note}
                  </p>
                )}
                {LEGAL.sources[entry.sourceId] && (
                  <a
                    href={LEGAL.sources[entry.sourceId].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-body text-primary hover:underline"
                  >
                    {LEGAL.sources[entry.sourceId].title} →
                  </a>
                )}
              </div>
            ))}
          </div>

          {animal.article && (
            <p className="mt-6 text-sm font-body text-foreground">
              For the full write-up, including the states that get reported wrongly,{' '}
              <Link to={animal.article} className="text-primary font-semibold hover:underline">
                read the {inSentence(animal.name)} legal guide
              </Link>
              .
            </p>
          )}
          {animal.encyclopediaId && (
            <p className="mt-1.5 text-sm font-body text-foreground">
              Past the legal question?{' '}
              <Link
                to={`/encyclopedia/animal/${animal.encyclopediaId}/`}
                className="text-primary font-semibold hover:underline"
              >
                See the {inSentence(animal.name)} profile
              </Link>
              .
            </p>
          )}
        </section>

        {/* The written legal guides, on the hub only. This page is the index for
            the Legal category, so it belongs here rather than inside one article
            partway down the category feed where nobody finds it.
            Deliberately not rendered on the 28 per-animal pages: it was 1,044
            words of byte-identical text on every one of them, which on a species
            with no restrictions left a page that was entirely duplicate. */}
        {isIndex && (
          <section className="mt-14">
            <h2 className="font-display font-bold text-2xl text-foreground mb-1">Every legal guide we have written</h2>
            <p className="text-sm font-body text-muted-foreground mb-5">
              The map answers where. These answer why, including the states that get reported wrongly and the
              federal rules that sound like bans and are not.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {LEGAL_GUIDES.map((g) => {
                const animalId = GUIDE_TO_ANIMAL[g.slug];
                return (
                  <div key={g.slug} className="rounded-lg border border-border bg-card p-4">
                    <h3 className="font-display font-bold text-base text-foreground mb-1">
                      <Link to={`/blog/${g.slug}/`} className="hover:text-primary transition-colors">
                        {g.title}
                      </Link>
                    </h3>
                    {g.excerpt && (
                      <p className="text-xs font-body text-muted-foreground leading-relaxed line-clamp-3">
                        {g.excerpt}
                      </p>
                    )}
                    {animalId && (
                      <Link
                        to={`/exotic-pet-laws/${animalId}/`}
                        className="mt-2 inline-block text-xs font-body text-primary hover:underline"
                      >
                        See it on the map →
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
            <p className="mt-5 text-sm font-body text-foreground">
              For the federal layer, what the Lacey Act and CITES actually control, and how state schemes are
              structured, start with{' '}
              <Link to="/blog/exotic-pet-legal-hub/" className="text-primary font-semibold hover:underline">
                the written hub
              </Link>
              .
            </p>
          </section>
        )}

        <section className="mt-12 rounded-xl border border-border bg-muted/30 p-5">
          <h2 className="font-display font-bold text-lg text-foreground mb-2">How to read this</h2>
          <div className="space-y-2.5 text-sm font-body text-muted-foreground leading-relaxed">
            <p>
              Two of the shades mean very different things and are worth telling apart. A flat grey state was
              read for this animal and nothing in it restricts one. A dotted state has not been read for this
              animal at all. Coverage runs from two jurisdictions to fifty-one depending on the species, so on
              a less-researched animal most of the map is a gap in our work rather than a finding, and it
              should not be taken as permission.
            </p>
            <p>
              Even a flat grey is not a guarantee. It means no restriction was found in the specific body of
              law checked for that state, which is recorded alongside each jurisdiction. Cities and counties
              regularly ban animals their state allows, and several states say so in their own rules.
            </p>
            <p>
              Hatched grey means the rule genuinely does not resolve. Usually a definition arguably reaches
              the animal without naming it, and the honest answer is to ask the agency rather than to guess.
              Those entries are marked unclear on purpose rather than being rounded to a yes or a no.
            </p>
            <p>
              Every entry links to the regulation it came from. None of this is legal advice, laws change
              without much notice, and the agency that issues the permit is always the last word. For the
              federal layer and how state schemes are structured, see the{' '}
              <Link to="/blog/exotic-pet-legal-hub/" className="text-primary font-semibold hover:underline">
                exotic pet legal hub
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

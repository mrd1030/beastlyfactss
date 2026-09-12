import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import LEGAL from '@/lib/data/legalStatus.json';
import { STATUS_BUCKETS } from '@/components/legal/LegalStatusMap';
import { forJurisdiction, TRACKED_ANIMAL_COUNT } from '@/lib/data/legalByState';
import { notesFor } from '@/lib/data/stateNotes';
import { describeVerified, formatDay } from '@/lib/utils/verifiedDates';
import CitationBox from '@/components/legal/CitationBox';
import { SLUG_TO_CODE, CODE_TO_SLUG } from '@/lib/data/stateSlugs';
import { inSentence, joinList } from '@/lib/utils/animalNames';
import { withBrand, pickWithinLimit, plural, TITLE_MAX, DESCRIPTION_MAX, BRAND } from '@/lib/utils/seo';

const SITE = 'https://beastlyfacts.com';

// Buckets that represent an actual restriction, in the order the page lists
// them. `none` and `notChecked` are handled separately below: they are the long
// tail and belong under the restrictions, not mixed in with them.
const RESTRICTION_BUCKETS = ['banned', 'permit', 'conditions', 'unclear'];

function CountPill({ bucketKey, count }) {
  const b = STATUS_BUCKETS[bucketKey];
  const isNone = b.key === 'none' || b.key === 'notChecked';
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-body font-semibold border"
      style={
        isNone
          ? { borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }
          : { background: b.key === 'unclear' ? '#CBD5E1' : b.fill, color: b.text, borderColor: 'transparent' }
      }
    >
      {`${count} ${b.label.toLowerCase()}`}
    </span>
  );
}

// One jurisdiction across every animal in the matrix.
//
// The animal pages answer "where is this restricted"; this answers "what is
// restricted here". The second question is the one someone asks when they are
// moving, or when they are writing about a state, and until now the site had no
// page that answered it despite holding all the data.
export default function ExoticPetLawsState() {
  const { stateSlug } = useParams();
  const code = SLUG_TO_CODE[stateSlug];
  const j = code ? forJurisdiction(code) : null;

  // A single cell of the matrix, addressable: /exotic-pet-laws/state/hawaii/#serval
  // opens that row and scrolls to it. A fragment rather than a query parameter
  // on purpose. Google ignores fragments when deciding what to index, so this
  // cannot spawn 2,704 near-duplicate URLs the way ?animal=serval could, and a
  // reference someone is meant to cite needs a link to the exact row rather
  // than "go here and open the serval one".
  //
  // Declared above the early return below, because a hook cannot sit after one.
  // The body no-ops for an unknown slug.
  React.useEffect(() => {
    if (!j || window.__IS_PRERENDER__) return;
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    // The row is prerendered, so the browser has already done the scroll part
    // natively on a cold load. What it cannot do is open a <details>.
    if (el.tagName === 'DETAILS') el.open = true;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
  }, [j]);

  // An unknown slug goes to the index rather than rendering an empty shell.
  // replace, so the bad URL does not sit in history behind the good one.
  if (!j) return <Navigate to="/exotic-pet-laws/state/" replace />;

  // Opening a row writes it into the address bar, so the URL a reader copies is
  // the row they are looking at. replaceState rather than pushState: toggling
  // rows open and shut should not fill the back button with fragments.
  const syncRowHash = (event, id) => {
    if (window.__IS_PRERENDER__) return;
    const base = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, '', event.currentTarget.open ? `${base}#${id}` : base);
  };

  const restricted = j.rows.filter((r) => RESTRICTION_BUCKETS.includes(r.bucket));
  const clear = j.rows.filter((r) => r.bucket === 'none');
  const unchecked = j.rows.filter((r) => r.bucket === 'notChecked');
  const banned = j.rows.filter((r) => r.bucket === 'banned');
  // The span of the column, not its newest date. 36 of the 52 jurisdictions
  // hold several distinct verifiedOn values about a month apart, and printing
  // only the newest claimed freshness the older rows do not have. That matters
  // more here than elsewhere because the citation box below puts this string
  // into text other people publish.
  const verified = describeVerified(j.rows.map((r) => r.entry?.verifiedOn));
  const notes = notesFor(code);

  const isState = j.level === 'state';
  // "in Texas" works; "in New York City" works; "in the District of Columbia"
  // needs the article. Naming the two non-states rather than branching on level
  // twice over, since there are exactly two and both are known.
  const inPlace = code === 'DC' ? 'the District of Columbia' : j.name;

  const title = pickWithinLimit(
    [
      `Exotic Pet Laws in ${j.name}: What Is Banned`,
      `Exotic Pet Laws in ${j.name}: Bans and Permits`,
      `${j.name} Exotic Pet Laws`,
    ],
    TITLE_MAX - ` | ${BRAND}`.length,
  );

  const description = pickWithinLimit(
    [
      `What exotic pets are legal in ${j.name}: ${plural(j.counts.banned, 'animal')} banned, ${plural(j.counts.permit, 'needing a permit', 'needing a permit')}, out of ${TRACKED_ANIMAL_COUNT} checked against the statutes themselves.`,
      `Exotic pets in ${j.name}: ${plural(j.counts.banned, 'ban')} and ${plural(j.counts.permit, 'permit')} across ${TRACKED_ANIMAL_COUNT} animals, each entry citing the regulation.`,
      `Which exotic pets are legal in ${j.name}, across ${TRACKED_ANIMAL_COUNT} animals, each citing the rule.`,
    ],
    DESCRIPTION_MAX,
  );

  const canonical = `${SITE}/exotic-pet-laws/state/${CODE_TO_SLUG[code]}/`;

  // The opening sentence is derived, not templated: it names the actual banned
  // animals where there are few enough to list, which makes every one of these
  // 52 pages open on its own specifics rather than on the same sentence with a
  // state name swapped in.
  // inSentence rather than toLowerCase: several names lead with a proper noun,
  // and "argentine black and white tegu" mid-sentence is wrong in a way a
  // reader notices immediately.
  const bannedNames = banned.slice(0, 3).map((r) => inSentence(r.name));
  const Place = `${inPlace.charAt(0).toUpperCase()}${inPlace.slice(1)}`;
  const opener = (() => {
    if (j.counts.banned === 0 && j.counts.permit === 0) {
      return `Nothing in ${inPlace} restricts any of the ${TRACKED_ANIMAL_COUNT} animals on this list outright, and none of them needs a permit. That is the answer rather than a gap: each one was read against ${isState ? 'the state code' : 'the code'} and nothing in it reaches them.`;
    }

    // plural() always prefixes the count, so anything that needs the number
    // woven into the verb ("one of them needs" / "eleven of them need") is
    // written out here rather than going through it.
    const permitClause =
      j.counts.permit === 1 ? 'one of them needs' : `${j.counts.permit} of them need`;

    if (j.counts.banned === 0) {
      return `${Place} bans none of the ${TRACKED_ANIMAL_COUNT} animals on this list outright, but ${permitClause} a permit before the animal arrives.`;
    }

    const tail =
      j.counts.permit === 0
        ? 'None of the rest needs a permit.'
        : j.counts.permit === 1
          ? 'One more needs a permit.'
          : `${j.counts.permit} more need a permit.`;

    // Three shapes, because one template cannot carry a range from 1 to 40.
    // "among them the serval" for a single ban reads as though there were
    // others being withheld, and listing four names then saying "and 36 more"
    // buries the number that matters behind the examples.
    if (j.counts.banned === 1) {
      return `${Place} bans one of the ${TRACKED_ANIMAL_COUNT} animals checked here, the ${bannedNames[0]}. ${tail}`;
    }
    if (j.counts.banned <= 3) {
      return `${Place} bans ${j.counts.banned} of the ${TRACKED_ANIMAL_COUNT} animals checked here: the ${joinList(bannedNames)}. ${tail}`;
    }
    return `${Place} bans ${plural(j.counts.banned, 'animal')} of the ${TRACKED_ANIMAL_COUNT} checked here, the ${joinList(bannedNames)} among them. ${tail}`;
  })();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{withBrand(title)}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={withBrand(title)} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE}/assets/guides/exotic-pet-legal-hub.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`Exotic pet laws in ${j.name}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}/assets/guides/exotic-pet-legal-hub.jpg`} />
        <meta name="twitter:title" content={withBrand(title)} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-6 pb-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/exotic-pet-laws/state/"
            className="inline-flex items-center gap-1.5 text-xs font-body font-bold text-muted-foreground hover:text-primary transition-colors mb-3 py-3 -my-2 pr-3 -mr-3"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All states
          </Link>

          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
            {`Exotic pet laws in ${inPlace}`}
          </h1>
          {/* Single string: see the hydration note on the index page. */}
          <p className="text-muted-foreground font-body leading-relaxed">{opener}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {RESTRICTION_BUCKETS.map((key) =>
              j.counts[key] > 0 ? <CountPill key={key} bucketKey={key} count={j.counts[key]} /> : null,
            )}
            {j.counts.none > 0 && <CountPill bucketKey="none" count={j.counts.none} />}
          </div>

          {verified && (
            <p className="mt-4 text-xs font-body text-muted-foreground">
              {`Read against the published rules, ${verified}. Every entry below quotes the statute or regulation it comes from and carries the date it was last checked.`}
            </p>
          )}

          {j.scope && (
            <p className="mt-2 text-xs font-body text-muted-foreground leading-relaxed">
              {`The governing body of law here: ${j.scope}`}
            </p>
          )}
        </div>
      </div>

      <div className="px-4 sm:px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {notes && (
            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                {`How ${inPlace} decides`}
              </h2>
              <div className="space-y-4 max-w-3xl">
                {notes.map((para, i) => (
                  // Index keys are safe here: the array is static content, never
                  // reordered or filtered.
                  <p key={i} className="font-body text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          )}

          {restricted.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-2xl text-foreground mb-1">
                {`What ${inPlace} restricts`}
              </h2>
              <p className="text-sm font-body text-muted-foreground mb-5">
                {`${restricted.length} of ${TRACKED_ANIMAL_COUNT}, strictest first. Open one for the rule it comes from.`}
              </p>

              <div className="space-y-2">
                {restricted.map((row) => {
                  const b = STATUS_BUCKETS[row.bucket];
                  const source = row.entry?.sourceId ? LEGAL.sources[row.entry.sourceId] : null;
                  return (
                    <details
                      key={row.id}
                      id={row.id}
                      onToggle={(e) => syncRowHash(e, row.id)}
                      className="group rounded-lg border border-border bg-card scroll-mt-24"
                    >
                      <summary className="flex flex-wrap cursor-pointer list-none items-center gap-2 p-4 [&::-webkit-details-marker]:hidden">
                        <span className="flex-1 font-body font-semibold text-foreground text-sm">
                          {row.name}
                        </span>
                        <span
                          className="rounded-full px-2.5 py-0.5 text-[11px] font-body font-semibold"
                          style={{
                            background: row.bucket === 'unclear' ? '#CBD5E1' : b.fill,
                            color: b.text,
                          }}
                        >
                          {b.label}
                        </span>
                      </summary>

                      <div className="px-4 pb-4 -mt-1">
                        {row.entry?.cite && (
                          <p className="text-xs font-body font-semibold text-foreground">{row.entry.cite}</p>
                        )}
                        {row.entry?.quote && (
                          <blockquote className="mt-2 border-l-2 border-primary/40 pl-3 text-xs font-body italic text-muted-foreground leading-relaxed">
                            {row.entry.quote}
                          </blockquote>
                        )}
                        {row.entry?.note && (
                          <p className="mt-2 text-xs font-body text-muted-foreground leading-relaxed">
                            {row.entry.note}
                          </p>
                        )}
                        {row.entry?.grandfathered && (
                          <p className="mt-2 text-xs font-body text-muted-foreground leading-relaxed">
                            <span className="font-semibold text-foreground">Existing owners: </span>
                            {row.entry.grandfathered.detail}
                          </p>
                        )}
                        {row.entry?.localOverride && (
                          <p className="mt-2 text-xs font-body text-muted-foreground leading-relaxed">
                            Cities and counties here can prohibit what state law permits, so check your local
                            ordinance too.
                          </p>
                        )}
                        {source?.note && (
                          <p className="mt-2 text-xs font-body text-muted-foreground leading-relaxed">
                            <span className="font-semibold text-foreground">How this rule works: </span>
                            {source.note}
                          </p>
                        )}
                        {formatDay(row.entry?.verifiedOn) && (
                          <p className="mt-2 text-xs font-body text-muted-foreground">
                            {`Checked against the published text on ${formatDay(row.entry.verifiedOn)}.`}
                          </p>
                        )}

                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                          {source && (
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-body text-primary hover:underline"
                            >
                              {`${source.title} →`}
                            </a>
                          )}
                          {/* Back into the other axis of the matrix. These are
                              what make the two halves cross-link densely: 52
                              state pages times their restricted rows, all
                              pointing at the animal pages that already rank. */}
                          <Link
                            to={`/exotic-pet-laws/${row.id}/`}
                            className="text-xs font-body text-primary hover:underline"
                          >
                            {`${row.name} in every state →`}
                          </Link>
                          {row.article && (
                            <Link to={row.article} className="text-xs font-body text-primary hover:underline">
                              Full legal guide →
                            </Link>
                          )}
                          <a
                            href={`#${row.id}`}
                            className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Link to this row
                          </a>
                        </div>
                      </div>
                    </details>
                  );
                })}
              </div>
            </section>
          )}

          {clear.length > 0 && (
            <section className="mt-12">
              <h2 className="font-display font-bold text-2xl text-foreground mb-1">
                {`No restriction found in ${inPlace}`}
              </h2>
              <p className="text-sm font-body text-muted-foreground mb-5">
                {`${clear.length} of ${TRACKED_ANIMAL_COUNT}. Each was read against the same body of law as the entries above and nothing in it reaches them. Local ordinances and tenancy terms still apply and are not on this map.`}
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 list-none p-0">
                {clear.map((row) => (
                  <li key={row.id} id={row.id} className="text-sm font-body scroll-mt-24">
                    <Link
                      to={`/exotic-pet-laws/${row.id}/`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {row.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {unchecked.length > 0 && (
            <section className="mt-12">
              <h2 className="font-display font-bold text-2xl text-foreground mb-1">
                Not checked yet
              </h2>
              <p className="text-sm font-body text-muted-foreground mb-5">
                {`${unchecked.length} of ${TRACKED_ANIMAL_COUNT} have not been read for ${inPlace}. That is a gap in our work, not a clean bill of health: treat them as unknown and ask the agency before relying on it.`}
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 list-none p-0">
                {unchecked.map((row) => (
                  <li key={row.id} id={row.id} className="text-sm font-body scroll-mt-24">
                    <Link
                      to={`/exotic-pet-laws/${row.id}/`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {row.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <CitationBox
            title={`Exotic pet laws in ${j.name}`}
            url={canonical}
            verified={verified}
          />

          <section className="mt-12 rounded-xl border border-border bg-card p-5">
            <h2 className="font-display font-bold text-lg text-foreground mb-2">
              Before you rely on this
            </h2>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {`This page covers ${isState ? 'state' : 'local'} law only. Cities and counties routinely prohibit what ${inPlace} allows, and a lease or HOA agreement can bar an animal that every level of government permits. Check all three, and check them in that order, because the one most likely to stop you is the one closest to your front door.`}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              <Link to="/exotic-pet-laws/state/" className="text-sm font-body text-primary hover:underline">
                Compare every state →
              </Link>
              <Link to="/exotic-pet-laws/map/" className="text-sm font-body text-primary hover:underline">
                Search by animal instead →
              </Link>
              <Link to="/exotic-pet-laws/" className="text-sm font-body text-primary hover:underline">
                How US exotic pet law is structured →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

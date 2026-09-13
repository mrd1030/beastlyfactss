import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LegalStatusMap from '@/components/legal/LegalStatusMap';
import {
  STATE_LEGAL,
  HEAT_BANDS,
  heatBandFor,
  JURISDICTIONS_BY_RESTRICTION,
  TRACKED_ANIMAL_COUNT,
} from '@/lib/data/legalByState';
import { JURISDICTIONS_AZ, CODE_TO_SLUG } from '@/lib/data/stateSlugs';
import { describeVerified } from '@/lib/utils/verifiedDates';
import LegalDisclaimer from '@/components/mdx/LegalDisclaimer';
import CitationBox from '@/components/legal/CitationBox';
import { withBrand } from '@/lib/utils/seo';
import { breadcrumbSchema } from '@/lib/utils/breadcrumbs';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

const SITE = 'https://beastlyfacts.com';
const JURISDICTION_COUNT = JURISDICTIONS_AZ.length;

// The second way into the legal matrix.
//
// /exotic-pet-laws/<animal>/ answers "where is this animal restricted", which is
// the question an owner asks. This side answers "what is restricted here", which
// is the question someone moving, or writing about a state, asks instead. Same
// 2,704 cells, read down the column instead of across the row.
export default function ExoticPetLawsStateIndex() {
  const navigate = useNavigate();

  const paintFor = (code) => heatBandFor(STATE_LEGAL[code]?.gated ?? 0).fill;

  const describeFor = (code, name) => {
    const j = STATE_LEGAL[code];
    if (!j) return `${name}: not in the dataset`;
    return `${name}: ${j.gated} of ${TRACKED_ANIMAL_COUNT} animals banned or permit-gated`;
  };

  const title = 'Exotic Pet Laws by State: All 50 States Ranked';
  const description = `What is actually banned in each US state, ${TRACKED_ANIMAL_COUNT} exotic animals checked against the statutes in all ${JURISDICTION_COUNT} jurisdictions. Pick a state and see every rule.`;
  const canonical = `${SITE}/exotic-pet-laws/state/`;

  const trail = [
    ['Exotic Pet Laws', '/exotic-pet-laws/'],
    ['By State', '/exotic-pet-laws/state/'],
  ];
  const crumbs = breadcrumbSchema(trail);

  // Only when this hub really is the previous history entry, which the stamp
  // it puts on its own links is what tells us. A reader who arrived from a
  // search result has no such entry, and sending them back would leave the
  // site entirely.
  const location = useLocation();
  const backToHub = location.state?.from === 'legal-hub' ? '/exotic-pet-laws/' : null;


  const mostRestrictive = JURISDICTIONS_BY_RESTRICTION.slice(0, 10);

  // Across the whole matrix here, since this page summarises all of it. The
  // ranking is the most quotable thing on the site, so the span it rests on has
  // to travel with it.
  const verified = describeVerified(
    Object.values(STATE_LEGAL).flatMap((j) => j.rows.map((r) => r.entry?.verifiedOn)),
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{withBrand(title)}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(crumbs)}</script>
        <meta property="og:title" content={withBrand(title)} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={withBrand(title)} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-6 pb-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs trail={trail} className="mb-3" historyBackFor={backToHub} />

          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
            Exotic pet laws by state
          </h1>
          {/* One string, not text beside an expression. The prerendered
              paragraph is a single text node and React's hydration text check
              (#425) fails on anything that renders as several. See main.jsx. */}
          <p className="text-muted-foreground font-body leading-relaxed max-w-3xl">
            {`Every jurisdiction below was read for the same ${TRACKED_ANIMAL_COUNT} animals, and every entry quotes the statute or the regulation itself. Pick a state to see what it restricts, what it merely conditions, and which rule says so.`}
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <LegalDisclaimer>
              This page ranks jurisdictions by what their published rules say, not by legal advice. The counts are a research summary, they change as rules change, and county and city ordinances sit underneath all of them. Confirm anything you are relying on with the agency before you acquire an animal.
            </LegalDisclaimer>
          </div>

          <section>
            <h2 className="font-display font-bold text-2xl text-foreground mb-2">
              Where the rules are strictest
            </h2>
            {/* The honest statement of what the colour means. This number gets
                quoted, so the page has to say out loud that it counts our 52
                animals rather than every exotic pet, and that a state can look
                pale here while still conditioning most of what it allows. */}
            <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-3xl mb-5">
              {`The shading counts how many of the ${TRACKED_ANIMAL_COUNT} animals we track are banned outright or gated behind a permit. It is not a count of every exotic pet, and a pale state is not necessarily a permissive one: Minnesota bans only one of the ${TRACKED_ANIMAL_COUNT} but attaches conditions to thirty more, which the shading does not show. Each state page gives the full breakdown.`}
            </p>

            <div className="rounded-xl border border-border bg-card p-3 sm:p-5">
              <LegalStatusMap
                paintFor={paintFor}
                describeFor={describeFor}
                ariaLabel={`Map of the United States shaded by how many of ${TRACKED_ANIMAL_COUNT} exotic animals each state bans or requires a permit for`}
                onSelect={(code) => navigate(`/exotic-pet-laws/state/${CODE_TO_SLUG[code]}/`)}
              />

              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 list-none p-0">
                {HEAT_BANDS.map((band) => (
                  <li key={band.key} className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                    <span
                      className="inline-block w-4 h-4 rounded border border-border"
                      style={{ background: band.fill }}
                      aria-hidden="true"
                    />
                    {band.label}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-display font-bold text-2xl text-foreground mb-5">
              The ten strictest jurisdictions
            </h2>
            <ol className="list-none p-0 space-y-2">
              {mostRestrictive.map((j, i) => {
                const band = heatBandFor(j.gated);
                return (
                  <li key={j.code}>
                    <Link
                      to={`/exotic-pet-laws/state/${CODE_TO_SLUG[j.code]}/`}
                      className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary/50"
                    >
                      <span className="w-6 text-sm font-body font-bold text-muted-foreground tabular-nums">
                        {i + 1}
                      </span>
                      <span className="flex-1 font-body font-semibold text-foreground text-sm">
                        {j.name}
                      </span>
                      <span
                        className="rounded-full px-2.5 py-0.5 text-[11px] font-body font-semibold"
                        style={{ background: band.fill, color: band.text }}
                      >
                        {`${j.gated} of ${TRACKED_ANIMAL_COUNT}`}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>

          <CitationBox
            title="Exotic pet laws by state"
            url={canonical}
            verified={verified}
          />

          {/* Real anchors, not a <select>. A dropdown that navigates on change
              is invisible to a crawler: the change handler never fires, so all
              52 state pages would be reachable only through the sitemap and
              would inherit no internal links from anywhere. The disclosure
              keeps the compactness of a picker on a phone while the links
              underneath stay crawlable. */}
          <section className="mt-12">
            <h2 className="font-display font-bold text-2xl text-foreground mb-1">
              Every jurisdiction, A to Z
            </h2>
            <p className="text-sm font-body text-muted-foreground mb-5">
              {`${JURISDICTION_COUNT} in total: all 50 states, the District of Columbia, and New York City, which runs its own Health Code.`}
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 list-none p-0">
              {JURISDICTIONS_AZ.map((code) => (
                <li key={code} className="text-sm font-body">
                  <Link
                    to={`/exotic-pet-laws/state/${CODE_TO_SLUG[code]}/`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {STATE_LEGAL[code].name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

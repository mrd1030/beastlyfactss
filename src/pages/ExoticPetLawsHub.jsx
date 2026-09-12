import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Map as MapIcon, MapPin } from 'lucide-react';
import LEGAL from '@/lib/data/legalStatus.json';
import { JURISDICTIONS_AZ, CODE_TO_SLUG } from '@/lib/data/stateSlugs';
import * as MdxComponents from '@/components/mdx';
import MdxArticleBody from '@/components/shared/MdxArticleBody';
import { withBrand } from '@/lib/utils/seo';

// The written hub for exotic pet law. Until now this lived at
// /blog/exotic-pet-legal-hub/ while /exotic-pet-laws/ rendered the interactive
// map, which left two pages chasing the same intent: the blog post held 40
// inbound internal links but sat at position 40 in a URL that reads "article",
// and the map URL had no prose in it at all. Worse, the map's prerendered
// snapshot defaulted to one species (serval), so the static HTML for a page
// advertising 52 animals was 88.7% identical to /exotic-pet-laws/serval/.
//
// Splitting them fixes both: the prose gets the section URL and its link
// equity, and the map moves to /exotic-pet-laws/map/ where a default species
// is a UI choice rather than the page's entire indexable content.
//
// The body is the same MDX file the blog post used, rendered through
// MdxArticleBody so it loads via the existing lazy per-article chunk. It must
// NOT be imported statically: mdxPosts.js documents how a static import of
// anything under /content pulls every article into the shared bundle.
const HUB_SLUG = 'exotic-pet-legal-hub';
const SITE = 'https://beastlyfacts.com';

const ANIMALS_AZ = Object.keys(LEGAL.animals).sort((a, b) =>
  LEGAL.animals[a].name.localeCompare(LEGAL.animals[b].name),
);

export default function ExoticPetLawsHub() {
  const stateCount = 52;
  const title = withBrand('Exotic Pet Laws by State: What Is Actually Banned');
  const description = `What US exotic pet law really restricts, how state law is structured, and every species we cover, ${ANIMALS_AZ.length} animals checked against the statutes across ${stateCount} jurisdictions.`;
  const canonical = `${SITE}/exotic-pet-laws/`;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-6 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-3xl mb-2 block" role="img" aria-label="Balance scale">⚖️</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
            Exotic pet laws, state by state
          </h1>
          <p className="text-muted-foreground font-body leading-relaxed">
            No federal law decides whether you can keep most exotic pets. States
            and cities do, and they disagree with each other constantly. Every
            entry here quotes the statute or regulation itself.
          </p>

          {/* The map is its own page. It is the heaviest thing on the section
              and belongs behind a deliberate click, not stacked on top of the
              reading.

              Two ways in, because the dataset answers two different questions
              and only one of them had a page. The map is animal-first ("where
              is the serval banned?"); the state index is jurisdiction-first
              ("what is banned in Texas?"), which is what someone moving, or
              writing about a state, actually asks. */}
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/exotic-pet-laws/map/"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-body font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MapIcon className="w-4 h-4" aria-hidden="true" />
              Open the interactive map
            </Link>
            <Link
              to="/exotic-pet-laws/state/"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-body font-semibold text-foreground transition-colors hover:border-primary/50"
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              Browse by state
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 pb-16">
        <article className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert font-body">
          <MdxArticleBody
            slug={HUB_SLUG}
            components={MdxComponents}
            loadingLabel="Loading…"
          />
        </article>

        {/* Every animal in the dataset, including the 14 with map coverage but
            no written guide yet. This is what makes the hub's static HTML read
            as a hub: without it the page inherits whatever single species the
            map happened to default to. */}
        <section className="max-w-3xl mx-auto mt-12">
          <h2 className="font-display font-bold text-2xl text-foreground mb-1">
            Every animal on the map
          </h2>
          <p className="text-sm font-body text-muted-foreground mb-5">
            {ANIMALS_AZ.length} animals, each checked against all {stateCount}{' '}
            jurisdictions.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 list-none p-0">
            {ANIMALS_AZ.map((id) => (
              <li key={id} className="text-sm font-body">
                <Link
                  to={`/exotic-pet-laws/${id}/`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {LEGAL.animals[id].name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Real anchors rather than a state picker. A <select> that navigates on
            change never fires for a crawler, so the 52 state pages would be
            reachable only from the sitemap and would inherit no internal links
            at all. This list is what actually connects them to the site. */}
        <section className="max-w-3xl mx-auto mt-12">
          <h2 className="font-display font-bold text-2xl text-foreground mb-1">
            Every state, A to Z
          </h2>
          <p className="text-sm font-body text-muted-foreground mb-5">
            {`The same ${ANIMALS_AZ.length} animals read the other way round: what each of the ${JURISDICTIONS_AZ.length} jurisdictions restricts.`}
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 list-none p-0">
            {JURISDICTIONS_AZ.map((code) => (
              <li key={code} className="text-sm font-body">
                <Link
                  to={`/exotic-pet-laws/state/${CODE_TO_SLUG[code]}/`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {LEGAL.jurisdictions[code].name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

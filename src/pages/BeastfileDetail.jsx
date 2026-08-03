import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Globe2, ShieldAlert, Sparkles, ArrowLeft } from 'lucide-react';
import { getBeastfile } from '@/lib/data/beastlypedia';
import RelatedFiles from '@/components/beastlypedia/RelatedFiles';
import { truncateDescription } from '@/lib/utils/truncate';
// Built by scripts/generate-beastlypedia-index.js. Holds only the title, text
// and slug of each matching fact, so the route does not pull in the 197KB
// facts.js barrel to render a handful of strings.
import beastlypediaIndex from '@/lib/generated/beastlypedia-index.json';

const SITE = 'https://beastlyfacts.com';

function Section({ icon: Icon, title, children }) {
  return (
    <section className="mb-6">
      <h2 className="font-display font-bold text-base text-foreground mb-2 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-secondary" />}
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function BeastfileDetail() {
  const { slug } = useParams();
  const beastfile = getBeastfile(slug);

  if (!beastfile) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Helmet>
          <title>Beastfile Not Found | Beastly Facts</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="text-center">
          <span className="text-4xl block mb-3">🔍</span>
          <h1 className="font-display font-bold text-xl text-foreground mb-2">Beastfile not found</h1>
          <Link
            to="/beastlypedia/"
            className="text-secondary text-sm font-display font-semibold hover:underline"
          >
            Back to Beastlypedia
          </Link>
        </div>
      </div>
    );
  }

  const {
    id, name, scientific, alsoKnownAs, tagline, habitat, group,
    overview, origin, notableTraits, conservation, funFacts,
    heroImage, heroAlt, secondaryImage, secondaryAlt, encyclopediaId, relatedFiles,
  } = beastfile;

  // Real facts from the database, already published at /facts/<slug>/. Where an
  // animal has none yet, the authored funFacts below stand in.
  const linkedFacts = beastlypediaIndex.factsFor?.[id] || [];

  const canonical = `${SITE}/beastlypedia/${id}/`;
  // The scientific name is kept out of the title on purpose. With it, longer
  // names blow past 70 characters once " | Beastlypedia | BeastlyFacts" is
  // appended - "Blue Poison Dart Frog (Dendrobates tinctorius azureus)" alone
  // is 54. It appears in the H1 block and the description instead.
  const title = `${name} | Beastlypedia | BeastlyFacts`;
  const description = truncateDescription(`${tagline} ${overview}`);
  // Falls back to the secondary image, then the site hero. A null heroImage
  // would otherwise emit og:image="https://beastlyfacts.com" and every share of
  // an unfinished Beastfile would unfurl blank.
  const shareImage = `${SITE}${heroImage || secondaryImage || '/assets/hero-1200.jpg'}`;

  // schema.org has no Animal type. Thing is the honest choice; the binomial
  // goes in alternateName, which is what a Taxon extension would map to anyway.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    name,
    alternateName: [scientific, ...(alsoKnownAs || [])],
    description: tagline,
    image: shareImage,
    url: canonical,
  };

  return (
    <div className="min-h-screen pb-16">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={shareImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={shareImage} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <Link
          to="/beastlypedia/"
          className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-muted-foreground hover:text-secondary transition-colors mb-3"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Beastlypedia
        </Link>

        {/* The whole entry sits inside one bordered block, so it reads as a
            physical file rather than a page that happens to be about an animal.
            It also fixes the hero: full-bleed meant the banner grew with the
            viewport while the image did not, so on a wide monitor a fixed-height
            strip was cropping away more than half the picture. Bounded by the
            same max-width as the text, the crop is now a constant and modest
            one at any window size. */}
        <article className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg">
          {heroImage ? (
            // Plain img with the full-size original, not LocalImage. LocalImage
            // defaults to the -thumb tier, a 240x240 SQUARE crop, which was
            // being blown up over 4x here and cropped a second time. Even
            // -card@2x at 640x480 is too small for this width.
            <img
              src={heroImage}
              alt={heroAlt || name}
              className="w-full aspect-[3/2] sm:aspect-[16/9] object-cover"
              fetchPriority="high"
              decoding="async"
            />
          ) : (
            <div className="w-full aspect-[3/2] sm:aspect-[16/9] bg-muted flex flex-col items-center justify-center gap-2 border-b-2 border-dashed border-border">
              <span className="text-4xl">📷</span>
              <span className="text-xs font-display font-bold uppercase tracking-wider text-muted-foreground">
                Hero image pending
              </span>
            </div>
          )}

          <div className="p-5 sm:p-8">
        <header className="mb-6">
          <p className="text-[11px] font-display font-bold uppercase tracking-wider text-secondary mb-1">
            {`Beastfile · ${group}`}
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight">
            {name}
          </h1>
          <p className="text-sm text-muted-foreground font-body italic mt-1">{scientific}</p>
          {alsoKnownAs?.length > 0 && (
            <p className="text-xs text-muted-foreground font-body mt-1">
              {`Also known as ${alsoKnownAs.join(', ')}`}
            </p>
          )}
          <p className="text-base text-foreground font-body mt-3 leading-relaxed border-l-4 border-secondary pl-4 italic">
            {tagline}
          </p>
        </header>

        <Section title="Overview">
          <p className="text-sm text-muted-foreground font-body leading-relaxed">{overview}</p>
        </Section>

        {/* Desktop puts the portrait beside the field sections; below lg it
            stacks into the mobile order without any change of content. */}
        <div className="lg:flex lg:gap-8 lg:items-start">
          {secondaryImage && (
            <div className="lg:w-2/5 lg:flex-shrink-0 mb-6 lg:mb-0">
              {/* Cropped by CSS rather than by a generated variant: landscape
                  on mobile where it sits full width between blocks of text, and
                  portrait on desktop where it stands beside the field sections
                  and a wide image would leave the column short.
                  object-cover crops from the centre of the full-size original,
                  so a source of either orientation works. The generated -card
                  tier is deliberately not used here - it is already a cover crop
                  to a fixed landscape box, and cropping a crop would cut the
                  subject twice. */}
              <img
                src={secondaryImage}
                alt={secondaryAlt || name}
                className="w-full rounded-2xl object-cover aspect-[16/10] lg:aspect-[3/4]"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}

          <div className="lg:flex-1">
            <Section icon={Globe2} title="Origin">
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{origin}</p>
            </Section>

            <Section icon={MapPin} title="Habitat">
              <span className="inline-block text-xs font-display font-bold px-3 py-1.5 rounded-full bg-muted text-foreground">
                {habitat}
              </span>
            </Section>

            {notableTraits?.length > 0 && (
              <Section icon={Sparkles} title="Notable Traits">
                <ul className="space-y-1.5">
                  {notableTraits.map((t, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground font-body leading-relaxed flex gap-2"
                    >
                      <span className="text-secondary flex-shrink-0">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            <Section icon={ShieldAlert} title="Conservation">
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {conservation}
              </p>
            </Section>
          </div>
        </div>

        {/* bg-muted rather than bg-card below: this sits inside the file block
            now, and a card on a card just reads as a rendering mistake. */}
        {(linkedFacts.length > 0 || funFacts?.length > 0) && (
          <div className="mt-4 bg-muted/50 border border-border/60 rounded-2xl p-5">
            <h2 className="font-display font-bold text-base text-foreground mb-3">🤯 Fun Facts</h2>

            {linkedFacts.length > 0 ? (
              // The real entries from the fact database, each linking to its own
              // page. Writing these a second time in the Beastfile would mean two
              // versions of the same claim drifting apart, and would waste the
              // internal link.
              <ul className="space-y-2">
                {linkedFacts.map((f, i) => (
                  <li key={f.slug}>
                    <Link
                      to={`/facts/${f.slug}/`}
                      className="group flex gap-2.5 rounded-xl -mx-2 px-2 py-1.5 hover:bg-background/60 transition-colors"
                    >
                      <span className="text-secondary font-display font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span>
                        <span className="block font-display font-bold text-sm text-foreground group-hover:text-secondary transition-colors">
                          {f.title}
                        </span>
                        <span className="block text-sm text-muted-foreground font-body leading-relaxed mt-0.5">
                          {f.fact}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              // Fallback for animals the fact database does not cover yet.
              <ul className="space-y-2.5">
                {funFacts.map((f, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground font-body leading-relaxed flex gap-2.5"
                  >
                    <span className="text-secondary font-display font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <RelatedFiles slugs={relatedFiles} />

        {encyclopediaId && (
          <div className="mt-6 bg-secondary/5 border border-secondary/20 rounded-2xl p-4">
            <p className="text-sm text-foreground font-body">
              {`Kept as a pet? `}
              <Link
                to={`/encyclopedia/animal/${encyclopediaId}/`}
                className="text-secondary font-display font-semibold hover:underline"
              >
                {`See the ${name} care entry in the Encyclopedia`}
              </Link>
            </p>
          </div>
        )}
          </div>
        </article>
      </div>
    </div>
  );
}

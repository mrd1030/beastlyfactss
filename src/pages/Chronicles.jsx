import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, Clock } from 'lucide-react';
import groq from 'groq';
import { client } from '@/lib/sanity';
import { CHRONICLES_SERIES, mdxChroniclesPosts, groupChronicles, chroniclesPath } from '@/lib/chronicles';
import { truncateDescription } from '@/lib/utils/truncate';
import PortableTextRenderer from '@/components/PortableTextRenderer';
import * as MdxComponents from '@/components/mdx';
import SanityImage from '@/components/SanityImage';
import PostEngagement from '@/components/blog/PostEngagement';
import ReadingProgressBar from '@/components/blog/ReadingProgressBar';
import BeehiivSubscribe from '@/components/blog/BeehiivSubscribe';

// Matched by slug prefix, not category tag - a chronicles post is identified by its
// stable "chronicles-of-<character>" slug (see src/lib/chronicles.js), so this can't
// silently break if the "Short Stories" category gets renamed/re-slugged in Sanity.
const STORY_QUERY = groq`*[_type == "post" && defined(slug.current) && slug.current match "chronicles-of-*"] | order(publishedAt asc) {
  _id, title, slug, excerpt, seoTitle, seoDescription, seoImage, mainImage, publishedAt, readTime, body
}`;

// Story titles all start with "Chronicles of <character>:" - the sidebar and
// cards drop that prefix so the episode name is what stands out.
const episodeTitle = (title) => title?.replace(/^Chronicles of [^:]+:\s*/i, '') || title;

export default function Chronicles() {
  const { seriesId, part: partParam } = useParams();
  const [sanityStories, setSanityStories] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    client.fetch(STORY_QUERY)
      .then(posts => setSanityStories(posts || []))
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  const bySeries = useMemo(
    () => groupChronicles([...mdxChroniclesPosts, ...sanityStories]),
    [sanityStories]
  );

  // /chronicles/ has no content of its own - Dex is the flagship series, so
  // it acts as the default tab (mirrored by a 301 in public/_redirects).
  if (!seriesId) return <Navigate to="/chronicles/dex/" replace />;

  const series = CHRONICLES_SERIES.find(s => s.id === seriesId);
  if (!series) return <Navigate to="/chronicles/dex/" replace />;

  const part = partParam ? parseInt(partParam, 10) : null;
  if (partParam && (String(part) !== partParam || part < 1)) {
    return <Navigate to={chroniclesPath(series.id)} replace />;
  }

  const parts = bySeries[series.id] || [];
  const isReader = Boolean(part);
  const story = isReader ? parts[part - 1] || null : null;

  const canonicalUrl = `https://beastlyfacts.com${chroniclesPath(series.id, part)}`;
  const pageTitle = isReader && story
    ? `${story.seoTitle || story.title} | Beastly Facts`
    : `Chronicles of ${series.character} | Beastly Facts`;
  const pageDescription = truncateDescription(
    (isReader && (story?.seoDescription || story?.excerpt)) ||
    `Chronicles of ${series.character} - ${series.blurb} Short fiction from the Beastly Facts universe.`
  );

  return (
    <div className="min-h-screen">
      {isReader && <ReadingProgressBar />}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {/* A part index beyond what exists (stale link) renders a soft "not
            yet written" state - keep those out of the index. */}
        <meta name="robots" content={isReader && loaded && !story ? 'noindex,follow' : 'index,follow'} />
        <meta property="og:title" content={(isReader && (story?.seoTitle || story?.title)) || `Chronicles of ${series.character}`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content={isReader ? 'article' : 'website'} />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`Chronicles of ${series.character} - Beastly Facts`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={(isReader && (story?.seoTitle || story?.title)) || `Chronicles of ${series.character}`} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>

      {/* Header + series tabs */}
      <div className="bg-gradient-to-b from-secondary/5 to-transparent pt-12 pb-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Open book">📖</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
              The Chronicles
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-xl">
              Short fiction from the Beastly Facts universe - each series told from the animal's point of view.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mt-5">
            {CHRONICLES_SERIES.map(s => (
              <Link
                key={s.id}
                to={chroniclesPath(s.id)}
                className={`px-4 py-2 rounded-full text-xs font-display font-semibold transition-all flex items-center gap-1.5 ${
                  s.id === series.id
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                <span>{s.emoji}</span> {s.shortName}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            {!isReader ? (
              <SeriesLanding series={series} parts={parts} loaded={loaded} />
            ) : !loaded && !story ? (
              <div className="text-center py-20">
                <span className="text-4xl block mb-3 animate-pulse">{series.emoji}</span>
                <p className="text-sm text-muted-foreground font-body">Fetching the story…</p>
              </div>
            ) : !story ? (
              <div className="text-center py-20">
                <span className="text-4xl block mb-3">🪶</span>
                <p className="font-display font-bold text-foreground mb-1">This part hasn't been written yet</p>
                <p className="text-sm text-muted-foreground font-body mb-4">
                  {series.shortName} is still working on it. Check back soon!
                </p>
                <Link to={chroniclesPath(series.id)} className="text-sm font-display font-semibold text-secondary hover:underline">
                  All {series.shortName} stories →
                </Link>
              </div>
            ) : (
              <>
                <Link
                  to={chroniclesPath(series.id)}
                  className="flex items-center gap-1.5 text-sm font-display font-semibold text-muted-foreground hover:text-foreground transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" /> All {series.shortName} stories
                </Link>
                <StoryReader key={story._id || story.slug?.current} story={story} part={part} />
                <PartPager seriesId={series.id} parts={parts} current={part} className="mt-10" />
                <PostEngagement
                  postId={story._id || story.id}
                  postTitle={story.title}
                  postSlug={story.slug?.current || story.id}
                />
              </>
            )}
          </div>

          <ChroniclesSidebar bySeries={bySeries} activeSeriesId={series.id} activePart={part} />
        </div>
      </div>
    </div>
  );
}

// Landing view: the series' stories listed as cards, newest-reader-friendly
// order (Part 1 first - it's fiction, start at the beginning).
function SeriesLanding({ series, parts, loaded }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display font-bold text-xl text-foreground">
          {series.emoji} Chronicles of {series.character}
        </h2>
        <p className="text-sm text-muted-foreground font-body mt-1">{series.blurb}</p>
      </div>

      {parts.length === 0 ? (
        <div className="text-center py-16">
          <span className="text-4xl block mb-3 animate-pulse">{series.emoji}</span>
          <p className="text-sm text-muted-foreground font-body">
            {loaded ? 'No stories here yet - check back soon!' : 'Fetching the stories…'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {parts.map((p, i) => (
            <StoryCard key={p._id || p.slug?.current || i} story={p} seriesId={series.id} part={i + 1} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

function StoryCard({ story, seriesId, part, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
      <Link
        to={chroniclesPath(seriesId, part)}
        className="flex gap-4 items-start bg-card border border-border rounded-2xl p-4 hover:border-secondary/40 hover:shadow-md transition-all group"
      >
        <div className="w-24 h-16 sm:w-32 sm:h-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
          {story.mainImage ? (
            <SanityImage image={story.mainImage} alt={story.title} width={300} className="w-full h-full object-cover" />
          ) : story.image ? (
            <img src={story.image} alt={story.imageAlt || story.title} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl">📖</div>
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-xs font-display font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
              Part {part}
            </span>
            <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
              <Clock className="w-3 h-3" /> {new Date(story.publishedAt).toLocaleDateString()}
            </span>
            {story.readTime && (
              <span className="text-xs text-muted-foreground font-body">{story.readTime} min read</span>
            )}
          </div>
          <h3 className="font-display font-bold text-base text-foreground group-hover:text-secondary transition-colors leading-snug">
            {episodeTitle(story.title)}
          </h3>
          {story.excerpt && (
            <p className="text-xs text-muted-foreground font-body mt-1 leading-relaxed line-clamp-2">{story.excerpt}</p>
          )}
          <span className="inline-flex items-center gap-1 mt-2 text-xs font-display font-semibold text-secondary">
            Read this part <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

// Numbered part pills + prev/next arrows at the bottom of the reader.
function PartPager({ seriesId, parts, current, className = '' }) {
  const prev = current > 1 ? current - 1 : null;
  const next = current < parts.length ? current + 1 : null;

  return (
    <div className={`flex items-center justify-between gap-3 ${className}`}>
      {prev ? (
        <Link
          to={chroniclesPath(seriesId, prev)}
          className="flex items-center gap-1.5 text-xs font-display font-semibold text-muted-foreground hover:text-foreground bg-card border border-border px-3 py-2 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Part {prev}
        </Link>
      ) : <span className="w-20" />}

      <div className="flex items-center gap-1.5 flex-wrap justify-center">
        {parts.map((p, i) => {
          const n = i + 1;
          return (
            <Link
              key={p._id || p.slug?.current || n}
              to={chroniclesPath(seriesId, n)}
              title={p.title}
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-display font-bold transition-colors ${
                n === current
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent'
              }`}
            >
              {n}
            </Link>
          );
        })}
      </div>

      {next ? (
        <Link
          to={chroniclesPath(seriesId, next)}
          className="flex items-center gap-1.5 text-xs font-display font-semibold text-muted-foreground hover:text-foreground bg-card border border-border px-3 py-2 rounded-xl transition-colors"
        >
          Part {next} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      ) : <span className="w-20" />}
    </div>
  );
}

function StoryReader({ story, part }) {
  const contentRef = useRef(null);

  // Flipping parts mid-scroll should start the new part at the top of the
  // page, not wherever the previous part left the scroll position.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [story]);

  return (
    <motion.article initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className="text-xs font-display font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
          Part {part}
        </span>
        <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
          <Clock className="w-3 h-3" /> {new Date(story.publishedAt).toLocaleDateString()}
        </span>
        {story.readTime && (
          <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
            <BookOpen className="w-3 h-3" /> {story.readTime} min read
          </span>
        )}
      </div>

      <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-5 leading-tight">
        {story.title}
      </h2>

      {story.mainImage ? (
        <div className="mb-8">
          <SanityImage image={story.mainImage} alt={story.title} width={1200} className="w-full rounded-2xl shadow-lg" />
        </div>
      ) : story.image ? (
        <div className="mb-8">
          <img src={story.image} alt={story.imageAlt || story.title} className="w-full rounded-2xl shadow-lg" loading="lazy" />
        </div>
      ) : null}

      <div ref={contentRef} className="prose prose-sm sm:prose-base max-w-none dark:prose-invert font-body">
        {story.source === 'mdx' && story.content ? (
          // story.content is a React.lazy component (see mdxPosts.js); the
          // [data-mdx-loading] marker tells prerender.mjs the story body
          // hasn't rendered yet, so it never captures the fallback.
          <React.Suspense fallback={<div data-mdx-loading className="py-12 text-center text-sm text-muted-foreground font-body">Loading story…</div>}>
            {React.createElement(story.content, { components: MdxComponents })}
          </React.Suspense>
        ) : story.body ? (
          <PortableTextRenderer content={story.body} />
        ) : null}
      </div>
    </motion.article>
  );
}

// Sticky side nav: every story across both series, a route back to the main
// blog, and the newsletter box - mirrors the Critter Digest's sidebar.
function ChroniclesSidebar({ bySeries, activeSeriesId, activePart }) {
  return (
    <div className="lg:sticky lg:top-16 self-start max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar-hide pb-4 space-y-5">
      <div className="bg-card border border-border rounded-2xl p-5">
        <h3 className="font-display font-bold text-sm text-foreground mb-3">📖 All Stories</h3>
        <div className="space-y-4">
          {CHRONICLES_SERIES.map(s => (
            <div key={s.id}>
              <Link
                to={chroniclesPath(s.id)}
                className={`text-xs font-display font-bold uppercase tracking-wide transition-colors ${
                  s.id === activeSeriesId && !activePart ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {s.emoji} {s.shortName}
              </Link>
              <div className="mt-1.5 space-y-1">
                {(bySeries[s.id] || []).map((p, i) => {
                  const n = i + 1;
                  const isActive = s.id === activeSeriesId && n === activePart;
                  return (
                    <Link
                      key={p._id || p.slug?.current || n}
                      to={chroniclesPath(s.id, n)}
                      className={`block px-2.5 py-1.5 rounded-lg text-xs font-body transition-colors ${
                        isActive
                          ? 'bg-accent/10 text-accent font-semibold'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      Part {n} - {episodeTitle(p.title)}
                    </Link>
                  );
                })}
                {(bySeries[s.id] || []).length === 0 && (
                  <p className="px-2.5 py-1.5 text-xs font-body text-muted-foreground/60 italic">Coming soon…</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link to="/blog/" className="block bg-card border border-border rounded-2xl p-5 hover:border-secondary/40 transition-colors group">
        <p className="text-xs font-display font-bold text-secondary mb-1">📰 The Critter Digest</p>
        <p className="text-xs text-muted-foreground font-body leading-relaxed">
          Care guides, husbandry deep-dives, and fun facts - the main Beastly Facts blog.
        </p>
        <span className="inline-block mt-2 text-xs font-display font-semibold text-secondary group-hover:underline">
          Back to the Digest →
        </span>
      </Link>

      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="font-display font-bold text-base text-foreground mb-1">Subscribe - it's free</h3>
        <p className="text-xs text-muted-foreground font-body mb-4">New stories and articles straight to your inbox. No spam, ever. 🐾</p>
        <BeehiivSubscribe />
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { ExternalLink, X } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/api/supabaseClient';
import CrossLinkCta from '@/components/shared/CrossLinkCta';
import { SocialLinksRow } from '@/components/shared/SocialIcons';
import { captionHasTag, splitCaptionByHashtags } from '@/lib/utils/hashtags';

// Caption text with each #hashtag swapped for a link to its /feed/tag/ page.
// Plain text segments render as-is; a hashtag keeps its original typed case
// on screen but links to the lowercased tag (see splitCaptionByHashtags).
function CaptionWithHashtags({ caption }) {
  return (
    <p className="text-sm font-body text-foreground leading-relaxed whitespace-pre-wrap">
      {splitCaptionByHashtags(caption).map((part, i) =>
        part.type === 'tag' ? (
          <Link
            key={i}
            to={`/feed/tag/${part.tag}/`}
            className="font-semibold text-secondary hover:underline"
          >
            {`#${part.value}`}
          </Link>
        ) : (
          <React.Fragment key={i}>{part.value}</React.Fragment>
        )
      )}
    </p>
  );
}

export default function Feed() {
  const { tag } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Skipped during prerendering, same reasoning as PostEngagement.jsx: a
    // fetch that resolves before prerender.mjs captures the page would bake
    // today's posts into the static HTML, which a real client's hydration-time
    // first render (always starting at the useState defaults) can't match -
    // a hydration mismatch. Staying at the loading state here is what the
    // static snapshot shows; every real visitor's JS fetches for real right
    // after mount.
    if (window.__IS_PRERENDER__) return;
    if (!isSupabaseConfigured) { setLoading(false); setError(true); return; }
    let cancelled = false;
    supabase
      .from('social_posts')
      .select('id, media_type, media_url, caption, link_url, created_at')
      .order('created_at', { ascending: false })
      .then(({ data, error: fetchError }) => {
        if (cancelled) return;
        if (fetchError) { setError(true); return; }
        setPosts(data || []);
      })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  // Tag pages are a client-side filter over the same fetch, not a separate
  // query - the feed is small enough that this is simpler than round-tripping
  // to Supabase per tag, and it keeps the "loading" flash identical on both
  // /feed/ and /feed/tag/:tag/.
  const displayPosts = tag ? posts.filter(p => captionHasTag(p.caption, tag)) : posts;

  const pageTitle = tag ? `#${tag} | Feed | Beastly Facts` : 'Feed | Beastly Facts';
  const pageDescription = tag
    ? `Posts tagged #${tag} on the Beastly Facts feed.`
    : "Photos and clips from Beastly Facts. The cool stuff we post on social media, animal pics and behind the scenes moments, collected here too.";
  const canonicalUrl = tag ? `https://beastlyfacts.com/feed/tag/${tag}/` : 'https://beastlyfacts.com/feed/';

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Tag pages are a live filter over user-typed hashtags, not curated
            content - same reasoning as noindexing /search/, kept out of the
            index rather than left to accumulate as thin duplicate pages. */}
        <meta name="robots" content={tag ? 'noindex,follow' : 'index,follow'} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts - amazing animal trivia and care guides" />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Camera with flash">📱</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
              {tag ? `#${tag}` : 'The Feed'}
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-lg">
              {tag
                ? `Posts tagged #${tag}.`
                : "Photos and clips from around Beastly Facts - the cool stuff that doesn't fit anywhere else on the site."}
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mt-4">
            {tag && (
              <Link
                to="/feed/"
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 font-body text-sm font-semibold text-foreground transition-all hover:border-secondary/50 hover:text-secondary"
              >
                <X className="h-3.5 w-3.5" />
                Clear filter
              </Link>
            )}
            <CrossLinkCta to="/gallery/" label="Browse the photo gallery" className="" />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        {loading ? (
          <p className="text-center text-sm text-muted-foreground font-body py-16">Loading...</p>
        ) : error ? (
          <p className="text-center text-sm text-muted-foreground font-body py-16">The feed couldn't load right now.</p>
        ) : displayPosts.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3">🐾</span>
            <p className="font-body font-bold text-foreground">
              {tag ? `Nothing tagged #${tag} yet.` : 'Nothing here yet - check back soon!'}
            </p>
            {tag && (
              <Link to="/feed/" className="text-sm font-body font-semibold text-secondary hover:underline mt-2 inline-block">
                See the whole feed →
              </Link>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {displayPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i, 5) * 0.05, duration: 0.3 }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="bg-muted flex items-center justify-center max-h-[32rem]">
                  {post.media_type === 'video' ? (
                    <video src={post.media_url} controls playsInline className="w-full max-h-[32rem]" />
                  ) : (
                    <img
                      src={post.media_url}
                      alt={post.caption || 'Beastly Facts feed post'}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      className="w-full max-h-[32rem] object-contain"
                    />
                  )}
                </div>
                <div className="p-4 sm:p-5">
                  {post.caption && <CaptionWithHashtags caption={post.caption} />}
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-muted-foreground font-body">
                      {new Date(post.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    {post.link_url && (
                      <a
                        href={post.link_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-body font-semibold text-secondary hover:underline"
                      >
                        See original <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/60">
                    <span className="text-[10px] font-body font-bold uppercase tracking-wide text-muted-foreground">
                      Follow Beastly Facts
                    </span>
                    <SocialLinksRow />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

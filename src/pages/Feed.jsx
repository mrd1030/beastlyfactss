import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from '@/lib/motion-safe';
import { ExternalLink } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/api/supabaseClient';
import CrossLinkCta from '@/components/shared/CrossLinkCta';

export default function Feed() {
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

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Feed | Beastly Facts</title>
        <meta name="description" content="Photos and clips from Beastly Facts - the cool stuff we post on social media, collected here too." />
        <link rel="canonical" href="https://beastlyfacts.com/feed/" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Feed | Beastly Facts" />
        <meta property="og:description" content="Photos and clips from Beastly Facts - the cool stuff we post on social media, collected here too." />
        <meta property="og:url" content="https://beastlyfacts.com/feed/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Camera with flash">📱</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">The Feed</h1>
            <p className="text-sm text-muted-foreground font-body max-w-lg">
              Photos and clips from around Beastly Facts - the cool stuff that doesn't fit anywhere else on the site.
            </p>
          </motion.div>

          <CrossLinkCta to="/gallery/" label="Browse the photo gallery" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        {loading ? (
          <p className="text-center text-sm text-muted-foreground font-body py-16">Loading...</p>
        ) : error ? (
          <p className="text-center text-sm text-muted-foreground font-body py-16">The feed couldn't load right now.</p>
        ) : posts.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3">🐾</span>
            <p className="font-body font-bold text-foreground">Nothing here yet - check back soon!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post, i) => (
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
                  {post.caption && (
                    <p className="text-sm font-body text-foreground leading-relaxed whitespace-pre-wrap">{post.caption}</p>
                  )}
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
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

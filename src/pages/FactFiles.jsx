import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChevronRight } from 'lucide-react';
import { getMdxPostsByCategory } from '@/lib/mdxPosts';

export default function FactFiles() {
  const posts = [...getMdxPostsByCategory('Fun Facts')].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  const canonicalUrl = 'https://beastlyfacts.com/fact-files/';
  const pageTitle = 'Fact Files - Deep-Dive Animal Facts | Beastly Facts';
  const pageDescription = 'In-depth fact files on your favorite species - surprising, well-researched deep dives into reptiles, exotics, and more.';

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": posts.map((post, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://beastlyfacts.com/blog/${post.slug.current}/`,
      "name": post.title,
    })),
  };

  return (
    <div className="min-h-screen pt-12 px-4 sm:px-6 pb-16">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <span className="text-3xl mb-2 block">🗂️</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">Fact Files</h1>
          <p className="text-sm text-muted-foreground font-body max-w-lg">
            Deep-dive fact files on your favorite species - the surprising, well-researched stuff that goes beyond a quick fact card.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
            >
              <Link to={`/blog/${post.slug.current}/`} className="group block h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-secondary/50 hover:shadow-md hover:shadow-secondary/10 transition-all">
                {post.image && (
                  <div className="aspect-video overflow-hidden">
                    <img src={post.image} alt={post.imageAlt || post.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="font-display font-bold text-sm text-foreground group-hover:text-secondary transition-colors leading-snug mb-2">
                    {post.title}
                  </h2>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed line-clamp-3 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs font-display font-semibold text-muted-foreground">
                    {post.readTime && (
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime} min read</span>
                    )}
                    <span className="flex items-center gap-1 text-secondary group-hover:gap-1.5 transition-all ml-auto">
                      Read <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <span className="text-4xl block mb-3">🔍</span>
            <p className="text-sm text-muted-foreground font-body">No fact files yet - check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}

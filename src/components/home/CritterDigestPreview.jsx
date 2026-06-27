import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { client } from '@/lib/sanity';
import groq from 'groq';
import CompactPostCard from '@/components/shared/CompactPostCard';

import { blogPosts as localPosts } from '@/lib/data/newsletters';
import { mdxPosts } from '@/lib/mdxPosts';

const QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id, title, slug, excerpt, mainImage, publishedAt, readTime,
  "category": categories[0]->title,
  "categorySlug": categories[0]->slug.current
}`;

export default function CritterDigestPreview() {
  const [sanityPosts, setSanityPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    client.fetch(QUERY)
      .then(data => {
        setSanityPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Helper to safely get slug as string
  const getSlug = (post) => {
    if (!post) return '';
    if (typeof post.slug === 'string') return post.slug;
    if (post.slug?.current) return post.slug.current;
    return post._id || post.id || '';
  };

  // Merge, normalize, and sort
  const allPosts = [
    ...sanityPosts,
    ...localPosts.map(post => ({
      ...post,
      _id: post.id || post._id,
      publishedAt: post.date,
      mainImage: null,
      categorySlug: null,
      slug: { current: getSlug(post) }   // normalize to same shape as Sanity
    })),
    ...mdxPosts.map(post => ({
      ...post,
      _id: post._id || post.id,
      slug: { current: getSlug(post) }
    })),
  ].sort((a, b) => {
    const dateA = new Date(a.publishedAt || a.date || 0);
    const dateB = new Date(b.publishedAt || b.date || 0);
    return dateB - dateA;
  });

  const previewPosts = allPosts.slice(0, 5);

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-6"
        >
          <div>
            <span className="text-2xl block mb-1">📰</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
              Latest Articles
            </h2>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              Care guides, deep-dives, and more from our blog
            </p>
          </div>
          <Link to="/blog" className="hidden sm:flex items-center gap-1 text-xs font-display font-semibold text-secondary hover:underline flex-shrink-0">
            View all articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {loading ? (
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-20 bg-muted rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {previewPosts.map((post, i) => {
              const postSlug = getSlug(post);

              return (
                <motion.div
                  key={post._id || post.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <CompactPostCard
                    post={post}
                    onClick={() => navigate(`/blog/${postSlug}`)}
                  />
                </motion.div>
              );
            })}
          </div>
        )}

        <div className="text-center mt-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-secondary hover:underline"
          >
            View all articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
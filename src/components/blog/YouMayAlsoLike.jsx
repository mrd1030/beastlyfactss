import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '@/lib/sanity';
import groq from 'groq';
import CompactPostCard from '@/components/shared/CompactPostCard';

export default function YouMayAlsoLike({ currentPostId, categorySlug, category, onSelectPost }) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!currentPostId) return;

    // Try category-based related first, fall back to recent
    const query = categorySlug
      ? groq`*[_type == "post" && defined(slug.current) && _id != $id && categories[]->slug.current match $catSlug] | order(publishedAt desc)[0...6] {
          _id, title, slug, excerpt, mainImage, publishedAt, readTime,
          "category": categories[0]->title,
          "categorySlug": categories[0]->slug.current
        }`
      : groq`*[_type == "post" && defined(slug.current) && _id != $id] | order(publishedAt desc)[0...6] {
          _id, title, slug, excerpt, mainImage, publishedAt, readTime,
          "category": categories[0]->title,
          "categorySlug": categories[0]->slug.current
        }`;

    const params = categorySlug
      ? { id: currentPostId, catSlug: `*${categorySlug}*` }
      : { id: currentPostId };

    client.fetch(query, params)
      .then(data => {
        if (data.length < 3) {
          // Fallback: just grab recent posts excluding current
          return client.fetch(
            groq`*[_type == "post" && defined(slug.current) && _id != $id] | order(publishedAt desc)[0...6] {
              _id, title, slug, excerpt, mainImage, publishedAt, readTime,
              "category": categories[0]->title,
              "categorySlug": categories[0]->slug.current
            }`,
            { id: currentPostId }
          );
        }
        return data;
      })
      .then(data => setRelated(data.slice(0, 6)))
      .catch(console.error);
  }, [currentPostId, categorySlug]);

  if (related.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-12 pt-8 border-t border-border"
    >
      <h2 className="font-display font-bold text-xl text-foreground mb-4">
        You May Also Like
      </h2>
      <div className="space-y-3">
        {related.map((post, i) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <CompactPostCard post={post} onClick={() => onSelectPost(post)} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
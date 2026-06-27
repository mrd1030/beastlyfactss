import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '@/lib/sanity';
import groq from 'groq';
import CompactPostCard from '@/components/shared/CompactPostCard';

// Full post query — includes body so the article renders completely
const FULL_POST_FIELDS = `
  _id, title, slug, excerpt, mainImage, publishedAt, readTime, body,
  "category": categories[0]->title,
  "categorySlug": categories[0]->slug.current,
  "allCategories": categories[]->title,
  "allCategorySlugs": categories[]->slug.current
`;

export default function YouMayAlsoLike({ currentPostId, categorySlug, onSelectPost }) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!currentPostId) return;

    const query = categorySlug
      ? groq`*[_type == "post" && defined(slug.current) && _id != $id && $catSlug in categories[]->slug.current] | order(publishedAt desc)[0...6] { ${FULL_POST_FIELDS} }`
      : groq`*[_type == "post" && defined(slug.current) && _id != $id] | order(publishedAt desc)[0...6] { ${FULL_POST_FIELDS} }`;

    const params = categorySlug ? { id: currentPostId, catSlug: categorySlug } : { id: currentPostId };

    client.fetch(query, params)
      .then(data => {
        if (data.length < 3) {
          return client.fetch(
            groq`*[_type == "post" && defined(slug.current) && _id != $id] | order(publishedAt desc)[0...6] { ${FULL_POST_FIELDS} }`,
            { id: currentPostId }
          );
        }
        return data;
      })
      .then(data => setRelated(data.slice(0, 4)))
      .catch(() => {});
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
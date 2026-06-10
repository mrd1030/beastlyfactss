import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { client } from '@/lib/sanity';
import groq from 'groq';
import { CATEGORIES, getCategoryBySlug } from '@/lib/data/categories';
import CompactPostCard from '@/components/shared/CompactPostCard';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('newest');

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    const query = groq`*[_type == "post" && defined(slug.current) && (
      $slug in categories[]->slug.current ||
      $slug in tags
    )] | order(publishedAt desc) {
      _id, title, slug, excerpt, mainImage, publishedAt, readTime,
      "category": categories[0]->title
    }`;
    client.fetch(query, { slug }).then(data => {
      setPosts(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [slug]);

  const sorted = [...posts].sort((a, b) => {
    const da = new Date(a.publishedAt), db = new Date(b.publishedAt);
    return sort === 'newest' ? db - da : da - db;
  });

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="text-4xl mb-3 block">🔍</span>
          <h1 className="font-display font-bold text-xl text-foreground">Category not found</h1>
          <Link to="/categories" className="text-secondary text-sm mt-2 block">← Back to Categories</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
        <nav className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/categories" className="hover:text-foreground transition-colors">Categories</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{category.label}</span>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-b from-accent/5 to-transparent pt-6 pb-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-4xl mb-2 block">{category.emoji}</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-1">{category.label}</h1>
            <p className="text-sm text-muted-foreground font-body max-w-lg">{category.description}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        {/* Related categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.filter(c => c.slug !== slug).slice(0, 6).map(c => (
            <Link key={c.slug} to={`/category/${c.slug}`}
              className="text-xs font-display font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all flex items-center gap-1">
              {c.emoji} {c.label}
            </Link>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-body text-muted-foreground">
            {loading ? 'Loading…' : `${posts.length} article${posts.length !== 1 ? 's' : ''}`}
          </p>
          <div className="flex gap-2">
            {['newest', 'oldest'].map(s => (
              <button key={s} onClick={() => setSort(s)}
                className={`text-xs font-display font-semibold px-3 py-1 rounded-full transition-all ${sort === s ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        {loading ? (
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-20 bg-muted rounded-xl animate-pulse" />
            ))}
          </div>
        ) : sorted.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3">{category.emoji}</span>
            <p className="font-display font-bold text-foreground">No articles yet</p>
            <p className="text-sm text-muted-foreground font-body mt-1">Check back soon — more content is on the way!</p>
            <Link to="/categories" className="text-secondary text-sm mt-4 block">← Browse all categories</Link>
          </div>
        ) : (
          <div className="space-y-3">
            {sorted.map((post, i) => (
              <motion.div key={post._id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                <CompactPostCard post={post} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Back link */}
        <div className="mt-10 pt-6 border-t border-border">
          <Link to="/categories" className="text-sm font-display font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            ← All Categories
          </Link>
        </div>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { client } from '@/lib/sanity';
import groq from 'groq';
import CompactPostCard from '@/components/shared/CompactPostCard';

const CATEGORY_QUERY = groq`*[_type == "category" && slug.current == $slug][0] {
  _id, title, "slug": slug.current, description
}`;

const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current) && $slug in categories[]->slug.current] | order(publishedAt desc) {
  _id, title, slug, excerpt, mainImage, publishedAt, readTime,
  "category": categories[0]->title,
  "categorySlug": categories[0]->slug.current,
  "allCategories": categories[]->title,
  "allCategorySlugs": categories[]->slug.current
}`;

const ALL_CATS_QUERY = groq`*[_type == "category"] | order(title asc) {
  _id, title, "slug": slug.current,
  "count": count(*[_type == "post" && references(^._id)])
}`;

export default function CategoryPage() {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('newest');
  const [notFound, setNotFound] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setNotFound(false);
    setFetchError(false);

    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 8000));
    Promise.race([
      Promise.all([
        client.fetch(CATEGORY_QUERY, { slug }),
        client.fetch(POSTS_QUERY, { slug }),
        client.fetch(ALL_CATS_QUERY),
      ]),
      timeout,
    ]).then(([cat, postsData, cats]) => {
      if (!cat) setNotFound(true);
      setCategory(cat);
      setPosts(postsData);
      setAllCategories(cats.filter(c => c.count > 0));
      setLoading(false);
    }).catch(() => {
      setFetchError(true);
      setLoading(false);
    });
  }, [slug]);

  const sorted = [...posts].sort((a, b) => {
    const da = new Date(a.publishedAt), db = new Date(b.publishedAt);
    return sort === 'newest' ? db - da : da - db;
  });

  if (!loading && fetchError) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <span className="text-4xl mb-3 block">😿</span>
          <h2 className="font-display font-bold text-xl text-foreground mb-2">Couldn't load this category</h2>
          <p className="text-sm text-muted-foreground font-body mb-4">Something went wrong. Please try again.</p>
          <button onClick={() => window.location.reload()} className="text-sm font-display font-semibold text-secondary hover:underline">
            Refresh
          </button>
        </div>
      </div>
    );
  }

  if (!loading && notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="text-4xl mb-3 block">🔍</span>
          <h1 className="font-display font-bold text-xl text-foreground">Category not found</h1>
          <Link to="/blog" className="text-secondary text-sm mt-2 block">← Back to Critter Digest</Link>
        </div>
      </div>
    );
  }

  const categoryTitle = category?.title || slug;
  const categoryDescription = category?.description
    || `Explore all ${categoryTitle} articles and care guides on Beastly Facts.`;
  const canonicalUrl = `https://beastlyfacts.com/category/${slug}/`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beastlyfacts.com/" },
      { "@type": "ListItem", "position": 2, "name": "Critter Digest", "item": "https://beastlyfacts.com/blog" },
      { "@type": "ListItem", "position": 3, "name": categoryTitle, "item": canonicalUrl },
    ],
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{categoryTitle} Articles & Care Guides | Beastly Facts</title>
        <meta name="description" content={categoryDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${categoryTitle} Articles | Beastly Facts`} />
        <meta property="og:description" content={categoryDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:alt" content={`${categoryTitle} articles and care guides — Beastly Facts`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${categoryTitle} Articles | Beastly Facts`} />
        <meta name="twitter:description" content={categoryDescription} />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
        <nav className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/blog" className="hover:text-foreground transition-colors">Critter Digest</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{category?.title || slug}</span>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-b from-accent/5 to-transparent pt-6 pb-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-4xl mb-2 block">🗂️</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-1">
              {category?.title || slug}
            </h1>
            {category?.description && (
              <p className="text-sm text-muted-foreground font-body max-w-lg">{category.description}</p>
            )}
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        {/* Related categories */}
        {allCategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {allCategories.filter(c => c.slug !== slug).slice(0, 8).map(c => (
              <Link key={c.slug} to={`/category/${c.slug}`}
                className="text-xs font-display font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all">
                {c.title}
              </Link>
            ))}
          </div>
        )}

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
            {[...Array(4)].map((_, i) => <div key={i} className="h-20 bg-muted rounded-xl animate-pulse" />)}
          </div>
        ) : sorted.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3" role="img" aria-label="File cabinet">🗂️</span>
            <p className="font-display font-bold text-foreground">No articles yet</p>
            <p className="text-sm text-muted-foreground font-body mt-1">Check back soon — more content is on the way!</p>
            <Link to="/blog" className="text-secondary text-sm mt-4 block">← Back to Critter Digest</Link>
          </div>
        ) : (
          <div className="space-y-3">
            {sorted.map((post, i) => {
              const postSlug = post.slug?.current || post._id;
              return (
                <motion.div key={post._id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                  <Link to={`/blog/${postSlug}`} className="block">
                    <CompactPostCard post={post} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-border">
          <Link to="/blog" className="text-sm font-display font-semibold text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Critter Digest
          </Link>
        </div>
      </div>
    </div>
  );
}
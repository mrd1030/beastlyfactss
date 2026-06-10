import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { client } from '@/lib/sanity';
import groq from 'groq';
import PortableTextRenderer from '@/components/PortableTextRenderer';
import { blogPosts as localPosts } from '@/lib/data/newsletters';
import PostEngagement from '@/components/blog/PostEngagement';
import BeehiivSubscribe from '@/components/blog/BeehiivSubscribe';
import PostSidebar from '@/components/blog/PostSidebar';
import { urlFor } from '@/lib/sanityImage';
import CompactPostCard from '@/components/shared/CompactPostCard';
import YouMayAlsoLike from '@/components/blog/YouMayAlsoLike';

const POSTS_PER_PAGE = 10;

const ALL_POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id, title, slug, excerpt, mainImage, publishedAt, readTime, animalType, body,
  "category": categories[0]->title,
  "categorySlug": categories[0]->slug.current,
  "allCategories": categories[]->title,
  "allCategorySlugs": categories[]->slug.current
}`;

const CATEGORIES_QUERY = groq`*[_type == "category"] | order(title asc) {
  _id, title, "slug": slug.current,
  "count": count(*[_type == "post" && references(^._id)])
}`;

export default function Blog() {
  const [sanityPosts, setSanityPosts] = useState([]);
  const [sanityCategories, setSanityCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    client.fetch(ALL_POSTS_QUERY).then(posts => {
      setSanityPosts(posts);
      const urlParams = new URLSearchParams(window.location.search);
      const postParam = urlParams.get('post');
      if (postParam && !selectedPost) {
        const match = posts.find(p => p.slug?.current === postParam || p._id === postParam)
          || localPosts.find(p => p.id === postParam);
        if (match) setSelectedPost({ ...match, _id: match._id || match.id, publishedAt: match.publishedAt || match.date, mainImage: match.mainImage || null });
      }
    }).catch(console.error);

    client.fetch(CATEGORIES_QUERY).then(cats => {
      setSanityCategories(cats);
    }).catch(console.error);
  }, []);

  // Read page from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = parseInt(urlParams.get('page')) || 1;
    setPage(pageParam);
  }, []);

  const allPosts = [
    ...sanityPosts,
    ...localPosts.map(post => ({
      ...post, _id: post.id, publishedAt: post.date, mainImage: null,
      categorySlug: null
    }))
  ];

  const filtered = allPosts.filter(p => {
    if (activeCategory === 'All') return true;
    // Check all categories the post belongs to (multi-category support)
    if (p.allCategories && Array.isArray(p.allCategories)) {
      return p.allCategories.includes(activeCategory);
    }
    return p.category === activeCategory;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleBack = () => {
    setSelectedPost(null);
    const url = new URL(window.location);
    url.searchParams.delete('post');
    window.history.replaceState({}, '', url);
  };

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const url = new URL(window.location);
    url.searchParams.set('post', post.slug?.current || post._id || post.id);
    window.history.pushState({}, '', url);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    const url = new URL(window.location);
    url.searchParams.set('page', newPage);
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };

  if (selectedPost) {
    return <PostView post={selectedPost} onBack={handleBack} allPosts={allPosts} onSelectPost={handleSelectPost} />;
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-secondary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block">📰</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-1">
              The Critter Digest
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-lg">
              In-depth reptile and exotic pet guides, care tips, and husbandry deep-dives.
            </p>
          </motion.div>

          {/* Category filter — dynamic from Sanity */}
          <div className="flex flex-wrap gap-2 mt-5">
            <button
              onClick={() => handleCategoryChange('All')}
              className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                activeCategory === 'All'
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
            {sanityCategories.filter(c => c.count > 0).map(cat => (
              <button
                key={cat._id}
                onClick={() => handleCategoryChange(cat.title)}
                className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                  activeCategory === cat.title
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat.title}
                {cat.count > 0 && <span className="ml-1 opacity-60">({cat.count})</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Posts */}
          <div className="lg:col-span-2">
            <div className="space-y-3 mb-6">
              {paginated.map((post, i) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <CompactPostCard post={post} onClick={() => handleSelectPost(post)} />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-display font-semibold bg-card border border-border text-muted-foreground hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <span className="text-sm font-body text-muted-foreground">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-display font-semibold bg-card border border-border text-muted-foreground hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display font-bold text-base text-foreground mb-1">Subscribe — it's free</h3>
              <p className="text-xs text-muted-foreground font-body mb-4">New articles straight to your inbox. No spam, ever. 🐾</p>
              <BeehiivSubscribe />
            </div>

            {/* Categories sidebar */}
            {sanityCategories.filter(c => c.count > 0).length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <h3 className="font-display font-bold text-sm text-foreground mb-3">Categories</h3>
                <div className="space-y-1">
                  {sanityCategories.filter(c => c.count > 0).map(cat => (
                    <Link
                      key={cat._id}
                      to={`/category/${cat.slug}`}
                      className="flex items-center justify-between w-full px-2 py-1.5 rounded-lg text-xs font-body hover:bg-muted transition-colors group"
                    >
                      <span className="text-foreground group-hover:text-secondary transition-colors font-semibold">{cat.title}</span>
                      <span className="text-muted-foreground">{cat.count}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Articles */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-display font-bold text-sm text-foreground mb-3">Recent Articles</h3>
              <div className="space-y-3">
                {allPosts.slice(0, 4).map(post => (
                  <button
                    key={post._id}
                    onClick={() => handleSelectPost(post)}
                    className="w-full text-left flex items-start gap-2.5 group"
                  >
                    <span className="text-lg flex-shrink-0">🦎</span>
                    <p className="text-xs font-body text-muted-foreground group-hover:text-foreground transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalPostContent({ content }) {
  const lines = content.split('\n');
  const elements = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (/^\*\*(.+)\*\*$/.test(line)) {
      elements.push(<h3 key={i} className="font-display font-bold text-lg text-foreground mt-6 mb-2">{line.replace(/^\*\*/, '').replace(/\*\*$/, '')}</h3>);
      i++; continue;
    }
    if (/^####(.+)####$/.test(line)) {
      elements.push(<h4 key={i} className="font-display font-bold text-xl text-foreground mt-6 mb-2">{line.replace(/^####/, '').replace(/####$/, '')}</h4>);
      i++; continue;
    }
    if (line.startsWith('- ')) {
      const bullets = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) { bullets.push(lines[i].trim().slice(2)); i++; }
      elements.push(<ul key={`ul-${i}`} className="list-disc pl-5 mb-4 space-y-1.5 text-muted-foreground font-body text-sm leading-relaxed">{bullets.map((b, bi) => <li key={bi}>{b}</li>)}</ul>);
      continue;
    }
    const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, pi) => {
      if (/^\*\*(.+)\*\*$/.test(part)) return <strong key={pi} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
      return part;
    });
    elements.push(<p key={i} className="mb-4 leading-relaxed text-muted-foreground font-body text-sm">{parts}</p>);
    i++;
  }
  return <div className="space-y-0">{elements}</div>;
}

function PostView({ post, onBack, allPosts, onSelectPost }) {
  React.useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    const handlePopState = () => onBack();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [onBack]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-sm font-display font-semibold text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Critter Digest
            </button>

            <span className="text-5xl block mb-4">{post.emoji || '🦎'}</span>

            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-xs font-display font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                {post.category || 'Article'}
              </span>
              <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                <Clock className="w-3 h-3" /> {new Date(post.publishedAt).toLocaleDateString()}
              </span>
              {post.readTime && (
                <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime} min read
                </span>
              )}
            </div>

            <h1 className="font-display font-bold text-3xl text-foreground mb-6 leading-tight">{post.title}</h1>

            <p className="text-sm text-muted-foreground font-body mb-8 leading-relaxed border-l-4 border-secondary pl-4 italic">
              {post.excerpt}
            </p>

            {post.mainImage && (
              <img src={urlFor(post.mainImage).width(800).url()} alt={post.title} className="w-full rounded-2xl mb-10 shadow-lg" />
            )}

            <div className="prose max-w-none">
              {post.body ? <PortableTextRenderer content={post.body} /> : <LocalPostContent content={post.content || ''} />}
            </div>

            <PostEngagement postId={post._id || post.id} postTitle={post.title} postSlug={post.slug?.current || post.id} />

            {/* You May Also Like */}
            <YouMayAlsoLike
              currentPostId={post._id || post.id}
              categorySlug={post.categorySlug}
              category={post.category}
              onSelectPost={onSelectPost}
            />
          </div>

          <div className="lg:sticky lg:top-6">
            <PostSidebar allPosts={allPosts} currentPost={post} onSelectPost={(p) => { onSelectPost(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
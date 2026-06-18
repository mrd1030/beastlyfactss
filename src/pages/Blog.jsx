import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { client } from '@/lib/sanity';
import groq from 'groq';
import PortableTextRenderer from '@/components/PortableTextRenderer';
import { blogPosts as localPosts } from '@/lib/data/newsletters';
import PostEngagement from '@/components/blog/PostEngagement';
import BeehiivSubscribe from '@/components/blog/BeehiivSubscribe';
import PostSidebar from '@/components/blog/PostSidebar';
import SanityImage from '@/components/SanityImage';
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

const slugify = (text) => {
  if (!text) return '';
  return text.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
};

export default function Blog() {
  const [sanityPosts, setSanityPosts] = useState([]);
  const [sanityCategories, setSanityCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);
  const [page, setPage] = useState(1);
  const listRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    client.fetch(ALL_POSTS_QUERY).then(setSanityPosts).catch(console.error);
    client.fetch(CATEGORIES_QUERY).then(setSanityCategories).catch(console.error);
  }, []);

  useEffect(() => {
    if (sanityPosts.length === 0) return;

    const urlParams = new URLSearchParams(location.search);
    const postParam = urlParams.get('post');
    const catParam = urlParams.get('category');
    const pageParam = parseInt(urlParams.get('page')) || 1;

    setActiveCategory(catParam || 'All');
    setPage(pageParam);

    if (postParam) {
      const allPostsList = [
        ...sanityPosts,
        ...localPosts.map(post => ({
          ...post,
          _id: post.id,
          publishedAt: post.date,
          mainImage: null,
          categorySlug: null,
        })),
      ];

      const match = allPostsList.find(p => 
        p.slug?.current === postParam || p._id === postParam
      );

      if (match) {
        setSelectedPost({
          ...match,
          _id: match._id || match.id,
          publishedAt: match.publishedAt || match.date,
          mainImage: match.mainImage || null,
        });
      } else {
        setSelectedPost(null);
      }
    } else {
      setSelectedPost(null);
    }
  }, [location.search, sanityPosts]);

  const allPosts = [
    ...sanityPosts,
    ...localPosts.map(post => ({
      ...post,
      _id: post.id,
      publishedAt: post.date,
      mainImage: null,
      categorySlug: null,
    })),
  ];

  const filtered = allPosts.filter(p => {
    if (slugify(activeCategory) === 'all') return true;
    const lowerActive = slugify(activeCategory);
    if (p.allCategories && Array.isArray(p.allCategories)) {
      return p.allCategories.some(cat => slugify(cat) === lowerActive);
    }
    return p.category && slugify(p.category) === lowerActive;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleBack = () => {
    const urlParams = new URLSearchParams();
    if (activeCategory && slugify(activeCategory) !== 'all') {
      urlParams.set('category', slugify(activeCategory));
    }
    if (page > 1) urlParams.set('page', page.toString());
    navigate({ search: urlParams.toString() });
  };

  const handleSelectPost = (post) => {
    const targetSlug = post.slug?.current || post._id || post.id;
    navigate({ search: `?post=${targetSlug}` });

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 80);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('page', newPage.toString());
    navigate({ search: urlParams.toString() });

    setTimeout(() => {
      if (listRef.current) {
        const top = listRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleCategoryChange = (cat) => {
    const urlParams = new URLSearchParams();
    if (slugify(cat) !== 'all') {
      urlParams.set('category', slugify(cat));
    }
    navigate({ search: urlParams.toString() });

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 80);
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

          <div className="flex flex-wrap gap-2 mt-5">
            <button
              onClick={() => handleCategoryChange('All')}
              className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                slugify(activeCategory) === 'all' ? 'bg-secondary text-secondary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
            {sanityCategories.filter(c => c.count > 0).map(cat => (
              <button
                key={cat._id}
                onClick={() => handleCategoryChange(cat.title)}
                className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                  slugify(activeCategory) === slugify(cat.title) ? 'bg-secondary text-secondary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat.title} <span className="opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div ref={listRef} className="space-y-3 mb-6">
              {paginated.map((post, i) => (
                <motion.div key={post._id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                  <CompactPostCard post={post} onClick={() => handleSelectPost(post)} />
                </motion.div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-display font-semibold bg-card border border-border text-muted-foreground hover:text-foreground disabled:opacity-40">
                  Previous
                </button>
                <span className="text-sm text-muted-foreground">Page {page} of {totalPages}</span>
                <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-display font-semibold bg-card border border-border text-muted-foreground hover:text-foreground disabled:opacity-40">
                  Next
                </button>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display font-bold text-base text-foreground mb-1">Subscribe — it's free</h3>
              <p className="text-xs text-muted-foreground font-body mb-4">New articles straight to your inbox. No spam, ever. 🐾</p>
              <BeehiivSubscribe />
            </div>

            {sanityCategories.filter(c => c.count > 0).length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <h3 className="font-display font-bold text-sm text-foreground mb-3">Categories</h3>
                <div className="space-y-1">
                  {sanityCategories.filter(c => c.count > 0).map(cat => (
                    <button key={cat._id} onClick={() => handleCategoryChange(cat.title)} className="flex items-center justify-between w-full px-2 py-1.5 rounded-lg text-xs font-body hover:bg-muted transition-colors group">
                      <span className="text-foreground group-hover:text-secondary transition-colors font-semibold">{cat.title}</span>
                      <span className="text-muted-foreground">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-display font-bold text-sm text-foreground mb-3">Recent Articles</h3>
              <div className="space-y-3">
                {allPosts.slice(0, 4).map(post => (
                  <button key={post._id} onClick={() => handleSelectPost(post)} className="w-full text-left flex items-start gap-2.5 group">
                    <span className="text-lg flex-shrink-0">🦎</span>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">{post.title}</p>
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

function PostView({ post, onBack, allPosts, onSelectPost }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <button onClick={onBack} className="flex items-center gap-1.5 text-sm font-display font-semibold text-muted-foreground hover:text-foreground transition-colors mb-6">
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

            {/* Featured Image using SanityImage */}
            {post.mainImage && (
              <div className="mb-10">
                <SanityImage 
                  image={post.mainImage} 
                  alt={post.title}
                  width={1200}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            )}

            <div className="prose max-w-none">
              {post.body ? (
                <PortableTextRenderer content={post.body} />
              ) : (
                <LocalPostContent content={post.content || ''} />
              )}
            </div>

            <PostEngagement postId={post._id || post.id} postTitle={post.title} postSlug={post.slug?.current || post.id} />

            {post.body && (
              <YouMayAlsoLike currentPostId={post._id} categorySlug={post.categorySlug} onSelectPost={onSelectPost} />
            )}
          </div>

          <div className="lg:sticky lg:top-16 self-start max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar-hide pb-4">
            <PostSidebar 
              allPosts={allPosts} 
              currentPost={post} 
              onSelectPost={(p) => {
                onSelectPost(p);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />
          </div>
        </div>
      </div>
    </motion.div>
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
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        bullets.push(lines[i].trim().slice(2));
        i++;
      }
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
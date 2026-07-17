import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { hasNoindexStateParams } from '@/lib/seo/queryRobots';
import { slugify } from '@/lib/utils/slugify';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, Clock } from 'lucide-react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { client } from '@/lib/sanity';
import { fetchCategories } from '@/lib/sanityCategories';
import { urlFor } from '@/lib/sanityImage';
import groq from 'groq';
import PortableTextRenderer from '@/components/PortableTextRenderer';
import { blogPosts as localPosts } from '@/lib/data/newsletters';
import { mdxPosts } from '@/lib/mdxPosts';
import { isChroniclesPost, seriesForSlug, chroniclesPath } from '@/lib/chronicles';
import { IMAGE_DIMENSIONS } from '@/lib/data/imageDimensions';
import { truncateDescription } from '@/lib/utils/truncate';
import * as MdxComponents from '@/components/mdx';
import PostEngagement from '@/components/blog/PostEngagement';
import BeehiivSubscribe from '@/components/blog/BeehiivSubscribe';
import PostSidebar from '@/components/blog/PostSidebar';
import TableOfContents from '@/components/blog/TableOfContents';
import GlossaryHighlighter from '@/components/blog/GlossaryHighlighter';
import ReadingProgressBar from '@/components/blog/ReadingProgressBar';
import SanityImage from '@/components/SanityImage';
import CompactPostCard from '@/components/shared/CompactPostCard';
import YouMayAlsoLike from '@/components/blog/YouMayAlsoLike';
import ProductCard from '@/components/shared/ProductCard';
import { AFFILIATE_PRODUCTS } from '@/lib/data/affiliateProducts';

const POSTS_PER_PAGE = 10;

const ALL_POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id, title, slug, excerpt, seoTitle, seoDescription, seoImage, mainImage, publishedAt, readTime, animalType,
  body[]{
    ...,
    _type == "productRecommendation" => {
      ...,
      productRef->{productName, category, retailer, affiliateUrl, imageUrl}
    }
  },
  "category": categories[0]->title,
  "categorySlug": categories[0]->slug.current,
  "allCategories": categories[]->title,
  "allCategorySlugs": categories[]->slug.current
}`;

export default function Blog() {
  const [sanityPosts, setSanityPosts] = useState([]);
  const [sanityCategories, setSanityCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);
  const [page, setPage] = useState(1);
  const [fetchError, setFetchError] = useState(false);
  const listRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { slug: routeSlug, catSlug } = useParams();

  useEffect(() => {
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 8000));
    Promise.race([
      Promise.all([
        client.fetch(ALL_POSTS_QUERY),
        fetchCategories(),
      ]),
      timeout,
    ]).then(([posts, cats]) => {
      setSanityPosts(posts);
      setSanityCategories(cats);
    }).catch(() => setFetchError(true));
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const postParam = routeSlug || urlParams.get('post');
    const catParam = catSlug || urlParams.get('category');
    const pageParam = parseInt(urlParams.get('page')) || 1;

    setActiveCategory(catParam || 'All');
    setPage(pageParam);

    if (postParam) {
      // Short stories moved to their own Chronicles section - send any old
      // /blog/<story-slug>/ deep link to the right series (the crawler-level
      // 301s live in public/_redirects; this covers client-side navigation).
      const storySeries = seriesForSlug(postParam);
      if (storySeries) {
        navigate(chroniclesPath(storySeries.id), { replace: true });
        return;
      }

      const allPostsList = [
        ...sanityPosts,
        ...localPosts.map(post => ({
          ...post,
          _id: post.id,
          publishedAt: post.date,
          mainImage: null,
          categorySlug: null,
        })),
        ...mdxPosts,
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
  }, [location.search, routeSlug, catSlug, sanityPosts]);

  // Chronicles short stories live on their own page (/chronicles/) - keep
  // them out of the listing, category pills, and sidebars entirely.
  const allPosts = [
    ...sanityPosts.filter(p => !isChroniclesPost(p)),
    ...localPosts.map(post => ({
      ...post,
      _id: post.id,
      publishedAt: post.date,
      mainImage: null,
      categorySlug: null,
    })),
    ...mdxPosts.filter(p => !isChroniclesPost(p)),
  ]
  .sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.date || 0);
      const dateB = new Date(b.publishedAt || b.date || 0);
      return dateB - dateA;
    });


  const filtered = allPosts.filter(p => {
    if (slugify(activeCategory) === 'all') return true;
    const lowerActive = slugify(activeCategory);
    if (p.allCategories && Array.isArray(p.allCategories)) {
      return p.allCategories.some(cat => slugify(cat) === lowerActive);
    }
    return p.category && slugify(p.category) === lowerActive;
  });

  // Count non-Sanity posts per category slug
  const sanityCategorySlugs = new Set(sanityCategories.map(c => slugify(c.title)));
  const extraPostCounts = new Map(); // counts for Sanity categories from local/MDX posts
  const extraCategoryMap = new Map(); // new categories only in local/MDX posts

  [...localPosts, ...mdxPosts.filter(p => !isChroniclesPost(p))].forEach(post => {
    const cats = post.allCategories?.length ? post.allCategories
      : post.category ? [post.category] : [];
    cats.forEach(cat => {
      const s = slugify(cat);
      // 'site-news' was retired as a category - /blog/category/site-news/
      // 301s to the welcome post itself (see public/_redirects), so don't
      // render a pill that links straight into a redirect.
      if (s === 'site-news') return;
      if (sanityCategorySlugs.has(s)) {
        extraPostCounts.set(s, (extraPostCounts.get(s) || 0) + 1);
      } else {
        if (!extraCategoryMap.has(s)) extraCategoryMap.set(s, { title: cat, slug: s, count: 0 });
        extraCategoryMap.get(s).count += 1;
      }
    });
  });

  // "Short Stories" stays a real Sanity category (it's how chronicle posts used to be
  // tagged, before chronicle detection moved to slug-prefix matching), but its pill
  // shouldn't appear here now that the stories render on /chronicles/ instead of in the blog.
  const enrichedSanityCategories = sanityCategories
    .filter(c => c.slug !== 'short-stories')
    .map(c => ({
      ...c,
      count: c.count + (extraPostCounts.get(slugify(c.title)) || 0),
    }));

  const mdxCategories = Array.from(extraCategoryMap.values()).sort((a, b) => a.title.localeCompare(b.title));

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  // Fact Files links to posts with router state flagging where they came from,
  // so the post view can send readers back there instead of always to the blog.
  const cameFromFactFiles = location.state?.from === 'fact-files';

  const handleBack = () => {
    if (cameFromFactFiles) {
      navigate('/fact-files/');
      return;
    }
    // Prefer the real URL slug from the route; slugify only for legacy ?category= titles.
    const catPath = activeCategory && slugify(activeCategory) !== 'all'
      ? `/blog/category/${catSlug || slugify(activeCategory)}/`
      : '/blog/';
    const urlParams = new URLSearchParams();
    if (page > 1) urlParams.set('page', page.toString());
    navigate({ pathname: catPath, search: urlParams.toString() });
  };

  const handleSelectPost = (post) => {
    const targetSlug = post.slug?.current || post._id || post.id;
    navigate(`/blog/${targetSlug}/`);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 80);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    const catPath = activeCategory && slugify(activeCategory) !== 'all'
      ? `/blog/category/${catSlug || slugify(activeCategory)}/`
      : '/blog/';
    const urlParams = new URLSearchParams();
    if (newPage > 1) urlParams.set('page', newPage.toString());
    navigate({ pathname: catPath, search: urlParams.toString() });

    setTimeout(() => {
      if (listRef.current) {
        const top = listRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  };

  if (selectedPost) {
    return (
      <PostView
        post={selectedPost}
        onBack={handleBack}
        backLabel={cameFromFactFiles ? 'Back to Fact Files' : 'Back to Critter Digest'}
        allPosts={allPosts}
        onSelectPost={handleSelectPost}
      />
    );
  }

  if (fetchError) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <span className="text-4xl mb-3 block">😿</span>
          <h2 className="font-display font-bold text-xl text-foreground mb-2">Couldn't load articles</h2>
          <p className="text-sm text-muted-foreground font-body mb-4">Something went wrong fetching the blog. Please try again.</p>
          <button onClick={() => window.location.reload()} className="text-sm font-display font-semibold text-secondary hover:underline">
            Refresh
          </button>
        </div>
      </div>
    );
  }

  const shouldNoindex = hasNoindexStateParams(location.search);
  const catTitle = catSlug
    ? catSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : null;
  const blogTitle = catTitle
    ? `${catTitle} Articles | Beastly Facts`
    : 'The Critter Digest | Reptile & Exotic Pet Care Blog | Beastly Facts';
  const blogDescription = catTitle
    ? `Browse all ${catTitle} articles on Beastly Facts - care guides, pet tips, and animal husbandry deep-dives from The Critter Digest.`
    : 'Read the Critter Digest - in-depth reptile and exotic pet care guides, husbandry deep-dives, and pet tips from Beastly Facts. New articles every week.';
  const blogCanonical = catSlug
    ? `https://beastlyfacts.com/blog/category/${catSlug}/`
    : 'https://beastlyfacts.com/blog/';

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{blogTitle}</title>
        <meta name="description" content={blogDescription} />
        <link rel="canonical" href={blogCanonical} />
        <meta name="robots" content={shouldNoindex ? 'noindex,follow' : 'index,follow'} />
        <meta property="og:title" content={blogTitle} />
        <meta property="og:description" content={blogDescription} />
        <meta property="og:url" content={blogCanonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:alt" content="The Critter Digest - reptile and exotic pet care blog by Beastly Facts" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Critter Digest | Beastly Facts" />
        <meta name="twitter:description" content="In-depth reptile and exotic pet care guides, husbandry deep-dives, and pet tips." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>
      <div className="bg-gradient-to-b from-secondary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Newspaper">📰</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-1">
              The Critter Digest
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-lg">
              In-depth reptile and exotic pet guides, care tips, and husbandry deep-dives.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mt-5">
            <Link
              to="/blog/"
              className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                slugify(activeCategory) === 'all' ? 'bg-secondary text-secondary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </Link>
            {enrichedSanityCategories.filter(c => c.count > 0).map(cat => (
              <Link
                key={cat._id}
                to={`/blog/category/${cat.slug}/`}
                className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                  slugify(activeCategory) === slugify(cat.title) ? 'bg-secondary text-secondary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat.title} <span className="opacity-60">({cat.count})</span>
              </Link>
            ))}
            {mdxCategories.map(cat => (
              <Link
                key={cat.slug}
                to={`/blog/category/${cat.slug}/`}
                className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                  slugify(activeCategory) === cat.slug ? 'bg-secondary text-secondary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat.title} <span className="opacity-60">({cat.count})</span>
              </Link>
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
              <h3 className="font-display font-bold text-base text-foreground mb-1">Subscribe - it's free</h3>
              <p className="text-xs text-muted-foreground font-body mb-4">New articles straight to your inbox. No spam, ever. 🐾</p>
              <BeehiivSubscribe />
            </div>

            <Link to="/chronicles/dex/" className="block bg-secondary/5 border border-secondary/20 rounded-2xl p-5 hover:border-secondary/40 transition-colors group">
              <p className="text-xs font-display font-bold text-secondary mb-1">📖 The Chronicles</p>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">
                Short fiction from the Beastly Facts universe - follow Dex 🦎 and Otis 🐰 in their own series.
              </p>
              <span className="inline-block mt-2 text-xs font-display font-semibold text-secondary group-hover:underline">Start reading →</span>
            </Link>

            {(enrichedSanityCategories.filter(c => c.count > 0).length > 0 || mdxCategories.length > 0) && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <h3 className="font-display font-bold text-sm text-foreground mb-3">Categories</h3>
                <div className="space-y-1">
                  {enrichedSanityCategories.filter(c => c.count > 0).map(cat => (
                    <Link key={cat._id} to={`/blog/category/${cat.slug}/`} className="flex items-center justify-between w-full px-2 py-1.5 rounded-lg text-xs font-body hover:bg-muted transition-colors group">
                      <span className="text-foreground group-hover:text-secondary transition-colors font-semibold">{cat.title}</span>
                      <span className="text-muted-foreground">{cat.count}</span>
                    </Link>
                  ))}
                  {mdxCategories.map(cat => (
                    <Link key={cat.slug} to={`/blog/category/${cat.slug}/`} className="flex items-center justify-between w-full px-2 py-1.5 rounded-lg text-xs font-body hover:bg-muted transition-colors group">
                      <span className="text-foreground group-hover:text-secondary transition-colors font-semibold">{cat.title}</span>
                      <span className="text-muted-foreground">{cat.count}</span>
                    </Link>
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

function AuthorBio() {
  return (
    <div className="mt-10 mb-2 flex items-start gap-4 bg-card border border-border rounded-2xl p-5">
      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-2xl flex-shrink-0">
        🦎
      </div>
      <div>
        <p className="font-display font-bold text-sm text-foreground mb-1">Written by Mike</p>
        <p className="text-xs text-muted-foreground font-body leading-relaxed mb-2">
          Mike is the founder of Beastly Facts and a lifelong reptile enthusiast. He shares his home with Dex, a bearded dragon with strong opinions about crickets and basking schedules. Mike writes in-depth care guides, animal facts, and the occasional short story about life with exotic pets.
        </p>
        <Link to="/about/" className="text-xs font-display font-semibold text-secondary hover:underline">
          More about Mike →
        </Link>
      </div>
    </div>
  );
}

function PostView({ post, onBack, backLabel = 'Back to Critter Digest', allPosts, onSelectPost }) {
  const [openFaq, setOpenFaq] = useState(null);
  const contentRef = useRef(null);
  const postSlug = post.slug?.current || post._id || post.id;
  const canonicalUrl = `https://beastlyfacts.com/blog/${postSlug}/`;
  // Dedicated CMS SEO fields win; excerpt/title/mainImage are the fallbacks.
  const postTitle = `${post.seoTitle || post.title} | Beastly Facts`;
  // Truncated as a safety net - CMS fields (seoDescription/excerpt) are
  // hand-written and usually already a good length, but nothing upstream
  // enforces that, so a too-long field would otherwise ship straight to
  // the meta tag uncut.
  const postDescription = truncateDescription(post.seoDescription || post.excerpt || `Read ${post.title} on Beastly Facts - in-depth reptile and exotic pet care from the Critter Digest.`);
  const ogImageSource = post.seoImage || post.mainImage;
  // Sanity images are always cropped to exactly 1200x630 below, and the hero
  // fallback is also 1200x630 - only a raw post.image asset has a real size
  // that can differ, so og:image:width/height must be looked up per-image
  // rather than left at a fixed default (Helmet has no way to "unset" a tag,
  // so a wrong declared size would otherwise silently persist from whichever
  // page rendered last).
  const ogImage = ogImageSource
    ? urlFor(ogImageSource).width(1200).height(630).fit('crop').url()
    : post.image
      ? `https://beastlyfacts.com${post.image}`
      : 'https://beastlyfacts.com/assets/hero-1200.jpg';
  const ogImageDims = (!ogImageSource && post.image && IMAGE_DIMENSIONS[post.image]) || { width: 1200, height: 630 };
  const relatedProducts = (post.relatedProducts || [])
    .map((slug) => AFFILIATE_PRODUCTS.find((p) => p.slug === slug))
    .filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": postDescription,
    "url": canonicalUrl,
    "image": ogImage,
    "datePublished": post.publishedAt || '',
    "dateModified": post._updatedAt || post.publishedAt || '',
    "author": { "@type": "Organization", "name": "Beastly Facts", "url": "https://beastlyfacts.com" },
    "publisher": { "@type": "Organization", "name": "Beastly Facts", "url": "https://beastlyfacts.com", "logo": { "@type": "ImageObject", "url": "https://beastlyfacts.com/assets/hero-1200.jpg" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beastlyfacts.com/" },
      { "@type": "ListItem", "position": 2, "name": "Critter Digest", "item": "https://beastlyfacts.com/blog/" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": canonicalUrl },
    ],
  };

  const faqSchema = post.faqs?.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  } : null;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="min-h-screen">
      <ReadingProgressBar />
      <Helmet>
        <title>{postTitle}</title>
        <meta name="description" content={postDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Individual blog post detail pages are always indexable; only the listing view uses dynamic noindex logic. */}
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={post.seoTitle || post.title} />
        <meta property="og:description" content={postDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content={String(ogImageDims.width)} />
        <meta property="og:image:height" content={String(ogImageDims.height)} />
        <meta property="og:image:alt" content={post.title} />
        {post.publishedAt && <meta property="article:published_time" content={post.publishedAt} />}
        {post.category && <meta property="article:section" content={post.category} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle || post.title} />
        <meta name="twitter:description" content={postDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <button onClick={onBack} className="flex items-center gap-1.5 text-sm font-display font-semibold text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> {backLabel}
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
            {post.mainImage ? (
              <div className="mb-10">
                <SanityImage
                  image={post.mainImage}
                  alt={post.title}
                  width={1200}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            ) : post.image ? (
              <div className="mb-10">
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="w-full rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            ) : null}

            <div ref={contentRef} className="prose prose-sm sm:prose-base max-w-none dark:prose-invert font-body">
              {post.source === 'mdx' && post.content ? (
                // post.content is a React.lazy component (see mdxPosts.js); the
                // [data-mdx-loading] marker tells prerender.mjs the article body
                // hasn't rendered yet, so it never captures the fallback.
                <React.Suspense fallback={<div data-mdx-loading className="py-12 text-center text-sm text-muted-foreground font-body">Loading article…</div>}>
                  {React.createElement(post.content, { components: MdxComponents })}
                </React.Suspense>
              ) : post.body ? (
                <PortableTextRenderer content={post.body} />
              ) : (
                <LocalPostContent content={typeof post.content === 'string' ? post.content : ''} />
              )}
            </div>

            {post.faqs?.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5 mt-8">
                <h2 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  ❓ Frequently Asked Questions
                </h2>
                <div className="space-y-1">
                  {post.faqs.map((faq, i) => (
                    <div key={i} className="border border-border/60 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-display font-semibold text-sm text-foreground">{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-4 pb-3 text-sm text-muted-foreground font-body leading-relaxed border-t border-border/40">
                          <p className="pt-3">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {relatedProducts.length > 0 && (
              <div className="mt-8">
                <h2 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  🛒 Recommended Gear
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedProducts.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
                <p className="text-[11px] text-muted-foreground/70 font-body italic mt-3">
                  As an Amazon Associate, we earn from qualifying purchases through the links above - at no extra cost to you.
                </p>
              </div>
            )}

            <AuthorBio />

            <PostEngagement postId={post._id || post.id} postTitle={post.title} postSlug={post.slug?.current || post.id} />

            {post.body && (
              <YouMayAlsoLike currentPostId={post._id} categorySlug={post.categorySlug} onSelectPost={onSelectPost} />
            )}
          </div>

          <div className="lg:sticky lg:top-16 self-start max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar-hide pb-4 space-y-5">
            <TableOfContents contentRef={contentRef} watch={postSlug} skipText={post.title} />
            <GlossaryHighlighter contentRef={contentRef} watch={postSlug} />
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
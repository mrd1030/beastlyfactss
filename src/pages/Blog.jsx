import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { hasNoindexStateParams } from '@/lib/seo/queryRobots';
import { slugify } from '@/lib/utils/slugify';
import { motion } from '@/lib/motion-safe';
import { ArrowLeft, ChevronDown, Clock, Search as SearchIcon, X } from 'lucide-react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { getCategoryBySlug } from '@/lib/data/categories';
import { blogPosts as localPosts } from '@/lib/data/newsletters';
import { mdxPosts } from '@/lib/mdxPosts';
import { isChroniclesPost, seriesForSlug, chroniclesPath } from '@/lib/chronicles';
import { IMAGE_DIMENSIONS } from '@/lib/data/imageDimensions';
import { trackSearch } from '@/lib/analytics';
import { truncateDescription } from '@/lib/utils/truncate';
import { withBrand } from '@/lib/utils/seo';
import { getDisplayDate, getDisplayIsoDate } from '@/lib/utils/date';
import * as MdxComponents from '@/components/mdx';
import MdxArticleBody from '@/components/shared/MdxArticleBody';
import PostEngagement from '@/components/blog/PostEngagement';
import SaveButton from '@/components/shared/SaveButton';
import BeehiivSubscribe from '@/components/blog/BeehiivSubscribe';
import PostSidebar from '@/components/blog/PostSidebar';
import TableOfContents from '@/components/blog/TableOfContents';
import GlossaryHighlighter from '@/components/blog/GlossaryHighlighter';
import ReadingProgressBar from '@/components/blog/ReadingProgressBar';
import CompactPostCard from '@/components/shared/CompactPostCard';
import Pagination from '@/components/shared/Pagination';
import YouMayAlsoLike from '@/components/blog/YouMayAlsoLike';
import ProductCard from '@/components/shared/ProductCard';
import ProductModal from '@/components/shared/ProductModal';
import { AFFILIATE_PRODUCTS } from '@/lib/data/affiliateProducts';

const POSTS_PER_PAGE = 10;

// Finds a post by slug among the statically-available sources (MDX + local),
// which is now every source this page has. Used to compute `selectedPost`'s
// initial state directly instead of waiting for an effect: `routeSlug` is
// available synchronously via useParams() on the very first render, and
// mdxPosts/localPosts are static imports, so there's no reason a post should
// wait for anything. Before this, `selectedPost` always started `null`
// (only ever set inside a useEffect), which mismatched prerender.mjs's
// fully-settled capture - React's hydration-critical first render would try
// to show the blog LISTING view while the prerendered HTML already showed
// the POST DETAIL view for that URL, a structural mismatch severe enough to
// discard and rebuild the whole page (confirmed directly on an MDX post).
function findStaticPost(postParam) {
  if (!postParam) return null;
  const allStatic = [
    ...localPosts.map(post => ({
      ...post,
      _id: post.id,
      publishedAt: post.date,
    })),
    ...mdxPosts,
  ];
  const match = allStatic.find(p => p.slug?.current === postParam || p._id === postParam);
  if (!match) return null;
  return {
    ...match,
    _id: match._id || match.id,
    publishedAt: match.publishedAt || match.date,
  };
}

export default function Blog() {
  const navigate = useNavigate();
  const location = useLocation();
  const { slug: routeSlug, catSlug } = useParams();

  const [activeCategory, setActiveCategory] = useState('All');
  // Lazy init so a deep link like /blog/?search=oscar (e.g. from the homepage
  // search box) pre-fills the filter on first render, not just live typing.
  const [search, setSearch] = useState(() => new URLSearchParams(window.location.search).get('search') || '');
  // Lazy init from statically-available posts - see findStaticPost's comment.
  const [selectedPost, setSelectedPost] = useState(() => {
    const postParam = routeSlug || new URLSearchParams(window.location.search).get('post');
    return findStaticPost(postParam);
  });
  const [page, setPage] = useState(1);
  const listRef = useRef(null);

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

      // Same static lookup the lazy useState init above uses - every post the
      // blog can show is a static import now, so there's nothing to wait for.
      setSelectedPost(findStaticPost(postParam));
    } else {
      setSelectedPost(null);
    }
  }, [location.search, routeSlug, catSlug]);

  // Free-text filtering is client-side only (not URL-synced) - reset back to
  // page 1 whenever the query changes so a stale deep page doesn't render empty.
  //
  // Skips its own first run. `search` starts empty, so on mount this fired
  // immediately after the effect above had just read ?page= from the URL, and
  // stomped it back to 1. Opening /blog/?page=7 landed you on page 1 with the
  // URL still claiming 7. Nothing here should react to the initial value, only
  // to the user actually typing.
  const searchSettled = useRef(false);
  useEffect(() => {
    if (!searchSettled.current) {
      searchSettled.current = true;
      return;
    }
    setPage(1);
  }, [search]);

  // Chronicles short stories live on their own page (/chronicles/) - keep
  // them out of the listing, category pills, and sidebars entirely.
  const allPosts = [
    ...localPosts.map(post => ({
      ...post,
      _id: post.id,
      publishedAt: post.date,
    })),
    ...mdxPosts.filter(p => !isChroniclesPost(p)),
  ]
  .sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.date || 0);
      const dateB = new Date(b.publishedAt || b.date || 0);
      return dateB - dateA;
    });


  const searchQuery = search.trim().toLowerCase();

  const filtered = allPosts.filter(p => {
    if (slugify(activeCategory) !== 'all') {
      const lowerActive = slugify(activeCategory);
      const inCategory = p.allCategories && Array.isArray(p.allCategories)
        ? p.allCategories.some(cat => slugify(cat) === lowerActive)
        : p.category && slugify(p.category) === lowerActive;
      if (!inCategory) return false;
    }
    if (searchQuery) {
      const haystack = `${p.title || ''} ${p.excerpt || ''}`.toLowerCase();
      if (!haystack.includes(searchQuery)) return false;
    }
    return true;
  });

  // Category pills are derived straight from the posts that exist, so a pill
  // only ever appears for a category that actually has something to browse.
  // Display titles come from categories.js when the slug is a known category
  // (the site-wide canonical label), falling back to the post's own string.
  const categoryMap = new Map();

  [...localPosts, ...mdxPosts.filter(p => !isChroniclesPost(p))].forEach(post => {
    const cats = post.allCategories?.length ? post.allCategories
      : post.category ? [post.category] : [];
    cats.forEach(cat => {
      const s = slugify(cat);
      // 'site-news' was retired as a category - /blog/category/site-news/
      // 301s to the welcome post itself (see public/_redirects), so don't
      // render a pill that links straight into a redirect. 'short-stories'
      // is how chronicle posts used to be tagged (before chronicle detection
      // moved to slug-prefix matching) and shouldn't get a pill either, now
      // that those stories render on /chronicles/ instead of in the blog.
      if (s === 'site-news' || s === 'short-stories') return;
      if (!categoryMap.has(s)) {
        categoryMap.set(s, { title: getCategoryBySlug(s)?.label || cat, slug: s, count: 0 });
      }
      categoryMap.get(s).count += 1;
    });
  });

  const categories = Array.from(categoryMap.values()).sort((a, b) => a.title.localeCompare(b.title));

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  // Clamped, because page comes from ?page= and nothing stops a stale or
  // hand-edited link asking for a page past the end. Unclamped that renders
  // an empty list with no page highlighted rather than the last page.
  const safePage = Math.min(Math.max(1, page), Math.max(1, totalPages));
  const paginated = filtered.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE);

  // Fact Files rows and Beastfile "Related Files" cards link here with router
  // state saying where the reader came from, so the post view can send them
  // back there instead of always to the blog listing.
  //
  // Beastlypedia carries its own returnTo/returnLabel because there are 44
  // Beastfiles and the useful destination is the one animal being read, not
  // the index. Fact Files has a single listing, so it needs neither.
  const origin = location.state?.from;
  const cameFromFactFiles = origin === 'fact-files';
  const cameFromBeastfile = origin === 'beastlypedia' && Boolean(location.state?.returnTo);
  const backLabel = cameFromFactFiles
    ? 'Back to Fact Files'
    : cameFromBeastfile
      ? `Back to ${location.state.returnLabel || 'Beastlypedia'}`
      : 'Back to Critter Digest';

  const handleBack = () => {
    if (cameFromFactFiles) {
      navigate('/fact-files/');
      return;
    }
    if (cameFromBeastfile) {
      navigate(location.state.returnTo);
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
    // Carry the origin forward. Without this, opening a second article from
    // inside the first threw the state away and the back button silently
    // reverted to "Back to Critter Digest" for a reader who had never been
    // there. Every article-to-article jump on the page routes through here
    // (the sidebar list and You May Also Like both call it), so this is the
    // only place it needs doing.
    navigate(`/blog/${targetSlug}/`, location.state ? { state: location.state } : undefined);

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
  };

  if (selectedPost) {
    return (
      <PostView
        post={selectedPost}
        onBack={handleBack}
        backLabel={backLabel}
        // Both wild-animal entrances get the folder rows, not just Fact Files.
        // A reader who arrived from a Beastfile is on the same side of the
        // site, and the Beastfile itself now shows these rows too, so blog
        // cards at the foot of the article were the odd one out.
        factFilesMode={cameFromFactFiles || cameFromBeastfile}
        allPosts={allPosts}
        onSelectPost={handleSelectPost}
      />
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

          <div className="relative max-w-sm mt-5">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles by title..."
              value={search}
              // Reported on a typing pause, not only on Enter. This box filters
              // results live, so most people never press Enter and their search
              // went unrecorded. Enter still reports immediately for anyone who
              // does press it; trackSearch dedupes so it cannot double-count.
              onChange={(e) => { setSearch(e.target.value); trackSearch(e.target.value); }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') trackSearch(e.currentTarget.value, { immediate: true });
              }}
              className="w-full bg-card border border-border rounded-xl pl-10 pr-9 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-secondary/50 text-foreground placeholder:text-muted-foreground"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-2 p-2 -m-2">
                <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>

          {/* The Legal category has a real hub page with an interactive map, and
              the written hub article sits partway down this feed where nobody
              finds it. Surfacing the destination above the list is the point. */}
          {slugify(activeCategory) === 'legal' && (
            <Link
              to="/exotic-pet-laws/"
              className="mt-5 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 transition-colors hover:border-primary/60"
            >
              <span className="text-xl leading-none" role="img" aria-label="Scales of justice">⚖️</span>
              <span>
                <span className="block font-display font-bold text-sm text-foreground">
                  Start with the interactive map
                </span>
                <span className="block text-xs font-body text-muted-foreground leading-relaxed mt-0.5">
                  28 animals across all 50 states and DC. Pick a species and the states that restrict it light
                  up, each one quoting the regulation it came from.
                </span>
              </span>
            </Link>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            <Link
              to="/blog/"
              className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-all ${
                slugify(activeCategory) === 'all' ? 'bg-secondary text-secondary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </Link>
            {categories.map(cat => (
              <Link
                key={cat.slug}
                to={`/blog/category/${cat.slug}/`}
                className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-all ${
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
            {/* No scrollTo: this sits above the list already. */}
            <div className="mb-4">
              <Pagination page={safePage} totalPages={totalPages} onChange={handlePageChange} />
            </div>

            <div ref={listRef} className="space-y-3 mb-6">
              {paginated.map((post, i) => (
                <motion.div key={post._id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                  <CompactPostCard post={post} onClick={() => handleSelectPost(post)} />
                </motion.div>
              ))}
              {filtered.length === 0 && (
                <div className="text-center py-12">
                  <span className="text-3xl block mb-2">😿</span>
                  <p className="font-body font-bold text-foreground text-sm">No articles found</p>
                  <p className="text-xs text-muted-foreground font-body mt-1">Try a different search term or category.</p>
                </div>
              )}
            </div>

            <div className="mt-6">
                <Pagination
                  page={safePage}
                  totalPages={totalPages}
                  onChange={handlePageChange}
                  scrollTo={listRef}
                />
              </div>
          </div>

          <div className="space-y-5">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display font-bold text-base text-foreground mb-1">Subscribe - it's free</h3>
              <p className="text-xs text-muted-foreground font-body mb-4">New articles straight to your inbox. No spam, ever. 🐾</p>
              <BeehiivSubscribe />
            </div>

            <Link to="/chronicles/dex/" className="block bg-secondary/5 border border-secondary/20 rounded-2xl p-5 hover:border-secondary/40 transition-colors group">
              <p className="text-xs font-body font-bold text-secondary mb-1">📖 The Chronicles</p>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">
                Short fiction from the Beastly Facts universe - follow Dex 🦎 and Otis 🐰 in their own series.
              </p>
              <span className="inline-block mt-2 text-xs font-body font-semibold text-secondary group-hover:underline">Start reading →</span>
            </Link>

            {categories.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <h3 className="font-display font-bold text-sm text-foreground mb-3">Categories</h3>
                <div className="space-y-1">
                  {categories.map(cat => (
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
        <p className="font-body font-bold text-sm text-foreground mb-1">Written by Mike</p>
        <p className="text-xs text-muted-foreground font-body leading-relaxed mb-2">
          Mike is the founder of Beastly Facts and a lifelong reptile enthusiast. He shares his home with Dex, a bearded dragon with strong opinions about crickets and basking schedules. Mike writes in-depth care guides, animal facts, and the occasional short story about life with exotic pets.
        </p>
        <Link to="/about/" className="text-xs font-body font-semibold text-secondary hover:underline">
          More about Mike →
        </Link>
      </div>
    </div>
  );
}

function PostView({ post, onBack, backLabel = 'Back to Critter Digest', factFilesMode = false, allPosts, onSelectPost }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const contentRef = useRef(null);
  // getDisplayDate() compares publishedAt against the live "now" clock, so a
  // future-scheduled post's own permalink page prerenders with the date span
  // hidden - once the real world catches up to that date without a redeploy,
  // a real visitor's hydration-time render would compute a shown span where
  // prerendered HTML has none, a structural mismatch (same class of bug fixed
  // in HeroSection.jsx/TrendingFacts.jsx/CategoryBrowse.jsx). Default to
  // hidden (matching what a prerender pass always captures, since the effect
  // below is a no-op there) and reveal post-mount for real clients only.
  const [displayDate, setDisplayDate] = useState('');
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setDisplayDate(getDisplayDate(post.publishedAt));
  }, [post.publishedAt]);
  const postSlug = post.slug?.current || post._id || post.id;
  const canonicalUrl = `https://beastlyfacts.com/blog/${postSlug}/`;
  // Dedicated frontmatter SEO fields win; excerpt/title/image are the fallbacks.
  // The brand suffix is appended only when the result still fits in 60
  // characters. Four legal guides shipped with seoTitles in the mid-fifties that
  // were fine on their own and only breached the limit once " | Beastly Facts"
  // was glued on, which is the cheapest part of the tag to drop.
  const postTitle = withBrand(post.seoTitle || post.title);
  // Truncated as a safety net - frontmatter fields (seoDescription/excerpt)
  // are hand-written and usually already a good length, but nothing upstream
  // enforces that, so a too-long field would otherwise ship straight to
  // the meta tag uncut.
  const postDescription = truncateDescription(post.seoDescription || post.excerpt || `Read ${post.title} on Beastly Facts - in-depth reptile and exotic pet care from the Critter Digest.`);
  // The hero fallback is exactly 1200x630, but a real post.image asset has
  // its own size, so og:image:width/height must be looked up per-image rather
  // than left at a fixed default (Helmet has no way to "unset" a tag, so a
  // wrong declared size would otherwise silently persist from whichever page
  // rendered last).
  const ogImage = post.image
    ? `https://beastlyfacts.com${post.image}`
    : 'https://beastlyfacts.com/assets/hero-1200.jpg';
  const ogImageDims = (post.image && IMAGE_DIMENSIONS[post.image]) || { width: 1200, height: 630 };
  const relatedProducts = (post.relatedProducts || [])
    .map((slug) => AFFILIATE_PRODUCTS.find((p) => p.slug === slug))
    .filter(Boolean);

  const isoPublished = getDisplayIsoDate(post.publishedAt);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": postDescription,
    "url": canonicalUrl,
    "image": ogImage,
    // Computed during render, NOT derived from the displayDate state. That
    // state is deliberately empty during prerendering (see the effect above,
    // which returns early on __IS_PRERENDER__ to avoid a hydration mismatch on
    // the visible date span), and wiring the schema to it meant every one of
    // the ~380 prerendered article pages shipped datePublished:"" - not just
    // future-dated ones. An empty string is not a valid Article date, so the
    // site was emitting no publish-date signal at all in its structured data.
    //
    // The hydration hazard does not apply here: react-helmet-async writes head
    // tags through its own side effects rather than through the body tree React
    // reconciles at hydration, so a head-only difference cannot produce the
    // mismatch the span had. Spreading rather than assigning keeps the keys out
    // entirely when there is no publishable date, since omitting a field is
    // valid where an empty one is not.
    ...(isoPublished && { datePublished: isoPublished, dateModified: post.lastReviewed || isoPublished }),
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

  // "10 Surprising X Facts" listicles are a numbered, self-contained list -
  // ItemList schema makes that countable structure explicit to Google rather
  // than leaving it to be inferred from a plain numbered paragraph. Detected
  // by slug rather than a frontmatter flag: every post on this pattern, past
  // and future, is named this way, so a flag would just be a second thing to
  // remember to set on every new one.
  const isFactsListicle = /^\d+-surprising-.+-facts$/.test(postSlug);
  const factsListSchema = isFactsListicle && typeof post.content === 'string' ? (() => {
    const items = [...post.content.matchAll(/^\d+\.\s+(.+)$/gm)]
      .map(m => m[1].replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim());
    return items.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": post.title,
      "numberOfItems": items.length,
      "itemListElement": items.map((name, i) => ({ "@type": "ListItem", "position": i + 1, "name": name })),
    } : null;
  })() : null;

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
        {displayDate && <meta property="article:published_time" content={post.publishedAt} />}
        {post.category && <meta property="article:section" content={post.category} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle || post.title} />
        <meta name="twitter:description" content={postDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
        {factsListSchema && <script type="application/ld+json">{JSON.stringify(factsListSchema)}</script>}
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <button onClick={onBack} className="flex items-center gap-1.5 text-sm font-body font-semibold text-muted-foreground hover:text-foreground transition-colors p-2 -mx-2 -mt-2 mb-4">
              <ArrowLeft className="w-4 h-4" />{backLabel}
            </button>

            {/* The whole article sits in one block, from the title down, rather
                than the body alone - the header floating outside it was what
                made the page feel like it was spilling. */}
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-8">

            {/* Was `post.emoji || '🦎'`. 83 posts set no emoji in frontmatter,
                so the dolphin, shark, octopus and birdwatching articles all
                opened with a lizard. sync-articles.js now derives one at build
                time (animal, then category, then paw) and every post has one,
                making this fallback unreachable - kept neutral rather than
                reptile-specific in case a post ever slips through. */}
            <span className="text-5xl block mb-4">{post.emoji || '🐾'}</span>

            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-xs font-body font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                {post.category || 'Article'}
              </span>
              {displayDate && (
                <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                  <Clock className="w-3 h-3" />{displayDate}
                </span>
              )}
              {post.readTime && (
                <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                  <Clock className="w-3 h-3" />{`${post.readTime} min read`}
                </span>
              )}
            </div>

            <div className="flex items-start justify-between gap-4 mb-6">
              <h1 className="font-display font-bold text-3xl text-foreground leading-tight">{post.title}</h1>
              <SaveButton
                type="article"
                id={postSlug}
                title={post.title}
                subtitle={post.category}
                url={`/blog/${postSlug}/`}
                iconOnly
                className="mt-1"
              />
            </div>

            <p className="text-sm text-muted-foreground font-body mb-8 leading-relaxed border-l-4 border-secondary pl-4 italic">
              {post.excerpt}
            </p>

            {/* Mobile-only: the sticky sidebar (below) sits in a column that
                collapses to the bottom of the page once the grid drops to a
                single column, which buries the Table of Contents after the
                whole article - useless for jumping to a section before
                reading. Shown here instead, collapsed by default so it
                doesn't push the article down. Hidden on lg+, where the
                sidebar's always-open version already covers it. */}
            <div className="lg:hidden mb-6">
              <TableOfContents contentRef={contentRef} watch={postSlug} skipText={post.title} collapsible />
            </div>

            {/* Featured image */}
            {post.image ? (
              <div className="mb-10">
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="w-full rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            ) : null}

            {/* The article sits in a block of its own rather than running loose
                on the page background, so the column has edges instead of
                spilling.

                The width replaces max-w-none, which was overriding Tailwind
                Typography's own limit and letting lines run to 89 characters.
                Comfortable is 45 to 75; past that the eye starts losing the
                return sweep to the next line, which reads as text going blurry
                rather than as text being too wide. Nothing was wrong with the
                size or the contrast - measured at 16px, 15:1 in light and 17:1
                in dark.

                Set in rem, not ch, because ch measures the "0" glyph. Nunito's
                zero is 9.6px at this size while its average letter is 7.35px,
                so an apparently sensible max-w-[68ch] still produced 89
                characters. 37rem is 592px, about 80. */}
            <div ref={contentRef} className="prose prose-base max-w-[37rem] mx-auto dark:prose-invert font-body">
              {post.source === 'mdx' && post.content ? (
                <MdxArticleBody slug={post.slug.current} components={MdxComponents} loadingLabel="Loading article…" />
              ) : (
                <LocalPostContent content={typeof post.content === 'string' ? post.content : ''} />
              )}
              </div>
            </div>

            {post.faqs?.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5 mt-8">
                <h2 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  ❓ Frequently Asked Questions
                </h2>
                <div className="space-y-1">
                  {post.faqs.map((faq, i) => (
                    <details key={i} name={`faq-${postSlug}`} className="group border border-border/60 rounded-xl overflow-hidden">
                      <summary className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <span className="font-body font-semibold text-sm text-foreground">{faq.q}</span>
                        <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="px-4 pb-3 text-sm text-muted-foreground font-body leading-relaxed border-t border-border/40">
                        <p className="pt-3">{faq.a}</p>
                      </div>
                    </details>
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
                    <ProductCard key={product.slug} product={product} onSelect={setSelectedProduct} />
                  ))}
                </div>
                <p className="text-[11px] text-muted-foreground/70 font-body italic mt-3">
                  As an Amazon Associate, we earn from qualifying purchases through the links above - at no extra cost to you.
                </p>
              </div>
            )}

            <AuthorBio />

            <PostEngagement postId={post._id || post.id} postTitle={post.title} postSlug={post.slug?.current || post.id} />

            {/* Not gated on post.body any more: that was a Sanity-only field,
                so gating on it after the MDX migration would have silently
                dropped this section from every post on the site. */}
            <YouMayAlsoLike
              currentPostId={post._id || post.id}
              categorySlug={post.categorySlug || post.category}
              onSelectPost={onSelectPost}
              factFilesMode={factFilesMode}
            />
          </div>

          <div className="lg:sticky lg:top-16 self-start max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar-hide pb-4 space-y-5">
            {/* Hidden below lg: the collapsible instance above the article
                already covers mobile. */}
            <div className="hidden lg:block">
              <TableOfContents contentRef={contentRef} watch={postSlug} skipText={post.title} />
            </div>
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
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
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
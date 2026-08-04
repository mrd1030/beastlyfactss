import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { Search } from 'lucide-react';
import { mdxPosts } from '@/lib/mdxPosts';
import FactFileRow from '@/components/shared/FactFileRow';
import Pagination from '@/components/shared/Pagination';

const PAGE_SIZE = 12;

// Membership is the `factFile` frontmatter flag, not a category.
//
// Deriving it from "Wild Animals" would have been easier to author and wrong:
// /blog/category/wild-animals/ is generated automatically from that category,
// so both pages would list the same set and this one would be a duplicate of a
// page the site already produces for free. A flag keeps the collection
// deliberate and unmirrored.
const ALL_FILES = mdxPosts
  .filter(p => p.factFile && p.myth && p.truth)
  .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

// The groups these actually fall into, counted from the posts themselves so a
// filter never appears for a group with nothing behind it.
const GROUPS = (() => {
  const counts = new Map();
  for (const p of ALL_FILES) {
    for (const c of p.allCategories?.length ? p.allCategories : [p.category]) {
      if (c) counts.set(c, (counts.get(c) || 0) + 1);
    }
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
})();

export default function FactFiles() {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [group, setGroup] = useState('All');
  const [page, setPage] = useState(1);
  const listRef = useRef(null);

  // Page lives in the URL, the way Blog, Facts and Gallery already do it.
  // It was component state, which meant pages 2 and 3 had no address at all:
  // nothing to crawl, nothing to link to, and nothing to bookmark or send
  // to anyone.
  useEffect(() => {
    const p = parseInt(new URLSearchParams(location.search).get('page'), 10);
    setPage(Number.isFinite(p) && p > 0 ? p : 1);
  }, [location.search]);

  const setPageParam = (newPage) => {
    const params = new URLSearchParams(location.search);
    if (newPage > 1) params.set('page', String(newPage));
    else params.delete('page');
    navigate({ search: params.toString() });
  };

  const query = search.trim().toLowerCase();

  const filtered = useMemo(() => {
    return ALL_FILES.filter(p => {
      const inGroup =
        group === 'All' ||
        (p.allCategories?.length ? p.allCategories : [p.category]).includes(group);
      // Searches the correction and the claim as well as the title, because
      // what someone remembers is usually the fact, not the headline.
      const matches =
        !query ||
        p.title.toLowerCase().includes(query) ||
        (p.myth || '').toLowerCase().includes(query) ||
        (p.truth || '').toLowerCase().includes(query);
      return inGroup && matches;
    });
  }, [group, query]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const safePage = Math.min(Math.max(1, page), Math.max(1, totalPages));
  const paginated = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const mostSourced = useMemo(
    () => [...ALL_FILES].sort((a, b) => b.sourceCount - a.sourceCount).slice(0, 4),
    []
  );
  const totalSources = ALL_FILES.reduce((n, p) => n + p.sourceCount, 0);

  // Changing the filter or the search drops you back to page 1, and that has
  // to clear ?page too or the URL would keep claiming a page the new result
  // set may not have.
  const reset = (fn) => { fn(); setPageParam(1); };

  const canonicalUrl = 'https://beastlyfacts.com/fact-files/';
  const pageTitle = 'Fact Files - Wild Animal Claims, Checked | Beastly Facts';
  const pageDescription =
    'Wild animal features fact-checked against primary sources. Each one shows the claim it overturns, what replaced it, and how many sources back it.';

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: ALL_FILES.map((post, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://beastlyfacts.com/blog/${post.slug.current}/`,
      name: post.title,
    })),
  };

  return (
    <div className="min-h-screen px-4 pb-16 pt-12 sm:px-6">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index,follow" />
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

      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="mb-2 font-display text-3xl font-bold text-foreground sm:text-4xl">Fact Files</h1>
          <p className="max-w-xl font-body text-sm text-muted-foreground">
            Wild animal features, checked against primary sources. Each one opens with the claim it
            overturns and what the evidence actually says.
          </p>
        </motion.div>

        {/* Same 2/3 + 1/3 split the Critter Digest listing uses, so the two read
            as siblings. The rows carry the difference. */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative mb-5 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search claims and corrections..."
                value={search}
                onChange={e => reset(() => setSearch(e.target.value))}
                className="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>

            <p className="mb-4 font-body text-xs text-muted-foreground">
              {`${filtered.length} ${filtered.length === 1 ? 'file' : 'files'}`}
              {totalPages > 1 && ` · Page ${safePage} of ${totalPages}`}
            </p>

            {filtered.length > 0 ? (
              <>
                <div ref={listRef} className="space-y-5">
                  {paginated.map(post => (
                    <FactFileRow
                      key={post._id}
                      entry={{
                        slug: post.slug.current,
                        animal: post.animal || post.category,
                        myth: post.myth,
                        truth: post.truth,
                        sources: post.sourceCount,
                        image: post.image,
                        imageAlt: post.imageAlt,
                      }}
                    />
                  ))}
                </div>

                <div className="mt-10">
                  <Pagination page={safePage} totalPages={totalPages} onChange={setPageParam} scrollTo={listRef} />
                </div>
              </>
            ) : (
              <div className="py-16 text-center">
                <p className="font-body font-bold text-foreground">No files match "{search}"</p>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  Try a different term, or{' '}
                  <button
                    type="button"
                    onClick={() => reset(() => { setSearch(''); setGroup('All'); })}
                    className="font-body font-semibold text-secondary hover:underline"
                  >
                    clear the filters
                  </button>
                  .
                </p>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-4">
              <h2 className="mb-3 font-display text-sm font-bold text-foreground">Browse by group</h2>
              <div className="flex flex-wrap gap-2">
                {[['All', ALL_FILES.length], ...GROUPS].map(([name, count]) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => reset(() => setGroup(name))}
                    aria-pressed={group === name}
                    className={`rounded-full px-3 py-1.5 font-body text-xs font-semibold transition-all ${
                      group === name
                        ? 'bg-secondary text-secondary-foreground shadow-md shadow-secondary/20'
                        : 'border border-border bg-card text-muted-foreground hover:border-secondary/40 hover:text-foreground'
                    }`}
                  >
                    {name} <span className="opacity-60">{count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <h2 className="mb-1 font-display text-sm font-bold text-foreground">What these are</h2>
              <p className="font-body text-xs leading-relaxed text-muted-foreground">
                {ALL_FILES.length} wild animal features, checked against {totalSources} primary
                sources between them. Each lists the claim it corrects and what backs the
                correction.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <h2 className="mb-3 font-display text-sm font-bold text-foreground">Most sourced</h2>
              <ul className="space-y-2">
                {mostSourced.map(p => (
                  <li key={p._id}>
                    <Link
                      to={`/blog/${p.slug.current}/`}
                      className="flex items-start justify-between gap-2 font-body text-xs text-muted-foreground hover:text-secondary"
                    >
                      <span className="line-clamp-2">{p.title}</span>
                      <span className="flex-shrink-0 font-body font-semibold text-secondary">
                        {p.sourceCount}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* The rest of the wild-animal side of the site. Both are the same
                animals at a different length: a one-screen profile, or a single
                fact. Facts already links here, so this reciprocates. */}
            <div className="rounded-xl border border-border bg-card p-4">
              <h2 className="mb-1 font-display text-sm font-bold text-foreground">Wild animals, in short</h2>
              <p className="mb-3 font-body text-xs leading-relaxed text-muted-foreground">
                The same animals as one-screen profiles rather than long reads.
              </p>
              <div className="flex flex-col gap-1.5">
                <Link
                  to="/beastlypedia/"
                  className="font-body text-xs font-semibold text-secondary hover:underline"
                >
                  Browse Beastlypedia →
                </Link>
                <Link
                  to="/facts/"
                  className="font-body text-xs font-semibold text-secondary hover:underline"
                >
                  Browse all animal facts →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from '@/lib/motion-safe';
import { Menu, X, Moon, Sun, ChevronDown, Instagram, Search } from 'lucide-react';
import { useDarkMode } from '@/lib/hooks/useLocalStorage';
import { useFavoritesCtx } from '@/lib/FavoritesContext';
import { CATEGORIES } from '@/lib/data/categories';
import MobileBackButton from './MobileBackButton';
import DonateButton from '@/components/DonateButton';
import Logo from '@/components/Logo';
import { XLogo, PinterestLogo, FacebookLogo, ThreadsLogo } from '@/components/shared/SocialIcons';

const dropdownAnimation = {
  initial: { opacity: 0, height: 0, y: -50, scale: 0.94 },
  animate: { opacity: 1, height: 'auto', y: 0, scale: 1 },
  exit: { opacity: 0, height: 0, y: -50, scale: 0.94 },
  transition: {
    type: 'spring',
    stiffness: 420,
    damping: 18,
    height: { type: 'tween', duration: 0.28, ease: 'easeInOut' }
  }
};

const DIGEST_CATEGORIES = CATEGORIES.filter(c => c.slug !== 'short-stories');

const primaryLinks = [
  { to: '/guides/', label: 'Guides' },
  { to: '/blog/', label: 'Articles' },
  { to: '/facts/', label: 'Facts' },
  { to: '/exotic-pet-laws/', label: 'Laws' },
];

const linkActive = (pathname, to) => {
  const base = to.replace(/\/$/, '');
  return pathname === to || pathname === base || pathname.startsWith(`${base}/`);
};

const menuLinkClass = (active) =>
  `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-body font-semibold transition-all ${
    active ? 'bg-primary text-primary-foreground' : 'text-foreground hover:text-foreground hover:bg-muted'
  }`;

const groupLabelClass =
  'px-4 pt-3 pb-1 text-[10px] font-body font-bold uppercase tracking-wider text-muted-foreground';

export default function Navbar() {
  const [dark, setDark] = useDarkMode();
  const { streak } = useFavoritesCtx();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [digestOpen, setDigestOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // localSearch pulls the guide/encyclopedia/article indexes with it, so it is
  // loaded on the first popover open rather than shipped in the entry bundle
  // that every page pays for before LCP.
  const [searchFn, setSearchFn] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const searchRef = useRef(null);
  const searchButtonRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDigestOpen(false);
    setSearchOpen(false);
    setSearchQuery('');
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!searchOpen) return;
    if (!searchFn) import('@/lib/localSearch').then(m => setSearchFn(() => m.searchLocalContent));
    searchInputRef.current?.focus();
    const handleOutside = (event) => {
      if (
        searchRef.current && !searchRef.current.contains(event.target) &&
        searchButtonRef.current && !searchButtonRef.current.contains(event.target)
      ) {
        setSearchOpen(false);
      }
    };
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setSearchOpen(false);
        searchButtonRef.current?.focus();
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [searchOpen, searchFn]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleOutsideInteraction = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setMobileOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key === 'Tab' && menuRef.current) {
        const focusableSelectors = 'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
        const focusableElements = menuRef.current.querySelectorAll(focusableSelectors);
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    };
    document.addEventListener('mousedown', handleOutsideInteraction);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideInteraction);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const handleMenuNav = () => {
    setDigestOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Desktop gets the inline popover; below sm the popover has no room, so the
  // icon keeps sending straight to the search page.
  const handleSearchClick = () => {
    if (window.matchMedia('(min-width: 640px)').matches) {
      setMobileOpen(false);
      setSearchOpen(open => !open);
    } else {
      handleMenuNav();
      navigate('/search/');
    }
  };

  const submitSearch = (event) => {
    event.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    setSearchOpen(false);
    handleMenuNav();
    navigate(`/search/${encodeURIComponent(q)}/`);
  };

  const searchResults = useMemo(() => {
    const q = searchQuery.trim();
    if (!q || !searchFn) return [];
    const r = searchFn(q);
    return [...r.guides, ...r.articles, ...r.encyclopedia, ...r.beastlypedia, ...r.glossary].slice(0, 8);
  }, [searchQuery, searchFn]);

  const isChildRoute = /^\/guides\/(?!category\/).+/.test(location.pathname);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 navbar-safe-top"
    >
      <div className={`absolute inset-0 -z-10 transition-all duration-300 ${
        mobileOpen || scrolled
          ? 'bg-card/75 backdrop-blur-xl shadow-sm border-b border-border'
          : 'bg-transparent'
      }`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-between h-14">
          <Link to="/" onClick={handleMenuNav} className={`flex items-center gap-2 flex-shrink-0 ${isChildRoute ? 'hidden md:flex' : 'flex'}`}>
            <Logo />
          </Link>
          <div className={`md:hidden ${isChildRoute ? 'flex' : 'hidden'}`}>
            <MobileBackButton />
          </div>
          {isChildRoute && (
            <div className="md:hidden absolute left-1/2 -translate-x-1/2 pointer-events-none">
              <span className="font-body font-bold text-sm text-foreground">Care Guide</span>
            </div>
          )}
          <div className="hidden md:flex items-center gap-0.5">
            {primaryLinks.map(link => {
              const isActive = linkActive(location.pathname, link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`px-3 py-1.5 border-b-2 text-sm font-body font-semibold transition-all ${
                    isActive ? 'border-secondary text-primary' : 'border-transparent text-foreground hover:bg-muted rounded-full'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-1.5">
            <button ref={searchButtonRef} onClick={handleSearchClick} className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Search" aria-expanded={searchOpen}>
              <Search className="w-4 h-4 text-muted-foreground" />
            </button>
            <DonateButton className="hidden md:flex h-8 text-xs px-3 font-body font-bold" />
            {streak > 0 && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} title={`${streak}-day visit streak`} aria-label={`${streak}-day visit streak`} className="hidden sm:flex items-center gap-0.5 bg-secondary/10 text-secondary font-body font-bold text-xs px-2 py-1 rounded-full cursor-default">
                <span aria-hidden="true">{'🔥'}</span>{streak}
              </motion.div>
            )}
            <button onClick={() => setDark(!dark)} className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Toggle dark mode">
              {dark ? <Sun className="w-4 h-4 text-sunny" /> : <Moon className="w-4 h-4 text-muted-foreground" />}
            </button>
            <button ref={buttonRef} onClick={() => { setSearchOpen(false); setMobileOpen(!mobileOpen); }} className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Toggle navigation menu" aria-expanded={mobileOpen}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {searchOpen && (
          <motion.div key="search-popover" {...dropdownAnimation} ref={searchRef} className="hidden sm:block absolute top-[57px] right-4 w-96 max-w-[calc(100vw-2rem)] z-50 rounded-2xl border border-border bg-card/90 text-foreground backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden transform-gpu">
            <form onSubmit={submitSearch} className="flex items-center gap-2 p-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search the site..."
                  aria-label="Search the site"
                  className="w-full bg-background border border-border rounded-xl pl-9 pr-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
              </div>
              <button type="submit" className="px-3.5 py-2 rounded-xl bg-secondary text-secondary-foreground text-sm font-body font-bold hover:opacity-90 transition-opacity">
                Search
              </button>
            </form>
            {searchQuery.trim() && (
              <div className="max-h-80 overflow-y-auto custom-scrollbar px-2 pb-2 border-t border-border/60">
                {searchResults.length > 0 ? (
                  <>
                    <div className="pt-2 space-y-0.5">
                      {searchResults.map(r => (
                        <Link key={r.key} to={r.to} onClick={() => { setSearchOpen(false); handleMenuNav(); }} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-muted transition-colors">
                          <span className="text-lg flex-shrink-0" aria-hidden="true">{r.emoji}</span>
                          <span className="flex-1 min-w-0 text-sm font-body font-semibold text-foreground truncate">{r.title}</span>
                          <span className="flex-shrink-0 text-[9px] font-body font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-1.5 py-0.5 rounded-full">{r.type}</span>
                        </Link>
                      ))}
                    </div>
                    <Link to={`/search/${encodeURIComponent(searchQuery.trim())}/`} onClick={() => { setSearchOpen(false); handleMenuNav(); }} className="block px-3 py-2.5 mt-1 border-t border-border/60 text-center text-xs font-body font-bold text-secondary hover:underline">
                      {`See all results for "${searchQuery.trim()}"`}
                    </Link>
                  </>
                ) : (
                  <p className="px-3 py-4 text-center text-xs text-muted-foreground font-body">
                    Nothing matches yet. Keep typing, or press Search for the full page.
                  </p>
                )}
              </div>
            )}
          </motion.div>
        )}
        {mobileOpen && (
          <motion.div key="mobile-menu" {...dropdownAnimation} ref={menuRef} className="z-50 border-t border-border/60 bg-card/75 text-foreground backdrop-blur-xl overflow-hidden sm:absolute sm:top-[57px] sm:right-4 sm:w-80 sm:rounded-2xl sm:border sm:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] transform-gpu">
            <div className="p-4 max-h-[calc(100vh_-_3.5rem_-_3.5rem_-_0.75rem_-_var(--safe-area-inset-top)_-_var(--safe-area-inset-bottom))] sm:max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-1">
                <p className={`${groupLabelClass} pt-1`}>Keep a pet</p>
                {[{ to: '/guides/', emoji: '\ud83d\udcd6', label: 'Care guides' }, { to: '/blog/', emoji: '\ud83d\udcf0', label: 'Articles' }, { to: '/encyclopedia/', emoji: '\ud83d\udcda', label: 'Encyclopedia' }, { to: '/gear/', emoji: '\ud83d\uded2', label: 'Gear' }, { to: '/care-packages/', emoji: '\ud83d\udce6', label: 'Care packages' }].map(item => (
                  <Link key={item.to} to={item.to} onClick={handleMenuNav} className={menuLinkClass(linkActive(location.pathname, item.to))}>
                    <span>{item.emoji}</span>{item.label}
                  </Link>
                ))}
                <button onClick={() => setDigestOpen(!digestOpen)} className="w-full flex items-center justify-between px-4 py-2 text-sm font-body text-muted-foreground hover:text-foreground">
                  Article topics
                  <ChevronDown className={`w-4 h-4 transition-transform ${digestOpen ? 'rotate-180' : ''}`} />
                </button>
                {digestOpen && (
                  <div className="ml-4 my-1 space-y-0.5 border-l-2 border-border pl-3">
                    <Link to="/blog/" onClick={handleMenuNav} className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-body font-semibold text-foreground hover:bg-muted transition-all">All articles</Link>
                    {DIGEST_CATEGORIES.map(cat => (
                      <Link key={cat.slug} to={cat.to || `/blog/category/${cat.slug}/`} onClick={handleMenuNav} className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-body text-muted-foreground hover:text-foreground hover:bg-muted transition-all">{cat.label}</Link>
                    ))}
                  </div>
                )}
                <p className={groupLabelClass}>Learn something wild</p>
                {[{ to: '/facts/', emoji: '\u26a1', label: 'Facts' }, { to: '/fact-files/', emoji: '\ud83d\udd0d', label: 'Fact files' }, { to: '/beastlypedia/', emoji: '\ud83d\udc3e', label: 'Beastlypedia' }, { to: '/gallery/', emoji: '\ud83d\udcf8', label: 'Gallery' }, { to: '/quiz/', emoji: '\ud83c\udfaf', label: 'Quizzes' }, { to: '/chronicles/dex/', emoji: '\ud83d\udcdc', label: 'Chronicles' }].map(item => (
                  <Link key={item.to} to={item.to} onClick={handleMenuNav} className={menuLinkClass(linkActive(location.pathname, item.to))}>
                    <span>{item.emoji}</span>{item.label}
                  </Link>
                ))}
                <p className={groupLabelClass}>Tools</p>
                {[{ to: '/exotic-pet-laws/', emoji: '\u2696\ufe0f', label: 'Is it legal?' }, { to: '/pack/', emoji: '\u2764\ufe0f', label: 'My Pack' }, { to: '/search/', emoji: '\ud83d\udd0e', label: 'Search' }, { to: '/feed/', emoji: '\ud83d\udcf1', label: 'Feed' }].map(item => (
                  <Link key={item.to} to={item.to} onClick={handleMenuNav} className={menuLinkClass(linkActive(location.pathname, item.to))}>
                    <span>{item.emoji}</span>{item.label}
                  </Link>
                ))}
                <p className={groupLabelClass}>The site</p>
                {[{ to: '/about/', emoji: '\ud83e\udd81', label: 'About' }, { to: '/contact/', emoji: '\ud83d\udc8c', label: 'Contact' }, { to: '/donate/', emoji: '\u2764\ufe0f', label: 'Support us' }].map(item => (
                  <Link key={item.to} to={item.to} onClick={handleMenuNav} className={menuLinkClass(linkActive(location.pathname, item.to))}>
                    <span>{item.emoji}</span>{item.label}
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-1.5 pt-3 mt-2 border-t border-border/60">
                <a href="https://instagram.com/beastly.facts" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-hotpink/10 text-hotpink text-xs font-body font-bold"><Instagram className="w-3.5 h-3.5" /> Instagram</a>
                <a href="https://x.com/beastly_facts" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-foreground/5 text-foreground text-xs font-body font-bold"><XLogo className="w-3.5 h-3.5" /> X</a>
                <a href="https://www.pinterest.com/beastlyfacts/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-red-500/10 text-red-600 text-xs font-body font-bold"><PinterestLogo className="w-3.5 h-3.5" /> Pinterest</a>
                <a href="https://www.facebook.com/profile.php?id=61590767090597" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-blue-500/10 text-blue-600 text-xs font-body font-bold"><FacebookLogo className="w-3.5 h-3.5" /> Facebook</a>
                <a href="https://www.threads.net/@Beastly.Facts" target="_blank" rel="noopener noreferrer" className="col-span-2 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-foreground/5 text-foreground text-xs font-body font-bold"><ThreadsLogo className="w-3.5 h-3.5" /> Threads</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

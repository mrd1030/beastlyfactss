import React, { useState, useEffect, useRef } from 'react';
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

const getSecondaryLinkClass = (isActive) => {
  return `flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-body font-semibold transition-all ${
    isActive 
      ? 'bg-primary text-primary-foreground' 
      : 'text-foreground hover:text-foreground hover:bg-muted'
  }`;
};

// Critter Digest categories come straight from the local taxonomy - the whole
// navbar mounts on every page, so it must not pull in the MDX metadata module
// (src/lib/generated/mdx-meta.json is ~1MB) just to count posts per category.
// "Short Stories" is dropped because /blog/category/short-stories/ 301s to
// /chronicles/ (public/_redirects, mirrored in prerender.mjs).
const DIGEST_CATEGORIES = CATEGORIES.filter(c => c.slug !== 'short-stories');

const primaryLinks = [
  { to: '/', label: 'Home' },
  { to: '/encyclopedia/', label: 'Encyclopedia' },
  { to: '/beastlypedia/', label: 'Beastlypedia' },
  { to: '/guides/', label: 'Guides' },
  { to: '/facts/', label: 'Facts' },
  { to: '/blog/', label: 'Critter Digest' },
  { to: '/pack/', label: 'My Pack' },
];

export default function Navbar() {
  const [dark, setDark] = useDarkMode();
  const { streak } = useFavoritesCtx();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [digestOpen, setDigestOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDigestOpen(false);
  }, [location.pathname, location.search]);

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
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
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

  // The condition now strictly expects matching the '/blog' layout parameters
  const isDigest = location.pathname.startsWith('/blog');
  const isGuidesSection = location.pathname.startsWith('/guides');
  const isChildRoute = /^\/guides\/(?!category\/).+/.test(location.pathname);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 navbar-safe-top"
    >
      <div 
        className={`absolute inset-0 -z-10 transition-all duration-300 ${
          mobileOpen || scrolled
            ? 'bg-card/75 backdrop-blur-xl shadow-sm border-b border-border'
            : 'bg-transparent'
        }`}
      />

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

          {/* lg, not md. Adding Beastlypedia made this a seven-link row, which
              no longer fits beside the search, donate, streak, theme and menu
              controls between 768px and 1023px - measured overflowing the
              viewport at 885px. Nothing becomes unreachable: the menu button is
              present at every width and its drawer lists every section. */}
          <div className="hidden lg:flex items-center gap-0.5">
            {primaryLinks.map(link => {
              const isActive = link.to === '/blog/' ? isDigest : link.to === '/guides/' ? isGuidesSection : location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`px-3 py-1.5 rounded-full text-sm font-body font-semibold transition-all ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => { handleMenuNav(); navigate('/search/'); }}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-muted-foreground" />
            </button>
            <DonateButton className="hidden md:flex h-8 text-xs px-3 font-body font-bold" />
            {streak > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                title={`${streak}-day visit streak! Keep it up 🔥`}
                className="hidden sm:flex items-center gap-1 bg-secondary/10 text-secondary font-body font-bold text-xs px-2 py-1 rounded-full cursor-default"
              >
                {`🔥 ${streak}`}
              </motion.div>
            )}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="w-4 h-4 text-sunny" /> : <Moon className="w-4 h-4 text-muted-foreground" />}
            </button>
            <button
              ref={buttonRef}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            {...dropdownAnimation}
            ref={menuRef}
            className="z-50 border-t border-border/60 bg-card/75 text-foreground backdrop-blur-xl overflow-hidden sm:absolute sm:top-[57px] sm:right-4 sm:w-80 sm:rounded-2xl sm:border sm:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] transform-gpu"
          >
            {/* The height budget subtracts BOTH bars, not just the header.
                BottomTabs is fixed at bottom-0 with h-14 and the same z-50, so
                anything the menu laid out in that last 3.5rem was rendered
                underneath it: the social row at the end of the list could not
                be reached or tapped on a phone.

                Only the base value needs it. From sm up the panel is an
                absolutely positioned dropdown capped at 70vh, which ends well
                clear of the bar. */}
            <div className="p-4 max-h-[calc(100vh_-_3.5rem_-_3.5rem_-_0.75rem_-_var(--safe-area-inset-top)_-_var(--safe-area-inset-bottom))] sm:max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-1">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/search/', emoji: '🔎', label: 'Search' },
                  { to: '/facts/', emoji: '⚡', label: 'Animal Facts' },
                  { to: '/guides/', emoji: '📖', label: 'Care Guides' },
                ].map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={handleMenuNav}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-body font-semibold transition-all ${
                      location.pathname === item.to
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.emoji && <span>{item.emoji}</span>}
                    {item.label}
                  </Link>
                ))}

                <button
                  onClick={() => setDigestOpen(!digestOpen)}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl text-sm font-body font-semibold transition-all ${
                    isDigest ? 'bg-primary text-primary-foreground' : 'text-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <span className="flex items-center gap-3"><span>📰</span> Critter Digest</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${digestOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {digestOpen && (
                  <div className="ml-4 my-1 space-y-0.5 border-l-2 border-border pl-3">
                    <Link to="/blog/" onClick={handleMenuNav} className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-body font-semibold text-foreground hover:bg-muted transition-all">
                      All Articles
                    </Link>
                    {DIGEST_CATEGORIES.map(cat => (
                      <Link
                        key={cat.slug}
                        // cat.to covers the categories whose own route is only
                        // a 301. This menu is on every page, so linking at a
                        // redirect here would do it site-wide.
                        to={cat.to || `/blog/category/${cat.slug}/`}
                        onClick={handleMenuNav}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-body text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                )}

                <Link
                  to="/quiz/personality/"
                  onClick={handleMenuNav}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-body font-semibold transition-all ${
                    location.pathname === '/quiz' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span>🎯</span> Quizzes
                </Link>

                <Link
                  to="/fact-files/"
                  onClick={handleMenuNav}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-body font-semibold transition-all ${
                    location.pathname === '/fact-files/' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span>📰</span> Fact Files
                </Link>

                <Link
                  to="/animal-facts/"
                  onClick={handleMenuNav}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-body font-semibold transition-all ${
                    location.pathname === '/animal-facts/' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span>🔍</span> Facts Hub
                </Link>

                <Link
                  to="/chronicles/dex/"
                  onClick={handleMenuNav}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-body font-semibold transition-all ${
                    location.pathname.startsWith('/chronicles') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span>📖</span> The Chronicles
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-1.5 pt-2 mt-2 border-t border-border/60">
                {[
                  { to: '/encyclopedia/', emoji: '📚', label: 'Encyclopedia' },
                  { to: '/beastlypedia/', emoji: '🐾', label: 'Beastlypedia' },
                  { to: '/gear/', emoji: '🛒', label: 'Gear' },
                  { to: '/pack/', emoji: '🐾', label: 'My Pack' },
                  { to: '/gallery/', emoji: '📸', label: 'Gallery' },
                  { to: '/feed/', emoji: '📱', label: 'Feed' },
                  { to: '/about/', emoji: '🦁', label: 'About' },
                  { to: '/donate/', emoji: '❤️', label: 'Support Us' },
                  { to: '/contact/', emoji: '💌', label: 'Contact' },
                ].map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={handleMenuNav}
                    className={getSecondaryLinkClass(location.pathname === item.to)}
                  >
                    <span className="text-sm">{item.emoji}</span>
                    <span className="truncate">{item.label}</span>
                  </Link>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-1.5 pt-3 mt-2 border-t border-border/60">
                <a href="https://instagram.com/beastly.facts" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-hotpink/10 text-hotpink text-xs font-body font-bold"
                >
                  <Instagram className="w-3.5 h-3.5" /> Instagram
                </a>
                <a href="https://x.com/beastly_facts" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-foreground/5 text-foreground text-xs font-body font-bold"
                >
                  <XLogo className="w-3.5 h-3.5" /> X
                </a>
                <a href="https://www.pinterest.com/beastlyfacts/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-red-500/10 text-red-600 text-xs font-body font-bold"
                >
                  <PinterestLogo className="w-3.5 h-3.5" /> Pinterest
                </a>
                <a href="https://www.facebook.com/profile.php?id=61590767090597" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-blue-500/10 text-blue-600 text-xs font-body font-bold"
                >
                  <FacebookLogo className="w-3.5 h-3.5" /> Facebook
                </a>
                <a href="https://www.threads.net/@Beastly.Facts" target="_blank" rel="noopener noreferrer"
                  className="col-span-2 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-foreground/5 text-foreground text-xs font-body font-bold"
                >
                  <ThreadsLogo className="w-3.5 h-3.5" /> Threads
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
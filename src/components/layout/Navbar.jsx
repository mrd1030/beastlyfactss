import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, ChevronDown, Instagram, Search } from 'lucide-react';
import { useDarkMode } from '@/lib/hooks/useLocalStorage';
import { useFavoritesCtx } from '@/lib/FavoritesContext';
import { fetchCategories } from '@/lib/sanityCategories';
import MobileBackButton from './MobileBackButton';
import DonateButton from '@/components/DonateButton';
import Logo from '@/components/Logo';

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

// Helper function to turn category names into clean synchronized hyphens
const slugify = (text) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/ & /g, '-')
    .replace(/ /g, '-');
};

function XLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function PinterestLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.102.124.117.232.086.351l-.332 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function FacebookLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function ThreadsLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 192 192" fill="currentColor" aria-hidden="true">
      <path d="M141.537 88.988c-.966-.482-1.953-.965-2.961-1.431-1.737-19.092-12.151-30.037-30.651-30.176h-.256c-11.092 0-20.348 4.739-26.013 13.364l12.297 8.432c4.192-6.357 10.779-7.713 13.716-7.713h.171c5.302.038 9.3 1.577 11.876 4.573 1.883 2.188 3.143 5.219 3.766 9.067-4.707-.796-9.795-.915-15.221-.35-15.289 1.757-25.115 11.097-24.465 25.14.33 7.111 3.894 13.225 10.024 17.218 5.213 3.383 11.929 5.025 18.889 4.668 9.216-.49 16.443-4.019 21.472-10.481 3.849-4.903 6.289-11.253 7.384-19.267 4.43 2.672 7.711 6.19 9.625 10.462 3.315 7.407 3.506 19.59-6.852 29.87-9.128 9.054-20.096 12.972-36.676 13.086-18.395-.132-32.299-6.04-41.298-17.558-8.47-10.863-12.862-26.648-13.066-46.927.204-20.279 4.596-36.064 13.066-46.927 9-11.518 22.903-17.426 41.299-17.558 18.523.134 32.73 6.07 42.201 17.647 4.668 5.741 8.178 12.951 10.504 21.492l14.368-3.84c-2.912-10.782-7.568-20.135-13.898-27.855C136.5 23.629 118.655 16.006 96.271 15.873h-.43C73.705 16.006 56.187 23.7 44.543 38.86 34.133 52.515 28.726 72.004 28.489 96.038v.388c.237 24.034 5.644 43.522 16.054 57.178C56.187 168.764 73.705 176.458 95.841 176.591h.429c19.73-.124 33.552-5.313 44.96-16.744 14.818-14.838 14.37-33.455 9.489-44.902-3.568-7.97-10.22-14.524-19.182-19.957zm-45.033 39.017c-6.705.378-13.668-1.655-18.022-5.423-3.275-2.82-4.874-6.474-4.687-10.577.356-7.635 6.62-11.914 17.624-13.154 2.067-.238 4.116-.352 6.12-.352 4.048 0 7.851.388 11.3 1.142-1.29 15.997-5.498 27.749-12.335 28.364z" />
    </svg>
  );
}

const primaryLinks = [
  { to: '/', label: 'Home' },
  { to: '/encyclopedia/', label: 'Encyclopedia' },
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
  const [navCategories, setNavCategories] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    fetchCategories().then(cats => setNavCategories(cats.filter(c => c.count > 0))).catch(() => {});
  }, []);

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
              <span className="font-display font-bold text-sm text-foreground">Care Guide</span>
            </div>
          )}

          <div className="hidden md:flex items-center gap-0.5">
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
            <DonateButton className="hidden md:flex h-8 text-xs px-3 font-display font-bold" />
            {streak > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                title={`${streak}-day visit streak! Keep it up 🔥`}
                className="hidden sm:flex items-center gap-1 bg-secondary/10 text-secondary font-display font-bold text-xs px-2 py-1 rounded-full cursor-default"
              >
                🔥 {streak}
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
            className="z-50 border-t border-border/60 bg-card/75 text-foreground backdrop-blur-xl overflow-hidden md:absolute md:top-[57px] md:right-4 md:w-80 md:rounded-2xl md:border md:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:md:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] transform-gpu"
          >
            <div className="p-4 max-h-[55vh] md:max-h-[70vh] overflow-y-auto custom-scrollbar">
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
                    {navCategories.map(cat => (
                      <Link
                        key={cat._id}
                        to={`/blog/category/${cat.slug}/`}
                        onClick={handleMenuNav} 
                        className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-body text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                      >
                        {cat.title}
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
              </div>

              <div className="grid grid-cols-2 gap-1.5 pt-2 mt-2 border-t border-border/60">
                {[
                  { to: '/encyclopedia/', emoji: '📚', label: 'Encyclopedia' },
                  { to: '/pack/', emoji: '🐾', label: 'My Pack' },
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
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-hotpink/10 text-hotpink text-xs font-display font-bold"
                >
                  <Instagram className="w-3.5 h-3.5" /> Instagram
                </a>
                <a href="https://x.com/beastly_facts" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-foreground/5 text-foreground text-xs font-display font-bold"
                >
                  <XLogo className="w-3.5 h-3.5" /> X
                </a>
                <a href="https://www.pinterest.com/beastlyfacts/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-red-500/10 text-red-600 text-xs font-display font-bold"
                >
                  <PinterestLogo className="w-3.5 h-3.5" /> Pinterest
                </a>
                <a href="https://www.facebook.com/profile.php?id=61590767090597" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-blue-500/10 text-blue-600 text-xs font-display font-bold"
                >
                  <FacebookLogo className="w-3.5 h-3.5" /> Facebook
                </a>
                <a href="https://www.threads.net/@Beastly.Facts" target="_blank" rel="noopener noreferrer"
                  className="col-span-2 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-foreground/5 text-foreground text-xs font-display font-bold"
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
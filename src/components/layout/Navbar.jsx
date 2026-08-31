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

// Critter Digest categories come straight from the local taxonomy - the whole
// navbar mounts on every page, so it must not pull in the MDX metadata module
// (src/lib/generated/mdx-meta.json is ~1MB) just to count posts per category.
// "Short Stories" is dropped because /blog/category/short-stories/ 301s to
// /chronicles/ (public/_redirects, mirrored in prerender.mjs).
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
        const lastElement = focusableElements[lastElement];

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

          <div className="hidden md:flex items-center gap-0.5">
            {primaryLinks.map(link => {
              const isActive = linkActive(location.pathname, link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`px-3 py-1.5 border-b-2 text-sm font-body font-semibold transition-all ${
                    isActive
                      ? 'border-secondary text-primary'
                      : 'border-transparent text-foreground hover:bg-muted rounded-full'
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
                title={`${streak}-day visit streak! Keep it up`}
                className="hidden sm:flex items-center gap-1 bg-secondary/10 text-secondary font-body font-bold text-xs px-2 py-1 rounded-full cursor-default"
              >
                {` ${streak}`}
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
    </motion.nav>
  );
}

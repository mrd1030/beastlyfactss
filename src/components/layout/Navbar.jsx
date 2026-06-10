import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, ChevronDown, Instagram, Search } from 'lucide-react';
import { useDarkMode, useDailyStreak } from '@/lib/hooks/useLocalStorage';
import { client } from '@/lib/sanity';
import groq from 'groq';

function XLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
import MobileBackButton from './MobileBackButton';
import DonateButton from '@/components/DonateButton';

const primaryLinks = [
  { to: '/', label: 'Home' },
  { to: '/search', label: 'Search' },
  { to: '/facts', label: 'Facts' },
];

export default function Navbar() {
  const [dark, setDark] = useDarkMode();
  const { streak, recordVisit } = useDailyStreak();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [digestOpen, setDigestOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navCategories, setNavCategories] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    client.fetch(groq`*[_type == "category" && count(*[_type == "post" && references(^._id)]) > 0] | order(title asc) {
      _id, title, "slug": slug.current
    }`).then(cats => setNavCategories(cats)).catch(() => {});
  }, []);

  useEffect(() => { recordVisit(); }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDigestOpen(false);
  }, [location]);



  const isDigest = location.pathname.startsWith('/blog') || location.pathname.startsWith('/category');
  // Detect child routes where mobile should show back button
  const isChildRoute = /^\/guides\/.+/.test(location.pathname);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-safe-top ${
        scrolled
          ? 'bg-card/95 backdrop-blur-xl shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-between h-14">
          {/* Logo — hidden on mobile child routes; replaced by back button */}
          <Link to="/" className={`items-center gap-2 flex-shrink-0 ${isChildRoute ? 'hidden md:flex' : 'flex'}`}>
            <motion.span className="text-xl" whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4 }}>
              🦁
            </motion.span>
            <span className="font-display font-bold text-base text-foreground">
              Beastly<span className="text-secondary">Facts</span>
            </span>
          </Link>
          {/* Mobile-only back button for child routes */}
          <div className={`md:hidden ${isChildRoute ? 'flex' : 'hidden'}`}>
            <MobileBackButton />
          </div>

          {/* Mobile child route: centered page title */}
          {isChildRoute && (
            <div className="md:hidden absolute left-1/2 -translate-x-1/2 pointer-events-none">
              <span className="font-display font-bold text-sm text-foreground">Care Guide</span>
            </div>
          )}

          {/* Desktop nav — primary links */}
          <div className="hidden md:flex items-center gap-0.5">
            {primaryLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`px-3 py-1.5 rounded-full text-sm font-body font-semibold transition-all ${
                  location.pathname === link.to
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => navigate('/search')}
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
                className="hidden sm:flex items-center gap-1 bg-secondary/10 text-secondary font-display font-bold text-xs px-2 py-1 rounded-full"
              >
                🔥 {streak}
              </motion.div>
            )}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark
                ? <Sun className="w-4 h-4 text-sunny" />
                : <Moon className="w-4 h-4 text-muted-foreground" />
              }
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Hamburger menu — shown on all screen sizes */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-card/98 backdrop-blur-xl overflow-hidden"
          >
            <div className="p-4 max-h-[80vh] overflow-y-auto">
              {/* Main nav */}
              <div className="space-y-0.5">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/search', emoji: '🔎', label: 'Search' },
                  { to: '/facts', emoji: '⚡', label: 'Animal Facts' },
                ].map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-body font-semibold transition-all ${
                      location.pathname === item.to
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.emoji && <span>{item.emoji}</span>}
                    {item.label}
                  </Link>
                ))}

                {/* Critter Digest expandable */}
                <button
                  onClick={() => setDigestOpen(!digestOpen)}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-body font-semibold transition-all ${
                    isDigest ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span className="flex items-center gap-3"><span>📰</span> Critter Digest</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${digestOpen ? 'rotate-180' : ''}`} />
                </button>
                {digestOpen && (
                  <div className="ml-4 space-y-0.5 border-l-2 border-border pl-3">
                    <Link to="/blog" className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-body font-semibold text-foreground hover:bg-muted transition-all">
                      All Articles
                    </Link>
                    {navCategories.map(cat => (
                      <Link key={cat._id} to={`/category/${cat.slug}`} className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-body text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Quizzes — single link */}
                <Link
                  to="/quiz"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-body font-semibold transition-all ${
                    location.pathname === '/quiz' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span>🎯</span> Quizzes
                </Link>

                {[
                  { to: '/encyclopedia', emoji: '📚', label: 'Encyclopedia & Guides' },
                  { to: '/pack', emoji: '🐾', label: 'My Pack' },
                  { to: '/about', emoji: '🦁', label: 'About' },
                  { to: '/donate', emoji: '❤️', label: 'Support Us' },
                  { to: '/contact', emoji: '💌', label: 'Contact' },

                ].map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-body font-semibold transition-all ${
                      location.pathname === item.to
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <span>{item.emoji}</span>
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Social links */}
              <div className="flex gap-2 pt-3 pb-1">
                <a href="https://instagram.com/beastly.facts" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-hotpink/10 text-hotpink text-sm font-display font-bold"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a href="https://x.com/beastly_facts" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-foreground/5 text-foreground text-sm font-display font-bold"
                >
                  <XLogo className="w-4 h-4" /> X
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
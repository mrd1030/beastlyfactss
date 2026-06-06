import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, ChevronDown, Instagram } from 'lucide-react';
import { useDarkMode, useDailyStreak } from '@/lib/hooks/useLocalStorage';

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
  { to: '/facts', label: 'Facts' },
  { to: '/blog', label: 'Critter Digest' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/pack', label: 'My Pack' },
];

export default function Navbar() {
  const [dark, setDark] = useDarkMode();
  const { streak, recordVisit } = useDailyStreak();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const megaRef = useRef(null);

  useEffect(() => { recordVisit(); }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location]);

  // Close mega menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isEncyclopedia = location.pathname.startsWith('/encyclopedia') || location.pathname.startsWith('/guides');
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

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {primaryLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-full text-sm font-body font-semibold transition-all ${
                  location.pathname === link.to
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Full site navigator dropdown */}
            <div ref={megaRef} className="relative">
              <button
                onClick={() => setMegaOpen(!megaOpen)}
                className={`px-3 py-1.5 rounded-full text-sm font-body font-semibold transition-all flex items-center gap-1 ${
                  isEncyclopedia
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Explore
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-64 bg-card border border-border rounded-2xl shadow-xl shadow-foreground/10 overflow-hidden"
                  >
                    {/* Learn section */}
                    <div className="p-3 pb-2">
                      <p className="text-xs font-display font-bold text-muted-foreground px-1 mb-1.5 uppercase tracking-wide">Learn</p>
                      <div className="space-y-0.5">
                        {[
                          { to: '/encyclopedia', emoji: '🔍', label: 'Encyclopedia' },
                          { to: '/guides', emoji: '📖', label: 'Care Guides' },
                          { to: '/facts', emoji: '⚡', label: 'Animal Facts' },
                          { to: '/trivia', emoji: '🧠', label: 'Trivia Quiz' },
                          { to: '/blog', emoji: '📰', label: 'Critter Digest' },
                        ].map(item => (
                          <Link key={item.to} to={item.to}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-body font-semibold transition-all ${
                              location.pathname === item.to ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                            }`}
                          >
                            <span className="text-base w-5 text-center">{item.emoji}</span>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Play section */}
                    <div className="px-3 pb-2">
                      <p className="text-xs font-display font-bold text-muted-foreground px-1 mb-1.5 uppercase tracking-wide">Play</p>
                      <div className="space-y-0.5">
                        {[
                          { to: '/quiz', emoji: '🎯', label: 'Daily Quiz' },
                          { to: '/pack', emoji: '🐾', label: 'My Pack' },
                        ].map(item => (
                          <Link key={item.to} to={item.to}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-body font-semibold transition-all ${
                              location.pathname === item.to ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                            }`}
                          >
                            <span className="text-base w-5 text-center">{item.emoji}</span>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Info section */}
                    <div className="px-3 pb-2">
                      <p className="text-xs font-display font-bold text-muted-foreground px-1 mb-1.5 uppercase tracking-wide">Info</p>
                      <div className="space-y-0.5">
                        {[
                          { to: '/about', emoji: '🦁', label: 'About' },
                          { to: '/donate', emoji: '❤️', label: 'Support Us' },
                          { to: '/contact', emoji: '💌', label: 'Contact' },
                        ].map(item => (
                          <Link key={item.to} to={item.to}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-body font-semibold transition-all ${
                              location.pathname === item.to ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                            }`}
                          >
                            <span className="text-base w-5 text-center">{item.emoji}</span>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Social links */}
                    <div className="px-3 pb-3 pt-1 border-t border-border mt-1">
                      <div className="flex items-center gap-2 pt-2">
                        <a href="https://instagram.com/beastly.facts" target="_blank" rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-hotpink/10 text-hotpink hover:bg-hotpink/20 transition-colors text-xs font-display font-bold"
                        >
                          <Instagram className="w-4 h-4" /> Instagram
                        </a>
                        <a href="https://x.com/beastly_facts" target="_blank" rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors text-xs font-display font-bold"
                        >
                          <XLogo className="w-4 h-4" /> X
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-1.5">
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
              className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-card/98 backdrop-blur-xl overflow-hidden"
          >
            <div className="p-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {primaryLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-body font-semibold transition-all ${
                    location.pathname === link.to
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* All pages */}
              <div className="pt-2 pb-1 space-y-0.5">
                {[
                  { to: '/encyclopedia', emoji: '🔍', label: 'Encyclopedia' },
                  { to: '/guides', emoji: '📖', label: 'Care Guides' },
                  { to: '/facts', emoji: '⚡', label: 'Animal Facts' },
                  { to: '/blog', emoji: '📰', label: 'Critter Digest' },
                  { to: '/trivia', emoji: '🧠', label: 'Trivia Quiz' },
                  { to: '/quiz', emoji: '🎯', label: 'Daily Quiz' },
                  { to: '/pack', emoji: '🐾', label: 'My Pack' },
                  { to: '/about', emoji: '🦁', label: 'About' },
                  { to: '/donate', emoji: '❤️', label: 'Support Us' },
                  { to: '/contact', emoji: '💌', label: 'Contact' },
                ].map(item => (
                  <Link key={item.to} to={item.to}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-body font-semibold transition-all ${
                      location.pathname === item.to ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <span>{item.emoji}</span> {item.label}
                  </Link>
                ))}
              </div>
              {/* Social links */}
              <div className="flex gap-2 pt-2 pb-1 px-1">
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
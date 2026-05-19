import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useDarkMode, useDailyStreak } from '@/lib/hooks/useLocalStorage';

const navLinks = [
  { to: '/', label: 'Home', emoji: '🏠' },
  { to: '/facts', label: 'Fun Facts', emoji: '🧠' },
  { to: '/guides', label: 'Care Guides', emoji: '📖' },
  { to: '/quiz', label: 'Quiz', emoji: '🎯' },
  { to: '/pack', label: 'My Pack', emoji: '❤️' },
];

export default function Navbar() {
  const [dark, setDark] = useDarkMode();
  const { streak, recordVisit } = useDailyStreak();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { recordVisit(); }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/90 backdrop-blur-xl shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.span
              className="text-2xl"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              🦁
            </motion.span>
            <span className="font-display font-bold text-lg text-foreground">
              Beastly<span className="text-secondary">Facts</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-full text-sm font-body font-semibold transition-all ${
                  location.pathname === link.to
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <span className="mr-1">{link.emoji}</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Streak */}
            {streak > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1 bg-secondary/10 text-secondary font-display font-bold text-sm px-2.5 py-1 rounded-full"
              >
                🔥 {streak}
              </motion.div>
            )}

            {/* Dark mode */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              <motion.div
                key={dark ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                {dark ? <Sun className="w-4 h-4 text-sunny" /> : <Moon className="w-4 h-4" />}
              </motion.div>
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-card/95 backdrop-blur-xl"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-xl text-sm font-body font-semibold flex items-center gap-2 transition-all ${
                    location.pathname === link.to
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span className="text-lg">{link.emoji}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
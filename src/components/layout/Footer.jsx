import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🦁</span>
              <span className="font-display font-bold text-lg">
                Beastly<span className="text-secondary">Facts</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Facts that roar. Guides that care. 🐾<br />
              Made with ❤️ for animal lovers everywhere.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm mb-3">Explore</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: '/facts', label: '🧠 Fun Facts' },
                { to: '/guides', label: '📖 Care Guides' },
                { to: '/quiz', label: '🎯 Which Critter Are You?' },
                { to: '/pack', label: '❤️ My Beast Pack' },
              ].map(link => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm mb-3">Stay Wild</h4>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Every animal deserves love, respect, and proper care. Always research before adopting any pet! 🌿
            </p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} BeastlyFacts.com — No animals were harmed in the making of this website 🐾
          </p>
        </div>
      </div>
    </footer>
  );
}
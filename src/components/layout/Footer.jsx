import React from 'react';
import { Link } from 'react-router-dom';
import SiteCounter from '@/components/shared/SiteCounter';
import DonateButton from '@/components/DonateButton';
import Logo from '@/components/Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-28 md:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column - Prominent */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
    <Link 
      to="/" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      className="flex items-center gap-2 flex-shrink-0"
    >
      <Logo />
    </Link>
  </div>
            <p className="text-xs text-foreground/80 font-body leading-relaxed mb-4 max-w-[250px]">
              Facts that roar. Guides that care. For reptile keepers and animal lovers everywhere.
            </p>
            <SiteCounter />
            <div className="mt-4">
              <DonateButton className="w-full font-display font-bold" />
            </div>
          </div>

          {/* Navigation Links - Cleaned Up */}
          {[
            {
              title: "Explore",
              links: [
                { to: '/facts/', label: 'Fun Facts' },
                { to: '/animal-facts/', label: 'Facts Hub' },
                { to: '/quiz/personality/', label: 'Personality Quiz' },
                { to: '/pack/', label: 'My Beast Pack' },
                { to: '/blog/', label: 'Critter Digest' },
              ]
            },
            {
              title: "Encyclopedia",
              links: [
                { to: '/encyclopedia/', label: 'Browse All' },
                { to: '/guides/', label: 'Care Guides' },
                { to: '/categories/', label: 'All Categories' },
                { to: '/glossary/', label: 'Glossary' },
              ]
            },
            {
              title: "Info",
              links: [
                { to: '/about/', label: 'About Us' },
                { to: '/contact/', label: 'Contact' },
                { to: '/terms/', label: 'Terms' },
                { to: '/privacy/', label: 'Privacy' },
              ]
            }
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-bold text-[10px] uppercase tracking-widest text-foreground/60 mb-4">
                {section.title}
              </h4>
              <nav className="flex flex-col gap-2.5">
                {section.links.map(link => (
                  <Link key={link.to} to={link.to} className="text-xs text-muted-foreground hover:text-primary transition-colors font-body">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Minimal Copyright - Removed Redundant Links */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground font-body">
            © {year} BeastlyFacts.com — No animals were harmed in the making of this website. 🐾
          </p>
          <p className="text-[10px] text-muted-foreground/60 font-body">
            For educational purposes only. Not a substitute for professional veterinary advice. Always consult a qualified pet, exotic, or reptile veterinarian.
          </p>
        </div>
      </div>
    </footer>
  );
}
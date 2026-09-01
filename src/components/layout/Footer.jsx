import React from 'react';
import { Link } from 'react-router-dom';
import DonateButton from '@/components/DonateButton';
import Logo from '@/components/Logo';
import { SocialLinksRow } from '@/components/shared/SocialIcons';

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
              Facts that roar. Guides that care. For keepers and anyone who likes animals enough to look them up.
            </p>
            <div className="mt-4">
              <DonateButton className="w-full font-body font-bold" />
            </div>
            <div className="mt-5">
              <h4 className="font-body font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-2.5">
                Follow along
              </h4>
              <SocialLinksRow className="gap-4" />
            </div>
          </div>

          {[
            {
              title: "Keep a pet",
              links: [
                { to: '/guides/', label: 'Care guides' },
                { to: '/blog/', label: 'Articles' },
                { to: '/encyclopedia/', label: 'Encyclopedia' },
                { to: '/gear/', label: 'Recommended gear' },
                { to: '/care-packages/', label: 'Care packages' },
                { to: '/glossary/', label: 'Glossary' },
              ]
            },
            {
              title: "Learn something wild",
              links: [
                { to: '/facts/', label: 'Facts' },
                { to: '/animal-facts/', label: 'Animal facts hub' },
                { to: '/fact-files/', label: 'Fact files' },
                { to: '/beastlypedia/', label: 'Beastlypedia' },
                { to: '/gallery/', label: 'Gallery' },
                { to: '/feed/', label: 'The feed' },
                { to: '/quiz/', label: 'Quizzes' },
                { to: '/chronicles/dex/', label: 'Chronicles' },
              ]
            },
            {
              title: "The site",
              links: [
                { to: '/exotic-pet-laws/', label: 'Is it legal?' },
                { to: '/categories/', label: 'All categories' },
                { to: '/about/', label: 'About' },
                { to: '/contact/', label: 'Contact' },
                { to: '/pack/', label: 'My Pack' },
                { to: '/terms/', label: 'Terms' },
                { to: '/privacy/', label: 'Privacy' },
              ]
            }
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-body font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
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
            {`© ${year} BeastlyFacts.com - No animals were harmed in the making of this website. 🐾`}
          </p>
          <p className="text-[10px] text-muted-foreground font-body">
            For educational purposes only. Not a substitute for professional veterinary advice. Always consult a qualified pet, exotic, or reptile veterinarian.
          </p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { guides } from '@/lib/data/guides';
import GuideCard from '../shared/GuideCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GuideSpotlight() {
  const featured = guides.slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-2xl mb-1 block">📖</span>
            <h2 className="font-display font-bold text-2xl text-foreground">Pet Care Spotlight</h2>
            <p className="text-sm text-muted-foreground font-body mt-1">Expert guides for happy, healthy pets</p>
          </div>
          <Link to="/guides" className="hidden sm:flex items-center gap-1 text-sm font-display font-bold text-accent hover:text-accent/80 transition-colors">
            All Guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((guide, i) => (
            <GuideCard key={guide.id} guide={guide} index={i} />
          ))}
        </div>

        <Link to="/guides" className="sm:hidden flex items-center justify-center gap-1 mt-6 text-sm font-display font-bold text-accent hover:text-accent/80 transition-colors">
          All Guides <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
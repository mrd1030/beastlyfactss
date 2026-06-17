import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Inside GuideCard function...
export default function GuideCard({ guide, index = 0, onOpenLegend }) {
  // Update your color map to include all 4 tiers
  const difficultyColor = {
    "Self-Sufficient": 'bg-sky-100 text-sky-700',
    "Beginner": 'bg-emerald-100 text-emerald-700',
    "Intermediate": 'bg-amber-100 text-amber-700',
    "Advanced": 'bg-rose-100 text-rose-700',
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <Link to={`/guides?id=${guide.id}`} className="block group">
        <div className="bg-card border border-border rounded-2xl p-5 h-full transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-accent/10">
          <div className="flex items-start justify-between mb-3">
            <motion.span
              className="text-4xl"
              whileHover={{ rotate: [0, -10, 10, 0] }}
            >
              {guide.emoji}
            </motion.span>
{/* Clickable Badge */}
      <button 
        onClick={(e) => { e.preventDefault(); onOpenLegend(); }}
        className={`text-xs font-display font-semibold px-2.5 py-1 rounded-full ${difficultyColor[guide.difficulty]}`}
      >
        {guide.difficulty}
      </button>
    </div>
            
          <h3 className="font-display font-bold text-base mb-1 text-foreground group-hover:text-accent transition-colors">
            {guide.name}
          </h3>
          <p className="text-xs text-muted-foreground font-semibold mb-2">{guide.petType}</p>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {guide.tagline}
          </p>
          <div className="flex items-center gap-1 mt-4 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
            Read Guide <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
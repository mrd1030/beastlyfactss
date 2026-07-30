import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { encyclopediaCategories, encyclopediaAnimals } from '@/lib/data/encyclopedia';
import LocalImage from '@/components/shared/LocalImage';

const categoryPreview = encyclopediaCategories.map(cat => ({
  ...cat,
  count: encyclopediaAnimals.filter(a => a.category === cat.name).length,
}));

export default function EncyclopediaTeaser() {
  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-5"
        >
          <div>
            <span className="text-2xl block mb-1">📚</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
              Animal Encyclopedia
            </h2>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              Animal profiles for {encyclopediaCategories.length} categories of reptiles, birds &amp; more
            </p>
          </div>
          <Link to="/encyclopedia/" className="hidden sm:flex items-center gap-1 text-xs font-display font-semibold text-secondary hover:underline flex-shrink-0">
            Browse all animals <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categoryPreview.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/encyclopedia/category/${cat.slug}/`}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-secondary/40 hover:shadow-md transition-all duration-200 group h-full flex flex-col">
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-muted">
                    {cat.image ? (
                      <LocalImage
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        width={320}
                        height={240}
                        variant="card"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl">{cat.emoji}</div>
                    )}
                    <span className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-base shadow-sm">
                      {cat.emoji}
                    </span>
                  </div>
                  <div className="p-3 flex flex-col flex-1">
                    <p className="text-base font-display font-bold text-foreground group-hover:text-secondary transition-colors mb-0.5">
                      {cat.name}
                    </p>
                    <p className="text-xs text-muted-foreground font-body">
                      {cat.count} animal profile{cat.count !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-5 sm:hidden">
          <Link to="/encyclopedia/" className="inline-flex items-center gap-1 text-sm font-display font-bold text-secondary">
            Browse all animals <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
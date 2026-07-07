import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function DexTeaser() {
  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-3xl overflow-hidden grid grid-cols-1 sm:grid-cols-2"
        >
          <div className="aspect-video sm:aspect-auto">
            <img
              src="/assets/images/dex/dex-chron1.jpg"
              alt="Dex the bearded dragon basking regally under his terrarium light"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="text-xs font-display font-bold text-secondary uppercase tracking-wide mb-2">📖 New Fiction Series</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3 leading-tight">
              Chronicles of Dex the Bearded Dragon
            </h2>
            <p className="text-sm text-muted-foreground font-body mb-6 leading-relaxed">
              Meet Dex - a bearded dragon with opinions, ambitions, and a cricket problem. A charming, witty short story told entirely from his point of view.
            </p>
            <Link to="/chronicles/dex/" className="w-fit">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-display font-bold text-sm py-3 px-6 rounded-xl shadow-lg shadow-secondary/20"
              >
                <BookOpen className="w-4 h-4" /> Read the Story <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from '@/lib/motion-safe';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { seededShuffle } from '@/lib/utils/seededShuffle';
import LocalImage from '@/components/shared/LocalImage';
// Built by scripts/generate-beastlypedia-index.js. Six fields per Beastfile,
// about 5KB, against roughly 40KB for the data modules themselves. See that
// script for why this is a separate file from beastlypedia-index.json.
import beastfiles from '@/lib/generated/beastlypedia-teaser.json';

// Four, matching EncyclopediaTeaser's row. Each card renders a 640x480 card
// variant, and rendering every Beastfile up front is the same "improve image
// delivery" flag that capped that section.
const PREVIEW_COUNT = 4;

// Fixed first-four on the hydration-critical first render, upgraded to the
// day's rotation in an effect. Shuffling by new Date().getDate() inline would
// reintroduce the hydration mismatch (React #418/#423) fixed elsewhere here.
function defaultPreview() {
  return beastfiles.slice(0, PREVIEW_COUNT);
}

export default function BeastlypediaTeaser() {
  const [visible, setVisible] = useState(defaultPreview);

  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    const seed = new Date().getDate();
    setVisible(seededShuffle(beastfiles, seed).slice(0, PREVIEW_COUNT));
  }, []);

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
            <span className="text-2xl block mb-1">🗂️</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
              Beastlypedia
            </h2>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              {`${beastfiles.length} files on wild animals worth knowing about. No care guides, just the animal.`}
            </p>
          </div>
          <Link
            to="/beastlypedia/"
            className="hidden sm:flex items-center gap-1 text-xs font-body font-semibold text-secondary hover:underline flex-shrink-0 p-2 -m-2"
          >
            Open all files <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {visible.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/beastlypedia/${b.id}/`}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-secondary/40 hover:shadow-md transition-all duration-200 group h-full flex flex-col">
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-muted">
                    <LocalImage
                      src={b.heroImage}
                      alt={b.heroAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width={320}
                      height={240}
                      variant="card"
                    />
                    <span className="absolute bottom-2 left-2 text-[10px] font-body font-bold uppercase tracking-wide text-white bg-black/55 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      {b.group}
                    </span>
                  </div>
                  <div className="p-3 flex flex-col flex-1">
                    <p className="text-base font-body font-bold text-foreground group-hover:text-secondary transition-colors mb-0.5">
                      {b.name}
                    </p>
                    <p className="text-xs text-muted-foreground font-body line-clamp-2">
                      {b.tagline}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-5 sm:hidden">
          <Link
            to="/beastlypedia/"
            className="inline-flex items-center gap-1 text-sm font-body font-bold text-secondary p-2 -m-2"
          >
            Open all files <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

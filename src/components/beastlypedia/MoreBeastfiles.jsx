import React from 'react';
import { Link } from 'react-router-dom';
import LocalImage from '@/components/shared/LocalImage';
// Names, taglines and hero paths for every Beastfile, ~13KB, already generated
// for the homepage teaser. The sibling picks are stored as ids and resolved
// against this, rather than repeating each name and image path four more times
// across beastlypedia-content.json.
import teaser from '@/lib/generated/beastlypedia-teaser.json';

const byId = new Map(teaser.map((b) => [b.id, b]));

// Real <Link> elements, which is the entire point.
//
// An internal-link audit of the prerendered output found 38 of 39 Beastfile
// pages with fewer than three crawlable links and 13 with none at all. The fun
// facts are buttons that open a photo and the tiles elsewhere are buttons too,
// so none of it is a link a crawler can follow. These are anchors.
export default function MoreBeastfiles({ ids }) {
  const items = (ids || []).map((id) => byId.get(id)).filter(Boolean);
  if (items.length === 0) return null;

  return (
    <section className="mt-4 bg-muted/50 border border-border/60 rounded-2xl p-5">
      <h2 className="font-display font-bold text-base text-foreground mb-3">🐾 More Beastfiles</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((b) => (
          <Link
            key={b.id}
            to={`/beastlypedia/${b.id}/`}
            className="group bg-card border border-border rounded-xl overflow-hidden hover:border-secondary/40 hover:shadow-md transition-all duration-200 flex flex-col"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
              {b.heroImage ? (
                <LocalImage
                  src={b.heroImage}
                  alt={b.heroAlt || b.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={320}
                  height={240}
                  variant="card"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-2xl">🐾</div>
              )}
            </div>
            <div className="p-2.5 flex-1">
              <p className="text-[10px] font-body font-bold uppercase tracking-wide text-secondary">
                {b.group}
              </p>
              <p className="font-body font-bold text-sm text-foreground leading-snug group-hover:text-secondary transition-colors">
                {b.name}
              </p>
              <p className="text-[11px] text-muted-foreground font-body leading-snug mt-0.5 line-clamp-2">
                {b.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

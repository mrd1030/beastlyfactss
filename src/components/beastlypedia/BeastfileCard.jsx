import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import LocalImage from '@/components/shared/LocalImage';

// The dossier look: the photo sits above the card's own top edge rather than
// inside it, so each entry reads as a print stuck to a file rather than a
// standard image-on-top card. The lift is done with a negative top margin on
// the photo and matching top padding on the card body, which keeps the photo in
// normal flow - absolute positioning here would break the grid's row heights
// and leave the cards ragged.
//
// The word "Beastfile" is deliberately absent. It belongs in headings and copy,
// not stamped on every card.
export default function BeastfileCard({ beastfile }) {
  const { id, name, scientific, tagline, habitat, heroImage, heroAlt } = beastfile;

  return (
    <Link
      to={`/beastlypedia/${id}/`}
      className="group block rounded-2xl border border-border bg-card px-4 pb-4 pt-14 transition-all hover:border-secondary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
    >
      {/* -mt-24 lifts the photo clear of the card's top edge. The wrapper carries
          the shadow rather than the image itself so the shadow falls on the card
          below the photo, which is what sells the paperclipped effect. */}
      <div className="-mt-24 mb-3 rounded-xl overflow-hidden shadow-lg shadow-black/25 ring-1 ring-black/5">
        {heroImage ? (
          <LocalImage
            src={heroImage}
            alt={heroAlt || name}
            variant="card"
            className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          // Obvious on purpose. A subtle placeholder would let a Beastfile ship
          // looking finished when its hero has not been shot yet.
          <div className="w-full aspect-[4/3] bg-muted flex flex-col items-center justify-center gap-1 border-2 border-dashed border-border">
            <span className="text-2xl">📷</span>
            <span className="text-[10px] font-display font-bold uppercase tracking-wider text-muted-foreground">
              Hero image pending
            </span>
          </div>
        )}
      </div>

      <h2 className="font-display font-bold text-base text-foreground leading-tight">{name}</h2>
      <p className="text-xs text-muted-foreground font-body italic mt-0.5">{scientific}</p>
      <p className="text-sm text-muted-foreground font-body leading-snug mt-2 line-clamp-2">
        {tagline}
      </p>

      {habitat && (
        <span className="inline-flex items-center gap-1 mt-3 text-[10px] font-display font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-muted text-muted-foreground">
          <MapPin className="w-3 h-3" />
          {habitat}
        </span>
      )}
    </Link>
  );
}

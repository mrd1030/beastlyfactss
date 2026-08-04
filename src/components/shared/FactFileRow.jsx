import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import LocalImage from '@/components/shared/LocalImage';

/**
 * A Fact Files entry as a single row: cut like a folder, text on the left, a
 * polaroid clipped to the right.
 *
 * The list layout is the Critter Digest listing's, so the two pages read as
 * siblings. What keeps this from being a filtered copy of
 * /blog/category/wild-animals/ is the content model rather than the geometry:
 * every row states the claim being corrected, what replaced it, and how many
 * sources back it. A category listing shows title, excerpt and date and can
 * never show any of that.
 */

// The angled cut on the right of the tab, the detail that reads as folder
// rather than as a label stuck on a box.
//
// Clipping the TAB rather than the whole folder is what lets it size itself to
// the name: the element is inline, so its width is the word plus its padding,
// and the polygon is expressed in percentages of whatever that turns out to be.
// The previous version clipped one silhouette for tab and body together, which
// forced the tab width to be a hard-coded pixel value - the same 148px whether
// it said GIRAFFE or IMMORTAL JELLYFISH.
//
// The tab and the body carry the same background and meet with no gap, so they
// still read as one folded sheet.
//
// A CSS border on a clipped element is clipped away with it, so the tab is two
// nested clipped spans - the outer filled with the border colour, the inner
// inset by 1px and filled with the card colour. That matters more than it
// sounds: in light mode the page is rgb(250,246,239) and the card is
// rgb(252,250,248), so the fill alone is invisible and the border is the only
// thing separating a card from the page.
const TAB_CUT = 'polygon(0 0, calc(100% - 22px) 0, 100% 100%, 0 100%)';

export default function FactFileRow({ entry }) {
  const { slug, myth, truth, animal, sources, image, imageAlt } = entry;

  // state.from is what makes the article's back button say "Back to Fact Files"
  // and return here rather than to the blog listing - Blog.jsx reads it as
  // `cameFromFactFiles`. Without it the reader gets dropped into a Critter
  // Digest they never came from.
  return (
    <Link
      to={`/blog/${slug}/`}
      state={{ from: 'fact-files' }}
      className="group relative block focus:outline-none"
    >
      {/* w-fit: the tab is only as wide as the name it carries. The extra right
          padding keeps the text clear of the sloped edge. */}
      <span style={{ clipPath: TAB_CUT }} className="block w-fit bg-border p-px transition-colors group-hover:bg-secondary/40">
        <span
          style={{ clipPath: TAB_CUT }}
          className="block bg-card pb-1 pl-4 pr-[30px] pt-1.5 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:bg-muted/60 group-hover:text-secondary group-focus-visible:bg-muted/60"
        >
          {animal}
        </span>
      </span>

      <div className="border border-border bg-card p-4 transition-colors group-hover:border-secondary/40 group-hover:bg-muted/60 group-focus-visible:bg-muted/60">
        <div className="flex items-start gap-4">
          <div className="min-w-0 flex-1">
            {/* The myth reads as struck-through and quiet; the correction is
                the loud part. Reversing that would just be a headline again. */}
            <p className="font-body text-xs leading-snug text-muted-foreground line-through decoration-secondary/50">
              {myth}
            </p>
            <p className="mt-1.5 font-display text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-secondary sm:text-base">
              {truth}
            </p>

            <div className="mt-3 flex items-center justify-between gap-3 font-display text-xs font-semibold">
              {sources > 0 ? (
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <BookOpen className="h-3.5 w-3.5" />
                  {sources} {sources === 1 ? 'source' : 'sources'}
                </span>
              ) : (
                <span />
              )}
              <span className="flex flex-shrink-0 items-center gap-1 text-secondary">
                Read the evidence
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>

          {/* Holds the column open for the polaroid, which is positioned over
              this gap rather than sitting in it - it overhangs the top edge and
              would otherwise stretch the row. */}
          <div className="hidden w-28 flex-shrink-0 sm:block" />
        </div>
      </div>

      {/* The polaroid. White frame with a black keyline, and a second keyline
          round the photo, so it reads as a print rather than a rounded
          thumbnail. Stays white in dark mode because that is the point of the
          object. */}
      <div className="pointer-events-none absolute right-4 top-1 hidden rotate-[2deg] rounded-[2px] border border-black/80 bg-white p-2 pb-6 shadow-lg shadow-black/40 transition-transform duration-300 ease-out motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:rotate-[-3deg] sm:block">
        {image ? (
          <LocalImage
            src={image}
            alt={imageAlt || animal}
            variant="card"
            className="h-24 w-24 border-[1.5px] border-black/80 object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center border-[1.5px] border-black/80 bg-neutral-200">
            <span className="px-2 text-center font-display text-[9px] font-bold uppercase tracking-wider text-neutral-500">
              No photo
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}

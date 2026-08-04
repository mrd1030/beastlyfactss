import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * The "go to the other view of this content" link under the header on /facts/
 * and /gallery/. A compact button, sized between the easily-missed inline text
 * link this replaced and a full-width banner.
 *
 * Shared rather than written twice because the two pages point at each other:
 * the gallery is the same fact set browsed by photo, so whatever one says about
 * the other should stay in step.
 */
export default function CrossLinkCta({ to, label }) {
  return (
    <Link
      to={to}
      className="group mt-4 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 font-body text-sm font-semibold text-foreground transition-all hover:border-secondary/50 hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
    >
      {label}
      <ArrowRight className="h-3.5 w-3.5 text-secondary transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// The visible breadcrumb trail.
//
// Takes the same [name, path] array that breadcrumbSchema() takes, so a page
// declares its trail once and the row a reader sees and the structured data a
// crawler reads cannot drift apart. Google asks for those two to agree, and the
// usual way they stop agreeing is being written out twice.
//
// This replaces a single back link ("All states", "All animals") on the pages
// that carry it. That link answered "how do I get out of here" with exactly one
// destination; the trail answers "where am I" as well, which is the question a
// reader landing cold from a search result actually has. The legal pages are
// the deepest on the site and had the least of this.
//
// The last rung is the current page, so it is text rather than a link, marked
// aria-current="page". A link to where you already are is noise for everyone
// and a small trap for a screen reader.
// `historyBackFor` names one rung that should go back through history instead
// of pushing its URL, and is set only when the caller knows that page is the
// previous history entry. It stays a real anchor with the right href, so it
// still crawls, still opens in a new tab on a middle click, and still works if
// the click handler never runs. The handler only intercepts the plain click,
// where the difference is that the reader keeps their scroll position: the
// legal hub is 7,700px tall and its animal and state lists start at 6,056px,
// so pushing its URL means landing at a masthead four screens above the list
// they were reading.
export default function Breadcrumbs({ trail, className = '', historyBackFor = null }) {
  const navigate = useNavigate();
  const items = [['Beastly Facts', '/'], ...trail];

  return (
    <nav aria-label="Breadcrumb" className={className}>
      {/* flex-wrap because four rungs plus a long jurisdiction name
          ("Beastly Facts / Exotic Pet Laws / By State / District of Columbia")
          does not fit one line on a phone. Wrapping is the right failure: the
          alternative, a horizontally scrolling row, hides the rung a reader
          most wants, which is the one nearest the current page. */}
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 list-none p-0 m-0 text-xs font-body">
        {items.map(([name, path], i) => {
          const last = i === items.length - 1;
          return (
            <li key={path} className="flex items-center gap-x-1.5 min-w-0">
              {i > 0 && (
                <ChevronRight className="w-3 h-3 flex-shrink-0 text-muted-foreground/50" aria-hidden="true" />
              )}
              {last ? (
                <span className="font-semibold text-foreground truncate" aria-current="page">{name}</span>
              ) : (
                // The vertical padding is pulled back out with -my-1 so the tap
                // target clears the 24px minimum without the row taking the
                // height of one.
                <Link
                  to={path}
                  onClick={historyBackFor === path ? (e) => {
                    // Let a modified click through: cmd, ctrl, shift, middle
                    // button and the rest all mean "not here", and calling
                    // navigate would hijack them.
                    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                    e.preventDefault();
                    navigate(-1);
                  } : undefined}
                  className="font-medium text-muted-foreground hover:text-primary transition-colors py-1 -my-1 whitespace-nowrap"
                >
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

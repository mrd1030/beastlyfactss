import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from '@/lib/motion-safe';
import { Link } from 'react-router-dom';
import { ClipboardCheck as BadgeIcon } from 'lucide-react';
import { PageBadge } from '@/components/shared/IconChip';
import { CORRECTIONS, REVIEWS } from '@/lib/data/corrections';

const LAST_UPDATED = '2026-10-15';
const DESCRIPTION = 'How Beastly Facts guides are researched, drafted and checked, where AI is used, which pages have outside review, and a public log of every correction.';

// The methods page. The About page says in one paragraph that the guides are
// checked against sources and that AI helps with drafting. This page is the
// layer under that paragraph: what a check actually consists of, what the
// site does and does not claim, who has reviewed what, and what has been
// corrected. Every sentence here is a promise a reader can hold the site to,
// so nothing goes in that is not already true of how the work is done.
//
// The corrections log and the review register render from
// src/lib/data/corrections.js. Both start empty and stay honest: an empty log
// says so rather than hiding the section.

const Section = ({ title, children, delay = 0.1 }) => (
  <motion.section
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-card border border-border rounded-2xl p-6 sm:p-8"
  >
    <h2 className="font-display font-bold text-xl text-foreground mb-3">{title}</h2>
    <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </motion.section>
);

const A = ({ to, children }) => (
  <Link to={to} className="text-secondary font-semibold hover:underline">{children}</Link>
);

function formatDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  });
}

// The log as a reference, not a wall. Entries group by month, newest first,
// with only the latest month open; each entry is one line (date, page, what
// it says now) that opens to the full was, now, source and package. A filter
// box narrows across every month and opens them all while it is in use, so
// "chinchilla" or "UVB" lands on the right entries without scrolling. The
// first sentence of `now` serves as the one-line label because every entry
// leads with the corrected value.
function monthKey(iso) {
  const [y, m] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', timeZone: 'UTC' });
}
function shortDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
}
function firstSentence(text) {
  const m = text.match(/^(.+?[.!?])(\s|$)/);
  return m ? m[1] : text;
}
function CorrectionsLog({ entries }) {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const months = useMemo(() => {
    const shown = q
      ? entries.filter(e => [e.title, e.page, e.was, e.now, e.why, e.edition].filter(Boolean).join(' ').toLowerCase().includes(q))
      : entries;
    const groups = [];
    for (const e of shown) {
      const key = monthKey(e.date);
      const last = groups[groups.length - 1];
      if (last && last.key === key) last.items.push(e);
      else groups.push({ key, items: [e] });
    }
    return groups;
  }, [entries, q]);

  return (
    <div className="not-prose">
      <label className="block mb-3">
        <span className="sr-only">Filter the corrections log</span>
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={`Filter ${entries.length} entries by animal, page or figure`}
          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-body placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </label>
      {months.length === 0 && (
        <p className="text-sm text-muted-foreground">Nothing in the log matches that.</p>
      )}
      <div className="space-y-2">
        {months.map((g, gi) => (
          <details key={g.key} open={Boolean(q) || gi === 0} className="rounded-xl border border-border bg-muted/30">
            <summary className="cursor-pointer select-none px-4 py-2.5 font-body font-semibold text-sm text-foreground flex items-center justify-between gap-3">
              <span>{g.key}</span>
              <span className="text-xs font-normal text-muted-foreground">{`${g.items.length} ${g.items.length === 1 ? 'entry' : 'entries'}`}</span>
            </summary>
            {/* An open month scrolls inside its own box, so a busy month never
                runs the page a mile long. */}
            <ul className="divide-y divide-border border-t border-border max-h-[28rem] overflow-y-auto overscroll-contain">
              {g.items.map((c, i) => (
                <li key={`${c.page}-${c.date}-${i}`}>
                  <details className="group">
                    <summary className="cursor-pointer select-none px-4 py-2.5 text-sm font-body grid grid-cols-[3.25rem_1fr] gap-x-3 items-baseline">
                      <span className="text-xs text-muted-foreground tabular-nums">{shortDate(c.date)}</span>
                      <span>
                        <span className="font-semibold text-foreground">{c.title}</span>
                        <span className="text-muted-foreground">{` ${firstSentence(c.now)}`}</span>
                      </span>
                    </summary>
                    <div className="px-4 pb-3 pl-[4.75rem] text-sm font-body text-muted-foreground space-y-1">
                      <div><span className="font-semibold text-foreground">Page:</span> <A to={c.page}>{c.title}</A></div>
                      <div><span className="font-semibold text-foreground">Was:</span> {c.was}</div>
                      <div><span className="font-semibold text-foreground">Now:</span> {c.now}</div>
                      {c.why && <div className="text-xs">Source: {c.why}</div>}
                      {c.edition && <div className="text-xs">Package: {c.edition}</div>}
                      {c.reportedBy && <div className="text-xs">Reported by {c.reportedBy}.</div>}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
}

export default function HowGuidesAreMade() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>How the Guides Are Made | Beastly Facts</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://beastlyfacts.com/how-guides-are-made/" />
        <meta property="og:title" content="How the Guides Are Made" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://beastlyfacts.com/how-guides-are-made/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How the Guides Are Made" />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <PageBadge icon={BadgeIcon} color="teal" />
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              How the guides are made
            </h1>
            <p className="font-body text-base text-muted-foreground max-w-2xl mb-2">
              What a check means here, where AI is used, what this site does not claim, and every correction so far.
            </p>
            <p className="text-xs text-muted-foreground font-body">Last updated: {formatDate(LAST_UPDATED)}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 space-y-8">
        <Section title="The short version" delay={0.1}>
          <p>
            One person writes and maintains this site. I am a keeper, not a veterinarian, a biologist or a lawyer.
            I use AI tools to draft and organize. I check every claim against a source I have opened myself before
            it goes up, and the sources are listed at the foot of each article. When I get something wrong, I fix
            it and log the fix on this page.
          </p>
          <p>
            That is the whole method. The rest of this page is what each of those sentences means in practice.
          </p>
        </Section>

        <Section title="Where the AI is and where it is not" delay={0.15}>
          <p>
            AI tools do a lot of the legwork. They search for sources, pull a first draft together from what they
            find, and keep wording consistent across a hundred-plus pages. They are good at that. They are also
            capable of producing a confident sentence that is simply false, and of citing a page that does not
            say what the sentence claims, so no draft is published as drafted.
          </p>
          <p>
            Every figure and every claim of fact in a draft is traced back to a specific page in a specific
            source before it ships, by me, with the source open. A claim I cannot find a source for is removed,
            not softened. No source means no sentence. When good sources disagree on a number, the guide gives
            the range rather than picking one. Every recommendation a guide makes is one I have read and agreed
            with. The AI never publishes anything.
          </p>
        </Section>

        <Section title="What counts as a source" delay={0.2}>
          <p>
            A source is a page I actually opened that contains the specific claim it is cited for. Veterinary
            references, peer-reviewed papers, university extension pages, government and agency material, and
            manufacturer specifications for equipment. What a guide covers is driven by what people actually
            search for about that animal. Where the figures come from is not: forums, social posts and other hobby
            sites never supply a number.
          </p>
          <p>
            Each article lists its sources at the bottom along with the date it was last reviewed. Most guides
            rest on four or five. Where a guide spans several species it may carry more. A long list is not a
            sign of a better article, and I trim sources that no longer carry a claim in the text.
          </p>
          <p>
            The <A to="/exotic-pet-laws/">legal pages</A> work differently. They quote the statute or regulation
            itself, link to it, and show the date each state's entry was last checked against the current text.
            Laws change, and that date is the first thing to look at.
          </p>
        </Section>

        <Section title="What gets the most attention" delay={0.25}>
          <p>
            Some numbers can hurt an animal if they are wrong: basking temperatures, UVB distances, humidity
            ranges, calcium and vitamin schedules, enclosure minimums, and anything about medication or
            emergencies. Those get checked hardest, and where sources disagree the guide gives a range rather
            than picking a winner. The <A to="/guides/bearded-dragon/">bearded dragon guides</A> are the
            reference set the others are held to, because those are the animals I have kept the longest.
          </p>
          <p>
            Every guide also tells you when the right answer is a vet, not a web page.
          </p>
        </Section>

        <Section title="Review dates and what they mean" delay={0.3}>
          <p>
            The review date at the foot of an article is the last day I read the whole piece against its sources
            again. It is not a publish date, and it is not a claim that nothing has changed in the field since.
            Guides are reread on a rolling basis, with the high-traffic pages and anything touching health or law
            going first.
          </p>
        </Section>

        <Section title="Outside review" delay={0.35}>
          <p>
            A one-person check is a real limit, and I would rather say so than hide it. The pages below have been
            read for accuracy by someone outside the site, with their name, what qualifies them, and the date.
            When a reviewer is listed on a guide, it is listed here too. When this list is empty, no page has had
            outside review yet.
          </p>
          {REVIEWS.length === 0 ? (
            <p className="rounded-xl border border-dashed border-border bg-muted/40 px-4 py-3 text-foreground">
              No outside reviews yet. If you are a veterinarian, a biologist or a keeper with real credentials
              and would read one guide against its sources, say so on
              the <A to="/contact/?reason=review">contact page</A>. Your name, what qualifies you, a link to
              your practice or profile, and the date go on the guide and on this page.
            </p>
          ) : (
            <ul className="space-y-3">
              {REVIEWS.map((r) => (
                <li key={`${r.page}-${r.date}`} className="rounded-xl border border-border bg-background px-4 py-3">
                  <div className="font-semibold text-foreground">
                    <A to={r.page}>{r.title}</A>
                  </div>
                  {/* One string on each side of the link, never two adjacent
                      text nodes: the prerendered HTML merges them and the
                      client render would not match. */}
                  {r.url ? (
                    <div>
                      {'Reviewed by '}
                      <a href={r.url} target="_blank" rel="noopener" className="text-secondary font-semibold hover:underline">{r.reviewer}</a>
                      {`. ${r.credentials}.`}
                    </div>
                  ) : (
                    <div>{`Reviewed by ${r.reviewer}. ${r.credentials}.`}</div>
                  )}
                  <div>Scope: {r.scope}</div>
                  <div className="text-xs mt-1">{formatDate(r.date)}</div>
                </li>
              ))}
            </ul>
          )}
        </Section>

        <Section title="What this site does not claim" delay={0.4}>
          <p>
            Nothing here is veterinary advice, and nothing on the legal pages is legal advice. The guides are a
            well-sourced starting point written by a keeper. If your animal is sick, see an exotic or reptile vet.
            If you are deciding whether an animal is legal where you live, read the statute the page links to and
            call your state wildlife agency. A page here can tell you where to look. It cannot stand in for the
            person whose job it is to answer.
          </p>
          <p>
            The <A to="/care-packages/">printable care packages</A> are the same research as the free guides,
            laid out for offline use. They are not a different or higher tier of information. When a guide is
            corrected, the matching package is corrected too, and anyone who bought it gets the new edition free.
          </p>
        </Section>

        <Section title="Corrections" delay={0.45}>
          <p>
            Every substantive fix to a published page is logged here, newest first: what the page said, what it
            says now, and when it changed. A substantive fix is one that changes what a reader would do: a
            basking temperature that was wrong is logged, a sentence reworded to say the same thing is not.
            Typos and link repairs are not logged. Entries are never deleted.
          </p>
          <p>
            This log opened on {formatDate(LAST_UPDATED)}. Before that, corrections were tracked in working
            documents. The entries below from before that date are the fixes from that period that changed what
            a reader would do, dated to the day the fix went live or was recorded as done. Consistency fixes and
            link repairs from the same period are not listed. Where a fix also reached a printable care package,
            the entry names the edition that carries it, and the package's own page lists every edition.
          </p>
          {CORRECTIONS.length === 0 ? (
            <p className="rounded-xl border border-dashed border-border bg-muted/40 px-4 py-3 text-foreground">
              No corrections logged yet. This log began on {formatDate(LAST_UPDATED)}. Fixes made before that date
              were noted on the page they changed.
            </p>
          ) : (
            <CorrectionsLog entries={CORRECTIONS} />
          )}
        </Section>

        <Section title="Found an error?" delay={0.5}>
          <p>
            Use the form on the <A to="/contact/">contact page</A>, or
            email <a href="mailto:hello@beastlyfacts.com" className="text-secondary font-semibold hover:underline">hello@beastlyfacts.com</a>,
            or message the site on any of the social accounts listed there. Tell me the page and what you think
            is wrong. A source helps but is not required. I read everything. If you are right, the page changes
            and the fix is logged above. If I think the page is right, I will tell you why and what it rests on.
            The <A to="/about/">About page</A> has the rest of the story.
          </p>
        </Section>
      </div>
    </div>
  );
}

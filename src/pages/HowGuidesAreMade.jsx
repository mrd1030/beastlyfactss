import React from 'react';
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
              No outside reviews yet.
            </p>
          ) : (
            <ul className="space-y-3">
              {REVIEWS.map((r) => (
                <li key={`${r.page}-${r.date}`} className="rounded-xl border border-border bg-background px-4 py-3">
                  <div className="font-semibold text-foreground">
                    <A to={r.page}>{r.title}</A>
                  </div>
                  <div>Reviewed by {r.reviewer}. {r.credentials}.</div>
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
          {CORRECTIONS.length === 0 ? (
            <p className="rounded-xl border border-dashed border-border bg-muted/40 px-4 py-3 text-foreground">
              No corrections logged yet. This log began on {formatDate(LAST_UPDATED)}. Fixes made before that date
              were noted on the page they changed.
            </p>
          ) : (
            <ul className="space-y-3">
              {CORRECTIONS.map((c) => (
                <li key={`${c.page}-${c.date}`} className="rounded-xl border border-border bg-background px-4 py-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-semibold text-foreground"><A to={c.page}>{c.title}</A></span>
                    <span className="text-xs">{formatDate(c.date)}</span>
                  </div>
                  <div className="mt-1"><span className="font-semibold text-foreground">Was:</span> {c.was}</div>
                  <div><span className="font-semibold text-foreground">Now:</span> {c.now}</div>
                  {c.reportedBy && <div className="text-xs mt-1">Reported by {c.reportedBy}.</div>}
                </li>
              ))}
            </ul>
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

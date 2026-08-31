import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import { themedQuizzes, releasedQuizzes } from '@/lib/data/quizzes';
import { useQuizScores } from '@/lib/hooks/useQuizScores';
import { siteToday } from '@/lib/utils/date';

// Not getDisplayDate(): that helper deliberately renders future dates as
// nothing, and the next drop date is future by definition.
const formatDrop = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

const EVERGREEN = [
  { to: '/quiz/personality/', emoji: '🎯', title: 'Which Critter Are You?', blurb: 'The personality quiz. Find your animal match.' },
  { to: '/quiz/trivia/', emoji: '🌍', title: 'Animal Origins Trivia', blurb: 'Where animals and breeds really come from.' },
  { to: '/quiz/knowledge/', emoji: '🧠', title: 'Beastly Facts Challenge', blurb: 'Quick-fire questions from the fact vault.' },
];

// The quiz hub at /quiz/. Themed quizzes newest-first with completion state,
// the three evergreen quizzes pinned below, and a teaser for the next drop.
export default function QuizHub() {
  const { scores } = useQuizScores();

  // Same prerender contract as CategoryBrowse: first render (and the baked
  // HTML) uses no date gate, the real ET date arrives right after mount. The
  // repo normally holds no future-dated quizzes, so this is a seatbelt.
  const [releaseDay, setReleaseDay] = useState(null);
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setReleaseDay(siteToday());
  }, []);

  const released = releasedQuizzes(releaseDay);
  const [featured, ...past] = released;
  const newestDate = themedQuizzes[0]?.date;
  // Cadence promise: a new quiz every other Monday, next one 14 days after
  // the newest. Display only; the routine controls the real schedule.
  const nextDate = newestDate
    ? new Date(new Date(`${newestDate}T12:00:00Z`).getTime() + 14 * 24 * 3600 * 1000).toISOString().slice(0, 10)
    : null;

  const scoreChip = (quiz) => {
    const s = scores[quiz.id];
    if (!s) return null;
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-body font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
        <CheckCircle2 className="w-3 h-3" />{`${s.score}/${s.total}`}
      </span>
    );
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Animal Quizzes | Beastly Facts</title>
        <meta name="description" content="Themed animal quizzes drawn from real Beastly Facts guides, a new one every other week, plus personality and trivia classics. Earn reward cards for your Pack." />
        <link rel="canonical" href="https://beastlyfacts.com/quiz/" />
        <meta property="og:title" content="Animal Quizzes | Beastly Facts" />
        <meta property="og:description" content="Themed animal quizzes with reward cards, a new one every other week." />
        <meta property="og:url" content="https://beastlyfacts.com/quiz/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts animal quizzes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Animal Quizzes | Beastly Facts" />
        <meta name="twitter:description" content="Themed animal quizzes with reward cards, a new one every other week." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Puzzle piece">🧩</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-1">Quizzes</h1>
            <p className="text-sm text-muted-foreground font-body max-w-lg">
              Every themed quiz is built from real guides and facts on this site, with sourced answers and a collectible reward card. New quiz every other Monday.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {featured && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <Link to={`/quiz/${featured.id}/`} className="block bg-gradient-to-br from-secondary/15 via-card to-primary/10 border-2 border-secondary/40 rounded-3xl p-6 sm:p-8 hover:border-secondary transition-colors group">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <span className="text-6xl sm:text-7xl flex-shrink-0" aria-hidden="true">{featured.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-body font-bold uppercase tracking-wider text-secondary">
                      {`Latest · Quiz #${featured.number}`}
                    </span>
                    {scoreChip(featured)}
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground group-hover:text-secondary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-muted-foreground font-body mt-1">{featured.tagline}</p>
                  <p className="text-xs text-muted-foreground font-body mt-2">
                    {`${featured.questions.length} questions · reward: ${featured.reward.emoji} ${featured.reward.title}`}
                  </p>
                </div>
                <span className="flex-shrink-0 inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground font-body font-bold text-sm px-5 py-2.5 rounded-2xl">
                  {scores[featured.id] ? 'Play again' : 'Play'} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {(past.length > 0 || nextDate) && (
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            {past.map(quiz => (
              <Link key={quiz.id} to={`/quiz/${quiz.id}/`} className="bg-card border border-border rounded-2xl p-5 hover:border-secondary/40 hover:shadow-sm transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl" aria-hidden="true">{quiz.emoji}</span>
                  {scoreChip(quiz)}
                </div>
                <p className="text-[10px] font-body font-bold uppercase tracking-wider text-muted-foreground">{`Quiz #${quiz.number}`}</p>
                <h3 className="font-display font-bold text-lg text-foreground group-hover:text-secondary transition-colors">{quiz.title}</h3>
                <p className="text-xs text-muted-foreground font-body mt-1 line-clamp-2">{quiz.tagline}</p>
              </Link>
            ))}
            {nextDate && (
              <div className="border-2 border-dashed border-border rounded-2xl p-5 flex flex-col items-center justify-center text-center min-h-[140px]">
                <Calendar className="w-6 h-6 text-muted-foreground mb-2" />
                <p className="font-body font-bold text-sm text-foreground">Next quiz drops</p>
                <p className="text-xs text-muted-foreground font-body mt-0.5">{formatDrop(nextDate)}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-10">
          <h2 className="font-display font-bold text-xl text-foreground mb-1">The classics</h2>
          <p className="text-xs text-muted-foreground font-body mb-4">Always here, whatever the week.</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {EVERGREEN.map(item => (
              <Link key={item.to} to={item.to} className="bg-card border border-border rounded-2xl p-5 hover:border-secondary/40 hover:shadow-sm transition-all group">
                <span className="text-3xl block mb-2" aria-hidden="true">{item.emoji}</span>
                <h3 className="font-display font-bold text-base text-foreground group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-body mt-1">{item.blurb}</p>
              </Link>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground font-body mt-8 text-center">
          {'Reward cards you save land in '}
          <Link to="/pack/" className="font-bold text-secondary hover:underline">My Pack</Link>
          {'. Species quizzes live on their '}
          <Link to="/encyclopedia/" className="font-bold text-secondary hover:underline">Encyclopedia</Link>
          {' pages.'}
        </p>
      </div>
    </div>
  );
}

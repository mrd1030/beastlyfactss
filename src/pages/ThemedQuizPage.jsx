import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from '@/lib/motion-safe';
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, ChevronRight, RotateCcw, Share2, Trophy } from 'lucide-react';
import { useFavoritesCtx } from '@/lib/FavoritesContext';
import { useQuizScores } from '@/lib/hooks/useQuizScores';
import { getDisplayDate } from '@/lib/utils/date';

// Plays one dated themed quiz (src/lib/data/quizzes/). Rendered by Quiz.jsx
// when /quiz/:tab matches a themed quiz id instead of an evergreen tab.
// Interaction mirrors the trivia tab so the two feel like one family; what's
// new here is the per-question source link and the reward card at the end.
export default function ThemedQuizPage({ quiz }) {
  const [step, setStep] = useState('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [savedToPack, setSavedToPack] = useState(false);

  const { saveQuizResult, recordQuizCompletion } = useFavoritesCtx();
  const { scores, recordScore } = useQuizScores();
  const best = scores[quiz.id];

  const total = quiz.questions.length;
  const question = quiz.questions[currentIndex];

  const handleSelect = (i) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === question.answer) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= total) {
      const finalScore = score;
      recordScore(quiz.id, finalScore, total);
      recordQuizCompletion();
      setStep('results');
    } else {
      setAnswered(false);
      setSelected(null);
      setCurrentIndex(i => i + 1);
    }
  };

  const handleRestart = () => {
    setStep('intro');
    setCurrentIndex(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setSavedToPack(false);
  };

  const handleSaveToPack = () => {
    if (savedToPack) return;
    saveQuizResult({
      type: 'themed-quiz',
      emoji: quiz.reward.emoji,
      title: quiz.reward.title,
      description: `${quiz.reward.blurb} Scored ${score}/${total} on "${quiz.title}".`,
      quizId: quiz.id,
      quizTitle: quiz.title,
      score,
      total,
    });
    setSavedToPack(true);
  };

  const handleShare = () => {
    const text = `${quiz.emoji} I scored ${score}/${total} on the "${quiz.title}" quiz at BeastlyFacts and earned the ${quiz.reward.emoji} ${quiz.reward.title} card. Think you can beat me?`;
    const url = `${window.location.origin}/quiz/${quiz.id}/`;
    if (navigator.share) {
      navigator.share({ title: `${quiz.title} | Beastly Facts`, text, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${text} ${url}`);
    }
  };

  const pageTitle = `${quiz.title} Quiz | Beastly Facts`;
  const pageDescription = `${quiz.tagline} ${total} questions drawn from real Beastly Facts guides, instant feedback with sources, and a collectible reward card for your Pack.`;
  const canonicalUrl = `https://beastlyfacts.com/quiz/${quiz.id}/`;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${quiz.title} quiz on Beastly Facts`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-6 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <Link to="/quiz/" className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> All quizzes
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[10px] font-body font-bold uppercase tracking-wider text-secondary mb-1">
              {`Quiz #${quiz.number} · ${getDisplayDate(quiz.date)}`}
            </p>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-1">
              <span className="mr-2" aria-hidden="true">{quiz.emoji}</span>{quiz.title}
            </h1>
            <p className="text-sm text-muted-foreground font-body">{quiz.tagline}</p>
          </motion.div>
        </div>
      </div>

      <div className="px-4 sm:px-6 pb-16">
        {step === 'intro' && (
          <div className="max-w-md mx-auto text-center py-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-6xl block mb-4" aria-hidden="true">{quiz.emoji}</span>
              <div className="flex items-center justify-center gap-6 mb-6 text-sm font-body text-muted-foreground">
                {[['❓', `${total} Questions`], ['📚', 'Sourced Answers'], [quiz.reward.emoji, 'Reward Card']].map(([e, l]) => (
                  <div key={l} className="flex flex-col items-center gap-1">
                    <span className="text-2xl" aria-hidden="true">{e}</span>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
              {best && (
                <p className="text-xs font-body text-muted-foreground mb-4">
                  {`Your best: ${best.score}/${best.total}`}
                </p>
              )}
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => setStep('quiz')}
                className="bg-secondary text-secondary-foreground font-body font-bold text-base px-8 py-3.5 rounded-2xl shadow-lg shadow-secondary/30">
                Start Quiz 🚀
              </motion.button>
            </motion.div>
          </div>
        )}

        {step === 'quiz' && (
          <div className="max-w-md mx-auto py-4">
            <div className="flex items-center justify-between mb-3 text-xs font-body text-muted-foreground">
              <span>{`Question ${currentIndex + 1} of ${total}`}</span>
              <span>{`Score: ${score}`}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5 mb-6 overflow-hidden">
              <motion.div className="bg-secondary h-1.5 rounded-full" animate={{ width: `${((currentIndex + (answered ? 1 : 0)) / total) * 100}%` }} />
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -80, opacity: 0 }} transition={{ duration: 0.2 }}>
                <h2 className="font-display font-bold text-xl text-foreground mb-5 leading-snug">{question.q}</h2>
                <div className="space-y-2.5 mb-5">
                  {question.options.map((option, i) => {
                    let style = 'bg-card border-border text-foreground hover:border-secondary/40';
                    if (answered) {
                      if (i === question.answer) style = 'bg-emerald-50 border-emerald-400 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
                      else if (i === selected) style = 'bg-red-50 border-red-400 text-red-800 dark:bg-red-950 dark:text-red-300';
                      else style = 'bg-card border-border text-muted-foreground opacity-50';
                    }
                    return (
                      <motion.button key={i} onClick={() => handleSelect(i)} disabled={answered}
                        whileHover={answered ? {} : { scale: 1.02 }} whileTap={answered ? {} : { scale: 0.98 }}
                        className={`w-full text-left px-5 py-4 rounded-2xl border-2 font-body text-sm transition-all flex items-center justify-between gap-3 ${style}`}>
                        <span>{option}</span>
                        {answered && i === question.answer && <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />}
                        {answered && i === selected && i !== question.answer && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
                      </motion.button>
                    );
                  })}
                </div>
                <AnimatePresence>
                  {answered && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <div className={`rounded-2xl p-4 mb-4 border ${selected === question.answer ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800' : 'bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800'}`}>
                        <p className="text-xs font-body font-bold text-muted-foreground mb-1">
                          {selected === question.answer ? '✅ Correct!' : '❌ Not quite!'}
                        </p>
                        <p className="text-sm font-body text-foreground leading-relaxed">{question.explain}</p>
                        {question.source && (
                          <Link to={question.source.to} className="inline-flex items-center gap-1 mt-2 text-xs font-body font-bold text-secondary hover:underline">
                            {`From: ${question.source.label}`} <ArrowRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                      <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleNext}
                        className="w-full bg-secondary text-secondary-foreground font-body font-bold text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2">
                        {currentIndex + 1 >= total ? '🏆 See Results' : 'Next Question'} <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {step === 'results' && (
          <div className="max-w-md mx-auto text-center py-8">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
              <Trophy className="w-16 h-16 mx-auto mb-3 text-secondary" />
              <h2 className="font-display font-bold text-3xl text-foreground mb-1">Quiz Complete!</h2>
              <p className="text-sm text-muted-foreground font-body mb-6">
                {`You scored ${score} of ${total}${best && best.score > score ? `, your best is still ${best.score}` : ''}.`}
              </p>

              {/* Reward card - the collectible this quiz mints */}
              <div className="bg-gradient-to-br from-secondary/15 via-card to-primary/10 border-2 border-secondary/40 rounded-3xl p-6 mb-6 relative overflow-hidden">
                <p className="text-[10px] font-body font-bold uppercase tracking-widest text-secondary mb-2">Reward card earned</p>
                <span className="text-6xl block mb-2" aria-hidden="true">{quiz.reward.emoji}</span>
                <h3 className="font-display font-bold text-2xl text-foreground">{quiz.reward.title}</h3>
                <p className="text-sm text-muted-foreground font-body mt-1">{quiz.reward.blurb}</p>
                <p className="text-xs font-body font-bold text-secondary mt-3">{`${quiz.title} · ${score}/${total}`}</p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleSaveToPack} disabled={savedToPack}
                  className={`font-body font-bold text-sm px-6 py-3 rounded-2xl flex items-center justify-center gap-2 ${savedToPack ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-secondary text-secondary-foreground'}`}>
                  {savedToPack ? <><CheckCircle2 className="w-4 h-4" /> Saved to Pack</> : <>❤️ Save card to Pack</>}
                </motion.button>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleShare}
                  className="bg-card border border-border text-foreground font-body font-bold text-sm px-6 py-3 rounded-2xl flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" /> Share
                </motion.button>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleRestart}
                  className="bg-card border border-border text-foreground font-body font-bold text-sm px-6 py-3 rounded-2xl flex items-center justify-center gap-2">
                  <RotateCcw className="w-4 h-4" /> Retake
                </motion.button>
              </div>
              <Link to="/quiz/" className="inline-flex items-center gap-1 mt-6 text-sm font-body font-bold text-secondary hover:underline">
                More quizzes <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

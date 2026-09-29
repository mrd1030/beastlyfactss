import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useParams } from 'react-router-dom';
import { hasNoindexStateParams } from '@/lib/seo/queryRobots';
import { motion, AnimatePresence } from '@/lib/motion-safe';
import { ArrowLeft, ArrowRight, CheckCircle2, Image as ImageIcon, RotateCcw, Share2 } from 'lucide-react';
import { quizQuestions, quizResults } from '@/lib/data/quizQuestions';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import { useScrollBackIntoView } from '@/lib/hooks/useScrollBackIntoView';
import { useFavoritesCtx } from '@/lib/FavoritesContext';
import { logSiteEvent } from '@/lib/siteEvents';
import { getThemedQuiz } from '@/lib/data/quizzes';
import { getClassicQuiz, personalityQuiz } from '@/lib/data/quizzes/classics';
import { canShareImage, quizPhrase, quizShareImage, shareQuizResult } from '@/lib/utils/quizShareImage';
import ThemedQuizPage from '@/pages/ThemedQuizPage';

// Results saved before the "meet" links existed are still in localStorage, so
// the link is looked up by name rather than read off the stored result.
const meetFor = (result) => Object.values(quizResults).find(r => r.name === result?.name)?.meet || null;

// The personality result, styled like ThemedQuizPage's ResultCard so a match
// reads as the same kind of card as a reward.
function MatchCard({ result, compact = false }) {
  const meet = meetFor(result);
  return (
    <div className={`rounded-3xl ${compact ? 'p-5' : 'p-6'} border-2 bg-gradient-to-br from-secondary/15 via-card to-primary/10 border-secondary/40`}>
      <p className="text-[10px] font-body font-bold uppercase tracking-widest mb-2 text-secondary">Your critter match</p>
      <span className={`${compact ? 'text-5xl' : 'text-6xl'} block mb-2`} aria-hidden="true">{result.emoji}</span>
      <h3 className={`font-display font-bold ${compact ? 'text-xl' : 'text-2xl'} text-foreground`}>{result.title}</h3>
      {!compact && <p className="text-sm text-muted-foreground font-body mt-1 leading-relaxed">{result.description}</p>}
      <div className="flex flex-wrap justify-center gap-1.5 mt-3">
        {result.traits.map(trait => (
          <span key={trait} className="bg-secondary/10 text-secondary font-body font-semibold text-xs px-2.5 py-1 rounded-full">{trait}</span>
        ))}
      </div>
      {meet && (
        <Link to={meet.to} className="inline-flex items-center gap-1 mt-3 text-xs font-body font-bold text-secondary hover:underline">
          {`Meet the real one: ${meet.label}`} <ArrowRight className="w-3 h-3" />
        </Link>
      )}
    </div>
  );
}

// ─── Personality Quiz ───────────────────────────────────────────
// No right answers, so it cannot play through ThemedQuizPage, but it wears
// the same page: header, intro, question layout and a result card that saves
// itself to the Pack.
function PersonalityQuizPage() {
  const location = useLocation();
  const [step, setStep] = useState('intro');
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState({});
  const [result, setResult] = useLocalStorage('beastly-quiz-result', null);
  const [playAreaRef, scrollBackToPlayArea] = useScrollBackIntoView();
  const { saveQuizResult, removeQuizResult, savedQuizResults, recordQuizCompletion } = useFavoritesCtx();

  const total = quizQuestions.length;
  const question = quizQuestions[index];
  const quiz = personalityQuiz;

  // One match card in the Pack at a time. Personality results are the only
  // saved quiz results without a type.
  const saveMatch = (match) => {
    savedQuizResults.filter(r => !r.type).forEach(r => removeQuizResult(r.id));
    saveQuizResult(match);
  };

  const handleAnswer = (option) => {
    const next = { ...scores };
    Object.entries(option.scores).forEach(([animal, pts]) => { next[animal] = (next[animal] || 0) + pts; });
    setScores(next);
    scrollBackToPlayArea();
    if (index + 1 < total) {
      setIndex(i => i + 1);
      return;
    }
    const top = Object.entries(next).sort((a, b) => b[1] - a[1])[0][0];
    const match = quizResults[top];
    setResult(match);
    saveMatch(match);
    recordQuizCompletion();
    logSiteEvent('personality_quiz', `Matched ${match.name} ${match.emoji}`);
    setStep('result');
    // Dynamic import (mirrors HeroSection's confetti trigger): canvas-confetti
    // lives in its own manualChunk (vite.config.js) so this stays on demand.
    import('canvas-confetti').then(({ default: confetti }) => {
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 }, colors: ['#E4632F', '#D9A441', '#FFD93D', '#E8336D', '#154B3D'] });
    });
  };

  const handleRestart = () => {
    setStep('quiz');
    setIndex(0);
    setScores({});
  };

  const handleShare = ({ withImage = false } = {}) => {
    if (!result) return;
    const text = `${quiz.emoji} I got ${result.name} ${result.emoji} on ${quizPhrase(quiz.title, { quoted: true })} at BeastlyFacts. Which critter are you?`;
    const url = `${window.location.origin}/quiz/${quiz.id}/`;
    const image = withImage ? quizShareImage({
      emoji: result.emoji,
      title: result.name,
      blurb: result.traits.join(' · '),
      kicker: 'My critter match',
      line: `${quiz.title} on Beastly Facts`,
      fileName: `beastlyfacts-${quiz.id}.png`,
    }) : undefined;
    shareQuizResult({ title: `${quiz.title} | Beastly Facts`, text, url, image });
  };

  const pageTitle = 'Which Critter Are You? | Beastly Facts Quiz';
  const pageDescription = 'Answer seven quick questions and find out which animal matches your personality: a loyal golden retriever, a mysterious ball python, or something wilder.';
  const canonicalUrl = `https://beastlyfacts.com/quiz/${quiz.id}/`;
  const ogImage = `https://beastlyfacts.com/assets/og/quiz-${quiz.id}.jpg`;
  const lineup = Object.values(quizResults);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content={hasNoindexStateParams(location.search) ? 'noindex,follow' : 'index,follow'} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${quiz.title} quiz on Beastly Facts`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-6 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <Link to="/quiz/" className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> All quizzes
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[10px] font-body font-bold uppercase tracking-wider text-secondary mb-1">Classic quiz</p>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-1">
              <span className="mr-2" aria-hidden="true">{quiz.emoji}</span>{quiz.title}
            </h1>
            <p className="text-sm text-muted-foreground font-body">{quiz.tagline}</p>
          </motion.div>
        </div>
      </div>

      <div ref={playAreaRef} className="px-4 sm:px-6 pb-16 scroll-mt-24">
        {step === 'intro' && (
          <div className="max-w-md mx-auto text-center py-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-6xl block mb-4" aria-hidden="true">{quiz.emoji}</span>
              <div className="flex items-center justify-center gap-6 mb-6 text-sm font-body text-muted-foreground">
                {[['❓', `${total} Questions`], ['🐾', `${lineup.length} Critters`], ['🃏', 'Match Card']].map(([e, l]) => (
                  <div key={l} className="flex flex-col items-center gap-1">
                    <span className="text-2xl" aria-hidden="true">{e}</span>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
              {result && (
                <div className="mb-6">
                  <MatchCard result={result} compact />
                </div>
              )}
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleRestart}
                className="bg-secondary text-secondary-foreground font-body font-bold text-base px-8 py-3.5 rounded-2xl shadow-lg shadow-secondary/30">
                {result ? 'Take It Again 🚀' : 'Start Quiz 🚀'}
              </motion.button>

              <div className="mt-10 text-left bg-card border border-border rounded-2xl p-5">
                <p className="text-[10px] font-body font-bold uppercase tracking-wider text-muted-foreground mb-2.5">Meet the lineup</p>
                <p className="text-xs text-muted-foreground font-body mb-3">
                  Every match is a real animal with its own page on the site:
                </p>
                <ul className="space-y-1.5">
                  {lineup.map(r => (
                    <li key={r.name}>
                      <Link to={r.meet.to} className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-secondary hover:underline">
                        <span aria-hidden="true">{r.emoji}</span>{r.meet.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}

        {step === 'quiz' && (
          <div className="max-w-md mx-auto py-4">
            <div className="flex items-center justify-between mb-3 text-xs font-body text-muted-foreground">
              <span>{`Question ${index + 1} of ${total}`}</span>
              {index > 0 && (
                <button onClick={handleRestart} className="font-bold hover:text-secondary hover:underline">Start over</button>
              )}
            </div>
            <div className="w-full bg-muted rounded-full h-1.5 mb-6 overflow-hidden">
              <motion.div className="bg-secondary h-1.5 rounded-full" animate={{ width: `${(index / total) * 100}%` }} />
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={index} initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -80, opacity: 0 }} transition={{ duration: 0.2 }}>
                <h2 className="font-display font-bold text-xl text-foreground mb-5 leading-snug">
                  <span className="mr-2" aria-hidden="true">{question.emoji}</span>{question.question}
                </h2>
                <div className="space-y-2.5">
                  {question.options.map((option, i) => (
                    <motion.button key={i} onClick={() => handleAnswer(option)}
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="w-full text-left px-5 py-4 rounded-2xl border-2 font-body text-sm transition-all bg-card border-border text-foreground hover:border-secondary/40">
                      {option.text}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {step === 'result' && result && (
          <div className="max-w-md mx-auto text-center py-8">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
              <h2 className="font-display font-bold text-3xl text-foreground mb-1">It's a match!</h2>
              <p className="text-sm text-muted-foreground font-body mb-6">{`${total} questions, one critter.`}</p>
              <div className="mb-3">
                <MatchCard result={result} />
              </div>
              <Link to="/pack/" className="inline-flex items-center gap-1.5 mb-6 text-xs font-body font-bold text-emerald-700 dark:text-emerald-300 hover:underline">
                <CheckCircle2 className="w-3.5 h-3.5" /> Saved to your Pack
              </Link>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => handleShare()}
                  className="bg-secondary text-secondary-foreground font-body font-bold text-sm px-6 py-3 rounded-2xl flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" /> Share
                </motion.button>
                {canShareImage() && (
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => handleShare({ withImage: true })}
                    className="bg-card border border-border text-foreground font-body font-bold text-sm px-6 py-3 rounded-2xl flex items-center justify-center gap-2">
                    <ImageIcon className="w-4 h-4" /> Share card
                  </motion.button>
                )}
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

// /quiz/:tab. A dated themed quiz id or a classic (trivia, knowledge) plays
// through ThemedQuizPage; anything else is the personality quiz, as before.
export default function Quiz() {
  const { tab } = useParams();
  const quiz = getThemedQuiz(tab) || getClassicQuiz(tab);
  if (quiz) return <ThemedQuizPage key={quiz.id} quiz={quiz} />;
  return <PersonalityQuizPage />;
}

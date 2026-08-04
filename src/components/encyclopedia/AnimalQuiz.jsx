import React, { useMemo, useState } from 'react';
import { motion } from '@/lib/motion-safe';
import { CheckCircle2, XCircle, RotateCcw, Share2, Check, Layers } from 'lucide-react';
import { generateAnimalQuiz } from '@/lib/utils/generateAnimalQuiz';
import { useFavoritesCtx } from '@/lib/FavoritesContext';

export default function AnimalQuiz({ animal }) {
  const questions = useMemo(() => generateAnimalQuiz(animal), [animal.id]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [justSaved, setJustSaved] = useState(false);
  const { recordQuizCompletion, saveQuizResult, savedQuizResults, removeQuizResult } = useFavoritesCtx();

  // Not enough distractor data for a fair quiz on this animal - skip the section.
  if (questions.length < 2) return null;

  const question = questions[index];
  const total = questions.length;

  const handleSelect = (i) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === question.correctIndex) setScore(s => s + 1);
  };

  // Dynamically imported for the same reason the Quiz page does it: confetti is
  // only ever needed at this one moment, and vite.config keeps it out of the
  // eager vendor chunk so it costs nothing on pages that never finish a quiz.
  const celebrate = async (finalScore) => {
    try {
      const { default: confetti } = await import('canvas-confetti');
      const perfect = finalScore === total;
      confetti({
        particleCount: perfect ? 160 : 90,
        spread: perfect ? 100 : 70,
        origin: { y: 0.7 },
        colors: ['#FF8C42', '#00B8A9', '#FFD93D', '#E8336D'],
      });
    } catch {
      // canvas-confetti falls back to the main thread when its blob worker is
      // blocked, but a failed import should never break the results screen.
    }
  };

  const handleNext = () => {
    if (index + 1 >= total) {
      setFinished(true);
      recordQuizCompletion();
      celebrate(score);
    } else {
      setIndex(i => i + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setJustSaved(false);
  };

  // One card per animal rather than one per attempt: retaking the same quiz
  // updates the card instead of stacking near-identical copies, which matters
  // because the Pack only keeps the 20 most recent results and would otherwise
  // push out other animals. Both updates are functional, so React batching them
  // composes correctly.
  const handleSaveToPack = () => {
    const existing = savedQuizResults.find(
      (r) => r.type === 'animal-quiz' && r.animalId === animal.id
    );
    if (existing) removeQuizResult(existing.id);

    saveQuizResult({
      type: 'animal-quiz',
      animalId: animal.id,
      animalName: animal.name,
      animalImage: animal.image,
      animalEmoji: animal.emoji,
      animalCategory: animal.category,
      title: `${animal.name} Quiz`,
      score,
      total,
    });
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2200);
  };

  const handleShare = () => {
    const text = `I scored ${score}/${total} on the ${animal.name} quiz on Beastly Facts! 🧠 Think you can beat me?`;
    if (navigator.share) {
      navigator.share({ title: `${animal.name} Quiz - Beastly Facts`, text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(`${text} ${window.location.href}`);
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-5">
      <h2 className="font-display font-bold text-base text-foreground mb-3">🧠 Test Yourself</h2>

      {finished ? (
        <div className="text-center py-2">
          <p className="font-display font-bold text-3xl text-foreground mb-1">
            {score}<span className="text-lg text-muted-foreground">{`/${total}`}</span>
          </p>
          <p className="text-xs text-muted-foreground font-body mb-5">
            {score === total ? 'Perfect score! 🏆' : score / total >= 0.5 ? "Solid! You were paying attention. 🐾" : 'Worth a re-read above! 📖'}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleSaveToPack}
              disabled={justSaved}
              className={`font-body font-bold text-xs py-2.5 px-4 rounded-xl flex items-center gap-1.5 transition-colors ${
                justSaved
                  ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 cursor-default'
                  : 'bg-primary text-primary-foreground'
              }`}>
              {justSaved
                ? <><Check className="w-3.5 h-3.5" /> Saved to Pack</>
                : <><Layers className="w-3.5 h-3.5" /> Save to Pack</>}
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleShare}
              className="bg-secondary text-secondary-foreground font-body font-bold text-xs py-2.5 px-4 rounded-xl flex items-center gap-1.5">
              <Share2 className="w-3.5 h-3.5" /> Share
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleRestart}
              className="bg-muted text-foreground font-body font-bold text-xs py-2.5 px-4 rounded-xl flex items-center gap-1.5">
              <RotateCcw className="w-3.5 h-3.5" /> Retake
            </motion.button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-body font-bold text-muted-foreground">{`Question ${index + 1} of ${total}`}</span>
            <span className="text-xs font-body font-bold text-secondary">{`${score} pts`}</span>
          </div>
          {/* Width, not a motion scaleX transform. motion-safe's wrapper drops
              `animate` on an instance's first render, which left this bar
              rendering completely full on question 1 of 4 - it read as a
              finished quiz before a single answer. */}
          <div className="w-full bg-muted rounded-full h-1.5 mb-4 overflow-hidden">
            <div
              className="bg-secondary h-1.5 rounded-full transition-[width] duration-300 ease-out"
              style={{ width: `${(index / total) * 100}%` }}
            />
          </div>

          <motion.div key={question.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
            <p className="text-sm font-body font-bold text-foreground mb-3">{question.question}</p>
            <div className="space-y-2 mb-3">
              {question.options.map((opt, i) => {
                let style = 'bg-background border-border text-foreground hover:border-secondary/40';
                if (answered) {
                  if (i === question.correctIndex) style = 'bg-emerald-50 border-emerald-400 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
                  else if (i === selected) style = 'bg-red-50 border-red-400 text-red-800 dark:bg-red-950 dark:text-red-300';
                  else style = 'bg-background border-border text-muted-foreground opacity-50';
                }
                return (
                  <motion.button key={i} onClick={() => handleSelect(i)} disabled={answered}
                    whileHover={answered ? {} : { x: 2 }} whileTap={answered ? {} : { scale: 0.98 }}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs font-body transition-all flex items-start justify-between gap-2 ${style}`}>
                    <span className="leading-snug">{opt}</span>
                    {answered && i === question.correctIndex && <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" />}
                    {answered && i === selected && i !== question.correctIndex && <XCircle className="w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" />}
                  </motion.button>
                );
              })}
            </div>

            {answered && (
              <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={handleNext}
                className="w-full bg-secondary text-secondary-foreground font-body font-bold text-xs py-2.5 rounded-xl">
                {index + 1 >= total ? 'See Score' : 'Next Question'}
              </motion.button>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { hasNoindexStateParams } from '@/lib/seo/queryRobots';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, RotateCcw, Share2, CheckCircle2, XCircle, Trophy, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizQuestions, quizResults } from '@/lib/data/quizQuestions';
import { triviaQuestions } from '@/lib/data/triviaQuestions';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import { useFavoritesCtx } from '@/lib/FavoritesContext';   // ← ADDED
import KnowledgeQuiz from '@/lib/data/KnowledgeQuiz';

const TRIVIA_TOTAL = triviaQuestions.length;

// ─── Personality Quiz ───────────────────────────────────────────
function PersonalityQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({});
  const [result, setResult] = useLocalStorage('beastly-quiz-result', null);
  const [showResult, setShowResult] = useState(!!result);
  const [justSaved, setJustSaved] = useState(false);           // ← ADDED

  const { saveQuizResult, recordQuizCompletion } = useFavoritesCtx();                // ← ADDED

  const currentQ = quizQuestions[step - 1];
  const totalQ = quizQuestions.length;
  const progress = step > 0 ? (step / totalQ) * 100 : 0;

  const handleAnswer = (option) => {
    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([animal, score]) => {
      newScores[animal] = (newScores[animal] || 0) + score;
    });
    setScores(newScores);

    if (step >= totalQ) {
      const topAnimal = Object.entries(newScores).sort((a, b) => b[1] - a[1])[0][0];
      const quizResult = quizResults[topAnimal];
      setResult(quizResult);
      setShowResult(true);
      recordQuizCompletion();
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 }, colors: ['#FF8C42', '#00B8A9', '#FFD93D', '#E8336D', '#0F3A1F'] });
    } else {
      setStep(step + 1);
    }
  };

  const restart = () => {
    setStep(0);
    setScores({});
    setResult(null);
    setShowResult(false);
    setJustSaved(false);                                       // ← ADDED
  };

  const handleShare = () => {
    if (!result) return;
    const text = `I took the BeastlyFacts quiz and I'm a ${result.name}! ${result.emoji} Find out which critter you are!`;
    if (navigator.share) {
      navigator.share({ title: 'My BeastlyFacts Quiz Result', text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(text);
    }
  };

  // === ADDED: Save to Beast Pack ===
  const handleSaveToPack = () => {
    if (!result) return;
    saveQuizResult(result);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  if (showResult && result) {
    return (
      <div className="max-w-lg mx-auto text-center py-12">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <motion.span
            className="text-8xl block mb-4"
            animate={{ rotate: [0, -5, 5, -5, 0], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            {result.emoji}
          </motion.span>
          <h2 className="font-display font-bold text-3xl text-foreground mb-3">{result.title}</h2>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 max-w-md mx-auto">
            {result.description}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {result.traits.map(trait => (
              <span key={trait} className="bg-secondary/10 text-secondary font-display font-semibold text-xs px-3 py-1.5 rounded-full">
                {trait}
              </span>
            ))}
          </div>

          {/* UPDATED: Added Save to Pack button */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleShare}
              className="bg-secondary text-secondary-foreground font-display font-bold text-sm py-3 px-6 rounded-xl flex items-center gap-2">
              <Share2 className="w-4 h-4" /> Share Result
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }} 
              onClick={handleSaveToPack}
              className={`font-display font-bold text-sm py-3 px-6 rounded-xl flex items-center gap-2 transition-all
                ${justSaved ? 'bg-emerald-500 text-white' : 'bg-card border border-border text-foreground hover:bg-secondary/10'}`}>
              {justSaved ? '✓ Saved!' : '❤️ Save to Beast Pack'}
            </motion.button>

            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={restart}
              className="bg-card border border-border text-foreground font-display font-bold text-sm py-3 px-6 rounded-xl flex items-center gap-2">
              <RotateCcw className="w-4 h-4" /> Retake
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ... (rest of your original code for intro and questions remains unchanged)

  if (step === 0) {
    return (
      <div className="max-w-lg mx-auto text-center py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <motion.span className="text-6xl block mb-4" animate={{ rotate: [0, -5, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            🎯
          </motion.span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">Which Critter Are You?</h2>
          <p className="text-sm text-muted-foreground font-body mb-8 max-w-md mx-auto leading-relaxed">
            Answer {totalQ} fun questions and discover which animal matches your personality! 🐾 Are you a loyal golden retriever or a mysterious ball python?
          </p>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => setStep(1)}
            className="bg-secondary text-secondary-foreground font-display font-bold text-sm py-3 px-8 rounded-xl inline-flex items-center gap-2 shadow-lg shadow-secondary/20">
            Let's Go! <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-display font-bold text-muted-foreground">Question {step} of {totalQ}</span>
          <span className="text-xs font-display font-bold text-secondary">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
            initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
        </div>
        <div className="flex gap-1 mt-2">
          {Array.from({ length: totalQ }).map((_, i) => (
            <span key={i} className={`text-sm ${i < step ? 'opacity-100' : 'opacity-20'}`}>🐾</span>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
          <span className="text-4xl block mb-3">{currentQ.emoji}</span>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-6">{currentQ.question}</h2>
          <div className="flex flex-col gap-3">
            {currentQ.options.map((option, i) => (
              <motion.button key={i} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }} onClick={() => handleAnswer(option)}
                className="text-left bg-card border border-border rounded-xl p-4 text-sm font-body text-foreground hover:border-secondary/50 hover:shadow-md hover:shadow-secondary/10 transition-all">
                {option.text}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Trivia Quiz ────────────────────────────────────────────────
function TriviaQuizSection() {
  const [step, setStep] = useState('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [direction, setDirection] = useState(1);

  const { recordQuizCompletion } = useFavoritesCtx();

  const question = triviaQuestions[currentIndex];

  const handleSelect = (optionIndex) => {
    if (answered) return;
    setSelected(optionIndex);
    setAnswered(true);
    if (optionIndex === question.correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    setDirection(1);
    if (currentIndex + 1 >= TRIVIA_TOTAL) {
      setStep('results');
      recordQuizCompletion();
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
    setDirection(1);
  };

  const getScoreLabel = () => {
    const pct = score / TRIVIA_TOTAL;
    if (pct === 1) return { label: "Perfect Score! 🏆", color: "text-emerald-500" };
    if (pct >= 0.8) return { label: "Animal Expert! 🦁", color: "text-emerald-500" };
    if (pct >= 0.6) return { label: "Wild Enthusiast! 🐾", color: "text-secondary" };
    if (pct >= 0.4) return { label: "Keep Exploring! 🌿", color: "text-amber-500" };
    return { label: "Time to Study! 📚", color: "text-red-500" };
  };

  const variants = {
    enter: (dir) => ({ x: dir * 80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir * -80, opacity: 0 }),
  };

  if (step === 'intro') {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-6xl block mb-4">🌍</span>
          <h2 className="font-display font-bold text-3xl text-foreground mb-3">Animal Origins Trivia</h2>
          <p className="text-sm text-muted-foreground font-body mb-6 leading-relaxed">
            Test your knowledge of where animals and breeds come from! {TRIVIA_TOTAL} questions, instant feedback, and a final score.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8 text-sm font-body text-muted-foreground">
            {[['❓', `${TRIVIA_TOTAL} Questions`], ['⚡', 'Instant Feedback'], ['🏆', 'Final Score']].map(([e, l]) => (
              <div key={l} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{e}</span>
                <span>{l}</span>
              </div>
            ))}
          </div>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => setStep('quiz')}
            className="bg-secondary text-secondary-foreground font-display font-bold text-base px-8 py-3.5 rounded-2xl shadow-lg shadow-secondary/30">
            Start Quiz 🚀
          </motion.button>
        </motion.div>
      </div>
    );
  }

  if (step === 'results') {
    const { label, color } = getScoreLabel();
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
          <Trophy className={`w-20 h-20 mx-auto mb-4 ${color}`} />
          <h2 className="font-display font-bold text-3xl text-foreground mb-2">Quiz Complete!</h2>
          <p className={`font-display font-bold text-xl mb-6 ${color}`}>{label}</p>
          <div className="bg-card border border-border rounded-3xl p-8 mb-6">
            <p className="text-sm text-muted-foreground font-body mb-2">Your score</p>
            <p className="font-display font-bold text-6xl text-foreground">
              {score}<span className="text-2xl text-muted-foreground">/{TRIVIA_TOTAL}</span>
            </p>
            <div className="w-full bg-muted rounded-full h-3 mt-4">
              <motion.div className="bg-secondary h-3 rounded-full" initial={{ width: 0 }}
                animate={{ width: `${(score / TRIVIA_TOTAL) * 100}%` }} transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }} />
            </div>
            <p className="text-xs text-muted-foreground font-body mt-2">{Math.round((score / TRIVIA_TOTAL) * 100)}% correct</p>
          </div>
          <div className="flex justify-center gap-3">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => {
                const text = `I scored ${score}/${TRIVIA_TOTAL} on the BeastlyFacts Animal Origins Trivia! 🌍🏆 Can you beat me?`;
                if (navigator.share) {
                  navigator.share({ title: 'BeastlyFacts Trivia', text, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(text + ' ' + window.location.href);
                }
              }}
              className="bg-secondary text-secondary-foreground font-display font-bold text-sm px-6 py-3 rounded-2xl flex items-center gap-2">
              <Share2 className="w-4 h-4" /> Share Score
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleRestart}
              className="bg-card border border-border text-foreground font-display font-bold text-sm px-6 py-3 rounded-2xl flex items-center gap-2">
              <RotateCcw className="w-4 h-4" /> Play Again
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-8">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-body text-muted-foreground">Question {currentIndex + 1} of {TRIVIA_TOTAL}</span>
        <span className="text-xs font-display font-bold text-secondary">{score} pts</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 mb-8">
        <motion.div className="bg-secondary h-2 rounded-full"
          animate={{ width: `${(currentIndex / TRIVIA_TOTAL) * 100}%` }} transition={{ duration: 0.4 }} />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div key={currentIndex} custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}>
          <div className="text-center mb-8">
            <span className="text-5xl block mb-4">{question.emoji}</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground leading-snug">{question.question}</h2>
          </div>

          <div className="space-y-3 mb-6">
            {question.options.map((option, i) => {
              let style = "bg-card border-border text-foreground hover:border-secondary/40";
              if (answered) {
                if (i === question.correct) style = "bg-emerald-50 border-emerald-400 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300";
                else if (i === selected) style = "bg-red-50 border-red-400 text-red-800 dark:bg-red-950 dark:text-red-300";
                else style = "bg-card border-border text-muted-foreground opacity-50";
              }
              return (
                <motion.button key={i} onClick={() => handleSelect(i)} disabled={answered}
                  whileHover={answered ? {} : { scale: 1.02 }} whileTap={answered ? {} : { scale: 0.98 }}
                  className={`w-full text-left px-5 py-4 rounded-2xl border-2 font-body text-sm transition-all flex items-center justify-between gap-3 ${style}`}>
                  <span>{option}</span>
                  {answered && i === question.correct && <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />}
                  {answered && i === selected && i !== question.correct && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {answered && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                <div className={`rounded-2xl p-4 mb-6 border ${selected === question.correct ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800' : 'bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800'}`}>
                  <p className="text-xs font-display font-bold text-muted-foreground mb-1">
                    {selected === question.correct ? '✅ Correct!' : '❌ Not quite!'}
                  </p>
                  <p className="text-sm font-body text-foreground leading-relaxed">{question.fact}</p>
                </div>
                <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleNext}
                  className="w-full bg-secondary text-secondary-foreground font-display font-bold text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2">
                  {currentIndex + 1 >= TRIVIA_TOTAL ? '🏆 See Results' : 'Next Question'} <ChevronRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Main Quiz Page ─────────────────────────────────────────────
const KnowledgeQuizTab = () => {
  const [started, setStarted] = useState(false);

  return started ? (
    <KnowledgeQuiz />
  ) : (
    <div className="max-w-3xl mx-auto py-12">
      <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
        <div className="text-center">
          <span className="text-5xl block mb-4">🧠</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">Beastly Facts Challenge</h2>
          <p className="mx-auto mb-8 max-w-xl text-sm text-muted-foreground leading-relaxed">
            Put your animal knowledge to the test with quick multiple-choice questions, instant feedback, and a final score.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mb-8 text-left">
            {[
              'Instant explanations for each question',
              'Friendly score tracker that shows your progress',
              'Designed for curious readers and animal lovers',
              'Perfect for quick learning sessions on the go',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-background/80 p-4 text-sm text-foreground">
                {item}
              </div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setStarted(true)}
            className="inline-flex items-center justify-center rounded-2xl bg-secondary px-8 py-3 text-sm font-display font-bold text-secondary-foreground shadow-lg shadow-secondary/20 transition-colors"
          >
            Start the Knowledge Quiz
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const TABS = [
  { id: 'personality', label: '🎯 Which Critter Are You?' },
  { id: 'trivia', label: '🌍 Animal Origins Trivia' },
  { id: 'knowledge', label: '🧠 Beastly Facts Challenge' },
];

const TAB_META = {
  personality: {
    title: 'Which Critter Are You? | Beastly Facts Quiz',
    description: 'Answer a few fun questions and discover which animal matches your personality - are you a loyal golden retriever, a mysterious ball python, or something wilder?',
    canonical: 'https://beastlyfacts.com/quiz/personality/',
  },
  trivia: {
    title: 'Animal Origins Trivia Quiz | Beastly Facts',
    description: 'Test your knowledge of where animals and breeds come from - 15 questions with instant feedback and a final score. How well do you know the animal kingdom?',
    canonical: 'https://beastlyfacts.com/quiz/trivia/',
  },
  knowledge: {
    title: 'Beastly Facts Challenge | Animal Knowledge Quiz',
    description: 'Challenge yourself with multiple-choice animal questions, instant explanations, and a score. A quick, fun way to learn something new about the animal world.',
    canonical: 'https://beastlyfacts.com/quiz/knowledge/',
  },
};

export default function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const { tab: urlTab } = useParams();
  const activeTab = ['trivia', 'knowledge'].includes(urlTab) ? urlTab : 'personality';
  const shouldNoindex = hasNoindexStateParams(location.search);
  const meta = TAB_META[activeTab] || TAB_META.personality;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <meta name="robots" content={shouldNoindex ? 'noindex,follow' : 'index,follow'} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts - animal personality and trivia quizzes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-6 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Puzzle piece">🧩</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-1">Quizzes</h1>
            <p className="text-sm text-muted-foreground font-body">Personality quiz or knowledge trivia - pick your challenge!</p>
          </motion.div>

          {/* Tab switcher */}
          <div className="flex gap-2 mt-6 bg-muted/60 rounded-2xl p-1.5 max-w-md mx-auto">
            {TABS.map(tab => (
              <Link
                key={tab.id}
                to={`/quiz/${tab.id}/`}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-display font-bold transition-all text-center ${
                  activeTab === tab.id
                    ? 'bg-card shadow-sm text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
          >
{activeTab === 'personality' && <PersonalityQuiz />}
{activeTab === 'trivia' && <TriviaQuizSection />}
{activeTab === 'knowledge' && <KnowledgeQuizTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
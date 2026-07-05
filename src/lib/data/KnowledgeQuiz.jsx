import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Share2 } from 'lucide-react';
import { useFavoritesCtx } from '@/lib/FavoritesContext';

const KnowledgeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [justSaved, setJustSaved] = useState(false);

  const { saveQuizResult, recordQuizCompletion } = useFavoritesCtx();

  const questions = [
    {
      question: "What is the only mammal capable of true flight?",
      options: ["Bat", "Flying Squirrel", "Sugar Glider", "Colugo"],
      correct: 0,
      explanation: "Bats are the only mammals that can truly fly using wings made of skin stretched over elongated fingers."
    },
    {
      question: "How many hearts does an octopus have?",
      options: ["One", "Two", "Three", "Four"],
      correct: 2,
      explanation: "Octopuses have three hearts: two pump blood to the gills, and one pumps it to the rest of the body."
    },
    {
      question: "Which animal has the strongest bite force in the world?",
      options: ["Lion", "Great White Shark", "Saltwater Crocodile", "Hippo"],
      correct: 2,
      explanation: "The saltwater crocodile has the strongest bite force ever measured — over 3,700 pounds per square inch."
    },
    {
      question: "What is the fastest land animal on Earth?",
      options: ["Lion", "Pronghorn Antelope", "Cheetah", "Greyhound"],
      correct: 2,
      explanation: "Cheetahs can reach speeds up to 70 mph (113 km/h) in short bursts."
    },
    {
      question: "Which bird is the only one that can fly backwards?",
      options: ["Hummingbird", "Swift", "Kingfisher", "Woodpecker"],
      correct: 0,
      explanation: "Hummingbirds can fly forwards, backwards, and even hover thanks to their unique wing structure."
    },
    {
      question: "How long can a sloth hold its breath underwater?",
      options: ["Up to 10 minutes", "Up to 20 minutes", "Up to 40 minutes", "Up to 60 minutes"],
      correct: 2,
      explanation: "Sloths can hold their breath for up to 40 minutes — longer than most marine mammals!"
    },
    {
      question: "What color is an octopus's blood?",
      options: ["Red", "Blue", "Green", "Purple"],
      correct: 1,
      explanation: "Octopus blood is blue because it uses copper-based hemocyanin instead of iron-based hemoglobin."
    },
    {
      question: "Which animal can change its gender?",
      options: ["Clownfish", "Octopus", "Frog", "Turtle"],
      correct: 0,
      explanation: "Clownfish are born male and can change to female if the dominant female in the group dies."
    }
  ];

  const handleAnswer = (index) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === questions[currentQuestion].correct) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
      recordQuizCompletion();
    }
  };

  const getScoreMessage = () => {
    const percentage = Math.round((score / questions.length) * 100);
    if (percentage >= 90) return { title: "Beast Master!", message: "Incredible! You know your animals extremely well." };
    if (percentage >= 75) return { title: "Animal Expert", message: "Excellent knowledge! You're clearly a true animal lover." };
    if (percentage >= 60) return { title: "Solid Explorer", message: "Great job! You have strong animal knowledge." };
    return { title: "Curious Learner", message: "Good effort! Keep exploring BeastlyFacts to level up your knowledge." };
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setJustSaved(false);
  };

  const handleSaveToPack = () => {
    saveQuizResult({
      type: 'knowledge-quiz',
      title: `Beastly Facts Challenge — ${score}/${questions.length}`,
      score,
      total: questions.length,
      date: new Date().toISOString(),
    });
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  const handleShare = () => {
    const text = `I scored ${score}/${questions.length} on the Beastly Facts Challenge! 🧠 Can you beat me?`;
    if (navigator.share) {
      navigator.share({ title: 'Beastly Facts Challenge', text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(`${text} ${window.location.href}`);
    }
  };

  const progress = ((currentQuestion) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const scoreData = getScoreMessage();

  return (
    <div className="min-h-screen px-4 pt-12 pb-16">
      <div className="max-w-xl mx-auto">
        {!showResult ? (
          <div className="bg-card border border-border rounded-3xl p-8 shadow-xl shadow-secondary/10">
            <div className="mb-8 text-center">
              <span className="text-5xl block mb-4">🧠</span>
              <h2 className="font-display font-bold text-3xl text-foreground mb-2">Beastly Facts Challenge</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Test your animal knowledge with quick multiple-choice questions, instant feedback, and a final score.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1 text-muted-foreground">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>Score: {score}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 mb-3">
                <div className="h-full bg-secondary rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="mb-8">
              <div className="text-center mb-6">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground leading-snug">{currentQ.question}</h3>
              </div>
              <div className="space-y-3">
                {currentQ.options.map((option, index) => {
                  let style = 'bg-card border-border text-foreground hover:border-secondary/40 hover:bg-muted';
                  if (showExplanation) {
                    if (index === currentQ.correct) {
                      style = 'bg-emerald-50 border-emerald-400 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
                    } else if (index === selectedAnswer) {
                      style = 'bg-red-50 border-red-400 text-red-800 dark:bg-red-950 dark:text-red-300';
                    } else {
                      style = 'bg-card border-border text-muted-foreground opacity-50';
                    }
                  }

                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(index)}
                      disabled={showExplanation}
                      className={`w-full text-left px-5 py-4 rounded-2xl border-2 font-body text-sm transition-all flex items-center justify-between gap-3 ${style}`}
                    >
                      <span>{option}</span>
                      {showExplanation && index === currentQ.correct && <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />}
                      {showExplanation && index === selectedAnswer && index !== currentQ.correct && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <div className={`rounded-2xl p-4 mt-6 border ${
                  selectedAnswer === currentQ.correct
                    ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800'
                    : 'bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800'
                }`}>
                  <p className="text-sm font-body text-foreground leading-relaxed">
                    {selectedAnswer === currentQ.correct ? '✅ Correct!' : '❌ Not quite!'} {currentQ.explanation}
                  </p>
                </div>
              )}
            </div>

            {showExplanation && (
              <button
                onClick={handleNext}
                className="w-full bg-secondary text-secondary-foreground font-display font-bold text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2"
              >
                {currentQuestion + 1 >= questions.length ? '🏁 View Results' : 'Next Question'}
              </button>
            )}
          </div>
        ) : (
          <div className="bg-card border border-border rounded-3xl p-8 shadow-xl shadow-secondary/10 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="font-display font-bold text-3xl text-foreground mb-2">{scoreData.title}</h2>
            <p className="text-sm text-muted-foreground mb-6">{scoreData.message}</p>

            <div className="bg-muted rounded-3xl p-6 mb-6">
              <p className="text-sm text-muted-foreground mb-2">Final score</p>
              <p className="font-display font-bold text-5xl text-foreground">{score}<span className="text-2xl text-muted-foreground">/{questions.length}</span></p>
              <p className="text-xs text-muted-foreground mt-2">{Math.round((score / questions.length) * 100)}% correct</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleShare}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-display font-bold text-sm px-6 py-3 rounded-2xl"
              >
                <Share2 className="w-4 h-4" /> Share Score
              </button>
              <button
                onClick={handleSaveToPack}
                className={`w-full sm:w-auto px-6 py-3 rounded-2xl font-display font-bold text-sm transition-all ${justSaved ? 'bg-emerald-500 text-white' : 'bg-card border border-border text-foreground hover:bg-secondary/10'}`}
              >
                {justSaved ? '✓ Saved!' : '❤️ Save to Your Pack'}
              </button>
              <button
                onClick={resetQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border bg-card text-foreground font-display font-bold text-sm px-6 py-3 rounded-2xl"
              >
                <RotateCcw className="w-4 h-4" /> Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowledgeQuiz;

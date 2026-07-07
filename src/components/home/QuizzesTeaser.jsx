import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Full class strings kept complete (not concatenated at render time) so
// Tailwind's static scanner can find and generate them.
const QUIZZES = [
  {
    to: '/quiz/personality/',
    emoji: '🎯',
    title: 'Which Critter Are You?',
    description: 'Answer a few fun questions and discover your animal spirit match.',
    gradient: 'from-primary to-primary/80',
    fg: 'text-primary-foreground',
    fgMuted: 'text-primary-foreground/80',
  },
  {
    to: '/quiz/trivia/',
    emoji: '🌍',
    title: 'Animal Origins Trivia',
    description: '15 questions on where your favorite animals and breeds come from.',
    gradient: 'from-accent/90 to-teal',
    fg: 'text-accent-foreground',
    fgMuted: 'text-accent-foreground/80',
  },
  {
    to: '/quiz/knowledge/',
    emoji: '🧠',
    title: 'Beastly Facts Challenge',
    description: 'Quick-fire multiple choice questions with instant explanations.',
    gradient: 'from-secondary to-secondary/70',
    fg: 'text-secondary-foreground',
    fgMuted: 'text-secondary-foreground/80',
  },
];

export default function QuizzesTeaser() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-3xl mb-2 block">🧩</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2">Test Yourself</h2>
          <p className="text-sm text-muted-foreground font-body max-w-md mx-auto">Three ways to play - pick your challenge.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {QUIZZES.map((quiz, i) => (
            <motion.div
              key={quiz.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to={quiz.to} className="group block h-full">
                <div className={`h-full bg-gradient-to-br ${quiz.gradient} rounded-3xl p-6 flex flex-col shadow-lg shadow-black/5`}>
                  <span className="text-4xl mb-3 block">{quiz.emoji}</span>
                  <h3 className={`font-display font-bold text-lg ${quiz.fg} mb-2 leading-snug`}>{quiz.title}</h3>
                  <p className={`text-xs ${quiz.fgMuted} font-body mb-4 leading-relaxed flex-1`}>{quiz.description}</p>
                  <span className={`inline-flex items-center gap-1.5 text-sm font-display font-bold ${quiz.fg}`}>
                    Play now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

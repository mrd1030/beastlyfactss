// Registry for dated themed quizzes, one file per quiz, newest first.
// A new quiz is: add its file, import it here, done. The biweekly quiz
// routine appends here; format and style rules live in docs/QUIZZES.md.
// Kept free of app imports so node scripts (generate-sitemap.js,
// prerender.mjs) can import this registry directly for routes.
import beardedDragonBoss from './bearded-dragon-boss.js';
import aquariumSecrets from './aquarium-secrets.js';
import isThatEvenLegal from './is-that-even-legal.js';

export const themedQuizzes = [isThatEvenLegal, aquariumSecrets, beardedDragonBoss]
  .sort((a, b) => b.date.localeCompare(a.date) || b.number - a.number);

// The three tab ids on /quiz/:tab that are NOT themed quizzes. A themed quiz
// id may never collide with these.
export const EVERGREEN_TAB_IDS = ['personality', 'trivia', 'knowledge'];

export function getThemedQuiz(id) {
  return themedQuizzes.find(q => q.id === id) || null;
}

// Released = date has arrived, same YYYY-MM-DD string compare the rest of the
// site uses. Callers pass siteToday(); a null/undefined today returns all,
// which keeps prerendered HTML deterministic (the repo normally holds no
// future-dated quizzes anyway, they ship when their file lands).
export function releasedQuizzes(today) {
  if (!today) return themedQuizzes;
  return themedQuizzes.filter(q => q.date <= today);
}

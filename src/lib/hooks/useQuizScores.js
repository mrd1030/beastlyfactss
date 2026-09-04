// Best-score memory for the dated themed quizzes, keyed by quiz id. Separate
// from the Pack's saved result cards: this is the quiet completion state the
// hub grid reads (played or not, best score), while the Pack card is the
// collectible the player chooses to save. Retakes keep the best score.
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';

export function useQuizScores() {
  const [scores, setScores] = useLocalStorage('beastly-themed-quiz-scores', {});

  const recordScore = (quizId, score, total) => {
    setScores(prev => {
      const best = prev[quizId];
      if (best && best.score >= score) return prev;
      return { ...prev, [quizId]: { score, total, when: new Date().toISOString() } };
    });
  };

  return { scores, recordScore };
}

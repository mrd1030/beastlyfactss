import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import type { PostQuizQuestion } from '@/content-client/types';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { QUIZ_PASS_RATIO, resolveQuizQuestions } from '@/lib/quiz-placeholder';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

/**
 * Short multiple-choice quiz reachable from an entry's detail view.
 * Prefers the entry's real, authored `quiz` — whether that's a bundled
 * catalog species' own `quiz[]` (all 78 species have one) or a
 * supplementary Sanity post's `post.quiz` field — when it's non-empty,
 * falling back to the generic category-keyed placeholder bank (see
 * src/lib/quiz-placeholder.ts) otherwise. The fallback is expected to fire
 * only for Sanity posts without an authored quiz. Passing (>=
 * QUIZ_PASS_RATIO correct) calls `onPass` once; the caller is responsible
 * for actually unlocking the entry (via `unlockByQuiz`) and any
 * navigation/UI reaction.
 */
export function EntryQuiz({
  categoryTitle,
  quiz,
  onPass,
}: {
  categoryTitle?: string | null;
  quiz?: PostQuizQuestion[] | null;
  onPass: () => void;
}) {
  const theme = useTheme();
  const questions = useMemo(() => resolveQuizQuestions(quiz, categoryTitle), [quiz, categoryTitle]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [passed, setPassed] = useState(false);

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  const handleSubmit = () => {
    const correctCount = questions.filter((q) => answers[q.id] === q.correctIndex).length;
    const didPass = questions.length > 0 && correctCount / questions.length >= QUIZ_PASS_RATIO;
    setSubmitted(true);
    setPassed(didPass);
    if (didPass) onPass();
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setPassed(false);
  };

  return (
    <ThemedView type="backgroundElement" style={styles.container}>
      <ThemedText type="smallBold">Quick quiz</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        Answer {Math.ceil(questions.length * QUIZ_PASS_RATIO)} of {questions.length} correctly to add this to your
        Pack.
      </ThemedText>

      {questions.map((q, index) => (
        <View key={q.id} style={styles.questionBlock}>
          <ThemedText type="small" style={styles.questionText}>
            {index + 1}. {q.question}
          </ThemedText>
          {q.options.map((option, optionIndex) => {
            const selected = answers[q.id] === optionIndex;
            const revealCorrect = submitted && optionIndex === q.correctIndex;
            const revealWrong = submitted && selected && optionIndex !== q.correctIndex;
            return (
              <Pressable
                key={optionIndex}
                disabled={submitted}
                onPress={() => setAnswers((prev) => ({ ...prev, [q.id]: optionIndex }))}>
                <ThemedView
                  type={selected ? 'backgroundSelected' : 'background'}
                  style={[
                    styles.option,
                    revealCorrect && { borderWidth: 1, borderColor: theme.success },
                    revealWrong && { borderWidth: 1, borderColor: theme.danger },
                  ]}>
                  <ThemedText type="small">{option}</ThemedText>
                </ThemedView>
              </Pressable>
            );
          })}
        </View>
      ))}

      {!submitted && (
        <Pressable disabled={!allAnswered} onPress={handleSubmit}>
          <ThemedView type={allAnswered ? 'backgroundSelected' : 'background'} style={styles.submitButton}>
            <ThemedText type="smallBold">Submit answers</ThemedText>
          </ThemedView>
        </Pressable>
      )}

      {submitted && (
        <ThemedView type={passed ? 'backgroundSelected' : 'background'} style={styles.resultBox}>
          <ThemedText type="smallBold">
            {passed ? '🎉 Nice — added to your Pack!' : 'Not quite — give it another try.'}
          </ThemedText>
          {!passed && (
            <Pressable onPress={handleRetry}>
              <ThemedText type="linkPrimary">Try again</ThemedText>
            </Pressable>
          )}
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Spacing.two,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  questionBlock: {
    gap: Spacing.one,
  },
  questionText: {
    marginBottom: 2,
  },
  option: {
    borderRadius: Spacing.one,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.two,
    marginBottom: 4,
  },
  submitButton: {
    borderRadius: Spacing.two,
    paddingVertical: Spacing.two,
    alignItems: 'center',
  },
  resultBox: {
    borderRadius: Spacing.two,
    padding: Spacing.two,
    gap: Spacing.one,
    alignItems: 'flex-start',
  },
});

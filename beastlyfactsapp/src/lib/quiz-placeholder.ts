import type { PostQuizQuestion } from '@/content-client/types';

/**
 * PROVISIONAL placeholder quiz content. This is a small, generic,
 * CATEGORY-level question bank (not real per-species trivia) keyed by a
 * loose match against the entry's `categoryTitle`, falling back to a fully
 * generic pool for categories that don't match anything below.
 *
 * Real per-species quizzes now exist — primarily via the bundled local
 * species catalog (src/content-client/species-catalog.ts, 78 real
 * species), and secondarily via Sanity's optional `post.quiz[]` field for
 * supplementary blog posts — see `resolveQuizQuestions` below, which
 * prefers whichever real `quiz` the caller passes in when it's non-empty
 * and only falls back to this placeholder bank otherwise. In practice this
 * bank is now SUPERSEDED for every catalog species (all 78 have a real
 * quiz); it still matters as a fallback for supplementary Sanity posts
 * without an authored quiz.
 */

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
}

const REPTILE_QUESTIONS: QuizQuestion[] = [
  {
    id: 'reptile-thermoregulation',
    question: 'Most reptiles regulate their body temperature by...',
    options: [
      'Generating their own body heat internally',
      'Moving between warmer and cooler spots (basking)',
      'Sweating to cool down',
      'Shivering constantly',
    ],
    correctIndex: 1,
  },
  {
    id: 'reptile-skin',
    question: 'What do many reptiles do periodically as they grow?',
    options: ['Molt/shed their skin', 'Grow fur', 'Grow feathers', 'Hibernate underwater permanently'],
    correctIndex: 0,
  },
  {
    id: 'reptile-eggs',
    question: 'Most reptile species reproduce by...',
    options: ['Live birth only, always', 'Laying eggs', 'Budding', 'Spores'],
    correctIndex: 1,
  },
];

const AMPHIBIAN_QUESTIONS: QuizQuestion[] = [
  {
    id: 'amphibian-skin',
    question: 'Amphibian skin is typically...',
    options: [
      'Covered in scales',
      'Permeable and needs to stay moist',
      'Fully waterproof like a reptile',
      'Covered in fur',
    ],
    correctIndex: 1,
  },
  {
    id: 'amphibian-lifecycle',
    question: 'Many amphibians begin life as...',
    options: ['A live-born juvenile', 'An egg laid on land only', 'An aquatic larva (e.g. a tadpole)', 'A pupa'],
    correctIndex: 2,
  },
];

const MAMMAL_QUESTIONS: QuizQuestion[] = [
  {
    id: 'mammal-warmblooded',
    question: 'Mammals are best described as...',
    options: ['Ectothermic (cold-blooded)', 'Endothermic (warm-blooded)', 'Unable to regulate temperature', 'Cold to the touch always'],
    correctIndex: 1,
  },
  {
    id: 'mammal-young',
    question: 'Almost all mammal species feed their young with...',
    options: ['Regurgitated food only', 'Milk', 'Nothing — young are independent at birth', 'Pollen'],
    correctIndex: 1,
  },
];

const BIRD_QUESTIONS: QuizQuestion[] = [
  {
    id: 'bird-feathers',
    question: 'What feature is unique to birds among living animals?',
    options: ['Feathers', 'Scales', 'Gills', 'Fur'],
    correctIndex: 0,
  },
  {
    id: 'bird-bones',
    question: "Birds' bones are generally...",
    options: ['Solid and heavy', 'Hollow and lightweight', 'Made of cartilage only', 'Fused into one piece'],
    correctIndex: 1,
  },
];

const FISH_QUESTIONS: QuizQuestion[] = [
  {
    id: 'fish-breathing',
    question: 'Most fish breathe using...',
    options: ['Lungs', 'Gills', 'Their skin only', 'Spiracles'],
    correctIndex: 1,
  },
];

/** Fully generic fallback pool for any category that doesn't match a
 * bucket above (or has no category at all). */
const GENERIC_QUESTIONS: QuizQuestion[] = [
  {
    id: 'generic-habitat',
    question: 'A good husbandry setup should generally aim to mimic...',
    options: ["The animal's natural habitat", 'A generic empty box', "Whatever's cheapest at any pet store", 'A human bedroom exactly'],
    correctIndex: 0,
  },
  {
    id: 'generic-observation',
    question: 'Why is regular, careful observation of a pet important?',
    options: [
      "It isn't — pets don't show signs of illness",
      'To catch early signs of stress, illness, or a husbandry problem',
      'Only to take photos',
      'It has no practical benefit',
    ],
    correctIndex: 1,
  },
  {
    id: 'generic-diet',
    question: 'A varied, species-appropriate diet is important because...',
    options: [
      'Animals thrive on any food regardless of species',
      'It helps ensure balanced nutrition for that species',
      'Diet has no effect on health',
      'Variety is only about flavor',
    ],
    correctIndex: 1,
  },
];

const CATEGORY_BUCKETS: { match: RegExp; questions: QuizQuestion[] }[] = [
  { match: /reptile|lizard|snake|turtle|tortoise|gecko/i, questions: REPTILE_QUESTIONS },
  { match: /amphibian|frog|salamander|newt/i, questions: AMPHIBIAN_QUESTIONS },
  { match: /mammal|rodent|dog|cat|rabbit/i, questions: MAMMAL_QUESTIONS },
  { match: /bird|avian|parrot/i, questions: BIRD_QUESTIONS },
  { match: /fish|aquatic/i, questions: FISH_QUESTIONS },
];

const QUESTIONS_PER_QUIZ = 3;

/**
 * Returns a short quiz (up to QUESTIONS_PER_QUIZ questions) for the given
 * category title, falling back to the generic pool. Deterministic (no
 * shuffling) — good enough for a placeholder mechanic.
 */
export function getQuizQuestions(categoryTitle?: string | null): QuizQuestion[] {
  const bucket = categoryTitle ? CATEGORY_BUCKETS.find((b) => b.match.test(categoryTitle)) : undefined;
  const pool = bucket?.questions?.length ? bucket.questions : GENERIC_QUESTIONS;
  return pool.slice(0, QUESTIONS_PER_QUIZ);
}

/** Minimum fraction of correct answers required to pass and unlock. */
export const QUIZ_PASS_RATIO = 0.6;

/**
 * Resolves the quiz questions to actually show for an entry: prefers the
 * post's real, authored `quiz[]` (Sanity's `post.quiz` field) when it's
 * non-empty, mapping each `quizQuestion` object into this module's
 * `QuizQuestion` shape (adding a stable-enough synthetic `id` from its
 * index, since the Sanity objects only carry a `_key`, not the `id` this
 * module's placeholder bank uses). Falls back to `getQuizQuestions`
 * (the category-based placeholder bank) when `quiz` is absent/empty,
 * which is expected for most/all posts until quizzes are authored in
 * Sanity Studio.
 */
export function resolveQuizQuestions(
  quiz: PostQuizQuestion[] | null | undefined,
  categoryTitle?: string | null
): QuizQuestion[] {
  if (quiz && quiz.length > 0) {
    return quiz.map((q, index) => ({
      id: `post-quiz-${index}`,
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
    }));
  }
  return getQuizQuestions(categoryTitle);
}

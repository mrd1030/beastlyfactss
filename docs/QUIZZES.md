# Themed quiz program

A new themed quiz every other Monday, drawn from published site content. The
biweekly Routine writes them; this file is its style guide and format spec.

## How the pieces fit

- One file per quiz in `src/lib/data/quizzes/`, imported and listed in
  `src/lib/data/quizzes/index.js` (newest first).
- `/quiz/` is the hub (src/pages/QuizHub.jsx). `/quiz/<id>/` plays a themed
  quiz (ThemedQuizPage via Quiz.jsx). The three evergreen tabs stay at
  `/quiz/personality|trivia|knowledge/`.
- generate-sitemap.js and prerender.mjs import the registry, so a new quiz
  gets a prerendered page and a sitemap entry with no extra wiring.
- Completion state is per-visitor localStorage (`useQuizScores`); saving the
  reward card calls `saveQuizResult({ type: 'themed-quiz', ... })` and shows
  up on the Pack page shelf.

## Format

```js
export default {
  id: 'kebab-case-id',       // permanent, never reuse, never collide with
                             // personality/trivia/knowledge
  number: 3,                 // sequential, never renumber
  date: 'YYYY-MM-DD',        // the Monday it ships; never future-date a
                             // committed quiz, the file lands on its day
  title: 'Two To Four Words',
  emoji: '🦎',
  tagline: 'One hooky sentence, no URL.',
  reward: { emoji: '🏆', title: 'Two Words', blurb: 'One playful sentence.' },
  questions: [ /* exactly 8 */
    {
      q: 'The question?',
      options: ['A', 'B', 'C', 'D'],  // exactly 4, one clearly correct
      answer: 0,                       // index into options
      explain: 'One to three sentences that teach, not just confirm.',
      source: { label: 'Page title', to: '/blog/slug/' },  // required
    },
  ],
};
```

## The feel (why these work and generic trivia doesn't)

- **Every question comes from a published Beastly Facts page** (a guide,
  article, or fact) and links to it. Verify each claim against the actual
  page before writing the question; never write from memory. The source link
  is required, and only released pages qualify (date already passed).
- Source link behavior is automatic, no wiring needed: a `/facts/<slug>/`
  source opens that fact as a popup in place on the quiz page (players are
  never stranded on the Facts page), blog sources display with an "(article)"
  suffix, and any article cited as a source gets a "Quiz Yourself" backlink
  in its sidebar.
- **Theme tightly.** Eight questions about one world (one species, one
  habitat, one myth cluster) beat eight random facts. Mine recent releases:
  a species that just got its guide set, the week's facts, a comparison pair.
- **Distractors must be plausible**, the kind of thing someone half-informed
  actually believes ("a 40 gallon breeder", "they grow to their tank").
  One joke option per quiz maximum.
- **The explanation teaches.** State the fact, add the why or the surprising
  edge, point at the source. A player who scores 3/8 should leave smarter.
- **Difficulty curve**: open with two gimmes, put the hardest at 6 or 7,
  close with one most players get right.
- House style applies: no em or en dashes anywhere, US spelling, no URLs in
  question or explanation text (the source field carries the link).
- Results are tiered by score (logic lives in ThemedQuizPage, not the quiz
  file): a perfect score earns the quiz's reward card, 75%+ earns a silver
  "So Close" badge, and anything below gets a "Nice Try" nudge to study and
  retake. Write the reward title and blurb for the perfect tier, it is the
  card players are chasing. Title is two punchy words; the blurb is one
  line of personality.

## Publishing checklist (the Routine follows this)

1. Only run if the newest quiz's `date` is 13+ days old; otherwise stop.
2. Pick a theme from content released since the last quiz (or an untouched
   evergreen cluster). Read the source pages. Write the quiz file.
3. Import and list it in `index.js`, newest first.
4. Verify: every `source.to` resolves to a real released page, `answer`
   indexes are right, exactly 8 questions, id and number are new.
5. Run `npx eslint src/lib/data/quizzes/ --quiet` and fix anything it flags.
6. Commit ONLY the new quiz file and `index.js`, message like
   "Quiz #3: <title>". Push to main (a real deploy, no [CI Skip]).

## When a run does not produce a quiz

The Routine was created from inside a Claude session, so its session config
carries no `sources` and no `allowed_tools`. It runs in permission mode `auto`
with nothing pre-approved, which means the first git command that looks like it
changes state stops for a human who is not there. The 2026-09-14 run died that
way, blocked on `git config credential.helper`, and the run status reads
ABANDONED rather than failed. Nothing was written and nothing raised a hand:
quiz #3 was three days late and only got noticed by hand.

The prompt now tells the Routine that the repo is already checked out, to stay
away from `git clone` and `git config`, and to name the blocked command in its
output instead of ending silently. `.claude/settings.json` also needs a
`permissions.allow` list covering the git and npx commands the Routine runs so
nothing reaches the prompt stage. The durable fix is to recreate the Routine
with a session config like the chronicles and weekly-facts ones, which pass
`allowed_tools` and attach the repo as a source, and which have never stalled.

Quiz #3 is dated 2026-09-14, the Monday it was due, rather than the day it was
written. That keeps the every-other-Monday cadence: the next one falls due
2026-09-28.

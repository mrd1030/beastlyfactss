// Themed quiz #1. Format documented in docs/QUIZZES.md. Every question is
// grounded in a published page and links to it; never invent a claim the
// source does not carry. Ids are permanent, never reuse or renumber.
export default {
  id: 'bearded-dragon-boss',
  number: 1,
  date: '2026-08-31',
  title: 'The Bearded Dragon Boss',
  emoji: '🦎',
  tagline: 'Eight questions between you and beardie mastery.',
  reward: {
    emoji: '🐉',
    title: 'Dragon Boss',
    blurb: 'Certified in waves, salads, and basking spot management.',
  },
  questions: [
    {
      q: 'What is the minimum enclosure size for one adult bearded dragon?',
      options: ['A 20 gallon tank', 'A 40 gallon breeder', '4x2x2 ft (about 120 gallons)', 'Any tank, they adapt to their space'],
      answer: 2,
      explain: 'The adult minimum is 4x2x2 ft, roughly 120 gallons, and it is a floor, not an upgrade to get around to eventually.',
      source: { label: 'Bearded Dragon care guide', to: '/guides/bearded-dragon/' },
    },
    {
      q: 'Why does a bearded dragon setup need two separate fixtures?',
      options: ['One is a backup if the other burns out', 'UVB tubes give light but almost no usable heat', 'One for daytime, one for nighttime', 'Two fixtures double the vitamin D'],
      answer: 1,
      explain: 'A T5 HO UVB tube handles the UV but produces little heat, so a separate basking bulb over the same platform does the warming. Relying on one fixture for both jobs is the most common setup mistake.',
      source: { label: 'Bearded Dragon tank setup guide', to: '/blog/bearded-dragon-tank-setup-guide/' },
    },
    {
      q: 'Who eats a diet that is mostly salad?',
      options: ['Baby bearded dragons', 'Adult bearded dragons', 'Both, beardies are herbivores', 'Neither, beardies are insectivores'],
      answer: 1,
      explain: 'The ratio flips with age: juveniles eat mostly insects, while adults run about 80 percent greens and vegetables with insects a few times a week.',
      source: { label: 'Bearded Dragon feeding guide', to: '/blog/bearded-dragon-feeding-guide/' },
    },
    {
      q: 'A bearded dragon slowly waves one front leg at another dragon. What is it saying?',
      options: ['Come fight me', 'Feed me', 'No threat here, you are the boss', 'It is shaking off shed skin'],
      answer: 2,
      explain: 'The wave is a submissive gesture, a polite "no threat here" in dragon language.',
      source: { label: 'Bearded Dragon care guide', to: '/guides/bearded-dragon/' },
    },
    {
      q: 'How many bearded dragons can share one enclosure?',
      options: ['Two, if they grew up together', 'A male and a female pair', 'One, they are solitary', 'Any number with enough space'],
      answer: 2,
      explain: 'One. Bearded dragons are solitary and will stress, fight, or resource-guard even in large enclosures.',
      source: { label: 'Bearded Dragon tank setup guide', to: '/blog/bearded-dragon-tank-setup-guide/' },
    },
    {
      q: 'Your dragon has not passed waste in five days. What is the right move?',
      options: ['Wait another week, it happens', 'Feed more insects to get things moving', 'A vet visit, now', 'A cold bath to stimulate digestion'],
      answer: 2,
      explain: 'Five or more days without a bowel movement is the vet threshold for impaction. Waiting to "see if it resolves" is how mild cases become surgical ones.',
      source: { label: 'Bearded Dragon health issues guide', to: '/blog/bearded-dragon-health-issues-guide/' },
    },
    {
      q: 'What is the verdict on heated "hot rocks"?',
      options: ['Great for nighttime warmth', 'Fine for adults, risky for juveniles', 'Skip them entirely, they cause thermal burns', 'Required for proper digestion'],
      answer: 2,
      explain: 'Hot rocks are a common cause of thermal burns and add nothing a proper overhead basking setup does not already do better.',
      source: { label: 'Bearded Dragon tank setup guide', to: '/blog/bearded-dragon-tank-setup-guide/' },
    },
    {
      q: 'Your dragon is slow, hiding more, and eating less in late fall. The energy level is low the whole time. What is most likely going on?',
      options: ['Brumation, a natural winter slowdown', 'Glass surfing', 'A growth spurt', 'Too much UVB'],
      answer: 0,
      explain: 'Slow and low-energy points to brumation, the natural winter dormancy. Glass surfing is the opposite: repetitive and high-energy. A vet check first is still the rule, to make sure it is not illness.',
      source: { label: 'Bearded Dragon health issues guide', to: '/blog/bearded-dragon-health-issues-guide/' },
    },
  ],
};

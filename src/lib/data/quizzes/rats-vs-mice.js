// Themed quiz #5. Format documented in docs/QUIZZES.md. Every question is
// grounded in a published rat or mouse guide and links to it. Ids are
// permanent, never reuse or renumber.
export default {
  id: 'rats-vs-mice',
  number: 5,
  date: '2026-10-12',
  title: 'Rats Versus Mice',
  emoji: '🐀',
  tagline: 'Same rodent family, wildly different pets. Can you tell them apart?',
  reward: {
    emoji: '🐁',
    title: 'Whisker Wizard',
    blurb: 'You know which one jumps, which one smells, and which one needs the bigger wheel.',
  },
  questions: [
    {
      q: 'A friend wants to adopt a single pet rat so it is easier to look after. What is the standard advice?',
      options: ['One rat is fine if you handle it daily', 'Keep a bonded same-sex pair or small group, never a lone rat', 'Keep one male and one female together', 'Rats only get along as adults, so wait a year'],
      answer: 1,
      explain: 'Rats are highly social and should not live alone. A pair or trio of same-sex rats is the standard, which is why the realistic starting price is for two animals, not one.',
      source: { label: 'Rat Cost Guide', to: '/blog/rat-cost-guide/' },
    },
    {
      q: 'What is the right way to pick up a pet rat?',
      options: ['By the base of the tail, supporting the body with the other hand', 'By the scruff, like a kitten', 'Scoop from underneath with both hands, then hold it close to your body', 'Let it grab your sleeve and lift it that way'],
      answer: 2,
      explain: 'One hand goes under the chest and the other supports the hindquarters. Lifting a rat by the tail is stressful and can injure it, so everyone who handles the rat should know that rule.',
      source: { label: 'Rat Handling Guide', to: '/blog/rat-handling-guide/' },
    },
    {
      q: 'Rats are usually housed in wire cages, not glass tanks. What is the main reason?',
      options: ['Rats chew through glass corners', 'Glass tanks get too cold for rats', 'A tank traps urine ammonia, which drives respiratory disease', 'Wire lets rats climb, and glass does not'],
      answer: 2,
      explain: 'Ammonia from urine builds up fastest where airflow is poor, and it irritates the airways. A glass tank holds it in far more than an open wire cage, and rats are especially prone to chronic respiratory disease.',
      source: { label: 'Rat Tank Setup Guide', to: '/blog/rat-tank-setup-guide/' },
    },
    {
      q: 'Rats and mice both love a wheel, but the sizes are very different. What is the minimum wheel size for a rat?',
      options: ['6 inches', '8 inches', '10 inches', '12 inches'],
      answer: 3,
      explain: 'Rats need at least 12 inches, and many keepers recommend 14 to 16 inches for adults. A smaller wheel forces a hunched, arched running posture that is hard on the spine. A mouse, by contrast, does best on a wheel closer to 6 to 8 inches.',
      source: { label: 'Rat Tank Setup Guide', to: '/blog/rat-tank-setup-guide/' },
    },
    {
      q: 'Many cages sold for small animals look escape-proof. What bar spacing does a mouse cage need?',
      options: ['No more than about a quarter inch', 'About half an inch', 'About three-quarters of an inch', 'Spacing does not matter if the lid is secure'],
      answer: 0,
      explain: 'Mice need bar spacing of about a quarter inch (6mm) or less. Even cages with spacing near three-eighths of an inch sound tight but are still wide enough for a mouse to squeeze through.',
      source: { label: 'Mouse Tank Setup Guide', to: '/blog/mouse-tank-setup-guide/' },
    },
    {
      q: 'An all-male mouse cage smells much stronger than a rat cage. Researchers traced the odor to which compound, found in adult male house mouse urine?',
      options: ['Trimethylamine', 'Ammonium chloride', 'Cedar oil', 'Methane'],
      answer: 0,
      explain: 'Trimethylamine is enriched in the urine of adult male mice and nearly absent from rat urine. It attracts other mice, repels rats, and is detected through a receptor called TAAR5 that helps drive fighting between males.',
      source: { label: 'Mouse Health Issues Guide', to: '/blog/mouse-health-issues-guide/' },
    },
    {
      q: 'A survey of pet ratteries in the northwestern US tested for the bacterium behind chronic respiratory disease. How many were positive?',
      options: ['About 1 in 4', 'About half', 'About three quarters', '95%'],
      answer: 3,
      explain: 'Mycoplasma pulmonis turned up in 95% of those pet ratteries, so most pet rats carry some degree of it. Clean, well-ventilated housing changes how severe it gets, but there is no cure, and rats with the chronic form rarely live past 2 years.',
      source: { label: 'Rat Health Issues Guide', to: '/blog/rat-health-issues-guide/' },
    },
    {
      q: 'How high can a mouse jump straight up from a standing start?',
      options: ['About 2 inches', 'About 5 inches', 'About 13 inches', 'About 3 feet'],
      answer: 2,
      explain: 'A mouse can clear roughly 13 inches from a standstill, which is taller than a standard 5-gallon bucket. That is why mouse handling happens low, enclosed, or over a soft surface.',
      source: { label: 'Mouse Handling Guide', to: '/blog/mouse-handling-guide/' },
    },
  ],
};

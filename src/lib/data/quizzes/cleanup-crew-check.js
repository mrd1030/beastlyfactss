// Themed quiz #4. Format documented in docs/QUIZZES.md. Every question is
// grounded in a published shrimp guide and links to it. Ids are permanent,
// never reuse or renumber.
export default {
  id: 'cleanup-crew-check',
  number: 4,
  date: '2026-09-28',
  title: 'Cleanup Crew Check',
  emoji: '🦐',
  tagline: 'Tiny, transparent, and running a more complicated life than you think.',
  reward: {
    emoji: '🦐',
    title: 'Molt Master',
    blurb: 'You know why the empty shell stays in the tank.',
  },
  questions: [
    {
      q: 'Cherry shrimp, amano shrimp, and ghost shrimp all get bought as the same kind of tank cleanup crew. Which one actually breeds itself into a bigger colony without any extra effort?',
      options: ['Amano shrimp', 'Ghost shrimp', 'Cherry shrimp', 'All three breed just as easily at home'],
      answer: 2,
      explain: 'Cherry shrimp breed readily in plain freshwater, and a small starting group multiplies into a colony on its own. Amano shrimp cannot do this at home because their larvae need brackish or marine water, so an amano colony never grows the way a cherry shrimp colony does.',
      source: { label: 'Cherry Shrimp Cost Guide', to: '/blog/cherry-shrimp-cost-guide/' },
    },
    {
      q: 'A cherry shrimp molts, and you find its old shell lying empty and hollow on the substrate. What should you do?',
      options: ['Remove it before it rots and fouls the water', 'Leave it, the shrimp eats it for calcium', 'Test for ammonia immediately', 'Look for the shrimp, an empty shell usually means it died'],
      answer: 1,
      explain: 'Shrimp eat their own shed shell as a rich source of calcium, and it is usually gone within a day or two. A hollow shell with no shrimp inside is a sign of a successful molt, not a dead shrimp.',
      source: { label: 'Shrimp Molting Guide', to: '/blog/shrimp-molting-guide/' },
    },
    {
      q: "Almost every amano shrimp sold in a pet store was caught wild rather than bred in someone's tank. Why?",
      options: ['They only breed in complete darkness', 'Their larvae need brackish to marine water to develop', 'Captive amano shrimp refuse to eat anything but wild algae', 'They are illegal to breed commercially in Japan'],
      answer: 1,
      explain: 'Amano shrimp cannot complete their life cycle in freshwater. Their larvae need brackish to marine water to develop, so a home colony essentially never happens by accident, and nearly the entire supply comes from wild collection in Japan and Taiwan instead.',
      source: { label: 'Amano Shrimp Cost Guide', to: '/blog/amano-shrimp-cost-guide/' },
    },
    {
      q: 'The amano shrimp is named after a real person. What did he actually do?',
      options: ['Discovered the species on a research expedition', 'Ran the first amano shrimp breeding farm', 'A Japanese aquascaper who started using the shrimp against algae in his own planted tanks in the early 1980s', 'Wrote the first identification guide to freshwater shrimp'],
      answer: 2,
      explain: 'Takashi Amano was already advocating the use of what was then called Caridina japonica against algae in his own tanks as early as 1983, a year after he founded the aquascaping company ADA. Decades of that advocacy turned a regional Japanese river shrimp into one of the most requested animals in the aquarium trade.',
      source: { label: 'Amano Shrimp Cost Guide', to: '/blog/amano-shrimp-cost-guide/' },
    },
    {
      q: 'Amano shrimp tanks are supposed to use a gentle sponge filter. What is that actually protecting against?',
      options: ['Calm water, since amano shrimp cannot tolerate any current', 'A shrimp, especially a recently molted one, being pulled into or injured by the intake', 'Overheating from a standard filter motor', 'Algae getting sucked out of the tank before the shrimp can eat it'],
      answer: 1,
      explain: 'Amano shrimp come from fast-flowing streams and tolerate, even like, real current. The sponge matters purely for intake safety, blocking a filter from pulling in or injuring a shrimp, especially one that has just molted and is a weak swimmer for a short while.',
      source: { label: 'Amano Shrimp Tank Setup Guide', to: '/blog/amano-shrimp-tank-setup-guide/' },
    },
    {
      q: 'Cherry shrimp are cheap, hardy, and breed like crazy, which is exactly why a federal wildlife agency warns against dumping extras in a local pond or creek. What did its 2025 risk assessment conclude?',
      options: ['That cherry shrimp carry a disease that threatens native crayfish', 'That cherry shrimp are a High risk of establishing invasive populations across large parts of the US', 'That cherry shrimp are already federally protected and cannot be relocated', 'That cherry shrimp only survive in tropical climates and pose no real risk'],
      answer: 1,
      explain: 'The US Fish and Wildlife Service 2025 ecological risk screening rates Neocaridina davidi, the cherry shrimp, a High overall invasion risk for the contiguous US, with a strong climate match in the Great Lakes region, peninsular Florida, the southern Great Plains, and parts of the Rockies. A thriving colony is the whole point of keeping them, the fix is rehoming extras locally, never releasing them.',
      source: { label: 'Cherry Shrimp Cost Guide', to: '/blog/cherry-shrimp-cost-guide/' },
    },
    {
      q: 'According to the ghost shrimp health guide, what is the single leading cause of a newly bought ghost shrimp dying within days of coming home?',
      options: ['An inherent fragility in the species itself', 'Stress and disease exposure from the crowded feeder tank it likely came from', 'Overfeeding in its first week', 'A lack of live plants in the new tank'],
      answer: 1,
      explain: 'A large share of ghost shrimp move through the trade as feeder stock, and feeder tanks are run for volume and turnover with no disease screening or quarantine before sale. Watching for lethargy and quarantining new arrivals for 2 to 4 weeks catches most of what actually goes wrong, since it traces back to sourcing, not to the species being fragile.',
      source: { label: 'Ghost Shrimp Health Issues Guide', to: '/blog/ghost-shrimp-health-issues-guide/' },
    },
    {
      q: "The 'white ring of death' is a molt that goes fatally wrong. What usually triggers it?",
      options: ['A sudden jump in water hardness, often from one big water change', 'Feeding the shrimp too much protein', 'Keeping the tank too warm', 'Handling the shrimp with bare hands during a molt'],
      answer: 0,
      explain: 'The shell splits all the way around the body instead of just along the top, leaving the shrimp unable to back out of two disconnected halves. It follows most often from a sudden, large water change that swings general hardness, which is why shrimp keepers change water in small, steady amounts rather than by the calendar.',
      source: { label: 'Shrimp Molting Guide', to: '/blog/shrimp-molting-guide/' },
    },
  ],
};

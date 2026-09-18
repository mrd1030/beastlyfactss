// Themed quiz #3. Format documented in docs/QUIZZES.md. Every question is
// grounded in a published legal guide and links to it. Ids are permanent,
// never reuse or renumber.
export default {
  id: 'is-that-even-legal',
  number: 3,
  date: '2026-09-14',
  title: 'Is That Even Legal?',
  emoji: '📜',
  tagline: 'The fine print that decides what you are allowed to keep.',
  reward: {
    emoji: '⚖️',
    title: 'Permit Holder',
    blurb: 'You read the fine print the rest of us scrolled past.',
  },
  questions: [
    {
      q: 'Maryland bans possession of a “fox, skunk, raccoon, or bear.” Why does that catch a three pound fennec?',
      options: ['It is classed as a dangerous carnivore', 'The word fox carries no qualifier, so every fox is covered', 'Maryland lists it by its scientific name elsewhere', 'The ban applies only to wild-caught animals'],
      answer: 1,
      explain: 'Four common nouns, no genus and no exception. Those three mammals are the principal terrestrial rabies reservoirs in the eastern US, and the rule was written to stop people keeping wild-caught local animals. The fennec is caught because it shares a common name with the animal the rule was aimed at.',
      source: { label: 'Fennec fox legal guide', to: '/blog/fennec-fox-legal-guide/' },
    },
    {
      q: 'What does a CITES listing actually control?',
      options: ['Who is allowed to own the animal', 'International trade across a border', 'How the animal has to be housed', 'Which states are allowed to permit it'],
      answer: 1,
      explain: 'The regulations define trade as international trade: import, export, re-export, introduction from the sea. It is a border rule, not an ownership rule. That is why a bird on the strictest tier of international protection can be an ordinary pet in an American living room.',
      source: { label: 'Federal exotic pet laws', to: '/blog/federal-exotic-pet-laws-guide/' },
    },
    {
      q: 'Six federal laws reach private exotic pet keeping. How many of them ban a citizen from possessing an animal at all?',
      options: ['None of them', 'One, the Big Cat Public Safety Act', 'Three of them', 'All six'],
      answer: 1,
      explain: 'The 2022 Act put breeding and possession of lions, tigers, leopards, jaguars, cheetahs, cougars and their hybrids into federal law. Owners who already held one could keep it only by registering, and that window shut in June 2023. Every other federal rule here works on movement and sale, not on the animal in your house.',
      source: { label: 'Federal exotic pet laws', to: '/blog/federal-exotic-pet-laws-guide/' },
    },
    {
      q: 'The four inch turtle rule is the most misdescribed rule in the hobby. Who does it actually reach?',
      options: ['The owner, who may not keep one', 'The seller, who may not sell or distribute one', 'The vet, who may not treat one', 'Nobody, it was repealed decades ago'],
      answer: 1,
      explain: 'It is an FDA rule from 1975, not a CDC rule, and it bars selling, holding for sale or distributing turtles under four inches. Nothing in it makes owning a small turtle unlawful, and nothing in it stops a hatchling growing past four inches.',
      source: { label: 'Federal exotic pet laws', to: '/blog/federal-exotic-pet-laws-guide/' },
    },
    {
      q: 'The degu is the most restricted small rodent in the US pet trade. What is usually behind that?',
      options: ['It is treated as an agricultural pest', 'It carries a reportable disease', 'The cleared rodent lists were written before it reached the trade', 'It is protected in its native Chile'],
      answer: 2,
      explain: 'State after state clears the same six names: chinchilla, guinea pig, gerbil, hamster, mouse and rat. The degu is missing from all of them. California restricts the whole order and excepts five rodents, and the chinchilla, another South American caviomorph, is one of them while the degu is not.',
      source: { label: 'Degu legal guide', to: '/blog/degu-legal-guide/' },
    },
    {
      q: 'Massachusetts exempts all geckos from its permit rule, and a crested gecko still needs a permit there. What triggers it?',
      options: ['Its adult size', 'Its IUCN conservation rating', 'That it was not bred in the state', 'That its family is unlisted'],
      answer: 1,
      explain: 'The gecko clearance is subject to a subsection that pulls back any species carrying a rare conservation assessment, and the crested gecko is assessed as vulnerable. A leopard gecko is assessed least concern and walks through the same exemption untouched. Two geckos on the same shop shelf, split by a rating neither shop nor keeper is likely to check.',
      source: { label: 'Crested gecko legal guide', to: '/blog/crested-gecko-legal-guide/' },
    },
    {
      q: 'A vet gives a pet fennec fox a rabies shot. Why will no health department count that fox as vaccinated?',
      options: ['Vaccinating wildlife is against federal law', 'There is no USDA licensed rabies vaccine for any fox species', 'The shot fails in animals under five pounds', 'Only the owner can certify it'],
      answer: 1,
      explain: 'Rabies vaccines are licensed species by species on the strength of challenge trials in that species. Dogs, cats, ferrets, horses, cattle and sheep have them. Foxes do not. A vet can give a dog vaccine off label, and many do, but if the fox bites someone the protocol for an unvaccinated wild carnivore applies, and that protocol ends in euthanasia.',
      source: { label: 'Fennec fox legal guide', to: '/blog/fennec-fox-legal-guide/' },
    },
    {
      q: 'Florida prohibits exactly one monitor lizard out of roughly eighty species. Why the Nile monitor?',
      options: ['It is the largest of them', 'It is already breeding wild in Florida', 'It is the only one with a venomous bite', 'It is the only one legally imported'],
      answer: 1,
      explain: 'Savannah and ackie monitors need no permit at all under the same chapter, so this is not a rule about size or temperament. It is a rule about what is already living in the canals, the same logic that put the green iguana on the prohibited list in 2021.',
      source: { label: 'Nile monitor legal guide', to: '/blog/nile-monitor-legal-guide/' },
    },
  ],
};

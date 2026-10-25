// Themed quiz #6. Format documented in docs/QUIZZES.md. Every question is
// answerable from the Halloween pet safety guide and links to it. Ids are
// permanent, never reuse or renumber. Shipped off the Monday cadence on
// purpose: Halloween 2026 is a Saturday and the guide went out the same day.
export default {
  id: 'halloween-hazard-check',
  number: 6,
  date: '2026-10-25',
  title: 'Halloween Hazard Check',
  emoji: '🎃',
  tagline: 'Candy, candles, costumes and the front door. Do you know what actually sends pets to the vet on October 31st?',
  reward: {
    emoji: '🍬',
    title: 'Candy Guardian',
    blurb: 'Your dog may smell the bowl through the cabinet, but it is never getting in.',
  },
  questions: [
    {
      q: 'A dog gets into a pack of sugar-free gum. Which ingredient is the emergency?',
      options: ['Xylitol', 'Gelatin', 'Peppermint oil', 'Citric acid'],
      answer: 0,
      explain: 'Xylitol triggers a surge of insulin in dogs that a human pancreas never produces, and blood sugar can crash within 10 to 60 minutes. It also hides in breath mints, keto candy, some protein bars and some peanut butters, which is why the jar you use to hide pills is worth a label check.',
      source: { label: 'Halloween Pet Safety Guide', to: '/blog/halloween-pet-safety-guide/' },
    },
    {
      q: 'Ounce for ounce, which of these chocolates carries the most of the stimulants that poison dogs?',
      options: ['White chocolate', 'Milk chocolate', 'Dark chocolate', 'Baking chocolate'],
      answer: 3,
      explain: 'Unsweetened baking chocolate carries about 440 mg of methylxanthines per ounce, against 150 to 160 mg for dark, 64 mg for milk and barely 1 mg for white. Cocoa powder is worse still at 807 mg. The darker and less sweet, the smaller the dangerous amount.',
      source: { label: 'Halloween Pet Safety Guide', to: '/blog/halloween-pet-safety-guide/' },
    },
    {
      q: 'A dog ate chocolate at 7 pm and looks completely normal at 9 pm. What does that tell you?',
      options: ['It was not enough to matter', 'Nothing yet, signs usually start 6 to 12 hours after eating', 'The dog vomited it up unnoticed', 'Milk chocolate never causes signs'],
      answer: 1,
      explain: 'Chocolate signs usually begin 6 to 12 hours after ingestion, and theobromine has a half-life of 17.5 hours in a dog, so a large dose is still working the next day. A normal dog two hours in has not been cleared. That delay is the trap, and the reason the poison lines want the call before signs.',
      source: { label: 'Halloween Pet Safety Guide', to: '/blog/halloween-pet-safety-guide/' },
    },
    {
      q: 'Glow sticks and glow jewelry cause more poison-line calls about one pet than any other. Which, and why?',
      options: ['Dogs, because they swallow the whole stick', 'Cats, because they bite the stick and then groom the liquid off their fur', 'Ferrets, because the liquid is sweet', 'Rabbits, because they chew the plastic'],
      answer: 1,
      explain: 'The liquid inside is bitter and causes mouth pain, heavy drooling and foaming. Cats make up most of the calls because grooming spreads a small bite into a bigger exposure. It is rarely life-threatening, but it looks alarming, and the helpline wants the call so they can talk you through it.',
      source: { label: 'Halloween Pet Safety Guide', to: '/blog/halloween-pet-safety-guide/' },
    },
    {
      q: 'The doorbell rang forty times last night and this morning your rabbit has not touched its hay or left droppings since the evening. What is that?',
      options: ['Normal after a late night, give it until tomorrow', 'A sign it needs fresh greens', 'A possible GI stasis emergency once it passes 8 to 12 hours', 'Sulking, rabbits do this when ignored'],
      answer: 2,
      explain: 'A rabbit reads each doorbell as a predator at the burrow mouth, and a frightened rabbit freezes and stops eating. No food and no droppings for 8 to 12 hours is GI stasis territory, an emergency, and stress is one of the things that starts it. The quiet room farthest from the door, with the hay topped up, is how you prevent it.',
      source: { label: 'Halloween Pet Safety Guide', to: '/blog/halloween-pet-safety-guide/' },
    },
    {
      q: 'For years nobody knew why a few raisins kill one dog and leave another fine. What do ASPCA toxicologists now point to?',
      options: ['Pesticide residue on the skins', 'Tartaric acid, which varies from 0.35% to 2% between grapes', 'The sugar concentration in dried fruit', 'A mold that grows only on raisins'],
      answer: 1,
      explain: 'A dog with acute kidney injury after eating homemade play dough made with cream of tartar, a form of tartaric acid, matched the kidney lesions seen in grape and tamarind cases. Tartaric acid content varies several-fold between grapes depending on variety and ripeness, which is why there is no known safe amount.',
      source: { label: 'Halloween Pet Safety Guide', to: '/blog/halloween-pet-safety-guide/' },
    },
    {
      q: 'Cats seem to shrug off xylitol. Which other pet is specifically flagged for low blood sugar and seizures after eating it?',
      options: ['Guinea pigs', 'Budgies', 'Ferrets', 'Bearded dragons'],
      answer: 2,
      explain: 'Ferrets can develop low blood sugar and seizures after xylitol products, and they already carry a high rate of insulinoma, a tumor that drives blood sugar down on its own. A ferret loose on the floor during a party is the one to watch around dropped gum and mints.',
      source: { label: 'Halloween Pet Safety Guide', to: '/blog/halloween-pet-safety-guide/' },
    },
    {
      q: 'You find the empty candy bag and the dog looks fine. What is the right first move?',
      options: ['Make the dog vomit with salt water', 'Wait for symptoms so you can describe them to the vet', 'Keep the wrapper, estimate the amount, note the time and weight, and call a poison line now', 'Feed a big meal to dilute it'],
      answer: 2,
      explain: 'Call before signs appear. The ASPCA Animal Poison Control Center (888-426-4435) and the Pet Poison Helpline (855-764-7661) both answer 24 hours a day, both charge a consultation fee, and both want the packaging, a rough amount, the time and the animal\'s weight. Never induce vomiting unless the person on the line or your vet tells you to.',
      source: { label: 'Halloween Pet Safety Guide', to: '/blog/halloween-pet-safety-guide/' },
    },
  ],
};

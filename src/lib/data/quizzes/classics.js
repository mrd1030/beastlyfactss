// The three evergreen quizzes at /quiz/personality/, /quiz/trivia/ and
// /quiz/knowledge/. Trivia and knowledge use the themed quiz format (see
// docs/QUIZZES.md) and play through ThemedQuizPage, so they look and behave
// like the dated quizzes: sourced answers, a reward card, Pack saving, the
// share picture. `classic: true` swaps the "Quiz #N · date" kicker for
// "Classic quiz". They are not in themedQuizzes: they have no number or date
// and are pinned separately on the hub.
//
// Every answer is grounded in a page on the site and links to it: the
// encyclopedia profile for trivia, the fact card for knowledge. Kept free of
// app imports so node scripts (generate-quiz-og.mjs) can import it.
//
// The personality quiz has no right answers, so it keeps its own component in
// Quiz.jsx and only its page details live here.

export const personalityQuiz = {
  id: 'personality',
  classic: true,
  title: 'Which Critter Are You?',
  emoji: '🎯',
  tagline: 'Seven questions, one animal that matches your personality.',
  ogLine: 'Find your animal match',
};

export const triviaQuiz = {
  id: 'trivia',
  classic: true,
  title: 'Animal Origins Trivia',
  emoji: '🌍',
  tagline: 'Where the world\'s favorite pets and breeds really come from.',
  reward: {
    emoji: '🌍',
    title: 'Globe Trotter',
    blurb: 'You know where every pet on the list really comes from.',
  },
  questions: [
    {
      q: 'The bearded dragon is found in the wild in only one country. Which one?',
      options: ['South Africa', 'New Zealand', 'Australia', 'India'],
      answer: 2,
      explain: 'Inland bearded dragons live only in Australia\'s arid and semi-arid interior. Australia banned the commercial export of live native animals in 1982, so every pet bearded dragon descends from stock that left the country before that.',
      source: { label: 'Bearded Dragon profile', to: '/encyclopedia/animal/bearded-dragon/' },
    },
    {
      q: 'Where does the ball python come from?',
      options: ['Sub-Saharan Africa', 'Southeast Asia', 'Central America', 'Australia'],
      answer: 0,
      explain: 'Ball pythons are native to the grasslands and open forests of West and Central Africa, from Senegal to Uganda. The name comes from the way they coil into a tight ball with the head tucked inside when threatened.',
      source: { label: 'Ball Python profile', to: '/encyclopedia/animal/ball-python/' },
    },
    {
      q: 'Where do Siberian Huskies originally come from?',
      options: ['Canada', 'Greenland', 'Northeastern Siberia', 'Alaska'],
      answer: 2,
      explain: 'The breed traces back to the Chukchi people of northeastern Siberia, who bred these dogs to pull sleds over long distances in extreme cold.',
      source: { label: 'Siberian Husky profile', to: '/encyclopedia/animal/siberian-husky/' },
    },
    {
      q: 'Where do capybaras live in the wild?',
      options: ['Central Africa', 'Southeast Asia', 'South America', 'Southern Europe'],
      answer: 2,
      explain: 'Capybaras range across most of South America east of the Andes, in wetlands, marshes, flooded grassland and along rivers and lakes. At up to roughly 50 kilograms, they are the largest living rodent.',
      source: { label: 'Capybara Beastfile', to: '/beastlypedia/capybara/' },
    },
    {
      q: 'The Siamese cat comes from which country?',
      options: ['China', 'Japan', 'Thailand (formerly Siam)', 'Vietnam'],
      answer: 2,
      explain: 'The Siamese is one of the oldest recognized cat breeds and comes from Thailand, formerly Siam, where these cats were treasured by royalty.',
      source: { label: 'Siamese profile', to: '/encyclopedia/animal/siamese/' },
    },
    {
      q: 'The corn snake is native to which region?',
      options: ['Central America', 'Eastern United States', 'Northern Africa', 'Southern Europe'],
      answer: 1,
      explain: 'Corn snakes are rat snakes of the eastern and central United States. They are often found around cornfields and farm buildings, where rodents gather, which is where the name comes from.',
      source: { label: 'Corn Snake profile', to: '/encyclopedia/animal/corn-snake/' },
    },
    {
      q: 'The axolotl lives in the wild in just one place. Where?',
      options: ['The Amazon River, Brazil', 'Lake Xochimilco, Mexico', 'The Nile Delta, Egypt', 'The Mekong River, Vietnam'],
      answer: 1,
      explain: 'Wild axolotls survive only in the lake and canal system of Xochimilco in Mexico City. Habitat loss and predation have pushed them close to extinction there, even as they thrive in captivity.',
      source: { label: 'Axolotl profile', to: '/encyclopedia/animal/axolotl/' },
    },
    {
      q: 'The crested gecko was thought to be extinct until it was rediscovered in 1994. Where?',
      options: ['The Galapagos Islands', 'New Caledonia', 'Madagascar', 'Borneo'],
      answer: 1,
      explain: 'Crested geckos are native to the southern islands of New Caledonia in the South Pacific. They were believed extinct until their rediscovery in 1994, and are now one of the most popular pet geckos.',
      source: { label: 'Crested Gecko profile', to: '/encyclopedia/animal/crested-gecko/' },
    },
    {
      q: 'The African pygmy hedgehog, the species kept as a pet, is native to where?',
      options: ['Western Europe', 'Central Africa', 'Southeast Asia', 'Northern Australia'],
      answer: 1,
      explain: 'The pet hedgehog comes from the savanna and grassland of central Africa, from Senegal to Tanzania. It is a different species from the European hedgehog found in gardens across Europe.',
      source: { label: 'Hedgehog profile', to: '/encyclopedia/animal/hedgehog/' },
    },
    {
      q: 'The French Bulldog was developed in France, but its toy bulldog ancestors came from which country?',
      options: ['Germany', 'England', 'Belgium', 'Spain'],
      answer: 1,
      explain: 'The breed was developed in France from English bulldog stock, which is how a dog with a French name ended up with English roots.',
      source: { label: 'French Bulldog profile', to: '/encyclopedia/animal/french-bulldog/' },
    },
    {
      q: 'The leopard gecko is native to which region?',
      options: ['Southern Africa', 'Central America', 'Pakistan, Afghanistan and northwestern India', 'Mediterranean Europe'],
      answer: 2,
      explain: 'Leopard geckos live in the arid regions of Pakistan, Afghanistan, Iran, India and Nepal, sheltering in rocky outcrops and dry grassland by day. Unlike most geckos, they have eyelids and no sticky toe pads.',
      source: { label: 'Leopard Gecko profile', to: '/encyclopedia/animal/leopard-gecko/' },
    },
    {
      q: 'Where does the African grey parrot come from?',
      options: ['South America', 'West and Central Africa', 'Southeast Asia', 'Australia'],
      answer: 1,
      explain: 'African greys are native to the dense equatorial forests of West and Central Africa, from Ghana and Ivory Coast to Cameroon and Congo, where they live in large flocks.',
      source: { label: 'African Grey profile', to: '/encyclopedia/animal/african-grey/' },
    },
    {
      q: 'The Persian cat takes its name from Persia. What is that country called today?',
      options: ['Russia', 'Egypt', 'Iran', 'India'],
      answer: 2,
      explain: 'Persia is modern Iran. The longhaired cats from Persia and neighboring Turkey were carried to Europe, where the breed was popularized.',
      source: { label: 'Persian profile', to: '/encyclopedia/animal/persian/' },
    },
    {
      q: 'The Maine Coon is believed to have developed where?',
      options: ['Maine, USA', 'Norway', 'Canada', 'Scotland'],
      answer: 0,
      explain: 'The Maine Coon is North America\'s only native longhaired breed and one of the oldest natural breeds on the continent, a landrace cat that developed in Maine itself.',
      source: { label: 'Maine Coon profile', to: '/encyclopedia/animal/maine-coon/' },
    },
    {
      q: 'The Border Collie gets its name from which border?',
      options: ['The Anglo-Scottish border', 'The Irish border', 'The Welsh border', 'The German border'],
      answer: 0,
      explain: 'Border Collies were developed along the border between Scotland and England, bred to herd sheep across rough hill country.',
      source: { label: 'Border Collie profile', to: '/encyclopedia/animal/border-collie/' },
    },
  ],
};

export const knowledgeQuiz = {
  id: 'knowledge',
  classic: true,
  title: 'Beastly Facts Challenge',
  emoji: '🧠',
  tagline: 'Quick-fire questions straight from the Beastly Facts vault.',
  reward: {
    emoji: '🧠',
    title: 'Vault Keeper',
    blurb: 'Eight for eight, straight from the fact vault.',
  },
  questions: [
    {
      q: 'What is the only mammal capable of true, sustained flight?',
      options: ['The bat', 'The flying squirrel', 'The sugar glider', 'The colugo'],
      answer: 0,
      explain: 'Bats are the only mammals that truly fly. Flying squirrels, sugar gliders and colugos glide. Many bats also navigate in total darkness using echolocation, firing off up to 200 calls per second.',
      source: { label: 'Built-In Sonar', to: '/facts/built-in-sonar/' },
    },
    {
      q: 'How many hearts does an octopus have?',
      options: ['One', 'Two', 'Three', 'Four'],
      answer: 2,
      explain: 'Two hearts pump blood to the gills and one pumps it to the rest of the body. That body heart stops beating while an octopus swims, which is why they prefer to crawl.',
      source: { label: 'Three Hearts of Love', to: '/facts/three-hearts-of-love/' },
    },
    {
      q: 'What color is an octopus\'s blood?',
      options: ['Red', 'Blue', 'Green', 'Clear'],
      answer: 1,
      explain: 'Octopus blood is blue, part of the unusual physiology that goes with their three hearts.',
      source: { label: 'Silent Swimmers', to: '/facts/silent-swimmers/' },
    },
    {
      q: 'Which is the only mammal covered in scales?',
      options: ['The porcupine', 'The pangolin', 'The hedgehog', 'The aardvark'],
      answer: 1,
      explain: 'Pangolins are the only mammals covered in scales. When threatened they roll into a tight ball, and the overlapping scales become armor.',
      source: { label: 'Walking Pinecones', to: '/facts/walking-pinecones/' },
    },
    {
      q: 'Which land animal can go from 0 to 60 mph in about three seconds?',
      options: ['The pronghorn', 'The cheetah', 'The greyhound', 'The lion'],
      answer: 1,
      explain: 'Cheetahs accelerate faster than most sports cars, but they can only hold top speed for around 20 to 30 seconds before overheating. The pronghorn is the second fastest land animal.',
      source: { label: 'Zero to Sixty in Seconds', to: '/facts/zero-to-sixty-in-seconds/' },
    },
    {
      q: 'Roughly how much bite force can an American alligator clamp down with?',
      options: ['About 300 pounds', 'About 1,000 pounds', 'Nearly 3,000 pounds', 'Over 10,000 pounds'],
      answer: 2,
      explain: 'An alligator\'s jaws close with nearly 3,000 pounds of force, one of the strongest bites of any living animal. The muscles that open them are so weak that a person can hold its mouth shut by hand.',
      source: { label: 'All Bite, No Bark', to: '/facts/all-bite-no-bark/' },
    },
    {
      q: 'Clownfish are all born as which sex?',
      options: ['Female', 'Male', 'Both at once', 'Neither until adulthood'],
      answer: 1,
      explain: 'Every clownfish starts out male. When the dominant female of a group dies, the largest male changes sex and becomes the new female, for good.',
      source: { label: 'Born Male, Die Female', to: '/facts/born-male-die-female/' },
    },
    {
      q: 'Which is the only bird that can fly backwards?',
      options: ['The hummingbird', 'The swift', 'The kingfisher', 'The woodpecker'],
      answer: 0,
      explain: 'A unique shoulder joint lets a hummingbird rotate its wings in a full circle, so it can fly backwards and even hover upside down for a moment.',
      source: { label: 'Flying Backwards, Sleeping Like the Dead', to: '/facts/flying-backwards-sleeping-like-the-dead/' },
    },
  ],
};

export const classicQuizzes = [triviaQuiz, knowledgeQuiz];

export function getClassicQuiz(id) {
  return classicQuizzes.find(q => q.id === id) || null;
}

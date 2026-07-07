import { encyclopediaAnimals } from '@/lib/data/encyclopedia';

// Mirrors the Quick Facts labels on the animal page so the quiz feels like
// a direct follow-up to what was just read, not a generic bolt-on.
const FIELD_ORDER = ['origin', 'adultSize', 'wildDiet', 'wildLifespan', 'habitat', 'conservation'];

const FIELD_PROMPTS = {
  origin: (a) => `What's the ${a.name}'s native range?`,
  habitat: (a) => `What's the ${a.name}'s natural habitat?`,
  adultSize: (a) => `What's the adult size of a ${a.name}?`,
  wildDiet: (a) => `What's the ${a.name}'s wild diet?`,
  wildLifespan: (a) => `What's the ${a.name}'s wild lifespan?`,
  conservation: (a) => `What's the ${a.name}'s conservation status?`,
};

// Deterministic 32-bit string hash - used instead of Math.random() so the
// question set and answer order are identical between the prerendered HTML
// (puppeteer, build time) and the client hydration (browser, runtime).
function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function uniqueValuesExcluding(animals, key, exclude) {
  const seen = new Set([exclude]);
  const out = [];
  for (const a of animals) {
    const val = a.bio?.[key];
    if (val && !seen.has(val)) {
      seen.add(val);
      out.push(val);
    }
  }
  return out;
}

/**
 * Builds up to `questionCount` multiple-choice questions for `animal` using
 * only bio data already on the page. Distractors are pulled from same-category
 * siblings first (harder, more relevant), falling back to the full animal
 * pool when a category's values are too repetitive (e.g. domesticated breeds
 * that all share "Fully domesticated" / "Not applicable").
 */
export function generateAnimalQuiz(animal, questionCount = 4) {
  if (!animal?.bio) return [];

  const others = encyclopediaAnimals.filter(a => a.id !== animal.id && a.bio);
  const sameCategory = others.filter(a => a.category === animal.category);

  const questions = [];

  for (const key of FIELD_ORDER) {
    if (questions.length >= questionCount) break;

    const correct = animal.bio[key];
    if (!correct) continue;

    let distractors = uniqueValuesExcluding(sameCategory, key, correct).slice(0, 3);
    if (distractors.length < 3) {
      const fallback = uniqueValuesExcluding(others, key, correct).filter(v => !distractors.includes(v));
      distractors = [...distractors, ...fallback].slice(0, 3);
    }
    if (distractors.length < 3) continue;

    const options = [correct, ...distractors];
    const rotate = hashString(`${animal.id}-${key}`) % options.length;
    const rotated = [...options.slice(rotate), ...options.slice(0, rotate)];

    questions.push({
      id: `${animal.id}-${key}`,
      question: FIELD_PROMPTS[key](animal),
      options: rotated,
      correctIndex: rotated.indexOf(correct),
    });
  }

  return questions;
}

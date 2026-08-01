// Decides whether a fact about `factAnimal` belongs on a page about `pageName`.
//
// This replaces a plain substring test that both EncyclopediaAnimal.jsx and
// GuideDetail.jsx used to carry:
//
//   pageName.toLowerCase().includes(factAnimal.toLowerCase()) || ...
//
// which put three Cat facts on the Sulcata Tortoise page, because "sulcata"
// contains "cat". It did the same to Corydoras Catfish. Twelve wrong facts
// across four pages.
//
// The obvious fix - require whole-word matches - overcorrects. "French
// Bulldog", "Small Breed Dogs" and "California Kingsnake" were all matching by
// accident too, but the facts they surfaced were right: a bulldog IS a dog and
// a kingsnake IS a snake. A strict word-boundary rule would have silently
// stripped correct content from those pages.
//
// So the rule keys on how English compounds work: they are head-final. The
// last element is what the thing IS, and the earlier elements only modify it.
// bulldog -> dog. kingsnake -> snake. catfish -> a fish, NOT a cat. That single
// distinction separates every real match here from every false one, which is
// why the test below is `endsWith` and deliberately not `includes`.
//
// Audited against all 238 facts x 151 encyclopedia + guide pages: exactly two
// matches rely on the compound rule (kingsnake/snake, bulldog/dog), both
// correct, and 147 pages are unaffected.

// Crude singulariser, enough for animal names. Needed because guide titles are
// pluralised ("Small Breed Dogs", "Large and Giant Breed Dogs") while fact
// animals are not ("Dog").
function singular(word) {
  if (word.endsWith('ies') && word.length > 4) return `${word.slice(0, -3)}y`;
  if (/(sh|ch|ss|x|z)es$/.test(word)) return word.slice(0, -2);
  if (word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1);
  return word;
}

function tokens(value) {
  return String(value || '')
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter(Boolean)
    .map(singular);
}

// Does `needle` appear as a contiguous run of whole words inside `haystack`?
function hasWordRun(haystack, needle) {
  if (!needle.length || needle.length > haystack.length) return false;
  for (let i = 0; i + needle.length <= haystack.length; i++) {
    if (needle.every((word, j) => haystack[i + j] === word)) return true;
  }
  return false;
}

export function matchesAnimal(pageName, factAnimal) {
  const page = tokens(pageName);
  const animal = tokens(factAnimal);
  if (!page.length || !animal.length) return false;

  // Whole-word run either direction: "Corn Snake" gets generic "Snake" facts,
  // and a "Snake" page would get "Corn Snake" facts.
  if (hasWordRun(page, animal) || hasWordRun(animal, page)) return true;

  // Compound head, single-word fact animals only. Requires the page word to be
  // strictly longer so an exact match doesn't fall through to here.
  if (animal.length === 1) {
    const head = animal[0];
    return page.some((word) => word !== head && word.length > head.length && word.endsWith(head));
  }

  return false;
}

// Shared by the encyclopedia and guide pages so the two can't drift apart
// again - they previously carried separate copies of the same broken test.
export function getRelatedFacts(pageName, facts, limit = 3) {
  return facts.filter((fact) => matchesAnimal(pageName, fact.animal)).slice(0, limit);
}

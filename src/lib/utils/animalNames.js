// Animal names as they appear mid-sentence.
//
// Several of the names in the legal dataset lead with a proper noun, so a
// blanket .toLowerCase() turns those into "the bengal cat" mid-sentence and
// "Where Is the Bengal cat Legal?" in a title. Only the first word is lowered,
// and only when it is not a proper noun: lowercasing the whole string flattened
// "Giant African millipede" into "giant african millipede", since the proper
// noun there is not the word the sentence position affects.
//
// A Set lookup on the first word rather than a regex prefix. The regex version
// of this silently never matched: editing it through a shell heredoc left a
// literal backspace character where \b was meant, so it required a backspace
// after "Bengal" and every name fell through to toLowerCase().
//
// Shared by the two sides of the legal matrix. It lived in ExoticPetLaws.jsx
// until the state pages needed it too, and a second copy would have drifted the
// first time a name was added. scripts/check-seo-tags.mjs keeps its own
// deliberate mirror, guarded by the drift test in that file.
export const PROPER_FIRST_WORDS = new Set([
  'Bengal', 'Russian', 'Argentine', 'Nile', 'Burmese', 'Quaker', 'African', 'Asian', 'American',
  // Added when the state pages started listing several names in one sentence,
  // which is where "the california kingsnake" and "the madagascar hissing
  // cockroach" became obvious. They were already shipping that way in the
  // animal pages' meta descriptions.
  'California', 'Madagascar', "Jackson's",
]);

export function inSentence(name) {
  const [first, ...rest] = name.split(' ');
  if (PROPER_FIRST_WORDS.has(first)) return name;
  return [first.toLowerCase(), ...rest].join(' ');
}

// "a, b and c" for a short list. No Oxford comma, matching the site's prose.
export function joinList(items) {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

// Animal names as they appear in a title tag.
//
// The names in the legal dataset are sentence case, which is right in prose and
// wrong in a title: "Prairie dog Laws by State: Bans and Permits" puts a
// lowercase word in front of a title-cased suffix and reads as a typo in a
// result. A GSC pull on 2026-09-12 had /exotic-pet-laws/prairie-dog/ taking 115
// impressions at position 7.66 with no clicks at all, which is the shape of a
// title people look at and skip. Forty of the 52 names hit it.
//
// Only the leading character of each part is raised, never the rest, because
// several names already carry internal capitals ("African", "Madagascar") that
// a blanket capitalize would flatten. Hyphenated parts are raised on both sides
// so "Red-eared slider" becomes "Red-Eared Slider", but apostrophes are left
// alone so "Jackson's" does not become "Jackson'S".
//
// The small words stay down mid-title, which is what keeps "Argentine black and
// white tegu" reading as "Argentine Black and White Tegu".
const TITLE_MINOR_WORDS = new Set(['a', 'an', 'and', 'of', 'or', 'the', 'in']);

const raiseFirst = (word) => (word ? word[0].toUpperCase() + word.slice(1) : word);

export function inTitle(name) {
  return String(name || '')
    .split(' ')
    .map((word, i) => {
      if (i > 0 && TITLE_MINOR_WORDS.has(word.toLowerCase())) return word.toLowerCase();
      return word.split('-').map(raiseFirst).join('-');
    })
    .join(' ');
}

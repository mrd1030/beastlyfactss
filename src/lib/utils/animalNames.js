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

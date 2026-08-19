// ASCII word chars only (letters/digits/underscore) - matches what people
// actually type as hashtags in a caption. No unicode/emoji handling; not
// worth the complexity for a personal cross-posting feed.
const HASHTAG_RE = /#(\w+)/g;

// Lowercased, de-duplicated, in first-appearance order. Lowercasing is what
// makes "#Elephants" on one post and "#elephants" on another land on the
// same /feed/tag/ page - the caption still displays whatever case the poster
// typed (see splitCaptionByHashtags), only the URL/matching is normalized.
export function extractHashtags(caption) {
  const seen = new Set();
  for (const match of String(caption || '').matchAll(HASHTAG_RE)) {
    seen.add(match[1].toLowerCase());
  }
  return [...seen];
}

// True if `caption` carries `tag` as one of its hashtags (case-insensitive,
// whole-tag match - "#elephant" does not match "elephants").
export function captionHasTag(caption, tag) {
  return extractHashtags(caption).includes(String(tag || '').toLowerCase());
}

// Splits a caption into plain-text and hashtag chunks for rendering, e.g.
// "Cool #Elephants pic" -> [{type:'text', value:'Cool '}, {type:'tag',
// value:'Elephants', tag:'elephants'}, {type:'text', value:' pic'}].
// `value` keeps the original typed case for display; `tag` is the lowercased
// form the /feed/tag/:tag/ route matches on.
export function splitCaptionByHashtags(caption) {
  const text = String(caption || '');
  const parts = [];
  let lastIndex = 0;
  for (const match of text.matchAll(HASHTAG_RE)) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    parts.push({ type: 'tag', value: match[1], tag: match[1].toLowerCase() });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push({ type: 'text', value: text.slice(lastIndex) });
  }
  return parts;
}

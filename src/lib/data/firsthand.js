// Species Mike has actually lived with, watched, or looked after, and the one
// line the byline shows on those pages. Keyed by the species token that
// appears in article slugs and guide ids, so no frontmatter sweep is needed
// and a new bearded dragon article picks the note up automatically.
//
// The absence of a note says nothing. The site's general method (research,
// vets, primary sources) is disclosed once on /about/. A "researched, not
// kept" stamp on the other 700 pages would be wallpaper, so it does not exist.
// Only positive claims get a line, and every line here is something the About
// page already says.
const FIRSTHAND = [
  { match: /bearded-dragon/, note: 'Written from Mike’s own two dragons, Dex and Cera.' },
  { match: /(^|-)rabbit(s|-|$)/, note: 'Mike looks after his sister’s rabbit, Otis, for weeks at a time.' },
  { match: /golden-retriever/, note: 'Mike grew up with two golden retrievers.' },
  { match: /guinea-pig/, note: 'Mike grew up with guinea pigs.' },
  { match: /cockatoo/, note: 'Mike has looked after a neighbor’s cockatoo on and off for years.' },
  { match: /budgie|lovebird/, note: 'Mike has looked after neighbors’ budgies and lovebirds on and off for years.' },
  { match: /chinchilla/, note: 'Mike kept a chinchilla for a stretch. The dust bath and heat advice here is lived.' },
];

// Slugs that mention a firsthand species but are not about keeping it.
const EXCLUDE = /^chronicles-of-/;

export function firsthandNote(key) {
  if (!key || EXCLUDE.test(key)) return null;
  const hit = FIRSTHAND.find(f => f.match.test(key));
  return hit ? hit.note : null;
}

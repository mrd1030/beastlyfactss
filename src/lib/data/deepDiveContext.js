// Which guide a reader came from when they clicked a Deep Dive link.
//
// The Deep Dive block on a blog post exists to let someone keep following the
// thread they arrived on. For a species article there is only one thread, so
// the article alone is enough to work it out. For a cross-species article there
// is more than one: cardiomyopathy-in-cats-and-dogs-guide is reachable from
// dog-universal, dog-large-breed, cat-universal and eight cat breeds, and the
// right siblings are completely different depending on which of those you came
// from. A reader who got there from a Rottweiler guide wants bloat and
// dysplasia; one who came from a Persian guide wants kidney disease and
// hairballs. The article cannot tell you which, so the link has to carry it.
//
// sessionStorage rather than a query parameter or router state: a query
// parameter would put a tracking-looking value in a canonical URL for something
// purely presentational, and router state does not survive the reader moving
// from one sibling to the next through the sidebar. This survives both, and
// dies with the tab.
//
// It is deliberately not cleared on read or on navigation away. Staleness is
// harmless because getDeepDiveSiblings only honours a stored guide that
// actually lists the article being read; land anywhere else and it is ignored,
// and the next Deep Dive click overwrites it.
const KEY = 'beastly-deep-dive-from';

// Every access is guarded. sessionStorage throws outright in some privacy
// modes, and this is a nicety - it must never be the thing that breaks a page.
export function rememberDeepDiveGuide(guideId) {
  if (!guideId) return;
  try {
    window.sessionStorage.setItem(KEY, guideId);
  } catch {
    /* no session storage, the ranked fallback still applies */
  }
}

export function readDeepDiveGuide() {
  try {
    return window.sessionStorage.getItem(KEY) || null;
  } catch {
    return null;
  }
}

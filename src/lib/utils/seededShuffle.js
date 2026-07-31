// Deterministic pseudo-random shuffle, not Math.random(): used anywhere content
// needs to rotate day-to-day without ever mismatching prerender.mjs's build-time
// capture (see CategoryBrowse.jsx/EncyclopediaTeaser.jsx/HeroSection.jsx for the
// full reasoning - real Math.random()/new Date()-seeded values computed during
// render bake one result into the static HTML and produce a different one the
// moment a real client hydrates, which is a genuine structural mismatch, not
// just cosmetic randomness).
export function seededShuffle(arr, seed) {
  const a = [...arr];
  let s = seed || 1;
  const nextRandom = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(nextRandom() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Simple deterministic string hash, used to vary a seed per-item (e.g. per
// category) while keeping it stable for a given item+day pair.
export function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) & 0x7fffffff;
  return h;
}

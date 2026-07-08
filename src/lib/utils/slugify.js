export const slugify = (text) => {
  if (!text) return '';
  // "&" and the standalone word "and" both normalize to the literal word "and"
  // (not just a bare hyphen) so that "Small & Exotic Pets" produces
  // "small-and-exotic-pets" and actually matches its established URL slug,
  // instead of dropping the word entirely and producing "small-exotic-pets".
  // The word form requires surrounding whitespace - without it, words
  // that merely contain "and" (salamander, panda) would get mangled.
  return text.toString().toLowerCase()
    .replace(/\s*&\s*|\s+and\s+/g, '-and-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

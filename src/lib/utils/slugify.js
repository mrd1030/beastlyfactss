export const slugify = (text) => {
  if (!text) return '';
  // "&" and the standalone word "and" both normalize to "-" so that
  // "Small & Exotic Pets" and "small-and-exotic-pets" compare equal.
  // The word form requires surrounding whitespace - without it, words
  // that merely contain "and" (salamander, panda) would get mangled.
  return text.toString().toLowerCase()
    .replace(/\s*&\s*|\s+and\s+/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

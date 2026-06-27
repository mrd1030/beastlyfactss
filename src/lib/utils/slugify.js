export const slugify = (text) => {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/\s*&\s*|\s*and\s*/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

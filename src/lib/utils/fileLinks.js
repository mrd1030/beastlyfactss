import FILE_LINKS from '@/lib/generated/file-links.json';

// A link that hands the reader a file instead of a page says so, because on a
// phone a PDF saves to the device rather than opening. The checker's record
// (file-links.json) knows the legal sources whose URL hides the file type;
// everything else is judged by its extension.
export function fileKind(url = '') {
  if (FILE_LINKS[url]) return FILE_LINKS[url];
  const p = url.split(/[?#]/)[0].toLowerCase();
  if (p.endsWith('.pdf')) return 'pdf';
  if (p.endsWith('.docx') || p.endsWith('.doc')) return 'docx';
  return null;
}

const isArchive = (url) => /^https?:\/\/web\.archive\.org\//i.test(url);

// "(PDF, downloads)", "(Word file, downloads)", or "" for an ordinary page.
export function fileLabel(url = '') {
  const kind = fileKind(url);
  if (!kind) return '';
  const what = kind === 'pdf' ? 'PDF' : 'Word file';
  return `(${isArchive(url) ? `archived ${what}` : what}, downloads)`;
}

// Link text that already names the file type in a closing parenthetical,
// "Iowa Code Chapter 717F (official PDF)", gets "downloads" folded into it
// instead of a second set of brackets. Returns null when the label should be
// appended as usual.
export function foldFileLabel(text, url = '') {
  if (typeof text !== 'string' || !fileKind(url)) return null;
  const m = text.match(/^(.*)\(([^()]*\b(?:PDF|Word|DOCX?)\b[^()]*)\)\s*$/i);
  if (!m) return null;
  return /\bdownloads?\b/i.test(m[2]) ? text : `${m[1]}(${m[2]}, downloads)`;
}

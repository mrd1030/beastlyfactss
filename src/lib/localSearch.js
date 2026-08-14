// Client-side search over the site's non-article static data (care guides,
// encyclopedia entries, glossary terms, Beastlypedia entries). Blog/guide
// articles are searched separately in Search.jsx straight from mdxPosts, so
// they are deliberately not duplicated here.
import { allGuides } from '@/lib/data/guides';
import { encyclopediaAnimals } from '@/lib/data/encyclopedia';
import { CATEGORIES as GLOSSARY_CATEGORIES } from '@/lib/data/glossaryTerms';
import { beastfiles } from '@/lib/data/beastlypedia';
import { mdxPosts } from '@/lib/mdxPosts';
import { isChroniclesPost } from '@/lib/chronicles';
import { slugify } from '@/lib/utils/slugify';

const MAX_PER_TYPE = 6;

function matches(text, q) {
  return typeof text === 'string' && text.toLowerCase().includes(q);
}

export function searchLocalContent(query) {
  const q = query.trim().toLowerCase();
  if (!q) return { guides: [], encyclopedia: [], glossary: [], beastlypedia: [], articles: [] };

  const guides = allGuides
    .filter(g => matches(g.name, q) || matches(g.tagline, q) || matches(g.petType, q))
    .slice(0, MAX_PER_TYPE)
    .map(g => ({
      key: `guide-${g.id}`,
      type: 'Care Guide',
      emoji: g.emoji || '📖',
      title: g.name,
      subtitle: g.tagline,
      to: `/guides/${g.id}/`,
    }));

  const encyclopedia = encyclopediaAnimals
    .filter(a => matches(a.name, q) || matches(a.scientific, q) || matches(a.category, q))
    .slice(0, MAX_PER_TYPE)
    .map(a => ({
      key: `enc-${a.id}`,
      type: 'Encyclopedia',
      emoji: a.emoji || '📚',
      title: a.name,
      subtitle: a.scientific,
      to: `/encyclopedia/animal/${a.id}/`,
    }));

  const beastlypedia = beastfiles
    .filter(b => matches(b.name, q) || matches(b.scientific, q) || matches(b.tagline, q) || matches(b.group, q) || (b.alsoKnownAs || []).some(a => matches(a, q)))
    .slice(0, MAX_PER_TYPE)
    .map(b => ({
      key: `beastfile-${b.id}`,
      type: 'Beastlypedia',
      emoji: '🐾',
      title: b.name,
      subtitle: b.tagline || b.scientific,
      to: `/beastlypedia/${b.id}/`,
    }));

  const glossary = [];
  GLOSSARY_CATEGORIES.forEach(cat => {
    cat.terms.forEach(t => {
      if (glossary.length >= MAX_PER_TYPE) return;
      if (matches(t.term, q) || matches(t.definition, q)) {
        glossary.push({
          key: `gloss-${slugify(t.term)}`,
          type: 'Glossary',
          emoji: cat.emoji || '📘',
          title: t.term,
          subtitle: t.definition,
          to: `/glossary#${slugify(t.term)}`,
        });
      }
    });
  });

  const articles = mdxPosts
    .filter(p => !isChroniclesPost(p))
    .filter(p => matches(p.title, q) || matches(p.excerpt, q) || (p.tags || []).some(t => matches(t, q)))
    .slice(0, MAX_PER_TYPE)
    .map(p => ({
      key: `article-${p._id}`,
      type: 'Article',
      emoji: p.emoji || '📰',
      title: p.title,
      subtitle: p.excerpt,
      to: `/blog/${p.slug.current}/`,
    }));

  return { guides, encyclopedia, glossary, beastlypedia, articles };
}

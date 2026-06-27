// src/lib/mdxPosts.js

// Load all MDX files from the three content folders
const guideModules = import.meta.glob('/content/guides/*.mdx', { eager: true });
const blogModules = import.meta.glob('/content/blog/*.mdx', { eager: true });
const funFactModules = import.meta.glob('/content/fun-facts/*.mdx', { eager: true });
const shortstoryModules = import.meta.glob('/content/short-story/*.mdx', { eager: true });

/**
 * Normalizes an MDX module into a consistent post object
 */
function normalizeMdxPost(filePath, module) {
  const frontmatter = module.frontmatter || {};

  // Generate a slug from filename if not provided in frontmatter
  const fileName = filePath.split('/').pop().replace('.mdx', '');
  const slug = frontmatter.slug || fileName;

  return {
    // Core fields
    _id: slug,
    slug: { current: slug },
    title: frontmatter.title || 'Untitled',
    excerpt: frontmatter.excerpt || '',
    publishedAt: frontmatter.date || frontmatter.lastUpdated || new Date().toISOString(),
    
    // Metadata
    category: frontmatter.category || 'General',
    allCategories: frontmatter.category ? [frontmatter.category] : [],
    tags: frontmatter.tags || [],
    readingTime: frontmatter.readingTime || frontmatter.readTime || null,
    difficulty: frontmatter.difficulty || null,
    
    // Images
    image: frontmatter.image || null,
    imageAlt: frontmatter.imageAlt || frontmatter.title || '',
    
    // Content
    content: module.default,           // The actual MDX React component
    source: 'mdx',
    
    // Optional extra fields
    emoji: frontmatter.emoji || null,
    lastReviewed: frontmatter.lastReviewed || null,
    canonicalUrl: frontmatter.canonicalUrl || null,
  };
}

// Combine all MDX posts from the three folders
export const mdxPosts = [
  ...Object.entries(guideModules).map(([path, mod]) => normalizeMdxPost(path, mod)),
  ...Object.entries(blogModules).map(([path, mod]) => normalizeMdxPost(path, mod)),
  ...Object.entries(funFactModules).map(([path, mod]) => normalizeMdxPost(path, mod)),
  ...Object.entries(shortstoryModules).map(([path, mod]) => normalizeMdxPost(path, mod)),
];

// Optional: Export a helper to get posts by category
export function getMdxPostsByCategory(category) {
  if (!category || category.toLowerCase() === 'all') return mdxPosts;
  return mdxPosts.filter(post => 
    post.category?.toLowerCase() === category.toLowerCase()
  );
}
import fs from 'fs';
import fetch from 'node-fetch'; // Remove this line if you are using Node 18+

// 1. Define your base URL
const BASE_URL = 'https://beastlyfacts.com';

// 2. Hardcode your static pages (Homepage, About, Categories, etc.)
const staticPages = [
  '',
  '/about',
  '/contact',
  '/facts',            // Facts.jsx
  '/animal-facts',     // AnimalFacts.jsx
  '/blog',             // Blog.jsx
  '/encyclopedia',     // Encyclopedia.jsx
  '/guides',           // Guides.jsx
  '/pack',             // Pack.jsx
  '/quiz',             // Quiz.jsx
  '/trivia-quiz',      // TriviaQuiz.jsx
  '/categories/reptiles',
  '/categories/small-mammals',
  '/categories/dogs',
  '/categories/cats',
  '/categories/birds'
];

async function generateSitemap() {
  // Replace these with your actual Sanity details
  const PROJECT_ID = '7nqbs1gk'; 
  const DATASET = 'production'; 
  
  // GROQ query to grab all published post slugs and their last updated date
  const groqQuery = encodeURIComponent('*[_type == "post"]{ "slug": slug.current, _updatedAt }');
  const sanityUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${groqQuery}`;

  try {
    console.log('Fetching fresh post slugs from Sanity...');
    const response = await fetch(sanityUrl);
    const data = await response.json();
    
    // Extract slugs and format them into relative URLs
    const dynamicPages = data.result.map(post => {
      return {
        path: `/posts/${post.slug}`,
        lastmod: post._updatedAt.split('T')[0] // Formats timestamp to YYYY-MM-DD
      };
    });

    // Get today's date for the static pages
    const today = new Date().toISOString().split('T')[0];

    // 3. Start building the XML string
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add static pages to XML
    staticPages.forEach(path => {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}${path}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>daily</changefreq>\n`;
      xml += `    <priority>${path === '' ? '1.0' : '0.8'}</priority>\n`;
      xml += `  </url>\n`;
    });

    // Add dynamic Sanity pages to XML
    dynamicPages.forEach(page => {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}${page.path}</loc>\n`;
      xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.7</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    // 4. Write the file straight into Vite's production build folder
    fs.writeFileSync('./dist/sitemap.xml', xml);
    console.log('🎉 Dynamic sitemap successfully generated in ./dist/sitemap.xml');

  } catch (error) {
    console.error('❌ Failed to generate sitemap:', error);
  }
}

generateSitemap();
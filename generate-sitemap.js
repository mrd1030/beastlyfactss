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
  // Unified Fun Facts filter pages (Clean hyphens synced with Facts.jsx logic)
  '/facts?category=amphibians',
  '/facts?category=birds',
  '/facts?category=cats',
  '/facts?category=dogs',
  '/facts?category=invertebrates',
  '/facts?category=reptiles',
  '/facts?category=small-mammals',
  '/facts?category=turtles-tortoises',
  '/facts?category=wild-animals',


  '/animal-facts',     // AnimalFacts.jsx
  '/blog',             // Blog.jsx

// Blog filter pages (Now beautifully synced with hyphens instead of %20)
  '/blog?category=amphibians',
  '/blog?category=aquatic-life',
  '/blog?category=birds',
  '/blog?category=cats',
  '/blog?category=dogs',
  '/blog?category=fun-facts',
  '/blog?category=invertebrates',
  '/blog?category=pet-care',
  '/blog?category=product-picks',
  '/blog?category=reptiles',
  '/blog?category=small-exotic-pets', 
  '/blog?category=wild-animals',

  '/encyclopedia',     // Encyclopedia.jsx
  // Encyclopedia filter pages
  '/encyclopedia?category=snakes',
  '/encyclopedia?category=geckos',
  '/encyclopedia?category=lizards',
  '/encyclopedia?category=turtles-tortoises',
  '/encyclopedia?category=small-mammals',
  '/encyclopedia?category=birds',
  '/encyclopedia?category=dogs',
  '/encyclopedia?category=cats',
  '/encyclopedia?category=invertebrates',
  '/encyclopedia?category=amphibians',

  '/guides',           // Guides.jsx
  // Geckos
  '/guides/crested-gecko',
  '/guides/leopard-gecko',
  '/guides/gargoyle-gecko',
  '/guides/mourning-gecko',
  '/guides/tokay-gecko',
  '/guides/african-fat-tail',
  '/guides/leaf-tailed-gecko',
  
  // Lizards
  '/guides/bearded-dragon',
  '/guides/blue-tongue-skink',
  '/guides/chameleon',
  '/guides/green-anole',
  '/guides/ackie-monitor',
  '/guides/savannah-monitor',
  '/guides/uromastyx',
  '/guides/tegu',
  
  // Snakes
  '/guides/ball-python',
  '/guides/corn-snake',
  '/guides/hognose-snake',
  '/guides/boa-constrictor',
  '/guides/california-kingsnake',
  '/guides/milk-snake',
  
  // Turtles & Tortoises
  '/guides/red-eared-slider',
  '/guides/russian-tortoise',
  '/guides/sulcata-tortoise',
  '/guides/box-turtle',
  
  // Small Mammals
  '/guides/rabbit',
  '/guides/hedgehog',
  '/guides/guinea-pig',
  '/guides/chinchilla',
  '/guides/ferret',
  '/guides/sugar-glider',
  
  // Birds
  '/guides/budgie',
  '/guides/cockatiel',
  '/guides/conure',
  '/guides/lovebird',
  '/guides/african-grey',
  
  // Dogs
  '/guides/dog-labrador',
  '/guides/dog-golden-retriever',
  '/guides/dog-german-shepherd',
  '/guides/dog-french-bulldog',
  '/guides/dog-border-collie',
  '/guides/dog-siberian-husky',
  
  // Cats
  '/guides/cat-domestic-shorthair',
  '/guides/cat-maine-coon',
  '/guides/cat-siamese',
  '/guides/cat-ragdoll',
  '/guides/cat-bengal',
  '/guides/cat-persian',
  
  // Invertebrates
  '/guides/tarantula',
  '/guides/praying-mantis',
  '/guides/millipede',
  '/guides/emperor-scorpion',
  '/guides/hissing-cockroach',
  '/guides/stick-insect',
  
  // Amphibians
  '/guides/whites-tree-frog',
  '/guides/pacman-frog',
  '/guides/fire-bellied-toad',
  '/guides/axolotl',
  '/guides/tiger-salamander',

  '/pack',             // Pack.jsx
  '/quiz',             // Quiz.jsx (personality + trivia + knowledge tabs)
  '/trivia',           // redirects to /quiz?tab=trivia
 

  '/donate', // Donate.jsx
  '/privacy', // Privacy.jsx
  '/terms', // Terms.jsx
  '/search', // Search.jsx

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
        path: `/blog/${post.slug}`,
        lastmod: post._updatedAt.split('T')[0]
       // Formats timestamp to YYYY-MM-DD
      };
    });

    // Get today's date for the static pages
    const today = new Date().toISOString().split('T')[0];

    // 3. Start building the XML string
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add static pages to XML
    staticPages.forEach(path => {
      const isHome = path === '';
      const isHighFreq = ['', '/facts', '/blog', '/encyclopedia', '/animal-facts', '/quiz'].includes(path);
      const isLowFreq = path.startsWith('/guides/') || path.startsWith('/category/') || path.startsWith('/privacy') || path.startsWith('/terms');
      const changefreq = isHighFreq ? 'weekly' : isLowFreq ? 'monthly' : 'weekly';
      const priority = isHome ? '1.0' : isHighFreq ? '0.9' : isLowFreq ? '0.6' : '0.7';
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}${path}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
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
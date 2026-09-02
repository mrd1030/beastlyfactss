import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Drops HTML comments from the built shell. index.html carries several
// paragraphs of maintainer notes (why the theme script runs first, why the
// AdSense tag is out, how the preload pairs with HeroSection) that are useful
// in source and pure weight in production: they shipped inside every
// prerendered page, about 5KB each, and read oddly to anyone viewing source.
// Build only, so the dev server keeps the notes next to the tags they explain.
// generate-fact-pages.mjs already strips comments from its own copy of the
// shell, so nothing changes there. Runs post so it sees the final markup after
// Vite has rewritten asset URLs.
function stripHtmlComments() {
  return {
    name: 'strip-html-comments',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html
          .replace(/<!--[\s\S]*?-->/g, '')
          .replace(/\n[ \t]*\n([ \t]*\n)+/g, '\n\n');
      },
    },
  };
}

// Fetch the app's JavaScript at low priority. The prerendered HTML is already
// the full page, and hydrateRoot only runs once every chunk it needs has
// arrived anyway, so nothing paints later for it. On PageSpeed's simulated
// slow 4G the entry + vendor chunks (~240KB) were fetched at the same High
// priority as the LCP hero image, the two fonts and the stylesheet, all
// sharing one pipe, and the hero was the one that waited: the mobile LCP sat at
// 5.1-5.3s while the image itself had arrived early. Vite rebuilds these two
// tags from scratch, so the attribute cannot be set in index.html; it is added
// here to the final markup, and every page derived from the shell inherits it.
// Only the entry script and its vendor modulepreload are touched, never the
// stylesheet, fonts or hero preload.
function lowPriorityScripts() {
  return {
    name: 'low-priority-scripts',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html
          .replace(/<script type="module" crossorigin src="\/assets\/[^"]+">/g, (tag) => tag.replace('<script ', '<script fetchpriority="low" '))
          .replace(/<link rel="modulepreload" crossorigin href="\/assets\/[^"]+">/g, (tag) => tag.replace('<link ', '<link fetchpriority="low" '));
      },
    },
  };
}

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [
        remarkFrontmatter,      // Parses the YAML frontmatter
        remarkMdxFrontmatter,   // Makes it available as `frontmatter` export
      ],
    }),
    react(),
    stripHtmlComments(),
    lowPriorityScripts(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // ... rest of your config (build, server, etc.)
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    target: 'es2022',
    chunkSizeWarningLimit: 630,
    rollupOptions: {
      output: {
        // Targeted chunking to prevent circular dependency loops 🎯
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Keep Stripe separate (only used for packs/donations)
            if (id.includes('stripe') || id.includes('@stripe')) {
              return 'stripe-vendor';
            }
            // Keep the Supabase client separate. It backs blog likes and
            // comments, which only exist on /blog/ and /chronicles/ post pages,
            // so there is no reason for it to ship with the homepage.
            if (id.includes('@supabase')) {
              return 'supabase-vendor';
            }
            // Keep canvas-confetti separate - it's only ever needed on-demand
            // (Quiz completion, Hero easter egg), both already reached via
            // dynamic import() at their call sites. Left in 'vendor' it would
            // ship on every single page load regardless.
            if (id.includes('canvas-confetti')) {
              return 'confetti-vendor';
            }
            // sonner backs the toasts on /donate and the blog comment box
            // only. In 'vendor' it shipped ~18KB raw on every page.
            if (id.includes('/sonner/')) {
              return 'sonner-vendor';
            }
            // framer-motion is deliberately NOT pinned to a chunk. App.jsx
            // loads the domAnimation features synchronously and FactModal
            // loads domMax (drag + layout projection, ~41KB raw) on demand,
            // and that split only exists if Rollup is free to place the
            // domMax-only modules in the async chunk. Forcing framer into
            // 'vendor' (or into a named motion chunk - tried, same result)
            // pulls the drag engine back onto every page's critical path.
            // The remaining framer code lands in the entry chunk instead of
            // the vendor chunk; that chunk changes on every deploy anyway.
            if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) {
              return undefined;
            }

            // Let React, Radix, and Framer Motion bundle together naturally into a single core vendor chunk
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    allowedHosts: 'all',
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  }
});

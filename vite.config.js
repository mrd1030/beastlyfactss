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

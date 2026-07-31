import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [
        remarkFrontmatter,      // Parses the YAML frontmatter
        remarkMdxFrontmatter,   // Makes it available as `frontmatter` export
      ],
    }),
    react(),
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
            // Keep Sanity separate (it's heavy and only used on content pages)
            if (id.includes('sanity') || id.includes('@sanity') || id.includes('portabletext')) {
              return 'sanity-vendor';
            }
            // Keep Stripe separate (only used for packs/donations)
            if (id.includes('stripe') || id.includes('@stripe')) {
              return 'stripe-vendor';
            }
            // Keep the Base44 SDK separate - only reached via dynamic import()
            // (BeastlyBuddy's analytics calls, plus a few already-lazy routes),
            // so it must live outside the always-eager vendor chunk or those
            // dynamic imports never actually defer anything.
            if (id.includes('@base44')) {
              return 'base44-vendor';
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

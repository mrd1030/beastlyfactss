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
    sourcemap: 'hidden',
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
            // Keep heavy data charts separate
            if (id.includes('recharts') || id.includes('d3')) {
              return 'charts-vendor';
            }
            
            // Let React, Radix, and Framer Motion bundle together naturally into a single core vendor chunk
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    allowedHosts: 'all'
  }
});

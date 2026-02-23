import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // Static assets live in 'Public' (capital P) — must be explicit on case-sensitive servers
  publicDir: 'Public',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'esnext',
    outDir: 'build',
    // Inline assets smaller than 4KB as base64 to save round trips
    assetsInlineLimit: 4096,
    // Remove console.log and debugger in production
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Split large vendor libraries into separate chunks for better caching
        manualChunks: {
          // React core — rarely changes, gets its own long-lived cache chunk
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation library — largest single dep, cache independently
          'vendor-motion': ['motion'],
          // Icons — tree-shaken but still sizable
          'vendor-icons': ['lucide-react'],
        },
        // Readable asset file names with content hash for cache busting
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
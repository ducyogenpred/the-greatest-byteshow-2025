import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/indexindex.html'),
      },
      output: {
        entryFileNames: 'assets/js/[name].[hash].js',
        chunkFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: ({ name }) =>
          name && name.endsWith('.css') ? 'assets/css/[name].[hash][extname]' : 'assets/[name].[hash][extname]',
      },
    },
  },
});

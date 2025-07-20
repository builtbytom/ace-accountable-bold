import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
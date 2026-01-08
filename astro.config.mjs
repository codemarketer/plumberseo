// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://plumberseo.co.uk',
  
  // Ensure consistent URLs - always use trailing slash
  trailingSlash: 'always',
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap()],
  
  // Improve build output
  build: {
    inlineStylesheets: 'auto'
  },
  
  // Compress HTML output
  compressHTML: true
});

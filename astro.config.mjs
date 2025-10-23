// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  
  site: 'https://await-async-response.github.io/astro-tailwind-image-slider/',
  outDir: './dist',
});
// astro.config.mjs
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://alexavolt.ro',

  // ... other config
  base: '/playground',

  vite: {
    plugins: [tailwindcss()]
  }
});
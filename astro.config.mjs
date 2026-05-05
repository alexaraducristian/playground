import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // Replace with your actual GitHub info
  site: 'https://alexaraducristian.github.io',
  base: 'playground', 
});
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://nume-utilizator.github.io',
  base: '/playground', // Numele repository-ului tău
  integrations: [tailwind()],
});
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [react(), mdx()],
  server: { port: 4321 },
  redirects: {
    '/flights': '/2026/flights',
    '/bike': '/2026/bike',
    '/gear': '/2026/gear',
    '/resources': '/2026/resources',
    '/tips': '/2026/tips',
  },
});

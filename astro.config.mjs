// @ts-check
import { defineConfig } from 'astro/config';

import db from '@astrojs/db';

import netlify from '@astrojs/netlify';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [db(), icon()],
  output: 'server',
  adapter: netlify(),
  vite: {
    build: {
      assetsInlineLimit: 0
    }},
});
// @ts-check
import { defineConfig } from 'astro/config';

import db from '@astrojs/db';

import netlify from '@astrojs/netlify';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [db(), icon(), mdx()],
  output: 'server',
  adapter: netlify(),
  vite: {
    build: {
      assetsInlineLimit: 0
    }},
});


// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  output: "static",
  adapter: node({
    mode: 'standalone',
  }),
});


/*"static" todo es "prerender" por defecto

a menos de que le ponga el "prerender" en "false"

y el "server" es todo generado del lado del servidor

a menos de que le ponga el "prerender" en "true". */
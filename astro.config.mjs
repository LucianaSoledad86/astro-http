// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import netlify from "@astrojs/netlify";

// import cloudflare from "@astrojs/cloudflare";
// import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  // output: "static",
  // adapter: node({
  //   mode: 'standalone',
  // }),
  // npx astro add netlify
  // adapter: cloudflare(),
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: netlify(),
});


/*"static" todo es "prerender" por defecto

a menos de que le ponga el "prerender" en "false"

y el "server" es todo generado del lado del servidor

a menos de que le ponga el "prerender" en "true". */
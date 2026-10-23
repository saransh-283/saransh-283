// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = 'https://saranshkawadkar.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.endsWith('.xml'),
    }),
    mdx(),
    icon({
      include: {
        mdi: ["*"]
      }
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  }
});

// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

const SITE_URL = 'https://saranshkawadkar.dev';

// Production config for Cloudflare Pages deployment
export default defineConfig({
  site: SITE_URL,
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.endsWith('.xml'),
    }),
    icon({
      include: {
        mdi: ["*"]
      }
    }),
    cloudflare(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
});

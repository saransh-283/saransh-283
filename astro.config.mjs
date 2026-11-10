// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = 'https://saranshkawadkar.dev';

// Local dev config (Android/Termux compatible - no Cloudflare workerd binary)
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
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});

// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), icon({
    include: {
      mdi: ["*"]
    }
  })],
  vite: {
    plugins: [tailwindcss()],
  }
});
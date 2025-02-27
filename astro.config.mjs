// @ts-check
import { defineConfig } from 'astro/config';

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://frontendfrontier.netlify.app",

  experimental: {
    responsiveImages: true,
  },

  build: {
     inlineStylesheets: 'never'
  },

  integrations: [purgecss()],
});
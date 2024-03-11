import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import path from 'path';
import url from 'url';

export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      iconDir: path.join(path.dirname(url.fileURLToPath(import.meta.url)), 'src', 'assets', 'icons'),
    }),
  ]
});

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import critters from "astro-critters";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.swatseo.net',
  output: 'static', // for github pages
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"]
    }
  }), critters(), compressor({ gzip: false, brotli: true })]
});

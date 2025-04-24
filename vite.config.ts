import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/module.ts"),
      name: "VueEasyLightbox",
      fileName: () => "vue-easy-lightbox.js",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["#imports", "vue", "#app", "@nuxt/kit"],
    },
    emptyOutDir: true,
    outDir: "dist",
  },
});

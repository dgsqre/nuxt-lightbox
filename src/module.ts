import {
  defineNuxtModule,
  createResolver,
  addComponent,
  addImportsDir,
} from "@nuxt/kit";
import { version } from "../package.json";

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "vue-easy-lightbox",
    version,
    configKey: "VueEasyLightbox",
  },
  defaults: {},
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url);

    const isDev = nuxt.options.dev;

    const componentPath = isDev
      ? resolver.resolve("runtime/vue-easy-lightbox.tsx")
      : resolver.resolve("../dist/runtime/vue-easy-lightbox.js");

    addComponent({
      name: "VueEasyLightbox",
      filePath: resolver.resolve("runtime/vue-easy-lightbox.tsx"),
    });
    addImportsDir(resolver.resolve("runtime/composables"));

    const stylePath = isDev
      ? resolver.resolve("runtime/styles/index.scss")
      : resolver.resolve("../dist/runtime/styles/index.css");

    nuxt.options.css.push(stylePath);
  },
});

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

    addComponent({
      name: "VueEasyLightbox",
      filePath: resolver.resolve("runtime/vue-easy-lightbox.tsx"),
    });

    addImportsDir(resolver.resolve("runtime/composables"));

    nuxt.options.css.push(resolver.resolve("../dist/runtime/styles/index.css"));
  },
});

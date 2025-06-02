import {
  defineNuxtModule,
  createResolver,
  addComponent,
  addImportsDir,
  addComponentsDir,
  addImports,
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

    const runtimeDir = resolver.resolve("./runtime");

    nuxt.options.build.transpile.push(runtimeDir);

    nuxt.options.css.push(resolver.resolve("./runtime/styles/index.css"));

    addComponent({
      name: "VueEasyLightbox",
      filePath: resolver.resolve("./runtime/vue-easy-lightbox"),
    });
  },
});

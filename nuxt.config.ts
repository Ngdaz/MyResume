// https://nuxt.com/docs/api/configuration/nuxt-config
// import { createResolver } from "@nuxt/kit";
// const { resolve } = createResolver(import.meta.url);
export default defineNuxtConfig({
  devtools: { enabled: true },
  // pages: true,
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  tailwindcss: {
    exposeConfig: true,
  },
  components: [
    // {
    //   prefix: 'Layout',
    //   path: resolve('./components/layouts'),
    //   global: true,
    // },
  ],
  alias: {
    "@": "./",
    baseUrl: ".",
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss",  '@invictus.codes/nuxt-vuetify', "@pinia/nuxt"],
  srcDir: "src/",
  pinia: {
    autoImports: ["defineStore"],
  },
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,
      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
    }
  },
  ssr: false,
  nitro: {
    preset: 'aws-lambda',
    serveStatic: true,
  },
  vite: {
    define: {
      "window.global": {},
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo", "@nuxtjs/tailwindcss",  '@invictus.codes/nuxt-vuetify'],
  srcDir: "src/",
  apollo: {
    clients: {
		  default: './apollo/default.ts',
    },
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
  vite: {
    define: {
      global: {},
    },
  }
});

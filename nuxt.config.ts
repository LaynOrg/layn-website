export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  runtimeConfig: {
    public: {
      logoUrl: process.env.LOGO_URL,
    },
  },
});

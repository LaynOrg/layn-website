export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  runtimeConfig: {
    public: {
      logoUrl: process.env.LOGO_URL,
      lisanslyLogoUrl: process.env.LISANSLY_LOGO_URL,
      lisanslyUrl: process.env.LISANSLY_URL,
      githubUrl: process.env.GITHUB_URL,
      hayyingUrl: process.env.HAYYING_URL,
    },
  },
});

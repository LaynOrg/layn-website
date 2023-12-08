export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      logoUrl: process.env.LOGO_URL,
      lisanslyLogoUrl: process.env.LISANSLY_LOGO_URL,
      lisanslyUrl: process.env.LISANSLY_URL,
      githubUrl: process.env.GITHUB_URL,
      donateUrl: process.env.DONATE_URL,
      discordUrl: process.env.DISCORD_URL,
      emailAddress: process.env.EMAIL_ADDRESS,
      hayyingUrl: process.env.HAYYING_URL,
    },
  },
});

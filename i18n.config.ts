export default defineI18nConfig(() => ({
  legacy: false,
  locale: "tr",
  messages: {
    tr: {
      headerLinks: ["Çözümler", "Takım", "İletişim"],
      heroHeader: {
        title: "Hayallerinizi inşa ediyoruz",
        description:
          "Çözümlerimizle hayallerinizi inşa edin veya özel ihtiyaçlarınız için bizimle iletişime geçin.",
        solutions: "Çözümleri Görün",
        contact: "İletişime Geçin",
      },
      logoTooltip: "Merhaba! Ben Bubi.",
    },
    en: {
      headerLinks: ["Solutions", "Team", "Contact"],
      heroHeader: {
        title: "We build your dreams",
        description:
          "Build your dreams with our solutions or contact us for your custom needs.",
        solutions: "See Solutions",
        contact: "Contact Us",
      },
      logoTooltip: "Hello! I'm Bubi.",
    },
  },
}));

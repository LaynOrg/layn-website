export default defineI18nConfig(() => ({
  legacy: false,
  locale: "tr",
  messages: {
    tr: {
      headerLinks: ["Çözümler", "Çözüm Ortakları", "Takım", "İletişim"],
      heroHeader: {
        title: "Hayallerinizi inşa ediyoruz",
        description:
          "Çözümlerimizle hayallerinizi inşa edin veya özel ihtiyaçlarınız için bizimle iletişime geçin.",
        solutions: "Çözümleri Görün",
        contact: "İletişime Geçin",
      },
      logoTooltip: "Merhaba! Ben Bubi.",
      solutions: {
        title: "Çözümlerimiz",
        description:
          "Layn'nın çözümleri birbirleriyle birleştirilebilir veya ayrı olarak kullanılabilir, Lego gibi. İsterseniz Layn'nın çözümlerini kullanarak bir proje oluşturun veya olan projenize istediğiniz çözümü entegre edin.",
        solutionDescriptions: [
          "Projenizi oluşturmak için Layn'ı kullanın. Layn ile isteğinize göre web veya mobil uygulaması oluşturun.",
          "Projenize lisanslama veya kimlik doğrulama eklemek istiyorsanız Lisansly'ı kullanın.",
        ],
        visit: "Ziyaret Et",
        comingSoon: "Çok Yakında",
      },
    },
    en: {
      headerLinks: ["Solutions", "Solution Partners", "Team", "Contact"],
      heroHeader: {
        title: "We build your dreams",
        description:
          "Build your dreams with our solutions or contact us for your custom needs.",
        solutions: "See Solutions",
        contact: "Contact Us",
      },
      logoTooltip: "Hello! I'm Bubi.",
      solutions: {
        title: "Our Solutions",
        description:
          "Layn's solutions can be combined or used separately, like Lego. If you want, create a project using Layn's solutions or integrate the solution you want into your existing project.",
        solutionDescriptions: [
          "Use Layn to create your project. Create a web or mobile application according to your wishes with Layn.",
          "If you want to add licensing or authentication to your project, use Lisansly.",
        ],
        visit: "Visit",
        comingSoon: "Coming Soon",
      },
    },
  },
}));

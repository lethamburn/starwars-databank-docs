const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  images: {
    domains: ["lumiere-a.akamaihd.net"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});

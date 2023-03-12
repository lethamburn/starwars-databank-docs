import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s – SWD",
    };
  },
  faviconGlyph: "🌌",
  logo: (
    <>
      <img
        src="/images/jedi_symbol.svg"
        alt="Jedi symbol"
        width="24"
        height="24"
      />
      <span style={{ marginLeft: ".5em", fontWeight: 800 }}>
        STAR WARS DATABANK
      </span>
    </>
  ),
  project: {
    link: "https://github.com/lethamburn/starwars-databank-v2",
  },
  primaryHue: 39,
  banner: {
    key: "2.0-release",
    text: (
      <a href="https://starwars-databank.vercel.app/about">
        🎉 Star Wars Databank 2.0 is released. Read more →
      </a>
    ),
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/lethamburn" target="_blank">
          lethamburn
        </a>
      </span>
    ),
  },
};

export default config;

import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="title" content="Star Wars Databank" />
      <meta property="description" content="Star Wars Databank API" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "Star Wars Database - %s ",
    };
  },
  project: {
    link: "https://github.com/lethamburn/starwars-databank-docs",
    icon: (
      <Image
        src="/images/bb8.png"
        alt="BB8 icon"
        width={35}
        height={35}
        priority
      />
    ),
  },
  logo: (
    <>
      <Image
        src="/images/jedi_symbol.svg"
        alt="Jedi symbol"
        width={24}
        height={24}
        priority
      />
      <span style={{ marginLeft: ".5em", fontWeight: 800 }}>
        STAR WARS DATABANK
      </span>
    </>
  ),
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

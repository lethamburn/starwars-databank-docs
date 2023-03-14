import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "Star Wars Database - %s ",
    };
  },
  project: {
    link: "https://github.com/lethamburn/starwars-databank-docs",
    icon: <img src="images/bb8.png" alt="BB8 icon" width="35" />,
  },
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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="noindex" />
      <meta property="og:title" content="Star Wars Databank" />
      <meta
        property="og:description"
        content="The Star Wars Databank API is a REST API based on the galatic saga Star Wars. You will have access to hundreds of characters, droids, species, locations, organizations, vehicles and more. The Star Wars Databank API is filled with the official information from the Databank."
      />
    </>
  ),
};

export default config;

import React from "react"
import {DocsThemeConfig} from "nextra-theme-docs"
import Image from "next/image"

const config: DocsThemeConfig = {
  search: {
    component: false,
  },
  head: (
    <>
      <meta
        name="google-site-verification"
        content="znqL_OsBnLSWCaL3_C4ff5ltmGiqBGFlXi7UtMIIUqw"
      />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "Star Wars Databank - API",
      defaultTitle: "Star Wars Databank - API",
      description:
        "The Star Wars Databank API is a REST API based on the galatic saga Star Wars. You will have access to hundreds of characters, droids, species, locations, organizations, vehicles and more. The Star Wars Databank API is filled with the official information from the Databank.",
      canonical: "https://starwars-databank.vercel.app/",
      openGraph: {
        images: [
          {
            url: "/images/preview.png",
            width: 800,
            height: 420,
            alt: "Star Wars Databank Preview",
          },
        ],
      },
    }
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
        src="/images/logo.png"
        alt="Star Wars Databank logo"
        width={24}
        height={24}
        priority
      />
      <span style={{marginLeft: ".5em", fontWeight: 800}}>
        STAR WARS DATABANK
      </span>
    </>
  ),
  primaryHue: 39,
  banner: {
    key: "2.5-release",
    text: (
      <a href="https://starwars-databank.vercel.app/about">
        🎉 Star Wars Databank 2.5 is released. The Mandalorian and The Bad Batch
        new info added →
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
}

export default config

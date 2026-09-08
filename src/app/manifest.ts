import type { MetadataRoute } from "next";

import { site } from "@/content/site";

/**
 * Web app manifest. Cores vêm dos tokens de globals.css: navy-900 como
 * cor de tema e steel-50 como fundo, que é o fundo real da página.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.nomeCompleto} | ${site.tagline}`,
    short_name: site.nome,
    description: site.descricaoCurta,
    start_url: "/",
    display: "standalone",
    lang: "pt-BR",
    theme_color: "#080a3a",
    background_color: "#f6f7f9",
    icons: [
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

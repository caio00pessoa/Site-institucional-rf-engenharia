import type { MetadataRoute } from "next";

import { servicos } from "@/content/servicos";
import { urlAbsoluta } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  const estaticas: MetadataRoute.Sitemap = [
    { url: urlAbsoluta("/"), priority: 1, changeFrequency: "monthly" },
    { url: urlAbsoluta("/servicos"), priority: 0.9, changeFrequency: "monthly" },
    { url: urlAbsoluta("/sobre"), priority: 0.8, changeFrequency: "yearly" },
    { url: urlAbsoluta("/contato"), priority: 0.8, changeFrequency: "yearly" },
    {
      url: urlAbsoluta("/politica-de-privacidade"),
      priority: 0.3,
      changeFrequency: "yearly",
    },
    {
      url: urlAbsoluta("/termos-de-uso"),
      priority: 0.3,
      changeFrequency: "yearly",
    },
  ];

  const paginasServico: MetadataRoute.Sitemap = servicos.map((servico) => ({
    url: urlAbsoluta(`/servicos/${servico.slug}`),
    priority: 0.9,
    changeFrequency: "monthly",
  }));

  return [...estaticas, ...paginasServico].map((entrada) => ({
    ...entrada,
    lastModified: agora,
  }));
}

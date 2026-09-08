import type { MetadataRoute } from "next";

import { pracas } from "@/content/onde-atuamos";
import { posts } from "@/content/blog";
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
      url: urlAbsoluta("/onde-atuamos"),
      priority: 0.7,
      changeFrequency: "yearly",
    },
    {
      url: urlAbsoluta("/perguntas-frequentes"),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    { url: urlAbsoluta("/clientes"), priority: 0.7, changeFrequency: "yearly" },
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

  const paginasPraca: MetadataRoute.Sitemap = pracas.map((praca) => ({
    url: urlAbsoluta(`/onde-atuamos/${praca.slug}`),
    priority: 0.6,
    changeFrequency: "yearly",
  }));

  /* O blog só entra no sitemap quando existir post publicado. */
  const paginasBlog: MetadataRoute.Sitemap = posts.length
    ? [
        { url: urlAbsoluta("/blog"), priority: 0.6, changeFrequency: "weekly" },
        ...posts.map((post) => ({
          url: urlAbsoluta(`/blog/${post.slug}`),
          priority: 0.5,
          changeFrequency: "yearly" as const,
        })),
      ]
    : [];

  return [
    ...estaticas,
    ...paginasServico,
    ...paginasPraca,
    ...paginasBlog,
  ].map((entrada) => ({ ...entrada, lastModified: agora }));
}

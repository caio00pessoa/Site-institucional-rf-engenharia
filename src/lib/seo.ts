import type { Metadata } from "next";

import { site } from "@/content/site";

export const urlAbsoluta = (caminho: string) =>
  new URL(caminho, site.url).toString();

type Opcoes = {
  titulo: string;
  descricao: string;
  caminho: string;
  /** Imagem OG específica da rota. Sem isso, herda a do layout raiz. */
  imagem?: string;
};

/**
 * Monta o Metadata de uma rota de forma uniforme.
 * Toda página passa por aqui, o que garante canonical absoluto,
 * OpenGraph e Twitter card em todas elas sem repetir configuração.
 */
export function montarMetadata({
  titulo,
  descricao,
  caminho,
  imagem,
}: Opcoes): Metadata {
  const url = urlAbsoluta(caminho);

  return {
    title: titulo,
    description: descricao,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.nomeCompleto,
      title: titulo,
      description: descricao,
      url,
      ...(imagem ? { images: [{ url: imagem }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descricao,
    },
  };
}

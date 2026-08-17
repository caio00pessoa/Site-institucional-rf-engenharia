import type { Metadata } from "next";

import { DocumentoLegal } from "@/components/blocos/documento-legal";
import { termosDeUso } from "@/content/legal";
import { montarMetadata } from "@/lib/seo";

export const metadata: Metadata = montarMetadata({
  titulo: "Termos de Uso",
  descricao:
    "Termos de uso do site institucional do Grupo RF Engenharia.",
  caminho: "/termos-de-uso",
});

export default function PaginaTermos() {
  return <DocumentoLegal documento={termosDeUso} />;
}

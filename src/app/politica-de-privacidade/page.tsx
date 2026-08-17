import type { Metadata } from "next";

import { DocumentoLegal } from "@/components/blocos/documento-legal";
import { politicaPrivacidade } from "@/content/legal";
import { montarMetadata } from "@/lib/seo";

export const metadata: Metadata = montarMetadata({
  titulo: "Política de Privacidade",
  descricao:
    "Como o Grupo RF Engenharia trata dados pessoais em relação a este site, em conformidade com a LGPD.",
  caminho: "/politica-de-privacidade",
});

export default function PaginaPolitica() {
  return <DocumentoLegal documento={politicaPrivacidade} />;
}

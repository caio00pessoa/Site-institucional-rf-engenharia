export const dynamic = "force-static";
import { readFileSync } from "node:fs";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { servicoPorSlug, servicos } from "@/content/servicos";
import { site } from "@/content/site";

/**
 * OG por serviço. Mesmo desenho da OG raiz, trocando a tagline pelo
 * nome do serviço e as normas fixas pelas normas daquele serviço.
 *
 * next/og não resolve caminho relativo de imagem, então o monograma
 * entra embutido como data URI.
 */
const monograma = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "src/app/icon.png"),
).toString("base64")}`;

export const alt = `${site.nomeCompleto}, ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return servicos.map((servico) => ({ slug: servico.slug }));
}

export default async function Imagem({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const servico = servicoPorSlug(slug);

  const titulo = servico?.heroTitulo ?? site.tagline;
  const resumo = servico?.resumo ?? site.descricaoCurta;
  const normas = servico?.normas ?? ["NR-18", "NR-35", "NBR 16325"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080A3A",
          padding: 72,
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <img src={monograma} width={84} height={84} alt="" />
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#F2A81D",
              letterSpacing: "0.16em",
            }}
          >
            GRUPO RF ENGENHARIA
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: 96,
              height: 4,
              background: "#F2A81D",
              marginBottom: 36,
            }}
          />
          <span
            style={{
              fontSize: 62,
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 940,
            }}
          >
            {titulo}
          </span>
          <span
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.55)",
              marginTop: 28,
              maxWidth: 860,
              lineHeight: 1.4,
            }}
          >
            {resumo}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 32,
            fontSize: 20,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          {normas.map((norma) => (
            <span key={norma}>{norma}</span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}

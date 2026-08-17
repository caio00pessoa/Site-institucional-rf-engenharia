import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.nomeCompleto}, ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OG desenhada só com cor e tipografia do sistema.
 * Sem fonte externa e sem foto: o acervo de imagem herdado não tem
 * nada em resolução suficiente para 1200x630.
 */
export default function Imagem() {
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
          // malha de prancha técnica
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.04em",
            }}
          >
            RF
          </span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#F2A81D",
              letterSpacing: "0.16em",
            }}
          >
            ENGENHARIA
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
              fontSize: 68,
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            {site.tagline}
          </span>
          <span
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.55)",
              marginTop: 28,
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Proteção contra queda em altura, com projeto, ensaio e ART
            registrada no CREA.
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
          <span>NR-18</span>
          <span>NR-35</span>
          <span>NBR 16325</span>
        </div>
      </div>
    ),
    size,
  );
}

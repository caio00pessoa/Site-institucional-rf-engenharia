"use client";

/**
 * Última rede de segurança: só entra em cena quando o próprio layout
 * raiz quebra, e por isso precisa renderizar <html> e <body> por conta
 * própria. Sem acesso às fontes nem ao CSS do layout, o estilo aqui é
 * inline e mínimo, com as cores do sistema escritas na mão.
 */

export default function ErroGlobal({ reset }: { reset: () => void }) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#080a3a",
          color: "#ffffff",
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <main style={{ maxWidth: "34rem", padding: "3rem 1.5rem" }}>
          <p
            style={{
              margin: 0,
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#f2a81d",
            }}
          >
            Erro inesperado
          </p>
          <h1
            style={{
              margin: "1.25rem 0 0",
              fontSize: "2rem",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Alguma coisa saiu do lugar
          </h1>
          <p
            style={{
              margin: "1.25rem 0 0",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            A página não carregou como devia. Tente de novo ou ligue para
            0800 3264 378.
          </p>

          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "2rem",
              padding: "0.875rem 1.5rem",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#f2a81d",
              color: "#080a3a",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Tentar de novo
          </button>
        </main>
      </body>
    </html>
  );
}

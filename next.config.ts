import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  // Sem isto o Turbopack sobe até o diretório home procurando lockfile.
  turbopack: { root: import.meta.dirname },

  images: {
    formats: ["image/avif", "image/webp"],
    // Matriz enxuta: menos variantes geradas, build mais rápido.
    deviceSizes: [640, 828, 1080, 1200, 1920],
  },

  /**
   * URLs do site antigo (WordPress + Elementor).
   * `permanent: true` emite 308, que o Google trata como equivalente a
   * 301 para consolidação de sinal.
   *
   * O mapa é parcial: o Wayback está fora do ar e não temos acesso ao
   * Search Console, então essas rotas vieram do container de GTM antigo.
   * Monitorar 404 nas primeiras semanas e complementar.
   */
  async redirects() {
    return [
      {
        source: "/instalacao-de-ancoragem",
        destination: "/servicos/ancoragem-predial",
        permanent: true,
      },
      {
        source: "/instalacao-de-ancoragem-:uf",
        destination: "/servicos/ancoragem-predial",
        permanent: true,
      },
      {
        source: "/instalacao-de-ancoragem/:path*",
        destination: "/servicos/ancoragem-predial",
        permanent: true,
      },
      {
        source: "/linha-de-vida/:path*",
        destination: "/servicos/linha-de-vida",
        permanent: true,
      },
      {
        source: "/construcao-metalica/:path*",
        destination: "/servicos/construcao-metalica",
        permanent: true,
      },
      { source: "/a-empresa", destination: "/sobre", permanent: true },
      { source: "/sobre-nos", destination: "/sobre", permanent: true },
      // Resíduo de WordPress
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/category/:path*", destination: "/", permanent: true },
      { source: "/tag/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

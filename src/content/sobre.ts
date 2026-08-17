/** Conteúdo da rota /sobre. */

export const sobre = {
  hero: {
    eyebrow: "A Empresa",
    titulo: "Grupo RF Engenharia",
    texto: [
      "Somos uma empresa atuante no mercado de projetos, consultoria, fabricação e instalação de sistemas de Segurança do Trabalho, especialmente para prevenção contra queda em altura em edifícios e construção civil, bem como locação de máquinas e equipamentos.",
      "O grupo reúne três empresas que cobrem o ciclo inteiro: quem projeta e assina a responsabilidade técnica, quem fabrica os componentes e quem loca os equipamentos de acesso.",
    ],
  },

  estrutura: {
    eyebrow: "Estrutura",
    titulo: "Onde as coisas são feitas",
    texto:
      "Galpão, estoque, setor de manutenção e oficina de inspeção próprios. Nada do que é crítico depende de terceiro.",
    imagens: [
      {
        src: "/imagens/estrutura/unidade-rf-fachada.webp",
        alt: "Fachada da unidade da RF",
        legenda: "Unidade",
      },
      {
        src: "/imagens/estrutura/galpao-rf-locacao.webp",
        alt: "Galpão com equipamentos",
        legenda: "Galpão",
      },
      {
        src: "/imagens/estrutura/estoque-organizado.webp",
        alt: "Estoque organizado de componentes",
        legenda: "Estoque",
      },
      {
        src: "/imagens/estrutura/setor-manutencao.webp",
        alt: "Setor de manutenção",
        legenda: "Manutenção",
      },
      {
        src: "/imagens/estrutura/oficina-inspecao.webp",
        alt: "Oficina de inspeção de equipamentos",
        legenda: "Inspeção",
      },
      {
        src: "/imagens/estrutura/patio-de-carga.webp",
        alt: "Pátio de carga",
        legenda: "Pátio de carga",
      },
    ],
  },
} as const;

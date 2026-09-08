/** Conteúdo da home. */

export const home = {
  hero: {
    eyebrow: "Grupo RF Engenharia",
    titulo: "Ninguém deveria trabalhar em altura sem um ponto seguro.",
    subtitulo:
      "Projetamos, fabricamos e instalamos sistemas de proteção contra queda em altura. Cada ponto que entregamos passa por ensaio e sai com ART registrada no CREA.",
    /*
      Foto principal com contexto de obra: mostra escala, equipe e uso
      real do sistema. O olhal isolado comunicava o produto, mas não a
      operação.
    */
    imagem: {
      src: "/imagens/servicos/linha-de-vida.jpg",
      alt: "Equipe da RF Engenharia em obra, com cinto paraquedista conectado ao sistema de linha de vida",
      legenda: "Equipe em obra, sistema de linha de vida",
      norma: "NR-35",
    },
    whatsappMensagem: "Olá! Gostaria de solicitar um orçamento.",
  },

  /*
    Prova. Substitui as duas seções vizinhas que antes faziam o mesmo
    papel: "Por que a RF" (só texto) e "Estrutura própria" (só fotos).
    A galeria completa das 6 fotos de estrutura fica em /sobre.

    Regra das legendas: descrevem o que a foto REALMENTE mostra, e não
    a afirmação que ela apoia. Não legendar galpão como ensaio.
  */
  prova: {
    eyebrow: "Por que a RF",
    titulo: "Um só responsável, do projeto ao laudo",
    texto:
      "Projeto, fabricação e instalação saem de dentro de casa. É o que permite responder por prazo, por qualidade e pela documentação que acompanha a entrega.",

    comFoto: [
      {
        titulo: "Fabricação própria",
        texto:
          "Somos fabricantes e distribuidores do olhal de ancoragem, com material a pronta entrega.",
        imagem: {
          src: "/imagens/estrutura/galpao-rf-locacao.webp",
          alt: "Galpão da RF com equipamentos e componentes organizados",
          legenda: "Galpão",
        },
      },
      {
        titulo: "Equipe própria",
        texto:
          "A instalação não é terceirizada. Quem projeta responde por quem executa.",
        imagem: {
          src: "/imagens/estrutura/setor-manutencao.webp",
          alt: "Setor de manutenção da RF Engenharia",
          legenda: "Setor de manutenção",
        },
      },
      {
        titulo: "Ensaio em 100% dos pontos",
        texto:
          "Teste de arrancamento em cada ponto instalado, e não por amostragem.",
        imagem: {
          src: "/imagens/estrutura/oficina-inspecao.webp",
          alt: "Oficina de inspeção de equipamentos da RF Engenharia",
          legenda: "Oficina de inspeção",
        },
      },
    ],

    // [CONFIRMAR] pedir foto do ensaio de arrancamento, do lacre numerado
    // e de um trecho de laudo, para estes três também virarem prova visual.
    semFoto: [
      {
        titulo: "Projeto próprio",
        texto:
          "O dimensionamento sai de dentro de casa, assinado por engenheiro registrado no CREA.",
      },
      {
        titulo: "Documentação completa",
        texto:
          "Laudo técnico detalhado e ART registrada no CREA acompanham a entrega.",
      },
      {
        titulo: "Garantia de 5 anos",
        texto: "O material instalado tem cinco anos de garantia.",
      },
    ],
  },

  ctaFinal: {
    titulo: "Precisa de um orçamento técnico?",
    texto:
      "Fale com nossa equipe e receba uma avaliação para a sua edificação ou obra.",
    whatsappMensagem: "Olá! Gostaria de solicitar um orçamento.",
  },
} as const;

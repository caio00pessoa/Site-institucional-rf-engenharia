/**
 * SERVIÇOS - conteúdo das rotas /servicos e /servicos/[slug].
 * ------------------------------------------------------------------
 * A copy dos quatro serviços foi recuperada do site antigo. O detalhe
 * de Ancoragem Predial (processo, specs, aplicações, FAQ) veio do
 * print de página inteira e é o mais completo dos quatro.
 *
 * Respostas de FAQ marcadas [CONFIRMAR] foram redigidas a partir das
 * especificações recuperadas, mas o texto original se perdeu junto
 * com o site. Validar com o responsável técnico antes de publicar.
 * ------------------------------------------------------------------
 */

export type Aplicacao = {
  titulo: string;
  texto: string;
};

export type Etapa = {
  titulo: string;
  texto: string;
};

export type Spec = {
  rotulo: string;
  valor: string;
};

export type Pergunta = {
  pergunta: string;
  resposta: string;
};

export type Servico = {
  slug: string;
  nome: string;
  /** Título curto para cards e navegação. */
  nomeCurto: string;
  tituloSeo: string;
  descricaoSeo: string;
  /** Frase de uma linha usada no card do hub. */
  resumo: string;
  heroTitulo: string;
  heroTexto: string[];
  imagem: { src: string; alt: string; width: number; height: number };
  beneficios: string[];
  aplicacoes: Aplicacao[];
  processo: Etapa[];
  specs: Spec[];
  normas: string[];
  faq: Pergunta[];
  whatsappMensagem: string;
};

export const servicos: Servico[] = [
  {
    slug: "ancoragem-predial",
    nome: "Ancoragem Predial",
    nomeCurto: "Ancoragem Predial",
    tituloSeo: "Ancoragem Predial: Projeto, Instalação e ART",
    descricaoSeo:
      "Instalação de pontos de ancoragem predial com projeto, material próprio, teste de arrancamento em 100% dos pontos e ART registrada no CREA. Solicite um orçamento.",
    resumo:
      "Ponto seguro na cobertura para fixação de balancins, cadeirinhas e do sistema de proteção individual contra quedas.",
    heroTitulo: "Instalação de Ancoragem Predial",
    heroTexto: [
      "O sistema de ancoragem predial é utilizado geralmente na cobertura de edifícios como um ponto seguro para fixação de equipamentos para fachadas (balancins, cadeirinhas, etc), bem como para o SPIQ (Sistema de Proteção Individual contra Quedas).",
      "É o dispositivo ideal para realizar trabalho em altura com a máxima segurança. A RF Engenharia elabora o projeto, fabricação, fornecimento e instalação do sistema de ancoragem.",
    ],
    imagem: {
      src: "/imagens/servicos/ancoragem-predial.jpg",
      alt: "Olhal de ancoragem em aço inox gravado RF Engenharia, com lacre numerado de inspeção, instalado em laje de cobertura",
      width: 490,
      height: 323,
    },
    beneficios: [
      "Empresa especializada em trabalho em altura",
      "Somos fabricantes e distribuidores do olhal de ancoragem",
      "Todo o material a pronta entrega",
      "Empresa e responsável técnico registrados no CREA",
      "Equipe própria de instalação, sem terceirização",
      "Teste de arrancamento em 100% dos pontos instalados",
      "Laudo técnico, ART e projeto inclusos",
      "Tratamento de impermeabilização quando necessário",
      "Garantia de 5 anos do material",
    ],
    aplicacoes: [
      {
        titulo: "Montagem de balancins",
        texto:
          "Permite a montagem segura de andaimes suspensos, atendendo às exigências da NR-18.",
      },
      {
        titulo: "Cadeirinha ou rapel",
        texto:
          "Garante segurança para os trabalhadores que farão serviços suspensos por cordas ou cabo de aço.",
      },
      {
        titulo: "Linha de vida",
        texto:
          "Permite a instalação de sistema de proteção coletiva, atendendo às exigências da NR-35.",
      },
      {
        titulo: "Resgate pelo Corpo de Bombeiros",
        texto:
          "Garante que, em caso de emergência, o Corpo de Bombeiros possa fazer um resgate rápido e eficiente, podendo salvar vidas. Atende às normas de Resgate e Salvamento.",
      },
    ],
    processo: [
      {
        titulo: "Projeto",
        texto:
          "Elaboramos um projeto adequado para a realidade da edificação, de modo a atender às necessidades.",
      },
      {
        titulo: "Material",
        texto:
          "Fornecemos todo o material necessário, como olhal de ancoragem, barra de ancoragem, chumbador químico e impermeabilização.",
      },
      {
        titulo: "Instalação",
        texto:
          "Possuímos equipe própria e especializada para realizar a instalação do sistema de ancoragem com a mais perfeita técnica.",
      },
      {
        titulo: "Impermeabilização",
        texto:
          "Realizamos o tratamento da impermeabilização, quando necessário, para garantir que não haverá infiltração.",
      },
      {
        titulo: "Teste de arrancamento",
        texto:
          "Realizamos teste de arrancamento estático em 100% dos pontos instalados, de modo a garantir a segurança dos trabalhadores.",
      },
      {
        titulo: "Laudo técnico e ART",
        texto:
          "Elaboramos um laudo técnico detalhado da instalação, com garantia. Fornecemos Anotação de Responsabilidade Técnica registrada no CREA.",
      },
    ],
    specs: [
      { rotulo: "Tipo", valor: "Ancoragem tipo A1, padrão NBR 16325-1" },
      { rotulo: "Material", valor: "Aço inox 304 ou 316" },
      { rotulo: "Modelos", valor: "1.500 kgf e 2.500 kgf" },
      {
        rotulo: "Carga de ruptura",
        valor: "Superior a 7.850 kgf, comprovada por ensaio de tração",
      },
      {
        rotulo: "Certificação",
        valor: "Certificado de resistência à corrosão emitido por laboratório",
      },
      {
        rotulo: "Documentação",
        valor: "ART de fabricação e certificado de composição química",
      },
      { rotulo: "Garantia", valor: "5 anos do material" },
    ],
    normas: ["NR-18", "NR-35", "NBR 16325", "NR 10/2015 CBMDF"],
    faq: [
      {
        pergunta: "O sistema de ancoragem de vocês segue as exigências das normas?",
        resposta:
          "O Sistema de Ancoragem Predial da RF Engenharia está de acordo com as exigências das normas NR18, NR35, NBR 16325 e NR 10/2015-CBMDF.",
      },
      {
        pergunta: "O uso da ancoragem é obrigatório?",
        resposta:
          "Sim. A NR-35 exige que todo trabalho em altura acima de 2 metros conte com sistema de proteção contra quedas, e a NR-18 trata especificamente das condições de segurança na construção. Sem pontos de ancoragem certificados não é possível montar balancim, executar serviço por cadeirinha ou instalar linha de vida em conformidade. [CONFIRMAR]",
      },
      {
        pergunta: "Como deve ser o sistema de ancoragem?",
        resposta:
          "O sistema deve seguir a NBR 16325-1, que classifica os dispositivos de ancoragem por tipo. Trabalhamos com ancoragem tipo A1, em aço inox 304 ou 316, nos modelos de 1.500 kgf e 2.500 kgf, com carga de ruptura superior a 7.850 kgf comprovada por ensaio de tração em laboratório. O dimensionamento e a quantidade de pontos saem do projeto elaborado para cada edificação. [CONFIRMAR]",
      },
      {
        pergunta: "Além do olhal, qual outro material é utilizado?",
        resposta:
          "Barra de ancoragem, chumbador químico e material de impermeabilização. Fornecemos todo o material necessário para a instalação. [CONFIRMAR]",
      },
      {
        pergunta: "É realizada uma avaliação prévia à instalação?",
        resposta:
          "Sim. Antes da instalação elaboramos um projeto adequado à realidade da edificação, que define os locais, a quantidade e o tipo de ponto a ser instalado. [CONFIRMAR]",
      },
      {
        pergunta: "Quantos pontos são necessários em cada prédio?",
        resposta:
          "Depende da geometria da cobertura, da altura, do tipo de serviço previsto para a fachada e do equipamento que será fixado. A quantidade é definida no projeto, não existe número fixo. [CONFIRMAR]",
      },
      {
        pergunta:
          "Como se garante que o dispositivo está bem instalado? É realizado algum teste?",
        resposta:
          "Sim. Realizamos teste de arrancamento estático em 100% dos pontos instalados, e não apenas por amostragem. O resultado é registrado no laudo técnico que acompanha a entrega, junto com a ART registrada no CREA.",
      },
      {
        pergunta: "Qual a periodicidade de manutenção?",
        resposta:
          "O sistema deve ser inspecionado periodicamente por profissional habilitado, e o material tem garantia de 5 anos. A periodicidade exata é definida no laudo técnico de cada instalação. [CONFIRMAR]",
      },
      {
        pergunta:
          "É necessário realizar impermeabilização na instalação de sistema de ancoragem?",
        resposta:
          "Quando a instalação perfura uma laje impermeabilizada, sim. Realizamos o tratamento da impermeabilização para garantir que não haverá infiltração, e isso já faz parte do nosso escopo de instalação.",
      },
      {
        pergunta: "Como escolher o produto ideal para um edifício?",
        resposta:
          "A escolha entre os modelos de 1.500 kgf e 2.500 kgf, e entre aço inox 304 e 316, depende da carga prevista, da exposição do ponto e do ambiente. Nossa equipe técnica avalia a edificação e indica a especificação correta no projeto. [CONFIRMAR]",
      },
    ],
    whatsappMensagem:
      "Olá! Gostaria de um orçamento de instalação de ancoragem predial.",
  },

  {
    slug: "linha-de-vida",
    nome: "Sistema de Linha de Vida",
    nomeCurto: "Linha de Vida",
    tituloSeo: "Sistema de Linha de Vida: Projeto, Fabricação e Instalação",
    descricaoSeo:
      "Projetamos, fabricamos e instalamos sistemas de linha de vida para edifícios, galpões, indústrias, hospitais e aeroportos, em conformidade com a NR-35 e com ART.",
    resumo:
      "Proteção coletiva contra queda em altura para edifícios, galpões, indústrias, hospitais e aeroportos.",
    heroTitulo: "Sistema de Linha de Vida",
    heroTexto: [
      "Somos especialistas em sistemas de prevenção contra queda em altura. Projetamos, fabricamos e instalamos os sistemas de linha de vida para edifícios, galpões, indústrias, hospitais e até aeroportos.",
      "Nossa especialidade é proteger a vida dos colaboradores da sua empresa.",
    ],
    imagem: {
      src: "/imagens/servicos/linha-de-vida.jpg",
      alt: "Trabalhador com cinto paraquedista conectado a sistema de linha de vida em canteiro de obras",
      width: 500,
      height: 357,
    },
    beneficios: [
      "Projeto, fabricação e instalação com um só fornecedor",
      "Equipe própria e especializada em trabalho em altura",
      "Conformidade com a NR-35",
      "ART registrada no CREA",
      "Laudo técnico detalhado da instalação",
      "Atendimento em todo o Brasil",
    ],
    aplicacoes: [
      {
        titulo: "Edifícios",
        texto:
          "Proteção coletiva em coberturas, fachadas e áreas técnicas de edificações residenciais e comerciais.",
      },
      {
        titulo: "Galpões e indústrias",
        texto:
          "Sistemas para telhados e passarelas, permitindo manutenção segura de estruturas e equipamentos.",
      },
      {
        titulo: "Hospitais",
        texto:
          "Instalação em ambientes com operação contínua, planejada para não interromper o funcionamento.",
      },
      {
        titulo: "Aeroportos",
        texto:
          "Sistemas para estruturas de grande vão e áreas de manutenção, atendendo a requisitos operacionais específicos.",
      },
    ],
    processo: [
      {
        titulo: "Levantamento",
        texto:
          "Avaliamos a estrutura, o tipo de serviço a ser executado e as rotas de circulação em altura.",
      },
      {
        titulo: "Projeto",
        texto:
          "Dimensionamos o sistema, os pontos de fixação e os componentes conforme a NR-35 e as normas aplicáveis.",
      },
      {
        titulo: "Fabricação",
        texto:
          "Produzimos os componentes do sistema, o que reduz prazo e mantém o controle de qualidade em casa.",
      },
      {
        titulo: "Instalação",
        texto:
          "Equipe própria executa a instalação, sem terceirizar as etapas críticas do serviço.",
      },
      {
        titulo: "Laudo e ART",
        texto:
          "Entregamos laudo técnico da instalação e Anotação de Responsabilidade Técnica registrada no CREA.",
      },
    ],
    specs: [],
    normas: ["NR-35", "NR-18", "NBR 16325"],
    faq: [
      {
        pergunta: "Para que serve o sistema de linha de vida?",
        resposta:
          "É um sistema de proteção coletiva contra quedas que permite ao trabalhador se deslocar em altura mantendo-se sempre conectado. Atende às exigências da NR-35 para trabalho em altura.",
      },
      {
        pergunta: "Vocês fabricam ou só instalam?",
        resposta:
          "Fazemos as duas coisas. Projetamos, fabricamos e instalamos o sistema, o que significa um só responsável do projeto até a entrega do laudo.",
      },
      {
        pergunta: "O serviço inclui ART?",
        resposta:
          "Sim. A instalação é acompanhada de laudo técnico e de Anotação de Responsabilidade Técnica registrada no CREA, assinada pelo nosso responsável técnico.",
      },
      {
        pergunta: "Atendem fora do Distrito Federal?",
        resposta:
          "Sim. Já atendemos edifícios em todo o Brasil, com estrutura de atendimento também em Goiânia e Belo Horizonte. [CONFIRMAR]",
      },
    ],
    whatsappMensagem:
      "Olá! Gostaria de um orçamento de sistema de linha de vida.",
  },

  {
    slug: "projetos-seguranca-trabalho",
    nome: "Projetos de Segurança do Trabalho para Construção Civil",
    nomeCurto: "Projetos de Segurança",
    tituloSeo: "Projetos de Segurança do Trabalho para Construção Civil",
    descricaoSeo:
      "Projetos de segurança adaptados para a sua obra: linha de vida, bandejas, guarda-corpo, proteção de shafts, além de projeto e consultoria de montagem de gruas, andaimes e balancins.",
    resumo:
      "Projetos e consultoria de segurança sob medida para a sua obra, do guarda-corpo à montagem de gruas.",
    heroTitulo: "Projetos de Segurança do Trabalho",
    heroTexto: [
      "Elaboramos projetos de segurança adaptados para sua obra, tais como linha de vida, bandejas, guarda-corpo, proteção de shafts, entre outros.",
      "Elaboramos também projetos e consultoria de montagem de equipamentos como gruas, andaimes, balancins, estruturas especiais e muito mais.",
    ],
    imagem: {
      src: "/imagens/servicos/projetos-seguranca.jpg",
      alt: "Detalhe de cabo de aço de linha de vida com mosquetão em obra",
      width: 500,
      height: 336,
    },
    beneficios: [
      "Projeto adaptado à realidade de cada obra",
      "Responsável técnico com doutorado em projetos de segurança do trabalho",
      "Consultoria de montagem de equipamentos",
      "ART registrada no CREA",
      "3.600 projetos de segurança já elaborados",
    ],
    aplicacoes: [
      {
        titulo: "Proteção periférica",
        texto:
          "Guarda-corpo, bandejas de proteção e fechamento de perímetro conforme a NR-18.",
      },
      {
        titulo: "Proteção de shafts e aberturas",
        texto:
          "Fechamento e sinalização de vãos, poços de elevador e aberturas de laje.",
      },
      {
        titulo: "Montagem de equipamentos",
        texto:
          "Projeto e consultoria para montagem de gruas, andaimes, balancins e estruturas especiais.",
      },
      {
        titulo: "Sistemas contra quedas",
        texto:
          "Linha de vida e pontos de ancoragem integrados ao planejamento da obra.",
      },
    ],
    processo: [
      {
        titulo: "Diagnóstico",
        texto:
          "Analisamos o cronograma da obra, os métodos construtivos e os riscos de cada fase.",
      },
      {
        titulo: "Projeto",
        texto:
          "Desenvolvemos as soluções de proteção coletiva e individual adequadas a cada etapa.",
      },
      {
        titulo: "Memorial e ART",
        texto:
          "Entregamos memorial descritivo, detalhamento e Anotação de Responsabilidade Técnica.",
      },
      {
        titulo: "Acompanhamento",
        texto:
          "Prestamos consultoria durante a execução para garantir que o projeto seja seguido em campo.",
      },
    ],
    specs: [],
    normas: ["NR-18", "NR-35", "NR-12"],
    faq: [
      {
        pergunta: "Que tipos de projeto vocês elaboram?",
        resposta:
          "Linha de vida, bandejas, guarda-corpo, proteção de shafts, entre outros, além de projetos e consultoria de montagem de gruas, andaimes, balancins e estruturas especiais.",
      },
      {
        pergunta: "O projeto vem com ART?",
        resposta:
          "Sim. Todos os projetos são acompanhados de Anotação de Responsabilidade Técnica registrada no CREA.",
      },
      {
        pergunta: "Vocês acompanham a execução da obra?",
        resposta:
          "Prestamos consultoria durante a execução para garantir que as soluções projetadas sejam aplicadas corretamente em campo. [CONFIRMAR]",
      },
    ],
    whatsappMensagem:
      "Olá! Gostaria de falar sobre um projeto de segurança do trabalho.",
  },

  {
    slug: "construcao-metalica",
    nome: "Construção Metálica",
    nomeCurto: "Construção Metálica",
    tituloSeo: "Construção Metálica: Projeto e Fabricação de Estruturas",
    descricaoSeo:
      "Projeto, fabricação e montagem de estruturas metálicas: coberturas, galpões, escadas marinheiro, passarelas de acesso e estruturas especiais.",
    resumo:
      "Projeto e fabricação de coberturas, galpões, escadas marinheiro e passarelas de acesso.",
    heroTitulo: "Construção Metálica",
    heroTexto: [
      "A RF Engenharia possui equipe especializada e estrutura para desenvolver projetos de construção e fabricação metálica, tais como coberturas, galpões, além da fabricação de escadas marinheiro, passarelas de acesso e muito mais.",
    ],
    imagem: {
      src: "/imagens/servicos/construcao-metalica.jpg",
      alt: "Estrutura de cobertura metálica em treliça durante montagem em obra",
      width: 500,
      height: 282,
    },
    beneficios: [
      "Projeto e fabricação com equipe própria",
      "Estrutura de oficina e galpão próprios",
      "Responsabilidade técnica de engenheiro mecânico",
      "Integração com os sistemas de proteção contra quedas",
    ],
    aplicacoes: [
      {
        titulo: "Coberturas",
        texto:
          "Projeto e fabricação de coberturas metálicas para edificações e áreas industriais.",
      },
      {
        titulo: "Galpões",
        texto:
          "Estruturas completas em aço para uso industrial, logístico e comercial.",
      },
      {
        titulo: "Escadas marinheiro",
        texto:
          "Fabricação de escadas de acesso vertical, com guarda-corpo e proteção contra quedas.",
      },
      {
        titulo: "Passarelas de acesso",
        texto:
          "Passarelas e plataformas para circulação segura em coberturas e áreas técnicas.",
      },
    ],
    processo: [
      {
        titulo: "Projeto",
        texto:
          "Dimensionamento estrutural e detalhamento de fabricação da peça ou do conjunto.",
      },
      {
        titulo: "Fabricação",
        texto:
          "Produção em oficina própria, com controle de qualidade em cada etapa.",
      },
      {
        titulo: "Montagem",
        texto:
          "Montagem em campo por equipe especializada em trabalho em altura.",
      },
      {
        titulo: "Entrega técnica",
        texto: "Documentação da estrutura e ART registrada no CREA.",
      },
    ],
    specs: [],
    normas: ["NBR 8800", "NR-18", "NR-35"],
    faq: [
      {
        pergunta: "Vocês fazem o projeto e a fabricação?",
        resposta:
          "Sim. Temos equipe especializada e estrutura própria para desenvolver o projeto, fabricar e montar a estrutura metálica.",
      },
      {
        pergunta: "Que tipo de estrutura vocês produzem?",
        resposta:
          "Coberturas, galpões, escadas marinheiro, passarelas de acesso e estruturas especiais sob medida.",
      },
    ],
    whatsappMensagem:
      "Olá! Gostaria de um orçamento de construção metálica.",
  },
];

export const servicoPorSlug = (slug: string): Servico | undefined =>
  servicos.find((servico) => servico.slug === slug);

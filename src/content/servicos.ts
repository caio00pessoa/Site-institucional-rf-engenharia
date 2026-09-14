/**
 * SERVIÇOS - conteúdo das rotas /servicos e /servicos/[slug].
 * ------------------------------------------------------------------
 * A copy de ancoragem, linha de vida, projetos de segurança e
 * construção metálica foi recuperada do site antigo. O detalhe de
 * Ancoragem Predial (processo, specs, aplicações, FAQ) veio do print
 * de página inteira e é o mais completo de todos.
 *
 * Locação de balancim e inspeção e manutenção entraram depois: a copy
 * veio das LPs em Astro, que já estão publicadas e aprovadas pelo
 * cliente. De propósito ficaram de fora de balancim o frete, que é
 * operação terceirizada, e o material da estrutura, porque a frota não
 * é toda do mesmo material.
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

const servicosOriginais: Servico[] = [
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
      "Somos fabricantes e distribuidores de ancoragem predial para todo o Brasil. Elaboramos o projeto, fornecemos o material, executamos a instalação com equipe própria, realizamos todos os testes e emitimos databook completo com ART e todos os certificados.",
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
          "Oferece pontos de fixação para os sistemas dos trabalhadores que farão serviços suspensos por cordas ou cabo de aço.",
      },
      {
        titulo: "Linha de vida",
        texto:
          "Permite a instalação de sistema de ancoragem, atendendo às exigências da NR-35.",
      },
      {
        titulo: "Resgate pelo Corpo de Bombeiros",
        texto:
          "Pode integrar soluções de acesso e resgate, conforme avaliação, projeto e requisitos aplicáveis à edificação.",
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
          "Realizamos o tratamento da impermeabilização, quando necessário, conforme as condições da cobertura e o escopo contratado.",
      },
      {
        titulo: "Teste de arrancamento",
        texto:
          "Realizamos teste de arrancamento estático em 100% dos pontos instalados, de modo a verificar o desempenho da instalação conforme o procedimento de ensaio.",
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
          "Quando a instalação perfura uma laje impermeabilizada, sim. Realizamos o tratamento da impermeabilização conforme as condições da cobertura e o escopo contratado, e isso já faz parte do nosso escopo de instalação.",
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
          "É um sistema de ancoragem contra quedas que permite ao trabalhador se deslocar em altura mantendo-se sempre conectado. Atende às exigências da NR-35 para trabalho em altura.",
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
    slug: "locacao-de-balancim",
    nome: "Locação de Balancim Elétrico",
    nomeCurto: "Locação de Balancim",
    tituloSeo: "Locação de Balancim Elétrico com Projeto, Montagem e ART",
    descricaoSeo:
      "Locação de balancim elétrico, o andaime suspenso, com equipamento 100% revisado, montagem por equipe própria, projeto de montagem e ART registrada no CREA. Atende NR-18 e NR-35.",
    resumo:
      "Andaime suspenso para serviço de fachada, com equipamento revisado, montagem própria e documentação completa.",
    heroTitulo: "Locação de Balancim Elétrico",
    heroTexto: [
      "Sua obra exige segurança e nós entregamos o problema resolvido. Solução completa de ponta a ponta: desde o projeto técnico com emissão de ART, até a locação do equipamento 100% revisado e a montagem especializada.",
      "Você precisa de balancim na sua obra, mas o que garante o seu prazo e a sua segurança é quem está por trás do equipamento. A RF entrega a solução completa do projeto à desmontagem, sem surpresas no meio do caminho.",
    ],
    imagem: {
      src: "/imagens/servicos/locacao-de-balancim.webp",
      alt: "Trabalhador de capacete operando balancim elétrico suspenso na fachada de um edifício em obra",
      width: 768,
      height: 512,
    },
    beneficios: [
      "Balancins motorizados de alta performance, 100% revisados e testados antes de saírem do pátio",
      "Montagem, manutenção preventiva, suporte técnico e desmontagem por equipe interna certificada",
      "Projeto de montagem, laudo técnico, manuais do equipamento e certificados de inspeção antes de a obra começar",
      "ART emitida e registrada por engenheiro responsável no CREA",
      "Capacitação e instrução dos operadores para a operação segura do equipamento no canteiro",
    ],
    aplicacoes: [
      {
        titulo: "Serviços de fachada",
        texto:
          "Acesso à fachada ao longo de toda a altura do edifício, com plataforma suspensa por cabos a partir da cobertura.",
      },
      {
        titulo: "Pintura e reboco",
        texto:
          "Frentes de revestimento e pintura externa que exigem deslocamento vertical contínuo da equipe.",
      },
      {
        titulo: "Limpeza técnica e vidros",
        texto:
          "Limpeza de fachada, vidros e esquadrias em edifícios comerciais e residenciais em operação.",
      },
      {
        titulo: "Manutenção predial",
        texto:
          "Reparos, instalação de equipamentos de ar condicionado e manutenção periódica da envoltória do prédio.",
      },
    ],
    processo: [
      {
        titulo: "Projeto e ART",
        texto:
          "Elaboramos o projeto de montagem do equipamento na edificação e emitimos a Anotação de Responsabilidade Técnica no CREA.",
      },
      {
        titulo: "Revisão do equipamento",
        texto:
          "O balancim passa por revisão e teste no nosso setor de manutenção antes de sair do pátio para a obra.",
      },
      {
        titulo: "Montagem",
        texto:
          "Equipe própria de montadores certificados executa a montagem no canteiro, sem terceirizar a etapa crítica.",
      },
      {
        titulo: "Capacitação",
        texto:
          "Capacitamos os operadores que vão usar o equipamento no canteiro.",
      },
      {
        titulo: "Suporte durante a locação",
        texto:
          "Manutenção preventiva e suporte técnico enquanto o equipamento estiver na obra.",
      },
      {
        titulo: "Desmontagem",
        texto:
          "A mesma equipe que montou faz a desmontagem e a retirada do equipamento ao fim do serviço.",
      },
    ],
    specs: [
      { rotulo: "Capacidade de carga", valor: "500 kg" },
      { rotulo: "Limite de pavimentos", valor: "Até 30 andares" },
      { rotulo: "Sistema de tração", valor: "Eletromecânico trifásico" },
      { rotulo: "Velocidade de subida", valor: "9 metros por minuto" },
      { rotulo: "Sistema antiqueda", valor: "Block-Stop" },
      { rotulo: "Nivelamento", valor: "Sensores de nivelamento da plataforma" },
      { rotulo: "Sinalização", valor: "Alarme sonoro de operação" },
      { rotulo: "Quadro elétrico", valor: "Blindado, grau de proteção IP65" },
    ],
    normas: ["NR-18", "NR-35"],
    faq: [
      {
        pergunta: "A locação inclui a ART e o projeto?",
        resposta:
          "Sim. Todas as nossas locações acompanham a Anotação de Responsabilidade Técnica de instalação e o projeto de montagem detalhado, atendendo plenamente à NR-18.",
      },
      {
        pergunta: "A RF fornece o treinamento NR-35?",
        resposta:
          "Sim. Temos centro de treinamento próprio e também podemos realizar a capacitação in loco na sua obra, certificando os operadores conforme as exigências legais.",
      },
      {
        pergunta: "Qual o tempo mínimo de locação?",
        resposta:
          "Trabalhamos com contratos flexíveis, com períodos mínimos de 30 dias, adequando-se ao cronograma da sua fachada ou manutenção.",
      },
      {
        pergunta: "Vocês realizam a montagem e a desmontagem?",
        resposta:
          "Sim. Nossa equipe própria de montadores certificados realiza toda a logística, montagem e desmontagem do equipamento com segurança e rapidez.",
      },
    ],
    whatsappMensagem:
      "Olá! Gostaria de um orçamento de locação de balancim elétrico.",
  },

  {
    slug: "inspecao-e-manutencao",
    nome: "Inspeção e Manutenção de Sistemas de Proteção",
    nomeCurto: "Inspeção e Manutenção",
    tituloSeo: "Inspeção e Manutenção de Ancoragem e Linha de Vida",
    descricaoSeo:
      "Inspeção periódica de pontos de ancoragem, linha de vida e equipamentos de acesso, com oficina própria, ensaio dos componentes, laudo técnico e ART no CREA.",
    resumo:
      "Inspeção periódica do sistema instalado, com ensaio dos componentes, laudo técnico e ART.",
    heroTitulo: "Inspeção e Manutenção de Sistemas",
    heroTexto: [
      "O sistema instalado continua exigindo acompanhamento depois da entrega. As normas de trabalho em altura pedem inspeção periódica por profissional habilitado, e a periodicidade de cada instalação é definida no laudo técnico.",
      "A oficina de inspeção fica dentro da nossa estrutura, com bancadas dedicadas ao ensaio dos componentes. O equipamento só é liberado para uso depois de passar por lá.",
    ],
    imagem: {
      src: "/imagens/estrutura/oficina-inspecao.webp",
      alt: "Oficina de inspeção de equipamentos da RF Engenharia, com bancadas de ensaio de componentes",
      width: 1200,
      height: 800,
    },
    beneficios: [
      "Oficina de inspeção própria, com bancadas dedicadas ao ensaio dos componentes",
      "Setor de manutenção próprio, onde guinchos e motores são revisados e testados",
      "Equipe técnica própria, sem terceirização da etapa crítica",
      "Laudo técnico da inspeção, com registro do que foi verificado",
      "ART registrada no CREA",
      "Garantia de 5 anos do material de ancoragem fornecido pela RF",
    ],
    aplicacoes: [
      {
        titulo: "Pontos de ancoragem",
        texto:
          "Verificação dos pontos instalados na cobertura, que sustentam balancim, cadeirinha e o sistema de proteção individual.",
      },
      {
        titulo: "Linha de vida",
        texto:
          "Inspeção do sistema de ancoragem e dos seus componentes de fixação e deslocamento.",
      },
      {
        titulo: "Equipamentos de acesso",
        texto:
          "Guinchos e motores desmontados, revisados e testados por equipe interna antes de voltarem para o estoque.",
      },
      {
        titulo: "Componentes de SPIQ",
        texto:
          "Ensaio em bancada dos componentes do Sistema de Proteção Individual contra Quedas antes da liberação para uso.",
      },
    ],
    processo: [
      {
        titulo: "Levantamento",
        texto:
          "Identificamos o sistema instalado, os pontos existentes e a documentação que acompanha a instalação.",
      },
      {
        titulo: "Inspeção e ensaio",
        texto:
          "Verificamos os componentes e realizamos o ensaio em bancada na nossa oficina de inspeção.",
      },
      {
        titulo: "Manutenção",
        texto:
          "Componentes que precisam de reparo passam pelo setor de manutenção antes de voltarem para uso.",
      },
      {
        titulo: "Laudo e ART",
        texto:
          "Entregamos laudo técnico com o resultado da inspeção e Anotação de Responsabilidade Técnica registrada no CREA.",
      },
    ],
    specs: [],
    normas: ["NR-35", "NR-18", "NBR 16325"],
    faq: [
      {
        pergunta: "O que a inspeção verifica?",
        resposta:
          "Os componentes do sistema instalado passam por ensaio em bancada dedicada, na nossa oficina de inspeção. O equipamento só é liberado para uso depois de passar por essa etapa.",
      },
      {
        pergunta: "A inspeção vem com laudo e ART?",
        resposta:
          "Sim. A inspeção é acompanhada de laudo técnico e de Anotação de Responsabilidade Técnica registrada no CREA, assinada pelo nosso responsável técnico.",
      },
      {
        pergunta: "Quem executa a inspeção?",
        resposta:
          "Equipe técnica própria, sob a responsabilidade do nosso engenheiro registrado no CREA. A etapa crítica não é terceirizada.",
      },
    ],
    whatsappMensagem:
      "Olá! Gostaria de falar sobre inspeção e manutenção de sistemas de proteção contra queda.",
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

// Pendências permanecem na fonte para revisão e não entram na versão apresentada.
export const servicos: Servico[] = servicosOriginais.map(s => ({...s,
  faq: s.faq.filter(q => !q.resposta.includes("[CONFIRMAR]")),
  beneficios: s.beneficios.filter(b => !b.includes("3.600")),
}));

export const servicoPorSlug = (slug: string): Servico | undefined =>
  servicos.find((servico) => servico.slug === slug);

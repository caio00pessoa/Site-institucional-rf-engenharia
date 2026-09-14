/**
 * FAQ geral da rota /perguntas-frequentes.
 * ------------------------------------------------------------------
 * Só entram aqui as perguntas que valem para o grupo todo. As
 * específicas de cada serviço continuam em `servicos.ts`, na página do
 * serviço, para as duas páginas não competirem pela mesma consulta.
 *
 * Toda resposta é copy já existente: parte veio do site antigo, via
 * `servicos.ts`, e parte das LPs publicadas. Nada aqui é redigido do
 * zero, e nada afirma dado que não esteja confirmado.
 * ------------------------------------------------------------------
 */

import type { Pergunta } from "@/content/servicos";

export const faqGeral: Pergunta[] = [
  {
    pergunta: "O que a RF Engenharia faz?",
    resposta:
      "Projeto, fabricação e instalação de sistemas de proteção contra queda em altura, além de locação de balancim elétrico, inspeção dos sistemas instalados, projetos de segurança do trabalho e construção metálica. O grupo reúne três empresas que cobrem o ciclo inteiro: quem projeta e assina a responsabilidade técnica, quem fabrica os componentes e quem loca os equipamentos de acesso.",
  },
  {
    pergunta: "Os serviços saem com ART?",
    resposta:
      "Sim. Projeto, instalação e locação são acompanhados de Anotação de Responsabilidade Técnica registrada no CREA, assinada pelo nosso responsável técnico, junto com o laudo técnico da entrega.",
  },
  {
    pergunta: "O sistema atende às normas de trabalho em altura?",
    resposta:
      "O projeto e a execução são orientados pelas exigências aplicáveis das normas NR-18 e NR-35. A solução final considera as condições específicas da edificação.",
  },
  {
    pergunta: "Vocês fabricam ou só instalam?",
    resposta:
      "Fazemos as duas coisas. Somos fabricantes e distribuidores de ancoragem predial para todo o Brasil, e projetamos, fabricamos e instalamos os sistemas de linha de vida. Isso significa um só responsável do projeto até a entrega do laudo.",
  },
  {
    pergunta: "A instalação é feita por equipe própria?",
    resposta:
      "Sim. Temos equipe própria e especializada em trabalho em altura, e a etapa crítica não é terceirizada. Quem projeta responde por quem executa.",
  },
  {
    pergunta: "Como se garante que o ponto de ancoragem está bem instalado?",
    resposta:
      "Realizamos teste de arrancamento estático em 100% dos pontos instalados, e não apenas por amostragem. O resultado é registrado no laudo técnico que acompanha a entrega, junto com a ART registrada no CREA.",
  },
  {
    pergunta: "Qual a diferença entre ancoragem, linha de vida e SPIQ?",
    resposta:
      "O ponto de ancoragem é o ponto seguro fixado na estrutura, usado para prender balancim, cadeirinha ou o equipamento do trabalhador. A linha de vida é um sistema de ancoragem que permite ao trabalhador se deslocar em altura mantendo-se sempre conectado. O SPIQ, Sistema de Proteção Individual contra Quedas, é o conjunto que o trabalhador veste e conecta ao ponto ou à linha.",
  },
  {
    pergunta: "A RF atende condomínios, além de construtoras?",
    resposta:
      "Sim. Atendemos obras, construtoras, empresas, administradoras e condomínios que precisam preparar a edificação para manutenção predial.",
  },
  {
    pergunta: "Vocês atendem fora do Distrito Federal?",
    resposta:
      "Sim. Já atendemos edifícios em todo o Brasil, em obras residenciais e comerciais, galpões, indústrias, hospitais e aeroportos.",
  },
  {
    pergunta: "A locação de balancim inclui a ART e o projeto?",
    resposta:
      "Sim. Todas as nossas locações acompanham a Anotação de Responsabilidade Técnica de instalação e o projeto de montagem detalhado, atendendo plenamente à NR-18.",
  },
  {
    pergunta: "Qual o tempo mínimo de locação de balancim?",
    resposta:
      "Trabalhamos com contratos flexíveis, com períodos mínimos de 30 dias, adequando-se ao cronograma da sua fachada ou manutenção.",
  },
  {
    pergunta: "A RF fornece o treinamento NR-35?",
    resposta:
      "Sim. Temos centro de treinamento próprio e também podemos realizar a capacitação in loco na sua obra, certificando os operadores conforme as exigências legais.",
  },
  {
    pergunta: "O sistema instalado precisa de inspeção depois?",
    resposta:
      "Sim. O sistema deve ser inspecionado periodicamente por profissional habilitado. Temos oficina de inspeção própria, com bancadas dedicadas ao ensaio dos componentes, e a inspeção sai com laudo técnico e ART.",
  },
  {
    pergunta: "O material tem garantia?",
    resposta:
      "O material de ancoragem fornecido pela RF tem garantia de 5 anos, com certificado de resistência à corrosão emitido por laboratório, ART de fabricação e certificado de composição química.",
  },
];

/** Recorte curto que aparece na home, com link para a página cheia. */
export const faqDestaque: Pergunta[] = faqGeral.slice(0, 5);

/**
 * DADOS DA EMPRESA - fonte única de verdade.
 * ------------------------------------------------------------------
 * Contato, endereço, CREA e números aparecem em nav, rodapé, páginas
 * e JSON-LD. Altere AQUI e muda em todos os lugares.
 *
 * Itens marcados [CONFIRMAR] foram recuperados do site antigo e ainda
 * precisam ser validados com o cliente. Rode `npm run pendencias`.
 * ------------------------------------------------------------------
 */

/** Número principal para ligação. Só dígitos. */
const TELEFONE_DIGITOS = "08003264378";

/**
 * [CONFIRMAR] BLOQUEADOR ANTES DE PUBLICAR.
 *
 * As LPs atuais montam o link do WhatsApp como `wa.me/5508003264378`,
 * ou seja, o próprio 0800. Número 0800 não recebe WhatsApp, então esse
 * link não abre conversa nenhuma. Como o site inteiro converte por
 * WhatsApp, isso zera o funil.
 *
 * Preencha aqui o celular comercial real, no formato 55 + DDD + número.
 * Enquanto estiver vazio, `lib/whatsapp.ts` degrada os CTAs para
 * ligação telefônica em vez de gerar um link quebrado.
 */
const WHATSAPP_NUMERO = "";

export const site = {
  nome: "RF Engenharia",
  nomeCompleto: "Grupo RF Engenharia",
  razaoSocial: "RF Locação e Serviços de Construção Ltda",
  cnpj: "14.661.941/0001-80",

  /** Tagline oficial, lida do logo original. */
  tagline: "Soluções para Segurança do Trabalho",

  descricaoCurta:
    "Projeto, fabricação e instalação de sistemas de proteção contra queda em altura, com ART registrada no CREA.",

  descricaoLonga:
    "Somos uma empresa atuante no mercado de projetos, consultoria, fabricação e instalação de sistemas de Segurança do Trabalho, especialmente para prevenção contra queda em altura em edifícios e construção civil, bem como locação de máquinas e equipamentos.",

  /** [CONFIRMAR] domínio final antes de publicar. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rf-engenharia.com",

  telefone: {
    exibicao: "0800 3264 378",
    href: `tel:${TELEFONE_DIGITOS}`,
    digitos: TELEFONE_DIGITOS,
  },

  whatsapp: {
    numero: WHATSAPP_NUMERO,
  },

  email: "comercial@rf.eng.br",

  endereco: {
    logradouro: "QSC 19 Ch 26 Cj. M Lote 01",
    bairro: "Taguatinga Sul",
    cidade: "Brasília",
    uf: "DF",
    cep: "72017-287",
    pais: "BR",
    completo:
      "QSC 19 Ch 26 Cj. M Lote 01, Taguatinga Sul, Brasília/DF, 72017-287",
  },

  /** Coordenadas do ponto no Google Maps do site antigo. */
  geo: {
    latitude: -15.846634382065737,
    longitude: -48.06115269647271,
  },

  /**
   * Telefones regionais que apareciam no topo do site antigo.
   * [CONFIRMAR] quais continuam ativos.
   */
  telefonesRegionais: [
    { praca: "Brasília/DF", numero: "(61) 3264-3378", digitos: "6132643378" },
    { praca: "Goiânia/GO", numero: "(62) 99312-7838", digitos: "62993127838" },
    {
      praca: "Belo Horizonte/MG",
      numero: "(31) 3157-1707",
      digitos: "3131571707",
    },
  ],

  /** Empresas do grupo, na ordem em que apareciam no rodapé antigo. */
  grupo: [
    {
      nome: "RF Engenharia Ltda",
      descricao:
        "Projetos, consultoria e responsabilidade técnica. É quem assina a ART no CREA.",
    },
    {
      nome: "RF Locação e Serv. de Construção",
      descricao:
        "Locação de máquinas e equipamentos para trabalho em altura e construção civil.",
    },
    {
      nome: "RF Soluções de Prevenção contra Quedas",
      descricao:
        "Fabricação e distribuição de sistemas e componentes de proteção contra quedas.",
    },
  ],

  crea: "CREA-DF 13839/D",

  responsavelTecnico: {
    nome: "Eng. Dr. Rafael Vaz Ferreira",
    cargo: "Diretor e Responsável Técnico",
    crea: "CREA-DF 13839/D",
    foto: "/imagens/equipe/rafael-vaz-ferreira.webp",
    formacao: [
      "Engenheiro Mecânico, UnB/DF",
      "Pós-Graduado em Eng. de Energia Elétrica, FEAD/MG",
      "Pós-Graduado em Eng. de Segurança do Trabalho, FEAD/MG",
      "Mestre Especialista em Segurança do Trabalho, UneAtlántico/Espanha",
      "Doutor em Projetos de Segurança do Trabalho, UNINI/México",
      "Professor de Pós-Graduação em Engenharia, INBEC/UNIP",
    ],
  },

  /** "RF em Números", lido do site antigo. [CONFIRMAR] se seguem atuais. */
  numeros: [
    { valor: "18", rotulo: "Anos de mercado" },
    { valor: "1.150", rotulo: "Edifícios atendidos em todo o Brasil" },
    { valor: "3.600", rotulo: "Projetos de segurança elaborados" },
    { valor: "130.000", rotulo: "Pontos fabricados e instalados" },
  ],

  avaliacoes: {
    nota: "4,8",
    quantidade: 22,
    texto: "4,8 no Google, com 22 avaliações",
  },

  /** [CONFIRMAR] URLs reais. O print do site antigo não permitiu ler. */
  redes: [
    { nome: "Instagram", url: "" },
    { nome: "Facebook", url: "" },
    { nome: "LinkedIn", url: "" },
    { nome: "YouTube", url: "" },
  ] as { nome: string; url: string }[],

  normas: [
    {
      sigla: "NR-18",
      descricao: "Condições de segurança e saúde no trabalho na construção",
    },
    { sigla: "NR-35", descricao: "Trabalho em altura" },
    { sigla: "NBR 16325", descricao: "Dispositivos de ancoragem" },
    { sigla: "CBMDF", descricao: "NR 10/2015, Corpo de Bombeiros do DF" },
  ],
} as const;

/** Links do menu principal. Usado no header e no rodapé. */
export const navPrincipal = [
  { label: "A Empresa", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
] as const;

export const navLegal = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
] as const;

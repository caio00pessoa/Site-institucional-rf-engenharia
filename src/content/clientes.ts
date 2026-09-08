/**
 * Logos de clientes recuperados do site antigo e das LPs.
 *
 * Rótulo da seção é sempre "Clientes atendidos". Evitar redação que
 * sugira endosso ou parceria, principalmente com órgãos públicos.
 * [CONFIRMAR] autorização de uso de marca com o cliente.
 *
 * `clientes` é o recorte curto, usado na home e nas páginas de serviço.
 * `segmentos` é a lista completa da rota /clientes, agrupada por tipo de
 * contratante. Todo arquivo citado aqui existe em public/imagens/clientes/.
 */

export type Cliente = {
  nome: string;
  arquivo: string;
};

export type Segmento = {
  nome: string;
  /** Uma linha sobre o tipo de edificação, nunca sobre o cliente. */
  texto: string;
  clientes: Cliente[];
};

export const clientes: Cliente[] = [
  { nome: "Caixa Econômica Federal", arquivo: "caixa.webp" },
  { nome: "Banco do Brasil", arquivo: "banco-do-brasil.webp" },
  { nome: "Odebrecht", arquivo: "odebrecht.webp" },
  { nome: "MRV Engenharia", arquivo: "mrv.webp" },
  { nome: "Brookfield Incorporações", arquivo: "brookfield.webp" },
  { nome: "Hospital Sírio-Libanês", arquivo: "hospital-sirio-libanes.webp" },
  { nome: "Tribunal de Contas da União", arquivo: "tcu.webp" },
  { nome: "Ministério da Economia", arquivo: "ministerio-economia.webp" },
  { nome: "GRU Airport", arquivo: "gru-airport.webp" },
  { nome: "TIM", arquivo: "tim.webp" },
  { nome: "Direcional Engenharia", arquivo: "direcional.webp" },
  { nome: "PDG", arquivo: "pdg.webp" },
  { nome: "Sabin", arquivo: "sabin.webp" },
  { nome: "Brasal", arquivo: "brasal.webp" },
  { nome: "Emplavi", arquivo: "emplavi.webp" },
  { nome: "JC Gontijo Engenharia", arquivo: "jc-gontijo.webp" },
  { nome: "Construtora Villela e Carvalho", arquivo: "villela-e-carvalho.webp" },
  { nome: "Via Engenharia", arquivo: "via-engenharia.webp" },
  { nome: "Cyrela", arquivo: "cyrela.webp" },
  { nome: "Tenda", arquivo: "tenda.webp" },
  { nome: "Paulo Octávio", arquivo: "paulo-octavio.webp" },
  { nome: "Real Engenharia", arquivo: "real-engenharia.webp" },
];

export const segmentos: Segmento[] = [
  {
    nome: "Construtoras e incorporadoras",
    texto:
      "Obras residenciais e comerciais, da fase de estrutura à entrega da fachada.",
    clientes: [
      { nome: "MRV Engenharia", arquivo: "mrv.webp" },
      { nome: "Odebrecht", arquivo: "odebrecht.webp" },
      { nome: "Brookfield Incorporações", arquivo: "brookfield.webp" },
      { nome: "PDG", arquivo: "pdg.webp" },
      { nome: "Direcional Engenharia", arquivo: "direcional.webp" },
      { nome: "Cyrela", arquivo: "cyrela.webp" },
      { nome: "Tenda", arquivo: "tenda.webp" },
      { nome: "João Fortes Engenharia", arquivo: "joao-fortes.webp" },
      { nome: "JC Gontijo Engenharia", arquivo: "jc-gontijo.webp" },
      { nome: "Via Engenharia", arquivo: "via-engenharia.webp" },
      { nome: "Brasal", arquivo: "brasal.webp" },
      { nome: "Paulo Octávio", arquivo: "paulo-octavio.webp" },
      { nome: "Emplavi", arquivo: "emplavi.webp" },
      {
        nome: "Construtora Villela e Carvalho",
        arquivo: "villela-e-carvalho.webp",
      },
      { nome: "Real Engenharia", arquivo: "real-engenharia.webp" },
      { nome: "CMO Construtora", arquivo: "cmo-construtora.webp" },
      { nome: "Sousa Andrade Construtora", arquivo: "sousa-andrade.webp" },
      { nome: "City Soluções Urbanas", arquivo: "city-solucoes-urbanas.webp" },
      { nome: "EBM", arquivo: "ebm.webp" },
      { nome: "Opus", arquivo: "opus.webp" },
      { nome: "FR", arquivo: "fr.webp" },
    ],
  },
  {
    nome: "Hospitais e saúde",
    texto:
      "Edificações em operação contínua, onde a instalação é planejada para não interromper o funcionamento.",
    clientes: [
      { nome: "Hospital Sírio-Libanês", arquivo: "hospital-sirio-libanes.webp" },
      { nome: "Rede D'Or São Luiz", arquivo: "rede-dor-sao-luiz.webp" },
      { nome: "Hospital Santa Helena", arquivo: "hospital-santa-helena.webp" },
      { nome: "Hospital Santa Lúcia", arquivo: "hospital-santa-lucia.webp" },
      { nome: "Hospital Santa Luzia", arquivo: "hospital-santa-luzia.webp" },
      { nome: "Hospital Brasília", arquivo: "hospital-brasilia.webp" },
      { nome: "Hospital Águas Claras", arquivo: "hospital-aguas-claras.webp" },
      {
        nome: "Hospital do Coração do Brasil",
        arquivo: "hospital-do-coracao-do-brasil.webp",
      },
      {
        nome: "Centro Médico Lúcio Costa",
        arquivo: "centro-medico-lucio-costa.webp",
      },
      { nome: "Sabin", arquivo: "sabin.webp" },
    ],
  },
  {
    nome: "Órgãos públicos e Judiciário",
    texto:
      "Prédios administrativos e instalações públicas, com exigência formal de documentação técnica.",
    clientes: [
      { nome: "Tribunal de Contas da União", arquivo: "tcu.webp" },
      { nome: "Tribunal de Contas do Distrito Federal", arquivo: "tcdf.webp" },
      { nome: "Tribunal Superior Eleitoral", arquivo: "tse.webp" },
      { nome: "Tribunal Regional Eleitoral do DF", arquivo: "tre-df.webp" },
      { nome: "Tribunal Regional Federal da 1ª Região", arquivo: "trf1.webp" },
      {
        nome: "Tribunal Regional do Trabalho da 10ª Região",
        arquivo: "trt-10.webp",
      },
      { nome: "Advocacia-Geral da União", arquivo: "agu.webp" },
      { nome: "Ministério Público Federal", arquivo: "mpf.webp" },
      { nome: "Exército Brasileiro", arquivo: "exercito-brasileiro.webp" },
      { nome: "Marinha do Brasil", arquivo: "marinha-do-brasil.webp" },
      { nome: "Infraero", arquivo: "infraero.webp" },
      { nome: "BNDES", arquivo: "bndes.webp" },
      { nome: "FNDE", arquivo: "fnde.webp" },
      { nome: "Ministério da Economia", arquivo: "ministerio-economia.webp" },
      { nome: "Ministério da Educação", arquivo: "ministerio-da-educacao.webp" },
      { nome: "Ministério da Defesa", arquivo: "ministerio-da-defesa.webp" },
      {
        nome: "Ministério da Agricultura",
        arquivo: "ministerio-da-agricultura.webp",
      },
      {
        nome: "Ministério da Cidadania",
        arquivo: "ministerio-da-cidadania.webp",
      },
      {
        nome: "Ministério do Desenvolvimento Social",
        arquivo: "ministerio-do-desenvolvimento-social.webp",
      },
      { nome: "Embaixada da Noruega", arquivo: "embaixada-da-noruega.webp" },
    ],
  },
  {
    nome: "Bancos, ensino, conselhos e infraestrutura",
    texto:
      "Agências, campi, sedes de conselho e terminais, com rotina própria de manutenção predial.",
    clientes: [
      { nome: "Caixa Econômica Federal", arquivo: "caixa.webp" },
      { nome: "Banco do Brasil", arquivo: "banco-do-brasil.webp" },
      { nome: "GRU Airport", arquivo: "gru-airport.webp" },
      { nome: "TIM", arquivo: "tim.webp" },
      { nome: "Universidade de Brasília", arquivo: "unb.webp" },
      { nome: "IESB", arquivo: "iesb.webp" },
      { nome: "Senac", arquivo: "senac.webp" },
      { nome: "Confea", arquivo: "confea.webp" },
      { nome: "CREA-GO", arquivo: "crea-go.webp" },
    ],
  },
];

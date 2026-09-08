/**
 * PRAÇAS DE ATENDIMENTO da rota /onde-atuamos.
 * ------------------------------------------------------------------
 * Os telefones e o endereço saem de `site.ts`, que é a fonte única. Aqui
 * fica só o que é próprio da página.
 *
 * Só existe página de praça onde existe conteúdo local de verdade, que
 * hoje é a lista regional de clientes recuperada das LPs. Belo Horizonte
 * aparece no hub, com telefone, e não tem página própria: sem nenhum dado
 * local, a página seria só o nome da cidade trocado.
 *
 * São Paulo e Recife aparecem nas LPs, mas não no cadastro deste site.
 * [CONFIRMAR] com o cliente antes de acrescentar qualquer praça nova.
 * ------------------------------------------------------------------
 */

import type { Cliente } from "@/content/clientes";

export type Praca = {
  slug: string;
  cidade: string;
  uf: string;
  /** Casa com `site.telefonesRegionais[].praca`. */
  chaveTelefone: string;
  matriz: boolean;
  tituloSeo: string;
  descricaoSeo: string;
  heroTexto: string;
  /** Clientes atendidos na praça, recorte das LPs regionais. */
  clientes: Cliente[];
  whatsappMensagem: string;
};

export const ondeAtuamos = {
  hero: {
    eyebrow: "Onde atuamos",
    titulo: "Atendimento nacional, com praças próprias",
    texto: [
      "Já atendemos edifícios em todo o Brasil, em obras residenciais e comerciais, galpões, indústrias, hospitais e aeroportos.",
      "A matriz fica em Taguatinga Sul, no Distrito Federal, e é de lá que saem o projeto, a fabricação e a documentação técnica. Cada praça tem telefone próprio de atendimento.",
    ],
  },
  whatsappMensagem: "Olá! Gostaria de solicitar um orçamento.",
} as const;

export const pracas: Praca[] = [
  {
    slug: "brasilia-df",
    cidade: "Brasília",
    uf: "DF",
    chaveTelefone: "Brasília/DF",
    matriz: true,
    tituloSeo: "Ancoragem, Linha de Vida e Balancim em Brasília e no DF",
    descricaoSeo:
      "Matriz da RF Engenharia em Taguatinga Sul: projeto, fabricação e instalação de sistemas de proteção contra queda, locação de balancim e inspeção, com ART no CREA.",
    heroTexto:
      "É em Brasília que fica a matriz do grupo, com galpão, estoque, setor de manutenção e oficina de inspeção. O projeto que assina a sua ART e o equipamento que sobe na sua fachada saem da mesma casa.",
    clientes: [
      { nome: "Brasal", arquivo: "brasal.webp" },
      {
        nome: "Construtora Villela e Carvalho",
        arquivo: "villela-e-carvalho.webp",
      },
      { nome: "Paulo Octávio", arquivo: "paulo-octavio.webp" },
      { nome: "Emplavi", arquivo: "emplavi.webp" },
      { nome: "Real Engenharia", arquivo: "real-engenharia.webp" },
      { nome: "Direcional Engenharia", arquivo: "direcional.webp" },
      { nome: "PDG", arquivo: "pdg.webp" },
      { nome: "MRV Engenharia", arquivo: "mrv.webp" },
      { nome: "Caixa Econômica Federal", arquivo: "caixa.webp" },
      { nome: "Banco do Brasil", arquivo: "banco-do-brasil.webp" },
    ],
    whatsappMensagem:
      "Olá! Gostaria de solicitar um orçamento para uma obra em Brasília.",
  },
  {
    slug: "goiania-go",
    cidade: "Goiânia",
    uf: "GO",
    chaveTelefone: "Goiânia/GO",
    matriz: false,
    tituloSeo: "Ancoragem, Linha de Vida e Balancim em Goiânia e Goiás",
    descricaoSeo:
      "Atendimento da RF Engenharia em Goiânia e no interior de Goiás: projeto, instalação e inspeção de sistemas de proteção contra queda, com laudo técnico e ART no CREA.",
    heroTexto:
      "Atendemos Goiânia e o interior de Goiás com a mesma estrutura técnica da matriz: projeto e material de fabricação própria, equipe de instalação e a documentação completa da entrega.",
    clientes: [
      { nome: "Sousa Andrade Construtora", arquivo: "sousa-andrade.webp" },
      { nome: "City Soluções Urbanas", arquivo: "city-solucoes-urbanas.webp" },
      { nome: "EBM", arquivo: "ebm.webp" },
      { nome: "FR", arquivo: "fr.webp" },
      { nome: "CMO Construtora", arquivo: "cmo-construtora.webp" },
      { nome: "Opus", arquivo: "opus.webp" },
      { nome: "Direcional Engenharia", arquivo: "direcional.webp" },
      { nome: "PDG", arquivo: "pdg.webp" },
      { nome: "Caixa Econômica Federal", arquivo: "caixa.webp" },
      { nome: "Banco do Brasil", arquivo: "banco-do-brasil.webp" },
    ],
    whatsappMensagem:
      "Olá! Gostaria de solicitar um orçamento para uma obra em Goiás.",
  },
];

export const pracaPorSlug = (slug: string): Praca | undefined =>
  pracas.find((praca) => praca.slug === slug);

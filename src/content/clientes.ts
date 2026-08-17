/**
 * Logos de clientes recuperados do site antigo e das LPs.
 *
 * Rótulo da seção é sempre "Clientes atendidos". Evitar redação que
 * sugira endosso ou parceria, principalmente com órgãos públicos.
 * [CONFIRMAR] autorização de uso de marca com o cliente.
 */

export type Cliente = {
  nome: string;
  arquivo: string;
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

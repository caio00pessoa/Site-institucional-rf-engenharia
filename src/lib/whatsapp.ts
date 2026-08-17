import { site } from "@/content/site";

/**
 * Prefixos que nunca recebem WhatsApp. Um link wa.me montado com
 * qualquer um deles abre uma conversa inexistente, o que é pior que
 * não ter botão: o lead acha que falou com a empresa e ninguém recebe.
 */
const PREFIXOS_INVALIDOS = ["0800", "0300", "4004", "3003"];

const somenteDigitos = (valor: string) => valor.replace(/\D/g, "");

/** O número configurado é utilizável como WhatsApp? */
export function temWhatsapp(): boolean {
  const numero = somenteDigitos(site.whatsapp.numero);
  if (numero.length < 12) return false;

  const semPais = numero.startsWith("55") ? numero.slice(2) : numero;
  return !PREFIXOS_INVALIDOS.some((prefixo) => semPais.startsWith(prefixo));
}

/**
 * Link de contato para os CTAs.
 *
 * Devolve o wa.me quando há um número válido, e cai para `tel:` quando
 * não há. Assim o botão sempre leva a um canal que existe de verdade.
 */
export function linkContato(mensagem: string): string {
  if (!temWhatsapp()) return site.telefone.href;

  const numero = somenteDigitos(site.whatsapp.numero);
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

/** Rótulo do CTA, coerente com o canal para onde ele realmente aponta. */
export function rotuloContato(rotuloWhatsapp = "Falar no WhatsApp"): string {
  return temWhatsapp() ? rotuloWhatsapp : `Ligar ${site.telefone.exibicao}`;
}

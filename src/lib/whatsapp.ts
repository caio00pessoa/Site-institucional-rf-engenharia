import { site } from "@/content/site";

const somenteDigitos = (valor: string) => valor.replace(/\D/g, "");

/** Existe número de WhatsApp configurado? */
export function temWhatsapp(): boolean {
  return somenteDigitos(site.whatsapp.numero).length >= 12;
}

/** Link do WhatsApp com a mensagem já preenchida. */
export function linkWhatsapp(mensagem: string): string {
  const numero = somenteDigitos(site.whatsapp.numero);
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * Canal principal de conversão.
 *
 * WhatsApp quando há número configurado, telefone como reserva, para
 * o botão nunca apontar para um link vazio.
 */
export function linkContato(mensagem: string): string {
  return temWhatsapp() ? linkWhatsapp(mensagem) : site.telefone.href;
}

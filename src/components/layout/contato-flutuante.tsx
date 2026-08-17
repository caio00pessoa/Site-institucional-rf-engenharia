import { IconeTelefone, IconeWhatsapp } from "@/components/ui/icones";
import { site } from "@/content/site";
import { linkWhatsapp, temWhatsapp } from "@/lib/whatsapp";

/**
 * Par flutuante de contato: WhatsApp como principal e ligação ao lado.
 *
 * Server component, é só um par de âncoras fixas. O círculo é a única
 * exceção ao radius contido do sistema.
 */
export function ContatoFlutuante() {
  const whatsapp = temWhatsapp();

  return (
    <div
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2.5 md:right-5 md:bottom-5 md:gap-3"
      // Respeita a barra de gestos do iOS, senão o par encosta na borda
      // e cobre o conteúdo do fim da página.
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={site.telefone.href}
        aria-label={`Ligar para a RF Engenharia no ${site.telefone.exibicao}`}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-navy-900 text-white shadow-lift transition-transform duration-200 hover:scale-105 md:h-12 md:w-12"
      >
        <IconeTelefone className="h-5 w-5" />
      </a>

      {whatsapp && (
        <a
          href={linkWhatsapp("Olá! Gostaria de solicitar um orçamento.")}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar com a RF Engenharia pelo WhatsApp"
          className="flex h-13 w-13 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift-strong transition-transform duration-200 hover:scale-105 md:h-14 md:w-14"
        >
          <IconeWhatsapp className="h-6 w-6 md:h-7 md:w-7" />
        </a>
      )}
    </div>
  );
}

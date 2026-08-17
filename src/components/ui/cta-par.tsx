import { IconeTelefone, IconeWhatsapp } from "@/components/ui/icones";
import { Botao } from "@/components/ui/primitivos";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";
import { linkContato, temWhatsapp } from "@/lib/whatsapp";

/**
 * Par de CTAs do site: WhatsApp como canal principal e ligação ao lado.
 *
 * Fica lado a lado em qualquer largura a partir de 400px, e empilha só
 * em telas muito estreitas. Usado no hero de todas as rotas, no CTA
 * final e na página de contato, para o par não divergir entre páginas.
 */
export function CtaPar({
  mensagem,
  tom = "escuro",
  rotulo = "Falar no WhatsApp",
  className,
}: {
  mensagem: string;
  tom?: "escuro" | "claro";
  rotulo?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3 min-[400px]:flex-row", className)}>
      <Botao
        href={linkContato(mensagem)}
        variante={temWhatsapp() ? "whatsapp" : "acento"}
        externo
      >
        <IconeWhatsapp />
        {rotulo}
      </Botao>

      <Botao
        href={site.telefone.href}
        variante={tom === "escuro" ? "contorno-claro" : "contorno"}
      >
        <IconeTelefone />
        <span className="font-mono">{site.telefone.exibicao}</span>
      </Botao>
    </div>
  );
}

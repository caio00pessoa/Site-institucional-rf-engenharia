import {
  Container,
  Eyebrow,
  Secao,
  TituloSecao,
} from "@/components/ui/primitivos";
import type { Pergunta } from "@/content/servicos";

/**
 * Accordion em <details>/<summary> nativo.
 *
 * Sem JS, acessível por padrão, e o texto da resposta está no HTML
 * inicial, que é requisito do Google para o rich result de FAQPage.
 *
 * Marcações [CONFIRMAR] são de uso interno: aparecem em dev para
 * lembrar da pendência e somem em produção.
 */
function limpar(texto: string) {
  return process.env.NODE_ENV === "production"
    ? texto.replace(/\s*\[CONFIRMAR\]\s*/g, "").trim()
    : texto;
}

export function Faq({
  perguntas,
  titulo = "Perguntas frequentes",
}: {
  perguntas: readonly Pergunta[];
  titulo?: string;
}) {
  if (perguntas.length === 0) return null;

  return (
    <Secao tom="tela">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Eyebrow>Dúvidas</Eyebrow>
            <TituloSecao className="max-w-[14ch]">{titulo}</TituloSecao>
          </div>

          <div className="border-t border-steel-200">
            {perguntas.filter(item => !item.resposta.includes("[CONFIRMAR]")).map((item) => (
              <details
                key={item.pergunta}
                className="group border-b border-steel-200"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left font-semibold text-navy-900 transition-colors hover:text-indigo-500 [&::-webkit-details-marker]:hidden">
                  <span className="text-balance">{item.pergunta}</span>
                  <span
                    aria-hidden="true"
                    className="mt-1 grid h-6 w-6 shrink-0 place-items-center border border-steel-200 text-indigo-500 transition-colors group-open:border-amber-500 group-open:bg-amber-500 group-open:text-navy-900"
                  >
                    <svg
                      viewBox="0 0 12 12"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="square"
                    >
                      <path d="M1.5 6h9" />
                      <path d="M6 1.5v9" className="group-open:hidden" />
                    </svg>
                  </span>
                </summary>
                <p className="max-w-[68ch] pb-7 text-[0.9375rem] leading-relaxed text-steel-700">
                  {limpar(item.resposta)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Secao>
  );
}

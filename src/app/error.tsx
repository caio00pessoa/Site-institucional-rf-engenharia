"use client";

/**
 * Fronteira de erro das rotas. O `"use client"` aqui é exigência do
 * Next para o reset funcionar, e não estado de UI nosso: o resto do
 * site continua todo em Server Components.
 *
 * Mesmo desenho do not-found.tsx: navy sólido, sem a malha técnica.
 */

import { Botao, Container, Eyebrow, Seta } from "@/components/ui/primitivos";
import { site } from "@/content/site";

export default function Erro({ reset }: { reset: () => void }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <Container className="relative">
        <div className="max-w-2xl py-24 md:py-32">
          <Eyebrow escuro>Erro inesperado</Eyebrow>
          <h1 className="mt-6 text-balance text-[2.25rem] leading-[1.06] font-bold tracking-[-0.03em] md:text-[3.5rem]">
            Alguma coisa saiu do lugar
          </h1>
          <p className="mt-6 leading-relaxed text-white/65">
            A página não carregou como devia. Tente de novo. Se continuar
            assim, fale com a gente pelo telefone abaixo, que resolvemos por
            lá.
          </p>

          <div className="mt-10 flex flex-col gap-3 min-[400px]:flex-row">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-amber-500 px-6 py-3.5 text-sm font-semibold tracking-[0.01em] text-navy-900 transition-colors duration-200 hover:bg-amber-500/90"
            >
              Tentar de novo
            </button>

            <Botao href={site.telefone.href} variante="contorno-claro">
              <span className="font-mono">{site.telefone.exibicao}</span>
            </Botao>
          </div>

          <div className="mt-10">
            <Botao href="/" variante="contorno-claro">
              Voltar para o início
              <Seta />
            </Botao>
          </div>
        </div>
      </Container>
    </section>
  );
}

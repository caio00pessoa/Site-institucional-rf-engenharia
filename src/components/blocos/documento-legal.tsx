import Link from "next/link";

import { Container, Eyebrow, Secao } from "@/components/ui/primitivos";
import type { Documento } from "@/content/legal";

export function DocumentoLegal({ documento }: { documento: Documento }) {
  return (
    <>
      <Secao tom="navy-grid" className="pt-16 pb-16 md:pt-20 md:pb-20">
        <Container>
          <nav aria-label="Trilha de navegação">
            <ol className="flex items-center gap-2 font-mono text-xs text-white/40">
              <li>
                <Link href="/" className="hover:text-amber-500">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70">{documento.titulo}</li>
            </ol>
          </nav>

          <div className="mt-10 max-w-3xl">
            <Eyebrow escuro>Documento</Eyebrow>
            <h1 className="mt-6 text-balance text-[2rem] leading-[1.1] font-bold tracking-[-0.03em] md:text-[3rem]">
              {documento.titulo}
            </h1>
            <p className="mt-5 leading-relaxed text-white/65">
              {documento.intro}
            </p>
            <p className="label-tech mt-8 text-white/35">
              Atualizado em {documento.atualizadoEm}
            </p>
          </div>
        </Container>
      </Secao>

      <Secao tom="claro">
        <Container>
          <div className="max-w-[68ch]">
            {documento.secoes.map((secao, indice) => (
              <section key={secao.titulo} className="mt-14 first:mt-0">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-amber-600 tabular-nums">
                    {String(indice + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-bold tracking-[-0.01em] text-navy-900">
                    {secao.titulo}
                  </h2>
                </div>
                {secao.paragrafos.map((paragrafo) => (
                  <p
                    key={paragrafo}
                    className="mt-4 leading-relaxed text-steel-700"
                  >
                    {paragrafo}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </Secao>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Clientes } from "@/components/blocos/clientes";
import { CtaFinal } from "@/components/blocos/cta-final";
import { JsonLd } from "@/components/seo/json-ld";
import {
  Container,
  Eyebrow,
  Secao,
  Seta,
} from "@/components/ui/primitivos";
import { servicos } from "@/content/servicos";
import { migalhasSchema, servicoSchema } from "@/lib/schema";
import { montarMetadata } from "@/lib/seo";

export const metadata: Metadata = montarMetadata({
  titulo: "Serviços de Segurança do Trabalho em Altura",
  descricao:
    "Ancoragem predial, linha de vida, projetos de segurança do trabalho e construção metálica. Projeto, fabricação e instalação com ART registrada no CREA.",
  caminho: "/servicos",
});

export default function PaginaServicos() {
  return (
    <>
      <Secao tom="navy-grid" className="pt-16 pb-20 md:pt-20 md:pb-28">
        <Container>
          <nav aria-label="Trilha de navegação">
            <ol className="flex items-center gap-2 font-mono text-xs text-white/40">
              <li>
                <Link href="/" className="hover:text-amber-500">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70">Serviços</li>
            </ol>
          </nav>

          <div className="mt-10 max-w-3xl">
            <Eyebrow escuro>Serviços</Eyebrow>
            <h1 className="mt-6 text-balance text-[2.25rem] leading-[1.06] font-bold tracking-[-0.03em] md:text-[3.5rem]">
              Quatro frentes, uma responsabilidade técnica
            </h1>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-white/65">
              Projetamos, fabricamos e instalamos. Cada entrega sai com laudo
              técnico e Anotação de Responsabilidade Técnica registrada no
              CREA.
            </p>
          </div>
        </Container>
      </Secao>

      <Secao tom="tela">
        <Container>
          <ul className="grid gap-6">
            {servicos.map((servico, indice) => (
              <li key={servico.slug}>
                <Link
                  href={`/servicos/${servico.slug}`}
                  className="group grid gap-8 border border-steel-200 bg-white p-6 transition-colors hover:border-navy-900 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] md:p-8"
                >
                  <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-navy-900">
                    <Image
                      src={servico.imagem.src}
                      alt={servico.imagem.alt}
                      fill
                      sizes="(min-width: 768px) 20rem, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <span className="font-mono text-xs text-amber-600">
                      {String(indice + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 text-balance text-2xl font-bold tracking-[-0.02em] text-navy-900 md:text-3xl">
                      {servico.nome}
                    </h2>
                    <p className="mt-4 max-w-[62ch] leading-relaxed text-steel-600">
                      {servico.resumo}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {servico.normas.map((norma) => (
                        <li
                          key={norma}
                          className="border border-steel-200 px-2.5 py-1 font-mono text-[0.6875rem] text-steel-600"
                        >
                          {norma}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-indigo-500">
                      Ver o serviço
                      <Seta className="transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Secao>

      <Clientes limite={12} />

      <CtaFinal
        titulo="Não sabe qual serviço a sua obra precisa?"
        texto="Nossa equipe técnica avalia a edificação e indica a solução adequada."
        mensagem="Olá! Gostaria de falar com a equipe técnica sobre um serviço."
      />

      <JsonLd
        data={migalhasSchema([
          { nome: "Início", caminho: "/" },
          { nome: "Serviços", caminho: "/servicos" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: servicos.map((servico, indice) => ({
            "@type": "ListItem",
            position: indice + 1,
            item: servicoSchema(servico),
          })),
        }}
      />
    </>
  );
}

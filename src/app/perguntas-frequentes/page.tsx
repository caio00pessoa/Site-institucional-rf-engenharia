import type { Metadata } from "next";
import Link from "next/link";

import { CtaFinal } from "@/components/blocos/cta-final";
import { Faq } from "@/components/blocos/faq";
import { JsonLd } from "@/components/seo/json-ld";
import {
  Container,
  Eyebrow,
  Secao,
  Seta,
} from "@/components/ui/primitivos";
import { faqGeral } from "@/content/perguntas";
import { servicos } from "@/content/servicos";
import { faqSchema, migalhasSchema } from "@/lib/schema";
import { montarMetadata } from "@/lib/seo";

export const metadata: Metadata = montarMetadata({
  titulo: "Perguntas frequentes",
  descricao:
    "Respostas sobre ancoragem predial, linha de vida, locação de balancim, inspeção, ART no CREA, normas de trabalho em altura e atendimento da RF Engenharia.",
  caminho: "/perguntas-frequentes",
});

export default function PaginaPerguntas() {
  return (
    <>
      <Secao tom="navy" className="pt-16 pb-20 md:pt-20 md:pb-28">
        <Container>
          <nav aria-label="Trilha de navegação">
            <ol className="flex items-center gap-2 text-xs text-white/40">
              <li>
                <Link href="/" className="hover:text-amber-500">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70">Perguntas frequentes</li>
            </ol>
          </nav>

          <div className="mt-10 max-w-3xl">
            <Eyebrow escuro>Atendimento</Eyebrow>
            <h1 className="mt-6 max-w-[18ch] text-balance text-[2.25rem] leading-[1.06] font-bold tracking-[-0.03em] md:text-[3.5rem]">
              Perguntas frequentes
            </h1>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-white/65">
              As dúvidas que aparecem em quase todo orçamento, sobre normas,
              documentação, prazo e atendimento. Cada serviço tem também as
              suas perguntas próprias, na página dele.
            </p>
          </div>
        </Container>
      </Secao>

      <Faq perguntas={faqGeral} titulo="Sobre a RF e os serviços" />

      {/* Ponte para as perguntas específicas, que continuam na página
          de cada serviço para as duas não disputarem a mesma consulta. */}
      <Secao tom="claro">
        <Container>
          <Eyebrow>Dúvida sobre um serviço</Eyebrow>
          <h2 className="mt-5 max-w-[20ch] text-balance text-3xl font-bold tracking-[-0.02em] md:text-[2.75rem] md:leading-[1.08]">
            Cada serviço tem o seu próprio FAQ
          </h2>

          <ul className="mt-12 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((servico) => (
              <li key={servico.slug} className="bg-white">
                <Link
                  href={`/servicos/${servico.slug}`}
                  className="group flex h-full flex-col p-7 transition-colors hover:bg-steel-50"
                >
                  <h3 className="font-bold text-navy-900">
                    {servico.nomeCurto}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-steel-600">
                    {servico.resumo}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-500">
                    {servico.faq.length} perguntas
                    <Seta className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Secao>

      <CtaFinal
        titulo="Ficou uma dúvida que não está aqui?"
        texto="Fale com a nossa equipe técnica. A resposta sai da avaliação da sua edificação."
        mensagem="Olá! Tenho uma dúvida sobre os serviços da RF Engenharia."
      />

      <JsonLd
        data={migalhasSchema([
          { nome: "Início", caminho: "/" },
          { nome: "Perguntas frequentes", caminho: "/perguntas-frequentes" },
        ])}
      />
      <JsonLd data={faqSchema(faqGeral)} />
    </>
  );
}

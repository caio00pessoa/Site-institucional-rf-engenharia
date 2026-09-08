import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Clientes } from "@/components/blocos/clientes";
import { CtaFinal } from "@/components/blocos/cta-final";
import { Faq } from "@/components/blocos/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaPar } from "@/components/ui/cta-par";
import {
  Container,
  Eyebrow,
  Secao,
  Seta,
  TituloSecao,
} from "@/components/ui/primitivos";
import { servicos, servicoPorSlug } from "@/content/servicos";
import { faqSchema, migalhasSchema, servicoSchema } from "@/lib/schema";
import { montarMetadata } from "@/lib/seo";

/** Qualquer slug fora da lista vira 404 estático. */
export const dynamicParams = false;

export function generateStaticParams() {
  return servicos.map((servico) => ({ slug: servico.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/servicos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const servico = servicoPorSlug(slug);
  if (!servico) return {};

  return montarMetadata({
    titulo: servico.tituloSeo,
    descricao: servico.descricaoSeo,
    caminho: `/servicos/${servico.slug}`,
  });
}

export default async function PaginaServico({
  params,
}: PageProps<"/servicos/[slug]">) {
  const { slug } = await params;
  const servico = servicoPorSlug(slug);
  if (!servico) notFound();

  /* A grade de relacionados tem 3 colunas: com 6 serviços cadastrados,
     sem o corte sobrariam 5 cards e uma linha quebrada. */
  const relacionados = servicos
    .filter((item) => item.slug !== servico.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Container className="relative">
          <div className="py-16 md:py-20">
            <nav aria-label="Trilha de navegação">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-white/40">
                <li>
                  <Link href="/" className="hover:text-amber-500">
                    Início
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/servicos" className="hover:text-amber-500">
                    Serviços
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/70">{servico.nomeCurto}</li>
              </ol>
            </nav>

            <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-16">
              <div>
                <Eyebrow escuro>Serviço</Eyebrow>
                <h1 className="mt-6 max-w-[18ch] text-balance text-[2.25rem] leading-[1.06] font-bold tracking-[-0.03em] md:text-[3.5rem]">
                  {servico.heroTitulo}
                </h1>

                {servico.heroTexto.map((paragrafo) => (
                  <p
                    key={paragrafo}
                    className="mt-5 max-w-[62ch] leading-relaxed text-white/65"
                  >
                    {paragrafo}
                  </p>
                ))}

                <CtaPar
                  className="mt-9"
                  mensagem={servico.whatsappMensagem}
                  rotulo="Solicitar orçamento"
                />
              </div>

              <figure>
                <div className="relative aspect-[3/2] overflow-hidden rounded-sm border border-white/15">
                  <Image
                    src={servico.imagem.src}
                    alt={servico.imagem.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 24rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/15 pt-4 font-mono text-xs text-amber-500">
                  {servico.normas.map((norma) => (
                    <span key={norma}>{norma}</span>
                  ))}
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefícios */}
      <Secao tom="claro">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
            <div>
              <Eyebrow>O que está incluso</Eyebrow>
              <TituloSecao className="max-w-[14ch]">
                Escopo da entrega
              </TituloSecao>
            </div>

            <ul className="grid gap-x-10 gap-y-px sm:grid-cols-2">
              {servico.beneficios.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 border-b border-steel-200 py-4"
                >
                  <svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                  >
                    <path d="m2.5 8.5 3.5 3.5 7.5-8" />
                  </svg>
                  <span className="text-[0.9375rem] leading-snug text-steel-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Secao>

      {/* Processo */}
      <Secao tom="navy">
        <Container>
          <Eyebrow escuro>Como vamos te ajudar</Eyebrow>
          <h2 className="mt-5 max-w-[16ch] text-balance text-3xl font-bold tracking-[-0.02em] md:text-[2.75rem] md:leading-[1.08]">
            Do projeto ao laudo
          </h2>

          <ol className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {servico.processo.map((etapa, indice) => (
              <li key={etapa.titulo} className="bg-navy-900 p-7">
                <span className="font-mono text-xs font-semibold text-amber-500 tabular-nums">
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-[-0.01em]">
                  {etapa.titulo}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                  {etapa.texto}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Secao>

      {/* Aplicações */}
      <Secao tom="tela">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Aplicação</Eyebrow>
            <TituloSecao>Onde este sistema é usado</TituloSecao>
          </div>

          <ul className="mt-14 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {servico.aplicacoes.map((aplicacao) => (
              <li key={aplicacao.titulo} className="bg-white p-7">
                <h3 className="font-semibold text-navy-900">
                  {aplicacao.titulo}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-steel-600">
                  {aplicacao.texto}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Secao>

      {/* Especificações, só quando existem */}
      {servico.specs.length > 0 && (
        <Secao tom="claro">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
              <div>
                <Eyebrow>Ficha técnica</Eyebrow>
                <TituloSecao className="max-w-[12ch]">
                  Especificações
                </TituloSecao>
                <p className="mt-5 text-sm leading-relaxed text-steel-600">
                  Somos fabricantes e distribuidores do kit de ancoragem.
                </p>
              </div>

              <dl className="border-t border-steel-200">
                {servico.specs.map((spec) => (
                  <div
                    key={spec.rotulo}
                    className="grid gap-1 border-b border-steel-200 py-5 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-8"
                  >
                    <dt className="label-tech pt-1 text-steel-400">
                      {spec.rotulo}
                    </dt>
                    <dd className="font-mono text-[0.9375rem] text-navy-900">
                      {spec.valor}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </Secao>
      )}

      <Faq perguntas={servico.faq} />

      <Clientes limite={12} />

      {/* Serviços relacionados. Tom diferente da seção de clientes,
          senão as duas superfícies brancas se fundem num vão só. */}
      <Secao tom="tela">
        <Container>
          <Eyebrow>Outros serviços</Eyebrow>
          <ul className="mt-10 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-3">
            {relacionados.map((item) => (
              <li key={item.slug} className="bg-white">
                <Link
                  href={`/servicos/${item.slug}`}
                  className="group flex h-full flex-col p-7 transition-colors hover:bg-steel-50"
                >
                  <h3 className="font-bold text-navy-900">{item.nomeCurto}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-steel-600">
                    {item.resumo}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-500">
                    Ver
                    <Seta className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Secao>

      <CtaFinal
        titulo={`Precisa de ${servico.nomeCurto.toLowerCase()}?`}
        texto="Fale com nossa equipe técnica e receba uma avaliação para a sua edificação."
        mensagem={servico.whatsappMensagem}
      />

      <JsonLd data={servicoSchema(servico)} />
      <JsonLd
        data={migalhasSchema([
          { nome: "Início", caminho: "/" },
          { nome: "Serviços", caminho: "/servicos" },
          { nome: servico.nome, caminho: `/servicos/${servico.slug}` },
        ])}
      />
      {servico.faq.length >= 2 && <JsonLd data={faqSchema(servico.faq)} />}
    </>
  );
}

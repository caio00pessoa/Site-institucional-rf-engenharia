import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaFinal } from "@/components/blocos/cta-final";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaPar } from "@/components/ui/cta-par";
import {
  Container,
  Eyebrow,
  Secao,
  Seta,
  TituloSecao,
} from "@/components/ui/primitivos";
import { pracaPorSlug, pracas } from "@/content/onde-atuamos";
import { servicos } from "@/content/servicos";
import { linkGoogleMaps, site } from "@/content/site";
import { migalhasSchema } from "@/lib/schema";
import { montarMetadata } from "@/lib/seo";

/** Qualquer praça fora da lista vira 404 estático. */
export const dynamicParams = false;

export function generateStaticParams() {
  return pracas.map((praca) => ({ praca: praca.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/onde-atuamos/[praca]">): Promise<Metadata> {
  const { praca: slug } = await params;
  const praca = pracaPorSlug(slug);
  if (!praca) return {};

  return montarMetadata({
    titulo: praca.tituloSeo,
    descricao: praca.descricaoSeo,
    caminho: `/onde-atuamos/${praca.slug}`,
  });
}

export default async function PaginaPraca({
  params,
}: PageProps<"/onde-atuamos/[praca]">) {
  const { praca: slug } = await params;
  const praca = pracaPorSlug(slug);
  if (!praca) notFound();

  const telefone = site.telefonesRegionais.find(
    (regional) => regional.praca === praca.chaveTelefone,
  );

  return (
    <>
      <Secao tom="navy" className="pt-16 pb-20 md:pt-20 md:pb-28">
        <Container>
          <nav aria-label="Trilha de navegação">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/40">
              <li>
                <Link href="/" className="hover:text-amber-500">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/onde-atuamos" className="hover:text-amber-500">
                  Onde atuamos
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70">
                {praca.cidade}/{praca.uf}
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <Eyebrow escuro>
                {praca.matriz ? "Matriz" : "Praça de atendimento"}
              </Eyebrow>
              <h1 className="mt-6 max-w-[16ch] text-balance text-[2.25rem] leading-[1.06] font-bold tracking-[-0.03em] md:text-[3.5rem]">
                Proteção contra queda em {praca.cidade}
              </h1>
              <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-white/65">
                {praca.heroTexto}
              </p>

              {telefone && (
                <p className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-white/15 pt-6">
                  <span className="label-tech text-white/40">
                    Telefone da praça
                  </span>
                  <a
                    href={`tel:${telefone.digitos}`}
                    className="font-mono text-xl text-white hover:text-amber-500"
                  >
                    {telefone.numero}
                  </a>
                </p>
              )}
            </div>

            <CtaPar mensagem={praca.whatsappMensagem} />
          </div>
        </Container>
      </Secao>

      {/* Serviços disponíveis na praça */}
      <Secao tom="claro">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Serviços</Eyebrow>
            <TituloSecao>O que atendemos em {praca.cidade}</TituloSecao>
          </div>

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
                    Ver o serviço
                    <Seta className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Secao>

      {/* Endereço, só na praça que é matriz */}
      {praca.matriz && (
        <Secao tom="tela">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
              <div>
                <Eyebrow>Unidade</Eyebrow>
                <TituloSecao className="max-w-[12ch]">
                  Onde a gente fica
                </TituloSecao>
              </div>

              <div>
                <address className="text-lg leading-relaxed text-steel-700 not-italic">
                  {site.endereco.completo}
                </address>
                <a
                  href={linkGoogleMaps}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 hover:text-navy-900"
                >
                  Ver no Google Maps
                  <Seta />
                </a>
              </div>
            </div>
          </Container>
        </Secao>
      )}

      {/* Clientes da praça */}
      <Secao tom={praca.matriz ? "claro" : "tela"}>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Clientes atendidos</Eyebrow>
            <TituloSecao>
              Quem já contratou em {praca.cidade}
            </TituloSecao>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-px border border-steel-200 bg-steel-200 sm:grid-cols-3 lg:grid-cols-5">
            {praca.clientes.map((cliente) => (
              <li
                key={cliente.arquivo}
                className="flex aspect-[3/2] items-center justify-center bg-white p-6"
              >
                <Image
                  src={`/imagens/clientes/${cliente.arquivo}`}
                  alt={cliente.nome}
                  width={160}
                  height={64}
                  sizes="160px"
                  className="h-auto max-h-12 w-auto max-w-full object-contain opacity-70 transition-opacity duration-200 hover:opacity-100"
                />
              </li>
            ))}
          </ul>

          <Link
            href="/clientes"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-indigo-500"
          >
            Ver todos os clientes atendidos
            <Seta className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Container>
      </Secao>

      <CtaFinal
        titulo={`Obra em ${praca.cidade}?`}
        texto="Fale com a nossa equipe técnica e receba uma avaliação para a sua edificação."
        mensagem={praca.whatsappMensagem}
      />

      <JsonLd
        data={migalhasSchema([
          { nome: "Início", caminho: "/" },
          { nome: "Onde atuamos", caminho: "/onde-atuamos" },
          {
            nome: `${praca.cidade}/${praca.uf}`,
            caminho: `/onde-atuamos/${praca.slug}`,
          },
        ])}
      />
    </>
  );
}

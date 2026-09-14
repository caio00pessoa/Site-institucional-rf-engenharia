import { Orcamento } from "@/components/blocos/orcamento";
import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { CtaPar } from "@/components/ui/cta-par";
import {
  Container,
  Eyebrow,
  Secao,
  Seta,
  TituloSecao,
} from "@/components/ui/primitivos";
import { linkGoogleMaps, site } from "@/content/site";
import { migalhasSchema } from "@/lib/schema";
import { montarMetadata } from "@/lib/seo";

export const metadata: Metadata = montarMetadata({
  titulo: "Contato",
  descricao: `Fale com a RF Engenharia pelo ${site.telefone.exibicao} ou por WhatsApp. Unidade em Taguatinga Sul, Brasília/DF.`,
  caminho: "/contato",
});

export default function PaginaContato() {
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
              <li className="text-white/70">Contato</li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <Eyebrow escuro>Contato</Eyebrow>
              <h1 className="mt-6 max-w-[16ch] text-balance text-[2.25rem] leading-[1.06] font-bold tracking-[-0.03em] md:text-[3.5rem]">
                Fale com a nossa equipe técnica
              </h1>
              <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-white/65">
                Atendemos obras e edificações em todo o Brasil. Conte o que
                você precisa e recebemos o caso na engenharia.
              </p>
            </div>

            <CtaPar mensagem="Olá! Gostaria de solicitar um orçamento." />
          </div>
        </Container>
      </Secao>

      <Orcamento />

      {/* Canais */}
      <Secao tom="claro">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
            <div>
              <Eyebrow>Canais</Eyebrow>
              <TituloSecao className="max-w-[12ch]">
                Como falar com a gente
              </TituloSecao>
            </div>

            <dl className="border-t border-steel-200">
              <div className="grid gap-1 border-b border-steel-200 py-6 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] sm:gap-8">
                <dt className="label-tech pt-1 text-steel-400">Telefone</dt>
                <dd>
                  <a
                    href={site.telefone.href}
                    className="font-mono text-xl text-navy-900 hover:text-indigo-500"
                  >
                    {site.telefone.exibicao}
                  </a>
                </dd>
              </div>

              <div className="grid gap-1 border-b border-steel-200 py-6 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] sm:gap-8">
                <dt className="label-tech pt-1 text-steel-400">E-mail</dt>
                <dd>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-navy-900 hover:text-indigo-500"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>

              <div className="grid gap-1 border-b border-steel-200 py-6 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] sm:gap-8">
                <dt className="label-tech pt-1 text-steel-400">Endereço</dt>
                <dd>
                  <address className="leading-relaxed text-steel-700 not-italic">
                    {site.endereco.completo}
                  </address>
                  <a
                    href={linkGoogleMaps}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 hover:text-navy-900"
                  >
                    Ver no Google Maps
                    <Seta />
                  </a>
                </dd>
              </div>

              <div className="grid gap-1 border-b border-steel-200 py-6 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] sm:gap-8">
                <dt className="label-tech pt-1 text-steel-400">
                  Responsável técnico
                </dt>
                <dd className="text-steel-700">
                  {site.responsavelTecnico.nome}
                  <span className="mt-1 block font-mono text-sm text-steel-400">
                    {site.responsavelTecnico.crea}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </Secao>

      {/* Telefones regionais */}
      <Secao tom="tela">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Praças de atendimento</Eyebrow>
            <TituloSecao>Telefones por região</TituloSecao>
          </div>

          <ul className="mt-12 grid gap-px border border-steel-200 bg-steel-200 md:grid-cols-3">
            {site.telefonesRegionais.map((regional) => (
              <li key={regional.praca} className="bg-white p-7">
                <p className="label-tech text-steel-400">{regional.praca}</p>
                <a
                  href={`tel:${regional.digitos}`}
                  className="mt-3 block font-mono text-lg text-navy-900 hover:text-indigo-500"
                >
                  {regional.numero}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </Secao>

      <JsonLd
        data={migalhasSchema([
          { nome: "Início", caminho: "/" },
          { nome: "Contato", caminho: "/contato" },
        ])}
      />
    </>
  );
}

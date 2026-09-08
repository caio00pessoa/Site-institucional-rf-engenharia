import type { Metadata } from "next";
import Link from "next/link";

import { Clientes } from "@/components/blocos/clientes";
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
import { ondeAtuamos, pracas } from "@/content/onde-atuamos";
import { linkGoogleMaps, site } from "@/content/site";
import { migalhasSchema } from "@/lib/schema";
import { montarMetadata } from "@/lib/seo";

export const metadata: Metadata = montarMetadata({
  titulo: "Onde atuamos",
  descricao:
    "Matriz em Taguatinga Sul, Brasília, com atendimento em Goiânia, Belo Horizonte e obras em todo o Brasil. Telefone próprio por praça.",
  caminho: "/onde-atuamos",
});

/** Casa cada telefone regional com a praça que tem página própria. */
const pracaDoTelefone = (chave: string) =>
  pracas.find((praca) => praca.chaveTelefone === chave);

export default function PaginaOndeAtuamos() {
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
              <li className="text-white/70">Onde atuamos</li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <Eyebrow escuro>{ondeAtuamos.hero.eyebrow}</Eyebrow>
              <h1 className="mt-6 max-w-[16ch] text-balance text-[2.25rem] leading-[1.06] font-bold tracking-[-0.03em] md:text-[3.5rem]">
                {ondeAtuamos.hero.titulo}
              </h1>
              {ondeAtuamos.hero.texto.map((paragrafo) => (
                <p
                  key={paragrafo}
                  className="mt-5 max-w-[60ch] leading-relaxed text-white/65"
                >
                  {paragrafo}
                </p>
              ))}
            </div>

            <CtaPar mensagem={ondeAtuamos.whatsappMensagem} />
          </div>
        </Container>
      </Secao>

      {/* Praças, com telefone próprio e link para quem tem página */}
      <Secao tom="claro">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Praças de atendimento</Eyebrow>
            <TituloSecao>Telefone por região</TituloSecao>
          </div>

          <ul className="mt-12 grid gap-px border border-steel-200 bg-steel-200 md:grid-cols-3">
            {site.telefonesRegionais.map((regional) => {
              const praca = pracaDoTelefone(regional.praca);

              return (
                <li key={regional.praca} className="flex flex-col bg-white p-7">
                  <p className="label-tech text-steel-400">{regional.praca}</p>
                  <a
                    href={`tel:${regional.digitos}`}
                    className="mt-3 block font-mono text-lg text-navy-900 hover:text-indigo-500"
                  >
                    {regional.numero}
                  </a>

                  {praca ? (
                    <>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-steel-600">
                        {praca.matriz
                          ? "Matriz do grupo, com galpão, estoque, manutenção e oficina de inspeção."
                          : "Atendimento na capital e no interior do estado."}
                      </p>
                      <Link
                        href={`/onde-atuamos/${praca.slug}`}
                        className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 hover:text-navy-900"
                      >
                        Ver {praca.cidade}
                        <Seta className="transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </>
                  ) : (
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-steel-600">
                      Telefone de atendimento para obras na região.
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </Secao>

      {/* Matriz */}
      <Secao tom="tela">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
            <div>
              <Eyebrow>Matriz</Eyebrow>
              <TituloSecao className="max-w-[12ch]">
                Taguatinga Sul
              </TituloSecao>
            </div>

            <dl className="border-t border-steel-200">
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
                  Telefone nacional
                </dt>
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

      <Clientes limite={12} />

      <CtaFinal
        titulo="Sua obra fica em outra cidade?"
        texto="Já atendemos edifícios em todo o Brasil. Conte onde é a obra e avaliamos o deslocamento."
        mensagem={ondeAtuamos.whatsappMensagem}
      />

      <JsonLd
        data={migalhasSchema([
          { nome: "Início", caminho: "/" },
          { nome: "Onde atuamos", caminho: "/onde-atuamos" },
        ])}
      />
    </>
  );
}

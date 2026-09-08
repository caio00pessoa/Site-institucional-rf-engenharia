import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
import { segmentos } from "@/content/clientes";
import { linkGoogleMaps, site } from "@/content/site";
import { migalhasSchema } from "@/lib/schema";
import { montarMetadata } from "@/lib/seo";

export const metadata: Metadata = montarMetadata({
  titulo: "Clientes atendidos",
  descricao:
    "Construtoras, hospitais, órgãos públicos, bancos e instituições de ensino que já contrataram sistemas de proteção contra queda em altura da RF Engenharia.",
  caminho: "/clientes",
});

const total = segmentos.reduce(
  (soma, segmento) => soma + segmento.clientes.length,
  0,
);

export default function PaginaClientes() {
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
              <li className="text-white/70">Clientes</li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <Eyebrow escuro>Prova de campo</Eyebrow>
              <h1 className="mt-6 max-w-[16ch] text-balance text-[2.25rem] leading-[1.06] font-bold tracking-[-0.03em] md:text-[3.5rem]">
                Clientes que já compram conosco
              </h1>
              <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-white/65">
                {site.numerosContexto} Abaixo estão {total} contratantes,
                agrupados pelo tipo de edificação atendida.
              </p>
            </div>

            <CtaPar mensagem="Olá! Gostaria de solicitar um orçamento." />
          </div>
        </Container>
      </Secao>

      {/* Números, para dar escala à grade que vem em seguida */}
      <Secao tom="claro" className="py-14 md:py-16">
        <Container>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {site.numeros.map((numero) => (
              <div key={numero.rotulo}>
                <dt className="font-mono text-3xl font-semibold text-navy-900 tabular-nums md:text-4xl">
                  {numero.valor}
                </dt>
                <dd className="mt-2 max-w-[20ch] text-sm leading-snug text-steel-600">
                  {numero.rotulo}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Secao>

      {/* Grades por segmento. Alterna a superfície para as seções não
          se fundirem num vão branco só. */}
      {segmentos.map((segmento, indice) => (
        <Secao
          key={segmento.nome}
          tom={indice % 2 === 0 ? "tela" : "claro"}
        >
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>Clientes atendidos</Eyebrow>
              <TituloSecao>{segmento.nome}</TituloSecao>
              <p className="mt-5 leading-relaxed text-steel-600">
                {segmento.texto}
              </p>
            </div>

            <ul className="mt-12 grid grid-cols-2 gap-px border border-steel-200 bg-steel-200 sm:grid-cols-3 lg:grid-cols-5">
              {segmento.clientes.map((cliente) => (
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
          </Container>
        </Secao>
      ))}

      {/* Nota de avaliação e ressalva de uso de marca */}
      <Secao tom="tela" className="py-14 md:py-16">
        <Container>
          <div className="flex flex-col gap-5 border-t border-steel-200 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[62ch] text-sm leading-relaxed text-steel-600">
              A lista reúne contratantes de serviços de proteção contra queda em
              altura. A presença de uma marca aqui indica atendimento prestado,
              e não parceria ou endosso.
            </p>
            <a
              href={linkGoogleMaps}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm text-steel-600 underline decoration-steel-200 underline-offset-4 transition-colors hover:text-navy-900 hover:decoration-navy-900"
            >
              <span className="font-mono font-medium text-navy-900">
                {site.avaliacoes.nota}
              </span>
              no Google, com {site.avaliacoes.quantidade} avaliações
              <Seta />
            </a>
          </div>
        </Container>
      </Secao>

      <CtaFinal
        titulo="Sua edificação é a próxima?"
        texto="Fale com a nossa equipe técnica e receba uma avaliação para a sua obra ou condomínio."
        mensagem="Olá! Gostaria de solicitar um orçamento."
      />

      <JsonLd
        data={migalhasSchema([
          { nome: "Início", caminho: "/" },
          { nome: "Clientes", caminho: "/clientes" },
        ])}
      />
    </>
  );
}

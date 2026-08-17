import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Clientes } from "@/components/blocos/clientes";
import { CtaFinal } from "@/components/blocos/cta-final";
import { Numeros } from "@/components/blocos/numeros";
import { ResponsavelTecnico } from "@/components/blocos/responsavel-tecnico";
import { JsonLd } from "@/components/seo/json-ld";
import {
  Container,
  Eyebrow,
  Secao,
  TituloSecao,
} from "@/components/ui/primitivos";
import { site } from "@/content/site";
import { sobre } from "@/content/sobre";
import { migalhasSchema, pessoaSchema } from "@/lib/schema";
import { montarMetadata } from "@/lib/seo";

export const metadata: Metadata = montarMetadata({
  titulo: "A Empresa",
  descricao:
    "O Grupo RF Engenharia reúne projeto, fabricação e locação em proteção contra queda em altura, com estrutura própria e responsabilidade técnica registrada no CREA.",
  caminho: "/sobre",
});

export default function PaginaSobre() {
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
              <li className="text-white/70">A Empresa</li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-20">
            <div>
              <Eyebrow escuro>{sobre.hero.eyebrow}</Eyebrow>
              <h1 className="mt-6 text-balance text-[2.25rem] leading-[1.06] font-bold tracking-[-0.03em] md:text-[3.5rem]">
                {sobre.hero.titulo}
              </h1>
            </div>

            <div className="lg:pt-20">
              {sobre.hero.texto.map((paragrafo) => (
                <p
                  key={paragrafo}
                  className="mt-5 leading-relaxed text-white/65 first:mt-0"
                >
                  {paragrafo}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Secao>

      {/* As três empresas do grupo */}
      <Secao tom="claro">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Estrutura societária</Eyebrow>
            <TituloSecao>Três empresas, um ciclo fechado</TituloSecao>
          </div>

          <ul className="mt-14 grid gap-px border border-steel-200 bg-steel-200 md:grid-cols-3">
            {site.grupo.map((empresa, indice) => (
              <li key={empresa.nome} className="bg-white p-8">
                <span className="font-mono text-xs font-semibold text-amber-600">
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-balance text-lg leading-snug font-bold text-navy-900">
                  {empresa.nome}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-600">
                  {empresa.descricao}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Secao>

      <Numeros />

      {/* Estrutura física */}
      <Secao tom="tela">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>{sobre.estrutura.eyebrow}</Eyebrow>
            <TituloSecao>{sobre.estrutura.titulo}</TituloSecao>
            <p className="mt-5 text-lg leading-relaxed text-steel-600">
              {sobre.estrutura.texto}
            </p>
          </div>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sobre.estrutura.imagens.map((imagem) => (
              <li key={imagem.src}>
                <figure>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-sm border border-steel-200">
                    <Image
                      src={imagem.src}
                      alt={imagem.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="label-tech mt-3 text-steel-400">
                    {imagem.legenda}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </Secao>

      <ResponsavelTecnico />

      {/* Normas */}
      <Secao tom="tela">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Conformidade</Eyebrow>
            <TituloSecao>Normas aplicadas</TituloSecao>
          </div>

          <dl className="mt-12 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {site.normas.map((norma) => (
              <div key={norma.sigla} className="bg-white p-7">
                <dt className="font-mono text-xl font-semibold text-navy-900">
                  {norma.sigla}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-steel-600">
                  {norma.descricao}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Secao>

      <Clientes />

      <CtaFinal
        titulo="Quer conhecer nossa estrutura?"
        texto="Fale com a nossa equipe e agende uma visita técnica ou solicite um orçamento."
        mensagem="Olá! Gostaria de conhecer melhor a RF Engenharia."
      />

      <JsonLd
        data={migalhasSchema([
          { nome: "Início", caminho: "/" },
          { nome: "A Empresa", caminho: "/sobre" },
        ])}
      />
      <JsonLd data={pessoaSchema()} />
    </>
  );
}

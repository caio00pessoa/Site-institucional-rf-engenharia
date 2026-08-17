import Image from "next/image";

import { Clientes } from "@/components/blocos/clientes";
import { CtaFinal } from "@/components/blocos/cta-final";
import { GradeServicos } from "@/components/blocos/grade-servicos";
import { Numeros } from "@/components/blocos/numeros";
import { ResponsavelTecnico } from "@/components/blocos/responsavel-tecnico";
import { CtaPar } from "@/components/ui/cta-par";
import {
  Container,
  Eyebrow,
  Secao,
  TituloSecao,
} from "@/components/ui/primitivos";
import { home } from "@/content/home";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/* Hero. A foto disponível tem 490px de largura, então vive    */}
      {/* num painel contido e a malha técnica sustenta a área grande */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div aria-hidden="true" className="blueprint absolute inset-0" />
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-indigo-500/20 blur-[120px]"
        />

        <Container className="relative">
          {/*
            Ordem no mobile: título, CTA, foto, normas. A faixa de normas
            vinha antes da foto e empurrava a imagem para muito abaixo da
            primeira tela. No desktop o posicionamento de grid devolve as
            normas para a coluna da esquerda.
          */}
          <div className="grid items-start gap-10 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:gap-20">
            <div className="lg:col-start-1 lg:row-start-1">
              <Eyebrow escuro>{home.hero.eyebrow}</Eyebrow>

              <h1 className="mt-6 max-w-[16ch] text-balance text-[2.5rem] leading-[1.05] font-bold tracking-[-0.03em] md:text-[4rem]">
                {home.hero.titulo}
              </h1>

              <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-white/65">
                {home.hero.subtitulo}
              </p>

              <CtaPar
                className="mt-10"
                mensagem={home.hero.whatsappMensagem}
                rotulo="Solicitar orçamento"
              />
            </div>

            <figure className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/15">
                <Image
                  src={home.hero.imagem.src}
                  alt={home.hero.imagem.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 27rem, 100vw"
                  className="object-cover"
                />

                {/*
                  Detalhe do produto, encaixado no canto da foto de obra:
                  a foto dá o contexto, o olhal dá a prova de fabricação.
                */}
                <div className="absolute bottom-3 left-3 w-24 sm:w-28">
                  <div className="relative aspect-square overflow-hidden rounded-xs border border-white/30 bg-navy-900 shadow-lift-strong">
                    <Image
                      src={home.hero.detalhe.src}
                      alt={home.hero.detalhe.alt}
                      fill
                      loading="eager"
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  {/* Chip sólido: o texto cai sobre a foto e sem fundo
                      próprio ele some no meio da imagem. */}
                  <p className="mt-1.5 inline-block rounded-xs bg-navy-900/90 px-1.5 py-1 text-[0.625rem] leading-none font-medium text-white">
                    {home.hero.detalhe.legenda}
                  </p>
                </div>
              </div>

              <figcaption className="mt-4 flex items-center justify-between gap-4 border-t border-white/15 pt-4 text-xs text-white/50">
                <span>{home.hero.imagem.legenda}</span>
                <span className="shrink-0 font-mono text-amber-500">
                  {home.hero.detalhe.norma}
                </span>
              </figcaption>
            </figure>

            <dl className="grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8 lg:col-start-1 lg:row-start-2">
              {site.normas.slice(0, 3).map((norma) => (
                <div key={norma.sigla}>
                  <dt className="font-mono text-sm font-semibold text-amber-500">
                    {norma.sigla}
                  </dt>
                  <dd className="mt-1.5 text-xs leading-snug text-white/45">
                    {norma.descricao}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <GradeServicos />

      {/*
        Prova. As três afirmações que temos como mostrar vêm com foto da
        estrutura real; as outras três seguem como lista até chegarem as
        fotos de ensaio, lacre e laudo.
      */}
      <Secao tom="claro">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>{home.prova.eyebrow}</Eyebrow>
            <TituloSecao>{home.prova.titulo}</TituloSecao>
            <p className="mt-5 text-lg leading-relaxed text-steel-600">
              {home.prova.texto}
            </p>
          </div>

          <ul className="mt-14 grid gap-8 md:grid-cols-3">
            {home.prova.comFoto.map((item) => (
              <li key={item.titulo}>
                <figure>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-sm border border-steel-200">
                    <Image
                      src={item.imagem.src}
                      alt={item.imagem.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="label-tech mt-3 text-steel-400">
                    {item.imagem.legenda}
                  </figcaption>
                </figure>
                <h3 className="mt-4 font-semibold text-navy-900">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {item.texto}
                </p>
              </li>
            ))}
          </ul>

          <ul className="mt-14 grid gap-x-10 gap-y-px border-t border-steel-200 sm:grid-cols-3">
            {home.prova.semFoto.map((item) => (
              <li key={item.titulo} className="py-6">
                <h3 className="font-semibold text-navy-900">{item.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {item.texto}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Secao>

      <Numeros />

      <ResponsavelTecnico />

      <Clientes limite={12} />

      <CtaFinal
        titulo={home.ctaFinal.titulo}
        texto={home.ctaFinal.texto}
        mensagem={home.ctaFinal.whatsappMensagem}
      />
    </>
  );
}

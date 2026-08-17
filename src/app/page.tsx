import Image from "next/image";

import { Clientes } from "@/components/blocos/clientes";
import { CtaFinal } from "@/components/blocos/cta-final";
import { GradeServicos } from "@/components/blocos/grade-servicos";
import { Numeros } from "@/components/blocos/numeros";
import { ResponsavelTecnico } from "@/components/blocos/responsavel-tecnico";
import {
  Botao,
  Container,
  Eyebrow,
  Secao,
  Seta,
  TituloSecao,
} from "@/components/ui/primitivos";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { linkContato, rotuloContato, temWhatsapp } from "@/lib/whatsapp";

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
          <div className="grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-20">
            <div>
              <Eyebrow escuro>{home.hero.eyebrow}</Eyebrow>

              <h1 className="mt-6 max-w-[16ch] text-balance text-[2.5rem] leading-[1.05] font-bold tracking-[-0.03em] md:text-[4rem]">
                {home.hero.titulo}
              </h1>

              <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-white/65">
                {home.hero.subtitulo}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Botao
                  href={linkContato(home.hero.whatsappMensagem)}
                  variante="acento"
                  externo
                >
                  {rotuloContato("Solicitar orçamento")}
                  <Seta />
                </Botao>
                {temWhatsapp() && (
                  <Botao href={site.telefone.href} variante="contorno-claro">
                    <span className="font-mono">{site.telefone.exibicao}</span>
                  </Botao>
                )}
              </div>

              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
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

            <figure className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/15">
                <Image
                  src={home.hero.imagem.src}
                  alt={home.hero.imagem.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 26rem, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between border-t border-white/15 pt-4 font-mono text-xs text-white/50">
                <span>Olhal de ancoragem, aço inox</span>
                <span className="text-amber-500">NBR 16325-1</span>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <GradeServicos />

      {/* Diferenciais */}
      <Secao tom="claro">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
            <div>
              <Eyebrow>{home.diferenciais.eyebrow}</Eyebrow>
              <TituloSecao className="max-w-[14ch]">
                {home.diferenciais.titulo}
              </TituloSecao>
            </div>

            <ul className="grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2">
              {home.diferenciais.itens.map((item) => (
                <li key={item.titulo} className="bg-white p-7">
                  <h3 className="font-semibold text-navy-900">{item.titulo}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-steel-600">
                    {item.texto}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Secao>

      <Numeros />

      {/* Estrutura própria. Únicas fotos 1200x800 do acervo. */}
      <Secao tom="tela">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>{home.estrutura.eyebrow}</Eyebrow>
            <TituloSecao>{home.estrutura.titulo}</TituloSecao>
            <p className="mt-5 text-lg leading-relaxed text-steel-600">
              {home.estrutura.texto}
            </p>
          </div>

          <ul className="mt-14 grid gap-4 md:grid-cols-3">
            {home.estrutura.imagens.map((imagem) => (
              <li
                key={imagem.src}
                className="relative aspect-[3/2] overflow-hidden rounded-sm border border-steel-200"
              >
                <Image
                  src={imagem.src}
                  alt={imagem.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </Container>
      </Secao>

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

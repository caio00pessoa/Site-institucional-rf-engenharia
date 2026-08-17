import Image from "next/image";
import Link from "next/link";

import {
  Container,
  Eyebrow,
  Secao,
  Seta,
  TituloSecao,
} from "@/components/ui/primitivos";
import { servicos } from "@/content/servicos";

/**
 * Cards dos serviços.
 *
 * As fotos herdadas do site antigo têm no máximo 500px de largura, por
 * isso a imagem vive dentro de um card contido em 3/2, e nunca em área
 * full-bleed onde o upscale apareceria.
 */
export function GradeServicos({
  tom = "tela",
}: {
  tom?: "tela" | "claro";
}) {
  return (
    <Secao tom={tom} id="servicos">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Serviços</Eyebrow>
            <TituloSecao className="max-w-[16ch]">
              Segurança do trabalho em altura
            </TituloSecao>
          </div>
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-indigo-500"
          >
            Ver todos os serviços
            <Seta />
          </Link>
        </div>

        <ul className="mt-14 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((servico) => (
            <li key={servico.slug} className="bg-white">
              <Link
                href={`/servicos/${servico.slug}`}
                className="group flex h-full flex-col transition-colors hover:bg-steel-50"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-navy-900">
                  <Image
                    src={servico.imagem.src}
                    alt={servico.imagem.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg leading-snug font-bold tracking-[-0.01em] text-navy-900 text-balance">
                    {servico.nomeCurto}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-600">
                    {servico.resumo}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-500">
                    Saiba mais
                    <Seta className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Secao>
  );
}

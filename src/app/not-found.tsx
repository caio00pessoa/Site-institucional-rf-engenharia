import Link from "next/link";

import { Botao, Container, Eyebrow, Seta } from "@/components/ui/primitivos";
import { servicos } from "@/content/servicos";

/**
 * O mapa de redirects das URLs antigas é parcial, então esta página
 * ainda vai receber tráfego de links quebrados. Por isso ela oferece
 * as rotas de serviço em vez de só dizer "não encontrado".
 */
export default function NaoEncontrado() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div aria-hidden="true" className="blueprint absolute inset-0" />
      <Container className="relative">
        <div className="max-w-2xl py-24 md:py-32">
          <Eyebrow escuro>Erro 404</Eyebrow>
          <h1 className="mt-6 text-balance text-[2.25rem] leading-[1.06] font-bold tracking-[-0.03em] md:text-[3.5rem]">
            Esta página não existe mais
          </h1>
          <p className="mt-6 leading-relaxed text-white/65">
            O endereço pode ter mudado. Veja os nossos serviços ou volte para
            a página inicial.
          </p>

          <ul className="mt-10 border-t border-white/15">
            {servicos.map((servico) => (
              <li key={servico.slug} className="border-b border-white/15">
                <Link
                  href={`/servicos/${servico.slug}`}
                  className="group flex items-center justify-between gap-6 py-4 text-lg font-semibold transition-colors hover:text-amber-500"
                >
                  {servico.nomeCurto}
                  <Seta className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Botao href="/" variante="acento">
              Voltar para o início
              <Seta />
            </Botao>
          </div>
        </div>
      </Container>
    </section>
  );
}

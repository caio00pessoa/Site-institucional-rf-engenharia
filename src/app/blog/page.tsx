import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaFinal } from "@/components/blocos/cta-final";
import { JsonLd } from "@/components/seo/json-ld";
import {
  Container,
  Eyebrow,
  Secao,
  Seta,
} from "@/components/ui/primitivos";
import { posts } from "@/content/blog";
import { migalhasSchema } from "@/lib/schema";
import { montarMetadata } from "@/lib/seo";

/**
 * Enquanto `posts` estiver vazio a rota responde 404 e sai do índice.
 * Ver o comentário em src/content/blog.ts: a estrutura fica pronta, o
 * blog só abre quando houver plano de pauta.
 */
export const metadata: Metadata = {
  ...montarMetadata({
    titulo: "Blog",
    descricao:
      "Conteúdo técnico sobre trabalho em altura, normas e proteção contra queda.",
    caminho: "/blog",
  }),
  robots: posts.length === 0 ? { index: false, follow: false } : undefined,
};

export default function PaginaBlog() {
  if (posts.length === 0) notFound();

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
              <li className="text-white/70">Blog</li>
            </ol>
          </nav>

          <div className="mt-10 max-w-3xl">
            <Eyebrow escuro>Conteúdo</Eyebrow>
            <h1 className="mt-6 text-balance text-[2.25rem] leading-[1.06] font-bold tracking-[-0.03em] md:text-[3.5rem]">
              Blog
            </h1>
          </div>
        </Container>
      </Secao>

      <Secao tom="tela">
        <Container>
          <ul className="grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug} className="bg-white">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col p-7 transition-colors hover:bg-steel-50"
                >
                  <time
                    dateTime={post.publicadoEm}
                    className="font-mono text-xs text-steel-400"
                  >
                    {post.publicadoEm}
                  </time>
                  <h2 className="mt-4 text-lg font-bold tracking-[-0.01em] text-navy-900 text-balance">
                    {post.titulo}
                  </h2>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-steel-600">
                    {post.descricao}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-500">
                    Ler
                    <Seta className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Secao>

      <CtaFinal
        titulo="Precisa de um orçamento técnico?"
        texto="Fale com nossa equipe e receba uma avaliação para a sua edificação ou obra."
        mensagem="Olá! Gostaria de solicitar um orçamento."
      />

      <JsonLd
        data={migalhasSchema([
          { nome: "Início", caminho: "/" },
          { nome: "Blog", caminho: "/blog" },
        ])}
      />
    </>
  );
}

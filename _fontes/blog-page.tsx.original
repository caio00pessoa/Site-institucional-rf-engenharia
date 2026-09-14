import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaFinal } from "@/components/blocos/cta-final";
import { JsonLd } from "@/components/seo/json-ld";
import { Container, Eyebrow, Secao } from "@/components/ui/primitivos";
import { postPorSlug, posts } from "@/content/blog";
import { migalhasSchema } from "@/lib/schema";
import { montarMetadata } from "@/lib/seo";

/** Sem post cadastrado, nenhuma rota é gerada e tudo cai em 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = postPorSlug(slug);
  if (!post) return {};

  return montarMetadata({
    titulo: post.titulo,
    descricao: post.descricao,
    caminho: `/blog/${post.slug}`,
  });
}

export default async function PaginaPost({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = postPorSlug(slug);
  if (!post) notFound();

  return (
    <>
      <Secao tom="navy" className="pt-16 pb-16 md:pt-20 md:pb-20">
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
                <Link href="/blog" className="hover:text-amber-500">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70">{post.titulo}</li>
            </ol>
          </nav>

          <div className="mt-10 max-w-3xl">
            <Eyebrow escuro>Conteúdo</Eyebrow>
            <h1 className="mt-6 text-balance text-[2.25rem] leading-[1.06] font-bold tracking-[-0.03em] md:text-[3rem]">
              {post.titulo}
            </h1>
            <time
              dateTime={post.publicadoEm}
              className="mt-6 block font-mono text-sm text-white/40"
            >
              {post.publicadoEm}
            </time>
          </div>
        </Container>
      </Secao>

      <Secao tom="claro">
        <Container>
          <div className="max-w-[68ch]">
            {post.paragrafos.map((paragrafo) => (
              <p
                key={paragrafo}
                className="mt-5 leading-relaxed text-steel-700 first:mt-0"
              >
                {paragrafo}
              </p>
            ))}
          </div>
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
          { nome: post.titulo, caminho: `/blog/${post.slug}` },
        ])}
      />
    </>
  );
}

/**
 * BLOG, estrutura pronta e vazia por decisão.
 * ------------------------------------------------------------------
 * O site antigo tinha blog: os redirects de /category/* e /tag/* em
 * next.config.ts são o resíduo disso. A estrutura fica pronta aqui, mas
 * o blog só abre quando houver plano de pauta: blog sem cadência de
 * publicação envelhece e passa impressão de empresa parada.
 *
 * Enquanto `posts` estiver vazio, /blog e /blog/[slug] respondem 404 e
 * ficam fora do sitemap. Para abrir, basta preencher o array: as duas
 * rotas passam a listar e a renderizar sozinhas.
 * ------------------------------------------------------------------
 */

export type Post = {
  slug: string;
  titulo: string;
  descricao: string;
  /** ISO 8601, por exemplo "2026-09-05". */
  publicadoEm: string;
  /** Cada item é um parágrafo. */
  paragrafos: string[];
};

export const posts: Post[] = [];

export const postPorSlug = (slug: string): Post | undefined =>
  posts.find((post) => post.slug === slug);

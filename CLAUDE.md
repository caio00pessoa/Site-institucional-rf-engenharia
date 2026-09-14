# Site institucional Grupo RF Engenharia

Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind v4 · deploy Vercel.
Site 100% estático: todas as rotas são pré-renderizadas no build.

## Comandos

```bash
npm run dev         # desenvolvimento
npm run build       # build de produção
npm run start       # servir o build
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
npm run pendencias  # lista tudo marcado [CONFIRMAR]
```

## Regras não negociáveis

1. **Conteúdo mora em `src/content/`, nunca no componente.** Se você está prestes a escrever copy dentro de um `.tsx`, pare e coloque em `src/content/`.
2. **Nunca usar travessão (—) no texto visível.** O cliente identifica como "cara de IA". Use vírgula, ponto ou dois pontos.
3. **Copy em português do Brasil.** Arquivos em kebab-case, componentes em PascalCase, props e chaves de dados em português.
4. **Dado não confirmado leva `[CONFIRMAR]` no próprio valor.** Rode `npm run pendencias` antes de qualquer publicação.
5. **Nada de `AggregateRating` no JSON-LD.** A nota 4,8 vem do perfil do Google, não de avaliações coletadas aqui. Marcar avaliação autodeclarada contraria a diretriz do Google e pode gerar ação manual. A nota aparece como texto.
6. **`"use client"` só onde há estado de UI.** Hoje existe em um arquivo só: `components/layout/menu-mobile.tsx`. O resto é RSC.

## Design tokens

Definidos em `src/app/globals.css`, no bloco `@theme`. Nunca hardcode cor fora dos tokens.

| Token | Valor | Uso |
|---|---|---|
| `navy-900` | `#080a3a` | Fundo das seções escuras |
| `navy-700` | `#0d0f55` | Navy do logo, cor primária |
| `indigo-500` | `#2d3092` | Azul-violeta do logo, links |
| `amber-500` | `#f2a81d` | Acento de segurança, dados, CTA |
| `amber-600` | `#c4820a` | Âmbar sobre fundo claro (contraste AA) |
| `whatsapp` | `#25d366` | Só no botão de WhatsApp |
| `steel-50` | `#f6f7f9` | Fundo de página |
| `steel-200` | `#e3e6eb` | Bordas |
| `ink` | `#14171f` | Texto principal |

Tipografia: **Archivo** (títulos, corpo e rótulos) e **IBM Plex Mono**, ambas por `next/font/google`, que faz self-host no build. Zero requisição a domínio externo.

> **Mono só onde há dado.** `IBM Plex Mono` é para número, norma, CREA, telefone e ficha técnica. Rótulo de seção, breadcrumb, legenda e texto corrido usam Archivo. Mono em tudo dava ao site cara de painel de infraestrutura em vez de empresa de engenharia.

> **Malha técnica com parcimônia.** A `.blueprint` existe em três lugares e só: hero da home, faixa de números e CTA final. Heros de rota interna, páginas legais e 404 usam navy sólido (`tom="navy"`). Repetir a malha em toda página foi o que fez o site ler como template.

> **Numeração só quando a ordem é real.** `01/02/03` fica nas etapas do processo (`/servicos/[slug]`) e nas cláusulas dos documentos legais. Em card de serviço, empresa do grupo, formação ou estatística a numeração é decorativa e não entra.

Radius de 2 a 8px, pill só no botão flutuante. Elevação é borda de 1px, não sombra; sombra só em hover.

A paleta vem do logo. O âmbar vem do cinto paraquedista das fotos reais de obra: é a cor de sinalização de segurança do setor, não enfeite. Regra: **no máximo um elemento âmbar por dobra**.

**Legenda de foto descreve o que a foto mostra**, nunca a afirmação que ela apoia. Uma foto de galpão é legendada "Galpão próprio", e não "ensaio de arrancamento".

## Estrutura

```
src/
  app/           rotas, metadata, robots, sitemap, opengraph-image
  components/
    layout/      header, footer, menu mobile, botão flutuante
    ui/          primitivos (Secao, Container, Eyebrow, Botao, Seta)
    blocos/      seções compostas e reutilizáveis entre rotas
    seo/         JsonLd
  content/       TODO o conteúdo de negócio
  lib/           seo, schema, whatsapp, cn
_fontes/         material bruto do site antigo, fora do build
```

## SEO

- Toda rota passa por `montarMetadata()` de `src/lib/seo.ts`. Nenhuma página monta `Metadata` na mão.
- JSON-LD em `src/lib/schema.ts`, com nós ligados por `@id`. Grafo global (`Organization` + `GeneralContractor` + `WebSite`) no layout raiz; `Service`, `BreadcrumbList` e `FAQPage` por rota.
- `FAQPage` só é emitido com 2 ou mais perguntas, e as respostas precisam estar no HTML inicial. Por isso o accordion usa `<details>`, e não render condicional em JS.
- Redirects das URLs do site antigo em `next.config.ts`. `permanent: true` emite 308, que o Google trata como equivalente a 301. O mapa é parcial: veio do container de GTM antigo, porque o Wayback estava fora do ar. Monitorar 404 nas primeiras semanas e complementar.

## Contato

Não há formulário. **WhatsApp é o canal principal, com ligação ao lado**, mesma lógica das LPs.

Todo par de CTAs sai do componente `components/ui/cta-par.tsx`, usado no hero de todas as rotas, no CTA final e na página de contato. Isso mantém o par idêntico em todo o site: se mudar o rótulo, o ícone ou a ordem, muda num lugar só. O header e o menu mobile têm o mesmo par em versão compacta, e o botão flutuante repete a dupla no canto inferior.

O verde `whatsapp` é reservado a esse CTA e não aparece em nenhum outro lugar do sistema.

O número vive em `src/content/site.ts`. Hoje ele replica o das LPs, que é o próprio 0800.

> **Testar antes de publicar:** abra o botão num celular real. Se o 0800 não receber WhatsApp, `wa.me/5508003264378` não abre conversa e o lead se perde. Basta trocar `WHATSAPP_NUMERO` em `site.ts` que todos os CTAs, o header, o menu mobile e o botão flutuante acompanham.

## Material a pedir ao cliente

Cada item destes destrava uma melhoria já mapeada, então vale insistir:

| Material | Destrava |
|---|---|
| Foto do ensaio de arrancamento, do lacre numerado e de trecho de laudo ou ART | As três afirmações que hoje seguem só em texto na seção de prova da home |
| Depoimento autorizado e 2 ou 3 casos reais, com cliente, cidade e solução | Prova social de verdade, hoje é só grade de logo |
| Foto nova do Rafael em alta | Ele aparece pequeno em `/sobre` porque o arquivo atual tem 200x196 |
| Linha do tempo e parágrafo em primeira pessoa do responsável técnico | `/sobre` sair do registro institucional abstrato |
| Fotos de obra em alta (ancoragem instalada, linha de vida em cobertura, equipe em campo) | Heros de serviço com foto grande, hoje limitados pelos 500px de origem |
| Logo vetorial (SVG/AI/EPS) | Nitidez da marca em tela retina, ver a seção abaixo |
| Celular real com WhatsApp | Ver a seção Contato |

## Marca

Todos os arquivos foram derivados do único original disponível, `_fontes/logo rf engenharia - cópia.jpeg`, que tem **250x74 e fundo branco chapado, sem transparência**. O script que gerou as variantes recortou o fundo externo por flood fill a partir da borda, então o branco preso dentro do quadrado (as letras RF) foi preservado.

| Arquivo | Uso |
|---|---|
| `public/imagens/marca/logo-rf-engenharia.png` | Header e JSON-LD. Cor original, fundo transparente, 750x222 |
| `public/imagens/marca/logo-rf-engenharia-branco.png` | Rodapé e qualquer superfície navy. Monocromática branca, com as letras RF recortadas para o fundo escuro aparecer |
| `src/app/icon.png` | Favicon, 256x256. Só o quadrado do monograma, requantizado em duas cores para não borrar a 16px |
| `src/app/apple-icon.png` | Ícone de tela inicial iOS, 180x180 |

O `opengraph-image.tsx` lê o `icon.png` e embute como data URI, porque o `next/og` não resolve caminho relativo de imagem.

**Ao receber o vetor**, regerar as quatro variantes a partir dele: o upscale atual parte de 250px e fica macio em tela de alta densidade, principalmente na palavra "GRUPO".

## Restrição de imagem

As fotos herdadas do site antigo têm no máximo 500px de largura, e o retrato do responsável técnico tem 200x196. Só as 6 fotos de `public/imagens/estrutura/` estão em 1200x800.

Por isso o layout nunca usa foto em área full-bleed: as pequenas vivem em cards contidos, e a malha de prancha técnica (`.blueprint`) sustenta as áreas grandes. **Não mude isso sem receber material novo em alta.**

## De onde veio o conteúdo

O site antigo se perdeu e o Wayback Machine estava fora do ar durante a reconstrução. O conteúdo foi recuperado de:

1. Print de página inteira do site antigo (menu, rodapé, números, processo, aplicações, specs, FAQ, normas).
2. Uma tentativa anterior em Next.js, que preservou a copy dos 4 serviços e do responsável técnico.
3. O projeto de LPs em Astro (fotos, logos de clientes, dados de negócio).
4. O zip de assets do site antigo (fotos originais, telefones regionais no GTM, ponto do Google Maps).

O material bruto está em `_fontes/`.

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

Tipografia: **Archivo** (títulos e corpo) e **IBM Plex Mono** (labels, specs, números), ambas por `next/font/google`, que faz self-host no build. Zero requisição a domínio externo.

Radius de 2 a 8px, pill só no botão flutuante. Elevação é borda de 1px, não sombra; sombra só em hover.

A paleta vem do logo. O âmbar vem do cinto paraquedista das fotos reais de obra: é a cor de sinalização de segurança do setor, não enfeite. Regra: **no máximo um elemento âmbar por dobra**.

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

Não há formulário. A conversão é por WhatsApp e telefone, através de `src/lib/whatsapp.ts`.

`linkContato()` devolve `wa.me` quando existe número válido e cai para `tel:` quando não existe. Isso é proteção contra o bug herdado das LPs antigas, que montavam `wa.me/5508003264378` usando o próprio 0800. **Número 0800 não recebe WhatsApp**, então aquele link nunca abriu conversa nenhuma.

Enquanto `site.whatsapp.numero` estiver vazio, todos os CTAs viram ligação telefônica. Preencha o celular comercial real e os botões voltam a ser WhatsApp automaticamente.

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

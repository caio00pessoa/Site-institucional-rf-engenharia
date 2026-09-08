# Plano de páginas faltantes

Levantamento do que ainda falta para o site institucional ficar completo, feito a
partir das fontes do site antigo (`_fontes/`, mapa de redirects em `next.config.ts`,
resíduo de WordPress) e dos documentos de estratégia do cliente (projeto de LPs em
Astro, atas de reunião com o Rafael, contexto da operação).

## Como usar

- Cada página tem uma caixa `- [ ]`. Marque `- [x]` quando publicar.
- Antes de começar uma página, resolva as **Decisões pendentes** que ela depende.
- Toda página nova segue o **Padrão por página** no fim do documento.
- `Prioridade`: Alta (destrava receita ou corrige buraco de SEO), Média (melhora
  conversão e autoridade), Baixa (bom ter, sem urgência).
- `Esforço`: P (1 sessão), M (2 a 3 sessões), G (várias sessões ou depende de
  material do cliente).

## Decisões pendentes (resolver com o Rafael ou o Caio antes de construir)

- [x] **D1. RESOLVIDO: entra neste site.** Locação de balancim e gôndola entra neste site ou fica só em
  `rflocacao.com.br`?** É 60% do faturamento e hoje não aparece em lugar nenhum.
  Se entrar, define o Grupo A abaixo. Se não entrar, o site precisa pelo menos de
  um bloco "outras frentes do grupo" apontando para o `rflocacao.com.br`.
- [ ] **D2. Locação de máquinas e equipamentos e containers modulares ainda são
  linha ativa?** Aparecem no `site.grupo` (`src/content/site.ts`) e no contexto do
  cliente, mas não há material. Confirmar antes de planejar página.
- [x] **D3. RESOLVIDO: hub mais páginas nas praças com dado local.** Páginas regionais (Grupo C) no site institucional ou só nas LPs pagas?**
  O site antigo tinha `/instalacao-de-ancoragem-go`, `-mg`, `-ba` e havia lista de
  negativas "CANIBALIZAÇÃO" na conta de Ads. Risco de competir com as próprias LPs.
  Decidir se o institucional cobre SEO local orgânico ou se cede esse terreno.
- [x] **D4. RESOLVIDO: estrutura pronta em `src/content/blog.ts`, sem post e fora do sitemap.** Blog: existe fôlego editorial? Blog sem cadência de publicação
  envelhece e passa impressão de empresa parada. Só abrir se houver plano de pauta.
- [x] **D5. PENDENTE COM O CLIENTE. `/clientes` foi publicada sem eles.** Casos reais de obra: o cliente vai fornecer? A página de Obras
  (B1) fica muito melhor com 3 a 5 casos (cliente, cidade, solução, foto). Já foi
  pedido no `CLAUDE.md`. Sem isso, publica uma versão interina.

## Mapa do site antigo e status da migração

Reconstruído dos redirects (`next.config.ts`, vindos do container de GTM antigo),
do resíduo de WordPress e do conteúdo recuperado. Não há sitemap original: o site
saiu do ar e o Wayback estava fora durante a reconstrução.

| Rota antiga | Evidência | Status hoje |
|---|---|---|
| `/` | print de página inteira | Migrada: `/` |
| `/a-empresa`, `/sobre-nos` | redirect no GTM antigo | Migrada: `/sobre` (308 ativo) |
| `/instalacao-de-ancoragem` | redirect | Migrada: `/servicos/ancoragem-predial` |
| `/instalacao-de-ancoragem-go` | string no GTM | Redireciona para `/servicos/ancoragem-predial`. Conteúdo regional perdido |
| `/instalacao-de-ancoragem-mg` | string no GTM | Idem |
| `/instalacao-de-ancoragem-ba` | string no GTM | Idem |
| `/instalacao-de-ancoragem-:uf` | redirect coringa | Idem, qualquer UF |
| `/linha-de-vida` | redirect | Migrada: `/servicos/linha-de-vida` |
| `/construcao-metalica` | redirect | Migrada: `/servicos/construcao-metalica` |
| Projetos de Segurança do Trabalho | copy da tentativa anterior em Next.js | Migrada: `/servicos/projetos-seguranca-trabalho` |
| Contato | menu recuperado | Migrada: `/contato` |
| Blog e notícias (`/category/*`, `/tag/*`, `/wp-content/*`) | redirects de resíduo WordPress | Não reconstruído. Hoje tudo cai em `/` |
| Política de Privacidade, Termos de Uso | padrão de rodapé | Migradas, ainda em rascunho com `[CONFIRMAR]` |

**Leitura:** a migração página a página está quase completa. O que falta de fato do
site antigo é o **blog** e o **conteúdo regional de ancoragem**. O buraco maior não
é o site antigo, é que o site novo cobre só 4 serviços de engenharia e o grupo
vende bem mais que isso (ver Grupo A).

## Rotas que já existem

`/` · `/sobre` · `/servicos` · `/servicos/ancoragem-predial` ·
`/servicos/linha-de-vida` · `/servicos/locacao-de-balancim` ·
`/servicos/inspecao-e-manutencao` · `/servicos/projetos-seguranca-trabalho` ·
`/servicos/construcao-metalica` · `/clientes` · `/perguntas-frequentes` ·
`/onde-atuamos` · `/onde-atuamos/brasilia-df` · `/onde-atuamos/goiania-go` ·
`/contato` · `/politica-de-privacidade` · `/termos-de-uso` ·
404 (`not-found.tsx`) · erro (`error.tsx`, `global-error.tsx`)

`/blog` e `/blog/[slug]` existem no código mas respondem 404 enquanto o array de
posts estiver vazio.

---

## Grupo A: linhas de negócio ausentes

O grupo tem três empresas (`src/content/site.ts`, campo `grupo`). O site só mostra
o lado "projeto e instalação de proteção contra queda". Falta o resto.

### A1. Locação de balancim elétrico e gôndola
- [x] Publicar em `/servicos/locacao-de-balancim`
- **Rota sugerida:** `/servicos/locacao-de-balancim` ou seção própria fora de `/servicos`
- **Prioridade:** Alta (60% do faturamento do grupo). **Esforço:** M
- **Depende de:** D1
- **Fontes de conteúdo prontas:** projeto de LPs em Astro
  (`RF Engenharia - LP/src/data/lp-balancim-sp.ts`, `lp-balancim-df.ts`,
  `lp-balancim-go.ts`), `# Textos ... .md` do mesmo projeto, `_referencia/code.html`
  e `_referencia/screen.png`, atas `reuniao-2026-07-21-rafael.md` e
  `contexto-cliente-rf-engenharia.md`. Racional de venda já validado com o Rafael:
  vender a empresa e a solução completa (equipamento, frete, mão de obra,
  documentação, ART), não o produto.
- **Notas:** se D1 der negativo, esta página vira só um card "leia mais em
  rflocacao.com.br" na home e no hub de serviços.

### A2. Inspeção e manutenção anual de sistemas
- [x] Publicar em `/servicos/inspecao-e-manutencao`
- **Rota sugerida:** `/servicos/inspecao-e-manutencao`
- **Prioridade:** Alta (receita recorrente, intenção de busca clara, encaixa no
  foco atual do site). **Esforço:** P
- **Depende de:** confirmar escopo e periodicidade com o responsável técnico
- **Fontes de conteúdo prontas:** FAQ da ancoragem em `src/content/servicos.ts`
  (periodicidade, garantia de 5 anos, laudo define a periodicidade exata), plano de
  90 dias no contexto do cliente ("ativar campanhas de inspeção anual"), menção a
  "certificado de inspeção" nas LPs de ancoragem. As LPs confirmam que a RF tem
  oficina de inspeção própria (`public/imagens/estrutura/oficina-inspecao.webp`).
- **Notas:** cobre inspeção de ancoragem, linha de vida e SPIQ. Marcar com
  `[CONFIRMAR]` prazos, o que o laudo cobre e se inspeciona sistema instalado por
  terceiros.

### A3. Treinamentos NR (trabalho em altura)
- [ ] Publicar
- **Rota sugerida:** `/servicos/treinamentos`
- **Prioridade:** Média. **Esforço:** M
- **Depende de:** confirmar carga horária, se é presencial no centro de treinamento
  da RF ou no cliente, quem ministra, se emite certificado
- **Fontes de conteúdo prontas:** LPs aprovadas citam "centro de treinamento da RF"
  e "capacitação NR-35 teórica e prática para operadores"
  (`RF Engenharia - LP/src/data/lp-linha-de-vida-sp.ts`, `lp-ancoragem-predial-*.ts`),
  plano de 90 dias ("treinamentos NR").
- **Notas:** NR-35 (trabalho em altura) é o principal. Avaliar NR-18 e resgate e
  salvamento em altura. Tudo `[CONFIRMAR]`.

### A4. Fabricação e venda de material de ancoragem
- [x] Resolvido dentro de `/servicos/ancoragem-predial`, sem página separada
- **Rota sugerida:** seção nova em `/servicos/ancoragem-predial` ou página
  `/olhal-de-ancoragem`
- **Prioridade:** Média (campanha "BR Ancoragem e Material" existe hoje). **Esforço:** P
- **Depende de:** confirmar se vende olhal avulso para fora ou só junto com serviço
- **Fontes de conteúdo prontas:** ficha técnica completa já está em
  `src/content/servicos.ts` (specs da ancoragem tipo A1, aço inox 304 ou 316, 1.500
  e 2.500 kgf, carga de ruptura, certificados). A empresa "RF Soluções de Prevenção
  contra Quedas" no `site.grupo` é a que fabrica e distribui.
- **Notas:** pode começar como um bloco "somos fabricantes" com a ficha técnica e
  CTA de orçamento de material, sem virar loja.

### A5. Locação de máquinas e equipamentos, containers modulares
- [ ] Publicar
- **Rota sugerida:** a definir
- **Prioridade:** Baixa. **Esforço:** G
- **Depende de:** D2
- **Fontes de conteúdo prontas:** nenhuma. Só menção em `site.grupo` e no contexto
  do cliente.
- **Notas:** não construir sem confirmar que a linha está ativa e sem material.

---

## Grupo B: páginas institucionais

### B1. Obras realizadas e clientes
- [x] Publicado em `/clientes`, na versão interina, sem casos de obra
- **Rota sugerida:** `/obras` ou `/clientes`
- **Prioridade:** Média (prova social hoje é só grade de logo repetida). **Esforço:** M
- **Depende de:** D5
- **Fontes de conteúdo prontas:** `src/content/clientes.ts` (22 clientes),
  `RF Engenharia - LP/_referencia/logos-clientes/` (cerca de 75 logos, inclui
  hospitais, TSE, TRF1, Infraero, BNDES, ministérios). Números em `site.numeros`
  (1.150 edifícios, 130.000 pontos). Falta o que o `CLAUDE.md` já pede na seção
  "Material a pedir ao cliente": depoimento autorizado e 2 ou 3 casos reais com
  cliente, cidade e solução.
- **Notas:** versão interina possível já: grade de logos completa, recorte por
  segmento (hospitais, órgãos públicos, construtoras, aeroportos) e os números.
  Casos reais entram depois. Cuidado com a regra do `CLAUDE.md`: nada que sugira
  endosso ou parceria, principalmente com órgão público.

### B2. Perguntas frequentes (geral)
- [x] Publicado em `/perguntas-frequentes`
- **Rota sugerida:** `/perguntas-frequentes`
- **Prioridade:** Média. **Esforço:** P
- **Fontes de conteúdo prontas:** todo o FAQ por serviço já existe em
  `src/content/servicos.ts`. Basta agregar as perguntas que valem para o grupo todo
  (atendimento nacional, prazo, ART, o que é SPIQ, diferença entre proteção
  coletiva e individual) e deixar as específicas nas páginas de serviço.
- **Notas:** o componente `blocos/faq.tsx` e o `faqSchema` já existem e emitem
  `FAQPage` com 2 ou mais perguntas. Respostas precisam estar no HTML inicial
  (accordion em `<details>`, já é assim).

### B3. Página do responsável técnico
- [ ] Publicar
- **Rota sugerida:** `/sobre/responsavel-tecnico` ou expandir a seção em `/sobre`
- **Prioridade:** Baixa. **Esforço:** P
- **Depende de:** material que o `CLAUDE.md` já pede (foto nova do Rafael em alta,
  linha do tempo, parágrafo em primeira pessoa)
- **Fontes de conteúdo prontas:** `site.responsavelTecnico` (formação completa,
  CREA), bloco `responsavel-tecnico.tsx`, `pessoaSchema` em `lib/schema.ts`.
- **Notas:** hoje é uma seção em `/sobre` e na home. Só virar página se o cliente
  entregar linha do tempo e texto pessoal, senão fica pobre.

### B4. Trabalhe conosco
- [ ] Publicar
- **Rota sugerida:** `/trabalhe-conosco`
- **Prioridade:** Baixa. **Esforço:** P
- **Notas:** só se o cliente quiser receber currículo. Sem formulário no site
  (regra do `CLAUDE.md`), seria e-mail ou WhatsApp. Confirmar se faz sentido.

---

## Grupo C: SEO local e páginas regionais

### C1. Onde atuamos, unidades
- [x] Publicado em `/onde-atuamos`
- **Rota sugerida:** `/onde-atuamos` ou `/unidades`
- **Prioridade:** Média. **Esforço:** P
- **Depende de:** D3, confirmar endereços e telefones de cada praça
- **Fontes de conteúdo prontas:** `site.telefonesRegionais` (Brasília, Goiânia,
  Belo Horizonte), `site.endereco` e `site.geo` (matriz em Taguatinga Sul),
  contexto do cliente cita São Paulo e planos de abrir Recife.
- **Notas:** uma página só, com todas as praças e o mapa da matriz. Reforça
  atendimento nacional sem criar 20 páginas quase iguais.

### C2. Páginas por serviço e cidade
- [x] Publicadas como `/onde-atuamos/brasilia-df` e `/onde-atuamos/goiania-go`
- **Rota sugerida:** `/servicos/ancoragem-predial/[cidade]` ou similar
- **Prioridade:** Baixa. **Esforço:** G
- **Depende de:** D3 (decisão de negócio antes de qualquer código)
- **Fontes de conteúdo prontas:** LPs em Astro por praça
  (`ancoragem-predial-df`, `-sp`, `-go`, `linha-de-vida-sp`, `locacao-balancim-df`,
  `-go`), site antigo tinha `/instalacao-de-ancoragem-go`, `-mg`, `-ba`.
- **Notas:** risco real de canibalizar as LPs pagas e diluir o domínio com páginas
  finas. Se for fazer, poucas cidades (as 3 praças reais), conteúdo local de
  verdade (obras naquela cidade, tempo de deslocamento), não template trocando o
  nome da cidade. Coordenar com o Caio na parte de mídia.

---

## Grupo D: blog e conteúdo

### D1. Índice do blog
- [ ] Publicar
- **Rota sugerida:** `/blog`
- **Prioridade:** Baixa. **Esforço:** M
- **Depende de:** D4

### D2. Post do blog
- [ ] Publicar
- **Rota sugerida:** `/blog/[slug]`
- **Prioridade:** Baixa. **Esforço:** M (mais o custo contínuo de escrever)
- **Depende de:** D4
- **Fontes de conteúdo prontas:** as normas em `site.normas` e os FAQs dão pauta
  fácil (o que exige a NR-35, quando a ancoragem é obrigatória, como escolher entre
  aço inox 304 e 316, periodicidade de inspeção). O site antigo tinha blog
  (redirects de `/category/*` e `/tag/*`).
- **Notas:** conteúdo mora em `src/content/` como os outros. Avaliar MDX ou um
  array tipado. Só abrir com plano de pauta, senão não abrir.

---

## Grupo E: infraestrutura e SEO técnico

Não são páginas de conteúdo, mas entram no "site completo".

- [x] **E1. `src/app/error.tsx` e `global-error.tsx`.** Hoje só existe
  `not-found.tsx`. Erro de runtime cai na tela padrão do Next. Prioridade Média,
  esforço P.
- [x] **E2. `src/app/manifest.ts`.** Web app manifest (nome, ícones, cor de tema).
  Prioridade Baixa, esforço P.
- [x] **E3. `opengraph-image` por rota de serviço.** Hoje só a raiz tem. Uma imagem
  por serviço melhora o compartilhamento. Prioridade Baixa, esforço M.
- [ ] **E4. Completar o mapa de redirects.** O `CLAUDE.md` já avisa: o mapa em
  `next.config.ts` é parcial. Monitorar 404 no Search Console nas primeiras semanas
  e adicionar as rotas antigas que aparecerem. Prioridade Alta assim que o site
  publicar, esforço P e contínuo.
- [ ] **E5. Revisão jurídica de Política de Privacidade e Termos.** Já existem, mas
  são rascunho com `[CONFIRMAR]`. Rodar `npm run pendencias`. Prioridade Alta antes
  de publicar, esforço P (depende de terceiro).
- [ ] **E6. Página 500 e teste de `dynamicParams = false`.** Confirmar que slug
  inválido em `/servicos/[slug]` gera 404 estático (já configurado, validar no
  build).

---

## Ordem sugerida

**Onda 1, antes de publicar o site:** E5, E4, E1. Resolver D1 a D5.

**Onda 2, o que destrava receita:** A2 (inspeção), A1 (balancim, se D1 permitir),
A4 (material).

**Onda 3, autoridade e conversão:** B1 (obras), B2 (FAQ geral), A3 (treinamentos),
C1 (onde atuamos).

**Onda 4, se houver fôlego:** B3, D1 e D2 (blog), C2, A5, B4, E2, E3.

---

## Padrão por página

Checklist para cada página nova, seguindo o `CLAUDE.md`:

- [ ] Conteúdo em `src/content/<nome>.ts`, nunca no `.tsx`
- [ ] Sem travessão (`—`) em texto visível. Vírgula, ponto ou dois pontos
- [ ] Copy em português do Brasil, arquivo em kebab-case, componente em PascalCase
- [ ] Dado não confirmado com `[CONFIRMAR]` no valor. Rodar `npm run pendencias`
- [ ] Metadata por `montarMetadata()` de `src/lib/seo.ts`, nunca `Metadata` na mão
- [ ] JSON-LD adequado (`servicoSchema`, `migalhasSchema`, `faqSchema`) via `JsonLd`
- [ ] `FAQPage` só com 2 ou mais perguntas, respostas no HTML inicial
- [ ] Entrada nova em `src/app/sitemap.ts`
- [ ] Trilha de navegação (breadcrumb) no hero, padrão das rotas internas
- [ ] Par de CTAs por `components/ui/cta-par.tsx`, nada de CTA solto
- [ ] Hero de rota interna usa navy sólido (`tom="navy"`), sem a malha `.blueprint`
- [ ] Sem `AggregateRating` no JSON-LD. Nota do Google só como texto
- [ ] `"use client"` só se tiver estado de UI
- [ ] Link no `SiteHeader`, `SiteFooter` e `menu-mobile` se for página de topo de
  navegação. Hoje o menu tem só A Empresa, Serviços, Contato
- [ ] Respeitar a restrição de imagem: foto herdada tem no máximo 500px, nada de
  full-bleed sem material novo em alta
- [ ] `npm run lint` e `npm run typecheck` limpos, `npm run build` passa

# RF Engenharia: site institucional e landing pages

O repositório original foi baixado integralmente de https://github.com/caio00pessoa/Site-institucional-rf-engenharia. O histórico Git e os materiais em `_fontes/` foram preservados. Todas as 12 URLs Vercel fornecidas foram lidas e comparadas com os conteúdos.

## Conteúdo e conversão
Home renovada, seis páginas de serviço, páginas de clientes, empresa, regiões, Brasília, Goiânia, FAQ, contato e documentos institucionais. Fotos e marcas vieram do material fornecido. Dados numéricos pendentes não são apresentados como prova de resultado. Não foram inventados depoimentos.

Os formulários montam mensagens e abrem WhatsApp ou e-mail. O visitante conclui o envio no aplicativo. Não há backend de leads nem confirmação falsa de recebimento. Ligação e e-mail continuam disponíveis.

## Antes de usar em campanhas
- Validar no aparelho real se o número 0800 3264 378 recebe WhatsApp no link herdado `https://wa.me/5508003264378`. Se houver outro número comercial, atualizar `src/content/site.ts`.
- Confirmar telefones regionais, uso das marcas, documentação técnica e garantias. Os materiais detalhados do fornecedor foram preservados; as perguntas marcadas CONFIRMAR não são renderizadas.
- Definir o domínio em NEXT_PUBLIC_SITE_URL e refazer o build. O padrão corresponde à versão de revisão.
- O GTM antigo é GTM-5MSMHXMR. Só ativar NEXT_PUBLIC_GTM_ID após revisar consentimento, tags e destinos. Nenhuma tag externa está ativa por padrão na revisão.
- Eventos disponíveis no dataLayer: rf_contact_click (channel, page_path) e rf_quote_prepare (channel, service, page_path). Eles medem intenção/clique, não conversa efetiva nem venda. Configurar o acompanhamento de conversões e validar no Google Ads antes da campanha.
- Comparar anúncios e páginas por serviço, taxa de contato, leads qualificados e custo por oportunidade. Não há garantia de melhora de conversão sem dados de campanha.

## Publicação
Next.js estático, com output export e imagens locais. `npm ci` e `npm run build`. A pasta out contém a saída. Configuração Vercel incluída; não houve alteração no site Vercel existente nem push no GitHub do usuário.

O site de revisão foi disponibilizado de forma privada. Para receber tráfego do Google Ads, deverá ser publicado em domínio público com os contatos e mensuração validados.

A ferramenta WebMCP preencher_orcamento_rf preenche o mesmo formulário sem abrir aplicativos ou enviar dados. Validação em contexto WebMCP não disponível nesta execução; navegação visual em navegador não foi solicitada.

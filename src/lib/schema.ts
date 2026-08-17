import { site } from "@/content/site";
import type { Servico } from "@/content/servicos";
import { urlAbsoluta } from "@/lib/seo";

/**
 * Builders de JSON-LD.
 * ------------------------------------------------------------------
 * Os nós usam @id para se referenciarem entre si, em vez de repetir o
 * objeto inteiro em cada página.
 *
 * Decisão deliberada: NÃO emitimos AggregateRating. A nota 4,8 vem do
 * perfil do Google, não de avaliações coletadas neste site, e marcar
 * avaliação autodeclarada contraria a diretriz do Google e pode render
 * ação manual. A nota aparece como texto, com link para o perfil.
 * ------------------------------------------------------------------
 */

const ID_ORGANIZACAO = `${site.url}/#organizacao`;
const ID_UNIDADE = `${site.url}/#unidade-brasilia`;

const redesPreenchidas = site.redes
  .map((rede) => rede.url)
  .filter((url): url is string => url.length > 0);

const enderecoPostal = {
  "@type": "PostalAddress",
  streetAddress: site.endereco.logradouro,
  addressLocality: `${site.endereco.bairro}, ${site.endereco.cidade}`,
  addressRegion: site.endereco.uf,
  postalCode: site.endereco.cep,
  addressCountry: site.endereco.pais,
};

export function grafoGlobal() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ID_ORGANIZACAO,
        name: site.nome,
        alternateName: site.nomeCompleto,
        legalName: site.razaoSocial,
        taxID: site.cnpj,
        url: site.url,
        description: site.descricaoLonga,
        slogan: site.tagline,
        areaServed: { "@type": "Country", name: "Brasil" },
        logo: {
          "@type": "ImageObject",
          url: urlAbsoluta("/imagens/marca/logo-rf-engenharia.png"),
          width: 750,
          height: 222,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+55-800-326-4378",
          contactType: "sales",
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
        ...(redesPreenchidas.length ? { sameAs: redesPreenchidas } : {}),
      },
      {
        // Subtipo mais preciso que LocalBusiness para empreiteira.
        "@type": "GeneralContractor",
        "@id": ID_UNIDADE,
        name: `${site.nome}, unidade Brasília`,
        parentOrganization: { "@id": ID_ORGANIZACAO },
        url: site.url,
        telephone: "+55-800-326-4378",
        email: site.email,
        address: enderecoPostal,
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        priceRange: "$$",
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#site`,
        url: site.url,
        name: site.nomeCompleto,
        inLanguage: "pt-BR",
        publisher: { "@id": ID_ORGANIZACAO },
      },
    ],
  };
}

export function servicoSchema(servico: Servico) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: servico.nome,
    serviceType: servico.nome,
    description: servico.descricaoSeo,
    url: urlAbsoluta(`/servicos/${servico.slug}`),
    provider: { "@id": ID_ORGANIZACAO },
    areaServed: { "@type": "Country", name: "Brasil" },
  };
}

export function migalhasSchema(itens: { nome: string; caminho: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itens.map((item, indice) => ({
      "@type": "ListItem",
      position: indice + 1,
      name: item.nome,
      item: urlAbsoluta(item.caminho),
    })),
  };
}

/**
 * Só emitir quando as respostas estiverem visíveis no HTML inicial.
 * Por isso o accordion do site usa <details>, e não render condicional.
 */
export function faqSchema(perguntas: { pergunta: string; resposta: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: perguntas.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta.replace(/\s*\[CONFIRMAR\]\s*/g, "").trim(),
      },
    })),
  };
}

export function pessoaSchema() {
  const rt = site.responsavelTecnico;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: rt.nome,
    jobTitle: rt.cargo,
    worksFor: { "@id": ID_ORGANIZACAO },
    hasCredential: [rt.crea, ...rt.formacao].map((credencial) => ({
      "@type": "EducationalOccupationalCredential",
      name: credencial,
    })),
  };
}

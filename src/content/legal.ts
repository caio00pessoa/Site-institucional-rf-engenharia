import { site } from "@/content/site";

/**
 * Textos legais.
 *
 * [CONFIRMAR] Este é um RASCUNHO redigido para um site institucional
 * estático sem formulário e sem cadastro. Precisa de revisão jurídica
 * antes de publicar, e precisa ser atualizado se o site passar a
 * coletar dados diretamente.
 */

export type Secao = { titulo: string; paragrafos: string[] };
export type Documento = {
  titulo: string;
  atualizadoEm: string;
  intro: string;
  secoes: Secao[];
};

export const politicaPrivacidade: Documento = {
  titulo: "Política de Privacidade",
  // [CONFIRMAR] atualizar na data real da publicação, após revisão jurídica.
  atualizadoEm: "agosto de 2026",
  intro: `Esta política explica como o ${site.nomeCompleto} trata dados pessoais em relação a este site, em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).`,
  secoes: [
    {
      titulo: "Quais dados coletamos",
      paragrafos: [
        "Este site não possui formulário de cadastro nem área de login, e não solicita dados pessoais para navegação.",
        "Quando você entra em contato por WhatsApp, telefone ou e-mail, recebemos os dados que você mesmo nos envia, como nome, telefone, e-mail e as informações sobre a obra ou edificação. Usamos esses dados apenas para responder à solicitação e elaborar o orçamento.",
        "Coletamos ainda dados de navegação agregados por meio de ferramentas de análise, como páginas visitadas, origem do acesso e tipo de dispositivo. Esses dados não identificam você individualmente.",
      ],
    },
    {
      titulo: "Para que usamos",
      paragrafos: [
        "Para responder solicitações de orçamento e prestar suporte comercial e técnico.",
        "Para entender como o site é usado e melhorar o conteúdo e o desempenho das páginas.",
      ],
    },
    {
      titulo: "Com quem compartilhamos",
      paragrafos: [
        "Não vendemos e não cedemos dados pessoais a terceiros.",
        // [CONFIRMAR] nomear as ferramentas assim que definidas (Vercel, GTM, GA4).
        "Utilizamos serviços de terceiros para hospedagem e análise de tráfego, que podem processar dados técnicos de navegação em nosso nome.",
      ],
    },
    {
      titulo: "Cookies",
      paragrafos: [
        "Utilizamos cookies necessários ao funcionamento do site e, se habilitadas, ferramentas de análise de audiência. Você pode bloquear ou apagar cookies nas configurações do seu navegador, sem prejuízo à navegação.",
      ],
    },
    {
      titulo: "Seus direitos",
      paragrafos: [
        "A LGPD garante a você o direito de confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos ou desatualizados, solicitar anonimização ou eliminação, e revogar consentimento.",
        `Para exercer qualquer um desses direitos, escreva para ${site.email}.`,
      ],
    },
    {
      titulo: "Contato",
      paragrafos: [
        `${site.razaoSocial}, CNPJ ${site.cnpj}.`,
        `${site.endereco.completo}. E-mail: ${site.email}. Telefone: ${site.telefone.exibicao}.`,
      ],
    },
  ],
};

export const termosDeUso: Documento = {
  titulo: "Termos de Uso",
  // [CONFIRMAR] atualizar na data real da publicação, após revisão jurídica.
  atualizadoEm: "agosto de 2026",
  intro: `Ao navegar neste site, você concorda com os termos abaixo. Este site é mantido pelo ${site.nomeCompleto}.`,
  secoes: [
    {
      titulo: "Finalidade do site",
      paragrafos: [
        "Este site tem caráter informativo e institucional. Apresenta os serviços do grupo e os canais de contato comercial.",
        "As informações técnicas publicadas aqui, incluindo descrições de serviço, especificações e referências normativas, têm finalidade informativa e não substituem projeto, laudo ou parecer técnico elaborado para uma edificação específica.",
      ],
    },
    {
      titulo: "Orçamentos e contratação",
      paragrafos: [
        "A navegação neste site não gera proposta comercial nem obrigação de contratar. Preços, prazos e escopo são definidos em proposta formal, após avaliação técnica do caso.",
      ],
    },
    {
      titulo: "Propriedade intelectual",
      paragrafos: [
        "Os textos, imagens, marcas e demais materiais deste site pertencem ao Grupo RF Engenharia ou aos seus respectivos titulares, e não podem ser reproduzidos sem autorização prévia.",
        "As marcas de clientes exibidas pertencem às respectivas empresas e são apresentadas apenas para indicar obras atendidas.",
      ],
    },
    {
      titulo: "Links externos",
      paragrafos: [
        "Este site pode conter links para serviços de terceiros, como WhatsApp e Google Maps. Não somos responsáveis pelo conteúdo ou pelas políticas desses serviços.",
      ],
    },
    {
      titulo: "Alterações",
      paragrafos: [
        "Podemos atualizar estes termos a qualquer momento. A versão vigente é sempre a publicada nesta página.",
      ],
    },
  ],
};

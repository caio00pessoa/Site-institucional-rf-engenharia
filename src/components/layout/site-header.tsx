import Image from "next/image";
import Link from "next/link";

import { MenuMobile } from "@/components/layout/menu-mobile";
import { IconeTelefone, IconeWhatsapp } from "@/components/ui/icones";
import { navPrincipal, site } from "@/content/site";
import { linkContato } from "@/lib/whatsapp";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-steel-200 bg-white/90 backdrop-blur-md">
      <div className="container-rf flex h-18 items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0"
          aria-label={`${site.nomeCompleto}, ir para a página inicial`}
        >
          {/*
            Logo oficial. O arquivo de origem é um JPEG 250x74 com fundo
            branco chapado; a versão .png foi gerada com o fundo externo
            recortado, por isso pode entrar sobre a superfície do header.
            [CONFIRMAR] pedir o vetor ao cliente para ganhar nitidez.
          */}
          <Image
            src="/imagens/marca/logo-rf-engenharia.png"
            alt={`${site.nomeCompleto}, ${site.tagline}`}
            width={750}
            height={222}
            priority
            sizes="(min-width: 768px) 190px, 158px"
            className="h-auto w-[158px] md:w-[190px]"
          />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-9 md:flex"
        >
          {navPrincipal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-steel-700 transition-colors hover:text-navy-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={site.telefone.href}
            className="inline-flex items-center gap-2 rounded-sm border border-steel-200 px-4 py-2.5 font-mono text-sm font-medium text-navy-900 transition-colors hover:border-navy-900"
          >
            <IconeTelefone />
            {site.telefone.exibicao}
          </a>
          <a
            href={linkContato("Olá! Gostaria de solicitar um orçamento.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
          >
            <IconeWhatsapp />
            WhatsApp
          </a>
        </div>

        <MenuMobile
          itens={[...navPrincipal]}
          telefoneHref={site.telefone.href}
          telefoneExibicao={site.telefone.exibicao}
          contatoHref={linkContato("Olá! Gostaria de solicitar um orçamento.")}
        />
      </div>
    </header>
  );
}

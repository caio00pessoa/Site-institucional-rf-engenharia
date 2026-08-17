import Link from "next/link";

import { MenuMobile } from "@/components/layout/menu-mobile";
import { Seta } from "@/components/ui/primitivos";
import { navPrincipal, site } from "@/content/site";
import { linkContato, rotuloContato } from "@/lib/whatsapp";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-steel-200 bg-white/90 backdrop-blur-md">
      <div className="container-rf flex h-18 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex items-baseline gap-2.5"
          aria-label={`${site.nomeCompleto}, ir para a página inicial`}
        >
          {/*
            O logo oficial é um JPEG 250x74 com fundo branco chapado, sem
            transparência, então não serve sobre fundo escuro nem em alta
            densidade. Até chegar o SVG, a marca sai como tipografia.
          */}
          <span className="text-2xl leading-none font-bold tracking-[-0.04em] text-navy-900">
            RF
          </span>
          <span className="label-tech text-steel-600 group-hover:text-navy-900">
            Engenharia
          </span>
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

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={site.telefone.href}
            className="font-mono text-sm font-medium text-navy-900 hover:text-indigo-500"
          >
            {site.telefone.exibicao}
          </a>
          <a
            href={linkContato("Olá! Gostaria de solicitar um orçamento.")}
            className="inline-flex items-center gap-2 rounded-sm bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Orçamento
            <Seta />
          </a>
        </div>

        <MenuMobile
          itens={[...navPrincipal]}
          telefoneHref={site.telefone.href}
          telefoneExibicao={site.telefone.exibicao}
          contatoHref={linkContato("Olá! Gostaria de solicitar um orçamento.")}
          contatoRotulo={rotuloContato("Falar no WhatsApp")}
        />
      </div>
    </header>
  );
}

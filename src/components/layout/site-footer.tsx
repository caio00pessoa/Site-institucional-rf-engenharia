import Image from "next/image";
import Link from "next/link";

import { navLegal, navPrincipal, navSecundaria, site } from "@/content/site";
import { servicos } from "@/content/servicos";

export function SiteFooter() {
  const redesAtivas = site.redes.filter((rede) => rede.url.length > 0);

  return (
    <footer className="border-t border-navy-700/40 bg-navy-900 text-white">
      <div className="container-rf py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca e grupo */}
          <div>
            {/* Versão monocromática branca, gerada para fundo escuro. */}
            <Image
              src="/imagens/marca/logo-rf-engenharia-branco.png"
              alt={`${site.nomeCompleto}, ${site.tagline}`}
              width={750}
              height={222}
              sizes="180px"
              className="h-auto w-[180px]"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {site.tagline}
            </p>

            <p className="label-tech mt-8 text-white/40">Grupo RF</p>
            <ul className="mt-3 space-y-1.5 text-sm text-white/70">
              {site.grupo.map((empresa) => (
                <li key={empresa.nome}>{empresa.nome}</li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <p className="label-tech text-white/40">Institucional</p>
            <ul className="mt-4 space-y-3 text-sm">
              {navPrincipal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-amber-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {navSecundaria.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-amber-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {navLegal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-amber-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <p className="label-tech text-white/40">Serviços</p>
            <ul className="mt-4 space-y-3 text-sm">
              {servicos.map((servico) => (
                <li key={servico.slug}>
                  <Link
                    href={`/servicos/${servico.slug}`}
                    className="text-white/70 transition-colors hover:text-amber-500"
                  >
                    {servico.nomeCurto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="label-tech text-white/40">Contato</p>
            <address className="mt-4 space-y-3 text-sm text-white/70 not-italic">
              <p className="leading-relaxed">{site.endereco.completo}</p>
              <p>
                <a
                  href={site.telefone.href}
                  className="font-mono text-white transition-colors hover:text-amber-500"
                >
                  {site.telefone.exibicao}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-amber-500"
                >
                  {site.email}
                </a>
              </p>
            </address>

            <p className="label-tech mt-8 text-white/40">Responsável Técnico</p>
            <p className="mt-3 text-sm text-white/70">
              {site.responsavelTecnico.nome}
              <br />
              <span className="font-mono text-white/50">
                {site.responsavelTecnico.crea}
              </span>
            </p>

            {redesAtivas.length > 0 && (
              <ul className="mt-8 flex gap-4 text-sm">
                {redesAtivas.map((rede) => (
                  <li key={rede.nome}>
                    <a
                      href={rede.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/70 transition-colors hover:text-amber-500"
                    >
                      {rede.nome}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            {site.razaoSocial}, CNPJ {site.cnpj}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p>
              © {new Date().getFullYear()} {site.nomeCompleto}
            </p>
            <p>
              Criado por{" "}
              <a
                href={site.criadoPor.url}
                target="_blank"
                rel="noreferrer"
                className="text-white/60 underline decoration-white/20 underline-offset-4 transition-colors hover:text-amber-500 hover:decoration-amber-500"
              >
                {site.criadoPor.nome}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

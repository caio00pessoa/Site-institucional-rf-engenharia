import Link from "next/link";

import { navLegal, navPrincipal, site } from "@/content/site";
import { servicos } from "@/content/servicos";

export function SiteFooter() {
  const redesAtivas = site.redes.filter((rede) => rede.url.length > 0);

  return (
    <footer className="border-t border-navy-700/40 bg-navy-900 text-white">
      <div className="container-rf py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca e grupo */}
          <div>
            <div className="flex items-baseline gap-2.5">
              <span className="text-2xl leading-none font-bold tracking-[-0.04em]">
                RF
              </span>
              <span className="label-tech text-amber-500">Engenharia</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
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

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 font-mono text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            {site.razaoSocial}, CNPJ {site.cnpj}
          </p>
          <p>
            © {new Date().getFullYear()} {site.nomeCompleto}
          </p>
        </div>
      </div>
    </footer>
  );
}

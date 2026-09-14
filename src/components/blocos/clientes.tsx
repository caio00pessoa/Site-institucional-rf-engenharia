import Image from "next/image";
import Link from "next/link";

import {
  Container,
  Eyebrow,
  Secao,
  Seta,
  TituloSecao,
} from "@/components/ui/primitivos";
import { clientes } from "@/content/clientes";
import { linkGoogleMaps, site } from "@/content/site";

/**
 * Grade de logos. O rótulo é sempre "clientes atendidos": evitar
 * redação que sugira endosso ou parceria, principalmente com os órgãos
 * públicos da lista.
 */
export function Clientes({
  limite,
  verTodos = true,
}: {
  limite?: number;
  /** Desliga o link quando o bloco já está dentro de /clientes. */
  verTodos?: boolean;
}) {
  const lista = limite ? clientes.slice(0, limite) : clientes;

  return (
    <Secao tom="claro">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Prova de campo</Eyebrow>
            <TituloSecao className="max-w-[18ch]">
              Clientes atendidos
            </TituloSecao>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">


            {verTodos && (
              <Link
                href="/clientes"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-navy-900 hover:text-indigo-500"
              >
                Ver todos os clientes
                <Seta className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px border border-steel-200 bg-steel-200 sm:grid-cols-3 lg:grid-cols-6">
          {lista.map((cliente) => (
            <li
              key={cliente.arquivo}
              className="flex aspect-[3/2] items-center justify-center bg-white p-6"
            >
              <Image
                src={`/imagens/clientes/${cliente.arquivo}`}
                alt={cliente.nome}
                width={160}
                height={64}
                sizes="160px"
                className="h-auto max-h-12 w-auto max-w-full object-contain opacity-70 transition-opacity duration-200 hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </Container>
    </Secao>
  );
}

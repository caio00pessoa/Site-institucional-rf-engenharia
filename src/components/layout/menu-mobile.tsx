"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Item = { label: string; href: string };

/**
 * Único estado de UI do header, e por isso o único motivo de este
 * arquivo ser client component. O resto do header é RSC.
 */
export function MenuMobile({
  itens,
  telefoneHref,
  telefoneExibicao,
  contatoHref,
  contatoRotulo,
}: {
  itens: Item[];
  telefoneHref: string;
  telefoneExibicao: string;
  contatoHref: string;
  contatoRotulo: string;
}) {
  const [aberto, setAberto] = useState(false);

  // Trava o scroll do fundo e fecha no Escape
  useEffect(() => {
    if (!aberto) return;

    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setAberto(false);
    };

    document.addEventListener("keydown", aoTeclar);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setAberto((estado) => !estado)}
        aria-expanded={aberto}
        aria-controls="menu-mobile"
        className="flex h-11 w-11 items-center justify-center text-navy-900"
      >
        <span className="sr-only">
          {aberto ? "Fechar menu" : "Abrir menu"}
        </span>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        >
          {aberto ? (
            <path d="M5 5l14 14M19 5L5 19" />
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18" />
          )}
        </svg>
      </button>

      {aberto && (
        <div
          id="menu-mobile"
          className="fixed inset-x-0 top-18 bottom-0 z-40 flex flex-col gap-1 overflow-y-auto border-t border-steel-200 bg-white px-5 py-8"
        >
          {itens.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              // Fecha no clique, e não num efeito sobre a rota: evita
              // o render em cascata que o lint do React aponta.
              onClick={() => setAberto(false)}
              className="border-b border-steel-100 py-4 text-xl font-semibold tracking-[-0.01em] text-navy-900"
            >
              {item.label}
            </Link>
          ))}

          <a
            href={contatoHref}
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-navy-900 px-6 py-4 text-sm font-semibold text-white"
          >
            {contatoRotulo}
          </a>
          <a
            href={telefoneHref}
            className="mt-3 inline-flex items-center justify-center rounded-sm border border-steel-200 px-6 py-4 font-mono text-sm font-medium text-navy-900"
          >
            {telefoneExibicao}
          </a>
        </div>
      )}
    </div>
  );
}

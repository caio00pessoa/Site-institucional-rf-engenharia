import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------ */
/* Seção: ritmo vertical e superfícies do sistema                      */
/* ------------------------------------------------------------------ */

type Tom = "claro" | "tela" | "navy" | "navy-grid";

const tons: Record<Tom, string> = {
  claro: "bg-white text-ink",
  tela: "bg-steel-50 text-ink",
  navy: "bg-navy-900 text-white",
  "navy-grid": "bg-navy-900 text-white blueprint",
};

export function Secao({
  tom = "tela",
  className,
  children,
  ...props
}: ComponentProps<"section"> & { tom?: Tom }) {
  return (
    <section
      className={cn("py-20 md:py-28", tons[tom], className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("container-rf", className)}>{children}</div>;
}

/* ------------------------------------------------------------------ */
/* Eyebrow: label mono com filete. Marca a abertura de cada seção.     */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  escuro = false,
}: {
  children: ReactNode;
  escuro?: boolean;
}) {
  return (
    <p
      className={cn(
        "label-tech flex items-center gap-3",
        escuro ? "text-amber-500" : "text-indigo-500",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-8",
          escuro ? "bg-amber-500" : "bg-indigo-500/50",
        )}
      />
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Títulos                                                             */
/* ------------------------------------------------------------------ */

export function TituloSecao({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "mt-5 text-balance text-3xl font-bold tracking-[-0.02em] md:text-[2.75rem] md:leading-[1.08]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Botões                                                              */
/* ------------------------------------------------------------------ */

type Variante =
  | "whatsapp"
  | "primaria"
  | "acento"
  | "contorno"
  | "contorno-claro";

const variantes: Record<Variante, string> = {
  // Verde do WhatsApp. Uso exclusivo no CTA de conversão.
  whatsapp:
    "bg-whatsapp text-white hover:bg-whatsapp-dark focus-visible:bg-whatsapp-dark",
  primaria:
    "bg-navy-900 text-white hover:bg-navy-700 focus-visible:bg-navy-700",
  acento:
    "bg-amber-500 text-navy-900 hover:bg-amber-500/90 focus-visible:bg-amber-500/90",
  contorno:
    "border border-steel-200 bg-white text-navy-900 hover:border-navy-900 hover:bg-white",
  "contorno-claro":
    "border border-white/25 text-white hover:border-white hover:bg-white/5",
};

const baseBotao =
  "inline-flex items-center justify-center gap-2.5 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-[0.01em] transition-colors duration-200";

export function Botao({
  href,
  variante = "primaria",
  className,
  externo = false,
  children,
}: {
  href: string;
  variante?: Variante;
  className?: string;
  externo?: boolean;
  children: ReactNode;
}) {
  const classes = cn(baseBotao, variantes[variante], className);

  // tel: e wa.me não passam pelo roteador do Next.
  if (externo || href.startsWith("tel:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Seta usada nos CTAs e links de card                                 */
/* ------------------------------------------------------------------ */

export function Seta({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn("h-3.5 w-3.5", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

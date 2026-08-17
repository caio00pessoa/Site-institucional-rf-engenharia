import Image from "next/image";

import {
  Container,
  Eyebrow,
  Secao,
  TituloSecao,
} from "@/components/ui/primitivos";
import { site } from "@/content/site";

export function ResponsavelTecnico() {
  const rt = site.responsavelTecnico;

  return (
    <Secao tom="claro" id="responsavel-tecnico">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Eyebrow>Responsável técnico</Eyebrow>
            <TituloSecao className="max-w-[12ch]">{rt.nome}</TituloSecao>

            <div className="mt-8 flex items-center gap-5">
              {/*
                Retrato pequeno (200x196) herdado das LPs. Contido num
                quadrado de 80px, onde a resolução não denuncia.
                [CONFIRMAR] foto nova em alta com o cliente.
              */}
              <Image
                src={rt.foto}
                alt={`Retrato de ${rt.nome}`}
                width={200}
                height={196}
                sizes="80px"
                className="h-20 w-20 rounded-sm object-cover grayscale"
              />
              <div>
                <p className="font-mono text-sm font-medium text-navy-900">
                  {rt.crea}
                </p>
                <p className="mt-1 text-sm text-steel-600">{rt.cargo}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="label-tech text-steel-400">Formação</p>
            <ul className="mt-6 border-t border-steel-200">
              {rt.formacao.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-steel-200 py-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber-500"
                  />
                  <span className="text-[0.9375rem] text-steel-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Secao>
  );
}

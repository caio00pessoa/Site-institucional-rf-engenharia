import { Container, Eyebrow, Secao } from "@/components/ui/primitivos";
import { site } from "@/content/site";

/**
 * "RF em Números", recuperado do site antigo.
 * Os valores entram em mono porque são dado, não texto.
 */
export function Numeros() {
  return (
    <Secao tom="navy-grid">
      <Container>
        <Eyebrow escuro>RF em números</Eyebrow>

        <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {site.numeros.map((item) => (
            <div key={item.rotulo} className="border-t border-white/15 pt-6">
              <dt className="sr-only">{item.rotulo}</dt>
              <dd>
                <span className="block font-mono text-4xl font-medium tracking-[-0.03em] text-amber-500 tabular-nums md:text-6xl">
                  {item.valor}
                </span>
                <span className="mt-3 block max-w-[16ch] text-sm leading-snug text-white/60">
                  {item.rotulo}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 max-w-[54ch] text-sm leading-relaxed text-white/45">
          {site.numerosContexto}
        </p>
      </Container>
    </Secao>
  );
}

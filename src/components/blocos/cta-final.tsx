import { CtaPar } from "@/components/ui/cta-par";
import { Container, Eyebrow, Secao } from "@/components/ui/primitivos";

export function CtaFinal({
  titulo,
  texto,
  mensagem,
}: {
  titulo: string;
  texto: string;
  mensagem: string;
}) {
  return (
    <Secao tom="navy-grid">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <Eyebrow escuro>Contato</Eyebrow>
            <h2 className="mt-5 max-w-[20ch] text-balance text-3xl font-bold tracking-[-0.02em] md:text-5xl md:leading-[1.06]">
              {titulo}
            </h2>
            <p className="mt-5 max-w-[52ch] text-white/60">{texto}</p>
          </div>

          <CtaPar mensagem={mensagem} />
        </div>
      </Container>
    </Secao>
  );
}

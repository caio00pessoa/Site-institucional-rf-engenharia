/** Injeta um bloco JSON-LD. Server component, zero JS no cliente. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify já escapa o conteúdo; o replace protege contra
      // fechamento prematuro da tag script.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

import { useParams } from "react-router-dom";
import { lazy, Suspense } from "react";

// Vite carrega todos os arquivos .jsx da pasta articles em build
const modules = import.meta.glob("./articles/*.jsx", { eager: true });

const registry = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    // path: "./articles/cuidados-com-pets-no-inverno.jsx"
    const slug = path
      .split("/")
      .pop()            // nome do arquivo
      .replace(".jsx", "");
    return [slug, mod.default];
  })
);

export default function Article() {
  const { slug } = useParams();
  const Component = registry[slug];

  if (!Component) {
    return <div className="p-8">Artigo não encontrado</div>;
  }

  // Suspense é opcional, mas deixa pronto para lazy
  return (
    <Suspense fallback={<div className="p-8">Carregando…</div>}>
      <Component />
    </Suspense>
  );
}

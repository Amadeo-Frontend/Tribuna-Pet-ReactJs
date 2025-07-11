import { useParams } from "react-router-dom";
import { Suspense } from "react";
import NotFound from "../pages/NotFound";       // <- importe seu 404
import PageTransition from "../components/PageTransition";

// carrega todos os artigos em build
const modules = import.meta.glob("./articles/*.jsx", { eager: true });
const registry = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [
    path.split("/").pop().replace(".jsx", ""), // slug
    mod.default,                              // componente
  ])
);

export default function Article() {
  const { slug } = useParams();
  const Component = registry[slug];

  /* slug inexistente → 404 animado */
  if (!Component) {
    return (
      <PageTransition>
        <NotFound />
      </PageTransition>
    );
  }

  /* slug existe → carrega artigo */
  return (
    <Suspense
      fallback={
        <PageTransition>
          <div className="p-8">Carregando…</div>
        </PageTransition>
      }
    >
      <PageTransition>
        <Component />
      </PageTransition>
    </Suspense>
  );
}

import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const articlesMap = {
  "alimentacao-saudavel-e-inteligente": dynamic(() => import("../../articles/alimentacao-saudavel-e-inteligente")),
  "alimentacao-saudavel": dynamic(() => import("../../articles/alimentacao-saudavel")),
  "batata-doce-nutricao-canina": dynamic(() => import("../../articles/batata-doce-nutricao-canina")),
  "cuidados-com-pets-no-inverno": dynamic(() => import("../../articles/cuidados-com-pets-no-inverno")),
  "cupom-petz": dynamic(() => import("../../articles/cupom-petz")),
  "ferramenta-encontre-seu-pet": dynamic(() => import("../../articles/ferramenta-encontre-seu-pet")),
  "melhor-racao-para-filhotes": dynamic(() => import("../../articles/melhor-racao-para-filhotes")),
  "melhor-racao-para-pitbull-e-caes-ativos": dynamic(() => import("../../articles/melhor-racao-para-pitbull-e-caes-ativos")),
  "novo-hospital-veterinario-curitiba": dynamic(() => import("../../articles/novo-hospital-veterinario-curitiba")),
  "primeiros-socorros-para-pets": dynamic(() => import("../../articles/primeiros-socorros-para-pets")),
  "vagas-para-castracao-gratuita": dynamic(() => import("../../articles/vagas-para-castracao-gratuita")),
};

export async function generateStaticParams() {
  return Object.keys(articlesMap).map((slug) => ({
    slug,
  }));
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const Component = articlesMap[slug];

  if (!Component) {
    notFound();
  }

  return <Component />;
}

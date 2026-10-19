import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { articlesMetadata } from "../../lib/articlesMetadata";
import { getDynamicPosts, findDynamicPostBySlug } from "../../lib/postsStore";
import DynamicPostTemplate from "../../components/DynamicPostTemplate";

const articlesMap = {
  "alerta-raiva-vacinacao-pets": dynamic(() => import("../../articles/alerta-raiva-vacinacao-pets")),
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
  "veterinario-gratuito-vet-movel-parana": dynamic(() => import("../../articles/veterinario-gratuito-vet-movel-parana")),
};

export async function generateStaticParams() {
  const legacySlugs = Object.keys(articlesMap);
  const dynamicPosts = await getDynamicPosts();
  const dynamicSlugs = dynamicPosts.map((p) => p.slug);

  const allSlugs = Array.from(new Set([...legacySlugs, ...dynamicSlugs]));

  return allSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dynamicPost = await findDynamicPostBySlug(slug);

  let meta = null;
  if (dynamicPost) {
    meta = {
      title: `${dynamicPost.title} | Tribuna do Pet`,
      description: dynamicPost.subtitle || dynamicPost.title,
      image: dynamicPost.image,
      published: dynamicPost.published,
      canonical: `https://www.tribunadopet.com.br/${dynamicPost.slug}`,
    };
  } else if (articlesMetadata[slug]) {
    meta = articlesMetadata[slug];
  }

  if (!meta) {
    return {};
  }

  const rawImage = meta.image || "/images/banner-blog.webp";
  const imageUrl = rawImage.startsWith("http")
    ? rawImage
    : `https://www.tribunadopet.com.br${rawImage.startsWith("/") ? "" : "/"}${rawImage}`;

  const canonicalUrl = meta.canonical || `https://www.tribunadopet.com.br/${slug}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      siteName: "Tribuna do Pet",
      locale: "pt_BR",
      type: "article",
      publishedTime: meta.published,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [imageUrl],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  // 1. Check dynamic post from posts.json (has full precedence for edits & custom CSS)
  const dynamicPost = await findDynamicPostBySlug(slug);
  if (dynamicPost) {
    return <DynamicPostTemplate post={dynamicPost} />;
  }

  // 2. Fallback to legacy JSX component if not in posts.json
  const LegacyComponent = articlesMap[slug];
  if (LegacyComponent) {
    return <LegacyComponent />;
  }

  // 3. Not found
  notFound();
}

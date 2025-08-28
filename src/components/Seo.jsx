// src/components/Seo.jsx
import { Helmet } from "@slorber/react-helmet-async";

export default function Seo({
  title = "Tribuna do Pet",
  description = "Tudo sobre alimentação saudável, cuidados diários e utilidade pública para Pets.",
  image = "/381336.png", // pode ser relativa
  canonical = "https://www.tribunadopet.com.br/", // base do site
  published,
  modified,
}) {
  // Gera URL absoluta da imagem com base no canonical
  const absoluteImage = new URL(image, canonical).href;

  return (
    <Helmet>
      {/* Básico */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:site_name" content="Tribuna do Pet" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Article dates opcionais */}
      {published && <meta property="article:published_time" content={published} />}
      {modified && <meta property="article:modified_time" content={modified} />}
    </Helmet>
  );
}

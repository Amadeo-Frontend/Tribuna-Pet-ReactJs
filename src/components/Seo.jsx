import { Helmet } from '@slorber/react-helmet-async';

export default function Seo({
  title = "Tribuna do Pet | Informações para quem ama animais",
  description = "Tudo sobre alimentação saudável, cuidados diários e utilidade pública para Pets.",
  image = "/og-image.jpg",
  canonical = "https://www.tribunadopet.com.br/",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Twitter */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}

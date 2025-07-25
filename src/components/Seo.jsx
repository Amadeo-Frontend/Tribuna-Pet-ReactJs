import { Helmet } from "@slorber/react-helmet-async";

export default function Seo({
  title = "Tribuna do Pet",
  description = "Tudo sobre alimentação saudável, cuidados diários e utilidade pública para Pets.",
  image = "/381336.png",
  canonical = "https://www.tribunadopet.com.br/",
  published, modified,
}) {
  const absoluteImage = new URL(image, canonical).href;

  return (
    <Helmet>
      {/* Básico */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Tribuna do Pet" />
      <meta property="og:locale" content="pt_BR" />

      {/* Schema.org (opcional) */}
      {published && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: title,
            description,
            datePublished: published,
            dateModified: modified || published,
            image: [absoluteImage],
            author: { "@type": "Person", name: "Redação Tribuna do Pet" },
            publisher: {
              "@type": "Organization",
              name: "Tribuna do Pet",
              logo: {
                "@type": "ImageObject",
                url: "https://www.tribunadopet.com.br/favicon.svg",
              },
            },
          })}
        </script>
      )}
    </Helmet>
  );
}

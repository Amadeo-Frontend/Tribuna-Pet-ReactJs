import "../index.css";
import { GoogleTagManager } from "@next/third-parties/google";
import ScrollToTop from "../components/ScrollToTop";
import { Nunito, Inter } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.tribunadopet.com.br"),
  title: "Tribuna do Pet | Nutrição, Saúde e Cuidados para Cães e Gatos",
  description: "O maior portal de informação, nutrição animal, guias veterinários e utilidade pública para tutores de pets do Brasil. 🐾",
  keywords: [
    "tribuna do pet",
    "ração para cachorro",
    "melhor ração pitbull",
    "nutrição canina",
    "cuidados com pets",
    "hospital veterinario gratuito curitiba",
    "castração gratuita",
  ],
  authors: [{ name: "Redação Tribuna do Pet", url: "https://www.tribunadopet.com.br/sobre-nos" }],
  publisher: "Tribuna do Pet",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    google: "M9h90Cea_9PYAq9U8RJNrYQqJ4jbvBOiWWVe_YkYMlk",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Tribuna do Pet | Nutrição, Saúde e Cuidados para Cães e Gatos",
    description: "O portal de referência em informação, nutrição animal, guias veterinários e utilidade pública para tutores de pets.",
    url: "https://www.tribunadopet.com.br",
    siteName: "Tribuna do Pet",
    images: [
      {
        url: "https://www.tribunadopet.com.br/repotagem-ranking-pitbull-desktop.png",
        width: 1200,
        height: 630,
        alt: "Tribuna do Pet - Portal Animal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tribuna do Pet | Informações para quem ama animais",
    description: "Guias de nutrição, saúde e bem-estar para cães e gatos.",
    images: ["https://www.tribunadopet.com.br/repotagem-ranking-pitbull-desktop.png"],
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tribuna do Pet",
  "url": "https://www.tribunadopet.com.br",
  "description": "Portal de informações, saúde, nutrição e bem-estar para donos de cães e gatos no Brasil.",
  "publisher": {
    "@type": "Organization",
    "name": "Tribuna do Pet",
    "url": "https://www.tribunadopet.com.br",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.tribunadopet.com.br/favicon.svg"
    }
  }
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tribuna do Pet",
  "url": "https://www.tribunadopet.com.br",
  "logo": "https://www.tribunadopet.com.br/favicon.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contato@tribunadopet.com.br",
    "contactType": "customer service",
    "areaServed": "BR",
    "availableLanguage": "Portuguese"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased">
        <ScrollToTop />
        <div id="root">{children}</div>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || "GTM-W97C3TZ5"} />
      </body>
    </html>
  );
}

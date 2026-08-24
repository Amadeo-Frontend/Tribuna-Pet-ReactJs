import "../index.css";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  metadataBase: new URL("https://www.tribunadopet.com.br"),
  title: "Tribuna do Pet | Informações para quem ama animais",
  description: "Dicas de nutrição, saúde e bem-estar para seu pet 🐾.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  verification: {
    google: "M9h90Cea_9PYAq9U8RJNrYQqJ4jbvBOiWWVe_YkYMlk",
  },
  openGraph: {
    type: "website",
    title: "Tribuna do Pet | Informações para quem ama animais",
    description: "Dicas de nutrição, saúde e bem-estar para seu pet 🐾.",
    url: "https://www.tribunadopet.com.br",
    siteName: "Tribuna do Pet",
    images: [
      {
        url: "https://www.tribunadopet.com.br/repotagem-ranking-pitbull-desktop.png",
        width: 1200,
        height: 630,
        alt: "Tribuna do Pet",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root">{children}</div>
        <GoogleTagManager gtmId="GTM-XXXXXXX" />
      </body>
    </html>
  );
}

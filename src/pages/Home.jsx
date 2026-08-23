import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import LiveClock from "../components/LiveClock";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import NewsletterForm from "../components/Newsletter/NewsletterForm";
import PageTransition from "../components/PageTransition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

/* ------------------------------------------------------------------
   1. LISTAS DE CARDS
   ------------------------------------------------------------------ */

// ➤ 3 cartões fixos que aparecem ANTES do bloco de newsletter
const topCards = [
  {
    slug: "alimentacao-saudavel",
    tag: "Alimentação",
    color: "bg-accent",
    title: "Guia Completo para uma Alimentação Saudável",
    desc: "Desmistifique a alimentação natural e ...",
    img: "https://www.tribunadopet.com.br/cachorro-pode-comer-comida-1.jpg",
  },
  {
    slug: "cuidados-com-pets-no-inverno",
    tag: "Cuidados",
    color: "bg-blue-600",
    title: "Cuidados Diários com Cães e Gatos",
    desc: "Saiba como proteger seu pet em temperaturas baixas...",
    img: "https://www.tribunadopet.com.br/Roupa-de-frio-para-cachorro.jpg",
  },
  {
    slug: "vagas-para-castracao-gratuita",
    tag: "Serviços",
    color: "bg-purple-600",
    title: "Utilidade Pública Pet",
    desc: "Prefeitura abriu vagas para castração gratuita...",
    img: "https://www.tribunadopet.com.br/castracao-de-animais-2.jpg",
  },
];

// ➤ Cards que aparecem DEPOIS do bloco de newsletter.
//    Sinta‑se livre para continuar adicionando novos itens no final.
const bottomCards = [
  {
    slug: "melhor-racao-para-pitbull-e-caes-ativos",
    tag: "Nutrição & Ranking",
    color: "bg-red-600",
    title: "Melhor Ração para Pitbull e Cães Ativos em 2026",
    desc: "Ranking completo e análise nutricional das melhores rações...",
    img: "/blog-hero-ranking-desktop.png",
  },
  {
    slug: "alimentacao-saudavel-e-inteligente",
    tag: "Alimentação",
    color: "bg-rose-600",
    title: "Guia de Alimentação Responsável",
    desc: "Passo a passo para dar um alimento seguro e saboroso...",
    img: "https://www.tribunadopet.com.br/cachorro-caramelo-olhando-para-camera.jpg",
  },
  {
    slug: "novo-hospital-veterinario-curitiba",
    tag: "Utilidade Publica",
    color: "bg-yellow-500",
    title: "Novo hospital veterinário em Curitiba.",
    desc: "Já realizou mais de 10 mil consultas gratuitas...",
    img: "https://www.tribunadopet.com.br/main_agenda-cachorros.webp",
  },
  {
    slug: "batata-doce-nutricao-canina",
    tag: "Nutrição",
    color: "bg-green-600",
    title: "Batata Doce e Vegetais na Nutrição Canina",
    desc: "A batata-doce emergiu como um superalimento...",
    img: "https://www.tribunadopet.com.br/fresh-vegetable.webp",
  },
  // ➕ novos cards ficam aqui embaixo 👇
];

// Componentes animados
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <PageTransition>
      <Seo
        title="Tribuna do Pet • Dicas de Alimentação, Cuidados e Utilidade Pública"
        description="Portal com as melhores dicas para tutores de cães e gatos: alimentação natural, saúde, cuidados diários e serviços gratuitos."
        canonical="https://www.tribunadopet.com.br/"
        image="https://www.tribunadopet.com.br/og-image.jpg"
      />

      {/* Top bar */}
      <div className="hidden py-2 text-white bg-primary sm:block">
        <div className="container flex items-center justify-between px-4 mx-auto text-sm">
          <span>Seu portal de informações para seu pet!</span>
          <LiveClock />
        </div>
      </div>

      {/* Mobile menu + Header */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Header onToggleMenu={() => setMenuOpen(true)} />

      {/* Conteúdo principal */}
      <main className="container px-4 py-8 mx-auto">
        {/* HERO destaque fixo */}
        <Link
          to="/melhor-racao-para-pitbull-e-caes-ativos"
          className="relative block mb-12 overflow-hidden rounded-xl shadow-2xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url('/blog-hero-ranking-desktop.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 500,
          }}
        >
          <span className="absolute px-3 py-1 text-sm font-medium text-white rounded-full top-4 left-4 bg-secondary">
            Destaque Especial
          </span>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <h2 className="max-w-3xl mb-4 text-3xl font-bold md:text-4xl leading-tight">
              Melhor Ração para Pitbull e Cães Ativos em 2026: ranking revela a campeã técnica e o melhor custo-benefício
            </h2>
            <p className="max-w-2xl mb-4 text-lg text-gray-200">
              PremieR Pit Bull vence a avaliação técnica e a Lunch Dog X-PRO Training se destaca como o melhor custo-benefício da comparação de 13 rações.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span>
                <i className="mr-1 far fa-calendar" /> 23 de Agosto, 2026
              </span>
              <span>
                <i className="mr-1 far fa-clock" /> 10 min de leitura
              </span>
            </div>
          </div>
        </Link>

        {/* Top 3 cartões */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Destaques</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topCards.map((c) => (
              <Card key={c.slug} {...c} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mb-16">
          <div className="p-8 text-center text-white bg-gradient-to-r from-primary to-secondary rounded-2xl">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Receba dicas exclusivas para seu pet
            </h2>
            <p className="mb-6">
              Inscreva‑se em nossa newsletter e receba conteúdos especiais sobre
              cuidados, alimentação e saúde animal.
            </p>
            <div className="max-w-xl mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </section>

        {/* Em Alta (cresce dinamicamente) */}
        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-bold">Em Alta</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bottomCards.map((c) => (
              <Card key={c.slug} {...c} />
            ))}
          </div>
        </section>

        {/* Anúncio estilo Google Ads */}
        <FadeIn delay={1.6}>
          <aside className="max-w-4xl mx-auto mt-12 mb-8 overflow-hidden bg-white border border-gray-300 rounded-lg shadow-sm">
            <div className="flex items-start justify-between p-3 bg-gray-100">
              <div className="flex items-center">
                <span className="px-2 py-1 text-xs text-white bg-blue-500 rounded">
                  Anúncio
                </span>
                <span className="ml-2 text-xs text-gray-500">Patrocinado</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <i className="fas fa-times"></i>
              </button>
            </div>

            <a
              href="https://www.racaopets.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 transition-colors hover:bg-gray-50"
            >
              <div className="flex flex-col items-start md:flex-row">
                <div className="flex-1">
                  <h4 className="font-medium text-blue-600 hover:underline">
                    Ração Pets - Nutrição premium para cães e gatos
                  </h4>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-green-700">
                      www.racaopets.com.br
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-yellow-500">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <FontAwesomeIcon icon={faStar} />
                      4.9
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Rações premium e super premium sem conservantes ou corantes.
                    Garanta nutrição completa a preços acessíveis.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4">
                  <div className="flex items-center justify-center w-32 h-24 text-gray-500 bg-gray-200 border-2 border-dashed rounded-xl">
                    <img
                      src="https://www.tribunadopet.com.br/LUNCH15SEGUNDA.png"
                      alt="Ração Lunch dog essencial"
                      className="object-contain w-32 h-24"
                    />
                  </div>
                </div>
              </div>
            </a>
          </aside>
        </FadeIn>
      </main>

      <Footer />
    </PageTransition>
  );
}

/* ------------------------------------------------------------
   Card Component (reutilizável) — Mantém o JSX enxuto
------------------------------------------------------------ */
function Card({ slug, tag, color, title, desc, img }) {
  return (
    <article className="overflow-hidden transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
      <div
        className="h-48 bg-center bg-cover"
        style={{ backgroundImage: `url('${img}')` }}
      />
      <div className="p-6">
        <span
          className={`${color} text-white px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block`}
        >
          {tag}
        </span>
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-600">{desc}</p>
        <Link
          to={`/${slug}`}
          className="font-medium text-primary hover:underline"
        >
          Ver artigos
        </Link>
      </div>
    </article>
  );
}

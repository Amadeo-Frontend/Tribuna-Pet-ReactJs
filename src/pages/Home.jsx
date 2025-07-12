import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import LiveClock from "../components/LiveClock";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import NewsletterForm from "../components/Newsletter/NewsletterForm";
import PageTransition from "../components/PageTransition";

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
    img: "/cachorro-pode-comer-comida-1.jpg",
  },
  {
    slug: "cuidados-com-pets-no-inverno",
    tag: "Cuidados",
    color: "bg-blue-600",
    title: "Cuidados Diários com Cães e Gatos",
    desc: "Saiba como proteger seu pet em temperaturas baixas...",
    img: "Roupa-de-frio-para-cachorro.jpg",
  },
  {
    slug: "vagas-para-castracao-gratuita",
    tag: "Serviços",
    color: "bg-purple-600",
    title: "Utilidade Pública Pet",
    desc: "Prefeitura abriu vagas para castração gratuita...",
    img: "/castracao-de-animais-2.jpg",
  },
];

// ➤ Cards que aparecem DEPOIS do bloco de newsletter.
//    Sinta‑se livre para continuar adicionando novos itens no final.
const bottomCards = [
  {
    slug: "alimentacao-saudavel-e-inteligente",
    tag: "Alimentação",
    color: "bg-rose-600",
    title: "Guia de Alimentação Responsável",
    desc: "Passo a passo para dar um alimento seguro e saboroso...",
    img: "/cachorro-caramelo-olhando-para-camera.jpg",
  },
  {
    slug: "novo-hospital-veterinario-curitiba",
    tag: "Utilidade Publica",
    color: "bg-yellow-500",
    title: "Novo hospital veterinário em Curitiba.",
    desc: "Já realizou mais de 10 mil consultas gratuitas...",
    img: "/main_agenda-cachorros.webp",
  },
  {
    slug: "batata-doce-nutricao-canina",
    tag: "Nutrição",
    color: "bg-green-600",
    title: "Batata Doce e Vegetais na Nutrição Canina",
    desc: "A batata-doce emergiu como um superalimento...",
    img: "/fresh-vegetable.webp",
  },
  // ➕ novos cards ficam aqui embaixo 👇
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <PageTransition>
      <Seo
        title="Tribuna do Pet • Dicas de Alimentação, Cuidados e Utilidade Pública"
        description="Portal com as melhores dicas para tutores de cães e gatos: alimentação natural, saúde, cuidados diários e serviços gratuitos."
        canonical="https://www.tribunadopet.com.br/"
        image="/og-image-home.jpg"
      />

      {/* Top bar */}
      <div className="hidden py-2 text-white bg-gray-800 sm:block">
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
          to="/alimentacao-saudavel"
          className="relative block mb-12 overflow-hidden rounded-xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.35),rgba(0,0,0,.35)),url('https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 500,
          }}
        >
          <span className="absolute px-3 py-1 text-sm font-medium text-white rounded-full top-4 left-4 bg-secondary">
            Destaque
          </span>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="max-w-3xl mb-4 text-3xl font-bold md:text-4xl">
              Guia Completo para uma Alimentação Saudável para seu Pet
            </h2>
            <p className="max-w-2xl mb-4 text-lg">
              Descubra como escolher a melhor ração, preparar alimentos naturais e evitar erros comuns na nutrição do seu animal de estimação.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span>
                <i className="mr-1 far fa-calendar" /> 11 de Junho, 2025
              </span>
              <span>
                <i className="mr-1 far fa-clock" /> 5 min de leitura
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
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Receba dicas exclusivas para seu pet</h2>
            <p className="mb-6">Inscreva‑se em nossa newsletter e receba conteúdos especiais sobre cuidados, alimentação e saúde animal.</p>
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
      <div className="h-48 bg-center bg-cover" style={{ backgroundImage: `url('${img}')` }} />
      <div className="p-6">
        <span className={`${color} text-white px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block`}>{tag}</span>
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-600">{desc}</p>
        <Link to={`/${slug}`} className="font-medium text-primary hover:underline">
          Ver artigos
        </Link>
      </div>
    </article>
  );
}

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
          <span className="font-medium">Seu portal de informações para seu pet!</span>
          <LiveClock />
        </div>
      </div>

      {/* Mobile menu + Header */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Header onToggleMenu={() => setMenuOpen(true)} />

      {/* Conteúdo principal */}
      <main className="container px-4 py-8 mx-auto max-w-7xl">
        {/* HERO destaque principal */}
        <Link
          to="/melhor-racao-para-pitbull-e-caes-ativos"
          className="relative block mb-14 overflow-hidden bg-black rounded-3xl shadow-2xl group transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-4 focus:ring-amber-400"
        >
          <picture className="block w-full">
            <source media="(min-width: 768px)" srcSet="/blog-hero-ranking-desktop.png" />
            <img
              src="/blog-hero-ranking-mobile.png"
              alt="Melhor Ração para Pitbull e Cães Ativos em 2026 - Ranking de Rações"
              className="w-full h-auto object-cover md:object-contain object-center max-h-[560px] transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </picture>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-between p-6 md:p-10 lg:p-12">
            <div className="flex items-center justify-between">
              <span className="px-4 py-1.5 text-xs font-bold tracking-wider text-white rounded-full bg-secondary shadow-lg uppercase backdrop-blur-md">
                ⭐ Destaque Principal
              </span>
            </div>
            <div className="max-w-3xl">
              <h2 className="mb-3 text-2xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight tracking-tight group-hover:text-amber-400 transition-colors">
                Melhor Ração para Pitbull e Cães Ativos em 2026: ranking revela a campeã técnica e o melhor custo-benefício
              </h2>
              <p className="hidden sm:block max-w-2xl mb-4 text-sm md:text-base text-gray-200 line-clamp-2 leading-relaxed">
                PremieR Pit Bull vence a avaliação técnica e a Lunch Dog X-PRO Training se destaca como o melhor custo-benefício da comparação de 13 rações.
              </p>
              <div className="flex flex-wrap items-center gap-5 text-xs md:text-sm text-gray-300 font-medium">
                <span className="flex items-center">
                  <i className="mr-2 far fa-calendar text-amber-400" /> 23 de Agosto, 2026
                </span>
                <span className="flex items-center">
                  <i className="mr-2 far fa-clock text-amber-400" /> 10 min de leitura
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Top 3 cartões */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-200">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              🔥 Destaques da Semana
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {topCards.map((c) => (
              <Card key={c.slug} {...c} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mb-16">
          <div className="p-8 md:p-12 text-center text-white bg-gradient-to-br from-primary via-primary to-secondary rounded-3xl shadow-xl">
            <h2 className="mb-3 text-2xl font-extrabold md:text-4xl tracking-tight">
              Receba dicas exclusivas para seu pet
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg text-blue-100 leading-relaxed">
              Inscreva‑se em nossa newsletter e receba conteúdos especiais sobre
              cuidados, alimentação e saúde animal diretamente no seu e-mail.
            </p>
            <div className="max-w-xl mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </section>

        {/* Em Alta (cresce dinamicamente) */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-200">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              📈 Em Alta
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {bottomCards.map((c) => (
              <Card key={c.slug} {...c} />
            ))}
          </div>
        </section>

        {/* Anúncio estilo Google Ads */}
        <FadeIn delay={0.4}>
          <aside className="max-w-4xl mx-auto mt-12 mb-8 overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-100">
              <div className="flex items-center">
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white bg-blue-600 rounded">
                  Anúncio
                </span>
                <span className="ml-2 text-xs text-gray-500 font-medium">Patrocinado</span>
              </div>
              <button aria-label="Fechar anúncio" className="text-gray-400 hover:text-gray-600 transition-colors">
                <i className="fas fa-times"></i>
              </button>
            </div>

            <a
              href="https://www.racaopets.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 transition-colors hover:bg-gray-50/80 group"
            >
              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-blue-600 group-hover:underline">
                    Ração Pets - Nutrição premium para cães e gatos
                  </h4>
                  <div className="flex items-center mt-1">
                    <span className="text-sm font-semibold text-green-700">
                      www.racaopets.com.br
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-yellow-500 font-medium">
                      <i className="fas fa-star mr-1"></i>
                      4.9 (Avaliações verificadas)
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Rações premium e super premium sem conservantes ou corantes.
                    Garanta nutrição completa a preços acessíveis.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                  <div className="flex items-center justify-center w-36 h-28 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden p-2">
                    <img
                      src="https://www.tribunadopet.com.br/LUNCH15SEGUNDA.png"
                      alt="Ração Lunch Dog Essencial"
                      className="object-contain w-full h-full"
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
   Card Component (Design de Alta Performance & A11y)
------------------------------------------------------------ */
function Card({ slug, tag, color, title, desc, img }) {
  return (
    <article className="flex flex-col overflow-hidden bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <Link to={`/${slug}`} className="relative block h-52 overflow-hidden bg-gray-100">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span
          className={`absolute top-4 left-4 ${color} text-white px-3.5 py-1 rounded-full text-xs font-bold tracking-wide shadow-md uppercase`}
        >
          {tag}
        </span>
      </Link>

      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <h3 className="mb-3 text-xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
            <Link to={`/${slug}`}>
              {title}
            </Link>
          </h3>
          <p className="mb-5 text-sm text-gray-600 leading-relaxed line-clamp-2">
            {desc}
          </p>
        </div>

        <Link
          to={`/${slug}`}
          className="inline-flex items-center font-bold text-sm text-primary hover:text-secondary group/link transition-colors mt-auto"
        >
          Ler matéria completa 
          <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}

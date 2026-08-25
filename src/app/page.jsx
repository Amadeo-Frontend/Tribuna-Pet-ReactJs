"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import BorderPawTrail from "../components/BorderPawTrail";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LiveClock from "../components/LiveClock";
import MobileMenu from "../components/MobileMenu";
import NewsletterForm from "../components/Newsletter/NewsletterForm";
import AdBanner from "../components/AdBanner";

const topCards = [
  {
    slug: "alimentacao-saudavel",
    tag: "Alimentação",
    color: "bg-accent",
    title: "Guia Completo para uma Alimentação Saudável",
    desc: "Desmistifique a alimentação natural e ...",
    img: "https://www.tribunadopet.com.br/cachorro-pode-comer-comida-1.webp",
  },
  {
    slug: "cuidados-com-pets-no-inverno",
    tag: "Cuidados",
    color: "bg-blue-600",
    title: "Cuidados Diários com Cães e Gatos",
    desc: "Saiba como proteger seu pet em temperaturas baixas...",
    img: "https://www.tribunadopet.com.br/Roupa-de-frio-para-cachorro.webp",
  },
  {
    slug: "vagas-para-castracao-gratuita",
    tag: "Serviços",
    color: "bg-purple-600",
    title: "Utilidade Pública Pet",
    desc: "Prefeitura abriu vagas para castração gratuita...",
    img: "https://www.tribunadopet.com.br/castracao-de-animais-2.webp",
  },
];

const bottomCards = [
  {
    slug: "melhor-racao-para-pitbull-e-caes-ativos",
    tag: "Nutrição & Ranking",
    color: "bg-red-600",
    title: "Melhor Ração para Pitbull e Cães Ativos em 2026",
    desc: "Ranking completo e análise nutricional das melhores rações...",
    img: "/blog-hero-ranking-desktop.webp",
  },
  {
    slug: "alimentacao-saudavel-e-inteligente",
    tag: "Alimentação",
    color: "bg-rose-600",
    title: "Guia de Alimentação Responsável",
    desc: "Passo a passo para dar um alimento seguro e saboroso...",
    img: "https://www.tribunadopet.com.br/cachorro-caramelo-olhando-para-camera.webp",
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
];

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
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <div className="hidden py-2 text-white bg-gradient-to-r bg-primary sm:block">
        <div className="container flex items-center justify-between px-4 mx-auto text-sm">
          <span>Seu portal de informações para seu melhor amigo</span>
          <LiveClock />
        </div>
      </div>

      {/* Header & mobile menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && <div className="fixed inset-0 z-30 bg-black/50" onClick={() => setMenuOpen(false)} />}
      <Header onToggleMenu={() => setMenuOpen(true)} />

      {/* Conteúdo principal */}
      <main className="container px-4 py-8 mx-auto max-w-7xl">
        {/* HERO destaque principal */}
        <Link
          href="/melhor-racao-para-pitbull-e-caes-ativos"
          className="relative block mb-12 md:mb-16 overflow-hidden bg-black rounded-2xl md:rounded-3xl shadow-2xl group transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-4 focus:ring-amber-400"
        >
          <div className="relative w-full overflow-hidden bg-gray-950">
            <picture className="block w-full">
              <source media="(min-width: 768px)" srcSet="/blog-hero-ranking-desktop.webp" />
              <img
                src="/blog-hero-ranking-mobile-v2.webp"
                alt="Melhor Ração para Pitbull e Cães Ativos em 2026 - Ranking de Rações"
                width="480"
                height="320"
                className="w-full h-auto object-cover object-center max-h-[480px] md:max-h-[560px] transition-transform duration-700 group-hover:scale-[1.02]"
                fetchPriority="high"
                loading="eager"
              />
            </picture>
            
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3.5 py-1.5 text-[11px] md:text-xs font-extrabold tracking-wider text-white rounded-full bg-secondary shadow-lg uppercase backdrop-blur-md">
                ⭐ Destaque Principal
              </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent md:to-black/20" />
          </div>
          
          <div className="relative md:absolute md:inset-0 flex flex-col justify-end p-5 sm:p-8 md:p-10 lg:p-12 -mt-16 md:mt-0 bg-gradient-to-t from-black via-black/90 to-transparent md:bg-none z-10">
            <div className="max-w-3xl">
              <h2 className="mb-2.5 text-xl sm:text-2xl font-extrabold text-white md:text-4xl lg:text-5xl leading-snug md:leading-tight tracking-tight group-hover:text-amber-400 transition-colors">
                Melhor Ração para Pitbull e Cães Ativos em 2026: ranking revela a campeã técnica e a Melhor Compra
              </h2>
              <p className="hidden sm:block max-w-2xl mb-4 text-xs sm:text-sm md:text-base text-gray-200 line-clamp-2 leading-relaxed">
                PremieR Pit Bull vence a avaliação técnica e a Lunch Dog X-PRO Training se destaca como a Melhor Compra da comparação de 13 rações.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-300 font-medium pt-1">
                <span className="flex items-center">
                  23 de Agosto, 2026
                </span>
                <span className="flex items-center">
                  10 min de leitura
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
            {topCards.map((c, idx) => (
              <Card key={c.slug} {...c} isPriority={idx === 0} />
            ))}
          </div>
        </section>

        {/* Newsletter Destaque Otimizada */}
        <section className="mb-16">
          <div className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl md:rounded-3xl shadow-2xl transition-all duration-500 hover:border-slate-700">
            {/* Animador de patinhas de cão dando voltas em toda a borda retangular */}
            <BorderPawTrail />

            <div className="p-5 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
                {/* Lado Esquerdo: Ilustração de Pet em destaque */}
                <div className="md:col-span-5 flex justify-center relative">
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-sky-400/30 shadow-xl shadow-sky-500/20 group-hover:scale-105 transition-transform duration-500">
                    <img
                      src="/filhote2.webp"
                      alt="Cão e gato felizes com nutrição saudável"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <span className="hidden sm:block absolute bottom-1.5 left-2 right-2 text-center px-2 py-0.5 text-[10px] md:text-[11px] font-extrabold uppercase tracking-wider text-white bg-blue-600/90 rounded-full backdrop-blur-md border border-white/20">
                      Comunidade Pet
                    </span>
                  </div>
                </div>

                {/* Lado Direito: Chamada & Formulário */}
                <div className="md:col-span-7 text-center md:text-left space-y-2.5 sm:space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 text-[10px] sm:text-xs font-bold tracking-wider text-amber-400 bg-amber-400/10 rounded-full border border-amber-400/20 uppercase">
                    ⭐ Dicas Gratuitas
                  </div>

                  <h2 className="text-lg sm:text-xl md:text-4xl font-extrabold text-white leading-snug md:leading-tight tracking-tight">
                    Quer receber dicas de saúde e nutrição para seu amigo?
                  </h2>

                  <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                    Junte-se a milhares de tutores! Enviamos guias sobre rações, primeiros socorros e utilidade pública direto no seu e-mail.
                  </p>

                  <div className="pt-1 max-w-lg">
                    <NewsletterForm />
                  </div>

                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium flex items-center justify-center md:justify-start gap-1.5 pt-0.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    100% Gratuito. Sem spam. Cancele a qualquer momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Em Alta */}
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
        <AdBanner />
      </main>

      <Footer />
    </div>
  );
}

function Card({ slug, tag, color, title, desc, img, isPriority = false }) {
  return (
    <article className="flex flex-col overflow-hidden bg-white border border-gray-200/80 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-2xl hover:border-gray-300 transition-all duration-500 hover:-translate-y-1.5 group">
      <Link href={`/${slug}`} className="relative block h-56 md:h-60 overflow-hidden bg-gray-900">
        <img
          src={img}
          alt={title}
          width="400"
          height="240"
          decoding="async"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
          {...(isPriority
            ? { fetchPriority: "high", loading: "eager" }
            : { loading: "lazy" })}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
        
        <div className="absolute top-4 left-4 z-10 flex items-center">
          <span
            className={`px-3.5 py-1.5 ${color} text-white text-[11px] font-extrabold tracking-wider shadow-lg rounded-full uppercase backdrop-blur-md border border-white/20`}
          >
            {tag}
          </span>
        </div>
      </Link>

      <div className="flex flex-col justify-between flex-1 p-6 md:p-7 bg-gradient-to-b from-white to-gray-50/50">
        <div>
          <h3 className="mb-3 text-xl font-extrabold text-gray-900 leading-snug tracking-tight group-hover:text-primary transition-colors duration-300">
            <Link href={`/${slug}`}>
              {title}
            </Link>
          </h3>
          <p className="mb-6 text-sm text-gray-600 leading-relaxed line-clamp-2 font-normal">
            {desc}
          </p>
        </div>

        <Link
          href={`/${slug}`}
          className="inline-flex items-center font-extrabold text-xs uppercase tracking-wider text-primary hover:text-secondary group/link transition-colors mt-auto pt-2 border-t border-gray-100"
        >
          <span>Ler matéria completa</span>
          <span className="ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}

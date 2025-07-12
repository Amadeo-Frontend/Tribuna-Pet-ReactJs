import { useState } from "react";
import { Link } from "react-router-dom";

import LiveClock from "../components/LiveClock";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import NewsletterForm from "../components/Newsletter/NewsletterForm";
import PageTransition from "../components/PageTransition";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <PageTransition>
      {/* Top bar (desktop only) */}
      <div className="hidden py-2 text-white bg-gray-800 sm:block">
        <div className="container flex items-center justify-between px-4 mx-auto text-sm">
          <span>Seu portal de informações para seu pet!</span>

          {/* relógio ao vivo */}
          <LiveClock />
        </div>
      </div>

      {/* menu lateral + overlay já estão dentro do componente */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Header */}
      <Header onToggleMenu={() => setMenuOpen(true)} />

      {/* Main content */}
      <main className="container px-4 py-8 mx-auto">
        {/* Featured */}
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
              Descubra como escolher a melhor ração, preparar alimentos naturais
              e evitar os erros mais comuns na nutrição do seu animal de
              estimação.
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

        {/* Categorias em destaque */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Categorias em Destaque</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                slug: "alimentacao-saudavel",
                tag: "Alimentação",
                color: "bg-accent",
                title: "Guia Completo para uma Alimentação Saudável",
                desc: "Desmistifique a alimentação natural e ofereça uma dieta balanceada.",
                img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80",
              },
              {
                slug: "cuidados-com-pets-no-inverno",
                tag: "Cuidados",
                color: "bg-blue-600",
                title: "Cuidados Diários com Cães e Gatos",
                desc: "Com a chegada do inverno, os termômetros despencam e nossos pets enfrentam desafios semelhantes aos humanos...",
                img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
              },
              {
                slug: "vagas-para-castracao-gratuita",
                tag: "Serviços",
                color: "bg-purple-600",
                title: "Utilidade Pública Pet",
                desc: "A Prefeitura abrirá 5.717 vagas para castração gratuita em junho.",
                img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
              },
            ].map((cat) => (
              <article
                key={cat.slug}
                className="overflow-hidden transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg"
              >
                <div
                  className="h-48 bg-center bg-cover"
                  style={{ backgroundImage: `url('${cat.img}')` }}
                />
                <div className="p-6">
                  <span
                    className={`${cat.color} text-white px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block`}
                  >
                    {cat.tag}
                  </span>
                  <h3 className="mb-3 text-xl font-bold">{cat.title}</h3>
                  <p className="mb-4 text-gray-600">{cat.desc}</p>
                  <Link
                    to={`/${cat.slug}`}
                    className="font-medium text-primary hover:underline"
                  >
                    Ver artigos
                  </Link>
                </div>
              </article>
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
              Inscreva-se em nossa newsletter e receba conteúdos especiais sobre
              cuidados, alimentação e saúde animal.
            </p>
            <div className="max-w-xl mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import LiveClock from "../components/LiveClock";
import { FaUsers, FaEye, FaBullseye, FaHeart, FaCheckCircle } from "react-icons/fa";

// animações de utilidade rápida
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}>
    {children}
  </motion.div>
);

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById("global-loader");
      if (loader) loader.style.display = "none";
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Seo
        title="Sobre Nós | Tribuna do Pet"
        description="Conheça a história, missão e valores do Tribuna do Pet – o maior portal para tutores de cães e gatos do Brasil."
        canonical="https://www.tribunadopet.com.br/sobre-nos"
      />

      {/* Top bar */}
      <div className="hidden py-2 text-white bg-gradient-to-r from-gray-800 to-gray-900 sm:block">
        <div className="container flex items-center justify-between px-4 mx-auto text-sm">
          <span>Seu portal de informações para seu melhor amigo</span>
          <LiveClock />
        </div>
      </div>

      {/* Mobile menu + Header */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-black/50" onClick={() => setMenuOpen(false)} />
      )}
      <Header onToggleMenu={() => setMenuOpen(true)} />

      {/* Breadcrumb + título */}
      <div className="py-6 border-b bg-gradient-to-b from-primary to-primary">
        <div className="container px-4 mx-auto">
          <nav className="flex flex-wrap gap-2 mb-3 text-sm text-gray-200">
            <Link to="/" className="flex items-center hover:underline">
              <i className="mr-1 text-sm fas fa-home"></i> Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="font-medium text-gray-300">Sobre Nós</span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Sobre o Tribuna do Pet
            </h1>
          </FadeIn>

          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <i className="mr-2 far fa-calendar text-primary"></i> 12 de Julho, 2025
            </span>
            <span className="flex items-center">
              <i className="mr-2 far fa-clock text-primary"></i> 4 min de leitura
            </span>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="container max-w-5xl px-4 py-10 mx-auto">
        <article className="overflow-hidden bg-white shadow-xl rounded-2xl">
          {/* Intro */}
          <FadeIn delay={0.2}>
            <div className="p-6 md:p-8">
              <p className="mb-6 text-lg leading-relaxed text-gray-800">
                Inspirado nas tradicionais casas de ração de Curitiba, o Tribuna do Pet nasceu
                para levar atendimento acolhedor e informação confiável sobre cães e gatos para
                todo o Brasil – agora no formato digital.
              </p>
            </div>
          </FadeIn>

          {/* Missão / Visão / Valores */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3 md:p-8">
              <div className="p-5 bg-primary/10 rounded-xl">
                <h3 className="flex items-center gap-2 mb-3 text-lg font-bold">
                  <FaBullseye className="text-primary" /> Missão
                </h3>
                <p>Disseminar informação de qualidade que melhore a vida dos pets e tutores.</p>
              </div>
              <div className="p-5 bg-secondary/10 rounded-xl">
                <h3 className="flex items-center gap-2 mb-3 text-lg font-bold">
                  <FaEye className="text-secondary" /> Visão
                </h3>
                <p>Ser o portal nº 1 em bem-estar animal na América Latina.</p>
              </div>
              <div className="p-5 bg-yellow-100 rounded-xl">
                <h3 className="flex items-center gap-2 mb-3 text-lg font-bold">
                  <FaHeart className="text-yellow-500" /> Valores
                </h3>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Bem-estar animal acima de tudo</li>
                  <li>Ética e transparência editorial</li>
                  <li>Linguagem acessível</li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Equipe */}
          <FadeIn delay={0.4}>
            <div className="px-6 pb-10 md:px-8">
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold border-b border-gray-200">
                <FaUsers className="text-primary" /> Nossa Equipe
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ["Dra. Camila Rocha", "Médica-veterinária · CRMV-PR 0000"],
                  ["Marcos Silva", "Jornalista especializado em pets"],
                  ["Ana Pereira", "Editora de Conteúdo"],
                ].map(([name, role]) => (
                  <div key={name} className="p-5 text-center border rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1603415526960-f7e0328b49d4?auto=format&fit=crop&w=200&q=60"
                      alt={name}
                      className="object-cover w-24 h-24 mx-auto mb-3 rounded-full"
                    />
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-sm text-gray-500">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* CTA Newsletter */}
          <FadeIn delay={0.5}>
            <div className="p-8 text-center bg-gradient-to-r from-primary to-secondary rounded-b-2xl">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Junte-se à nossa comunidade
              </h2>
              <p className="mb-6 text-white">
                Receba dicas fresquinhas no seu e-mail. É grátis!
              </p>
              <a
                href="#newsletter"
                className="inline-block px-8 py-3 font-semibold transition bg-white rounded-full shadow text-primary hover:bg-gray-100"
              >
                Quero me inscrever
              </a>
            </div>
          </FadeIn>
        </article>
      </main>

      <Footer />
    </>
  );
}

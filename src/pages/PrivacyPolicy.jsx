import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import LiveClock from "../components/LiveClock";
import { FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}>
    {children}
  </motion.div>
);

export default function PrivacyPolicy() {
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
        title="Política de Privacidade | Tribuna do Pet"
        description="Saiba como o Tribuna do Pet coleta e utiliza seus dados pessoais em conformidade com a LGPD."
        canonical="https://www.tribunadopet.com.br/politica-de-privacidade"
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
            <span className="font-medium text-gray-300">Política de Privacidade</span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Política de Privacidade
            </h1>
          </FadeIn>

          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <i className="mr-2 far fa-calendar text-primary"></i> 12 de Julho, 2025
            </span>
            <span className="flex items-center">
              <i className="mr-2 far fa-clock text-primary"></i> 6 min de leitura
            </span>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="container max-w-4xl px-4 py-10 mx-auto">
        <article className="overflow-hidden bg-white shadow-xl rounded-2xl">
          {/*
            As seções abaixo resumem a política.
            Se quiser o texto completo, basta duplicar/estender conforme o HTML que enviei anteriormente.
          */}
          <FadeIn delay={0.2}>
            <section className="p-6 md:p-8">
              <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-900">
                <FaShieldAlt className="text-primary" /> 1. Introdução
              </h2>
              <p>
                Esta Política descreve como o <strong>Tribuna do Pet</strong> (“nós”)
                coleta, usa e protege suas informações pessoais, em conformidade com
                a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section className="p-6 border-t border-gray-200 md:p-8">
              <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-900">
                <FaCheckCircle className="text-primary" /> 2. Quais dados coletamos
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Nome e e-mail (newsletter ou contato).</li>
                <li>Dados de navegação, IP e preferências anônimas.</li>
                <li>Informações de cookies para estatísticas e anúncios.</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={0.35}>
            <section className="p-6 border-t border-gray-200 md:p-8">
              <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-900">
                <FaCheckCircle className="text-primary" /> 3. Como usamos os dados
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Enviar conteúdos e ofertas mediante seu consentimento.</li>
                <li>Melhorar a experiência de navegação.</li>
                <li>Analisar métricas e exibir anúncios relevantes.</li>
              </ul>
            </section>
          </FadeIn>

          {/* …repita as demais seções 4–10 conforme necessidade… */}

          <FadeIn delay={0.6}>
            <section className="p-8 text-center bg-gradient-to-r from-primary to-secondary rounded-b-2xl">
              <h2 className="mb-3 text-2xl font-bold text-white">
                Ficou com dúvidas?
              </h2>
              <p className="mb-6 text-white">
                Entre em contato pelo e-mail{" "}
                <a href="mailto:privacidade@tribunadopet.com.br" className="underline">
                  privacidade@tribunadopet.com.br
                </a>
                .
              </p>
            </section>
          </FadeIn>
        </article>
      </main>

      <Footer />
    </>
  );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import LiveClock from "../components/LiveClock";
import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaUtensils,
  FaHandHoldingHeart,
  FaStethoscope,
  FaBrain
} from "react-icons/fa";

// util fade-in animation
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
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
        description="História, missão e pilares editoriais do Tribuna do Pet – o maior portal para tutores de cães e gatos no Brasil."
        canonical="https://www.tribunadopet.com.br/sobre-nos"
      />

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

      {/* breadcrumb */}
      <div className="py-6 border-b bg-gradient-to-b from-primary to-primary">
        <div className="container px-4 mx-auto">
          <nav className="flex flex-wrap gap-2 mb-3 text-sm text-gray-200">
            <Link to="/" className="flex items-center hover:underline">
              <i className="mr-1 text-sm fas fa-home" /> Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="font-medium text-gray-300">Sobre Nós</span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">Sobre o Tribuna do Pet</h1>
          </FadeIn>
          <p className="mt-3 text-gray-300">O melhor site de informações para donos de cães e gatos do Brasil</p>
        </div>
      </div>

      {/* body */}
      <main className="container max-w-5xl px-4 py-10 mx-auto">
        <article className="overflow-hidden bg-white shadow-xl rounded-2xl">
          {/* Intro */}
          <FadeIn delay={0.15}>
            <section className="p-6 md:p-10">
                <h1 className="mb-2 text-4xl text-slate-800">Sobre o Tribuna do Pet</h1>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Se você busca um site com dicas confiáveis para cuidar de cães e gatos, chegou ao lugar certo. O
                <strong> Tribuna do Pet </strong>
                oferece informações completas e úteis para tutores, sempre com responsabilidade e carinho.
              </p>
              <div className="p-5 mb-8 border-l-4 rounded-lg bg-blue-50 border-primary">
                <p className="text-gray-700">
                  Nosso projeto nasceu inspirado na tradição de atendimento de uma casa de rações de Curitiba, onde o
                  cuidado com os animais sempre foi levado a sério.
                </p>
              </div>
            </section>
          </FadeIn>

          {/* História */}
          <FadeIn delay={0.2}>
            <section className="p-6 pt-0 md:p-10 md:pt-0">
              <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-800 border-b">Nossa História: Inspirados por quem sempre cuidou bem dos pets</h2>
              <p className="mb-6 text-gray-700">
                Antes da internet ser o principal canal de informação, as casas de rações de bairro eram verdadeiros
                centros de conhecimento sobre alimentação, saúde e bem‑estar de cães e gatos.
              </p>
              <p className="mb-6 text-gray-700">
                Nessa tradicional casa curitibana, o atendimento era próximo, quase familiar. Nomes dos pets eram
                lembrados com carinho e as dicas surgiam naturalmente, entre um atendimento e outro no balcão.
              </p>
              <p className="text-gray-700">Essa relação de confiança motivou a criação do Tribuna do Pet.</p>
            </section>
          </FadeIn>

          {/* Missão */}
          <FadeIn delay={0.25}>
            <section className="p-6 pt-0 md:p-10 md:pt-0">
              <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-800 border-b">Nossa Missão</h2>
              <p className="mb-6 text-gray-700">
                Valorizamos a tradição de bem atender, agora no formato digital. Nossa missão é levar conteúdo de
                qualidade sobre saúde, alimentação, comportamento e cuidados com cães e gatos, com a mesma atenção
                que você encontrava naquela casa de rações de bairro.
              </p>
              <div className="p-5 mb-8 border-l-4 rounded-lg bg-yellow-50 border-accent">
                <p className="text-gray-700">
                  Por isso, escrevemos de forma clara, sempre baseados em fontes sérias e focados no bem‑estar animal.
                </p>
              </div>
              <p className="text-gray-700">Mantemos a linguagem próxima que sempre marcou as relações entre tutores e especialistas de confiança.</p>
            </section>
          </FadeIn>

          {/* Pilares editoriais */}
          <FadeIn delay={0.3}>
            <section className="p-6 pt-0 md:p-10 md:pt-0">
              <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-800 border-b">O que você encontra no Tribuna do Pet</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Nutrição Animal */}
                <div className="p-6 bg-white border shadow-sm rounded-xl">
                  <div className="flex items-start mb-4">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-primary">
                      <FaUtensils />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-gray-800">Nutrição Animal</h3>
                      <p className="text-gray-700">Artigos sobre alimentação balanceada e dietas especiais.</p>
                    </div>
                  </div>
                </div>

                {/* Cuidados Diários */}
                <div className="p-6 bg-white border shadow-sm rounded-xl">
                  <div className="flex items-start mb-4">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-secondary">
                      <FaHandHoldingHeart />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-gray-800">Cuidados Diários</h3>
                      <p className="text-gray-700">Dicas essenciais para manter seu pet saudável e feliz.</p>
                    </div>
                  </div>
                </div>

                {/* Saúde Pet */}
                <div className="p-6 bg-white border shadow-sm rounded-xl">
                  <div className="flex items-start mb-4">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-green-600 rounded-full">
                      <FaStethoscope />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-gray-800">Saúde Pet</h3>
                      <p className="text-gray-700">Informações sobre prevenção de doenças e cuidados veterinários.</p>
                    </div>
                  </div>
                </div>

                {/* Comportamento */}
                <div className="p-6 bg-white border shadow-sm rounded-xl">
                  <div className="flex items-start mb-4">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-yellow-500 rounded-full">
                      <FaBrain />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-gray-800">Comportamento</h3>
                      <p className="text-gray-700">Guias para entender e educar seu animal de estimação.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* Linha do tempo */}
          <FadeIn delay={0.35}>
            <section className="p-6 pt-0 md:p-10 md:pt-0">
              <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-800 border-b">Nossa Jornada</h2>
              <div className="relative pl-3 space-y-10">
                {[
                  ["Inspiração Curitibana", "O projeto nasce inspirado nas tradicionais casas de ração de Curitiba, onde o atendimento personalizado era marca registrada."],
                  ["Fundação do Portal", "Criamos o Tribuna do Pet para levar atendimento especializado para o ambiente digital em todo Brasil."],
                  ["Crescimento", "Com conteúdo de qualidade, nos tornamos referência para donos de cães e gatos."],
                  ["Consolidação", "Hoje somos o principal portal de informações para tutores de pets no País."],
                ].map(([title, text], idx) => (
                  <div key={title} className="relative mx-2 flexitem center">
                    <span className="absolute flex items-center justify-center w-6 h-6 -mx-4 text-sm font-bold text-white rounded-full -left-3 bg-primary">{idx + 1}</span>
                    <h3 className="mb-1 text-lg font-bold text-gray-800">{title}</h3>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Final quote & CTA */}
          <FadeIn delay={0.4}>
            <section className="py-12 text-center text-white bg-gradient-to-r from-primary to-secondary">
              <h2 className="mb-4 text-2xl font-bold">Valorizando o passado, cuidando do presente</h2>
              <p className="max-w-2xl mx-auto mb-6">
                No Tribuna do Pet, respeitamos a história e as boas práticas que sempre funcionaram. Assim como nas casas de rações de Curitiba, aqui você encontra informação verdadeira e dicas úteis.
              </p>
              <p className="text-xl font-bold">Seja bem-vindo ao melhor portal para donos de cães e gatos do Brasil.</p>
            </section>
            <p className="py-6 italic text-center text-gray-700">"Porque cuidar de um pet sempre foi, e sempre será, um ato de amor e responsabilidade."</p>
          </FadeIn>
        </article>
      </main>

      <Footer />
    </>
  );
}

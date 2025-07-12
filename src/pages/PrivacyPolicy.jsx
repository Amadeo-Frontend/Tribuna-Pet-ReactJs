import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import LiveClock from "../components/LiveClock";
import {
  FaUserShield,
  FaLock,
  FaRegClock,
  FaExternalLinkAlt,
  FaUserSlash,
  FaUserCheck,
  FaGavel,
  FaBan,
  FaBug,
  FaQuestionCircle,
} from "react-icons/fa";

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
  {/* 1. Política de Privacidade */}
  <section className="p-8 md:p-10 bg-primary/5">
    <h2 className="flex items-center gap-3 mb-4 text-2xl font-bold text-primary">
      <FaUserShield /> Política de Privacidade
    </h2>
    <p className="mb-4 leading-relaxed text-gray-700">
      A sua privacidade é importante para nós. É política do <strong>Tribuna do
      Pet</strong> respeitar a sua privacidade em relação a qualquer informação que
      possamos coletar no site&nbsp;
      <a
        href="https://www.tribunadopet.com.br"
        className="underline hover:text-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tribuna do Pet
      </a>
      , e em qualquer outro site que operamos.
    </p>
    <p className="mb-4 text-gray-700">
      Solicitamos informações pessoais somente quando realmente precisamos delas
      para lhe fornecer um serviço. Fazemos isso por meios justos e legais, com
      o seu conhecimento e consentimento, explicando sempre o motivo da coleta.
    </p>
    <p className="text-gray-700">
      Mantemos os dados apenas pelo tempo necessário e adotamos medidas
      comercialmente aceitáveis para protegê-los contra perda, roubo ou acesso
      não autorizado.
    </p>
  </section>

  {/* 2. Segurança & Retenção */}
  <section className="grid gap-6 p-8 md:p-10 md:grid-cols-2">
    <div className="flex items-start gap-4">
      <div className="p-3 text-xl text-white rounded-full bg-primary">
        <FaLock />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          Proteção de Dados
        </h3>
        <p className="text-gray-700">
          Suas informações são armazenadas e protegidas usando criptografia,
          controle de acesso e monitoramento contínuo.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div className="p-3 text-xl text-white rounded-full bg-secondary">
        <FaRegClock />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          Retenção Limitada
        </h3>
        <p className="text-gray-700">
          Guardamos os dados apenas pelo tempo necessário para cumprir a
          finalidade declarada ou exigências legais.
        </p>
      </div>
    </div>
  </section>

  {/* 3. Compartilhamento */}
  <section className="p-8 border-t border-gray-200 md:p-10">
    <h2 className="flex items-center gap-3 mb-4 text-xl font-bold text-gray-900">
      <FaExternalLinkAlt /> Compartilhamento de Dados
    </h2>
    <p className="mb-4 text-gray-700">
      Não compartilhamos informações de identificação pessoal publicamente ou
      com terceiros, exceto quando exigido por lei. Nosso site pode conter links
      para páginas externas; não somos responsáveis pelas práticas de
      privacidade desses sites.
    </p>
    <p className="text-gray-700">
      Você é livre para recusar nossa solicitação de dados pessoais, entendendo
      que talvez não possamos fornecer alguns serviços.
    </p>
  </section>

  {/* 4. Compromisso do Usuário */}
  <section className="p-8 border-t border-gray-200 md:p-10 bg-yellow-50/50">
    <h2 className="flex items-center gap-3 mb-4 text-xl font-bold text-yellow-800">
      <FaUserCheck /> Compromisso do Usuário
    </h2>
    <ul className="space-y-3 text-gray-700 list-disc list-inside">
      <li className="flex items-start gap-2">
        <FaGavel className="mt-1 text-yellow-600" />
        Não se envolver em atividades ilegais ou contrárias à ordem pública.
      </li>
      <li className="flex items-start gap-2">
        <FaBan className="mt-1 text-yellow-600" />
        Não difundir conteúdo racista, xenofóbico, de apologia ao terrorismo ou
        contra direitos humanos.
      </li>
      <li className="flex items-start gap-2">
        <FaBug className="mt-1 text-yellow-600" />
        Não introduzir vírus ou softwares que possam danificar sistemas do
        Tribuna do Pet ou de terceiros.
      </li>
    </ul>
  </section>

  {/* 5. Mais Informações */}
  <section className="p-8 border-t border-gray-200 md:p-10">
    <h2 className="flex items-center gap-3 mb-4 text-xl font-bold text-gray-900">
      <FaQuestionCircle /> Mais Informações
    </h2>
    <p className="mb-4 text-gray-700">
      O uso continuado de nosso site será considerado aceitação desta Política.
      Se permanecer com dúvidas, entre em contato:
      <a
        href="mailto:tribunadopet@gmail.com"
        className="ml-1 font-medium text-primary hover:underline"
      >
        tribunadopet@gmail.com
      </a>
      .
    </p>
    <p className="text-sm text-gray-500">
      Vigente desde 12 de julho de 2025 • Última atualização automática.
    </p>
  </section>
</article>
      </main>

      <Footer />
    </>
  );
}

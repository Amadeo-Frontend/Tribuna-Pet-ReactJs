import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import LiveClock from "../../components/LiveClock";
import { LinkPreview } from "../../components/ui/link-preview";
import {
  FaRegStar,
  FaFlask,
  FaHandHoldingHeart,
  FaBrain,
  FaCheckCircle,
  FaBone,
  FaPaw,
  FaMapMarkedAlt,
  FaStore,
  FaShoppingCart,
  FaTruck,
  FaCity,
  FaDumbbell,
  FaMedal,
} from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { HiBuildingStorefront } from "react-icons/hi2";
import { SiShopee } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import ShareButton from "../../components/ui/ShareButton";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const ScaleIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.4, delay }}
  >
    {children}
  </motion.div>
);

export default function MelhorRacaoPitbull() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const loader = document.getElementById("global-loader");
    if (loader) {
      const timer = setTimeout(() => {
        loader.style.display = "none";
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Seo
        title="Melhor Ração para Pitbull e Cães Ativos em 2026 | Tribuna do Pet"
        description="Ranking das melhores rações para Pitbull e cães ativos em 2026. Análise de proteínas, massa muscular, saúde articular e custo-benefício."
        canonical="https://www.tribunadopet.com.br/melhor-racao-para-pitbull-e-caes-ativos"
        image="https://www.tribunadopet.com.br/blog-hero-ranking-desktop.png"
        published="2026-08-23"
      />

      {/* Top bar */}
      <div className="hidden py-2 text-white bg-gradient-to-r bg-primary sm:block">
        <div className="container flex items-center justify-between px-4 mx-auto text-sm">
          <span>Seu portal de informações para seu melhor amigo</span>
          <LiveClock />
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />
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
            <Link to="/alimentacao-saudavel" className="hover:underline">
              Alimentação Saudável
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-300">
              Melhor Ração para Pitbull
            </span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Melhor Ração para Pitbull e Cães Ativos em 2026: Guia Nutricional Completo
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <i className="mr-2 far fa-calendar text-primary"></i> 23 de Agosto, 2026
            </span>
            <span className="flex items-center">
              <i className="mr-2 far fa-clock text-primary"></i> 8 min de leitura
            </span>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="container max-w-5xl px-4 py-10 mx-auto">
        <article className="overflow-hidden bg-white shadow-xl rounded-2xl">
          {/* Tags */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-3 p-6 md:p-8">
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-blue-800 rounded-full bg-gradient-to-r from-blue-100 to-blue-200">
                <FaBowlFood className="mr-1.5" /> Alimentação Canina
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-white rounded-full bg-gradient-to-r from-red-600 to-red-800">
                <FaDumbbell className="mr-1.5" /> Cães Ativos & Atletismo
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-white rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600">
                <FaMedal className="mr-1.5" /> Ranking 2026
              </span>
            </div>
          </FadeIn>

          {/* Imagem de Capa Responsive (Desktop / Mobile) */}
          <ScaleIn delay={0.3}>
            <div className="px-6 md:px-8">
              <picture>
                <source media="(min-width: 768px)" srcSet="/blog-hero-ranking-desktop.png" />
                <img
                  src="/blog-hero-ranking-mobile.png"
                  alt="Ranking das melhores rações para Pitbull e cães ativos em 2026"
                  className="w-full h-auto shadow-lg rounded-xl"
                />
              </picture>
            </div>
          </ScaleIn>

          {/* Lead */}
          <FadeIn delay={0.4}>
            <div className="p-5 mx-6 my-6 border-l-4 border-blue-500 md:mx-8 bg-blue-50 rounded-xl">
              <p className="text-lg font-medium leading-relaxed text-gray-800">
                Cães de forte porte físico e alta energia como os Pitbulls, American Bully, Rottweiler e Boxer exigem uma nutrição rica em proteínas de alto valor biológico, protetores articulares e ingredientes de alta digestibilidade. Confira o ranking atualizado das melhores rações para manter a musculatura e vitalidade do seu atleta em 2026.
              </p>
            </div>
          </FadeIn>

          {/* Conteúdo do artigo */}
          <div className="p-6 md:p-8">
            <FadeIn delay={0.5}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <FaDumbbell className="text-blue-500" />
                O que um Cão Ativo e Forte Precisa na Ração?
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Pitbulls e raças atleticamente ativas possuem uma taxa metabólica elevada e grande densidade muscular. Oferecer uma ração comum ou de baixa proteína pode levar à perda de massa magra, problemas nas articulações e falta de disposição. Na hora de escolher o alimento ideal em 2026, observe os seguintes requisitos nutricionais:
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
              <FadeIn delay={0.6}>
                <div className="p-6 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-white rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 mr-3 bg-red-100 rounded-full">
                      <FaDumbbell className="text-red-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Proteína Bruta (23%+ a 30%)
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Essencial para preservação e ganho de massa muscular magra e reparação de tecidos após atividades intensas.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="p-6 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-white rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 mr-3 bg-green-100 rounded-full">
                      <FaFlask className="text-green-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Condroitina & Glicosamina
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Fundamentais para proteger as articulações e cartilagens contra o desgaste causado pelo alto impacto das corridas e saltos.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="p-6 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-white rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 mr-3 bg-yellow-100 rounded-full">
                      <FaRegStar className="text-yellow-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Omega 3 & 6 e Extrato de Yucca
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Pelagem brilhante, pele forte e fezes firmes com odor reduzido graças à alta digestibilidade dos ingredientes.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Imagem de meio de reportagem (Desktop/Mobile) */}
            <FadeIn delay={0.9}>
              <div className="my-8">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Desempenho & Nutrição no Dia a Dia dos Pitbulls
                </h3>
                <picture>
                  <source media="(min-width: 768px)" srcSet="/repotagem-ranking-pitbull-desktop.png" />
                  <img
                    src="/repotagem-ranking-pitbull-mobile.png"
                    alt="Reportagem e análise nutricional de rações para Pitbull"
                    className="w-full h-auto shadow-md rounded-xl"
                  />
                </picture>
              </div>
            </FadeIn>

            {/* Tabela Comparativa de Rações */}
            <FadeIn delay={1.0}>
              <div className="my-10">
                <h2 className="flex items-center gap-3 pb-2 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  <FaMedal className="text-yellow-500" />
                  Tabela Comparativa: Melhores Rações para Pitbull 2026
                </h2>
                <p className="mb-4 text-gray-700">
                  Confira a comparação completa das marcas mais recomendadas por veterinários e especialistas em nutrição canina:
                </p>
                <div className="overflow-hidden shadow-lg rounded-xl">
                  <img
                    src="/tabela-ranking-melhores-racoes-de-pitbull.png"
                    alt="Tabela ranking comparativa das melhores rações de Pitbull"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={1.1}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <FaBrain className="text-blue-500" />
                Por que a Ração Snack Dog Premium Especial se destaca?
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Entre as opções analisadas no ranking de 2026, a <strong>Snack Dog Premium Especial (23% de proteína com sabor Frango, Batata Doce, Aveia & Cereais)</strong> se tornou a grande campeã no quesito <em>Custo x Benefício e Digestibilidade</em> para Pitbulls e cães ativos.
              </p>
              <ul className="grid grid-cols-1 gap-3 mb-8 md:grid-cols-2">
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                  <span><strong>23% de Proteína de Alta Qualidade:</strong> Garante suporte muscular constante sem sobrecarregar os rins.</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                  <span><strong>Batata Doce & Aveia:</strong> Carboidratos complexos de baixo índice glicêmico para energia prolongada.</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                  <span><strong>Sem Corantes Artificiais:</strong> Reduz drasticamente alergias de pele comuns na raça Pitbull.</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                  <span><strong>Formulação Enriquecida:</strong> Vitaminas A, D3, E, Zinco e minerais quelatados.</span>
                </li>
              </ul>
            </FadeIn>

            {/* Onde Comprar */}
            <FadeIn delay={1.4}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <FaStore className="mr-2" />
                Onde Encontrar as Melhores Rações com Entrega Rápida
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
              <FadeIn delay={1.6}>
                <div className="p-6 border border-gray-200 shadow-sm bg-gradient-to-br from-gray-50 to-white rounded-xl">
                  <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-800">
                    <FaTruck className="mr-2" />
                    Distribuição Local & Lojas
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Distribuído pela{" "}
                    <a
                      href="https://www.sulpetracoes.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-600 hover:underline"
                    >
                      SulPet Distribuidora
                    </a>
                    , garantindo que o alimento esteja sempre fresco nos pet shops de Curitiba e Região.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Disponível nas principais agropecuárias e pet shops especializados.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={1.7}>
                <div className="p-6 border border-gray-200 shadow-sm bg-gradient-to-br from-gray-50 to-white rounded-xl">
                  <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-800">
                    <FaShoppingCart />
                    Comprar Online
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Receba em casa com segurança através das lojas parceiras:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <a
                        href="https://www.racaopets.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:underline font-semibold"
                      >
                        <HiBuildingStorefront className="mx-1 text-xl" />
                        Ração Pets - Loja Oficial
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shopee.com.br/racaopets"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:underline font-semibold"
                      >
                        <SiShopee className="mx-1 text-xl text-orange-500" />
                        Loja Ração Pets na Shopee
                      </a>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={1.8}>
              <div className="p-8 my-10 text-center shadow-xl bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl">
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Quer ver seu cão com mais força, saúde e pelos brilhantes?
                </h2>
                <p className="mb-6 text-xl text-white">
                  Invista na alimentação correta para cães ativos e sinta a diferença no pique e na qualidade de vida do seu amigo!
                </p>
              </div>
            </FadeIn>

            {/* Compartilhamento */}
            <ShareButton />
          </div>
        </article>

        {/* Anúncio Patrocinado Ração Pets */}
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

            <LinkPreview
              url="https://www.racaopets.com.br/cachorro/racao-seca/premium-especial/racao-snack-dog-premium-especial-para-caes-adultos-sabor-frango-batata-doce-aveia-amp-cereais-23-proteinas-12kg"
              href="https://www.racaopets.com.br/cachorro/racao-seca/premium-especial/racao-snack-dog-premium-especial-para-caes-adultos-sabor-frango-batata-doce-aveia-amp-cereais-23-proteinas-12kg"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 transition-colors hover:bg-gray-50"
            >
              <div className="flex flex-col items-start md:flex-row">
                <div className="flex-1">
                  <h4 className="font-medium text-blue-600 hover:underline">
                    Ração Snack Dog Premium Especial 12kg - Para Cães Ativos
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
                    23% de proteína, sabor frango, batata doce e aveia. Nutrição de alta performance sem corantes artificiais.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4">
                  <div className="flex items-center justify-center w-32 h-24 text-gray-500 bg-gray-200 border-2 border-dashed rounded-xl">
                    <img
                      src="/racao-batata-doce.jpg"
                      alt="Ração Snack Dog Premium Especial"
                      className="object-contain w-32 h-24"
                    />
                  </div>
                </div>
              </div>
            </LinkPreview>
          </aside>
        </FadeIn>
      </main>

      <Footer />
    </>
  );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import LiveClock from "../../components/LiveClock";
import {
  FaRegStar,
  FaTimes,
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
} from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { HiBuildingStorefront } from "react-icons/hi2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

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

const ScaleIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.4, delay }}
  >
    {children}
  </motion.div>
);

export default function AlimentacaoNatural() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const compartilharPagina = () => {
    if (navigator.share) {
      navigator.share({
        title:
          "Guia Completo de Alimentação Natural para Cães - Tribuna do Pet",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => {
      document.getElementById("global-loader").style.display = "none";
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Seo
        title="Guia Completo de Alimentação Natural para Cães | Tribuna do Pet"
        description="Benefícios, riscos e receitas para implementar uma dieta natural segura para seu cão"
        canonical="https://www.tribunadopet.com.br/alimentacao-natural"
        image="/cachorro-pode-comer-comida-1.jpg"
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
              Guia Completo de Alimentação Natural
            </span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Guia Completo de Alimentação Natural para Cães: Benefícios, Riscos
              e Receitas
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <i className="mr-2 far fa-calendar text-primary"></i> 15 de Junho,
              2023
            </span>
            <span className="flex items-center">
              <i className="mr-2 far fa-clock text-primary"></i> 8 min de
              leitura
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
              <span className="px-4 py-2 text-sm font-bold text-blue-800 rounded-full bg-gradient-to-r from-blue-100 to-blue-200">
                Alimentação
              </span>
              <span className="px-4 py-2 text-sm font-bold text-white rounded-full bg-gradient-to-r from-green-500 to-green-600">
                Cuidados
              </span>
              <span className="px-4 py-2 text-sm font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-purple-600">
                Utilidade
              </span>
            </div>
          </FadeIn>

          {/* Capa */}
          <ScaleIn delay={0.3}>
            <div className="px-6 md:px-8">
              <img
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Cachorro comendo"
                className="w-full h-auto shadow-lg rounded-xl"
              />
              <p className="mt-2 text-sm text-center text-gray-600">
                Alimentação natural pode trazer muitos benefícios para a saúde
                do seu pet
              </p>
            </div>
          </ScaleIn>

          {/* Lead */}
          <FadeIn delay={0.4}>
            <div className="p-5 mx-6 my-6 border-l-4 border-blue-500 md:mx-8 bg-blue-50 rounded-xl">
              <p className="text-lg font-medium leading-relaxed text-gray-800">
                A alimentação natural vem ganhando cada vez mais espaço na
                nutrição canina, mas muitos tutores ainda têm dúvidas sobre como
                implementar essa dieta de forma segura e equilibrada. Neste guia
                completo, vamos desmistificar a alimentação natural para cães e
                mostrar como você pode oferecer uma dieta saudável para seu
                melhor amigo.
              </p>
            </div>
          </FadeIn>

          {/* Conteúdo */}
          <div className="p-6 md:p-8">
            <FadeIn delay={0.5}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <i className="text-blue-500 fas fa-question-circle"></i>O que é
                alimentação natural para cães?
              </h2>
              <p className="mb-6 text-gray-700">
                A alimentação natural para cães (AN) consiste em oferecer
                alimentos frescos, cozidos ou crus, que seriam consumidos por
                humanos, mas formulados especialmente para atender às
                necessidades nutricionais caninas. Diferente das rações
                industrializadas, a AN utiliza ingredientes in natura, sem
                aditivos químicos ou processos de ultraprocessamento.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="p-5 my-6 border-l-4 border-yellow-400 bg-yellow-50 rounded-xl">
                <p className="italic text-gray-700">
                  "A transição para alimentação natural deve ser feita com
                  acompanhamento veterinário para garantir que todas as
                  necessidades nutricionais do animal sejam atendidas"
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <i className="text-red-500 fas fa-heart"></i>
                Benefícios da alimentação natural
              </h2>
              <p className="mb-4 text-gray-700">
                Os principais benefícios observados em cães que fazem a
                transição para alimentação natural incluem:
              </p>
              <ul className="grid grid-cols-1 gap-3 mt-4 mb-6 md:grid-cols-2">
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                  <span>Pelagem mais brilhante e saudável</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                  <span>Redução de alergias alimentares</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                  <span>Melhora na saúde dental e redução do mau hálito</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                  <span>Aumento da energia e disposição</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                  <span>Fezes mais firmes e com menos volume</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                  <span>Controle de peso mais eficiente</span>
                </li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="my-6">
                <img
                  src="https://images.unsplash.com/photo-1583512603806-077998240c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Ingredientes para alimentação natural"
                  className="w-full shadow-md rounded-xl"
                />
                <p className="mt-2 text-sm text-center text-gray-600">
                  Ingredientes frescos são essenciais para uma alimentação
                  natural de qualidade
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.9}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <i className="text-yellow-500 fas fa-exclamation-triangle"></i>
                Riscos e cuidados necessários
              </h2>
              <p className="mb-6 text-gray-700">
                Apesar dos benefícios, a alimentação natural exige cuidados
                especiais para não comprometer a saúde do animal:
              </p>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={1.0}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-red-700 bg-red-100 rounded-full">
                      1
                    </span>
                    Desequilíbrio nutricional
                  </h3>
                  <p className="text-gray-700">
                    A falta de nutrientes essenciais pode levar a problemas de
                    saúde sérios. É fundamental seguir uma fórmula balanceada
                    desenvolvida por um veterinário nutricionista.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={1.1}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-red-700 bg-red-100 rounded-full">
                      2
                    </span>
                    Contaminação bacteriana
                  </h3>
                  <p className="text-gray-700">
                    Alimentos crus podem conter bactérias como Salmonella e E.
                    coli. Higiene rigorosa é essencial no preparo e manipulação
                    dos alimentos.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={1.2}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-red-700 bg-red-100 rounded-full">
                      3
                    </span>
                    Excesso de certos nutrientes
                  </h3>
                  <p className="text-gray-700">
                    Suplementação excessiva de vitaminas e minerais pode ser tão
                    prejudicial quanto a deficiência.
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={1.3}>
              <h2 className="flex items-center gap-3 pb-2 mt-10 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <i className="text-green-500 fas fa-utensils"></i>
                Receitas de alimentação natural para iniciantes
              </h2>
              <p className="mb-6 text-gray-700">
                Aqui está uma receita básica e equilibrada para começar:
              </p>
            </FadeIn>

            <FadeIn delay={1.4}>
              <div className="p-6 my-8 border-l-4 border-yellow-400 bg-yellow-50 rounded-xl">
                <h3 className="flex items-center gap-2 mb-4 text-xl font-bold text-yellow-800">
                  <FaBone className="text-yellow-500" />
                  Receita básica para cães adultos
                </h3>
                <p className="mb-3 font-medium text-gray-800">Ingredientes:</p>
                <ul className="grid grid-cols-1 gap-3 mb-4 md:grid-cols-2">
                  <li className="flex items-start">
                    <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                    500g de carne magra (frango, peru ou patinho)
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                    200g de fígado bovino
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                    200g de vegetais variados (cenoura, abobrinha, brócolis)
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                    100g de carboidrato (batata doce, arroz integral)
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="mt-1 mr-2 text-green-500" />1
                    colher de sopa de óleo de peixe
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                    Suplemento vitamínico conforme orientação veterinária
                  </li>
                </ul>
                <p className="mb-2 font-medium text-gray-800">Preparo:</p>
                <p className="text-gray-700">
                  Cozinhe as carnes e os vegetais separadamente. Misture todos
                  os ingredientes e adicione o óleo de peixe e o suplemento.
                  Divida em porções adequadas para o tamanho do seu cão.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={1.5}>
              <div className="flex items-start p-6 mt-10 border border-gray-200 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-16 h-16 mr-5 overflow-hidden bg-gray-300 rounded-full">
                  <img
                    src="https://randomuser.me/api/portraits/women/43.jpg"
                    alt="Dra. Carla Mendes"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900">
                    Dra. Carla Mendes
                  </h3>
                  <p className="mb-2 text-gray-700">
                    Médica Veterinária especializada em Nutrição Animal com 10
                    anos de experiência. Formada pela USP e membro da Sociedade
                    Brasileira de Nutrição Animal.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Compartilhamento */}
            <FadeIn delay={1.6}>
              <div className="py-8 my-10 text-center border-t border-b border-gray-200">
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  Compartilhe este artigo:
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={compartilharPagina}
                    className="flex items-center gap-3 px-6 py-3 text-white rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-blue-800"
                  >
                    <i className="fab fa-facebook-f"></i> Compartilhar
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={compartilharPagina}
                    className="flex items-center gap-3 px-6 py-3 text-white rounded-lg shadow-md bg-gradient-to-r from-cyan-500 to-blue-500"
                  >
                    <i className="fab fa-twitter"></i> Tweetar
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={compartilharPagina}
                    className="flex items-center gap-3 px-6 py-3 text-white bg-gray-800 rounded-lg shadow-md"
                  >
                    <i className="fas fa-link"></i>{" "}
                    {copied ? "Copiado!" : "Copiar link"}
                  </motion.button>
                </div>
              </div>
            </FadeIn>
          </div>
        </article>

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
                      src="/LUNCH15SEGUNDA.png"
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
    </>
  );
}

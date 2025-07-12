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
import { SiShopee } from "react-icons/si";

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

export default function AlimentacaoInteligente() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const compartilharPagina = () => {
    if (navigator.share) {
      navigator.share({
        title: "Alimentação Saudável e Inteligente - Tribuna do Pet",
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
        title="Alimentação Saudável e Inteligente | Tribuna do Pet"
        description="Conheça as rações Lunch Dog e Lunch Cat que conquistaram o paladar dos pets curitibanos"
        canonical="https://www.tribunadopet.com.br/alimentacao-inteligente"
        image="/cachorro-comendo.jpg"
      />

      {/* Top bar */}
      <div className="hidden py-2 text-white bg-gradient-to-r from-gray-800 to-gray-900 sm:block">
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
              Alimentação Saudável e Inteligente
            </span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Alimentação Saudável e Inteligente: a Queridinha que Conquistou o
              Paladar dos Pets Curitibanos
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <i className="mr-2 far fa-calendar text-primary"></i> 16 de Junho,
              2025
            </span>
            <span className="flex items-center">
              <i className="mr-2 far fa-clock text-primary"></i> 7 min de
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
              <span className="px-4 py-2 text-sm font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-800">
                Premium
              </span>
              <span className="px-4 py-2 text-sm font-bold text-white rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600">
                Curitiba
              </span>
            </div>
          </FadeIn>

          {/* Capa */}
          <ScaleIn delay={0.3}>
            <div className="px-6 md:px-8">
              <img
                src="/nutripontaarticle.jpg"
                alt="Cachorro e gato comendo ração saudável"
                className="w-full h-auto shadow-lg rounded-xl"
              />
            </div>
          </ScaleIn>

          {/* Lead */}
          <FadeIn delay={0.4}>
            <div className="p-5 mx-6 my-6 border-l-4 border-blue-500 md:mx-8 bg-blue-50 rounded-xl">
              <p className="text-lg font-medium leading-relaxed text-gray-800">
                Curitiba se destaca no cenário nacional pela relação de cuidado
                e compromisso com os animais de estimação. Nessa capital que é
                referência em bem-estar animal, cresce a busca por produtos de
                alta qualidade que garantam saúde e longevidade aos pets. E
                nesse mercado, as rações Lunch Dog e Lunch Cat conquistaram o
                paladar dos pets curitibanos.
              </p>
            </div>
          </FadeIn>

          {/* Conteúdo */}
          <div className="p-6 md:p-8">
            <FadeIn delay={0.5}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <i className="text-blue-500 fas fa-building"></i>A Nutriponta e
                as rações Lunch
              </h2>
              <p className="mb-6 text-gray-700">
                Produzidas pela reconhecida empresa{" "}
                <a
                  href="http://www.nutriponta.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 hover:underline"
                >
                  Nutriponta
                </a>
                , as rações <span className="font-bold">Lunch Dog</span> (para
                cães) e <span className="font-bold">Lunch Cat</span> (para
                gatos) se destacam por aliar alta qualidade com excelente
                custo-benefício. Fundada com o propósito de oferecer nutrição
                equilibrada, segura e acessível, a Nutriponta consolidou sua
                atuação com base em três pilares:
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
              <FadeIn delay={0.6}>
                <div className="p-6 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-white rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 mr-3 bg-yellow-100 rounded-full">
                      <FaRegStar className="text-yellow-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Qualidade Nutricional
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Fórmulas balanceadas com ingredientes selecionados para
                    saúde e vitalidade dos pets.
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
                      Pesquisa Constante
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Desenvolvimento contínuo para aperfeiçoar as fórmulas e
                    nutrição animal.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="p-6 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-white rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 mr-3 bg-red-100 rounded-full">
                      <FaHandHoldingHeart className="text-red-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Responsabilidade
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Compromisso com os tutores e bem-estar dos animais de
                    estimação.
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.9}>
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="https://www.racaopets.com.br/cachorro/racao-seca/premium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm text-white transition-shadow rounded-full bg-gradient-to-r from-purple-500 to-purple-700 hover:shadow-md"
                >
                  Categoria Premium
                </a>
                <a
                  href="https://www.racaopets.com.br/cachorro/racao-seca/premium-especial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm text-white transition-shadow rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:shadow-md"
                >
                  Categoria Premium Especial
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={1.0}>
              <p className="mb-8 text-gray-700">
                Essas rações oferecem{" "}
                <span className="font-bold">
                  níveis nutricionais superiores
                </span>{" "}
                dentro de uma faixa de preço acessível, superando muitas marcas
                já consolidadas no mercado pet.
              </p>
            </FadeIn>

            <FadeIn delay={1.1}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <FaBrain className="text-blue-500" />
                Nutrição Inteligente com Ingredientes Selecionados
              </h2>
            </FadeIn>

            <FadeIn delay={1.2}>
              <div className="flex items-start mb-6">
                <div className="flex items-center justify-center w-10 h-10 mr-4 bg-blue-100 rounded-full">
                  <FaBowlFood className="text-xl text-blue-500" />
                </div>
                <div>
                  <p className="mb-4 text-gray-700">
                    Com fórmulas balanceadas e ingredientes rigorosamente
                    selecionados, as rações Lunch garantem:
                  </p>
                  <ul className="grid grid-cols-1 gap-3 mt-4 md:grid-cols-2">
                    <li className="flex items-start">
                      <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                      <span>
                        <strong>Melhor digestibilidade</strong> para cães e
                        gatos em todas as fases da vida
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                      <span>
                        <strong>Mais energia</strong> e vitalidade para o dia a
                        dia
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                      <span>
                        <strong>Proteínas de alta qualidade</strong> para
                        desenvolvimento muscular
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                      <span>
                        <strong>Vitaminas e minerais essenciais</strong> para
                        saúde integral
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                      <span>
                        <strong>Zero corantes artificiais</strong> - compromisso
                        com saúde animal
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={1.3}>
              <div className="p-6 mb-8 border-l-4 border-yellow-400 shadow-sm bg-gradient-to-br from-yellow-50 to-white rounded-xl">
                <h3 className="flex items-center gap-2 mb-4 text-xl font-bold text-yellow-800">
                  <FaBone className="mr-2" />
                  Benefícios da Lunch para seu pet
                </h3>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <li className="flex items-start">
                    <FaPaw className="mt-1 mr-2 text-yellow-500" />
                    Pelagem mais brilhante e saudável
                  </li>
                  <li className="flex items-start">
                    <FaPaw className="mt-1 mr-2 text-yellow-500" />
                    Melhora na saúde digestiva
                  </li>
                  <li className="flex items-start">
                    <FaPaw className="mt-1 mr-2 text-yellow-500" />
                    Mais energia e disposição
                  </li>
                  <li className="flex items-start">
                    <FaPaw className="mt-1 mr-2 text-yellow-500" />
                    Sistema imunológico fortalecido
                  </li>
                  <li className="flex items-start">
                    <FaPaw className="mt-1 mr-2 text-yellow-500" />
                    Controle de peso eficiente
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={1.4}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <FaStore className="mr-2" />
                Disponibilidade em Curitiba e região
              </h2>
            </FadeIn>

            <FadeIn delay={1.5}>
              <div className="flex items-start mb-6">
                <div className="flex items-center justify-center w-12 h-10 mr-4">
                  <FaMapMarkedAlt className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-gray-700">
                    Atualmente, os produtos Lunch Dog e Lunch Cat estão
                    presentes em{" "}
                    <span className="font-bold text-blue-600">
                      mais de 75% dos pontos de venda de Curitiba e região
                      metropolitana
                    </span>{" "}
                    , tornando-se uma opção de fácil acesso para os tutores que
                    buscam o melhor para seus pets.
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
              <FadeIn delay={1.6}>
                <div className="p-6 border border-gray-200 shadow-sm bg-gradient-to-br from-gray-50 to-white rounded-xl">
                  <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-800">
                    <FaTruck className="mr-2" />
                    Distribuição Local
                  </h3>
                  <p className="mb-3 text-gray-700">
                    A distribuição é feita pela{" "}
                    <a
                      href="https://www.distribuidorasulpet.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-600 hover:underline"
                    >
                      SulPet Distribuidora
                    </a>
                    , garantindo que o alimento esteja sempre próximo dos
                    consumidores.
                  </p>
                  <p className="text-gray-700">
                    Encontre nas principais redes de pet shops, agropecuárias e
                    lojas especializadas da região.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={1.7}>
                <div className="p-6 border border-gray-200 shadow-sm bg-gradient-to-br from-gray-50 to-white rounded-xl">
                  <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-800">
                    <FaShoppingCart />
                    Compras Online
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Compre no conforto de casa através dos principais sites e
                    marketplaces:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <a
                        href="https://racaopets.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:underline"
                      >
                        <span className="flex items-center">
                          <HiBuildingStorefront className="mx-1 text-xl" />
                          Ração Pets
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shopee.com.br/racaopets"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:underline"
                      >
                        <span className="flex items-center">
                          <SiShopee className="mx-1 text-xl text-orange-500" />
                          Shopee
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={1.8}>
              <div className="p-8 my-10 text-center shadow-xl bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl">
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Por que escolher Lunch Dog e Lunch Cat?
                </h2>
                <p className="mb-6 text-xl text-white">
                  Se você busca um alimento que entrega{" "}
                  <strong>
                    confiança, qualidade, equilíbrio nutricional e preço justo
                  </strong>{" "}
                  , a escolha é clara!
                </p>
                <p className="flex items-center justify-center text-2xl font-bold text-white">
                  Lunch Dog e Lunch Cat: porque seu pet merece mais saúde em
                  cada refeição
                </p>
              </div>
            </FadeIn>

            {/* Compartilhamento */}
            <FadeIn delay={1.9}>
              <div className="py-8 my-10 text-center border-t border-b border-gray-200">
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  Compartilhe esta informação:
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
        <FadeIn delay={2.0}>
          <aside className="max-w-4xl mx-auto mt-12 mb-8 overflow-hidden bg-white border border-gray-300 rounded-lg shadow-sm">
            <div className="flex items-start justify-between p-3 bg-gray-100">
              <div className="flex items-center">
                <span className="px-2 py-1 text-xs text-white bg-blue-500 rounded">
                  Anúncio
                </span>
                <span className="ml-2 text-xs text-gray-500">Patrocinado</span>
              </div>
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
                    <span className="flex items-center text-sm text-yellow-500 ">
                      <FaRegStar className="mx-1" /> 4.9
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
                      alt="Ração Lunch Dog 15kg"
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
    </>
  );
}

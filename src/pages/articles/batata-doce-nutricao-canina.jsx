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
  FaHeartbeat,
  FaSeedling,
  FaEye,
  FaWeight,
  FaExclamationTriangle,
  FaBan,
  FaFirstAid,
  FaCity,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import ShareButton from "../../components/ui/ShareButton";

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

export default function BatataDoceNutricaoCanina() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        title="Batata Doce e Vegetais na Nutrição Canina | Tribuna do Pet"
        description="Descubra os benefícios da batata doce e outros vegetais na alimentação canina"
        canonical="https://www.tribunadopet.com.br/batata-doce-nutricao-canina"
        image="https://www.tribunadopet.com.br/cachorro-pode-comer-verdura-fruta.jpg"
        published="2025-07-13"
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
              Batata Doce e Vegetais na Nutrição Canina
            </span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Batata Doce e Vegetais na Nutrição Canina
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <i className="mr-2 far fa-calendar text-primary"></i> 13 de Julho,
              2025
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
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
                <FaFirstAid className="mr-1.5" /> Hospital Veterinário
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                <FaHeartbeat className="mr-1.5" /> Saúde Animal
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-purple-800 bg-purple-100 rounded-full">
                <FaCity className="mr-1.5" /> Curitiba
              </span>
            </div>
            {/* Imagem Principal */}
            <ScaleIn delay={0.2}>
              <div className="w-full">
                <img
                  src="https://www.tribunadopet.com.br/cachorro-pode-comer-batata-doce.jpg"
                  alt="Cachorro comendo batata doce"
                  className="object-cover w-full"
                />
              </div>
            </ScaleIn>

            {/* Introdução */}
            <FadeIn delay={0.3}>
              <section className="mb-10">
                <p className="mb-6 text-gray-700">
                  Na busca por uma nutrição canina mais natural e eficiente, a
                  batata-doce emergiu como um superalimento com benefícios
                  extraordinários. Rica em fibras, vitaminas e com baixo índice
                  glicêmico, ela se tornou a queridinha dos veterinários e
                  nutricionistas animais.
                </p>

                <div className="p-5 border-l-4 border-blue-500 bg-blue-50 rounded-xl">
                  <p className="italic text-gray-700">
                    "A inclusão de batata-doce em dietas para cães promove menor
                    índice glicêmico, aumenta a saciedade e melhora
                    significativamente a saúde intestinal. É uma fonte
                    naturalmente prebiótica que beneficia especialmente animais
                    com diabetes ou sobrepeso" -{" "}
                    <strong>Dra. Mariana Monti</strong>, Mestre em Nutrição de
                    Cães e Gatos.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Benefícios da Batata Doce */}
            <FadeIn delay={0.4}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Benefícios Comprovados da Batata Doce
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-6 border border-green-100 shadow-sm bg-gradient-to-br from-green-50 to-white rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 mr-4 bg-green-100 rounded-full">
                        <FaHeartbeat className="text-xl text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Controle Glicêmico
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Com baixo índice glicêmico, libera energia gradualmente,
                      ideal para cães diabéticos ou com tendência à obesidade.
                    </p>
                  </div>

                  <div className="p-6 border border-green-100 shadow-sm bg-gradient-to-br from-green-50 to-white rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 mr-4 bg-green-100 rounded-full">
                        <FaSeedling className="text-xl text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Saúde Intestinal
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Rica em fibras prebióticas, estimula bactérias benéficas
                      no intestino e reduz o pH fecal, combatendo patógenos.
                    </p>
                  </div>

                  <div className="p-6 border border-green-100 shadow-sm bg-gradient-to-br from-green-50 to-white rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 mr-4 bg-green-100 rounded-full">
                        <FaEye className="text-xl text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Visão e Imunidade
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Fonte de betacaroteno (precursor da vitamina A) e vitamina
                      C, essenciais para visão saudável e sistema imunológico
                      forte.
                    </p>
                  </div>

                  <div className="p-6 border border-green-100 shadow-sm bg-gradient-to-br from-green-50 to-white rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 mr-4 bg-green-100 rounded-full">
                        <FaWeight className="text-xl text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Controle de Peso
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Promove maior saciedade com menos calorias, ajudando no
                      controle de peso sem deixar o cão com fome.
                    </p>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Como Preparar */}
            <FadeIn delay={0.5}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Como Preparar Batata Doce para Seu Cão
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-blue-700 bg-blue-100 rounded-full">
                      1
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold">
                        Seleção e Limpeza
                      </h3>
                      <p className="text-gray-700">
                        Escolha batatas-doces firmes, sem brotos ou áreas
                        escuras. Lave cuidadosamente sob água corrente para
                        remover resíduos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-blue-700 bg-blue-100 rounded-full">
                      2
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold">
                        Cozimento Adequado
                      </h3>
                      <p className="text-gray-700">
                        Cozinhe no vapor ou em água sem adição de óleo, sal ou
                        temperos. O cozimento aumenta a biodisponibilidade dos
                        nutrientes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-blue-700 bg-blue-100 rounded-full">
                      3
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold">Processamento</h3>
                      <p className="text-gray-700">
                        Retire a casca e amasse ou corte em cubos pequenos para
                        facilitar a digestão. Jamais ofereça crua.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-blue-700 bg-blue-100 rounded-full">
                      4
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold">Resfriamento</h3>
                      <p className="text-gray-700">
                        Deixe esfriar completamente antes de servir para evitar
                        queimaduras na boca e estômago do seu cão.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 mt-8 border-l-4 border-red-500 bg-red-50 rounded-xl">
                  <h3 className="flex items-center mb-3 text-xl font-bold text-red-800">
                    <FaExclamationTriangle className="mr-2" />
                    Atenção!
                  </h3>
                  <p className="text-lg text-red-700">
                    A batata-doce crua contém substâncias que podem causar
                    desconforto digestivo. Jamais use temperos como alho ou
                    cebola, que são tóxicos para cães.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Alimentos Proibidos */}
            <FadeIn delay={0.6}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Alimentos Proibidos para Cães
                </h2>
                <p className="mb-6 text-gray-700">
                  Enquanto a batata-doce é benéfica, muitos alimentos humanos
                  são perigosos para cães. Mantenha longe do seu pet:
                </p>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex items-start p-4 border border-red-200 rounded-lg bg-red-50">
                    <div className="mt-1 mr-4 text-red-500">
                      <FaBan className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Chocolate
                      </h3>
                      <p className="text-gray-700">
                        Contém teobromina, substância tóxica que pode causar
                        convulsões e morte
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 border border-red-200 rounded-lg bg-red-50">
                    <div className="mt-1 mr-4 text-red-500">
                      <FaBan className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Uvas e Passas
                      </h3>
                      <p className="text-gray-700">
                        Podem causar insuficiência renal aguda mesmo em pequenas
                        quantidades
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 border border-red-200 rounded-lg bg-red-50">
                    <div className="mt-1 mr-4 text-red-500">
                      <FaBan className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Cebola e Alho
                      </h3>
                      <p className="text-gray-700">
                        Causam anemia hemolítica, mesmo em pequenas quantidades
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 border border-red-200 rounded-lg bg-red-50">
                    <div className="mt-1 mr-4 text-red-500">
                      <FaBan className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Abacate
                      </h3>
                      <p className="text-gray-700">
                        Contém persina, que pode causar vômitos e diarreia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 border border-red-200 rounded-lg bg-red-50">
                    <div className="mt-1 mr-4 text-red-500">
                      <FaBan className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Café e Chá
                      </h3>
                      <p className="text-gray-700">
                        Contêm cafeína, que pode ser fatal para cães
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 border border-red-200 rounded-lg bg-red-50">
                    <div className="mt-1 mr-4 text-red-500">
                      <FaBan className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Álcool
                      </h3>
                      <p className="text-gray-700">
                        Pode causar intoxicação grave, depressão respiratória e
                        coma
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Conclusão */}
            <FadeIn delay={0.7}>
              <section className="mt-12">
                <div className="p-8 text-center bg-green-100 rounded-2xl">
                  <h3 className="mb-4 text-2xl font-bold text-green-800">
                    Transforme a Nutrição do Seu Cão Hoje!
                  </h3>
                  <p className="max-w-3xl mx-auto mb-6 text-lg text-green-700">
                    A inclusão estratégica de batata-doce pode revolucionar a
                    saúde do seu cão. Lembre-se de introduzir novos alimentos
                    gradualmente e sempre com supervisão veterinária.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Compartilhamento */}
            <ShareButton />
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
              href="https://www.racaopets.com.br/cachorro/racao-seca/premium-especial/racao-snack-dog-premium-especial-para-caes-adultos-sabor-frango-batata-doce-aveia-amp-cereais-23-proteinas-12kg"
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
                      src="https://www.tribunadopet.com.br/racao-batata-doce.jpg"
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

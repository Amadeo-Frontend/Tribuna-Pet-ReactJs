import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import LiveClock from "../../components/LiveClock";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaHeart,
  FaPaw,
  FaDog,
  FaCat,
  FaShareAlt,
  FaBell,
  FaPhone,
  FaCheckCircle,
  FaRegSadCry,
  FaRegSmile,
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

export default function PetsPerdidos() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("global-loader").style.display = "none";
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Seo
        title="Ferramenta para Encontrar Pets Perdidos | Tribuna do Pet"
        description="RPC lança app interativo para ajudar tutores a localizar animais desaparecidos. Entenda como funciona e sua importância para o bem-estar animal."
        canonical="https://www.tribunadopet.com.br/ferramenta-pets-perdidos"
        image="https://www.tribunadopet.com.br/rastreamento-de-pets-og-image.jpg"
        published="2025-08-04"
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
            <Link to="/utilidade-publica" className="hover:underline">
              Utilidade Pública
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-300">
              Ferramenta para Pets Perdidos
            </span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              RPC lança ferramenta inovadora para ajudar a encontrar pets
              perdidos
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <FaSearch className="mr-2 text-primary" />4 de Agosto, 2025
            </span>
            <span className="flex items-center">
              <FaBell className="mr-2 text-primary" />5 min de leitura
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
                <FaHeart className="mr-1.5" /> Bem-Estar Animal
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                <FaPaw className="mr-1.5" /> Pet Perdido
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-purple-800 bg-purple-100 rounded-full">
                <FaMapMarkerAlt className="mr-1.5" /> Paraná
              </span>
            </div>

            <FadeIn delay={0.2}>
              <section className="mb-8">
                <p className="p-4 mb-6 text-xl font-medium text-gray-700 border-l-4 rounded-lg bg-gray-50 border-primary">
                  A RPC lançou uma ferramenta revolucionária que está
                  transformando a busca por pets perdidos no Paraná. O app
                  interativo permite que tutores registrem animais desaparecidos
                  e cidadãos reportem pets encontrados, aumentando
                  significativamente as chances de reencontro.
                </p>
              </section>
            </FadeIn>

            {/* Imagem Principal */}
            <ScaleIn delay={0.3}>
              <div className="w-full mb-8">
                <img
                  src="/rastreamento-de-pets-og-image.jpg"
                  alt="Mulher abraçando seu cão que foi encontrado após estar perdido"
                  className="object-cover w-full rounded-lg"
                />
                <div className="mt-2 text-sm italic text-gray-500">
                  Ferramenta da RPC já ajudou a reunir centenas de pets com seus
                  tutores
                </div>
              </div>
            </ScaleIn>

            {/* Importância para os pets */}
            <FadeIn delay={0.4}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Por que essa ferramenta é vital para os pets?
                </h2>

                <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
                  {/* Benefício 1 */}
                  <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-blue-50 to-white">
                    <div className="flex items-center mb-3 text-blue-600">
                      <FaRegSmile className="mr-2 text-2xl" />
                      <h3 className="text-lg font-bold">
                        Redução do tempo perdido
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      Cada hora que um pet passa perdido aumenta os riscos. A
                      ferramenta agiliza o reencontro, diminuindo a exposição a
                      perigos como acidentes, maus-tratos e condições climáticas
                      adversas.
                    </p>
                  </div>

                  {/* Benefício 2 */}
                  <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-green-50 to-white">
                    <div className="flex items-center mb-3 text-green-600">
                      <FaHeart className="mr-2 text-2xl" />
                      <h3 className="text-lg font-bold">Saúde emocional</h3>
                    </div>
                    <p className="text-gray-700">
                      Pets perdidos sofrem com estresse, ansiedade e medo. O
                      reencontro rápido preserva seu bem-estar psicológico e
                      previne traumas duradouros.
                    </p>
                  </div>

                  {/* Benefício 3 */}
                  <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-purple-50 to-white">
                    <div className="flex items-center mb-3 text-purple-600">
                      <FaCheckCircle className="mr-2 text-2xl" />
                      <h3 className="text-lg font-bold">
                        Prevenção de abandono
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      Animais não localizados frequentemente acabam em abrigos
                      superlotados ou nas ruas. A ferramenta reduz essa triste
                      estatística, mantendo os pets em seus lares.
                    </p>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Como funciona */}
            <FadeIn delay={0.5}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Como funciona a ferramenta?
                </h2>

                <div className="p-6 mb-8 border-l-4 border-green-500 rounded-r-lg bg-green-50">
                  <h3 className="mb-3 text-xl font-bold text-green-800">
                    Passo a passo simplificado
                  </h3>
                  <ol className="pl-6 space-y-4 list-decimal">
                    <li>
                      <strong>Acesso ao mapa:</strong> O tutor acessa o app
                      interativo no site da RPC
                    </li>
                    <li>
                      <strong>Registro do pet:</strong> Preenche informações
                      detalhadas (foto, características, última localização)
                    </li>
                    <li>
                      <strong>Alerta à comunidade:</strong> O caso é
                      imediatamente visível para todos os usuários na região
                    </li>
                    <li>
                      <strong>Comunicação direta:</strong> Quem avistar o pet
                      pode entrar em contato diretamente pelo sistema
                    </li>
                    <li>
                      <strong>Atualização em tempo real:</strong> O tutor marca
                      o pet como encontrado quando o reencontro acontece
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center my-8">
                  <a
                    href="https://redeglobo.globo.com/rpc/noticia/rpc-lanca-ferramenta-para-ajudar-a-encontrar-pets-perdidos.ghtml"
                    className="flex items-center px-8 py-4 text-lg font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-primary hover:bg-blue-700 hover:scale-105"
                  >
                    <FaSearch className="mr-2 text-xl" />
                    ACESSAR FERRAMENTA
                  </a>
                </div>
              </section>
            </FadeIn>

            {/* Estatísticas e Impacto */}
            <FadeIn delay={0.6}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Impacto da ferramenta na vida dos pets
                </h2>

                <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl">
                    <h3 className="flex items-center mb-4 text-xl font-bold text-blue-800">
                      <FaDog className="mr-2" /> Resultados impressionantes
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                        <span>
                          <strong>72% de aumento</strong> nos reencontros nos
                          primeiros 3 meses
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                        <span>
                          <strong>Média de 48 horas</strong> para localização
                          (antes eram 7-10 dias)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                        <span>
                          <strong>Mais de 1.200 pets</strong> reencontrados com
                          seus tutores
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                        <span>
                          <strong>Redução de 35%</strong> em abrigos de animais
                          perdidos
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl">
                    <h3 className="flex items-center mb-4 text-xl font-bold text-purple-800">
                      <FaCat className="mr-2" /> Depoimentos emocionantes
                    </h3>
                    <div className="space-y-4">
                      <blockquote className="p-4 italic bg-purple-100 border-l-4 border-purple-500">
                        "Minha gata Luna estava perdida há 5 dias. Em menos de
                        12 horas após registrar no mapa, recebi uma mensagem de
                        uma família que a encontrou. Estou eternamente grata!" -
                        Ana, Curitiba
                      </blockquote>
                      <blockquote className="p-4 italic bg-purple-100 border-l-4 border-purple-500">
                        "Encontrei um cachorro perdido na chuva. Usei a
                        ferramenta e em 2 horas localizei seus donos. Ver a
                        alegria deles ao reencontrar o Thor não tem preço!" -
                        Carlos, Londrina
                      </blockquote>
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Dicas para prevenção */}
            <FadeIn delay={0.7}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Como proteger seu pet do desaparecimento
                </h2>

                <div className="p-6 mb-8 border-l-4 border-yellow-500 rounded-r-lg bg-yellow-50">
                  <h3 className="mb-3 text-xl font-bold text-yellow-800">
                    Medidas preventivas essenciais
                  </h3>
                  <ul className="pl-6 space-y-3 list-disc">
                    <li>
                      <strong>Identificação permanente:</strong> Microchip é a
                      forma mais segura de identificação
                    </li>
                    <li>
                      <strong>Coleira com plaquinha:</strong> Inclua seu
                      telefone e nome do pet (atualize quando mudar número)
                    </li>
                    <li>
                      <strong>Ambiente seguro:</strong> Verifique cercas,
                      portões e telas regularmente
                    </li>
                    <li>
                      <strong>Supervisão:</strong> Não deixe pets sozinhos em
                      áreas externas sem vigilância
                    </li>
                    <li>
                      <strong>Treinamento:</strong> Ensine comandos como "fica"
                      e "volta" que podem salvar vidas
                    </li>
                  </ul>
                </div>
              </section>
            </FadeIn>

            {/* O que fazer se perder */}
            <FadeIn delay={0.8}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Seu pet desapareceu? Aja rápido!
                </h2>

                <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
                  <div className="p-6 bg-gradient-to-br from-red-50 to-white rounded-xl">
                    <h3 className="flex items-center mb-4 text-xl font-bold text-red-800">
                      <FaRegSadCry className="mr-2" /> Passos imediatos
                    </h3>
                    <ol className="pl-6 space-y-3 list-decimal">
                      <li>Registre imediatamente na ferramenta da RPC</li>
                      <li>Percorra o bairro chamando pelo nome do pet</li>
                      <li>Mostre fotos para vizinhos e comércios locais</li>
                      <li>
                        Verifique abrigos e clínicas veterinárias da região
                      </li>
                      <li>
                        Espalhe cartazes com foto e informações de contato
                      </li>
                    </ol>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-xl">
                    <h3 className="flex items-center mb-4 text-xl font-bold text-green-800">
                      <FaPhone className="mr-2" /> Recursos úteis
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaMapMarkerAlt className="mt-1 mr-2 text-green-600" />
                        <span>
                          <strong>Ferramenta RPC:</strong>{" "}
                          <a href="https://interatividade.vocenarpc.com.br/install/">CLIQUE AQUI PARA BAIXAR O APP VOCÊ NA RPC</a>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaPhone className="mt-1 mr-2 text-green-600" />
                        <span>
                          <strong>Centro de Controle de Zoonoses:</strong> (41)
                          3313-1474
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaHeart className="mt-1 mr-2 text-green-600" />
                        <span>
                          <strong>ONGs locais:</strong> Proteção Animal Curitiba
                          (41) 99988-7766
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaPaw className="mt-1 mr-2 text-green-600" />
                        <span>
                          <strong>Grupos de busca:</strong> 'Achados e Perdidos
                          Pets PR' no Facebook
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Fontes Oficiais */}
            <FadeIn delay={0.9}>
              <div className="p-6 mt-8 rounded-lg bg-gray-50">
                <h3 className="mb-3 text-lg font-bold text-gray-800">
                  Fontes e Recursos
                </h3>
                <ul className="pl-6 space-y-2 list-disc">
                  <li>
                    Reportagem original da RPC:{" "}
                    <a
                      href="https://redeglobo.globo.com/rpc/noticia/rpc-lanca-ferramenta-para-ajudar-a-encontrar-pets-perdidos.ghtml"
                      className="text-primary hover:underline"
                    >
                      Acessar matéria
                    </a>
                  </li>
                  <li>
                    Ferramenta de busca:{" "}
                    <a
                      href="https://interatividade.vocenarpc.com.br/install/"
                      className="text-primary hover:underline"
                    >
                      CLIQUE AQUI PARA BAIXAR O APP VOCÊ NA RPC
                    </a>
                  </li>
                  <li>
                    Cartilha de prevenção:{" "}
                    <a
                      href="https://www.wspa.org.br/protect-pets/"
                      className="text-primary hover:underline"
                    >
                      Como proteger seu pet de desaparecimento
                    </a>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Compartilhamento */}
            <div className="mt-8">
              <ShareButton />
            </div>
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
                      src="https://www.tribunadopet.com.br/LUNCH15SEGUNDA.png"
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

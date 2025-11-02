import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import LiveClock from "../../components/LiveClock";
import ShareButton from "../../components/ui/ShareButton";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaTags,
  FaMoneyBill,
  FaDog,
  FaStore,
  FaCheckCircle,
  FaLeaf,
  FaShieldAlt,
  FaUtensils,
  FaQuestionCircle,
} from "react-icons/fa";
import { faStar } from "@fortawesome/free-regular-svg-icons";

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

export default function GuiaRacaoPremiumFilhotesCuritiba() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const el = document.getElementById("global-loader");
    if (el) el.style.display = "none";
  }, []);

  const handleCtaToast = () => {
    toast.info("Abrindo ofertas para Curitiba e envio nacional… 🐶");
  };

  return (
    <>
      <Seo
        title="Ração Premium para Filhotes em Curitiba (Guia 2025) | Tribuna do Pet"
        description="Guia simples para escolher ração premium para filhotes: o que olhar, como servir, transição em 7 dias e onde comprar em Curitiba/RMC com envio nacional."
        canonical="https://www.tribunadopet.com.br/guia-racao-premium-filhotes-curitiba"
        image="https://www.tribunadopet.com.br/og-default.jpg"
        published="2025-11-01"
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
            <Link to="/saude-animal" className="hover:underline">
              Saúde Animal
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-300">
              Guia: Ração Premium para Filhotes
            </span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Melhor Ração para Filhotes: Como Escolher
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <i className="mr-2 far fa-calendar text-primary"></i> 01 de
              Novembro, 2025
            </span>
            <span className="flex items-center">
              <i className="mr-2 far fa-clock text-primary"></i> 6–8 min de
              leitura
            </span>
            <span className="items-center hidden sm:flex">
              4.5k visualizações
            </span>
          </div>
        </div>
      </div>

      <main className="container max-w-4xl px-4 py-10 mx-auto">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="flex items-center px-3 py-1.5 text-xs font-medium text-purple-800 bg-purple-100 rounded-full">
            <FaDog className="mr-1.5" /> Filhotes
          </span>
          <span className="flex items-center px-3 py-1.5 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
            <FaTags className="mr-1.5" /> Ração premium
          </span>
          <span className="flex items-center px-3 py-1.5 text-xs font-medium text-green-800 bg-green-100 rounded-full">
            <FaMoneyBill className="mr-1.5" /> Curitiba e RMC
          </span>
        </div>

        {/* Hero */}
        <ScaleIn delay={0.2}>
          <div className="w-full my-2">
            <img
              src="https://www.tribunadopet.com.br/filhote1.jpg"
              alt="Filhote saudável com ração premium"
              className="object-cover w-full rounded-lg"
            />
          </div>
        </ScaleIn>

        {/* Introdução sem técnica */}
        <FadeIn delay={0.2}>
          <div className="p-6 mb-6 border-l-4 border-blue-500 bg-blue-50 rounded-xl">
            <p className="text-lg text-gray-800">
              Ter um filhote em casa é alegria pura e também responsabilidade. A
              alimentação certa ajuda no crescimento, na energia para brincar,
              na pelagem bonita e até no cocô firme (sinal de que está digerindo
              bem). Abaixo, um passo a passo sem complicação para escolher
              <strong> ração premium</strong>, montar a rotina e evitar os erros
              mais comuns.
            </p>
          </div>
        </FadeIn>

        {/* O que olhar sem tecnicês */}
        <FadeIn delay={0.3}>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            O que uma boa ração premium tem?
          </h2>
          <ul className="pl-5 mb-6 text-gray-700 list-disc">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1 text-green-600" />
              <span>
                <strong>Feita para filhotes:</strong> a embalagem precisa dizer
                que é para “filhotes”. É isso que garante os nutrientes certos
                para essa fase acelerada.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaLeaf className="mt-1 text-green-600" />
              <span>
                <strong>Cuidado da pele e do pelo:</strong> receitas com fontes
                de vitamínas e minerais ajudam a pelagem ficar brilhante e sem
                coceiras.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaShieldAlt className="mt-1 text-amber-600" />
              <span>
                <strong>Equilibrada e confiável:</strong> marcas sérias mostram
                claramente os ingredientes, têm controle de qualidade e deixam o
                rótulo fácil de entender.
              </span>
            </li>
          </ul>
        </FadeIn>

        {/* Como servir sem números/tabela */}
        <FadeIn delay={0.35}>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Como organizar a rotina do seu filhote
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Divida em pequenas refeições ao longo do dia.</strong>{" "}
              Filhotes comem menos por vez, mas com mais frequência. Assim eles
              aproveitam melhor e não passam mal.
            </p>
            <p>
              <strong>
                Siga as recomendações da quantidade correta que consta na
                embalagem
              </strong>
              :se está ganhando muito peso, reduza um pouco, e se está magrinho
              aumente um pouco.
            </p>
            <p>
              <strong>Água fresca sempre por perto.</strong> Troque durante o
              dia.
            </p>
          </div>
          <br />
        </FadeIn>

        {/* Erros comuns bem leigos */}
        <FadeIn delay={0.45}>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Erros comuns que atrapalham
          </h2>
          <ul className="pl-5 mb-6 text-gray-700 list-disc">
            <li>Oferecer muito petisco e “comida de humano”.</li>
            <li>Encher o pote sem medir e sem observar o corpo do cão.</li>
            <li>Esquecer a água fresca.</li>
          </ul>
        </FadeIn>

        {/* Onde comprar (priorizando Ração Pets) */}
        <FadeIn delay={0.5}>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Compre com entrega rápida em Curitiba/RMC
          </h2>

          <div className="p-5 mb-4 border border-green-200 rounded-xl bg-green-50">
            <p className="mb-3 text-gray-800">
              Nossa indicação para quem está em{" "}
              <strong>
                Curitiba, São José dos Pinhais, Pinhais, Colombo, Araucária,
                Almirante Tamandaré
              </strong>{" "}
              e região é a <em>Ração Pets</em>: loja local, checkout seguro e
              suporte que resolve.
            </p>
            <ul className="pl-5 space-y-1 text-gray-700 list-disc">
              <li>
                <FaCheckCircle className="inline mr-1 text-green-600" /> Entrega
                rápida em Curitiba e RMC
              </li>
              <li>
                <FaCheckCircle className="inline mr-1 text-green-600" />{" "}
                Pagamento facilitado (PIX, cartão)
              </li>
              <li>
                <FaCheckCircle className="inline mr-1 text-green-600" />{" "}
                Atendimento de qualidade e confiável
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* CTA principal — Ração Pets */}
            <a
              onClick={handleCtaToast}
              href="https://www.racaopets.com.br/cachorro/racao-seca/premium/racao-lunch-dog-premium-filhotes-natural-28-proteina-5kg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 text-sm font-semibold text-white bg-green-600 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <FaStore className="mr-2" />
              <span>Comprar na Ração Pets (recomendado)</span>
            </a>

            {/* Opção secundária — Shopee (mais discreta) */}
            <a
              onClick={handleCtaToast}
              href="https://shopee.com.br/product/1394219389/23393611236/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-orange-600 bg-white border border-orange-300 rounded-md hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <FaStore className="mr-2" />
              <span>Ver na Shopee (envio nacional)</span>
            </a>
          </div>
          <br />
        </FadeIn>

        {/* FAQ curtinha e leiga */}
        <FadeIn delay={0.55}>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Perguntas rápidas
          </h2>
          <div className="space-y-4">
            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="flex items-center font-semibold text-gray-800 cursor-pointer">
                <FaQuestionCircle className="mr-2" /> Quando começo a ração de
                filhote?
              </summary>
              <p className="mt-2 text-gray-700">
                Logo após o desmame (por volta de 6–8 semanas). Se precisar,
                umedeça nos primeiros dias.
              </p>
            </details>
            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="flex items-center font-semibold text-gray-800 cursor-pointer">
                <FaQuestionCircle className="mr-2" /> Quantas vezes por dia?
              </summary>
              <p className="mt-2 text-gray-700">
                Várias pequenas refeições. No começo, 3–4 por dia funciona bem.
              </p>
            </details>
          </div>
        </FadeIn>

        <ShareButton />

        {/* Anúncio estilo Google Ads (mesma estrutura) */}
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
              href="https://www.racaopets.com.br/cachorro/racao-seca/premium/racao-lunch-dog-premium-filhotes-natural-28-proteina-5kg"
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
                      <FontAwesomeIcon icon={faStar} /> 4.9
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
                      src="https://www.tribunadopet.com.br/racao-pets-filhotes.png"
                      alt="Ração premium para filhotes"
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

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import ShareButton from "../../components/ui/ShareButton";
import { toast } from "react-toastify";
import {
  FaPercent,
  FaCheckCircle,
  FaShoppingCart,
  FaTags,
  FaStore,
  FaMoneyBillWave,
  FaDog,
  FaRegCopy,
} from "react-icons/fa";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default function CupomIndicaAumigo() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById("global-loader");
      if (loader) loader.style.display = "none";
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("INDIQUEAUMIGO10");
    toast.success("Cupom copiado com sucesso! 🎉");
  };

  return (
    <>
      <Seo
        title="Indique AUmigo e Ganhe 10% OFF | Tribuna do Pet"
        description="Participe da promoção Indique AUmigo da Ração Pets: indique um amigo e ganhe 10% de desconto na sua próxima compra!"
        canonical="https://www.tribunadopet.com.br/cupom-indica-aumigo"
        image="https://www.tribunadopet.com.br/indica-og.png"
        published="2025-08-26"
      />

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <Header onToggleMenu={() => setMenuOpen(true)} />

      {/* breadcrumb + titulo */}
      <div className="py-6 border-b bg-gradient-to-b from-primary to-primary">
        <div className="container px-4 mx-auto">
          <nav className="flex flex-wrap gap-2 mb-3 text-sm text-gray-200">
            <Link to="/" className="flex items-center hover:underline">
              <i className="mr-1 text-sm fas fa-home"></i> Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/descontos" className="hover:underline">
              Cupons e Promoções
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-300">
              Indique AUmigo e Ganhe 10% OFF
            </span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Indique AUmigo e Ganhe 10% OFF na Ração Pets
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <i className="mr-2 far fa-calendar text-primary"></i> 26 de
              Agosto, 2025
            </span>
            <span className="flex items-center">
              <i className="mr-2 far fa-clock text-primary"></i> 4 min de
              leitura
            </span>
          </div>
        </div>
      </div>

      <main className="container max-w-4xl px-4 py-10 mx-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="flex items-center px-3 py-1.5 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
            <FaTags className="mr-1.5" /> Cupom
          </span>
          <span className="flex items-center px-3 py-1.5 text-xs font-medium text-green-800 bg-green-100 rounded-full">
            <FaPercent className="mr-1.5" /> Promoção
          </span>
          <span className="flex items-center px-3 py-1.5 text-xs font-medium text-purple-800 bg-purple-100 rounded-full">
            <FaDog className="mr-1.5" /> Pets
          </span>
        </div>

        {/* imagem principal */}
        <ScaleIn delay={0.2}>
          <a href="https://www.racaopets.com.br/cupom-indica-aumigo" target="_blank"
              rel="noopener noreferrer">
            <div className="w-full my-2">
              <img
                src="/indica-og.png"
                alt="Indique AUmigo e ganhe 10% OFF"
                className="object-cover w-full rounded-lg"
              />
            </div>
          </a>
        </ScaleIn>

        <FadeIn delay={0.2}>
          <div className="p-6 mb-6 border-l-4 border-green-600 bg-green-50 rounded-xl">
            <p className="text-lg text-gray-800">
              A Ração Pets acaba de lançar a campanha{" "}
              <strong>Indique AUmigo</strong>, criada para valorizar quem já é
              cliente e incentivar novos tutores a conhecerem nossa loja online.
              É simples: indique um amigo e garanta{" "}
              <strong>10% de desconto</strong> na sua próxima compra. Seu amigo
              também sai ganhando, recebendo um cupom exclusivo!
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h2 className="flex gap-2 mb-4 text-2xl font-semibold text-gray-800">
            <FaStore className="hidden text-5xl text-green-600 md:block" /> Como
            participar da campanha
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="mb-6 text-gray-700">
            Participar é fácil: basta indicar um amigo para comprar na Ração
            Pets. Assim que a compra for confirmada, você envia o número do
            pedido para nosso WhatsApp oficial{" "}
            <a
              href="https://wa.me/5541988564198"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 underline"
            >
              (41) 98856-4198
            </a>{" "}
            e em poucos minutos receberá seu cupom de 10% OFF. O melhor é que a
            promoção não tem valor mínimo: qualquer compra já garante a
            recompensa.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <h2 className="mb-4 text-xl font-bold text-green-700">
            Vantagens de participar
          </h2>
          <ul className="pl-5 mb-6 text-gray-700 list-disc">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Você economiza 10% na
              próxima compra
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Seu amigo também
              ganha um cupom de boas-vindas
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Sem valor mínimo de
              compra para participar
            </li>
          </ul>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mb-6">
            <a
              href="https://www.racaopets.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 font-bold text-white bg-green-600 rounded-full shadow hover:bg-green-700"
            >
              <FaShoppingCart className="mr-2" /> Acesse a Ração Pets
            </a>
          </div>
        </FadeIn>

        <ShareButton />

        {/* anuncio estilo google ads */}
        <FadeIn delay={1.6}>
          <aside className="max-w-4xl mx-auto mt-12 mb-8 overflow-hidden bg-white border border-gray-300 rounded-lg shadow-sm">
            <div className="flex items-start justify-between p-3 bg-gray-100">
              <div className="flex items-center">
                <span className="px-2 py-1 text-xs text-white bg-green-600 rounded">
                  Anúncio
                </span>
                <span className="ml-2 text-xs text-gray-500">Patrocinado</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <a
              href="https://www.racaopets.com.br/cachorro/racao-seca/premium/racao-lunch-dog-premium-essencial-para-caes-adultos-sabor-carne-arroz-21-proteinas-15kg"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 transition-colors hover:bg-gray-50"
            >
              <div className="flex flex-col items-start md:flex-row">
                <div className="flex-1">
                  <h4 className="font-medium text-green-600 hover:underline">
                    Ração Lunch Dog Premium Essencial
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
                    Rações premium e super premium para cães e gatos. Garanta
                    nutrição completa com descontos exclusivos para leitores do
                    Tribuna do Pet.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4">
                  <div className="flex items-center justify-center w-32 h-24 text-gray-500 bg-gray-200 border-2 border-dashed rounded-xl">
                    <img
                      src="https://www.tribunadopet.com.br/LUNCH15SEGUNDA.png"
                      alt="Ração Lunch Dog Essencial"
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

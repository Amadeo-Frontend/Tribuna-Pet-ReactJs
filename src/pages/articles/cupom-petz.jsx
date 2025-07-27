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
  FaPercent,
  FaCheckCircle,
  FaShoppingCart,
  FaTags,
  FaStore,
  FaMoneyBillWave,
  FaMoneyBill,
  FaDog,
  FaRegCopy,
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

export default function CupomDescontoPetz() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("global-loader").style.display = "none";
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("CASADASRACOES");
    toast.success("Cupom copiado com sucesso! 🎉");
  };

  return (
    <>
      <Seo
        title="Cupom de Desconto Petz 10% | Tribuna do Pet"
        description="Aproveite 10% OFF com o cupom CASADASRACOES na Petz. Descontos extras para pagamento no PIX e retirada na loja!"
        canonical="https://www.tribunadopet.com.br/cupom-petz"
        image="https://www.tribunadopet.com.br/banner-cupom-petz.jpg"
        published="2025-07-26"
      />

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
            <Link to="/cupom-petz" className="hover:underline">
              Cupom e Ofertas
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-300">
              Cupom de desconto Petz
            </span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Cupom de desconto Petz
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <i className="mr-2 far fa-calendar text-primary"></i> 26 de Julho,
              2025
            </span>
            <span className="flex items-center">
              <i className="mr-2 far fa-clock text-primary"></i> 3 min de
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
            <FaMoneyBill className="mr-1.5" /> Descontos
          </span>
          <span className="flex items-center px-3 py-1.5 text-xs font-medium text-purple-800 bg-purple-100 rounded-full">
            <FaDog className="mr-1.5" /> Ração
          </span>
        </div>
        {/* Imagem Principal */}
        <ScaleIn delay={0.2}>
          <div className="w-full my-2 ">
            <a href="https://casadasracoes.parceiropetz.com.br/" target="_blank">
              <img
                src="/promo-og.png"
                alt="Desconto de 10% com o cupom"
                className="object-cover w-full rounded-lg"
              />
            </a>
          </div>
        </ScaleIn>
        <FadeIn delay={0.2}>
          <div className="p-6 mb-6 border-l-4 border-blue-500 bg-blue-50 rounded-xl">
            <p className="text-lg text-gray-800">
              Se você é tutor de um cão ou gato, sabe que oferecer o melhor para
              seu pet vai muito além do carinho diário. Uma boa alimentação,
              produtos de higiene, acessórios e cuidados veterinários são
              fundamentais para garantir saúde, bem-estar e qualidade de vida.
              Pensando nisso, a Petz — a maior rede de varejo pet do Brasil —
              preparou uma condição especial para os leitores do Tribuna do Pet:{" "}
              <strong>10% de desconto</strong> com o cupom exclusivo{" "}
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-2 py-1 ml-2 text-sm font-bold text-blue-800 bg-blue-100 border border-blue-300 rounded hover:bg-blue-200"
              >
                CASADASRACOES <FaRegCopy />
              </button>
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h2 className="flex gap-2 mb-4 text-2xl font-semibold text-gray-800">
            <FaTags className="text-5xl text-blue-500" /> Compre Golden,
            Premier, Royal Canin, Hills, Gran Plus, Guabi Natural, Bionatural,
            areias, tapetes, medicamentos, acessórios e mais 20.000 produtos
            para pets com desconto aqui
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="mb-6 text-gray-700">
            Além do desconto direto via cupom, você ainda pode{" "}
            <strong>economizar mais</strong> se optar por{" "}
            <span className="inline-flex items-center gap-1 font-semibold">
              <FaStore className="text-green-600" /> retirada em loja física
            </span>{" "}
            ou{" "}
            <span className="inline-flex items-center gap-1 font-semibold">
              <FaMoneyBillWave className="text-green-600" /> pagamento via PIX
            </span>
            . São várias maneiras de garantir <em>os melhores preços</em> nos
            produtos que você já costuma comprar — ou aproveitar para testar
            novas marcas premium.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <h2 className="mb-4 text-xl font-bold text-blue-700">
            Comprei na maior rede de varejo Pet do Brasil e ainda ganhei
            descontos imperdíveis!
          </h2>
          <ul className="pl-5 mb-6 text-gray-700 list-disc">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Desconto de 10% com o
              cupom <strong>CASADASRACOES</strong>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Mais desconto ao
              retirar em loja física
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Desconto adicional
              para pagamento via PIX
            </li>
          </ul>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mb-6">
            <a
              href="https://casadasracoes.parceiropetz.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 font-bold text-white bg-green-600 rounded-full shadow hover:bg-green-700"
            >
              <FaShoppingCart className="mr-2" /> Acesse a Petz com Desconto
            </a>
          </div>
        </FadeIn>

        <ShareButton />

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

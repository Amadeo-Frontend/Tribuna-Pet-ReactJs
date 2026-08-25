"use client";

import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import LiveClock from "../components/LiveClock";
import ShareButton from "../components/ui/ShareButton";
import AdBanner from "../components/AdBanner";
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
      if (typeof window !== "undefined") { const el = typeof window !== "undefined" ? document.getElementById("global-loader") : null; if (el) el.style.display = "none"; }
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
        image="https://www.tribunadopet.com.br/promo-og.webp"
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
            <Link href="/" className="flex items-center hover:underline">
              <i className="mr-1 text-sm fas fa-home"></i> Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link href="/cupom-petz" className="hover:underline">
              Cupons e Promoções
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
                src="/promo-og.webp"
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
            <FaTags className="hidden text-5xl text-blue-500 md:block" /> Compre Golden,
            Premier, Royal Canin, Hills, Gran Plus, Guabi Natural, Bionatural,
            areias, tapetes, medicamentos, acessórios e mais 20.000 produtos
            para pets com desconto aqui
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="mb-6 text-gray-700">
            Além do desconto direto via cupom, você ainda pode{" "}
            <strong>economizar mais</strong> se optar por{" "}
            <span className="flex items-center gap-1 font-semibold">
              <FaStore className="text-sm text-green-600" /> retirada em loja física
            </span>{" "}
            ou{" "}
            <span className="flex items-center gap-1 font-semibold">
              <FaMoneyBillWave className="text-sm text-green-600" /> pagamento via PIX.
            </span>
             São várias maneiras de garantir <em>os melhores preços</em> nos
            produtos que você já costuma comprar — ou aproveitar para testar
            novas marcas premium.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <h2 className="mb-4 text-xl font-bold text-blue-700">
            Compre na maior rede de varejo Pet do Brasil e ainda ganhe
            descontos imperdíveis!
          </h2>
          <ul className="pl-5 mb-6 text-gray-700 list-disc">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Desconto de 10% com o
              cupom
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
          <AdBanner />
        </FadeIn>
      </main>

      <Footer />
    </>
  );
}

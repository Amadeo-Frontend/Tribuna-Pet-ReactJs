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
        description="Como escolher ração premium para filhotes: o que olhar no rótulo, porções por peso/idade, transição em 7 dias e onde comprar em Curitiba/RMC com envio nacional."
        canonical="https://www.tribunadopet.com.br/guia-racao-premium-filhotes-curitiba"
        image="https://www.tribunadopet.com.br/og-default.jpg"
        published="2025-11-01"
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
              Ração Premium para Filhotes: guia prático para começar certo
              em Curitiba e Região Metropolitana
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <i className="mr-2 far fa-calendar text-primary"></i> 01 de
              Novembro, 2025
            </span>
            <span className="flex items-center">
              <i className="mr-2 far fa-clock text-primary"></i> 8–10 min de
              leitura
            </span>
            <span className="items-center hidden sm:flex">
              <LiveClock />
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

        {/* Introdução */}
        <FadeIn delay={0.2}>
          <div className="p-6 mb-6 border-l-4 border-blue-500 bg-blue-50 rounded-xl">
            <p className="text-lg text-gray-800">
              O primeiro ano do seu cão é um sprint de crescimento — ossos,
              músculos, cérebro e imunidade se desenvolvem em ritmo acelerado.
              A <strong>ração premium para filhotes</strong> garante energia
              adequada, nutrientes equilibrados e suporte cognitivo. A seguir,
              veja como escolher bem, ajustar as porções e fazer a transição sem
              estresse — com dicas focadas em{" "}
              <strong>Curitiba e Região Metropolitana</strong>.
            </p>
          </div>
        </FadeIn>

        {/* O que observar no rótulo */}
        <FadeIn delay={0.3}>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            O que observar no rótulo (e por que isso importa)
          </h2>
          <ul className="pl-5 mb-6 text-gray-700 list-disc">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1 text-green-600" />
              <span>
                <strong>Garantia nutricional para crescimento:</strong>{" "}
                procure rótulos que declarem “atende aos perfis para{" "}
                <em>crescimento/filhotes</em>”. Padrões internacionais
                indicam proteína e energia superiores às de adultos —
                referência prática usada por fabricantes: ≈{" "}
                <strong>56 g de proteína por 1.000 kcal</strong> para filhotes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaLeaf className="mt-1 text-green-600" />
              <span>
                <strong>Ômega-3 de cadeia longa (DHA/EPA):</strong> apoio para
                visão e desenvolvimento neurológico; verifique a presença de
                fontes marinhas/declaração de DHA para fase de crescimento.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaShieldAlt className="mt-1 text-amber-600" />
              <span>
                <strong>Cálcio/Fósforo e fase:</strong> confirme a indicação
                para “cães filhotes” e uma relação <strong>Ca:P</strong>{" "}
                apropriada ao crescimento — essencial sobretudo para raças
                grandes (veja abaixo).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaShieldAlt className="mt-1 text-amber-600" />
              <span>
                <strong>Qualidade do fabricante:</strong> valorize marcas com
                equipe de nutrição, controle de qualidade robusto, rastreio de
                lotes e, idealmente, alimentos validados em{" "}
                <em>feeding trials</em> além de formulação teórica.
              </span>
            </li>
          </ul>
        </FadeIn>

        {/* Porções genéricas */}
        <FadeIn delay={0.35}>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Porções diárias sugeridas (divida em 3–4 refeições)
          </h2>
          <div className="mb-2 text-sm text-gray-500">
            Ajuste com seu médico-veterinário e de acordo com a marca escolhida.
            Referência prática: filhotes, em geral, demandam proteína/energia
            por 1.000 kcal superiores às de cães adultos — por isso comem com
            mais frequência.
          </div>
          <div className="mb-6 overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-left text-gray-700">
                    Peso do filhote
                  </th>
                  <th className="px-4 py-3 font-semibold text-left text-gray-700">
                    2–3 meses
                  </th>
                  <th className="px-4 py-3 font-semibold text-left text-gray-700">
                    4–6 meses
                  </th>
                  <th className="px-4 py-3 font-semibold text-left text-gray-700">
                    7–12 meses
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { faixa: "1–3 kg", a: "30–60 g", b: "40–70 g", c: "40–60 g" },
                  { faixa: "4–6 kg", a: "60–95 g", b: "70–120 g", c: "60–100 g" },
                  { faixa: "7–10 kg", a: "95–140 g", b: "120–170 g", c: "100–150 g" },
                  { faixa: "11–15 kg", a: "140–190 g", b: "170–230 g", c: "150–200 g" },
                ].map((row) => (
                  <tr key={row.faixa} className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">{row.faixa}</td>
                    <td className="px-4 py-3 font-medium border-b">{row.a}</td>
                    <td className="px-4 py-3 font-medium border-b">{row.b}</td>
                    <td className="px-4 py-3 font-medium border-b">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* Transição em 7 dias */}
        <FadeIn delay={0.4}>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Transição alimentar em 7 dias (sem surpresas)
          </h2>
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
            <div className="p-6 border-l-4 border-blue-500 rounded-lg bg-blue-50">
              <h3 className="flex items-center mb-2 text-lg font-bold text-blue-800">
                <FaUtensils className="mr-2" /> Passo a passo
              </h3>
              <ol className="pl-5 space-y-1 text-gray-700 list-decimal">
                <li>Dias 1–2: 75% antiga + 25% nova</li>
                <li>Dias 3–4: 50% antiga + 50% nova</li>
                <li>Dias 5–6: 25% antiga + 75% nova</li>
                <li>Dia 7: 100% ração premium</li>
              </ol>
              <p className="mt-3 text-sm text-gray-600">
                Dica: umedeça com água morna nas primeiras semanas.
              </p>
            </div>
            <div className="p-6 border-l-4 border-green-500 rounded-lg bg-green-50">
              <h3 className="mb-2 text-lg font-bold text-green-800">
                Atenção rápida
              </h3>
              <ul className="pl-5 space-y-2 text-gray-700 list-disc">
                <li>Água fresca sempre disponível.</li>
                <li>Evite leite, temperos e petiscos em excesso.</li>
                <li>Se vomitar/diarreia persistirem, procure o veterinário.</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Raças grandes */}
        <FadeIn delay={0.42}>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Raças grandes: cálcio, energia e ossos saudáveis
          </h2>
          <div className="p-6 mb-6 border-l-4 border-purple-500 rounded-lg bg-purple-50">
            <ul className="pl-5 space-y-2 text-gray-700 list-disc">
              <li>
                <strong>Controle de cálcio:</strong> excesso está associado a
                distúrbios ortopédicos de desenvolvimento (DOD). Prefira
                rações específicas <em>“filhote raças grandes”</em>.
              </li>
              <li>
                <strong>Relação Ca:P adequada:</strong> manter em torno de{" "}
                <strong>1,1:1 a 1,3:1</strong> é prática segura adotada por
                fabricantes de dietas <em>large breed puppy</em>.
              </li>
              <li>
                <strong>Energia sob controle:</strong> evitar superalimentação
                reduz ganho de peso muito rápido e sobrecarga articular.
              </li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Se o adulto projetado do seu cão for &gt; 25–30 kg, use dieta
              específica para raças grandes e siga as porções do fabricante.
            </p>
          </div>
        </FadeIn>

        {/* Erros comuns */}
        <FadeIn delay={0.45}>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            5 erros comuns ao alimentar filhotes
          </h2>
        <ul className="pl-5 mb-6 text-gray-700 list-disc">
            <li>Pular a fase “junior” muito cedo (respeite até 12 meses/porte).</li>
            <li>Trocar de ração sem transição gradual.</li>
            <li>Servir “no olho” sem considerar peso e idade.</li>
            <li>Exagerar nos petiscos e “comida de gente”.</li>
            <li>Não acompanhar escore corporal e aspecto das fezes.</li>
          </ul>
        </FadeIn>

        {/* Onde comprar (links discretos – apenas linkam o seu produto) */}
        <FadeIn delay={0.5}>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Onde comprar em Curitiba/RMC (envio nacional disponível)
          </h2>
          <p className="mb-4 text-gray-700">
            Para tutores de <strong>Curitiba, São José dos Pinhais, Pinhais, Colombo, Araucária e região</strong>,
            o link abaixo da <em>Ração Pets</em> facilita entrega rápida local. Para outras cidades do Brasil,
            use o link da Shopee com envio nacional.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              onClick={handleCtaToast}
              href="https://www.racaopets.com.br/cachorro/racao-seca/premium/racao-lunch-dog-premium-filhotes-natural-28-proteina-5kg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-green-600 rounded-md hover:bg-green-700"
            >
              <FaStore className="mr-2" /> Lunch Dog Premium Filhotes — Ração Pets (Curitiba/RMC)
            </a>
            <a
              onClick={handleCtaToast}
              href="https://shopee.com.br/product/1394219389/23393611236/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600"
            >
              <FaStore className="mr-2" /> Lunch Dog Premium Filhotes — Shopee (Brasil)
            </a>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            *Links parceiros: podem gerar benefícios ao portal sem custo para você.
          </p>
        </FadeIn>

        {/* FAQ */}
        <FadeIn delay={0.55}>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Perguntas frequentes
          </h2>
          <div className="space-y-4">
            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="flex items-center font-semibold text-gray-800 cursor-pointer">
                <FaQuestionCircle className="mr-2" /> Quando começo a ração de filhote?
              </summary>
              <p className="mt-2 text-gray-700">
                A partir do desmame (6–8 semanas). Nas primeiras semanas, umedecer ajuda na aceitação.
              </p>
            </details>
            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="flex items-center font-semibold text-gray-800 cursor-pointer">
                <FaQuestionCircle className="mr-2" /> Quantas refeições por dia?
              </summary>
              <p className="mt-2 text-gray-700">
                Em geral, 3–4 até 6 meses; depois, 2–3, conforme orientação do veterinário.
              </p>
            </details>
            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="flex items-center font-semibold text-gray-800 cursor-pointer">
                <FaQuestionCircle className="mr-2" /> Posso alternar com úmido?
              </summary>
              <p className="mt-2 text-gray-700">
                Pode, mantendo a completude nutricional do dia. Introduza gradualmente e monitore fezes/apetite.
              </p>
            </details>
          </div>
        </FadeIn>

        <ShareButton />

        {/* Anúncio estilo Google Ads (mesma estrutura da sua página que funciona) */}
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
                      src="https://www.tribunadopet.com.br/hospital-veterinario-municipal-de-curitiba.jpg"
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

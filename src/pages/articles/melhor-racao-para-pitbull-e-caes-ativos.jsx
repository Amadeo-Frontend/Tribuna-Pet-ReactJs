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
  FaStore,
  FaShoppingCart,
  FaTruck,
  FaDumbbell,
  FaMedal,
  FaTrophy,
  FaQuestionCircle,
  FaInfoCircle,
  FaDownload,
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
    const timer = setTimeout(() => {
      const loader = document.getElementById("global-loader");
      if (loader) loader.style.display = "none";
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Seo
        title="Melhor Ração para Pitbull e Cães Ativos em 2026: ranking revela a campeã técnica e o melhor custo-benefício | Tribuna do Pet"
        description="PremieR Pit Bull fica em primeiro lugar na avaliação técnica. Lunch Dog X-PRO Training chega logo atrás e chama atenção pelo melhor custo-benefício."
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
              Melhor Ração para Pitbull e Cães Ativos em 2026: ranking revela a
              campeã técnica e o melhor custo-benefício
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <i className="mr-2 far fa-calendar text-primary"></i> 23 de Agosto,
              2026
            </span>
            <span className="flex items-center">
              <i className="mr-2 far fa-clock text-primary"></i> 10 min de
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
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-blue-800 rounded-full bg-gradient-to-r from-blue-100 to-blue-200">
                <FaBowlFood className="mr-1.5" />
                Alimentação
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-white rounded-full bg-gradient-to-r from-red-600 to-red-800">
                <FaDumbbell className="mr-1.5" />
                Cães Ativos
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-white rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600">
                <FaMedal className="mr-1.5" />
                Ranking 2026
              </span>
            </div>
          </FadeIn>

          {/* Capa */}
          <ScaleIn delay={0.3}>
            <div className="px-6 md:px-8">
              <picture>
                <source media="(min-width: 768px)" srcSet="/blog-hero-ranking-desktop.png" />
                <img
                  src="/blog-hero-ranking-mobile.png"
                  alt="Melhor Ração para Pitbull e Cães Ativos em 2026 - Ranking de Rações"
                  className="w-full h-auto shadow-lg rounded-xl"
                />
              </picture>
            </div>
          </ScaleIn>

          {/* Lead */}
          <FadeIn delay={0.4}>
            <div className="p-5 mx-6 my-6 border-l-4 border-blue-500 md:mx-8 bg-blue-50 rounded-xl">
              <p className="text-lg font-medium leading-relaxed text-gray-800">
                PremieR Pit Bull fica em primeiro lugar na avaliação técnica.
                Lunch Dog X-PRO Training chega logo atrás e chama atenção pela
                combinação de proteína animal, ovo em pó, Whey Protein, BCAA,
                energia, suporte articular e preço de venda competitivo.
              </p>
            </div>
          </FadeIn>

          {/* Conteúdo */}
          <div className="p-6 md:p-8">
            <FadeIn delay={0.5}>
              <p className="mb-6 text-gray-700">
                Quem procura pela <strong>melhor ração para Pitbull</strong>, para um cão de trabalho ou simplesmente para um animal muito ativo encontra hoje um mercado bem diferente daquele de alguns anos atrás.
              </p>
              <p className="mb-6 text-gray-700">
                Proteína continua sendo importante, mas deixou de ser suficiente para explicar a qualidade de uma fórmula.
              </p>
              <p className="mb-6 text-gray-700">
                Nas linhas voltadas a cães ativos aparecem cada vez mais ingredientes como <strong>BCAA, Whey Protein, ovo em pó, L-carnitina, condroitina, glicosamina, batata-doce</strong> e fontes de energia mais concentradas.
              </p>
              <p className="mb-6 text-gray-700">
                Foi a partir dessa mudança que a <strong>Tribuna do Pet</strong> decidiu comparar 13 rações comercializadas no Brasil e que, por proposta nutricional ou posicionamento, podem entrar na busca de tutores por alimentos para cães adultos ativos, de trabalho, atletas ou de raças conhecidas pela estrutura muscular.
              </p>
              <p className="mb-6 text-gray-700">
                A análise utilizou informações disponíveis nos fabricantes e fichas técnicas, além de uma pesquisa de preço de venda no varejo. O preço entrou no ranking, mas recebeu o menor peso: a intenção não era premiar a ração mais barata, e sim descobrir <strong>quanto cada produto entrega pelo que custa</strong>.
              </p>
              <p className="mb-6 text-gray-700">
                O resultado trouxe uma campeã técnica clara e uma segunda colocada que merece atenção.
              </p>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center text-gray-800">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>A <strong>PremieR Raças Específicas Adultos Pit Bull</strong> terminou em primeiro lugar.</span>
                </li>
                <li className="flex items-center text-gray-800">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>Logo atrás veio a <strong>Lunch Dog X-PRO Training</strong>, da Nutriponta, que se destacou como o <strong>melhor custo-benefício da avaliação</strong>.</span>
                </li>
              </ul>
            </FadeIn>

            {/* Seção 1 */}
            <FadeIn delay={0.6}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <FaTrophy className="text-yellow-500" />
                Qual é a melhor ração para Pitbull em 2026?
              </h2>
              <p className="mb-6 text-gray-700">
                Dentro dos critérios usados neste levantamento, a resposta é a <strong>PremieR Raças Específicas Adultos Frango Pit Bull</strong>.
              </p>
              <p className="mb-6 text-gray-700">
                A ração foi desenvolvida especificamente para cães adultos da raça e apresenta um conjunto nutricional difícil de superar entre os produtos analisados.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4">
                <div className="p-4 border border-blue-100 bg-blue-50/50 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-blue-600">31%</span>
                  <span className="text-xs text-gray-600 font-medium">Proteína Bruta</span>
                </div>
                <div className="p-4 border border-blue-100 bg-blue-50/50 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-blue-600">16%</span>
                  <span className="text-xs text-gray-600 font-medium">Extrato Etéreo</span>
                </div>
                <div className="p-4 border border-blue-100 bg-blue-50/50 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-blue-600">4,1%</span>
                  <span className="text-xs text-gray-600 font-medium">BCAA</span>
                </div>
                <div className="p-4 border border-blue-100 bg-blue-50/50 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-blue-600">4.012</span>
                  <span className="text-xs text-gray-600 font-medium">kcal/kg Energia</span>
                </div>
              </div>

              <p className="mb-6 text-gray-700">
                A composição também inclui Whey Protein, ovo em pó, L-carnitina, condroitina, glicosamina, extrato de Yucca e hexametafosfato de sódio. A fabricante relaciona os BCAAs da fórmula ao suporte à síntese proteica muscular depois do exercício e destaca o conjunto de nutracêuticos voltado às articulações.
              </p>
              <p className="mb-6 text-gray-700">
                Outro ponto que contou na nossa metodologia é a composição declarada pela marca: o glúten de milho usado na fórmula aparece como <strong>não transgênico</strong>.
              </p>
              <p className="mb-6 text-gray-700">
                A PremieR também utiliza <strong>ovo em pó</strong>. Esse detalhe merece ser registrado porque, quando se fala em ração de alta performance, não basta saber quanto de proteína existe; as fontes proteicas ajudam a entender melhor a construção da fórmula.
              </p>
              <p className="mb-6 text-gray-700">
                Nesse aspecto, a campeã combina diferentes ingredientes de origem animal, Whey Protein e ovo em pó em uma dieta criada especificamente para o Pit Bull adulto.
              </p>
              <p className="mb-8 text-gray-700 font-medium">
                Por isso, para quem tem um Pit Bull adulto e procura a fórmula com maior desempenho técnico dentro dos critérios desta reportagem, a PremieR terminou na frente.
              </p>
            </FadeIn>

            {/* Seção 2 */}
            <FadeIn delay={0.7}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <MdOutlineWorkspacePremium className="text-blue-500" />
                X-PRO Training: a segunda colocada que muda a discussão sobre custo-benefício
              </h2>
              <p className="mb-6 text-gray-700">
                A diferença entre “melhor ração” e “melhor compra” aparece com força quando chegamos à segunda posição.
              </p>
              <p className="mb-6 text-gray-700">
                A <strong>Lunch Dog X-PRO Training</strong>, produzida pela Nutriponta Pet Food, não venceu a PremieR na soma dos atributos técnicos.
              </p>
              <p className="mb-6 text-gray-700">
                Ainda assim, entregou um conjunto suficientemente forte para terminar em segundo lugar geral — e isso muda de significado quando entra na conta o <strong>preço de venda</strong>.
              </p>
              <p className="mb-6 text-gray-700">
                A X-PRO é apresentada oficialmente como uma ração Super Premium destinada a <strong>cães adultos de médio e grande porte com rotina ativa</strong>. A proposta é fornecer suporte à energia, força e desempenho diário.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4">
                <div className="p-4 border border-green-100 bg-green-50/50 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-green-600">28%</span>
                  <span className="text-xs text-gray-600 font-medium">Proteína Bruta</span>
                </div>
                <div className="p-4 border border-green-100 bg-green-50/50 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-green-600">15%</span>
                  <span className="text-xs text-gray-600 font-medium">Extrato Etéreo</span>
                </div>
                <div className="p-4 border border-green-100 bg-green-50/50 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-green-600">3,8%</span>
                  <span className="text-xs text-gray-600 font-medium">BCAA</span>
                </div>
                <div className="p-4 border border-green-100 bg-green-50/50 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-green-600">3.950</span>
                  <span className="text-xs text-gray-600 font-medium">kcal/kg Energia</span>
                </div>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">Frango + ovo em pó é um dos pilares da X-PRO</h3>
              <p className="mb-6 text-gray-700">
                Na apresentação oficial da fórmula, a Nutriponta destaca a combinação <strong>“Proteína Animal: Frango + Ovo”</strong>.
              </p>
              <p className="mb-6 text-gray-700">
                A empresa informa que utiliza proteína de frango associada a <strong>ovo em pó</strong>, formando uma base proteica que depois é complementada por Whey Protein e BCAA.
              </p>
              <p className="mb-6 text-gray-700">
                Vale fazer uma distinção importante: ovo em pó não é exclusividade da X-PRO. A PremieR Pit Bull também possui o ingrediente.
              </p>
              <p className="mb-6 text-gray-700">
                A diferença está na forma como a X-PRO constrói sua proposta. Frango e ovo aparecem como um dos eixos da fórmula, ao lado de <strong>Whey Protein + BCAA, batata-doce</strong> e ingredientes voltados a suporte articular e recuperação.
              </p>
              <p className="mb-6 text-gray-700">
                Além deles, a composição e a comunicação oficial da linha destacam <strong>condroitina, glicosamina, taurina, L-carnitina e hexametafosfato de sódio</strong>. É essa combinação, e não um ingrediente isolado, que explica a posição da X-PRO.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">PremieR e X-PRO possuem Whey Protein</h3>
              <p className="mb-6 text-gray-700">
                As duas primeiras colocadas têm Whey Protein. Na PremieR, o ingrediente participa de uma fórmula específica para Pit Bull, juntamente com alto teor proteico, BCAA, ovo em pó, L-carnitina e suporte articular.
              </p>
              <p className="mb-6 text-gray-700">
                Na X-PRO, <strong>Whey Protein + BCAA</strong> aparecem como um dos principais diferenciais apresentados pela própria Nutriponta.
              </p>
              <p className="mb-6 text-gray-700">
                Não faz sentido, portanto, transformar o Whey em uma disputa do tipo “uma tem e a outra não”. As duas têm.
              </p>
              <p className="mb-6 text-gray-700">
                A comparação mais útil é entender o conjunto em que esse ingrediente aparece e quanto o consumidor paga por esse conjunto. É nesse segundo ponto que a X-PRO ganha força.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">Por que a X-PRO foi considerada o melhor custo-benefício?</h3>
              <p className="mb-6 text-gray-700">
                Preço baixo, sozinho, não define custo-benefício. Uma ração pode custar menos simplesmente porque oferece menos. Por isso o preço de venda recebeu apenas o último peso na metodologia da Tribuna do Pet.
              </p>
              <p className="mb-6 text-gray-700">
                Primeiro vieram composição e características nutricionais. Só depois foi analisado quanto o consumidor precisa desembolsar.
              </p>
              <p className="mb-6 text-gray-700">
                A X-PRO ficou em <strong>segundo lugar no ranking técnico</strong>, mas apareceu na pesquisa de varejo com preço de venda inferior ao de produtos que ficaram próximos dela na classificação.
              </p>
              <p className="mb-6 text-gray-700">
                Há ainda uma diferença prática de embalagem: a PremieR Pit Bull é oferecida pela fabricante em saco de 12 kg, enquanto a X-PRO utilizada nesta comparação é comercializada em 15 kg.
              </p>

              <div className="p-5 my-6 border-l-4 border-yellow-400 bg-yellow-50 rounded-xl">
                <p className="font-medium text-gray-800">
                  Por isso, a conclusão da Tribuna do Pet é simples: PremieR Pit Bull foi a campeã técnica. X-PRO Training foi a melhor relação entre qualidade e preço de venda.
                </p>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">Livre de transgênicos também pesa a favor da X-PRO</h3>
              <p className="mb-6 text-gray-700">
                A Nutriponta declara a X-PRO como <strong>livre de transgênicos, corantes e aromatizantes artificiais</strong>. Esse foi um dos critérios considerados no ranking.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">A X-PRO quer estar perto de quem cria e trabalha com cães</h3>
              <p className="mb-6 text-gray-700">
                O posicionamento da marca também ajuda a entender para onde a Nutriponta quer levar a linha. Em agosto de 2026, a empresa participou do <strong>Mega Encontro de Criadores – Origens</strong>, realizado em Itu, São Paulo, como Patrocinadora Master.
              </p>
              <p className="mb-8 text-gray-700">
                A Nutriponta também levou suas linhas ao ambiente profissional do setor pet em eventos como a <strong>Amigos Pet Brasil 2026</strong>, reforçando uma estratégia de aproximação com lojistas, distribuidores e profissionais do mercado.
              </p>
            </FadeIn>

            {/* Imagem de meio de reportagem */}
            <FadeIn delay={0.8}>
              <div className="my-8">
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

            {/* Seção 3 & Tabela */}
            <FadeIn delay={0.9}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <FaMedal className="text-yellow-500" />
                Ultra Power completa um Top 3 bastante forte
              </h2>
              <p className="mb-6 text-gray-700">
                Em terceiro lugar ficou a <strong>Ultra Power – Cães Atletas – Adultos</strong>. Nesse caso, a proposta esportiva está no próprio nome.
              </p>
              <p className="mb-8 text-gray-700">
                A composição oficial lista Whey Protein, ovo em pó, leucina, isoleucina e valina — os três BCAAs —, farinha de batata-doce, condroitina, glicosamina, taurina, extrato de Yucca e hexametafosfato de sódio.
              </p>

              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <FaBrain className="text-blue-500" />
                Ranking das 13 rações analisadas
              </h2>
              <p className="mb-4 text-gray-700">A classificação final ficou assim:</p>

              {/* Tabela HTML Responsiva */}
              <div className="overflow-x-auto my-8 border border-gray-200 rounded-xl shadow-sm">
                <table className="w-full text-left text-sm text-gray-700">
                  <thead className="bg-primary text-white font-bold">
                    <tr>
                      <th className="p-3">Posição</th>
                      <th className="p-3">Ração</th>
                      <th className="p-3 text-right">Pontuação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-yellow-50/80 font-bold">
                      <td className="p-3">🥇 1º</td>
                      <td className="p-3">PremieR Raças Específicas Adultos Pit Bull</td>
                      <td className="p-3 text-right">93,55</td>
                    </tr>
                    <tr className="bg-blue-50/80 font-bold">
                      <td className="p-3">🥈 2º</td>
                      <td className="p-3">Lunch Dog X-PRO Training</td>
                      <td className="p-3 text-right">85,17</td>
                    </tr>
                    <tr className="bg-amber-50/80 font-bold">
                      <td className="p-3">🥉 3º</td>
                      <td className="p-3">Ultra Power – Cães Atletas Adultos</td>
                      <td className="p-3 text-right">84,89</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">4º</td>
                      <td className="p-3">Gran Nature Xtreme Performance</td>
                      <td className="p-3 text-right">64,26</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 font-semibold">5º</td>
                      <td className="p-3">Origens Premium Especial Energy</td>
                      <td className="p-3 text-right">63,16</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">6º</td>
                      <td className="p-3">Finotrato Life Active</td>
                      <td className="p-3 text-right">63,09</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 font-semibold">7º</td>
                      <td className="p-3">Dogmil Prime Power Training</td>
                      <td className="p-3 text-right">59,80</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">8º</td>
                      <td className="p-3">Quatree Select Power</td>
                      <td className="p-3 text-right">59,50</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 font-semibold">9º</td>
                      <td className="p-3">Nutrive Power</td>
                      <td className="p-3 text-right">55,17</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">10º</td>
                      <td className="p-3">Special Dog Ultralife Performance</td>
                      <td className="p-3 text-right">53,59</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 font-semibold">11º</td>
                      <td className="p-3">GoldeN Formula Power Training</td>
                      <td className="p-3 text-right">51,74</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">12º</td>
                      <td className="p-3">Origens Raças Específicas Pit Bull e Rottweiler</td>
                      <td className="p-3 text-right">46,30</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 font-semibold">13º</td>
                      <td className="p-3">Dog Power Adultos Médio e Grande Porte</td>
                      <td className="p-3 text-right">35,46</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Imagem da Tabela + Botão de Download logo em baixo */}
              <div className="my-8 p-4 border border-gray-200 bg-gray-50 rounded-2xl shadow-sm text-center">
                <div className="overflow-hidden shadow-md rounded-xl bg-white mb-4">
                  <img
                    src="/tabela-ranking-melhores-racoes-de-pitbull.png"
                    alt="Tabela ranking comparativa das 13 melhores rações de Pitbull"
                    className="w-full h-auto"
                  />
                </div>

                <a
                  href="/tabela-ranking-melhores-racoes-de-pitbull.png"
                  download="tabela-ranking-melhores-racoes-de-pitbull.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-bold text-white transition-all rounded-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-md hover:shadow-xl hover:from-blue-700 hover:to-blue-900 active:scale-95"
                >
                  <FaDownload className="text-base" />
                  Baixar Imagem da Tabela Comparativa em Alta Resolução
                </a>
              </div>
            </FadeIn>

            {/* O que foi levado em conta */}
            <FadeIn delay={1.0}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <FaInfoCircle className="text-blue-500" />
                O que foi levado em conta no ranking?
              </h2>
              <p className="mb-4 text-gray-700">
                Para evitar que um único número decidisse tudo, a Tribuna do Pet aplicou pesos diferentes aos atributos. A ordem foi:
              </p>
              <ul className="grid grid-cols-1 gap-3 mt-4 mb-8 md:grid-cols-2">
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>1. Ausência de transgênicos</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>2. Proteína bruta</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>3. Extrato etéreo</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>4. BCAA</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>5. Energia metabolizável</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>6. Condroitina</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>7. Glicosamina</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>8. Extrato de Yucca</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>9. Hexametafosfato de sódio</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>10. Presença de Whey Protein</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>11. Batata-doce</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>12. L-carnitina</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                  <span>13. Preço de venda</span>
                </li>
              </ul>
            </FadeIn>

            {/* Perguntas Frequentes */}
            <FadeIn delay={1.2}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <FaQuestionCircle className="text-blue-500" />
                Perguntas Frequentes
              </h2>
              <div className="space-y-4 mb-8">
                <div className="p-5 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50/50 to-white rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-1">Qual é a melhor ração para Pitbull adulto?</h4>
                  <p className="text-gray-700">No ranking da Tribuna do Pet, a <strong>PremieR Raças Específicas Adultos Pit Bull</strong> ficou em primeiro lugar.</p>
                </div>
                <div className="p-5 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50/50 to-white rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-1">Qual é a melhor ração custo-benefício para Pitbull e cães ativos?</h4>
                  <p className="text-gray-700">A <strong>Lunch Dog X-PRO Training</strong> foi o principal destaque de custo-benefício da análise.</p>
                </div>
                <div className="p-5 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50/50 to-white rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-1">X-PRO é Super Premium?</h4>
                  <p className="text-gray-700">Sim. A Nutriponta classifica officially a X-PRO Training como uma ração Super Premium.</p>
                </div>
                <div className="p-5 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50/50 to-white rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-1">X-PRO tem ovo em pó e Whey Protein?</h4>
                  <p className="text-gray-700">Sim. A fabricante apresenta frango + ovo como parte central de sua base proteica e informa o uso de ovo em pó e Whey Protein.</p>
                </div>
                <div className="p-5 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50/50 to-white rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-1">X-PRO é livre de transgênicos?</h4>
                  <p className="text-gray-700">A Nutriponta declara oficialmente a fórmula como livre de transgênicos.</p>
                </div>
              </div>
            </FadeIn>

            {/* Conclusão */}
            <FadeIn delay={1.4}>
              <div className="p-6 mb-8 border-l-4 border-blue-500 bg-blue-50 rounded-xl">
                <h3 className="mb-2 text-xl font-bold text-gray-900">Conclusão</h3>
                <p className="mb-2 text-gray-800 font-medium">
                  PremieR Pit Bull é a melhor colocada tecnicamente.
                </p>
                <p className="mb-3 text-gray-800 font-medium">
                  Lunch Dog X-PRO Training é o melhor custo-benefício da comparação.
                </p>
                <p className="text-gray-700">
                  E essa talvez seja a informação mais útil para o consumidor. Porque, no fim, a pergunta não é apenas qual ração tem o maior número no rótulo. É qual fórmula faz mais sentido para o cão, para a rotina dele e para o orçamento de quem compra.
                </p>
              </div>
            </FadeIn>

            {/* Onde Comprar */}
            <FadeIn delay={1.5}>
              <h2 className="flex items-center gap-3 pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                <FaStore className="mr-2" />
                Onde Encontrar as Rações do Ranking
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
                    A linha Lunch Dog é distribuída pela{" "}
                    <a
                      href="https://www.sulpetracoes.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-600 hover:underline"
                    >
                      SulPet Distribuidora
                    </a>
                    , garantindo presença nas principais agropecuárias e pet shops da região.
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
                    Encontre as rações do ranking nas lojas oficiais:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <a
                        href="https://www.racaopets.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:underline"
                      >
                        <span className="flex items-center">
                          <HiBuildingStorefront className="mx-1 text-xl" />
                          Ração Pets - Loja Online
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
                          Ração Pets na Shopee
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

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
              url="https://www.racaopets.com.br"
              href="https://www.racaopets.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 transition-colors hover:bg-gray-50"
            >
              <div className="flex flex-col items-start md:flex-row">
                <div className="flex-1">
                  <h4 className="font-medium text-blue-600 hover:underline">
                    Ração Pets - Rações Super Premium para Cães Ativos e de Alta Performance
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
                    Encontre PremieR, Lunch Dog X-PRO e as melhores marcas de rações para o seu cão ativo com preços especiais e entrega rápida.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4">
                  <div className="flex items-center justify-center w-32 h-24 text-gray-500 bg-gray-200 border-2 border-dashed rounded-xl">
                    <img
                      src="/blog-hero-ranking-mobile.png"
                      alt="Ração Pets"
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

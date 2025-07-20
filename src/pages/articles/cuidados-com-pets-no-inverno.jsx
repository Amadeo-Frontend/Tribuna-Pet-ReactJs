import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LiveClock from "../../components/LiveClock";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import ShareButton from "../../components/ui/ShareButton";
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

export default function CuidadosComPetsNoInverno() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      <Seo
        title="Cuidados com pets no inverno | Tribuna do Pet"
        description="Guia essencial para proteger cães e gatos das baixas temperaturas – sinais de hipotermia, roupinhas, ambiente aquecido e mais."
        canonical="https://www.tribunadopet.com.br/cuidados-com-pets-no-inverno"
        image="https://www.tribunadopet.com.br/Roupa-de-frio-para-cachorro.jpg"
        published="2025-06-13"
      />

      {/* Top bar */}
      <div className="hidden py-2 text-white bg-gradient-to-r bg-primary sm:block">
        <div className="container flex items-center justify-between px-4 mx-auto text-sm">
          <span>Seu portal de informações para seu pet!</span>
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
            <Link
              to="/cuidados-com-pets-no-inverno"
              className="hover:underline"
            >
              Cuidados Diários
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-300">
              Cuidados com pets no inverno
            </span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Cuidados com pets no inverno
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <i className="mr-2 far fa-calendar text-primary"></i> 13 de Junho,
              2025
            </span>
            <span className="flex items-center">
              <i className="mr-2 far fa-clock text-primary"></i> 4 min de
              leitura
            </span>
            <span className="flex items-center">
              <i className="mr-2 far fa-eye text-primary"></i> 2.4k
              visualizações
            </span>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="container px-4 py-10 mx-auto">
        <article className="max-w-4xl mx-auto">
          {/* Tags */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 rounded-full flex items-center">
                <i className="fas fa-paw mr-1.5"></i> Cuidados
              </span>
              <span className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-full flex items-center">
                <i className="fas fa-heartbeat mr-1.5"></i> Saúde
              </span>
              <span className="px-3 py-1.5 text-xs font-medium text-white bg-gray-800 rounded-full flex items-center">
                <i className="fas fa-snowflake mr-1.5"></i> Inverno
              </span>
            </div>
          </FadeIn>

          {/* Capa */}
          <ScaleIn delay={0.3}>
            <figure className="mb-8 overflow-hidden shadow-lg rounded-2xl">
              <img
                src="https://www.tribunadopet.com.br/Roupa-de-frio-para-cachorro.jpg"
                alt="Cachorro usando roupinha no inverno"
                className="object-cover w-full aspect-video"
              />
              <figcaption className="px-4 mt-3 text-sm italic text-center text-gray-600">
                Proteção térmica é essencial para raças de pelo curto e animais
                idosos durante o frio
              </figcaption>
            </figure>
          </ScaleIn>

          {/* Lead */}
          <FadeIn delay={0.4}>
            <div className="p-5 mb-8 border-l-4 border-blue-500 bg-blue-50 rounded-xl">
              <p className="text-lg font-medium leading-relaxed text-gray-800">
                Com a chegada do inverno, os termômetros despencam e nossos pets
                enfrentam desafios semelhantes aos humanos. Neste guia
                essencial, reunimos orientações de especialistas para proteger
                cães e gatos dos riscos do clima frio.
              </p>
            </div>
          </FadeIn>

          {/* Conteúdo */}
          <div className="prose prose-lg max-w-none">
            <FadeIn delay={0.5}>
              <h2 className="flex items-center gap-3 mt-8 mb-5 text-2xl font-bold text-gray-900">
                <i className="text-blue-500 fas fa-thermometer-half"></i>
                Por que o inverno exige cuidados especiais?
              </h2>
              <p className="text-gray-700">
                Assim como humanos, cães e gatos sofrem com temperaturas baixas
                e podem desenvolver doenças respiratórias, articulares e
                problemas dermatológicos. A sensibilidade varia conforme:
              </p>
              <ul className="grid grid-cols-1 gap-3 my-5 md:grid-cols-2">
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-green-500 fas fa-check-circle"></i>
                  <span>
                    Porte e idade (filhotes e idosos mais vulneráveis)
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-green-500 fas fa-check-circle"></i>
                  <span>Tipo de pelagem (pelo curto menos protetor)</span>
                </li>
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-green-500 fas fa-check-circle"></i>
                  <span>Raças braquicefálicas (Pugs, Bulldogs)</span>
                </li>
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-green-500 fas fa-check-circle"></i>
                  <span>Condições de saúde preexistentes</span>
                </li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.6}>
              <blockquote className="p-5 my-8 border-l-4 border-blue-500 bg-gray-50 rounded-r-xl">
                <p className="italic text-gray-700">
                  "Animais menores tendem a sentir mais frio que os maiores.
                  Raças como Chihuahua, Dachshund e Galgos são especialmente
                  sensíveis, enquanto Huskies e Chow-chows têm maior
                  resistência"
                </p>
                <cite className="block mt-3 font-medium text-gray-900">
                  — Bruno Alvarenga, Veterinário
                </cite>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.7}>
              <h2 className="flex items-center gap-3 mt-10 mb-5 text-2xl font-bold text-gray-900">
                <i className="text-blue-500 fas fa-shield-alt"></i>7 Estratégias
                para proteger seu pet do frio
              </h2>
            </FadeIn>

            <div className="space-y-10">
              {/* Estratégia 1 */}
              <FadeIn delay={0.8}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-blue-700 bg-blue-100 rounded-full">
                      1
                    </span>
                    Otimize o ambiente de descanso
                  </h3>
                  <p className="text-gray-700">
                    O local de dormir deve ser elevado do chão, protegido de
                    correntes de ar e forrado com cobertores ou almofadas
                    térmicas. Para animais que dormem ao ar livre, casinhas com
                    isolamento térmico são essenciais. Em regiões muito frias,
                    considere aquecedores ambientais com proteção contra
                    queimaduras.
                  </p>
                  <ScaleIn delay={0.9}>
                    <figure className="my-5">
                      <img
                        src="https://www.tribunadopet.com.br/dogs-under-blanket-together.jpg"
                        alt="Cama aquecida para gato"
                        className="w-full shadow-md rounded-xl"
                      />
                      <figcaption className="mt-2 text-sm text-center text-gray-600">
                        Camas elevadas com cobertores térmicos ajudam a manter a
                        temperatura corporal
                      </figcaption>
                    </figure>
                  </ScaleIn>
                </div>
              </FadeIn>

              {/* Estratégia 2 */}
              <FadeIn delay={1.0}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-blue-700 bg-blue-100 rounded-full">
                      2
                    </span>
                    Use roupas estrategicamente
                  </h3>
                  <p className="text-gray-700">
                    Roupinhas são recomendadas para raças de pelo curto,
                    filhotes e idosos, mas devem permitir movimentos naturais e
                    não reter umidade. Tecidos respiráveis como algodão são
                    ideais. Observe se o pet demonstra desconforto e remova a
                    peça caso necessário.
                  </p>
                  <div className="p-4 mt-4 border border-gray-200 bg-gray-50 rounded-xl">
                    <p className="flex items-start font-medium text-gray-800">
                      <i className="mt-1 mr-2 text-yellow-500 fas fa-lightbulb"></i>
                      Dica: Meça seu pet antes de comprar roupas. Peças muito
                      apertadas podem causar problemas de circulação.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Estratégia 3 */}
              <FadeIn delay={1.1}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-blue-700 bg-blue-100 rounded-full">
                      3
                    </span>
                    Ajuste a rotina de banhos
                  </h3>
                  <p className="text-gray-700">
                    Reduza a frequência de banhos no inverno (idealmente 1x/mês)
                    e utilize água morna. Secagem completa é obrigatória para
                    prevenir doenças respiratórias e de pele. Prefira
                    profissionais em pet shops que tenham equipamentos adequados
                    para secagem eficiente.
                  </p>
                </div>
              </FadeIn>

              {/* Estratégia 4 */}
              <FadeIn delay={1.2}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-blue-700 bg-blue-100 rounded-full">
                      4
                    </span>
                    Adapte os passeios
                  </h3>
                  <p className="text-gray-700">
                    Realize caminhadas nos horários mais quentes (10h-15h) e
                    evite dias chuvosos. Para animais sensíveis, utilize
                    botinhas protetoras contra o frio do chão e reduza o tempo
                    ao ar livre em dias muito gelados. Ao voltar, limpe as patas
                    com pano úmido para remover sal ou produtos químicos
                    antiderrapantes.
                  </p>
                  <div className="p-4 mt-4 border border-blue-200 bg-blue-50 rounded-xl">
                    <p className="flex items-start font-medium text-gray-800">
                      <i className="mt-1 mr-2 text-blue-500 fas fa-paw"></i>
                      Atenção: Cães idosos podem precisar de suplementos
                      articulares no frio
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Estratégia 5 */}
              <FadeIn delay={1.3}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-blue-700 bg-blue-100 rounded-full">
                      5
                    </span>
                    Monitore alimentação e hidratação
                  </h3>
                  <p className="text-gray-700">
                    Consulte um veterinário sobre possível aumento calórico
                    (10-20%) para animais que sentem muito frio. Ofereça água
                    fresca frequentemente, pois pets bebem menos no inverno.
                    Alimentos úmidos podem ajudar na hidratação. Para gatos,
                    considere fontes de água corrente.
                  </p>
                </div>
              </FadeIn>

              {/* Estratégia 6 */}
              <FadeIn delay={1.4}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-blue-700 bg-blue-100 rounded-full">
                      6
                    </span>
                    Mantenha vacinas em dia
                  </h3>
                  <p className="text-gray-700">
                    O inverno aumenta a incidência de doenças respiratórias como
                    "tosse dos canis" e gripe felina. Verifique a carteira de
                    vacinação, especialmente para animais idosos ou com saúde
                    frágil. A vacina antigripal pode ser recomendada em regiões
                    com invernos rigorosos.
                  </p>
                </div>
              </FadeIn>

              {/* Estratégia 7 */}
              <FadeIn delay={1.5}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-blue-700 bg-blue-100 rounded-full">
                      7
                    </span>
                    Cuidados especiais com gatos
                  </h3>
                  <p className="text-gray-700">
                    Gatos buscam naturalmente fontes de calor - cuidado com
                    aquecedores e motores de carro! Ofereça tocas acolchoadas e
                    evite correntes de ar. Raças sem pelo, como Sphynx, exigem
                    atenção redobrada com agasalhos. Verifique também se seu
                    gato não está dormindo em locais perigosos como perto de
                    radiadores.
                  </p>
                  <div className="p-4 mt-4 border border-purple-200 bg-purple-50 rounded-xl">
                    <p className="flex items-start font-medium text-gray-800">
                      <i className="mt-1 mr-2 text-purple-500 fas fa-cat"></i>
                      Curiosidade: Gatos podem dormir mais no inverno - até 18
                      horas por dia!
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Destaque hipotermia */}
              <FadeIn delay={1.6}>
                <div className="p-5 my-8 border-l-4 border-yellow-400 rounded-r-lg bg-yellow-50">
                  <h3 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-900">
                    <i className="text-yellow-500 fas fa-exclamation-triangle"></i>
                    Sinais de hipotermia em pets
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 mb-4 md:grid-cols-2">
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-red-500 fas fa-check-circle"></i>
                      Tremores persistentes
                    </li>
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-red-500 fas fa-check-circle"></i>
                      Orelhas e extremidades geladas
                    </li>
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-red-500 fas fa-check-circle"></i>
                      Respiração lenta e superficial
                    </li>
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-red-500 fas fa-check-circle"></i>
                      Movimentos rígidos e letargia
                    </li>
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-red-500 fas fa-check-circle"></i>
                      Sonolência excessiva
                    </li>
                  </ul>
                  <div className="p-4 bg-white border border-yellow-200 rounded-lg">
                    <p className="mb-2 font-medium text-gray-900">
                      O que fazer em caso de hipotermia:
                    </p>
                    <p className="text-gray-700">
                      Aqueça gradativamente com cobertores e aquecedores
                      ambientais. Nunca use água quente diretamente! Caso os
                      sintomas persistam, procure imediatamente um veterinário.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
            {/* Compartilhamento */}
            <ShareButton/>
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

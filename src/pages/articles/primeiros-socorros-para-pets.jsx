import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LiveClock from "../../components/LiveClock";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
// Importações corrigidas dos ícones
import {
  faHospital,
  faFileAlt,
  faIdCard,
  faMapMarkedAlt,
  faAmbulance,
  faPaw,
  faHeartbeat,
  faExclamationTriangle,
  faFirstAid,
  faPlusSquare,
  faBan,
  faPhoneAlt,
  faCheckCircle,
  faTimesCircle,
  faExclamationCircle,
  faCalendar,
  faClock,
  faEye,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
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

export default function PrimeirosSocorrosParaPets() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const compartilharPagina = () => {
    if (navigator.share) {
      navigator.share({
        title: "Primeiros Socorros para Cães e Gatos – Tribuna do Pet",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Seo
        title="Primeiros Socorros para Cães e Gatos | Tribuna do Pet"
        description="Guia essencial de primeiros socorros para emergências com pets: engasgo, intoxicação, ferimentos, queimaduras e mais. Saiba como agir antes de chegar ao veterinário."
        canonical="https://www.tribunadopet.com.br/primeiros-socorros-para-pets"
        image="https://www.tribunadopet.com.br/primeiros-socorros-pets.jpg"
        published="2025-07-20"
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
            <Link to="/saude-pet" className="hover:underline">
              Saúde do Pet
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-300">
              Primeiros Socorros para Cães e Gatos
            </span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Primeiros Socorros para Cães e Gatos: Guia Prático para
              Emergências Domésticas
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <FontAwesomeIcon
                icon={faCalendar}
                className="mr-2 text-primary"
              />
              20 de Julho, 2025
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2 text-primary" />6
              min de leitura
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faEye} className="mr-2 text-primary" />
              3.2k visualizações
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
                <FontAwesomeIcon icon={faFirstAid} className="mr-1.5" />{" "}
                Emergência
              </span>
              <span className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-full flex items-center">
                <FontAwesomeIcon icon={faHeartbeat} className="mr-1.5" /> Saúde
              </span>
              <span className="px-3 py-1.5 text-xs font-medium text-white bg-red-600 rounded-full flex items-center">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="mr-1.5"
                />{" "}
                Cuidados
              </span>
            </div>
          </FadeIn>

          {/* Capa */}
          <ScaleIn delay={0.3}>
            <figure className="mb-8 overflow-hidden shadow-lg rounded-2xl">
              <img
                src="https://www.tribunadopet.com.br/primeiros-socorros-pets.jpg"
                alt="Mulher realizando primeiros socorros em cachorro"
                className="object-cover w-full aspect-video"
              />
              <figcaption className="px-4 mt-3 text-sm italic text-center text-gray-600">
                Saber agir rapidamente em emergências pode salvar a vida do seu
                pet até chegar ao veterinário
              </figcaption>
            </figure>
          </ScaleIn>

          {/* Lead */}
          <FadeIn delay={0.4}>
            <div className="p-5 mb-8 border-l-4 border-red-500 bg-red-50 rounded-xl">
              <p className="text-lg font-medium leading-relaxed text-gray-800">
                Acidentes acontecem, e saber como agir nas primeiras horas pode
                fazer toda a diferença na recuperação do seu pet. Neste guia
                essencial, veterinários ensinam como proceder em situações de
                emergência com cães e gatos, desde engasgos até intoxicações,
                enquanto você busca atendimento profissional.
              </p>
            </div>
          </FadeIn>

          {/* Conteúdo */}
          <div className="prose prose-lg max-w-none">
            <FadeIn delay={0.5}>
              <h2 className="flex items-center gap-3 mt-8 mb-5 text-2xl font-bold text-gray-900">
                <FontAwesomeIcon icon={faPlusSquare} className="text-red-500" />
                Kit de Primeiros Socorros para Pets: O que ter em casa
              </h2>
              <p className="text-gray-700">
                Ter um kit básico de emergência pode salvar a vida do seu animal
                em situações críticas. Mantenha estes itens em local de fácil
                acesso:
              </p>
              <ul className="grid grid-cols-1 gap-3 my-5 md:grid-cols-2">
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mt-1 mr-3 text-green-500"
                  />
                  <span>Luvas descartáveis</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mt-1 mr-3 text-green-500"
                  />
                  <span>Gaze estéril e ataduras</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mt-1 mr-3 text-green-500"
                  />
                  <span>Antisséptico sem álcool (clorexidina)</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mt-1 mr-3 text-green-500"
                  />
                  <span>Termômetro digital específico para pets</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mt-1 mr-3 text-green-500"
                  />
                  <span>Pinça hemostática para remover objetos</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mt-1 mr-3 text-green-500"
                  />
                  <span>Soro fisiológico para limpeza de ferimentos</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mt-1 mr-3 text-green-500"
                  />
                  <span>Carvão ativado (para intoxicações)</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mt-1 mr-3 text-green-500"
                  />
                  <span>Contatos de emergência veterinária</span>
                </li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.6}>
              <blockquote className="p-5 my-8 border-l-4 border-red-500 bg-gray-50 rounded-r-xl">
                <p className="italic text-gray-700">
                  "70% das mortes de pets em emergências ocorrem por falta de
                  atendimento imediato. Ações simples realizadas nos primeiros
                  minutos podem estabilizar o animal até chegar ao veterinário"
                </p>
                <cite className="block mt-3 font-medium text-gray-900">
                  — Dra. Carla Mendes, Médica Veterinária de Emergência
                </cite>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.7}>
              <h2 className="flex items-center gap-3 mt-10 mb-5 text-2xl font-bold text-gray-900">
                <FontAwesomeIcon icon={faAmbulance} className="text-red-500" />
                Guia Prático para Emergências Comuns
              </h2>
            </FadeIn>

            <div className="space-y-10">
              {/* Emergência 1 */}
              <FadeIn delay={0.8}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded-full">
                      1
                    </span>
                    Engasgo e Asfixia
                  </h3>
                  <p className="text-gray-700">
                    Se o pet está com dificuldade para respirar, babando
                    excessivamente ou tentando vomitar sem sucesso:
                  </p>
                  <ul className="pl-5 mt-3 space-y-2 list-disc">
                    <li>
                      Mantenha a calma e tente visualizar o objeto na garganta
                    </li>
                    <li>
                      Para cães pequenos: Segure com a cabeça para baixo e dê
                      tapinhas firmes nas costas
                    </li>
                    <li>
                      Para cães médios/grandes: Realize a Manobra de Heimlich
                      (abraços por trás, compressões abaixo das costelas)
                    </li>
                    <li>
                      Nunca tente puxar objetos visíveis com os dedos - use
                      pinça
                    </li>
                  </ul>
                  <ScaleIn delay={0.9}>
                    <figure className="my-5">
                      <img
                        src="https://www.tribunadopet.com.br/ajudando-cachorro.jpg"
                        alt="Manobra de Heimlich em cachorro"
                        className="w-full shadow-md rounded-xl"
                      />
                      <figcaption className="mt-2 text-sm text-center text-gray-600">
                        Posição correta para realizar a Manobra de Heimlich em
                        cães de médio e grande porte
                      </figcaption>
                    </figure>
                  </ScaleIn>
                </div>
              </FadeIn>

              {/* Emergência 2 */}
              <FadeIn delay={1.0}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded-full">
                      2
                    </span>
                    Intoxicação e Envenenamento
                  </h3>
                  <p className="text-gray-700">
                    Sinais: Vômitos, diarreia, salivação excessiva, tremores,
                    convulsões. Se suspeitar de intoxicação:
                  </p>
                  <ul className="pl-5 mt-3 space-y-2 list-disc">
                    <li>
                      Identifique a substância ingerida (guarde a embalagem)
                    </li>
                    <li>
                      Não induza o vômito sem orientação veterinária (pode
                      piorar)
                    </li>
                    <li>
                      Ofereça carvão ativado (1g por kg de peso) diluído em água
                    </li>
                    <li>Mantenha o animal aquecido e em local tranquilo</li>
                  </ul>
                  <div className="p-4 mt-4 border border-red-200 bg-red-50 rounded-xl">
                    <p className="flex items-start font-medium text-gray-800">
                      <FontAwesomeIcon
                        icon={faExclamationCircle}
                        className="mt-1 mr-2 text-red-500"
                      />
                      Atenção: Produtos mais perigosos incluem medicamentos
                      humanos, inseticidas, chocolate, uvas, plantas como
                      comigo-ninguém-pode e lírios.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Emergência 3 */}
              <FadeIn delay={1.1}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded-full">
                      3
                    </span>
                    Ferimentos e Sangramentos
                  </h3>
                  <p className="text-gray-700">
                    Para cortes, arranhões ou sangramentos:
                  </p>
                  <ul className="pl-5 mt-3 space-y-2 list-disc">
                    <li>Lave com soro fisiológico ou água limpa</li>
                    <li>
                      Comprima com gaze limpa por 5-10 minutos para estancar
                    </li>
                    <li>
                      Aplique antisséptico sem álcool (clorexidina a 0.5%)
                    </li>
                    <li>
                      Para sangramentos graves em membros, faça um torniquete
                      acima do ferimento (alivie a cada 10 minutos)
                    </li>
                  </ul>
                </div>
              </FadeIn>

              {/* Emergência 4 */}
              <FadeIn delay={1.2}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded-full">
                      4
                    </span>
                    Queimaduras
                  </h3>
                  <p className="text-gray-700">
                    Causadas por líquidos quentes, produtos químicos ou fogo:
                  </p>
                  <ul className="pl-5 mt-3 space-y-2 list-disc">
                    <li>
                      Resfrie imediatamente com água fria por 10-15 minutos
                    </li>
                    <li>Não aplique gelo diretamente na pele</li>
                    <li>
                      Não estoure bolhas ou aplique pomadas sem orientação
                    </li>
                    <li>Cubra com gaze úmida e limpa</li>
                  </ul>
                </div>
              </FadeIn>

              {/* Emergência 5 */}
              <FadeIn delay={1.3}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded-full">
                      5
                    </span>
                    Convulsões
                  </h3>
                  <p className="text-gray-700">
                    Se o animal estiver tendo convulsões:
                  </p>
                  <ul className="pl-5 mt-3 space-y-2 list-disc">
                    <li>Afaste móveis e objetos para evitar lesões</li>
                    <li>Escureça o ambiente e reduza estímulos sonoros</li>
                    <li>Não tente segurar a língua do animal</li>
                    <li>Cronometre a duração da crise</li>
                    <li>
                      Após a crise, mantenha o animal aquecido e em repouso
                    </li>
                  </ul>
                </div>
              </FadeIn>

              {/* Emergência 6 */}
              <FadeIn delay={1.4}>
                <div>
                  <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-800">
                    <span className="flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded-full">
                      6
                    </span>
                    Insolação
                  </h3>
                  <p className="text-gray-700">
                    Sinais: Respiração ofegante, gengivas vermelhas, fraqueza,
                    vômitos. O que fazer:
                  </p>
                  <ul className="pl-5 mt-3 space-y-2 list-disc">
                    <li>Mova o animal para local fresco e arejado</li>
                    <li>
                      Umedeça as patas, axilas e virilha com água fria (não
                      gelada)
                    </li>
                    <li>Ofereça pequenos goles de água fresca</li>
                    <li>Use ventilador para ajudar no resfriamento</li>
                  </ul>
                </div>
              </FadeIn>

              {/* O que não fazer */}
              <FadeIn delay={1.5}>
                <div className="p-5 my-8 border-l-4 border-yellow-400 rounded-r-lg bg-yellow-50">
                  <h3 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-900">
                    <FontAwesomeIcon icon={faBan} className="text-yellow-500" />
                    O que NÃO fazer em emergências
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 mb-4">
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="mt-1 mr-2 text-red-500"
                      />
                      <span>
                        Administrar medicamentos humanos sem orientação
                        veterinária
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="mt-1 mr-2 text-red-500"
                      />
                      <span>
                        Forçar comida ou água em animais semi-conscientes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="mt-1 mr-2 text-red-500"
                      />
                      <span>
                        Usar álcool ou produtos caseiros em ferimentos
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="mt-1 mr-2 text-red-500"
                      />
                      <span>
                        Mover animais com suspeita de fraturas sem imobilização
                      </span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              {/* Quando buscar ajuda */}
              <FadeIn delay={1.6}>
                <div className="p-5 my-8 border-l-4 border-green-500 rounded-r-lg bg-green-50">
                  <h3 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-900">
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className="text-green-500"
                    />
                    Quando buscar ajuda veterinária IMEDIATAMENTE
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 mb-4 md:grid-cols-2">
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="mt-1 mr-2 text-red-500"
                      />
                      Dificuldade respiratória persistente
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="mt-1 mr-2 text-red-500"
                      />
                      Sangramento que não estanca após 10 minutos
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="mt-1 mr-2 text-red-500"
                      />
                      Perda de consciência ou desorientação grave
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="mt-1 mr-2 text-red-500"
                      />
                      Convulsões que duram mais de 2 minutos
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="mt-1 mr-2 text-red-500"
                      />
                      Suspeita de fratura ou trauma grave
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="mt-1 mr-2 text-red-500"
                      />
                      Ingestão de substâncias tóxicas
                    </li>
                  </ul>
                  <div className="p-4 bg-white border border-green-200 rounded-lg">
                    <p className="mb-2 font-medium text-gray-900">
                      Dica importante:
                    </p>
                    <p className="text-gray-700">
                      Tenha sempre à mão os contatos do seu veterinário e de uma
                      clínica de emergência 24h. Em situações críticas, ligue
                      ANTES de sair para receber orientações específicas.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Seção Hospital Público de Curitiba */}
            <FadeIn delay={1.7}>
              <div className="p-6 my-10 bg-blue-50 rounded-xl">
                <h2 className="flex items-center gap-3 mb-4 text-2xl font-bold text-gray-900">
                  <FontAwesomeIcon
                    icon={faHospital}
                    className="text-blue-600"
                  />
                  Hospital Veterinário Público de Curitiba: Atendimento GRATUITO
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">
                      Serviços para População Vulnerável
                    </h3>
                    <p className="text-gray-700">
                      O Hospital Municipal oferece atendimento veterinário
                      gratuito para tutores em situação de vulnerabilidade
                      social cadastrados no programa Armazém da Família.
                    </p>

                    <div className="p-4 mt-4 bg-white border border-blue-200 rounded-lg">
                      <h4 className="font-medium text-gray-900">
                        Benefícios incluídos:
                      </h4>
                      <ul className="pl-5 mt-2 space-y-1 list-disc">
                        <li>
                          Consultas emergenciais 24h para casos de risco de vida
                        </li>
                        <li>Cirurgias de urgência sem custo</li>
                        <li>Exames laboratoriais básicos</li>
                        <li>
                          Atendimento a animais resgatados por protetores
                          credenciados
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">
                      Como Acessar
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <FontAwesomeIcon
                          icon={faFileAlt}
                          className="mt-1 mr-3 text-blue-600"
                        />
                        <span>
                          Cadastro prévio no Portal da Rede de Proteção Animal
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FontAwesomeIcon
                          icon={faIdCard}
                          className="mt-1 mr-3 text-blue-600"
                        />
                        <span>
                          Comprovante de benefício do Armazém da Família
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FontAwesomeIcon
                          icon={faMapMarkedAlt}
                          className="mt-1 mr-3 text-blue-600"
                        />
                        <span>
                          Endereço: Rua Cesar Misael Chaves, 147 - Taboão
                        </span>
                      </li>
                    </ul>

                    {/* Botão de Emergência Pública */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-full gap-3 px-6 py-4 mt-6 text-white rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-blue-800"
                      onClick={() =>
                        window.open(
                          "https://protecaoanimal.curitiba.pr.gov.br/",
                          "_blank"
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faAmbulance} className="text-xl" />
                      <span className="text-lg font-bold">
                        ACESSAR CADASTRO
                      </span>
                    </motion.button>
                  </div>
                </div>

                <div className="p-4 mt-6 bg-blue-100 border border-blue-300 rounded-lg">
                  <h4 className="font-medium text-gray-900">
                    Caso Real Atendido:
                  </h4>
                  <p className="mt-1 text-gray-700">
                    "A cadela Luna, resgatada com tumor mamário, recebeu
                    cirurgia de emergência e recuperação completa através do
                    programa público. O serviço salvou sua vida sem custos para
                    a protetora independente" - Relato da Associação Amigos dos
                    Pets Curitiba
                  </p>
                </div>
              </div>
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

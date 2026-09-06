"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import LiveClock from "../components/LiveClock";
import {
  FaHeartbeat,
  FaExclamationTriangle,
  FaBan,
  FaFirstAid,
  FaCity,
  FaShieldAlt,
  FaSyringe,
  FaNotesMedical,
} from "react-icons/fa";
import ShareButton from "../components/ui/ShareButton";
import AdBanner from "../components/AdBanner";

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

export default function AlertaRaivaPets() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") { 
        const el = document.getElementById("global-loader"); 
        if (el) el.style.display = "none"; 
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Seo
        title="Casos de Raiva em Pets: Alerta sobre Vacinação e Conduta | Tribuna do Pet"
        description="Novos casos de raiva em animais domésticos reacendem o alerta sobre prevenção. Conheça as condutas veterinárias corretas."
        canonical="https://www.tribunadopet.com.br/alerta-raiva-vacinacao-pets"
        image="https://www.tribunadopet.com.br/images/materia-raiva-em-animais.jpg"
        published="2026-08-24"
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
            <Link href="/" className="flex items-center hover:underline">
              <i className="mr-1 text-sm fas fa-home"></i> Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link href="/saude-animal" className="hover:underline">
              Saúde Animal
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-300">
              Alerta de Raiva e Prevenção
            </span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Casos de Raiva em Pets Reforçam Alerta sobre Vacinação e Conduta Veterinária
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <i className="mr-2 far fa-calendar text-primary"></i> 24 de Agosto, 2026
            </span>
            <span className="flex items-center">
              <i className="mr-2 far fa-clock text-primary"></i> 6 min de leitura
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
                <FaFirstAid className="mr-1.5" /> Urgência
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                <FaShieldAlt className="mr-1.5" /> Vacinação
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-red-800 bg-red-100 rounded-full">
                <FaExclamationTriangle className="mr-1.5" /> Alerta
              </span>
            </div>
            
            {/* Imagem Principal */}
            <ScaleIn delay={0.2}>
              <div className="w-full">
                <img
                  src="/images/materia-raiva-em-animais.jpg"
                  alt="Casos de raiva em animais domésticos e prevenção vacinal"
                  className="object-cover w-full rounded-lg"
                />
              </div>
            </ScaleIn>

            {/* Introdução */}
            <FadeIn delay={0.3}>
              <section className="mt-8 mb-10">
                <p className="mb-6 text-gray-700">
                  Recentes casos de raiva em animais domésticos registrados em São Paulo e no Distrito Federal acenderam um alerta urgente sobre questões relacionadas à prevenção. Embora considerada controlada nas últimas décadas, os dados do Ministério da Saúde apontam 270 casos de raiva em cães e gatos no país nos últimos 10 anos, sendo 76% (205 casos) confirmados em cães domésticos.
                </p>

                <div className="p-5 border-l-4 border-blue-500 bg-blue-50 rounded-xl">
                  <p className="italic text-gray-700">
                    "A vacinação antirrábica é recomendada pelas autoridades sanitárias e constitui a principal barreira de proteção. Além de salvar a vida do animal, ela previne a transmissão para as pessoas e garante a segurança da saúde pública" -{" "}
                    <strong>Kathia Soares</strong>, coordenadora técnica da MSD Saúde Animal.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Características da Doença */}
            <FadeIn delay={0.4}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Entendendo a Doença e os Riscos
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-6 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-white rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-100 rounded-full">
                        <FaNotesMedical className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Alta Letalidade
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Causada por um vírus da família <em>Rhabdoviridae</em>, a raiva possui taxa de mortalidade próxima de 100% e não tem cura após o início dos sintomas.
                    </p>
                  </div>

                  <div className="p-6 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-white rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-100 rounded-full">
                        <FaHeartbeat className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Sintomas Críticos
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Incluem alterações severas de comportamento, salivação excessiva, dificuldade para engolir, paralisia e pode se manifestar de forma "atípica", sem a fúria comum.
                    </p>
                  </div>

                  <div className="p-6 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-white rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-100 rounded-full">
                        <FaCity className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        O Perigo dos Morcegos
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Os morcegos (não hematófagos) representam quase 8 em cada 10 casos registrados na fauna silvestre e estão presentes no ambiente urbano, ameaçando pets não vacinados.
                    </p>
                  </div>

                  <div className="p-6 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-white rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-100 rounded-full">
                        <FaSyringe className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Transmissão 
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Ocorre pelo contato com a saliva do animal infectado (através de mordidas, lambidas ou arranhões). A vacina quebra esse ciclo de transmissão.
                    </p>
                  </div>
                </div>

                {/* Destaque Visual: Morcegos e Transmissão Urbana */}
                <div className="mt-8 overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl shadow-lg border border-slate-800">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
                    <div className="md:col-span-5 h-64 md:h-full relative min-h-[240px]">
                      <img
                        src="/images/imagem-morcego-transmisor-raiva.jpg"
                        alt="Morcegos em galhos - principais transmissores silvestres da raiva no ambiente urbano"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="md:col-span-7 p-6 md:p-8">
                      <span className="inline-flex items-center px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 border border-amber-400/30 rounded-full">
                        <FaExclamationTriangle className="mr-1.5" /> Vetor Silvestre no Meio Urbano
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        A Presença Silenciosa dos Morcegos nas Cidades
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                        Os morcegos (inclusive espécies frugívoras e insetívoras) representam quase <strong>80% dos casos</strong> registrados na fauna silvestre. Ao se contaminarem, podem cair em quintais, sacadas e áreas residenciais, aguçando a curiosidade de cães e gatos desprotegidos.
                      </p>
                      <div className="p-3.5 bg-white/10 rounded-xl border border-white/15 text-xs md:text-sm text-slate-200">
                        ⚠️ <strong>Protocolo Imediato:</strong> Nunca manipule morcegos caídos, vivos ou mortos. Isole o local cobrindo o animal com um balde com peso em cima e telefone para o Centro de Controle de Zoonoses do seu município.
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Como Proceder (Protocolos) */}
            <FadeIn delay={0.5}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Conduta Veterinária: Como Proceder Após Contato
                </h2>
                <p className="mb-6 text-gray-700">
                  Em caso de suspeita de contato com um animal contaminado, Mary Marcondes, presidente do Conselho de Vacinação da WSAVA, detalha os protocolos médicos imediatos:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-blue-700 bg-blue-100 rounded-full">
                      1
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold">
                        Pet Nunca Vacinado (Suspeita)
                      </h3>
                      <p className="text-gray-700">
                        O animal precisará receber três doses da vacina: no dia zero (data do contato viral), uma semana depois (dia 7), e a última com 30 dias após o registro.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-blue-700 bg-blue-100 rounded-full">
                      2
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold">
                        Pet Previamente Vacinado (Suspeita)
                      </h3>
                      <p className="text-gray-700">
                        Se o pet estiver com o calendário vacinal em dia, ele deverá receber apenas duas doses de reforço, sendo uma no dia zero e outra no dia 30.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-blue-700 bg-blue-100 rounded-full">
                      3
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold">Contato Confirmado (Pet Vacinado)</h3>
                      <p className="text-gray-700">
                        Se houver diagnóstico confirmado de raiva no animal agressor, o pet tomará as duas doses, mas precisará ficar rigorosamente <strong>180 dias em observação</strong> sem sair de casa. Se o agressor for monitorado e sobreviver a 10 dias, os 180 dias são suspensos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-blue-700 bg-blue-100 rounded-full">
                      4
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold">Proteção dos Profissionais</h3>
                      <p className="text-gray-700">
                        Médicos-veterinários, estudantes e equipes de clínica devem estar com sua própria imunização antirrábica e titulação altas e em dia.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 mt-8 border-l-4 border-red-500 bg-red-50 rounded-xl">
                  <h3 className="flex items-center mb-3 text-xl font-bold text-red-800">
                    <FaExclamationTriangle className="mr-2" />
                    Atenção Total!
                  </h3>
                  <p className="text-lg text-red-700">
                    Se o cão ou gato <strong>nunca foi vacinado</strong> contra o vírus e for agredido por um animal diagnosticado (morcego, animal de rua, etc.), a conduta atual do Ministério da Agricultura e Pecuária (MAPA) indica a <strong>eutanásia</strong>, dada a letalidade do vírus e sua extrema taxa de transmissão humana.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Ações não recomendadas */}
            <FadeIn delay={0.6}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  O que NUNCA fazer
                </h2>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex items-start p-4 border border-red-200 rounded-lg bg-red-50">
                    <div className="mt-1 mr-4 text-red-500">
                      <FaBan className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Tocar em Morcegos
                      </h3>
                      <p className="text-gray-700">
                        Nunca pegue morcegos caídos, mesmo com luvas. Cubra-o com um balde, ponha um peso em cima e acione a zoonoses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 border border-red-200 rounded-lg bg-red-50">
                    <div className="mt-1 mr-4 text-red-500">
                      <FaBan className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Ignorar Ferimentos
                      </h3>
                      <p className="text-gray-700">
                        Tratar brigas de rua como inofensivas. Um cão que não consegue fechar a boca, por exemplo, pode ser sinal de raiva atípica.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 border border-red-200 rounded-lg bg-red-50">
                    <div className="mt-1 mr-4 text-red-500">
                      <FaBan className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Atrasar o Reforço Anual
                      </h3>
                      <p className="text-gray-700">
                        A vacina de raiva dura 1 ano. Atrasos deixam o sistema imunológico do seu pet cego e completamente vulnerável à infecção.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 border border-red-200 rounded-lg bg-red-50">
                    <div className="mt-1 mr-4 text-red-500">
                      <FaBan className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Manipular Sem EPI
                      </h3>
                      <p className="text-gray-700">
                        Veterinários não devem manusear animais com suspeita (babando, com espasmos) sem proteção total e titulação alta.
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
                    Vacinar é um Ato de Amor e Responsabilidade!
                  </h3>
                  <p className="max-w-3xl mx-auto mb-6 text-lg text-green-700">
                    Não espere o pior acontecer. A raiva é 100% prevenível através da vacina. Verifique agora mesmo a carteirinha do seu pet, agende uma consulta com o seu médico-veterinário de confiança e mantenha a proteção da sua família em dia.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Compartilhamento e Banner */}
            <ShareButton />
            
            <AdBanner
              title="Ração Pets - Nutrição premium para cães e gatos"
              desc="Rações premium e super premium sem conservantes ou corantes. Garanta nutrição completa a preços acessíveis."
              img="/images/racao-batata-doce.webp"
              link="https://www.racaopets.com.br/cachorro/racao-seca/premium-especial/racao-snack-dog-premium-especial-para-caes-adultos-sabor-frango-batata-doce-aveia-amp-cereais-23-proteinas-12kg"
              alt="Ração Snack Dog Batata Doce"
            />
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

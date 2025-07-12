import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import LiveClock from "../../components/LiveClock";
import { 
  FaCalendarAlt, 
  FaClock, 
  FaPaw, 
  FaChevronDown, 
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarCheck,
  FaShareAlt
} from "react-icons/fa";

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

export default function VagasCastracao() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const compartilharPagina = () => {
    if (navigator.share) {
      navigator.share({
        title: "Vagas para Castração Gratuita - Tribuna do Pet",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("global-loader").style.display = "none";
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Seo
        title="Vagas para Castração Gratuita | Tribuna do Pet"
        description="Junho 2025: 5.717 vagas para castração gratuita de cães e gatos em Curitiba"
        canonical="https://www.tribunadopet.com.br/vagas-castracao-gratuita"
        image="/Castracao-animais.jpeg"
      />

      {/* Top bar */}
      <div className="hidden py-2 text-white bg-gradient-to-r from-gray-800 to-gray-900 sm:block">
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
            <Link
              to="/utilidade-publica"
              className="hover:underline"
            >
              Utilidade Pública
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-300">
              Vagas para Castração Gratuita
            </span>
          </nav>
          
          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Junho 2025: 5.717 vagas para castração gratuita de cães e gatos em Curitiba
            </h1>
          </FadeIn>
          
          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <FaCalendarAlt className="mr-2 text-primary" />
              15 de Junho, 2025
            </span>
            <span className="flex items-center">
              <FaClock className="mr-2 text-primary" />
              8 min de leitura
            </span>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="container max-w-5xl px-4 py-10 mx-auto">
        <article className="overflow-hidden bg-white shadow-xl rounded-2xl">
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1 text-sm font-bold text-blue-800 bg-blue-100 rounded-full">
                Castração
              </span>
              <span className="px-4 py-1 text-sm font-bold text-green-800 bg-green-100 rounded-full">
                Saúde Animal
              </span>
              <span className="px-4 py-1 text-sm font-bold text-purple-800 bg-purple-100 rounded-full">
                Curitiba
              </span>
            </div>

            <FadeIn delay={0.2}>
              <section className="mb-8">
                <p className="p-4 mb-6 text-xl font-medium text-gray-700 border-l-4 rounded-lg bg-gray-50 border-primary">
                  A Prefeitura de Curitiba disponibilizará 5.717 vagas para castração gratuita de cães e gatos durante
                  o mês de junho de 2025. Os agendamentos estão abertos exclusivamente pelo site da Rede de Proteção
                  Animal.
                </p>
              </section>
            </FadeIn>

            {/* Imagem Principal */}
            <ScaleIn delay={0.3}>
              <div className="w-full mb-8">
                <img
                  src="Castracao-animais.jpeg"
                  alt="Veterinário realizando castração em animal"
                  className="object-cover w-full rounded-lg"
                />
                <div className="mt-2 text-sm italic text-gray-500">
                  Programa municipal de castração gratuita em Curitiba
                </div>
              </div>
            </ScaleIn>

            {/* Informações oficiais */}
            <FadeIn delay={0.4}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Informações oficiais do programa
                </h2>

                <div className="p-6 mb-8 border-l-4 border-green-500 rounded-r-lg bg-green-50">
                  <h3 className="mb-3 text-xl font-bold text-green-800">Dados principais</h3>
                  <ul className="pl-6 space-y-2 list-disc">
                    <li><strong>Total de vagas:</strong> 5.717 procedimentos</li>
                    <li><strong>Período:</strong> 3 a 28 de junho de 2025</li>
                    <li><strong>Horário:</strong> Das 8h às 16h</li>
                    <li><strong>Agendamento:</strong> Exclusivamente pelo <a
                        href="https://protecaoanimal.curitiba.pr.gov.br/castracao"
                        className="font-bold text-primary hover:underline">site da Rede de Proteção Animal</a>
                    </li>
                    <li><strong>Investimento:</strong> R$ 1,2 milhão em recursos municipais</li>
                  </ul>
                </div>
              </section>
            </FadeIn>

            {/* Cronograma por região */}
            <FadeIn delay={0.5}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Cronograma por região
                </h2>

                <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
                  {/* Local 1 */}
                  <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-gray-50 to-white">
                    <h3 className="mb-2 text-lg font-bold text-gray-800">Bairro Novo</h3>
                    <p className="mb-2 text-gray-600">Vila Tecnológica (Rua Nova Esperança, Sítio Cercado)</p>
                    <p className="flex items-center font-medium text-gray-800">
                      <FaCalendarAlt className="mr-2 text-primary" />3 a 7 de junho
                    </p>
                  </div>

                  {/* Local 2 */}
                  <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-gray-50 to-white">
                    <h3 className="mb-2 text-lg font-bold text-gray-800">Matriz</h3>
                    <p className="mb-2 text-gray-600">Velódromo de Curitiba (Rua Dr. Jorge Meyer Filho, Jardim Botânico)</p>
                    <p className="flex items-center font-medium text-gray-800">
                      <FaCalendarAlt className="mr-2 text-primary" />3 a 7 de junho
                    </p>
                  </div>

                  {/* Local 3 */}
                  <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-gray-50 to-white">
                    <h3 className="mb-2 text-lg font-bold text-gray-800">Cajuru</h3>
                    <p className="mb-2 text-gray-600">Associação de Moradores Vila Solitude 2 (Rua Antônio Carlos Suplicy, Uberaba)</p>
                    <p className="flex items-center font-medium text-gray-800">
                      <FaCalendarAlt className="mr-2 text-primary" />10 a 14 de junho
                    </p>
                  </div>

                  {/* Local 4 */}
                  <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-gray-50 to-white">
                    <h3 className="mb-2 text-lg font-bold text-gray-800">Portão/Fazendinha</h3>
                    <p className="mb-2 text-gray-600">Rua da Cidadania Portão/Fazendinha (Rua Carlos Klemtz, Fazendinha)</p>
                    <p className="flex items-center font-medium text-gray-800">
                      <FaCalendarAlt className="mr-2 text-primary" />10 a 14 de junho
                    </p>
                  </div>

                  {/* Local 5 */}
                  <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-gray-50 to-white">
                    <h3 className="mb-2 text-lg font-bold text-gray-800">Pinheirinho</h3>
                    <p className="mb-2 text-gray-600">Praça Zumbi dos Palmares (Rua Lothário Boutin, Pinheirinho)</p>
                    <p className="flex items-center font-medium text-gray-800">
                      <FaCalendarAlt className="mr-2 text-primary" />23 a 27 de junho
                    </p>
                  </div>

                  {/* Local 6 */}
                  <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-gray-50 to-white">
                    <h3 className="mb-2 text-lg font-bold text-gray-800">Boa Vista</h3>
                    <p className="mb-2 text-gray-600">Centro de Esporte e Lazer Avelino Vieira (Rua Guilherme Ihlenfeldt, Bacacheri)</p>
                    <p className="flex items-center font-medium text-gray-800">
                      <FaCalendarAlt className="mr-2 text-primary" />24 a 28 de junho
                    </p>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Requisitos */}
            <FadeIn delay={0.6}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Requisitos para participação
                </h2>

                <div className="p-6 mb-8 border-l-4 border-blue-500 rounded-r-lg bg-blue-50">
                  <ul className="pl-6 space-y-2 list-disc">
                    <li><strong>Idade dos animais:</strong> Entre 5 meses e 8 anos</li>
                    <li><strong>Documentação obrigatória:</strong>
                      <ul className="pl-6 mt-2 list-disc">
                        <li>RG e comprovante de residência do tutor</li>
                        <li>Procuração com firma reconhecida se o tutor não comparecer pessoalmente</li>
                      </ul>
                    </li>
                    <li><strong>Filhotes:</strong> 30 vagas específicas para cães de 2 a 6 meses resgatados por protetores (Centro de Medicina Veterinária do Coletivo da UFPR)</li>
                    <li><strong>Requisitos para filhotes:</strong> Vacinação em dia e peso mínimo de 2 kg</li>
                  </ul>
                </div>

                <div className="p-6 mb-8 border-l-4 border-green-500 rounded-lg bg-green-50">
                  <h3 className="mb-3 text-xl font-bold text-green-800">Benefícios do programa</h3>
                  <ul className="pl-6 space-y-2 list-disc">
                    <li><strong>Microchipagem:</strong> Todos os animais castrados recebem identificação eletrônica vinculada ao tutor</li>
                    <li><strong>Controle populacional:</strong> Redução de animais abandonados nas ruas</li>
                    <li><strong>Prevenção de doenças:</strong> Diminuição de problemas de saúde relacionados à reprodução</li>
                    <li><strong>Histórico:</strong> Desde 2017, o programa já realizou mais de 177.535 castrações na cidade</li>
                  </ul>
                </div>
              </section>
            </FadeIn>

            {/* Informações adicionais */}
            <FadeIn delay={0.7}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Informações adicionais
                </h2>

                <ul className="pl-6 mb-8 space-y-2 list-disc">
                  <li>As vagas estão sujeitas à disponibilidade após agendamento online</li>
                  <li>Tutores de outras regiões podem participar, escolhendo o local mais próximo</li>
                  <li>Mais detalhes disponíveis nos <a href="https://www.curitiba.pr.gov.br/noticias"
                      className="font-bold text-primary hover:underline">anúncios oficiais</a> da Prefeitura</li>
                </ul>

                <div className="flex justify-center my-10">
                  <a href="https://protecaoanimal.curitiba.pr.gov.br/castracao"
                    className="flex items-center px-8 py-4 text-lg font-bold text-white transition duration-300 transform bg-green-600 rounded-full shadow-lg hover:bg-green-700 hover:scale-105">
                    <FaCalendarCheck className="mr-2 text-xl" />
                    AGENDAR CASTRAÇÃO
                  </a>
                </div>
              </section>
            </FadeIn>

            {/* Fontes Oficiais */}
            <FadeIn delay={0.8}>
              <div className="p-6 mt-8 rounded-lg bg-gray-50">
                <h3 className="mb-3 text-lg font-bold text-gray-800">Fontes Oficiais</h3>
                <ul className="pl-6 space-y-2 list-disc">
                  <li>Prefeitura Municipal de Curitiba - Notícia oficial: <a
                      href="https://www.curitiba.pr.gov.br/noticias/mes-de-junho-tem-5717-vagas-para-castracao-gratuita-de-caes-e-gatos-em-curitiba-agendamentos-estao-abertos/77679"
                      className="text-primary hover:underline">Acessar notícia</a></li>
                  <li>Site da Rede de Proteção Animal: <a
                      href="https://protecaoanimal.curitiba.pr.gov.br/castracao"
                      className="text-primary hover:underline">www.curitiba.pr.gov.br/redeanimal</a></li>
                </ul>
              </div>
            </FadeIn>

            {/* Compartilhamento */}
            <FadeIn delay={0.9}>
              <div className="py-8 my-10 text-center border-t border-b border-gray-200">
                <h3 className="mb-6 text-xl font-bold text-gray-900">Compartilhe esta informação:</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={compartilharPagina}
                    className="flex items-center gap-3 px-6 py-3 text-white rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-blue-800"
                  >
                    <i className="fab fa-facebook-f"></i> Compartilhar
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={compartilharPagina}
                    className="flex items-center gap-3 px-6 py-3 text-white rounded-lg shadow-md bg-gradient-to-r from-cyan-500 to-blue-500"
                  >
                    <i className="fab fa-twitter"></i> Tweetar
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={compartilharPagina}
                    className="flex items-center gap-3 px-6 py-3 text-white bg-gray-800 rounded-lg shadow-md"
                  >
                    <FaShareAlt className="mr-1" /> {copied ? "Copiado!" : "Copiar link"}
                  </motion.button>
                </div>
              </div>
            </FadeIn>
          </div>
        </article>

        {/* Anúncio estilo Google Ads */}
        <FadeIn delay={1.0}>
          <aside className="max-w-4xl mx-auto mt-12 mb-8 overflow-hidden bg-white border border-gray-300 rounded-lg shadow-sm">
            <div className="flex items-start justify-between p-3 bg-gray-100">
              <div className="flex items-center">
                <span className="px-2 py-1 text-xs text-white bg-blue-500 rounded">
                  Anúncio
                </span>
                <span className="ml-2 text-xs text-gray-500">Patrocinado</span>
              </div>
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
                    Ração Pets - A Melhor Alimentação e Nutrição para Cães e ...
                  </h4>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-green-700">www.racaopets.com.br/</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Na Ração Pets, você encontra rações premium e super premium para cães e gatos, sem conservantes ou corantes. Garanta nutrição completa, preços acessíveis e ...
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4">
                  <div className="flex items-center justify-center w-32 h-24 text-gray-500 bg-gray-200 border-2 border-dashed rounded-xl">
                    <img
                      src="/snack-pe.png"
                      alt="Ração Snack Dog com batata doce"
                      className="object-contain w-full h-full"
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
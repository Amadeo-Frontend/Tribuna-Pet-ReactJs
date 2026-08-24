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
  FaCalendarAlt,
  FaClock,
  FaDog,
  FaCat,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaQuoteRight,
  FaCalendarCheck,
  FaShareAlt,
  FaFirstAid,
  FaHeartbeat,
  FaCity
} from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import ShareButton from "../components/ui/ShareButton";

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

export default function HospitalVeterinarioCuritiba() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") { const el = typeof window !== "undefined" ? document.getElementById("global-loader") : null; if (el) el.style.display = "none"; }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Seo
        title="Hospital Veterinário Municipal de Curitiba | Tribuna do Pet"
        description="Mais de 10 mil atendimentos em 5 meses: conheça o Hospital Veterinário Municipal de Curitiba"
        canonical="https://www.tribunadopet.com.br/novo-hospital-veterinario-curitiba"
        image="https://www.tribunadopet.com.br/hospital-veterinario-municipal-de-curitiba.jpg"
        published="2025-06-29"
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
            <Link href="/utilidade-publica" className="hover:underline">
              Utilidade Pública
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-300">
              Hospital Veterinário Municipal
            </span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Hospital Veterinário Municipal de Curitiba: 5 meses, 10 mil vidas
              e uma revolução no cuidado animal
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <FaCalendarAlt className="mr-2 text-primary" />
              29 de Junho, 2025
            </span>
            <span className="flex items-center">
              <FaClock className="mr-2 text-primary" />
              10 min de leitura
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
                <FaFirstAid  className="mr-1.5"/>{" "}
                Hospital Veterinário
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                <FaHeartbeat  className="mr-1.5"/>{" "}Saúde Animal
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-purple-800 bg-purple-100 rounded-full">
               <FaCity  className="mr-1.5"/>{" "} Curitiba
              </span>
            </div>

            <FadeIn delay={0.2}>
              <section className="mb-8">
                <p className="p-4 mb-6 text-xl font-medium text-gray-700 border-l-4 rounded-lg bg-gray-50 border-primary">
                  Em apenas cinco meses de operação, o Hospital Veterinário
                  Municipal de Curitiba já realizou
                  <strong> mais de 10 mil consultas gratuitas</strong> e{" "}
                  <strong>36 mil procedimentos</strong> - incluindo 1.300
                  cirurgias complexas - para cães e gatos de famílias
                  vulneráveis da capital paranaense.
                </p>
              </section>
            </FadeIn>

            {/* Imagem Principal */}
            <ScaleIn delay={0.3}>
              <div className="w-full mb-8">
                <img
                  src="https://www.tribunadopet.com.br/hospital-veterinario-municipal-de-curitiba.jpg"
                  alt="Hospital Veterinário Municipal de Curitiba"
                  className="object-cover w-full rounded-lg"
                />
                <div className="mt-2 text-sm italic text-gray-500">
                  Primeiro hospital público veterinário do Paraná localizado no
                  bairro Taboão
                </div>
              </div>
            </ScaleIn>

            {/* Um marco na saúde animal pública */}
            <FadeIn delay={0.4}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Um marco na saúde animal pública
                </h2>

                <p className="mb-6 text-gray-700">
                  Localizado no bairro Taboão, o primeiro hospital público
                  veterinário do Paraná está redefinindo o acesso à saúde animal
                  no Brasil. Com uma média de{" "}
                  <strong>100 atendimentos diários</strong>, o hospital opera
                  com capacidade total desde sua inauguração em janeiro de 2025,
                  priorizando famílias de baixa renda e protetores de animais
                  cadastrados.
                </p>

                <div className="p-6 mb-8 border-l-4 border-green-500 rounded-r-lg bg-green-50">
                  <h3 className="mb-3 text-xl font-bold text-green-800">
                    Destaque
                  </h3>
                  <p className="text-gray-700">
                    Com 40 profissionais, incluindo veterinários especializados
                    em 9 áreas (ortopedia, oncologia, odontologia e outras),
                    laboratório de patologia clínica e equipamentos de
                    diagnóstico por imagem, o hospital oferece atendimento
                    completo para animais de famílias vulneráveis.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Como funciona o hospital */}
            <FadeIn delay={0.5}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Como funciona o hospital
                </h2>

                <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
                  <div className="p-6 border-l-4 border-blue-500 rounded-lg bg-blue-50">
                    <h3 className="mb-3 text-lg font-bold text-blue-800">
                      Público-alvo
                    </h3>
                    <ul className="pl-6 space-y-2 list-disc">
                      <li>
                        Moradores de Curitiba cadastrados no{" "}
                        <strong>Programa Armazém da Família</strong> há mais de
                        6 meses
                      </li>
                      <li>Protetores independentes</li>
                      <li>
                        ONGs de proteção animal registradas na Rede de Proteção
                        Animal
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 border-l-4 border-green-500 rounded-lg bg-green-50">
                    <h3 className="mb-3 text-lg font-bold text-green-800">
                      Serviços oferecidos
                    </h3>
                    <ul className="pl-6 space-y-2 list-disc">
                      <li>
                        Consultas, cirurgias, exames e internações{" "}
                        <strong>100% gratuitos</strong>
                      </li>
                      <li>
                        Casos de emergência com risco de morte têm prioridade
                      </li>
                      <li>Horário: Segunda a sexta, das 8h às 17h</li>
                    </ul>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Impacto social em números */}
            <FadeIn delay={0.6}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Impacto social em números
                </h2>

                <div className="mb-8 overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-left text-gray-700">
                          Indicador
                        </th>
                        <th className="px-4 py-3 font-semibold text-left text-gray-700">
                          Valor
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 border-b">
                          Consultas realizadas
                        </td>
                        <td className="px-4 py-3 font-bold border-b">
                          10.000+
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 border-b">
                          Procedimentos totais
                        </td>
                        <td className="px-4 py-3 font-bold border-b">
                          36.000+
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 border-b">
                          Cirurgias complexas
                        </td>
                        <td className="px-4 py-3 font-bold border-b">1.300</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 border-b">
                          Capacidade diária
                        </td>
                        <td className="px-4 py-3 font-bold border-b">
                          50 animais
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </FadeIn>

            {/* Histórias que emocionam */}
            <FadeIn delay={0.7}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Histórias que emocionam
                </h2>

                <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
                  {/* História 1: Bela - Cadela com tumor mamário */}
                  <div className="p-6 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 mr-3 text-pink-800 bg-pink-100 rounded-full">
                        <FaDog className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">
                          Bela
                        </h3>
                        <p className="text-sm text-gray-500">SRD, 10 anos</p>
                      </div>
                    </div>

                    <p className="mb-3 text-gray-700">
                      Bela chegou ao hospital com um grande tumor mamário que
                      sua tutora, Maria, não tinha condições de tratar. Após
                      cirurgia de remoção e quimioterapia gratuitas, a cadela
                      está recuperada e sem sinais de câncer.
                    </p>

                    <div className="p-3 border-l-4 border-pink-400 rounded-lg bg-pink-50">
                      <p className="italic text-gray-800">
                        <FaQuoteLeft className="inline mr-1 text-pink-300" />
                        Passei noites em claro pensando que perderia minha
                        companheira de 10 anos. O hospital não só salvou a vida
                        dela como me deu apoio emocional durante todo o
                        tratamento.
                        <FaQuoteRight className="inline ml-1 text-pink-300" />
                      </p>
                      <p className="mt-1 text-sm text-right text-gray-600">
                        - Maria Silva, costureira
                      </p>
                    </div>
                  </div>

                  {/* História 2: Gatinho Dante - Resgate com fraturas múltiplas */}
                  <div className="p-6 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 mr-3 text-blue-800 bg-blue-100 rounded-full">
                        <FaCat className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">
                          Dante
                        </h3>
                        <p className="text-sm text-gray-500">Gato, 6 meses</p>
                      </div>
                    </div>

                    <p className="mb-3 text-gray-700">
                      Resgatado após cair do 3º andar de um prédio, Dante chegou
                      com múltiplas fraturas. A equipe de ortopedia realizou
                      cirurgia reconstrutiva e o gatinho recuperou totalmente os
                      movimentos.
                    </p>

                    <div className="p-3 border-l-4 border-blue-400 rounded-lg bg-blue-50">
                      <p className="italic text-gray-800">
                        <FaQuoteLeft className="inline mr-1 text-blue-300" />
                        Quando encontrei o Dante, pensei que ele não
                        sobreviveria. Fui orientada a levar ao hospital
                        municipal, onde ele recebeu tratamento de primeiro mundo
                        sem custo algum. Hoje é um gato saudável e feliz!
                        <FaQuoteRight className="inline ml-1 text-blue-300" />
                      </p>
                      <p className="mt-1 text-sm text-right text-gray-600">
                        - Ana Clara, protetora independente
                      </p>
                    </div>
                  </div>

                  {/* História 3: Rex - Cão com envenenamento */}
                  <div className="p-6 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 mr-3 text-green-800 bg-green-100 rounded-full">
                        <FaDog className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">Rex</h3>
                        <p className="text-sm text-gray-500">
                          Labrador, 5 anos
                        </p>
                      </div>
                    </div>

                    <p className="mb-3 text-gray-700">
                      Rex foi trazido às pressas após ingerir veneno de rato.
                      Após 3 dias internado na UTI com suporte vital contínuo, o
                      labrador se recuperou completamente, graças à rápida
                      intervenção da equipe.
                    </p>

                    <div className="p-3 border-l-4 border-green-400 rounded-lg bg-green-50">
                      <p className="italic text-gray-800">
                        <FaQuoteLeft className="inline mr-1 text-green-300" />
                        Cheguei desesperada no hospital, sem esperança e sem
                        dinheiro. Não só salvaram meu Rex como me acolheram
                        durante todo o processo. Esse hospital é um milagre para
                        quem ama animais!
                        <FaQuoteRight className="inline ml-1 text-green-300" />
                      </p>
                      <p className="mt-1 text-sm text-right text-gray-600">
                        - Carlos Eduardo, vigilante
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Como agendar uma consulta */}
            <FadeIn delay={0.8}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Como agendar uma consulta
                </h2>

                <div className="p-6 mb-8 rounded-lg bg-blue-50">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="step">
                      <div className="flex items-center justify-center w-8 h-8 mb-2 text-white rounded-full bg-primary">
                        1
                      </div>
                      <h3 className="mb-2 font-bold text-gray-800">
                        Cadastro obrigatório
                      </h3>
                      <p className="text-gray-600">
                        Registre-se no site da Rede de Proteção Animal com CPF e
                        comprovante de residência.
                      </p>
                    </div>

                    <div className="step">
                      <div className="flex items-center justify-center w-8 h-8 mb-2 text-white rounded-full bg-primary">
                        2
                      </div>
                      <h3 className="mb-2 font-bold text-gray-800">
                        Agendamento
                      </h3>
                      <p className="text-gray-600">
                        Toda segunda-feira, ao meio-dia, abrem novas vagas
                        quinzenais na seção "Eventos".
                      </p>
                    </div>

                    <div className="step">
                      <div className="flex items-center justify-center w-8 h-8 mb-2 text-white rounded-full bg-primary">
                        3
                      </div>
                      <h3 className="mb-2 font-bold text-gray-800">
                        Documentação
                      </h3>
                      <p className="text-gray-600">
                        No day of consultation, apresente RG, comprovante do
                        Armazém da Família e cartão de vacina do animal.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Especialidades disponíveis */}
            <FadeIn delay={0.9}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Especialidades disponíveis
                </h2>

                <div className="mb-8 overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-left text-gray-700">
                          Área
                        </th>
                        <th className="px-4 py-3 font-semibold text-left text-gray-700">
                          Serviços
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-bold border-b">
                          🦷 Odontologia
                        </td>
                        <td className="px-4 py-3 border-b">
                          Extrações, limpezas
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-bold border-b">
                          🦴 Ortopedia
                        </td>
                        <td className="px-4 py-3 border-b">
                          Fraturas, luxações
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-bold border-b">
                          🧠 Oncologia
                        </td>
                        <td className="px-4 py-3 border-b">
                          Quimioterapia, cirurgias
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-bold border-b">
                          👁 Oftalmologia
                        </td>
                        <td className="px-4 py-3 border-b">
                          Catarata, úlceras
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-bold border-b">
                          ❤ Cardiologia
                        </td>
                        <td className="px-4 py-3 border-b">Ecocardiogramas</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </FadeIn>

            {/* Desafios e futuro */}
            <FadeIn delay={1.0}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Desafios e futuro
                </h2>

                <p className="mb-6 text-gray-700">
                  Apesar do sucesso, a demanda supera a oferta:{" "}
                  <strong>as vagas se esgotam em minutos</strong>
                  toda segunda-feira. A prefeitura estuda ampliar o horário de
                  funcionamento e incluir sábados para atendimentos básicos.
                </p>

                <div className="p-6 mt-6 border-l-4 border-yellow-500 rounded-lg bg-yellow-50">
                  <h3 className="mb-3 text-xl font-bold text-yellow-800">
                    Endereço
                  </h3>
                  <p className="flex items-center text-gray-800">
                    <FaMapMarkerAlt className="mr-2" /> Rua Cesar Misael Chaves,
                    147, Taboão, Curitiba
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Por que este hospital é um exemplo nacional? */}
            <FadeIn delay={1.1}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Por que este hospital é um exemplo nacional?
                </h2>

                <ul className="pl-6 mb-8 space-y-2 list-disc">
                  <li>
                    <strong>Modelo inédito:</strong> Integra saúde animal e
                    política social, usando o mesmo sistema de agendamento das
                    UPAs humanas
                  </li>
                  <li>
                    <strong>Transparência:</strong> Todas as salas têm câmeras,
                    e os dados de atendimento são publicados mensalmente
                  </li>
                  <li>
                    <strong>Parceria estratégica:</strong> Gerido pela
                    Associação Catarinense CHC, com auditoria externa
                  </li>
                </ul>

                <div className="p-6 mb-8 border-l-4 border-blue-500 rounded-lg bg-blue-50">
                  <p className="mb-3 italic text-gray-700">
                    "O hospital não é um gasto, é um investimento em bem-estar
                    coletivo. Animais saudáveis significam comunidades mais
                    equilibradas"
                  </p>
                  <p className="font-bold text-gray-800">
                    - Secretaria Municipal do Meio Ambiente de Curitiba
                  </p>
                </div>

                <div className="flex justify-center my-10">
                  <a
                    href="https://www.curitiba.pr.gov.br/servicos/hospital-veterinario-municipal-de-curitiba/963"
                    className="flex items-center px-8 py-4 text-lg font-bold text-white transition duration-300 transform bg-green-600 rounded-full shadow-lg hover:bg-green-700 hover:scale-105"
                  >
                    <FaCalendarCheck className="mr-2 text-xl" />
                    AGENDAR CONSULTA
                  </a>
                </div>
              </section>
            </FadeIn>

            {/* Fontes Oficiais */}
            <FadeIn delay={1.2}>
              <div className="p-6 mt-8 rounded-lg bg-gray-50">
                <h3 className="mb-3 text-lg font-bold text-gray-800">
                  Fontes Oficiais
                </h3>
                <ul className="pl-6 space-y-2 list-disc">
                  <li>
                    Prefeitura Municipal de Curitiba - Hospital Veterinário
                    Municipal:{" "}
                    <a
                      href="https://www.curitiba.pr.gov.br/servicos/hospital-veterinario-municipal-de-curitiba/963"
                      className="text-primary hover:underline"
                    >
                      Acessar informações
                    </a>
                  </li>
                  <li>
                    Site da Rede de Proteção Animal:{" "}
                    <a
                      href="https://protecaoanimal.curitiba.pr.gov.br/"
                      className="text-primary hover:underline"
                    >
                      www.curitiba.pr.gov.br/redeanimal
                    </a>
                  </li>
                </ul>
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

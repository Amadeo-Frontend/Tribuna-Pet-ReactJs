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
  FaCalendarCheck,
  FaHeartbeat,
  FaFirstAid,
  FaCity,
  FaCheckCircle,
  FaSyringe,
  FaShieldAlt,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaDog,
  FaCat,
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

const citiesRMC = [
  "Araucária",
  "Campo Largo",
  "Campo Magro",
  "Fazenda Rio Grande",
  "Lapa",
  "Pinhais",
  "Rio Negro",
  "São José dos Pinhais",
];

const citiesLitoral = [
  "Antonina",
  "Guaratuba",
  "Matinhos",
  "Morretes",
  "Paranaguá",
  "Pontal do Paraná",
];

export default function VeterinarioGratuitoVetMovel() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
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
        title="Veterinário Gratuito para Pets Chega a 14 Cidades do Paraná: Veja Como Agendar no Vet-Móvel | Tribuna do Pet"
        description="O programa Vet-Móvel Paraná oferece consultas, vacinas polivalente e antirrábica, vermifugação e controle de parasitas de forma 100% gratuita. Confira as 14 cidades contempladas e saiba como agendar."
        canonical="https://www.tribunadopet.com.br/veterinario-gratuito-vet-movel-parana"
        image="https://www.tribunadopet.com.br/images/vet-movel-parana.jpg"
        published="2026-10-19"
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
              Vet-Móvel Paraná
            </span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Veterinário Gratuito para Pets Chega a 14 Cidades do Paraná: Confira Como Agendar no Vet-Móvel
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
            <span className="flex items-center">
              <FaCalendarAlt className="mr-2 text-primary" />
              19 de Outubro, 2026
            </span>
            <span className="flex items-center">
              <FaClock className="mr-2 text-primary" />
              4 min de leitura
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
                <FaFirstAid className="mr-1.5" /> Atendimento Gratuito
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-emerald-800 bg-emerald-100 rounded-full">
                <FaHeartbeat className="mr-1.5" /> Saúde Animal
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-amber-800 bg-amber-100 rounded-full">
                <FaCity className="mr-1.5" /> Paraná & RMC
              </span>
              <span className="flex items-center px-3 py-1.5 text-xs font-medium text-sky-800 bg-sky-100 rounded-full">
                <FaSyringe className="mr-1.5" /> Vacinação & Cuidados
              </span>
            </div>

            <FadeIn delay={0.2}>
              <section className="mb-8">
                <p className="p-4 mb-6 text-xl font-medium text-gray-700 border-l-4 rounded-lg bg-gray-50 border-primary">
                  O programa estadual <strong>Vet-Móvel Paraná</strong> iniciou uma nova rodada de
                  atendimentos veterinários gratuitos entre outubro e novembro de 2026. A ação contemplará{" "}
                  <strong>14 municípios da Região Metropolitana de Curitiba e do Litoral</strong>, com a
                  expectativa de realizar <strong>mais de 18 mil atendimentos</strong> para cães e gatos.
                </p>
              </section>
            </FadeIn>

            {/* Imagem Principal */}
            <ScaleIn delay={0.3}>
              <div className="w-full mb-8">
                <img
                  src="/images/vet-movel-parana.jpg"
                  alt="Unidade móvel do programa Vet-Móvel Paraná realizando atendimento veterinário gratuito"
                  className="object-cover w-full rounded-xl shadow-md max-h-[500px]"
                />
                <div className="mt-2 text-xs text-center text-gray-500 italic">
                  Atendimentos veterinários no Vet-Móvel são realizados com agendamento prévio e sem custo para a população (Foto: Divulgação / IAT / AEN)
                </div>
              </div>
            </ScaleIn>

            {/* O que é o Vet-Móvel */}
            <FadeIn delay={0.4}>
              <section className="mb-10">
                <h2 className="pb-2 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  O que é o programa Vet-Móvel Paraná?
                </h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Coordenado pela <strong>Superintendência-Geral de Proteção Animal (SGPA)</strong>,
                  vinculada à <strong>Secretaria de Estado do Desenvolvimento Sustentável (Sedest)</strong> e
                  ao <strong>Instituto Água e Terra (IAT)</strong>, o Vet-Móvel é uma unidade itinerante que
                  leva cuidados básicos de saúde veterinária diretamente aos bairros e cidades do Paraná.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  O programa visa democratizar o acesso à medicina veterinária preventiva, aliviando o
                  orçamento das famílias e combatendo o avanço de zoonoses. Desde a sua estreia em maio deste
                  ano, a caravana já prestou <strong>mais de 55 mil atendimentos em 35 municípios paranaenses</strong>.
                  Esta nova fase é uma grande oportunidade para tutores que não conseguiram vaga na primeira chamada.
                </p>

                <div className="p-6 my-6 border-l-4 border-emerald-500 rounded-r-xl bg-emerald-50/80">
                  <h3 className="mb-2 text-lg font-bold text-emerald-900 flex items-center">
                    <FaCheckCircle className="mr-2 text-emerald-600" /> Totalmente Gratuito e Sem Burocracia
                  </h3>
                  <p className="text-gray-700">
                    O atendimento é <strong>100% gratuito</strong> e <strong>não exige comprovação de renda</strong>.
                    Qualquer tutor residente nos municípios participantes pode inscrever seus animais, desde
                    que realize o agendamento prévio com horário marcado pelo portal oficial.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Serviços Oferecidos */}
            <FadeIn delay={0.5}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Quais serviços são oferecidos no Vet-Móvel?
                </h2>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="p-5 border border-blue-100 rounded-xl bg-blue-50/70 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 text-white rounded-lg bg-blue-600">
                        <FaSyringe />
                      </div>
                      <h3 className="text-lg font-bold text-blue-900">Vacinação Preventiva</h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Aplicação de vacinas essenciais como <strong>antirrábica</strong> e <strong>polivalente</strong>{" "}
                      (conforme disponibilidade de estoque de cada dia de atendimento), blindando seu melhor amigo contra doenças graves e fatais.
                    </p>
                  </div>

                  <div className="p-5 border border-emerald-100 rounded-xl bg-emerald-50/70 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 text-white rounded-lg bg-emerald-600">
                        <FaHeartbeat />
                      </div>
                      <h3 className="text-lg font-bold text-emerald-900">Avaliação Clínica Geral</h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Exame físico completo realizado por médicos-veterinários capacitados para checar estado geral, olhos, ouvidos, dentes, frequência cardíaca e peso.
                    </p>
                  </div>

                  <div className="p-5 border border-amber-100 rounded-xl bg-amber-50/70 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 text-white rounded-lg bg-amber-600">
                        <FaShieldAlt />
                      </div>
                      <h3 className="text-lg font-bold text-amber-900">Vermifugação e Antiparasitários</h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Controle e prevenção de parasitas internos (vermes) e externos (pulgas e carrapatos), protegendo a saúde da família inteira e evitando anemia e dermatites.
                    </p>
                  </div>

                  <div className="p-5 border border-purple-100 rounded-xl bg-purple-50/70 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 text-white rounded-lg bg-purple-600">
                        <FaInfoCircle />
                      </div>
                      <h3 className="text-lg font-bold text-purple-900">Guarda Responsável e Orientação</h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Tira-dúvidas com especialistas sobre nutrição adequada, identificação de sintomas de dor, castração pelo CastraPet e boas práticas de manejo diário.
                    </p>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* As 14 Cidades Contempladas */}
            <FadeIn delay={0.6}>
              <section className="mb-10">
                <h2 className="pb-2 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Confira as 14 cidades paranaenses atendidas nesta etapa
                </h2>
                <p className="mb-6 text-gray-700">
                  Os atendimentos itinerantes serão divididos entre os municípios da Região Metropolitana
                  de Curitiba (RMC) e do Litoral paranaense:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Região Metropolitana de Curitiba */}
                  <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                    <div className="flex items-center mb-4">
                      <FaCity className="text-xl text-primary mr-2" />
                      <h3 className="text-lg font-bold text-gray-900">
                        Região Metropolitana de Curitiba (8 cidades)
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {citiesRMC.map((city, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                          <FaCheckCircle className="text-emerald-500 mr-2 shrink-0" />
                          <span className="font-semibold">{city}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Litoral Paranaense */}
                  <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                    <div className="flex items-center mb-4">
                      <FaMapMarkerAlt className="text-xl text-sky-600 mr-2" />
                      <h3 className="text-lg font-bold text-gray-900">
                        Litoral do Paraná (6 cidades)
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {citiesLitoral.map((city, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                          <FaCheckCircle className="text-sky-500 mr-2 shrink-0" />
                          <span className="font-semibold">{city}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Passo a Passo para Agendamento */}
            <FadeIn delay={0.7}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Passo a passo: Como agendar o atendimento do seu pet
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start p-4 bg-white border border-gray-200 rounded-xl shadow-xs">
                    <div className="flex items-center justify-center w-8 h-8 mr-4 font-bold text-white rounded-full bg-primary shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Acesse o portal oficial</h4>
                      <p className="text-sm text-gray-600">
                        Entre no site oficial do programa pelo endereço{" "}
                        <a
                          href="https://www.vetmovelparana.com.br"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-semibold underline"
                        >
                          www.vetmovelparana.com.br
                        </a>{" "}
                        pelo celular ou computador.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white border border-gray-200 rounded-xl shadow-xs">
                    <div className="flex items-center justify-center w-8 h-8 mr-4 font-bold text-white rounded-full bg-primary shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Escolha seu município</h4>
                      <p className="text-sm text-gray-600">
                        Localize sua cidade na lista suspensa para verificar as datas de permanência da van veterinária e os pontos de parada.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white border border-gray-200 rounded-xl shadow-xs">
                    <div className="flex items-center justify-center w-8 h-8 mr-4 font-bold text-white rounded-full bg-primary shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Selecione data e horário</h4>
                      <p className="text-sm text-gray-600">
                        Escolha um horário vago que se encaixe na sua rotina. É recomendado reservar o quanto antes, pois as vagas costumam se esgotar rapidamente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white border border-gray-200 rounded-xl shadow-xs">
                    <div className="flex items-center justify-center w-8 h-8 mr-4 font-bold text-white rounded-full bg-primary shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Cadastre o seu animal</h4>
                      <p className="text-sm text-gray-600">
                        Informe nome, espécie (cão ou gato), raça aproximada, idade estimada e seus dados de contato como tutor. Guarde o comprovante gerado.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Botão de Ação CTA */}
                <div className="flex justify-center my-8">
                  <a
                    href="https://www.vetmovelparana.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 text-base md:text-lg font-bold text-white transition duration-300 transform bg-emerald-600 rounded-full shadow-lg hover:bg-emerald-700 hover:scale-105 active:scale-95"
                  >
                    <FaCalendarCheck className="mr-3 text-xl" />
                    AGENDAR CONSULTA NO SITE OFICIAL
                    <FaExternalLinkAlt className="ml-2 text-sm opacity-80" />
                  </a>
                </div>
              </section>
            </FadeIn>

            {/* Recomendações para o Dia do Atendimento */}
            <FadeIn delay={0.8}>
              <section className="mb-10">
                <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
                  Cuidados importantes para o dia da consulta
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/60 flex items-start">
                    <FaDog className="text-2xl text-amber-700 mr-3 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-900 text-sm mb-1">Para Cães</h4>
                      <p className="text-xs text-amber-800 leading-relaxed">
                        Leve sempre o animal com coleira e guia seguras. Animais de grande porte ou de temperamento reativo devem obrigatoriamente usar focinheira adequada.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-sky-200 bg-sky-50/60 flex items-start">
                    <FaCat className="text-2xl text-sky-700 mr-3 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sky-900 text-sm mb-1">Para Gatos</h4>
                      <p className="text-xs text-sky-800 leading-relaxed">
                        Transporte sempre os felinos em caixas de transporte ventiladas e travadas. Nunca leve gatos soltos no colo ou em caixas de papelão frouxas.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start">
                    <FaClock className="text-2xl text-slate-600 mr-3 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Pontualidade</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Chegue com 10 a 15 minutos de antecedência ao local indicado no agendamento para evitar atrasos na fila e perda da sua vaga.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start">
                    <FaNotesMedical className="text-2xl text-slate-600 mr-3 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Documentos do Pet</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Leve documento com foto do tutor maior de 18 anos e a carteirinha de vacinação anterior do pet, caso você a possua.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Importância para a Saúde Única */}
            <FadeIn delay={0.9}>
              <section className="mb-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <FaShieldAlt className="mr-2 text-blue-600" /> Prevenção e Saúde Pública Integrada
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-3">
                  Iniciativas como o Vet-Móvel e o CastraPet fortalecem o conceito de <strong>Saúde Única (One Health)</strong>,
                  reconhecendo a conexão indissociável entre a saúde animal, a saúde humana e o meio ambiente.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Ao vacinar contra a raiva e controlar parasitas que transmitem doenças como a leishmaniose e verminoses,
                  o programa protege não apenas os pets, mas também as famílias paranaenses e toda a comunidade.
                </p>
              </section>
            </FadeIn>

            {/* Fontes Oficiais e Referência */}
            <FadeIn delay={1.0}>
              <div className="p-6 mt-8 rounded-xl bg-gray-50 border border-gray-200">
                <h3 className="mb-3 text-base font-bold text-gray-800 flex items-center">
                  <FaInfoCircle className="mr-2 text-primary" /> Fontes e Matéria de Referência
                </h3>
                <ul className="pl-6 space-y-2 text-sm text-gray-700 list-disc">
                  <li>
                    <strong>Massa.com.br:</strong>{" "}
                    <a
                      href="https://massa.com.br/servicos-informacoes-uteis/vet-movel-parana/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      Veterinário gratuito para pets chega a 14 cidades do Paraná
                    </a>{" "}
                    <span className="text-xs text-gray-500">(por Mirella Erdmann com Agência Estadual de Notícias)</span>
                  </li>
                  <li>
                    <strong>Link fornecido pelo leitor:</strong>{" "}
                    <a
                      href="https://share.google/NfotDB0c09fj1Xu9V"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      https://share.google/NfotDB0c09fj1Xu9V
                    </a>
                  </li>
                  <li>
                    <strong>Agência Estadual de Notícias (AEN):</strong>{" "}
                    <a
                      href="https://www.aen.pr.gov.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Portal Oficial de Notícias do Governo do Paraná
                    </a>
                  </li>
                  <li>
                    <strong>Agendamentos do Programa:</strong>{" "}
                    <a
                      href="https://www.vetmovelparana.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-semibold"
                    >
                      www.vetmovelparana.com.br
                    </a>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Compartilhamento */}
            <div className="mt-8">
              <ShareButton />
            </div>
          </div>
        </article>

        {/* Anúncio estilo Google Ads */}
        <FadeIn delay={1.2}>
          <AdBanner />
        </FadeIn>
      </main>

      <Footer />
    </>
  );
}

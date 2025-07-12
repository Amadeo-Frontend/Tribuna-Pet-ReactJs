import { useState } from "react";
import { Link } from "react-router-dom";
import LiveClock from "../../components/LiveClock";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import NewsletterForm from "../../components/Newsletter/NewsletterForm";

export default function CuidadosComPetsNoInverno() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* ✅ simples share via navigator API */
  function compartilharPagina() {
    if (navigator.share) {
      navigator.share({
        title: "Cuidados com pets no inverno – Tribuna do Pet",
        url: window.location.href,
      });
    } else {
      alert("Copie o link na barra de endereços para compartilhar! 😊");
    }
  }

  return (
    <>
      {/* SEO */}
      <Seo
        title="Cuidados com pets no inverno | Tribuna do Pet"
        description="Guia essencial para proteger cães e gatos das baixas temperaturas – sinais de hipotermia, roupinhas, ambiente aquecido e mais."
        canonical="https://www.tribunadopet.com.br/cuidados-com-pets-no-inverno"
        image="/images/og-image.jpg"
      />

      {/* Top bar (desktop only) */}
            <div className="hidden py-2 text-white bg-gray-800 sm:block">
              <div className="container flex items-center justify-between px-4 mx-auto text-sm">
                <span>Seu portal de informações para seu pet!</span>
      
                {/* relógio ao vivo */}
                <LiveClock />
              </div>
            </div>
      {/* Overlay + menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <Header onToggleMenu={() => setMenuOpen(true)} />

      {/* Breadcrumb + título */}
      <div className="py-6 bg-gray-100 border-b">
        <div className="container px-4 mx-auto">
          <nav className="mb-2 space-x-1 text-sm text-gray-600">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>&gt;</span>
            <Link
              to="/cuidados-com-pets-no-inverno"
              className="hover:underline"
            >
              Cuidados Diários
            </Link>
            <span>&gt;</span>
            <span className="font-medium text-gray-900">
              Cuidados com pets no inverno
            </span>
          </nav>
          <h1 className="text-3xl font-bold md:text-4xl text-primary">
            Cuidados com pets no inverno
          </h1>
          <div className="flex items-center mt-2 space-x-6 text-sm text-gray-500">
            <span>
              <i className="mr-1 far fa-calendar" /> 13 de Junho, 2025
            </span>
            <span>
              <i className="mr-1 far fa-clock" /> 4 min de leitura
            </span>
          </div>
        </div>
      </div>

      {/* Artigo */}
      <main className="container px-4 py-10 mx-auto">
        <article className="max-w-5xl p-6 mx-auto prose prose-lg bg-white shadow-lg rounded-xl md:p-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
              Cuidados
            </span>
            <span className="px-3 py-1 text-xs font-medium text-white bg-blue-700 rounded-full">
              Saúde
            </span>
            <span className="px-3 py-1 text-xs font-medium text-white bg-black rounded-full">
              Inverno
            </span>
          </div>

          {/* Capa */}
          <figure className="mb-4">
            <img
              src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=1200&q=80"
              alt="Cachorro usando roupinha no inverno"
              className="w-full rounded-lg"
            />
            <figcaption className="mt-2 text-sm text-center text-gray-600">
              Proteção térmica é essencial para raças de pelo curto e animais
              idosos durante o frio
            </figcaption>
          </figure>

          <p className="lead">
            Com a chegada do inverno, os termômetros despencam e nossos pets
            enfrentam desafios semelhantes aos humanos. Raças de pelo curto,
            filhotes e animais idosos são especialmente vulneráveis às baixas
            temperaturas. Neste guia essencial, reunimos as orientações de
            especialistas para proteger cães e gatos dos riscos do clima frio,
            desde sinais de hipotermia até ajustes na rotina de cuidados.
          </p>

          <h2>Por que o inverno exige cuidados especiais com pets?</h2>
          <p>
            Assim como humanos, cães e gatos sofrem com temperaturas baixas e
            podem desenvolver doenças respiratórias, articulares e problemas
            dermatológicos durante o inverno. A sensibilidade ao frio varia
            conforme porte, idade e características da pelagem. Animais idosos,
            filhotes e raças braquicefálicas (como Pugs e Bulldogs) estão entre
            os grupos mais vulneráveis.
          </p>

          <blockquote>
            "Animais menores tendem a sentir mais frio que os maiores. Raças
            como Chihuahua, Dachshund e Galgos são especialmente sensíveis,
            enquanto Huskies e Chow-chows têm maior resistência" – explica o
            veterinário Bruno Alvarenga.
          </blockquote>

          <h2>7 Estratégias para proteger seu pet do frio</h2>
          <h3>1. Otimize o ambiente de descanso</h3>
          <p>
            O local de dormir deve ser elevado do chão, protegido de correntes
            de ar e forrado com cobertores ou almofadas térmicas. Para animais
            que dormem ao ar livre, casinhas com isolamento térmico são
            essenciais. Em regiões muito frias, considere aquecedores ambientais
            (com proteção contra queimaduras).
          </p>

          <figure>
            <img
              src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80"
              alt="Cama aquecida para gato"
              className="w-full rounded-lg"
            />
            <figcaption className="mt-2 text-sm text-center text-gray-600">
              Camas elevadas com cobertores térmicos ajudam a manter a
              temperatura corporal
            </figcaption>
          </figure>

          <h3>2. Use roupas estrategicamente</h3>
          <p>
            Roupinhas são recomendadas para raças de pelo curto, filhotes e
            idosos, mas devem permitir movimentos naturais e não reter umidade.
            Tecidos respiráveis como algodão são ideais. Observe se o pet
            demonstra desconforto e remova a peça caso necessário.
          </p>

          <h3>3. Ajuste a rotina de banhos</h3>
          <p>
            Reduza a frequência de banhos no inverno (idealmente 1x/mês) e
            utilize água morna. Secagem completa é obrigatória para prevenir
            doenças respiratórias e de pele. Prefira profissionais em pet shops
            que tenham equipamentos adequados para secagem eficiente.
          </p>

          <h3>4. Adapte os passeios</h3>
          <p>
            Realize caminhadas nos horários mais quentes (10h‑15h) e evite dias
            chuvosos. Para animais sensíveis, utilize botinhas protetoras contra
            o frio do chão e reduza o tempo ao ar livre em dias muito gelados.
          </p>

          <h3>5. Monitore alimentação e hidratação</h3>
          <p>
            Consulte um veterinário sobre possível aumento calórico (10–20%)
            para animais que sentem muito frio. Ofereça água fresca
            frequentemente, pois pets bebem menos no inverno. Alimentos úmidos
            podem ajudar na hidratação.
          </p>

          <h3>6. Mantenha vacinas em dia</h3>
          <p>
            O inverno aumenta a incidência de doenças respiratórias como "tosse
            dos canis" e gripe felina. Verifique a carteira de vacinação,
            especialmente para animais idosos ou com saúde frágil.
          </p>

          <h3>7. Cuidados especiais com gatos</h3>
          <p>
            Gatos buscam naturalmente fontes de calor – cuidado com aquecedores!
            Ofereça tocas acolchoadas e evite correntes de ar. Raças sem pelo,
            como Sphynx, exigem atenção redobrada com agasalhos.
          </p>

          {/* Destaque hipotermia */}
          <aside className="p-6 my-8 border-l-4 border-yellow-400 rounded-r-lg bg-yellow-50">
            <h3 className="mb-3 text-xl font-bold">
              Sinais de hipotermia em pets
            </h3>
            <ul className="pl-6 space-y-1 list-disc">
              <li>Tremores persistentes</li>
              <li>Orelhas e extremidades geladas</li>
              <li>Respiração lenta e superficial</li>
              <li>Movimentos rígidos e letargia</li>
              <li>Sonolência excessiva</li>
            </ul>
            <p className="mt-4 font-medium">O que fazer:</p>
            <p>
              Aqueça gradativamente com cobertores e aquecedores ambientais.
              Nunca use água quente diretamente! Caso os sintomas persistam,
              procure imediatamente um veterinário.
            </p>
          </aside>

          {/* Share */}
          <div className="py-8 my-8 text-center border-t border-b border-gray-200">
            <h3 className="mb-4 text-lg font-bold">Compartilhe este artigo:</h3>
            <button
              onClick={compartilharPagina}
              className="flex items-center gap-2 px-6 py-3 mx-auto text-white rounded-lg bg-secondary"
            >
              <i className="fas fa-share" /> Compartilhar
            </button>
          </div>
        </article>

        {/* Banner ads simplificado */}
        <aside
          className="container max-w-4xl px-4 py-8 mx-auto"
          data-aos="fade-up"
        >
          <a
            href="https://www.racaopets.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border border-gray-200 rounded-lg bg-gradient-to-b from-gray-50 to-gray-100"
          >
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex-1 mb-4 md:mb-0 md:pr-6">
                <span className="flex items-center justify-end text-xs text-gray-500">
                  Anúncio
                </span>
                <div className="mb-1 text-lg font-medium text-blue-800">
                  Ração Pets – Nutrição premium para cães e gatos
                </div>
                <div className="mb-2 text-sm text-green-700">
                  www.racaopets.com.br
                </div>
                <p className="text-sm text-gray-700">
                  Rações premium e super premium sem conservantes ou corantes.
                  Garanta nutrição completa a preços acessíveis.
                </p>
              </div>
              <img
                src="/LUNCH15SEGUNDA.png"
                alt="Ração Lunch dog 15 kg"
                className="object-contain w-32 h-24"
              />
            </div>
          </a>
        </aside>
      </main>

      <Footer />
    </>
  );
}

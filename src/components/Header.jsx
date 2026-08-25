"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBars } from '@fortawesome/free-solid-svg-icons';
import SmartSearchBar from "./SmartSearchBar";

export default function Header({ onToggleMenu }) {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* logo */}
          <a href="/" className="flex items-center group shrink-0">
            <div className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 mr-2 sm:mr-3 text-white rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <FontAwesomeIcon icon={faPaw} className="text-base sm:text-xl" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-primary leading-none">
                Tribuna do<span className="text-secondary"> Pet</span>
              </h1>
              <span className="text-[9px] sm:text-[11px] uppercase tracking-wider text-sky-600 font-bold block mt-1">
                INFORMAÇÕES PARA QUEM AMA ANIMAIS
              </span>
            </div>
          </a>

          {/* Barra de Pesquisa Inteligente exclusiva para Desktop (lg+) posicionada à direita perto do menu */}
          <div className="hidden lg:flex items-center justify-end flex-1 max-w-sm ml-auto mr-4">
            <SmartSearchBar isHeader={true} />
          </div>

          {/* Botão de Menu Estilizado Responsivo */}
          <button
            onClick={onToggleMenu}
            aria-label="Abrir menu de navegação"
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-gray-700 bg-slate-100/90 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 hover:border-blue-200 rounded-xl transition-all duration-300 shadow-xs active:scale-95 group shrink-0 ml-2"
          >
            <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <FontAwesomeIcon icon={faBars} className="text-[11px] sm:text-xs" />
            </div>
            <span className="tracking-wide hidden xs:inline sm:inline">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

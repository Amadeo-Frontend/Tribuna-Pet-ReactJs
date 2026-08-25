import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header({ onToggleMenu }) {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* logo */}
          <a href="/" className="flex items-center group">
            <div className="flex items-center justify-center w-11 h-11 mr-3 text-white rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <FontAwesomeIcon icon={faPaw} className="text-xl" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-primary">
                Tribuna do<span className="text-secondary"> Pet</span>
              </h1>
              <span className="text-[11px] uppercase tracking-wider text-sky-600 font-bold block">
                INFORMAÇÕES PARA QUEM AMA ANIMAIS
              </span>
            </div>
          </a>

          {/* hamburger */}
          <button
            onClick={onToggleMenu}
            className="flex flex-col items-center text-2xl text-gray-600 hover:text-primary"
          >
            <FontAwesomeIcon icon={faBars} />
            <span className="text-sm">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

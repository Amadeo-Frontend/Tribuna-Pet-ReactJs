import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header({ onToggleMenu }) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* logo */}
          <a href="/" className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 mr-3 text-white rounded-lg bg-primary">
              <FontAwesomeIcon icon={faPaw} className="text-2xl"/>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary">
                Tribuna do<span className="text-secondary"> Pet</span>
              </h1>
              <p className="text-xs text-gray-600 md:text-sm">
                Informações para quem ama animais
              </p>
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

import { useState } from "react";

export default function Header({ onToggleMenu }) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* logo */}
          <a href="/" className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 mr-3 text-white rounded-lg bg-primary">
              <i className="text-2xl fas fa-paw" />
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
            <i className="fas fa-bars" />
            <span className="text-sm">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

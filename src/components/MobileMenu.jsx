"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronDown,
  faHome,
  faBowlFood,
  faKitMedical,
  faHeartPulse,
  faTag,
  faPaw
} from "@fortawesome/free-solid-svg-icons";

/* Variantes da gaveta */
const overlayV = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const panelV = {
  hidden: { x: "-100%" },
  visible: { x: 0, transition: { type: "spring", damping: 28, stiffness: 280 } },
  exit: { x: "-100%", transition: { duration: 0.25 } },
};
const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};
const itemV = {
  hidden: { x: -16, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 350, damping: 25 },
  },
};

/* Accordion item refinado */
function Accordion({ label, icon, badgeColor, links, onClose }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.li variants={itemV} className="border-b border-slate-800/80 last:border-none">
      <button
        className="flex items-center justify-between w-full py-3.5 px-3 text-slate-200 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-200 group"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center gap-3 font-semibold text-sm">
          <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${badgeColor} text-white shadow-sm group-hover:scale-105 transition-transform`}>
            <FontAwesomeIcon icon={icon} className="text-xs" />
          </div>
          {label}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-slate-400 text-xs"
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            key="sub"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="ml-5 pl-4 border-l border-sky-500/30 my-1 space-y-1 overflow-hidden"
          >
            {links.map(([href, text]) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className="block py-2 px-2.5 text-xs text-slate-400 hover:text-sky-400 hover:bg-slate-800/40 rounded-lg transition-colors font-medium"
                >
                  {text}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Fundo de desfoque escuro */}
          <motion.div
            variants={overlayV}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Painel lateral do Menu */}
          <motion.aside
            variants={panelV}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 z-50 flex flex-col w-[85%] max-w-xs h-full bg-slate-900 text-white shadow-2xl border-r border-slate-800"
          >
            {/* Header do menu no mesmo estilo do logo */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-9 h-9 mr-2.5 text-white rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 shadow-md shadow-blue-500/20">
                  <FontAwesomeIcon icon={faPaw} className="text-sm" />
                </div>
                <div>
                  <h2 className="text-base font-extrabold tracking-tight text-white">Tribuna do Pet</h2>
                  <span className="text-[9px] uppercase tracking-wider text-sky-400 font-bold block">Navegação</span>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Fechar menu"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} className="text-base" />
              </button>
            </div>

            {/* Links e Categorias */}
            <motion.nav
              variants={listV}
              initial="hidden"
              animate="visible"
              className="flex-1 p-4 overflow-y-auto space-y-1"
            >
              <motion.div variants={itemV} className="mb-2">
                <Link
                  href="/"
                  onClick={onClose}
                  className="flex items-center gap-3 py-3 px-3 font-semibold text-sm text-slate-200 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400">
                    <FontAwesomeIcon icon={faHome} className="text-xs" />
                  </div>
                  Página Inicial
                </Link>
              </motion.div>

              <Accordion
                label="Alimentação Saudável"
                icon={faBowlFood}
                badgeColor="bg-emerald-500/20 text-emerald-400"
                onClose={onClose}
                links={[
                  ["/alimentacao-saudavel", "Guia Completo: Alimentação Saudável"],
                  ["/melhor-racao-para-pitbull-e-caes-ativos", "Melhor Ração para Pitbull 2026"],
                  ["/alimentacao-saudavel-e-inteligente", "Alimentação Saudável e Inteligente"],
                  ["/batata-doce-nutricao-canina", "Batata-doce na Nutrição Canina"],
                  ["/melhor-racao-para-filhotes", "Melhor Ração para Filhotes"],
                ]}
              />

              <Accordion
                label="Cuidados Diários"
                icon={faKitMedical}
                badgeColor="bg-blue-500/20 text-blue-400"
                onClose={onClose}
                links={[
                  ["/cuidados-com-pets-no-inverno", "Inverno: cuidados essenciais"],
                  ["/primeiros-socorros-para-pets", "Primeiros socorros para pets"],
                ]}
              />

              <Accordion
                label="Utilidade Pública"
                icon={faHeartPulse}
                badgeColor="bg-purple-500/20 text-purple-400"
                onClose={onClose}
                links={[
                  ["/vagas-para-castracao-gratuita", "Castração Gratuita 2026"],
                  ["/novo-hospital-veterinario-curitiba", "Novo Hosp. Vet. Curitiba"],
                  ["/ferramenta-encontre-seu-pet", "Ferramenta encontre seu pet"],
                ]}
              />

              <Accordion
                label="Cupons e Promoções"
                icon={faTag}
                badgeColor="bg-amber-500/20 text-amber-400"
                onClose={onClose}
                links={[
                  ["/cupom-petz", "Cupom de Desconto Petz"],
                  ["/cupom-indica-aumigo", "Cupom Indica Aumigo"],
                ]}
              />
            </motion.nav>

            {/* Rodapé do Menu com atalho para Sobre Nós */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/50">
              <Link
                href="/sobre-nos"
                onClick={onClose}
                className="block text-center py-2.5 px-4 text-xs font-bold text-sky-400 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 rounded-xl transition-all"
              >
                Conheça a História do Tribuna do Pet 🐾
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}


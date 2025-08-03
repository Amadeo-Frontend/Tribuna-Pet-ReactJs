import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* ícones regular */
import {
  faCircleXmark,
  faCircleDown,
} from "@fortawesome/free-regular-svg-icons";

/* ícones solid (não existem em regular) */
import {
  faBowlFood,
  faHomeAlt,
  faKitMedical,
  faTags,
  faTicket,
  faTreeCity
} from "@fortawesome/free-solid-svg-icons";
import { MdPrivacyTip } from "react-icons/md";
import { FaTags } from "react-icons/fa";

/* variantes */
const overlayV = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const panelV = {
  hidden: { x: "-100%" },
  visible: { x: 0, transition: { type: "tween", duration: 0.4 } },
  exit: { x: "-100%", transition: { type: "tween", duration: 0.3 } },
};
const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};
const itemV = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 350, damping: 30 },
  },
};

/* Accordion item */
function Accordion({ label, icon, links, onClose }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.li variants={itemV} className="border-t first:border-none">
      <button
        className="flex items-center justify-between w-full py-4 font-medium text-gray-800 hover:text-primary"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center gap-3">
          <FontAwesomeIcon icon={icon} className="text-primary"/> {label}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <FontAwesomeIcon icon={faCircleDown} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            key="sub"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="ml-6 space-y-3 overflow-hidden text-sm list-disc"
          >
            {links.map(([href, text]) => (
              <li key={href} className="py-1 rounded-md hover:bg-slate-100 hover:shadow-inner hover:text-primary hover:mx-1">
                <Link to={href} onClick={onClose}>
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
          <motion.div
            variants={overlayV}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.aside
            variants={panelV}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 z-50 flex flex-col w-4/5 h-full max-w-xs bg-white shadow-2xl rounded-tr-2xl rounded-br-2xl"
          >
            {/* Header do menu */}
            <motion.div
              variants={itemV}
              className="flex items-center justify-between p-4 border-b bg-primary"
            >
              <h2 className="text-lg font-bold text-gray-200">Menu</h2>
              <button
                onClick={onClose}
                aria-label="Fechar menu"
                className="text-2xl text-gray-700 transition-colors hover:text-primary"
              >
                <FontAwesomeIcon icon={faCircleXmark}  className="text-gray-400 hover:text-gray-500"/>
              </button>
            </motion.div>

            {/* Links */}
            <motion.nav
              variants={listV}
              initial="hidden"
              animate="visible"
              className="flex-1 p-4 mb-2 overflow-y-auto"
            >
              <motion.li variants={itemV} className="mb-4 list-none">
                <Link
                  to="/"
                  onClick={onClose}
                  className="flex items-center gap-3 font-medium text-gray-800 hover:text-primary"
                >
                  <FontAwesomeIcon icon={faHomeAlt} /> Home
                </Link>
              </motion.li>

              <Accordion
                label="Alimentação Saudável"
                icon={faBowlFood}
                onClose={onClose}
                links={[
                  [
                    "/alimentacao-saudavel",
                    "Guia Completo: Alimentação Saudável",
                  ],
                  [
                    "/alimentacao-saudavel-e-inteligente",
                    "Alimentação Saudável e Inteligente",
                  ],
                  [
                    "/batata-doce-nutricao-canina",
                    "Batata-doce na Nutrição Canina",
                  ],
                ]}
              />

              <Accordion
                label="Cuidados Diários"
                icon={faKitMedical}
                onClose={onClose}
                links={[
                  [
                    "/cuidados-com-pets-no-inverno",
                    "Inverno: cuidados essenciais",
                  ],
                  ["/primeiros-socorros-para-pets", "Primeiros socorros para pets"],
                ]}
              />

              <Accordion
                label="Utilidade Pública"
                icon={faTreeCity}
                onClose={onClose}
                links={[
                  ["/vagas-para-castracao-gratuita", "Castração Gratuita 2025"],
                  [
                    "/novo-hospital-veterinario-curitiba",
                    "Novo Hosp. Vet. Curitiba",
                  ],
                  ["/rastreamento-de-pets", "Como localizar animais desaparecidos"],
                ]}
              />
              <Accordion
                label="Cupons e Promoções"
                icon={faTags}
                onClose={onClose}
                links={[
                  ["/cupom-petz", "Cupom de descontos Petz"],
                ]}
              />
            </motion.nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

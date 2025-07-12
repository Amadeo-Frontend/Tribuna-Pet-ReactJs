import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileMenu({ open, onClose }) {
  /* trava o scroll quando o menu está visível */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  /* animação de slide */
  const panel = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* overlay */}
          <motion.div
            key="overlay"
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* painel */}
          <motion.aside
            key="panel"
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed top-0 left-0 z-50 flex flex-col w-4/5 h-full max-w-xs bg-white shadow-2xl rounded-tr-2xl rounded-br-2xl"
          >
            {/* cabeçalho */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold tracking-wide">Menu</h2>
              {/* X grandão e clicável */}
              <button
                onClick={onClose}
                aria-label="Fechar menu"
                className="text-3xl leading-none text-gray-700 transition-colors hover:text-primary"
              >
                &times;
              </button>
            </div>

            {/* navegação */}
            <nav className="flex-1 p-4 overflow-y-auto">
              <ul className="space-y-4">
                {/* link simples */}
                <li>
                  <Link
                    to="/"
                    onClick={onClose}
                    className="flex items-center gap-3 font-medium text-gray-800 hover:text-primary"
                  >
                    <i className="fas fa-house" /> Home
                  </Link>
                </li>

                {/* grupo – acordeão */}
                <li className="border-b last:border-none">
                  <details className="group">
                    <summary className="flex items-center justify-between py-2 font-medium text-gray-800 cursor-pointer hover:text-primary">
                      <span className="flex items-center gap-3">
                        <i className="fas fa-bowl-food" /> Alimentação Saudável
                      </span>
                      {/* chevron que gira */}
                      <i className="transition-transform duration-300 fas fa-chevron-down group-open:rotate-180" />
                    </summary>
                    <ul className="mt-2 ml-6 space-y-2 text-sm list-disc">
                      <li>
                        <Link to="/alimentacao-saudavel" onClick={onClose}>
                          Guia Completo
                        </Link>
                      </li>
                      <li>
                        <Link to="/alimentacao-inteligente" onClick={onClose}>
                          Alimentação Inteligente
                        </Link>
                      </li>
                      <li>
                        <Link to="/batata-doce-nutricao-canina" onClick={onClose}>
                          Batata-doce na Nutrição
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>

                {/* outro grupo */}
                <li className="border-b">
                  <details className="group">
                    <summary className="flex items-center justify-between py-2 font-medium text-gray-800 cursor-pointer hover:text-primary">
                      <span className="flex items-center gap-3">
                        <i className="fas fa-kit-medical" /> Cuidados Diários
                      </span>
                      <i className="transition-transform duration-300 fas fa-chevron-down group-open:rotate-180" />
                    </summary>
                    <ul className="mt-2 ml-6 space-y-2 text-sm list-disc">
                      <li>
                        <Link to="/cuidados-com-pets-no-inverno" onClick={onClose}>
                          Inverno: cuidados essenciais
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>

                {/* Utilidade Pública */}
                <li>
                  <details className="group">
                    <summary className="flex items-center justify-between py-2 font-medium text-gray-800 cursor-pointer hover:text-primary">
                      <span className="flex items-center gap-3">
                        <i className="fas fa-tree-city" /> Utilidade Pública
                      </span>
                      <i className="transition-transform duration-300 fas fa-chevron-down group-open:rotate-180" />
                    </summary>
                    <ul className="mt-2 ml-6 space-y-2 text-sm list-disc">
                      <li>
                        <Link to="/vagas-para-castracao-gratuita" onClick={onClose}>
                          Castração Gratuita 2025
                        </Link>
                      </li>
                      <li>
                        <Link to="/novo-hospital-veterinario-curitiba" onClick={onClose}>
                          Hosp. Vet. Curitiba
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

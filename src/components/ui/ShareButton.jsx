import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Alterado para WhatsApp

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const compartilharFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`,
      "_blank"
    );
  };

  const compartilharWhatsApp = () => {
    // Nova função para WhatsApp
    const message = `Confira este artigo nesse link: ${window.location.href}`;
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const copiarLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Falha ao copiar: ", err);
        alert("Não foi possível copiar o link");
      });
  };

  return (
    <div>
      <FadeIn delay={1.8}>
        <div className="py-8 my-10 text-center border-gray-200 border-y">
          <h3 className="mb-5 text-xl font-bold text-gray-900">
            Este conteúdo pode salvar vidas! Compartilhe:
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Botão WhatsApp */}
            <motion.button
              aria-label="Compartilhar no WhatsApp"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={compartilharWhatsApp}
              className="flex items-center gap-3 px-6 py-3 text-white rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-700" // Cores do WhatsApp
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" /> WhatsApp
            </motion.button>
            {/* Botão Facebook */}
            <motion.button
              aria-label="Compartilhar no Facebook"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={compartilharFacebook}
              className="flex items-center gap-3 px-6 py-3 text-white rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-blue-800"
            >
              <FontAwesomeIcon icon={faFacebookF} /> Facebook
            </motion.button>

            {/* Botão Copiar Link */}
            <motion.button
              aria-label={copied ? "Link copiado" : "Copiar link"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={copiarLink}
              className={`flex items-center gap-3 px-6 py-3 text-white rounded-lg shadow-md ${
                copied ? "bg-green-600" : "bg-gray-800"
              }`}
            >
              <FontAwesomeIcon icon={faCopy} />
              {copied ? "Copiado!" : "Copiar link"}
            </motion.button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default ShareButton;

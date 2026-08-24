import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
  const [instaCopied, setInstaCopied] = useState(false);

  const compartilharFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`,
      "_blank"
    );
  };

  const compartilharWhatsApp = () => {
    const message = `${window.location.href}\n\nConfira este artigo no Tribuna do Pet 🐾`;
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const compartilharInstagram = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Confira este artigo no Tribuna do Pet 🐾",
          url: window.location.href,
        });
        return;
      } catch (err) {
        if (err.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setInstaCopied(true);
      setTimeout(() => setInstaCopied(false), 3000);
      window.open("https://www.instagram.com/", "_blank");
    } catch {
      window.open("https://www.instagram.com/", "_blank");
    }
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
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
            {/* Botão WhatsApp */}
            <motion.button
              aria-label="Compartilhar no WhatsApp"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={compartilharWhatsApp}
              className="flex items-center justify-center gap-2.5 w-12 h-12 sm:w-auto sm:h-auto sm:px-6 sm:py-3 text-white rounded-2xl sm:rounded-xl shadow-md hover:shadow-lg bg-gradient-to-r from-green-500 to-green-700 transition-all"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl sm:text-lg" />
              <span className="hidden sm:inline font-semibold">WhatsApp</span>
            </motion.button>

            {/* Botão Instagram */}
            <motion.button
              aria-label="Compartilhar no Instagram"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={compartilharInstagram}
              className="flex items-center justify-center gap-2.5 w-12 h-12 sm:w-auto sm:h-auto sm:px-6 sm:py-3 text-white rounded-2xl sm:rounded-xl shadow-md hover:shadow-lg bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 transition-all"
            >
              <FontAwesomeIcon icon={instaCopied ? faCheck : faInstagram} className="text-xl sm:text-lg" />
              <span className="hidden sm:inline font-semibold">
                {instaCopied ? "Link Copiado!" : "Instagram"}
              </span>
            </motion.button>

            {/* Botão Facebook */}
            <motion.button
              aria-label="Compartilhar no Facebook"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={compartilharFacebook}
              className="flex items-center justify-center gap-2.5 w-12 h-12 sm:w-auto sm:h-auto sm:px-6 sm:py-3 text-white rounded-2xl sm:rounded-xl shadow-md hover:shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 transition-all"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-xl sm:text-lg" />
              <span className="hidden sm:inline font-semibold">Facebook</span>
            </motion.button>

            {/* Botão Copiar Link */}
            <motion.button
              aria-label={copied ? "Link copiado" : "Copiar link"}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={copiarLink}
              className={`flex items-center justify-center gap-2.5 w-12 h-12 sm:w-auto sm:h-auto sm:px-6 sm:py-3 text-white rounded-2xl sm:rounded-xl shadow-md hover:shadow-lg transition-all ${
                copied ? "bg-green-600" : "bg-gray-800 hover:bg-gray-900"
              }`}
            >
              <FontAwesomeIcon icon={copied ? faCheck : faCopy} className="text-xl sm:text-lg" />
              <span className="hidden sm:inline font-semibold">
                {copied ? "Copiado!" : "Copiar link"}
              </span>
            </motion.button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default ShareButton;

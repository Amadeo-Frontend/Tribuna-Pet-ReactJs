// src/services/email.js
import emailjs from "@emailjs/browser";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC;

// 🔸 Inicialize UMA vez, logo que o módulo for importado
emailjs.init({ publicKey: PUBLIC_KEY });

/**
 * Envia um e-mail ao “newsletter_signup” (EmailJS)
 * @param {string} email  Endereço do assinante
 * @returns {Promise<EmailJSResponseStatus>}
 */
export function sendNewsletter(email) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      user_email: email,   // variável usada no template
      reply_to:   email    // deixa “Responder” apontar p/ o usuário
    }
  );
}

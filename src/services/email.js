// src/services/email.js
import emailjs from "@emailjs/browser";

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE || process.env.VITE_EMAILJS_SERVICE;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE || process.env.VITE_EMAILJS_TEMPLATE;
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC || process.env.VITE_EMAILJS_PUBLIC;

if (typeof window !== "undefined" && PUBLIC_KEY) {
  try {
    emailjs.init({ publicKey: PUBLIC_KEY });
  } catch (e) {
    console.warn("EmailJS init warning:", e);
  }
}

/**
 * Envia um e-mail ao “newsletter_signup” (EmailJS)
 * @param {string} email  Endereço do assinante
 * @returns {Promise<EmailJSResponseStatus>}
 */
export function sendNewsletter(email) {
  if (typeof window === "undefined") return Promise.resolve();
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      user_email: email,   // variável usada no template
      reply_to:   email    // deixa “Responder” apontar p/ o usuário
    }
  );
}

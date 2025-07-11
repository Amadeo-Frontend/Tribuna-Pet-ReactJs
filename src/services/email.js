import emailjs from '@emailjs/browser';   // SDK oficial 2025 :contentReference[oaicite:0]{index=0}

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Envia um e-mail de inscrição de newsletter
 * @param {string} email – endereço digitado pelo usuário
 * @returns {Promise}    – resolve em sucesso ou erro do EmailJS
 */
export function sendNewsletter(email) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { email },                       // parâmetros do template
    { publicKey: PUBLIC_KEY }        // 4º arg = opções (SDK v4+) :contentReference[oaicite:1]{index=1}
  );
}

/*  Se você quiser inicializar uma vez só:
emailjs.init(PUBLIC_KEY);            // depois chame send(...) sem 4º parâmetro
*/

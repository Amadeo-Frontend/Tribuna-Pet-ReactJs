import emailjs from '@emailjs/browser';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Envia um e-mail de inscrição de newsletter
 * @param {string} email –
 * @returns {Promise}    
 */
export function sendNewsletter(email) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { email },                       
    { publicKey: PUBLIC_KEY }        
  );
}

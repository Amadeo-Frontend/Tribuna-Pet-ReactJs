// src/components/Newsletter/NewsletterForm.jsx
import { useState } from "react";
import { toast } from "react-toastify";
import CircleLoader from "react-spinners/CircleLoader";
import { sendNewsletter } from "../../services/email";

export default function NewsletterForm() {
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.user_email.value.trim();
    if (!email) return;

    setSending(true);
    try {
      await sendNewsletter(email);
      toast.success("Inscrição confirmada! 🎉");
      e.target.reset();
    } catch (err) {
      console.error(err);
      toast.error(`Erro: ${err?.text || err.message || "tente novamente"}`);
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
      aria-label="Formulário de assinatura"
    >
      <input
        autoComplete="email"
        type="email"
        name="user_email"
        required
        placeholder="seu@email.com"
        className="w-full px-4 py-2 rounded-lg sm:flex-1"
      />

      <button
        type="submit"
        disabled={sending}
        className="w-full px-6 py-2 text-white transition-opacity rounded-lg sm:w-auto bg-secondary hover:bg-primary/60 disabled:opacity-60"
      >
        {sending ? (
          <CircleLoader size={25} color="#0EA5E9" aria-label="carregando" />
        ) : (
          "Inscrever"
        )}
      </button>
    </form>
  );
}

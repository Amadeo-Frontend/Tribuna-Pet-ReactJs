import { useState } from "react";
import { toast } from "react-toastify";
import { sendNewsletter } from "../../services/email";

export default function NewsletterForm() {
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.user_email.value.trim();

    if (!email) return; // segurança extra

    setSending(true);
    try {
      await sendNewsletter(email);
      toast.success("Inscrição confirmada! 🎉");
      e.target.reset();
    } catch (err) {
      console.error(err);
      // Mostra a mensagem detalhada, se vier da API
      toast.error(`Erro: ${err?.text || err.message || "tente novamente"}`);
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-md gap-2"
      aria-label="Formulário de assinatura"
    >
      <input
        type="email"
        name="user_email"
        required
        placeholder="seu@email.com"
        className="flex-1 p-2 border rounded"
      />
      <button
        type="submit"
        disabled={sending}
        className="px-3 py-2 text-white rounded bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50"
      >
        {sending ? "Enviando…" : "Inscrever"}
      </button>
    </form>
  );
}

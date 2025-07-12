import { useState } from "react";
import { sendNewsletter } from "../../services/email";

export default function NewsletterForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const { value: email } = e.target.email;

    setStatus("sending");
    try {
      await sendNewsletter(email);
      setStatus("ok");
      e.target.reset();
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md gap-2">
      <input
        type="email"
        name="user_email"
        required
        placeholder="seu@email.com"
        className="flex-1 p-2 px-2 py-2 border rounded"
      />
      <button
        disabled={status === "sending"}
        className="px-3 py-2 text-white rounded bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50"
      >
        {status === "sending" ? "Enviando…" : "Inscrever"}
      </button>

      {status === "ok" && <span className="text-green-600">✓ Inscrito!</span>}
      {status === "error" && (
        <span className="text-red-600">Erro. Tente de novo.</span>
      )}
    </form>
  );
}

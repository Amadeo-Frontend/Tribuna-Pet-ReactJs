// src/components/Newsletter/NewsletterForm.jsx
"use client";

import { useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";

export default function NewsletterForm() {
  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.user_email.value.trim();
    if (!email) return;

    setSending(true);
    setStatusMsg({ type: "", text: "" });

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatusMsg({ type: "success", text: "Inscrição confirmada! 🎉" });
        e.target.reset();
      } else {
        setStatusMsg({
          type: "error",
          text: data.error || "Erro ao inscrever, tente novamente.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatusMsg({
        type: "error",
        text: "Erro de conexão, tente novamente.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="w-full">
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
          className="w-full px-4 py-3 text-gray-900 rounded-xl sm:flex-1 outline-none focus:ring-2 focus:ring-amber-400"
        />

        <button
          type="submit"
          disabled={sending}
          className="w-full px-6 py-3 font-bold text-white transition-all rounded-xl sm:w-auto bg-amber-500 hover:bg-amber-600 disabled:opacity-60 flex items-center justify-center min-w-[120px]"
        >
          {sending ? (
            <CircleLoader size={22} color="#ffffff" aria-label="carregando" />
          ) : (
            "Inscrever"
          )}
        </button>
      </form>

      {statusMsg.text && (
        <p
          className={`mt-3 text-sm font-medium ${
            statusMsg.type === "success" ? "text-green-300" : "text-red-300"
          }`}
        >
          {statusMsg.text}
        </p>
      )}
    </div>
  );
}

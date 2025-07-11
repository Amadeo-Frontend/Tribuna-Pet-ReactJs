// src/pages/NotFound.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-primary"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <img src="/404.gif" alt="404" className="mb-6 w-72" />
      <h1 className="mb-4 text-3xl font-bold">Ops! Página não encontrada.</h1>
      <Link to="/" className="underline text-secondary">
        Voltar para a Home
      </Link>
    </motion.main>
  );
}

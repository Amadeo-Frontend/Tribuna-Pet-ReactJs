import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import { Link } from "react-router-dom";

/** Lightweight UI primitives ------------------------------------------------*/
export const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-secondary text-white font-semibold shadow-md hover:bg-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 ${className}`}
  >
    {children}
  </button>
);

/** 404 Page ------------------------------------------------------------------*/
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8 bg-primary">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 font-extrabold text-7xl md:text-8xl text-secondary drop-shadow-lg"
      >
        404 <PawPrint size={64} strokeWidth={1.5} />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-xl text-xl text-center md:text-2xl text-slate-200"
      >
        Ops! Parece que este conteúdo fugiu para brincar com seu <span className="text-secondary">Pet.</span>
      </motion.p>


      <Link to="/" className="inline-block">
        <Button type="button" size="lg">
          Voltar para a Home
        </Button>
      </Link>
    </div>
  );
}

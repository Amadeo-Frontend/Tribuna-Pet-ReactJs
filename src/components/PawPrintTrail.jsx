"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const PAW_COLORS = [
  "#0EA5E9", // Azul Sky
  "#10B981", // Verde Emerald
  "#EC4899", // Rosa Pink
  "#F59E0B", // Âmbar
  "#8B5CF6", // Roxo
  "#EF4444", // Coral
  "#3B82F6", // Azul Royal
  "#14B8A6", // Teal
];

export default function PawPrintTrail() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-14 w-full" />;

  // Gera 24 pegadas formando duas trilhas contínuas de passos cruzados (Cão 1 e Cão 2)
  const paws = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    color: PAW_COLORS[i % PAW_COLORS.length],
    isRight: i % 2 === 1,
    row: i % 2, // 0 = Trilho superior, 1 = Trilho inferior
    delay: i * 0.22, // Passos rápidos e realistas
  }));

  return (
    <div className="relative w-full h-14 overflow-hidden flex items-center justify-between px-2 sm:px-8 select-none pointer-events-none">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {paws.map((paw) => (
          <motion.div
            key={paw.id}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{
              opacity: [0, 0.95, 0.95, 0],
              scale: [0.4, 1.05, 1, 0.5],
              y: paw.row === 0 ? [6, -4, 6] : [-4, 6, -4],
              x: [0, paw.isRight ? 3 : -3, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              repeatDelay: 0.8,
              delay: paw.delay,
              ease: "easeInOut",
            }}
            style={{
              color: paw.color,
              transform: `rotate(${paw.isRight ? "25deg" : "-25deg"})`,
            }}
            className="flex items-center justify-center filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              {/* Coxim principal */}
              <path d="M12 11.5c-2.4 0-4.3 1.8-4.3 4 0 1.5.8 2.5 2 2.5 1 0 1.6-.6 2.3-.6s1.3.6 2.3.6c1.2 0 2-1 2-2.5 0-2.2-1.9-4-4.3-4z" />
              {/* Dedos */}
              <circle cx="6.5" cy="9.5" r="1.8" />
              {/* Dedo 2 */}
              <circle cx="10" cy="6.5" r="1.9" />
              {/* Dedo 3 */}
              <circle cx="14" cy="6.5" r="1.9" />
              {/* Dedo 4 */}
              <circle cx="17.5" cy="9.5" r="1.8" />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

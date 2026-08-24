"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const PAW_COLORS = [
  "#0EA5E9", // Azul
  "#10B981", // Verde Emerald
  "#EC4899", // Rosa Pink
  "#F59E0B", // Âmbar / Laranja
  "#8B5CF6", // Roxo
  "#EF4444", // Vermelho Coral
];

export default function PawPrintTrail() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-10 w-full" />;

  // Gera 12 pegadas alternadas ao longo da largura
  const paws = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    color: PAW_COLORS[i % PAW_COLORS.length],
    isRight: i % 2 === 1,
    delay: i * 0.35, // Entrada em sequência
  }));

  return (
    <div className="relative w-full h-12 overflow-hidden flex items-center justify-between px-4 sm:px-12 select-none pointer-events-none">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        {paws.map((paw) => (
          <motion.div
            key={paw.id}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: [0, 0.9, 0.9, 0],
              scale: [0.5, 1, 1, 0.6],
              y: paw.isRight ? [4, -2, 4] : [-2, 4, -2],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatDelay: 1.2,
              delay: paw.delay,
              ease: "easeInOut",
            }}
            style={{
              color: paw.color,
              transform: `rotate(${paw.isRight ? "20deg" : "-20deg"})`,
            }}
            className="flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-sm"
            >
              {/* Coxim principal */}
              <path d="M12 11.5c-2.4 0-4.3 1.8-4.3 4 0 1.5.8 2.5 2 2.5 1 0 1.6-.6 2.3-.6s1.3.6 2.3.6c1.2 0 2-1 2-2.5 0-2.2-1.9-4-4.3-4z" />
              {/* Dedo 1 */}
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

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

export default function BorderPawTrail() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 16 patinhas distribuídas ao longo de todo o perímetro retangular
  const paws = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    color: PAW_COLORS[i % PAW_COLORS.length],
    isRight: i % 2 === 1,
    delay: i * 0.3,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-20">
      {paws.map((paw) => {
        // Posição no perímetro (0 a 100%)
        // Topo: 0-30%, Direita: 30-50%, Baixo: 50-80%, Esquerda: 80-100%
        const step = (paw.id / 16) * 100;
        
        let positionStyle = {};
        let baseRotation = 0;

        if (step < 30) {
          // Borda Superior (caminhando de lado para a direita)
          positionStyle = { top: "8px", left: `${(step / 30) * 100}%` };
          baseRotation = 90; // Virada de lado para a direita
        } else if (step < 50) {
          // Borda Direita (caminhando de lado para baixo)
          positionStyle = { right: "8px", top: `${((step - 30) / 20) * 100}%` };
          baseRotation = 180; // Virada de lado para baixo
        } else if (step < 80) {
          // Borda Inferior (caminhando de lado para a esquerda)
          positionStyle = { bottom: "8px", right: `${((step - 50) / 30) * 100}%` };
          baseRotation = 270; // Virada de lado para a esquerda
        } else {
          // Borda Esquerda (caminhando de lado para cima)
          positionStyle = { left: "8px", bottom: `${((step - 80) / 20) * 100}%` };
          baseRotation = 0; // Virada de lado para cima
        }

        const footOffset = paw.isRight ? 15 : -15;

        return (
          <motion.div
            key={paw.id}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{
              opacity: [0, 0.95, 0.95, 0],
              scale: [0.4, 1.05, 1, 0.5],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatDelay: 1.0,
              delay: paw.delay,
              ease: "easeInOut",
            }}
            style={{
              ...positionStyle,
              position: "absolute",
              color: paw.color,
              transform: `rotate(${baseRotation + footOffset}deg)`,
            }}
            className="flex items-center justify-center filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              {/* Coxim principal */}
              <path d="M12 11.5c-2.4 0-4.3 1.8-4.3 4 0 1.5.8 2.5 2 2.5 1 0 1.6-.6 2.3-.6s1.3.6 2.3.6c1.2 0 2-1 2-2.5 0-2.2-1.9-4-4.3-4z" />
              {/* Dedos */}
              <circle cx="6.5" cy="9.5" r="1.8" />
              <circle cx="10" cy="6.5" r="1.9" />
              <circle cx="14" cy="6.5" r="1.9" />
              <circle cx="17.5" cy="9.5" r="1.8" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}

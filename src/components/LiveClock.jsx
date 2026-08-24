"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-regular-svg-icons";

/**
 * Relógio em tempo real (HH:MM:SS) para o fuso de Brasília.
 */
export default function LiveClock({
  locale = "pt-BR",
  timeZone = "America/Sao_Paulo",
}) {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString(locale, { timeZone }));
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString(locale, { timeZone }));
    }, 1000);
    return () => clearInterval(id);
  }, [locale, timeZone]);

  return (
    <span className="flex items-center gap-1 font-mono min-w-[85px] inline-block" suppressHydrationWarning>
      <FontAwesomeIcon icon={faClock} />
      {time || "--:--:--"}
    </span>
  );
}

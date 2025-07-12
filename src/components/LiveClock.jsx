import { useState, useEffect } from "react";
// (opcional) se estiver usando o pacote oficial:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-regular-svg-icons";

/**
 * Relógio em tempo real (HH:MM:SS) para o fuso de Brasília.
 */
export default function LiveClock({
  locale = "pt-BR",
  timeZone = "America/Sao_Paulo",
}) {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString(locale, { timeZone })
  );

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString(locale, { timeZone }));
    }, 1000);
    return () => clearInterval(id); // limpa se o componente sumir
  }, [locale, timeZone]);

  return (
    <span className="flex items-center gap-1 font-mono">
      {/* ← escolha UMA das duas linhas abaixo */}
      <FontAwesomeIcon icon={faClock} />         {/* usando kit CDN já embutido */}
      {/* <FontAwesomeIcon icon={faClock} /> */} {/* se usa @fortawesome/react-fontawesome */}
      {time}
    </span>
  );
}

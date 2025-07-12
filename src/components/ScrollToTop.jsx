import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Sempre que o pathname mudar, rola a página para o topo.
 * Coloque este componente em algum lugar acima do <Routes/>.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Se preferir, use behavior: "smooth"
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null; // Não renderiza nada na UI
}

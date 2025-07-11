import { createContext, useState, useContext } from "react";
export const LoaderContext = createContext();
export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);    // true = mostra GIF

  /* setLoading('enter') ⇒ ativa,  setLoading('exit') ⇒ desativa */
  const start = () => setLoading(true);
  const stop  = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ loading, start, stop }}>
      {children}
    </LoaderContext.Provider>
  );
}
export const useLoader = () => useContext(LoaderContext);

import { motion, AnimatePresence } from "framer-motion";
import { useLoader } from "../contexts/LoaderContext";

export default function LoaderOverlay() {
  const { loading } = useLoader();
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center
                     bg-blue-900/90 backdrop-blur-sm"
        >
          <img src="/catloader2.gif" alt="Carregando…" className="w-40 h-40" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

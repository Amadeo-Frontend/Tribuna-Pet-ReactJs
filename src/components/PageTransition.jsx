import { motion } from "framer-motion";
import { useLoader } from "../contexts/LoaderContext";

export default function PageTransition({ children }) {
  const { start, stop } = useLoader();

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      onAnimationStart={start}       // acende loader
      onAnimationComplete={stop}     // apaga loader
    >
      {children}
    </motion.div>
  );
}

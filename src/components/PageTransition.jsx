"use client";

import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

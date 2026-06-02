import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Wraps a routed page so it fades/slides on enter & exit.
 * Used together with <AnimatePresence> keyed by pathname.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

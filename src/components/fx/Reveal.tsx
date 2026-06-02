import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  direction?: Direction;
  once?: boolean;
  className?: string;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 36 },
  down: { x: 0, y: -36 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll-triggered reveal. Fades + slides children into view the first time
 * they enter the viewport.
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  once = true,
  className,
}: Props) {
  const off = offsets[direction];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: off.x, y: off.y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

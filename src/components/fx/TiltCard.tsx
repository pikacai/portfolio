import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  intensity?: number;
  /** Show a cursor-following glow. */
  glow?: boolean;
}

/**
 * 3D tilt-on-hover card with a cursor-following spotlight glow.
 * Respectfully subtle — meant for project cards & feature tiles.
 */
export default function TiltCard({
  children,
  className = "",
  intensity = 8,
  glow = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });

  // glow position
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glowBg = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, rgba(13,140,255,0.16), rgba(175,22,244,0.10) 35%, transparent 60%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * intensity * 2);
    rx.set((0.5 - py) * intensity * 2);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
    gx.set(50);
    gy.set(50);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={`relative will-change-transform ${className}`}
    >
      {glow && (
        <motion.div
          aria-hidden
          style={{ background: glowBg }}
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
      {children}
    </motion.div>
  );
}

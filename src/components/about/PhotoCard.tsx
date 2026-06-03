import { motion } from "framer-motion";

interface Props {
  src: string;
  alt?: string;
  caption?: string;
  /** Slight resting tilt for a scrapbook feel, in degrees. */
  tilt?: number;
  className?: string;
  /** How the image fills its frame. Defaults to "contain". */
  fit?: "cover" | "contain";
  /** Optional fixed aspect ratio (Tailwind class, e.g. "aspect-[4/5]"). */
  ratio?: string;
}

/**
 * A polaroid-style, hoverable photo. Sits flat-ish, then lifts, straightens
 * and brightens on hover. Great for the timeline scrapbook.
 */
export default function PhotoCard({
  src,
  alt = "",
  caption,
  tilt = 0,
  className = "",
  fit = "contain",
  ratio = "",
}: Props) {
  return (
    <motion.div
      initial={{ rotate: tilt }}
      whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-2 shadow-soft hover:shadow-lift ${className}`}
    >
      <div className={`overflow-hidden rounded-xl ${ratio}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
            fit === "cover" ? "object-cover" : "object-contain"
          }`}
        />
      </div>
      {/* gradient sheen on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(220px_circle_at_var(--x,50%)_0%,rgba(13,140,255,0.12),transparent_60%)]" />
      {caption && (
        <p className="px-1 pb-1 pt-2 text-center text-xs font-medium text-ink-muted">
          {caption}
        </p>
      )}
    </motion.div>
  );
}

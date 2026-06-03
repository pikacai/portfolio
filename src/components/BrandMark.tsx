interface Props {
  /** Size in px (width = height). */
  size?: number;
  className?: string;
  /** Render the mark inside the brand-gradient tile (default) or as a bare glyph. */
  tile?: boolean;
}

/**
 * Pika Cai brand monogram — a folded "P" ribbon.
 *
 * The glyph is two concentric rounded "P" strokes sharing a stem, so the
 * counter reads as a second, nested P (the fold). Drawn with `currentColor`
 * so it inherits text color when used bare; on the gradient tile it's white.
 */
export default function BrandMark({ size = 36, className = "", tile = true }: Props) {
  const glyph = (
    <svg
      viewBox="0 0 96 96"
      width={tile ? size * 0.6 : size}
      height={tile ? size * 0.6 : size}
      fill="none"
      aria-hidden
    >
      {/* Outer P — bold rounded stroke */}
      <path
        d="M30 80 V34 a8 8 0 0 1 8-8 h14 a19 19 0 0 1 0 38 H40"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner fold — a smaller concentric P, offset inward, separated by a gap */}
      <path
        d="M45 80 V50 a3 3 0 0 1 3-3 h3 a8 8 0 0 0 0-16"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );

  if (!tile) {
    return <span className={`inline-flex text-ink ${className}`}>{glyph}</span>;
  }

  return (
    <span
      className={`grid place-items-center rounded-xl bg-black text-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    >
      {glyph}
    </span>
  );
}

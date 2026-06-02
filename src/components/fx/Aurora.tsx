interface Props {
  className?: string;
  /** Show the faint dotted grid overlay. */
  grid?: boolean;
}

/**
 * Soft animated aurora / gradient-mesh background.
 * Sits behind hero content. Pointer-events disabled.
 */
export default function Aurora({ className = "", grid = true }: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* blobs */}
      <div className="absolute -top-32 -left-24 h-[34rem] w-[34rem] rounded-full bg-brand-blue/30 blur-3xl animate-aurora" />
      <div
        className="absolute top-10 right-0 h-[30rem] w-[30rem] rounded-full bg-brand-violet/25 blur-3xl animate-aurora"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-[-8rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-orange/20 blur-3xl animate-aurora"
        style={{ animationDelay: "-12s" }}
      />
      <div
        className="absolute top-1/3 left-1/2 h-[24rem] w-[24rem] rounded-full bg-brand-cyan/20 blur-3xl animate-aurora"
        style={{ animationDelay: "-3s" }}
      />

      {/* dotted grid + soft top light */}
      {grid && <div className="absolute inset-0 grid-dots opacity-60" />}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/30 to-white" />
    </div>
  );
}

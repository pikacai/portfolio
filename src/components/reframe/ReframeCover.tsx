const TEAL = "#1CA9C9";

interface Props {
  className?: string;
}

/**
 * On-brand cover for the Reframe project card — light-blue surface, the real
 * Reframe app icon, and an onboarding stepper motif that completes on hover
 * (the parent Link carries the `group` class).
 */
export default function ReframeCover({ className = "h-64 sm:h-80" }: Props) {
  const steps = [0, 1, 2, 3];
  return (
    <div className={`relative w-full overflow-hidden bg-white ${className}`}>
      {/* faint dotted grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(rgba(11,11,18,0.06) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      {/* brand glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "rgba(28,169,201,0.25)" }}
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-5">
        {/* onboarding stepper */}
        <div className="flex items-center">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <span
                className="grid h-6 w-6 place-items-center rounded-full text-white transition-transform duration-500 group-hover:scale-110"
                style={{
                  background: TEAL,
                  opacity: 0.4 + i * 0.2,
                  transitionDelay: `${i * 0.06}s`,
                }}
              >
                {i === steps.length - 1 ? (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
              </span>
              {i < steps.length - 1 && (
                <span className="h-[2px] w-7 sm:w-9" style={{ background: TEAL, opacity: 0.3 }} />
              )}
            </div>
          ))}
        </div>

        {/* logo + wordmark */}
        <div className="flex items-center gap-3 transition-transform duration-500 group-hover:scale-105">
          <img
            src="/reframe/reframe_logo.png"
            alt="Reframe logo"
            className="h-12 w-12 rounded-[1rem] shadow-[0_12px_26px_-10px_rgba(30,127,194,0.6)]"
          />
          <span className="text-3xl font-bold tracking-tight text-[#22344A]">Reframe</span>
        </div>
        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#0E7C97]/70">
          Onboarding redesign
        </span>
      </div>
    </div>
  );
}

import { ScanLine } from "lucide-react";

const RED = "#E4002B";

interface Props {
  className?: string;
}

/**
 * White, on-brand cover for the EquipGo project card.
 * Calm by default; the scan line sweeps and the barcode pulses on card
 * hover (the parent Link carries the `group` class).
 */
export default function EquipGoCover({ className = "h-64 sm:h-80" }: Props) {
  const widths = [3, 1, 2, 4, 1, 3, 1, 2, 1, 4, 2, 1, 3, 1, 2];
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
        style={{ background: "rgba(228,0,43,0.15)" }}
      />
      {/* sweeping scan line on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-[2px] w-full opacity-0 shadow-[0_0_12px_rgba(228,0,43,0.6)] transition-all duration-700 ease-in-out group-hover:translate-y-[15rem] group-hover:opacity-100"
        style={{ background: RED }}
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-5">
        {/* barcode */}
        <div className="flex h-12 items-end gap-[3px]">
          {widths.map((w, i) => (
            <span
              key={i}
              className="h-full rounded-[1px] transition-all duration-300 group-hover:opacity-100"
              style={{ width: `${w}px`, background: RED, opacity: 0.4 + (i % 3) * 0.2 }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 transition-transform duration-500 group-hover:scale-105">
          <span
            className="grid h-9 w-9 place-items-center rounded-xl text-white"
            style={{ background: RED }}
          >
            <ScanLine className="h-5 w-5" />
          </span>
          <span className="text-3xl font-bold tracking-tight text-ink">EquipGo</span>
        </div>
        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-400">
          FDNY equipment tracking
        </span>
      </div>
    </div>
  );
}
